const LOCALE_STRINGS = {
  "tank_oxygen": "Oxygen",
  "tank_carbon_dioxide": "Carbon Dioxide",
  "tank_void": "Empty",
  "inventory": "Inventory",
  "map": "Map",
  "rules": "Rules",
  "location-workshop_room": "Printer Room",
  "location-generator_room": "Generator Room",
  "location-generator_room-locked": "Generator Room",
  "location-generator_room-lock-desc": "The path to a Generator Room is blocked by a door which is stuck in a semi-open position. Trying to open it manually yielded no results. You will likely need an item like a Crowbar to widen the opening.",
  "location-enhancement_room": "Enhancement Room",
  "location-enhancement_room-locked": "Enhancement Room",
  "location-enhancement_room-lock-desc": "The door to the Enhancement Room is tightly shut, as it should be. The path forward is blocked by a combination lock which you unfortunately do not remember; the only thing you know that all numbers in it were different. You would need to come back with a bunch of Memory Cards and try to encode the correct sequence in order to pass. Thankfully, each rejection will provide some data to pinpoint the correct code better.",
  "location-crafting_room": "Crafting Room",
  "location-crafting_room-locked": "Crafting Room",
  "location-crafting_room-lock-desc": "This room appears to have been flooded. There are automated systems that should be able to prevent this from happening, but it seems that they were overwhelmed by the sheer amount of incoming water. The system can still be tricked into activating, but that will require carefully balancing the water levels in the different sections of the room.",
  "location-battery_room": "Battery Room",
  "location-battery_room-locked": "Battery Room",
  "location-battery_room-lock-desc": "The Battery Room is a mess of broken stuff which looks far beyond repair. The whole section of the ship would need to be rebuilt from scratch, which requires properly modulating the energy field first. Some values are already fixed, while the others would need to be derived and imprinted into the ship's memory.",
  "location-oxygen_room": "Oxygen Room",
  "location-oxygen_room-locked": "Oxygen Room",
  "location-oxygen_room-lock-desc": "The door to the Oxygen Room is locked using one of those old-fashioned mechanical locks for which you need an actual key. Unfortunately, the key is nowhere to be found. Fortunately, you do have a special robot that can pick mechanical locks, but it cannot be controlled manually and needs a set of guidance beacons to be placed beforehand. Another bot, this time controlled by you, should solve this problem entirely.",
  "location-propulsion_room": "Propulsion Room",
  "location-propulsion_room-locked": "Propulsion Room",
  "location-propulsion_room-lock-desc": "The engine is completely wrecked. What is worse, the ion reactor that was feeding it is still active somehow, so it is completely unsafe to be on the other side of this triple-thickness door. Once again, a machine should help the man to overcome the difficulties, navigate the room full of debris and shut down the reactor. The exhaust from a working reactor disables any sort of communication, so the robot will need to be programmed in advance.",
  "location-cockpit": "Command Room",
  "location-cockpit-locked": "Command Room",
  "location-cockpit-lock-desc-1": "The gleaming blue terminal welcomes you as you approach the door to the coveted Command Room. 'Welcome, capitan', says it. 'Please insert your keycard'.",
  "location-cockpit-lock-desc-2": "To be rebuffed by some decrepit program so close to the goal does not feel particularly good, but you cannot capitulate now, as the freedom of movement is within your reach.",
  "location-cockpit-lock-desc-3": "You need to get a Keycard. Perhaps you can print one.",
  "cockpit-lore-1": "The command console sits in the room lifelessly. Pitch black screens surround you. Looks like even the very heart of the ship needs some repairs. Perhaps it should start working if you connect the room to the energy grid.",
  "cockpit-lore-2": "Thanks to the higher powers, there are no more problems with that ship, or so it seems. With the whole adventure behind you, the only thing that stands between you and escaping the clutches of deep space is the initiation of warp procedure. Perhaps you should do this.",
  "cockpit-lore-3": "Tip: if the charging process goes slowly, consider increasing the size of your Generator energy buffer",
  "initiate-warp": "Initiate warp procedure",
  "warp-requirement": "{req}Wh",
  "needed": "needed",
  "bullseye-desc": "You will need 1x Crowbar to access the minigame below. Regulate the strength with which you use a crowbar. Stop the moving target in the green zone to progress further.",
  "bullseye-undershoot": "If you stop too soon, all progress on the minigame will be reset",
  "bullseye-overshoot": "If you stop too late, you will lose the Crowbar",
  "bullseye-action": "Prying the door open...",
  "decoder-desc": "You will need to spend 1x Memory Card for each attempt. The secret combination consists of five digits, all of which are distinct. Each attempt consists of you inserting a combination of your own and then pressing 'Submit'. The digits in your attempt will be colored based on their presence in the secret passcode. Guess the correct combination to proceed.",
  "decoder-secret-passcode": "The secret passcode:",
  "decoder-guess": "Your guess:",
  "decoder-green": "Green background means that the digit is in the correct position",
  "decoder-yellow": "Yellow background means that the digit is present, but in another position",
  "decoder-action": "Input the code:",
  "delete-input": "Clear",
  "submit": "Submit",
  "decoder-past-guesses": "Past guesses:",
  "decoder-guess-number": "#{guess}",
  "water_puzzle-desc": "There are three sections that can be filled with water; in the beginning, only the first section is full, and other two are empty. You can transfer water between sections by using pipes; the transfer continues until either the input section is empty or the output section is full. This action costs Pipes equal to the number of decaliters transferred. Your goal is to fill the third section with exactly 1 decaliter of water.",
  "water_puzzle-example-cost": "2x Pipe",
  "water_puzzle-action": "Transferring water...",
  "decaliter": "daL",
  "water_puzzle-section-1": "Workshop",
  "water_puzzle-section-2": "Transfer Corridor",
  "water_puzzle-section-3": "Flooding Sensor",
  "water_puzzle-volume": "Volume: {volume} daL",
  "water_puzzle-transfer": "{amount} daL to {to}",
  "sudoku-desc": "You need to fill the 9x9 grid with numbers from 1 to 9, so that each row, each column and each of nine 3x3 squares contains all numbers from 1 to 9. Some numbers are already present in the grid. Click on a square to write a number in it; the number that is written is equal to the last digit in the number of Memory Cards you have in your inventory. This action does not spend any Memory Cards. Complete the grid to proceed.",
  "sudoku-rules-example": "12x Memory Card",
  "sudoku-wrong": "Red numbers violate some of the rules, green numbers don't",
  "sudoku-action": "You have {memory_cards}x Memory Card; writing the number {input_digit}.",
  "labyrinth-desc": "Guide the robot through the labyrinth. The robot needs 1x Beacon for each move, which will be placed on its current location. Click on an empty cell to move to it. You can only see cells of the labyrinth adjacent to the robot or one of the placed antenna. Reach the labyrinth exit to progress forward.",
  "labyrinth-gray-cells": "Gray cells are unknown, they might contain a wall or an empty space",
  "labyrinth-example-cost": "1x Beacon",
  "labyrinth-action": "Navigating the lock...",
  "labyrinth-lack-resources": "Cannot move, get a Beacon first.",
  "entrance": "Entrance",
  "exit": "Exit",
  "robot_program-desc": "Create a program that will allow the robot to reach the spot designated by the reactor icon. The program is a sequence of Processors, which can be created using CPUs. Click on the Processor you have in order to add it to the end of the program. Click on the Processor inside the program to remove it. The map shows which path your robot will take based on its current program.",
  "robot_program-action": "Writing a program...",
  "program": "Program",
  "processor-top": "Top Processor",
  "processor-bottom": "Bottom Processor",
  "processor-left": "Left Processor",
  "processor-right": "Right Processor",
  "processor-loop": "Loop Processor",
  "processor-top-desc": "Moves one square to the top if possible",
  "processor-bottom-desc": "Moves one square to the bottom if possible",
  "processor-left-desc": "Moves one square to the left if possible",
  "processor-right-desc": "Moves one square to the right if possible",
  "processor-loop-desc": "Runs all previous Processors a second time",
  "open_the_door": "Open the door",
  "experience": "Experience",
  "use": "Use",
  "oxygen_tank": "Oxygen Tank",
  "oxygen_tank-desc": "Restores 50% of oxygen on use",
  "energy_grid_kit": "Energy Grid Kit",
  "energy_grid_kit-desc": "Items needed to connect a room to spaceship energy grid",
  "metal_scrap": "Metal Scrap",
  "metal_scrap-desc": "Maybe it can be recycled into something useful?..",
  "crowbar": "Crowbar",
  "crowbar-desc": "A tool used to force two objects apart",
  "wire": "Wire",
  "wire-desc": "A thin strand of metal used to transfer energy or data",
  "accumulator": "Accumulator",
  "accumulator-desc": "Can enhance energy capacity if installed in a machine",
  "memory_card": "Memory Card",
  "memory_card-desc": "A little data chip that can hold a bit of information",
  "empty_tank": "Empty Tank",
  "empty_tank-desc": "A vessel devoid of its contents",
  "filter": "Filter",
  "filter-desc": "A device used for separation",
  "pipe": "Pipe",
  "pipe-desc": "A tube that ensures that its contents do not escape",
  "antenna": "Antenna",
  "antenna-desc": "A signal transmitter",
  "rubber_sheet": "Rubber Sheet",
  "rubber_sheet-desc": "A perfectly normal piece of synthetic rubber",
  "insulated_wire": "Insulated Wire",
  "insulated_wire-desc": "A piece of wire that will not injure you on contact",
  "transistor_plate": "Transistor Plate",
  "transistor_plate-desc": "Millions of tiny gates ready to do computations",
  "cpu": "CPU",
  "cpu-desc": "A metal piece capable of complex calculations",
  "beacon": "Beacon",
  "beacon-desc": "A powered-up signal transmitter",
  "transformator": "Transformator",
  "transformator-desc": "A machine used to switch between voltages",
  "keycard": "Keycard",
  "keycard-desc": "A proof that you are the captain here",
  "personal_battery": "Battery",
  "remaining": "left",
  "3d-printer": "3D Printer",
  "3d-printer-desc": "The ultimate pinnacle of engineering, it can turn energy directly into matter. Not everything can be 3D-printed, however, as there are some restrictions on the range of objects that can be created using this wonderful technology. Some objects are easier to create than others, as 3D printers can leverage an already existing supply of matter.",
  "generator": "Generator",
  "generator-desc": "A wondrous contraption capable of harvesting energy while in space. If provided with a target that radiates energy, this machine is capable of collecting it passively, filling its internal energy buffer in the process.",
  "suit_enhancer": "Suit Enhancer",
  "suit_enhancer-desc": "Faster, stronger, better! In the hands of a skilled engineer, even the most bog-standard objects can be enhanced to significantly improve their effectiveness. The space suit you are currently in is not an exception to this rule, and with enough extra materials, advancements can be made.",
  "crafter": "Workbench",
  "crafter-desc": "Some items are too complex to just be printed straight-away, but that's where your engineering intellect and tools come to work. Simple items can be crafted into complex ones for a variety of applications. This process cannot be easily automated, though.",
  "battery_array": "Battery Array",
  "battery_array-desc": "This room is full with a soft hum of electricity flowing through the metal veins of this hulk of a machine. The Battery Array stores energy that can be supplied to any rooms connected to the ship-wide network, provided the Battery Array itself is connected.",
  "oxygen_generator": "Oxygen Generator",
  "oxygen_generator-desc": "Finally, a path to sustainable living is revealed. The Oxygen Generator can use energy to reprocess Carbon Dioxide in the spacesuit tanks back into oxygen. Unfortunately, this machine is less than one-hundred-percent effective, and some of the air is lost in the process. Additionally, a delicate nature of this machine only permits recharging it through the battery array.",
  "propulsion": "Spaceship Engine",
  "propulsion-desc": "Though still in the process of fixing, this contraption can change the position of the ship in space favourably, which potentially leads to the increased energy production from some select stars. Those engines are also operational enough that you can find your way back to the civilization, if the Command Room is accessible.",
  "print": "Print",
  "craft": "Craft",
  "currently-printing":"Currently printing",
  "currently-crafting": "Currently crafting",
  "nothing": "nothing",
  "battery_array-accumulator-effect": "Each accumulator inserted into the Battery Array increases its capacity by {effect}Wh.",
  "insert": "Insert:",
  "all": "All",
  "statistics": "Statistics",
  "oxygen-generator-speed": "Processes {speed}% Carbon Dioxide per second",
  "oxygen-generator-consumption": "Requires {energy}W when operational",
  "oxygen-generator-efficiency": "Efficiency: {efficiency}%",
  "oxygen-generator-cannot-hover": "Connect both the Oxygen Room and the Battery Room to the energy grid to unlock the recharge of Oxygen",
  "oxygen-generator-hover": "Hover over me to recharge Oxygen",
  "preview": "Preview",
  "propulsion-effect": "Generator produces {effect}x energy if selected star is the target.",
  "propulsion-select-star": "Increase production of",
  "propulsion-cannot-reroll": "Connect both the Propulsion Room and the Battery Room to the energy grid in order to unlock the ability to reroll star selection",
  "reroll-star-selection": "Reroll star selection",
  "reroll-star-selection-cost": "Requires {cost}Wh in battery storage",
  "you_died": "You died!",
  "meta_reset-desc": "All hope is not lost, though. During your trials and tribulations, you learned new things, which were converted into",
  "meta_reset-desc-cont": "Experience can be spent to obtain various upgrades that help you to survive for a longer time.",
  "you_have": "You have",
  "resurrect": "Go back to the world of living",
  "buy": "Buy",
  'auto':'Auto',
  "bulk": "Bulk",
  "minigame-progress": "Progress: {percentage}%",
  "stop": "Stop",
  "upgrades": "Upgrades",
  "target": "Target",
  "not_selected": "not selected",
  "confirm-selection": "Confirm selection",
  "transfer_energy_generator": "Transfer energy to the battery",
  "transfer_energy_printer": "Transfer energy to the printer",
  "upgrade-bought": "Bought",
  "upgrade-not-bought": "Not bought",
  "efficient_breathing-name": "Efficient Breathing",
  "efficient_breathing-unlock-tip": "This is an Unlock Tip which displays when the upgrade is locked",
  "efficient_breathing-desc": "Learning how to prolong your Oxygen supply lets you spend 10% less Oxygen on all actions per level of this upgrade.",
  "efficient_breathing-effect": "x{effect}",
  "subspace_tanks-name": "Subspace Tanks",
  "subspace_tanks-unlock-tip": "Unlock Generator Room",
  "subspace_tanks-desc": "Adding an extradimensional space to your oxygen tanks allows them to store more Oxygen.",
  "subspace_tanks-effect": "x{effect}",
  "dead_useful-name": "Dead Useful",
  "dead_useful-unlock-tip": "Unlock Enhancement Room",
  "dead_useful-desc": "Recycling the corpses can potentially improve the efficiency of Enhancements for the living.",
  "dead_useful-effect": "x{effect}",
  "everfull_tanks-name": "Everfull Tanks",
  "everfull_tanks-unlock-tip": "Unlock Crafting Room",
  "everfull_tanks-desc": "Oxygen Tanks are so full, they restore a greater percentage of Oxygen as a result (their description will not be updated).",
  "everfull_tanks-effect": "{effect}%",
  "aerobic_replication-name": "Aerobic Replication",
  "aerobic_replication-unlock-tip": "Unlock Battery Room",
  "aerobic_replication-desc": "Whenever your personal spacesuit tank is expanded, part of the new volume is filled with Oxygen as well.",
  "aerobic_replication-effect": "{effect}%",
  "perfect_scrubbing-name": "Perfect Scrubbing",
  "perfect_scrubbing-unlock-tip": "Unlock Oxygen Room",
  "perfect_scrubbing-desc": "Oxygen Generator base efficiency is improved.",
  "perfect_scrubbing-effect": "{effect}%",
  "vacuum_chamber-name": "Vacuum Chamber",
  "vacuum_chamber-unlock-tip": "Unlock Propulsion Room",
  "vacuum_chamber-desc": "The increased intake of air into the Oxygen Generator increases its speed by 50% per level of this upgrade.",
  "vacuum_chamber-effect": "x{effect}",
  "command_chain-name": "Command Chain",
  "command_chain-unlock-tip": "Unlock Command Room",
  "command_chain-desc": "Why are you still here? Triple the Experience income on death per level of this upgrade.",
  "command_chain-effect": "x{effect}",
  "rapid_prototyping-name": "Rapid Prototyping",
  "rapid_prototyping-unlock-tip": "Unlock Generator Room",
  "rapid_prototyping-desc": "By shortening various connections in the 3D printer internals, the printing time can be decreased by 20% per level of this upgrade.",
  "rapid_prototyping-effect": "x{effect}",
  "supercharge-name": "Supercharge",
  "supercharge-unlock-tip": "Unlock Generator Room",
  "supercharge-desc": "Using wire, the energy output of the generator can be increased by 50% per level of this upgrade.",
  "supercharge-effect": "x{effect}",
  "extra_accumulator-name": "Extra Accumulators",
  "extra_accumulator-unlock-tip": "Unlock Generator Room",
  "extra_accumulator-desc": "Accumulators can help you to store more energy in the Generator.",
  "extra_accumulator-effect": "x{effect}",
  "extra_accumulator_print-name": "Extra Accumulators",
  "extra_accumulator_print-unlock-tip": "Unlock Generator Room",
  "extra_accumulator_print-desc": "Accumulators can help you to store some energy in the 3D printer.",
  "extra_accumulator_print-effect": "x{effect}",
  "extra_accumulator_battery-name": "Extra Accumulators",
  "extra_accumulator_battery-unlock-tip": "Unlock Battery Room",
  "extra_accumulator_battery-desc": "Accumulators can help you to store some energy in the battery.",
  "extra_accumulator_battery-effect": "x{effect}",
  "automation-name": "Crude Assembly Line",
  "automation-unlock-tip": "Unlock Generator Room",
  "automation-desc": "Unlocks the ability to repeatedly print items if you have enough resources. Click on the button next to the 'Print' button to toggle auto-repeat.",
  "enhancement_more_oxygen-name": "Expanded Oxygen Tanks",
  "enhancement_more_oxygen-unlock-tip": "Unlock Enhancement Room",
  "enhancement_more_oxygen-desc": "By welding more empty tanks to your trusted space suit, the total oxygen capacity can be increased by 50% per upgrade (stacks additively). Use Oxygen Tanks to fill the newfound volume with oxygen.",
  "enhancement_more_oxygen-effect": "x{effect}",
  "enhancement_more_battery-name": "Extra Accumulators",
  "enhancement_more_battery-unlock-tip": "Unlock Enhancement Room",
  "enhancement_more_battery-desc": "By welding more accumulators to your trusted space suit, the total capacity of the internal battery can be increased by 50% per upgrade (stacks additively).",
  "enhancement_more_battery-effect": "x{effect}",
  "enhancement_more_breaths-name": "Air Scrubbing",
  "enhancement_more_breaths-unlock-tip": "Unlock Enhancement Room",
  "enhancement_more_breaths-desc": "By capturing some carbon in the exhaust using a system of filters, the Oxygen consumption can be reduced by 15% per level of this upgrade.",
  "enhancement_more_breaths-effect": "x{effect}",
  "blue_supremacy-name": "Energetic Capture",
  "blue_supremacy-unlock-tip": "Unlock Enhancement Room",
  "blue_supremacy-desc": "By filtering the least energetic wavelengths out, it is possible to produce more energy out of the light of blue stars.",
  "blue_supremacy-effect": "x{effect}",
  "automatic_generator_transfer-name": "Wireless Charging",
  "automatic_generator_transfer-unlock-tip": "Unlock Crafting Room",
  "automatic_generator_transfer-desc": "An elaborate construction can wirelessly recharge personal battery while inside the Generator Room, requiring no actions from the user.",
  "printer_energy_efficiency-name": "Energy Efficiency",
  "printer_energy_efficiency-unlock-tip": "Unlock Crafting Room",
  "printer_energy_efficiency-desc": "By insulating the wires used in the 3D printer internals, excess energy usage can be minimized, resulting in 12% reduction in energy cost of all 3D printer recipes per level of this upgrade.",
  "printer_energy_efficiency-effect": "x{effect}",
  "multispectral_analysis-name": "Multispectral Analysis",
  "multispectral_analysis-unlock-tip": "Unlock Crafting Room",
  "multispectral_analysis-desc": "A set of antennae modulated for different frequencies can capture the full spectrum of the white light, significantly increasing the efficiency of collecting energy from white stars.",
  "multispectral_analysis-effect": "x{effect}",
  "enhancement_efficiency-name": "Enhancement Supercharge",
  "enhancement_efficiency-unlock-tip": "Connect this room to the energy grid",
  "enhancement_efficiency-desc": "The unlimited flow of energy to the various machines installed in this room can increase the efficiency of all enhancements by 25%.",
  "enhancement_efficiency-effect": "x{effect}",
  "bulk_crafting-name": "Bulk Crafting",
  "bulk_crafting-unlock-tip": "Unlock Crafting Room",
  "bulk_crafting-desc": "A repurposed Energy Grid Kit can be used to partially mechanize the crafting process, allowing one to do a batch production in one click.",
  "crafting_efficiency-name": "Supercharged Tools",
  "crafting_efficiency-unlock-tip": "Connect this room to the energy grid",
  "crafting_efficiency-desc": "The electrical tools make the job of crafting various items significantly easier, decreasing the crafting time by 20% per level of this upgrade.",
  "crafting_efficiency-effect": "x{effect}",
  "multispectral_analysis_2-name": "Redshift Empowerment",
  "multispectral_analysis_2-unlock-tip": "Unlock Battery Room",
  "multispectral_analysis_2-desc": "Beacons scattered around the generator can focus and extract an especially potent redshifted enery of red stars.",
  "multispectral_analysis_2-effect": "x{effect}",
  "high_density_storage-name": "High Density Storage",
  "high_density_storage-unlock-tip": "Unlock Battery Room",
  "high_density_storage-desc": "By using transformators to compress the energy into a high-voltage form, the storage potential of the battery array can be enhanced.",
  "high_density_storage-effect": "x{effect}",
  "parallelization_algorithms-name": "Parallelization Algorithms",
  "parallelization_algorithms-unlock-tip": "Unlock Battery Room",
  "parallelization_algorithms-desc": "By scheduling the bulk crafting tasks so one can do several of them in parallel, the efficiency of bulk crafting can be improved, raising its effect on the time cost into a power.",
  "parallelization_algorithms-effect": "^{effect}",
  "separation_algorithms-name": "Separation Algorithms",
  "separation_algorithms-unlock-tip": "Unlock Battery Room",
  "separation_algorithms-desc": "Sophisticated algorithms that route the air in your spacesuit can repalce a part of your oxygen consumption with a flat cost of 1 MWh per action.",
  "separation_algorithms-effect": "x{effect}",
  "wireless_charging-name": "Wireless Charging",
  "wireless_charging-unlock-tip": "Unlock Battery Room",
  "wireless_charging-desc": "A series of beacons placed around the ship can fill your personal battery from the Battery Array contents whenever you are in a room connected to the spaceship-wide energy grid.",
  "oxygen_generator_throughput-name": "Enlarged Pipes",
  "oxygen_generator_throughput-unlock-tip": "Unlock Oxygen Room",
  "oxygen_generator_throughput-desc": "By shoving a larger volume of polluted air into the Oxygen Generator at once, one can increase its processing speed by 50% per level of this upgrade.",
  "oxygen_generator_throughput-effect": "x{effect}",
  "oxygen_generator_insulation-name": "Wire Insulation",
  "oxygen_generator_insulation-unlock-tip": "Unlock Oxygen Room",
  "oxygen_generator_insulation-desc": "By insulating all of the stray exposed wires, one can make the Oxygen Generator 20% more energy-efficient per level of this upgrade.",
  "oxygen_generator_insulation-effect": "x{effect}",
  "better_isolation-name": "Better Isolation",
  "better_isolation-unlock-tip": "Unlock Oxygen Room",
  "better_isolation-desc": "Closing all of the gaps with rubber results in less air wasted during the work of the Oxygen Generator.",
  "better_isolation-effect": "{effect}%",
  "direct_connection-name": "Direct Connection",
  "direct_connection-unlock-tip": "Unlock Propulsion Room",
  "direct_connection-desc": "A dedicated energy lane between 3D printer and the Battery Array allows the printer to tap into the Battery Array resources directly when printing.",
  "propulsion_more_choices-name": "Target Analysis",
  "propulsion_more_choices-unlock-tip": "Unlock Propulsion Room",
  "propulsion_more_choices-desc": "Additional processing power unlocks the fourth star selection slot. Reroll the current set of stars for this upgrade to take effect.",
  "propulsion_effectiveness-name": "Efficient Navigation",
  "propulsion_effectiveness-unlock-tip": "Unlock Propulsion Room",
  "propulsion_effectiveness-desc": "Stabilization of the propulsion system with additional pipes leads to the dramatic increase of navigation effectiveness on generator energy production.",
  "propulsion_effectiveness-effect": "x{effect}",
  "propulsion_cheaper_rerolls-name": "Energy Conservation",
  "propulsion_cheaper_rerolls-unlock-tip": "Unlock Propulsion Room",
  "propulsion_cheaper_rerolls-desc": "A more precise control over voltage used during the trajectory search lessens the risk of the component burnout in the navigation computer, decreasing the effect of rerolls done on the price of future rerolls.",
  "propulsion_cheaper_rerolls-effect": "^{effect}",
  "star-prefix-1": "Alpha",
  "star-prefix-2": "Beta",
  "star-prefix-3": 'Gamma',
  "star-prefix-4": 'Delta',
  "star-prefix-5": 'Epsilon',
  "star-prefix-6": 'Zeta',
  "star-prefix-7": 'Eta',
  "star-prefix-8": 'Theta',
  "star-prefix-9": 'Iota',
  "star-prefix-10": 'Kappa',
  "star-prefix-11": 'Lambda',
  "star-prefix-12": 'Mu',
  "star-prefix-13": 'Nu',
  "star-prefix-14": 'Xi',
  "star-prefix-15": 'Omicron',
  "star-prefix-16": 'Pi',
  "star-prefix-17": 'Rho',
  "star-prefix-18": 'Sigma',
  "star-prefix-19": 'Tau',
  "star-prefix-20": 'Upsilon',
  "star-prefix-21": 'Phi', 
  "star-prefix-22": 'Chi',
  "star-prefix-23": 'Psi',
  "star-prefix-24": 'Omega',
  "star-suffix-1": "Andromedae",
  "star-suffix-2": "Antliae",
  "star-suffix-3": "Apodis",
  "star-suffix-4": "Aquarii",
  "star-suffix-5": "Aquilae",
  "star-suffix-6": "Arae",
  "star-suffix-7": "Arietis",
  "star-suffix-8": "Aurigae",
  "star-suffix-9": "Boötis",
  "star-suffix-10": "Caeli",
  "star-suffix-11": "Camelopardalis",
  "star-suffix-12": "Cancri",
  "star-suffix-13": "Canum Venaticorum",
  "star-suffix-14": "Canis Majoris",
  "star-suffix-15": "Canis Minoris",
  "star-suffix-16": "Capricorni",
  "star-suffix-17": "Carinae",
  "star-suffix-18": "Cassiopeiae",
  "star-suffix-19": "Centauri",
  "star-suffix-20": "Cephei",
  "star-suffix-21": "Ceti",
  "star-suffix-22": "Chamaeleontis",
  "star-suffix-23": "Circini",
  "star-suffix-24": "Columbae",
  "star-suffix-25": "Comae Berenices",
  "star-suffix-26": "Coronae Australis",
  "star-suffix-27": "Coronae Borealis",
  "star-suffix-28": "Corvi",
  "star-suffix-29": "Crateris",
  "star-suffix-30": "Crucis",
  "star-suffix-31": "Cygni",
  "star-suffix-32": "Delphini",
  "star-suffix-33": "Doradus",
  "star-suffix-34": "Draconis",
  "star-suffix-35": "Equulei",
  "star-suffix-36": "Eridani",
  "star-suffix-37": "Fornacis",
  "star-suffix-38": "Geminorum",
  "star-suffix-39": "Gruis",
  "star-suffix-40": "Herculis",
  "star-suffix-41": "Horologii",
  "star-suffix-42": "Hydrae",
  "star-suffix-43": "Hydri",
  "star-suffix-44": "Indi",
  "star-suffix-45": "Lacertae",
  "star-suffix-46": "Leonis",
  "star-suffix-47": "Leonis Minoris",
  "star-suffix-48": "Leporis",
  "star-suffix-49": "Librae",
  "star-suffix-50": "Lupi",
  "star-suffix-51": "Lyncis",
  "star-suffix-52": "Lyrae",
  "star-suffix-53": "Mensae",
  "star-suffix-54": "Microscopii",
  "star-suffix-55": "Monocerotis",
  "star-suffix-56": "Muscae",
  "star-suffix-57": "Normae",
  "star-suffix-58": "Octantis",
  "star-suffix-59": "Ophiuchi",
  "star-suffix-60": "Orionis",
  "star-suffix-61": "Pavonis",
  "star-suffix-62": "Pegasi",
  "star-suffix-63": "Persei",
  "star-suffix-64": "Phoenicis",
  "star-suffix-65": "Pictoris",
  "star-suffix-66": "Piscium",
  "star-suffix-67": "Piscis Austrini",
  "star-suffix-68": "Puppis",
  "star-suffix-69": "Pyxidis",
  "star-suffix-70": "Reticuli",
  "star-suffix-71": "Sagittae",
  "star-suffix-72": "Sagittarii",
  "star-suffix-73": "Scorpii",
  "star-suffix-74": "Sculptoris",
  "star-suffix-75": "Scuti",
  "star-suffix-76": "Serpentis",
  "star-suffix-77": "Sextantis",
  "star-suffix-78": "Tauri",
  "star-suffix-79": "Telescopii",
  "star-suffix-80": "Trianguli",
  "star-suffix-81": "Trianguli Australis",
  "star-suffix-82": "Tucanae",
  "star-suffix-83": "Ursae Majoris",
  "star-suffix-84": "Ursae Minoris",
  "star-suffix-85": "Velorum",
  "star-suffix-86": "Virginis",
  "star-suffix-87": "Volantis",
  "star-suffix-88": "Vulpeculae",
  "game-title": "Lost in Space",
  "game-title-gimmick-0": "Found in Space",
  "game-title-gimmick-1": "Won in Space",
  "game-title-gimmick-2": "Kept in Space",
  "game-title-gimmick-3": "Saved in Space",
  "close": "Close",
  "you-won": "You won!",
  "you-won-desc": "With the warp drive fully operational, you rejoined the club of people travelling the Universe and are no longer Lost in Space. Now the Universe is your oyster, but perhaps this is a topic for another game...",
  "you-won-deaths": "You died {deaths} times in total.",
  "you-won-time-taken-1": "This game took you",
  "you-won-time-taken-2": "to complete.",
  "credits": "Credits",
  "programming": "Programming",
  "idea": "Idea",
  "export-save-top": "Export",
  "export-save-bottom": "Save",
  "import-save-top": "Import",
  "import-save-bottom": "Save",
  "hard-reset-top": "Hard",
  "hard-reset-bottom": "Reset",
  "export_save-helper": "Your save is in the textbox below, copy it to export."
};


function localize(s, def="Missing Localization") {
  if (s in LOCALE_STRINGS) {
    return LOCALE_STRINGS[s];
  }
  return def;
}

function localizeFormat(s, vars={}, def="Missing Localization") {
  let localized = localize(s, def);
  return localized.formatUnicorn(vars);
} 