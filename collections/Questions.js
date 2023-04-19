import { isAdminFieldLevel } from "../access/isAdmin";
import { isAdminOrSB } from "../access/isAdminOrSelf";

const Questions = {
    slug: "questions",
    admin: {
      useAsTitle: "questions",
      description:{
      en:'Here you can edit the questions of the submission'
    }
    },
    access:{
        create: isAdminOrSB,
        read: isAdminOrSB,
        update: isAdminOrSB,
        delete: isAdminOrSB
      },
    fields: [
      {
        label: {
          en: "Subject",
          es: "Asunto",
        },
        name: "subject", // required
        type: "text", // required
        required: true,
      },
      {
        name:'questions',
        type: 'array',
        minRows: 1,
        maxRows: 10,
        label: {
          en: "Questions",
          es: "Preguntas",
        },
        fields:[
          {
            name:'questions',
            type: 'text',
          }
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
  
  export default Questions;