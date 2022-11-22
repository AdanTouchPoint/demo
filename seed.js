import  { Payload }  from "payload";


export const seed = async (payload = Payload) => {

  // Local API methods skip all access control by default
  // so we can easily create an admin user directly in init
  await payload.create({
    collection: 'users',
    data: {
      email: 'dev200@payloadcms.com',
      password: 'test200',
      name: 'Payload200',
      lastName: 'CMS200',
      roles: 'admin'
    }
  })

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


}