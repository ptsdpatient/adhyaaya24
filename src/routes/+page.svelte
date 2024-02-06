<script lang="ts">
	import { onMount, SvelteComponent } from 'svelte';
	import { tweened } from 'svelte/motion';
	import {Sketch} from '$lib/components/DNA/Sketch';
	// import Nav from '$lib/components/Nav.svelte';
	
	import Home from '$lib/components/index/Home.svelte';
	import Events from '$lib/components/index/Events.svelte';
	import ContactUs from '$lib/components/index/ContactUs.svelte';
	import AboutUs from '$lib/components/index/AboutUs.svelte';
	import Sponsors from '$lib/components/index/Sponsors.svelte';
	import loadingAnimation from '$lib/assets/loadingspacetravel.gif'
	// import Footer from '$lib/components/index/Footer.svelte';

	// import {cubicInOut} from 'svelte/easing';
	import { hasScrolled } from '$lib/stores/UI';
	import dna from '$lib/assets/3d-models/drone.glb?url'
	// let sketch: Sketch;
	const duration = tweened(0, { duration: 1500 });

	// const scrollPosition = tweened(0.25, { duration: 1500, easing: cubicInOut });

	const PAGES: { name: string }[] = [
		{ name: 'Home' },
		{ name: 'Events' },
		{ name: 'About Us' },
		{ name: 'Sponsors' },
		{ name: 'Contact Us' },
		{ name: 'Sitemap' }
	];

	// function scrollMapping(percentScroll: number) {
	// const positionRange = (6 - (-1));
	// return (percentScroll * positionRange) + (-1);
	// }

	let loaded = false;
	let innerHeight: number, scrollY: number;
	// $: {
	// 	if (sketch) {
	// 		sketch.camera.position.set(-2, $scrollPosition, 5);
	// 	}
	// }

	//DNA BG thingy
	//import Sketch from '$lib/components/DNA/Sketch.svelte';
	
	if (typeof window !== 'undefined') {
	const canvas = document.getElementById('mascotid') as HTMLCanvasElement;
	const sketch = new Sketch(canvas);
	
	}

	setTimeout(() => {
			loaded = true;
			duration.set(0);
		}, 5200);




		
</script>

<svelte:head>
	<link rel="preload" />
	<link rel="preload" href="/draco/draco_decoder.wasm" />
	<link rel="preload" href="/draco/draco_wasm_wrapper.js" />
	<link rel="preload" href="/draco/draco_decoder.js" />
	<title>Adhyaaya'24</title>
</svelte:head>

<svelte:window bind:innerHeight bind:scrollY />

