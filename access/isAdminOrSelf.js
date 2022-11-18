
export const isAdminOrSelf = ( user ) => {
    console.log(user.req.user.roles)
    // Need to be logged in
    if (user) {
    const role = user.req.user.roles
      // If user has role of 'admin'
      if (role === 'admin') {
        return true;
      }
        const clientId = user.req.user.id

        const query = {
            clientId: {
                equals: clientId,
              }
        }
       // If any other type of user, only provide access to themselves
      return query 
         
    }
  
    // Reject everyone else
    return false;
  }

  export const isAdminOrSelfForUser = ( user ) => {
    console.log(user.req.user.roles)
    // Need to be logged in
    if (user) {
    const role = user.req.user.roles
      // If user has role of 'admin'
      if (role === 'admin') {
        return true;
      }
        const clientId = user.req.user.id

        const query = {
            id: {
                equals: clientId,
              }
        }
       // If any other type of user, only provide access to themselves
      return query 
         
    }
  
    // Reject everyone else
    return false;
  }