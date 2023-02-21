import { isAdminFieldLevel } from "../access/isAdmin";
import { isAdminOrSelf } from "../access/isAdminOrSelf";
import hooks from "../hooks/afterChange";
const ThankYouMessage = {
    slug: 'mensaje-de-agradecimientos',
    labels: {
      singular: {
        en: 'Thankyou Message', es: 'Mensaje de Agradecimiento',
      },
      plural: {
        en: 'Thankyou Messages', es: 'Mensajes de Agradecimiento',
      },
    },
    admin: {
      description: {es:'Aqui puedes cargar los mensajes predefinidos de la pagina de agradecimiento ',
    en:'Here you can load predefine thank you messages'}
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
          label:{es:'Mensaje',en:'Message'},
            name: 'thankYouMessage', // required
            type: 'textarea', // required
          },
          {
            label:{es:'Mensaje2',en:'Message2'},
            name: 'secondThankYouMessage', // required
            type: 'text', // required
          },
          {
            label: {es:'Boton Repetir', en:'Repeat Button'},
            name: 'repeatButtonTyp', // required
            type: 'text', // required
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
          {
            name: 'active', // required
            type: 'checkbox', // required
            label: 'Aplicar',
            defaultValue: true,
            admin: {
              readOnly:  true
            }
          },  
          
        ],
}
   
  export default ThankYouMessage;