const Admins = {
    slug: 'admins',
    auth: true,
    admin: {
      useAsTitle: 'admins',
    },
    access: {
      read: () => true,
    },
    fields: [
      // Email added by default
      // Add more fields as needed
      {
        name: 'Name',
        type: 'text', 
    },
    {
      name: 'lastName',
      type: 'text', 
  },
  {
    name: 'City',
    type: 'text', 
  },
    ],
  };
  
  export default Admins;