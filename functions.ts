function add(n1: number, n2: number) {
  return n1 + n2;
}

function printResult(result: number): void {
  console.log("Result is: " + result);
}

printResult(add(12, 13));

let combineValues: (a: number, b: number) => number; //Here you are creating a function type which will accept two values of type numbers and shall return a number
combineValues = add;
// combineValues = printResult;This is an error case because combineValues is a function type which can only accept two number values and return a number. However
// printResult is of a different type

//Function and their respective callbacks
//In function below, you have created a function which will accept two number values and will also accept third parameter
//as a callback function
function addAndHandle(n1: number, n2: number, cBack: (num: number) => void) {
  const result = n1 + n2;
  cBack(result);
}

addAndHandle(10, 21, (result) => {
  console.log("From Callback Fn " + result);
  //return result; you can use return here but it will not have any impact as you have already declared this function as void
});
