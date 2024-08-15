/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com
 @idle games : http://www.gityx.com
 @QQ Group : 627141737

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //未分类：
    'Save': '保存',
    'Export': '导出',
    'Import': '导入',
    'Settings': '设置',
    'Achievements': '成就',
    'Statistics': '统计',
    'Changelog': '更新日志',
    'Hotkeys': '快捷键',
    'ALL': '全部',
    'Default': '默认',
    'AUTO': '自动',
    'default': '默认',
    "points": "点数",
    "Reset for +": "重置得到 + ",
    "Currently": "当前",
    "Effect": "效果",
    "Cost": "成本",
    "Goal:": "目标:",
    "Reward": "奖励",
    "Start": "开始",
    "Exit Early": "提前退出",
    "Finish": "完成",
    "Milestone Gotten!": "获得里程碑！",
    "Milestones": "里程碑",
    "Completed": "已完成",
    "Default Save": "默认存档",
    "Delete": "删除",
    "No": "否",
    "Saves": "存档",
    "Options": "选项",
    "Yes": "是",
    "Are you sure?": "你确定吗？",
    "Edit Name": "编辑名称",
    "Info": "信息",
    "Currently:": "当前:",
    "Appearance": "外观",
    "How the game looks.": "游戏看起来如何。",
    "Theme": "主题",
    "Show milestones": "显示里程碑",
    "Show TPS meter at the bottom-left corner of the page.": "在页面左下角显示 TPS。",
    "Show TPS": "显示 TPS",
    "None": "无",
    "Align modifier units": "对齐概览单位",
    "Align numbers to the beginning of the unit in modifier view.": "在概览视图中将数字与单元的开头对齐。",
    "Select which milestones to display based on criterias.": "根据标准选择要显示的里程碑。",
    "All": "全部",
    "Classic": "经典",
    "Configurable": "可配置",
    "Duplicate": "复制",
    "Mute": "静音",
    "Unmute": "播放",
    "Yellow background means that the digit is present, but in another position": "黄色背景表示数字存在，但位于另一个位置",
    "You died!": "你逝了！",
    "Your guess:": "你的猜测:",
    "You need to get a Keycard. Perhaps you can print one.": "你需要获得一张门卡。也许你可以打印一份。",
    "You will need 1x Crowbar to access the minigame below. Regulate the strength with which you use a crowbar. Stop the moving target in the green zone to progress further.": "你需要1个撬棍才能进入下面的小游戏。调节使用撬棍的力度。在绿色区域停止移动目标，使进度前进。",
    "You will need to spend 1x Memory Card for each attempt. The secret combination consists of five digits, all of which are distinct. Each attempt consists of you inserting a combination of your own and then pressing 'Submit'. The digits in your attempt will be colored based on their presence in the secret passcode. Guess the correct combination to proceed.": "每次尝试需要使用1x存储卡。密码组合由五位数字组成，所有数字都是不同的。每次尝试都包括你插入自己的组合，然后按下“提交”。您尝试中的数字将根据其在密码中的存在而被着色。猜出正确的组合，然后继续。",
    "You need to fill the 9x9 grid with numbers from 1 to 9, so that each row, each column and each of nine 3x3 squares contains all numbers from 1 to 9. Some numbers are already present in the grid. Click on a square to write a number in it; the number that is written is equal to the last digit in the number of Memory Cards you have in your inventory. This action does not spend any Memory Cards. Complete the grid to proceed.": "您需要用1到9的数字填充9x9的网格，这样每一行、每一列和9个3x3正方形中的每一个都包含从1到9的所有数字。一些数字已经出现在网格中。点击一个正方形，在里面写一个数字;所写的数字等于您库存中存储卡数量的最后一个数字。此动作不会消耗任何记忆卡。完成栅格后继续。",
    "Beacons scattered around the generator can focus and extract an especially potent redshifted enery of red stars.": "分散在发电机周围的信标可以聚焦并提取一种特别强大的红星红移能源。",
    "Better Isolation": "更好的隔离",
    "Bottom Processor": "底层处理器",
    "Bulk": "批量",
    "Bulk Crafting": "批量制作",
    "Buy": "购买",
    "Beacon": "信标",
    "Battery Room": "电池室",
    "By capturing some carbon in the exhaust using a system of filters, the Oxygen consumption can be reduced by 15% per level of this upgrade.": "通过使用过滤器系统捕获废气中的一些碳，每升级一级，氧气消耗可以减少15%。",
    "Clear": "清除",
    "Craft": "制作",
    "Crafting Room": "制作室",
    "Credits": "鸣谢",
    "Crowbar": "撬棍",
    "Dead Useful": "非常有用",
    "Direct Connection": "直接连接",
    "3D Printer": "3D打印机",
    "Print": "打印",
    "Printer Room": "打印室",
    "Program": "程序",
    "Propulsion Room": "推进室",
    "Prying the door open...": "把门撬开…",
    "Rapid Prototyping": "快速成型",
    "Reset": "重置",
    "Rules": "规则",
    "Submit": "提交",
    "Stop": "停止",
    "Target": "目标",
    "Target Analysis": "目标分析",
    "The ultimate pinnacle of engineering, it can turn energy directly into matter. Not everything can be 3D-printed, however, as there are some restrictions on the range of objects that can be created using this wonderful technology. Some objects are easier to create than others, as 3D printers can leverage an already existing supply of matter.": "这是工程学的终极顶峰，它能将能源直接转化为物质。然而，并不是所有的东西都可以3D打印，因为使用这项神奇的技术可以创建的物体范围有一些限制。由于3D打印机可以利用已经存在的物质供应，一些物体比其他物体更容易制造。",
    "A more precise control over voltage used during the trajectory search lessens the risk of the component burnout in the navigation computer, decreasing the effect of rerolls done on the price of future rerolls.": "在轨迹搜索过程中使用更精确的电压控制降低了导航计算机中组件烧坏的风险，减少了翻滚对未来翻滚价格的影响。",
    "A wondrous contraption capable of harvesting energy while in space. If provided with a target that radiates energy, this machine is capable of collecting it passively, filling its internal energy buffer in the process.": "一个奇妙的装置，可以在太空中收集能源。如果提供辐射能源的目标，该机器能够被动地收集能源，并在此过程中填充其内部能源缓冲区。",
    "Create a program that will allow the robot to reach the spot designated by the reactor icon. The program is a sequence of Processors, which can be created using CPUs. Click on the Processor you have in order to add it to the end of the program. Click on the Processor inside the program to remove it. The map shows which path your robot will take based on its current program.": "创建一个程序，允许机器人到达反应堆图标指定的地点。该程序是一个处理器序列，可以使用cpu创建。单击您的处理器，以便将其添加到程序的末尾。点击程序内的处理器来删除它。地图显示了你的机器人将根据它当前的程序走哪条路。",
    "Faster, stronger, better! In the hands of a skilled engineer, even the most bog-standard objects can be enhanced to significantly improve their effectiveness. The space suit you are currently in is not an exception to this rule, and with enough extra materials, advancements can be made.": "更快，更强，更好!在熟练的工程师手中，即使是最普通的物体也可以被增强以显著提高其效率。你现在所穿的宇航服也不例外，只要有足够的额外材料，你就可以取得进步。",
    "Finally, a path to sustainable living is revealed. The Oxygen Generator can use energy to reprocess Carbon Dioxide in the spacesuit tanks back into oxygen. Unfortunately, this machine is less than one-hundred-percent effective, and some of the air is lost in the process. Additionally, a delicate nature of this machine only permits recharging it through the battery array.": "最后，揭示了一条可持续生活的道路。氧气发生器可以利用能源将航天服储罐中的二氧化碳再加工成氧气。不幸的是，这台机器的效率不是百分之百，而且在这个过程中，一些空气会流失。此外，这台机器的微妙特性只允许通过电池阵列充电。",
    "Guide the robot through the labyrinth. The robot needs 1x Beacon for each move, which will be placed on its current location. Click on an empty cell to move to it. You can only see cells of the labyrinth adjacent to the robot or one of the placed antenna. Reach the labyrinth exit to progress forward.": "引导机器人穿过迷宫。机器人每次移动需要1x个信标，它将被放置在当前位置。单击空单元格以移动到该单元格。你只能看到与机器人相邻的迷宫细胞或放置的天线之一。到达迷宫出口前进。",
    "Map": "地图",
    "Some items are too complex to just be printed straight-away, but that's where your engineering intellect and tools come to work. Simple items can be crafted into complex ones for a variety of applications. This process cannot be easily automated, though.": "有些项目太复杂，无法直接打印出来，但这正是你的工程智慧和工具发挥作用的地方。简单的物品可以被制作成复杂的物品，用于各种应用。但是，这个过程不容易自动化。",
    "The Battery Room is a mess of broken stuff which looks far beyond repair. The whole section of the ship would need to be rebuilt from scratch, which requires properly modulating the energy field first. Some values are already fixed, while the others would need to be derived and imprinted into the ship's memory.": "电池室是一堆破烂不堪的东西，看起来根本无法修复。飞船的整个部分需要从头开始重建，这需要首先对能源场进行适当的调制。有些值已经固定了，而其他值则需要导出并印入飞船的记忆中。",
    "The command console sits in the room lifelessly. Pitch black screens surround you. Looks like even the very heart of the ship needs some repairs. Perhaps it should start working if you connect the room to the energy grid.": "指挥台毫无生气地放在房间里。漆黑的屏幕包围着你。看来连这艘船的心脏都需要修理。如果你把房间连到电网上，也许它就能工作了。",
    "The door to the Enhancement Room is tightly shut, as it should be. The path forward is blocked by a combination lock which you unfortunately do not remember; the only thing you know that all numbers in it were different. You would need to come back with a bunch of Memory Cards and try to encode the correct sequence in order to pass. Thankfully, each rejection will provide some data to pinpoint the correct code better.": "增强室的门关得严严实实，这是应该的。前进的道路被密码锁挡住了，不幸的是你不记得;你唯一知道的是所有的数字都是不同的。你需要带着一堆存储卡回来，并尝试编码正确的序列才能通过。值得庆幸的是，每次拒绝都会提供一些数据来更好地确定正确的代码。",
    "The door to the Oxygen Room is locked using one of those old-fashioned mechanical locks for which you need an actual key. Unfortunately, the key is nowhere to be found. Fortunately, you do have a special robot that can pick mechanical locks, but it cannot be controlled manually and needs a set of guidance beacons to be placed beforehand. Another bot, this time controlled by you, should solve this problem entirely.": "氧气室的门是用老式机械锁锁上的，需要一把真正的钥匙才能打开。不幸的是，钥匙无处可寻。幸运的是，你确实有一个特殊的机器人可以打开机械锁，但它不能手动控制，需要事先放置一组引导信标。另一个机器人，这次由你控制，应该可以完全解决这个问题。",
    "The engine is completely wrecked. What is worse, the ion reactor that was feeding it is still active somehow, so it is completely unsafe to be on the other side of this triple-thickness door. Once again, a machine should help the man to overcome the difficulties, navigate the room full of debris and shut down the reactor. The exhaust from a working reactor disables any sort of communication, so the robot will need to be programmed in advance.": "发动机完全坏了。更糟糕的是，给它供能的离子反应堆不知何故仍然是活跃的，所以在这三层门的另一边是完全不安全的。再一次，机器应该帮助这个人克服困难，穿越满是碎片的房间，关闭反应堆。工作中的反应堆排出的废气会破坏任何形式的通讯，所以机器人需要提前编程。",
    "There are three sections that can be filled with water; in the beginning, only the first section is full, and other two are empty. You can transfer water between sections by using pipes; the transfer continues until either the input section is empty or the output section is full. This action costs Pipes equal to the number of decaliters transferred. Your goal is to fill the third section with exactly 1 decaliter of water.": "有三个部分可以装满水;开始时，只有第一部分是满的，其他两个是空的。你可以用管道在各个部分之间输送水;传输将继续进行，直到输入部分为空或输出部分已满。此操作消耗的管道等于转移的分配器数量。你的目标是用1分升的水填满第三部分。",
    "This room appears to have been flooded. There are automated systems that should be able to prevent this from happening, but it seems that they were overwhelmed by the sheer amount of incoming water. The system can still be tricked into activating, but that will require carefully balancing the water levels in the different sections of the room.": "这个房间好像被水淹了。有一些自动化系统应该能够防止这种情况发生，但似乎它们被大量涌入的水淹没了。该系统仍然可以被欺骗激活，但这需要仔细平衡房间不同区域的水位。",
    "This room is full with a soft hum of electricity flowing through the metal veins of this hulk of a machine. The Battery Array stores energy that can be supplied to any rooms connected to the ship-wide network, provided the Battery Array itself is connected.": "这个房间充满了柔和的嗡嗡声，电流流经这个笨重的机器的金属血管。电池阵列存储的能源可以提供给连接到全船网络的任何房间，前提是电池阵列本身连接。",
    "Though still in the process of fixing, this contraption can change the position of the ship in space favourably, which potentially leads to the increased energy production from some select stars. Those engines are also operational enough that you can find your way back to the civilization, if the Command Room is accessible.": "虽然还在修复过程中，这个精巧的装置可以改变飞船在太空中的位置，这可能会增加一些选定恒星的能源生产。这些引擎也足够运行，你可以找到你的方式回到文明，如果指挥室是可访问的。",
    "A dedicated energy lane between 3D printer and the Battery Array allows the printer to tap into the Battery Array resources directly when printing.": "3D打印机和电池阵列之间的专用能源通道允许打印机在打印时直接利用电池阵列的资源。",
    "A machine used to switch between voltages.": "用来在电压之间切换的机器。",
    "A metal piece capable of complex calculations.": "能进行复杂计算的金属部件。",
    "A piece of wire that will not injure you on contact.": "一根接触时不会伤到你的电线。",
    "A powered-up signal transmitter.": "一个通电的信号发射器。",
    "A repurposed Energy Grid Kit can be used to partially mechanize the crafting process, allowing one to do a batch production in one click.": "一个重新利用的能源网格工具包可以用来部分机械化的制作过程，允许一个做批量生产在一个点击。",
    "A series of beacons placed around the ship can fill your personal battery from the Battery Array contents whenever you are in a room connected to the spaceship-wide energy grid.": "在飞船周围放置的一系列信标可以从电池阵列中为你的个人电池充电，只要你在一个连接到飞船能源网的房间里。",
    "A set of antennae modulated for different frequencies can capture the full spectrum of the white light, significantly increasing the efficiency of collecting energy from white stars.": "一组对不同频率进行调制的天线可以捕获白光的全光谱，大大提高了从白色恒星收集能源的效率。",
    "A signal transmitter.": "信号发射器。",
    "Accumulator": "蓄电池",
    "Accumulators can help you to store more energy in the Generator.": "蓄电池可以帮助你在发电机中储存更多的能源。",
    "Accumulators can help you to store some energy in the 3D printer.": "蓄电池可以帮助你在3D打印机中储存一些能源。",
    "Adding an extradimensional space to your oxygen tanks allows them to store more Oxygen.": "给你们的氧气罐增加一个额外的空间可以让他们储存更多的氧气。",
    "Additional processing power unlocks the fourth star selection slot. Reroll the current set of stars for this upgrade to take effect.": "额外的处理能力解锁第四个星星选择槽。滚动当前的星星使此升级生效。",
    "Aerobic Replication": "有氧复制",
    "Air Scrubbing": "空气洗涤",
    "All hope is not lost, though. During your trials and tribulations, you learned new things, which were converted into": "不过，并不是所有的希望都破灭了。在你的考验和磨难中，你学到了新的东西，这些东西被转化为",
    "An elaborate construction can wirelessly recharge personal battery while inside the Generator Room, requiring no actions from the user.": "一个精心设计的结构可以在发电机室内无线充电，不需要用户的任何动作。",
    "Antenna": "天线",
    "Battery Array": "电池组",
    "By filtering the least energetic wavelengths out, it is possible to produce more energy out of the light of blue stars.": "通过过滤掉能源最低的波长，就有可能从蓝色恒星的光中产生更多的能源。",
    "By insulating all of the stray exposed wires, one can make the Oxygen Generator 20% more energy-efficient per level of this upgrade.": "通过绝缘所有的杂散暴露的电线，可以使氧气发生器的能源效率提高20%，每一级升级。",
    "By insulating the wires used in the 3D printer internals, excess energy usage can be minimized, resulting in 12% reduction in energy cost of all 3D printer recipes per level of this upgrade.": "通过对3D打印机内部使用的电线进行绝缘，可以最大限度地减少多余的能源使用，每升级一级，所有3D打印机配方的能源成本降低12%。",
    "By scheduling the bulk crafting tasks so one can do several of them in parallel, the efficiency of bulk crafting can be improved, raising its effect on the time cost into a power.": "通过安排批量制作任务，玩家可以同时完成多个任务，从而提高批量制作的效率，提高其对时间成本的影响。",
    "By shortening various connections in the 3D printer internals, the printing time can be decreased by 20% per level of this upgrade.": "通过缩短3D打印机内部的各种连接，每升级一级，打印时间可以减少20%。",
    "By shoving a larger volume of polluted air into the Oxygen Generator at once, one can increase its processing speed by 50% per level of this upgrade.": "通过将更大容量的污染空气一次性塞进氧气发生器，每升级一级，它的处理速度可以提高50%。",
    "By using transformators to compress the energy into a high-voltage form, the storage potential of the battery array can be enhanced.": "通过使用变压器将能源压缩成高压形式，可以提高电池阵列的存储潜力。",
    "By welding more accumulators to your trusted space suit, the total capacity of the internal battery can be increased by 50% per upgrade (stacks additively).": "通过焊接更多的蓄电池到你信任的太空服上，每次升级内部电池的总容量可以增加50%(堆栈相加)。",
    "By welding more empty tanks to your trusted space suit, the total oxygen capacity can be increased by 50% per upgrade (stacks additively). Use Oxygen Tanks to fill the newfound volume with oxygen.": "通过将更多的空罐焊接到你信赖的太空服上，每次升级总氧气容量可以增加50%(叠加)。使用氧气罐将新发现的体积充满氧气。",
    "Cannot move, get a Beacon first.": "无法移动，请先获取信标",
    "Closing all of the gaps with rubber results in less air wasted during the work of the Oxygen Generator.": "在氧气发生器工作过程中，用橡胶封闭所有的空隙可以减少空气浪费。",
    "Command Chain": "命令链",
    "Command Room": "指挥室",
    "Confirm selection": "确认选择",
    "Connect both the Oxygen Room and the Battery Room to the energy grid to unlock the recharge of Oxygen": "将氧气室和电池室都连接到能源网，以解锁氧气的充电",
    "Connect both the Propulsion Room and the Battery Room to the energy grid in order to unlock the ability to reroll star selection": "将推进室和电池室连接到能源网，以解锁重新滚动恒星选择的能力",
    "Connect this room to the energy grid": "把这个房间和能源网连接起来",
    "Crude Assembly Line": "原油装配线",
    "Currently crafting nothing": "目前没有制作任何东西",
    "Currently printing nothing": "当前未打印任何内容",
    "Each accumulator inserted into the Battery Array increases its capacity by 100.00 kWh.": "每插入一个蓄电池组，可增加电池容量100.00 kWh。",
    "Efficient Breathing": "高效呼吸",
    "Efficient Navigation": "高效导航",
    "Empty Tank": "空罐",
    "Energetic Capture": "能源捕获",
    "Energy Conservation": "节约能源",
    "Energy Efficiency": "能源效率",
    "Energy Grid Kit": "能源网组件",
    "Enhancement Room": "增强室",
    "Enhancement Supercharge": "增压器",
    "Enlarged Pipes": "扩大管道",
    "Entrance": "入口",
    "Everfull Tanks": "永远装满的油箱",
    "Exit": "退出",
    "Expanded Oxygen Tanks": "膨胀式氧气罐",
    "Experience": "经验",
    "Experience can be spent to obtain various upgrades that help you to survive for a longer time.": "经验值可以用来获得各种升级，帮助你存活更长的时间。",
    "Extra Accumulators": "额外的蓄电池",
    "Filter": "过滤器",
    "Flooding Sensor": "水浸传感器",
    "for more games from Semenar": "从Semenar更多的游戏",
    "Generator": "发电机",
    "Generator produces 4.00x energy if selected star is the target.": "如果选定的恒星是目标，发电机产生4.00倍的能源。",
    "Generator Room": "发电机室",
    "Go back to the world of living": "回到现实世界去吧",
    "Gray cells are unknown, they might contain a wall or an empty space": "灰色细胞是未知的，它们可能包含一堵墙或一个空白的空间",
    "Green background means that the digit is in the correct position": "绿色背景表示数字处于正确位置",
    "Hard": "硬",
    "High Density Storage": "高密度存储器",
    "If you stop too late, you will lose the Crowbar": "如果你停得太晚，你就会失去撬棍",
    "If you stop too soon, all progress on the minigame will be reset": "如果你停得太快，小游戏的所有进程都会被重置",
    "Increase production of": "增加产量",
    "Input the code:": "输入密码:",
    "Insert:": "插入:",
    "Inventory": "库存",
    "Items needed to connect a room to spaceship energy grid.": "将房间连接到宇宙飞船能源网所需的物品。",
    "Keycard": "门卡",
    "Learning how to prolong your Oxygen supply lets you spend 10% less Oxygen on all actions per level of this upgrade.": "学习如何延长你的氧气供应，可以让你每升级一级减少10%的氧气消耗。",
    "left": "左",
    "Left Processor": "左处理器",
    "Loop Processor": "循环处理器",
    "Lost in Space": "迷失太空",
    "Memory Card": "存储卡",
    "Moves one square to the bottom if possible": "如果可能的话，移动一个正方形到底部",
    "Moves one square to the left if possible": "如果可能的话向左移动一个方块",
    "Moves one square to the right if possible": "如果可能的话，向右移动一个方块",
    "Moves one square to the top if possible": "如果可能的话，移动一个正方形到顶部",
    "Multispectral Analysis": "多光谱分析",
    "Not bought": "未购买",
    "not selected": "未选中",
    "Open the door": "打开门",
    "Oxygen Generator": "氧气发生器",
    "Oxygen Generator base efficiency is improved.": "提高了氧气发生器基效率。",
    "Oxygen Room": "氧气室",
    "Oxygen Tanks are so full, they restore a greater percentage of Oxygen as a result (their description will not be updated).": "氧气罐是如此的满，他们恢复更多的氧气百分比作为结果(他们的描述将不会更新)。",
    "Parallelization Algorithms": "并行化算法",
    "Past guesses:": "猜测历史:",
    "Perfect Scrubbing": "完美的洗涤",
    "Pi Cephei": "造父星",
    "Pipe": "管道",
    "Preview": "预览",
    "Recycling the corpses can potentially improve the efficiency of Enhancements for the living.": "回收尸体可以潜在地提高对生者的增强效率。",
    "Red numbers violate some of the rules, green numbers don't": "红色数字违反了一些规则，绿色数字则没有",
    "Redshift Empowerment": "红移赋能",
    "Right Processor": "右处理器",
    "Rubber Sheet": "橡胶板",
    "Runs all previous Processors a second time": "第二次运行所有以前的处理器",
    "semenar.am": "semenar.am",
    "Separation Algorithms": "分离算法",
    "Sophisticated algorithms that route the air in your spacesuit can repalce a part of your oxygen consumption with a flat cost of 1 MWh per action.": "通过复杂的算法，你的宇航服里的空气可以代替你的一部分氧气消耗，每次行动的固定成本为1兆瓦时。",
    "Spaceship Engine": "宇宙飞船引擎",
    "Stabilization of the propulsion system with additional pipes leads to the dramatic increase of navigation effectiveness on generator energy production.": "采用附加管道的推进系统的稳定性导致了导航效率对发电机发电量的显著提高。",
    "Subspace Tanks": "子空间储罐",
    "Suit Enhancer": "套装增强器",
    "Supercharge": "增压",
    "Supercharged Tools": "增压工具",
    "The electrical tools make the job of crafting various items significantly easier, decreasing the crafting time by 20% per level of this upgrade.": "电动工具使制作各种物品的工作变得更加容易，每升级一级可以减少20%的制作时间。",
    "The gleaming blue terminal welcomes you as you approach the door to the coveted Command Room. 'Welcome, capitan', says it. 'Please insert your keycard'.": "当你接近令人垂涎的指挥室的大门时，闪闪发光的蓝色终点站欢迎着你。“欢迎光临，船长”，它说。“请插入您的钥匙卡”。",
    "The increased intake of air into the Oxygen Generator increases its speed by 50% per level of this upgrade.": "每升级一级，氧气发生器的进气量增加，速度提高50%。",
    "The path to a Generator Room is blocked by a door which is stuck in a semi-open position. Trying to open it manually yielded no results. You will likely need an item like a Crowbar to widen the opening.": "通往发电机室的路被一扇门挡住了，门卡在半开的位置。试图手动打开它没有结果。你可能需要撬棍之类的东西来扩大洞口。",
    "The secret passcode:": "秘密密码:",
    "The unlimited flow of energy to the various machines installed in this room can increase the efficiency of all enhancements by 25%.": "这个房间里安装的各种机器的无限能源流可以将所有增强功能的效率提高25%。",
    "This is an Unlock Tip which displays when the upgrade is locked": "这是一个解锁提示，当升级被锁定时显示",
    "To be rebuffed by some decrepit program so close to the goal does not feel particularly good, but you cannot capitulate now, as the freedom of movement is within your reach.": "被一些接近目标的陈旧程序拒绝，感觉不是特别好，但你现在不能投降，因为行动自由就在你触手可及的范围内。",
    "Top Processor": "顶级处理器",
    "Transfer Corridor": "传输通道",
    "Transfer energy to the battery": "将能源转移到电池",
    "Transferring water...": "输送水…",
    "Transformator": "变压器",
    "Transistor Plate": "晶体管板",
    "Unlock Battery Room": "解锁电池室",
    "Unlock Command Room": "解锁指挥室",
    "Unlock Crafting Room": "解锁锻造室",
    "Unlock Enhancement Room": "解锁增强室",
    "Unlock Generator Room": "解锁发电机室",
    "Unlock Oxygen Room": "解锁氧气室",
    "Unlock Propulsion Room": "解锁推进室",
    "Unlocks the ability to repeatedly print items if you have enough resources. Click on the button next to the 'Print' button to toggle auto-repeat.": "解锁重复打印物品的能力，如果你有足够的资源。点击“打印”按钮旁边的按钮切换自动重复。",
    "Upgrades": "升级",
    "Using wire, the energy output of the generator can be increased by 50% per level of this upgrade.": "使用电线，发电机的能源输出每升级一级可以增加50%。",
    "Vacuum Chamber": "真空室",
    "Visit": "访问",
    "Whenever your personal spacesuit tank is expanded, part of the new volume is filled with Oxygen as well.": "每当你的个人太空服燃料箱膨胀时，新体积的一部分也会充满氧气。",
    "Why are you still here? Triple the Experience income on death per level of this upgrade.": "你怎么还在这儿?每升级一级死亡经验收入增加三倍。",
    "Wire": "电线",
    "Wire Insulation": "电线绝缘",
    "Wireless Charging": "无线充电",
    "Workbench": "工作台",
    "Workshop": "车间",
    "Writing a program...": "写程序…",
    "A tool used to force two objects apart": "用来把两个物体分开的工具",
    "Restores 50% of oxygen on use": "使用后恢复 50% 的氧气",
    "Use": "使用",
    "Alpha Carinae": "阿尔法船底座",
    "Alpha Trianguli": "阿尔法三角座",
    "Beta Monocerotis": "麒麟座",
    "Beta Serpentis": "贝塔蛇座",
    "Delta Pavonis": "孔雀德尔塔",
    "Epsilon Orionis": "厄普西隆猎户座",
    "Iota Leonis Minoris": "伊奥塔小狮子座",
    "Iota Velorum": "伊奥塔的面纱座",
    "Kappa Mensae": "卡帕表座",
    "Nu Andromedae": "没有仙女座",
    "Omega Pictoris": "欧米咖画家座",
    "Sigma Columbae": "西格玛天鸽座",
    "Sigma Monocerotis": "西格玛麒麟座",
    "Upsilon Columbae": "厄普西隆天鸽座",
    "Upsilon Vulpeculae": "厄普西隆狐狸座",
    "Maybe it can be recycled into something useful?..": "也许它可以回收成为有用的东西?..",
    "A vessel devoid of its contents": "空无一物的容器",
    "A thin strand of metal used to transfer energy or data": "一种用来传递能源或数据的细金属线",
    "Can enhance energy capacity if installed in a machine": "如果安装在机器上，能提高能源容量吗",
    "Transfer energy to the printer": "将能源转移到打印机",
    "A little data chip that can hold a bit of information": "一种可以存储少量信息的小数据芯片",
    "Your save is in the textbox below, copy it to export.": "您的存档在下面的文本框中，将其复制并保存到安全的地方。",
    "Close": "关闭",
    "Auto": "自动",
    "Bought": "已购买",
    "A device used for separation": "用于分离的装置",
    "A tube that ensures that its contents do not escape": "一种确保其内容物不泄漏的管子",
    "Thanks to the higher powers, there are no more problems with that ship, or so it seems. With the whole adventure behind you, the only thing that stands between you and escaping the clutches of deep space is the initiation of warp procedure. Perhaps you should do this.": "多亏了更高的力量，那艘船再也没有问题了，至少看起来是这样。随着整个冒险的完成，你和逃离深空魔爪之间唯一的障碍就是曲速程序的启动。也许你应该这样做。",
    "needed": "需要",
    "A machine used to switch between voltages": "用来在电压之间切换的机器",
    "A metal piece capable of complex calculations": "能进行复杂计算的金属部件",
    "A perfectly normal piece of synthetic rubber": "一块非常普通的合成橡胶",
    "A piece of wire that will not injure you on contact": "一根接触时不会伤到你的电线",
    "A powered-up signal transmitter": "一个通电的信号发射器",
    "A proof that you are the captain here": "证明你是这里的船长",
    "Alpha Boötis": "阿尔法Boötis",
    "Each accumulator inserted into the Battery Array increases its capacity by 700.00 kWh.": "插入电池组的每个蓄电池增加700.00千瓦时的容量。",
    "Hover over me to recharge Oxygen": "盘旋在我身上给我补充氧气",
    "Items needed to connect a room to spaceship energy grid": "将房间连接到宇宙飞船能源网所需的物品",
    "Millions of tiny gates ready to do computations": "数以百万计的微型门准备进行计算",
    "Navigating the lock...": "驶进船闸……",
    "Reroll star selection": "重掷星星选择",
    "Saved in Space": "在太空中获救",
    "Tip: if the charging process goes slowly, consider increasing the size of your Generator energy buffer": "提示:如果充电过程缓慢，考虑增加发电机能源缓冲的大小",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "Transformator     ": "变压器     ",
    "Transistor Plate     ": "晶体管板     ",
    "Rubber Sheet     ": "橡胶板     ",
    "Keycard     ": "门卡     ",
    "Insulated Wire     ": "绝缘线     ",
    "Energy Grid Kit     ": "能源网组件     ",
    "Beacon     ": "信标     ",
    "CPU     ": "CPU     ",
    "Pipe     ": "管道     ",
    "Filter     ": "过滤器     ",
    "Memory Card     ": "存储卡     ",
    "Accumulator     ": "蓄电池     ",
    "Oxygen Tank     ": "氧气罐     ",
    "Crowbar     ": "撬棍     ",
    "Metal Scrap     ": "金属废料     ",
    "Empty Tank     ": "空罐     ",
    "Wire     ": "电线     ",
    "Rho Librae": "ρ天秤座",
    "Lambda Geminorum": "λ双子座",
    "Nu Scorpii": "ν天蝎座",
    "Icons by": "图标来自",
    // 图标代码，不能汉化
    "Jacorb's Games": "Jacorb's Games",
    "CPU": "CPU",
    "icons8": "icons8",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "Scientific": "科学计数法",
    "Standard": "标准",
    "Blind": "盲文",
    "Letters": "字母",
    "Mixed Engineering": "混合工程",
    "Mixed Scientific": "混合科学",
    "Chemistry": "化学",
    "Engineering": "工程符号",
    "By Jacorb90": "By Jacorb90",
    "content_copy": "content_copy",
    "library_books": "library_books",
    "discord": "discord",
    "drag_handle": "drag_handle",
    "edit": "edit",
    "forum": "forum",
    "content_paste": "content_paste",
    "delete": "delete",
    "info": "info",
    "settings": "settings",

    //树游戏
    'Loading...': '加载中...',
    'ALWAYS': '一直',
    'HARD RESET': '硬重置',
    'Export to clipboard': '导出到剪切板',
    'INCOMPLETE': '不完整',
    'HIDDEN': '隐藏',
    'AUTOMATION': '自动',
    'NEVER': '从不',
    'ON': '打开',
    'OFF': '关闭',
    'SHOWN': '显示',
    'Play Again': '再次游戏',
    'Keep Going': '继续',
    'The Modding Tree Discord': '模型树Discord',
    'You have': '你有',
    'It took you {{formatTime(player.timePlayed)}} to beat the game.': '花费了 {{formatTime(player.timePlayed)}} 时间去通关游戏.',
    'Congratulations! You have reached the end and beaten this game, but for now...': '恭喜你！ 您已经结束并通关了本游戏，但就目前而言...',
    'Main Prestige Tree server': '主声望树服务器',
    'Reach {{formatWhole(ENDGAME)}} to beat the game!': '达到 {{formatWhole(ENDGAME)}} 去通关游戏!',
    "Loading... (If this takes too long it means there was a serious error!": "正在加载...（如果这花费的时间太长，则表示存在严重错误！",
    'Loading... (If this takes too long it means there was a serious error!)←': '正在加载...（如果时间太长，则表示存在严重错误！）←',
    'Main\n\t\t\t\tPrestige Tree server': '主\n\t\t\t\t声望树服务器',
    'The Modding Tree\n\t\t\t\t\t\t\tDiscord': '模型树\n\t\t\t\t\t\t\tDiscord',
    'Please check the Discord to see if there are new content updates!': '请检查 Discord 以查看是否有新的内容更新！',
    'aqua': '水色',
    'AUTOMATION, INCOMPLETE': '自动化，不完整',
    'LAST, AUTO, INCOMPLETE': '最后，自动，不完整',
    'NONE': '无',
    'P: Reset for': 'P: 重置获得',
    'Git游戏': 'Git游戏',
    'QQ群号': 'QQ群号',
    'x': 'x',
    'QQ群号:': 'QQ群号:',
    '* 启用后台游戏': '* 启用后台游戏',
    '更多同类游戏:': '更多同类游戏:',
    'i': 'i',
    'I': 'I',
    'II': 'I',
    'III': 'III',
    'IV': 'IV',
    'V': 'V',
    'VI': 'VI',
    'VII': 'VII',
    'VIII': 'VIII',
    'X': 'X',
    'XI': 'XI',
    'XII': 'XII',
    'XIII': 'XIII',
    'XIV': 'XIV',
    'XV': 'XV',
    'XVI': 'XVI',
    'A': 'A',
    'B': 'B',
    'C': 'C',
    'D': 'D',
    'E': 'E',
    'F': 'F',
    'G': 'G',
    'H': 'H',
    'I': 'I',
    'J': 'J',
    'K': 'K',
    'L': 'L',
    'M': 'M',
    'N': 'N',
    'O': 'O',
    'P': 'P',
    'Q': 'Q',
    'R': 'R',
    'S': 'S',
    'T': 'T',
    'U': 'U',
    'V': 'V',
    'W': 'W',
    'X': 'X',
    'Y': 'Y',
    'Z': 'Z',
    '<': '<',
    '<<': '<<',
    '>': '>',
    '>>': '>>',
    '': '',
    '': '',
    '': '',

}


