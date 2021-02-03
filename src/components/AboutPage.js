export function AboutPage() {
    return (
	<div className="AboutPage">
	    <h1>About</h1>
	    <p>
		A collection of quotes from novels written by Fyodor Dostoevsky.
		I will try my best to add as many quotes as I can (and if possible
		all of them!). <br/>Of course, if you can spot any missing quote do not
		hesitate to <a href = "mailto: kiriakosnaiskes@gmail.com">email me!</a>
	    </p>
	    <h2>Source Code</h2>
	    <p>
		Both the frontend and the backend (API) of this porject are Open Source
		and available at:
		<ul>
		    <li><a target="_blank" href="https://github.com/KNaiskes/dostoevsky-quotes-api">dostoevsky-quotes-api</a></li>
		    <li><a target="_blank" href="https://github.com/KNaiskes/dostoevsky-quotes-frontend">dostoevsky-quotes-frontend</a></li>
		</ul>
	    </p>
	</div>
    );
}
