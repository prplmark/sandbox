// Import React
import React from 'react';

// Functions
import { animate } from './_animations';

export class Paper extends React.Component {
	render() {
		return (
			<div id="mark">
				<svg id="paper" width="201px" height="184px" viewBox="597 267 201 184" version="1.1">
				    <defs>
				        <filter x="-50%" y="-50%" width="200%" height="200%" filterUnits="objectBoundingBox" id="filter-1">
				            <feOffset dx="3" dy="3" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
				            <feGaussianBlur stdDeviation="2.5" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
				            <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.09765625 0" type="matrix" in="shadowBlurOuter1" result="shadowMatrixOuter1"></feColorMatrix>
				            <feMerge>
				                <feMergeNode in="shadowMatrixOuter1"></feMergeNode>
				                <feMergeNode in="SourceGraphic"></feMergeNode>
				            </feMerge>
				        </filter>
				        <linearGradient x1="58.3389476%" y1="85.7203553%" x2="9.66341175%" y2="29.0541808%" id="linearGradient-1">
				            <stop stopColor="#F2F2F2" offset="0%"></stop>
				            <stop stopColor="#F5F5F5" offset="100%"></stop>
				        </linearGradient>
				        <linearGradient x1="81.6155585%" y1="0%" x2="54.771287%" y2="44.0141862%" id="linearGradient-2">
				            <stop stopColor="#E9E9E9" offset="0%"></stop>
				            <stop stopColor="#CDCDCD" offset="100%"></stop>
				        </linearGradient>
				        <linearGradient x1="87.633846%" y1="86.6546759%" x2="0%" y2="37.3249587%" id="linearGradient-3">
				            <stop stopColor="#C5C5C5" offset="0%"></stop>
				            <stop stopColor="#929292" offset="100%"></stop>
				        </linearGradient>
				        <linearGradient x1="62.8591329%" y1="50%" x2="37.0708153%" y2="73.0448031%" id="linearGradient-4">
				            <stop stopColor="#BDBDBD" offset="0%"></stop>
				            <stop stopColor="#CBCBCB" offset="100%"></stop>
				        </linearGradient>
				        <linearGradient x1="76.6028886%" y1="77.74733%" x2="50%" y2="50%" id="linearGradient-5">
				            <stop stopColor="#DDDDDD" offset="0%"></stop>
				            <stop stopColor="#ECECEC" offset="100%"></stop>
				        </linearGradient>
				        <linearGradient x1="0%" y1="10.7576706%" x2="50%" y2="50%" id="linearGradient-6">
				            <stop stopColor="#D7D7D7" stopOpacity="0.972769475" offset="0%"></stop>
				            <stop stopColor="#AEAEAE" offsO="100%"></stop>
				        </linearGradient>
				    </defs>
				    <g id="mark-g" filter="url(#filter-1)" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" transform="translate(597.000000, 267.000000)">
				        <polygon id="top-left" 	   fill="url(#linearGradient-1)" points="0 0 0 80 100 94.082"></polygon>
				        <polygon id="middle-left"  fill="url(#linearGradient-2)" points="100 94 0 80 100 180"></polygon>
				        <polygon id="bottom-left"  fill="url(#linearGradient-4)" points="0 80 0 184 61.797 141.797"></polygon>
				        <polygon id="top-right"    fill="url(#linearGradient-5)" points="200 80 100 94.207 200 0"></polygon>
				        <polygon id="middle-right" fill="url(#linearGradient-6)" points="100 94 200 80 100 180"></polygon>
				        <polygon id="bottom-right" fill="url(#linearGradient-3)" points="200.043 80 200.043 184 138.22 141.78"></polygon>
				    </g>
				</svg>

				<svg id="shadow" width="544px" height="536px" viewBox="597 267 544 536" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
				    <defs>
				        <linearGradient x1="19.1092047%" y1="17.7048391%" x2="69.3696607%" y2="67.7492131%" id="linearGradient-shadow">
				            <stop stopColor="#000000" stopOpacity="0.25" offset="0%"></stop>
				            <stop stopColor="#505050" stopOpacity="0" offset="100%"></stop>
				        </linearGradient>
				    </defs>
				    <polygon id="shadow-path" stroke="none" fill="url(#linearGradient-shadow)" fillRule="evenodd" points="597 451 948.358169 802.048592 1140.66797 601.674805 797 267 797 451 735.200012 408.799988 697 447 658.799988 408.799988"></polygon>
				</svg>
			</div>
		);
	}
	componentDidMount = () => {
		
		animate.paper();
			
	};
};