import createPdf from "../utils/createPdf";
import { urlToBase64 } from "../utils/Conversiones";

const InformeDataByRangeDate = async (output) => {
  const logoEmpresa = await urlToBase64("https://res.cloudinary.com/dtmwybty7/image/upload/v1745726036/ittbiwpy4mhnpj2rcq5x.jpg");

  const productosTableBody = [
    [
      {
        text: "Codigo - Descripcion",
        colSpan: 4,
        style: "tProductsHeader"
      },
      {},
      {},
      {}
    ],
    [
      { text: "Cant.", style: "tProductsHeader" },
      { text: "UM.", style: "tProductsHeader", alignment: "center" },
      { text: "Precio", style: "tProductsHeader", alignment: "right" },
      { text: "Total", style: "tProductsHeader", alignment: "right" }
    ],
    [
      { text: `"A001" - Producto de prueba 1`, style: "tProductsBody", colSpan: 4 },
      {},
      {},
      {}
    ],
    [
      { text: "2", style: "tProductsBody", alignment: "center" },
      { text: "pz", style: "tProductsBody", alignment: "center" },
      { text: "10.00", style: "tProductsBody", alignment: "right" },
      { text: "20.00", style: "tProductsBody", alignment: "right" }
    ],
    [
      { text: `"A002" - Producto de prueba 2`, style: "tProductsBody", colSpan: 4 },
      {},
      {},
      {}
    ],
    [
      { text: "1", style: "tProductsBody", alignment: "center" },
      { text: "pz", style: "tProductsBody", alignment: "center" },
      { text: "25.00", style: "tProductsBody", alignment: "right" },
      { text: "25.00", style: "tProductsBody", alignment: "right" }
    ]
  ];

  const content = [
    {
      image: logoEmpresa,
      fit: [141.73, 56.692],
      alignment: "center"
    },
    {
      text: "EMPRESA DE PRUEBA S.A.",
      style: "header",
      margin: [0, 10, 0, 0]
    },
    {
      text: "CALLE FICTICIA 123 - ZONA INDUSTRIAL",
      style: "header"
    },
    {
      text: "RUC: 12345678901",
      style: "header"
    },
    {
      text: "Factura Electronica",
      style: "header",
      margin: [0, 10, 0, 2.25]
    },
    {
      text: "F001-00000001",
      style: "header",
      margin: [0, 2.25, 0, 0]
    },
    {
      table: {
        widths: ["25%", "35%", "15%", "25%"],
        body: [
          [
            { text: "Fecha", style: "tHeaderLabel" },
            { text: "30/04/2025", style: "tClientValue" },
            { text: "Hora", style: "tHeaderLabel" },
            { text: "12:34:56", style: "tClientValue" }
          ],
          [
            { text: "Cajero:", style: "tHeaderLabel" },
            { text: "Carlos Pérez", style: "tClientValue" },
            {},
            {}
          ],
          [
            { text: "Vendedor:", style: "tHeaderLabel" },
            { text: "Ana García", style: "tClientValue", colSpan: 3 },
            {},
            {}
          ],
          [
            {
              text: "Cliente",
              style: "tTotals",
              alignment: "center",
              colSpan: 4,
              margin: [0, 6, 0, 0],
            },
            {},
            {},
            {}
          ],
          [
            { text: "Nombres:", style: "tClientLabel" },
            { text: "Cliente de Ejemplo S.A.", style: "tClientValue", colSpan: 3 },
            {},
            {}
          ],
          [
            { text: "DOC.ID:", style: "tClientLabel" },
            { text: "987654321", style: "tClientValue", colSpan: 3 },
            {},
            {}
          ],
          [
            { text: "DIRECC:", style: "tClientLabel" },
            { text: "Av. Imaginaria 456, Ciudad", style: "tClientValue", colSpan: 3 },
            {},
            {}
          ]
        ]
      },
      layout: "noBorders"
    },
    {
      margin: [0, 10, 0, 0],
      table: {
        widths: ["20%", "20%", "30%", "30%"],
        headerRows: 2,
        body: productosTableBody
      },
      layout: {
        hLineWidth: function (i, node) {
          return i == 2 ? 0.5 : 0;
        },
        vLineWidth: function (i, node) {
          return 0;
        },
        hLineColor: function () {
          return "#a9a9a9";
        }
      }
    },
    {
      margin: [0, 10, 0, 0],
      table: {
        widths: ["25%", "35%", "15%", "25%"],
        body: [
          [
            { text: "SubTotal:", style: "tTotals", colSpan: 2 },
            {},
            { text: "45.00", style: "tTotals", colSpan: 2 },
            {}
          ],
          [
            { text: "I.G.V:", style: "tTotals", colSpan: 2 },
            {},
            { text: "8.10", style: "tTotals", colSpan: 2 },
            {}
          ],
          [
            { text: "Total:", style: "tTotals", colSpan: 2 },
            {},
            { text: "53.10", style: "tTotals", colSpan: 2 },
            {}
          ],
          [
            {
              text: "Total en letras:",
              style: "tTotals",
              alignment: "left",
              colSpan: 4,
              margin: [0, 4, 0, 0]
            },
            {},
            {},
            {}
          ],
          [
            {
              text: "Son cincuenta y tres quetzales con diez centavos",
              style: "tProductsBody",
              colSpan: 4,
            },
            {},
            {},
            {}
          ],
          [
            {
              text: "Formas de pago:",
              style: "tTotals",
              alignment: "left",
              colSpan: 4,
              margin: [0, 4, 0, 0]
            },
            {},
            {},
            {}
          ],
          [
            {
              text: "Efectivo",
              style: "tProductsBody",
              colSpan: 4,
            },
            {},
            {},
            {}
          ],
          [
            { text: "Efectivo", style: "tTotals", colSpan: 2 },
            {},
            { text: "53.10", style: "tTotals", colSpan: 2 },
            {}
          ]
        ]
      },
      layout: "noBorders"
    },
    {
      text: "Estimado cliente, gracias por su compra. Tiene hasta 7 días para devoluciones.",
      style: "text",
      alignment: "justify",
      margin: [0, 5]
    },
    {
      stack: [
        {
          qr: "987654321|30/04/2025|12:34:56|",
          fit: 115,
          alignment: "center",
          eccLevel: "Q",
          margin: [0, 10, 0, 3]
        },
        {
          text: "Representación del comprobante original. Puede ser consultado aquí",
          style: "text"
        },
        {
          text: "https://ejemplo.com/factura",
          link: "https://ejemplo.com/factura",
          style: "link"
        }
      ]
    }
  ];

  const styles = {
    header: {
      fontSize: 9,
      bold: true,
      alignment: "center",
    },
    tHeaderLabel: {
      fontSize: 8,
      alignment: "right",
    },
    tHeaderValue: {
      fontSize: 8,
      bold: true,
    },
    tProductsHeader: {
      fontSize: 8.5,
      bold: true,
    },
    tProductsBody: {
      fontSize: 9,
    },
    tTotals: {
      fontSize: 9,
      bold: true,
      alignment: "right",
    },
    tClientLabel: {
      fontSize: 8,
      alignment: "right",
    },
    tClientValue: {
      fontSize: 8,
      bold: true,
    },
    text: {
      fontSize: 8,
      alignment: "center",
    },
    link: {
      fontSize: 8,
      bold: true,
      margin: [0, 0, 0, 4],
      alignment: "center",
    },
  };

  const response = await createPdf({ content: content, output, styles });
  return response;
};

export default InformeDataByRangeDate;
