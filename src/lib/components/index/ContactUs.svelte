<script>
	import { enhance } from '$app/forms';
	let submit = false;
</script>
<div class="h-auto md:h-auto h-[200vh] w-full flex flex-col justify-between">
	<div class="w-full h-[100vh] ">
	<div class="w-full md:w-5/6 m-auto md:h-full flex flex-col md:flex-row justify-center items-center p-10 text-white">
	<div
		class="section md:w-1/2 md:h-full w-full  h-5/6 py-3 md:py-0 rounded-lg md:rounded-r-none md:border border-white"
	>
		<form
			on:submit={() => {
				submit = true;
				alert('Thank you for contacting us! We will get back to you soon.');
			}}
			class="p-2 md:p-10 h-full w-full flex flex-col items-center justify-evenly"
			method="POST"
			use:enhance
			action="/forms/contact_us"
		>
		<!-- <div class="p-4 rounded-lg border border-white mx-auto bg-black/50"><span>Out-station participants participating in offline events are entitled to compensation. Please contact Prajwal Akarte (+91 85548 59411)</span></div> -->
			<div class="relative z-0 mb-3 w-full group">

				<input
					type="text"
					name="name"
					id="name"
					class="nunu block py-2 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2  appearance-none  border-gray-400  focus:outline-none focus:ring-0  peer text-xl"
					placeholder=" "
					required
				/>
				<label
					for="name"
					class="peer-focus:font-medium absolute text-xl text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
					>Name</label
				>
			</div>
			<div class="relative z-0 mb-3 w-full group">
				<input
					type="email"
					name="email"
					id="email"
					class="nunu block py-2 px-0 w-full text-xl text-white bg-transparent border-0 border-b-2  appearance-none  border-gray-400  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
					placeholder=" "
					required
				/>
				<label
					for="email"
					class="peer-focus:font-medium absolute text-xl  text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
					>Email</label
				>
			</div>
			<div class="relative z-0 mb-2 w-full group pb-10">
				<textarea
					name="message"
					id="message"
					class="nunu block py-2 px-0 w-full text-xl text-white bg-transparent border-0 border-b-2  appearance-none  border-gray-400  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
					placeholder=" "
					required
				/>
				<label
					for="message"
					class="peer-focus:font-medium absolute text-xl  text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
					>Message</label
				>
			</div>
			<button
				disabled={submit}
				class="btn btn-outline btn-block bg-black/25 hover:scale-105 hover:bg-white active:opacity-90 active:scale-95 text-xl"
				type="submit">Submit</button
			>
			<div
				class="info-container w-full flex-col items-center justify-center px-4 xl:px-10 hidden lg:flex pt-4"
			>
				

			</div>
		</form>
	</div>
	<div
		id="center-console"
		class="section w-full md:w-1/2 m-auto h-auto md:h-full flex flex-col items-center justify-between py-3 md:py-0 rounded-lg rounded-l-none md:border-l-0 md:border md:border-white p-6"
	>
		<h3 class="text-5xl pt-0 md:pt-7">Contact Us</h3>
		<div class="contact-info px-4 pt-2 flex flex-col gap-1 items-start">
			<div class="card card-compact mx-auto shadow-xl container">
				<div class="card-body">
					<h2 class="card-title nunu">For Technical Queries,</h2>
					<p class="nunu text-2xl">Mohit Deotare</p>
					<a
						href="https://api.whatsapp.com/send?phone=+7517345309&text=Hello!"
						class="nunu inline-flex items-center gap-2 text-lg"
						><iconify-icon icon="mdi:whatsapp" />75173 45309</a
					>
					<a
						href="mailto:pavandeotare1@gmail.com"
						class="nunu inline-flex items-center gap-2 overflow-clip text-ellipsis text-lg"
						><iconify-icon icon="mdi:email-outline" />pavandeotare1@gmail.com</a
					>
				</div>
			</div>
			
			<div class="card card-compact mx-auto shadow-xl w-full">
				<div class="card-body ">
					<h2 class="card-title nunu">For Event-Related Queries,</h2>
					<p class="nunu text-2xl">Sushrut Kohale</p>
					<a href="tel:+919096831236" class="inline-flex items-center gap-2 nunu text-lg"
						><iconify-icon icon="mdi:phone-outline" /> 97666 55788</a
					>
					<a href="mailto:sushrutkohale123@gmail.com" class="inline-flex items-center gap-2 nunu text-lg"
						><iconify-icon icon="mdi:email-outline" />sushrutkohale123@gmail.com</a
					>
				</div>
			</div>
			<!-- <div class="text-6xl mx-auto">OR</div> -->
		</div>
		<div class="contact-links" />
	</div>
</div></div>

<!-- difference in footer and contactus -->

