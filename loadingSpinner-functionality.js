window.addEventListener("load", ()=>{
    const loader = document.querySelector(".center")
    loader.classList.add("loader-hiden")
    loader.addEventListener("transitionend", () =>{
    document.body.removeChild("center");
    })
 })
  
 const logoutButtn = document.getElementById('lgt')

logoutButtn.addEventListener('click', ()=>{
    localStorage.setItem('token', '')
})