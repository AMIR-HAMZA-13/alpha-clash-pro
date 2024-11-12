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

//keyboard phess working with call back function
function handleKeyboardPressEvent(event) {
        const playerPressed = event.key;
        //        console.log('player press this button', playerPressed);

        //for stop the game if pressed Esc button
        if (playerPressed === 'Escape') {
                gameOver();
        }

        // get the expected to press
        const currentAlphabetElement = document.getElementById('current-alphabet');
        const currentAlphabet = currentAlphabetElement.innerText; //current alphabet id er moddome inner text ti pawa dom er vitor theke kono upadan dhore ana
        const expectedAlphabet = currentAlphabet.toLowerCase(); // alphabet convert to lowercase
        //        console.log(playerPressed, expectedAlphabet);


        if (playerPressed === expectedAlphabet) {
                const currentScore = getTextElementValueById('current-score');
                const updatedScore = currentScore + 1;
                setTextElementValueById('current-score', updatedScore);

                removeKbdBgColor(expectedAlphabet);
                continueGame()
        }
        else {
                const currentLife = getTextElementValueById('current-life');
                const updatedLife = currentLife - 1;
                setTextElementValueById('current-life', updatedLife);

                // life 0 and then game over and hide this page and show score page
                if (updatedLife === 0) {
                        gameOver();
                }
        }


        /** 
                //check matched or not
                if (playerPressed === expectedAlphabet) {
                        
                         * niser function take amra ekta common function make kore tar por same kajtay korte pari bar bar repate na kore
                         
        
                        // console.log('You got a Point')
        
                        //update score
                        // 1 . get the current score
                        const currentScoreElement = document.getElementById('current-score');
                        const currentScoreValue = currentScoreElement.innerText;
                        const currentScore = parseInt(currentScoreValue);
                        console.log(currentScore);
                        // 2 . increase the score by 1
                        const newScore = currentScore + 1;
        
                        // 3 . show the update score
                        currentScoreElement.innerText = newScore;
        
                        //start a new round
                        removeKbdBgColor(expectedAlphabet);
                        continueGame();
                }
                else {
                       /**
                        * write a common function and use this function sortly
                        
        
                         console.log('You missed. You lost a life');
                        // step-1 : get the current Life number
                        const currentLifeElement = document.getElementById('current-life');
                        const currentLifeText = currentLifeElement.innerText;
                        const currentLife = parseInt(currentLifeText);
        
                        // stet -2 : reduce the life count 
                        const newLife = currentLife - 1;
        
                        // step -3 : display the update life count
                        currentLifeElement.innerText = newLife;
        
                        
        
                }
                */
}
//capture keyboard key press
document.addEventListener('keyup', handleKeyboardPressEvent);




//continue gamme start and get random alphabet
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
        hideElementById('home-screen');//hide home screen
        hideElementById('final-score');//when click play again hide final score screen
        showElementById('play-ground');//show play ground Screen click playNow and playAgain button
        setTextElementValueById('current-life', 5);// after clicking playAgain life 5 
        setTextElementValueById('current-score', 0);//after clicking playAgain score 0
        continueGame();//game continue
}
//game over function and hide play ground page and show final score page
function gameOver() {
        hideElementById('play-ground');//when life 0 hide play ground screen
        showElementById('final-score');//when life 0 show final score screen
        const generateScore = getTextElementValueById('current-score');//update final score
        setTextElementValueById('generate-score', generateScore);// set generate score in final score screen
        const currentAlphabet = getElementTextById('current-alphabet');//get current alphabet by id for removing background help by common function
        removeKbdBgColor(currentAlphabet);//remove alphabet background color help by common function

} 