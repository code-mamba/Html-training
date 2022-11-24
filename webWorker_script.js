function hard(){
    var worker = new Worker("fact.js")
    worker.onmessage = function(event){
        alert("Number of iteration is :"+event.data+" Iterations")
    }

}
function simple(){
    alert("Hey hi")
}  