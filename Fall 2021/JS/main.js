var options = [
    weeks = ['Week 1', 'Week 2', 'Week 3'],
    links = ['week1notes.html', 'https://google.com']
];

function makeUL(options) {
    let list = document.createElement('ul');

    for (let i = 0; i < options.length; i++) {
        var item = document.createElement('li');

        item.appendChild(document.createTextNode(weeks[i]));

        list.appendChild(item);

        var tag = document.createElement('a');

        tag.appendChild(document.createTextNode(links[i]));

        item.appendChild(tag);
    }
    return list;
}
document.getElementById('myList').appendChild(makeUL(options[0]));