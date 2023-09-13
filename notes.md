# **These are some notes**
---
#### variables
- [`let myVariable;`](#code) - creates a variable
- [`let myVariable = "Bob";`](#code) - creates and assigns a value
- Array veriable - [`let myVariable = [1,'Bob','Steve',10];`](#code) Refer to each member of the array like this: [`myVariable[0]`](#code), [`myVariable[1]`](#code), etc.
- Object - anything can be an object so [`let myVariable = document.querySelector('h1');`](#code)
- **Primitives**
    - string
    - number
    - boolean
    - null
    - undefined
- **Objects**
    - object literals
    - Arrays
    - Functions
    - Classes
    - ...basically everything that is not a primitive!

Different types of values use different delimeters to indicate where the value begins and ends.

**typeof** can be used to see what type a stored value is given by Javascript. See if you can identify the delimeters used for the different types of values:
[`typeof 42;`](#code)
[`typeof "abc";`](#code)
[`typeof true;`](#code)
[`typeof undefined;`](#code)
[`typeof null;`](#code)
[`typeof { a: 1 };`](#code)
[`typeof [1, 2, 3];`](#code)
[`typeof function hello() {};`](#code)

#### Coments 
- [`/* Everything in between is a comment. */`](#code)
- [`// This is a comment`](#code)