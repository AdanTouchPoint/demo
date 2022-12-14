import { isAdmin, isAdminFieldLevel } from "../access/isAdmin";
import { isAdminOrSelf, isAdminOrSelfForUser } from "../access/isAdminOrSelf";
import hooks from "../hooks/afterChange"
import payload from 'payload';
const TweetMessage = {
    slug: 'tweetMessage',
    admin: {
      useAsTitle: 'tweetMessage',
    },
    access: {
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