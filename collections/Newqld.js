import { isAdminOrSelf, isAdminOrSelfForAu } from "../access/isAdminOrSelf";

const Newqld = {
  slug: 'newqld',
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
      label: "Party",
      name: "party",
      type: "text",
    },
    {
      label: "Position",
      name: "position",
      type: "text",
    },
    {
      label: "Held by",
      name: "held by", // required
      type: "text", // required
      
    },
    {
      label: "Electorate",
      name: "electorate",
      type: "text",
    }
  ],
};

export default Newqld;
