function log(){
   var player1name=document.getElementById("us1").value;
   var play2Name=document.getElementById("us2").value;
   localStorage.setItem("play1",player1name);
   localStorage.setItem("play2",play2Name);
   window.location="game_page.html";
}