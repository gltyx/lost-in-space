let GENERATOR_ROOM_SOURCES = [];

let STAR_NAME_PREFIXES = [];
for (let i = 1; i <= 24; i++) {
  STAR_NAME_PREFIXES.push(localize("star-prefix-" + i));
}
let STAR_NAME_SUFFIXES = [];
for (let i = 1; i <= 88; i++) {
  STAR_NAME_SUFFIXES.push(localize("star-suffix-" + i));
}

let GENERATOR_ROOM_SOURCES_PRNG = new Random(17072023);
for (let i = 0; i < 20; i++) {
  GENERATOR_ROOM_SOURCES.push({
    distance: Math.pow(i + 1, 1.2),
    x: GENERATOR_ROOM_SOURCES_PRNG.nextFloat(),
    y: GENERATOR_ROOM_SOURCES_PRNG.nextFloat(),
    size: 1 + GENERATOR_ROOM_SOURCES_PRNG.nextFloat(),
    type: ['yellow', 'blue', 'white', 'red'][i % 4],
    name: STAR_NAME_PREFIXES[Math.floor(Math.pow(GENERATOR_ROOM_SOURCES_PRNG.nextFloat() * Math.pow(23.9, 0.5), 2))] + " " 
    + STAR_NAME_SUFFIXES[Math.floor(GENERATOR_ROOM_SOURCES_PRNG.nextFloat() * 87.99)],
  });
}
GENERATOR_ROOM_SOURCES.reverse();

// Secret passcode generator for the Enhancement Room

function generate_secret_passcode(length=5) {
  let numbers = [];
  let numbers_taken = [];
  let ret = "";
  for (let i = 0; i < 10; i++) numbers_taken.push(false);
  for (let i = 0; i < length; i++) {
    numbers.push(Math.floor(Math.random() * (10 - i)));
    for (let j = 0; j <= numbers[i]; j++) {
      if (numbers_taken[j]) numbers[i]++;
    }
    numbers_taken[numbers[i]]++;
    ret += numbers[i];
  }
  return ret;
}

const WARP_REQUIREMENT = 1e12;