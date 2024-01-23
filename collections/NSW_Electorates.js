import { isAdminOrSelf, isAdminOrSelfForAu } from "../access/isAdminOrSelf";
const nsw_electorates = {
    slug: 'nsws_electorates',
    admin: {
        listSearchableFields: ["postcode","division"],
        description: "Manage your electorates database from here",
    },
    access: {
       // Only admins can create users
    create: isAdminOrSelf,
    // Admins can read all, but any other logged in user can only read themselves
    read: ()=> false,
    // Admins can update all, but any other logged in user can only update themselves
    update: isAdminOrSelf,
    // Admins can update all, but any other logged in user can only update themselves
    delete: isAdminOrSelf,
    },
    fields: [
        {
          label: 'Postal Code',
          name: 'postcode', // required
          type: 'text', // required
          required: true,
        },
        {
            label:'Electoral Divison',
            name: 'division', // required
            type: 'text', // required
            required: false,
          },
      ]
  }
  
  export default nsw_electorates;