const options = [
    {
        label: "Week 1 notes",
        url: "https://allgiff.github.io/Fall%202021/WDD%20330/week1notes.html"
    },{
        label: "Week 2 notes",
        url: "https://allgiff.github.io/Fall%202021/WDD%20330/Week%202/week2notes.html"
    }, {
        label: "Week 3 notes",
        url: "https://allgiff.github.io/Fall%202021/WDD%20330/Week%203/week3notes.html"
    }, {
        label: "Week 4 notes",
        url: "https://allgiff.github.io/Fall%202021/WDD%20330/Week%204/week4notes.html"
    }, {
        label: "Week 5 notes",
        url: "https://allgiff.github.io/Fall%202021/WDD%20330/Week%205/week5notes.html"
    }, {
        label: "Week 6 - To-Do List",
        url: "https://allgiff.github.io/Fall%202021/WDD%20330/to-do%20List/to-do.html"
    }, {
        label: "Week 7 notes",
        url: "https://allgiff.github.io/Fall%202021/WDD%20330/Week%207/week7notes.html"
    }, {
        label: "Week 8 notes",
        url: "https://allgiff.github.io/Fall%202021/WDD%20330/Week%208/week8notes.html"
    }, {
        label: "Week 9 notes",
        url: "https://allgiff.github.io/Fall%202021/WDD%20330/Week%209/week9notes.html"
    }, {
        label: "Week 10 notes",
        url: "https://allgiff.github.io/Fall%202021/WDD%20330/Week%2010/week10notes.html"
    }, {
        label: "Challenge 2",
        url: "https://allgiff.github.io/Fall%202021/WDD%20330/test/index.html"
    }, {
        label: "Final Video",
        url: "https://www.loom.com/share/a8f408101eef406e984e3a028438337a"
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