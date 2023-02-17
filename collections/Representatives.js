import { isAdminFieldLevel } from "../access/isAdmin";
import { isAdminOrSelf, isAdminOrSelfForMx } from "../access/isAdminOrSelf";

const Representatives = {
  slug: "diputados-y-senadores",
  admin: {
    listSearchableFields: ["name","state","contact","party"],
    description: "Aqui puedes agregar, editar o eliminar  a los representates",
  },
  access: {
    // Only admins can create users
    create: isAdminOrSelf,
    // Admins can read all, but any other logged in user can only read themselves
    read: isAdminOrSelfForMx,
    // Admins can update all, but any other logged in user can only update themselves
    update: isAdminOrSelf,
    // Admins can update all, but any other logged in user can only update themselves
    delete: isAdminOrSelf,
  },
  fields: [
    {
      label: "nombre",
      name: "name",
      type: "text",
      required: true,
    },
    {
      label: "apellidos",
      name: "lastName",
      type: "text",
      required: true,
    },
    {
      label: "codigo postal",
      name: "postalcode",
      type: "text",
    },
    {
      label: "email de contacto",
      name: "contact", // required
      type: "email", // required
      required: true,
    },
    {
      label: "telefono",
      name: "phone",
      type: "text",
    },
    {
      label: "estado",
      name: "state",
      type: "text",
    },
    {
      label: "partido",
      name: "party",
      type: "text",
    },
    {
      name: "twitter",
      type: "text",
    },
    {
      label: "facebook",
      name: "facebook",
      type: "text",
    },
    {
      label: "instagram",
      name: "instagram",
      type: "text",
    },
    {
      name: "clientId",
      type: "relationship",
      relationTo: "users",
      required: true,
      admin: { hidden: true },
      // If user is not admin, set the site by default
      // to the first site that they have access to
      defaultValue: ({ user }) => {
        if (user) {
          return user.id;
        }
      },
      access: {
        // Only admins can create users
        create: isAdminFieldLevel,
        // Admins can update all, but any other logged in user can only update themselves
        update: isAdminFieldLevel,
      },
    },
  ],
};

export default Representatives;
