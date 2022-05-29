let userInput: unknown;
let userName: string;

userInput = 3;
userInput = "Abhi";

if (typeof userInput === "string") {
  userInput = userName; // Difference between unknown and any is, unknown will not accept any other variable of a specific type, However, any will.
  // Point above need to be checked as it is contradicting the point above
}

function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code }; //This never function type means that processing will be abruptly stopped
  //due to some condition e.g. below here exception is thrown
}

generateError("Error Found", 500);
