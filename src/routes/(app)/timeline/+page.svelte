<script lang="ts">
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
</script>

<div class="bg-gradient-to-tr from-gray-900 to-[#0d0028] via-purple-900/50">
	<div class="pt-28">
		<h2 class="text-3xl font-bold text-center">Timeline</h2>
	</div>
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
