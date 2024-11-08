{

function sumArray(numbers: number[]):number {
  return numbers.reduce((acc, curr) => acc + curr, 0)
}

const result = sumArray([1, 2, 3, 4, 5]);
console.log(result) // output 15

}

