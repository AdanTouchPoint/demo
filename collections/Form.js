import { isAdminOrForm } from "../access/isAdminOrSelf";
import {isAdminFieldLevel} from "../access/isAdmin"
import FormBlock from "../blocks/FieldForm";
const Form = {
    slug: "form",
    admin: {
      useAsTitle: "form",
    },
    access: {
        create: isAdminOrForm,
        // Admins can read all, but any other logged in user can only read themselves
        read: isAdminOrForm,
        // Admins can update all, but any other logged in user can only update themselves
        update: isAdminOrForm,
        // Only admins can delete
        delete: isAdminOrForm,
    },
    fields: [
      {
        name:'formFields',
        label:{es:'Campos del Formulario', en:'Form Fields'},
        type:'blocks',
        minRows:'1',
        maxRows:'20',
        blocks:[
          FormBlock
        ]
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
  };
  
  export default Form;
  