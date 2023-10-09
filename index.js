function isPalindrome(str) {
  const cleanedStr = str.replace(/[^a-zA-Z]/g, "").toLowerCase();
b  const reversedStr = cleanedStr.split("").reverse().join("");
  return cleanedStr === reversedStr;
}

// Test cases
console.log(isPalindrome("madam")); // true
console.log(isPalindrome("robot")); // false
console.log(isPalindrome("A man, a plan, a canal, Panama")); // true
console.log(isPalindrome("Was it a car or a cat I saw?")); // true
console.log(isPalindrome("No lemon, no melon")); // true
