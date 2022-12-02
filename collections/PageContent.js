import { isAdminFieldLevel } from "../access/isAdmin";
import { isAdminOrSelf } from "../access/isAdminOrSelf";
import hooks from "../hooks/afterChange";
const PageContent = {
    slug: 'pageContent',
    admin: {
      useAsTitle: 'page Content',
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
            name: 'backgroundImage', // required
            type: 'upload', // required
            relationTo: 'media', // required  
          },
          {
            name: 'mainTitle', // required
            type: 'text', // required
          },
          {
            name: 'instructions', // required
            type: 'textarea', // required
          },
          {
            name: 'findRepButton', // required
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
            defaultValue: false,
          },
          
        ],
    hooks: {
          afterChange: [hooks.afterChangeMainDataHook ]
  }
}
   
  export default PageContent;