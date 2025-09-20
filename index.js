/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const inputEl = document.getElementById("input-el")
const convertBtn = document.getElementById("convert-btn")
let lengthEl = document.getElementById("length-div")
let volumeEl = document.getElementById("volume-div")
let massEl = document.getElementById("mass-div")




convertBtn.addEventListener("click",function(){
    lengthEl.innerHTML = `<h3>Length (Meter/Feet)</h3>`;
    volumeEl.innerHTML = `<h3>Volume (Liters/Gallons)</h3>`;
    massEl.innerHTML = `<h3>Mass (Kilograms/Pounds)</h3>`;
    const inputVal = inputEl.value
    if(isNaN(inputVal)){
        alert("please enter a valid number")
        inputEl.value = ""
        return
    }
    const meters = inputVal /3.281
    const feets = inputVal *3.281
    const liters = inputVal /0.264
    const gallons = inputVal *0.264
    const kilograms = inputVal / 2.204
    const pounds = inputVal * 2.204
   
    lengthEl.innerHTML += `<p>${inputVal} meters = ${feets.toFixed(3)} feet | ${inputVal} feet = ${meters.toFixed(3)} meters </p>`
    volumeEl.innerHTML += `<p>${inputVal} liters = ${gallons.toFixed(3)} gallons | ${inputVal} gallons = ${liters.toFixed(3)} liters </p>`
    massEl.innerHTML += `<p>${inputVal} kilos = ${pounds.toFixed(3)} pounds | ${inputVal} pounds = ${kilograms.toFixed(3)} kilos </p>`

})

