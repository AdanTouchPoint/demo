const payload = require("payload");

const representativesmxByCP = async (query) => {
  console.log(query)
    const content = await payload.find({
        collection: "diputados-y-senadores",
        sort: "-updatedAt",
        depth: 0,
        where: {
          clientId: {
            equals: query.clientId,
          },
          and: [
            {
              postalcode: {
                equals: query.postalcode,
              },
            },
          ],
        },
      });
      return content
}

const representativesmxByState = async (query) => {
    const content = await payload.find({
        collection: "diputados-y-senadores",
        sort: "-updatedAt",
        depth: 0,
        where: {
          clientId: {
            equals: query.clientId,
          },
          and: [
            {
              postalcode: {
                equals: query.state,
              },
            },
          ],
        },
      });
      return content
}
const getAll = async (query) => {
    const content = await payload.find({
        collection: "diputados-y-senadores",
        sort: "-updatedAt",
        limit: 0,
        where: {
          clientId: {
            equals: query.clientId,
          },
        },
      });
}

module.exports = {representativesmxByCP,representativesmxByState, getAll}