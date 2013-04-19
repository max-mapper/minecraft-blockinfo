# minecraft-blockinfo

look up minecraft block types + metadata from binary level data

extracted from code originally written by @ithkuil for [mcchunkloader](https://github.com/ithkuil/mcchunkloader), turned into a module and now maintained by @maxogden

minecraft is property of Mojang AB

```javascript
var blockInfo = require('minecraft-blockinfo')
var minecraftBlockIdentifier = '_2'
blockInfo.blocks[minecraftBlockIdentifier]
// returns:
{
  id: 2,
  type: 'grass',
  rgba: [0.0, 0.6, 0.0, 1.0],
  t: [8, 2]
}
```

there is also metadata for various minecraft blocks and items:

```js
[ 'colored_wool',
  'wooden_plank',
  'wood',
  'leaves',
  'torches',
  'slabs',
  'wooden_slab',
  'sandstone',
  'bed',
  'grass',
  'stairs',
  'attachments',
  'cobblestone_wall',
  'quartz',
  'coal',
  'blocks' ]
  
// e.g.:

blockInfo.wood

// returns
{
  "0": "oak_wood",
  "1": "spruce_wood",
  "2": "birch_wood",
  "3": "jungle_wood"
}
```

designed for use with [browserify](http://browserify.org)

# license

BSD