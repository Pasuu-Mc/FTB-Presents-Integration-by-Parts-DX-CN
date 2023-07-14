//priority: 0
const hiddenItems = [
	'cyclic:inventory_cake',
	'cyclic:antigravity',
	'rftoolspower:dimensionalcell_simple',
	'refinedpipes:basic_energy_pipe',
	'miniutilities:solar_panel',
	'miniutilities:solar_panel_controller',
	'powah:solar_panel_starter',
	'powah:solar_panel_basic',
	'powah:solar_panel_hardened',
	'powah:solar_panel_blazing',
	'powah:solar_panel_niotic',
	'powah:solar_panel_spirited',
	'powah:solar_panel_nitro',
	'dankstorage:dank_5',
	'dankstorage:dank_6',
	'dankstorage:dank_7',
	'dankstorage:4_to_5',
	'dankstorage:5_to_6',
	'dankstorage:6_to_7',
	'miniutilities:stone_drum',
	'miniutilities:iron_drum',
	'miniutilities:reinforced_large_drum',
	'miniutilities:netherite_reinforced_drum',
	'miniutilities:unstable_drum',
	'miniutilities:quantum_quarry',
	'miniutilities:cursed_earth',
	'powah:furnator_basic',
	'powah:furnator_hardened',
	'powah:furnator_blazing',
	'powah:furnator_niotic',
	'powah:furnator_spirited',
	'powah:furnator_nitro',
	'cyclic:peat_fuel',
	'cyclic:peat_fuel_enriched',
	'cyclic:peat_generator',
	'cyclic:peat_unbaked',
	'cyclic:peat_baked',
	'cyclic:hopper',
	'cyclic:hopper_fluid',
	'cyclic:hopper_gold',
	'cyclic:generator_fuel',
	'cyclic:generator_fluid',
	'cyclic:generator_item',
	'cyclic:generator_food',
	'cyclic:forester',
	'cyclic:terra_preta',
	'cyclic:energy_pipe',
	'cyclic:item_pipe',
	'cyclic:fluid_pipe',
	'cyclic:cable_wrench',
	'cyclic:disenchanter',
	'storagenetwork:inventory_remote',
	'storagenetwork:inventory',
	'storagenetwork:export_kabel',
	'pamhc2foodcore:bakewareitem',
	'pamhc2foodcore:cuttingboarditem',
	'pamhc2foodcore:juiceritem',
	'pamhc2foodcore:grinderitem',
	'pamhc2foodcore:rolleritem',
	'pamhc2foodcore:potitem',
	'pamhc2foodcore:mixingbowlitem',
	'pamhc2foodcore:saucepanitem',
	'pamhc2foodcore:skilletitem',
	'pamhc2foodcore:macncheeseitem',
	'pamhc2foodcore:chocolatecakeitem',
	'pamhc2foodcore:pumpkincheesecakeitem',
	'pamhc2foodcore:cheesecakeitem',
	'pamhc2foodcore:carrotcakeitem',
	'pamhc2foodcore:chocolatemuffinitem',
	'pamhc2foodcore:carrotmuffinitem',
	'pamhc2foodcore:pumpkinmuffinitem',
	'pamhc2foodcore:caramelmuffinitem',
	'pamhc2foodcore:yogurtitem',
	'pamhc2foodcore:chocolateyogurtitem',
	'pamhc2foodcore:crackeritem',
	'pamhc2foodcore:creamitem',
	'pamhc2foodcore:appleyogurtitem',
	'pamhc2foodcore:pumpkinyogurtitem',
	'pamhc2foodcore:sweetberryyogurtitem',
	'pamhc2foodcore:caramelyogurtitem',
	'pamhc2foodcore:chocolatebaritem',
	'pamhc2foodcore:chocolatebaconitem',
	'pamhc2foodcore:epicbaconitem',
	'pamhc2foodcore:chocolatepuddingitem',
	'pamhc2foodcore:gummybearsitem',
	'pamhc2foodcore:chocolatecaramelfudgeitem',
	'pamhc2foodcore:smoresitem',
	'pamhc2foodcore:trailmixitem',
	'pamhc2foodcore:boiledeggitem',
	'pamhc2foodcore:friedeggitem',
	'pamhc2foodcore:scrambledeggitem',
	'pamhc2foodcore:applesauceitem',
	'pamhc2foodcore:chickennuggetitem',
	'pamhc2foodcore:chickenjerkyitem',
	'pamhc2foodcore:beefjerkyitem',
	'pamhc2foodcore:porkjerkyitem',
	'pamhc2foodcore:fishjerkyitem',
	'pamhc2foodcore:rabbitjerkyitem',
	'pamhc2foodcore:muttonjerkyitem',
	'pamhc2foodcore:potroastitem',
	'pamhc2foodcore:pickledbeetsitem',
	'pamhc2foodcore:cottoncandyitem',
	'pamhc2foodcore:jellybeansitem',
	'pamhc2foodcore:vinegaritem',
	'pamhc2foodcore:stewitem',
	'pamhc2foodcore:bakedvegetablemedleyitem',
	'pamhc2foodcore:fruitsaladitem',
	'boss_tools:coal_generator',
	'boss_tools:solar_panel',
	'boss_tools:blast_furnace',
	'boss_tools_giselle_addon:electric_blast_furnace',
	'miniutilities:ender_dragon_angel_ring',
	'storagenetwork:building_remote',
	'storagenetwork:picker_remote',
	'storagenetwork:collecting_remote',
	'storagenetwork:exchange',
	'cyclic:shearing',
	'cyclic:sprinkler',
	'ironchest:iron_to_gold_chest_upgrade',
	'ironchest:gold_to_diamond_chest_upgrade',
	'ironchest:wood_to_iron_chest_upgrade',
	'ironchest:wood_to_copper_chest_upgrade',
	'ironchest:copper_to_silver_chest_upgrade',
	'ironchest:silver_to_gold_chest_upgrade',
	'ironchest:copper_to_iron_chest_upgrade',
	'ironchest:diamond_to_crystal_chest_upgrade',
	'ironchest:diamond_to_obsidian_chest_upgrade',
	'metalbarrels:silver_barrel',
	'metalbarrels:wood_to_iron',
	'metalbarrels:wood_to_gold',
	'metalbarrels:wood_to_silver',
	'metalbarrels:wood_to_diamond',
	'metalbarrels:wood_to_obsidian',
	'metalbarrels:wood_to_netherite',
	'metalbarrels:copper_to_silver',
	'metalbarrels:copper_to_gold',
	'metalbarrels:copper_to_diamond',
	'metalbarrels:copper_to_obsidian',
	'metalbarrels:copper_to_netherite',
	'metalbarrels:iron_to_silver',
	'metalbarrels:iron_to_diamond',
	'metalbarrels:iron_to_obsidian',
	'metalbarrels:silver_to_diamond',
	'metalbarrels:silver_to_gold',
	'metalbarrels:silver_to_obsidian',
	'metalbarrels:gold_to_obsidian',
	'ironchest:silver_chest',
	'cyclic:wireless_item',
	'cyclic:wireless_energy',
	'cyclic:wireless_fluid',
	'cyclic:battery',
	'cyclic:solidifier',
	'cyclic:peat_farm',
	'cyclic:collector_fluid',
	'cyclic:placer_fluid',
	'cyclic:cask',
	'cyclic:crate',
	'cyclic:anvil',
	'cyclic:heart',
	'cyclic:heart_empty',
	'cyclic:emerald_pickaxe',
	'cyclic:emerald_shovel',
	'cyclic:emerald_sword',
	'cyclic:emerald_axe',
	'cyclic:emerald_hoe',
	'cyclic:sandstone_pickaxe',
	'cyclic:sandstone_shovel',
	'cyclic:sandstone_sword',
	'cyclic:sandstone_axe',
	'cyclic:sandstone_hoe',
	'cyclic:netherbrick_pickaxe',
	'cyclic:netherbrick_shovel',
	'cyclic:netherbrick_sword',
	'cyclic:netherbrick_axe',
	'cyclic:netherbrick_hoe',
	'cyclic:emerald_helmet',
	'cyclic:emerald_chestplate',
	'cyclic:emerald_leggings',
	'cyclic:emerald_boots',
	'cyclic:charm_home',
	'cyclic:charm_world',
	'cyclic:tile_transporter_empty',
	'cyclic:anvil_magma',
	'cyclic:mattock',
	'cyclic:mattock_nether',
	'powah:magmator_niotic',
	'powah:magmator_spirited',
	'powah:magmator_nitro',
	'powah:thermo_generator_blazing',
	'powah:thermo_generator_niotic',
	'powah:thermo_generator_spirited',
	'powah:thermo_generator_nitro',
	'powah:photoelectric_pane',
	'miniutilities:mechanical_miner',
	'miniutilities:mechanical_placer',
	'rftoolspower:coalgenerator',
	'titanium:gold_gear',
	'titanium:iron_gear',
	'titanium:diamond_gear',
	'rftoolsutility:crafter1',
	'rftoolsutility:crafter2',
	'astralsorcery:blink_wand',
	'infused_crystals:infused_redstonium_pickaxe',
	'infused_crystals:infused_redstonium_sword',
	'infused_crystals:infused_redstonium_axe',
	'infused_crystals:infused_redstonium_shovel',
	'infused_crystals:infused_redstonium_hoe',
	'infused_crystals:infused_ironium_pickaxe',
	'infused_crystals:infused_ironium_sword',
	'infused_crystals:infused_ironium_axe',
	'infused_crystals:infused_ironium_shovel',
	'infused_crystals:infused_ironium_hoe',
	'infused_crystals:infused_lapisium_pickaxe',
	'infused_crystals:infused_lapisium_sword',
	'infused_crystals:infused_lapisium_axe',
	'infused_crystals:infused_lapisium_shovel',
	'infused_crystals:infused_lapisium_hoe',
	'infused_crystals:infused_coalium_pickaxe',
	'infused_crystals:infused_coalium_sword',
	'infused_crystals:infused_coalium_axe',
	'infused_crystals:infused_coalium_shovel',
	'infused_crystals:infused_coalium_hoe',
	'infused_crystals:infused_diamondium_pickaxe',
	'infused_crystals:infused_diamondium_sword',
	'infused_crystals:infused_diamondium_axe',
	'infused_crystals:infused_diamondium_shovel',
	'infused_crystals:infused_diamondium_hoe',
	'infused_crystals:infused_emeraldium_pickaxe',
	'infused_crystals:infused_emeraldium_sword',
	'infused_crystals:infused_emeraldium_axe',
	'infused_crystals:infused_emeraldium_shovel',
	'infused_crystals:infused_emeraldium_hoe',
	'infused_crystals:infusedcoaliumpickaxe',
	'infused_crystals:infusedcoaliumsword',
	'infused_crystals:infusedcoaliumaxe',
	'infused_crystals:infusedcoaliumshovel',
	'infused_crystals:infusedcoaliumhoe',
	'infused_crystals:coalium_stick',
	'infused_crystals:chargerblock',
	'infused_crystals:infernal_fuel',
	'industrial_foregoing:infinity_drill',
	'industrial_foregoing:dissolution_chamber',
	'industrial_foregoing:machine_frame_supreme',
	'cyclic:storage_bag',
	'notenoughwands:teleportation_wand',
	'extendedcrafting:handheld_table',
	'avaritia:iron_singularity',
	'avaritia:golden_singularity',
	'avaritia:lapis_singularity',
	'avaritia:redstone_singularity',
	'bloodmagic:sand_netherite',
	'bloodmagic:coalsand',
	'bloodmagic:goldsand',
	'bloodmagic:ironsand',
	'avaritia:nether_quartz_singularity',
	'avaritia:diamond_singularity',
	'avaritia:emerald_singularity',
	'avaritia:record_fragment',
	'avaritia:infinity_armor_helmet',
	'avaritia:infinity_armor_chestplate',
	'avaritia:infinity_armor_leggings',
	'avaritia:infinity_armor_boots',
	'avaritia:cosmic_meatballs',
	'avaritia:skullfire_sword',
	'avaritia:extreme_crafting_table',
	'avaritia:record_fragment',
	'avaritia:swordofthe_cosmos',
	'avaritia:neutronium_compressor',
	'avaritia:hoeofthe_green_earth',
	'avaritia:natures_ruin',
	'avaritia:planet_eater',
	'avaritia:longbowofthe_heavens',
	'avaritia:world_breaker',
	'avaritia:endest_pearl',
	'bloodmagic:mimic',
	'bloodmagic:ethereal_mimic',
	'bloodmagic:spectral',
	'bloodmagic:nether_soil',
	'bloodmagic:dungeon_tester',
	'cyclic:uncrafter',
	'cyclic:fisher',
	'cyclic:beacon',
	'cyclic:tank',
	'cyclic:dark_glass',
	'cyclic:battery_infinite',
	'cyclic:item_infinite',
	'cyclic:glowing_helmet',
	'cyclic:gem_amber',
	'cyclic:randomize_scepter',
	'cyclic:charm_torch',
	'cyclic:charm_torch_cave',
	'cyclic:ender_pearl_reuse',
	'cyclic:ender_bag',
	'cyclic:charm_boostpotion',
	'cyclic:ender_pearl_mounted',
	'cyclic:build_scepter',
	'cyclic:replace_scepter',
	'cyclic:offset_scepter',
	'cyclic:structure',
	'cyclic:crafter',
	'cyclic:wireless_transmitter',
	'cyclic:wireless_receiver',
	'extendedcrafting:the_ultimate_ingot',
	'extendedcrafting:the_ultimate_block',
	'extendedcrafting:the_ultimate_nugget',
	'extendedcrafting:the_ultimate_component',
	'extendedcrafting:ultimate_singularity',
	'extendedcrafting:the_ultimate_catalyst',
	'extendedcrafting:enhanced_ender_catalyst',
	'extendedcrafting:ender_catalyst',
	'extendedcrafting:ender_star',
	'extendedcrafting:ender_crafter',
	'extendedcrafting:ender_alternator',
	'extendedcrafting:ender_ingot_block',
	'extendedcrafting:enhanced_ender_ingot_block',
	'extendedcrafting:ender_ingot',
	'extendedcrafting:enhanced_ender_ingot',
	'extendedcrafting:ender_component',
	'extendedcrafting:enhanced_ender_component',
	'extendedcrafting:enhanced_ender_nugget',
	'extendedcrafting:ender_nugget',
	'simplyjetpacks:thruster_vanilla1',
	'simplyjetpacks:thruster_vanilla2',
	'simplyjetpacks:thruster_vanilla3',
	'simplyjetpacks:thruster_vanilla4',
	'simplyjetpacks:thruster_mek1',
	'simplyjetpacks:thruster_mek2',
	'simplyjetpacks:thruster_mek3',
	'simplyjetpacks:thruster_mek4',
	'simplyjetpacks:thruster_ie1',
	'simplyjetpacks:thruster_ie2',
	'simplyjetpacks:thruster_ie3',
	'simplyjetpacks:jetpack_creative',
	'simplyjetpacks:jetpack_creative_armored',
	'simplyjetpacks:jetpack_vanilla1',
	'simplyjetpacks:jetpack_vanilla1_armored',
	'simplyjetpacks:jetpack_vanilla2',
	'simplyjetpacks:jetpack_vanilla2_armored',
	'simplyjetpacks:jetpack_vanilla3',
	'simplyjetpacks:jetpack_vanilla3_armored',
	'simplyjetpacks:jetpack_vanilla4',
	'simplyjetpacks:jetpack_vanilla4_armored',
	'simplyjetpacks:jetpack_mek1',
	'simplyjetpacks:jetpack_mek1_armored',
	'simplyjetpacks:jetpack_mek2',
	'simplyjetpacks:jetpack_mek2_armored',
	'simplyjetpacks:jetpack_mek3',
	'simplyjetpacks:jetpack_mek3_armored',
	'simplyjetpacks:jetpack_mek4',
	'simplyjetpacks:jetpack_mek4_armored',
	'simplyjetpacks:jetpack_ie1',
	'simplyjetpacks:jetpack_ie1_armored',
	'simplyjetpacks:jetpack_ie2',
	'simplyjetpacks:jetpack_ie2',
	'simplyjetpacks:jetpack_ie3',
	'simplyjetpacks:jetpack_ie3_armored',
	'simplyjetpacks:armorplating_mek4',
	'simplyjetpacks:armorplating_mek3',
	'simplyjetpacks:armorplating_mek2',
	'simplyjetpacks:armorplating_mek1',
	'simplyjetpacks:armorplating_ie2',
	'simplyjetpacks:armorplating_ie3',
	'chemlib:element_neptunium',
	'chemlib:ingot_neptunium',
	'chemlib:compound_epinephrine',
	'chemlib:element_plutonium',
	'chemlib:ingot_plutonium',
	'chemlib:element_americium',
	'chemlib:ingot_americium',
	'chemlib:element_curium',
	'chemlib:ingot_curium',
	'chemlib:element_berkelium',
	'chemlib:ingot_berkelium',
	'chemlib:ingot_californium',
	'chemlib:element_einsteinium',
	'chemlib:ingot_einsteinium',
	'chemlib:element_californium',
	'chemlib:element_fermium',
	'chemlib:ingot_fermium',
	'chemlib:element_mendelevium',
	'chemlib:ingot_mendelevium',
	'chemlib:element_nobelium',
	'chemlib:ingot_nobelium',
	'chemlib:element_lawrencium',
	'chemlib:ingot_lawrencium',
	'chemlib:element_ruthenium',
	'chemlib:ingot_ruthenium',
	'chemlib:element_rutherfordium',
	'chemlib:ingot_rutherfordium',
	'chemlib:element_dubnium',
	'chemlib:ingot_dubnium',
	'chemlib:element_seaborgium',
	'chemlib:ingot_seaborgium',
	'chemlib:element_bohrium',
	'chemlib:ingot_bohrium',
	'chemlib:element_hassium',
	'chemlib:ingot_hassium',
	'chemlib:element_meitnerium',
	'chemlib:ingot_meitnerium',
	'chemlib:element_darmstadtium',
	'chemlib:ingot_darmstadtium',
	'chemlib:element_roentgenium',
	'chemlib:ingot_roentgenium',
	'chemlib:element_copernicium',
	'chemlib:ingot_copernicium',
	'chemlib:element_nihonium',
	'chemlib:ingot_nihonium',
	'chemlib:element_flerovium',
	'chemlib:ingot_flerovium',
	'chemlib:element_moscovium',
	'chemlib:ingot_moscovium',
	'chemlib:element_livermorium',
	'chemlib:ingot_livermorium',
	'chemlib:element_tennessine',
	'chemlib:ingot_tennessine',
	'chemlib:element_oganesson',	
	'cyclic:ender_item_shelf',	
	'thermal:device_fisher',	
	'industrial_foregoing:marine_fisher',	
	'extendedcrafting:redstone_catalyst',	
	'extendedcrafting:crystaltine_catalyst',	
	'immersiveengineering:plate_nickel',
	'immersiveengineering:plate_lead',
	'immersiveengineering:plate_silver',
	'immersiveengineering:plate_constantan',
	'immersiveengineering:plate_electrum',
	'immersiveengineering:plate_iron',
	'immersiveengineering:plate_gold',
	'immersiveengineering:plate_copper',
	'industrialforegoing:washing_factory',
	'industrialforegoing:mycelial_reactor',
	'industrialforegoing:biofuel_generator',
	'industrialforegoing:mycelial_furnace',
	'industrialforegoing:mycelial_slimey',
	'industrialforegoing:mycelial_culinary',
	'industrialforegoing:mycelial_potion',
	'industrialforegoing:mycelial_disenchantment',
	'industrialforegoing:mycelial_ender',
	'industrialforegoing:mycelial_explosive',
	'industrialforegoing:mycelial_frosty',
	'industrialforegoing:mycelial_halitosis',
	'industrialforegoing:mycelial_magma',
	'industrialforegoing:mycelial_pink',
	'industrialforegoing:mycelial_netherstar',
	'industrialforegoing:mycelial_death',
	'industrialforegoing:mycelial_rocket',
	'industrialforegoing:mycelial_crimed',
	'industrialforegoing:mycelial_meatallurgic',
	'draconicevolution:draconium_dust',
	'draconicevolution:awakened_draconium_dust',
	'mekanism:enriched_refined_obsidian',
	'miniutilities:quantum_quarry',
	'mysticalagriculture:air_essence',
	'mysticalagriculture:air_seeds',
	'mysticalagriculture:brass_seeds',
	'mysticalagriculture:brass_essence',
	'mysticalagriculture:graphite_essence',
	'mysticalagriculture:graphite_seeds',
	'industrialforegoing:bioreactor',
	'industrialforegoing:infinity_charger',
	'industrialforegoing:fluid_sieving_machine',
	'industrialforegoing:fermentation_station',
	'industrialforegoing:marine_fisher',
	'industrialforegoing:resourceful_furnace',
	'industrialforegoing:ore_laser_base',
	'industrialforegoing:water_condensator',
	'industrialforegoing:fluid_laser_base',
	'industrialforegoing:laser_drill',
	'mysticalagriculture:element_seeds',
	'mysticalagriculture:element_essence',
	'xreliquary:alkahestry_tome',
    'draconicadditions:wyvern_harness',
    'draconicadditions:draconic_harness',
    'draconicadditions:chaotic_harness',
    'avaritia:neutron_collector',
    'storagenetwork:master', 
    'storagenetwork:request', 
    'storagenetwork:crafting_remote', 
    'storagenetwork:kabel', 
    'storagenetwork:storage_kabel', 
    'storagenetwork:import_kabel', 
    'storagenetwork:import_filter_kabel', 
    'storagenetwork:import_kabel', 
    'storagenetwork:collector', 
    'storagenetwork:stack_upgrade', 
    'storagenetwork:speed_upgrade', 
    'storagenetwork:builder_remote', 
    'storagenetwork:collector_remote',
    'storagenetwork:filter_kabel'
	]


	//.ignoreNBT()
	const hiddenItemsWithoutNBT = [
		'simplyjetpacks:jetpack_vanilla1',
		'simplyjetpacks:jetpack_vanilla1_armored',
		'simplyjetpacks:jetpack_vanilla2',
		'simplyjetpacks:jetpack_vanilla2_armored',
		'simplyjetpacks:jetpack_vanilla3',
		'simplyjetpacks:jetpack_vanilla3_armored',
		'simplyjetpacks:jetpack_vanilla4',
		'simplyjetpacks:jetpack_vanilla4_armored',
		'simplyjetpacks:jetpack_mek1',
		'simplyjetpacks:jetpack_mek1_armored',
		'simplyjetpacks:jetpack_mek2',
		'simplyjetpacks:jetpack_mek2_armored',
		'simplyjetpacks:jetpack_mek3',
		'simplyjetpacks:jetpack_mek3_armored',
		'simplyjetpacks:jetpack_mek4',
		'simplyjetpacks:jetpack_mek4_armored',
		'simplyjetpacks:jetpack_ie1',
		'simplyjetpacks:jetpack_ie1_armored',
		'simplyjetpacks:jetpack_ie2',
		'simplyjetpacks:jetpack_ie2_armored',
		'simplyjetpacks:jetpack_ie3',
		'simplyjetpacks:jetpack_ie3_armored',
		'industrialforegoing:infinity_trident',
		'industrialforegoing:infinity_drill',
		'industrialforegoing:infinity_launcher',
		'industrialforegoing:infinity_nuke',
		'industrialforegoing:infinity_saw',
		'industrialforegoing:infinity_backpack',
		'industrialforegoing:infinity_hammer'
	]

	const hiddenItemsWithNBT = 
	[
		['extendedcrafting:singularity','{Id:"extendedcrafting:bronze"}'],
		['extendedcrafting:singularity','{Id:"extendedcrafting:steel"}'],
		['extendedcrafting:singularity','{Id:"extendedcrafting:invar"}'],
		['extendedcrafting:singularity','{Id:"extendedcrafting:electrum"}'],
		['extendedcrafting:singularity','{Id:"extendedcrafting:lapis_lazuli"}'],
		['extendedcrafting:singularity','{Id:"extendedcrafting:coal"}']

	]

