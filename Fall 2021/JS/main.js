let weeks = ['Week 1 Notes', 'Week 2'];
let links = ['http://google.com'];


let list = document.getElementById("myList");


weeks.forEach((item) => {
    let li = document.createElement("li");
    li.setAttribute('id', 'item');
    list.appendChild(li);
    console.log(item);
});

    let item = document.getElementById("item");
    let a = document.createElement('a');
    let linkText = document.createTextNode(weeks[0]);
    a.appendChild(linkText);
    a.title = weeks[0];
    a.href = links[0];
    item.appendChild(a);