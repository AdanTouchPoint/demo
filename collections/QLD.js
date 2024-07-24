import { isAdminOrSelf, isAdminOrSelfForAu } from "../access/isAdminOrSelf";

const QLD = {
  slug: 'qlds',
  admin: {
    listSearchableFields: ["name","state","email","party"],
    description: "Aqui puedes agregar, editar o eliminar  a los representates",
  },
  access: {
    // Only admins can create users
    create: isAdminOrSelf,
    // Admins can read all, but any other logged in user can only read themselves
    read: ()=> false,
    // Admins can update all, but any other logged in user can only update themselves
    update: isAdminOrSelf,
    // Admins can update all, but any other logged in user can only update themselves
    delete: isAdminOrSelf,
  },
  fields: [
    {
      label: "Name",
      name: "name",
      type: "text",
      required: true,
    },
    {
      label: "Phone",
      name: "phone",
      type: "text",
      required: true,
    },
    {
      label: "Addres",
      name: "addres",
      type: "text",
    },
    {
      label: "State",
      name: "state", // required
      type: "text", // required
      
    },
    {
      label: "City",
      name: "city",
      type: "text",
    },
    {
      label: "LabelPostCode",
      name: "labelpostcode",
      type: "text",
    },
    {
      label: "Party",
      name: "party",
      type: "text",
    },
    {
      label:'Email',
      name: "email",
      type: "email",
    },
    {
      label: "Twitter",
      name: "twitter",
      type: "text",
    },
    {
      label: "Type",
      name: "govt_type",
      type: "text",
    },
    {
        label:'Vote type',
        name: "vote_type",
        type:"text"
    },
    {
        label:'Electorates',
        name: "electorates",
        type:"text"
    },
   
  ],
};

export default QLD;
