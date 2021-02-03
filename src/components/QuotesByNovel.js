import React, { useEffect, useState } from 'react';

import { GetQuotesByNovel } from './service/quote';
import { useParams } from 'react-router-dom';

export function QuotesByNovel() {
    const [list, setList] = useState();
    const { novel } = useParams();
    useEffect(() => {
	let mounted = true;
	GetQuotesByNovel(novel)
	    .then(data => {
		if(mounted) {
		    setList(data)
		}
	    })
	return () => mounted = false;
    }, [novel])

    return (
	<div className="PageTitle">
	    <div className="App">
		<h2>Quotes by {novel} novel</h2>
		<table className="QuotesTable">
		<tbody>
		    <tr>
			<th>Quote</th>
			<th>Novel</th>
		    </tr>
		    {list && list.results.map(item => <tr key={item.text}>
		   <td className="QuoteText">{item.text}</td>
		   <td className="QuoteNovel"> {item.novel}</td>
		   </tr>
		   )}
		</tbody>
	    </table>
	    </div>
	</div>
);
}
