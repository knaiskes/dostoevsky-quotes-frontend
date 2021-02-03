import React from "react";

export const Navbar = () => (
    <div className="navbar">
	<a href="/">About</a>
	<a href="/quotes/all">All</a>
	<a href="/quotes/random">Random</a>
	<div className="subnav">
	    <button className="subnavbtn">By Novel</button>
	    <div className="subnav-content">
		<a href="/quotes/novel/Crime and Punishment">Crime and Punishment</a>
		<a href="/quotes/novel/Humiliated and Insulted">Humiliated and Insulted</a>
		<a href="/quotes/novel/Netochka Nezvanova">Netochka Nezvanova</a>
		<a href="/quotes/novel/Notes from Underground">Notes from Underground</a>
		<a href="/quotes/novel/Poor Folk">Poor Folk</a>
		<a href="/quotes/novel/The Adolescent">The Adolescent</a>
		<a href="/quotes/novel/The Brothers Karamazon">The Brothers Karamazon</a>
		<a href="/quotes/novel/The Double">The Double</a>
		<a href="/quotes/novel/The Eternal Husband">The Eternal Husband</a>
		<a href="/quotes/novel/The Gambler">The Gambler</a>
		<a href="/quotes/novel/The House of the Dead">The House of the Dead</a>
		<a href="/quotes/novel/The Idiot">The Idiot</a>
		<a href="/quotes/novel/The Landlady">The Landlady</a>
		<a href="/quotes/novel/The Possessed">The Possessed</a>
		<a href="/quotes/novel/The Village of Stepanchikovo">The Village of Stepanchikovo</a>
		<a href="/quotes/novel/Unclue's Dream">Unclue's Dream</a>
	    </div>
	</div>
    </div>

);
