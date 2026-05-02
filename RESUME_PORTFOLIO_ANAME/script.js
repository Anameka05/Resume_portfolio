// THEME
function toggleTheme(){
  document.body.classList.toggle("light");
}

// TYPING
const words=["AI Engineer","ML Enthusiast","Data Analyst"];
let i=0,j=0,del=false;

function type(){
  let text=words[i];

  if(!del){
    document.getElementById("typing").innerText=text.slice(0,j++);
    if(j>text.length){del=true;setTimeout(type,1000);return;}
  }else{
    document.getElementById("typing").innerText=text.slice(0,j--);
    if(j==0){del=false;i=(i+1)%words.length;}
  }
  setTimeout(type,del?50:100);
}
type();

// MODAL
function openModal(title,desc){
  document.getElementById("modal").style.display="flex";
  document.getElementById("modal-title").innerText=title;
  document.getElementById("modal-desc").innerText=desc;
}
function closeModal(){
  document.getElementById("modal").style.display="none";
}