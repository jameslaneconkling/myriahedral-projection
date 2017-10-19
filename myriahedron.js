const fs = require('fs');
const subdivideMyriahedron = require('./lib/subdivideMyriahedron');


const depth = parseInt(process.argv[2], 10);
if (isNaN(depth) || depth < 1) {
  console.error('second depth argument must be an integer >= 1');
  process.exit(1);
}

// TODO - stream icosahedron geoJSON features via geojson-stream
// TODO - validate geoJSON input
let icosahedron;

try {
  icosahedron = JSON.parse(fs.readFileSync(process.argv[3]));
} catch (e) {
  console.error('error reading or parsing file');
  console.error(e);
  process.exit(1);
}


subdivideMyriahedron(icosahedron, depth).pipe(process.stdout);
