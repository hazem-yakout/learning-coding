// hello from single line comments in javascript
/* hello from multiple line comments 
in 
javascript
*/

// fundmentals
document.write("hi my name hazem and this is my web page");
console.log("hazem yakout");
console.log(typeof "hazem yakout");
console.log(typeof 50);
console.log(typeof ["hazem", "yakout", "khaled"]);
console.log(typeof { name: "hazem", age: 17 });
console.log(typeof true);
console.log(typeof null);
console.error("error");
// hiiiَ

var a = "hazem";
let b = "yakout";
const c = "elsayed";
console.log(`hello my name is ${a}
${b}
${c}`);
console.log("my name is " + a + " " + b + "\n" + c);
console.log("i love \\ 'programing' especially javascript");
console.log(100 + 4);
console.log(10 ** 2);
console.log(11 % 3);
console.log(+"1000" + true);
console.log(-false);
console.log(Number("hazem"));
console.log(Number(200));
console.log(Math.random(1, 2, 3, 4));
console.log(Math.max(10, 20, 30));
console.log(Math.min(10, 20, 30));
console.log(Math.pow(2, 3));
console.log(Math.round(10.23));
console.log(Math.ceil(1.1));
console.log(Math.floor(10.9));
console.log((10.54545).toFixed(2));
console.log(Number.isInteger(22));
let m = 5;
m += 5;
console.log(m);
let myName = "hazem Yakout Elsayed";
document.write("\n" + myName);
console.log(myName[1]);
console.log(myName.toUpperCase());
console.log(myName.length);
console.log(myName.indexOf("a"));
console.log(myName.lastIndexOf("a"));
console.log(myName.slice(6, 12));
console.log(myName.substring(6, 12));
console.log(myName.startsWith("h"));
console.log(myName.endsWith("t", 12));
console.log(myName.repeat(3));
console.log(myName.split(" "));
let nonoName = "  zoma  ";
console.log(nonoName.trim());

// if statment

let price = 100;
let discount = 10;
let country = "egypt";
let gender = "male";

if (country === "egypt") {
    price -= 10 + discount;
    console.log(`you should pay ${price}$`);
} else if (country === "saudi arabia") {
    price -= 5 + discount;
    console.log(`you should pay ${price}$`);
} else {
    price -= discount;
    console.log(`you should pay ${price}$`);
}
// nested if statment

let myprice = 100;
let mydiscount = 10;
let mycountry = "egypt";
let mygender = "female";

if (mycountry === "egypt") {
    if (mygender === "male") {
        myprice -= 10 + mydiscount;
        console.log(`you should pay ${myprice}$`);
    } else if (mygender === "female") {
        myprice -= 15 + mydiscount;
        console.log(`you should pay ${myprice}$`);
    }
}
console.log(Boolean(10 === 10));
console.log(Boolean(10 === "10"));
console.log(Boolean(10 != "10"));
console.log(Boolean(10 == "10"));
console.log(Boolean(10 > 5 || 10 < 3 || 100 < 3));
console.log(Boolean(10 >= 5));
console.log(Boolean(10 >= 10));
console.log(Boolean(10 == 10 && 50 > 7 && 5 >= 5 && 3 !== 3));
// switch
var day = "monday";
switch (day) {
    default: console.log("unkown day");
    break;
    case "monday":
            console.log("monday");
        break;
    case "sunday":
            console.log("sunday");
        break;
    case "tuesday":
            console.log("tuesday");
        break;
    case "thursday":
            console.log("thursday");
        break;
}
// array
let array = [
    "hazem",
    "osama",
    "loay",
    "hazem",
    "waseem", ["yamen", "ahmed"],
    1,
    2,
];

console.log(array);
console.log(array[1][2]);
console.log(array[4][1][0]);
console.log(array[-1]);
console.log(array.length);
console.log(array.indexOf("hazem"));
console.log(array.lastIndexOf("hazem"));
array.pop();
console.log(array);
console.log(array.sort());
console.log(array.sort().reverse());
array.unshift("alaa");
console.log(array);
console.log(array.slice(1, 5));
array.splice(3, 1, "zein");
console.log(array);

let freinds = ["nada", "yasmien", "eman"];

