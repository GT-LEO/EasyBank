const toggle =document.querySelector(".toggle-button");
const navBarContainer = document.querySelector(".navBar-container");
console.log(toggle);
toggle.addEventListener("click",handleClick);
function handleClick(e){
	navBarContainer.classList.toggle("active")
}