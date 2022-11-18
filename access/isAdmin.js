export const isAdmin = (user) => {
    console.log(user.req.user.roles)
    const role = user.req.user.roles
        // Return true or false based on if the user has an admin role
    return Boolean(role === 'admin');
  }
  
  export const isAdminFieldLevel = ( user ) => {
    const role = user.req.user.roles
        // Return true or false based on if the user has an admin role
    return Boolean(role === 'admin');
  }
