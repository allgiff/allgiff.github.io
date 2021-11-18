const options = [
    {
        label: "__ Assignment",
        url: "#"
    }, {
        label: "BYUI Remake Assignment",
        url: "https://allgiff.github.io/byui-home/home.html"
    }

]
 
function makeUL(options) {
    let list = document.getElementById('myList');

    for (let i = 0; i < options.length; i++) {
        var li = document.createElement('li');
        var a = document.createElement('a');
        a.href = options[i].url;
        var link = document.createTextNode(options[i].label);
        a.appendChild(link);
        li.appendChild(a);
        list.appendChild(li);
    }
    return list;
}
makeUL(options);