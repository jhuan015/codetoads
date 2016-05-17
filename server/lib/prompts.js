//easy, medium, hard, insane
module.exports.Easy = [
  'sum-of-multiples',
  'name-on-billboard',
  'printing-array-elements-with-comma-delimiters',
  'function-1-hello-world',
  'count-by-x',
  'stringy-strings',
  'convert-number-to-reversed-array-of-digits',
  'beginner-series-number-3-sum-of-numbers',
  'credit-card-mask',
  'binary-addition',
  'broken-greetings',
  'divisible-by-four',
  'unexpected-parsing',
  'stringy-strings',
  'sum-arrays',
  'convert-a-string-to-a-number',
  'the-coupon-code',
  'tricky-doubles',
  'sexy-primes-<3',
  'password-validator',
  'all-none-and-any',
];

module.exports.Medium = [
  'wheel-of-fortune',
  'special-multiples',
  'dna-sequence-tester',
  'i-love-big-nums-and-i-cannot-lie',
  'exes-and-ohs',
  'jaden-casing-strings',
  'is-n-divisible-by-dot-dot-dot',
  'remove-the-minimum',
  'unique-in-order',
  'longest-palindrome',
  'sum-of-pairs',
  'weird-string-case',
  'find-the-divisors',
  'x-marks-the-spot',
  'sum-consecutives',
  'your-order-please',
  'list-to-array',
  'moving-zeros-to-the-end',
];

module.exports.Hard = [
  'snail',
  'next-bigger-number-with-the-same-digits',
  'convert-string-to-camel-case',
  'valid-braces',
  'valid-parentheses',
  'first-n-prime-numbers',
  'last-digit-of-a-large-number',
  'feynmans-square-question',
  'did-i-finish-my-sudoku',
  'sum-strings-as-numbers',
  'pascals-triangle',
  'calculating-with-functions',
  'a-chain-adding-function',
  'guess-the-gifts',
  'moving-zeros-to-the-end',
  'merged-string-checker'
];

module.exports.Insane = [
  'can-you-get-the-loop',
  'molecule-to-atoms',
  'escape-the-mines',
  'alphabetic-anagrams',
  'help-the-general-decode-secret-enemy-messages'
];

module.exports.Debug = [
  'whats-wrong-with-these-identifiers',
  'is-this-my-tail',
  'squash-the-bugs',
  'string-templates-bug-fixing-number-5',
  'unfinished-loop-bug-fixing-number-1',
  'jennys-secret-message',
  'anonymous-returns',
  'number-tostring',
  '2-plus-2-star-2-problem',
  'multiply-characters',
  'multiply',
  'hoisting',
  'parse-integers-in-array',
  'inserting-multiple-strings-into-another-string',
  'fix-your-code-before-the-garden-dies',
];

module.exports.Typing = [
  'for (var i = 0; i<array.length; i++)',
  '`Hello, ${name}. Welcome to ${city}, ${country}!`',
  'var args = Array.prototype.slice.call(arguments);',
  "var exclaim = function(statement) { return statement.toUpperCase() + '!';}",
  'BlinkyDancer.prototype = Object.create(Dancer.prototype);',
  "var str = Object.keys(array).join('')",
  'const pipe = (...args) => args.reduce((final, arg) => (item) => arg(final(item)));'
];

