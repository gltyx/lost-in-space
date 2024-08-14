const LOCATIONS = {
  workshop_room: {
    // show_on_map: true, // true by default
    x: 5,
    y: 5,
    width: 4,
    height: 4,
    // unlock: function() { ... } // when the room appears on the map
  },
  generator_room: {
    x: 6,
    y: 1,
    width: 2,
    height: 4,
    bullseye_data: [
      { width: 0.5, left: prng.nextFloat() * 0.5, speed: 40 },
      { width: 0.4, left: prng.nextFloat() * 0.6, speed: 35 },
      { width: 0.3, left: prng.nextFloat() * 0.7, speed: 30 },
      { width: 0.25, left: prng.nextFloat() * 0.75, speed: 25 },
      { width: 0.2, left: prng.nextFloat() * 0.8, speed: 20 },
      { width: 1, left: 0, speed: 20 } // is here to not cause NaNs
    ]
  },
  enhancement_room: {
    x: 2,
    y: 7,
    width: 3,
    height: 3,
    unlock: function() { return player.locations.generator_room.unlocked }
  },
  crafting_room: {
    x: 3,
    y: 10,
    width: 2,
    height: 4,
    unlock: function() { return player.locations.enhancement_room.unlocked },
    water_puzzle_instances: [  // all require at least 3 actions and about 10-20 pipes to complete perfectly
      [5, 2, 5],
      [5, 2, 6],
      [5, 2, 7],
      [5, 2, 8],
      [5, 2, 9],
      [6, 2, 5],
      [6, 3, 5],
      [6, 4, 3],
      [6, 6, 5],
      [6, 7, 5],
      [6, 8, 5],
      [6, 9, 5],
      [7, 2, 5],
      [7, 2, 6],
      [7, 2, 7],
      [7, 2, 8],
      [7, 2, 9],
      [7, 3, 5],
      [7, 3, 6],
      [7, 3, 7],
      [7, 3, 8],
      [7, 3, 9],
      [7, 4, 3],
      [7, 4, 6],
      [7, 5, 2],
      [7, 5, 3],
      [7, 5, 4],
      [7, 7, 2],
      [7, 7, 3],
      [7, 7, 6],
      [7, 8, 2],
      [7, 8, 3],
      [7, 8, 6],
      [7, 9, 2],
      [7, 9, 3],
      [7, 9, 6],
      [8, 2, 5],
      [8, 2, 7],
      [8, 3, 5],
      [8, 3, 7],
      [8, 4, 3],
      [8, 4, 7],
      [8, 5, 2],
      [8, 5, 3],
      [8, 5, 4],
      [8, 5, 7],
      [8, 6, 5],
      [8, 8, 7],
      [8, 9, 7],
      [9, 2, 5],
      [9, 2, 7],
      [9, 2, 8],
      [9, 2, 9],
      [9, 3, 5],
      [9, 3, 7],
      [9, 3, 8],
      [9, 4, 3],
      [9, 4, 6],
      [9, 4, 7],
      [9, 4, 8],
      [9, 4, 9],
      [9, 5, 2],
      [9, 5, 3],
      [9, 5, 4],
      [9, 5, 8],
      [9, 6, 4],
      [9, 6, 5],
      [9, 6, 8],
      [9, 7, 2],
      [9, 7, 3],
      [9, 7, 4],
      [9, 7, 6],
      [9, 9, 2],
      [9, 9, 4],
      [9, 9, 8],
    ]
  },
  battery_room: {
    x: 9,
    y: 7,
    width: 3,
    height: 3,
    unlock: function() { return player.locations.crafting_room.unlocked },
    sudoku_instances: [  // all have a unique solution and all can be solved easily by repeatedly looking which digits cannot go in which cells
      ".62...15954..168.23..9.2...857....6..9.43...742.6.7.9.....2937....3689.49.1..46.8",
      "5..49...3.2.8.5.74497.23.857.5.8.1..2.67..34..136.2..767291......9.7.42..5..3879.",
      "..1..98538..713.964.356..1.17.82.3...4.1.6.....9..76216...5.98..3.97.1...54....32",
      "...63184..73.5....1.8..765.31..4.92879.2....448.593..1937...4..8..47.3.5.2...91.6",
      "56...37..38.4..2.6...2689...136.94..25.....93..4.15.287.153..4...8.4..724.57.23.1",
      "2.348..5.7415...3...5...27.83......9.5.836.2.627.1.3..5.62..1....8.5176.3...795.8",
      ".97..516.218..74.....231...6...7.81943.9..7....9.62...75..8963...37..598.8651..7.",
      "..35.61..91..28534.2831..7943..5..2..512...472.7..39511..6354..695.82....8.9.12.5",
      "264.3..9.9.1.56..4.5.49.6.86.5.47..9139..5.7..4761..5.5....47.33..86.9.5.....382.",
      "8..72..61..1..659764..19..25..2.8179...3976589.8165.3.26.9718.5.5.83.726.84...9..",
      "29.876....4731.82.83..2.17...54937.8.7.1..9.5964.....24..685.9...2..1.8468...7.3.",
      "..1..78.43.75...69.9.4.231...8.564.171.....35.64.239.82.691..8.1.92..5464..6.519.",
      "1.2...38..46....513.54.76...91..6...5.7.82.9..2.79...32..6.1..7.14.3...58....5142",
      ".3691.25.2.5.6.89.8...32.1..621........3..561.5748..3.52..736.96....9185498.5...7",
      "456..1..8..32...19.1.358.4.7...6.....347..8.216.5.24.33.18.475.24563....6871...2.",
      ".3624..787..6.9..3..278..1.2..938..6.53...2.916...58..9.4..73.2...39.78...1..259.",
      "...46.9373.5..9.26.64..7..8.3..968.1...531.7912.7...6.612.53.8.4.8.7....7...8.192",
      "..4.23.5.9..6..17.21.7..364..92.4.3167...19454.1957..6.9..8.5.....5.9.1.548.12..7",
      "41..2...6.729.45.3.9517..4..3.7.9...846...7..7....5.34..36..4..25.498.......1285.",
      "276.......4.8.2...18.4.637.8.1.472..7.2.1.9.4..9.5.7613....1659.1.529.43.983...2.",
      "943.6.5.287...4.9.....1347.26.....8..975.1..4..4.92.53.39.2...745.3..1.97.28496..",
      ".9.7..8.464....3...7893......4.8563.9...2..4881.496.2..89.53.71465..1.831.784...2",
      "2..8631.73...9.48.8517..63....37.841...4.6..5194...7.34.71.5.26562..73.4..36.25.8",
      "6.52.79.3..836952132..5..67.41.2...576..1529....7836..5376.81..1..57.8362.61..75.",
      ".9..123.483..7421.2.483.7.63421..8.7..8.2.64167.548...1..46..7...5....3942.3.7.6.",
      "..57328..647..93.....65.1.94.219....376....2.9..3.7.86829.7...3.1.2.37......81.45",
      "18...2.6.6..84..7...37.1.82.9.4381.5.5.2974...3451.8.74.81297..319..5.4...2.8461.",
      "2..319.5.5.1.7.42.86.2..19..89..25.1.4.9..236.1..56.49..68.3.15..756.9.29.......4",
      "...18.5.4258..47.19...75.38..24...1778359..6..6.7.39.5...91..4681..4.25.429..617.",
      "...9..34198.4...677...6129..27.8.61.1.8..57.2.5.217.84.7..2.8.3.15..34768.3.561..",
      "...46752.5.4..173.61..5..8...6..4.9275312.......386....6...28758.971...42..6..9.3",
      "..6.2.4.9.4....2852..9..763.23.57.9..79.1635....8.96..41.39...65671...32.9.765..8",
      ".....84.5296..431..4..1296.568........984.57...3.9.6.16...7...9.5.681..2.17529...",
      "1.2.68.3.6..3.14..435..7.1.5..79.6....8.4.3.2.9.6.3..4.24.1.5....75...6935.2..1.8",
      ".16...87.3.7.9.4654596.713..6.259....453..7..1......98....35.1.8.392.6.459.76..83",
      ".3...1.4..25.8491.9.1.7.853.57.3..9.2..657.31613....27..4813.7918972...4...4.91..",
      "7..3...415284..3....1.692...76..5.8.4...3..928..9.1.54697.28..52537....6...65.92.",
      ".8....9.6.351.82..971.24..35.93...87248.7........865.9..72.1.4....56..3.35..471..",
      "1..78..94849.3..27372.64..14238..1...81....69..7215...73..489..2641...3......7546",
      "18..7.42.63...4.1.4.5.68.9..5.6.3..8.1....5.27.82.9.4.5.1736.....648...98.25..6.7",
      "729.......5.8.7..33.1....6...859613.16....49..9.4132.643618.5.9....4.32191..35648",
      "4...97385735.4.1.9.1...3.74..1.6..57.49.518..56.38.9....2.19......27849689.6..71.",
      "..159.7..5...3.9.4.6714...5..9.6.2781738..5...864.73..89.6.4.5..1.....277.4..5.89",
      "5.2.7.4.1...9.48521942.5.7.9.365..4.745.9..2326.7435...27..1.84.3...7165..186.2.7",
      "738..426...67.84.54..39....85327....64..1...7.7.6..398...98217..12.3.8.63.75...4.",
      "9....6.2328...76.4.7..3..18..436.1.71...42...6.85..342.1.7.458....85.431.4561..7.",
      ".7.8..352.2.....966.94.3..7942...5733.57492....15.2.484..36712.5..214...2...5.734",
      "1.2.49.....7..6.8949.3.5.7.3...6274....17.2532.8....1..29.3.8...5.6.43.764.82.5..",
      "35...2.682..3874...4..69.7..329...578.165.29..95.286....4..572.71...4..352387...9",
      "...49581351823..4.9.....6.51..8.7..24.3.29.71729..14.83459..78...7.84139.9.76..5.",
      "..7....9..4581..2.1....24.7.1....9..79.3.15.843857...1.59..8.1....4.68.2.8..25.3.",
      ".5.3.9.82.8.61295.9.....371.4.13..9.63.5..7181.5.68..3.26893...7.4.5......3.412.5",
      "5.4781...867..315213..5647...8.296.77.26..83.645...2.1.8.9..7.4.713....6456.7.32.",
      "5.4..7.6..385..17..1.834.5.1...569.76594..38..479..5..8...13..29...4.6.84.129....",
      "..9..762...536.197786..9.5..5..8.9.1..46..2.5823.1..4.57.4...634....25193..8564..",
      "64.53..97..9.87.6.375.9..42.51..9234...8.4...9643..57.13.9754.64.6.18..35.76..921",
      "723.51.8..1.289.7689.7.41.26.1.728......9.4.3.35....2.3879.52.1..2.4753..5912.7.8",
      ".6.5.1.9.1.9.482.....62.5.821.3....45..2..67.734.8.....4..92..1.87..5.426..47.85.",
      "....837.18975...4.5.1..28697.3.9.28..48.7.19..1.638....7....92828.419..7.6.82..14",
      ".17.8693.86...91.22943.1.6.4...7.2169..5...87..6.28..5.3.4..5...42.956..7.96.2..1",
      "3.587.9.47.9..4.8..8...17.6.38956..797.4..56.5....8.2.194.3.85.82714...3..3.89...",
      ".7..2148..94387..223..4.9.74.3762..59....8....2.1..746.4.53.26.6...7413.389......",
      "24.5...78..514.3.2..3.79.4..34..2.9..7.48..3118...6..7...8246...2....7.36.83..5..",
      "5.8..41..1...27863..3.8..4269..1..8.872..63.5.3.8.5.263.6..12.4..43..758..79...3.",
      "1.469..7.59..7163.68734.1..3569.7.....9....27.71.83..57...548.2.1..687.34.....51.",
      ".7..68...859...67...179...86.59...8....2.574...8.435.1.948..3...8.3.7.24.37.19.6.",
      "3...5.94258..7.6...9..465.814.2.87...72.1...99....3..4...1..43643.527...8196...5.",
      "746..915....7.2.49.895....66...534.1...17.6951.....387.5..14968.6.83..74.24.9....",
      "..531.9.27.18...5.36..97...8.36.95171.6.85.39.5917368.92..541.353....79.....384..",
      "9..7.158.8...6.241..182597653.1.7..2.18.564...2.48.1.72..6.4.9..965.27.8.53.78.2.",
      "78193..4.6...7.83.9.3.28......2673..3.4.1..252.94..618..73.15..15...2.83.3..964.1",
      "789.6.4..645372...3..4.9765..31..8..2..69.17.9...23....2.946.58.36..5.94594..8..7",
      ".7...1592129.8.46.4...791.8651.2.98...459.21698.1..754..68.7.41.439..67.5..6.3...",
      ".1.8..246.27.9.13.634.5..7..4.5.9.1.3.2.14.59.91.6...727.6.3.....91.8.6316397.8.4",
      ".643..2.587..2.3....2..16.995.4...6232...6.18.8..72.....571..9.7.8....34...5841..",
      "86.1...2.21..49..5.9526.3......539.79.8..6.1...6.17.486.137...4.2...41..38.6917..",
      ".4..2.16.7.164....92.73.5..4.9..6731..2.8.4.6.13497..8.3.5.967.19.3...4.2.5.74..3",
      "4.6.79....9..62..73.7.1.5698.4...72..536..9.497..5.68..8.72..5.1..89.37..3.1.629.",
      "29..17..8...958.2.7......61.23...6195.6.9.7..4..1..3...4.5.9..393.2.415..853.12.4",
      ".2739..8...82.67.91967.5.3.6.357..9175..6.3....9.4356.9.2651....3.92.67586......2",
      ".571..48.64.8...1.....796..9.25817...71942....8..3792...3.5.1.6.257....381.3.4..5",
      "4.156..3.8.6..1..4.9.3..1685.842..7664.857..2.736..4....7...251....7.8..18..3.69.",
      "27.65.93.3.4.29....9....4.895.2..643742..3..9..6..1.5.42739.8.5.63.8.2945894..367",
      "67.8.19.383192.76.4296..8.....53..787...1263.91..6...214.2.7.9..82..6417....5..8.",
      "71.89..46269..487134..71...1..7.92..9.2..81.5...1.5.97..624..1.43..87..9..79..534",
      "1.923..6...891572.3.7...5912.67.8.3.73.1926.881.6.3....72.8931....32..5764....2..",
      ".9.1..754..375..8....6.813.7.481.9.228...7.15..13.2.7.41..3.59.9.2..16.3.6.97.8..",
      "2.7..168445...2......94.12...621...371.53.2...3...896.16...5....2518.47...8..4.19",
      "6.23.19..84.6....2..1928....6.732.9.193.86.5.....5.436726..3..1..826..7.9.48.76.3",
      "6....3.51.142...98..986..23.6378.....71...3...4.312..65.7..813..2.1.7589...4592..",
      "2..3.49.148169.3..9...1.482652..914..18..765..9...6..8..69.1524..9268.13127.4....",
      "1..3.8..232....1.4.86.12...458...2.7..9.254...7.68.59...2.567.38351.7.......9.845",
      "81...6..45.473..1.7..1..925..9327..8637..1.9..489..7314...596.3986...2...2...8149",
      "6.8.47..19.751..3814..83..7391...87.87..5.1.65..17839...68342.....72.5.3.13..5.84",
      "..7..84..368.5....1.2369..5...524.1.2.....86493..8.57..71896.536.37..19.85913.6.7",
      ".4..3.976278..9.4..9.574..29.....624..279.85.3.6..5.1..2.6174..7..92.5618.1...2.7",
      "89..5.42..3.8695.7.15..7..3741..6..8.68.9473...37.86453...4.85.18.97....2..683.74",
      "369..7.1..172.8.4.28.1..5.9..3564.27....8.9.517..2.6..736.4.2...2.61.79.9.1.72468",
      "3.2...5.9.865...31...413.6..39.42...7....8.236.13..984.7389.4.69.4.362..16....397",
      "7.51....29..74.65..4.5.87...28....34..4653.8.....84169.7....3.1..2.1..953...294.6",
    ]
  },
  oxygen_room: {
    x: 9,
    y: 10,
    width: 2,
    height: 4,
    unlock: function() { return player.locations.battery_room.unlocked },
    labyrinth_width: 15,
    labyrinth_height: 9,
    labyrinth_entrance: {
      x: 7,
      y: 0
    },
    labyrinth_exit: {
      x: 7,
      y: 8
    },
    labyrinth_instances: [
      "#######.###########......###.#####.#..#.#.#.####..#...##.#.##...#.##.##...####...#......####..####.########.###......##########.#######",
      "#######.############.....##..##..#..###..#..###...####.###.####....#...##.##.#.###....#..##.###...##...###.....#..#############.#######",
      "#######.##########.###...##.#####..#.#......#####...####...##..#.#.####.#####...#..###.#.######.........######.#.##.##.########.#######",
      "#######.#########.###.....#..##...#...##...###.#.#.####.#######.#.####....####.#.###.#..####....#.....#######.##.#.#.##########.#######",
      "#######.########.###...########..#..###....####........#######.##..#.########.###.#..#######...#..##....##..####....###########.#######",
      "#######.############...###.#.##.....#.......##.#....#...##.###...###.#...######.##..###.###.##.##..##...##....##.####..########.#######",
      "#######.##########.....###..###.##..#......###.....#...##.###.##.###..##.###...###.#..#..##.#...#...##.#####.###...#..#########.#######",
      "#######.########.#.....##.##.##...#.####....##.#........##.##..#.####....###.#..###.###..####.###..#.##.##...###.......########.#######",
      "#######.########...##..##....##.#..#.#.#.##.##.#.##...#.##.###.....#...######.###.#..##.#########......#########..#############.#######",
      "#######.#############..#.##..####.#..##....#####..#.#..######...##.##...#####..#.....#.######.#.##..#...##.......####.#########.#######",
      "#######.#############.......########.##.##..#####...##.##.####..####.###.###....##..#....##..#.......#.###.###.#.##.###########.#######",
      "#######.########...#.....##.###.....#...#...###.######.#..###..#####..#...###.##.###.....###.##.....#..###..##.#..###..########.#######",
      "#######.############.....#########..#.#...####...###.###.#####.########.####.....###....###.###.....#.####....##.##....########.#######",
      "#######.###########.##.#.....###.#.#...#..#.##......#.##.#.####..#.#....######.####.##...##.#..##..####.##.....#.....##########.#######",
      "#######.##########..##.#..########.#...#....#####.#.#.#....##......##..#.###..###..#.#..####..#..#...#..#######...#############.#######",
      "#######.###########....#....#######...#.#.####..###...#..#####.#.###...######.......####.##....#.#.##...###.#..#.....#.########.#######",
      "#######.#########........#..###.#.#.###...####...######.#.###..#####.....###.##.....##.#.#####.#..###...####..##..####.########.#######",
      "#######.##########.###....######......#.########....##.....##.#.##.##.###.##.#...######..##...#.#...###.#####.....#############.#######",
      "#######.########..#.#.....#####.....####.#..##.#.#....#...#####..#.#.#.######..#.........###...##..#.#######.###.##..##########.#######",
      "#######.#########......#########.#...#.##..#####..#.....#.####..##.###.#..##..#....##....##..#.#.##...#.#######..##############.#######",
      "#######.##########.....##.#..#######.##.....####.#..#.#.#####......#....######.##..#...#####...##...#.#.###.###...#....########.#######",
      "#######.#########.#....#...#####...####..#..##..#.###.....###.#...##.###.###.###..#..#.#.##.##.#.#......##.#......#############.#######",
      "#######.############....###.########.#.###.###......#..##..###.#.#.#.##..###..#.#..###...##.#..##.....#.##.#..#..#.#.#.########.#######",
      "#######.##########...........##...##.###.##.##.#.#..#.....###.##.#.#.#....##..#.####.#.#####.#...##....####...#...#.###########.#######",
      "#######.##########.###.##..######.###....#.####..#..#.###.###..#..##.#...####.#.###.##...##...........####.#.###.#.....########.#######",
      "#######.########....##.....#.##.#...#..#..#.#####....##.#..###....####...###..#...##...########.#...#...#######...####.########.#######",
      "#######.########.#####.#...####....##...#.#######....###.########.####.######.....##..########.#.#..#.########........#########.#######",
      "#######.#############..#.....#####.#....##..####....##.#...###..######...####.#######.##.###.#....##.##.##....##.##....########.#######",
      "#######.########..####..##.#####.###.#.#..#####.......#...######.######.######..##.###..###........#...#######.#....###########.#######",
      "#######.########.#####..###.###.###.##..##..##......#..##.#####.####.###.#####.##.......#####.#.#.####.###.......##....########.#######",
      "#######.##########.###.......####.#....####.###....##...##.##...#.####.#..##.#####.####..####..#..#.....#####......#.##########.#######",
      "#######.##########.....###...###..##.###..#.###....###...#.##...#.##..#..#####.###.##....##...##.....#..###......##.##.########.#######",
      "#######.############...#...######.#.#...#.#.##...#.#####...##.##...####.####.....#####..####.##.#####.#####.#....#.....########.#######",
      "#######.#########.###..##....##......##...#.##.##.####..#####...#.##......####...###.#...##...#..#...#..##.#.##...##...########.#######",
      "#######.#########...#........##..#...####.#####.###.##.....##...######.#.#####.###....#####.#.#...#..#####...###.#.############.#######",
      "#######.#########.##....#....###..#....#.#.###.#.##...#.#..##...##.#...######.#####.#...####.##....#.#..###......#..##.########.#######",
      "#######.#########......########..##..#############...###########...#########.##..#.#....###...#.#...##.#####.....##....########.#######",
      "#######.########.###...#####.##.##..#....#..##....####.....##.#....##..#.###.#..#...#....##.#..##...#.#####....#....###########.#######",
      "#######.########..####...###.##.####..#.....##....#..##.#.#####.#####..#.####.......#.#.#####..#.##..#.#####.##....##.#########.#######",
      "#######.##########...#.#.#...######.........##.#.....#...#.##..###.##.#..####...#..###...##..#...#....#.##.#####..####.########.#######",
      "#######.########...##...#######.#.......######.##...#.##..###..#.###..##..###.##...#....###..#..#.....####.###.#.##############.#######",
      "#######.#########...#..#...####..###....#..###......#####..##.#.#..####...####.#..####.#####..##.#.#...########....##..########.#######",
      "#######.##########.....###.#.#######.####.#.##..#.#...##...###....##...#.###..##.#..#....##...###.##.##.##.#.....#####.########.#######",
      "#######.########.##.....##.####....##..#...##########.#.#..#####.###...#.###..#.#...###..###.......########.#.#....############.#######",
      "#######.##########..##.....######.####.....####..#####.##.###..###.##.#.#####.##..##...#####.#......#...###...##...############.#######",
      "#######.##########...#.###########..#..####.##.###....###..##......##.###.##..###....###.##.######.#....##..####....###########.#######",
      "#######.########....#...#######.#....#.###..##.####.....#.###.##.####.#...##.#.........#.###.#.#..####..##....##...###.########.#######",
      "#######.##########.#.#....######....#.#..#..##.#......###.###.##.####.#...##..#...##...#.##....#..#.##..##.#####.....#.########.#######",
      "#######.#########.#.##.###...##........#...####.##.#...##.#####.#.##..##.#####...###.....####.#..###..#.###...#...####.########.#######",
      "#######.###########.#..###..#####....##.#..###...##.##...#########.####..#####.#.....##..##.....#.####..######.#.......########.#######",
      "#######.#############...###..##.#..###..##.###....##.......####...##..##.###...#....##...##.#.####...##.##.#.....##.#..########.#######",
      "#######.#############..#...####..#.#.###..#####.#...#..#.#####...####.#.#####.#...#......###.###.#.#.##.##..###...#############.#######",
      "#######.########.#####.########..##......######.#..#.########....#####..#.##.##..###.#.#.##..##.##......##..##......##.########.#######",
      "#######.#########.####...#..####.####.#...#####.###..#.#...##......####...###.#.#.....##.##..####..#.#..#######....##.#########.#######",
      "#######.########....#..####..##.##...#.#...#####..#.....########..####..####..#.#####..#####...###..#.#####.#....#....#########.#######",
      "#######.#########...##..#...###..#.###.##.####.####...##...##.##.#.#...#..##.#....###...###.......##.#.####..#.#..###.#########.#######",
      "#######.#########......#....######.##..###.######.##..###..#########..#..#####..##.#.#.######...........#####.##.##.##.########.#######",
      "#######.##########.##...###..##...##..##.#.####.###...#....###...#.#....#####.#.#.###...###..#....####..##...##..####.#########.#######",
      "#######.########..#.#.....##.##.##.#...###..##.##...#.##...##...####.#..#####..####......##..####...#.#.##.......#.##..########.#######",
      "#######.##########........#######.###.##..####...##..########.###.##....####..#..##.########.#.##......###........##.##########.#######",
    ]
  },
  propulsion_room: {
    x: 5,
    y: 11,
    width: 4,
    height: 2,
    unlock: function() { return player.locations.oxygen_room.unlocked },
    processor_types: ['top', 'bottom', 'loop', 'left', 'right'],
    robot_program_instances: [ // generated to be solvable either with two loops or with three movements of some type
      "#E#.#........#.#.##.#.S..#.##.##.###",
      ".E...#...#...###.##..#S#..#.#..#.#.#",
      ".###...##...#E...##.####......##.#S.",
      "#E.....##.##....###.#.S.##...#####.#",
      ".E#.##.....###.#.#.##.S..#.#...#....",
      "##.S.#.....####...E...##.##...#..#..",
      ".S.#.##..#..#.###.....E#.###.#..#...",
      "...E.#.##....###.#S#..##..#...#.#..#",
      "#.#..#...S.#.####...###.E.##..###.#.",
      "##..E..S#..............#...#.#.##..#",
      ".###.##.####S...#...#..####.##.#.E..",
      "##..#S#.#.....###...E....#.#.#.##.##",
      "####.#.###.E.##..#.#.#....S..#.#.#.#",
      ".E....#.##...###.##.##S...###.#.##.#",
      "##...####E.........#....S#..#.#.#..."
    ],
  },
  cockpit: {
    x: 5,
    y: 9,
    width: 4,
    height: 2,
    unlock: function() { return player.locations.propulsion_room.unlocked },
  },
};

function go_to_location(name) {
  if (!unwrap(LOCATIONS[name].unlock, true)) return;
  if (!player.locations[name].unlocked) {
    player.current_location = name + '-locked';
  }
  else {
    player.current_location = name;
  }
}

function unlock_location(name) {
  player.locations[name].unlocked = true;
  player.current_location = name;
}