onEvent('block.right_click', event => {

   const {block, level, server, item, player, entity} = event
   let valid = true
   if(block.id != "minecraft:dirt" || item.id != "minecraft:flint_and_steel") return
   let pitlength = 0
   let maxlength = 4
   const {x, y, z} = block
   for(i = 0; i <= maxlength; i++) {
      if(level.getBlock(x+i, y, z).hasTag('chisel:bricks')) pitlength += 1
   }
   
   for(let i = -pitlength; i <= pitlength; i++){

      //north
      if(!level.getBlock(x+i, y-1, z+pitlength+1).hasTag('chisel:bricks')){
         player.tell(`你错过了一块砖 ${x+i}, ${y}, ${z+pitlength+1}`)
         valid = false
      }
      //south
      if(!level.getBlock(x+i, y-1, z-pitlength-1).hasTag('chisel:bricks')){
         player.tell(`你错过了一块砖 ${x+i}, ${y}, ${z-pitlength-1}`)
         valid = false
      }
      //east
      if(!level.getBlock(x+pitlength+1, y-1, z+i).hasTag('chisel:bricks')){
         player.tell(`你错过了一块砖 ${x+i}, ${y}, ${z+pitlength+1}`)
         valid = false
      }
      //west
      if(!level.getBlock(x-pitlength-1, y-1, z+i).hasTag('chisel:bricks')){
         player.tell(`你错过了一块砖 ${x+i}, ${y}, ${z-pitlength-1}`)
         valid = false
      }

      // top layer 
      for (let j = -pitlength; j <= pitlength; j++){
         if(!level.getBlock(x+i, y, z+j).hasTag('chisel:bricks')){
            if(i == 0 && j == 0){
               continue
            }else{
               player.tell(`你错过了一块砖 ${x+i}, ${y}, ${z+j}`)
               valid = false
            }
         }
         if(!level.getBlock(x+i, y-1, z+j).hasTag('minecraft:logs')){
            player.tell(`你丢失了原木 ${x+i}, ${y-1}, ${z+j}`)
            valid = false
         }
      }
   }
   
   


   if(valid){
      
      const delay = (240 + (pitlength*60)) * 20

      player.tell('木炭坑被点燃')
      // Smoke Particles every Second during Delay
      for(let i = 0; i < delay/20; i++){
         server.scheduleInTicks(20*i, entity.block, (cb) =>{
            server.runCommandSilent(`execute positioned ${x} ${y} ${z} run particle minecraft:smoke ~ ~ ~ 0 1 0 0.05 20 force`)
         })
      }

      // Replace logs with Ashen Charcoal after delay, check if block actually still is log
      server.scheduleInTicks(delay, entity.block, (cb) => {
         for(let i = -pitlength; i <= pitlength; i++){
            for (let j = -pitlength; j <= pitlength; j++){

               if(level.getBlock(x+i, y-1, z+j).hasTag('minecraft:logs')){
                  level.getBlock(x+i, y-1, z+j).set('ibpdx:ashen_charcoal')
            }
         }}
      
         if(block.id == 'minecraft:dirt') block.set('air')
         player.tell('木炭坑改造')
      });

   }
  })

const saplingArray = [
   // [input1, input2, output]
   ["minecraft:oak_sapling", "minecraft:spruce_sapling", "treemendous:douglas_sapling"],
   ["minecraft:birch_sapling", "minecraft:spruce_sapling", "treemendous:pine_sapling"],
   ["minecraft:dark_oak_sapling", "minecraft:spruce_sapling", "treemendous:fir_sapling"],
   ["minecraft:jungle_sapling", "minecraft:spruce_sapling", "treemendous:larch_sapling"],
   ["minecraft:oak_sapling", "minecraft:jungle_sapling", "treemendous:cherry_sapling"],
   ["minecraft:oak_sapling", "minecraft:birch_sapling", "treemendous:beech_sapling"],
   ["minecraft:dark_oak_sapling", "minecraft:oak_sapling", "treemendous:maple_sapling"],
   ["minecraft:dark_oak_sapling", "minecraft:birch_sapling", "treemendous:japanese_sapling"],
   ["minecraft:dark_oak_sapling", "minecraft:jungle_sapling", "treemendous:red_maple_sapling"],
   ["minecraft:dark_oak_sapling", "minecraft:acacia_sapling", "treemendous:brown_maple_sapling"],
   ["minecraft:oak_sapling", "minecraft:acacia_sapling", "treemendous:walnut_sapling"],
   ["minecraft:birch_sapling", "minecraft:acacia_sapling", "treemendous:alder_sapling"],
   ["minecraft:birch_sapling", "minecraft:jungle_sapling", "treemendous:chestnut_sapling"],
   ["minecraft:jungle_sapling", "minecraft:acacia_sapling", "treemendous:plane_sapling"],
   ["minecraft:oak_sapling", "treemendous:douglas_sapling", "treemendous:ash_sapling"],
   ["minecraft:jungle_sapling", "treemendous:douglas_sapling", "treemendous:linden_sapling"],
   ["minecraft:spruce_sapling", "treemendous:douglas_sapling", "treemendous:robinia_sapling"],
   ["minecraft:birch_sapling", "treemendous:douglas_sapling", "treemendous:willow_sapling"],
   ["treemendous:cherry_sapling", "treemendous:douglas_sapling", "treemendous:pomegranate_sapling"],
   ["treemendous:cherry_sapling", "treemendous:pine_sapling", "treemendous:magnolia_sapling"],
   ["treemendous:pine_sapling", "minecraft:spruce_sapling", "treemendous:cedar_sapling"],
   ["treemendous:pine_sapling", "minecraft:birch_sapling", "treemendous:poplar_sapling"],
   ["treemendous:pine_sapling", "minecraft:jungle_sapling", "treemendous:elm_sapling"],
   ["treemendous:cherry_sapling", "minecraft:birch_sapling", "treemendous:juniper_sapling"],
   ["treemendous:cherry_sapling", "treemendous:magnolia_sapling", "treemendous:rainbow_eucalyptus_sapling"],
]




onEvent('block.right_click', event => {
  const {block, level, server, item} = event
  if(block.id == "botania:mutated_grass" && item.id == "botania:twig_wand") {
  const {x, y, z} = block
  for(let i = -1; i <= 1; i++){
   for (let j = -1; j <= 1; j++){
      if(level.getBlock(x+i, y, z+j) != "botania:mutated_grass") return
   }
  }
  blocksArray = []
  for(let i = -1; i <= 1; i++){
      for (let j = -1; j <= 1; j++){
         blocksArray.push(level.getBlock(x+i, y+1, z+j).id)
      }
   }
   saplingArray.forEach(sapling => {
      inputA = sapling[0]
      inputB = sapling[1]
      output = sapling[2]
      if (blocksArray.toString().includes(inputA) && blocksArray.toString().includes(inputB)) {
         level.getBlock(x, y+1, z).set(output)
         for(let i = -1; i <= 1; i++){
            for (let j = -1; j <= 1; j++){
               if(level.getBlock(x+i, y+1, z+j).id == inputA ||level.getBlock(x+i, y+1, z+j).id == inputB) level.getBlock(x+i, y+1, z+j).set('air')
            }
         }
      }

   })
}
})

