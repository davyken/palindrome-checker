function palindromeTest (str) {
  const strArr = str.split(' ').join('')
  let s = strArr.length - 1
  for (let i = 0; i < s / 2; i++) {
    if (strArr[i] !== strArr[s]) {
      return false
    }
    s--
  }
  return true
}

function checkPalindrome () {
  
  const pali = document.getElementById('text-area').value
  
  const isPalindrome = palindromeTest(pali)
  const E = document.getElementById('result')
  
  if (isPalindrome) {
    E.innerHTML = 'Correct, It is a  palindrome'
  } else {
    E.innerHTML = 'Sorry, it is not palindrome'
  }
}
if (onclick) {
  checkPalindrome()
}