console.log(array.concat(freinds));

// for loop

for (freinds; freinds.length < 8; freinds.splice(2, 0, "ahmed")) {
    console.log(freinds);
}
for (let i = 0; i < 10; i += 1) {
    console.log(i);
}

let electronics = ["keyboard", "mouse", "computer", "mobile", "laptop"];
let color = ["red", "green", "yellow", "blue"];

mainloop: for (let i = 0; i < electronics.length; i++) {
    console.log(`the electronic is ${electronics[i]}`);
    console.log("#".repeat(10));
    nestedloop: for (let k = 0; k < color.length; k++) {
        console.log(`- ${color[k]}`);
    }
    console.log("#".repeat(10));
}
document.write(`<h1> show 3 products by javascript </h1>`);
for (let i = 0; i < electronics.length; i++) {
    document.write(`<div>`);
    document.write(`<h3> [${i + 1}] ${electronics[i]}</h3>`);

    for (let j = 0; j < color.length; j++) {
        document.write(`<div>`);
        document.write(`</p> ${color[j]}  </p>`);
    }

    document.write(`</p> ${color.join("|")}  </p>`);
    document.write(`</div>`);
}
// while loop
let days = ["sunday", "monday", "thursday", "friday", "saturday"];

let k = 0;
while (k < days.length) {
    console.log(days[k]);
    k++;
    if (days[k] === "friday") {
        console.log("the loop is end.");
        break;
    }
}

let num = [1, 2, 3, 4, 5, 6, 7, 8];

let j = 0;
do {
    console.log(num[j]);
    j++;
} while (j < num.length);
// function

function sayhello(name) {
    console.log(`hello ${name}`);
}

function generateYears(start, end, exclude) {
    for (let i = start; i <= end; i++) {
        if (i === exclude) {
            continue;
        }
        console.log(`your start is ${start} and your end is ${end}`);
        console.log(i);
    }
}

function age(age) {
    if (age < 18) {
        console.log("you arenot allowed to enter the castle!");
    } else {
        console.log(`your age is ${age} and you can enter the castle.`);
    }
}
sayhello("hazem");
generateYears(2007, 2023, 2011);
age(16);

function def(name = "unkown", age = "unkown", show = "true", ...skills) {
    document.write(`<div>`);
    document.write(`<h2> hello${name}</h2>`);
    document.write(`<p> your age is ${age} </p>`);
    if (show === "true") {
        if (skills.length > 0) {
            document.write(`<p>your skills is: ${skills.join(" & ")}  </p>`);
        } else {
            document.write(`<p>you have no skills</p>`);
        }
    } else {
        document.write(`<p>your skills arenot allowed to be seen </p>`);
    }
    document.write(`</div>`);
}

function mydef(price = "unkown", product = "unkown", costumer, ...content) {
    console.log(
        `the price $${price}$ for ${product} and its content:${content.join()} for costumer ${costumer}`
    );
}
def("hazem", 16, true, "html", "css", "javascript");
mydef(1000, "unkown", "ahmed", "laptop", "tablet", "mobile phone");

let y = function name(name) {
    console.log(`say my name ${name}`);
};
let x = 4;

function z() {
    x = 5;
    console.log(x);
}
y("hazem");
z();

function me(...myskills) {
    return `${myskills.join()}`;
}
console.log(me("tennis", "basketball"));
// => arrow function
let lele = (name) => `say my name ${name}`;
// map
let invnum = [1, -10, 4, -3, 2, -6];
let inv = invnum.map(function(element, index) {
    return -element;
});
let word = "elZERo";

let reverse = word
    .split("")
    .map(function(ele) {
        // condition ? true : false
        return ele === ele.toUpperCase() ? ele.toLowerCase() : ele.toUpperCase();
    })
    .join(" | ");

// filter
let sentence = "i love pizza and burger";
let smallword = sentence
    .split(" ")
    .filter(function(elem) {
        return elem.length < 4;
    })
    .join(" ");
let number = "h4567az56e5m3940";
let ignore = number
    .split("")
    .filter(function(elemen) {
        return isNaN(Number(elemen)) ? elemen : "";
    })
    .join("");
