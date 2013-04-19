// mostly from http://www.minecraftwiki.net/wiki/Data_values#Data

// TODO (fork and contribute!): water, lava, fire, saplings, wood rotation, decay of leaves, slab orientation, piston, piston extension, redstone wire, crops, sign posts, farmland, door, rails, levers, pressure plates, buttons, snowfall, cacti, sugar cane, jukebox, pumpkins, cake, redstone repeaters, trapdoors, monster egg, stone brick, mushrooms, stems, vines, fence gates, nether wart, brewing stand, cauldron, end portal block, cocoas, tripwire hook, tripwire, flower pots, heads, dyes, anvil, potions, status effects, spawn eggs, golden apple

module.exports.colored_wool = {
  "0":   {"color": "ffffff", "name": "White"},
  "1":   {"color": "ffa800", "name": "Orange"},
  "2":   {"color": "ea01ff", "name": "Magenta"},
  "3":   {"color": "b1eeff", "name": "Light Blue"},
  "4":   {"color": "fdfa00", "name": "Yellow"},
  "5":   {"color": "54ff00", "name": "Lime"},
  "6":   {"color": "ff00ea", "name": "Pink"},
  "7":   {"color": "b8b8b8", "name": "Gray"},
  "8":   {"color": "ebebeb", "name": "Light Gray"},
  "9":   {"color": "2efff8", "name": "Cyan"},
  "10":  {"color": "9e0ec7", "name": "Purple"},
  "11":  {"color": "1334ff", "name": "Blue"},
  "12":  {"color": "896862", "name": "Brown"},
  "13":  {"color": "0c840f", "name": "Green"},
  "14":  {"color": "f00000", "name": "Red"},
  "15":  {"color": "000000", "name": "Black"}
}

// alternative wool colors
// • White      - FFe4e4e4 
// • Light Gray - FFa0a7a7 
// • Dark Gray  - FF414141 
// • Black      - FF181414 
// • Red        - FF9e2b27 
// • Orange     - FFea7e35 
// • Yellow     - FFc2b51c 
// • Lime Green - FF39ba2e 
// • Green      - FF364b18 
// • Light Blue - FF6387d2 
// • Cyan       - FF267191 
// • Blue       - FF253193 
// • Purple     - FF7e34bf 
// • Magenta    - FFbe49c9 
// • Pink       - FFd98199 
// • Brown      - FF56331c

module.exports.wooden_plank = {
  "0": "oak_wood_planks",
  "1": "spruce_wood_planks",
  "2": "birch_wood_planks",
  "3": "jungle_wood_planks"
}

module.exports.wood = {
  "0": "oak_wood",
  "1": "spruce_wood",
  "2": "birch_wood",
  "3": "jungle_wood"
}

module.exports.leaves = {
  "0": "oak_leaves",
  "1": "spruce_leaves",
  "2": "birch_leaves",
  "3": "jungle_leaves"
}

module.exports.torches = {
  "1": "east",
  "2": "west",
  "3": "south",
  "4": "north",
  "5": "floor",
  "6": "ground" // not sure what the diff is between the last two
}

module.exports.slabs = {
  "0": "stone_slab",
  "1": "sandstone_slab",
  "2": "wooden_slab",
  "3": "cobblestone_slab",
  "4": "brick_slab",
  "5": "stone_brick_slab",
  "6": "nether_brick_slab",
  "7": "quartz_slab",
  // double slabs only:
  "8": "smooth_stone_slab",
  "9": "smooth_sandstone_slab",
  "15": "tile_quartz_slab" // note the underside
}

module.exports.wooden_slab = {
  "0": "oak_wood_slab", 
  "1": "spruce_wood_slab",
  "2": "birch_wood_slab",
  "3": "jungle_wood_slab"
}

module.exports.sandstone = {
  "0": "normal",
  "1": "chiseled",
  "2": "smooth"
}

module.exports.bed = {
  "0": "Head is pointing south",
  "1": "Head is pointing west",
  "2": "Head is pointing north",
  "3": "Head is pointing east"
}

module.exports.grass = {
  "0": "shrub", // (identical in appearance to block Dead Bush when placed, but acts like grass or fern)
  "1": "grass",
  "2": "fern",
}

// ascending direction
module.exports.stairs = {
  "0": "east",
  "1": "west",
  "2": "south",
  "3": "north"
}

// facing direction
module.exports.attachments = {
  "0": "down",
  "1": "up",
  "2": "north",
  "3": "south",
  "4": "west",
  "5": "east"
}

module.exports.cobblestone_wall = {
  "0": "cobblestone",
  "1": "moss_stone"
}

