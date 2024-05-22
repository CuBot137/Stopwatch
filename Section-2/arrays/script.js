let x;
const numbers = [12,234,65,123,1]
numbers.push(100)
numbers.pop();

// numbers.unshift(99)
// numbers.shift()
// numbers.reverse()

x = numbers.includes(12)
x = numbers.indexOf(234)

// x = numbers.slice(1,4)
// x = numbers.splice(1,4)
x = numbers.splice(1,4).reverse();

console.log(numbers)
console.log(x)