var player1=localStorage.getItem("p1")
var player2=localStorage.getItem("p2")
var score=localStorage.getItem("score")
document.getElementById("player1_name").innerHTML=player1
document.getElementById("player2_name").innerHTML=player2
document.getElementById("player1_score").innerHTML=score
document.getElementById("player2_score").innerHTML=score
document.getElementById("player_question").innerHTML="question turn"+player1
document.getElementById("player_answer").innerHTML="answer turn"+player2
fuction send(){
    var getw=document.getElementById("word").value
    var getwl=getw.toLowerCase()
    console.log(getwl)
    var pos1=getwl.charAt(1)
    console.log(pos1)
    var pos2=getwl.charAt(Math.floor((getwl.length/2)))
    console.log(pos2)
    var pos3=getwl.charAt(getwl.length-1)
    console.log(pos3)
    var replace1=getwl.replace(pos1,"_")
    var replace2=replace1.replace(pos2,"_")
    var replace3=replace2.replace(pos3,"_")
    var question = "<h4 id='word_display'>Q." + replace3+ "</h4>" 
    var answer = "<br><br><input type='text' placeholder='answer'>" 
    var check = "<br><br><button id='check' onclick='send' class='btn btn-info'>Check</button>" 
    var row = question + answer + check;
    document.getElementById("output").innerHTML = row; 
    document.getElementById("word").value = "";
}