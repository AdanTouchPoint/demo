const payload = require("payload");

const mainContent = async (query) => {
    const content = await payload.find({
        collection: "paginas-principales",
        sort: "-updatedAt",
        depth: 1,
        limit: 1,
        where: {
          clientId: {
            equals: query.clientId,
          },
        },
      });
      delete content.docs[0].clientId;
      return content
}
module.exports = mainContent