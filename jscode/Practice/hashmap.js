class HashMap {
  constructor(size = 53) {
    this.table = new Array(size);
    this.size = size;
  }

  // ─── Hash Function ──────────────────────────────────────────────────
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * (i + 1)) % this.size;
    }
    return hash;
  }

  // ─── SET ────────────────────────────────────────────────────────────
  set(key, value) {
    let index = this._hash(key);
    if (!this.table[index]) {
      this.table[index] = [];
    }
    // Update if key exists
    for (let pair of this.table[index]) {
      if (pair[0] === key) {
        pair[1] = value;
        return;
      }
    }
    this.table[index].push([key, value]); // Handle collision via chaining
  }

  // ─── GET ────────────────────────────────────────────────────────────
  get(key) {
    let index = this._hash(key);
    if (this.table[index]) {
      for (let pair of this.table[index]) {
        if (pair[0] === key) return pair[1];
      }
    }
    return undefined;
  }

  // ─── HAS ────────────────────────────────────────────────────────────
  has(key) {
    return this.get(key) !== undefined;
  }

  // ─── DELETE ─────────────────────────────────────────────────────────
  delete(key) {
    let index = this._hash(key);
    if (this.table[index]) {
      this.table[index] = this.table[index].filter(pair => pair[0] !== key);
      return true;
    }
    return false;
  }

  // ─── KEYS ────────────────────────────────────────────────────────────
  keys() {
    let keysArr = [];
    for (let bucket of this.table) {
      if (bucket) bucket.forEach(pair => keysArr.push(pair[0]));
    }
    return keysArr;
  }

  // ─── VALUES ──────────────────────────────────────────────────────────
  values() {
    let valuesArr = [];
    for (let bucket of this.table) {
      if (bucket) bucket.forEach(pair => valuesArr.push(pair[1]));
    }
    return valuesArr;
  }

  // ─── DISPLAY ──────────────────────────────────────────────────────────
  display() {
    this.table.forEach((bucket, i) => {
      if (bucket) console.log(`Index ${i}:`, bucket);
    });
  }
}

// ─── USAGE ───────────────────────────────────────────────────────────────
const map = new HashMap();

map.set("apple", 10);
map.set("banana", 20);
map.set("grape", 30);
map.set("apple", 99); // Update existing key

console.log("apple →", map.get("apple"));   // 99
console.log("banana →", map.get("banana")); // 20
console.log("Has grape?", map.has("grape")); // true

map.delete("banana");
console.log("After delete, has banana?", map.has("banana")); // false

console.log("\nAll Keys:", map.keys());
console.log("All Values:", map.values());

console.log("\n--- Internal Table ---");
map.display();