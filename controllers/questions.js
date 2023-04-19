const payload = require("payload");

const questions = async (query) => {
    const content = await payload.find({
        collection: "questions",
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
module.exports = questions