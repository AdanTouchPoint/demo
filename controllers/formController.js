const payload = require("payload");

const Forms = async (query) => {
    const content = await payload.find({
        collection: "form",
        sort: "-updatedAt",
        depth: 0,
        limit: 1,
        where: {
          clientId: {
            equals: query.clientId,
          },
        },
      });
      return content
}
module.exports = {Forms}