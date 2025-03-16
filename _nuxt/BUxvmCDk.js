const s=JSON.parse(`{"Alliance":[{"type":"race","id":"nanm","description":"<span class=\\"w3-colored\\" style=\\"color: #1c86eeff\\">Lordaeron</span> <br/><br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Units:</span> <br/>+10% attack rate <br/><br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Buildings:</span> <br/>+1 armor <br/><br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Upgrades:</span> <br/>+3Lv Unit Armor <br/><br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Magic:</span> <br/><span class=\\"w3-colored\\" style=\\"color: #00ff00ff\\">Holy Light</span> <span class=\\"w3-colored\\" style=\\"color: #6c7b8bff\\">(100 HP to 1 unit)</span> <br/><span class=\\"w3-colored\\" style=\\"color: #ff0000ff\\">Blizzard</span> <span class=\\"w3-colored\\" style=\\"color: #6c7b8bff\\">(90 damage in 225 AoE)</span> <br/><span class=\\"w3-colored\\" style=\\"color: #a020f0ff\\">Resurrection</span> <span class=\\"w3-colored\\" style=\\"color: #6c7b8bff\\">(revives 1 unit)</span> <br/><br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Traits:</span> <span class=\\"w3-colored\\" style=\\"color: #ffdeadff\\">Jacks of all trades but masters of none. Very basic and simple, but versatile and adaptive. Good in every situation, foolproof and idiotfriendly. Easy to play and very boring. Recomended for total Noobs.</span> <br/><br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Difficulty:</span> <span class=\\"w3-colored\\" style=\\"color: #00ffffff\\">Beginer</span>","key":"hu","name":"Lordaeron","hotkey":"Q"},{"type":"race","id":"nanc","description":"<span class=\\"w3-colored\\" style=\\"color: #FBB117ff\\">Ironforge Dwarf</span> <br/><br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Units:</span> <br/>+2 armor <br/><span class=\\"w3-colored\\" style=\\"color: #ff0000ff\\">-10% attack rate</span> <br/><br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Buildings:</span> <br/>+10% hit points <br/><br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Upgrades:</span> <br/>+2Lv Building Armor <br/><br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Traits:</span> <span class=\\"w3-colored\\" style=\\"color: #ffdeadff\\">What they lack in magic and spells, Dwarves make it up in their ingenuity. Weak starting units, but powerful late game mechanical contraptions that are resistant to almost all magic effects.</span> <br/><br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Difficulty:</span> <span class=\\"w3-colored\\" style=\\"color: #FE8A0Eff\\">Advanced</span>","key":"dw","name":"Dwarf","hotkey":"W"},{"type":"race","id":"nbdm","description":"<span class=\\"w3-colored\\" style=\\"color: #BDBDBDff\\">Rogue</span> <br/><br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Units:</span> <br/>-30% buy cost <br/>+200 Artillery attack range <br/><span class=\\"w3-colored\\" style=\\"color: #ff0000ff\\">-2 armor</span> <br/><br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Buildings:</span> <br/>+100 attack range <br/><br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Upgrades:</span> <br/>+3Lv Unit Damage <br/><br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Magic:</span> <br/><span class=\\"w3-colored\\" style=\\"color: #ff00ffff\\">Blindness</span> <span class=\\"w3-colored\\" style=\\"color: #6c7b8bff\\">(30% miss for 15 sec)</span> <br/><span class=\\"w3-colored\\" style=\\"color: #ffff00ff\\">Maddening Rage</span> <span class=\\"w3-colored\\" style=\\"color: #6c7b8bff\\">(+25% damage, -5 armor)</span> <br/><span class=\\"w3-colored\\" style=\\"color: #ff0000ff\\">Shockwave</span> <span class=\\"w3-colored\\" style=\\"color: #6c7b8bff\\">(100 damage in a line)</span> <br/><br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Traits:</span> <span class=\\"w3-colored\\" style=\\"color: #ffdeadff\\">Cheap units with significant battle experience. Trained to fight without any honour and show no mercy. Real soldiers of fortune, relying on acquiring high quality gear on the battlefield.</span> <br/><br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Difficulty:</span> <span class=\\"w3-colored\\" style=\\"color: #00ff00ff\\">Skilled</span>","key":"rg","name":"Rogue","hotkey":"E"},{"type":"race","id":"nfrb","description":"<span class=\\"w3-colored\\" style=\\"color: #CD7F32ff\\">Gnome</span> <br/><br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Units:</span> <br/>+10% attack rate <span class=\\"w3-colored\\" style=\\"color: #6c7b8bff\\">(organic units only)</span> <br/>+3 HP/s <span class=\\"w3-colored\\" style=\\"color: #6c7b8bff\\">(mechanical units only)</span> <br/><span class=\\"w3-colored\\" style=\\"color: #ff0000ff\\">-12% damage <br/>-10% hit points</span> <br/><br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Buildings:</span> <br/>+10% attack rate <br/><br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Upgrades:</span> <br/>+10% research speed <br/><br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Traits:</span> <span class=\\"w3-colored\\" style=\\"color: #ffdeadff\\">Even though fast and evasive, but still very weak organic units, who rely heavily on mechanical bots and advanced technology. Some really awesome and groundbreaking technology...</span> <br/><br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Difficulty:</span> <span class=\\"w3-colored\\" style=\\"color: #FE8A0Eff\\">Advanced</span>","key":"gn","name":"Gnome","hotkey":"R"},{"type":"race","id":"nske","description":"<span class=\\"w3-colored\\" style=\\"color: #806517ff\\">Worgen</span> <br/><br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Units:</span> <br/>+10% attack rate <br/><br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Buildings:</span> <br/>+1 armor <br/><br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Upgrades:</span> <br/>+3Lv Unit Damage <br/><br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Traits:</span> <span class=\\"w3-colored\\" style=\\"color: #ffdeadff\\">No conventional magic spells but very strong melee unit front line. Can turn into savage beasts exceptionally good at ripping enemy organics apart. Not so great against mechanicals. Weak vs debuffs.</span> <br/><br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Difficulty:</span> <span class=\\"w3-colored\\" style=\\"color: #FE8A0Eff\\">Advanced</span>","key":"wg","name":"Worgen","hotkey":"A"},{"type":"race","id":"nsno","description":"<span class=\\"w3-colored\\" style=\\"color: #E55451ff\\">Scarlet Crusade</span> <br/><br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Units:</span> <br/>+2 armor <br/><span class=\\"w3-colored\\" style=\\"color: #ff0000ff\\">-5% evasion</span> <br/><br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Buildings:</span> <br/>+300 Tower and Keep range <br/><span class=\\"w3-colored\\" style=\\"color: #ff0000ff\\">200 minimum Tower and Keep range</span> <br/><br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Upgrades:</span> <br/>+2Lv Building Armor <br/><br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Magic:</span> <br/><span class=\\"w3-colored\\" style=\\"color: #ffff00ff\\">Inner Fire</span> <span class=\\"w3-colored\\" style=\\"color: #6c7b8bff\\">(+10% damage to 1 unit)</span> <br/><span class=\\"w3-colored\\" style=\\"color: #ff0000ff\\">Purging Fire</span> <span class=\\"w3-colored\\" style=\\"color: #6c7b8bff\\">(125 damage in 200 AoE)</span> <br/><span class=\\"w3-colored\\" style=\\"color: #a020f0ff\\">Resurrection</span> <span class=\\"w3-colored\\" style=\\"color: #6c7b8bff\\">(revives 1 unit)</span> <br/><br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Traits:</span> <span class=\\"w3-colored\\" style=\\"color: #ffdeadff\\">Trained profesional army with unyealding mentality. Experts of healing magic and defensive tactics. Will hold the line to the last man beyond any limits in order to PURGE ALL XENO SCUM.</span> <br/><br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Difficulty:</span> <span class=\\"w3-colored\\" style=\\"color: #00ff00ff\\">Skilled</span>","key":"sc","name":"Scarlet","hotkey":"S"},{"type":"race","id":"n02T","description":"<span class=\\"w3-colored\\" style=\\"color: #87CEEBff\\">Wildhammer Dwarf</span> <br/><br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Units:</span> <br/>+10% attack rate <br/><span class=\\"w3-colored\\" style=\\"color: #ff0000ff\\">-4 armor</span> <br/><br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Buildings:</span> <br/>+100 attack range <br/><span class=\\"w3-colored\\" style=\\"color: #ff0000ff\\">-10% attack rate</span> <br/><br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Upgrades:</span> <br/>-5% cost <br/><br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Traits:</span> <span class=\\"w3-colored\\" style=\\"color: #ffdeadff\\">Wild warriors with primitive weaponry, highly focused on battle rage. Very limited use of magic. Imbues units with power runes instead. Vulnerable to dispels. Has superior air forces.</span> <br/><br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Difficulty:</span> <span class=\\"w3-colored\\" style=\\"color: #00ff00ff\\">Skilled</span>","key":"wh","name":"Wildhammer","hotkey":"D"}],"Horde":[{"type":"race","id":"nbds","description":"<span class=\\"w3-colored\\" style=\\"color: #990012ff\\">Orc</span> <br/><br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Units:</span> <br/>+12% damage <br/><br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Buildings:</span> <br/>+20% damage <br/><br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Upgrades:</span> <br/>+2Lv Building Armor <br/><br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Magic:</span> <br/><span class=\\"w3-colored\\" style=\\"color: #ffff00ff\\">Bloodlust</span> <span class=\\"w3-colored\\" style=\\"color: #6c7b8bff\\">(+15% attack rate to 1 unit)</span> <br/><span class=\\"w3-colored\\" style=\\"color: #ff00ffff\\">Purge</span> <span class=\\"w3-colored\\" style=\\"color: #6c7b8bff\\">(removes buffs from 1 unit)</span> <br/><span class=\\"w3-colored\\" style=\\"color: #ff0000ff\\">Chain Lightning</span> <span class=\\"w3-colored\\" style=\\"color: #6c7b8bff\\">(175 damage to 6 units)</span> <br/><br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Traits:</span> <span class=\\"w3-colored\\" style=\\"color: #ffdeadff\\">Basic at a first glance, but actually far more tricky to play. Easy to learn, but difficult to master. Very buff and aura dependent race. Augments troop damage output with blind rage and frenzy.</span> <br/><br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Difficulty:</span> <span class=\\"w3-colored\\" style=\\"color: #00ff00ff\\">Skilled</span>","key":"or","name":"Orc","hotkey":"Q"},{"type":"race","id":"ncen","description":"<span class=\\"w3-colored\\" style=\\"color: #008080ff\\">Troll</span> <br/><br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Units:</span> <br/>+5% evasion <br/><span class=\\"w3-colored\\" style=\\"color: #ff0000ff\\">-5% hit points</span> <br/><br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Buildings:</span> <br/>+10% attack rate <br/><br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Upgrades:</span> <br/>+3Lv Ranged Weapons <br/><br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Traits:</span> <span class=\\"w3-colored\\" style=\\"color: #ffdeadff\\">Why so serious? Come and have a smoke with us! Fragile in early game, unpredictable in late game. Debilitates and confuses enemy. You won't win all games, but you will have fun in every single one.</span> <br/><br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Difficulty:</span> <span class=\\"w3-colored\\" style=\\"color: #00ff00ff\\">Skilled</span>","key":"tr","name":"Troll","hotkey":"W"},{"type":"race","id":"ncks","description":"<span class=\\"w3-colored\\" style=\\"color: #ffff01ff\\">Tauren</span> <br/><br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Units:</span> <br/>+10% hit points <br/>+1 HP/sec regeneration <br/><span class=\\"w3-colored\\" style=\\"color: #ff0000ff\\">-10% attack rate</span> <br/><br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Buildings:</span> <br/>+20% damage <br/><br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Upgrades:</span> <br/>+3Lv Melee Weapons <br/><br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Traits:</span> <span class=\\"w3-colored\\" style=\\"color: #ffdeadff\\">Slow and steady wins the race! It is not about dealing damage, its about outliving enemy. Damage output rises slowly and peaks in late game. It depends on brute force and so cannot be denied or dispelled.</span> <br/><br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Difficulty:</span> <span class=\\"w3-colored\\" style=\\"color: #FE8A0Eff\\">Advanced</span>","key":"ta","name":"Tauren","hotkey":"E"},{"type":"race","id":"nsc2","description":"<span class=\\"w3-colored\\" style=\\"color: #FDD017ff\\">Goblin</span> <br/><br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Units:</span> <br/>-30% buy cost <br/><span class=\\"w3-colored\\" style=\\"color: #ff0000ff\\">-5% hit points</span> <br/><br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Buildings:</span> <br/>+10% attack rate <br/><br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Upgrades:</span> <br/>+3Lv Ranged Weapons <br/><br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Traits:</span> <span class=\\"w3-colored\\" style=\\"color: #ffdeadff\\">Goblins have frail little bodies so they have to relay on their wits and more or less powerful mechanical contraptions. And, of course, explosions. Lots and lots and lots of EXPLOSIONS.</span> <br/><br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Difficulty:</span> <span class=\\"w3-colored\\" style=\\"color: #FE8A0Eff\\">Advanced</span>","key":"go","name":"Goblin","hotkey":"R"},{"type":"race","id":"n01L","description":"<span class=\\"w3-colored\\" style=\\"color: #008000ff\\">Pandaren</span> <br/><br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Units:</span> <br/>+5% hit points <br/>3x damage roll interval <br/><br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Buildings:</span> <br/>+10% attack rate <br/><br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Upgrades:</span> <br/>+10% research speed <br/><br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Traits:</span> <span class=\\"w3-colored\\" style=\\"color: #ffdeadff\\">Very random and unpredictable chance based commbat skills. Everything is left to the dice roll, nothing depends on you. So just kick back and relax, sip your drink and enjoy the show.</span> <br/><br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Difficulty:</span> <span class=\\"w3-colored\\" style=\\"color: #00ffffff\\">Beginer</span>","key":"pa","name":"Pandaren","hotkey":"A"},{"type":"race","id":"nvul","description":"<span class=\\"w3-colored\\" style=\\"color: #B1FB17ff\\">Saurok</span> <br/><br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Units:</span> <br/>+3 HP/s regeneration <br/>-30% buy cooldown <br/><span class=\\"w3-colored\\" style=\\"color: #ff0000ff\\">-5% hit points</span> <br/><span class=\\"w3-colored\\" style=\\"color: #ff0000ff\\">-4 armor</span> <br/><br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Buildings:</span> <br/>+10% attack rate <br/><span class=\\"w3-colored\\" style=\\"color: #ff0000ff\\">-10% hit points</span> <br/><br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Magic:</span> <br/><span class=\\"w3-colored\\" style=\\"color: #a020f0ff\\">Stasis Ward</span> <span class=\\"w3-colored\\" style=\\"color: #6c7b8bff\\">(2 sec stun, 60 sec ward)</span> <br/><span class=\\"w3-colored\\" style=\\"color: #a020f0ff\\">Healing Ward</span> <span class=\\"w3-colored\\" style=\\"color: #6c7b8bff\\">(+9 HP/s for 6 sec)</span> <br/><span class=\\"w3-colored\\" style=\\"color: #a020f0ff\\">Serpent Ward</span> <span class=\\"w3-colored\\" style=\\"color: #6c7b8bff\\">(1 ward for 30 sec)</span> <br/><br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Upgrades:</span> <br/>+10% research speed <br/><br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Traits:</span> <span class=\\"w3-colored\\" style=\\"color: #ffdeadff\\">Savage, primitive and very aggressive Dragon worshiping cult. Utilizes placeable wards instead of true magic spells. Inconsistent and unreliable unit defence which mostly relies on pure luck. </span> <br/><br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Difficulty:</span> <span class=\\"w3-colored\\" style=\\"color: #00ff00ff\\">Skilled</span>","key":"sa","name":"Saurok","hotkey":"S"}],"Chaos":[{"type":"race","id":"nrdk","description":"<span class=\\"w3-colored\\" style=\\"color: #A23BECff\\">Demon</span> <br/><br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Units:</span> <br/>+12% damage <br/><span class=\\"w3-colored\\" style=\\"color: #ff0000ff\\">+30% buy cost</span> <br/><br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Buildings:</span> <br/>+15% HP/sec regeneration <br/><br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Upgrades:</span> <br/>+3Lv Building Damage <br/><span class=\\"w3-colored\\" style=\\"color: #ff0000ff\\">+10% cost</span> <br/><br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Traits:</span> <span class=\\"w3-colored\\" style=\\"color: #ffdeadff\\">Extremely powerful with no real weaknesses. Demons reign in their realm virtually unchalanged. Luckily this is not their realm and keeping dimensional portals open for the supplylines is very expensive.</span> <br/><br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Difficulty:</span> <span class=\\"w3-colored\\" style=\\"color: #00ffffff\\">Beginer</span>","key":"de","name":"Demon","hotkey":"Q"},{"type":"race","id":"nbdr","description":"<span class=\\"w3-colored\\" style=\\"color: #7EBFF1ff\\">Undead</span> <br/><br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Units:</span> <br/>-30% buy cost <br/>-30% buy cooldown <br/>-10% Hero buy cooldown <br/>6 HP/sec regeneration on Blight <br/><span class=\\"w3-colored\\" style=\\"color: #ff0000ff\\">No HP regeneration outside Blight <br/>-10% attack rate <br/>-10% hit points</span> <br/><br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Buildings:</span> <br/>+12.5% mana <br/><br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Upgrades:</span> <br/>-5% cost <br/><br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Traits:</span> <span class=\\"w3-colored\\" style=\\"color: #ffdeadff\\">Quantity over quality. Most units are very weak and depend on high numbers rather than strength. Very susceptible to AoE magic damage. But they are cheap so spawn them often.</span> <br/><br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Difficulty:</span> <span class=\\"w3-colored\\" style=\\"color: #ff0000ff\\">Expert</span>","key":"un","name":"Undead"},{"type":"race","id":"nbzw","description":"<span class=\\"w3-colored\\" style=\\"color: #ff00ffff\\">Fel Orc</span> <br/><br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Units:</span> <br/>+12% damage <br/><span class=\\"w3-colored\\" style=\\"color: #ff0000ff\\">-4 armor</span> <br/><span class=\\"w3-colored\\" style=\\"color: #ff0000ff\\">-5% evasion</span> <br/><br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Buildings:</span> <br/>+100 attack range <br/><span class=\\"w3-colored\\" style=\\"color: #ff0000ff\\">-10% hit points</span> <br/><br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Upgrades:</span> <br/>+10% research speed <br/><br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Traits:</span> <span class=\\"w3-colored\\" style=\\"color: #ffdeadff\\">Its more about making your enemies weaker than increasing your own strength. Lots of debilitating effects susceptible to buff dispels. Overfocused on offence and thus lacking in defence.</span> <br/><br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Difficulty:</span> <span class=\\"w3-colored\\" style=\\"color: #00ff00ff\\">Skilled</span>","key":"fo","name":"Fel Orc","hotkey":"E"},{"type":"race","id":"nskk","description":"<span class=\\"w3-colored\\" style=\\"color: #5E7D7Eff\\">Dark Horde</span> <br/><br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Units:</span> <br/>15% spell damage reduction <br/><span class=\\"w3-colored\\" style=\\"color: #ff0000ff\\">+30% buy cooldown</span> <br/><span class=\\"w3-colored\\" style=\\"color: #ff0000ff\\">-5% evasion</span> <br/><br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Buildings:</span> <br/>+300 Tower range <br/><span class=\\"w3-colored\\" style=\\"color: #ff0000ff\\">200 minimum Tower range</span> <br/><br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Upgrades:</span> <br/>+3Lv Unit Damage <br/><br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Traits:</span> <span class=\\"w3-colored\\" style=\\"color: #ffdeadff\\">Very physical and brutal. Prefers close quarters face to face battle style. Fuck serving Demons. Fuck playing nice with others. Fuck weaklings and friendly collateral damage. TRUE Horde is here!</span> <br/><br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Difficulty:</span> <span class=\\"w3-colored\\" style=\\"color: #00ff00ff\\">Skilled</span>","key":"dh","name":"Dark Horde","hotkey":"R"},{"type":"race","id":"n02F","description":"<span class=\\"w3-colored\\" style=\\"color: #C04000ff\\">Dark Iron Dwarf</span> <br/><br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Units:</span> <br/>15% spell damage reduction <br/><span class=\\"w3-colored\\" style=\\"color: #ff0000ff\\">-5% evasion</span> <br/><br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Buildings:</span> <br/>+10% hit points <br/><span class=\\"w3-colored\\" style=\\"color: #ff0000ff\\">-100 Tower range</span> <br/><br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Upgrades:</span> <br/>+3Lv Unit Armor <br/><br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Traits:</span> <span class=\\"w3-colored\\" style=\\"color: #ffdeadff\\">Well armored and strong army, highly proficient in pyromagic. Lots of burning over time area damage effects which slowly wither down the enemy. Be aware of severe lack of anti air devences though.</span> <br/><br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Difficulty:</span> <span class=\\"w3-colored\\" style=\\"color: #ff0000ff\\">Expert</span>","key":"di","name":"Dark Iron","hotkey":"A"},{"type":"race","id":"n03D","description":"<span class=\\"w3-colored\\" style=\\"color: #808000ff\\">Silithid</span> <br/><br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Units:</span> <br/>+1.5 HP/sec regeneration <br/>-30% buy cooldown <br/><span class=\\"w3-colored\\" style=\\"color: #ff0000ff\\">-10% attack rate</span> <br/><span class=\\"w3-colored\\" style=\\"color: #ff0000ff\\">+10% Hero buy cooldown</span> <br/><br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Buildings:</span> <br/>+25% HP/sec regeneration <br/><span class=\\"w3-colored\\" style=\\"color: #ff0000ff\\">no armor increase with building level</span> <br/><br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Upgrades:</span> <br/>+2Lv Building Armor <br/><br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Traits:</span> <span class=\\"w3-colored\\" style=\\"color: #ffdeadff\\">Swarm of hive minded insects with dedicated roles. Lacking full sentience, thus having no mages or casted spells. Spawns more units from infected enemies. Ruled by few humanoid overlords.</span> <br/><br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Difficulty:</span> <span class=\\"w3-colored\\" style=\\"color: #FE8A0Eff\\">Advanced</span>","key":"qi","name":"Silithid","hotkey":"S"}],"Ancients":[{"type":"race","id":"ngrw","description":"<span class=\\"w3-colored\\" style=\\"color: #00ff00ff\\">Night Elf</span> <br/><br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Units:</span> <br/>+1.5 HP/sec regeneration <br/><br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Buildings:</span> <br/>+25% HP/sec regeneration <br/><br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Upgrades:</span> <br/>+3Lv Building Damage <br/><span class=\\"w3-colored\\" style=\\"color: #ff0000ff\\">-10% research speed</span> <br/><br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Traits:</span> <span class=\\"w3-colored\\" style=\\"color: #ffdeadff\\">Dedicated and specialized units, trained to fulfil their role to the max. Balanced and strong race without apparent weaknesses. Its full potential is impresive but it rises slowly and can be hard to reach.</span> <br/><br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Difficulty:</span> <span class=\\"w3-colored\\" style=\\"color: #00ff00ff\\">Skilled</span>","key":"ne","name":"Night Elf","hotkey":"Q"},{"type":"race","id":"nadw","description":"<span class=\\"w3-colored\\" style=\\"color: #00ffffff\\">Naga</span> <br/><br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Units:</span> <br/>+2 armor <br/><span class=\\"w3-colored\\" style=\\"color: #ff0000ff\\">+10% buy cooldown</span> <br/><br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Buildings:</span> <br/>+2 armor <br/><span class=\\"w3-colored\\" style=\\"color: #ff0000ff\\">-10% hit points</span> <br/><br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Upgrades:</span> <br/>+3Lv Unit Armor <br/><br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Magic:</span> <br/><span class=\\"w3-colored\\" style=\\"color: #ff00ffff\\">Abolish Magic</span> <span class=\\"w3-colored\\" style=\\"color: #6c7b8bff\\">(dispels buffs from 1 unit)</span> <br/><span class=\\"w3-colored\\" style=\\"color: #ff00ffff\\">Silence</span> <span class=\\"w3-colored\\" style=\\"color: #6c7b8bff\\">(silences for 15 sec in 175 AoE)</span> <br/><span class=\\"w3-colored\\" style=\\"color: #ff00ffff\\">Mana Burn</span> <span class=\\"w3-colored\\" style=\\"color: #6c7b8bff\\">(burns 250 mana to 1 unit)</span> <br/><br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Traits:</span> <span class=\\"w3-colored\\" style=\\"color: #ffdeadff\\">Strong units that are proficient both in ancient arcane arts and physical combat. Specializes in magic neutralization. No foothold in surface world means weak base defence and low unit supplies.</span> <br/><br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Difficulty:</span> <span class=\\"w3-colored\\" style=\\"color: #00ff00ff\\">Skilled</span>","key":"ng","name":"Naga"},{"type":"race","id":"nenc","description":"<span class=\\"w3-colored\\" style=\\"color: #ff0000ff\\">Blood Elf</span> <br/><br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Units:</span> <br/>+5% evasion <br/>-20% spell cooldown <br/><span class=\\"w3-colored\\" style=\\"color: #ff0000ff\\">-12% damage <br/>-10% hit points</span> <br/><br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Buildings:</span> <br/>+12.5% mana <br/><br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Upgrades:</span> <br/>+1Lv Magic <br/><br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Traits:</span> <span class=\\"w3-colored\\" style=\\"color: #ffdeadff\\">Glass cannons. Extremely weak starting units. Very fragile even in late game. Heavily relies on special upgrades inside towers. Delivers short outbursts of damage. Strong against buff dependent races.</span> <br/><br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Difficulty:</span> <span class=\\"w3-colored\\" style=\\"color: #ff0000ff\\">Expert</span>","key":"be","name":"Blood Elf","hotkey":"E"},{"type":"race","id":"nder","description":"<span class=\\"w3-colored\\" style=\\"color: #736AFFff\\">Draenei</span> <br/><br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Units:</span> <br/>+5% hit points <br/><span class=\\"w3-colored\\" style=\\"color: #ff0000ff\\">-5% evasion</span> <br/><span class=\\"w3-colored\\" style=\\"color: #ff0000ff\\">+30% buy cost</span> <br/><span class=\\"w3-colored\\" style=\\"color: #ff0000ff\\">+10% buy cooldown</span> <br/><br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Buildings:</span> <br/>Tower/Barracks have Mana Shield  <br/><span class=\\"w3-colored\\" style=\\"color: #ff0000ff\\">No HP regeneration</span> <br/><br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Upgrades:</span> <br/>+3Lv Building Damage <br/><br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Magic:</span> <br/><span class=\\"w3-colored\\" style=\\"color: #ffff00ff\\">Sacred Shield</span> <span class=\\"w3-colored\\" style=\\"color: #6c7b8bff\\">(+5 armor to 1 unit)</span> <br/><span class=\\"w3-colored\\" style=\\"color: #00ff00ff\\">Holy Light</span> <span class=\\"w3-colored\\" style=\\"color: #6c7b8bff\\">(100 HP to 1 unit)</span> <br/><span class=\\"w3-colored\\" style=\\"color: #a020f0ff\\">Resurrection</span> <span class=\\"w3-colored\\" style=\\"color: #6c7b8bff\\">(revives 1 unit)</span> <br/><br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Traits:</span> <span class=\\"w3-colored\\" style=\\"color: #ffdeadff\\">Strong and durable units that are rendered even stronger by healing and protecting effects of the Holy Light. No real weaknesses apart from the scarse population making each unit very costly.</span> <br/><br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Difficulty:</span> <span class=\\"w3-colored\\" style=\\"color: #FE8A0Eff\\">Advanced</span>","key":"dr","name":"Draenei","hotkey":"R"},{"type":"race","id":"nfrs","description":"<span class=\\"w3-colored\\" style=\\"color: #0041C2ff\\">Void Elf</span> <br/><br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Units:</span> <br/>+5% evasion <br/><span class=\\"w3-colored\\" style=\\"color: #ff0000ff\\">-12% damage <br/>-10% hit points</span> <br/><br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Buildings:</span> <br/>+12.5% mana <br/><br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Upgrades:</span> <br/>+3Lv Building Damage <br/><br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Traits:</span> <span class=\\"w3-colored\\" style=\\"color: #ffdeadff\\">High risk - high reward. Very strong and versatile race with utterly limitless potential. Tap into the void to unleash its unfathomable power. That is, if you think you can handle the voices in your head.</span> <br/><br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Dificulty:</span> <span class=\\"w3-colored\\" style=\\"color: #ff0000ff\\">Expert</span>","key":"ve","name":"Void Elf","hotkey":"A"},{"type":"race","id":"n01T","description":"<span class=\\"w3-colored\\" style=\\"color: #8A2BE2ff\\">Nightborne</span> <br/><br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Units:</span> <br/>15% spell damage reduction <br/><span class=\\"w3-colored\\" style=\\"color: #ff0000ff\\">-5% attack rate <br/>-5% hit points <br/>+10% buy cooldown <br/>No mana regeneration</span> <br/><br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Buildings:</span> <br/>+12.5% mana <br/><br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Upgrades:</span> <br/>+1Lv Magic <br/><br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Traits:</span> <span class=\\"w3-colored\\" style=\\"color: #ffdeadff\\">Very proficient in magic and arcane arts. All units have mana and can cast spells. However, they do not regenerate mana and need to steal it from the enemy. No Air unit or Artillery.</span> <br/><br/><span class=\\"w3-colored\\" style=\\"color: #ffcc00ff\\">Difficulty:</span> <span class=\\"w3-colored\\" style=\\"color: #ff0000ff\\">Expert</span>","key":"nb","name":"Nightborne","hotkey":"S"}]}`),o={nanm:[0,0,64,64],nanc:[66,0,64,64],nbdm:[0,66,64,64],nfrb:[66,66,64,64],nske:[132,0,64,64],nsno:[132,66,64,64],n02T:[0,132,64,64],nbds:[66,132,64,64],ncen:[132,132,64,64],ncks:[198,0,64,64],nsc2:[198,66,64,64],n01L:[198,132,64,64],nvul:[0,198,64,64],nrdk:[66,198,64,64],nbdr:[132,198,64,64],nbzw:[198,198,64,64],nskk:[264,0,64,64],n02F:[264,66,64,64],n03D:[264,132,64,64],ngrw:[264,198,64,64],nadw:[0,264,64,64],nenc:[66,264,64,64],nder:[132,264,64,64],nfrs:[198,264,64,64],n01T:[264,264,64,64]},a={data:s,icons:o};export{s as data,a as default,o as icons};
