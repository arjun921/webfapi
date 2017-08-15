

// Add the contents of options[0] to #foo:
// document.getElementById('foo').appendChild(makeUL(options[0]))

var values;
$(document).ready(function(){
    function makeUL(array) {
    // Create the list element:
    var list = document.createElement('ul');

    for(var i = 0; i < array.length; i++) {
        // Create the list item:
        var item = document.createElement('li');
        //if condition checks empty strings
        if (document.createTextNode(array[i]).length != 0) {
            var createA = document.createElement('a');
        var createAText = document.createTextNode(array[i]);
        console.log(array[i]+"/")
        createA.setAttribute('href', array[i]+"/");
        createA.appendChild(createAText);
    // Set its contents:
        item.appendChild(createA);
        // console.log(item)
        // Add it to the list:
        list.appendChild(item);
        }
    }

    // Finally, return the constructed list:
    return list;
    }

// var obj = {"argv": []};
// var myJSON = JSON.stringify(obj);

// $.ajax({
//     type: "POST",
//     url: 'http://127.0.0.1:8080/ls',
//     success: function(myJSON) {
//     	values = data
//     	pat = values.stdout.split("\n")
//     	console.log(values)
//         //document.getElementById('foo').appendChild(makeUL(pat))
//     }
// });
//
// var jsono = {'argv':[]};
//  $.ajax({
//         url: "http://localhost:8080/ls",
//         type: "POST",
//         data: JSON.stringify(jsono),
//         dataType: "json",
//         success: function(data){
//             alert(data);
//         }
//     });
//
//     var dataToSend = {'argv':[]};
//     var dataindex = 0;
//     jQuery(".myclass").each(function(){
//         var temp = unique_selector(jQuery(this), "");
//         dataToSend.data[dataindex++] = {
//             selector: temp,
//             contents: jQuery(temp).html()
//         };
//     });
//     jQuery.ajax({
//         type: 'POST',
//         url: "/main/save.php",
//         data: JSON.stringify(dataToSend),
//         dataType: "json",
//         success: function(data){ alert(data); }
//     });
//
// var argv = [];
// var data = {'argv': argv};
//  $.ajax({
//    url: 'http://127.0.0.1:8080/ls',
//    type: 'POST',
//    contentType:'application/json',
//    data: JSON.stringify(data),
//    dataType:'json',
//    success: function(data){
//      //On ajax success do this
//      values = data
//      pat = values.stdout.split("\n")
//      console.log(values)
//      //document.getElementById('foo').appendChild(makeUL(pat))
//       },
//    error: function(xhr, ajaxOptions, thrownError) {
//       //On error do this
//         if (xhr.status == 200) {
//
//             alert(ajaxOptions);
//         }
//         else {
//             alert(xhr.status);
//             alert(thrownError);
//         }
//     }
//  });
var temp = {"argv": []};

$.ajax({
    type: "POST",
    url: 'http://127.0.0.1:8080/ls',
    data: JSON.stringify(temp),
    dataType: 'json',
    success: function(data) {
    	values = data
    	pat = values.stdout.split("\n")
    	console.log(values)
        //document.getElementById('foo').appendChild(makeUL(pat))
    }
});

});
