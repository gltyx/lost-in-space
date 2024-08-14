// source: https://stackoverflow.com/questions/610406/javascript-equivalent-to-printf-string-format

String.prototype.formatUnicorn = String.prototype.formatUnicorn ||
function () {
    "use strict";
    var str = this.toString();
    if (arguments.length) {
        var t = typeof arguments[0];
        var key;
        var args = ("string" === t || "number" === t) ?
            Array.prototype.slice.call(arguments)
            : arguments[0];

        for (key in args) {
            let val = args[key];
            if (val instanceof Decimal || typeof val === "number") {
              val = format(val);
            }
            str = str.replace(new RegExp("\\{" + key + "\\}", "gi"), val);
        }
    }

    return str;
};

// original

function unwrap(value, default_value) {
  if (value === undefined) {
    value = default_value;
  }
  if (typeof value === "function") {
    value = value();
  }
  return value;
}

// original

function choose(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// original, pretty much a copy of generate_secret_passcode
// without replacement

function choose_k(n, k) {
  let numbers = [];
  let numbers_taken = [];
  let ret = [];
  for (let i = 0; i < n; i++) numbers_taken.push(false);
  for (let i = 0; i < k; i++) {
    numbers.push(Math.floor(Math.random() * (n - i)));
    for (let j = 0; j <= numbers[i]; j++) {
      if (numbers_taken[j]) numbers[i]++;
    }
    numbers_taken[numbers[i]]++;
    ret.push(numbers[i]);
  }
  return ret;
}