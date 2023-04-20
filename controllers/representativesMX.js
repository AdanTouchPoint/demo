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
  const {clientId, state} =  query
    const content = await payload.find({
        collection: "diputados-y-senadores",
        sort: "-updatedAt",
        depth: 0,
        limit: 0,
        where: {
          clientId: {
            equals: clientId,
          },
          and: [
            {
              state: {
                equals: state,
              },
            },
          ],
        },
      });
      return content
}
const getAll = async (query) => {
  const { clientId } = query 
    const content = await payload.find({
        collection: "diputados-y-senadores",
        sort: "-updatedAt",
        limit: 0,
        where: {
          clientId: {
            equals: clientId,
          },
        },
      });
      return content
}

module.exports = {representativesmxByCP,representativesmxByState, getAll}