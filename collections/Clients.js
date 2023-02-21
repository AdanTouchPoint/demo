const Clients = {
  slug: "clients",
  auth: true,
  admin: {
    useAsTitle: "clients",
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      label: {
        en: "postalcode",
        es: "codigo postal",
      },
      name: "PostalCode", // required
      type: "number", // required
      required: true,
    },
    {label: {
      en: "Email",
      es: "correo electronico",
    },
      name: "Email", // required
      type: "email", // required
      required: true,
    },
  ],
};

export default Clients;
