module.exports = function reverse (n) {
    let numberEnd = 0 ;
    let result = 0 ;
    let result2 = 0 ;
 
    function reverseWhile (n){
    while(n){
        numberEnd = n % 10 
        result = (result * 10) + numberEnd  
        n = n/10|0  
        console.log(n)
    }   
      return result
    }
    if(n > 0){
        return reverseWhile(n)
    }else if(n < 0) {      
        return reverseWhile(n) * -1
    }
}



  

