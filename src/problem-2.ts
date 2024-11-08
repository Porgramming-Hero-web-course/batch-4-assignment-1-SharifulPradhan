{

  function removeDuplicates(arr: number[]): number[] {
    const uniqueNumbers = new Set<number>();
    return arr.filter(num => {
      if (!uniqueNumbers.has(num)) {
        uniqueNumbers.add(num);
        return true;
      }
      false;
    })
  }


  // Sample Input:
  const result = removeDuplicates([1, 2, 2, 3, 4, 4, 5])
  console.log(result)
  // Sample Output:
  // [1, 2, 3, 4, 5]

}