// reduce
let nums = [1, 2, 3, 4, 5, 6];
let add = nums.reduce(function(accumelator, current, index) {
    console.log(`acc => ${accumelator}`);
    console.log(`curr => ${current}}`);
    console.log(`inde => ${index}`);
    return accumelator + current;
});

let big = ["bla", "propaganda", "hi", "other", "hello", "lets", "test"];
let check = big.reduce(function(acc, cur) {
    return acc.length > cur.length ? acc : cur;
});
let remove = ["h", "#", "#", "a", "_", "z", "e", "-", "#", "m"];
let str = remove
    .filter(function(ele) {
        return !ele.startsWith("#") && !ele.startsWith("-") && !ele.startsWith("_");
    })
    .reduce(function(acc, curr) {
        return `${acc}${curr}`;
    });
console.log(str);
console.log(add);
console.log(ignore);
console.log(smallword);
console.log(check);
console.log(reverse);
console.log(inv);
console.log(lele("haezm"));
y("hazem");

// objects
let object = {
    name: "hazem",
    age: 18,
    color: "red",
    hello: function() {
        return `hello only`;
    },
};
console.log(object.color);
console.log(object.hello());

let info = {
    adress: {
        saudi: "riyadh",
        egypt: {
            one: "cairo",
            two: "alexandria",
        },
    },
    name: "khaled",
    age: 50,
    color: "blue",
    hello: function() {
        return `hello only`;
    },
};
console.log(info["color"]);
console.log(info["age"]);
console.log(info["name"]);
console.log(info.adress.egypt.two);
console.log(info.adress.saudi);

let haha = {
    name: "haha",
    prop: "happy",
    num: 12,
    math: function() {
        return "hello";
    },
};
console.log(haha.name);
haha.name = "kaka";
console.log(haha.name);
console.log(haha.num);
console.log(haha.math());
console.log(this);
myvar = 100;
console.log(this.myvar);
let kaka = { haha };
kaka.num = 6;
console.log(kaka.num);
let obj = Object.assign({}, haha, object);
console.log(obj);
let user = {
    name: "khaled",
    skills: ["basket", "football", "tennis"],
};
console.log(user.name);

// DOM

let strong = document.getElementsByTagName("strong");

let span = document.getElementById("span");
let spantwo = document.getElementById("spantwo");
let p = document.getElementsByClassName("graph");
let div = document.querySelector(".div");
console.log(strong);
console.log(span);
console.log(spantwo);
console.log(p);
console.log(div);

console.log(document.links[0].setAttribute("title", "mygoogle"));
console.log(document.images[0].setAttribute("alt", "picture"));
console.log(document.getElementsByTagName("p")[0]);
let myp = document.getElementsByClassName("div")[0];
if (myp.hasAttribute("data-src")) {
    if (myp.getAttribute("data-src") === "") {
        myp.removeAttribute("datasrc");
    } else {
        myp.setAttribute("data-src", "new value");
    }
} else {
    console.log("not found");
}
// .onclick & .onscroll => events
document.forms.onsubmit = function(event) {
    let user = false;
    let age = false;

    if (userInput.value !== "" && userInput.value.length <= 10) {
        user = true;
    }
    if (ageInput.value !== "") {
        age = true;
    }
    if (user === false || age === false) {
        event.preventDefault();
    }
};
document.links[0].onmouseenter = function(e) {
    console.log(e);
    e.preventDefault();
};

let myElement = document.querySelector(".div");
console.log(myElement.innerHTML);
console.log(myElement.textContent);
myElement.innerHTML = "text from <span> innerhtml </span> div";
myElement.textContent = "text from <span> textcontet </span> div";

let myElemen = document.querySelector("#par");
console.log(myElemen.innerHTML);
console.log(myElemen.textContent);
myElemen.textContent = "text from <span> textcontet </span> p ";
myElemen.innerHTML = "text from <span> innerhtml </span> p";
document.images[0].alt = "Alternate";
document.images[0].title = "Title";
document.images[0].className = "images";
let link = document.querySelector("#aa");
console.log(link.getAttribute("id"));

let ele = document.createElement("div");
let comment = document.createComment("my comment");
let text = document.createTextNode("this is a text");
ele.appendChild(text);
document.body.appendChild(ele);

