# unflatten-recursive [![CircleCI](https://circleci.com/gh/UrbanCompass/unflatten-recursive.svg?style=shield)](https://circleci.com/gh/UrbanCompass/unflatten-recursive)

Unflattens object recursively while preserving arrays. Contents of arrays are unflattened.

Note: UNLIKE OTHER OPEN SOURCE LIB, this lib also looping through arrays and unflatten the array
members recursively.

Input:
```
  {
     'key.nestedKey': 'value',
     'key.arr': [{a : 'a'}, 1, {'arrKey.nestedArrKey': 'arrValue'}]
  }
```
 Output:
```
  {
    key: {
      nestedKey: 'value',
      arr: [{a: 'a'}, 1, {arrKey: {nestedArrKey: 'arrValue'}}]
    }
  }
```

For more examples see test/spec.js

## Installation
```
npm install --save unflatten-recursive
```

## Usage
```js
import unflattenRecursive from 'unflatten-recursive';

unflattenRecursive({
  'a.b.c': 'something'
}); // {a: {b: {c: 'something'}}}
unflattenRecursive({
  'a.b': [
    {'c.d': 'nested'}
  ]
}); // {a: {b: [{c: {d: 'nested'}}]}}
```
