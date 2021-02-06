// Fetch quote(s) service

const BASE_URL = 'https://knaiskes.pythonanywhere.com/api/quotes/';

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
}

export function GetAllQuotes() {
    const url = `${BASE_URL}`;
    return fetch(url, {headers,})
	.then(data => data.json())
}

export function GetQuotesByNovel(novel) {
    const url = `${BASE_URL}novel/${novel}`;
    return fetch(url, {headers,})
	.then(data => data.json())
}
