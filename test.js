var myForm = document.forms.myForm;
var message = document.getElementById("message"); 

myForm.onsubmit = function(){
    
    if(myForm.name.value==""){
        messsage.innerHTML="you have to enter a name";
        return false;
    }else{
        message.innerHTML = "";
        return true;
    }
}