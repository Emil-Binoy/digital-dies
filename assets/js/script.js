const arr = [1,2,3,4,5,6];
const random=document.getElementById("btn");
const container = document.getElementById("container");
random.addEventListener("click",()=>{
    let len = Math.floor(Math.random()*arr.length);
    let num = arr[len];
    container.textContent = num;
    container.style.visibility = "visible";
});
