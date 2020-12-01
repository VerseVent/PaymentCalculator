function counter() {
    var people, check;
    people=document.getElementById("people").value;
    check=document.getElementById("check").value;
    var result=check/people;
    document.getElementById("result").innerHTML=result;
}
