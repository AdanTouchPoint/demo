import { isAdmin, isAdminFieldLevel } from "../access/isAdmin";
import { isAdminOrSelf, isAdminOrSelfForProUser, isAdminOrSelfForUser, isProUser} from "../access/isAdminOrSelf";
const TweetMessage = {
    slug: 'tweets',
    admin: {
      description:{
        es:'Aqui puedes cargar el texto predefinido de los tweets',
        en: 'Here you can load the predefined text of the tweets'
      }
    },
    access: {
      create: isAdminOrSelfForProUser,
      // Admins can read all, but any other logged in user can only read themselves
      read: isAdminOrSelfForProUser,
      // Admins can update all, but any other logged in user can only update themselves
      update: isProUser,
      // Only admins can delete
      delete: isProUser,
    },
    fields: [
      {
        label:{es:'Mensaje',en:'Message'},
          name: 'Message', // required
          type: 'textarea', // required
          required: true,
      },
      {

        name: 'clientId',
        type: 'relationship',
        relationTo: 'users',
       
        admin:{
          hidden: true
        },
       
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
        admin:{
          readOnly:true
        }
      },
    ],
  }
  
  export default TweetMessage;