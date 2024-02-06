
<script lang="ts">
	


	// Image Imports
	import swarali_prayagi_photo from '$lib/assets/team/advisors/swarali-prayagi-compressed.webp?url';
	import shlok_tajne_photo from '$lib/assets/team/advisors/shlok-tajne-compressed.webp?url';
	import aditya_tete_photo from '$lib/assets/team/advisors/aditya-tete-compressed.webp?url';
	import malhar_paradkar_photo from '$lib/assets/team/advisors/malhar-paradkar-compressed.webp?url';
	import mayank_masram_photo from '$lib/assets/team/advisors/mayank-masram-compressed.webp?url';
	import anukul_gosh_photo from '$lib/assets/team/coordinators/anukul-ghosh.webp?url';
	import swara_nagpure_photo from '$lib/assets/team/coordinators/swara_nagpure.png?url';
	import aditya_shinde_photo from '$lib/assets/team/coordinators/aditya-shinde.webp?url';
	import om_lokhande_photo from '$lib/assets/team/coordinators/om.jpg?url';
	// import malhar_paradkar_photo from '$lib/assets/team/coordinators/malhar-paradkar-compressed.webp?url';
	import tanishq_dhote_photo from '$lib/assets/team/technical/tanshiq_dhote.webp.jpg?url';
	import aditya_thombre_photo from '$lib/assets/team/technical/aditya_thombre.webp?url';
	//import aditya_deshmukh_photo from '$lib/assets/team/technical/aditya-deshmukh-compressed.webp?url';
	import mohit_deotare_photo from '$lib/assets/team/technical/mohit_deotare.png?url';
	//import tushar_meshram_photo from '$lib/assets/team/technical/tushar-meshram-compressed.webp?url';
	//import harsh_bangre_photo from '$lib/assets/team/technical/harsh-bangre-compressed.webp?url';
	// import kaustubh_warade_photo from '$lib/assets/team/technical/kaustubh-warade-compressed.webp?url';
	import ayush_khangar_photo from '$lib/assets/team/organisation/ayush-khangar-compressed,webp.jpg?url';
	import aditya_muddamwar_photo from '$lib/assets/team/organisation/aditya-muddamwar-compressed,webp.jpg?url';
	import varun_dudhane_photo from '$lib/assets/team/organisation/varun-dudhane-compressed.webp.jpg?url';
	import aranya_sharma_photo from '$lib/assets/team/organisation/aranya-sharma-compressed.webp.jpg?url';
	import ayushi_singh_photo from '$lib/assets/team/organisation/ayushi-singh-compressed.webp.jpg?url';
	import khushi_sandekar_photo from '$lib/assets/team/organisation/khushi.sandekar-compressed.webp.jpg?url';
	import rohit_wagh_photo from '$lib/assets/team/publicity/rohit-wagh.png?url';
	import jaideep_roy_photo from '$lib/assets/team/publicity/jaideep-roy.png?url';
	import suhani_garad_photo from '$lib/assets/team/publicity/suhani-garad.webp?url';
	import swayam_jawade_photo from '$lib/assets/team/publicity/swayam-jawade.png?url';
	import rugved_yadalwar_photo from '$lib/assets/team/publicity/rugved-yadalwar-compressed.webp?url';
	import aadil_burani_photo from '$lib/assets/team/publicity/aadil-burani-compressed.webp?url';
	import nimish_gotmare_photo from '$lib/assets/team/accounting/nimish-gotmare.webp';
	import sabrina_mondal_photo from '$lib/assets/team/content-writing/sabrina-mondal-compressed.jpg?url';
	import shravani_gawande_photo from '$lib/assets/team/content-writing/shravani-gawande-compressed.webp.jpg?url';
	import dude_from_mechanical from '$lib/assets/team/sponsorship/Screenshot_20240125-143331.jpg?url'
	
	import karan_buradkar_photo from '$lib/assets/team/creativity-and-decoration/karan-buradkar.webp?url';
	import ashlesha_chute_photo from '$lib/assets/team/creativity-and-decoration/ashlesha-chute.png?url';
	import ketaki_mahalle_photo from '$lib/assets/team/creativity-and-decoration/ashlesha-chute.webp?url';
	import dipti_harshe_photo from '$lib/assets/team/creativity-and-decoration/dh.jpg?url';
	import rohit_thakre_photo from '$lib/assets/team/creativity-and-decoration/rohit-thakare.webp?url';
    import ajinkya_mundhe_photo from '$lib/assets/team/creativity-and-decoration/WhatsApp_Image_2024-01-31_at_11.29.21_PM.jpeg?url';
	import samruddhi_nasare from '$lib/assets/team/creativity-and-decoration/sn.jpg?url';
	import aditya_gawai_photo from '$lib/assets/team/hospitality-and-discipline/aditya-gawai.webp?url';
	import mrunmai_ingole_photo from '$lib/assets/team/hospitality-and-discipline/aditya-gawai.webp?url';
	import shweta_mane_photo from '$lib/assets/team/hospitality-and-discipline/sweta-mane.png?url';
	import palash_atram_photo from '$lib/assets/team/hospitality-and-discipline/palash-atram.webp.jpg?url';
	import hardik_bodele_photo from '$lib/assets/team/hospitality-and-discipline/hardik-bodele.webp?url';
	import sneha_motghare_photo from '$lib/assets/team/hospitality-and-discipline/hardik-bodele.webp?url';
	import samruddhe_nasre_photo from '$lib/assets/team/creativity-and-decoration/sn.jpg?url';
	import himanshi_bisen_photo from '$lib/assets/team/hospitality-and-discipline/himanshi-bisen.png?url';
	import prajwal_akarte_photo from '$lib/assets/team/accounting/prajwal_akarte.jpeg?url'
	
	import tejesh_ghuge_photo from '$lib/assets/team/publicity/tejesh-ghuge.webp?url';
	import anushree_barad_photo from '$lib/assets/team/publicity/anushree-barad.webp?url';
	import sushrut_kohale_photo from '$lib/assets/team/coordinators/sushrut.jpeg?url';
	// import lokesh_shelke_photo from '$lib/assets/team/hospitality-and-discipline/lokesh-shelke-compressed.webp?url';
	import {page} from '$app/stores';

</script>

<!-- <svelte:window bind:scrollY /> -->

<svelte:head>
	<title>Meet Our Team | Adhyaaya'24</title>
</svelte:head>

