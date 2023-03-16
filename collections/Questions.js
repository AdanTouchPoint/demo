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
        label: {
        en: "Question 1",
        es: "Pregunta 1",
      },
        name: "question1", // required
        type: "text", // required
        required: true,
      },
      {
        label: {
        en: "Question 2",
        es: "Pregunta 2",
      },
        name: "question2", // required
        type: "text", // required
        required: true,
      },
      {
        label: {
        en: "Question 3",
        es: "Pregunta 3",
      },
        name: "question3", // required
        type: "text", // required
        required: true,
      },
      {
        label: {
        en: "Question 4",
        es: "Pregunta 4",
      },
        name: "question4", // required
        type: "text", // required
        required: true,
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