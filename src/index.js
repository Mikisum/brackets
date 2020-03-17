module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 != 0) 
    return false;
  
  for (let i = 0; i < bracketsConfig.length;) {
    let pair = bracketsConfig[i].join('');
      if (str.includes(pair)) {
        str = str.replace(pair,'');
        i = 0;
      }
      else {
        i++
      }  
    }
    return (str.length === 0);
  }


