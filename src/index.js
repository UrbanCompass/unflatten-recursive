import {unflatten} from 'flat';

/**
 * Unflattens object recursively while preserving arrays. Contents of arrays are unflattened.
 *
 * Note: UNLIKE OTHER OPEN SOURCE LIB such as `flat`, this lib also loops through arrays and
 * unflattens the array members recursively.
 *
 * Input:
 *  {
 *     'key.nestedKey': 'value',
 *     'key.arr': [{a : 'a'}, 1, {'arrKey.nestedArrKey': 'arrValue'}]
 *  }
 *
 * Output:
 *  {
 *    key: {
 *      nestedKey: 'value',
 *      arr: [{a: 'a'}, 1, {arrKey: {nestedArrKey: 'arrValue'}}]
 *    }
 *  }
 *
 *
 * For more examples see test/spec.js
 *
 * @param {Object} obj
 * @returns {Object} unflattened
 */
export default function unflattenRecursive(obj) {
  Object.keys(obj).forEach((key) => {
    const value = obj[key];

    // The safe option in unflatten prevents arrays from being unflattend. This loop unflattens the
    // arrays (one level deep) that appear in obj. The recursive call will unflatten nested arrays.
    if (Array.isArray(value)) {
      for (let i = 0; i < value.length; i++) {
        const valueElement = value[i];

        if (valueElement && typeof valueElement === 'object') {
          value[i] = unflattenRecursive(valueElement);
        }
      }
    }
  });

  return unflatten(obj, {safe: true});
}
