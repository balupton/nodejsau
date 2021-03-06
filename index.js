var path        = require('path')
  , splinksmvc  = require('splink-smvc')
  , isDev       = require('./lib/static-data').isDev

require('./lib/polyhackbot')()

// init swig with 'root' param, this isn't done by `consolidate` but required by
// swig if you want to reference templates from within templates
require('swig').init({ root: path.join(__dirname, 'views'), cache: !isDev })

splinksmvc({
    port     : process.env.PORT || 3000
  , scan     : [
        path.join(__dirname, './lib')
    ]
  , 'static' : {
        path       : path.join(__dirname, './assets')
      , url        : '/'
    }
  , 'views'  : {
        path       : path.join(__dirname, './views')
      , suffix     : 'html'
      , processor  : 'swig'
    }
}).start()