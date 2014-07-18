# ua-compatible

Set the X-UA-Compatible header in an express middleware.

Forces IE to use the most up to date rendering engine possible, default to chrome-frame if installled

[![build status](https://secure.travis-ci.org/microadam/ua-compatible.png)](http://travis-ci.org/microadam/ua-compatible)

## Installation

```
npm install ua-compatible --save
```

## Usage

```
  var express = require('express')
  var app = express()
  var uaCompatible = require('ua-compatible')

  app.use(uaCompatible)

  app.get('/', function (req, res) {
    res.get('X-UA-Compatible') // === 'IE=edge,chrome=1'
  })

  app.listen(3000)
```

## Credits
[Adam Duncan](https://github.com/microadam/)
