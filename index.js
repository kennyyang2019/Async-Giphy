// require('dotenv').config();
const API_KEY = "q2X77WuKBHvgvlq82pffWPnsjbcSROnn";

const inputField = document.querySelector("#queryInput");
const submitBtn = document.querySelector("#submitBtn");
const container = document.querySelector(".container");

submitBtn.addEventListener("click", () => {
    container.innerHTML = ''
	const queryValue = inputField.value;
	const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${queryValue}&limit=25&offset=0&rating=g&lang=en`;
	fetch(endpoint)
		.then((res) => res.json())
		.then((data) => {
			const gifs = data.data;
			gifs.forEach((gif) => {
				let id = gif.id;
				let url = `https://media.giphy.com/media/${id}/giphy.gif`;
				const img = document.createElement("img");
				img.src = url;
				container.appendChild(img);
			});
		});
});
