// priority: 1000

onEvent('item.registry.tool_tiers', event => {
	event.add('duskstone', duskstone => {
		duskstone.uses = 2000
	  	duskstone.speed = 6.0
	  	duskstone.attackDamageBonus = 4.0
	  	duskstone.level = 3
	  	duskstone.enchantmentValue = 25
	  	duskstone.repairIngredient = 'ibpdx:duskstone_ingot'
	  })

  
	event.add('airt1', airt1 => {
	  	airt1.uses = 2000
	  	airt1.speed = 7.0
	  	airt1.attackDamageBonus = 4.0
	  	airt1.level = 3
	  	airt1.enchantmentValue = 25
	  	airt1.repairIngredient = 'ibpdx:duskstone_ingot'
	  })

  
	event.add('eartht1', eartht1 => {
	  	eartht1.uses = 2500
	  	eartht1.speed = 6.0
	  	eartht1.attackDamageBonus = 4.0
	  	eartht1.level = 3
	  	eartht1.enchantmentValue = 25
	  	eartht1.repairIngredient = 'ibpdx:duskstone_ingot'
	  })

  
	event.add('firet1', firet1 => {
	  	firet1.uses = 2000
	  	firet1.speed = 6.0
	  	firet1.attackDamageBonus = 5.0
	  	firet1.level = 3
	  	firet1.enchantmentValue = 25
	  	firet1.repairIngredient = 'ibpdx:duskstone_ingot'
	  })

  
	event.add('watert1', watert1 => {
	  	watert1.uses = 2000
	  	watert1.speed = 6.0
	  	watert1.attackDamageBonus = 4.0
	  	watert1.level = 3
	  	watert1.enchantmentValue = 30
	  	watert1.repairIngredient = 'ibpdx:duskstone_ingot'
	  })

  
	event.add('airt2', airt2 => {
	  	airt2.uses = 2000
	  	airt2.speed = 10.0
	  	airt2.attackDamageBonus = 4.0
	  	airt2.level = 3
	  	airt2.enchantmentValue = 25
	  	airt2.repairIngredient = 'ibpdx:duskstone_ingot'
	  })

  
	event.add('eartht2', eartht2 => {
	  	eartht2.uses = 3200
	  	eartht2.speed = 8.0
	  	eartht2.attackDamageBonus = 4.0
	  	eartht2.level = 3
	  	eartht2.enchantmentValue = 25
	  	eartht2.repairIngredient = 'ibpdx:duskstone_ingot'
	  })

  
	event.add('firet2', firet2 => {
	  	firet2.uses = 2000
	  	firet2.speed = 6.0
	  	firet2.attackDamageBonus = 8.0
	  	firet2.level = 3
	  	firet2.enchantmentValue = 25
	  	firet2.repairIngredient = 'ibpdx:duskstone_ingot'
	  })

	event.add('watert2', watert2 => {
	  	watert2.uses = 2000
	  	watert2.speed = 6.0
	  	watert2.attackDamageBonus = 4.0
	  	watert2.level = 3
	  	watert2.enchantmentValue = 40
	  	watert2.repairIngredient = 'ibpdx:duskstone_ingot'
	  })
})

