function generateTable()
{

  // Use parseInt function to convert to int
  var xFirst = parseInt(document.getElementById('row-first').value);
  var xLast = parseInt(document.getElementById('row-last').value);
  var yFirst = parseInt(document.getElementById('col-first').value);
  var yLast = parseInt(document.getElementById('col-last').value);
  var table = document.getElementsByClassName("table");

  // Check if input was entered out of order and swap accordingly
  if(xFirst > xLast)
  {

    var temp = xFirst;
    var temp2 = xLast;
    xFirst = temp2;
    xLast = temp;

  }

  if(yFirst > yLast)
  {

    var temp = yFirst;
    var temp2 = yLast;
    yFirst = temp2;
    yLast = temp;

  }

  var tableHTML = "<thead> <tr> <th> </th>"   // 0,0 cell blank to properly align
  // Initialize the horizontal axis bounds by looping through range and forming
  // The table html via a string variable
  for (var i = xFirst; i <= xLast ;i++) 
  {
    tableHTML += "<th>" + i + "</th>";
  }

  tableHTML += "</tr> </thead> <tbody> ";  // End first row

// Nested for loop to initalize verticle range and row data for each value
  for(var j = yFirst; j <= yLast; j++)
  {

    tableHTML += "<tr> <th scope=\"row\">" + j + "</td>";
    for(var i = xFirst; i <= xLast; i++)
    {
      tableHTML += "<td>" + j*i + "</td>";
    }

    tableHTML += "</tr>";
  }

  tableHTML += "<tbody";
  table[0].innerHTML = tableHTML; // Need to index table due to getElementByClass

}

// When document is fully loaded, select the form by id and trigger the validate with specified rules
$(document).ready(function()
{

    // Learned about this from this link: https://stackoverflow.com/questions/41779800/jquery-validate-validate-one-field-at-a-time
    // This prevents every field getting an error message while still allowing disabling and enabling the submit button
    $('#inputForm').on('blur keyup', function () // Fires on every blur
    { 
        if ($('#inputForm').validate().checkForm()) // Checks form for validity but doesnt trigger error messages
        {  
              $('#submitButton').prop('disabled', false);   // Setting button attribute "disabled" to false will enable the button
        }
        else {
              $('#submitButton').prop('disabled', true);   // Disables button
        }
    });

    // Define what rules should be applied to the form fields
  	$( "#inputForm" ).validate({
      	 rules:{

             rowFirst:{
               required: true,
               checkFloat: true,
               checkRange: true
             },

            rowLast:{
                required: true,
                checkFloat: true,
                checkRange: true
            },

          	colFirst:{
                required: true,
                checkFloat: true,
                checkRange: true
          	},

            colLast:{
                required: true,
                checkFloat: true,
                checkRange: true
            }
      	},

        // Custom error message based on error
  	   messages: {

             rowFirst:{
                 required:"Both bounds required.",
                 number: "Please enter a valid integer."
             },

            rowLast:{
                required: "Both bounds required.",
                number: "Please enter a valid integer."
            },

           colFirst:{
               required: "Both bounds required.",
               number: "Please enter a valid integer."
           },

            colLast:{
               required: "Both bounds required.",
               number: "Please enter a valid integer."
            }
  	   }
	});

  $('#submitButton').click(generateTable);

});

jQuery.validator.addMethod("checkFloat", function(value, element) {
    return this.optional(element) || (Number.isInteger(parseFloat(value)));
}, "Floats are not supported, please enter integers only.");

// Custom rule to ensure the range entered does not crash website
jQuery.validator.addMethod("checkRange", function(value, element) {
    return this.optional(element) || (-500 <= value)&& (value <= 500);
}, "Please enter an integer between -500 and 500");