<!-- <Nav /> -->
{#if $page.url.pathname === '/teams'}

<div
	
	id="dna-bg"
	class="fixed h-screen w-screen -z-50 bg-black opacity-75"
/>
<!-- bind:this={heading} -->
<div class="flex_title !mt-0 pt-20">Advisors</div>
<!-- bind:this={container} -->
<div class="my-cont_flex">
	<article class="my-cont">
		<div style:--img={`url(${malhar_paradkar_photo})`} class="thumb" />
		<div class="infos">
			<h2 class="title">Malhar Paradkar<span class="flag" /></h2>
			<h3 class="date">Advisor</h3>
			<h3 class="seats"><!--status--></h3>
			<p class="txt"><!-- data--></p>
			
		</div>
	</article>
	<article class="my-cont">
		<div style:--img={`url(${shlok_tajne_photo})`} class="thumb" />
		<div class="infos">
			<h2 class="title">Shlok Tajne<span class="flag" /></h2>
			<h3 class="date">Advisor</h3>
			<h3 class="seats"><!--status--></h3>
			<p class="txt"><!-- data--></p>
			<div class="details">
				<a rel="external noopener noreferrer nofollow" target="_blank" href="">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#EA4335] bg-clip-text"
						icon="mdi:email-outline"
					/>
				</a>
				<a rel="external noopener noreferrer nofollow" target="_blank" href="">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#FF1C7C] bg-clip-text"
						icon="mdi:instagram"
					/>
				</a>
				<a rel="external noopener noreferrer nofollow" target="_blank" href="">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#006192] bg-clip-text"
						icon="mdi:linkedin"
					/>
				</a>
			</div>
		</div>
	</article>
	<article class="my-cont">
		<div style:--img={`url(${mayank_masram_photo})`} class="thumb" />
		<div class="infos">
			<h2 class="title">Mayank Masram<span class="flag" /></h2>
			<h3 class="date">Advisor</h3>
			<h3 class="seats"><!--status--></h3>
			<p class="txt"><!-- data--></p>
			<div class="details">
				<a
					rel="external noopener noreferrer nofollow"
					target="_blank"
					href="mailto:mahashabde.arya@gmail.com"
				>
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#EA4335] bg-clip-text"
						icon="mdi:email-outline"
					/>
				</a>
				<a
					rel="external noopener noreferrer nofollow"
					target="_blank"
					href="https://instagram.com/arya1608"
				>
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#FF1C7C] bg-clip-text"
						icon="mdi:instagram"
					/>
				</a>
				<a
					rel="external noopener noreferrer nofollow"
					target="_blank"
					href="https://www.linkedin.com/in/arya-mahashabde-582665228"
				>
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#006192] bg-clip-text"
						icon="mdi:linkedin"
					/>
				</a>
			</div>
		</div>
	</article>
	<article class="my-cont">
		<div style:--img={`url(${aditya_tete_photo})`} class="thumb" />
		<div class="infos">
			<h2 class="title">Aditya Tete<span class="flag" /></h2>
			<h3 class="date">Advisor</h3>
			<h3 class="seats"><!--status--></h3>
			<p class="txt"><!-- data--></p>
			<div class="details">
				<a rel="external noopener noreferrer nofollow" target="_blank" href="">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#EA4335] bg-clip-text"
						icon="mdi:email-outline"
					/>
				</a>
				<a rel="external noopener noreferrer nofollow" target="_blank" href="">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#FF1C7C] bg-clip-text"
						icon="mdi:instagram"
					/>
				</a>
				<a rel="external noopener noreferrer nofollow" target="_blank" href="">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#006192] bg-clip-text"
						icon="mdi:linkedin"
					/>
				</a>
			</div>
		</div>
	</article>
	<article class="my-cont">
		<div style:--img={`url(${swarali_prayagi_photo})`} class="thumb" />
		<div class="infos">
			<h2 class="title">Swarali Prayagi<span class="flag" /></h2>
			<h3 class="date">Advisor</h3>
			<h3 class="seats"><!--status--></h3>
			<p class="txt"><!-- data--></p>
			<div class="details">
				<a rel="external noopener noreferrer nofollow" target="_blank" href="">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#EA4335] bg-clip-text"
						icon="mdi:email-outline"
					/>
				</a>
				<a rel="external noopener noreferrer nofollow" target="_blank" href="">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#FF1C7C] bg-clip-text"
						icon="mdi:instagram"
					/>
				</a>
				<a rel="external noopener noreferrer nofollow" target="_blank" href="">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#006192] bg-clip-text"
						icon="mdi:linkedin"
					/>
				</a>
			</div>
		</div>
	</article>
</div>

<div class="flex_title">Coordinators</div>
<div class="my-cont_flex">
	<article class="my-cont">
		<div style:--img={`url(${anukul_gosh_photo})`} class="thumb" />
		<div class="infos">
			<h2 class="title">Anukul Gosh<span class="flag" /></h2>
			<h3 class="date">Coordinator</h3>
			<h3 class="seats"><!--status--></h3>
			<p class="txt"><!-- data--></p>
			<div class="details">
				<a rel="external noopener noreferrer nofollow" target="_blank" href="">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#EA4335] bg-clip-text"
						icon="mdi:email-outline"
					/>
				</a>
				<a rel="external noopener noreferrer nofollow" target="_blank" href="">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#FF1C7C] bg-clip-text"
						icon="mdi:instagram"
					/>
				</a>
				<a rel="external noopener noreferrer nofollow" target="_blank" href="">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#006192] bg-clip-text"
						icon="mdi:linkedin"
					/>
				</a>
			</div>
		</div>
	</article>
	<article class="my-cont">
		<div style:--img={`url(${swara_nagpure_photo})`} class="thumb" />
		<div class="infos">
			<h2 class="title">Swara Nagpure<span class="flag" /></h2>
			<h3 class="date">Coordinator</h3>
			<h3 class="seats"><!--status--></h3>
			<p class="txt"><!-- data--></p>
			<div class="details">
				<a
					rel="external noopener noreferrer nofollow"
					target="_blank"
					href="mailto:swaraliprayagi1908@gmail.com"
				>
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#EA4335] bg-clip-text"
						icon="mdi:email-outline"
					/>
				</a>
				<a
					rel="external noopener noreferrer nofollow"
					target="_blank"
					href="https://instagram.com/swaraliprayagi"
				>
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#FF1C7C] bg-clip-text"
						icon="mdi:instagram"
					/>
				</a>
				<a
					rel="external noopener noreferrer nofollow"
					target="_blank"
					href="https://www.linkedin.com/in/swarali-prayagi-65b400229"
				>
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#006192] bg-clip-text"
						icon="mdi:linkedin"
					/>
				</a>
			</div>
		</div>
	</article>
	<article class="my-cont">
		<div style:--img={`url(${aditya_shinde_photo})`} class="thumb" />
		<div class="infos">
			<h2 class="title">Aditya Shinde<span class="flag" /></h2>
			<h3 class="date">Coordinator</h3>
			<h3 class="seats"><!--status--></h3>
			<p class="txt"><!-- data--></p>
			<div class="details">
				<a rel="external noopener noreferrer nofollow" target="_blank" href="">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#EA4335] bg-clip-text"
						icon="mdi:email-outline"
					/>
				</a>
				<a rel="external noopener noreferrer nofollow" target="_blank" href="">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#FF1C7C] bg-clip-text"
						icon="mdi:instagram"
					/>
				</a>
				<a rel="external noopener noreferrer nofollow" target="_blank" href="">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#006192] bg-clip-text"
						icon="mdi:linkedin"
					/>
				</a>
			</div>
		</div>
	</article>
	<article class="my-cont">
		<div style:--img={`url(${om_lokhande_photo})`} class="thumb" />
		<div class="infos">
			<h2 class="title">Om Lokhande<span class="flag" /></h2>
			<h3 class="date">Coordinator</h3>
			<h3 class="seats"><!--status--></h3>
			<p class="txt"><!-- data--></p>
			<div class="details">
				<a rel="external noopener noreferrer nofollow" target="_blank" href="">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#EA4335] bg-clip-text"
						icon="mdi:email-outline"
					/>
				</a>
				<a rel="external noopener noreferrer nofollow" target="_blank" href="">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#FF1C7C] bg-clip-text"
						icon="mdi:instagram"
					/>
				</a>
				<a rel="external noopener noreferrer nofollow" target="_blank" href="">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#006192] bg-clip-text"
						icon="mdi:linkedin"
					/>
				</a>
			</div>
		</div>
	</article>
	<article class="my-cont">
		<div style:--img={`url(${sushrut_kohale_photo})`} class="thumb" />
		<div class="infos">
			<h2 class="title">Sushrut Kohale<span class="flag" /></h2>
			<h3 class="date">Coordinator</h3>
			<h3 class="seats"><!--status--></h3>
			<p class="txt"><!-- data--></p>
			<div class="details">
				<a
					rel="external noopener noreferrer nofollow"
					target="_blank"
					href="mailto:mcparadkar2003@gmail.com"
				>
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#EA4335] bg-clip-text"
						icon="mdi:email-outline"
					/>
				</a>
				<a
					rel="external noopener noreferrer nofollow"
					target="_blank"
					href="https://instagram.com/thelostmanintheworld"
				>
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#FF1C7C] bg-clip-text"
						icon="mdi:instagram"
					/>
				</a>
				<a
					rel="external noopener noreferrer nofollow"
					target="_blank"
					href="https://www.linkedin.com/in/malhar-paradkar-97a88b230"
				>
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#006192] bg-clip-text"
						icon="mdi:linkedin"
					/>
				</a>
			</div>
		</div>
	</article>
</div>

<div class="flex_title">Technical Team</div>
<div class="my-cont_flex">
	<article class="my-cont">
		<div style:--img={`url(${tanishq_dhote_photo})`} class="thumb" />
		<div class="infos">
			<h2 class="title">Tanishq Dhote<span class="flag" /></h2>
			<h3 class="date">Head</h3>
			<h3 class="seats"><!--status--></h3>
			<p class="txt"><!-- data--></p>
			<div class="details">
				<a
					rel="external noopener noreferrer nofollow"
					target="_blank"
					href="mailto:parapallidev@gmail.com"
				>
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#EA4335] bg-clip-text"
						icon="mdi:email-outline"
					/>
				</a>
				<a
					rel="external noopener noreferrer nofollow"
					target="_blank"
					href="https://instagram.com/dev_parapalli"
				>
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#FF1C7C] bg-clip-text"
						icon="mdi:instagram"
					/>
				</a>
				<a
					rel="external noopener noreferrer nofollow"
					target="_blank"
					href="https://www.linkedin.com/in/devparapalli/"
				>
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#006192] bg-clip-text"
						icon="mdi:linkedin"
					/>
				</a>
			</div>
		</div>
	</article>
	<article class="my-cont">
		<div style:--img={`url(${aditya_thombre_photo})`} class="thumb" />
		<div class="infos">
			<h2 class="title">Aditya Thombre<span class="flag" /></h2>
			<h3 class="date">Head</h3>
			<h3 class="seats"><!--status--></h3>
			<p class="txt"><!-- data--></p>
			<div class="details">
				<a
					rel="external noopener noreferrer nofollow"
					target="_blank"
					href="mailto:dveshaglawe27@gmail.com"
				>
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#EA4335] bg-clip-text"
						icon="mdi:email-outline"
					/>
				</a>
				<a
					rel="external noopener noreferrer nofollow"
					target="_blank"
					href="https://www.instagram.com/dovesh.aglawe.2004"
				>
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#FF1C7C] bg-clip-text"
						icon="mdi:instagram"
					/>
				</a>
				<a rel="external noopener noreferrer nofollow" target="_blank" href="">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#006192] bg-clip-text"
						icon="mdi:linkedin"
					/>
				</a>
			</div>
		</div>
	</article>
	<article class="my-cont">
		<div style:--img={`url(${mohit_deotare_photo})`} class="thumb" />
		<div class="infos">
			<h2 class="title">Mohit Deotare<span class="flag" /></h2>
			<h3 class="date">Co Head</h3>
			<h3 class="seats"><!--status--></h3>
			<p class="txt"><!-- data--></p>
			<div class="details">
				<a
					rel="external noopener noreferrer nofollow"
					target="_blank"
					href="mailto:shiwangpande1@gmail.com"
				>
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#EA4335] bg-clip-text"
						icon="mdi:email-outline"
					/>
				</a>
				<a
					rel="external noopener noreferrer nofollow"
					target="_blank"
					href="https://www.instagram.com/__shiwang/"
				>
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#FF1C7C] bg-clip-text"
						icon="mdi:instagram"
					/>
				</a>
				<a
					rel="external noopener noreferrer nofollow"
					target="_blank"
					href="https://www.linkedin.com/in/shiwang-pandey/"
				>
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#006192] bg-clip-text"
						icon="mdi:linkedin"
					/>
				</a>
			</div>
		</div>
	</article>
</div>

<div class="flex_title">Organisation Team</div>
<div class="my-cont_flex">
	<article class="my-cont">
		<div style:--img={`url(${ayush_khangar_photo})`} class="thumb" />
		<div class="infos">
			<h2 class="title">Ayush Khangar<span class="flag" /></h2>
			<h3 class="date">Head</h3>
			<h3 class="seats"><!--status--></h3>
			<p class="txt"><!-- data--></p>
			<div class="details">
				<a
					rel="external noopener noreferrer nofollow"
					target="_blank"
					href="mailto:sahilbrahme@gmail.com"
				>
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#EA4335] bg-clip-text"
						icon="mdi:email-outline"
					/>
				</a>
				<a rel="external noopener noreferrer nofollow" target="_blank" href="">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#FF1C7C] bg-clip-text"
						icon="mdi:instagram"
					/>
				</a>
				<a rel="external noopener noreferrer nofollow" target="_blank" href="">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#006192] bg-clip-text"
						icon="mdi:linkedin"
					/>
				</a>
			</div>
		</div>
	</article>
	<article class="my-cont">
		<div style:--img={`url(${aditya_muddamwar_photo})`} class="thumb" />
		<div class="infos">
			<h2 class="title">Aditya Muddamwar<span class="flag" /></h2>
			<h3 class="date">Head</h3>
			<h3 class="seats"><!--status--></h3>
			<p class="txt"><!-- data--></p>
			<div class="details">
				<a rel="external noopener noreferrer nofollow" target="_blank" href="">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#EA4335] bg-clip-text"
						icon="mdi:email-outline"
					/>
				</a>
				<a rel="external noopener noreferrer nofollow" target="_blank" href="">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#FF1C7C] bg-clip-text"
						icon="mdi:instagram"
					/>
				</a>
				<a rel="external noopener noreferrer nofollow" target="_blank" href="">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#006192] bg-clip-text"
						icon="mdi:linkedin"
					/>
				</a>
			</div>
		</div>
	</article>
	<article class="my-cont">
		<div style:--img={`url(${varun_dudhane_photo})`} class="thumb" />
		<div class="infos">
			<h2 class="title">Varun Dudhane<span class="flag" /></h2>
			<h3 class="date">Head</h3>
			<h3 class="seats"><!--status--></h3>
			<p class="txt"><!-- data--></p>
			<div class="details">
				<a rel="external noopener noreferrer nofollow" target="_blank" href="">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#EA4335] bg-clip-text"
						icon="mdi:email-outline"
					/>
				</a>
				<a rel="external noopener noreferrer nofollow" target="_blank" href="">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#FF1C7C] bg-clip-text"
						icon="mdi:instagram"
					/>
				</a>
				<a rel="external noopener noreferrer nofollow" target="_blank" href="">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#006192] bg-clip-text"
						icon="mdi:linkedin"
					/>
				</a>
			</div>
		</div>
	</article>
</div>
<div class="my-cont_flex">
	<article class="my-cont">
		<div style:--img={`url(${aranya_sharma_photo})`} class="thumb" />
		<div class="infos">
			<h2 class="title">Aranya Sharma<span class="flag" /></h2>
			<h3 class="date">Co Head</h3>
			<h3 class="seats"><!--status--></h3>
			<p class="txt"><!-- data--></p>
			<div class="details">
				<a
					rel="external noopener noreferrer nofollow"
					target="_blank"
					href="mailto:yraut2802@gmail.com"
				>
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#EA4335] bg-clip-text"
						icon="mdi:email-outline"
					/>
				</a>
				<a
					rel="external noopener noreferrer nofollow"
					target="_blank"
					href="https://www.instagram.com/yashraut28"
				>
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#FF1C7C] bg-clip-text"
						icon="mdi:instagram"
					/>
				</a>
				<a
					rel="external noopener noreferrer nofollow"
					target="_blank"
					href="https://www.linkedin.com/in/yash-raut-19bab7247"
				>
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#006192] bg-clip-text"
						icon="mdi:linkedin"
					/>
				</a>
			</div>
		</div>
	</article>
	<article class="my-cont">
		<div style:--img={`url(${ayushi_singh_photo})`} class="thumb" />
		<div class="infos">
			<h2 class="title">Ayushi Singh<span class="flag" /></h2>
			<h3 class="date">Co Head</h3>
			<h3 class="seats"><!--status--></h3>
			<p class="txt"><!-- data--></p>
			<div class="details">
				<a
					rel="external noopener noreferrer nofollow"
					target="_blank"
					href="mailto:nandinithaware0@gmail.com"
				>
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#EA4335] bg-clip-text"
						icon="mdi:email-outline"
					/>
				</a>
				<a
					rel="external noopener noreferrer nofollow"
					target="_blank"
					href="https://instagram.com/_nandini_thaware_"
				>
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#FF1C7C] bg-clip-text"
						icon="mdi:instagram"
					/>
				</a>
				<a
					rel="external noopener noreferrer nofollow"
					target="_blank"
					href="https://www.linkedin.com/in/nandini-thaware-4b5b38230"
				>
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#006192] bg-clip-text"
						icon="mdi:linkedin"
					/>
				</a>
			</div>
		</div>
	</article>
	<article class="my-cont">
		<div style:--img={`url(${khushi_sandekar_photo})`} class="thumb" />
		<div class="infos">
			<h2 class="title">Khushi Sandekar<span class="flag" /></h2>
			<h3 class="date">Co Head</h3>
			<h3 class="seats"><!--status--></h3>
			<p class="txt"><!-- data--></p>
			<div class="details">
				<a
					rel="external noopener noreferrer nofollow"
					target="_blank"
					href="mailto:aasthadongare05@gmail.com"
				>
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#EA4335] bg-clip-text"
						icon="mdi:email-outline"
					/>
				</a>
				<a
					rel="external noopener noreferrer nofollow"
					target="_blank"
					href="https://instagram.com/aastha_1219"
				>
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#FF1C7C] bg-clip-text"
						icon="mdi:instagram"
					/>
				</a>
				<a
					rel="external noopener noreferrer nofollow"
					target="_blank"
					href="https://www.linkedin.com/in/aastha-dongare-737304261"
				>
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#006192] bg-clip-text"
						icon="mdi:linkedin"
					/>
				</a>
			</div>
		</div>
	</article>
</div>
<div class="flex_title">Sponsorship Team</div>
<div class="my-cont_flex">
	<article class="my-cont">
		<div style:--img={`url(${ayush_khangar_photo})`} class="thumb" />
		<div class="infos">
			<h2 class="title">Ayush Khangar<span class="flag" /></h2>
			<h3 class="date">Head</h3>
			<h3 class="seats"><!--status--></h3>
			<p class="txt"><!-- data--></p>
			<div class="details">
				<a
					rel="external noopener noreferrer nofollow"
					target="_blank"
					href="mailto:gaikwadnihal26@gmail.com"
				>
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#EA4335] bg-clip-text"
						icon="mdi:email-outline"
					/>
				</a>
				<a
					rel="external noopener noreferrer nofollow"
					target="_blank"
					href="https://instagram.com/___.nihal.____"
				>
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#FF1C7C] bg-clip-text"
						icon="mdi:instagram"
					/>
				</a>
				<a
					rel="external noopener noreferrer nofollow"
					target="_blank"
					href="https://www.linkedin.com/in/nihal-gaikwad-612902230"
				>
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#006192] bg-clip-text"
						icon="mdi:linkedin"
					/>
				</a>
			</div>
		</div>
	</article>
	<article class="my-cont">
		<div style:--img={`url(${varun_dudhane_photo})`} class="thumb" />
		<div class="infos">
			<h2 class="title">Varun Dudhane<span class="flag" /></h2>
			<h3 class="date">Head</h3>
			<h3 class="seats"><!--status--></h3>
			<p class="txt"><!-- data--></p>
			<div class="details">
				<a
					rel="external noopener noreferrer nofollow"
					target="_blank"
					href="mailto:atharvamande@gmail.com"
				>
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#EA4335] bg-clip-text"
						icon="mdi:email-outline"
					/>
				</a>
				<a
					rel="external noopener noreferrer nofollow"
					target="_blank"
					href="https://instagram.com/atharva_mande"
				>
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#FF1C7C] bg-clip-text"
						icon="mdi:instagram"
					/>
				</a>
				<a
					rel="external noopener noreferrer nofollow"
					target="_blank"
					href="https://www.linkedin.com/in/atharva-mande-1a2693255"
				>
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#006192] bg-clip-text"
						icon="mdi:linkedin"
					/>
				</a>
			</div>
		</div>
	</article>
	<article class="my-cont">
		<div style:--img={`url(${dude_from_mechanical})`} class="thumb" />
		<div class="infos">
			<h2 class="title">Abhishek Kuber<span class="flag" /></h2>
			<h3 class="date">Head</h3>
			<h3 class="seats"><!--status--></h3>
			<p class="txt"><!-- data--></p>
			<div class="details">
				<a
					rel="external noopener noreferrer nofollow"
					target="_blank"
					href="mailto:atharvamande@gmail.com"
				>
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#EA4335] bg-clip-text"
						icon="mdi:email-outline"
					/>
				</a>
				<a
					rel="external noopener noreferrer nofollow"
					target="_blank"
					href="https://instagram.com/atharva_mande"
				>
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#FF1C7C] bg-clip-text"
						icon="mdi:instagram"
					/>
				</a>
				<a
					rel="external noopener noreferrer nofollow"
					target="_blank"
					href="https://www.linkedin.com/in/atharva-mande-1a2693255"
				>
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#006192] bg-clip-text"
						icon="mdi:linkedin"
					/>
				</a>
			</div>
		</div>
	</article>
</div>
<div class="my-cont_flex">
	<article class="my-cont">
		<div style:--img={`url(${sabrina_mondal_photo})`} class="thumb" />
		<div class="infos">
			<h2 class="title">Shravani Gawande<span class="flag" /></h2>
			<h3 class="date">Head</h3>
			<h3 class="seats"><!--status--></h3>
			<p class="txt"><!-- data--></p>
			<div class="details">
				<a rel="external noopener noreferrer nofollow" target="_blank" href="">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#EA4335] bg-clip-text"
						icon="mdi:email-outline"
					/>
				</a>
				<a rel="external noopener noreferrer nofollow" target="_blank" href="">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#FF1C7C] bg-clip-text"
						icon="mdi:instagram"
					/>
				</a>
				<a rel="external noopener noreferrer nofollow" target="_blank" href="">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#006192] bg-clip-text"
						icon="mdi:linkedin"
					/>
				</a>
			</div>
		</div>
	</article>
	<article class="my-cont">
		<div style:--img={`url(${shravani_gawande_photo})`} class="thumb" />
		<div class="infos">
			<h2 class="title">Sabrina Mondal<span class="flag" /></h2>
			<h3 class="date">Head</h3>
			<h3 class="seats"><!--status--></h3>
			<p class="txt"><!-- data--></p>
			<div class="details">
				<a rel="external noopener noreferrer nofollow" target="_blank" href="">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#EA4335] bg-clip-text"
						icon="mdi:email-outline"
					/>
				</a>
				<a rel="external noopener noreferrer nofollow" target="_blank" href="">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#FF1C7C] bg-clip-text"
						icon="mdi:instagram"
					/>
				</a>
				<a rel="external noopener noreferrer nofollow" target="_blank" href="">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#006192] bg-clip-text"
						icon="mdi:linkedin"
					/>
				</a>
			</div>
		</div>
	</article>
</div>
<div class="flex_title">Publicity Team</div>
<div class="my-cont_flex">
	<article class="my-cont">
		<div style:--img={`url(${rohit_wagh_photo})`} class="thumb" />
		<div class="infos">
			<h2 class="title">Rohit Wagh<span class="flag" /></h2>
			<h3 class="date">Head</h3>
			<h3 class="seats"><!--status--></h3>
			<p class="txt"><!-- data--></p>
			<div class="details">
				<a
					rel="external noopener noreferrer nofollow"
					target="_blank"
					href="mailto:pranavpatle111@gmail.com"
				>
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#EA4335] bg-clip-text"
						icon="mdi:email-outline"
					/>
				</a>
				<a
					rel="external noopener noreferrer nofollow"
					target="_blank"
					href="https://instagram.com/03_pranav_"
				>
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#FF1C7C] bg-clip-text"
						icon="mdi:instagram"
					/>
				</a>
				<a
					rel="external noopener noreferrer nofollow"
					target="_blank"
					href="https://www.linkedin.com/in/pranav-patle-b8955122b"
				>
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#006192] bg-clip-text"
						icon="mdi:linkedin"
					/>
				</a>
			</div>
		</div>
	</article>
	<article class="my-cont">
		<div style:--img={`url(${jaideep_roy_photo})`} class="thumb" />
		<div class="infos">
			<h2 class="title">Jaideep Roy<span class="flag" /></h2>
			<h3 class="date">Head</h3>
			<h3 class="seats"><!--status--></h3>
			<p class="txt"><!-- data--></p>
			<div class="details">
				<a rel="external noopener noreferrer nofollow" target="_blank" href="">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#EA4335] bg-clip-text"
						icon="mdi:email-outline"
					/>
				</a>
				<a rel="external noopener noreferrer nofollow" target="_blank" href="">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#FF1C7C] bg-clip-text"
						icon="mdi:instagram"
					/>
				</a>
				<a rel="external noopener noreferrer nofollow" target="_blank" href="">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#006192] bg-clip-text"
						icon="mdi:linkedin"
					/>
				</a>
			</div>
		</div>
	</article>
	<article class="my-cont">
		<div style:--img={`url(${suhani_garad_photo})`} class="thumb" />
		<div class="infos">
			<h2 class="title">Suhani Garad<span class="flag" /></h2>
			<h3 class="date">Head</h3>
			<h3 class="seats"><!--status--></h3>
			<p class="txt"><!-- data--></p>
			<div class="details">
				<a rel="external noopener noreferrer nofollow" target="_blank" href="">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#EA4335] bg-clip-text"
						icon="mdi:email-outline"
					/>
				</a>
				<a rel="external noopener noreferrer nofollow" target="_blank" href="">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#FF1C7C] bg-clip-text"
						icon="mdi:instagram"
					/>
				</a>
				<a rel="external noopener noreferrer nofollow" target="_blank" href="">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#006192] bg-clip-text"
						icon="mdi:linkedin"
					/>
				</a>
			</div>
		</div>
	</article>
</div>
<div class="my-cont_flex">
	<article class="my-cont">
		<div style:--img={`url(${swayam_jawade_photo})`} class="thumb" />
		<div class="infos">
			<h2 class="title">Swayam Jawade<span class="flag" /></h2>
			<h3 class="date">Co Head</h3>
			<h3 class="seats"><!--status--></h3>
			<p class="txt"><!-- data--></p>
			<div class="details">
				<a rel="external noopener noreferrer nofollow" target="_blank" href="">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#EA4335] bg-clip-text"
						icon="mdi:email-outline"
					/>
				</a>
				<a rel="external noopener noreferrer nofollow" target="_blank" href="">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#FF1C7C] bg-clip-text"
						icon="mdi:instagram"
					/>
				</a>
				<a rel="external noopener noreferrer nofollow" target="_blank" href="">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#006192] bg-clip-text"
						icon="mdi:linkedin"
					/>
				</a>
			</div>
		</div>
	</article>
	<article class="my-cont">
		<div style:--img={`url(${tejesh_ghuge_photo})`} class="thumb" />
		<div class="infos">
			<h2 class="title">Tejesh Ghuge<span class="flag" /></h2>
			<h3 class="date">Co Head</h3>
			<h3 class="seats"><!--status--></h3>
			<p class="txt"><!-- data--></p>
			<div class="details">
				<a rel="external noopener noreferrer nofollow" target="_blank" href="">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#EA4335] bg-clip-text"
						icon="mdi:email-outline"
					/>
				</a>
				<a rel="external noopener noreferrer nofollow" target="_blank" href="">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#FF1C7C] bg-clip-text"
						icon="mdi:instagram"
					/>
				</a>
				<a rel="external noopener noreferrer nofollow" target="_blank" href="">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#006192] bg-clip-text"
						icon="mdi:linkedin"
					/>
				</a>
			</div>
		</div>
	</article>
	<article class="my-cont">
		<div style:--img={`url(${anushree_barad_photo})`} class="thumb" />
		<div class="infos">
			<h2 class="title">Anushree Barad<span class="flag" /></h2>
			<h3 class="date">Co Head</h3>
			<h3 class="seats"><!--status--></h3>
			<p class="txt"><!-- data--></p>
			<div class="details">
				<a rel="external noopener noreferrer nofollow" target="_blank" href="">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#EA4335] bg-clip-text"
						icon="mdi:email-outline"
					/>
				</a>
				<a rel="external noopener noreferrer nofollow" target="_blank" href="">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#FF1C7C] bg-clip-text"
						icon="mdi:instagram"
					/>
				</a>
				<a rel="external noopener noreferrer nofollow" target="_blank" href="">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#006192] bg-clip-text"
						icon="mdi:linkedin"
					/>
				</a>
			</div>
		</div>
	</article>
</div>
<div class="flex_title">Accounting Team</div>
<div class="my-cont_flex">
	<article class="my-cont">
		<div style:--img={`url(${nimish_gotmare_photo})`} class="thumb" />
		<div class="infos">
			<h2 class="title">Nimish Gotmare<span class="flag" /></h2>
			<h3 class="date">Head</h3>
			<h3 class="seats"><!--status--></h3>
			<p class="txt"><!-- data--></p>
			<div class="details">
				<a
					rel="external noopener noreferrer nofollow"
					target="_blank"
					href="mailto:priyanandanwar81@gmail.com"
				>
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#EA4335] bg-clip-text"
						icon="mdi:email-outline"
					/>
				</a>
				<a
					rel="external noopener noreferrer nofollow"
					target="_blank"
					href="https://instagram.com/priyaaa_013"
				>
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#FF1C7C] bg-clip-text"
						icon="mdi:instagram"
					/>
				</a>
				<a
					rel="external noopener noreferrer nofollow"
					target="_blank"
					href="https://www.linkedin.com/in/priyanandanwar"
				>
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#006192] bg-clip-text"
						icon="mdi:linkedin"
					/>
				</a>
			</div>
		</div>
	</article>
	<article class="my-cont">
		<div style:--img={`url(${prajwal_akarte_photo})`} class="thumb" />
		<div class="infos">
			<h2 class="title">Prajwal Akarte<span class="flag" /></h2>
			<h3 class="date">Head</h3>
			<h3 class="seats"><!--status--></h3>
			<p class="txt"><!-- data--></p>
			<div class="details">
				<a
					rel="external noopener noreferrer nofollow"
					target="_blank"
					href="mailto:priyanandanwar81@gmail.com"
				>
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#EA4335] bg-clip-text"
						icon="mdi:email-outline"
					/>
				</a>
				<a
					rel="external noopener noreferrer nofollow"
					target="_blank"
					href="https://instagram.com/priyaaa_013"
				>
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#FF1C7C] bg-clip-text"
						icon="mdi:instagram"
					/>
				</a>
				<a
					rel="external noopener noreferrer nofollow"
					target="_blank"
					href="https://www.linkedin.com/in/priyanandanwar"
				>
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#006192] bg-clip-text"
						icon="mdi:linkedin"
					/>
				</a>
			</div>
		</div>
	</article>	
</div>

<div class="flex_title">Content Writing Team</div>
<div class="my-cont_flex">
	<article class="my-cont">
		<div style:--img={`url(${sabrina_mondal_photo})`} class="thumb" />
		<div class="infos">
			<h2 class="title">Shravani Gawande<span class="flag" /></h2>
			<h3 class="date">Head</h3>
			<h3 class="seats"><!--status--></h3>
			<p class="txt"><!-- data--></p>
			<div class="details">
				<a rel="external noopener noreferrer nofollow" target="_blank" href="">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#EA4335] bg-clip-text"
						icon="mdi:email-outline"
					/>
				</a>
				<a rel="external noopener noreferrer nofollow" target="_blank" href="">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#FF1C7C] bg-clip-text"
						icon="mdi:instagram"
					/>
				</a>
				<a rel="external noopener noreferrer nofollow" target="_blank" href="">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#006192] bg-clip-text"
						icon="mdi:linkedin"
					/>
				</a>
			</div>
		</div>
	</article>
	<article class="my-cont">
		<div style:--img={`url(${shravani_gawande_photo})`} class="thumb" />
		<div class="infos">
			<h2 class="title">Sabrina Mondal<span class="flag" /></h2>
			<h3 class="date">Head</h3>
			<h3 class="seats"><!--status--></h3>
			<p class="txt"><!-- data--></p>
			<div class="details">
				<a rel="external noopener noreferrer nofollow" target="_blank" href="">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#EA4335] bg-clip-text"
						icon="mdi:email-outline"
					/>
				</a>
				<a rel="external noopener noreferrer nofollow" target="_blank" href="">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#FF1C7C] bg-clip-text"
						icon="mdi:instagram"
					/>
				</a>
				<a rel="external noopener noreferrer nofollow" target="_blank" href="">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#006192] bg-clip-text"
						icon="mdi:linkedin"
					/>
				</a>
			</div>
		</div>
	</article>
</div>


<div class="flex_title">Creativity and Decoration team</div>
<div class="my-cont_flex">
	<article class="my-cont">
		<div style:--img={`url(${karan_buradkar_photo})`} class="thumb" />
		<div class="infos">
			<h2 class="title">Karan Buradkar<span class="flag" /></h2>
			<h3 class="date">Head</h3>
			<h3 class="seats"><!--status--></h3>
			<p class="txt"><!-- data--></p>
			<div class="details">
				<a rel="external noopener noreferrer nofollow" target="_blank" href="">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#EA4335] bg-clip-text"
						icon="mdi:email-outline"
					/>
				</a>
				<a rel="external noopener noreferrer nofollow" target="_blank" href="">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#FF1C7C] bg-clip-text"
						icon="mdi:instagram"
					/>
				</a>
				<a rel="external noopener noreferrer nofollow" target="_blank" href="">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#006192] bg-clip-text"
						icon="mdi:linkedin"
					/>
				</a>
			</div>
		</div>
	</article>
	<article class="my-cont">
		<div style:--img={`url(${ashlesha_chute_photo})`} class="thumb" />
		<div class="infos">
			<h2 class="title">Ashlesha Chute<span class="flag" /></h2>
			<h3 class="date">Head</h3>
			<h3 class="seats"><!--status--></h3>
			<p class="txt"><!-- data--></p>
			<div class="details">
				<a rel="external noopener noreferrer nofollow" target="_blank" href="">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#EA4335] bg-clip-text"
						icon="mdi:email-outline"
					/>
				</a>
				<a rel="external noopener noreferrer nofollow" target="_blank" href="">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#FF1C7C] bg-clip-text"
						icon="mdi:instagram"
					/>
				</a>
				<a rel="external noopener noreferrer nofollow" target="_blank" href="">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#006192] bg-clip-text"
						icon="mdi:linkedin"
					/>
				</a>
			</div>
		</div>
	</article>
	<article class="my-cont">
		<div style:--img={`url(${ajinkya_mundhe_photo})`} class="thumb" />
		<div class="infos">
			<h2 class="title">Ajinkya Mundhe<span class="flag" /></h2>
			<h3 class="date">Head</h3>
			<h3 class="seats"><!--status--></h3>
			<p class="txt"><!-- data--></p>
			<div class="details">
				<a
					rel="external noopener noreferrer nofollow"
					target="_blank"
					href="mailto:ketakimahalle14@gmail.com"
				>
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#EA4335] bg-clip-text"
						icon="mdi:email-outline"
					/>
				</a>
				<a
					rel="external noopener noreferrer nofollow"
					target="_blank"
					href="https://instagram.com/_.ketaki._14"
				>
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#FF1C7C] bg-clip-text"
						icon="mdi:instagram"
					/>
				</a>
				<a
					rel="external noopener noreferrer nofollow"
					target="_blank"
					href="https://www.linkedin.com/in/ketaki-mahalle-116979257"
				>
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#006192] bg-clip-text"
						icon="mdi:linkedin"
					/>
				</a>
			</div>
		</div>
	</article>
	<article class="my-cont">
		<div style:--img={`url(${dipti_harshe_photo})`} class="thumb" />
		<div class="infos">
			<h2 class="title">Dipti Harshe<span class="flag" /></h2>
			<h3 class="date">Head</h3>
			<h3 class="seats"><!--status--></h3>
			<p class="txt"><!-- data--></p>
			<div class="details">
				<a
					rel="external noopener noreferrer nofollow"
					target="_blank"
					href="mailto:siddhibarde26@gmail.com"
				>
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#EA4335] bg-clip-text"
						icon="mdi:email-outline"
					/>
				</a>
				<a
					rel="external noopener noreferrer nofollow"
					target="_blank"
					href="https://instagram.com/siddhibarde_26"
				>
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#FF1C7C] bg-clip-text"
						icon="mdi:instagram"
					/>
				</a>
				<a
					rel="external noopener noreferrer nofollow"
					target="_blank"
					href="https://www.linkedin.com/in/siddhi-barde-732348248"
				>
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#006192] bg-clip-text"
						icon="mdi:linkedin"
					/>
				</a>
			</div>
		</div>
	</article>
	<article class="my-cont">
		<div style:--img={`url(${rohit_thakre_photo})`} class="thumb" />
		<div class="infos">
			<h2 class="title">Rohit Thakare<span class="flag" /></h2>
			<h3 class="date">Co Head</h3>
			<h3 class="seats"><!--status--></h3>
			<p class="txt"><!-- data--></p>
			<div class="details">
				<a
					rel="external noopener noreferrer nofollow"
					target="_blank"
					href="mailto:pratikbagdi21@gmail.com"
				>
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#EA4335] bg-clip-text"
						icon="mdi:email-outline"
					/>
				</a>
				<a
					rel="external noopener noreferrer nofollow"
					target="_blank"
					href="https://www.instagram.com/impratikbagdi/"
				>
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#FF1C7C] bg-clip-text"
						icon="mdi:instagram"
					/>
				</a>
				<a
					rel="external noopener noreferrer nofollow"
					target="_blank"
					href="https://www.linkedin.com/in/pratik-bagdi-b9915a229"
				>
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#006192] bg-clip-text"
						icon="mdi:linkedin"
					/>
				</a>
			</div>
		</div>
	</article>
	<article class="my-cont">
		<div style:--img={`url(${samruddhe_nasre_photo})`} class="thumb" />
		<div class="infos">
			<h2 class="title">Samrudhi Nasare<span class="flag" /></h2>
			<h3 class="date">Co Head</h3>
			<h3 class="seats"><!--status--></h3>
			<p class="txt"><!-- data--></p>
			<div class="details">
				<a
					rel="external noopener noreferrer nofollow"
					target="_blank"
					href="mailto:pratikbagdi21@gmail.com"
				>
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#EA4335] bg-clip-text"
						icon="mdi:email-outline"
					/>
				</a>
				<a
					rel="external noopener noreferrer nofollow"
					target="_blank"
					href="https://www.instagram.com/impratikbagdi/"
				>
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#FF1C7C] bg-clip-text"
						icon="mdi:instagram"
					/>
				</a>
				<a
					rel="external noopener noreferrer nofollow"
					target="_blank"
					href="https://www.linkedin.com/in/pratik-bagdi-b9915a229"
				>
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#006192] bg-clip-text"
						icon="mdi:linkedin"
					/>
				</a>
			</div>
		</div>
	</article>
</div>

<div class="flex_title">Hospitality And Discipline team</div>
<div class="my-cont_flex">
	<article class="my-cont">
		<div style:--img={`url(${aditya_gawai_photo})`} class="thumb" />
		<div class="infos">
			<h2 class="title">Aditya Gawai<span class="flag" /></h2>
			<h3 class="date">Head</h3>
			<h3 class="seats"><!--status--></h3>
			<p class="txt"><!-- data--></p>
			<div class="details">
				<a rel="external noopener noreferrer nofollow" target="_blank" href="">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#EA4335] bg-clip-text"
						icon="mdi:email-outline"
					/>
				</a>
				<a rel="external noopener noreferrer nofollow" target="_blank" href="">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#FF1C7C] bg-clip-text"
						icon="mdi:instagram"
					/>
				</a>
				<a rel="external noopener noreferrer nofollow" target="_blank" href="">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#006192] bg-clip-text"
						icon="mdi:linkedin"
					/>
				</a>
			</div>
		</div>
	</article>
	<article class="my-cont">
		<div style:--img={`url(${mrunmai_ingole_photo})`} class="thumb" />
		<div class="infos">
			<h2 class="title">Mrunmai Ingole<span class="flag" /></h2>
			<h3 class="date">Head</h3>
			<h3 class="seats"><!--status--></h3>
			<p class="txt"><!-- data--></p>
			<div class="details">
				<a
					rel="external noopener noreferrer nofollow"
					target="_blank"
					href="mailto:chetnasalve00@gmail.com"
				>
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#EA4335] bg-clip-text"
						icon="mdi:email-outline"
					/>
				</a>
				<a
					rel="external noopener noreferrer nofollow"
					target="_blank"
					href="https://instagram.com/chetna__salve"
				>
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#FF1C7C] bg-clip-text"
						icon="mdi:instagram"
					/>
				</a>
				<a
					rel="external noopener noreferrer nofollow"
					target="_blank"
					href="https://www.linkedin.com/in/chetna-salve-2951a8249"
				>
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#006192] bg-clip-text"
						icon="mdi:linkedin"
					/>
				</a>
			</div>
		</div>
	</article>
	<article class="my-cont">
		<div style:--img={`url(${shweta_mane_photo})`} class="thumb" />
		<div class="infos">
			<h2 class="title">Shweta Mane<span class="flag" /></h2>
			<h3 class="date">Head</h3>
			<h3 class="seats"><!--status--></h3>
			<p class="txt"><!-- data--></p>
			<div class="details">
				<a
					rel="external noopener noreferrer nofollow"
					target="_blank"
					href="mailto:sakshinimje2003@gmail.com"
				>
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#EA4335] bg-clip-text"
						icon="mdi:email-outline"
					/>
				</a>
				<a
					rel="external noopener noreferrer nofollow"
					target="_blank"
					href="https://instagram.com/warrior__princesss"
				>
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#FF1C7C] bg-clip-text"
						icon="mdi:instagram"
					/>
				</a>
				<a
					rel="external noopener noreferrer nofollow"
					target="_blank"
					href="https://www.linkedin.com/in/sakshi-nimje-22a8a1250"
				>
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#006192] bg-clip-text"
						icon="mdi:linkedin"
					/>
				</a>
			</div>
		</div>
	</article>
	<article class="my-cont">
		<div style:--img={`url(${palash_atram_photo})`} class="thumb" />
		<div class="infos">
			<h2 class="title">Palash Atram<span class="flag" /></h2>
			<h3 class="date">Head</h3>
			<h3 class="seats"><!--status--></h3>
			<p class="txt"><!-- data--></p>
			<div class="details">
				<a rel="external noopener noreferrer nofollow" target="_blank" href="">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#EA4335] bg-clip-text"
						icon="mdi:email-outline"
					/>
				</a>
				<a rel="external noopener noreferrer nofollow" target="_blank" href="">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#FF1C7C] bg-clip-text"
						icon="mdi:instagram"
					/>
				</a>
				<a rel="external noopener noreferrer nofollow" target="_blank" href="">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#006192] bg-clip-text"
						icon="mdi:linkedin"
					/>
				</a>
			</div>
		</div>
	</article>
	<article class="my-cont">
		<div style:--img={`url(${himanshi_bisen_photo})`} class="thumb" />
		<div class="infos">
			<h2 class="title">Himanshi Bisen<span class="flag" /></h2>
			<h3 class="date">Head</h3>
			<h3 class="seats"><!--status--></h3>
			<p class="txt"><!-- data--></p>
			<div class="details">
				<a rel="external noopener noreferrer nofollow" target="_blank" href="">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#EA4335] bg-clip-text"
						icon="mdi:email-outline"
					/>
				</a>
				<a rel="external noopener noreferrer nofollow" target="_blank" href="">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#FF1C7C] bg-clip-text"
						icon="mdi:instagram"
					/>
				</a>
				<a rel="external noopener noreferrer nofollow" target="_blank" href="">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#006192] bg-clip-text"
						icon="mdi:linkedin"
					/>
				</a>
			</div>
		</div>
	</article>
</div>
<div class="my-cont_flex">
	<article class="my-cont">
		<div style:--img={`url(${hardik_bodele_photo})`} class="thumb" />
		<div class="infos">
			<h2 class="title">Hardik Bodele<span class="flag" /></h2>
			<h3 class="date">Co Head</h3>
			<h3 class="seats"><!--status--></h3>
			<p class="txt"><!-- data--></p>
			<div class="details">
				<a
					rel="external noopener noreferrer nofollow"
					target="_blank"
					href="mailto:sahilmarbate7@gmail.com"
				>
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#EA4335] bg-clip-text"
						icon="mdi:email-outline"
					/>
				</a>
				<a
					rel="external noopener noreferrer nofollow"
					target="_blank"
					href="https://instagram.com/_talkwithsahil_"
				>
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#FF1C7C] bg-clip-text"
						icon="mdi:instagram"
					/>
				</a>
				<a
					rel="external noopener noreferrer nofollow"
					target="_blank"
					href="https://www.linkedin.com/in/sahil-marbate-5b9248251"
				>
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#006192] bg-clip-text"
						icon="mdi:linkedin"
					/>
				</a>
			</div>
		</div>
	</article>
	<article class="my-cont">
		<div style:--img={`url(${sneha_motghare_photo})`} class="thumb" />
		<div class="infos">
			<h2 class="title">Sneha Motghare<span class="flag" /></h2>
			<h3 class="date">Co Head</h3>
			<h3 class="seats"><!--status--></h3>
			<p class="txt"><!-- data--></p>
			<div class="details">
				<a rel="external noopener noreferrer nofollow" target="_blank" href="">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#EA4335] bg-clip-text"
						icon="mdi:email-outline"
					/>
				</a>
				<a rel="external noopener noreferrer nofollow" target="_blank" href="">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#FF1C7C] bg-clip-text"
						icon="mdi:instagram"
					/>
				</a>
				<a rel="external noopener noreferrer nofollow" target="_blank" href="">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#006192] bg-clip-text"
						icon="mdi:linkedin"
					/>
				</a>
			</div>
		</div>
	</article>
	<article class="my-cont">
		<div style:--img={`url(${samruddhe_nasre_photo})`} class="thumb" />
		<div class="infos">
			<h2 class="title">Samruddhi Nasre<span class="flag" /></h2>
			<h3 class="date">Co Head</h3>
			<h3 class="seats"><!--status--></h3>
			<p class="txt"><!-- data--></p>
			<div class="details">
				<a rel="external noopener noreferrer nofollow" target="_blank" href="">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#EA4335] bg-clip-text"
						icon="mdi:email-outline"
					/>
				</a>
				<a rel="external noopener noreferrer nofollow" target="_blank" href="">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#FF1C7C] bg-clip-text"
						icon="mdi:instagram"
					/>
				</a>
				<a rel="external noopener noreferrer nofollow" target="_blank" href="">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#006192] bg-clip-text"
						icon="mdi:linkedin"
					/>
				</a>
			</div>
		</div>
	</article>
</div>
{/if}
<style>

	#dna-bg {
		background: var(--bg) center no-repeat;
		background-size: cover;
	}

	.flex_title {
		font-family: title, sans-serif;
		font-size: 4rem;
		color: rgb(255, 255, 255);
		text-shadow: 4px 1px 10px #000e23ea;
		text-align: center;
		margin-bottom: 6vh;
	}
	.my-cont_flex {
		max-width: 80vw;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-evenly;
		@apply mx-auto 2xl:max-w-full;
	}

	/* a[rel="external noopener noreferrer nofollow" target="_blank" href] {
		position: relative;
	}
	a[rel="external noopener noreferrer nofollow" target="_blank" href],
	a[rel="external noopener noreferrer nofollow" target="_blank" href]:link,
	a[rel="external noopener noreferrer nofollow" target="_blank" href]:visited,
	a[rel="external noopener noreferrer nofollow" target="_blank" href]:active {
		text-decoration: none;
		color: #d8276c;
		text-shadow: 2px 2px 2px #070c11;
		padding-bottom: 3px;
		font-weight: bold;
	}
	a[rel="external noopener noreferrer nofollow" target="_blank" href]::after {
		content: '';
		position: absolute;
		left: 0;
		left: 0;
		bottom: 0;
		background: #fff;
		width: 0;
		height: 1px;
		transition: 0.35s cubic-bezier(0.17, 0.67, 0.5, 1.03);
	}
	a[rel="external noopener noreferrer nofollow" target="_blank" href]:hover::after {
		width: 100%;
		box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
	}

	.note {
		margin-top: 30px;
		color: #fff;
		font-size: 1rem;
		font-family: 'Merriweather', sans-serif;
		line-height: 1.5;
		text-align: center;
	} */

	article.my-cont {
		margin-bottom: 4vw;
		margin-left: 0.8vw;
		margin-right: 0.8vw;
		width: 280px;
		height: 350px;
		border-radius: 3px;
		box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
		overflow: hidden;
	}
	article.my-cont:hover {
		box-shadow: 1px 1px 10px 5px rgba(177, 177, 177, 0.803);
		transition: all 0.5s;
	}

	article.my-cont .thumb {
		width: auto;
		height: 260px;
		background: var(
				--img,
				url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/397014/new-york-city.png')
			)
			no-repeat;
		background-size: cover;
		background-position-x: center;
		border-radius: 3px;
	}
	article.my-cont .infos {
		width: auto;
		height: 350px;
		position: relative;
		padding: 8px 14px;
		background: rgb(255, 255, 255);
		transition: all 0.5s;
	}
	article.my-cont .infos .title {
		position: relative;
		margin: 2px 0;
		letter-spacing: 1px;
		color: #152536;
		font-family: 'Nunito', sans-serif;
		font-size: 1.2rem;
		text-transform: uppercase;
		text-shadow: 0 0 0px #2b2b2b8e;
		@apply line-clamp-1;
	}
	article.my-cont .infos .flag {
		position: absolute;
		top: 50%;
		right: 0;
		transform: translateY(-50%);
		width: 35px;
		height: 23px;
		background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/397014/flag.pngss') no-repeat top
			right;
		background-size: 100% auto;
		display: inline-block;
	}
	article.my-cont .infos .date,
	article.my-cont .infos .seats {
		margin-bottom: 10px;
		text-transform: uppercase;
		font-size: 1.2rem;
		color: rgba(21, 37, 54, 0.7);
		font-family: 'My Font', sans-serif;
	}

	article.my-cont .infos .seats {
		display: inline-block;
		margin-bottom: 24px;
		padding-bottom: 24px;
		border-bottom: 1px solid rgba(0, 0, 0, 0.2);
		opacity: 0;
		transition: 0.5s 0.25s cubic-bezier(0.17, 0.67, 0.5, 1.03);
	}
	article.my-cont .infos .txt {
		font-family: 'Merriweather', sans-serif;
		line-height: 2;
		font-size: 0.95rem;
		color: rgba(21, 37, 54, 0.7);
		opacity: 0;
		transition: 0.5s 0.25s cubic-bezier(0.17, 0.67, 0.5, 1.03);
	}
	article.my-cont .infos i {
		cursor: pointer;
	}
	article.my-cont .infos .details {
		position: absolute;
		left: 0px;
		bottom: 20px;
		font-size: 2.5rem;
		opacity: 0;
		transition: 0.5s 0.25s cubic-bezier(0.17, 0.67, 0.5, 1.03);
		@apply flex flex-row items-center justify-evenly w-full;
	}
	article.my-cont:hover .infos {
		/* transform: translateY(-260px); */
		/* background: linear-gradient(0deg,white 30%,rgba(255, 255, 255, 0) 100%); 
  glowing effect
  */
	}
	article.my-cont:hover .infos .seats,
	article.my-cont:hover .infos .txt,
	article.my-cont:hover .infos .details {
		opacity: 1;
	}
	@media only screen and (max-width: 1200px) {
		.flex_title {
			margin-top: 7vw;
			font-size: 12vw;
		}
		article.my-cont {
			width: 66vw;
			height: 70vw;
		}
		article.my-cont .infos .title {
			/* font-size: 10rem;  */
			@apply text-lg m-0;
		}

		article.my-cont .thumb {
			height: 50vw;
		}
		article.my-cont .infos {
			width: 70vw;
			height: 70vw;
		}
		article.my-cont:hover .infos {
			/* transform: translateY(-50vw); */
		}
		article.my-cont .infos .date {
			/* font-size: 1.25rem; */
			margin-top: -2px;
			@apply text-base;
		}
		i {
			/* font-size: 6rem !important; */
			/* margin-left: 9vw !important; */
			margin-bottom: 1rem;
		}
	}
</style>
