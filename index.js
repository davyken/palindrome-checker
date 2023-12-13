function palindromeTest(str) {

    let l = str.length - 1


    for (let i = 0; i < l / 2; i++) {


        if (str[i] !== str[l]) {
            return false
        }
        l--
    }
    return true
}
function checkPalindrome() {
    const pali = document.getElementById('text-area').value
    const Ispalindrome = palindromeTest(pali)
    const E = document.getElementById('result')
    if (Ispalindrome) {
        E.innerHTML = 'Correct, it is a Palindrome !'
    } else {
        E.innerHTML = 'Sorry, it is not a Palindrome !'
    }
}
checkPalindrome()
