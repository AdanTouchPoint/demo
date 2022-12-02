  

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

  

const afterChangeMainDataHook = async ({
  doc, // full document data
  req, // full express request
  previousDoc, // document data before updating the collection
  update, // name of the operation ie. 'create', 'update'
}) => {
  const io = require('../server')
  console.log('mainContent updated!!')
  console.log(doc)
  io.emit(`mainData=${doc.clientId}`,doc)
  return doc;
}

  

const afterChangeEmailDataHook = async ({
  doc, // full document data
  req, // full express request
  previousDoc, // document data before updating the collection
  update, // name of the operation ie. 'create', 'update'
}) => {
  const io = require('../server')
//convert json to html  from doc object 
//send html 

  console.log(doc)
  io.emit(`emailData=${doc.clientId}`,doc)
  return doc;
}

  

const afterChangeTYPDataHook = async ({
  doc, // full document data
  req, // full express request
  previousDoc, // document data before updating the collection
  update, // name of the operation ie. 'create', 'update'
}) => {
  const io = require('../server')
  //convert json to html  from doc object 
  //send html 
  console.log(doc)
  io.emit(`TYPData=${doc.clientId}`,doc)
  return doc;
}

const afterChangeTweetsDataHook = async ({
  doc, // full document data
  req, // full express request
  previousDoc, // document data before updating the collection
  update, // name of the operation ie. 'create', 'update'
}) => {
  const io = require('../server')
  //convert json to html  from doc object 
  //send html 
  console.log(doc)
  io.emit(`TYPData=${doc.clientId}`,doc)
  return doc;
}


module.exports={afterChangeTweetsDataHook, afterChangeHook, afterChangeMainDataHook,afterChangeEmailDataHook,afterChangeTYPDataHook}