const payload = require("payload");

const getDivisionStates = async (el, query) => {
  let content = await payload.find({
    collection: query.state,
    sort: "-updatedAt",
    depth: 0,
    limit: 0,
    where: {
      electorates: {
        equals: el.division,
      },
    },
  });
  let data = content.docs;
  return data;
};
const getRepresentativesByPostalCode = async (query) => {
  try {
    console.log(query);
    const { state, postcode } = query;
    const result = await payload.collections[`${state}`].Model.aggregate([
      { $match: { labelpostcode: postcode } },
      {
        $group: {
          _id: "$email",
          documento: { $first: "$$ROOT" },
        },
      },
      { $replaceRoot: { newRoot: "$documento" } },
    ]);
    console.log(result);
    return result;
  } catch (error) {
    return error;
  }
};
const getRepresentativesByElectorate = async (el, query) => {
  try {
    const { state } = query;
    const result = await payload.collections[`${state}`].Model.aggregate([
      { $match: { electorates: el.division } },
      {
        $group: {
          _id: "$email",
          documento: { $first: "$$ROOT" },
        },
      },
      { $replaceRoot: { newRoot: "$documento" } },
    ]);
    console.log(result);
    return result;
  } catch (error) {
    return error;
  }
};

const getElectorateByPostalCode = async (query) => {
  try {
    console.log(query)
    const { state, postcode } = query;
    const result = await payload.collections[
      `${state}_electorates`].Model.aggregate([
      {
        $match: { postcode: postcode, division: { $exists: true, $ne: null } },
      },
      {
        $group: {
          _id: "$division",
          documento: { $first: "$$ROOT" },
        },
      },
      { $replaceRoot: { newRoot: "$documento" } },
    ]);
    console.log(result);
    return result;
  } catch (error) {
    return error;
  }
};
const getElectorateStates = async (query) => {
  const { postcode, state } = query;
  console.log(`${state}_electorates`);
  const content = await payload.find({
    collection: `${state}_electorates`,
    sort: "-updatedAt",
    depth: 0,
    limit: 0,
    where: {
      postcode: {
        equals: postcode,
      },
    },
  });
  let data = content.docs;
  return data;
};

const getAllDemo = async (query) => {
  const content = await payload.find({
    collection: "senators-and-mps-demo",
    sort: "-updatedAt",
    limit: 0,
    depth: 0,
    where: {
      clientId: {
        equals: query.clientId,
      },
    },
  });
  return content;
};

const getDivisionDemo = async (el) => {
  const { clientId, division } = el;
  console.log(clientId, division);
  const result = await payload.collections[
    "senators-and-mps-demo"
  ].Model.aggregate([
    { $match: { electorates: el.division } },
    {
      $group: {
        _id: "$email",
        documento: { $first: "$$ROOT" },
      },
    },
    { $replaceRoot: { newRoot: "$documento" } },
  ]);
  //console.log(result)
  return result;
};
const getElectorateDemo = async (query) => {
  const { clientId, postcode } = query;
  console.log("here");
  const result = await payload.collections["electorates-demo"].Model.aggregate([
    { $match: { postcode: postcode, division: { $exists: true, $ne: null } } },
    {
      $group: {
        _id: "$division",
        documento: { $first: "$$ROOT" },
      },
    },
    { $replaceRoot: { newRoot: "$documento" } },
  ]);
  //console.log(result)
  return result;
};
const getRepsByStateDemo = async (query) => {
  console.log(query[0].state);
  const result = await payload.collections[
    "senators-and-mps-demo"
  ].Model.aggregate([
    { $match: { state: query[0]?.state } },
    {
      $group: {
        _id: "$email",
        documento: { $first: "$$ROOT" },
      },
    },
    { $replaceRoot: { newRoot: "$documento" } },
  ]);
  //console.log(result)
  return result;
};
const representativesAusByCP = async (query) => {
  console.log(query);
  const content = await payload.find({
    collection: "senators-and-mps",
    sort: "-updatedAt",
    depth: 0,
    limit: 0,
    where: {
      clientId: {
        equals: query.clientId,
      },
      and: [
        {
          labelpostcode: {
            equals: query.labelpostcode,
          },
        },
      ],
    },
  });
  //console.log(content)
  return content;
};

const getDivision = async (el) => {
  const { clientId, division } = el;
  console.log(clientId, division);
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
  //console.log(data)
  return data;
};
const getElectorate = async (query) => {
  const { clientId, postcode } = query;
  console.log("here");
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

const getAllByState = async (query) => {
  console.log(query);
  const content = await payload.find({
    collection: "senators-and-mps",
    sort: "-updatedAt",
    limit: 0,
    depth: 0,
    where: {
      clientId: {
        equals: query.clientId,
      },
      and: [
        {
          state: {
            equals: query.state,
          },
        },
      ],
    },
  });
  return content;
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
  return content;
};
const getElectoratesbyCp = async (query) => {
  const { postcode } = query;
  console.log("here");
  const result = await payload.collections["qlds_electorates"].Model.aggregate([
    { $match: { postcode: postcode, division: { $exists: true, $ne: null } } },
    {
      $group: {
        _id: "$division",
        documento: { $first: "$$ROOT" },
      },
    },
    { $replaceRoot: { newRoot: "$documento" } },
  ]);
  //console.log(result)
  return result;
};
const getRepsByELectorate = async (query) => {
  console.log(query);
  const result = await payload.collections[
    "qlds"
  ].Model.aggregate([
    { $match: { electorates: { $in: query } } },
    {
      $group: {
        _id: "$email",
        documento: { $first: "$$ROOT" },
      },
    },
    { $replaceRoot: { newRoot: "$documento" } },
  ]);
  console.log(result)
  return result;
};
const getQLDREPS = async (query) => {
  console.log(query)
  const result = await payload.collections[
    "newqld"
  ].Model.aggregate([
    { $match: { Electorate: { $in: query } } }
  ]);
  console.log(result)
  return result;
};

module.exports = {
  getElectoratesbyCp,
  getRepsByELectorate,
  getRepsByStateDemo,
  getAllDemo,
  getDivision,
  getElectorate,
  getAll,
  representativesAusByCP,
  getDivisionDemo,
  getElectorateDemo,
  getAllByState,
  getDivisionStates,
  getElectorateStates,
  getElectorateByPostalCode,
  getRepresentativesByElectorate,
  getRepresentativesByPostalCode,
  getQLDREPS
};
