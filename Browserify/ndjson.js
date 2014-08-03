// In a second file `./ndjson.js`, export a `parse()` and `stringify()`
// function by assigning properties onto the `exports` object.

// `.parse(str)` will get a newline-separated string `str` of json stringified
// json and should use JSON.parse() to parse each line of json into an array
// of results

// `.stringify(rows)` will get an array of `rows` and should return a
// newline-separated string of records with JSON.stringify()

exports.parse = function(string) {
  array = string.split('/n');
  return array.map(function(item) {
    return JSON.parse(item);
  });
}

exports.stringify = function(array) {
  array = JSON.stringify('\n');
  return array
}