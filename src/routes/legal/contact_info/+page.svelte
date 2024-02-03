<svelte:head>
	<title>Contact Info | Adhyaaya'24</title>
</svelte:head>

<div class="compalinace-content">
	<div class="content-container">
		<p class="content-head">Contact us</p>
		<div class="content-seprater" />
		<p class="updated-date">Last updated on Oct 31st 2022</p>
		<p class="content-text">You may contact us using the information below:</p>
		<p class="content-text">
			Merchant Legal entity name: Adhyaaya'24<br />
			Registered Address: Government College of Engineering, Sector-27, Mihan Rehabilitation Colony,
			Khapri, Nagpur - 441108<br />
			Telephone No: 8793150182<br />
			E-Mail ID: adhyaaya@gcoen.ac.in
		</p>

		<ul class="content-list nunu">
			Please note the following :
			<li class="nunu">We do not entertain any refunds or cancellations.</li>
			<li class="nunu">Shipping is not applicable for this business.</li>
		</ul>
	</div>
</div>

<style lang="postcss">
	.compalinace-content {
		@apply py-40 px-6;
	}
	.content-container {
		@apply mx-auto max-w-4xl;
	}
	.content-head {
		@apply text-4xl;
	}
	.content-seprater {
		width: 28px;
		height: 5px;
		background-color: #213554;
		margin-top: 16px;
	}
	.updated-date {
		@apply text-sm text-gray-500 mt-4;
	}
	[class*='content-'] {
		font-family: 'Nunito', sans-serif;
	}
</style>
