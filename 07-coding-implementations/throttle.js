// Execute at most once per time window (leading-edge throttle).
function throttle(callback, delay) {
  let lastCall = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastCall >= delay) {
      lastCall = now;
      return callback.apply(this, args);
    }
  };
}
module.exports = throttle;
