/**
 * @typedef Item
 * @property {number} id - this item's ID
 * @property {string} name - name of this item
 * @property {number} price - price of this item
 * @property {string} category - the food group this item belongs to
 * @property {number} quantity - number of this item in inventory
 */

/** @type {Item[]} */
const inventory = [
  { id: 1, name: "apple", price: 1.75, category: "fruit", quantity: 100 },
  { id: 2, name: "banana", price: 0.25, category: "fruit", quantity: 137 },
  { id: 3, name: "orange", price: 1.0, category: "fruit", quantity: 10 },
  { id: 4, name: "broccoli", price: 3.0, category: "vegetable", quantity: 67 },
  { id: 5, name: "carrots", price: 2.25, category: "vegetable", quantity: 94 },
  { id: 6, name: "milk", price: 5.75, category: "dairy", quantity: 90 },
  { id: 7, name: "cheddar", price: 4.0, category: "dairy", quantity: 63 },
  { id: 8, name: "sourdough", price: 5.5, category: "grains", quantity: 81 },
];

// === Complete the functions below! ===

let debugMode = false;

/**
 * Prints out the name of each item in the given array.
 * @param {Item[]} items - array of items
 */
function logNames(items) {
  if (debugMode) console.log("beginning of logNames");
  inventory.forEach((item) => {
    console.log(item.name);
  });
  if (debugMode) console.log("end of logNames");
}

/**
 * @param {Item[]} items - array of items
 * @returns {string[]} an array of item names in all uppercase
 */
function getUppercaseNames(items) {
  if (debugMode) console.log("beginning of getUppercaseNames");
  // use `map`
  let names = items.map((item) => {
    if (debugMode) {
      console.log("item: " + JSON.stringify(item));
    }
    return item.name.toUpperCase();
  });
  if (debugMode) console.log("end of getUppercaseNames");
  return names;
}

/**
 * @param {Item[]} items - array of items
 * @param {number} id - id of the item to find
 * @returns {Item} - the item in `items` with the given `id`
 */
function getItemById(items, id) {
  let item = null;
  if (debugMode) console.log("beginning of getItemById");
  // use `find`
  item = items.find((item) => {
    if (debugMode) {
      console.log("item: " + JSON.stringify(item));
    }
    return item.id === id;
  });
  if (debugMode) console.log("end of getItemById");
  return item;
}

/**
 * @param {Item[]} items - array of items
 * @param {string} name - name of the item to find
 * @returns {number} the price of the item named `name` if found
 */
function getItemPriceByName(items, name) {
  if (debugMode) console.log("beginning of getItemPriceByName");
  // use a loop!
  let itemPrice = null;
  for (let i = 0; i < items.length; i++) {
    if (items[i].name === name) {
      itemPrice = items[i].price;
      if (debugMode) {
        console.log("item: " + JSON.stringify(item));
      }
    }
  }
  if (debugMode) console.log("end of getItemPriceByName");
  return itemPrice;
}

/**
 * @param {Item[]} items - array of items
 * @param {string} category
 * @returns {Item[]} array of items that belong to the given `category`
 */
function getItemsByCategory(items, category) {
  if (debugMode) console.log("beginning of getItemsByCategory");
  // use `filter`
  items = items.filter((item) => {
    if (debugMode) {
      console.log("item: " + JSON.stringify(item));
    }
    return item.category === category;
  });
  if (debugMode) console.log("end of getItemsByCategory");
  return items;
}

/**
 * @param {Item[]} items - array of items
 * @returns {number} the total quantity of all items
 */
function countItems(items) {
  if (debugMode) console.log("beginning of countItems");
  // use `reduce`
  let total = items.reduce((total, current) => {
    if (current !== null && current !== undefined) {
      total++;
    }
    if (debugMode) {
      console.log("current: " + JSON.stringify(current));
      console.log("total: " + total);
    }
    return total;
  }, 0);
  if (debugMode) console.log("end of countItems");
  return total;
}

/**
 * @param {Item[]} items - array of items
 * @returns {number} the cost of all given items
 */
function getTotalPrice(items) {
  if (debugMode) console.log("beginning of getTotalPrice");
  // TODO: use `reduce`
  let total = items.reduce((total, current) => {
    if (
      current !== null &&
      current !== undefined &&
      current.price !== null &&
      current.price !== undefined &&
      current.quantity !== null &&
      current.quantity !== undefined
    ) {
      total += current.price * current.quantity;
      if (debugMode) {
        console.log("current: " + JSON.stringify(current));
        console.log("total: " + total);
      }
    }
    return total;
  }, 0);
  if (debugMode) console.log("end of getTotalPrice");
  return total;
}

// === READ BUT DO NOT CHANGE THE CODE BELOW ===

console.log("Welcome! We carry the following items:");
logNames(inventory);

console.log("Here are the names again in all uppercase:");
console.log(getUppercaseNames(inventory));

console.log(`In total, we have ${countItems(inventory)} items in stock.`);

const totalCost = getTotalPrice(inventory);
console.log(
  `It would cost $${totalCost?.toFixed(2)} to purchase everything in stock.`
);

const itemId = prompt("Enter the ID of an item:", "1");
console.log(`The item with id #${itemId} is:`);
console.log(getItemById(inventory, +itemId));

const itemName = prompt("Enter the name of an item:", "apple");
console.log(
  `The price of ${itemName} is ${getItemPriceByName(inventory, itemName)}.`
);

const category = prompt("Enter a category you would like to see:", "fruit");
console.log(`The items in the ${category} category are:`);
console.log(getItemsByCategory(inventory, category));
