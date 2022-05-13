
function palindrome(str) {
   
    let regex = /[\W_]/g;
    
    let smallStr = str.toLowerCase().replace(regex, "");
    
    let reversed = smallStr.split("").reverse().join("");
   
    return reversed === smallStr;
    
}

palindrome('eye');
