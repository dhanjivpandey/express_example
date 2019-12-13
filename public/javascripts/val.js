		 
		$(function() {
		  $('#createForm').validate({
        rules: {
            name : "required",
            email : "required"
        },
        messages : {
            name : "Required!",
            email : "Required!"
        },
         submitHandler: function(form){
         form.submit();
        }
        });
	 });