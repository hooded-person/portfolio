let colors = { // 0 is light mode; 1 is darkmode
    txtColor: ["black", "white"],
    backgroundBody: ["white", "#121212"],
}
const checkbox = document.getElementById("darkModeCheckbox")
const root = document.querySelector(":root")

let prop = {}
prop.get = (property) => {
    let computedStyle = getComputedStyle(root)
    let propertyValue = computedStyle.getPropertyValue(property)
    
    return propertyValue
}
prop.set = (property, value) => {
    root.style.setProperty("--" + property, value)
}

function toggleColors(colorMode) {
    if (prop.get("--mode") == colorMode) {
        return false, "already applied", prop.get("--mode")
    }
    
    for (const [property, values] of Object.entries(colors)) {
        let value = values[colorMode]
        console.log(`${property}: ${value}`);
    }
    
    prop.set("--mode", colorMode)
    return true, "applied new colors", prop.get("--mode")
}


checkbox.addEventListener("change", (e)=>{
    console.log("darkmode was toggled")
    let success, msg, modeValue = toggleColors(Number(e.target.checked))
    console.log(success, msg, modeValue)
})