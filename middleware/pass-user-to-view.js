const isSignedIn = (req, res, next) => {
    if (req.session.user) {
        return next();
}
    res.redirect('/auth/sign-in');
  };
  //this function redirect someone that isn't authorized to a sign in page instead of viewing the content in the link. Chris gave the FB example. 

  const passUserToView = (req, res, next) => {
    res.locals.user = req.session.user ? req.session.user : null;
    next();
  };
  //This middleware provides us a shortcut to always pass the information of the logged in user to our requests final destination.

  //make sure you require both of the above middlewares in the server.js

module.exports = passUserToView;