import createPdfHistory from "../utils/createPdfHistory";
import { urlToBase64 } from "../utils/Conversiones";
import { useEntryProductRegister } from "../stores/EntryProductRegisterStore";

const InformeDataByRangeDate = async (historialProductos = [], output, productMap = {}) => {

  const productsArray = Array.isArray(historialProductos) ? historialProductos : [];

  const logoEmpresa = await urlToBase64("https://res.cloudinary.com/dtmwybty7/image/upload/v1745726036/ittbiwpy4mhnpj2rcq5x.jpg");

  const productosTableBody = [
    [
      { text: "movementDate", style: "tProductsHeader" },
      { text: "movementType", style: "tProductsHeader" },
      { text: "count", style: "tProductsHeader" },
      { text: "description", style: "tProductsHeader" },
      {text: "productId", style: "tProductsHeader"}
    ],
    ...productsArray.map(p => ([
      { text: p.movementDate || '', style: "tProductsBody" },
      { text: p.movementType || '', style: "tProductsBody" },
      { text: p.count || 'N/A', style: "tProductsBody" },
      { text: p.description || 'N/A', style: "tProductsBody" },
      {text: productMap[p.productId] || p.productId || 'N/A', style: "tProductsBody"}
    ]))
  ];

  const content = [
    {
      image: logoEmpresa,
      fit: [141.73, 56.692],
      alignment: "center"
    },
    {
      text: "REPORTE DE MOVIMIENTOS DE PRODUCTOS",
      style: "header",
      margin: [0, 10, 0, 10]
    },
    {
      margin: [0, 10, 0, 0],
      table: {
        headerRows: 1,
        widths: ["12%", "12%", "7%", "20%" , "20%"],
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

  const response = await createPdfHistory({ content, output, styles });
  return response;
};

export default InformeDataByRangeDate;