
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
  
  export const isAdminOrSelfForProUser = ( user ) => {
    console.log(user.req.user.plan)
    // Need to be logged in
    if (user) {
    const plan = user.req.user.plan
      // If user has role of 'admin'
      if (plan === 'pro') {
        const clientId = user.req.user.id

        const query = {
            clientId: {
                equals: clientId,
              }
        }
        return query;
      }  
    }
  
    // Reject everyone else
    return false;
  }

  export const isProUser = ( user ) => {
    console.log(user.req.user.plan)
    // Need to be logged in
    if (user) {
    const plan = user.req.user.plan
      // If user has role of 'admin'
      if (plan === 'pro') {
        return true;
      }
    }
  }

  export const isAdminOrSelfForAu = ( user ) => {
    console.log(user.req.user.plan)
    // Need to be logged in
    if (user) {
    const plan = user.req.user.plan
    const role = user.req.user.roles
    const region = user.req.user.region
      // If user has role of 'admin'
      if(role === 'admin' || region === 'AU') {
        const clientId = user.req.user.id
        const query = {
            clientId: {
                equals: clientId,
              }
        }
        return query;
       }
    }
  
    // Reject everyone else
    return false;
  }
 
  export const isAdminOrSelfForMx = ( user ) => {
    console.log(user.req.user.plan)
    // Need to be logged in
    if (user) {
    const region = user.req.user.region
    const role = user.req.user.roles
      // If user has role of 'admin'
     if(role === 'admin' || region === 'MX') {
      const clientId = user.req.user.id
      const query = {
          clientId: {
              equals: clientId,
            }
      }
      return query;
     }
    }
  
    // Reject everyone else
    return false;
  }