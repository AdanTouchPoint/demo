const payload = require("payload");

const getDivision = async (el) => {
  const {clientId, division} = el
  console.log(clientId, division)
    let content = await payload.find({
      collection: "senators-and-mps",
      sort: "-updatedAt",
      depth: 0,
      limit: 0,
      where: {
        clientId: {
          equals: clientId,
        },
        and: [
          {
            electorates: {
              equals: division,
            },
          },
        ],
      },
    });
    
    let data = content.docs;
    console.log(data)
    return data;
  };
  const getElectorate = async (query) => {
    const {clientId, postcode} = query
    console.log('here')
    const content = await payload.find({
      collection: "electorates",
      sort: "-updatedAt",
      depth: 0,
      where: {
        clientId: {
          equals: clientId,
        },
        and: [
          {
            postcode: {
              equals: postcode,
            },
          },
        ],
      },
    });
    let data = content.docs;
    return data;
  };

  const getAll = async (query) => {
    const content = await payload.find({
        collection: "senators-and-mps",
        sort: "-updatedAt",
        limit: 0,
        depth: 0,
        where: {
          clientId: {
            equals: query.clientId,
          },
        },
      });
      return content
  }
  module.exports = {getDivision,getElectorate,getAll}