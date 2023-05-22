const payload = require("payload");

const mainContent = async (query) => {
    const content = await payload.find({
        collection: "paginas-principales",
        sort: "-updatedAt",
        limit: 1,
        where: {
          clientId: {
            equals: query.clientId,
          },
        },
      });
      return content
}
module.exports = mainContent