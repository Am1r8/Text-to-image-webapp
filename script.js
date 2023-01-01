const openai = window.openai;
openai.apiKey = "YOUR_API_KEY_HERE";

const imageForm = document.getElementById("image-form");
imageForm.addEventListener("submit", async(event) => {
    event.preventDefault();

    const imageText = document.getElementById("image-text").value;
    const response = await openai.images.create({
        model: "image-alpha-001",
        prompt: imageText
    });

    // Display the generated image to the user
    const imageUrl = response.data.url;
    const imageElement = document.createElement("img");
    imageElement.src = imageUrl;
    document.body.appendChild(imageElement);
});