let mark = document.querySelector(".mark");
let form = document.querySelector(".form");
window.onload = function() {
    form.focus();
};

mark.onblur = function() {
    document.links[0].click();
};
let element = document.getElementById("divvv");
console.log(element.classList);
console.log(element.classList.contains("zizi"));
console.log(element.classList.item("1"));
element.onclick = function() {
    element.add("add-one");
};

// let element = document.getElementsByClassName("divvv");
// element.style.color = "red";

// element.onclick = function () {
//   element.style.color = "blue";
// };
let create = document.createElement("p");
element.after("hello from js");
create.before("my love");
let mysp = document.querySelector(".s");
console.log(mysp.nextElementSibling);
mysp.onclick = function() {
    mysp.nextElementSibling.style.backgroundColor = "red";
    mysp.parentElement.remove();
};

let thediv = document.querySelector("div")[0];
let newdiv = document.cloneNode(true);
console.log(newdiv);

let mype = document.querySelector(".myp");

// cloned

mype.onclick = function() {
    let newmyp = mype.cloneNode(true);
    newmyp.classname = "clone";
    document.body.appendChild(newmyp);
};
document.addEventListener("click", function(e) {
    if (e.target.className === "clone") {
        console.log("this is a cloned");
    }
});

// bom
window.alert("hi! in m website");
window.confirm("do you want to start the page");
window.prompt("good day to you to go to doctor", "write the days here");
if (confirm === true) {
    console.log("start");
} else {
    console.log("not start");
}
let promptMsg = prompt(
    "good day to you to go to doctor",
    "write the days here"
);
console.log(window.history);
console.log(location.host);
console.log(location.href);
console.log(location.port);
let counter = setTimeout(sayhello, 3000, "hazem");

function sayhello(hazem) {
    console.log(`say hello ${hazem}`);
}
let momo = document.querySelector(".hello");

function countdown() {
    momo.innerHTML -= 1;
    if (momo.innerHTML === "0") {
        clearInterval(coun);
    }
}
let coun = setInterval(countdown, 1000);

let but = document.querySelector("#but");
but.onclick = function() {
    window.scrollTo(100, 200);
};
window.onscroll = function() {
    but.style.cssText = "color:red;background-color:white";
};

// // window.localstorage.clear()

// if (window.localStorage.getItem("color")) {
//   exp.style.backgroundColor = window.localStorage.getItem("color");
//   lis.forEach(function (li) {
//     li.classList.remove("active");
//   });
//   document.querySelector`[data-color = ${window.localStorage.getItem(
//     "color"
//   )}]`;
// }
// lis.forEach((li) => {
//   li.addEventListener("click", function (e) {
//     lis.forEach(function (li) {
//       li.classList.remove("active");
//     });
//     e.currentTarget.classList.add("active");
//     window.localStorage.setItem("color", e.currentTarget.datacolor.color);
//     exp.style.backgroundColor = e.currentTarget.datacolor.color;
//   });
// });
let red = document.querySelector(".red");
let blue = document.querySelector(".blue");
let black = document.querySelector(".black");
let exp = document.querySelector("#color");
let lis = document.querySelectorAll(".color li");
red.onclick = function() {
    window.localStorage.setItem("color", "red");
    window.localStorage.getItem("color");

    exp.style.backgroundColor = window.localStorage.getItem("color");
    lis.classList.add("active");
};
blue.onclick = function() {
    window.localStorage.setItem("color", "blue");
    window.localStorage.getItem("color");

    exp.style.backgroundColor = window.localStorage.getItem("color");
    lis.classList.add("active");
};
black.onclick = function() {
    window.localStorage.setItem("color", "black");
    window.localStorage.getItem("color");

    exp.style.backgroundColor = window.localStorage.getItem("color");
    lis.classList.add("active");
};
window.scrollTo({
    left: 500,
    top: 200,
    behavior: "smooth",
});
document.getElementById("color").onchange = function() {
    localStorage.setItem("color", document.getElementById("color").value);
    document.body.style.background = localStorage.getItem("color");
};
if (localStorage.getItem("color") != null) {
    document.body.style.background = localStorage.getItem("color");
    document.getElementById("color").value = localStorage.getItem("color");
}
// foreach

