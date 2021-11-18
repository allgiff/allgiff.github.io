const options = [
    {
        label: "Playing Card Assignment",
        url: "https://codepen.io/allgiff/pen/PoKKoZL"
    }, {
        label: "Animation Assignment",
        url: "https://codepen.io/allgiff/pen/oNeYBYb"
    }, {
        label: "Shapes Assignment",
        url: "https://codepen.io/allgiff/pen/yLoXabq"
    }, {
        label: "BYUI Remake Assignment",
        url: "https://allgiff.github.io/byui-home/home.html"
    }, {
        label: "Zen Garden Assignment",
        url: "https://allgiff.github.io/CSSZenGarden/index.html"
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