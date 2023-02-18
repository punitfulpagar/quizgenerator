// const username = document.getElementById('username');
// const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');

// const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

// const MAX_HIGH_SCORES = 5;

finalScore.innerText = mostRecentScore;

// if(mostRecentScore>60)
// {
//   funText.innerText = `Waah Bete Waah Tumne To Mauj Kardi`;
// }
// else if(mostRecentScore>30)
// {
//   funText.innerText = `Agli Baar Fod Denge Vro`;
// }
// else{
//   funText.innerText = `Tumse Naa Ho Paayega`;
// }



function GeeksForGeeks() {
    $("#AddButton").text('Copied!');
    
    /* Get the text field */
    var copyGfGText = document.getElementById("GfGInput");
    
    /* Select the text field */
    copyGfGText.select();
    
    /* Copy the text inside the text field */
    document.execCommand("copy");
    
    /* Alert the copied text */
    // alert("Copied the text: " + copyGfGText.value);

    setTimeout(function(){ $("#AddButton").text('Copy Link'); }, 3000);
    }

    
    $(document).ready(function(){
        $('[data-toggle="tooltip"]').tooltip();   
      }); 

      
// saveHighScore = (e) => {
//     e.preventDefault();

//     const score = {
//         score: mostRecentScore,
//         name: username.value,
//     };
//     highScores.push(score);
//     highScores.sort((a, b) => b.score - a.score);
//     highScores.splice(5);

//     localStorage.setItem('highScores', JSON.stringify(highScores));
//     window.location.assign('/');
// };


