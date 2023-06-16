onEvent('recipes', event => {

  for (let [key, value] in upgrades) {
    let nameKey = capFirst(key)
    if(key == 'base') value = "immersiveengineering:sheetmetal_aluminum"
    event.custom({
      "type": "masterfulmachinery:machine_structure",
      "id": `ore_washer_${key}`,
      "controllerId": "ore_washer",
      "name": `洗矿机 ${nameKey}`,
      "layout": [
        [
          ")*)",
          "***",
          ")*)"
        ],
        [
          ")*)",
          "+,-",
          ")C)"
        ],
        [
          ").)",
          "/ 0",
          ")U)"
        ],
        [
          "1*1",
          "*2*",
          "1*1"
        ],
        [
          "   ",
          " 1 ",
          "   "
        ]
      ],
      "legend": {
        "0": {
          "block": "masterfulmachinery:ore_washer_item_port_items_output"
        },
        "1": {
          "block": "immersiveengineering:slab_sheetmetal_aluminum"
        },
        "2": {
          "block": "cyclic:fan"
        },
        ")": {
          "block": "immersiveengineering:steel_fence"
        },
        "*": {
          "block": "immersiveengineering:sheetmetal_aluminum"
        },
        "+": {
          "block": "masterfulmachinery:ore_washer_fluid_port_fluids_input"
        },
        ",": {
          "block": "quark:grate"
        },
        "-": {
          "block": "masterfulmachinery:ore_washer_fluid_port_fluids_output"
        },
        ".": {
          "block": "masterfulmachinery:ore_washer_energy_port_energy_input"
        },
        "U": {
          "block": value
        },
        "/": {
          "block": "masterfulmachinery:ore_washer_item_port_items_input"
        }
      }
    })

    if(key == 'base') value = "immersiveengineering:sheetmetal_aluminum"
    event.custom({
      "type": "masterfulmachinery:machine_structure",
      "id":  `precipitator_${key}`,
      "controllerId": "precipitator",
      "name": `降水机 ${nameKey}`,
      "layout": [
        [
          ") )",
          "*+*",
          "*,-",
          "*C*",
          ") )"
        ],
        [
          ") )",
          "...",
          ".,.",
          "...",
          ") )"
        ],
        [
          ") )",
          "   ",
          "/,0",
          "   ",
          ") )"
        ],
        [
          ") )",
          "...",
          ".,.",
          "...",
          ") )"
        ],
        [
          "1 1",
          "***",
          "/,*",
          "*U*",
          "1 1"
        ]
      ],
      "legend": {
        "0": {
          "block": "chisel:laboratory/wallvents"
        },
        "1": {
          "block": "immersiveengineering:slab_sheetmetal_aluminum"
        },
        ")": {
          "block": "immersiveengineering:steel_fence"
        },
        "*": {
          "block": "immersiveengineering:sheetmetal_aluminum"
        },
        "+": {
          "block": "masterfulmachinery:precipitator_energy_port_energy_input"
        },
        ",": {
          "block": "mekanism:basic_mechanical_pipe"
        },
        "-": {
          "block": "masterfulmachinery:precipitator_item_port_items_output"
        },
        ".": {
          "block": "immersiveengineering:fluid_pipe"
        },
        "U": {
          "block": value
        },
        "/": {
          "block": "masterfulmachinery:precipitator_fluid_port_fluids_input"
        }
      }
    })

    if(key == 'base') value = "minecraft:air"
    event.custom({
      "type": "masterfulmachinery:machine_structure",
      "id":  `super_alloyer_${key}`,
      "controllerId": "super_alloyer",
      "name": `超级合金 ${nameKey}`,
  "layout": [
    [
      ")*)",
      ")))",
      ")*)"
    ],
    [
      "+,-",
      "C./",
      "0,-"
    ],
    [
      "1,1",
      "U. ",
      "1,1"
    ],
    [
      " 2 ",
      "   ",
      " 2 "
    ]
  ],
  "legend": {
    "0": {
      "block": "masterfulmachinery:super_alloyer_item_port_items_output"
    },
    "1": {
      "block": "immersiveposts:fence_iron"
    },
    "2": {
      "block": "infused_crystals:block_of_redstonium"
    },
    ")": {
      "block": "ibpdx:blockcasing_duskstone"
    },
    "*": {
      "block": "mekanism:superheating_element"
    },
    "+": {
      "block": "masterfulmachinery:super_alloyer_item_port_items_input"
    },
    ",": {
      "block": "ibpdx:iron_casing"
    },
    "-": {
      "block": "cyclic:mason_iron"
    },
    ".": {
      "block": "minecraft:glass"
    },
    "U": {
      "block": value
    },
    "/": {
      "block": "masterfulmachinery:super_alloyer_energy_port_energy_input"
    }
  }
    })



    if(key == 'base') value = "ibpdx:blockcasing_steel"
    event.custom({
      "type": "masterfulmachinery:machine_structure",
      "id":  `processor_cutter_${key}`,
      "controllerId": "processor_cutter",
      "name": `处理器切割机 ${nameKey}`,
      "layout": [
        [
          ")*)",
          ")+)",
          ")+)",
          ")+)",
          ")+)"
        ],
        [
          "   ",
          " , ",
          "   ",
          " ) ",
          "-C."
        ],
        [
          "   ",
          " / ",
          "   ",
          " U ",
          "   "
        ],
        [
          "   ",
          " ) ",
          " ) ",
          " ) ",
          "   "
        ]
      ],
      "legend": {
        ")": {
          "block": "ibpdx:blockcasing_steel"
        },
        "*": {
          "block": "masterfulmachinery:processor_cutter_energy_port_energy_input"
        },
        "+": {
          "block": "ibpdx:blockcasing_empowered_diamond"
        },
        ",": {
          "block": "minecraft:stonecutter"
        },
        "-": {
          "block": "masterfulmachinery:processor_cutter_item_port_items_input"
        },
        ".": {
          "block": "masterfulmachinery:processor_cutter_item_port_items_output"
        },
        "U": {
          "block": value
        },
        "/": {
          "block": "minecraft:end_rod"
        }
      }
    })

    if(key == 'base') value = "ibpdx:blockcasing_steel"
    event.custom({
      "type": "masterfulmachinery:machine_structure",
      "id":  `liquid_fuel_generator_${key}`,
      "controllerId": "liquid_fuel_generator",
      "name": `液态燃料发电机 ${nameKey}`,
      "layout": [
        [
          "  )   )  ",
          " ******* ",
          "*********",
          " ******* "
        ],
        [
          "  )   )  ",
          " +++C+++ ",
          ",       ,",
          " +++*+++ "
        ],
        [
          "         ",
          " +)   )+ ",
          "+ ++U++ +",
          " +)   )+ "
        ],
        [
          "         ",
          " +     + ",
          "+ + ) + +",
          " +     + "
        ],
        [
          "         ",
          " +     + ",
          "+ + ) + +",
          " +     + "
        ],
        [
          "         ",
          "         ",
          " +  )  + ",
          "         "
        ],
        [
          "         ",
          "    -    ",
          "   *)*   ",
          "    *    "
        ]
      ],
      "legend": {
        ")": {
          "block": "ibpdx:blockcasing_steel"
        },
        "*": {
          "block": "ibpdx:blockcasing_empowered_steel"
        },
        "+": {
          "block": "minecraft:glass"
        },
        ",": {
          "block": "masterfulmachinery:liquid_fuel_generator_fluid_port_fluids_input"
        },
        "U": {
          "block": value
        },
        "-": {
          "block": "masterfulmachinery:liquid_fuel_generator_energy_port_energy_output"
        }
      }
    })

    if(key == 'base') value = "ibpdx:blockcasing_steel"
    event.custom({
      "type": "masterfulmachinery:machine_structure",
      "id":  `metal_empowerer_${key}`,
      "controllerId": "metal_empowerer",
      "name": `金属充能器 ${nameKey}`,
      "layout": [
        [
          "  )))  ",
          " ))))) ",
          "))***))",
          "))*+*))",
          "))***))",
          " ))))) ",
          "  )))  "
        ],
        [
          "  ,C,  ",
          " )   ) ",
          ",     ,",
          "-  .  /",
          ",     ,",
          " )   ) ",
          "  ,0,  "
        ],
        [
          "  )U)  ",
          " )) )) ",
          "))   ))",
          "))   ))",
          "))   ))",
          " ))))) ",
          "  )))  "
        ],
        [
          "       ",
          "  ,,,  ",
          " ,,,,, ",
          " ,,k,, ",
          " ,,,,, ",
          "  ,,,  ",
          "       "
        ]
      ],
      "legend": {
        "0": {
          "block": "masterfulmachinery:metal_empowerer_fluid_port_fluids_input"
        },
        ")": {
          "block": "ibpdx:blockcasing_steel"
        },
        "*": {
          "block": "infused_crystals:block_of_redstonium"
        },
        "+": {
          "block": "infused_crystals:block_of_infused_redstonium"
        },
        ",": {
          "block": "ibpdx:blockcasing_black_quartz"
        },
        "-": {
          "block": "masterfulmachinery:metal_empowerer_item_port_items_output"
        },
        ".": {
          "block": "powah:energizing_orb"
        },
        "k": {
          "block": "masterfulmachinery:metal_empowerer_energy_port_energy_input"
        },
        "U": {
          "block": value
        },
        "/": {
          "block": "masterfulmachinery:metal_empowerer_item_port_items_input"
        }
      }
    })

    if(key == 'base') value = "ibpdx:stainless_steel_casing"
    event.custom({
      "type": "masterfulmachinery:machine_structure",
      "id":  `advanced_chemical_plant_${key}`,
      "controllerId": "advanced_chemical_plant",
      "name": `高级化工厂 ${nameKey}`,
      "layout": [
        [
          ")))",
          ")*)",
          ")))"
        ],
        [
          "+C+",
          ", -",
          "+*+"
        ],
        [
          "+U+",
          "* *",
          "+*+"
        ],
        [
          "+*+",
          ", -",
          "+.+"
        ],
        [
          "///",
          "/*/",
          "///"
        ]
      ],
      "legend": {
        ")": {
          "block": "ibpdx:blockcasing_steel"
        },
        "*": {
          "block": "ibpdx:stainless_steel_casing"
        },
        "+": {
          "block": "immersiveengineering:steel_fence"
        },
        ",": {
          "block": "masterfulmachinery:advanced_chemical_plant_fluid_port_fluids_output"
        },
        "-": {
          "block": "masterfulmachinery:advanced_chemical_plant_fluid_port_fluids_input"
        },
        "U": {
          "block": value
        },
        ".": {
          "block": "masterfulmachinery:advanced_chemical_plant_energy_port_energy_input"
        },
        "/": {
          "block": "immersiveengineering:slab_sheetmetal_steel"
        }
      }
    })

    if(key == 'base') value = "immersiveengineering:sheetmetal_copper"
    event.custom({
      "type": "masterfulmachinery:machine_structure",
      "id":  `boss_fight_simulator_${key}`,
      "controllerId": "boss_fight_simulator",
      "name": `Boss战斗模拟器 ${nameKey}`,
      "layout": [
        [
          "  ))*))  ",
          " ))+*+)) ",
          "))++*++))",
          ")+++*+++)",
          "****+****",
          ")+++*+++)",
          "))++*++))",
          " ))+*+)) ",
          "  ))*))  "
        ],
        [
          "    ,    ",
          " ,     , ",
          "   - -   ",
          "  -.-.-  ",
          ",  -/-  ,",
          "  -. .-  ",
          "   - -   ",
          " ,     , ",
          "    ,    "
        ],
        [
          "    C    ",
          " Z     Z ",
          "   - -   ",
          "  -.-.-  ",
          "0  -1-  2",
          "  -. .-  ",
          "   - -   ",
          " 3     4 ",
          "    5    "
        ],
        [
          "    ,    ",
          " ,     , ",
          "   - -   ",
          "  -.-.-  ",
          ",  -/-  ,",
          "  -.-.-  ",
          "   - -   ",
          " ,     , ",
          "    ,    "
        ],
        [
          "  ))*))  ",
          " ))+*+)) ",
          "))++*++))",
          ")+++*+++)",
          "****+****",
          ")+++*+++)",
          "))++*++))",
          " ))+*+)) ",
          "  ))*))  "
        ]
      ],
      "legend": {
        ")": {
          "block": "bloodmagic:bloodstonebrick"
        },
        "*": {
          "block": "immersiveengineering:sheetmetal_copper"
        },
        "+": {
          "block": "ibpdx:blockcasing_black_quartz"
        },
        ",": {
          "block": "immersiveposts:fence_constantan"
        },
        "-": {
          "block": "thermal:signalum_glass"
        },
        ".": {
          "block": "ibpdx:simulation_core"
        },
        "/": {
          "block": "refinedstorage:red_controller"
        },
        "0": {
          "block": "masterfulmachinery:boss_fight_simulator_item_port_items_output"
        },
        "1": {
          "block": "thermal:energy_cell"
        },
        "2": {
          "block": "masterfulmachinery:boss_fight_simulator_item_port_items_input"
        },
        "3": {
          "block": "masterfulmachinery:boss_fight_simulator_mana_port_botania_mana_input"
        },
        "4": {
          "block": "masterfulmachinery:boss_fight_simulator_fluid_port_fluids_input"
        },
        "5": {
          "block": "masterfulmachinery:boss_fight_simulator_energy_port_energy_input"
        },
        "Z": {
          "block": value
        }
      }
    })
  }
}) 