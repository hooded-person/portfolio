const checkbox = document.getElementById("darkModeCheckbox")

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    // dark mode
    checkbox.checked = true
} else {
    checkbox.checked = false
}

document.body.setAttribute("data-theme", checkbox.checked ? "dark" : "light")


checkbox.addEventListener("change", (e)=>{
    console.log("darkmode was toggled")
    
    document.body.setAttribute("data-theme", e.target.checked ? "dark" : "light")
})