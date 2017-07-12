import assert from 'assert';
import unflattenRecursive from '../src/index.js';

describe('unflatten-recursive', () => {
  it('should recursively unflatten a javascript object', () => {
    const actual = unflattenRecursive({
      'listing.contactsInfo.email': 'email',
      'listing.contactsInfo.phone': '1234567890',
      'listing.images': [
        {original: 'http://image.com/1.jpg', height: 100, width: 300},
        {original: 'http://image.com/2.jpg', height: 100, width: 300},
        {original: 'http://image.com/3.jpg', height: 100, width: 300},
      ],
      'listing.nested.listOfStuff': [
        {'lol.stillNested': ':)', 'lol.srsly': ':D'},
        {'lol.stillNested': '(:', 'lol.srsly': 'D:'},
        {'lol.stillNested': 'catchin', 'lol.srsly': 'bugs'},
      ],
      'listing.topLevelKey': 'super sweet top level key',
      'listing.code': [
        'up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a', 'start',
      ],
      'listing.listOfTruths': [
        {
          marcusIs: 'very good at super smash brothers',
          'nestedTruth.marcusIsExcellentAtSuperSmashBrothers': true,
        },
        'seriously marcus is good at super smash brothers',
        'like really really good',
        {press1IfMarcusIsGoodAtSmash: 1},
        'show me your moves',
        null,
      ],
      nullValue: null,
      'nullV.nested.value': null,
    });

    assert.deepEqual(actual, {
      listing: {
        contactsInfo: {
          email: 'email',
          phone: '1234567890',
        },
        images: [
          {original: 'http://image.com/1.jpg', height: 100, width: 300},
          {original: 'http://image.com/2.jpg', height: 100, width: 300},
          {original: 'http://image.com/3.jpg', height: 100, width: 300},
        ],
        nested: {
          listOfStuff: [
            {
              lol: {
                stillNested: ':)',
                srsly: ':D',
              },
            },
            {
              lol: {
                stillNested: '(:',
                srsly: 'D:',
              },
            },
            {
              lol: {
                stillNested: 'catchin',
                srsly: 'bugs',
              },
            },
          ],
        },
        topLevelKey: 'super sweet top level key',
        code: ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a', 'start'],
        listOfTruths: [
          {
            marcusIs: 'very good at super smash brothers',
            nestedTruth: {
              marcusIsExcellentAtSuperSmashBrothers: true,
            },
          },
          'seriously marcus is good at super smash brothers',
          'like really really good',
          {
            press1IfMarcusIsGoodAtSmash: 1,
          },
          'show me your moves',
          null,
        ],
      },
      nullValue: null,
      nullV: {
        nested: {
          value: null,
        },
      },
    });
  });
});
