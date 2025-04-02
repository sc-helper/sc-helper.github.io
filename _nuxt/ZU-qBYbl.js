const s=JSON.parse(`{"pickers":[{"type":"ultiPicker","id":"A0VV","name":"Emergency Repair / Energy Barrier [<span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Z</span>]","description":"<span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Effect:</span> heals 3250 HP for 10 sec <br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Target:</span> One building <br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Mana Cost:</span> 200 <br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Cooldown:</span> 120 seconds<br/><br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Effect:</span> give +500 armor for 120 sec <br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Target:</span> One building <br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Mana Cost:</span> 100 <br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Cooldown:</span> 180 seconds","hotkey":"Z","requires":{"R0A6":1}},{"type":"ultiPicker","id":"A0OC","name":"Focused Ultimate Weapon [<span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">W</span>]","description":"<span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Damage:</span> 3250<br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Target:</span> One player<br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Mana Cost:</span> 400<br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Damage delay:</span> 3 seconds.<br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Cooldown:</span> 180 seconds","hotkey":"W","requires":{"R091":1,"R043":7,"R044":7,"R04R":7,"R04S":4,"R04T":3}},{"type":"ultiPicker","id":"A0OD","name":"Global Ultimate Weapon [<span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">E</span>]","description":"<span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Damage:</span> 2750<br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Target:</span> All opponents<br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Mana Cost:</span> 450<br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Damage delay:</span> 3 seconds<br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Cooldown:</span> 210 seconds","hotkey":"E","requires":{"R043":8,"R044":8,"R04R":8,"R04S":4,"R04T":3}},{"type":"ultiPicker","id":"A0QW","name":"Mana Burn  [<span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">A</span>]","description":"<span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Effect:</span> Combusts 150 mana<br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Target:</span> Enemy Castle<br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Mana Cost:</span> 55<br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Cooldown:</span> 60 seconds","hotkey":"A","requires":{"R043":6,"R044":6,"R04R":6,"R04S":2,"R04T":2}},{"type":"ultiPicker","id":"A0R6","name":"Mana Shield UW/ Spell Book UW [<span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">D</span>]","description":"<span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Effect:</span> blocks 100 damage per point of mana <br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Target:</span> Your Keep <br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Mana Cost:</span> 5 <br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Cooldown:</span> 10 seconds<br/><br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Effect:</span> Teleport target / drain and burn mana  <br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Target:</span> Any ally Hero / Any Hero <br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Mana Cost:</span> 150 / 0 <br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Cooldown:</span> 210 / 300 seconds","hotkey":"D","requires":{"R0A5":1}},{"type":"ultiPicker","id":"A0R2","name":"Mana Steal / Masterful Cloning [<span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">S</span>]","description":"<span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Effect:</span> Drains 2 MP/sec Lasts 45 sec <br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Target:</span> One building <br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Mana Cost:</span> 10 <br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Cooldown:</span> 150 seconds<br/><br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Effect:</span> Summons a wave of units <br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Target:</span> Allied barrack <br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Mana Cost:</span> 90 <br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Cooldown:</span> 120 seconds","hotkey":"S","requires":{"R043":6,"R044":6,"R04R":6,"R04S":2,"R04T":2}},{"type":"ultiPicker","id":"A0PQ","name":"No One Escapes Death UW [<span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">R</span>]","description":"<span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Effect:</span> Mass infection of any unit in the area  <br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Target:</span> Every non-Hero unit in 700 AoE <br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Mana Cost:</span> 225 <br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Cooldown:</span> 240 seconds","hotkey":"R","requires":{"R043":5,"R044":2,"R04R":5,"R04S":2,"R04T":2}},{"type":"ultiPicker","id":"A0OB","name":"Precision Ultimate Weapon [<span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Q</span>]","description":"<span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Damage:</span> 3750<br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Target:</span> One building<br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Mana Cost:</span> 315<br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Damage delay:</span> 3 seconds.<br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Cooldown:</span> 60 seconds","hotkey":"Q","requires":{"R043":7,"R044":7,"R04R":7,"R04S":4,"R04T":2}},{"type":"ultiPicker","id":"A0SF","name":"Spell Shield / Magic Shield [<span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">F</span>]","description":"<span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Effect:</span> blocks 5000 spell damage <br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Duration:</span> 120 seconds <br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Target:</span> All your buildings <br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Mana Cost:</span> 100 <br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Cooldown:</span> 210 seconds<br/><br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Effect:</span> Blocks 40000 spell damage for 150 sec <br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Target:</span> your standing Heroes <br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Mana Cost:</span> 150 <br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Cooldown:</span> 180 seconds","hotkey":"F","requires":{"R043":2,"R044":2,"R04R":2,"R04S":2,"R04T":1}},{"type":"ultiPicker","id":"A24P","name":"Smite [<span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">X</span>]","description":"<span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Effect:</span> Deals 40000 damage to target <br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Target:</span> Any Hero or Special Unit <br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Mana Cost:</span> 300 <br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Cooldown:</span> 300 seconds","hotkey":"X","requires":{"R043":5,"R044":5,"R04R":5,"R04S":3,"R04T":2}},{"type":"ultiPicker","id":"A24X","name":"Void? [<span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">C</span>]","description":"<span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Effect:</span> Only good things  <br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Target:</span> Any allied non-Hero unit <br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Mana Cost:</span> 200 <br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Cooldown:</span> 300 seconds","hotkey":"C","requires":{"R043":5,"R044":5,"R04R":5,"R04S":2,"R04T":3}}],"spells":{"A0VV":[{"type":"spell","id":"A0MJ","name":"Emergency Repair [C]","hotkey":"C","description":"Restores 3250 HP over 10s.<br/><span class=\\"w3-colored\\" style=\\"color: #c3dbffff\\">Cooldown:</span> 150 seconds.","cooldown":[120],"cost":[200],"targets":["player","enemies","friend","structure","invulnerable","self","vulnerable"],"summonUnit":[]},{"type":"spell","id":"A24M","name":"Energy Barrier [Q]","hotkey":"Q","description":"Give +500 armor for 120 sec.<br/><span class=\\"w3-colored\\" style=\\"color: #c3dbffff\\">Cooldown:</span> 180 seconds.","cooldown":[180],"cost":[100],"targets":["player","enemies","friend","invulnerable","self","vulnerable","structure"],"summonUnit":[]}],"A0OC":[{"type":"spell","id":"A0OG","name":"Focused UW","description":"Strikes all buildings of target enemy.<br/>Deals 3250 damage.<br/><span class=\\"w3-colored\\" style=\\"color: #c3dbffff\\">Damage delay:</span> 3 seconds.<br/><span class=\\"w3-colored\\" style=\\"color: #c3dbffff\\">Cooldown:</span> 180 seconds.","cooldown":[180],"cost":[400],"targets":["enemies","structure"],"summonUnit":[]}],"A0OD":[{"type":"spell","id":"A0MM","name":"Global UW","description":"Damages all buildings of all enemies.<br/>Deals 2750 damage.<br/><span class=\\"w3-colored\\" style=\\"color: #c3dbffff\\">Damage delay:</span> 3 seconds.<br/><span class=\\"w3-colored\\" style=\\"color: #c3dbffff\\">Cooldown:</span> 210 seconds.","cooldown":[210],"cost":[450],"targets":["enemies","structure"],"summonUnit":[]}],"A0QW":[{"type":"spell","id":"A0QV","name":"Mana Burn [C]","hotkey":"C","description":"Sends a bolt that burns mana. <br/>Combusts 150 mana. <br/><span class=\\"w3-colored\\" style=\\"color: #c3dbffff\\">Cooldown:</span> 60 seconds.","cooldown":[60],"cost":[55],"targets":["enemies","ground","mechanical","structure"],"summonUnit":[]}],"A0R6":[{"type":"spell","id":"A06F","name":"Mana Shield UW [V]","hotkey":"V","description":"Uses mana to negate 80% of damage. <br/>Blocks 100 damage per point of mana. <br/><span class=\\"w3-colored\\" style=\\"color: #c3dbffff\\">Cooldown:</span> 2 seconds.","cooldown":[2],"cost":[1],"summonUnit":[]},{"type":"spell","id":"A0YX","name":"Absorb Magic [Q] ","hotkey":"Q","description":"Drains 100 mana from Hero.<br/>Then burns 100 additional mana.<br/><span class=\\"w3-colored\\" style=\\"color: #c3dbffff\\">Cooldown:</span> 300 seconds.","cooldown":[300],"cost":[0],"targets":["air","hero","friend","ground","invulnerable","vulnerable","enemies"],"summonUnit":[]}],"A0R2":[{"type":"spell","id":"ACsm","name":"Siphon Mana [C]","hotkey":"C","description":"Drains 2 MP/sec. Lasts 45 sec <br/><span class=\\"w3-colored\\" style=\\"color: #c3dbffff\\">Cooldown:</span> 150 seconds.","area":[99999],"cooldown":[150],"cost":[10],"targets":["enemies","ground","mechanical","structure","nonancient","nonhero"],"summonUnit":[]},{"type":"spell","id":"A24O","name":"Masterful Cloning [Q]","hotkey":"Q","description":"Summons a wave of units from chosen barrack <br/><span class=\\"w3-colored\\" style=\\"color: #c3dbffff\\">Cooldown:</span> 120 seconds.","area":[150],"cooldown":[120],"cost":[90],"targets":["player","structure"],"summonUnit":[]}],"A0PQ":[{"type":"spell","id":"A0Q0","name":"No One Escapes Death [C]","hotkey":"C","description":"Mass infection of any unit in the area <br/><span class=\\"w3-colored\\" style=\\"color: #6c7b8bff\\">(doesn't infect units summoned by this)</span> <br/><span class=\\"w3-colored\\" style=\\"color: #c3dbffff\\">Cooldown:</span> 240 seconds.","area":[700],"cooldown":[240],"cost":[225],"summonUnit":[]}],"A0OB":[{"type":"spell","id":"A0OL","name":"Precision UW","description":"Violently strikes target building by a power of Odin.<br/>Deals 3750 damage.<br/><span class=\\"w3-colored\\" style=\\"color: #c3dbffff\\">Damage delay:</span> 3 seconds.<br/><span class=\\"w3-colored\\" style=\\"color: #c3dbffff\\">Cooldown:</span> 60 seconds.","cooldown":[60],"cost":[315],"targets":["enemies","structure"],"summonUnit":[]}],"A0SF":[{"type":"spell","id":"Awrh","name":"Spell Shield [C]","hotkey":"C","description":"Blocks 5000 spell damage. <br/>Affects all buildings for 120 seconds. <br/><span class=\\"w3-colored\\" style=\\"color: #c3dbffff\\">Cooldown:</span> 210 seconds.","area":[10],"cooldown":[210],"cost":[100],"targets":["enemies","ground"],"summonUnit":[]},{"type":"spell","id":"A25K","name":"Magic Shield [Q]","hotkey":"Q","description":"Blocks 40000 spell damage all Heroes for 300 sec <br/><span class=\\"w3-colored\\" style=\\"color: #c3dbffff\\">Cooldown:</span> 180 seconds.","cooldown":[180],"cost":[150],"summonUnit":[]}],"A24P":[{"type":"spell","id":"A24R","name":"Smite [C]","hotkey":"C","description":"Deals 40000 damage to target<br/><span class=\\"w3-colored\\" style=\\"color: #c3dbffff\\">Cooldown:</span> 300 seconds.","area":[1],"cooldown":[300],"cost":[300],"targets":["ground","air","enemies","friend"],"summonUnit":[]}],"A24X":[{"type":"spell","id":"A24Y","name":"Void? [C] - Tier [1]","hotkey":"C","description":"Only good things <br/><span class=\\"w3-colored\\" style=\\"color: #c3dbffff\\">Cooldown:</span> 300 seconds.","cooldown":[300],"cost":[200],"targets":["air","friend","ground","nonhero","neutral","invulnerable","self","vulnerable"],"summonUnit":[]}]},"requires":{"R0A6":"20 Research","R091":"Two Players Alive","R043":"Melee Damage","R044":"Ranged Damage","R04R":"Armor","R04S":"Masonry","R04T":"Magic","R0A5":"15 Research"}}`),o={A0VV:[0,0,64,64],A0OG:[66,0,64,64],A0OC:[66,0,64,64],A0MM:[0,66,64,64],A0OD:[0,66,64,64],A0QV:[66,66,64,64],A0QW:[66,66,64,64],A0R6:[132,0,64,64],A0R2:[132,66,64,64],A0Q0:[0,132,64,64],A0PQ:[0,132,64,64],A0OL:[66,132,64,64],A0OB:[66,132,64,64],A0SF:[132,132,64,64],A24R:[198,0,64,64],A24P:[198,0,64,64],A24Y:[198,66,64,64],A24X:[198,66,64,64],A0MJ:[198,132,64,64],A24M:[0,198,64,64],A06F:[66,198,64,64],A0YX:[132,198,64,64],ACsm:[198,198,64,64],A24O:[264,0,64,64],Awrh:[264,66,64,64],A25K:[264,132,64,64]},e={data:s,icons:o};export{s as data,e as default,o as icons};
