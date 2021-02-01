import React, { useEffect, useState } from 'react';

import { GetQuoteById } from './service/quote';
import { useParams } from 'react-router-dom';

export function SingleQuote() {
    const [quote, setQuote] = useState([]);
    const { id } = useParams();
    useEffect(() => {
	let mounted = true;
	GetQuoteById(id)
	    .then(data => {
		if(mounted) {
		    setQuote(data)
		}
	    })
	return () => mounted = false;
    }, [id])

    return (
	<div className="SingleQuote">
	    <table>
		<tbody>
		    <tr>
			<th>Name</th>
			<th>Device</th>
		    </tr>
		    <tr>
			<td>{quote.text}</td>
			<td>{quote.novel}</td>
		    </tr>
		</tbody>
	    </table>
	</div>
    );
}
