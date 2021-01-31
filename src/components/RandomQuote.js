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
	<div className="RandomQuote">
	    <table>
		<tbody>
		    <tr>
			<th>Text</th>
			<th>Novel</th>
		    </tr>
		    <tr>
			<td>{quote.novel}</td>
			<td>{quote.text}</td>
			</tr>
		</tbody>
	    </table>
	</div>
    );
}