<!-- <div class="h-1/2 w-full flex flex-col justify-center items-center pt-12 2xl:pt-24 text-white p-12 pd-0 gap-4"> -->
	<div class="w-full md:h-[100vh] h-[150vh]">
	<div class="section md:p-6 md:gap-8 h-full w-full md:h-full md:w-full flex flex-col justify-end md:flex-row">
			<div
				class="section w-5/6 md:h-full h-1/5 md:w-1/3 mx-auto py-3 md:py-0 rounded-lg md:border border-white"
			>
				<iframe width="100%" height="100%" src="https://www.youtube-nocookie.com/embed/YiVULH51pJA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
			</div>
			<div
				class="section bg-black/20 backdrop-blur-sm   w-5/6 md:h-full h-auto md:w-1/3 mx-auto flex flex-col items-center py-3 md:py-0 bg-black/40 rounded-lg md:border md:border-white pd-10"
			>
			<div class="flex  flex-col w-4/6 items-stretch pd-0 p-4 pb-0 pt-4 gap-2">
				<div
					class="heading pt-0 text-3xl btn btn-ghost btn-lg transition-none hover:scale-100 active:scale-100 hover:bg-opacity-0 cursor-auto border-0 border-b-2 rounded-b-none border-white hover:text-white "
				>
					Sitemap
				</div>
				<a href="/" class="btn btn-ghost btn-sm text-xl text-white font-normal hover:bg-white hover:text-black transition-all duration-300 ease-in-out">Home</a>
				<a href="/events" class="btn btn-sm  btn-ghost text-xl text-white font-normal hover:bg-white hover:text-black transition-all duration-300 ease-in-out">Events</a>
				<a data-sveltekit-reload href="/teams" class="btn btn-sm  btn-ghost text-xl text-white font-normal hover:bg-white hover:text-black transition-all duration-300 ease-in-out">Team</a>
				<a href="/sponsors" class="btn btn-sm  btn-ghost text-xl text-white font-normal hover:bg-white hover:text-black transition-all duration-300 ease-in-out">Sponsors</a>
				<a href="/gallery" data-sveltekit-reload class="btn btn-sm  btn-ghost text-xl text-white font-normal hover:bg-white hover:text-black transition-all duration-300 ease-in-out" 
					>Gallery</a
				>
				</div>
			<div class="flex flex-col w-4/6 pt-4 items-stretch justify-evenly gap-1">
				<div
					class="heading transition-all duration-300 ease-in-out text-3xl btn btn-ghost btn-lg transition-none hover:scale-100 active:scale-100 hover:bg-opacity-0 cursor-auto border-0 border-b-2 rounded-b-none border-white hover:text-white "
				>
					Legal
				</div>
				<a href="/legal/terms_and_conditions" class="btn btn-sm transition-all duration-300 ease-in-out btn-ghost text-white text-xl font-normal hover:bg-white hover:text-black"
					>T &amp; C</a
				>
				<a href="/legal/privacy_policy" class="btn btn-sm  btn-ghost text-white text-xl font-normal hover:bg-white hover:text-black"
					>Privacy Policy</a
				>
				<a href="/legal/contact_info" class="btn btn-sm transition-all duration-300 ease-in-out btn-ghost text-white text-xl font-normal hover:bg-white hover:text-black">Legal Contact</a>
			</div>
				</div>
	
			<div
				class="section w-5/6 h-1/5 md:h-full md:w-1/3 mx-auto flex flex-col items-center justify-between py-3 md:py-0 rounded-lg md:border md:border-white"
			>
			<div class="h-5/6 w-full bg-black/50">
				<iframe
					title="Google Map for GCOEN"
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.525563997084!2d79.05785451517583!3d21.051661192371412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4be5e617378eb%3A0x682e0bc768d22adb!2sGovernment%20Engineering%20College%2CNagpur!5e0!3m2!1sen!2sin!4v1674120640996!5m2!1sen!2sin"
					width="100%"
					height="100%"
					style="border:0;"
					allowfullscreen
					loading="lazy"
					referrerpolicy="no-referrer-when-downgrade"
					class="h-full w-full z-[220] rounded-lg"
				/>
			</div>
			<div
				class="h-1/6 w-full flex flex-row items-center justify-evenly py-8 text-white"
			>
				<a
					href="mailto:adhyaaya.gcoen@gmail.com"
					class="email h-8 w-8 lg:h-12 lg:w-12 bg-red-500 rounded-full text-2xl lg:text-4xl inline-flex items-center justify-center hover:scale-105 active:scale-95 active:opacity-95 transition-all duration-300 ease-in-out"
					><iconify-icon icon="mdi:email-outline" /></a
				>
				<a
					href="https://www.linkedin.com/company/adhyaaya/"
					class="linkedin h-8 w-8 lg:h-12 lg:w-12 bg-blue-600 rounded-full text-2xl lg:text-4xl inline-flex items-center justify-center hover:scale-105 active:scale-95 active:opacity-95 transition-all duration-300 ease-in-out"
					><iconify-icon icon="mdi:linkedin" /></a
				>
				<a
					href="https://instagram.com/adhyaaya.gcoen"
					class="instagram h-8 w-8 bg-pink-600 lg:h-12 lg:w-12 rounded-full text-2xl lg:text-4xl inline-flex items-center justify-center hover:scale-105 active:scale-95 active:opacity-95 transition-all duration-300 ease-in-out"
					><iconify-icon icon="mdi:instagram" /></a
				>
				<a
					href="https://www.youtube.com/@ADHYAAYAGCOEN"
					class="youtube h-8 w-8 lg:h-12 lg:w-12 bg-red-600 rounded-full text-2xl lg:text-4xl inline-flex items-center justify-center hover:scale-105 active:scale-95 active:opacity-95 transition-all duration-300 ease-in-out"
					><iconify-icon icon="mdi:youtube" /></a
				>
			</div>
				</div>
				</div>	</div>		
</div>	

<!-- <div class="section md:w-1/3 w-5/6 h-5/6 bg-black/20 py-8 md:py-0 rounded-lg border border-white">
	<iframe title="Google Map for GCOEN" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.525563997084!2d79.05785451517583!3d21.051661192371412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4be5e617378eb%3A0x682e0bc768d22adb!2sGovernment%20Engineering%20College%2CNagpur!5e0!3m2!1sen!2sin!4v1674120640996!5m2!1sen!2sin" width="100%" height="100%" style="border:0;" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade" class="h-full w-full z-[220]"></iframe>
</div> -->
<style lang="postcss">
	.section {
		backdrop-filter: blur(0px);
	}

	.card-title {
		@apply line-clamp-1;
	}
</style>
