

    document.getElementById("multiply").addEventListener("click",function (){multiplyTwo()});
    document.getElementById("divide").addEventListener("click",function(){divideTwo()});


function multiplyTwo(){
    var a = document.getElementById("a").value;
    var b = document.getElementById("b").value;
    var sum = a * b;
    document.getElementById("display").innerHTML= String(sum);

}
function divideTwo(){
    var a = document.getElementById("a").value;
    var b = document.getElementById("b").value;
    var remains= a / b;
    document.getElementById("display").innerHTML = String(remains);

}
