{
  function validateKeys<T extends object>(obj: T, keys: (keyof T)[]): boolean {
    return keys.reduce((acc, key) => acc && key in obj, true);
  }


  // Sample Input:
  const person = { name: "Alice", age: 25, email: "alice@example.com" };
  console.log(validateKeys(person, ["name", "age"]));

  // Sample Output: true;
}