
var tabNumber = 0; // tab number vairable uses for tabs management

$(document).ready(function(){
  // adding Methods for rules
  // crafting the rules to check less than or greater than and leaving messages to be overwirrten later.
  //less than

  jQuery.validator.addMethod('lessThan', function(value, element, param){
    return this.optional(element) || $(param).val() == '' || parseInt(value) <= parseInt($(param).val());
  },'    Value is not less than the Maximum Value');

  // greater than
  jQuery.validator.addMethod('greaterThan', function(value, element, param){
    return this.optional(element) || $(param).val() == '' || parseInt(value) >= parseInt($(param).val());
  },'    Value is not greater than the Minimum  Value');

  $('#forumInput').submit(function(e){
    e.preventDefault();
  }).validate({
    rules: {
      // setting up the required rules to be validated on each input
      minimumRow:{
        required: true,  // required it to not be empty
        number: true,   // requirs input to be a number
        range: [-500,500], // requires the number to be with in a range of -500 to 500
        lessThan: "#maxRow" // uses custom lessThan method and requires the valeus to be lessThan the #maxRow value
      },
      maximumRow:{
        required: true,
        number: true,
        range: [-500,500],
        greaterThan: "#minRow" // just like above but now the greater than method and making sure its greather than the #minRow Value
      },
      minimumColumn:{
        required: true,
        number: true,
        range: [-500,500],
        lessThan: "#maxColumn"
      },
      maximumColumn:{
        required: true,
        number: true,
        range: [-500,500],
        greaterThan: "#minColumn"
      }
    },
    messages:{
      // setting up the messages to  be custom made for each input for maximum clarity and feedback
      minimumRow:{
        required: '  Entering a Minimum Row number is required',
        number: '    Error: Only numbers are accepted',
        range: '    Value must be within a range from -100 to 100',
        lessThan:'    Minimum Row Value must be less than Maximum Row Value'

      },
      maximumRow:{
        required:'   Entering a Maximum Row number is required',
        number: '    Error: only numbers are accepted',
        range: '    Value must be within a range from -100 to 100',
        greaterThan:'    Maximum Row Value must be greater than Minimum Row Value'
      },
      minimumColumn:{
        required:'   Entering a Minimum Column number is required',
        number: '    Error: only numbers are accepted',
        range: '    Value must be within a range from -100 to 100',
        lessThan:'    Minimum Row Value must be less than Maximum Column Value'
      },
      maximumColumn:{
        required:'   Entering a Maximum Column number is required',
        number: '    Error: only numbers are accepted',
        range: '    Value must be within a range from -100 to 100',
        greaterThan:'    Maximum Row Value must be greater than Minimum Column Value'
      }
    },
    // this handles what happends when my "submit" input is presses
    submitHandler: generate_multitable
  });

  // beggining of sliders
  $('#sliderMinR').slider({
    min:-500,
    max:500,
    slide: function(event,ui) {
      $('#minRow').val(ui.value).change();
    }
  });
// setting the min and max of sliders to -500 to 500 to show a reasobanble range that makes the slider still percise
// slide function updates the input box number with every change to the slider which makes it easier to select correct number
// as oppsed to change function

  $('#sliderMaxR').slider({
    min:-500,
    max:500,
    slide: function(event,ui) {
      $('#maxRow').val(ui.value).change();
    }
  });

  $('#sliderMinC').slider({
    min:-500,
    max:500,
    slide: function(event,ui) {
      $('#minColumn').val(ui.value).change();
    }
  });

  $('#sliderMaxC').slider({
    min:-500,
    max:500,
    slide: function(event,ui) {
      $('#maxColumn').val(ui.value).change();
    }
  });


// two way binding reference :

// sliderMinR
$("#minRow").change(function(){
var oldvalue1=$("#sliderMinR").slider("option", "value");
var newvalue1=$(this).val();

if (isNaN(newvalue1) || newvalue1 < -500 || newvalue1 > 500) {
      $("#sliderMinR").val(oldvalue1);
    } else {
      $("#sliderMinR").slider("option", "value", newvalue1);
    }
    // corrects vallidation only submits and checks when there is an input value in bot min/max
    if ($('#maxRow').val()!=''){
      $("#forumInput").validate().element("#minRow");
      $("#forumInput").validate().element("#maxRow");
    }
    if($("#maxColumn").val()!='' && $("#minColumn").val() !='' && $("#minRow").val() !='' && $("maxRow").val() !=''){
    $("#forumInput").submit();
  }
});

// sliderMaxR
$("#maxRow").change(function(){
var oldvalue2=$("#sliderMaxR").slider("option", "value");
var newvalue2=$(this).val();

if (isNaN(newvalue2) || newvalue2 < -500 || newvalue2 > 500) {
      $("#sliderMaxR").val(oldvalue2);
    } else {
      $("#sliderMaxR").slider("option", "value", newvalue2);
    }
    // corrects vallidation only submits and checks when there is an input value in bot min/max
    if ($('#minRow').val()!=''){
      $("#forumInput").validate().element("#maxRow");
      $("#forumInput").validate().element("#minRow");
    }
    if($("#maxColumn").val()!='' && $("#minColumn").val() !='' && $("#minRow").val() !='' && $("maxRow").val() !=''){
    $("#forumInput").submit();
  }

});

// sliderMinC
$("#minColumn").change(function(){
var oldvalue3=$("#sliderMinC").slider("option", "value");
var newvalue3=$(this).val();

if (isNaN(newvalue3) || newvalue3 < -500 || newvalue3 > 500) {
      $("#sliderMinC").val(oldvalue3);
    } else {
      $("#sliderMinC").slider("option", "value", newvalue3);
    }
    // corrects vallidation only submits and checks when there is an input value in bot min/max
    if ($('#maxColumn').val()!=''){
      $("#forumInput").validate().element("#maxColumn");
      $("#forumInput").validate().element("#minColumn");
    }
    if($("#maxColumn").val()!='' && $("#minColumn").val() !='' && $("#minRow").val() !='' && $("maxRow").val() !=''){
    $("#forumInput").submit();
  }
});

// sliderMaxC
$("#maxColumn").change(function(){
var oldvalue4=$("#sliderMaxC").slider("option", "value");
var newvalue4=$(this).val();

if (isNaN(newvalue4) || newvalue4 < -500 || newvalue4 > 500) {
      $("#sliderMaxC").val(oldvalue4);
    } else {
      $("#sliderMaxC").slider("option", "value", newvalue4);
    }
    if ($('#minColumn').val()!=''){
      $("#forumInput").validate().element("#minColumn");
      $("#forumInput").validate().element("#maxColumn");
    }
    if($("#maxColumn").val()!='' && $("#minColumn").val() !='' && $("#minRow").val() !='' && $("maxRow").val() !=''){
    $("#forumInput").submit();
  }
});


// End of two way binding

var index=0;
$("#newTabButton").click(function(){
//dont create tab on improper inputs
var flag = true;
if($('#forumInput').valid()){
  flag =false;
}
if(flag)
return;


index++;
tabNumber= "#" + index;

// tab header values
var a = Number(document.getElementById("minRow").value);
var b = Number(document.getElementById("maxRow").value);
var c = Number(document.getElementById("minColumn").value);
var d = Number(document.getElementById("maxColumn").value);

// uses tab header values to create tab header on bbutton click
$("#myTabs ul").append("<li><a href='#"+ index +"'> Tab " + index + " " + a + "," + b + "," + c + "," + d + "</a> <input type= 'checkbox' class=\"checkbox_check\" /> </li>");
// div that pertains to the content of the tab
$("#myTabs").append("<div id='" + index + "'>" + "</div>");
// creatse tab Tabs
$("#myTabs").tabs();
// refresh tabs
$("#myTabs").tabs("refresh");
// set the active tab
$("#myTabs").tabs("option", "active", -1 );

// submit the form properly
if($("#maxColumnNumber").val()!='' && $("#minColumnNumber").val() !='' && $("#minRowNumber").val() !='' && $("maxRowNumber").val() !=''){
$("#inputForm").submit();
}
})

// delete tab button
$("#deleteTabButton").click(function(){
  $("#myTabs ul li").each(function(){
   if ($(this).find(".checkbox_check").is(':checked')){
   var panelId = $(this).closest("li").remove().attr("aria-controls");
   $("#" + panelId).remove();
   $("#tabs").tabs("refresh");
   }
  })
});

}); 
// END JQUERY