//需处理的前缀，此处可以截取语句开头部分的内容进行汉化
//例如：Coin: 13、Coin: 14、Coin: 15... 这种有相同开头的语句
//可以在这里汉化开头："Coin: ":"金币: "
var cnPrefix = {
    "\n": "\n",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": " ",
    " ": " ",
    //树游戏
    "\t\t\t": "\t\t\t",
    "\n\n\t\t": "\n\n\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    "Show Milestones: ": "显示里程碑：",
    "Autosave: ": "自动保存: ",
    "Offline Prod: ": "离线生产: ",
    "Completed Challenges: ": "完成的挑战: ",
    "High-Quality Tree: ": "高质量树贴图: ",
    "Offline Time: ": "离线时间: ",
    "Theme: ": "主题: ",
    "Anti-Epilepsy Mode: ": "抗癫痫模式：",
    "In-line Exponent: ": "直列指数：",
    "Single-Tab Mode: ": "单标签模式：",
    "Time Played: ": "已玩时长：",
    "Shift-Click to Toggle Tooltips: ": "Shift-单击以切换工具提示：",
    "Notation: ": "符号: ",
    "Toggle Music: ": "切换声音: ",
    "Progress: ": "进度: ",
    "Oxygen: ": "氧气: ",
    "Carbon Dioxide: ": "二氧化碳：",
    "Currently printing: ": "当前打印: ",
    "Efficiency: ": "效率:",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需处理的后缀，此处可以截取语句结尾部分的内容进行汉化
//例如：13 Coin、14 Coin、15 Coin... 这种有相同结尾的语句
//可以在这里汉化结尾：" Coin":" 金币"
var cnPostfix = {
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "  ",
    " ": " ",
    "\n": "\n",
    "\n\t\t\t": "\n\t\t\t",
    "\t\t\n\t\t": "\t\t\n\t\t",
    "\t\t\t\t": "\t\t\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    "/sec)": "/秒)",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^(\d+)$/,
    /^\s*$/, //纯空格
    /^([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)h ([\d\.]+)m ([\d\.]+)s$/,
    /^([\d\.]+)y ([\d\.]+)d ([\d\.]+)h$/,
    /^([\d\.]+)\-([\d\.]+)\-([\d\.]+)$/,
    /^([\d\.]+)e(\d+)$/,
    /^([\d\.]+)$/,
    /^\$([\d\.]+)$/,
    /^\(([\d\.]+)\)$/,
    /^x(.+) 🠒 x(.+)$/,
    /^([\d\.]+)\% 🠒 ([\d\.]+)\%$/,
    /^([\d\.]+)\%$/,
    /^([\d\.]+)\/([\d\.]+)$/,
    /^([\d\.]+)Wh\/([\d\.]+)Wh$/,
    /^([\d\.]+) (.+)\/([\d\.]+) (.+)$/,
    /^\-(.+)\/([\d\.]+) (.+)$/,
    /^([\d\.]+)\/([\d\.,]+)$/,
    /^([\d\.,]+)\/([\d\.,]+)$/,
    /^\(([\d\.]+)\/([\d\.]+)\)$/,
    /^成本(.+)$/,
    /^\(([\d\.]+)\%\)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)K$/,
    /^([\d\.]+)M$/,
    /^([\d\.]+)B$/,
    /^([\d\.]+) TWh$/,
    /^([\d\.]+) daL$/,
    /^([\d\.]+) GWh$/,
    /^([\d\.]+) MWh$/,
    /^([\d\.]+) kWh$/,
    /^([\d\.]+) MW$/,
    /^([\d\.]+) kW$/,
    /^([\d\.]+) K$/,
    /^([\d\.]+) M$/,
    /^([\d\.]+) B$/,
    /^([\d\.]+) T$/,
    /^([\d\.]+) Qi$/,
    /^([\d\.]+) Qa$/,
    /^([\d\.]+)s$/,
    /^([\d\.]+)x$/,
    /^x([\d\.]+)$/,
    /^([\d\.,]+)$/,
    /^\$([\d\.,]+)$/,
    /^\+([\d\.,]+)$/,
    /^\-([\d\.,]+)$/,
    /^([\d\.,]+)x$/,
    /^x([\d\.,]+)$/,
    /^([\d\.,]+) \/ ([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+) \/ ([\d\.]+)e([\d\.,]+)$/,
    /^\$([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.,]+)\/([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)\/([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e\+([\d\.,]+)$/,
    /^e([\d\.]+)e([\d\.,]+)$/,
    /^x([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)x$/,
    /^([\uD800-\uDBFF][\uDC00-\uDFFF])|([\u2600-\u27BF])|([\u2300-\u23FF])|([\u2B50-\u2B55])|([\u203C-\u3299])|[\u21A9\u21AA\u25B6\u25C0\u2B06\u2B07\u2B05\u2B95\u2B99\u2B9A]+$/,
    // /^([\uD800-\uDBFF][\uDC00-\uDFFF])|([\u2600-\u27BF])|([\u2300-\u23FF])|([\u2B50-\u2B55])|([\u203C-\u3299])+$/,
    // /^[\uD800-\uFFFF]+$/,
    /^[\u4E00-\u9FA5]+$/
];
var cnExcludePostfix = [
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//字母加数字：([\d\.]+[A-Za-z])
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
//换行加空格：\n(.+)
//&nbsp;空格：\xA0
var cnRegReplace = new Map([
    [/^([\d\.]+) hours ([\d\.]+) minutes ([\d\.]+) seconds$/, '$1 小时 $2 分钟 $3 秒'],
    [/^You are gaining (.+) elves per second$/, '你每秒获得 $1 精灵'],
    [/^You have (.+) Experience.$/, '你有 $1 经验值。'],
    [/^You have (.+) Memory Card; writing the number (.+).$/, '你有 $1 存储卡;写出数字 $2。'],
    [/^You have (.+) points$/, '你有 $1 点数'],
    [/^Next at (.+) points$/, '下一个在 $1 点数'],
    [/^Generator produces (.+) energy if selected star is the target.$/, '如果选定的恒星是目标，发电机产生 $1 的能源。'],
    [/^Processes (.+) Carbon Dioxide per second$/, '每秒处理 $1 的二氧化碳'],
    [/^Requires (.+) in battery storage$/, '需要 $1 的电池存储'],
    [/^Requires (.+) when operational$/, '运行时要求 $1'],
	[/^([\d\.]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+)e([\d\.,]+)\/sec$/, '$1e$2\/秒'],
    [/^requires ([\d\.]+) more research points$/, '需要$1个研究点'],
    [/^([\d\.]+)e([\d\.,]+) points$/, '$1e$2 点数'],
    [/^([\d\.]+) elves$/, '$1 精灵'],
    [/^([\d\.]+)s left$/, '剩余 $1 秒'],
    [/^([\d\.]+)m ([\d\.]+)s left$/, '剩余 $1分钟 $2秒'],
    [/^([\d\.]+)h ([\d\.]+)m ([\d\.]+)s left$/, '剩余 $1小时 $2分钟 $3秒'],
    [/^([\d\.]+)d ([\d\.]+)h ([\d\.]+)m ([\d\.]+)s left$/, '剩余 $1 天 $2小时 $3分钟 $4秒'],
    [/^\-(.+)s left$/, '剩余 \-$1 秒'],
    [/^([\d\.]+)m ([\d\.]+)s$/, '$1分钟 $2秒'],
    [/^([\d\.]+)d ([\d\.]+)h ([\d\.]+)m$/, '$1天 $2小时 $3分'],
    [/^([\d\.]+)e([\d\.,]+) elves$/, '$1e$2 精灵'],
    [/^([\d\.,]+) elves$/, '$1 精灵'],
    [/^([\d\.,]+) daL to Transfer Corridor$/, '$1 dal 到 传输通道'],
    [/^([\d\.,]+) daL to Flooding Sensor$/, '$1 dal 到 水浸传感器'],
    [/^([\d\.,]+) daL to Workshop$/, '$1 dal 到 车间'],
    [/^([\d\.,]+)x CPU$/, '$1x CPU'],
    [/^([\d\.,]+)x Empty Tank$/, '$1x 空罐'],
    [/^([\d\.,]+)x Energy Grid Kit$/, '$1x 电网套件'],
    [/^([\d\.,]+)x Memory Card$/, '$1x 存储卡'],
    [/^([\d\.,]+)x Metal Scrap$/, '$1x 金属废料'],
    [/^([\d\.,]+)x Rubber Sheet$/, '$1x Rubber Sheet'],
    [/^([\d\.,]+)x Antenna$/, '$1x 天线'],
    [/^([\d\.,]+)x Wire$/, '$1x 电线'],
    [/^([\d\.,]+)x Transformator$/, '$1x 变压器'],
    [/^([\d\.,]+)x Insulated Wire$/, '$1x 绝缘线'],
    [/^([\d\.,]+)x Pipe$/, '$1x 管道'],
    [/^([\d\.,]+)x Transistor Plate$/, '$1x 晶体管板'],
    [/^([\d\.,]+)x Filter$/, '$1x 过滤器'],
    [/^([\d\.,]+)x Experience$/, '$1x 经验值'],
    [/^([\d\.,]+)x Accumulator$/, '$1x 蓄电池'],
    [/^([\d\.,]+)x Beacon$/, '$1x 信标'],
    [/^Day ([\d\.,]+)$/, '天数 $1'],
    [/^\*(.+) to electricity gain$/, '\*$1 到电力增益'],
    [/^Battery Room: (.+) left$/, '电池室：剩余 $1'],
    [/^Battery: (.+) left$/, '电池：剩余 $1'],
    [/^Volume: (.+) daL$/, '容量：$1 daL'],
    [/^Cost: (.+) points$/, '成本：$1 点数'],
    [/^Req: (.+) elves$/, '要求：$1 精灵'],
    [/^Req: (.+) \/ (.+) elves$/, '要求：$1 \/ $2 精灵'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],

]);