array7 = ["hazem", "mohamed", "ahmed", "ali", "samy"];

let d = array7.forEach(function(e) {
    console.log(`hi ${e}`);
});

//  destruction

// let r = 1;
// let o = 2;
// let n = 3;
// let w = 4;
// let s = 5;
let friend = ["hazem", "loay", "kazem", "mazen"];
let [r, s, , n, o] = friend;
console.log(r);
console.log(s);
console.log(n);

let mobject = {
    mname: "hazem",
    mage: 18,
    mycolor: "red",
    co: "computer",
    skill: { f: "football", b: "basket", t: "tennis" },
};
let {
    mname,
    mage,
    mycolor,
    co: ol = "phone",
    skill: { f },
} = mobject;
console.log(mycolor);
console.log(mname);
console.log(co);
console.log(`${f}`);

// destruction
showdetails(mobject);

function showdetails({ mname, mage = mobject }) {
    console.log(mname);
    console.log(mage);
}
const use = {
    thename: "osama",
    skills: ["html", "css", "js"],
};
const {
    thename: q,
    skills: [, , python],
} = use;
console.log(q);
console.log(python);
//data types and methodes
// sets
let mydata = [1, 1, 1, , 2, 3, 4, 5, 6, 7];

let unique = new Set([1, 1, 1, , 2, 3, 4, 5, 6, 7]);
unique.delete(3);
unique.add(9, 40, 2);
console.log(unique.has(3));
// unique.clear()
console.log(mydata);
console.log(unique);
unique.forEach((element) => console.log(element));

let weak = new WeakSet([{ a: 1, b: 2, c: "c" }]);
console.log(weak);
// map
let ob = { a: "1", b: "2" };
let map = new Map([
    [false, "boolean"],
    [20, "int"],
]);
let weakmap = new WeakMap();
weakmap.set(ob, "value of weakmap");
map.set(10, "number");
map.set("10", "string");
map.set(true, "bool");
console.log(map.get("10"));
console.log(map.get(true));
console.log(ob);
console.log(map.delete(10));
console.log(map.size);
console.log(weakmap);
console.log(map);

// arrays and objects methodes
console.log(
    Array.from("1234", function(num) {
        return +num + +num;
    })
);
let myarray = [1, 2, 1, , 3, 3, 3, 3, 3, 4, 5];
let myset = new Set([myarray]);
console.log(Array.from(myset));

function argument() {
    return Array.from(arguments);
}
console.log(argument("ahmed", "khaled", "hazem", "osama"));

let ar = ["w", "e", "r", "t"];
ar.copyWithin(1, -1);
console.log(ar);

let chek = ar.some(function(e) {
    return e === "t";
});
let obr = {
    n: 1,
    m: 2,
    c: 3,
};
let digit = 4;
let keys = Object.keys(obr);
let che = keys.every((e) => e < this, digit);
console.log(che);
console.log(chek);
let myarra = ["hazem", "ahmed", "mohamed", "mahmoud"];
let newarra = ["gamal", "adam"];
let ject = {
    my: "name",
    ag: 13,
};

console.log([...myarra, ...newarra]);
console.log({...ject, ...obr });

//regular expresions

let emo =
    "haz@rr.com434567rh sdcweHGokfDTHGkihjhYGKHJgukihkgrdfFGYGgnh@g.com 123 4^78(*)-+=343(0-5gikm*8lk r6 67ygam46  mal";

let expersion7 = /sdc[a-z]/gi;
let expersion1 = /[a-z]/g;
let expersion2 = /[A-Za-z]/g;
let expersion3 = /[0-9]/g;
let expersion4 = /[^A-Z^a-z^0-9]/g;
let expersion5 = /[a-z]/g;
let expersion6 = /[a-z]/gi;
let expersion8 = /\d/g;
let expersion9 = /\w/g;
let expersion12 = /./g;
let expersion10 = /\w@\w.(com|info|org)/g;
let emails = "hazem@gmail.com osama@khaled.com samy45@ij.net ijdhjsk@@d.com";
let expersion15 = /\w+@\w+.(com|net)/g;
let um = "11111 223456 3 42 @ 522 6 @7 @ 8";
let expersion18 = /\d{4,6}/g;
let http = "https://google.com http://www.goole.org web.com ";
let url = /(https?:\/\/)?(www.)?\w+.\w+/gi;
console.log(emo.match(expersion1));
console.log(emo.match(expersion12));
console.log(emo.match(expersion10));
console.log(emo.match(expersion2));
console.log(emo.match(expersion3));
console.log(emo.match(expersion4));
console.log(emo.match(expersion5));
console.log(emo.match(expersion6));
console.log(emo.match(expersion7));
console.log(emo.match(expersion8));
console.log(emo.match(expersion9));
console.log(emails.match(expersion15));

