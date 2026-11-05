// Promise.all implementation for an iterable of values/promises.
function promiseAll(iterable) {
  return new Promise((resolve, reject) => {
    const items = Array.from(iterable);
    if (items.length === 0) return resolve([]);

    const results = new Array(items.length);
    let completed = 0;

    items.forEach((item, index) => {
      Promise.resolve(item).then(value => {
        results[index] = value;
        completed += 1;
        if (completed === items.length) resolve(results);
      }, reject);
    });
  });
}

if (require.main === module) {
  promiseAll([Promise.resolve(1), 2, Promise.resolve(3)])
    .then(console.log);
}

module.exports = promiseAll;
