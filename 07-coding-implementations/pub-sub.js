class PubSub {
  constructor() {
    this.topics = new Map();
  }

  subscribe(topic, handler) {
    if (!this.topics.has(topic)) this.topics.set(topic, new Set());
    this.topics.get(topic).add(handler);
    return () => this.unsubscribe(topic, handler);
  }

  publish(topic, message) {
    const handlers = this.topics.get(topic);
    if (!handlers) return 0;
    for (const handler of [...handlers]) handler(message);
    return handlers.size;
  }

  unsubscribe(topic, handler) {
    const handlers = this.topics.get(topic);
    if (!handlers) return;
    handlers.delete(handler);
    if (handlers.size === 0) this.topics.delete(topic);
  }
}

module.exports = PubSub;
