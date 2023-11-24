
function calAge () {
    const daysInYear = 365.25;
    let age = document.querySelector('#input').value;
    let ageInDays = age * daysInYear ;

    // Answer
    document.querySelector('#answer').innerHTML = `There are ${ageInDays} days in ${age} years. `;
    
}
calAge();

    let btnCal = document.querySelector('#convert');
    btnCal.addEventListener('click', calAge);


    function reset(){
let clear = document.getElementById('ageInDays').value = ' ';

}
document.getElementById('clear').addEventListener('click', reset);

