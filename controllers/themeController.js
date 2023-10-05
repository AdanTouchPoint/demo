const payload = require("payload");

const Theme = async (query) => {
    console.log(query.clientId)
    const content = await payload.find({
        collection: "theme",
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
module.exports = {Theme}