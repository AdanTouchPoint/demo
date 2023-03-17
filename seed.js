import  { Payload }  from "payload";

const dataSet =[]

export const seed = async (payload = Payload) => {


  const data =  dataSet.map( element => {
    payload.create({
      collection: 'senators-and-mps',
      data: {
        clientId:element.clientId,
        labelpostcode: element.LabelPostCode?.toString(),
        division: element.division,
        name: element.Name,
        phone: element.Phone,
        addres: element.Addres,
        state: element.State,
        city: element.City,
        party: element.Party,
        email: element.email,
        twitter: element.twitter,
        govt_type: element.govt_type,
        vote_type: element.vote_type,
        electorates: element.Electorates,
      }
    })
  })
  
  return data

  /*const data = await dataSet.map( element => {
    payload.create({
      collection: 'electorates',
      data: {
        clientId:element.clientId,
        postcode: element.postcode,
        division: element.division,
      }
    })

  })*/

  // Local API methods skip all access control by default
  // so we can easily create an admin user directly in init

/*  const data = await dataSet.map( element => {
    payload.create({
      collection: 'diputados-y-senadores',
      data: {
        clientId:element.clientId,
        lastName: element.Apellidos,
        name: element.Nombre,
        party: element.Partido,
        phone: element.Telefono,
        contact: element.Email,
        state: element.Estado,
        facebook:element.Facebook,
        twitter: element.Twitter,
        instagram: element.Instagram
      }
    })

  }) */

/*
  // This user will be created with the default client of `editor`
  await payload.create({
    collection: 'users',
    data: {
      email: 'client500@payloadcms.com',
      password: 'client123',
      name: 'client500',
      lastName: '500',
      roles: 'client'
    }
  })

  // This pageContent will be created
  await payload.create({
    collection: 'pageContent',
    data: {
        mainTitle: 'site100',
        instructions: 'site100',
        findRepButton: 'site100',
        mpLabelList: 'site100',
        senLabelList: 'site100',
        subjectEmail:'site100',
        messageEmail:'site100',
        sendButtonEmail:'site100',
        thankYouMessage:'site100',
        repeatButtonTyp:'site100'
      }
  })

   // This user will be created with the default client of `editor`
   await payload.create({
    collection: 'users',
    data: {
      email: 'demo-antonio@tpmcms.com',
      password: 'demo1234',
      name: 'antonio',
      lastName: 'demo',
      roles: 'client'
    }
  })
  
*/

}


//copy in payload.config.js to use this script
/*onInit: async (payload) => {
    await seed(payload);
  },*/