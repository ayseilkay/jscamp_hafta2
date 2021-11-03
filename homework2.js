// 1- JavaScript ile istediğiniz kadar sayı parametre gönderebileceğiniz bir fonksiyon yazınız. Bu fonksiyona gönderdiğiniz her sayı için çıktı olarak asal olup olmadığını yazınız. (Araştırma konusu : şart blokları : if )
// Örnek kullanım : findPrime(2,5,8,21, 13) findPrime(3,5)

function IsAPrimeNumber(number){

    if (number === 1)
    {
      return false;
    }
    else if(number === 2)
    {
      return true;
    }else
    {
      for(let i = 2; i < number; i++)
      {
        if(number % i === 0)
        {
          return false;
        }
      }
      return true;  
    }
  }

function findPrime(...numbers){
    let primeAndNotPrimeNumber=[]

    for(let i=0;i<numbers.length;i++){
       if(IsAPrimeNumber(numbers[i])){
        primeAndNotPrimeNumber.push(numbers[i] + " asal sayıdır")
       }
       else{
        primeAndNotPrimeNumber.push(numbers[i] + " asal sayı değildir.")
       }
    }
   
    return primeAndNotPrimeNumber;
}

console.log(findPrime(1,2,3,4,5,6,7,8,9,12,13,14,79))

/*****************************************************************************************************/

// 2- Parametre olarak girilen iki sayının arkadaş sayılar olup olmadığını bulan programı yazınız. (Arkadaş sayılar için google)

function friendsNumber(number1,number2){
    sumNumber1 = 0;
    sumNumber2 = 0;
    for(let i =1 ; i<number1;i++){
        if(number1 % i === 0){
          sumNumber1 += i;  
        }
    }
    for(let j=1 ; j< number2 ; j++){
        if(number2 % j === 0 ){
            sumNumber2 += j;
        }
    }
    if( sumNumber1 == number2 & sumNumber2 == number1){
        console.log(number1 + ' ve '+ number2 + ' arkadas sayilardir.')
    }
    else{
        console.log(number1 + ' ve '+ number2 + ' arkadas  sayi değildir.')
    }
}

friendsNumber(1184,1210)
/*****************************************************************************************************/

// 3- 1000'e kadarki tüm mükemmel sayıları listeleyen programı yazınız.

function perfectNumber(number){
   

   for(let i = 1 ; i< number ; i++ ){
       let sumPerfectNum = 0;
       for(let j=1 ; j<i; j++){
            if(i % j === 0){
                sumPerfectNum += j;
            }
       }
       if(i== sumPerfectNum){
           console.log(i + " mükemmel sayidir")
       }
   }
   
}
perfectNumber(1000)

/*****************************************************************************************************/

// 4- 1000'e kadarki tüm asal sayıları listeleyen programı yazınız.

function allPrimeNumbers(number){
    for( let i = 2 ; i< number ; i++){
        if(IsAPrimeNumber(i)){
           console.log(i + "asal sayıdır")
        }
    }
}

allPrimeNumbers(1000)