onEvent('jei.hide.items', e => {
	//console.log("starting item hiding loop")
	hiddenItems.forEach(item => {
	console.log("隐藏物品: " + item.id)
	e.hide(item)
	})

	hiddenItemsWithNBT.forEach(item => {
		console.log("隐藏NBT: " + item.id)
		e.hide(Item.of(`${item[0]}`).withNBT(`${item[1]}`))
		})


	hiddenItemsWithoutNBT.forEach(item => {
	console.log("隐藏物品忽略NBT: " + item.id)
	e.hide(Item.of(`${item}`).ignoreNBT())
	})		

})


onEvent('jei.remove.categories', event => {
	//log a list of all category ids to logs/kubejs/client.txt
	//console.log(event.getCategoryIds()) 
	
	event.remove('industrialforegoing:ore_washer')
  })

onEvent('item.tooltip', e => {
  let black_iron = ['extendedcrafting:black_iron_ingot', 'extendedcrafting:black_iron_block']

  black_iron.forEach(black => {
    e.add(black, Text.of('通过让怪物在一块铁上生成').green())
  })

    let night = ['ibpdx:night_summoner']

  night.forEach(fair => {
    e.add(fair, Text.of('将时间设置为夜间。只能作为任务奖励获得，请在游戏后期寻找其他可重复的方法.').green())
  })

    let mars = ['ibpdx:mars_air_bottle']

  mars.forEach(black => {
    e.add(black, Text.of('用玻璃瓶右键点击火星上的一个方块.').green())
  })

    let solar_panels = ['ftbic:lv_solar_panel', 'ftbic:mv_solar_panel', 'ftbic:hv_solar_panel', 'ftbic:ev_solar_panel']

  solar_panels.forEach(panel => {
    e.add(panel, Text.of('只能放月球上').red())
  })

    let smoothies = ['pamhc2foodcore:melonsmoothieitem', 'pamhc2foodcore:sweetberrysmoothieitem', 'pamhc2foodcore:applesmoothieitem']

  smoothies.forEach(smooth => {
    e.add(smooth, Text.of('通过在冰块或浮冰上右键点击果汁可以制作。').blue())
  })

  let air = ['ibpdx:fake_air', 'ibpdx:fake_air_bucket']

  air.forEach(fair => {
    e.add(fair, Text.of('通过在热烹饪板上用玻璃瓶右键点击可以制作。(未食用)').blue())
  })

    let hot_water = ['ibpdx:hot_water', 'ibpdx:hot_water_bucket']

  hot_water.forEach(fair => {
    e.add(fair, Text.of('通过在热烹饪板上用淡水右键点击可以制作。').blue())
  })

  let milk = ['ibpdx:milk', 'ibpdx:milk_bucket']

  milk.forEach(fair => {
    e.add(fair, Text.of('通过在热烹饪板上用新鲜牛奶右键点击可以制作。').blue())
  })

  let xdrops = ['xreliquary:rib_bone', 'xreliquary:catalyzing_gland', 'xreliquary:zombie_heart', 'xreliquary:nebulous_heart', 'xreliquary:slime_pearl', 'xreliquary:witch_hat', 'xreliquary:molten_core']

  xdrops.forEach(panel => {
    e.add(panel, Text.of('如果被尸壳杀死，可以以更高的效率实现自动化，黏液珍珠的笔记,不会从匠魂史莱姆中掉落.。').green())
  })

    let a2sword = ['ibpdx:airt2_sword']

  a2sword.forEach(fair => {
    e.add(fair, Text.of('在右键点击时，给予5秒的飘浮效果和7秒的抗性效果，可以阻挡所有伤害并防止使用者高度变化。代价：4个空气粉。').green())
  })

  let pfdisc = ['ibpdx:phantom_fantasy']

  pfdisc.forEach(fair => {
    e.add(fair, Text.of('第三级。可以穿越一格深的墙壁进行传送。仅在主世界有效。消耗：4次使用次数。').green())
  })

  let otmdisc = ['ibpdx:on_the_moon']

  otmdisc.forEach(fair => {
    e.add(fair, Text.of('第一级。当受到攻击时，怪物将漂走。消耗：2次使用次数。').green())
  })

    let ufodisc = ['ibpdx:ufo_lover']

  ufodisc.forEach(fair => {
    e.add(fair, Text.of('第四级。提供持续30分钟的飞行效果。消耗：12次使用次数。.').green())
  })

  let cgdisc = ['ibpdx:china_gal']

  cgdisc.forEach(fair => {
    e.add(fair, Text.of('第二级。在夜晚提供5分钟的速度IV、力量IV和抗性II效果。消耗：8次使用次数。').green())
  })

    let uldisc = ['ibpdx:uninstall_love']

  uldisc.forEach(fair => {
    e.add(fair, Text.of('第一级。将主世界方块转化为下界对应方块，反之亦然。消耗：1个小型次数。').green())
  })

    let cudisc = ['ibpdx:catch_us']

  cudisc.forEach(fair => {
    e.add(fair, Text.of('第二级。如果在夜晚使用，将天体移动到下一个夜晚的位置。消耗：2个使用次数。').green())
  })

    let e2sword = ['ibpdx:eartht2_sword']

  e2sword.forEach(fair => {
    e.add(fair, Text.of('临时在被攻击的生物上形成一根石柱。消耗：无。').green())
  })

  let f2sword = ['ibpdx:firet2_sword']

  f2sword.forEach(fair => {
    e.add(fair, Text.of('发射火球。消耗：每次发射2个炽焱粉。').green())
  })

  let w2sword = ['ibpdx:watert2_sword']

  w2sword.forEach(fair => {
    e.add(fair, Text.of('在击中生物时提供再生效果。消耗：无。').green())
  })

    let e2axe = ['ibpdx:eartht2_axe']

  e2axe.forEach(fair => {
    e.add(fair, Text.of('临时在被攻击的生物上形成石柱。消耗：无。').green())
  })

    let f2axe = ['ibpdx:firet2_axe']

  f2axe.forEach(fair => {
    e.add(fair, Text.of('在攻击生物时获得火焰抗性效果。消耗：每次攻击消耗2个炽焱粉。').green())
  })

    let w2axe = ['ibpdx:watert2_axe']

  w2axe.forEach(fair => {
    e.add(fair, Text.of('在攻击生物时获得再生效果。消耗：无。').green())
  })

    let a2axe = ['ibpdx:airt2_axe']

  a2axe.forEach(fair => {
    e.add(fair, Text.of('在攻击生物时获得急迫效果。消耗：无。').green())
  })

    let e2pickaxe = ['ibpdx:eartht2_pickaxe']

  e2pickaxe.forEach(fair => {
    e.add(fair, Text.of('可以放置一块圆石而无需拥有任何圆石库存，并且可以快速挖掘任何材料。消耗：无。').green())
  })

  let f2pickaxe = ['ibpdx:firet2_pickaxe']

  f2pickaxe.forEach(fair => {
    e.add(fair, Text.of('在破坏方块时获得火焰抗性效果。消耗：无。').green())
  })

    let w2pickaxe = ['ibpdx:watert2_pickaxe']

  w2pickaxe.forEach(fair => {
    e.add(fair, Text.of('在破坏方块时获得再生效果。消耗：无。').green())
  })

  let a2pickaxe = ['ibpdx:airt2_pickaxe']

  a2pickaxe.forEach(fair => {
    e.add(fair, Text.of('在破坏方块时获得急迫效果，可以用于其他物品。消耗：无。').green())
  })

  let e2shovel = ['ibpdx:eartht2_shovel']

  e2shovel.forEach(fair => {
    e.add(fair, Text.of('可以在不需要任何圆石库存的情况下放置圆石。消耗：无。').green())
  })

  let f2shovel = ['ibpdx:firet2_shovel']

  f2shovel.forEach(fair => {
    e.add(fair, Text.of('在破坏方块时获得火焰抗性效果。消耗：无。').green())
  })

  let w2shovel = ['ibpdx:watert2_shovel']

  w2shovel.forEach(fair => {
    e.add(fair, Text.of('在破坏方块时获得再生效果。消耗：无。').green())
  })

  let a2shovel = ['ibpdx:airt2_shovel']

  a2shovel.forEach(fair => {
    e.add(fair, Text.of('在破坏方块时获得急迫效果，可用于其他物品。消耗：无。').green())
  })

  let enchanting = ['minecraft:enchanting_table']

  enchanting.forEach(fair => {
    e.add(fair, Text.of('无法制作。请使用星能附魔师多方块结构或在世界中寻找一个。也可能从铁战利品袋中掉落。').green())
  })

  let cook = ['ibpdx:hot_cooking_plate', 'ibpdx:cool_cooking_plate']

  cook.forEach(fair => {
    e.add(fair, Text.of('右键点击热板上的新鲜牛奶、淡水、食用油或玻璃瓶。').green())
  })

  let speed1 = ['ibpdx:speed_gearbox']

  speed1.forEach(fair => {
    e.add(fair, Text.of('将操作速度提高1.5倍，能源消耗增加2倍。对于发电机而言，通量速率增加1.5倍。').green())
  })

  let speed2 = ['ibpdx:singular_speed_gearbox']

  speed2.forEach(fair => {
    e.add(fair, Text.of('将操作速度提高2.25倍，能源消耗增加3倍。对于发电机而言，通量速率增加2.25倍。').green())
  })

  let power1 = ['ibpdx:power_gearbox']

  power1.forEach(fair => {
    e.add(fair, Text.of('将操作速度降低至0.85倍，能源消耗降低至0.75倍。对于发电机而言，通量速率降低至0.75倍，总产生能量增加1.5倍。').green())
  })

  let power2 = ['ibpdx:singular_power_gearbox']

  power2.forEach(fair => {
    e.add(fair, Text.of('将操作速度降低至0.75倍，能源消耗降低至0.5倍。对于发电机而言，通量速率保持不变，总产生能量增加2倍。').green())
  })

  let double1 = ['ibpdx:double_gearbox']

  double1.forEach(fair => {
    e.add(fair, Text.of('将操作速度提高至1.2倍，能源消耗降低至0.85倍。对于发电机而言，通量速率降低至0.75倍，总产生能量增加1.5倍。').green())
  })

  let double2 = ['ibpdx:singular_double_gearbox']

  double2.forEach(fair => {
    e.add(fair, Text.of('将操作速度提高至1.5倍，能源消耗降低至0.75倍。对于发电机而言，通量速率保持不变，总产生能量增加2倍。').green())
  })

  let lfg = ['masterfulmachinery:liquid_fuel_generator_controller']

  lfg.forEach(fair => {
    e.add(fair, Text.of('注意：电力输出需要提取。Powah电缆无法工作。请使用设置为提取模式的通用线缆，或启用自动输入的能量单元。').green())
  })

  let iridium = ['chemlib:ingot_iridium']

  iridium.forEach(fair => {
    e.add(fair, Text.of('从金战利品袋中的维度地牢获得。').green())
  })

   let bag = ['ibpdx:iron_loot_bag', 'ibpdx:gold_loot_bag']

  bag.forEach(fair => {
    e.add(fair, Text.of('在维度地牢中发现。右键点击打开!').green())
  })

  let key = ['dimdungeons:item_portal_key']

  key.forEach(fair => {
    e.add(fair, Text.of('右键点击末地传送门或钥匙写入台激活。').green())
  })

  let dist = ['thermal:redstone_bucket','thermal:glowstone_bucket', 'tconstruct:molten_glass_bucket']

  dist.forEach(fair => {
    e.add(fair, Text.of('可以通过将魔法混合物经过精馏塔来获得。').green())
  })

  let magic = ['ibpdx:magical_mixture_bucket']

  magic.forEach(fair => {
    e.add(fair, Text.of('在精馏塔中进行处理。').green())
  })

  let roller = ['ftbic:roller']

  roller.forEach(fair => {
    e.add(fair, Text.of('预期的输出是每个锭生成1个板。').green())
  })

  let extruder = ['ftbic:extruder']

  extruder.forEach(fair => {
    e.add(fair, Text.of('预期的输出是每个板生成3根导线。').green())
  })

  let salt = ['mekanism:salt']

  salt.forEach(fair => {
    e.add(fair, Text.of('在河流和湖泊中找到。').green())
  })

  let cook2 = ['pamhc2foodcore:toastitem', 'pamhc2foodcore:grilledcheeseitem', 'pamhc2foodcore:carrotbreaditem', 'pamhc2foodcore:pumpkinbreaditem', 'pamhc2foodcore:noodlesoupitem', 'pamhc2foodcore:applepieitem', 'pamhc2foodcore:sweetberrypieitem', 'pamhc2foodcore:chocolatecupcakeitem', 'pamhc2foodcore:carrotcupcakeitem', 'pamhc2foodcore:pumpkincupcakeitem', 'pamhc2foodcore:caramelcupcakeitem', 'pamhc2foodcore:donutitem', 'pamhc2foodcore:chocoolatedonutitem', 'pamhc2foodcore:jellydonutitem', 'pamhc2foodcore:softpretzelitem', 'pamhc2foodcore:cheeseitem', 'pamhc2foodcore:icecreamitem', 'pamhc2foodcore:hotchocolateitem', 'pamhc2foodcore:chocolaterollitem', 'pamhc2foodcore:applejellyitem', 'pamhc2foodcore:melonjellyitem', 'pamhc2foodcore:sweetberryjellyitem', 'pamhc2foodcore:friedchickenitem', 'pamhc2foodcore:basicchickensandwichitem', 'pamhc2foodcore:chickenpotpieitem', 'pamhc2foodcore:chickendinneritem', 'pamhc2foodcore:basichamburgeritem', 'pamhc2foodcore:hotdogitem', 'pamhc2foodcore:baconandeggsitem', 'pamhc2foodcore:fishsticksitem', 'pamhc2foodcore:basicfishsandwichitem', 'pamhc2foodcore:fishandchipsitem', 'pamhc2foodcore:friesitem', 'pamhc2foodcore:potatosoupitem', 'pamhc2foodcore:glazedcarrotsitem', 'pamhc2foodcore:carrotsoupitem', 'pamhc2foodcore:pumpkinsoupitem', 'pamhc2foodcore:meatloafitem', 'pamhc2foodcore:bakedvegetablemedlyitem']

  cook2.forEach(fair => {
    e.add(fair, Text.of('需要世界中的一种液体。查看烹饪板和美食竞速章节中的任务，了解该怎么做。').green())
  })

    let douglas = ['treemendous:douglas_sapling']

  douglas.forEach(fair => {
    e.add(fair, Text.of('使用Alchetree制作。橡木+云杉。.').green())
  })

  let pine = ['treemendous:pine_sapling']

  pine.forEach(fair => {
    e.add(fair, Text.of('使用Alchetree制作。白桦木+云杉。').green())
  })

  let fir = ['treemendous:fir_sapling']

  fir.forEach(fair => {
    e.add(fair, Text.of('使用Alchetree制作。深色橡木+云杉。').green())
  })

  let larch = ['treemendous:larch_sapling']

  larch.forEach(fair => {
    e.add(fair, Text.of('使用Alchetree制作。丛林木+云杉。').green())
  })

  let cherry = ['treemendous:cherry_sapling']

  cherry.forEach(fair => {
    e.add(fair, Text.of('使用Alchetree制作。橡木+丛林木。').green())
  })

  let beech = ['treemendous:beech_sapling']

  beech.forEach(fair => {
    e.add(fair, Text.of('使用Alchetree制作。橡木+白桦木。').green())
  })

  let maple = ['treemendous:maple_sapling']

  maple.forEach(fair => {
    e.add(fair, Text.of('使用Alchetree制作。深色橡木+橡木。').green())
  })

  let japan = ['treemendous:japanese_sapling']

  japan.forEach(fair => {
    e.add(fair, Text.of('使用Alchetree制作。深色橡木+白桦木。').green())
  })

  let rmaple = ['treemendous:red_maple_sapling']

  rmaple.forEach(fair => {
    e.add(fair, Text.of('使用Alchetree制作。深色橡木+丛林木。').green())
  })

  let bmaple = ['treemendous:brown_maple_sapling']

  bmaple.forEach(fair => {
    e.add(fair, Text.of('使用Alchetree制作。深色橡木+金合欢木。').green())
  })

  let walnut = ['treemendous:walnut_sapling']

  walnut.forEach(fair => {
    e.add(fair, Text.of('使用Alchetree制作。橡木+金合欢木。').green())
  })

  let alder = ['treemendous:alder_sapling']

  alder.forEach(fair => {
    e.add(fair, Text.of('使用Alchetree制作。白桦木+金合欢木。').green())
  })

  let chestnut = ['treemendous:chestnut_sapling']

  chestnut.forEach(fair => {
    e.add(fair, Text.of('使用Alchetree制作。白桦木+丛林木。').green())
  })

  let plane = ['treemendous:plane_sapling']

  plane.forEach(fair => {
    e.add(fair, Text.of('使用Alchetree制作。丛林木+金合欢木。').green())
  })

  let ash = ['treemendous:ash_sapling']

  ash.forEach(fair => {
    e.add(fair, Text.of('使用Alchetree制作。花旗松+橡木。').green())
  })

  let linden = ['treemendous:linden_sapling']

  linden.forEach(fair => {
    e.add(fair, Text.of('使用Alchetree制作。花旗松+丛林木。').green())
  })

  let robinia = ['treemendous:robinia_sapling']

  robinia.forEach(fair => {
    e.add(fair, Text.of('使用Alchetree制作。花旗松+云杉。').green())
  })

  let willow = ['treemendous:willow_sapling']

  willow.forEach(fair => {
    e.add(fair, Text.of('使用Alchetree制作。花旗松+白桦木。.').green())
  })

  let pomeg = ['treemendous:pomegranate_sapling']

  pomeg.forEach(fair => {
    e.add(fair, Text.of('使用Alchetree制作。花旗松+樱桃。').green())
  })

  let magnolia = ['treemendous:magnolia_sapling']

  magnolia.forEach(fair => {
    e.add(fair, Text.of('使用Alchetree制作。松木+樱桃。').green())
  })

  let cedar = ['treemendous:cedar_sapling']

  cedar.forEach(fair => {
    e.add(fair, Text.of('使用Alchetree制作。松木+樱桃。').green())
  })

  let poplar = ['treemendous:poplar_sapling']

  poplar.forEach(fair => {
    e.add(fair, Text.of('使用Alchetree制作。松木+白桦木。').green())
  })

  let elm = ['treemendous:elm_sapling']

  elm.forEach(fair => {
    e.add(fair, Text.of('使用Alchetree制作。松木+丛林木。').green())
  })

  let juniper = ['treemendous:juniper_sapling']

  juniper.forEach(fair => {
    e.add(fair, Text.of('使用Alchetree制作。樱桃+白桦木。').green())
  })

  let euca = ['treemendous:rainbow_eucalyptus_sapling']

  euca.forEach(fair => {
    e.add(fair, Text.of('使用Alchetree制作。玉兰木+樱桃。').green())
  })

  let placer = ['cyclic:placer']

  placer.forEach(fair => {
    e.add(fair, Text.of('如果不删除内部数据，就无法放置方块。如果您计划使用放置器进行储罐传输，请改用工业先锋的放置器。').green())
  })

  let crystal = ['betterendforge:crystal_shards']

  crystal.forEach(fair => {
    e.add(fair, Text.of('在末地的水晶山脉生物群系中发现。').green())
  })

  let a1sword = ['ibpdx:airt1_sword', 'ibpdx:airt2_sword']

  a1sword.forEach(fair => {
    e.add(fair, Text.of('当手持时增加移动速度。').green())
  })

  let e1sword = ['ibpdx:eartht1_sword', 'ibpdx:eartht2_sword']

  e1sword.forEach(fair => {
    e.add(fair, Text.of('当手持时提供额外的护甲。').green())
  })

  let f1sword = ['ibpdx:firet1_sword', 'ibpdx:firet2_sword']

  f1sword.forEach(fair => {
    e.add(fair, Text.of('当手持时扩展攻击范围。').green())
  })

  let w1sword = ['ibpdx:watert1_sword', 'ibpdx:watert2_sword']

  w1sword.forEach(fair => {
    e.add(fair, Text.of('当手持时，提供额外的生命值。').green())
  })

  let e1axe = ['ibpdx:eartht1_axe', 'ibpdx:eartht2_axe']

  e1axe.forEach(fair => {
    e.add(fair, Text.of('当手持时提供额外的护甲。').green())
  })

  let f1axe = ['ibpdx:firet1_axe', 'ibpdx:firet2_axe']

  f1axe.forEach(fair => {
    e.add(fair, Text.of('当手持时扩展攻击范围。').green())
  })

  let w1axe = ['ibpdx:watert1_axe', 'ibpdx:watert2_axe']

  w1axe.forEach(fair => {
    e.add(fair, Text.of('当手持时，提供额外的生命值。').green())
  })

  let a1axe = ['ibpdx:airt1_axe', 'ibpdx:airt2_axe']

  a1axe.forEach(fair => {
    e.add(fair, Text.of('当手持时增加移动速度。').green())
  })

  let e1pickaxe = ['ibpdx:eartht1_pickaxe', 'ibpdx:eartht2_pickaxe']

  e1pickaxe.forEach(fair => {
    e.add(fair, Text.of('当手持时提供额外的护甲。').green())
  })

  let f1pickaxe = ['ibpdx:firet1_pickaxe', 'ibpdx:firet2_pickaxe']

  f1pickaxe.forEach(fair => {
    e.add(fair, Text.of('当手持时扩展攻击范围。').green())
  })

  let w1pickaxe = ['ibpdx:watert1_pickaxe', 'ibpdx:watert2_pickaxe']

  w1pickaxe.forEach(fair => {
    e.add(fair, Text.of('当手持时，提供额外的生命值。').green())
  })

  let a1pickaxe = ['ibpdx:airt1_pickaxe', 'ibpdx:airt2_pickaxe']

  a1pickaxe.forEach(fair => {
    e.add(fair, Text.of('当手持时增加移动速度。').green())
  })

  let e1shovel = ['ibpdx:eartht1_shovel', 'ibpdx:eartht2_shovel']

  e1shovel.forEach(fair => {
    e.add(fair, Text.of('当手持时提供额外的护甲。').green())
  })

  let f1shovel = ['ibpdx:firet1_shovel', 'ibpdx:firet2_shovel']

  f1shovel.forEach(fair => {
    e.add(fair, Text.of('当手持时扩展攻击范围。').green())
  })

  let w1shovel = ['ibpdx:watert1_shovel', 'ibpdx:watert2_shovel']

  w1shovel.forEach(fair => {
    e.add(fair, Text.of('当手持时，提供额外的生命值。').green())
  })

  let a1shovel = ['ibpdx:airt1_shovel', 'ibpdx:airt2_shovel']

  a1shovel.forEach(fair => {
    e.add(fair, Text.of('当手持时增加移动速度。').green())
  })

  let infusedplanks = ['astralsorcery:infused_wood']

  infusedplanks.forEach(fair => {
    e.add(fair, Text.of('将一根原木投入星能液中。').green())
  })

  let peat = ['ibpdx:peat']

  peat.forEach(fair => {
    e.add(fair, Text.of('打碎一块泥炭沼泽.').green())
  })

  let normore = ['minecraft:iron_ore', 'minecraft:gold_ore', 'thermal:copper_ore', 'thermal:tin_ore', 'thermal:lead_ore', 'thermal:silver_ore']

  normore.forEach(fair => {
    e.add(fair, Text.of('在普通矿石处理链下处理标准矿石.').green())
  })

  let hienergyore = ['thermal:nickel_ore', 'immersiveengineering:ore_aluminum', 'mekanism:osmium_ore', 'mekanism:uranium_ore', 'boss_tools:moon_desh_ore', 'boss_tools:mars_silicon_ore', 'draconicevolution:overworld_draconium_ore', 'draconicevolution:nether_draconium_ore', 'draconicevolution:end_draconium_ore']

  hienergyore.forEach(fair => {
    e.add(fair, Text.of('需要高能量处理线的矿石.').green())
})


let mekupgrade = ['mekanism:upgrade_speed', 'mekanism:upgrade_energy']

mekupgrade.forEach(fair => {
  e.add(fair, Text.of('可以在维度地牢中找到.').green())
})

let stardust = ['astralsorcery:stardust']

stardust.forEach(fair => {
  e.add(fair, Text.of('在星辉锭上用星辉切割工具左键单击.').green())
})

let addon = ['ibpdx:addon_base']

addon.forEach(fair => {
  e.add(fair, Text.of('自动装配器如果在装配机中合成,则不会工作.').red())
})

let ssn = ['storagenetwork:master', 'storagenetwork:request', 'storagenetwork:crafting_remote', 'storagenetwork:kabel', 'storagenetwork:storage_kabel', 'storagenetwork:import_kabel', 'storagenetwork:import_filter_kabel', 'storagenetwork:import_kabel', 'storagenetwork:collector', 'storagenetwork:stack_upgrade', 'storagenetwork:speed_upgrade', 'storagenetwork:builder_remote', 'storagenetwork:collector_remote']

ssn.forEach(fair => {
  e.add(fair, Text.of('由于一些错误，简单存储网络将在未来的版本中被禁用。你可以把它的组件制作成漂亮的管道物品，但它将被逐步淘汰。它不会被移除，所以你的世界将永远不会受到影响.').red())
})

let antimatter = ['ftbic:antimatter']

antimatter.forEach(fair => {
  e.add(fair, Text.of('在反物质构建机中制作.').green())
})

let bchammer = ['blockcarpentry:hammer']

bchammer.forEach(fair => {
  e.add(fair, Text.of('从框架和幻影方块中移除方块。').green())
})

let bcchisel = ['blockcarpentry:chisel']

bcchisel.forEach(fair => {
  e.add(fair, Text.of('改变某些细木工制品的风格，如门或墙。').green())
})

let bcpaint = ['blockcarpentry:paintbrush']

bcpaint.forEach(fair => {
  e.add(fair, Text.of('更改某些木工砌块上的额外功能，例如门上的门把手。').green())
})

let bcwrench = ['blockcarpentry:texture_wrench']

bcwrench.forEach(fair => {
  e.add(fair, Text.of('可以使块的每一面都显示相同的纹理，例如工作台的顶面。').green())
})


})


onEvent('player.data_from_server.reload', (event) => {
	global.onReload();
});

onEvent('client.logged_in', (event) => {
	global.onReload();
});
	