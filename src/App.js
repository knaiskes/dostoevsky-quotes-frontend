import './App.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { RandomQuote } from './components/RandomQuote';
import { SingleQuote } from './components/SingleQuote';

function App() {
    return (
	    <div className="App">
	    <BrowserRouter>
	    <Switch>
	    <Route path='/quotes/:id' exact component={SingleQuote} />
	    </Switch>
	    </BrowserRouter>
	    </div>
    );
}

export default App;
