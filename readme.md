# minecraft-blockinfo

hashtable for looking up minecraft block types from binary level data

extracted from code originally written by @ithkuil for [mcchunkloader](https://github.com/ithkuil/mcchunkloader), turned into a module and now maintained by @maxogden

minecraft is property of Mojang AB

```javascript
var blockInfo = require('minecraft-blockinfo')
var minecraftBlockIdentifier = '_2'
blockInfo[minecraftBlockIdentifier]
// returns:
{
  id: 2,
  type: 'grass',
  rgba: [0.0, 0.6, 0.0, 1.0],
  t: [8, 2]
}
```

designed for use with [browserify](http://browserify.org)

# license

BSD