console.log("Welcome to, Merriam-Webster Dictionary API!");

// API Key = 46ac3ec6-4aa6-447c-977a-765d26a646d5

async function getData() {
    const result = await fetch ("https://www.dictionaryapi.com/api/v3/references/collegiate/json/dragon?key=46ac3ec6-4aa6-447c-977a-765d26a646d5")
    const infoFromServer = await result.json();
    // let's see if this works
    const url = "https://api.dictionaryapi.dev/api/v2/enties/en"
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
            const definitions = data[0].shortdef;
            const pronunciation = data[0].hwi.prs[0].mw;

            myResult.innerHTML = `<h2>${word}</h2><br>/${pronunciation}/</br>`;

            definitions.forEach(def => {
                myResult.innerHTML += `<br>• ${def}</br>`;
            });
        } else {
            myResult.innerHTML = '<p>No definition found.</p>';
        }
    } catch (error) {
        console.error('Error fetching the definition:', error);
        document.getElementById('result').innerHTML = '<p>Error fetching the definition.</p>';
    }
}