// Item
onEvent('item.registry', event => {
	event.create('ibpdx:starlight_abberation').displayName('星光照射')
	event.create('ibpdx:draconium_shard').displayName('龙碎片')
	event.create('ibpdx:absolution_rune').displayName('赦免符文')
	event.create('ibpdx:day_rune').displayName('日光符文')
	event.create('ibpdx:night_rune').displayName('黑暗符文')
	event.create('ibpdx:star_diamond').displayName('星辉钻石')
	event.create('ibpdx:star_pearl').displayName('星辉珍珠')
	event.create('ibpdx:filled_rubber_electron_tube').displayName('填充橡胶电子管')
	event.create('ibpdx:draconium_crystal').displayName('龙水晶')
	event.create('ibpdx:double_gear').displayName('双齿轮')
	event.create('ibpdx:framed_growth_lens').displayName('框式生长透镜')
	event.create('ibpdx:dragon_base').displayName('龙合成基座')

	event.create('ibpdx:bioenriched_circuit').displayName('生物富集电路')
	event.create('ibpdx:wispy_petal').displayName('束状花瓣')
	event.create('ibpdx:power_gear').displayName('发电齿轮')
	event.create('ibpdx:empowered_copper_ingot').displayName('充能铜锭')
	event.create('ibpdx:empowered_silver_ingot').displayName('充能银锭')
	event.create('ibpdx:empowered_steel_ingot').displayName('充能钢锭')
	event.create('ibpdx:empowered_gold_ingot').displayName('充能金锭')
	event.create('ibpdx:empowered_lead_ingot').displayName('充能铅锭')
	event.create('ibpdx:empowered_aluminum_ingot').displayName('充能铝锭')

	event.create('ibpdx:mixed_brick').displayName('混合砖')
	event.create('ibpdx:bio_napalm_cell').displayName('Bio-固体汽油电池')
	event.create('ibpdx:wither_base').displayName('凋灵合成基座')
	event.create('ibpdx:mixed_blend').displayName('混合融合物')
	event.create('ibpdx:bloodshine_ingot').displayName('血光锭')

	event.create('ibpdx:resonated_plated_growth_lens').displayName('共振式电镀生长透镜')
	event.create('ibpdx:stellar_wrapped_lens').displayName('恒星包裹透镜')
	event.create('ibpdx:speed_gear').displayName('变速齿轮')
	event.create('ibpdx:bedrock_shard').displayName('基岩碎片')
	event.create('ibpdx:bedrock_crystal').displayName('基岩水晶')
	event.create('ibpdx:empty_fuel_cell').displayName('空燃料电池')
	event.create('ibpdx:duskstone_ingot').displayName('暮光锭')
	event.create('ibpdx:gaia_base').displayName('盖亚合成基座')
	event.create('ibpdx:organic_diode').displayName('有机二极管')
	event.create('ibpdx:inert_infinity_ingot').displayName('惰性无尽锭')

	event.create('ibpdx:seedoil_fuel_cell').displayName('种子油燃料电池')


	event.create('ibpdx:modularium').displayName('模块化合金锭')
	event.create('ibpdx:star_plate').displayName('星辉板')

	event.create('ibpdx:redstone_clump').displayName('红石碎块')
	event.create('ibpdx:diamond_clump').displayName('钻石碎块')
	event.create('ibpdx:emerald_clump').displayName('绿宝石碎块')
	event.create('ibpdx:lapis_clump').displayName('青金石碎块')
	event.create('ibpdx:fluorite_clump').displayName('氟石碎块')
	event.create('ibpdx:quartz_clump').displayName('石英碎块')
	event.create('ibpdx:niter_clump').displayName('硝石碎块')

	event.create('ibpdx:redstone_shard').displayName('红石碎片')
	event.create('ibpdx:diamond_shard').displayName('钻石碎片')
	event.create('ibpdx:emerald_shard').displayName('绿宝石碎片')
	event.create('ibpdx:lapis_shard').displayName('青金石碎片')
	event.create('ibpdx:fluorite_shard').displayName('氟石碎片')
	event.create('ibpdx:quartz_shard').displayName('石英碎片')
	event.create('ibpdx:niter_shard').displayName('硝石碎片')

	event.create('ibpdx:redstone_crystal').displayName('红石结晶')
	event.create('ibpdx:diamond_crystal').displayName('钻石结晶')
	event.create('ibpdx:emerald_crystal').displayName('绿宝石结晶')
	event.create('ibpdx:lapis_crystal').displayName('青金石结晶')
	event.create('ibpdx:fluorite_crystal').displayName('氟石结晶')
	event.create('ibpdx:quartz_crystal').displayName('石英结晶')
	event.create('ibpdx:niter_crystal').displayName('硝石结晶')

	event.create('ibpdx:pyrotheum_blend').displayName('炽焱粉')
	event.create('ibpdx:cryotheum_blend').displayName('凛冰粉')
	event.create('ibpdx:petrotheum_blend').displayName('地岩粉')
	event.create('ibpdx:aerotheum_blend').displayName('空气粉')

	event.create('ibpdx:mars_air_bottle').displayName('火星贮气瓶')
	event.create('ibpdx:stainless_steel_ingot').displayName('不锈钢锭')	

	/*
	event.create('ibpdx:stable_swiftness_potion').displayName('Stable Swiftness Potion')	
	event.create('ibpdx:stable_strength_potion').displayName('Stable Strength Potion')
	event.create('ibpdx:stable_health_potion').displayName('Stable Health Potion')	
	event.create('ibpdx:stable_fire_resistance_potion').displayName('Stable Fire Resistance Potion')
	*/
	event.create('ibpdx:inert_double_gear').displayName('惰性双齿轮')
	event.create('ibpdx:crystallized_flax_seeds').displayName('结晶亚麻种子')
	event.create('ibpdx:empowered_flax_seeds').displayName('充能亚麻种子')
	event.create('ibpdx:addon_base').displayName('插件基础')

	event.create('ibpdx:crystal_of_speed').displayName('速度结晶')	
	event.create('ibpdx:crystal_of_power').displayName('能量结晶')
	event.create('ibpdx:crystal_of_life').displayName('生命结晶')	
	event.create('ibpdx:crystal_of_inertion').displayName('惰性结晶')

	event.create('ibpdx:dummy_efficiency_book').displayName('仿制效率之书')	
	event.create('ibpdx:dummy_sharpness_book').displayName('仿制锋利之书')
	event.create('ibpdx:dummy_smite_book').displayName('仿制亡灵杀手之书')	
	event.create('ibpdx:dummy_arthropods_book').displayName('仿制节肢杀手之书')
	event.create('ibpdx:dummy_protection_book').displayName('仿制保护之书')	
	event.create('ibpdx:dummy_projectile_prot_book').displayName('仿制弹射物保护之书')
	event.create('ibpdx:dummy_fire_prot_book').displayName('仿制火焰保护之书')	
	event.create('ibpdx:dummy_blast_prot_book').displayName('仿制防爆之书')
	event.create('ibpdx:dummy_fire_aspect_book').displayName('仿制火焰附加之书')	
	event.create('ibpdx:dummy_power_book').displayName('仿制力量之书')
	event.create('ibpdx:dummy_flame_book').displayName('仿制火矢之书')	
	event.create('ibpdx:dummy_knockback_book').displayName('仿制击退之书')
	event.create('ibpdx:dummy_punch_book').displayName('仿制冲击之书')	
	event.create('ibpdx:dummy_fortune_book').displayName('仿制时运之书')
	event.create('ibpdx:dummy_silk_touch_book').displayName('仿制范围拓展之书')	
	event.create('ibpdx:dummy_vein_mining_book').displayName('仿制连锁采集之书')
	event.create('ibpdx:dummy_feather_falling_book').displayName('仿制摔落保护之书')	
	event.create('ibpdx:dummy_respiration_book').displayName('仿制水下呼吸之书')
	event.create('ibpdx:dummy_aqua_affinity_book').displayName('仿制水下速掘之书')	
	event.create('ibpdx:dummy_depth_strider_book').displayName('仿制深海探索者之书')
	event.create('ibpdx:dummy_frost_walker_book').displayName('仿制冰霜行者之书')	
	event.create('ibpdx:dummy_soul_speed_book').displayName('仿制灵魂急行之书')
	event.create('ibpdx:dummy_looting_book').displayName('仿制抢夺之书')	
	event.create('ibpdx:dummy_sweeping_edge_book').displayName('仿制横扫之刃之书')
	event.create('ibpdx:dummy_unbreaking_book').displayName('仿制耐久之书')	
	event.create('ibpdx:dummy_luck_of_the_sea_book').displayName('仿制海之眷顾之书')
	event.create('ibpdx:dummy_lure_book').displayName('仿制饵钓之书')	
	event.create('ibpdx:dummy_infinity_book').displayName('仿制无限之书')
	event.create('ibpdx:dummy_night_vision_book').displayName('仿制夜视之书')	
	event.create('ibpdx:dummy_experience_boost_book').displayName('仿制经验提升之书')
	event.create('ibpdx:dummy_scorching_heat_book').displayName('仿制灼热之书')	
	event.create('ibpdx:dummy_holding_book').displayName('仿制扩容之书')
	event.create('ibpdx:dummy_beheading_book').displayName('仿制斩首之书')	
	event.create('ibpdx:dummy_life_leech_book').displayName('仿制生命汲取之书')
	event.create('ibpdx:dummy_multi_bow_book').displayName('仿制多重弓箭之书')	
	event.create('ibpdx:dummy_quickshot_book').displayName('仿制疾弓之书')
	event.create('ibpdx:dummy_mending_book').displayName('仿制经验修补之书')

	event.create('ibpdx:rubberized_electron_tube').displayName('橡胶电子管')
	event.create('ibpdx:clump_silver').displayName('银碎块')
	event.create('ibpdx:clump_aluminum').displayName('铝碎块')
	event.create('ibpdx:clump_nickel').displayName('镍碎块')
	event.create('ibpdx:clump_silicon').displayName('硅碎块')
	event.create('ibpdx:clump_desh').displayName('戴斯碎块')
	event.create('ibpdx:clump_draconium').displayName('龙碎块')
	event.create('ibpdx:dirty_dust_aluminum').displayName('污浊铝粉')
	event.create('ibpdx:dirty_dust_nickel').displayName('污浊镍粉')
	event.create('ibpdx:dirty_dust_silicon').displayName('污浊硅粉')
	event.create('ibpdx:dirty_dust_desh').displayName('污浊戴斯粉')
	event.create('ibpdx:dirty_dust_draconium').displayName('污浊龙粉')
	event.create('ibpdx:crystal_silver').displayName('银结晶')
	event.create('ibpdx:shard_silver').displayName('银碎片')
	event.create('ibpdx:shard_aluminum').displayName('铝碎片')
	event.create('ibpdx:shard_nickel').displayName('镍碎片')
	event.create('ibpdx:shard_silicon').displayName('硅碎片')
	event.create('ibpdx:shard_desh').displayName('戴斯碎片')
	event.create('ibpdx:shard_draconium').displayName('龙碎片')
	event.create('ibpdx:energy_shard').displayName('能量碎片')
	event.create('ibpdx:starspirit_alloy').displayName('星魂合金')
	event.create('ibpdx:infinity_fragment').displayName('无尽碎片')
	event.create('ibpdx:space_survival_kit').displayName('太空生存工具包')
	event.create('ibpdx:coordinate_data_module').displayName('坐标数据模块')
	event.create('ibpdx:inert_infinity_chunk').displayName('惰性无尽碎块纹')
	event.create('ibpdx:energized_infinity_chunk').displayName('充能无尽碎块纹')

	event.create('ibpdx:iron_loot_bag').displayName('铁战利品袋')
	event.create('ibpdx:gold_loot_bag').displayName('金战利品袋')

	event.create('ibpdx:unknown_disc').displayName('未知光盘1')
	event.create('ibpdx:unknown_disc_2').displayName('未知光盘2')
	event.create('ibpdx:unknown_disc_3').displayName('未知光盘3')
	event.create('ibpdx:unknown_disc_4').displayName('未知光盘4')
	event.create('ibpdx:decrypted_disc').displayName('解密光盘1')
	event.create('ibpdx:decrypted_disc_2').displayName('解密光盘2')
	event.create('ibpdx:decrypted_disc_3').displayName('解密光盘3')
	event.create('ibpdx:decrypted_disc_4').displayName('解密光盘4')
	event.create('ibpdx:spirit_charge').displayName('灵魂充能')
	event.create('ibpdx:small_spirit_charge').displayName('小的灵魂充能')	
	event.create('ibpdx:ufo_lover').displayName('飞碟情缘')
	event.create('ibpdx:phantom_fantasy').displayName('幽灵幻想')
	event.create('ibpdx:catch_us').displayName('怀人远望')
	event.create('ibpdx:china_gal').displayName('中华佳人')
	event.create('ibpdx:on_the_moon').displayName('月之彼岸')
	event.create('ibpdx:uninstall_love').displayName('解离爱意')

	event.create('ibpdx:peat').displayName('泥炭').burnTime(1200)
	event.create('ibpdx:ash').displayName('灰')
	event.create('ibpdx:bituminous_peat').displayName('沥青泥炭').burnTime(3200)
	event.create('ibpdx:circuit_base_t1').displayName('简单电路组件')
	event.create('ibpdx:circuit_base_t2').displayName('高级电路组件')
	event.create('ibpdx:circuit_base_t3').displayName('最优电路组件')
	event.create('ibpdx:copper_electron_tube').displayName('铜电子管')
	event.create('ibpdx:blaze_electron_tube').displayName('烈焰电子管')
	event.create('ibpdx:diamond_electron_tube').displayName('钻石电子管')
	event.create('ibpdx:emerald_electron_tube').displayName('绿宝石电子管')		
	event.create('ibpdx:fuel_unit').displayName('燃料单元').burnTime(200).maxStackSize(64)
	event.create('ibpdx:starmetal_nugget').displayName('星辉块状物')		
	event.create('ibpdx:industrial_sandwich').displayName('复合工业级金属')	
	event.create('ibpdx:night_summoner').displayName('夜晚的呼唤')	

	event.create('ibpdx:duskstone_pickaxe').type('pickaxe').tier('duskstone').displayName('暮光稿')
	event.create('ibpdx:duskstone_sword').type('sword').tier('duskstone').displayName('暮光剑')
	event.create('ibpdx:duskstone_axe').type('axe').tier('duskstone').displayName('暮光斧')
	event.create('ibpdx:duskstone_shovel').type('shovel').tier('duskstone').displayName('暮光铲')

	event.create('ibpdx:airt1_pickaxe').type('pickaxe').tier('airt1').displayName('狂风稿')
	event.create('ibpdx:airt1_sword').type('sword').tier('airt1').displayName('狂风剑')
	event.create('ibpdx:airt1_axe').type('axe').tier('airt1').displayName('狂风斧')
	event.create('ibpdx:airt1_shovel').type('shovel').tier('airt1').displayName('狂风铲')

	event.create('ibpdx:eartht1_pickaxe').type('pickaxe').tier('eartht1').displayName('岩石稿')
	event.create('ibpdx:eartht1_sword').type('sword').tier('eartht1').displayName('岩石剑')
	event.create('ibpdx:eartht1_axe').type('axe').tier('eartht1').displayName('岩石斧')
	event.create('ibpdx:eartht1_shovel').type('shovel').tier('eartht1').displayName('岩石铲')

	event.create('ibpdx:firet1_pickaxe').type('pickaxe').tier('firet1').displayName('余烬稿')
	event.create('ibpdx:firet1_sword').type('sword').tier('firet1').displayName('余烬剑')
	event.create('ibpdx:firet1_axe').type('axe').tier('firet1').displayName('余烬斧')
	event.create('ibpdx:firet1_shovel').type('shovel').tier('firet1').displayName('余烬铲')

	event.create('ibpdx:watert1_pickaxe').type('pickaxe').tier('watert1').displayName('泡沫稿')
	event.create('ibpdx:watert1_sword').type('sword').tier('watert1').displayName('泡沫剑')
	event.create('ibpdx:watert1_axe').type('axe').tier('watert1').displayName('泡沫斧')
	event.create('ibpdx:watert1_shovel').type('shovel').tier('watert1').displayName('泡沫铲')

	event.create('ibpdx:airt2_pickaxe').type('pickaxe').tier('airt2').displayName('飓风稿')
	event.create('ibpdx:airt2_sword').type('sword').tier('airt2').displayName('飓风剑')
	event.create('ibpdx:airt2_axe').type('axe').tier('airt2').displayName('飓风斧')
	event.create('ibpdx:airt2_shovel').type('shovel').tier('airt2').displayName('飓风铲')

	event.create('ibpdx:eartht2_pickaxe').type('pickaxe').tier('eartht2').displayName('山崩稿')
	event.create('ibpdx:eartht2_sword').type('sword').tier('eartht2').displayName('山崩剑')
	event.create('ibpdx:eartht2_axe').type('axe').tier('eartht2').displayName('山崩斧')
	event.create('ibpdx:eartht2_shovel').type('shovel').tier('eartht2').displayName('山崩铲')

	event.create('ibpdx:firet2_pickaxe').type('pickaxe').tier('firet2').displayName('太阳神稿')
	event.create('ibpdx:firet2_sword').type('sword').tier('firet2').displayName('太阳神剑')
	event.create('ibpdx:firet2_axe').type('axe').tier('firet2').displayName('太阳神斧')
	event.create('ibpdx:firet2_shovel').type('shovel').tier('firet2').displayName('太阳神铲')

	event.create('ibpdx:watert2_pickaxe').type('pickaxe').tier('watert2').displayName('潮汐稿')
	event.create('ibpdx:watert2_sword').type('sword').tier('watert2').displayName('潮汐剑')
	event.create('ibpdx:watert2_axe').type('axe').tier('watert2').displayName('潮汐斧')
	event.create('ibpdx:watert2_shovel').type('shovel').tier('watert2').displayName('潮汐铲')
	event.create('ibpdx:spaghetti_and_meatballs').displayName('意大利面和肉丸').food(food=>{food.hunger(12).saturation(1.4)
	event.create('ibpdx:smithing_table_nugget').displayName('锻造台粒').tooltip('§7锻造台的力量，尽在掌中')
	})
	
	})

onEvent('item.modification', event => {
    event.modify('botania:quartz_dark', item => {
        item.fireResistant = true
    })
})