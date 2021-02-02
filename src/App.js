import './App.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { Navbar } from './components/Navbar';

import { RandomQuote } from './components/RandomQuote';
import { SingleQuote } from './components/SingleQuote';
import { AllQuotesList } from './components/AllQuotesList';
import { QuotesByNovel } from './components/QuotesByNovel';

function App() {
    return (
	    <div className="App">
	    <Navbar />
	    <BrowserRouter>
	    <Switch>
	    <Route path='/quotes/all' exact component={AllQuotesList} />
	    <Route path='/quotes/random' exact component={RandomQuote} />
	    <Route path='/quotes/:id' exact component={SingleQuote} />
	    <Route path='/quotes/novel/:novel' exact component={QuotesByNovel} />
	    </Switch>
	    </BrowserRouter>
	    </div>
    );
}

export default App;
