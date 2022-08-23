function convert() {
    let inputField = document.getElementById("humanAgeInput");
    let input = (inputField.value);

    let myAge = input;

    let earlyYears = 2;
    earlyYears = (earlyYears * 10.5);

    let laterYears = (myAge - 2);
    laterYears = (laterYears * 4);

    let myAgeInDogYears = (earlyYears + laterYears);

    console.log(myAgeInDogYears);

    if(!Number.isNaN(Number(myAgeInDogYears))){
        document.getElementById("myAgeInDogYears").innerHTML = (`Your dog is ${myAgeInDogYears} years old in dog years.`);
      }
      else
      {
        document.getElementById("myAgeInDogYears").innerHTML = (`Please enter a valid number.`);
      }
}