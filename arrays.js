var info = {
    "full_name": "Siphiwe Malinga",
    "title": "Web developer",
    "links": [
        { "blog": "http://iviewsource.com" },
        { "facebook": "http://facebook.com" },
        { "youtube": "http://www.youtube.com" },
        { "podcast": "http://feeds.feedburner.com" },
        { "twitter": "http://twitter.com" }
    ]
};

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