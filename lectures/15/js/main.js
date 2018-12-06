


var balance=document.getElementById("balance");
var myBalance=500;

function init() {

    var title=document.getElementById("title");
    title.innerHTML="Rao Ammar";


    balance.innerHTML=myBalance;

    var currency=document.getElementById("currency");
    currency.innerHTML="pkrs";

    var iban_my=document.getElementById("IBAN");
    iban_my.innerHTML="0303-0498441";

}
function takeInput(btn)
{
    if(btn.key=="Enter")
    {
        var newValue=document.getElementById("deposit").value;
        if (!isNaN(newValue))
        {
            myBalance+=parseInt(newValue);
            balance.innerText=myBalance;
            var transection=document.getElementById("transaction-table");
            transection.innerHTML+=

                '<tr>'+
                '<th align="left" valign="middle" scope="col">'+new Date()+'</th>'+
                '<th align="left" valign="middle" scope="col">'+"widthdraw"+'</th>'+
                '<th align="left" valign="middle" scope="col">'+newValue+'</th>'+
                '</tr>';




            
        }
        else
        {
            document.getElementById("deposit-msg").innerText="Enter a valid ammount";
        }


    }
}

function takeInput2(btn)
{
    if(btn.key=="Enter")
    {
        var newValue=document.getElementById("withdraw").value;
        if (!isNaN(newValue)&&myBalance>=newValue)
        {
            myBalance-=parseInt(newValue);
            balance.innerText=myBalance;
            var transection=document.getElementById("transaction-table");
            transection.innerHTML+=
                '<tr>'+
            '<th align="left" valign="middle" scope="col">'+new Date()+'</th>'+
            '<th align="left" valign="middle" scope="col">'+"widthdraw"+'</th>'+
            '<th align="left" valign="middle" scope="col">'+newValue+'</th>'+
            '</tr>';
        }
        else
        {
            document.getElementById("withdraw-msg").innerText="dont have sufficient ammount";
        }


    }
}




/*i call my functions here*/

init();