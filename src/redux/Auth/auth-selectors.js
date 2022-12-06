 const getIsLoggedIn = state => state.auth.isLoggedIn;

 const getUserEmail = state => state.auth.email;

 const getUserName = state => state.auth.user.name;

 const authSelectors = {
     getIsLoggedIn,
     getUserEmail,
     getUserName,
 };

 export default authSelectors;