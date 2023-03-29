function arrayManipulation(array, operationCallback, filterCallback) {
    let manipulatedArray = array.map(operationCallback);
    let filteredArray = manipulatedArray.filter(filterCallback);
    return filteredArray;
  }
  
  let A = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  
  let Square = function(A) {
    return A * A;
  };
  
  let isGreaterThanTen = function(A) {
    return A > 10;
  };
  
  let result = arrayManipulation(A, Square, isGreaterThanTen);
  console.log(result);
  