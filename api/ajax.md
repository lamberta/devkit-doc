# Event Model

The Game Closure SDK provides functions which make it easy to 
download data from remote locations. These functions can be found
in the `ajax` package and wrap the `XMLHttpRequest` object.

Examples:

* [Subscribe to an event](../example/ui-list-ajax/)

## Function util.ajax.get (opts, cb)
1. `opts {object}` ---Options
       * `url {string}` ---The URL
       * `type {string}` ---Optional, can be unset or `json`
       * `headers {object}` ---Optional, a list of http headers
    
2. `cb {function}` ---Optional, The callback which is called when the data is downloaded

## Function util.ajax.post (opts, cb)
1. `opts {object}` ---Options
       * `url {string}` ---The URL
       * `type {string}` ---Optional, can be unset or `json`
       * `headers {object}` ---Optional, a list of http headers
    
2. `cb {function}` ---Optional, The callback which is called when the data is downloaded
