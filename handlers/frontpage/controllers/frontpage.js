'use sctrict';

const Graph = require('node-dijkstra');

exports.get = function* () {
  const route = new Graph({
    A: { E: 2, C: 1, B: 2, H: 5 },
    B: { H: 1, E: 3, A: 2, C: 3 },
    C: { D: 1, B: 3, E: 2, A: 1, H: 2 },
    D: { C: 1 },
    E: { A: 2, C: 2, F: 2, B: 3 },
    F: { E: 2, G: 1, H: 1 },
    G: { F: 1 },
    H: { F: 1, B: 1, C: 2, A: 5 }
  });
  this.body = route.path(this.params.dotA.toUpperCase(), this.params.dotB.toUpperCase(), { cost: true });
};
