//================ BODY ================
document.body.style.margin = "0";
document.body.style.fontFamily = "Arial, sans-serif";
document.body.style.background = "#f4f6f8";
document.body.style.padding = "20px";

//================ HEADER ================
const header = document.createElement("header");
header.style.background = "#1e90ff";
header.style.color = "white";
header.style.height = "60px";
header.style.display = "flex";
header.style.alignItems = "center";
header.style.justifyContent = "center";
header.style.position = "relative";

//================ HAMBURGER ================
const hamburger = document.createElement("div");
hamburger.id = "hamburger";
hamburger.style.width = "26px";
hamburger.style.cursor = "pointer";
hamburger.style.position = "absolute";
hamburger.style.left = "15px";
hamburger.style.display = "flex";
hamburger.style.flexDirection = "column";

for (let i = 0; i < 3; i++) {
  const line = document.createElement("div");
  line.style.height = "3px";
  line.style.background = "white";
  line.style.margin = "4px 0";
  hamburger.appendChild(line);
}

//================ TITLE ================
const title = document.createElement("div");
title.innerText = "JavaScript Chapters";
title.style.fontSize = "22px";
title.style.fontWeight = "bold";

header.appendChild(hamburger);
header.appendChild(title);
document.body.appendChild(header);

//================ MENU ================
const links = ["Home", "Service", "About Me", "Contact Us"];
const menuBox = document.createElement("div");
menuBox.className = "menuBox";
menuBox.style.position = "fixed";
menuBox.style.top = "60px";
menuBox.style.left = "-220px";
menuBox.style.width = "220px";
menuBox.style.height = "100vh";
menuBox.style.background = "#333";
menuBox.style.transition = "0.3s";
menuBox.style.zIndex = "1000";

links.forEach(link => {
  const item = document.createElement("div");
  item.innerText = link;
  item.style.color = "white";
  item.style.padding = "15px";
  item.style.cursor = "pointer";
  item.style.borderBottom = "1px solid #555";
  item.onclick = () => handleLinks(link);
  menuBox.appendChild(item);
});
document.body.appendChild(menuBox);

//================ TOP LINKS ================
const topLinks = document.createElement("div");
topLinks.id = "topLinks";
topLinks.style.display = "flex";
topLinks.style.justifyContent = "center";
topLinks.style.gap = "25px";
topLinks.style.padding = "15px";

links.forEach(link => {
  const span = document.createElement("span");
  span.innerText = link;
  span.style.cursor = "pointer";
  span.style.fontWeight = "bold";
  span.onclick = () => handleLinks(link);
  topLinks.appendChild(span);
});
document.body.appendChild(topLinks);

//================ CONTENT ================
const content = document.createElement("div");
content.className = "content";
content.style.padding = "20px";
content.style.textAlign = "center";
document.body.appendChild(content);

//================ HAMBURGER TOGGLE ================
let open = false;
hamburger.onclick = () => {
  menuBox.style.left = open ? "-220px" : "0";
  open = !open;
};

//================ INPUT HELPER ================
function inputField(placeholder) {
  const input = document.createElement("input");
  input.placeholder = placeholder;
  input.style.width = "100%";
  input.style.padding = "10px";
  input.style.marginBottom = "15px";
  input.style.border = "1px solid #ccc";
  input.style.borderRadius = "5px";
  return input;
}

//================ HANDLE LINKS ================
function handleLinks(link) {
  if (link === "About Me") showAboutMe();
  else if (link === "Contact Us") showContactUs();
  else if (link === "Service") showService();
  else showHome();
}

