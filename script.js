function cal() {
    var a=parseInt(document.getElementById('b1').value);
    var b=parseInt(document.getElementById('b2').value);
    var c=parseInt(document.getElementById('b3').value);
    var d=parseInt(document.getElementById('b4').value);
    var e=parseInt(document.getElementById('b5').value);
    console.log(a, b);
    if (a>100 || b>100 || c>100 || d>100 || e>100) {
        alert("please enter correct value");
    }
    else
    {
        var obtained= a+b+c+d+e;
        document.getElementById('ob').innerHTML=obtained;
        var per = obtained/500*100;
        document.getElementById('per').innerHTML=String(per)+"%";

        if (a>=38 && b>=38 && c>=38 && d>=38 && e>=38) {
            document.getElementById("re").innerHTML="Pass";
        }
        else {
            document.getElementById("re").innerHTML="Fail";
        }

    }


}