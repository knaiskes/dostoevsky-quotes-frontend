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
	<div className="App">
	    <table>
		<tbody>
		    <tr>
			<th>Text</th>
			<th>Novel</th>
		    </tr>
		    {list && list.results.map(item => <tr key={item.text}>
		   <td>{item.text}</td>
		   <td> {item.novel}</td>
		   </tr>
		   )}
		</tbody>
	    </table>
	</div>
    );
}
