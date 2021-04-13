var info = {
    "full_name": "Siphiwe Malinga",
    "title": "Web developer",
    "links": {
        "blog": "http://iviewsource.com",
        "facebook": "http://facebook.com",
        "youtube": "http://www.youtube.com",
        "podcast": "http://feeds.feedburner.com",
        "twitter": "http://twitter.com"
    }
};

var output = "";


for (key in info.links) {
    if (info.links.hasOwnProperty(key)) {
        output += '<li>' +
            '<a href = "' + info.links[key] +
            '">' + key + '</a>' +
            '</li>';
    } //if the links has the key property
}// for in...go through each link

let update = document.getElementById("links");
update.innerHTML = output;