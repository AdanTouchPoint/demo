import { isAdminFieldLevel } from "../access/isAdmin";
import { isAdminOrSelf } from "../access/isAdminOrSelf";
import hooks from "../hooks/afterChange"
// Example Collection - For reference only, this must be added to payload.config.js to be used.
const Emails = {
  slug: 'emails',
  admin: {
    description:{ 
      es: 'Aqui puedes cargar los mensajes y asuntos de email predefinidos', 
      en:'Here you can load the predefined email messages and subjects'}
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
      label:{es: 'Asunto', en:'Subject'},
      name: 'subject', // required
      type: 'text', // required
      required: true,
    },
    {
      label:{es: 'Mensaje', en :'Message'},
      name: 'content', // required
      type: 'richText', // required
      defaultValue: [{
        children: [{ text: 'Here is some default content for this field' }],
      }],
      required: true,
      admin: {
        elements: [
          'h2',
          'h3',
          'h4',
          'h5',
          'h6',
          'link',
          'upload',
          'ul',
          'ol',
          
        
        ],
        leaves: [
          'bold',
          'italic',
          'underline',
          'highlight',
          'quote',
       
        ],
        link: {
          // Inject your own fields into the Link element
          fields: [
            {
              name: 'rel',
              label: 'Rel Attribute',
              type: 'select',
              hasMany: true,
              options: [
                'noopener', 'noreferrer', 'nofollow',
              ],
            },
          ],
        }
      }
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

export default Emails;