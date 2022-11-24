import { isAdminFieldLevel } from "../access/isAdmin";
import { isAdminOrSelf } from "../access/isAdminOrSelf";
import afterChangeHook from "../hooks/afterChange";
const PageContent = {
    slug: 'pageContent',
    auth: {
      cookies:'secure'
    },
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
            name: 'mainTitle', // required
            type: 'text', // required
          },
          {
            name: 'instructions', // required
            type: 'text', // required
          },
          {
            name: 'findRepButton', // required
            type: 'text', // required
          },
                    {
            name: 'mpLabelList', // required
            type: 'text', // required
          },
          {
            name: 'senLabelList', // required
            type: 'text', // required
          },
          {
            name: 'subjectEmail', // required
            type: 'text', // required
          },
          {
            name: 'messageEmail', // required
            type: 'text', // required
          },
          {
            name: 'sendButtonEmail', // required
            type: 'text', // required
          },
          {
            name: 'thankYouMessage', // required
            type: 'text', // required
          },
          {
            name: 'repeatButtonTyp', // required
            type: 'text', // required
          },
          {
            name: 'clientId',
            type: 'relationship',
            relationTo: 'users',
            required: true,
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
          }
        ],
    hooks: {
          afterChange: [afterChangeHook ]
  }
}
   
  export default PageContent;