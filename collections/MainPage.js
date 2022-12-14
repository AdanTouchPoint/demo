import { isAdminFieldLevel } from "../access/isAdmin";
import { isAdminOrSelf } from "../access/isAdminOrSelf";
import hooks from "../hooks/afterChange";
const MainPAge = {
    slug: 'mainPage',
  
    admin: {
      useAsTitle: 'Main Page', 
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
            label: {en:'Background Imagen' , es:'Imagen de Fondo',},
            name: 'backgroundImage', // required
            type: 'upload', // required
            relationTo: 'media', // required  
          },
          {
            label: {en:'Main Title' , es:'Titulo Principal',},
            name: 'mainTitle', // required
            type: 'text', // required
          },
          {
            label: {en:'Instructions' , es:'instrucciones',},
            name: 'instructions', // required
            type: 'textarea', // required
          },
          {
            label: {en:'Find Button' , es:'Boton Buscar',},
            name: 'Find Button', // required
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
            defaultValue: true,
            admin: {
              readOnly:  true
            }
          },  
        ],  
}
   
  export default MainPAge;