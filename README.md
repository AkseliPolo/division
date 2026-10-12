# division

A simple Node.js application that divides two numbers and validates its input,
with unit tests written using the [Jest](https://jestjs.io/) testing library.

## Structure

```
division/
├── __tests__/
│   └── calculator.test.js   # Jest tests
├── src/
│   ├── calculator.js        # divide(a, b) + input validation
│   └── index.js             # entry point
├── jest.config.js
└── package.json
```

## The function

`divide(a, b)` returns `a / b`, but throws first on invalid input:

| Case | Error |
| --- | --- |
| either argument is not a number | `TypeError: Both arguments must be numbers` |
| either argument is `NaN` | `TypeError: Arguments cannot be NaN` |
| divisor is `0` | `RangeError: Division by zero is not allowed` |

`NaN` needs its own check because `typeof NaN === "number"`, so it slips past
the first validation even though it cannot be used in a division.

## Usage

Install dependencies:

```
npm install
```

Run the application:

```
npm start
```

Output:

```
2
number
```

Run the tests:

```
npm test
```

## Tests

`__tests__/calculator.test.js` contains six tests: one positive case and five
invalid-input cases.

1. divides two valid numbers correctly
2. throws `TypeError` when the first argument is not a number
3. throws `TypeError` when the second argument is not a number
4. throws `TypeError` when an argument is `NaN`
5. throws `RangeError` when dividing by zero
6. throws `TypeError` when arguments are missing

## Notes

The project uses ES modules (`"type": "module"`). Jest runs ESM through Node's
VM modules flag, which is why the test script is:

```
node --experimental-vm-modules node_modules/jest/bin/jest.js
```
