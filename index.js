function numExpression(str) {
  const numbers = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9
  };

  const operator = str.match(/(plus|minus|multiplication)/g);
  const splitNumber = str.split(operator[0]);

  const resultMap = splitNumber.map((number) => {
    return numbers[number];
  });

  let resultExpression;
  switch (operator[0]) {
    case 'plus':
      resultExpression = resultMap.reduce((acc, value) => {
        return acc + value;
      });
      break;

    case 'minus':
      resultExpression = resultMap.reduce((acc, value) => {
        return acc - value;
      });
      break;

    case 'multiplication':
      resultExpression = resultMap.reduce((acc, value) => {
        return acc * value;
      });
      break;
  }

  const expressionSplit = resultExpression.toString().split('');

  const convertExpression = expressionSplit.map((final) => {
    return Object.keys(numbers).find((key) => final == numbers[key]);
  });
  
  const expression = resultExpression < 0 ? 'negative' : '';
  return expression + convertExpression.join('');
}

console.log(numExpression('sevenplussix')); // onethree
console.log(numExpression('sevenminusnine')); // negativetwo
console.log(numExpression('sevenmultiplicationtwo')); // onefour
