# Ajax

The Game Closure SDK provides functions which make it easy to 
download data from remote locations. These functions can be found
in the `ajax` package and wrap the `XMLHttpRequest` object.

Examples:

* [Subscribe to an event](../example/ui-list-ajax/)

## Function util.ajax.get (opts, cb)
1. `opts {object}` ---Options
       * `url {string}` ---The URL
       * `type {string}` ---Optional, can be unset or `json`
       * `data {object}` ---Optional, the data to send
       * `headers {object}` ---Optional, a list of http headers
    
2. `cb {function}` ---Optional, The callback which is called when the data is downloaded

~~~
import util.ajax as ajax;
~~~

Sending a get request

The following code fragement shows how to get data from the Facebook search API.
The url parameter has the location of search API. The header is set to `text-plain` which
is actually the default value.

The data option has two fields which are specific to this API, they are `q` which is the text
to search for and `type` which is where to search (in posts). If the get function is invoked 
as demonstrated here then the values of `data` will be url encoded and appended to the url.

When the result is downloaded it will be parsed as JSON because the type was set to `json`.
~~~
ajax.get(
  {
     url: 'http://graph.facebook.com/search',
     headers: {'Content-Type': 'text/plain'},
     data: {q: 'game', type: 'post'},
     type: 'json'
  },
  function (err, response) {
     if (err) {
        console.error('someting went wrong');
     } else {
        console.log(response);
     }
  }
~~~

## Function util.ajax.post (opts, cb)
1. `opts {object}` ---Options
       * `url {string}` ---The URL
       * `type {string}` ---Optional, can be unset or `json`
       * `headers {object}` ---Optional, a list of http headers
    
2. `cb {function}` ---Optional, The callback which is called when the data is downloaded
