const options = [
    {
        label: "Week1 notes",
        url: "https://allgiff.github.io/Fall%202021/week1notes.html"
    }
]

function makeUL(options) {
    let list = document.getElementById('myList');

    for (let i = 0; i < options.length; i++) {
        var li = document.createElement('li');

        li.appendChild(document.createTextNode(options[i].label));

        list.appendChild(li);

        var a = document.createElement('a');

        var link = document.createTextNode(li);

        a.appendChild(link);

        a.href = options[i].url;

        list.appendChild(a);
    }
    return list;
}