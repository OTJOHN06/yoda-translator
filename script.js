const input = document.getElementById('text-input')
const output = document.getElementById('text-output')
const button = document.getElementById('output-text-button')

async function translate() {
    const response = await fetch(`https://cors-anywhere.herokuapp.com/https://yoda-api.appspot.com/api/v1/yodish?text=${input.value}`)
    .then(response => response.json())
    .then(response => {
        console.log(response.yodish)
        output.textContent = response.yodish

    })
}

button.addEventListener('click', translate)