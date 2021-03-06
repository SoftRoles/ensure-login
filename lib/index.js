/**
 * Authorize local host requests as a user (default:_admin_) incase 
 * not previously authorized 
 *
 * user:
 *   - Local user object, defaults to _{username: 'admin'}_
 *     !!Important: _username_ field should be always supplied if grant to
 *     local user is desired.
 * 
 * Examples:
 *
 *     app.use(authorizeLocalUser());
 * 
 *     app.use(authorizeLocalUser(null)); // not authorize local user
 * 
 *     app.use(authorizeLocalUser({username:'localUser', roles:[....]}));
 * 
 *     app.get('/profile', authorizeLocalUser(), function(req, res) { ... });
 *
 * @param {Object} user
 * @return {Function}
 * @api public
 */

module.exports = function authorizeLocalUser(user = {username:'admin'}) {
  return function (req, res, next) {
    if (!req.session || !req.user && req.ip.indexOf("127.0.0.1") > -1) req.user = user
    next()
  }
}