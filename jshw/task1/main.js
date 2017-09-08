

var form = document.createElement('form')
form.name = 'login';
form.action = 'google.com';
form.id = 'validateForm';

var input1 = document.createElement('input');
input1.type = 'text';
input1.name = 'username';
input1.placeholder = 'username';


var input2 = document.createElement('input');
input2.type = 'text';
input2.name = 'date';
input2.placeholder = 'DD.MM.YYYY';

var input3 = document.createElement('input');
input3.type = 'text';
input3.name = 'age';
input3.placeholder = 'age';

var input4 = document.createElement('input');
input4.type = 'submit';
input4.value = 'Validate Me';

input1.style.margin ="8px 20px 6px 0px"
input2.style.margin ="8px 20px 6px 0px"
input3.style.margin ="8px 20px 6px 0px"
input4.style.margin ="8px 20px 6px 0px"


var div1 = document.createElement('div');
var div2 = document.createElement('div');
var div3 = document.createElement('div');
var div4 = document.createElement('div');



form.appendChild(div1);
form.appendChild(div2);
form.appendChild(div3);
form.appendChild(div4);

div1.appendChild(input1);
div2.appendChild(input2);
div3.appendChild(input3);
div4.appendChild(input4);



var forms = document.body.appendChild(form);

jQuery.validator.addMethod("domain", function(value, element) {
  return this.optional(element) || /user_/.test(value);
}, 'Username should start from "user_" ');


$(function() {
   
	$("#validateForm").validate({

		rules: {
			username:{
				required: true,
				domain: true
			},

			date:{
				required: true,
				date: true

			},

			age:{
				required: true,
				digits: true
			}
		}

	});


});

