  

const afterChangeHook = async ({
  doc, // full document data
  req, // full express request
  previousDoc, // document data before updating the collection
  update, // name of the operation ie. 'create', 'update'
}) => {
  const io = require('../server')
  console.log(doc)
  io.emit(`pageContent=${doc.clientId}`,doc)
  return doc;
}

export default afterChangeHook