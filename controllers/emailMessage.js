const payload = require("payload");

const emailMessage = async (query) => {
    const content = await payload.find({
        collection: "emails",
        sort: "-updatedAt",
        limit: 1,
        depth: 0,
        where: {
          clientId: {
            equals: query.clientId,
          },
        },
      });
      return content
}
module.exports = emailMessage