// the function actuall generating multiplication table
function generate_multitable() {
  console.log("Generating...");

  // delete container holding table if it exists
  if(document.querySelector(".tContainer")){
    var remove= document.querySelector(".tContainer")
    var parent1= remove.parentElement;
    parent1.removeChild(remove);
  }

  // parseInt on the values so they are read in as ints not string of int specificall bc of negatives
  var minR = parseInt(document.getElementById('minRow').value);
  var maxR = parseInt(document.getElementById('maxRow').value);
  var minC = parseInt(document.getElementById('minColumn').value);
  var maxC = parseInt(document.getElementById('maxColumn').value);

  // row column lengths + 2 to account for the correct lenth + outer edge to show values
  var rlength = ((maxR - minR)+2)
  var clength = ((maxC - minC)+2)

 // arrays to hold row values
  var rarr =[];
  for(x=minR; x <=maxR; x++){
    rarr.push(x);
  }
  // arrays to hold column values
  var carr =[];
  for(x=minC; x <=maxC; x++){
      carr.push(x);
  }

  // get the reference for the body
  var body = document.getElementsByTagName("body")[0];
  // creates a <table> element and a <tbody> element
  var tbl = document.createElement("table");
  var tblBody = document.createElement("tbody");
  var wrapper = document.createElement("div");
  wrapper.classList.add("tContainer")

  // creating all cells
  for (var i = 0; i < rlength; i++) {
    // creates a table row
    var row = document.createElement("tr");
    row.setAttribute("id","mtRow")
    //
    for (var j = 0; j < clength; j++) {
      // create a <td> element and a text node, make the text
      // node the contents of the <td>, and put the <td> at
      // the end of the table row

      // allows user to enter in the first cell that is blank
      if(i ==0 && j ==0){
        var cell = document.createElement("td");
        var cellText = document.createTextNode('');
        cell.setAttribute("id","mtCell");
        cell.appendChild(cellText);
        row.appendChild(cell);
      }
      // allows user to end the guiding values for the row
       else if (i==0 ) {

        var cell = document.createElement("td");
        var cellText = document.createTextNode(carr[j-1]);
        cell.appendChild(cellText);
        row.appendChild(cell);
      }
      // allows to end the guiding values for the row column
       else if (j==0 ) {

        var cell = document.createElement("td");
        var cellText = document.createTextNode(rarr[i-1]);
        cell.setAttribute("id","mtCellC");
        cell.appendChild(cellText);
        row.appendChild(cell);

      }
      // filling in the rest of the table
      else{
        var cell = document.createElement("td");
        var cellText = document.createTextNode(rarr[i-1]*carr[j-1]);
        cell.setAttribute("id","mtCellG");
        cell.appendChild(cellText);
        row.appendChild(cell);
     }
    }
    // add the row to the end of the table body
    tblBody.appendChild(row);
  }
  // put the <tbody> in the <table>
  tbl.appendChild(tblBody);

  wrapper.appendChild(tbl)
  // appends <table> into <body>
  body.appendChild(wrapper);

  $("#myTabs div:visible").append(wrapper); // appends table to tab
  // set the border attribute of tbl to 2;
  tbl.setAttribute("border", "2");
  tbl.setAttribute("id","multiTable");

}