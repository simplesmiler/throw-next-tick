# throw-next-tick

> Throw the error in the next tick

## Install

``` sh
$ npm install throw-next-tick --save
```

## Usage

Can be used as a `.done` replacement for promises:

``` js
var throwNextTick = require('throw-next-tick');

promiseOfSomething
  .then(function(something) { ... })
  .catch(throwNextTick);
```

## License

[ISC](https://opensource.org/licenses/ISC)
