# The significance of union and intersection types in Typescript

So I recently started a new course in Programming hero and there our first module was related to TypeScript. I learned the basic and advanced TypeScript. Today I want to share about the significance of union and intersection types in Typescript.

## What are Union Types?

Union types in TypeScript allow a variable to hold more than on type of value. In JavaScript, we're usually used to variables having only one type at a time, like a string or a number. But TypeScript adds this cool feature where a variable can have multiple types.

For example, let's say we have a variable `myCar` that can be a `string` or `number`. With a union type, we can easily do this by writing:

```typescript
let myCar: string | number;
myCar = 'Honda'; // ok
myCar = 2; // ok
```

The `|` symbol here means "or". So myCar can be a string or it can be a number. This is super helpful because sometimes we’re not sure what type of value a variable might hold.

## Why is it Useful?
Union types make our code more flexible and avoid some errors. For example, if we’re working with data that can come in multiple formats, we can use union types to accept any of those formats without causing errors. Imagine we’re making a function that takes either a string or a number as input. If we didn't have union types, we would have to make separate functions for each type, which can be a lot of extra work.

```typescript
function printValue(value: string | number) {
    console.log(value);
}

printValue("Hello, World!"); // OK
printValue(123); // OK
```

# What are Intersection Types?
Intersection types, on the other hand, combine multiple types into one. Instead of "either-or" like union types, intersection types are more like "and". With intersection types, we get all the properties from each type combined into one type.

For example, let’s say we have two types:

``` typescript
type Person = {
    name: string;
    age: number;
};

type Worker = {
    company: string;
};
```
## Conclusion
Union and Intersection types are powerful tools in TypeScript. They let us handle variables that can have different types and combine types in flexible ways. For beginners, it can be a bit confusing at first, but with practice, they make our code cleaner, safer, and more manageable. If you’re new to TypeScript, try using these types in your own projects to see how they make coding more flexible and enjoyable.
