// Step 1: Basic synchronous logs
console.log("A");
console.log("B");
console.log("C");

// Step 2: setTimeout with 0ms delay
console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 0);

console.log("End");

// Step 3: Promise.resolve() with .then()
console.log("Start");

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("End");

// Step 5: Async function with await
async function test() {
  console.log("1");
  await Promise.resolve();
  console.log("2");
}

console.log("3");
test();
console.log("4");

// Step 6: Predict the output
console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);

Promise.resolve().then(() => {
  console.log("C");
});

console.log("D");
