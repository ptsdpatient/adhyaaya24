import { c as create_ssr_component, d as each, e as escape } from "../../../../chunks/index2.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  var Mode = ((Mode2) => {
    Mode2["ONLINE"] = "Online";
    Mode2["OFFLINE"] = "Offline";
    return Mode2;
  })(Mode || {});
  let TIMELINE = [
    // Day 1
    [
      {
        time: "10:00AM to 12:00PM",
        name: "Inauguration",
        mode: "Offline"
        /* OFFLINE */
      },
      {
        time: "12:30PM to 6:00PM",
        name: "Crickbash",
        mode: "Offline"
        /* OFFLINE */
      },
      {
        time: "12:00PM to 2:00PM",
        name: "Avishkar",
        mode: "Offline"
        /* OFFLINE */
      },
      {
        time: "12:00PM to 6:00PM",
        name: "Aeromodeling",
        mode: "Offline"
        /* OFFLINE */
      },
      {
        time: "2:00PM to 4:30PM",
        name: "Lounge",
        mode: "Offline"
        /* OFFLINE */
      },
      {
        time: "11:00AM to 12:00PM",
        name: "Virtual Placement Round 1",
        mode: "Offline"
        /* OFFLINE */
      },
      {
        time: "2:30PM to 5:30PM",
        name: "Virtual Placement Round 2",
        mode: "Offline"
        /* OFFLINE */
      },
      {
        time: "1:00PM to 6:00PM ",
        name: "Foodoholics",
        mode: "Offline"
        /* OFFLINE */
      },
      {
        time: "6:00PM onwards",
        name: "Respawn Chess",
        mode: "Online"
        /* ONLINE */
      },
      {
        time: "5:00PM onwards",
        name: "Respawn Valorant",
        mode: "Online"
        /* ONLINE */
      }
    ],
    // Day 2
    [
      {
        time: "10:30AM-6PM",
        name: "Crickbaash",
        mode: "Offline"
        /* OFFLINE */
      },
      {
        time: "12:00AM-3:00PM",
        name: "Stock",
        mode: "Offline"
        /* OFFLINE */
      },
      {
        time: "11:00AM-6:00PM",
        name: "Vaad-vivaad",
        mode: "Offline"
        /* OFFLINE */
      },
      {
        time: "10:30AM-6:00PM",
        name: "BornPsychos",
        mode: "Offline"
        /* OFFLINE */
      },
      {
        time: "11:00AM-6:00PM",
        name: "Codeventure",
        mode: "Online"
        /* ONLINE */
      },
      {
        time: "11:00AM-5:00PM",
        name: "Roborace",
        mode: "Offline"
        /* OFFLINE */
      },
      {
        time: "5:00PM-7:30PM",
        name: "Stargaze",
        mode: "Offline"
        /* OFFLINE */
      },
      {
        time: "1:00PM-6:00PM",
        name: "Foodoholics",
        mode: "Offline"
        /* OFFLINE */
      },
      {
        time: "11:00PM-1:00PM",
        name: "Structure Spy",
        mode: "Online"
        /* ONLINE */
      },
      {
        time: "6:00PM onwards",
        name: "Respawn BGMI, Valorant",
        mode: "Offline"
        /* OFFLINE */
      },
      {
        time: "12:00PM-4:00PM",
        name: "Virtual Placement Round 3,4",
        mode: "Offline"
        /* OFFLINE */
      }
    ],
    // Day 3
    [
      {
        time: "12:00PM-2:00PM",
        name: "Quiz Masters",
        mode: "Offline"
        /* OFFLINE */
      },
      {
        time: "12:00PM-2:00PM",
        name: "GDSC Workshop",
        mode: "Offline"
        /* OFFLINE */
      },
      {
        time: "11:00AM-1:00PM",
        name: "Jigyassa",
        mode: "Offline"
        /* OFFLINE */
      },
      {
        time: "3:30PM-6:00PM",
        name: "Validictory",
        mode: "Offline"
        /* OFFLINE */
      }
    ]
  ];
  return `<div class="bg-gradient-to-tr from-gray-900 to-[#0d0028] via-purple-900/50"><div class="pt-28"><h2 class="text-3xl font-bold text-center">Timeline</h2></div>
	<div class="flex flex-col md:flex-row">${each(TIMELINE, (DAY, i) => {
    return `<div class="w-full md:w-1/3 p-4"><div class="text-center font-bold text-xl">Day ${escape(i + 1)}</div>
				<div class="flex flex-col">${each(DAY, (item, i2) => {
      return `<div class="w-full p-2 border border-gray-400"><div class="text-center font-bold nunu">${escape(i2 + 1)}</div>
							<div class="text-center nunu">${escape(item.time)}</div>
							<div class="text-center nunu">${escape(item.name)}</div>
							<div class="text-center nunu">${escape(item.mode)}</div>
						</div>`;
    })}</div>
			</div>`;
  })}</div></div>`;
});
export {
  Page as default
};
