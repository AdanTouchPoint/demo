import { isAdminFieldLevel } from "../access/isAdmin";
import hooks from "../hooks/afterChange"

const Tweets = {
    slug: 'tweets',
    
    admin: {
      useAsTitle: 'tweets',
    },
    access: {
      read: () => true,
    },
    fields: [
      {
        name: 'To', // required
        type: 'text', // required
        required: true,
      },
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
        defaultValue: false,
      },
          //add userID relation
      ],
      hooks: {
        afterChange: [hooks.afterChangeTweetsDataHook ]
      }

  }
  
  export default Tweets;