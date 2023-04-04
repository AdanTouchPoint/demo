const fetch = require("node-fetch");
const ExcelJS = require("exceljs");
const Queue = require("bull");
let REDIS_URL = process.env.REDIS_URL || "redis://127.0.0.1:6379";
const queueXlsEmail = new Queue("xls-email", REDIS_URL);

queueXlsEmail.process(async (job) => {
  const { clientId } = job.data;

  try {
    // Obtener los datos de leads del endpoint
    const leads = await payload.find({
      collection: "conversiones",
      sort: "-updatedAt",
      limit: 0,
      depth: 0,
      where: {
        clientId: {
          equals: clientId,
        },
      },
    });

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
    ];
    leads.forEach((lead) => {
      worksheet.addRow({
        name: lead.name,
        email: lead.email,
        phone: lead.phone,
        postalcode: lead.postalcode,
        representative: lead.representative,
        subject: lead.subject,
        message: lead.message,
        city: lead.city,
        party: lead.party,
        emailsucces: lead.sended
      });
    });

    // Guardar el archivo de Excel en una variable
    const buffer = await workbook.xlsx.writeBuffer();

  } catch (error) {
    console.error(error);
  }
});

// Función para obtener los leads a partir del ID de cliente

module.exports = { queueXlsEmail };
