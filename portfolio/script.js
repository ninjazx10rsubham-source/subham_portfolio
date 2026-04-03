// NAME
function editName(){
 let name=prompt("Enter name");
 document.getElementById("name").innerText=name;
}

// DARK MODE
function toggleMode(){
 document.body.classList.toggle("dark");
}

// BIO
function saveBio(){
 localStorage.setItem("bio",bio.value);
}

window.onload=function(){
 if(document.getElementById("bio")){
  bio.value=localStorage.getItem("bio")||"";
 }
}

// PROJECTS
function addProject(){
 let li=document.createElement("li");
 li.innerText=projectInput.value;
 li.onclick=()=>li.remove();
 projectList.appendChild(li);
 projectInput.value="";
}

// CONTACT
function saveContact(){
 localStorage.setItem("email",email.value);
 localStorage.setItem("phone",phone.value);
 localStorage.setItem("linkedin",linkedin.value);
}

// CERTIFICATES
function uploadCert(){
 let file=document.getElementById("certUpload").files[0];
 let reader=new FileReader();

 reader.onload=function(){
  let img=document.createElement("img");
  img.src=reader.result;
  img.style.width="100px";
  certList.appendChild(img);
 }

 reader.readAsDataURL(file);
}

// CHATBOT (SAFE VERSION)
function sendMessage(){
 let input=document.getElementById("chat-input");
 let box=document.getElementById("chat-box");

 let user=document.createElement("div");
 user.innerText="You: "+input.value;
 box.appendChild(user);

 let bot=document.createElement("div");
 bot.innerText="Bot: "+reply(input.value);
 box.appendChild(bot);

 input.value="";
 box.scrollTop=box.scrollHeight;
}

function reply(msg){
 msg=msg.toLowerCase();

 if(msg.includes("name")) return "This is my portfolio website!";
 if(msg.includes("project")) return "Check my projects section.";
 if(msg.includes("contact")) return "You can contact me via email or LinkedIn.";
 if(msg.includes("skills")) return "I have skills in AI, ML, Python.";

 return "I am still learning 😅";
}

// VOICE
function startVoice(){
 let recognition = new(window.SpeechRecognition || window.webkitSpeechRecognition)();
 recognition.onresult=function(e){
  document.getElementById("chat-input").value=e.results[0][0].transcript;
 };
 recognition.start();
}

// ANIMATION
ScrollReveal().reveal('.card',{delay:200});
