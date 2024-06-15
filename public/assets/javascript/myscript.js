console.log("Welcome to, Merriam-Webster Dictionary API!");





// API Key = 46ac3ec6-4aa6-447c-977a-765d26a646d5

async function getData() {
    const result = await fetch ("https://www.dictionaryapi.com/api/v3/references/collegiate/json/dragon?key=46ac3ec6-4aa6-447c-977a-765d26a646d5")
    const infoFromServer = await result.json();

    console.log('info from server: ' + JSON.stringify(infoFromServer))
}

getData();

//<br>${pronounciation}</br>

async function getDefinition() {
    const word = document.getElementById('textInput').value;
    const url = `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=46ac3ec6-4aa6-447c-977a-765d26a646d5`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        let myResult = document.getElementById('result');
        myResult.innerHTML = '';

        if (data.length > 0) {
            const definition = data[0].shortdef[0];
            const anotherDefinition = data[0].shortdef[1];
            // const pronounciation = audio[0];
            myResult.innerHTML = `<h2>Here's the definition you are looking for the word, "${word}"</h2><br>${anotherDefinition}</br><br>${definition}</br>`;
        } else {
            myResult.innerHTML = '<p>No definition found.</p>';
        }
    } catch (error) {
        console.error('Error fetching the definition:', error);
        document.getElementById('result').innerHTML = '<p>Error fetching the definition.</p>';
    }
}