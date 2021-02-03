import React, { useEffect, useState } from 'react';

import { GetAllQuotes } from './service/quote';

export function AllQuotesList() {
    const [list, setList] = useState();
    useEffect(() => {
	let mounted = true;
	GetAllQuotes()
	    .then(items => {
		if(mounted) {
		    setList(items)
		}
	    })
	return () => mounted = false;
    }, [])

    return (
	<div className="PageTitle">
	    <h2>All Quotes</h2>
	    <div className="App">
		<table className="QuotesTable">
		    <tbody>
			<tr>
			    <th>Quote</th>
			    <th>Novel</th>
			</tr>
			{list && list.results.map(item => <tr key={item.text}>
							      <td className="QuoteText">{item.text}</td>
							      <td className="QuoteNovel">{item.novel}</td>
							  </tr>
						 )}
		    </tbody>
		</table>
	    </div>
	</div>
    );
}
