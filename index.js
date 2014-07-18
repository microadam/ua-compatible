module.exports = addUserAgent

// Force IE to use most up to date rendering engine possible, default to chrome-frame if installled
// http://www.validatethis.co.uk/news/fix-bad-value-x-ua-compatible-once-and-for-all/
function addUserAgent(req, res, next) {
  res.setHeader('X-UA-Compatible', 'IE=edge,chrome=1')
  next()
}