//================ HOME (INFORMATION BOX) ================
function showHome() {
  content.innerHTML = "";

  const h2 = document.createElement("h2");
  h2.innerText = "Home";
  h2.style.color = "#1e90ff";
  content.appendChild(h2);

  const infoBox = document.createElement("div");
  infoBox.style.background = "#000";
  infoBox.style.color = "#fff";
  infoBox.style.padding = "20px";
  infoBox.style.border = "2px solid #1e90ff";
  infoBox.style.borderRadius = "10px";
  infoBox.style.maxWidth = "700px";
  infoBox.style.margin = "20px auto";
  infoBox.style.textAlign = "left";
  infoBox.style.lineHeight = "1.6";

  infoBox.innerHTML = `
    <h3 style="color:#1e90ff;">Welcome to JavaScript Home</h3>
    <p>This website contains examples from JavaScript chapters: Objects, DOM manipulation, and Events & Validation.</p>
    <p>Click "Service" to explore all chapters with 10 examples each, complete with Run & Reset buttons.</p>
    <p>About Me and Contact Us sections provide personal info and ways to reach me.</p>
    <p>Use this website to practice, test, and learn JavaScript interactively.</p>
  `;

  content.appendChild(infoBox);
  menuBox.style.left = "-220px";
  open = false;
}

//================ ABOUT ME ================
function showAboutMe() {
  content.innerHTML = "";
  const h2 = document.createElement("h2");
  h2.innerText = "About Me";
  h2.style.color = "#1e90ff";

  const box = document.createElement("div");
  box.style.maxWidth = "420px";
  box.style.margin = "20px auto";
  box.style.padding = "25px";
  box.style.borderRadius = "15px";
  box.style.background = "#fff";
  box.style.boxShadow = "0 10px 25px rgba(0,0,0,0.15)";
  box.style.textAlign = "center";

  const img = document.createElement("img");
  img.src = "sawir.jpeg"; // sawirkaaga
  img.style.width = "140px";
  img.style.height = "140px";
  img.style.borderRadius = "50%";
  img.style.objectFit = "cover";
  img.style.border = "4px solid #1e90ff";
  img.style.marginBottom = "15px";

  const info = document.createElement("div");
  info.style.textAlign = "left";
  info.innerHTML = `
    <p><b>Name:</b> Mahad Ali Jodah</p>
    <p><b>University:</b> JUST</p>
    <p><b>Class:</b> CNS242</p>
    <p><b>ID:</b> C6240357</p>
    <p><b>Email:</b> mahadda68@gmail.com</p>
    <p><b>Phone:</b> 619617605</p>
    <p><b>Teacher:</b> Jamilla Hassan Mohamett</p>
    <p><b>Skills:</b> Video Editing</p>
    <p><b>Travel Inspiration:</b> <a href="https://www.lonelyplanet.com/articles/top-travel-destinations-2025" target="_blank" style="color:#1e90ff; text-decoration:underline;">Top Travel Destinations 2025</a></p>
  `;
  
  box.appendChild(img);
  box.appendChild(info);
  content.appendChild(h2);
  content.appendChild(box);
  menuBox.style.left = "-220px";
  open = false;
}

//================ CONTACT US ================
function showContactUs() {
  content.innerHTML = "";
  const h2 = document.createElement("h2");
  h2.innerText = "Contact Us";

  const formBox = document.createElement("div");
  formBox.style.maxWidth = "400px";
  formBox.style.margin = "0 auto";
  formBox.style.padding = "25px";
  formBox.style.background = "#fff";
  formBox.style.borderRadius = "10px";
  formBox.style.boxShadow = "0 8px 20px rgba(0,0,0,0.1)";

  const name = inputField("Your Name");
  const email = inputField("Your Email");

  const message = document.createElement("textarea");
  message.placeholder = "Your Message";
  message.style.width = "100%";
  message.style.height = "100px";
  message.style.marginBottom = "15px";
  message.style.padding = "10px";
  message.style.border = "1px solid #ccc";
  message.style.borderRadius = "5px";

  const msg = document.createElement("div");
  msg.style.textAlign = "center";
  msg.style.fontWeight = "bold";
  msg.style.marginBottom = "10px";

  const btn = document.createElement("button");
  btn.innerText = "Submit";
  btn.style.width = "100%";
  btn.style.padding = "10px";
  btn.style.background = "#1e90ff";
  btn.style.color = "white";
  btn.style.border = "none";
  btn.style.cursor = "pointer";

  btn.onclick = () => {
    if (name.value.trim() === "" || email.value.trim() === "" || message.value.trim() === "") {
      msg.innerText = "❌ the information is wrong";
      msg.style.color = "red";
      return;
    }
    if (!email.value.includes("@")) {
      msg.innerText = "❌ Email is wrong";
      msg.style.color = "red";
      return;
    }
    msg.innerText = "✅ the information is correct";
    msg.style.color = "green";
    name.value = "";
    email.value = "";
    message.value = "";
  };

  formBox.appendChild(name);
  formBox.appendChild(email);
  formBox.appendChild(message);
  formBox.appendChild(msg);
  formBox.appendChild(btn);
  content.appendChild(h2);
  content.appendChild(formBox);
  menuBox.style.left = "-220px";
  open = false;
}

