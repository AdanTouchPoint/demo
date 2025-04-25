import { isAdminFieldLevel } from "../access/isAdmin";
import { isAdminOrSelf, isAdminOrSelfForMx } from "../access/isAdminOrSelf";

const CitizenGoReps = {
  slug: "citizengo-reps",
  admin: {
    listSearchableFields: ["name","state","contact","party"],
    description: "Aqui puedes agregar, editar o eliminar  a los representates",
  },
  access: {
    // Only admins can create users
    create: isAdminOrSelf,
    // Admins can read all, but any other logged in user can only read themselves
    read: isAdminOrSelf,
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
      label: "electorate",
      name: "electorate",
      type: "text",
    },
    {
      label: "email de contacto",
      name: "contact", // required
      type: "email", // required
      required: true,
    },
    {
      label: "partido",
      name: "party",
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

export default CitizenGoReps;
