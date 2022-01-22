console.log("Olá mundo ");


function returnEvenValues(array) {
    let contador =[];
    for(let i =0; i<array.length; i++) {
        if (array[i] % 2 == 0) {
            contador.push(array[i]);
        } else {
            console.log(`${array[i]} não é par!`)
        }
    }
    console.log(contador);
}

let array =[1,2,4,5,7,8];

returnEvenValues('esses são os numeros pares '+array);

