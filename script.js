function random() {
  let random = Math.random() * 100 + 1;
  let randpercent = Math.floor(random);
  return randpercent;
}

let btn = document.getElementById("calc");
btn.addEventListener("click", function () {
  let percent = random();
  let name1=document.getElementById("name1").value;
  let name2=document.getElementById("name2").value;
document.getElementById("msg").innerHTML=`<h1>${name1}&#10084;${name2}</h1>`
let word=document.getElementById("word"); 
if (percent > 50) {
    word.innerHTML = "<h3>There is hope</h3>";
    word.style.color="green"
  } else {
    word.innerHTML = "<h3>Try with someone else</h3>";
    word.style.color="yellow"

  }
  document.getElementById("percent").innerHTML = `<h3>${percent}%</h3>`;
});