//================ EXAMPLE BOX (with working Run/Reset) ================
function createExample(title, codeString, height = 100, width = 600) {
  const box = document.createElement("div");
  box.style.background = "#000";
  box.style.color = "#fff";
  box.style.padding = "10px";
  box.style.borderRadius = "10px";
  box.style.width = width + "px";

  const h3 = document.createElement("h4");
  h3.innerText = title;
  h3.style.color = "#1e90ff";
  box.appendChild(h3);

  const codeArea = document.createElement("textarea");
  codeArea.value = codeString;
  codeArea.style.height = height + "px";
  codeArea.style.width = "100%";
  codeArea.style.background = "#000";
  codeArea.style.color = "#fff";
  codeArea.style.fontFamily = "monospace";
  codeArea.style.border = "1px solid #1e90ff";
  box.appendChild(codeArea);

  const btnRun = document.createElement("button");
  btnRun.innerText = "Run";
  btnRun.style.marginRight = "10px";
  btnRun.style.cursor = "pointer";

  const btnReset = document.createElement("button");
  btnReset.innerText = "Reset";
  btnReset.style.cursor = "pointer";

  const output = document.createElement("pre");
  output.style.background = "#111";
  output.style.color = "#0f0";
  output.style.padding = "10px";
  output.style.marginTop = "5px";
  output.style.borderRadius = "5px";
  output.style.whiteSpace = "pre-wrap";

  btnRun.onclick = () => {
    output.innerText = "";
    const originalConsole = console.log;
    console.log = function(...args) {
      args.forEach(a => output.innerText += a + "\n");
      originalConsole.apply(console, args);
    };
    try {
      eval(codeArea.value);
    } catch (e) {
      output.innerText = "Error: " + e.message;
    }
    console.log = originalConsole;
  };

  btnReset.onclick = () => {
    codeArea.value = codeString;
    output.innerText = "";
  };

  box.appendChild(btnRun);
  box.appendChild(btnReset);
  box.appendChild(output);

  return box;
}

