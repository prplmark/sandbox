// Import React
import React from 'react';

let info, page, content;

export class Info extends React.Component {
	render() {
		return (
			<article id="info">
				<div className="content">
					<h2 className="headline">About Me?</h2>
					<p>I’m an obsessive compulsive detail’s person and I tend to stay busy with life &amp; <a href="http://purplerockscissors.com" target="_blank">work</a>. I love interaction design, using front-end frameworks like <a href="https://facebook.github.io/react/" target="_blank">React JS</a> and long walks on the beach. I’m also quite familiar with CMS development.</p>
					<h3>Hit Me Up</h3>
					<ul className="social">
						<li><a href="#" target="_blank"><i className="icon-linkedin" /></a></li>
						<li><a href="#" target="_blank"><i className="icon-github-alt" /></a></li>
						<li><a href="#" target="_blank"><i className="icon-dribbble" /></a></li>
						<li><a href="#" target="_blank"><i className="icon-medium" /></a></li>
						<li><a href="#" target="_blank"><i className="icon-instagram" /></a></li>
					</ul>
				</div>
			</article>
		);
	}
	componentDidMount = () => {
		
		info    = document.getElementById('info');
		page    = document.getElementById('page');
		content = info.getElementsByClassName('content');
		
		// Listen for scroll event
		this._getHeight();
		
		window.addEventListener('scroll', this._onScroll);
		window.addEventListener('resize', this._getHeight);
			
	};
	componentWillUnmount = () => {

		window.removeEventListener('scroll', this._onScroll);
		window.removeEventListener('resize', this._getHeight);
		
	};
	_onScroll = (event) => {
		
		let scrollTop   = window.scrollY,
			infoScroll  = info.clientHeight,
			maths		= (-(scrollTop-infoScroll)/2).toFixed(2),
			opacity		= scrollTop/infoScroll;
			
		// Animate the content
		TweenMax.set(content, {y: maths, opacity: opacity.toFixed(2) });
		
	};
	_getHeight = () => {
		
		page.style.marginBottom = `${info.clientHeight-32}px`
		
	};
};