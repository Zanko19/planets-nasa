document.addEventListener("DOMContentLoaded", function() {
    // Replace 'YOUR_API_KEY' with your actual API key
    const apiKey = "yaLsNpescjEZrNuFt4af7gQKqG0IPqPlUcjYHHn7";

    // Function to fetch and display an EPIC image
    function fetchAndDisplayImage(apiUrl) {
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                // Get the first image data
                const image = data[0];

                // Construct the image URL
                const imageUrl = "https://epic.gsfc.nasa.gov/archive/natural/${image.date.slice(0, 4)}/${image.date.slice(5, 7)}/${image.date.slice(8, 10)}/png/${image.image}.png";

                // Update the image source
                document.getElementById("epicImage").src = imageUrl;
            })
            .catch(error => console.error("Error fetching data:", error));
    }

    // Fetch and display EPIC image by specific date
    const dateApiUrl = `https://api.nasa.gov/EPIC/api/natural/date/2019-05-30?api_key=${apiKey}`;
    fetchAndDisplayImage(dateApiUrl);

    // Fetch and display all EPIC images
    const allApiUrl = `https://api.nasa.gov/EPIC/api/natural/all?api_key=${apiKey}`;
    fetchAndDisplayImage(allApiUrl);

    // Fetch and display a specific EPIC image by URL
    const specificImageUrl = `https://api.nasa.gov/EPIC/archive/natural/2019/05/30/png/epic_1b_20190530011359.png?api_key=${apiKey}`;
    document.getElementById("specificImage").src = specificImageUrl;
});
