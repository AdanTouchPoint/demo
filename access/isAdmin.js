export const isAdmin = (user) => {
    const role = user.req.user.roles
        // Return true or false based on if the user has an admin role
    return Boolean(role === 'admin');
  }
  
  export const isAdminFieldLevel = ( user ) => {
    const role = user.req.user.roles
        // Return true or false based on if the user has an admin role
    return Boolean(role === 'admin');
  }
