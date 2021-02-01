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
    console.log(setList);
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
