const Map = Immutable.Map;

const map1 = Map({ a: 1 });

const map2 = map1.set({ 'a', 7 });

const map3 = map1.clear();

const map4 = map.delete('a');

const map5 = map1.update('a', () => (7));


