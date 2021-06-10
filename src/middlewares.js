export const localsmiddleware = (req, res, next) => {
  res.locals.siteName = "Smashtube";
  res.locals.loggedIn = Boolean(req.session.loggedIn);
  res.locals.loggedInUser = req.session.user;
  next();
};
