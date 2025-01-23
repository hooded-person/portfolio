const checkbox = document.getElementById("darkModeCheckbox")

let preferedColorScheme =()=>(window && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? "dark" : "light"

// check prefered and previous settings
if (preferedColorScheme() == "dark" || localStorage.getItem("theme") == "dark") {
    // dark mode
    checkbox.checked = true
}

document.body.setAttribute("data-theme", checkbox.checked ? "dark" : "light")


checkbox.addEventListener("change", (e)=>{
    console.log("darkmode was toggled")

    let newTheme = e.target.checked ? "dark" : "light"
    
    document.body.setAttribute("data-theme", newTheme)
    if (preferedColorScheme() != newTheme) {
        localStorage.setItem("theme", newTheme)
    } else {
        localStorage.removeItem("theme")
    }
})