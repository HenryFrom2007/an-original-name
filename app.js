const purple = document.querySelector(".purple")
const pink = document.querySelector(".pink")
const sidebar = document.querySelector(".sidebar")
const activeListItem = document.querySelector(".list-item.active")
const hoverListItem = document.querySelector(".list-item:hover")

purple.addEventListener("click", ()=>{
    sidebar.className = "sidebar";
    activeListItem = "list-item active"
    hoverListItem = "list-item:hover"
})

pink.addEventListener("click", ()=>{
    sidebar.className = "sidebar pink";
    activeListItem = "list-item active pink"
    hoverListItem = "list-item:hover pink"
})

