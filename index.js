var readlineSync = require("readline-sync");
var score = 0;

question1 = {
  question: "Who's the CEO of Axe Capital? ",
  answer: "Bobby"
};

question2 = {
  question: "Who shorts Tesla? ",
  answer: "Mason"
};

question3 = {
  question: "Which band appeared in the show? ",
  answer: "Metallica"
};

question4 = {
  question: "Which shark gave the adivce to Bobby? ",
  answer: "Mark Cuban"
};

function quiz(question,answer)
{
  var userAns = readlineSync.question(question);
  if (userAns == answer)
{
  console.log("You're absolutely right!");
  score = score+1;
  console.log("Your score after this question " + score);
}
else
{
  console.log("Sorry, You're wrong")
}

}
var play = [question1,question2,question3,question4];

for(var i = 0; i < play.length; i++)
{
  var currentquestion = play[i];
  quiz(currentquestion.question,currentquestion.answer);
}

console.log("Your final score is "+ score);

var highscores = [{
  name: "Viral",
  score: 3
},{
  name: "Sachin",
  score: 2
}];

if(highscores[1].score>score)
{
  console.log("The high scores at the moment are " + highscores[0].score  + "and" + highscores[1].score)
}
else if((highscores[0].score>score))
{
  console.log("The high scores at the moment are " + highscores[0].score + "and" + highscores[1].score)
}
else
{
  console.log("Your score is the highest. Please send us a screenshot");

}