console.log(um.match(expersion18));
console.log(http.match(url));
document.getElementsByClassName("register").onsubmit = function() {
    let phonenum = document.getElementsByClassName("in").value;
    let reg = /\(\d{4}\)\s-\s\d{3}\s-\s\d{4}/;
    let valid = reg.test(phonenum);
    if (valid === false) {
        document.write("invalid number");
        return false;
    }
    return true;
};
let miky = "h@zemy@kout";
console.log(miky.replaceAll("@", "a"));
// oop [object oriented programing]
function User(id, mark, salary) {
    this.id = id;
    this.mark = mark;
    this.salary = salary;
}
let userone = new User(7, 19, 10000);
let usertwo = new User(9, 18.5, 5000);
let userthree = new User(8, 16, 2500);
console.log(userone.id);
console.log(usertwo.salary);
console.log(userthree.mark);

class myuser {
    constructor(id, mark, salary) {
        this.id = id;
        this.salary = salary < 6000 ? salary + 500 : salary;
        this.mark = mark | "unkown";
    }
}
let user1 = new myuser(1, 19, 10000);
let user2 = new myuser(2, 18.5, 6000);
let user3 = new myuser(3, "", 2500);
class admin extends myuser {
    constructor(id, mark, salary, ability) {
        super(id, salary, mark);
        this.a = ability;
    }
    saywelcome() {
        return `hello ${this.id} and your mark is ${this.mark}`;
    }
}
let user4 = new admin(5, 19, 9000, "cannot");
let user5 = new admin(4, 18.5, 7000, "can");
let user6 = new admin(6, 16, 3500, "can");
console.log(user5.a);
console.log(user4.salary);
console.log(user3.mark);
console.log(user1.salary);
console.log(user2.id); // property
console.log(user6.saywelcome()); // method

class informtion {
    static count = 0;
    constructor(name, place, ...skills) {
        this.name = name;
        this.skills = skills;
        this.place = place;
        informtion.count++;
    }
    static saymyname() {
        return `hellao ${this.name} and your skills are ${this.skills}`;
    }
    static countmemb() {
        return `you are the user number ${this.count}`;
    }
}
let myuser1 = new informtion("hazem", 1, "football", "basketball", 16);
let myuser2 = new informtion("mazen", 2, "tennis", "volleyball");
let myuser3 = new informtion("hazem", 3, "football");
let myuser4 = new informtion("hazem", 4, "football", "tennis");
console.log(myuser1.name);
console.log(myuser2.skills);
console.log(myuser3.place);
console.log(informtion.saymyname());
console.log(informtion.countmemb());

let myobj = {
    haz: "hazem",
    say: "sayed",
};
Object.defineProperty(myobj, "you", {
    writeable: true,
    enumerable: true,
    configurable: false,
    value: "youssef",
});
console.log(myobj);
for (let i in myobj) {
    console.log(`${i}=> ${myobj[i]}`);
}
//  date and  time

let time = new Date();
console.log(time);
let myb = new Date(2007, 8, 27, 10, 30, 5, 100);
let birth = time - myb;
console.log(birth / 1000 / 60 / 60 / 24 / 365.25);
console.log(time.getFullYear());
console.log(time.getMonth());
console.log(time.getSeconds());
console.log(time.getHours());
time.setFullYear(2020);
console.log(time);
time.setDate(0);
console.log(time);
time.setDate(-1); //=> month
console.log(time);
time.setMinutes(57);
console.log(time);
time.setSeconds(30);
console.log(time);
time.setDate(1);
console.log(time);
let date = new Date("oct 23 1997");
console.log(date);
//  import and export

