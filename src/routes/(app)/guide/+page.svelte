<script lang="ts">
	import map from '$lib/assets/map.png';
  import {EVENTS} from '$lib/data/events'
	enum Mode {
		ONLINE = 'Online',
		OFFLINE = 'Offline'
	}

	let TIMELINE: { time: string; name: string; mode: Mode }[][] = [
		// Day 1
		[
			{ time: '10:00AM to 12:00PM', name: 'Inauguration', mode: Mode.OFFLINE },
			{ time: '12:30PM to 6:00PM', name: 'Crickbash', mode: Mode.OFFLINE },
			{ time: '12:00PM to 2:00PM', name: 'Avishkar', mode: Mode.OFFLINE },
			{ time: '12:00PM to 6:00PM', name: 'Aeromodeling', mode: Mode.OFFLINE },
			{ time: '2:00PM to 4:30PM', name: 'Lounge', mode: Mode.OFFLINE },
			{ time: '11:00AM to 12:00PM', name: 'Virtual Placement Round 1', mode: Mode.OFFLINE },
			{ time: '2:30PM to 5:30PM', name: 'Virtual Placement Round 2', mode: Mode.OFFLINE },
			{ time: '1:00PM to 6:00PM ', name: 'Foodoholics', mode: Mode.OFFLINE },
			{ time: '6:00PM onwards', name: 'Respawn Chess', mode: Mode.ONLINE },
			{ time: '5:00PM onwards', name: 'Respawn Valorant', mode: Mode.ONLINE }
		],
		// Day 2
		[
			{ time: '10:30AM-6PM', name: 'Crickbaash', mode: Mode.OFFLINE },
			{ time: '12:00AM-3:00PM', name: 'Stock', mode: Mode.OFFLINE },
			{ time: '11:00AM-6:00PM', name: 'Vaad-vivaad', mode: Mode.OFFLINE },
			{ time: '10:30AM-6:00PM', name: 'BornPsychos', mode: Mode.OFFLINE },
			{ time: '11:00AM-6:00PM', name: 'Codeventure', mode: Mode.ONLINE },
			{ time: '11:00AM-5:00PM', name: 'Roborace', mode: Mode.OFFLINE },
			{ time: '5:00PM-7:30PM', name: 'Stargaze', mode: Mode.OFFLINE },
			{ time: '1:00PM-6:00PM', name: 'Foodoholics', mode: Mode.OFFLINE },
			{ time: '11:00PM-1:00PM', name: 'Structure Spy', mode: Mode.ONLINE },
			{ time: '6:00PM onwards', name: 'Respawn BGMI, Valorant', mode: Mode.OFFLINE },
			{ time: '12:00PM-4:00PM', name: 'Virtual Placement Round 3,4', mode: Mode.OFFLINE }
		
		],
		// Day 3
		[
			{ time: '12:00PM-2:00PM', name: 'Quiz Masters', mode: Mode.OFFLINE },
			{ time: '12:00PM-2:00PM', name: 'GDSC Workshop', mode: Mode.OFFLINE },
			{ time: '11:00AM-1:00PM', name: 'Jigyassa', mode: Mode.OFFLINE },
			{ time: '3:30PM-6:00PM', name: 'Validictory', mode: Mode.OFFLINE }
		]
	];
  let ORG = [
    ["Sahil Brahme", "9552269716"],
    ["Yash Raut", "8149722736"],
    ["Shubhlak Kanpate", "9370749283"],
  ]
</script>

<div
	class="fixed -z-50 h-screen w-screen bg-gradient-to-tr from-[#0d0028] to-gray-900 overflow-hidden"
/>

