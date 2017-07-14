

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

	$.ajax({
    // GET is the default type, no need to specify it
    url: 'http://127.0.0.1:8080/ls',
    data: {},
    success: function(data) {
    	values = data
    	pat = values.stdout.split("\n")
    	// console.log(values)
        document.getElementById('foo').appendChild(makeUL(pat))
    }
});            
});

