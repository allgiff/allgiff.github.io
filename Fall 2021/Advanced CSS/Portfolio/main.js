const options = [
    {
        label: "SCSS Quiz Assignment",
        url: "https://allgiff.github.io/Fall%202021/Advanced%20CSS/Week%203%20assign/quiz.html"
    },{
        label: "Playing Card Assignment",
        url: "https://codepen.io/allgiff/pen/PoKKoZL"
    }, {
        label: "Animation Assignment",
        url: "https://codepen.io/allgiff/pen/oNeYBYb"
    }, {
        label: "Shapes Assignment",
        url: "https://codepen.io/allgiff/pen/yLoXabq"
    }, {
        label: "Bootstrap Assignment",
        url: "https://allgiff.github.io/Fall%202021/Advanced%20CSS/Bootstrap-Skate-Website-lesson1.1/skateOrDie/index.html"
    }, {
        label: "BYUI Remake Assignment",
        url: "https://allgiff.github.io/byui-home/home.html"
    }, {
        label: "Zen Garden Assignment",
        url: "https://allgiff.github.io/CSSZenGarden/index.html"
    }, {
        label: "CSS Battle Assignment",
        url: "https://codepen.io/allgiff/pen/ZEJNgMN"
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