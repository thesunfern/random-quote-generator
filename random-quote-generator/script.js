const generateRandomQuote = () => {
	const options = {
		method: "GET",
		headers: {
			"X-RapidAPI-Key": "52a3bb1012msh259072fccca1860p1905aejsndb71618bb49a",
			"X-RapidAPI-Host": "quotes15.p.rapidapi.com",
		},
	};

	fetch("https://quotes15.p.rapidapi.com/quotes/random/", options)
		.then(response => response.json())
		.then(response => {
			quote.innerHTML = response.content;
			author.innerHTML = response.originator.name;
		})
		.catch(err => console.error(err));
};

const cancelQuote = () => {
	quote.innerHTML = "";
	author.innerHTML = "";
};

generateQuoteBtn.addEventListener("click", e => {
	e.preventDefault();
	generateRandomQuote();
});

// cancelBtn.addEventListener("click", e => {
// 	e.preventDefault();
// 	cancelQuote();
// });

generateRandomQuote();
