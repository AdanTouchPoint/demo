import { isAdminFieldLevel } from "../access/isAdmin";
import { isAdminOrSelf } from "../access/isAdminOrSelf";

const Representatives = {
    slug: 'representatives',
    admin: {
      useAsTitle: 'representatives',
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
        name: 'Name',
        type: 'text',
        required: true, 
    },
    {
      name: 'postalcode',
      type: 'text',
      required: true,
    },
    {
      name: 'contact', // required
      type: 'email', // required
      label: 'Contact Email Address',
      required: true,
    },
    {
      name:'phone',
      type: 'number',
    },
    {
      name:'address',
      type:'text',
    },
    {
      name:'state',
      type:'text',
    },
    {
      name:'city',
      type:'text',
    },
    {
      name:'party',
      type:'text',
    },
    {
      name:'twitter',
      type:'text',
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
  }
  
  export default Representatives;