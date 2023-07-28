const payload = require("payload");

const Confs = async (query) => {
    const content = await payload.find({
        collection: "page-config",
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
module.exports = {Confs}