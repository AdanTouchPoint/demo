import { isAdminFieldLevel } from "../access/isAdmin";
import { isAdminOrSelf } from "../access/isAdminOrSelf";

const Representatives = {
    slug: 'representantes',
    admin: {
      useAsTitle: 'representantes',
      description:'Aqui puedes agregar, editar o eliminar  a los representates'
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
        label:'nombre',
        name: 'Name',
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
      label:'telefono',
      name:'phone',
      type: 'number',
    },
    {
      label:'direccion',
      name:'address',
      type:'text',
    },
    {
      label:'estado',
      name:'state',
      type:'text',
    },
    {
      label:'ciudad',
      name:'city',
      type:'text',
    },
    {
      label:'partido',
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