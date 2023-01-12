import { isAdminFieldLevel } from "../access/isAdmin";
import { isAdminOrSelf } from "../access/isAdminOrSelf";
import hooks from "../hooks/afterChange";
const MainPAge = {
    slug: 'paginas-principales',
  
    admin: {
      useAsTitle: 'Pagina Principal',
      description:'Aqui puedes cambiar la imagen y los textos de la pagina principal'
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
            label: 'Imagen de Fondo',
            name: 'backgroundImage', // required
            type: 'upload', // required
            relationTo: 'imagenes', // required  
          },
          {
            label: 'Titulo Principal',
            name: 'mainTitle', // required
            type: 'text', // required
          },
          {
            label: 'Subtitulo Principal',
            name: 'mainSubtitle', // required
            type: 'text', // required
          },
          {
            label: 'instrucciones',
            name: 'instructions', // required
            type: 'textarea', // required
          },
          {
            label: 'Boton Buscar',
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