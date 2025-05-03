import createPdf from "../utils/createPdf";
import { urlToBase64 } from "../utils/Conversiones";
import { useProductStore } from "../stores/ProductStore";

const InformeFullData = async (productos = [], output, productMap = {}) => {
  const { fetchProducts } = useProductStore.getState()
  const { dataJSON } = await fetchProducts()

  const productsArray = Array.isArray(dataJSON.message) ? dataJSON.message : []

  const logoEmpresa = await urlToBase64("https://res.cloudinary.com/dtmwybty7/image/upload/v1745726036/ittbiwpy4mhnpj2rcq5x.jpg");

  console.log("productMap:", productMap);
console.log("Primer producto:", productsArray[0]);
  const productosTableBody = [
    [
      { text: "Producto", style: "tProductsHeader" },
      { text: "Descripción", style: "tProductsHeader" },
      { text: "Categoría", style: "tProductsHeader" },
      { text: "Stock", style: "tProductsHeader" }
    ],
    ...productsArray.map(p => ([
      { text: p.productName || '', style: "tProductsBody" },
      { text: p.productDescription || '', style: "tProductsBody" },
      { text: productMap[p.productCategory] || 'N/A', style: "tProductsBody" },
      { text: p.productStock || '', style: "tProductsBody" }
    ]))
  ];

  const content = [
    {
      image: logoEmpresa,
      fit: [141.73, 56.692],
      alignment: "center"
    },
    {
      text: "REPORTE DE PRODUCTOS COMPLETO",
      style: "header",
      margin: [0, 10, 0, 10]
    },
    {
      margin: [0, 10, 0, 0],
      table: {
        headerRows: 1,
        widths: ["25%", "25%", "25%", "25%"],
        body: productosTableBody
      },
      layout: {
        hLineWidth: function (i) {
          return i === 1 ? 0.5 : 0;
        },
        vLineWidth: () => 0,
        hLineColor: () => "#a9a9a9"
      }
    },
    {
      text: `Total de productos listados: ${productsArray.length}`,
      style: "tTotals",
      alignment: "right",
      margin: [0, 10, 0, 0]
    }
  ];

  const styles = {
    header: {
      fontSize: 10,
      bold: true,
      alignment: "center",
    },
    tProductsHeader: {
      fontSize: 9,
      bold: true,
      fillColor: "#eeeeee"
    },
    tProductsBody: {
      fontSize: 8.5,
    },
    tTotals: {
      fontSize: 9,
      bold: true
    }
  };

  const response = await createPdf({ content, output, styles });
  return response;
};

export default InformeFullData;
