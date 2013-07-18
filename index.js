// mostly from http://www.minecraftwiki.net/wiki/Data_values#Data

// TODO (fork and contribute!): water, lava, fire, saplings, wood rotation, decay of leaves, slab orientation, piston, piston extension, redstone wire, crops, sign posts, farmland, door, rails, levers, pressure plates, buttons, snowfall, cacti, sugar cane, jukebox, pumpkins, cake, redstone repeaters, trapdoors, monster egg, stone brick, mushrooms, stems, vines, fence gates, nether wart, brewing stand, cauldron, end portal block, cocoas, tripwire hook, tripwire, flower pots, heads, dyes, anvil, potions, status effects, spawn eggs, golden apple

module.exports.colored_wool = {
  "0":   {"color": "ffffff", "name": "white_wool"},
  "1":   {"color": "ffa800", "name": "orange_wool"},
  "2":   {"color": "ea01ff", "name": "magenta_wool"},
  "3":   {"color": "b1eeff", "name": "light_blue_wool"},
  "4":   {"color": "fdfa00", "name": "yellow_wool"},
  "5":   {"color": "54ff00", "name": "lime_wool"},
  "6":   {"color": "ff00ea", "name": "pink_wool"},
  "7":   {"color": "b8b8b8", "name": "dark_gray_wool"},
  "8":   {"color": "ebebeb", "name": "light_gray_wool"},
  "9":   {"color": "2efff8", "name": "light_blue_wool"},
  "10":  {"color": "9e0ec7", "name": "purple_wool"},
  "11":  {"color": "1334ff", "name": "dark_blue_wool"},
  "12":  {"color": "896862", "name": "brown_wool"},
  "13":  {"color": "0c840f", "name": "green_wool"},
  "14":  {"color": "f00000", "name": "red_wool"},
  "15":  {"color": "000000", "name": "black_wool"}
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

module.exports.leaves_opaque = {
  "0": "oak_leaves_opaque",
  "1": "spruce_leaves_opaque",
  "2": "birch_leaves_opaque",
  "3": "jungle_leaves_opaque"
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
    "id": -10,
    "type": "fill",
    "color": "#6e562c"
  },
  "_1": {
    "type": "stone",
    "id": 1,
    "color": "#807f66"
  },
  "_2": {
    "type": "grass",
    "id": 2,
    "color": "#04520f"
  },
  "_3": {
    "type": "dirt",
    "id": 3,
    "color": "#6e562c"
  },
  "_4": {
    "type": "cobblestone",
    "id": 4,
    "color": "#6d6d6d"
  },
  "_5": {
    "type": "wooden_plank",
    "id": 5,
    "color": "#a4844c",
    "data": module.exports.wooden_plank
  },
  "_6": {
    "type": "sapling",
    "id": 6,
    "color": "#3c1c04"
  },
  "_7": {
    "type": "adminium",
    "id": 7,
    "color": "#8a8872"
  },
  "_8": {
    "type": "water",
    "id": 8,
    "color": "#6c8cdc"
  },
  "_9": {
    "type": "stationary_water",
    "id": 9,
    "color": "#4c54fc"
  },
  "_10": {
    "type": "lava",
    "id": 10,
    "color": "#fca404"
  },
  "_11": {
    "type": "stationary_lava",
    "id": 11,
    "color": "#fca404"
  },
  "_12": {
    "type": "sand",
    "id": 12,
    "color": "#d8d3b5"
  },
  "_13": {
    "type": "gravel",
    "id": 13,
    "color": "#565032"
  },
  "_14": {
    "type": "gold_ore",
    "id": 14,
    "color": "#7a7761"
  },
  "_15": {
    "type": "iron_ore",
    "id": 15,
    "color": "#898b78"
  },
  "_16": {
    "type": "coal_ore",
    "id": 16,
    "color": "#232318"
  },
  "_17": {
    "type": "wood",
    "id": 17,
    "color": "#401409",
    "data": module.exports.wood
  },
  "_18": {
    "type": "leaves",
    "id": 18,
    "color": "#044604",
    "data": module.exports.leaves
  },
  "_19": {
    "type": "sponge",
    "id": 19,
    "color": "#dad5a3"
  },
  "_20": {
    "type": "glass",
    "id": 20,
    "color": "#5e7479"
  },
  "_21": {
    "type": "lapis_lazuli_ore",
    "id": 21,
    "color": "#777763"
  },
  "_22": {
    "type": "lapis_lazuli_block",
    "id": 22,
    "color": "#1632ac"
  },
  "_23": {
    "type": "dispenser",
    "id": 23,
    "color": "#a3a18f",
    "data": module.exports.attachments
  },
  "_24": {
    "type": "sandstone",
    "id": 24,
    "color": "#d4d0ad",
    "data": module.exports.sandstone
  },
  "_25": {
    "type": "note_block",
    "id": 25,
    "color": "#633604"
  },
  "_26": {
    "type": "colored_wool",
    "id": 26,
    "color": "#a90c14",
    "data": module.exports.colored_wool
  },
  "_27": {
    "type": "powered_rail",
    "id": 27,
    "color": "#dea055"
  },
  "_28": {
    "type": "detector_rail",
    "id": 28,
    "color": "#dd7442"
  },
  "_29": {
    "type": "sticky_piston",
    "id": 29,
    "color": "#69590f"
  },
  "_30": {
    "type": "cobweb",
    "id": 30,
    "color": "#f4f4f4"
  },
  "_31": {
    "type": "grass",
    "id": 31,
    "color": "#04520f",
    "data": module.exports.grass
  },
  "_32": {
    "type": "dead_bush",
    "id": 32,
    "color": "#647c0c"
  },
  "_33": {
    "type": "piston",
    "id": 33,
    "color": "#a09e92"
  },
  "_34": {
    "type": "black_wool",
    "id": 34,
    "color": "#1e1c1c"
  },
  "_35": {
    "type": "wool",
    "id": 35,
    "color": "#e8e8e8"
  },
  "_36": {
    "type": "wool",
    "id": 36,
    "color": "#e8e8e8"
  },
  "_37": {
    "type": "yellow_flower",
    "id": 37,
    "color": "#f4dc54"
  },
  "_38": {
    "type": "red_flower",
    "id": 38,
    "color": "#f4dc54"
  },
  "_39": {
    "type": "brown_mushroom",
    "id": 39,
    "color": "#bfaa88"
  },
  "_40": {
    "type": "red_mushroom",
    "id": 40,
    "color": "#8c8474"
  },
  "_41": {
    "type": "gold_block",
    "id": 41,
    "color": "#e0c474"
  },
  "_42": {
    "type": "iron_block",
    "id": 42,
    "color": "#b0b0b0"
  },
  "_43": {
    "type": "double_slabs",
    "id": 43,
    "color": "#5f5e49",
    "data": module.exports.slabs
  },
  "_44": {
    "type": "slabs",
    "id": 44,
    "color": "#9e9d88",
    "data": module.exports.slabs
  },
  "_45": {
    "type": "brick",
    "id": 45,
    "color": "#844214"
  },
  "_46": {
    "type": "tnt",
    "id": 46,
    "color": "#413109"
  },
  "_47": {
    "type": "bookshelf",
    "id": 47,
    "color": "#642208"
  },
  "_48": {
    "type": "moss_stone",
    "id": 48,
    "color": "#577b37"
  },
  "_49": {
    "type": "obsidian",
    "id": 49,
    "color": "#0c0c0c"
  },
  "_50": {
    "type": "torch",
    "id": 50,
    "color": "#6c6c6c",
    "data": module.exports.torches
  },
  "_51": {
    "type": "fire",
    "id": 51,
    "color": "#fcac04"
  },
  "_52": {
    "type": "monster_spawner",
    "id": 52,
    "color": "#477c20"
  },
  "_53": {
    "type": "wooden_stairs",
    "id": 53,
    "color": "#7c744e"
  },
  "_54": {
    "type": "chest",
    "id": 54,
    "color": "#5e3205",
    "data": module.exports.attachments
  },
  "_55": {
    "type": "redstone_wire",
    "id": 55,
    "color": "#d4bcb4"
  },
  "_56": {
    "type": "diamond_ore",
    "id": 56,
    "color": "#86846e"
  },
  "_57": {
    "type": "diamond_block",
    "id": 57,
    "color": "#4a6676"
  },
  "_58": {
    "type": "workbench",
    "id": 58,
    "color": "#4e2607"
  },
  "_59": {
    "type": "wheat_seeds",
    "id": 59,
    "color": "#c1a648"
  },
  "_60": {
    "type": "soil",
    "id": 60,
    "color": "#6e562c"
  },
  "_61": {
    "type": "furnace",
    "id": 61,
    "color": "#8c8676",
    "data": module.exports.attachments
  },
  "_62": {
    "type": "burning_furnace",
    "id": 62,
    "color": "#8c8676"
  },
  "_63": {
    "type": "signpost",
    "id": 63,
    "color": "#4a2404"
  },
  "_64": {
    "type": "wooden_door",
    "id": 64,
    "color": "#5e3205"
  },
  "_65": {
    "type": "ladder",
    "id": 65,
    "color": "#542404",
    "data": module.exports.attachments
  },
  "_66": {
    "type": "minecart_track",
    "id": 66,
    "color": "#818181"
  },
  "_67": {
    "type": "cobblestone_stairs",
    "id": 67,
    "color": "#807f66",
    "data": module.exports.stairs
  },
  "_68": {
    "type": "wall_sign",
    "id": 68,
    "color": "#4a2404",
    "data": module.exports.attachments
  },
  "_69": {
    "type": "lever",
    "id": 69,
    "color": "#4c2404"
  },
  "_70": {
    "type": "stone_pressure_plate",
    "id": 70,
    "color": "#807f66"
  },
  "_71": {
    "type": "iron_door",
    "id": 71,
    "color": "#28282f"
  },
  "_72": {
    "type": "wooden_pressure_plate",
    "id": 72,
    "color": "#7c744e"
  },
  "_73": {
    "type": "redstone_ore",
    "id": 73,
    "color": "#81806a"
  },
  "_74": {
    "type": "glowing_redstone_ore",
    "id": 74,
    "color": "#81806a"
  },
  "_75": {
    "type": "redstone_torch_off",
    "id": 75,
    "color": "#6c6c6c",
    "data": module.exports.torches
  },
  "_76": {
    "type": "redstone_torch_on",
    "id": 76,
    "color": "#6c6c6c",
    "data": module.exports.torches
  },
  "_77": {
    "type": "stone_button",
    "id": 77,
    "color": "#807f66"
  },
  "_78": {
    "type": "snow",
    "id": 78,
    "color": "#f4fcfc"
  },
  "_79": {
    "type": "ice",
    "id": 79,
    "color": "#719bfb"
  },
  "_80": {
    "type": "snow_block",
    "id": 80,
    "color": "#f4fcfc"
  },
  "_81": {
    "type": "cactus",
    "id": 81,
    "color": "#849c14"
  },
  "_82": {
    "type": "clay",
    "id": 82,
    "color": "#90491e"
  },
  "_83": {
    "type": "sugar_cane",
    "id": 83,
    "color": "#046404"
  },
  "_84": {
    "type": "jukebox",
    "id": 84,
    "color": "#633604"
  },
  "_85": {
    "type": "fence",
    "id": 85,
    "color": "#9c9ca4"
  },
  "_86": {
    "type": "pumpkin",
    "id": 86,
    "color": "#ce7104"
  },
  "_87": {
    "type": "netherrack",
    "id": 87,
    "color": "#9f514b"
  },
  "_88": {
    "type": "soul_sand",
    "id": 88,
    "color": "#d8d3b5"
  },
  "_89": {
    "type": "glowstone",
    "id": 89,
    "color": "#e5ad54"
  },
  "_90": {
    "type": "portal",
    "id": 90,
    "color": "#9f514b"
  },
  "_91": {
    "type": "jack-o-lantern",
    "id": 91,
    "color": "#f8da19"
  },
  "_92": {
    "type": "cake",
    "id": 92,
    "color": "#eeeece"
  },
  "_95": {
    "type": "locked_chest",
    "id": 95,
    "color": "#5e3205",
    "data": module.exports.attachments
  },
  "_96": {
    "type": "trapdoor",
    "id": 96,
    "color": "#5f3004"
  },
  "_97": {
    "type": "monster_egg",
    "id": 97,
    "color": "#477c20"
  },
  "_98": {
    "type": "stone_brick",
    "id": 98,
    "color": "#524d37"
  },
  "_99": {
    "type": "huge_brown_mushroom",
    "id": 99,
    "color": "#a47c5c"
  },
  "_100": {
    "type": "huge_red_mushroom",
    "id": 100,
    "color": "#8c8474"
  },
  "_101": {
    "type": "iron_bars",
    "id": 101,
    "color": "#9c9ca4"
  },
  "_102": {
    "type": "glass_pane",
    "id": 102,
    "color": "#5e7479"
  },
  "_103": {
    "type": "melon",
    "id": 103,
    "color": "#338204"
  },
  "_106": {
    "type": "vines",
    "id": 106,
    "color": "#043a04"
  },
  "_107": {
    "type": "fence_gate",
    "id": 107,
    "color": "#9c9ca4"
  },
  "_108": {
    "type": "brick_stairs",
    "id": 108,
    "color": "#844214",
    "data": module.exports.stairs
  },
  "_109": {
    "type": "stone_brick_stairs",
    "id": 109,
    "color": "#807f66",
    "data": module.exports.stairs
  },
  "_110": {
    "type": "mycelium",
    "id": 110,
    "color": "#c7bea7"
  },
  "_111": {
    "type": "lily_pad",
    "id": 111,
    "color": "#2c6404"
  },
  "_112": {
    "type": "nether_brick",
    "id": 112,
    "color": "#9f514b"
  },
  "_113": {
    "type": "nether_brick_fence",
    "id": 113,
    "color": "#9c9ca4"
  },
  "_114": {
    "type": "nether_brick_stairs",
    "id": 114,
    "color": "#9f514b",
    "data": module.exports.stairs
  },
  "_116": {
    "type": "enchantment_table",
    "id": 116,
    "color": "#2c2c2c"
  },
  "_121": {
    "type": "end_stone",
    "id": 121,
    "color": "#cccca2"
  },
  "_122": {
    "type": "dragon_egg",
    "id": 122,
    "color": "#0c0c0c"
  },
  "_123": {
    "type": "redstone_lamp",
    "id": 123,
    "color": "#4f4528"
  },
  "_126": {
    "type": "wooden_slab",
    "id": 126,
    "color": "#a4844c",
    "data": module.exports.wooden_slab
  },
  "_127": {
    "type": "cocoa_plant",
    "id": 127,
    "color": "#542404"
  },
  "_128": {
    "type": "sandstone_stairs",
    "id": 128,
    "color": "#d4d0ad",
    "data": module.exports.stairs
  },
  "_129": {
    "type": "emerald_ore",
    "id": 129,
    "color": "#8a8a74"
  },
  "_130": {
    "type": "ender_chest",
    "id": 130,
    "color": "#5e3205",
    "data": module.exports.attachments
  },
  "_133": {
    "type": "block_of_emerald",
    "id": 133,
    "color": "#0b8c04"
  },
  "_134": {
    "type": "spruce_wood_stairs",
    "id": 134,
    "color": "#3b2821",
    "data": module.exports.stairs
  },
  "_135": {
    "type": "birch_wood_stairs",
    "id": 135,
    "color": "#7c744e",
    "data": module.exports.stairs
  },
  "_136": {
    "type": "jungle_wood_stairs",
    "id": 136,
    "color": "#4c341c",
    "data": module.exports.stairs
  },
  "_137": {
    "type": "command_block",
    "id": 137,
    "color": "#be8a6d"
  },
  "_138": {
    "type": "beacon",
    "id": 138,
    "color": "#5c7074"
  },
  "_139": {
    "type": "cobblestone_wall",
    "id": 139,
    "color": "#6d6d6d",
    "data": module.exports.cobblestone_wall
  },
  "_143": {
    "type": "wooden_button",
    "id": 143,
    "color": "#7c744e"
  },
  "_145": {
    "type": "anvil",
    "id": 145,
    "color": "#242424"
  },
  "_146": {
    "id": 146,
    "type": "trapped_chest",
    "color": "#5e3205",
    "data": module.exports.attachments
  },
  "_147": {
    "id": 147,
    "type": "weighted_pressure_plate_light",
    "color": "#807f66"
  },
  "_148": {
    "id": 148,
    "type": "weighted_pressure_plate_heavy",
    "color": "#807f66"
  },
  "_149": {
    "id": 149,
    "type": "redstone_comparator_inactive",
    "color": "#a7a49e"
  },
  "_150": {
    "id": 150,
    "type": "redstone_comparator_active",
    "color": "#9f9c96"
  },
  "_151": {
    "id": 151,
    "type": "daylight_sensor",
    "color": "#443c2c"
  },
  "_152": {
    "id": 152,
    "type": "redstone_block",
    "color": "#980404"
  },
  "_153": {
    "id": 153,
    "type": "nether_quartz_ore",
    "color": "#874944"
  },
  "_154": {
    "id": 154,
    "type": "hopper",
    "color": "#242424",
    "data": module.exports.attachments
  },
  "_155": {
    "id": 155,
    "type": "quartz_block",
    "color": "#bdb8b0"
  },
  "_156": {
    "id": 156,
    "type": "quartz_stairs",
    "color": "#807f66",
    "data": module.exports.stairs
  },
  "_157": {
    "id": 157,
    "type": "activator_rail",
    "color": "#828282"
  },
  "_158": {
    "id": 158,
    "type": "dropper",
    "color": "#a2a18e",
    "data": module.exports.attachments
  },
  "_170": {
    "id": 170,
    "type": "hay_bale",
    "color": "#c1a648"
  },
  "_171": {
    "id": 171,
    "type": "carpet",
    "color": "#577b37"
  },
  "_260": {
    "type": "apple",
    "id": 260,
    "color": "#644411"
  },
  "_262": {
    "type": "arrow",
    "id": 262,
    "color": "#4c2404"
  },
  "_263": {
    "type": "coal",
    "id": 263,
    "color": "#232318",
    "data": module.exports.coal
  },
  "_264": {
    "type": "diamond",
    "id": 264,
    "color": "#4a6676"
  },
  "_265": {
    "type": "iron_ingot",
    "id": 265,
    "color": "#9c9ca4"
  },
  "_266": {
    "type": "gold_ingot",
    "id": 266,
    "color": "#e0c474"
  },
  "_280": {
    "type": "stick",
    "id": 280,
    "color": "#044404"
  },
  "_281": {
    "type": "bowl",
    "id": 281,
    "color": "#2c6404"
  },
  "_282": {
    "type": "mushroom_soup",
    "id": 282,
    "color": "#2c6404"
  },
  "_287": {
    "type": "string",
    "id": 287,
    "color": "#e8e8e8"
  },
  "_288": {
    "type": "feather",
    "id": 288,
    "color": "#0c7c14"
  },
  "_289": {
    "type": "gun_powder",
    "id": 289,
    "color": "#f4dc54"
  },
  "_295": {
    "type": "seeds",
    "id": 295,
    "color": "#644411"
  },
  "_296": {
    "type": "wheat",
    "id": 296,
    "color": "#c1a648"
  },
  "_297": {
    "type": "bread",
    "id": 297,
    "color": "#844214"
  },
  "_318": {
    "type": "flint",
    "id": 318,
    "color": "#232318"
  },
  "_319": {
    "type": "raw_porkchop",
    "id": 319,
    "color": "#6c4c24"
  },
  "_320": {
    "type": "cooked_porkchop",
    "id": 320,
    "color": "#6c4c24"
  },
  "_321": {
    "type": "paintings",
    "id": 321,
    "color": "#d0869b"
  },
  "_322": {
    "type": "golden_apple",
    "id": 322,
    "color": "#e0c474"
  },
  "_323": {
    "type": "sign",
    "id": 323,
    "color": "#4a2404"
  },
  "_324": {
    "type": "wooden_door",
    "id": 324,
    "color": "#5e3205"
  },
  "_325": {
    "type": "bucket",
    "id": 325,
    "color": "#401409"
  },
  "_326": {
    "type": "water_bucket",
    "id": 326,
    "color": "#401409"
  },
  "_327": {
    "type": "lava_bucket",
    "id": 327,
    "color": "#401409"
  },
  "_329": {
    "type": "saddle",
    "id": 329,
    "color": "#d8d3b5"
  },
  "_330": {
    "type": "iron_door",
    "id": 330,
    "color": "#28282f"
  },
  "_331": {
    "type": "redstone_dust",
    "id": 331,
    "color": "#81806a"
  },
  "_332": {
    "type": "snowball",
    "id": 332,
    "color": "#f4fcfc"
  },
  "_333": {
    "type": "boat",
    "id": 333,
    "color": "#844214"
  },
  "_334": {
    "type": "leather",
    "id": 334,
    "color": "#401409"
  },
  "_335": {
    "type": "milk",
    "id": 335,
    "color": "#f4fcfc"
  },
  "_336": {
    "type": "clay_brick",
    "id": 336,
    "color": "#90491e"
  },
  "_337": {
    "type": "clay_balls",
    "id": 337,
    "color": "#90491e"
  },
  "_338": {
    "type": "sugar_cane",
    "id": 338,
    "color": "#046404"
  },
  "_339": {
    "type": "paper",
    "id": 339,
    "color": "#d0869b"
  },
  "_340": {
    "type": "book",
    "id": 340,
    "color": "#642208"
  },
  "_341": {
    "type": "slimeball",
    "id": 341,
    "color": "#31411c"
  },
  "_344": {
    "type": "egg",
    "id": 344,
    "color": "#0b8c04"
  },
  "_346": {
    "type": "fishing_rod",
    "id": 346,
    "color": "#9c9ca4"
  },
  "_348": {
    "type": "glowstone_dust",
    "id": 348,
    "color": "#e5ad54"
  },
  "_349": {
    "type": "raw_fish",
    "id": 349,
    "color": "#d0869b"
  },
  "_350": {
    "type": "cooked_fish",
    "id": 350,
    "color": "#d0869b"
  },
  "_351": {
    "type": "dyes",
    "id": 351,
    "color": "#d0869b"
  },
  "_352": {
    "type": "bone",
    "id": 352,
    "color": "#f4fcfc"
  },
  "_353": {
    "type": "sugar",
    "id": 353,
    "color": "#046404"
  },
  "_354": {
    "type": "bed",
    "id": 355,
    "color": "#9c9c94",
    "data": module.exports.bed
  },
  "_356": {
    "type": "redstone_repeater",
    "id": 356,
    "color": "#d4bcb9"
  },
  "_357": {
    "type": "cookie",
    "id": 357,
    "color": "#d0869b"
  },
  "_358": {
    "type": "map",
    "id": 358,
    "color": "#338204"
  },
  "_359": {
    "type": "shears",
    "id": 359,
    "color": "#d0869b"
  },
  "_360": {
    "type": "melon_slice",
    "id": 360,
    "color": "#338204"
  },
  "_361": {
    "type": "pumpkin_seeds",
    "id": 361,
    "color": "#c06c04"
  },
  "_362": {
    "type": "melon_seeds",
    "id": 362,
    "color": "#4c54fc"
  },
  "_363": {
    "type": "raw_beef",
    "id": 363,
    "color": "#d0869b"
  },
  "_364": {
    "type": "steak",
    "id": 364,
    "color": "#d0869b"
  },
  "_365": {
    "type": "raw_chicken",
    "id": 365,
    "color": "#d0869b"
  },
  "_366": {
    "type": "cooked_chicken",
    "id": 366,
    "color": "#d0869b"
  },
  "_367": {
    "type": "rotton_flesh",
    "id": 367,
    "color": "#d0869b"
  },
  "_368": {
    "type": "ender_pearl",
    "id": 368,
    "color": "#cccca2"
  },
  "_369": {
    "type": "blaze_rod",
    "id": 369,
    "color": "#6e562c"
  },
  "_370": {
    "type": "ghast_tear",
    "id": 370,
    "color": "#cccca2"
  },
  "_374": {
    "type": "glass_bottle",
    "id": 374,
    "color": "#5e7479"
  },
  "_375": {
    "type": "spider_eye",
    "id": 375,
    "color": "#31411c"
  },
  "_376": {
    "type": "fermented_spider_eye",
    "id": 376,
    "color": "#31411c"
  },
  "_377": {
    "type": "blaze_powder",
    "id": 377,
    "color": "#ad4f24"
  },
  "_378": {
    "type": "magma_cream",
    "id": 378,
    "color": "#ad4f24"
  },
  "_379": {
    "type": "brewing_stand",
    "id": 379,
    "color": "#b48c3c"
  },
  "_380": {
    "type": "cauldron",
    "id": 380,
    "color": "#232323"
  },
  "_381": {
    "type": "eye_of_ender",
    "id": 381,
    "color": "#040c0c"
  },
  "_382": {
    "type": "glistering_melon",
    "id": 382,
    "color": "#338204"
  },
  "_383": {
    "type": "spawn_eggs",
    "id": 383,
    "color": "#0b8c04"
  },
  "_384": {
    "type": "bottle_o_enchanting",
    "id": 384,
    "color": "#2c2c2c"
  },
  "_385": {
    "type": "fire_charge",
    "id": 385,
    "color": "#fcac04"
  },
  "_388": {
    "type": "emerald",
    "id": 388,
    "color": "#0b8c04"
  },
  "_390": {
    "type": "flower_pot",
    "id": 390,
    "color": "#8c8c64"
  },
  "_391": {
    "type": "carrot",
    "id": 391,
    "color": "#044c04"
  },
  "_392": {
    "type": "unknown",
    "id": 392,
    "color": "#04520f"
  },
  "_393": {
    "type": "baked_potato",
    "id": 393,
    "color": "#5c7074"
  },
  "_394": {
    "type": "poisonous_potato",
    "id": 394,
    "color": "#5c7074"
  },
  "_395": {
    "type": "map",
    "id": 395,
    "color": "#338204"
  },
  "_396": {
    "type": "golden_carrot",
    "id": 396,
    "color": "#5c7074"
  },
  "_397": {
    "type": "mob_head",
    "id": 397,
    "color": "#1c1c1c"
  },
  "_399": {
    "type": "nether_star",
    "id": 399,
    "color": "#82442a"
  },
  "_400": {
    "type": "pumkpin_pie",
    "id": 400,
    "color": "#c06c04"
  },
  "_401": {
    "type": "firework_rocket",
    "id": 401,
    "color": "#556804"
  },
  "_402": {
    "type": "firework_star",
    "id": 402,
    "color": "#fcac04"
  }
}