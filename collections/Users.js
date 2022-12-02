import { isAdmin, isAdminFieldLevel } from "../access/isAdmin";
import { isAdminOrSelfForUser } from "../access/isAdminOrSelf";

const Users = {
  slug: 'users',
  auth: true,
  admin: {
    useAsTitle: 'users',
   
  },
  access: {
    // Only admins can create users
    create: isAdmin,
    // Admins can read all, but any other logged in user can only read themselves
    read: isAdminOrSelfForUser,
    // Admins can update all, but any other logged in user can only update themselves
    update: isAdminOrSelfForUser,
    // Only admins can delete
    delete: isAdmin,
  },
  fields: [
    // Email added by default
    // Add more fields as needed
    {
      name: 'name',
      type: 'text', 
  },
  {
    name: 'lastName',
    type: 'text', 
},
{
    name: 'city',
    type: 'text', 
},
{
    name:'plan',
    type:'select',
    defaultValue:'basic',
    access: {
      create: isAdminFieldLevel,
      update: isAdminFieldLevel
    },
    options: [
      {
        label: 'basic',
        value:'basic'
      },
      {
        label:'pro',
        value:'pro'
      }
    ]
},
{
  name: 'roles',
  // Save this field to JWT so we can use from `req.user`
  saveToJWT: true,
  type: 'select',
  hasMany: false,
  defaultValue: 'client',
  admin:{hidden:true},
  access: {
    // Only admins can create users
    create: isAdminFieldLevel,
    // Admins can update all, but any other logged in user can only update themselves
    update: isAdminFieldLevel,
  },
  options: [
    {
      label: 'Admin',
      value: 'admin',
    },
    {
      label: 'Client',
      value: 'client',
    },
  ]
},
],
};

export default Users;