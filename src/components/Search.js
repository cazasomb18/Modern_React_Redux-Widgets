import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
	const [term, setTerm] = useState('');

	// console.log('I RUN WITH EVERY RENDER');

	useEffect(() => {
		const search = async () => {
			await axios.get('https://en.wikipedia.org/w/api.php', {
				params: {
					action: 'query',
					list: 'search',
					origin: '*',
					format: 'json',
					srsearch: term
				}
			});
		};

		search();
	}, [term]);


	return(
		<div>
			<div className="ui form">
				<div className="field">
					<label>Enter Search Tern</label>
					<input onChange={e => setTerm(e.target.value)} value={term} className="input"/>
	 			</div>
			</div>
		</div>
	);
	
};

export default Search;