// import file:-

// import zoma, { array, num, sayhello as s } from "./export.js";
// console.log(num);
// console.log(s());
// console.log(array);
// console.log(zoma);

// export file:-

// export let array = ["hazem", "khaled", "kazem"];
// export let num = 5;
// export function sayhello() {
//   return `hello`;
// }
// export default function saywelcome() {
//   return `welcome`;}

// generator
function* generator() {
    yield 1;
    yield 2;
    console.log("ahmed");
    yield 3;
    yield 4;
}
let gen = generator();
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());

function* genall() {
    yield*[1, 2, 3];
    yield* generator();
}
let generat = genall();
for (value of generat) {
    console.log(value);
}

function* gege() {
    let i = 0;
    while (true) {
        yield i++;
    }
}
let g = gege();
console.log(g.next());
console.log(g.next());
console.log(g.next());
console.log(g.next());
console.log(g.next());

// json
const mygoodobj = '{ "q": "1", "w": "2", "r": "3" }';
const json = JSON.parse(mygoodobj);
const thejson = JSON.stringify(json);
console.log(thejson);

// syncherones
console.log(1);
console.log(2);
console.log(3);

// asencherones
setTimeout(() => console.log("a"), 0);
console.log("b");
console.log("c");
console.log("d");

// let request = new XMLHttpRequest();
// request.open("Get", "text.json");
// request.send();
// console.log(request);
// request.onreadystatechange = function () {
//   if (this.readyState === 4 && this.status === 200) {
//     let js = json.parse(this.responseText);
//     for (let i = 0; i < js.length; i++) {
//       let div = document.createElement("div");
//       let text = document.createTextNode(js[i].full_name);
//       div.appendChild(text);
//       document.body.appendChild(div);
//     }
//   }
// };

// notes
// [200]: response is successful
// [404]: response is not found
//  web api => very important
// ################################
//call pack {تلخيص الكود}
function make(e) {
    e.target.style.color = "red";
}
let rec = document.querySelector(".myp");
rec.addEventListener("click", make);

// promise
const promise = new Promise((resolveFunction, rejectFunction) => {
    let connect = true;
    if (connect) {
        resolveFunction("connection done");
    } else {
        rejectFunction(Error("connection failed"));
    }
}).then(
    (resolvevalue) => console.log(`good ${resolvevalue}`),
    (rejectvalue) => console.log(`bad ${rejectvalue}`)
);
console.log(promise);

const mypromise = new Promise((resolveFunction, rejectFunction) => {
    let employees = ["osama", "hazem", "sayed"];

    if (employees.length === 4) {
        resolveFunction(employees);
    } else {
        rejectFunction(Error("number of employees is not 4"));
    }
});
mypromise
    .then((resolvevalue) => {
        resolvevalue.length = 2;
        console.log(resolvevalue);
    })
    .catch((rejectre) => console.log(rejectre));

// fetch
fetch("https://api.github.com")
    .then((result) => {
        console.log(result);
        let data = result.json();
        console.log(data);
        return data;
    })
    .then((data) => {
        data.length = 10;
        console.log(data);
    });
// .then((data) => {
//   console.log(data[0]);
// });
// async function
async function myda() {
    console.log("my lovely promise");
    try {
        console.log(await mypromise);
    } catch (reason) {
        console.log(`reason: ${reason}`);
    } finally {
        console.log("the end of promise");
    }
}
myda();
async function data() {
    let users = ["hazem"];
    if (users.length > 0) {
        return "users found";
    } else {
        throw new Error("no users found");
    }
}
console.log(data());
data().then(
    (resolvedvalue) => console.log(`good ${resolvedvalue}`),
    (rejectedvalue) => console.log(`rejected ${rejectedvalue}`)
);
async function fetchda() {
    console.log("my lovely fetch");
    try {
        let mage = await fetch(
            "https://api.github.com/users/elzerowebschool/repos"
        );
        console.log(await mage.json());
    } catch (reason) {
        console.log(`reason: ${reason}`);
    } finally {
        console.log("after fetch");
    }
}

// end of javascript[js].