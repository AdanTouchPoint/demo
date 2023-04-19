const payload = require("payload");

const typMessage = async (query) => {
    const content = await payload.find({
        collection: "mensaje-de-agradecimientos",
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
module.exports = typMessage
