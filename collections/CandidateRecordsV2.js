import { isAdminFieldLevel } from "../access/isAdmin";
import { isAdminOrSelf, isAdminOrSelfForAu } from "../access/isAdminOrSelf";
const CandidatesRecordsV2 = {
    slug: 'candidates-recordv2',
    admin: {
        listSearchableFields: ["postcode","division"],
        description: "Manage your electorates database from here",
    },
    access: {
       // Only admins can create users
    create: isAdminOrSelf,
    // Admins can read all, but any other logged in user can only read themselves
    read: isAdminOrSelfForAu,
    // Admins can update all, but any other logged in user can only update themselves
    update: isAdminOrSelf,
    // Admins can update all, but any other logged in user can only update themselves
    delete: isAdminOrSelf,
    },
    fields: [
        {
            label: "Name",
            name: "name",
            type: "text",
            required: true,
          },
          {
            label: "Electorate",
            name: "electorate",
            type: "text",
            required: true,
          },
          {
            label: "Question1",
            name: "question1",
            type: "text",
          },
          {
            label: "Answer1",
            name: "answer1", 
            type: "text", 
            
          },
          {
            label: "Question2",
            name: "question2",
            type: "text",
          },
          {
            label: "Answer2",
            name: "answer2",
            type: "text",
          },
          {
            name: "clientId",
            type: "relationship",
            relationTo: "users",
            required: true,
            admin: { hidden: true },
            // If user is not admin, set the site by default
            // to the first site that they have access to
            defaultValue: ({ user }) => {
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
      ]
  }
  
  export default CandidatesRecordsV2;