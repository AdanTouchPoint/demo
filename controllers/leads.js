const payload = require("payload");

const createLeads = async (query) => {
    const {
        firstName,
        postalcode,
        emailData,
        representative,
        emailMessage,
        city,
        party,
        sended,
        clientId,
      } = query;
    const leads = await payload.create({
        collection: "conversiones", // required
        data: {
          // required
          names: firstName,
          postalcode: postalcode,
          contact: emailData,
          representative: representative,
          emailMessage: emailMessage,
          city: city,
          party: party,
          clientId: clientId,
          sended: sended,
        },
        overrideAccess: true,
      });
      return leads
}

const getAllLeads = async (query) => {
    const leads = await payload.find({
        collection: "conversiones",
        sort: "-updatedAt",
        limit: 0,
        depth: 0,
        where: {
          clientId: {
            equals: query.clientId,
          },
        },
      });
}

module.exports = { createLeads,getAllLeads}