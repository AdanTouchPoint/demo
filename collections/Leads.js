import { isAdmin, isAdminFieldLevel } from "../access/isAdmin";
import { isAdminOrSelf } from "../access/isAdminOrSelf";

const Leads = {
    slug: 'conversiones',
    admin: {
      useAsTitle: 'conversiones',
      description:'Aqui puedes ver las conversiones de tu pagina'
    },
    access: {
      // Only admins can create convertions
      create: isAdmin,
      // Admins can read all, but any other logged in user can only read themselves
      read: isAdminOrSelf,
      // Admins can update all, but any other logged in user can only update themselves
      update: isAdmin,
      // Admins can update all, but any other logged in user can only update themselves
      delete: isAdmin,
    },
    fields: [
      {
        label:'nombres',
        name: 'names',
        type: 'text',
        required: true, 
    },
    {
      label:'codigo postal',
      name: 'postalcode',
      type: 'text',
      required: true,
    },
    {
      label:'email de contacto',
      name: 'contact', // required
      type: 'email', // required
      required: true,
    },
    {
      label:'representate',
      name:'representative',
      type: 'text',
    },
    {
      label:'mensaje email',
      name:'emailMessage',
      type:'text',
    },
    {
      label:'estado',
      name:'city',
      type:'text',
    },
    {
      label:'fraccion',
      name:'party',
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
  
  export default Leads;