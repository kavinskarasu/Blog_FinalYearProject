module.exports.mongourl =
  "mongodb+srv://KAVIARASU:KAVIARASU@cluster0.rnxze.mongodb.net/blog?retryWrites=true&w=majority";
module.exports.PORT = process.env.PORT || 5000;
module.exports.globalVariables = (req, res, next) => {
  res.locals.success_message = req.flash("success-message");
  res.locals.error_message = req.flash("error-message");
  res.locals.user = req.user || null;
  next();
};