<!-- <div id="dna-bg" class="fixed scale-110 overflow-clip h-screen w-screen -z-50 bg-[#0d0028]" /> -->

 {#if !loaded}
 <div class="loader  md:h-full md:w-full bg-[black] fixed z-[9999]"><img src={loadingAnimation} class=" h-full w-full absolute" height=100% width=100% alt="transition animation">
	<!-- <div
		
		class="loader h-screen w-screen bg-[white] fixed z-[9999] flex items-center justify-center"
	>
		<div class="stars preloader w-full h-full">
			

		 <svg
				xmlns="http://www.w3.org/2000/svg"
				xmlns:xlink="http://www.w3.org/1999/xlink"
				style="margin: auto; background: transparent; display: block;"
				width="200px"
				height="200px"
				viewBox="0 0 100 100"
				preserveAspectRatio="xMidYMid"
			>
				<circle cx="6.451612903225806" cy="50" r="3" fill="#941946">
					<animate
						attributeName="r"
						times="0;0.5;1"
						values="2.4000000000000004;3.5999999999999996;2.4000000000000004"
						dur="2s"
						repeatCount="indefinite"
						begin="-0.5s"
					/>
					<animate
						attributeName="cy"
						keyTimes="0;0.5;1"
						values="32;68;32"
						dur="2s"
						repeatCount="indefinite"
						begin="0s"
						keySplines="0.5 0 0.5 1;0.5 0 0.5 1"
						calcMode="spline"
					/>
					<animate
						attributeName="fill"
						keyTimes="0;0.5;1"
						values="#941946;#243f7d;#941946"
						dur="2s"
						repeatCount="indefinite"
						begin="-0.5s"
					/>
				</circle><circle cx="6.451612903225806" cy="50" r="3" fill="#1fdfdf">
					<animate
						attributeName="r"
						times="0;0.5;1"
						values="2.4000000000000004;3.5999999999999996;2.4000000000000004"
						dur="2s"
						repeatCount="indefinite"
						begin="-1.5s"
					/>
					<animate
						attributeName="cy"
						keyTimes="0;0.5;1"
						values="32;68;32"
						dur="2s"
						repeatCount="indefinite"
						begin="-1s"
						keySplines="0.5 0 0.5 1;0.5 0 0.5 1"
						calcMode="spline"
					/>
					<animate
						attributeName="fill"
						keyTimes="0;0.5;1"
						values="#1fdfdf;#164ba3;#1fdfdf"
						dur="2s"
						repeatCount="indefinite"
						begin="-0.5s"
					/>
				</circle><circle cx="16.129032258064512" cy="50" r="3" fill="#941946">
					<animate
						attributeName="r"
						times="0;0.5;1"
						values="2.4000000000000004;3.5999999999999996;2.4000000000000004"
						dur="2s"
						repeatCount="indefinite"
						begin="-0.7s"
					/>
					<animate
						attributeName="cy"
						keyTimes="0;0.5;1"
						values="32;68;32"
						dur="2s"
						repeatCount="indefinite"
						begin="-0.2s"
						keySplines="0.5 0 0.5 1;0.5 0 0.5 1"
						calcMode="spline"
					/>
					<animate
						attributeName="fill"
						keyTimes="0;0.5;1"
						values="#941946;#243f7d;#941946"
						dur="2s"
						repeatCount="indefinite"
						begin="-0.7s"
					/>
				</circle><circle cx="16.129032258064512" cy="50" r="3" fill="#1fdfdf">
					<animate
						attributeName="r"
						times="0;0.5;1"
						values="2.4000000000000004;3.5999999999999996;2.4000000000000004"
						dur="2s"
						repeatCount="indefinite"
						begin="-1.7s"
					/>
					<animate
						attributeName="cy"
						keyTimes="0;0.5;1"
						values="32;68;32"
						dur="2s"
						repeatCount="indefinite"
						begin="-1.2s"
						keySplines="0.5 0 0.5 1;0.5 0 0.5 1"
						calcMode="spline"
					/>
					<animate
						attributeName="fill"
						keyTimes="0;0.5;1"
						values="#1fdfdf;#164ba3;#1fdfdf"
						dur="2s"
						repeatCount="indefinite"
						begin="-0.7s"
					/>
				</circle><circle cx="25.806451612903224" cy="50" r="3" fill="#941946">
					<animate
						attributeName="r"
						times="0;0.5;1"
						values="2.4000000000000004;3.5999999999999996;2.4000000000000004"
						dur="2s"
						repeatCount="indefinite"
						begin="-0.9s"
					/>
					<animate
						attributeName="cy"
						keyTimes="0;0.5;1"
						values="32;68;32"
						dur="2s"
						repeatCount="indefinite"
						begin="-0.4s"
						keySplines="0.5 0 0.5 1;0.5 0 0.5 1"
						calcMode="spline"
					/>
					<animate
						attributeName="fill"
						keyTimes="0;0.5;1"
						values="#941946;#243f7d;#941946"
						dur="2s"
						repeatCount="indefinite"
						begin="-0.9s"
					/>
				</circle><circle cx="25.806451612903224" cy="50" r="3" fill="#1fdfdf">
					<animate
						attributeName="r"
						times="0;0.5;1"
						values="2.4000000000000004;3.5999999999999996;2.4000000000000004"
						dur="2s"
						repeatCount="indefinite"
						begin="-1.9s"
					/>
					<animate
						attributeName="cy"
						keyTimes="0;0.5;1"
						values="32;68;32"
						dur="2s"
						repeatCount="indefinite"
						begin="-1.4s"
						keySplines="0.5 0 0.5 1;0.5 0 0.5 1"
						calcMode="spline"
					/>
					<animate
						attributeName="fill"
						keyTimes="0;0.5;1"
						values="#1fdfdf;#164ba3;#1fdfdf"
						dur="2s"
						repeatCount="indefinite"
						begin="-0.9s"
					/>
				</circle><circle cx="35.48387096774193" cy="50" r="3" fill="#941946">
					<animate
						attributeName="r"
						times="0;0.5;1"
						values="2.4000000000000004;3.5999999999999996;2.4000000000000004"
						dur="2s"
						repeatCount="indefinite"
						begin="-1.1s"
					/>
					<animate
						attributeName="cy"
						keyTimes="0;0.5;1"
						values="32;68;32"
						dur="2s"
						repeatCount="indefinite"
						begin="-0.6s"
						keySplines="0.5 0 0.5 1;0.5 0 0.5 1"
						calcMode="spline"
					/>
					<animate
						attributeName="fill"
						keyTimes="0;0.5;1"
						values="#941946;#243f7d;#941946"
						dur="2s"
						repeatCount="indefinite"
						begin="-1.1s"
					/>
				</circle><circle cx="35.48387096774193" cy="50" r="3" fill="#1fdfdf">
					<animate
						attributeName="r"
						times="0;0.5;1"
						values="2.4000000000000004;3.5999999999999996;2.4000000000000004"
						dur="2s"
						repeatCount="indefinite"
						begin="-2.1s"
					/>
					<animate
						attributeName="cy"
						keyTimes="0;0.5;1"
						values="32;68;32"
						dur="2s"
						repeatCount="indefinite"
						begin="-1.6s"
						keySplines="0.5 0 0.5 1;0.5 0 0.5 1"
						calcMode="spline"
					/>
					<animate
						attributeName="fill"
						keyTimes="0;0.5;1"
						values="#1fdfdf;#164ba3;#1fdfdf"
						dur="2s"
						repeatCount="indefinite"
						begin="-1.1s"
					/>
				</circle><circle cx="45.16129032258064" cy="50" r="3" fill="#941946">
					<animate
						attributeName="r"
						times="0;0.5;1"
						values="2.4000000000000004;3.5999999999999996;2.4000000000000004"
						dur="2s"
						repeatCount="indefinite"
						begin="-1.3s"
					/>
					<animate
						attributeName="cy"
						keyTimes="0;0.5;1"
						values="32;68;32"
						dur="2s"
						repeatCount="indefinite"
						begin="-0.8s"
						keySplines="0.5 0 0.5 1;0.5 0 0.5 1"
						calcMode="spline"
					/>
					<animate
						attributeName="fill"
						keyTimes="0;0.5;1"
						values="#941946;#243f7d;#941946"
						dur="2s"
						repeatCount="indefinite"
						begin="-1.3s"
					/>
				</circle><circle cx="45.16129032258064" cy="50" r="3" fill="#1fdfdf">
					<animate
						attributeName="r"
						times="0;0.5;1"
						values="2.4000000000000004;3.5999999999999996;2.4000000000000004"
						dur="2s"
						repeatCount="indefinite"
						begin="-2.3s"
					/>
					<animate
						attributeName="cy"
						keyTimes="0;0.5;1"
						values="32;68;32"
						dur="2s"
						repeatCount="indefinite"
						begin="-1.8s"
						keySplines="0.5 0 0.5 1;0.5 0 0.5 1"
						calcMode="spline"
					/>
					<animate
						attributeName="fill"
						keyTimes="0;0.5;1"
						values="#1fdfdf;#164ba3;#1fdfdf"
						dur="2s"
						repeatCount="indefinite"
						begin="-1.3s"
					/>
				</circle><circle cx="54.838709677419345" cy="50" r="3" fill="#941946">
					<animate
						attributeName="r"
						times="0;0.5;1"
						values="2.4000000000000004;3.5999999999999996;2.4000000000000004"
						dur="2s"
						repeatCount="indefinite"
						begin="-1.5s"
					/>
					<animate
						attributeName="cy"
						keyTimes="0;0.5;1"
						values="32;68;32"
						dur="2s"
						repeatCount="indefinite"
						begin="-1s"
						keySplines="0.5 0 0.5 1;0.5 0 0.5 1"
						calcMode="spline"
					/>
					<animate
						attributeName="fill"
						keyTimes="0;0.5;1"
						values="#941946;#243f7d;#941946"
						dur="2s"
						repeatCount="indefinite"
						begin="-1.5s"
					/>
				</circle><circle cx="54.838709677419345" cy="50" r="3" fill="#1fdfdf">
					<animate
						attributeName="r"
						times="0;0.5;1"
						values="2.4000000000000004;3.5999999999999996;2.4000000000000004"
						dur="2s"
						repeatCount="indefinite"
						begin="-2.5s"
					/>
					<animate
						attributeName="cy"
						keyTimes="0;0.5;1"
						values="32;68;32"
						dur="2s"
						repeatCount="indefinite"
						begin="-2s"
						keySplines="0.5 0 0.5 1;0.5 0 0.5 1"
						calcMode="spline"
					/>
					<animate
						attributeName="fill"
						keyTimes="0;0.5;1"
						values="#1fdfdf;#164ba3;#1fdfdf"
						dur="2s"
						repeatCount="indefinite"
						begin="-1.5s"
					/>
				</circle><circle cx="64.51612903225805" cy="50" r="3" fill="#941946">
					<animate
						attributeName="r"
						times="0;0.5;1"
						values="2.4000000000000004;3.5999999999999996;2.4000000000000004"
						dur="2s"
						repeatCount="indefinite"
						begin="-1.7s"
					/>
					<animate
						attributeName="cy"
						keyTimes="0;0.5;1"
						values="32;68;32"
						dur="2s"
						repeatCount="indefinite"
						begin="-1.2s"
						keySplines="0.5 0 0.5 1;0.5 0 0.5 1"
						calcMode="spline"
					/>
					<animate
						attributeName="fill"
						keyTimes="0;0.5;1"
						values="#941946;#243f7d;#941946"
						dur="2s"
						repeatCount="indefinite"
						begin="-1.7s"
					/>
				</circle><circle cx="64.51612903225805" cy="50" r="3" fill="#1fdfdf">
					<animate
						attributeName="r"
						times="0;0.5;1"
						values="2.4000000000000004;3.5999999999999996;2.4000000000000004"
						dur="2s"
						repeatCount="indefinite"
						begin="-2.7s"
					/>
					<animate
						attributeName="cy"
						keyTimes="0;0.5;1"
						values="32;68;32"
						dur="2s"
						repeatCount="indefinite"
						begin="-2.2s"
						keySplines="0.5 0 0.5 1;0.5 0 0.5 1"
						calcMode="spline"
					/>
					<animate
						attributeName="fill"
						keyTimes="0;0.5;1"
						values="#1fdfdf;#164ba3;#1fdfdf"
						dur="2s"
						repeatCount="indefinite"
						begin="-1.7s"
					/>
				</circle><circle cx="74.19354838709677" cy="50" r="3" fill="#941946">
					<animate
						attributeName="r"
						times="0;0.5;1"
						values="2.4000000000000004;3.5999999999999996;2.4000000000000004"
						dur="2s"
						repeatCount="indefinite"
						begin="-1.9s"
					/>
					<animate
						attributeName="cy"
						keyTimes="0;0.5;1"
						values="32;68;32"
						dur="2s"
						repeatCount="indefinite"
						begin="-1.4s"
						keySplines="0.5 0 0.5 1;0.5 0 0.5 1"
						calcMode="spline"
					/>
					<animate
						attributeName="fill"
						keyTimes="0;0.5;1"
						values="#941946;#243f7d;#941946"
						dur="2s"
						repeatCount="indefinite"
						begin="-1.9s"
					/>
				</circle><circle cx="74.19354838709677" cy="50" r="3" fill="#1fdfdf">
					<animate
						attributeName="r"
						times="0;0.5;1"
						values="2.4000000000000004;3.5999999999999996;2.4000000000000004"
						dur="2s"
						repeatCount="indefinite"
						begin="-2.9s"
					/>
					<animate
						attributeName="cy"
						keyTimes="0;0.5;1"
						values="32;68;32"
						dur="2s"
						repeatCount="indefinite"
						begin="-2.4s"
						keySplines="0.5 0 0.5 1;0.5 0 0.5 1"
						calcMode="spline"
					/>
					<animate
						attributeName="fill"
						keyTimes="0;0.5;1"
						values="#1fdfdf;#164ba3;#1fdfdf"
						dur="2s"
						repeatCount="indefinite"
						begin="-1.9s"
					/>
				</circle><circle cx="83.87096774193547" cy="50" r="3" fill="#941946">
					<animate
						attributeName="r"
						times="0;0.5;1"
						values="2.4000000000000004;3.5999999999999996;2.4000000000000004"
						dur="2s"
						repeatCount="indefinite"
						begin="-2.1s"
					/>
					<animate
						attributeName="cy"
						keyTimes="0;0.5;1"
						values="32;68;32"
						dur="2s"
						repeatCount="indefinite"
						begin="-1.6s"
						keySplines="0.5 0 0.5 1;0.5 0 0.5 1"
						calcMode="spline"
					/>
					<animate
						attributeName="fill"
						keyTimes="0;0.5;1"
						values="#941946;#243f7d;#941946"
						dur="2s"
						repeatCount="indefinite"
						begin="-2.1s"
					/>
				</circle><circle cx="83.87096774193547" cy="50" r="3" fill="#1fdfdf">
					<animate
						attributeName="r"
						times="0;0.5;1"
						values="2.4000000000000004;3.5999999999999996;2.4000000000000004"
						dur="2s"
						repeatCount="indefinite"
						begin="-3.1s"
					/>
					<animate
						attributeName="cy"
						keyTimes="0;0.5;1"
						values="32;68;32"
						dur="2s"
						repeatCount="indefinite"
						begin="-2.6s"
						keySplines="0.5 0 0.5 1;0.5 0 0.5 1"
						calcMode="spline"
					/>
					<animate
						attributeName="fill"
						keyTimes="0;0.5;1"
						values="#1fdfdf;#164ba3;#1fdfdf"
						dur="2s"
						repeatCount="indefinite"
						begin="-2.1s"
					/>
				</circle><circle cx="93.54838709677418" cy="50" r="3" fill="#941946">
					<animate
						attributeName="r"
						times="0;0.5;1"
						values="2.4000000000000004;3.5999999999999996;2.4000000000000004"
						dur="2s"
						repeatCount="indefinite"
						begin="-2.3s"
					/>
					<animate
						attributeName="cy"
						keyTimes="0;0.5;1"
						values="32;68;32"
						dur="2s"
						repeatCount="indefinite"
						begin="-1.8s"
						keySplines="0.5 0 0.5 1;0.5 0 0.5 1"
						calcMode="spline"
					/>
					<animate
						attributeName="fill"
						keyTimes="0;0.5;1"
						values="#941946;#243f7d;#941946"
						dur="2s"
						repeatCount="indefinite"
						begin="-2.3s"
					/>
				</circle><circle cx="93.54838709677418" cy="50" r="3" fill="#1fdfdf">
					<animate
						attributeName="r"
						times="0;0.5;1"
						values="2.4000000000000004;3.5999999999999996;2.4000000000000004"
						dur="2s"
						repeatCount="indefinite"
						begin="-3.3s"
					/>
					<animate
						attributeName="cy"
						keyTimes="0;0.5;1"
						values="32;68;32"
						dur="2s"
						repeatCount="indefinite"
						begin="-2.8s"
						keySplines="0.5 0 0.5 1;0.5 0 0.5 1"
						calcMode="spline"
					/>
					<animate
						attributeName="fill"
						keyTimes="0;0.5;1"
						values="#1fdfdf;#164ba3;#1fdfdf"
						dur="2s"
						repeatCount="indefinite"
						begin="-2.3s"
					/>
				</circle>
			</svg> 
		</div>
	</div> --></div>
{/if} 
<!-- {#if !loaded}
<div class="preloader" id="canvas" style="position: absolute;width: 100%;height: 100%;"></div>
<script>

var canvas = document.getElementById('canvas');
var flr = Math.floor;

canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;

var halfw = canvas.width / 2,
    halfh = canvas.height / 2,
    step = 2,
    warpZ = 12,
    speed = 0.075;
var stampedDate = new Date();

var ctx = canvas.getContext('2d');

ctx.fillStyle = 'black';
ctx.fillRect(0,0, canvas.width, canvas.height);

function rnd(num1, num2) {
    return flr(Math.random() * num2 * 2) + num1;
}

function getColor() {
    return 'hsla(200,100%, ' + rnd(50,100) + '%, 1)';
}

var star = function() {
    var v = vec3.fromValues(rnd(0 - halfw,halfw),rnd(0 - halfh,halfh), rnd(1, warpZ));
    
    
    this.x = v[0];
    this.y = v[1];
    this.z = v[2];
    this.color = getColor();
    
    
    this.reset = function() {
        v = vec3.fromValues(rnd(0 - halfw,halfw),rnd(0 - halfh,halfh), rnd(1, warpZ));

        this.x = v[0];
        this.y = v[1];
        this.color = getColor();
        vel = this.calcVel();
    }
    
    this.calcVel = function() {
        
        return vec3.fromValues(0, 0, 0 - speed);
    };
    
    var vel = this.calcVel();
    
    this.draw = function() {
        vel = this.calcVel();
        v = vec3.add(vec3.create(), v, vel);
        var x = v[0] / v[2];
        var y = v[1] / v[2];
        var x2 = v[0] / (v[2] + speed * 0.50);
        var y2 = v[1] / (v[2] + speed * 0.50);
        
        ctx.strokeStyle = this.color;
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x2, y2);
        ctx.stroke();
        
        if (x < 0 - halfw || x > halfw || y < 0 - halfh || y > halfh) {
            this.reset();
        }
    };
    
}

var starfield = function() {
    var numOfStars = 250;
    
    var stars = [];
    
    function _init() {
        for(var i = 0, len = numOfStars; i < len; i++) {
            stars.push(new star());
        }
    }    
    
    _init();
    
    this.draw = function() {
        ctx.translate(halfw, halfh);
        
        for(var i = 0, len = stars.length; i < len; i++) {
            var currentStar = stars[i];
            
            currentStar.draw();
        }
    };
    
}

var mStarField = new starfield();

function draw() {
    
    // make 5 seconds
    var millSeconds = 1000 * 10;
    
    var currentTime = new Date();
    
    speed = 0.025;
  
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.fillStyle = 'rgba(0,0,0,0.2)';
    ctx.fillRect(0,0, canvas.width, canvas.height);
    
    mStarField.draw();
    
    window.requestAnimationFrame(draw);
}

draw();

window.onresize = function() {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    halfw = canvas.width / 2;
    halfh = canvas.height / 2;
};
</script>
{/if} -->
<!-- <div
		class="pagination-container absolute invisible md:visible left-4 md:left-10 top-1/2 flex flex-col gap-1 md:gap-2 z-50 -translate-y-1/2"
	>
		
			<button
				on:click={() => {
					// changePage(0);
				}}
				class="uppercase mono cursor-pointer text-xs px-2 py-0 max-w-xs w-full md:text-base relative after:absolute after:w-0 after:h-full after:bg-white after:mix-blend-difference after:top-0 after:left-0  after:transition-all after:duration-300 after:ease-in-out {0 == slide_index
					? 'text-white after:w-full'
					: ''}">Home</button
			>
			<button
				on:click={() => {
					// changePage(1);
				}}
				class="uppercase mono cursor-pointer text-xs px-2 py-0 max-w-xs w-full md:text-base relative after:absolute after:w-0 after:h-full after:bg-white after:mix-blend-difference after:top-0 after:left-0  after:transition-all after:duration-300 after:ease-in-out {1 == slide_index
					? 'text-white after:w-full'
					: ''}">Events</button
			>
			<button
				on:click={() => {
					// changePage(2);
				}}
				class="uppercase mono cursor-pointer text-xs px-2 py-0 max-w-xs w-full md:text-base relative after:absolute after:w-0 after:h-full after:bg-white after:mix-blend-difference after:top-0 after:left-0  after:transition-all after:duration-300 after:ease-in-out {2 == slide_index
					? 'text-white after:w-full'
					: ''}">About Us</button
			>
			<button
				on:click={() => {
					// changePage(3);
				}}
				class="uppercase mono cursor-pointer text-xs px-2 py-0 max-w-xs w-full md:text-base relative after:absolute after:w-0 after:h-full after:bg-white after:mix-blend-difference after:top-0 after:left-0  after:transition-all after:duration-300 after:ease-in-out {3 == slide_index
					? 'text-white after:w-full'
					: ''}">Sponsors</button
			>
			<button
				on:click={() => {
					// changePage(4);
				}}
				class="uppercase mono cursor-pointer text-xs px-2 py-0 max-w-xs w-full md:text-base relative after:absolute after:w-0 after:h-full after:bg-white after:mix-blend-difference after:top-0 after:left-0  after:transition-all after:duration-300 after:ease-in-out {4 == slide_index
					? 'text-white after:w-full'
					: ''}">Contact Us</button
			>
			<button
				on:click={() => {
					// changePage(5);
				}}
				class="uppercase mono cursor-pointer text-xs px-2 py-0 max-w-xs w-full md:text-base relative after:absolute after:w-0 after:h-full after:bg-white after:mix-blend-difference after:top-0 after:left-0  after:transition-all after:duration-300 after:ease-in-out {5 == slide_index
					? 'text-white after:w-full'
					: ''}">Sitemap</button
			>
		2
</div> -->

<Home scrollPos={scrollY} />
<Events />
<AboutUs />
<Sponsors />
<ContactUs />

<!-- <Nav /> -->
<style>
	#dna-bg {
		filter: saturate(1.2) brightness(1.1) contrast(1.2);
	}
	
	.preloader {
		display: flex;
	}

	.loader {
		/* background: #000; */
		/* color: #3df1f1; */
		font: 1em Dosis, sans-serif;
		line-height: 1.5;
		perspective: 40em;
		/* position: fixed; */
		z-index: 9999;
		@apply h-screen w-screen;
	}

	.preloader {
		/* animation: tiltSpin 8s linear infinite; */
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin: auto;
		width: 17em;
		height: 17em;
	}
</style>
