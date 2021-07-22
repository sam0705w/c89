var score=0
function update(){
    score= score+1

}
function save(){
    localStorage.setItem("score",score)
}
function next(){
    window.location="activity2.html"
}