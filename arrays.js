let request;
if (window.XMLHttpRequest) {
    request = new XMLHttpRequest();
} else {
    request = new ActiveXObject("Microsoft.XMLHTTP")
}

request.open('GET', 'data.json');
request.onreadystatechange = function () {
    if ((request.status === 200) && (request.readyState === 4)) {

        let info = JSON.parse(request.responseText)
        var output = "";
        // to find items in an array you need to loop using a for loop that looks at the total length of items 
        for (var i = 0; i <= info.links.length; i++) {
            for (key in info.links[i]) {
                if (info.links[i].hasOwnProperty(key)) {
                    output += '<li>' + '<a href = "' + info.links[i][key] + '">' + key + '</a>' + '</li>';
                }// hasOwnProperty check
            } // for each object
        }// for each array in element
        let updated = document.getElementById("link");
        updated.innerHTML = output;
    } // ready
} // event

request.send();