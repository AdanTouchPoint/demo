import { isAdmin, isAdminFieldLevel } from "../access/isAdmin";
import { isAdminOrSelf, isAdminOrSelfForProUser, isAdminOrSelfForUser } from "../access/isAdminOrSelf";
const TweetMessage = {
    slug: 'tweets',
    admin: {
      useAsTitle: 'tweetMessage',
      description:'Aqui puedes cargar el texto predefinido de los tweets'
    },
    access: {
      create: isAdminOrSelfForProUser,
      // Admins can read all, but any other logged in user can only read themselves
      read: isAdminOrSelfForProUser,
      // Admins can update all, but any other logged in user can only update themselves
      update: isAdminOrSelfForProUser,
      // Only admins can delete
      delete: isAdminOrSelfForProUser,
    },
    fields: [
      {
        label:'mensaje',
          name: 'Message', // required
          type: 'textarea', // required
          required: true,
      },
      {

        name: 'clientId',
        type: 'relationship',
        relationTo: 'users',
        required: true,
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