module.exports.MultiQuestions = [
  {
    question: 'What kind of scoping does JavaScript use?',
    choices: ['Literal', 'Lexical', 'Segmental', 'Sequential'],
    answer: 'b',
    explanation: 'Like most modern programming languages, JavaScript uses lexical scoping. This means that functions are executed using the variable scope that was in effect when they were defined, not the variable scope that is in effect when they are invoked.',
    type: 'multichoice'
  },
  {
    question: 'What must be done in order to implement Lexical Scoping?',
    choices: ['Get the object', 'Dereference the current scope chain', 'Reference the current scope chain', 'one of the mentioned'],
    answer: 'c',
    explanation: 'In order to implement lexical scoping, the internal state of a JavaScript function object must include not only the code of the function but also a reference to the current scope chain.',
    type: 'multichoice'
  },
  {
    question: 'What is a closure?',
    choices: ['Function objects', 'Scope where function’s variables are resolved', 'All of the mentioned', 'None of the above'],
    answer: 'c',
    explanation: 'A combination of a function object and a scope (a set of variable bindings) in which the function’s variables are resolved is called a closure.',
    type: 'multichoice'
  },
  {
    question: 'Which of the following are examples of closures?',
    choices: ['Objects', 'Variables', 'Functions', 'All of the mentioned'],
    answer: 'd',
    explanation: 'Technically, all JavaScript functions are closures: they are objects, and they have a scope chain associated with them.',
    type: 'multichoice'
  },
  {
    question: 'What is the purpose of minifying JavaScript?',
    choices: ['To streamline the visits', 'To save the visits', 'Load the page faster', 'All of the mentioned'],
    answer: 'd',
    explanation: 'To ensure that our first-time visits are as streamlined as possible, we need to minify our JavaScript.',
    type: 'multichoice'
  },
  {
    question: 'What is the function of the parseInt() method?',
    choices: ['Parses a datatype and stores in an integer', 'Parses a string and returns an integer', 'Parses an integer and returns a string', 'None of the mentioned'],
    answer: 'b',
    explanation: 'The function parseInt() method parses a string and returns an integer.',
    type: 'multichoice'
  },
  {
    question: 'The localStorage and sessionStorage belongs to',
    choices: ['Window object', 'Element object', 'Hash object', 'DOM object'],
    answer: 'a',
    explanation: 'Technically, all JavaScript functions are closures: they are objects, and they have a scope chain associated with them.',
    type: 'multichoice'
  },
  {
    question: 'Consider the following code snippet :\nvar a = [1,2,3,4,5];\na.slice(0,3);',
    choices: ['Returns [1,2,3]', 'Returns [4,5]', 'Returns [1,2,3,4]', 'Returns [1,2,3,4,5]'],
    answer: 'a',
    explanation: 'The slice() method selects the elements starting at the given start argument, and ends at, but does not include, the given end argument.',
    type: 'multichoice'
  },
  {
    question: 'Consider the following code snippet :\nvar a = [];\na.unshift(1);\na.unshift(22);\na.shift();\na.unshift(3,[4,5]);\na.shift();\na.shift();\na.shift();\n',
    choices: ['1', '[4,5]', '[3,4,5]', 'Exception is thrown'],
    answer: 'a',
    explanation: 'The unshift() and shift() methods behave much like push() and pop(), except that they insert and remove elements from the beginning of an array rather than from the end. unshift() adds an element or elements to the beginning of the array, shifts the existing array elements up to higher indexes to make room, and returns the new length of the array. shift() removes and returns the first element of the array, shifting all subsequent elements down one place to occupy the newly vacant space at the start of the array.',
    type: 'multichoice'
  },
  {
    question: 'The primary purpose of the array map() function is that it',
    choices: ['Maps the elements of another array into itself', 'Passes each element of the array and returns the necessary mapped elements', 'Passes each element of the array on which it is invoked to the function you specify, and returns an array containing the values returned by that function.', 'None of the mentioned'],
    answer: 'c',
    explanation: 'The map() method passes each element of the array on which it is invoked to the functionyou specify, and returns an array containing the values returned by that function.',
    type: 'multichoice'
  },
  {
    question: 'The pop() method of the array does which of the following task ?',
    choices: ['Decrements the total length by 1', 'Increments the total length by 1', 'Prints the first element but no effect on the length', 'None of the above'],
    answer: 'a',
    explanation: 'Arrays have a pop() method (it works with push()) that reduces the length of an array by 1 but also returns the value of the deleted element.',
    type: 'multichoice'
  },
  {
    question: 'Consider the following snippet code\nvar string1 = ”123”;\nvar intvalue = 123;\nalert( string1 + intvalue );',
    choices: ['123246', '246', '123123', 'Exception'],
    answer: 'c',
    explanation: 'None.',
    type: 'multichoice'
  },
  {
    question: 'Which function among the following lets to register a function to be invoked repeatedly after a certain time?',
    choices: ['setTimeout()', 'setTotaltime()', 'setInterval()', 'None of the mentioned'],
    answer: 'c',
    explanation: 'setInterval() allow you to register a function to be invoked repeatedly after a specified amount of time has elapsed.',
    type: 'multichoice'
  },
  {
    question: 'The keyword or the property that you use to refer to an object through which they were invoked is',
    choices: ['from', 'to', 'this', 'object'],
    answer: 'c',
    explanation: 'The ‘this’ keyword is used to refer to the object through which the properties or methods were invoked. This use of ‘this’ is a fundamental characteristic of the methods of any class.',
    type: 'multichoice'
  },
  {
    question: 'If you have a function f and an object o, you can define a method named m of o with',
    choices: ['o.m=m.f;', 'o.m=f', 'o=f.m', 'o=f'],
    answer: 'a',
    explanation: "A method is nothing more than a JavaScript function that is stored in a property of an object. If you have a function f and an object o, you can define a method named m of o with the following line: o.m = f;",
    type: 'multichoice'
  },
  {
    question: "For the below mentioned code snippet:\nvar o = new Object();\nThe equivalent statement is:",
    choices: ['var o = Object();', 'var o;', 'var o= new Object;', 'Object o=new Object();'],
    answer: 'c',
    explanation: "You can always omit a pair of empty parentheses in a constructor invocation.",
    type: 'multichoice'
  },
  {
    question: "For the below mentioned code snippet:\nvar o = new Object();\nThe equivalent statement is:",
    choices: ['var o = Object();', 'var o;', 'var o= new Object;', 'Object o=new Object();'],
    answer: 'c',
    explanation: "You can always omit a pair of empty parentheses in a constructor invocation.",
    type: 'multichoice'
  },
  {
    question: "Consider the following code snippet:\nvar tensquared = (function(x) {return x*x;}(10));",
    choices: ['Yes, perfectly', 'Error', 'Exception will be thrown', 'Memory leak'],
    answer: 'a',
    explanation: "Function name is optional for functions defined as expressions. Function expressions are sometimes defined and immediately invoked.",
    type: 'multichoice'
  },
  {
    question: "Consider the following code snippet:\nvar grand_Total=eval('10*10+5');\nThe output for the above statement would be:",
    choices: ['10*10+5', '105 as a string', '105 as an integer value', 'Exception is thrown'],
    answer: 'c',
    explanation: "Even if the string value passed as a parameter to eval does represent a numeric value the use of eval() results in an error being generated.",
    type: 'multichoice'
  },
  {
    question: "JavaScript Code can be called by using",
    choices: ['RMI', 'Triggering Event', 'Preprocessor', 'Function/Method'],
    answer: 'd',
    explanation: "JavaScript code is as easy to be implemented and run. It can be called by using a function or a method.",
    type: 'multichoice'
  },
  {
    question: "The behavior of the instances present of a class inside a method is defined by",
    choices: ['Method', 'Classes', 'Interfaces', 'Classes and Interfaces'],
    answer: 'b',
    explanation: "The behavior of the instance of a class is defined by the class and is shared by all instances.",
    type: 'multichoice'
  },
  {
    question: "The type of a variable that is volatile is",
    choices: ['Volatile variable', 'Mutable variable', 'Immutable variable', 'Dynamic variable'],
    answer: 'b',
    explanation: "The variables whose values can be changed are called mutable variable types.",
    type: 'multichoice'
  },
  {
    question: "A hexadecimal literal begins with",
    choices: ['00', '0x', '0X', '0x and 0X'],
    answer: 'd',
    explanation: "Generally, X or x denotes hexadecimal values. So, any integer literal that begins with 0X or 0x denotes a hexadecimal number.",
    type: 'multichoice'
  },
];
