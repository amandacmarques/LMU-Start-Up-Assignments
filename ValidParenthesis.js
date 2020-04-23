/**
 * @param {string} s The string of parenthesis to be broken up.
 * @return {boolean} Whether the string of parenthesis was balanced or not.
 */
var isValid = function(s) {
    let validChars = ['(','{','['];
    let splitStr = s.split("");
    let stack = [];
    let c;
    
    for (let i = 0; i < splitStr.length; i++) {
        if (validChars.includes(splitStr[i])) {
            stack.push(splitStr[i]);
        }
        
        if (stack.length == 0) {
            return false;
        }
        
        switch (splitStr[i]) 
        { 
        case ')':
            c = stack.pop(); 
            
            if (c == '{' || c == '[') {
                return false; 
            }
                
            break; 
  
        case '}':
            c = stack.pop();  
                
            if (c == '(' || c == '[') {
                return false; 
            }
                
            break; 
  
        case ']': 
            c = stack.pop();
                
            if (c == '(' || c == '{') {
                return false;
            }
            
            break; 
        } 
    } 

    return (stack.length == 0);
};
