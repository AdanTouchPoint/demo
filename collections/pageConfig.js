import { isAdminFieldLevel } from "../access/isAdmin";
import {  isAdminOrSelf } from "../access/isAdminOrSelf";
const pageConfig = {
  slug: "page-config",
  admin: {
    description:
    {
        es: "Aqui puedes encontrar algunas configuraciones de tu pagina.\n Como el idioma, el metodo de busqueda, envio eb grupo y el pais al que esta dirigida la pagina. ",
        en: "Here you can find some configurations of your page. \n Like the language, the search method, group sending and the country to which the page is directed.",
    },
  },
  access: {
        // Only admins can create users
        create: isAdminOrSelf,
        // Admins can read all, but any other logged in user can only read themselves
        read: isAdminOrSelf,
        // Admins can update all, but any other logged in user can only update themselves
        update: isAdminOrSelf,
        // Only admins can delete
        delete: isAdminOrSelf,
  },
  fields: [
    {
      type: "group",
      name: "lenguage",
      label: {
        en: "Lenguage",
        es: "Idioma",
      },
      admin: {
        description: {
          en: "Lenguage Select",
          es: "Selecciona el idioma",
        },
      },
      fields: [
        {
          label: {
            en: "lenguage",
            es: "idioma",
          },
          name: "lenguage",
          type: "radio",
          options: [
            {
              label: "ENG",
              value: "ENG",
            },
            {
              label: "ES",
              value: "ES",
            },
          ],
          defaultValue: "ES", // The first value in options.
          admin: {
            layout: "vertical",
          },
          required: true,
        },
      ],
    },
    {
      type: "group",
      name: "SearchBy",
      label: {
        en: "SearchBy",
        es: "Buscar por",
      },
      admin: {
        description: {
          en: "search by",
          es: "buscar por",
        },
      },
      fields: [
        {
          label: {
            en: "SearchBy",
            es: "Buscar por",
          },
          name: "SearchBy", // required
          type: "radio",
          options: [
            {
              label: "State",
              value: "state",
            },
            {
              label: "Postalcode",
              value: "postcode",
            },
            {
              label: "Party",
              value: "party",
            },
            {
              label: "Email",
              value: "email",
            },
          ],
          defaultValue: "State", // The first value in options.
          admin: {
            layout: "vertical",
          },
          required: true,
        },
      ],
    },
    {
      type: "group",
      name: "sendMany",
      label: {
        en: "sendMany",
        es: "envio en grupo",
      },
      admin: {
        description: {
          en: "send many",
          es: "envio en grupo",
        },
      },
      fields: [
        {
          label: {
            en: "sendMany",
            es: "envio en grupo",
          },
          name: "sendMany", // required
          type: "radio",
          options: [
            {
              label: "Si",
              value: "Si",
            },
            {
              label: "No",
              value: "No",
            },
          ],
          defaultValue: "No", // The first value in options.
          admin: {
            layout: "horizontal",
          },
          required: true,
        },
      ],
    },
    {
      type: "group",
      label: {
        en: "region",
        es: "region",
      },
      admin: {
        description: {
          en: "Region Select",
          es: "Selecciona la region",
        },
      },
      name: "region",
      fields: [
        {
          label: {
            en: "Region",
            es: "Region",
          },
          name: "region", // required
          type: "radio",
          options: [
            {
              label: "MX",
              value: "MX",
            },
            {
              label: "AUS",
              value: "AUS",
            },
          ],
          defaultValue: "MX", // The first value in options.
          admin: {
            layout: "horizontal",
          },
          required: true,
        },
      ],
    },
    {
      type: "group",
      label: {
        en: "filter",
        es: "filtro",
      },
      admin: {
        description: {
          en: "Filter",
          es: "Filtro",
        },
      },
      name: "filter",
      fields: [
        {
          label: {
            en: "Filter",
            es: "Filtro",
          },
          name: "filter", // required
          type: "radio",
          options: [
            {
              label: "N/A",
              value: "No",
            },
            {
              label: "Party",
              value: "party",
            },
            {
              label: "State",
              value: "state",
            }
          ],// The first value in options.
          admin: {
            layout: "horizontal",
          },
          required: true,
        },
      ],
    },
    {

        name: 'clientId',
        type: 'relationship',
        relationTo: 'users',
        required: true,
        admin:{hidden:true},
        // If user is not admin, set the site by default
        // to the first site that they have access to
        defaultValue:  ({ user }) => {
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

export default pageConfig;
