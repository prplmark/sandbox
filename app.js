var animate = {

	paper: function() {

		// Display the paper mark
		let mark = document.getElementById('mark');
			mark.style.display = "block";
	
		// Unfold the middle
		let middleLeft  = document.getElementById('middle-left'),
			middleRight = document.getElementById('middle-right');
			
		TweenMax.from(middleLeft,  0.6,  {ease: Power2.easeInOut, attr:{points:"100 94 100 94 100 180"}});  //100 94 0 80 100 180
		TweenMax.from(middleRight, 0.25, {ease: Power2.easeInOut, attr:{points:"100 94 100 94 100 180"}, delay: 0.32}); //100 94 200 80 100 180	
	
		// Undfold the top
		let topLeft  = document.getElementById('top-left'),
			topRight = document.getElementById('top-right');
		
		TweenMax.from(topLeft,  0.6,  {ease: Power2.easeInOut, attr:{points:"100 94 0 80 100 94.082"}, 		 delay: 0.4 });
		TweenMax.from(topRight, 0.55, {ease: Power2.easeInOut, attr:{points:"200 80 100 94.207 100 94.082"}, delay: 0.2 });
	
		// Unfold the bottom
		let bottomLeft  = document.getElementById('bottom-left'),
			bottomRight = document.getElementById('bottom-right');
		
		TweenMax.from(bottomLeft,  0.4, {ease: Power2.easeInOut, attr:{points:"0 80 61.797 141.797 61.797 141.797"}, delay: 0.72, onComplete: animate.header});
		TweenMax.from(bottomRight, 0.4, {ease: Power2.easeInOut, attr:{points:"200.043 80 138 142 138.22 141.78"}, delay: 0.58});
		
		// Bring the shadow
		let shadow     = document.getElementById('shadow'),
			shadowPath = document.getElementById('shadow-path'),
			shadowPoints = "597 451 597 451 797 451 797 267 797 451 735.200012 408.799988 697 447 658.799988 408.799988";

		TweenMax.from(shadowPath, 1.18, {ease: Power2.easeInOut, attr:{ points: shadowPoints}, delay: 1.2});
		TweenMax.from(shadowPath, 1.6,  {opacity: 0, delay: 0.8});

	},
	
	background: function(){

		let bg 			= document.getElementById('wrapper'),
			gradientObj = {color0:'#333', color1:'#111'};

		// Pass obj to linear gradient
		let applyBackground = () => {
			bg.style.backgroundImage = `linear-gradient(139deg, ${gradientObj.color0} 0%, ${gradientObj.color1} 100%)`;
		}
		
		let runLoop = () => {
			// Play bg timeline
			tl.play();
		}
			
		let tl = new TimelineMax({paused: true, repeat:-1,yoyo:false, onUpdate:applyBackground}),
			duration = 5,
			delay 	 = 5;
		
		// Releases the gradients...
		tl.to(gradientObj, duration, {colorProps:{color0:'#14D5D3', color1:'#21D974'}, delay: delay })
// 		  .to(gradientObj, duration, {colorProps:{color0:'#FF9B07', color1:'#21D974'}, delay: delay }) // Save these for later
// 		  .to(gradientObj, duration, {colorProps:{color0:'#FF9B07', color1:'#CA1515'}, delay: delay })
// 		  .to(gradientObj, duration, {colorProps:{color0:'#D11E45', color1:'#CA1515'}, delay: delay })
		  .to(gradientObj, duration, {colorProps:{color0:'#D11E45', color1:'#2189D9'}, delay: delay })
		  .to(gradientObj, duration, {colorProps:{color0:'#14D5D3', color1:'#2189D9'}, delay: delay })
		  .to(gradientObj, duration, {colorProps:{color0:'#14D5D3', color1:'#A121D9'}, delay: delay });
		  
		  
		TweenMax.to(gradientObj, 1.6, {colorProps:{color0: '#14D5D3', color1:'#A121D9'}, onUpdate: applyBackground, onComplete: runLoop });

		
	},
	
	header: function(){
		
		// Start background transitions
		animate.background();
		
		// Setup Header Element
		let header = document.getElementById('header'),
			headerElements = header.childNodes;
		
		// Animate header in
		TweenMax.to(header, 1.2, {ease: Power3.easeIn, maxHeight: 400});
		TweenMax.to(header, 1.8, {ease: Power3.easeIn, opacity: 1});
		TweenMax.staggerFrom(headerElements, 1.2, {y: 68}, 0.2);
		
	}
	
};


window.onload = () => {

	// Initialize Paper Logo
	animate.paper();
};