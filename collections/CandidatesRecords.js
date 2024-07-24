import { isAdminFieldLevel } from "../access/isAdmin";
import { isAdminOrSelf, isAdminOrSelfForAu } from "../access/isAdminOrSelf";
const CandidatesRecord = {
    slug: 'candidates-record',
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
          label: 'Name',
          name: 'name', // required
          type: 'text', // required
          required: true,
        },
        {
            label:'party',
            name: 'party', // required
            type: 'text', // required
            required: false,
          },
          {
            label:'Position',
            name: 'postion', // required
            type: 'text', // required
            required: false,
          }
      ]
  }
  
  export default CandidatesRecord;