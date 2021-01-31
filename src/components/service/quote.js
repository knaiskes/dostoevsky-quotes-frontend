// Fetch quote(s) service

const BASE_URL = 'http://localhost:8000/api/quotes/';

const headers = {"Content-Type": "application/json"};

export function GetRandomQuote() {
    const url = `${BASE_URL}random`;
    return fetch(url, {headers})
	.then(data => data.json())
}
