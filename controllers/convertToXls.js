const payload = require("payload");
const ExcelJS = require("exceljs");


const processExcel = async (clientId) => {
  try {
    // Obtener los datos de leads del endpoint
    const leadsReq = await payload.find({
      collection: "conversiones",
      sort: "-updatedAt",
      limit: 5000,
      depth: 0,
      where: {
        clientId: {
          equals: clientId,
        },
      },
    });
    console.log('process');
    const leads = leadsReq.docs;
    // Crear un archivo de Excel a partir de los datos de leads
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Leads");
    worksheet.columns = [
      { header: "Names", key: "names" },
      { header: "Email", key: "contact" },
      { header: "Postal Code ", key: "postalcode" },
      { header: "Representative ", key: "representative" },
      { header: "Subject ", key: "subject" },
      { header: "Message ", key: "emailMessage" },
      { header: "City ", key: "city" },
      { header: "Party", key: "party" },
      { header: "Email success", key: "sended" },
      {header: "CreatedAt", key: "createdAt"}
    ];
    leads.forEach((lead) => {
      worksheet.addRow({
        names: lead.names,
        contact: lead.contact,
        postalcode: lead.postalcode,
        representative: lead.representative,
        subject: lead.subject,
        emailMessage: lead.emailMessage,
        city: lead.city,
        party: lead.party,
        sended: lead.sended,
        createdAt: lead.createdAt
      });
    });
    // Guardar el archivo de Excel en una variable
    const buffer = await workbook.xlsx.writeBuffer();
    return buffer
  } catch (error) {
    console.error(error);
  }
}
module.exports = { processExcel };
