var play1Name=localStorage.getItem("play1");
var play2name=localStorage.getItem("play2");
var play1score=0;
var play2score=0;
document.getElementById("playe1").innerHTML=play1Name+" : ";
document.getElementById("playe2").innerHTML=play2name+" : ";
document.getElementById("pscore1").innerHTML=play1score;
document.getElementById("pscore2").innerHTML=play2score;
document.getElementById("playQ").innerHTML="Question Turn - "+play1Name;
document.getElementById("ans").innerHTML="Answer Turn - "+play2name;

function se(){
   var getWord=document.getElementById("word").value;
   var word=getWord.toLowerCase();
   console.log(word);

   var alpha1=word.charAt(1);
   console.log(alpha1);

   var length_Divide=Math.floor(word.length/2);
   var alpha2=word.charAt(length_Divide);
   console.log(alpha2);

   var lenght_minus=word.length-1;
   var alpha3=word.charAt(lenght_minus);
   console.log(alpha3);

   var remove_alpha1=word.replace(alpha1,"_");
   var remove_alpha2=remove_alpha1.replace(alpha2,"_");
   var remove_alpha3=remove_alpha2.replace(alpha3,"_");
   console.log(remove_alpha3);

   var qword="<h4 id='word_display'>Q. "+remove_alpha3+"</h4>";
   var input_bx="<br>Answer : <input type='text' id='answer'>";
   var check_button="<br><br><button class='btn btn-info' onclick='check()' >Check</button>";
   var row=qword+input_bx+check_button;
   document.getElementById("output").innerHTML=row;
   document.getElementById("word").value="";
}

var questurn="player1";
var ansturn="player2";

function check(){
   var answer1=document.getElementById("answer").value;
   var ans=answer1.toLowerCase();
   console.log(ans);
   if(ans == word){
      if(ansturn=="player1"){
         play1score=play1score+1;
         document.getElementById("pscore1").innerHTML=play1score;  
      }
      else{
         play2score=play2score+1;
         document.getElementById("pscore2").innerHTML=play2score;
      }

   }
   if(questurn=="player1"){
      questurn="player2";
      document.getElementById("playQ").innerHTML="Question Turn - "+play2name;
   }
   else{
      questurn="player1";
      document.getElementById("playQ").innerHTML="Question Turn - "+play1Name;

   }
   if(ansturn=="player1"){
      ansturn="player2";
      document.getElementById("ans").innerHTML="Answer Turn - "+play2name;
   }
   else{
     ansturn="player1";
     document.getElementById("ans").innerHTML="Answer Turn - "+play1Name;
   }
   document.getElementById("output").innerHTML="";
}