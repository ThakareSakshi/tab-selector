let container = document.querySelector("#container");
const tabBtn = document.querySelector(".tab-btn");
Desc.forEach((ele, index) => {

  let btn = document.createElement("button");

  btn.innerText = "tab" + (index + 1);

  btn.setAttribute("id", `tab${index + 1}`);
  tabBtn.appendChild(btn);
  document.getElementById("tab1").setAttribute("class", "selected");



  btn.addEventListener('click', () => {
    let detail = document.querySelector(".desc-container");
    detail.innerHTML = `<h2>${ele['tab-name']}</h2>
      <p>${ele.desc}</p>`;
    document.getElementById("tab1").classList.remove("selected");
    
     
   

    let image = document.querySelector("#imgs");
    image.setAttribute("src", `${ele.image}`);
    image.classList.add("anime");
    setTimeout(()=>{
      image.classList.remove("anime")
    },1000)
  })

  document.getElementById("tab1").setAttribute("class", "selected");
});