<div class="flex flex-wrap justify-center pt-28">
	<div class="w-full lg:w-1/2 px-4">
		<!-- <img class="w-full h-full object-contain" src={imageUrl} alt="Map of GCOEN" /> -->
		<img class="w-full h-full object-contain " src={map} alt="Map of GCOEN" />
	</div>
	<div class="w-full lg:w-1/2 px-4 pt-10 lg:pt-0 text-lg text-gray-200">
		<div class="flex flex-wrap justify-center w-full">
			<div class="w-full px-4 pb-10">
				<h2 class="text-2xl nunu font-medium text-gray-200 underline underline-offset-4">
					Instructions
				</h2>
				<!-- <p class="mt-4">{instructions}</p> -->
				<ol class="list-disc">
					<li class="text-lg font-medium nunu">
						Attendees must follow all posted signs and instructions provided by staff members.
					</li>
					<li class="text-lg font-medium nunu">
						Attendees are not allowed to enter rooms that are not marked as accessible on the map
						provided by Adhyaaya. Any unauthorized entry may result in expulsion from the facility.
					</li>
					<li class="text-lg font-medium nunu">
						Attendees must not tamper with or remove any seals or locks on doors or cabinets within
						the facility.
					</li>
					<li class="text-lg font-medium nunu">
						Attendees are prohibited from bypassing any access control measures or attempting to
						gain unauthorized access to restricted areas.
					</li>
					<li class="text-lg font-medium nunu">
						Attendees must report any suspicious activity or security concerns to the appropriate
						staff member immediately.
					</li>
					<li class="text-lg font-medium nunu">
						Attendees must not bring any prohibited items into the facility, including weapons,
						illegal drugs, or other items that may pose a security risk.
					</li>
					<li class="text-lg font-medium nunu">
						Attendees must maintain a respectful and professional demeanor at all times while on the
						premises.
					</li>
					<li class="text-lg font-medium nunu">
						Any violation of these rules may result in the attendee's expulsion from the facility
						and possible legal action.
					</li>
				</ol>
			</div>
		</div>
	</div>
</div>

<div class="flex flex-col flex-wrap justify-center pt-10 px-4">
	<h2 class="text-3xl font-bold text-center">Timeline</h2>
	<div class="flex flex-col md:flex-row">
		{#each TIMELINE as DAY, i}
			<div class="w-full md:w-1/3 p-4">
				<div class="text-center font-bold text-xl">Day {i + 1}</div>
				<div class="flex flex-col">
					{#each DAY as item, i}
						<div class="w-full p-2 border border-gray-400">
							<div class="text-center font-bold nunu">{i + 1}</div>
							<div class="text-center nunu">{item.time}</div>
							<div class="text-center nunu">{item.name}</div>
							<div class="text-center nunu">{item.mode}</div>
						</div>
					{/each}
				</div>
			</div>
		{/each}
	</div>
</div>


<div class="flex flex-col flex-wrap justify-center pt-10 px-4 pb-10">
	<h2 class="text-3xl font-bold text-center pb-10">Contacts</h2>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4">
    {#each EVENTS.filter(e => e.is_active) as event}
      <div class="bg-[#1d0028] shadow overflow-hidden rounded-lg">
        <div class="px-4 py-5 sm:p-6">
          <h3 class="text-xl font-medium text-gray-200">{event.name}</h3>
          <div class="mt-4">
            <p class="font-medium text-gray-400">Contact:</p>
            <p class="mt-1 text-gray-300">{event.contact[0].name}</p>
            <p class="mt-1 text-gray-300">{event.contact[0].phone}</p>
          </div>
        </div>
      </div>
    {/each}

    {#each ORG as org, i}
      <div class="bg-[#1d0028] shadow overflow-hidden rounded-lg">
        <div class="px-4 py-5 sm:p-6">
          <h3 class="text-xl font-medium text-gray-200">Emergency Contact {i+1}</h3>
          <div class="mt-4">
            <p class="font-medium text-gray-400">Contact:</p>
            <p class="mt-1 text-gray-300">{org[0]}</p>
            <p class="mt-1 text-gray-300">{org[1]}</p>
          </div>
        </div>
      </div>
    {/each}
  </div>
</div>