module.exports.quartz = {
  "0": "quartz_block",
  "1": "chiseled_quartz_block",
  "2": "pillar_quartz_block_vertical",
  "3": "pillar_quartz_block_north_south",
  "4": "pillar_quartz_block_east_west"
}

module.exports.coal = {
  "0": "coal",
  "1": "charcoal"
}

module.exports.blocks = {
  "_-1": {
    id: -10,
    type: "fill"
  },
  "_1": {
    "type": "stone",
    "id": 1
  },
  "_2": {
    "type": "grass",
    "id": 2
  },
  "_3": {
    "type": "dirt",
    "id": 3
  },
  "_4": {
    "type": "cobblestone",
    "id": 4
  },
  "_5": {
    "type": "wooden_plank",
    "id": 5,
    "data": module.exports.wooden_plank
  },
  "_6": {
    "type": "sapling",
    "id": 6
  },
  "_7": {
    "type": "adminium",
    "id": 7
  },
  "_8": {
    "type": "water",
    "id": 8
  },
  "_9": {
    "type": "stationary_water",
    "id": 9
  },
  "_10": {
    "type": "lava",
    "id": 10
  },
  "_11": {
    "type": "stationary_lava",
    "id": 11
  },
  "_12": {
    "type": "sand",
    "id": 12
  },
  "_13": {
    "type": "gravel",
    "id": 13
  },
  "_14": {
    "type": "gold_ore",
    "id": 14
  },
  "_15": {
    "type": "iron_ore",
    "id": 15
  },
  "_16": {
    "type": "coal_ore",
    "id": 16
  },
  "_17": {
    "type": "wood",
    "id": 17,
    "data": module.exports.wood
  },
  "_18": {
    "type": "leaves",
    "id": 18,
    "data": module.exports.leaves
  },
  "_19": {
    "type": "sponge",
    "id": 19
  },
  "_20": {
    "type": "glass",
    "id": 20
  },
  "_21": {
    "type": "lapis_lazuli_ore",
    "id": 21
  },
  "_22": {
    "type": "lapis_lazuli_block",
    "id": 22
  },
  "_23": {
    "type": "dispenser",
    "id": 23,
    "data": module.exports.attachments
  },
  "_24": {
    "type": "sandstone",
    "id": 24,
    "data": module.exports.sandstone
  },
  "_25": {
    "type": "note_block",
    "id": 25
  },
  "_26": {
    "type": "colored_wool",
    "id": 26,
    "data": module.exports.colored_wool
  },
  "_27": {
    "type": "powered_rail",
    "id": 27
  },
  "_28": {
    "type": "detector_rail",
    "id": 28
  },
  "_29": {
    "type": "sticky_piston",
    "id": 29
  },
  "_30": {
    "type": "cobweb",
    "id": 30
  },
  "_31": {
    "type": "grass",
    "id": 31,
    "data": module.exports.grass
  },
  "_32": {
    "type": "dead_bush",
    "id": 32
  },
  "_33": {
    "type": "piston",
    "id": 33
  },
  "_34": {
    "type": "black_wool",
    "id": 34
  },
  "_35": {
    "type": "wool",
    "id": 35
  },
  "_36": {
    "type": "wool",
    "id": 36
  },
  "_37": {
    "type": "yellow_flower",
    "id": 37
  },
  "_38": {
    "type": "red_flower",
    "id": 38
  },
  "_39": {
    "type": "brown_mushroom",
    "id": 39
  },
  "_40": {
    "type": "red_mushroom",
    "id": 40
  },
  "_41": {
    "type": "gold_block",
    "id": 41
  },
  "_42": {
    "type": "iron_block",
    "id": 42
  },
  "_43": {
    "type": "double_slabs",
    "id": 43,
    "data": module.exports.slabs
  },
  "_44": {
    "type": "slabs",
    "id": 44,
    "data": module.exports.slabs
  },
  "_45": {
    "type": "brick",
    "id": 45
  },
  "_46": {
    "type": "tnt",
    "id": 46
  },
  "_47": {
    "type": "bookshelf",
    "id": 47
  },
  "_48": {
    "type": "moss_stone",
    "id": 48
  },
  "_49": {
    "type": "obsidian",
    "id": 49
  },
  "_50": {
    "type": "torch",
    "id": 50,
    "data": module.exports.torches
  },
  "_51": {
    "type": "fire",
    "id": 51
  },
  "_52": {
    "type": "monster_spawner",
    "id": 52
  },
  "_53": {
    "type": "wooden_stairs",
    "id": 53,
    "data": module.exports.stairs
  },
  "_54": {
    "type": "chest",
    "id": 54,
    "data": module.exports.attachments
  },
  "_55": {
    "type": "redstone_wire",
    "id": 55
  },
  "_56": {
    "type": "diamond_ore",
    "id": 56
  },
  "_57": {
    "type": "diamond_block",
    "id": 57
  },
  "_58": {
    "type": "workbench",
    "id": 58
  },
  "_59": {
    "type": "wheat_seeds",
    "id": 59
  },
  "_60": {
    "type": "soil",
    "id": 60
  },
  "_61": {
    "type": "furnace",
    "id": 61,
    "data": module.exports.attachments
  },
  "_62": {
    "type": "burning_furnace",
    "id": 62
  },
  "_63": {
    "type": "signpost",
    "id": 63
  },
  "_64": {
    "type": "wooden_door",
    "id": 64
  },
  "_65": {
    "type": "ladder",
    "id": 65,
    "data": module.exports.attachments
  },
  "_66": {
    "type": "minecart_track",
    "id": 66
  },
  "_67": {
    "type": "cobblestone_stairs",
    "id": 67,
    "data": module.exports.stairs
  },
  "_68": {
    "type": "wall_sign",
    "id": 68,
    "data": module.exports.attachments
  },
  "_69": {
    "type": "lever",
    "id": 69
  },
  "_70": {
    "type": "stone_pressure_plate",
    "id": 70
  },
  "_71": {
    "type": "iron_door",
    "id": 71
  },
  "_72": {
    "type": "wooden_pressure_plate",
    "id": 72
  },
  "_73": {
    "type": "redstone_ore",
    "id": 73
  },
  "_74": {
    "type": "glowing_redstone_ore",
    "id": 74
  },
  "_75": {
    "type": "redstone_torch_off",
    "id": 75,
    "data": module.exports.torches
  },
  "_76": {
    "type": "redstone_torch_on",
    "id": 76,
    "data": module.exports.torches
  },
  "_77": {
    "type": "stone_button",
    "id": 77
  },
  "_78": {
    "type": "snow",
    "id": 78
  },
  "_79": {
    "type": "ice",
    "id": 79
  },
  "_80": {
    "type": "snow_block",
    "id": 80
  },
  "_81": {
    "type": "cactus",
    "id": 81
  },
  "_82": {
    "type": "clay",
    "id": 82
  },
  "_83": {
    "type": "sugar_cane",
    "id": 83
  },
  "_84": {
    "type": "jukebox",
    "id": 84
  },
  "_85": {
    "type": "fence",
    "id": 85
  },
  "_86": {
    "type": "pumpkin",
    "id": 86
  },
  "_87": {
    "type": "netherrack",
    "id": 87
  },
  "_88": {
    "type": "soul_sand",
    "id": 88
  },
  "_89": {
    "type": "glowstone",
    "id": 89
  },
  "_90": {
    "type": "portal",
    "id": 90
  },
  "_91": {
    "type": "jack-o-lantern",
    "id": 91
  },
  "_92": {
    "type": "cake",
    "id": 92
  },
  "_95": {
    "type": "locked_chest",
    "id": 95,
    "data": module.exports.attachments
  },
  "_96": {
    "type": "trapdoor",
    "id": 96
  },
  "_97": {
    "type": "monster_egg",
    "id": 97
  },
  "_98": {
    "type": "stone_brick",
    "id": 98
  },
  "_99": {
    "type": "huge_brown_mushroom",
    "id": 99
  },
  "_100": {
    "type": "huge_red_mushroom",
    "id": 100
  },
  "_101": {
    "type": "iron_bars",
    "id": 101
  },
  "_102": {
    "type": "glass_pane",
    "id": 102
  },
  "_103": {
    "type": "melon",
    "id": 103
  },
  "_106": {
    "type": "vines",
    "id": 106
  },
  "_107": {
    "type": "fence_gate",
    "id": 107
  },
  "_108": {
    "type": "brick_stairs",
    "id": 108,
    "data": module.exports.stairs
  },
  "_109": {
    "type": "stone_brick_stairs",
    "id": 109,
    "data": module.exports.stairs
  },
  "_110": {
    "type": "mycelium",
    "id": 110
  },
  "_111": {
    "type": "lily_pad",
    "id": 111
  },
  "_112": {
    "type": "nether_brick",
    "id": 112
  },
  "_113": {
    "type": "nether_brick_fence",
    "id": 113
  },
  "_114": {
    "type": "nether_brick_stairs",
    "id": 114,
    "data": module.exports.stairs
  },
  "_116": {
    "type": "enchantment_table",
    "id": 116
  },
  "_121": {
    "type": "end_stone",
    "id": 121
  },
  "_122": {
    "type": "dragon_egg",
    "id": 122
  },
  "_123": {
    "type": "redstone_lamp",
    "id": 123
  },
  "_126": {
    "type": "wooden_slab",
    "id": 126,
    "data": module.exports.wooden_slab
  },
  "_127": {
    "type": "cocoa_plant",
    "id": 127
  },
  "_128": {
    "type": "sandstone_stairs",
    "id": 128,
    "data": module.exports.stairs
  },
  "_129": {
    "type": "emerald_ore",
    "id": 129
  },
  "_130": {
    "type": "ender_chest",
    "id": 130,
    "data": module.exports.attachments
  },
  "_133": {
    "type": "block_of_emerald",
    "id": 133
  },
  "_134": {
    "type": "spruce_wood_stairs",
    "id": 134,
    "data": module.exports.stairs
  },
  "_135": {
    "type": "birch_wood_stairs",
    "id": 135,
    "data": module.exports.stairs
  },
  "_136": {
    "type": "jungle_wood_stairs",
    "id": 136,
    "data": module.exports.stairs
  },
  "_137": {
    "type": "command_block",
    "id": 137
  },
  "_138": {
    "type": "beacon",
    "id": 138
  },
  "_139": {
    "type": "cobblestone_wall",
    "id": 139,
    "data": module.exports.cobblestone_wall
  },
  "_143": {
    "type": "wooden_button",
    "id": 143
  },
  "_145": {
    "type": "anvil",
    "id": 145
  },
  "_146" : {
    "id": 146, 
    "type": "trapped_chest",
    "data": module.exports.attachments
  },
  "_147": {
    "id": 147, 
    "type": "weighted_pressure_plate_light"
  },
  "_148": {
    "id": 148, 
    "type": "weighted_pressure_plate_heavy"
  },
  "_149": {
    "id": 149, 
    "type": "redstone_comparator_inactive"
  },
  "_150": {
    "id": 150, 
    "type": "redstone_comparator_active"
  },
  "_151": {
    "id": 151, 
    "type": "daylight_sensor"
  },
  "_152": {
    "id": 152, 
    "type": "redstone_block"
  },
  "_153": {
    "id": 153,
    "type": "nether_quartz_ore"
  },
  "_154": {
    "id": 154, 
    "type": "hopper",
    "data": module.exports.attachments
  },
  "_155": {
    "id": 155, 
    "type": "quartz_block"
  },
  "_156": {
    "id": 156, 
    "type": "quartz_stairs",
    "data": module.exports.stairs
  },
  "_157": {
    "id": 157, 
    "type": "activator_rail"
  },
  "_158": {
    "id": 158, 
    "type": "dropper",
    "data": module.exports.attachments
  },
  "_170": {
    "id": 170, 
    "type": "hay_bale"
  },
  "_171": {
    "id": 171, 
    "type": "carpet"
  },
  "_260": {
    "type": "apple",
    "id": 260
  },
  "_262": {
    "type": "arrow",
    "id": 262
  },
  "_263": {
    "type": "coal",
    "id": 263,
    "data": module.exports.coal
  },
  "_264": {
    "type": "diamond",
    "id": 264
  },
  "_265": {
    "type": "iron_ingot",
    "id": 265
  },
  "_266": {
    "type": "gold_ingot",
    "id": 266
  },
  "_280": {
    "type": "stick",
    "id": 280
  },
  "_281": {
    "type": "bowl",
    "id": 281
  },
  "_282": {
    "type": "mushroom_soup",
    "id": 282
  },
  "_287": {
    "type": "string",
    "id": 287
  },
  "_288": {
    "type": "feather",
    "id": 288
  },
  "_289": {
    "type": "gun_powder",
    "id": 289
  },
  "_295": {
    "type": "seeds",
    "id": 295
  },
  "_296": {
    "type": "wheat",
    "id": 296
  },
  "_297": {
    "type": "bread",
    "id": 297
  },
  "_318": {
    "type": "flint",
    "id": 318
  },
  "_319": {
    "type": "raw_porkchop",
    "id": 319
  },
  "_320": {
    "type": "cooked_porkchop",
    "id": 320
  },
  "_321": {
    "type": "paintings",
    "id": 321
  },
  "_322": {
    "type": "golden_apple",
    "id": 322
  },
  "_323": {
    "type": "sign",
    "id": 323
  },
  "_324": {
    "type": "wooden_door",
    "id": 324
  },
  "_325": {
    "type": "bucket",
    "id": 325
  },
  "_326": {
    "type": "water_bucket",
    "id": 326
  },
  "_327": {
    "type": "lava_bucket",
    "id": 327
  },
  "_329": {
    "type": "saddle",
    "id": 329
  },
  "_330": {
    "type": "iron_door",
    "id": 330
  },
  "_331": {
    "type": "redstone_dust",
    "id": 331
  },
  "_332": {
    "type": "snowball",
    "id": 332
  },
  "_333": {
    "type": "boat",
    "id": 333
  },
  "_334": {
    "type": "leather",
    "id": 334
  },
  "_335": {
    "type": "milk",
    "id": 335
  },
  "_336": {
    "type": "clay_brick",
    "id": 336
  },
  "_337": {
    "type": "clay_balls",
    "id": 337
  },
  "_338": {
    "type": "sugar_cane",
    "id": 338
  },
  "_339": {
    "type": "paper",
    "id": 339
  },
  "_340": {
    "type": "book",
    "id": 340
  },
  "_341": {
    "type": "slimeball",
    "id": 341
  },
  "_344": {
    "type": "egg",
    "id": 344
  },
  "_346": {
    "type": "fishing_rod",
    "id": 346
  },
  "_348": {
    "type": "glowstone_dust",
    "id": 348
  },
  "_349": {
    "type": "raw_fish",
    "id": 349
  },
  "_350": {
    "type": "cooked_fish",
    "id": 350
  },
  "_351": {
    "type": "dyes",
    "id": 351
  },
  "_352": {
    "type": "bone",
    "id": 352
  },
  "_353": {
    "type": "sugar",
    "id": 353
  },
  "_354": {
    "type": "cake",
    "id": 354
  },
  "_354": {
    "type": "bed",
    "id": 355,
    "data": module.exports.bed
  },
  "_356": {
    "type": "redstone_repeater",
    "id": 356
  },
  "_357": {
    "type": "cookie",
    "id": 357
  },
  "_358": {
    "type": "map",
    "id": 358
  },
  "_359": {
    "type": "shears",
    "id": 359
  },
  "_360": {
    "type": "melon_slice",
    "id": 360
  },
  "_361": {
    "type": "pumpkin_seeds",
    "id": 361
  },
  "_362": {
    "type": "melon_seeds",
    "id": 362
  },
  "_363": {
    "type": "raw_beef",
    "id": 363
  },
  "_364": {
    "type": "steak",
    "id": 364
  },
  "_365": {
    "type": "raw_chicken",
    "id": 365
  },
  "_366": {
    "type": "cooked_chicken",
    "id": 366
  },
  "_367": {
    "type": "rotton_flesh",
    "id": 367
  },
  "_368": {
    "type": "ender_pearl",
    "id": 368
  },
  "_369": {
    "type": "blaze_rod",
    "id": 369
  },
  "_370": {
    "type": "ghast_tear",
    "id": 370
  },
  "_374": {
    "type": "glass_bottle",
    "id": 374
  },
  "_375": {
    "type": "spider_eye",
    "id": 375
  },
  "_376": {
    "type": "fermented_spider_eye",
    "id": 376
  },
  "_377": {
    "type": "blaze_powder",
    "id": 377
  },
  "_378": {
    "type": "magma_cream",
    "id": 378
  },
  "_379": {
    "type": "brewing_stand",
    "id": 379
  },
  "_380": {
    "type": "cauldron",
    "id": 380
  },
  "_381": {
    "type": "eye_of_ender",
    "id": 381
  },
  "_382": {
    "type": "glistering_melon",
    "id": 382
  },
  "_383": {
    "type": "spawn_eggs",
    "id": 383
  },
  "_384": {
    "type": "bottle_o_enchanting",
    "id": 384
  },
  "_385": {
    "type": "fire_charge",
    "id": 385
  },
  "_388": {
    "type": "emerald",
    "id": 388
  },
  "_390": {
    "type": "flower_pot",
    "id": 390
  },
  "_391": {
    "type": "carrot",
    "id": 391
  },
  "_392": {
    "type": "unknown",
    "id": 392
  },
  "_393": {
    "type": "baked_potato",
    "id": 393
  },
  "_394": {
    "type": "poisonous_potato",
    "id": 394
  },
  "_395": {
    "type": "map",
    "id": 395
  },
  "_396": {
    "type": "golden_carrot",
    "id": 396
  },
  "_397": {
    "type": "mob_head",
    "id": 397
  },
  "_399": {
    "type": "nether_star",
    "id": 399
  },
  "_400": {
    "type": "pumkpin_pie",
    "id": 400
  },
  "_401": {
    "type": "firework_rocket",
    "id": 401
  },
  "_402": {
    "type": "firework_star",
    "id": 402
  }
}