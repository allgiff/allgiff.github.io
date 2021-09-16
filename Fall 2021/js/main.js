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
        var a = document.createElement('a');
        a.href = options[i].url;
        var link = document.createTextNode(options[i].label);
        a.appendChild(link);
        li.appendChild(a);
        list.appendChild(li);
    }
    }
    return list;
} makeUL(options);