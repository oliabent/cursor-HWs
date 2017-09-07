

var form = document.createElement('form')
form.name = 'login';
form.action = 'google.com';


var input1 = document.createElement('input');
input1.type = 'text';
input1.name = 'username';

var input2 = document.createElement('input');
input2.type = 'text';
input2.name = 'date';

var input3 = document.createElement('input');
input3.type = 'text';
input3.name = 'age';

var input4 = document.createElement('input');
input4.type = 'submit';
input4.value = 'Validate Me';

input1.style.margin ="8px 4px 6px 0px"
input2.style.margin ="8px 4px 6px 0px"
input3.style.margin ="8px 4px 6px 0px"
input4.style.margin ="8px 4px 6px 0px"





form.appendChild (input1)
form.appendChild (input2)
form.appendChild (input3)
form.appendChild (input4)

var forms = document.body.appendChild(form);


function validateForm() {
    var x = input1.value;
     var y = input2.value;
      var z = input3.value;
    if ((x == "")|| (y == "") || (z == ""))  {
        alert("All fields must be filled out");
        return false;
    }
}

input4.addEventListener("click", validateForm);

  

// function loginNaN ()
// {
// 	var x = input1.value;
	
// 	}
