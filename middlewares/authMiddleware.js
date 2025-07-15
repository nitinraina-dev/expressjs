// checkGrant.js
function checkGrant(req, res, next) {
  const grant = req.query.grant;

  if (grant === 'admin') {
    console.log('Access granted to admin.');
next();
  } else {
    res.status(403).json({ error: 'Access denied. Invalid grant.' });
  }
}

module.exports = checkGrant;
