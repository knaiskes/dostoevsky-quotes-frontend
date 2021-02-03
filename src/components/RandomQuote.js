import React, { useEffect, useState } from 'react';

import { GetRandomQuote } from './service/quote';

export function RandomQuote() {
    const [quote, setQuote] = useState([]);
    useEffect(() => {
	let mounted = true;
	GetRandomQuote()
	    .then(data => {
		if(mounted) {
		    setQuote(data)
		}
	    })
	return () => mounted = false;
    }, [])

    return (
	<div className="PageTitle">
	    <h2>Random Quote</h2>
	    <div className="RandomQuote">
		<h1 className="quoteText">"{quote.text}"b</h1>
		<h4>{quote.novel}</h4>
	    </div>
	</div>
    );
}
