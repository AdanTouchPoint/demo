/*import payload from 'payload';

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
  data, // full document data
  req, // full express request
  previousDoc, // document data before updating the collection
  update, // name of the operation ie. 'create', 'update'
}) => {
  console.log(req.body.clientId)
  //aplicar = true ?  buscar  en currenttweets  si hay editar si no crear 
let obj=[]
  if(req.body.active == true ) {
     obj = await payload.find({
      collection: 'current-tweets', 
      where: {
        clientId: {
          equals: req.body.clientId,
        },
      },      
    });
let docs=obj.docs

let check = await docs.map(item=> {
  console.log('2')
  if(item.active === true ) {
    return 'Hay otra configuracion activada ,desactivala'
  }
})
console.log(check) 



}


/*
if(data.active === true ) {

let {clientId, id,Message } = doc
console.log(`${id }`)

const obj = await payload.find({
    collection: 'current-tweets', 
    where: {
      clientId: {
        equals: clientId,
      },
    },      
  });

console.log('awui')
//console.log(obj.docs[0].id)

if(obj.totalDocs > 0) {
  console.log('1')
    await payload.update({
      collection: 'current-tweets',
      id: obj.docs[0].id, // required
      data: { // required
        Message: Message,
        clientId: obj.clientId,
        active: true
      },
    })

  }
  else {
    console.log('2')
    await payload.create({
      collection: 'current-tweets',
      data: { // required
        Message: Message,
        clientId: clientId,
        active: true,
        tweetId: id
      },
    })

  }


  /*if(obj.lenght > 0){
    await payload.update({
      collection: 'current tweets',
      id: '507f1f77bcf86cd799439011', // required
      data: { // required
        Message: 'sure',
        clientId: 'maybe',
        active:''
      },
    })
  }


}
*/

  /*const io = require('../server')
  //convert json to html  from doc object 
  //send html 
  console.log(doc.Message)  
  io.emit(`TweetsData=${doc.clientId}`,doc) 
  return data;
}


module.exports={afterChangeTweetsDataHook, afterChangeHook, afterChangeMainDataHook,afterChangeEmailDataHook,afterChangeTYPDataHook} */