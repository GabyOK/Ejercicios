function HasBalancedBrackets (string) {
  // Your code here:
  const validBrackets ={
    "{": "}",
    "(": ")",
    "[": "]",
  };
  const openedBrackets =[];

  for(bracket of string){
    if(validBrackets.hasOwnProperty(bracket)){
      openedBrackets.push(bracket);
    }else if(validBrackets[openedBrackets.pop()]!== bracket)return false;

    }
    return !openedBrackets.length;
  }



module.exports = HasBalancedBrackets
