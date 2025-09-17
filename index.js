const colorPicker = document.getElementById('color-picker')
const form = document.getElementById('color-form')
const select = document.getElementById('color-select')
const colorDiv = document.getElementById('color')
const colorText = document.getElementById('color-value')
let colorArray = []




form.addEventListener('submit', function(e){
    e.preventDefault()
    colorArray = [colorPicker.value]
    fetch(`https://www.thecolorapi.com/scheme?hex=${colorPicker.value.substring(1)}&mode=${select.value}&count=4`)
    .then(res => res.json())
    .then(data => {
        for (let color of data.colors){
            colorArray.push(color.hex.value)
        }
    renderColors(colorArray)
    
    })

})

renderColors = (colors) => {
colorDiv.innerHTML = ''
colorText.innerHTML = ''
    for (let color of colors) {
        colorDiv.innerHTML += `
        <div id="${color}"></div>
        `
        document.getElementById(`${color}`).style.backgroundColor = color
        colorText.innerHTML += `
        <div><p>${color}</p></div>
        `
    }
    
}