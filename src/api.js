const name_ = "onesmus"

const urls = {
    random_cat_facts:"https://catfact.ninja/fact",
    bored:"https://www.boredapi.com/api/activity",
    agify:`https://api.agify.io/?name=${name_}`,
    jokes:"https://official-joke-api.appspot.com/random_joke"
}



fetch(urls.jokes)
.then(res => res.json())
.then(data => {
    let jokesTag = document.getElementById("jokesTag")
    let jokesPunchline = document.getElementById("jokesPunchline")
    jokesTag.innerHTML = `<h4>${data.setup}</h4>`
    jokesPunchline.innerHTML = `<h4>${data.punchline}</h4>`
    console.log(`${data.setup}\n${data.punchline}`)
})
.catch(err => console.log(err))

setTimeout(() => {
    location.reload()
}, 10000);
