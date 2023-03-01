import { isAdminFieldLevel } from "../access/isAdmin";
import { isAdminOrSelf } from "../access/isAdminOrSelf";
import hooks from "../hooks/afterChange";
const MainPAge = {
    slug: 'paginas-principales',
    labels: {
      singular: {
        en: 'Main Page', es: 'Pagina Principal',
      },
      plural: {
        en: 'Main Pages', es: 'Paginas Principales',
      },
    },
    admin: {
      description:{
        es:'Aqui puedes cambiar la imagen y los textos de la pagina principal',
      en:'Here you can change the background image and text of the main page'}
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
            label: {es:'Imagen de Fondo', en:'Background Image'},
            name: 'backgroundImage', // required
            type: 'upload', // required
            relationTo: 'imagenes', // required  
          },
          {
            label: {es:'Titulo Principal', en:'Main Title'},
            name: 'mainTitle', // required
            type: 'text', // required
          },
          {
            label: {es:'Subtitulo Principal', en:'Main Title'},
            name: 'mainSubtitle', // required
            type: 'text', // required
          },
          {
            label: {es:'Instrucciones', en:'Instructions'},
            name: 'instructions', // required
            type: 'textarea', // required
          },
          {
            label: {es:'Boton Buscar', en:'Search Button'},
            name: 'Find Button', // required
            type: 'text', // required
          },
          {
            label: {es:' URL Terminos y Condiciones', en:'Terms & Conditions URL'},
            name: 'terms', // required
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