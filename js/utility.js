// utility js function file e sadharonto common function gula likha hoy jekhankar common function bar bar use kora jay;

//add hidden class in home screen section
function hideElementById(elementId) {
        const element = document.getElementById(elementId);
        element.classList.add('hidden');
}

//remove hidden class from the playground section
function showElementById(elementId) {
        const element = document.getElementById(elementId);
        element.classList.remove('hidden');
}

//common function for kbd bg color add
function setKbdBgColor(elementId) {
        const element = document.getElementById(elementId);
        element.classList.add('bg-orange-400');
}

//common function for kbd bg color remove
function removeKbdBgColor(elementId){
        const element = document.getElementById(elementId);
        element.classList.remove('bg-orange-400');
}

/** 

//note : Math.random(); dile by defalt vabe 0 thek 1 er modde random number dey,, and se number hoy fraction mane vongnasho number,, Math.random()*25 ; dile sorbosso 25 er modde kar random number dibe,,  ja vongnanghso,, Math.random()*25 er paramitter ke jodi round kore deya jay tahole ta 0 theke 25 er modde kar purno number dibe;

// get a random alphabet function
function getARandomAlphabet() {
        //get or create an alphabet array
        const alphabetsString = 'abcdefghijklmnopqrstuvwxyz';// set all alphabet in a string
        const alphabets = alphabetsString.split('');//get any alphabet and convert string to array;valo
        //     console.log(alphabet)

        //get a random index between 0-25
        const randomNumber = Math.random() * 25; // set alphabet by index
        const index = Math.round(randomNumber);//convert random full number by Math.round
        //        console.log(index)

        // set index number with alphabet
        const alphabet = alphabets[index];
        // console.log(index, alphabet)
        return alphabet;
}

*/

//generate a random alphabet
function getARandomAlphabet() {
        const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
        const alphabets = alphabetString.split('');

        const randomNumber = Math.random() * 25;
        const index = Math.round(randomNumber);
        const alphabet = alphabets[index];
        return alphabet;
}