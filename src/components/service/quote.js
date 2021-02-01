// Fetch quote(s) service

const BASE_URL = 'http://localhost:8000/api/quotes/';

const headers = {"Content-Type": "application/json"};

export function GetRandomQuote() {
    const url = `${BASE_URL}random`;
    return fetch(url, {headers})
	.then(data => data.json())
}

export function GetQuoteById(id) {
    const url = `${BASE_URL}${id}`;
    return fetch(url, {headers,})
	.then(data => data.json())
    console.log(url)
}
