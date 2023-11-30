var totalAmount = document.getElementById("totalAmount").innerText;
var total= parseInt(totalAmount);

function handleDiposit(){
    var inputVal= document.getElementById("dipositInput").value;
    var dipositAmount= document.getElementById("dipositAmount").innerText ;
    var sum= parseInt(inputVal)+parseInt(dipositAmount);
    total+=sum;


    document.getElementById("dipositAmount").innerText =sum;
    document.getElementById("totalAmount").innerText = total;
    document.getElementById("dipositInput").value="";
}

function handleWithdraw() {

    var withdrawInput = document.getElementById("withdrawInput").value;
    var withdrawAmount= document.getElementById("withdrawAmount").innerText;

    var sum= parseInt(withdrawInput) + parseInt(withdrawAmount);
    total-=sum;

    document.getElementById("withdrawAmount").innerText =sum;
    document.getElementById("totalAmount").innerText = total;
    document.getElementById("withdrawInput").value="";

}