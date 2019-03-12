1. // isPrime - Returns true or false, indicating whether the given number is prime.

isPrime = (number) => {
  for(var i = 2; i < number; i++) {
  	if(number % i === 0) return false;
  }
  if ( number !== 1 && number !== 0 ) {
  	return true;
  }

  return false;
}


2. // factorial - Returns a number that is the factorial of the given number.


factorial = (number) => {
	if (number == 0) return 1;
	else {
	return number*factorial(number-1)
	}
}

factorial(5) == (return 5 * (return 4 * (return 3 * (return 2 * (return 1 * (return 1)))));

3. // fib - Returns the nth Fibonacci number.

fib = (number) => {
	for(var i = 2; i <= number; i++){
		return fib(number-1)+fib(number-2);
	}
	if (number == 0 || number == 1) return number;
}

4. // isSorted - Returns true or false, indicating whether the given array of numbers is sorted.

isSorted = (array) => {
	for(var i = 0; i < array.length-1; i++){
		if (array[i]>array[i+1]) {
		return false;
		}
	}
	return true;
}


5. // reverse - Reverses the given string (yes, using the built in reverse function is cheating).

 reverse = (str) => {
    var newStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newStr += str[i];
    }
    return newStr;
}
reverse('hello');


6. //indexOf - Implement the indexOf function for arrays.

indexOf = (array,el) => {
	for(var i=0; i < array.length-1; i++){
		if (array[i] == el){
			return i;
		}
	}

	return -1;
}


7. // isPalindrome - Return true or false indicating whether the given string is a plaindrone (case and space insensitive).

isPalindrome = (string) => {

    var len = string.length;
    var mid = Math.floor(len/2);

    for ( var i = 0; i < mid; i++ ) {
        if (string[i] !== string[len - 1 - i]) {
            return false;
        }
    }

    return true;
}


8. // missing - Takes an unsorted array of unique numbers (ie. no repeats) from 1 through some number n, and returns the missing number in the sequence (there are either no missing numbers, or exactly one missing number). Can you do it in O(N) time? Hint: There’s a clever formula you can use.

missing = (array) => {
	array.sort(function(a, b) {
		return a - b;
	});
	for (var i = 1; i < array.length; i++) {
		if (i !== array[i - 1]) {
			return i; 
		}
	}
	return;
}


9. // isBalanced - Takes a string and returns true or false indicating whether its curly braces are balanced.

"hello { ms } [ dsf"

isBalanced = (string) => {
  var parentheses = "[]{}()",
    stack = [],
    i, character, bracePosition;

  for(i = 0; character = string[i]; i++) {
    bracePosition = parentheses.indexOf(character);

    if(bracePosition === -1) {
      continue;
    }

    if(bracePosition % 2 === 0) {
      stack.push(bracePosition + 1); // push next expected brace position
    } else {
      if(stack.length === 0 || stack.pop() !== bracePosition) {
        return false;
      }
    }
  }

  return stack.length === 0;
}