/**
 * what to do? :
 after clicking Play Now button home screen will be hide and play ground screen will show;

 * step 1 : for hide home screen add a class in classlist that name  hidden
 *step 2 : for showing hidden playground screen, remove a class from classlist that name hidden
 */

/** 
function playNow(){
       //add a hidden class in home screen
       const homeSection = document.getElementById('home-screen');
       homeSection.classList.add('hidden');

       //remove hidden class from playground
       const playGroundSection = document.getElementById('play-ground');
       playGroundSection.classList.remove('hidden');

}

*/

function continueGame() {
        // generate random alphabet
        const alphabet = getARandomAlphabet();
        // console.log(alphabet);

        //set randomly generated alphabet to the screen (display show it);
        const currentAlphabetElement = document.getElementById('current-alphabet');
        currentAlphabetElement.innerText = alphabet;

        //set background color
        setKbdBgColor(alphabet);
        //remove background color
        // removeKbdBgColor(alphabet);
}

// same as working function help by utility.js common function;
function playNow() {
        hideElementById('home-screen');
        showElementById('play-ground');
        continueGame();
}