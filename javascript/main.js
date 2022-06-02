function validate()
{
  var phoneNumber = document.getElementById('campotelefono').value;
  var mailText= document.getElementById('campocorreo').value;
  var phoneRGEX = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;
  var mailRGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  var phoneResult = phoneRGEX.test(phoneNumber);
  var mailResult = mailRGEX.test(mailText);
  if(phoneResult == false)
  {
    alert('Please enter a valid phone number');
    return false;
  }

  if(mailResult == false)
  {
    alert('Please enter a valid email');
    return false;
  }

  return true;
}


