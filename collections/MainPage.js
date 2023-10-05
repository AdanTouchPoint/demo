import { isAdminFieldLevel } from "../access/isAdmin";
import { isAdminOrPCorSB, isAdminOrSB, isAdminOrSB2, isAdminOrSelf } from "../access/isAdminOrSelf";
import FormBlock from "../blocks/FieldForm";
import hooks from "../hooks/afterChange";
//import { ColourTextField } from '@nouance/payload-better-fields-plugin'
import colorField from "../customComponents/color-picker/config";
const MainPAge = {
  slug: "paginas-principales",
  labels: {
    singular: {
      en: "Main Page",
      es: "Pagina Principal",
    },
    plural: {
      en: "Main Pages",
      es: "Paginas Principales",
    },
  },
  admin: {
    description: {
      es: "Aqui puedes cambiar la imagen y los textos de la pagina principal",
      en: "Here you can change the background image and text of the main page",
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
      label: { es: "Imagen de Fondo", en: "Background Image" },
      name: "backgroundImage", // required
      type: "upload", // required
      relationTo: "imagenes", // required
      access:{
        create: isAdminOrPCorSB,
        read: isAdminOrPCorSB,
      }
    },
    {
      type: "group",
      name: "header",
      label: { es: "Encabezado", en: "Header" },
      fields: [
        {
          label: { es: "Titulo Principal", en: "Main Title" },
          name: "mainTitle", // required
          type: "text", // required
        },
        {
          label: { es: "Subtitulo Principal", en: "Subtitle" },
          name: "mainSubtitle", // required
          type: "text", // required
          access:{
            create: isAdminOrPCorSB,
            read: isAdminOrPCorSB,
          }
        },
        {
          label: { es: "Instrucciones", en: "Instructions" },
          name: "instructions", // required
          type: "textarea", // required
          
        },
        {
          label: { es: "Titulo barra de progreso", en: "progressBar title" },
          name: "progressBarTitle", // required
          type: "text", // required
          access:{
            create: isAdminOrPCorSB,
            read: isAdminOrPCorSB,
          }
        },
        {
          label: { es: "Subtitulo barra de progreso", en: "progressBar subtitle" },
          name: "progressBarSubtitle", // required
          type: "text", // required
          access:{
            create: isAdminOrPCorSB,
            read: isAdminOrPCorSB,
          }
        },
      ],
    },
    {
      type: "group",
      name: "form",
      label: { es: "Formulario", en: "Form" },
      fields: [
        {
          label: { es: "Subtitulo", en: "Form Subtitle" },
          name: "subtitleForm", // required
          type: "text", // required
        },
        {
          type: "row",
          label:{es:'Input', en:'Input'},
          fields: [
                 {
                  name:'formFields',
                  label:{es:'Campos del Formulario', en:'Form Fields'},
                  type:'blocks',
                  minRows:'1',
                  maxRows:'20',
                  blocks:[
                    FormBlock
                  ]
            },
          ],
        },
        {
          type: "row",
          fields: [
            {
              label: {
                es: " Etiqueta URL Terminos y Condiciones",
                en: "Terms & Conditions URL Label",
              },
              name: "termsLabel", // required
              type: "text", // required
              admin: {
                width: "50%",
              },
            },
            {
              label: {
                es: " URL Terminos y Condiciones",
                en: "Terms & Conditions URL",
              },
              name: "terms", // required
              type: "text", // required
              admin: {
                width: "50%",
              },
            },
          ],
        },
        {
          label: { es: "Boton Buscar", en: "Search Button" },
          name: "Find Button", // required
          type: "text", // required
        },
      ],
    },
    {
      type: "group",
      name: "repList",
      label: { es: "Lista de Representates", en: "Representatives List" },
      fields: [
        {
          label: { es: "Parrafo Principal", en: "Main P" },
          name: "mainP", // required
          type: "text", // required
        },
        {
          type: "row",
          fields: [
            {
              label: { es: "Etiqueta Senadores", en: "Senators Label" },
              name: "senatorLabel", // required
              type: "text", // required
              admin: {
                width: "50%",
              },
            },
            {
              label: { es: "Etiqueta Diputados", en: "Mps Label" },
              name: "mpLabel", // required
              type: "text", // required
              admin: {
                width: "50%",
              },
            },
          ],
        },
      ],
      access:{
        create: isAdminOrPCorSB,
        read: isAdminOrPCorSB,
      }
    },
    {
      type: "group",
      name: "emailForm",
      label: { es: "Formulario  de Email", en: "Email Form" },
      fields: [
        {
          type: "row",
          fields: [
            {
              label: { es: "Etiqueta nombre de usuario", en: "Username Label" },
              name: "userNameLabel", // required
              type: "text", // required
              admin: {
              width: "50%",
              },
            },
            {
              label: { es: "Placeholder nombre de usuario", en: "Username Placeholder" },
              name: "userNamePlaceholder", // required
              type: "text", // required
              admin: {
              width: "50%",
              },
            }
          ],
        },
        {
          type:'row',
          fields:[
            {
              label: { es: "Etiqueta campo email", en: "Email input label" },
              name: "emailUserLabel", // required
              type: "text", // required
              admin: {
                width: "50%",
                },
            },
            {
              label: { es: "Etiqueta informacion de representante", en: "Representative info label" },
              name: "infoRepLabel", // required
              type: "text", // required
              admin: {
                width: "50%",
                },
            },
          ]
        },
         {
          type:'row',
          fields:[
            {
              label: { es: "Etiqueta Asunto", en: "Subject label" },
              name: "subjectLabel", // required
              type: "text", // required
              admin: {
                width: "50%",
                },
            },
            {
              label: { es: "Placeholder campo asunto", en: "Subject input placeholder" },
              name: "subjectPlaceholder", // required
              type: "text", // required
              admin: {
                width: "50%",
                },
            }        
          ]
        }
      ],
      access:{
        create: isAdminOrPCorSB,
        read: isAdminOrPCorSB,
      }
    },
    {
      type: "group",
      name: "previewForm",
      label: { es: "Previsualizacion", en: "Preview" },
      fields: [
        {
          type: "row",
          fields: [
            {
              label: { es: "Titulo", en: "Title" },
              name: "titlePreview", // required
              type: "text", // required
              admin: {
              width: "50%",
              },
            },
            {
              label: { es: "Instrucciones", en: "Instructions" },
              name: "intructionsPreview", // required
              type: "text", // required
              admin: {
              width: "50%",
              },
            }
          ],
        },
        {
          type:'row',
          fields:[
            {
              label: { es: "Texto previo", en: "Text Preview" },
              name: "textPreview", // required
              type: "text", // required
              admin: {
                width: "50%",
                },
            },
            {
              label: { es: "Boton Enviar", en: "Send Button" },
              name: "sendButtonPreview", // required
              type: "text", // required
              admin: {
                width: "50%",
                },
            },
          ]
        },
      ],
      access:{
        create: isAdminOrSB2,
        read: isAdminOrSB2,
      }
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
    {
      name: "active", // required
      type: "checkbox", // required
      label: "Aplicar",
      defaultValue: true,
      admin: {
        readOnly: true,
      },
    },
  ],
};

export default MainPAge;
