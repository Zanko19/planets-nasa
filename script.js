async function loadEarthImage() {
    const apiKey = "yaLsNpescjEZrNuFt4af7gQKqG0IPqPlUcjYHHn7";
    const apiUrl = `https://api.nasa.gov/planetary/earth/imagery?api_key=${apiKey}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data); // Ajoutez cette ligne

        const earthImageContainer = document.getElementById('earth-image-container');

        if (data.url) {
            const imageUrl = data.url;
            earthImageContainer.innerHTML = `<img src="${imageUrl}" alt="NASA Earth Image">`;
        } else {
            alert("No Earth image available.");
        }
    } catch (error) {
        console.error('Error fetching data:', error);
        alert(`Error fetching data. See the console for details. ${error.message}`);
    }
    
    
}
