import colorField from "../customComponents/color-picker/config";
import {  isAdminOrSelf } from "../access/isAdminOrSelf";
import {isAdminFieldLevel} from "../access/isAdmin"


const Theme = {
    slug: "theme",
    admin: {
        description: {
            es: "Aqui puedes cambiar el color de los elementos de la pagina principal",
            en: "Here you can change the color of the elements of the main page",
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
            type:"group",
            name:"background_color",
            label:{es:"color de fondo", en:"Background Color"},
            fields: [
              colorField 
            ]
           },
           {
            type:"group",
            name:"text_color",
            label:{es:"color de texto ", en:"Text Color"},
            fields: [
              colorField 
            ]
           },
           {
            type:"group",
            name:"label_color",
            label:{es:"color de etiquetas", en:"Label Color"},
            fields: [
              colorField 
            ]
           },
           {
            type:"group",
            name:"input_color",
            label:{es:"color de input", en:"Input Color"},
            fields: [
              colorField 
            ]
           },
           {
            type:"group",
            name:"link_color",
            label:{es:"color de links ", en:"Link Color"},
            fields: [
              colorField 
            ]
           }, {
            type:"group",
            name:"input_text_color",
            label:{es:"color de texto en input", en:"input text Color"},
            fields: [
              colorField 
            ]
           }, {
            type:"group",
            name:"buttonA_color",
            label:{es:"color de boton ", en:"Button Color"},
            fields: [
              colorField 
            ]
           }, {
            type:"group",
            name:"buttonA_text_color",
            label:{es:"color de texto en boton ", en:"Text Button Color"},
            fields: [
              colorField 
            ]
           }, {
            type:"group",
            name:"buttonB_color",
            label:{es:"color de Boton B ", en:"Button B Color"},
            fields: [
              colorField 
            ]
           }, {
            type:"group",
            name:"buttonB_text_color",
            label:{es:"color de texto en boton B ", en:"Text Button B Color"},
            fields: [
              colorField 
            ]
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
  
  export default Theme;
  