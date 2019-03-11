var butForm=$('#butForm');
var name1=$('#name1');
var email=$('#email');
var message=$('#message');
butForm.on('click',function(){

  if(name1.val()==""||email.val()==""||message.val()=="")
  {
    alert("Can't send empty form!");
  }
  else
  {
    alert("Data sent");
    //alert(name1.value);alert(email.value);alert(message.value);
  }
});