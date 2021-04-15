
//function that display value
function addval(val){
    document.getElementById("result").value += val
}

//function that evaluates the digit and return result
function solve(){
    let x = document.getElementById("result").value
    let y = eval(x)
    document.getElementById("result").value = y
}

//function that clear the display
function cls(){
    document.getElementById("result").value = ""
}