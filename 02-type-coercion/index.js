if ([]) {
  console.log("true"); // Outputs "true"
}
// Explanation:
// All objects (including empty arrays []) are truthy.
// No coercion needed as there is no comparison.


console.log([] == true); // false
// Explanation:
// JavaScript tries to make both sides comparable:
// (1) [] → (array to string) → ""
// (2) "" → (string to number) → 0
// (3) true → (boolean to number) → 1
// Now compares: 0 == 1 → false


console.log([] === true); // false
// Explanation:
// No coercion due to strict equality check.
// Now compares: array vs boolean → false
// TS Error: This condition will always return 'false' since JavaScript compares objects by reference, not value.

//Bonus Tip: Always use === (strict equality) to avoid surprises!
