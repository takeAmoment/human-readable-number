module.exports = function toReadable (number) {
  
    let oneNumber = ['zero', 'one', 'two', 'three', 'four', 'five',
    'six', 'seven', 'eight', 'nine'];
    let twoNumbers = ['ten','eleven', 'twelve', 'thirteen', 'fourteen',
    'fifteen', 'sixteen','seventeen', 'eighteen', 'nineteen'];
    let threeNumbers = ['', '', 'twenty', 'thirty', 'forty', 'fifty',
    'sixty', 'seventy', 'eighty', 'ninety'];
    let newArr = [];
  
    let arr = number.toString().split('');

    let loopCount = arr.length;
    for(let i = 0; i < loopCount ; i++){
      if( arr.length === 3){
        newArr.push(oneNumber[arr[0]] + ' hundred');
        arr.shift();
      } else if(arr.length === 2){
          if(arr[0] === '1') {
            newArr.push(twoNumbers[arr[1]]);
            break;
          } else if (arr[0] === '0') {
            // newArr.push('');
            arr.shift();
          } else {
            newArr.push(threeNumbers[arr[0]]);
            arr.shift();
          }
  
      } else if (arr.length === 1){
        if(arr[0] === "0" && loopCount > 1){
          newArr.push('');
        } else{
          newArr.push(oneNumber[arr[0]]);
        }
     }
    }
    return newArr.join(' ').trim();
}