//================ SHOW SERVICE (CHAPTERS) ================
function showService() {
  content.innerHTML = "";
  const h2 = document.createElement("h2");
  h2.innerText = "JavaScript Chapters Examples";
  h2.style.color = "#1e90ff";
  content.appendChild(h2);

  const contentBox = document.createElement("div");
  contentBox.style.display = "flex";
  contentBox.style.flexDirection = "column";
  contentBox.style.gap = "15px";
  content.appendChild(contentBox);

  const chapters = [
    {
      title: "Chapter 7 - Objects",
      examples: [
        ["Object Literal","let person={name:'Mahad', age:25, city:'Hargeisa'}; console.log(person);"],
        ["Two Objects","let s1={name:'Mahad'}; let s2={name:'Amina'}; console.log([s1,s2]);"],
        ["Constructor Function","function S(name,age){this.name=name;this.age=age;} console.log(new S('Mahad',21));"],
        ["Dot & Bracket","let o={}; o.name='Mahad'; o['age']=25; console.log(o);"],
        ["Add Property","let o={}; o.city='Hargeisa'; console.log(o);"],
        ["Modify Property","let o={name:'Mahad', age:25}; o.age=30; console.log(o);"],
        ["Iteration for...in","let o={name:'Mahad', age:25}; let s=''; for(let k in o){s+=k+':'+o[k]+'\\n';} console.log(s);"],
        ["Object Methods","let o={name:'Mahad'}; console.log(Object.keys(o)); console.log(Object.values(o)); console.log(Object.entries(o));"],
        ["JSON.stringify","let o={name:'Mahad'}; console.log(JSON.stringify(o));"],
        ["JSON.parse","let js='{\"name\":\"Mahad\"}'; console.log(JSON.parse(js));"]
      ]
    },
    {
      title: "Chapter 8 - DOM",
      examples: [
        ["querySelector","console.log(document.querySelector('header'));"],
        ["querySelectorAll","console.log(document.querySelectorAll('div'));"],
        ["Create Element","let d=document.createElement('div'); d.innerText='New'; document.body.appendChild(d); console.log(d);"],
        ["Append Child","let p=document.createElement('p'); p.innerText='Hello'; document.body.appendChild(p); console.log(p);"],
        ["Remove Element","let d=document.createElement('div'); d.id='del'; document.body.appendChild(d); document.getElementById('del').remove(); console.log('Deleted');"],
        ["Set Attribute","let b=document.createElement('button'); b.setAttribute('id','btn1'); console.log(b);"],
        ["Change Style","let p=document.createElement('p'); p.style.color='red'; console.log(p);"],
        ["Insert Before","let p=document.createElement('p'); p.innerText='Hi'; document.body.insertBefore(p,document.body.firstChild); console.log(p);"],
        ["Clone Node","let d=document.createElement('div'); let clone=d.cloneNode(true); console.log(clone);"],
        ["innerHTML","let d=document.createElement('div'); d.innerHTML='<b>Bold</b>'; console.log(d);"]
      ]
    },
    {
      title: "Chapter 9 - Events & Validation",
      examples: [
        ["Focus Event","let i=document.createElement('input'); i.addEventListener('focus',()=>console.log('Focused')); console.log(i);"],
        ["Blur Event","let i=document.createElement('input'); i.addEventListener('blur',()=>console.log('Blurred')); console.log(i);"],
        ["Form Submit","let f=document.createElement('form'); f.addEventListener('submit',e=>{e.preventDefault(); console.log('Submit');}); console.log(f);"],
        ["Form Change","let f=document.createElement('form'); let i=document.createElement('input'); f.appendChild(i); f.addEventListener('change',()=>console.log('Changed')); console.log(f);"],
        ["Form Input","let f=document.createElement('form'); let i=document.createElement('input'); f.appendChild(i); i.addEventListener('input',()=>console.log('Input')); console.log(f);"],
        ["Document Click","document.addEventListener('click',()=>console.log('Clicked')); console.log('Listener added');"],
        ["Mouseover","let d=document.createElement('div'); d.addEventListener('mouseover',()=>console.log('Hovered')); console.log(d);"],
        ["Mouseout","let d=document.createElement('div'); d.addEventListener('mouseout',()=>console.log('Out')); console.log(d);"],
        ["Keydown","document.addEventListener('keydown',e=>console.log('Key:',e.key)); console.log('Listener added');"],
        ["Keyup","document.addEventListener('keyup',e=>console.log('Key Up:',e.key)); console.log('Listener added');"]
      ]
    }
  ];

  chapters.forEach(chap => {
    const chapBox = document.createElement("div");
    const chapHeader = document.createElement("h3");
    chapHeader.innerText = chap.title + " (Click to toggle)";
    chapHeader.style.color = "#1e90ff";
    chapBox.appendChild(chapHeader);

    const chapContent = document.createElement("div");
    chapContent.style.display = "none";
    chapContent.style.flexDirection = "column";
    chapContent.style.gap = "10px";

    chap.examples.forEach(([t,c]) => chapContent.appendChild(createExample(t,c)));

    chapBox.appendChild(chapContent);
    chapHeader.onclick = () => {
      chapContent.style.display = chapContent.style.display === "none" ? "flex" : "none";
    };

    contentBox.appendChild(chapBox);
  });
}

//================ DEFAULT ================
showHome();