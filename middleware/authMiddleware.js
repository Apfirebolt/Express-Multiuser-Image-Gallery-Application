const ensureAuthenticated = function(req, res, next) {
if (req.isAuthenticated()){
  console.log('User is authenticated');  
  return next();
}
  req.flash('error_msg', 'Not Authorized to perform this operation, please login to continue.');
  res.redirect('/auth/login');
}

module.exports.ensureAuthenticated = ensureAuthenticated;