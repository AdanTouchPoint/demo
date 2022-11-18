const Clients = {
    slug: 'clients',
    auth: true,
    admin: {
      useAsTitle: 'clients',
    },
    access: {
      read: () => true,
    },
    fields: [
        {
          name: 'PostalCode', // required
          type: 'number', // required
          required: true,
        },
        {
            name: 'Email', // required
            type: 'email', // required
            required: true,
          }
      ]
  }
  
  export default Clients;