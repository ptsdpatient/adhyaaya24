const virtual_placement_icon = "/_app/immutable/assets/virtual-placement.745c0ba7.png";
const respawn = "/_app/immutable/assets/respawn.5c19a68f.png";
const vaad_vivad = "/_app/immutable/assets/vaad-vivad.8032fb54.png";
const foodoshit = "/_app/immutable/assets/foodoholics.643a0b40.png";
const cricbash = "/_app/immutable/assets/cricbash.14c31fad.png";
const jigyasa = "/_app/immutable/assets/jigyasa.b0467e26.png";
const stargaze = "/_app/immutable/assets/stargazer.47c6db67.png";
const gdsc = "/_app/immutable/assets/gdsc.5c2d0325.png";
const valorant = "/_app/immutable/assets/valorant1.aa835005.png";
const BGMI = "/_app/immutable/assets/BGMI.73324a16.jpg";
const Lounge = "/_app/immutable/assets/lounge.9cd11a7a.jpg";
const aeromodel = "/_app/immutable/assets/aeromodel.4c63f982.png";
const stock = "/_app/immutable/assets/stock.1f6ad73c.png";
const roborace = "/_app/immutable/assets/roborace.38e77c50.png";
const inexpress = "/_app/immutable/assets/inexpress.eedfc8f5.jpg";
const sspy = "/_app/immutable/assets/sspy.c90e7370.png";
const qmaster = "/_app/immutable/assets/qmaster.0a4d9e33.png";
const p_avishkar = "/_app/immutable/assets/avish.44389cda.jpg";
const p_bridge_o_craft = "/_app/immutable/assets/bridge-o-craft.a58990eb.jpg";
const p_codeventure = "/_app/immutable/assets/cv.aa5038fb.jpg";
const p_respawn = "/_app/immutable/assets/respawn.5a501964.jpg";
const p_virtual_placement = "/_app/immutable/assets/vp.9bf02091.jpg";
const p_bornpsycos = "/_app/immutable/assets/bp.55a661a0.jpg";
const p_cadoshit = "/_app/immutable/assets/cad-o-shop.e4a9f24c.jpg";
const p_cricbash = "/_app/immutable/assets/cb.70e8465b.jpg";
const p_foodoholics = "/_app/immutable/assets/fh.1ad5f95a.jpg";
const p_gsdc = "/_app/immutable/assets/ML.90b4b020.jpg";
const p_jigyasa = "/_app/immutable/assets/jigyasa.49026e0d.jpg";
const p_roborace = "/_app/immutable/assets/rr.a16d74d2.jpg";
const p_stargaze = "/_app/immutable/assets/sg.a6bf3055.jpg";
const p_stock = "/_app/immutable/assets/ST.ff112710.jpg";
const p_vaadvivad = "/_app/immutable/assets/vaad-vivaad.6094128d.jpg";
const EVENTS = [
  {
    // this is a pseudoevent.
    id: "::respawn",
    mode: "offline",
    category: "non-technical",
    name: "Respawn",
    description: "Respawn is an e-sports event featuring popular games like COD, VALORANT and CHESS, available on Mobile and PC platforms. Open to all ages, COD and VALORANT have a team entry fee, with teams of 4 and 5 players respectively. CHESS has a solo entry fee. Matches in COD and VALORANT last for a maximum of 40 minutes and cheating will result in a ban. Joining information will be provided through a WhatsApp group.",
    amount: [0, 0, 0],
    team_members: [0, 0, 0],
    start_date: /* @__PURE__ */ new Date("10 Mar 2023"),
    end_date: /* @__PURE__ */ new Date("11 Mar 2023"),
    small_image: "https://placeimg.com/360/360/tech",
    icon: `url::${respawn}`,
    poster: p_respawn,
    contact: [
      {
        name: "Rohit Bhoge (Valo & COD)",
        phone: "7972520981"
      },
      {
        name: "Shiwang Pandey (Chess)",
        phone: "8459795840"
      }
    ],
    form_link: "",
    is_active: false,
    is_open: false,
    custom_properties: [
      {
        type: "select",
        label: "Select your game",
        options: ["Valorant - Squad", "CoD Mobile - Quartet", "Chess - Solo"],
        redirect: ["respawn-valorant", "respawn-cod", "respawn-chess"]
      }
    ]
  },
  {
    id: "respawn",
    mode: "online",
    category: "non-technical",
    name: "Valorant",
    form_link: "https://forms.gle/rLRDLYHYUKdTdHSo9",
    description: "Immerse yourself in the electrifying world of tactical prowess and precise aim at the upcoming Valorant Tournament, where teams clash in a battle of wits and skill. Brace for intense competition and unforgettable moments as players showcase their mastery in this adrenaline-fueled gaming spectacle.",
    amount: [15900],
    team_members: [4],
    start_date: /* @__PURE__ */ new Date("20,21 Feb 2024"),
    end_date: /* @__PURE__ */ new Date("20,21 Feb 2024"),
    small_image: "https://placeimg.com/360/360/tech",
    icon: `url::${valorant}`,
    poster: p_respawn,
    contact: [
      {
        name: "ABHISHEKH KUBER",
        phone: "9145647809"
      }
    ],
    is_active: true,
    is_open: false,
    whatsapp_link: "https://chat.whatsapp.com/KXRX7DJTXR8HGTk1pE4GUw"
  },
  {
    id: "respawn",
    mode: "online",
    category: "non-technical",
    name: "BGMI",
    form_link: "https://forms.gle/rLRDLYHYUKdTdHSo9",
    description: "Thrilling battles and fierce competition took center stage at the BGMI Tournament, where skilled gamers clashed in an electrifying display of strategy and precision. The event was a celebration of esports excellence, showcasing the best players vying for victory in the world of Battlegrounds Mobile India",
    amount: [15900],
    team_members: [4],
    start_date: /* @__PURE__ */ new Date("21 Feb 2024"),
    end_date: /* @__PURE__ */ new Date("21 Feb 2024"),
    small_image: "https://placeimg.com/360/360/tech",
    icon: `url::${BGMI}`,
    poster: p_respawn,
    contact: [
      {
        name: "SACHIN BAHEKAR",
        phone: "9145318774"
      }
    ],
    is_active: true,
    is_open: false,
    whatsapp_link: "https://chat.whatsapp.com/KXRX7DJTXR8HGTk1pE4GUw"
  },
  {
    id: "respawn",
    mode: "online",
    category: "non-technical",
    name: "Chess",
    form_link: "https://forms.gle/rLRDLYHYUKdTdHSo9",
    description: "The Call of Duty Tournament electrified the gaming community as skilled competitors clashed in intense battles, showcasing strategic prowess and precise reflexes. Spectators were on the edge of their seats, immersed in the thrilling virtual warfare that unfolded during this epic gaming showdown.",
    amount: [15900],
    team_members: [4],
    start_date: /* @__PURE__ */ new Date("20 Feb 2024"),
    end_date: /* @__PURE__ */ new Date("21 Feb 2024"),
    small_image: "https://placeimg.com/360/360/tech",
    icon: `url::${respawn}`,
    poster: p_respawn,
    contact: [
      {
        name: "ZISHAN DESHMUKH",
        phone: "862388620"
      }
    ],
    is_active: true,
    is_open: false,
    whatsapp_link: "https://chat.whatsapp.com/KXRX7DJTXR8HGTk1pE4GUw"
  },
  {
    id: "::avishkar",
    mode: "offline",
    category: "technical",
    name: "Avishkar",
    form_link: "https://forms.gle/jzSPKZxYdHcvBEAr8",
    description: "Avishkar is a project competition for engineering students to showcase their innovative ideas. Teams can have up to 5 members and projects can be in hardware or software categories. Competition consists of two rounds: elimination and questionnaire. Register today!",
    amount: [15900, 15900],
    team_members: [2, 4],
    start_date: /* @__PURE__ */ new Date("20 Feb 2024"),
    end_date: /* @__PURE__ */ new Date("20 Feb 2024"),
    small_image: "https://placeimg.com/360/360/tech",
    icon: "flat-color-icons:idea",
    poster: p_avishkar,
    contact: [
      {
        name: "Pawan Vishwakarma",
        phone: "7499365703"
      },
      {
        name: "Anmol Moray",
        phone: "8956886685"
      }
    ],
    is_active: false,
    is_open: false,
    custom_properties: [
      {
        type: "select",
        label: "Mode of Attendance",
        options: ["Offline", "Online"],
        redirect: ["avishkar-offline", "avishkar-online"]
      }
    ]
  },
  {
    id: "avishkar",
    mode: "online",
    category: "technical",
    name: "Avishkar",
    form_link: "https://forms.gle/77QwMdibowwXqmiY6",
    description: "Avishkar is a project competition for engineering students to showcase their innovative ideas. Teams can have up to 5 members and projects can be in hardware or software categories. Competition consists of two rounds: elimination and questionnaire. Register today!",
    amount: [15900, 15900],
    team_members: [2, 4],
    start_date: /* @__PURE__ */ new Date("9 Mar 2023 13:00"),
    end_date: /* @__PURE__ */ new Date("9 Mar 2023"),
    small_image: "https://placeimg.com/360/360/tech",
    icon: "flat-color-icons:idea",
    poster: p_avishkar,
    contact: [
      {
        name: "Maithili Patil",
        phone: "9665555907"
      },
      {
        name: "Shruti Gadge",
        phone: "7248907172 "
      }
    ],
    is_active: true,
    is_open: true,
    whatsapp_link: "https://chat.whatsapp.com/BPDlJw6eH90LKUv0AGcvAg"
  },
  // {
  // 	id: 'avishkar-offline',
  // 	mode: 'offline',
  // 	category: 'technical',
  // 	name: 'Avishkar',
  // 	description:
  // 		'Avishkar is a project competition for engineering students to showcase their innovative ideas. Teams can have up to 5 members and projects can be in hardware or software categories. Competition consists of two rounds: elimination and questionnaire. Register today!',
  // 	amount: [159_00, 159_00, 159_00, 159_00],
  // 	team_members: [1, 2, 3, 4],
  // 	start_date: new Date('9 Mar 2023 13:00'),
  // 	end_date: new Date('9 Mar 2023'),
  // 	small_image: 'https://placeimg.com/360/360/tech',
  // 	icon: 'flat-color-icons:idea',
  // 	poster: p_avishkar,
  // 	contact: [
  // 		{
  // 			name: 'Anmol Moray',
  // 			phone: '8956886685'
  // 		},
  // 		{
  // 			name: 'Pawan Vishwakarma',
  // 			phone: '7499365703'
  // 		}
  // 	],
  // 	is_active: true,
  // 	is_open: false,
  // 	whatsapp_link: 'https://chat.whatsapp.com/BPDlJw6eH90LKUv0AGcvAg'
  // },
  // {
  // 	id: 'caddiction',
  // 	mode: 'offline',
  // 	category: 'technical',
  // 	name: 'Caddiction',
  // 	description:
  // 		"Participate in Adhaaya's CADDICTION, a thrilling 3D designing competition that will test your skills and let you compete with your peers. This exciting event comprises two rounds, an online quiz, and a 3D modeling challenge where you can use any CAD software or parametric software to showcase your abilities. The quiz and challenge questions will be tailored to your branch. The event is open to individuals and duos, and there are exciting prizes worth 8K to be won.",
  // 	amount: [79_00, 149_00],
  // 	team_members: [1, 2],
  // 	start_date: new Date('11 Mar 2023 12:00'),
  // 	end_date: new Date('11 Mar 2023'),
  // 	small_image: 'https://placeimg.com/360/360/tech',
  // 	icon: 'carbon:cad',
  // 	poster: p_caddiction,
  // 	contact: [
  // 		{
  // 			name: 'Vedant Udapure',
  // 			phone: '7507602580'
  // 		},
  // 		{
  // 			name: 'Aishwarya Dharme',
  // 			phone: '8530676156'
  // 		}
  // 	],
  // 	is_active: false,
  // 	is_open: false,
  // 	whatsapp_link: 'https://chat.whatsapp.com/BIEeiqLyfQg41ZKZBT06WG'
  // },
  {
    id: "vp",
    mode: "offline",
    category: "technical",
    name: "Virtual Placement",
    form_link: "https://forms.gle/wVqaFJ6uGTTLfiwk7",
    description: "Attention all students! Are you ready to take the first step towards your dream job? Adhyaaya'24 Virtual Placement is here to help you prepare and excel in your upcoming placements. With an entry fee of only 70/- and a price pool of up to 7k, this is an opportunity you cannot miss! You will be tested on your mental ability, communication skills, stress-handling, and confidence. Don't wait, register now and get ready to impress your future employers!",
    amount: [7900],
    team_members: [1],
    start_date: /* @__PURE__ */ new Date("20,21 Feb 2024"),
    end_date: /* @__PURE__ */ new Date("20,21 Feb 2024"),
    small_image: "https://placeimg.com/360/360/tech",
    icon: `url::${virtual_placement_icon}`,
    // icon: 'healthicons:group-discussion-meetingx3-negative',
    poster: p_virtual_placement,
    contact: [
      {
        name: "Noopur Yelne",
        phone: "8830238801"
      },
      {
        name: "Shreedhar Shinde",
        phone: "7058180488"
      }
    ],
    is_active: true,
    is_open: false,
    whatsapp_link: "https://chat.whatsapp.com/Bb6BOwMLprsGoz0sggxGaz"
  },
  {
    id: "codeventure",
    mode: "online",
    category: "technical",
    name: "CodeVenture",
    form_link: "https://forms.gle/YH9YncDvWnWUZsrx8",
    description: "CodeVenture is a coding competition that tests your debugging and coding skills. Showcase your expertise in mathematics, data structures, algorithms and more. Compete solo using any programming language on a PC with a good internet connection. Join us for a thrilling coding experience!",
    amount: [0],
    team_members: [1],
    start_date: /* @__PURE__ */ new Date("21 Feb 2024"),
    end_date: /* @__PURE__ */ new Date("21 Feb 2024"),
    small_image: "https://placeimg.com/360/360/tech",
    icon: "carbon:code",
    poster: p_codeventure,
    contact: [
      {
        name: "HITANSHU GEDAM",
        phone: "8007818439"
      },
      {
        name: "SAKET TABHANE",
        phone: "8669139466"
      }
    ],
    is_active: true,
    is_open: true,
    whatsapp_link: "https://chat.whatsapp.com/BcAeNWFxTmBJyR8FwaQNIW"
  },
  {
    id: "innovationxpress",
    mode: "offline",
    category: "technical",
    name: "Innovation Xpress",
    form_link: "https://forms.gle/FRjQ2ovAgy1M95UW7",
    description: "Innovation Express, a dynamic event fostering creativity and ingenuity, accelerates the journey of groundbreaking ideas, propelling participants into a fast-paced realm of innovation and collaboration",
    amount: [24900, 24900, 24900, 24900, 24900],
    team_members: [1, 2, 3, 4, 5],
    start_date: /* @__PURE__ */ new Date("11 Mar 2023 11:00"),
    end_date: /* @__PURE__ */ new Date("11 Mar 2023"),
    small_image: "https://placeimg.com/360/360/tech",
    icon: `url::${inexpress}`,
    poster: p_bridge_o_craft,
    contact: [
      {
        name: "Kalpana Rathod",
        phone: "8010961439"
      },
      {
        name: "Pratham Chandankhede",
        phone: "7558281643"
      }
    ],
    is_active: true,
    is_open: true,
    whatsapp_link: "https://chat.whatsapp.com/EV0HsCXDKrvC3xcf6hl1YM"
  },
  {
    id: "aeromodelling",
    mode: "offline",
    category: "workshops",
    name: "AirShow",
    form_link: "https://forms.gle/hqkitGHze4Hxc5PA8",
    description: "Explore the boundless skies at our exhilarating aeromodelling workshop, where enthusiasts come together to craft, customize, and soar high with their handcrafted flying machines. Unleash your creativity and engineering prowess in this hands-on experience that promises a thrilling journey into the world of aviation.",
    amount: [24900, 24900, 24900, 24900, 24900],
    team_members: [1, 2, 3, 4, 5],
    start_date: /* @__PURE__ */ new Date("11 Mar 2023 11:00"),
    end_date: /* @__PURE__ */ new Date("11 Mar 2023"),
    small_image: "https://placeimg.com/360/360/tech",
    icon: `url::${aeromodel}`,
    poster: p_bridge_o_craft,
    contact: [
      {
        name: "Kalpana Rathod",
        phone: "8010961439"
      },
      {
        name: "Pratham Chandankhede",
        phone: "7558281643"
      }
    ],
    is_active: true,
    is_open: false,
    whatsapp_link: "https://chat.whatsapp.com/EV0HsCXDKrvC3xcf6hl1YM"
  },
  {
    id: "structurespy",
    mode: "offline",
    category: "technical",
    name: "Structure Spy",
    form_link: "https://forms.gle/hEeaJg8xyuPHTi7G8",
    description: "Structure Spy, an innovative event, invites participants to unravel the secrets of design and architecture, fostering a creative exploration of built environments and inspiring a deeper understanding of the hidden stories within structures",
    amount: [24900, 24900, 24900, 24900, 24900],
    team_members: [1, 2, 3, 4, 5],
    start_date: /* @__PURE__ */ new Date("11 Mar 2023 11:00"),
    end_date: /* @__PURE__ */ new Date("11 Mar 2023"),
    small_image: "https://placeimg.com/360/360/tech",
    icon: `url::${sspy}`,
    poster: p_bridge_o_craft,
    contact: [
      {
        name: "Kalpana Rathod",
        phone: "8010961439"
      },
      {
        name: "Pratham Chandankhede",
        phone: "7558281643"
      }
    ],
    is_active: true,
    is_open: false,
    whatsapp_link: "https://chat.whatsapp.com/EV0HsCXDKrvC3xcf6hl1YM"
  },
  {
    id: "quizmaster",
    mode: "offline",
    category: "technical",
    name: "Quiz Masters",
    form_link: "https://forms.gle/2LS9rJ37fnAq3Gya6",
    description: "Quiz Masters, an intellectually charged event, combines the thrill of quiz-solving with the art of critical thinking, challenging minds to soar beyond facts and dive deep into the realms of analytical brilliance",
    amount: [24900, 24900, 24900, 24900, 24900],
    team_members: [1, 2, 3, 4, 5],
    start_date: /* @__PURE__ */ new Date("11 Mar 2023 11:00"),
    end_date: /* @__PURE__ */ new Date("11 Mar 2023"),
    small_image: "https://placeimg.com/360/360/tech",
    icon: `url::${qmaster}`,
    poster: p_bridge_o_craft,
    contact: [
      {
        name: "Kalpana Rathod",
        phone: "8010961439"
      },
      {
        name: "Pratham Chandankhede",
        phone: "7558281643"
      }
    ],
    is_active: true,
    is_open: false,
    whatsapp_link: "https://chat.whatsapp.com/EV0HsCXDKrvC3xcf6hl1YM"
  },
  {
    id: "roborace",
    mode: "offline",
    category: "technical",
    name: "RoboRace",
    form_link: "https://forms.gle/C4gLJo3HpxzrULFHA",
    description: "Are you ready to test your driving skills in a high-octane race against the clock? Join us for RoboRace, where you'll have the opportunity to navigate a challenging race track using a bot provided by DROID DEVS. Whether you're a seasoned pro or a first-time racer, this event is open to all students, so grab your friends and sign up for a chance to win big prizes! With an easier track to start and a final round with even more challenging obstacles, the competition will be fierce, but only the fastest will come out on top. So what are you waiting for? Join us for an unforgettable event that's sure to be a highlight of the year!",
    amount: [6900],
    team_members: [1],
    start_date: /* @__PURE__ */ new Date("21 Feb 2024"),
    end_date: /* @__PURE__ */ new Date("21 Feb 2024"),
    small_image: "https://placeimg.com/360/360/tech",
    icon: `url::${roborace}`,
    poster: p_roborace,
    contact: [
      {
        name: "SHREEDHAR SHINDE",
        phone: "7058180488"
      },
      {
        name: "ADITYA DAMBLE",
        phone: "8378847784"
      }
    ],
    is_active: true,
    is_open: false,
    whatsapp_link: "https://chat.whatsapp.com/KXtte17v1QuBEgTSesPT2q"
  },
  {
    id: "vaadvivad",
    mode: "offline",
    category: "non-technical",
    name: "Vaad Vivad",
    form_link: "https://forms.gle/StvYoNWh6osNgS2B7",
    description: "VAAD-VIVAAD is a public speaking event with three rounds. Participants will be given topics related to social issues and will have 2 and 4 minutes to express their ideas respectively. Register now by paying the entry fee of 49/- (solo) and boost your public speaking skills",
    amount: [4900],
    team_members: [1],
    start_date: /* @__PURE__ */ new Date("21 Feb 2024"),
    end_date: /* @__PURE__ */ new Date("21 Feb 2024"),
    small_image: "https://placeimg.com/360/360/tech",
    icon: `url::${vaad_vivad}`,
    poster: p_vaadvivad,
    contact: [
      {
        name: "PRACHITI KINARKAR",
        phone: "9209268768"
      },
      {
        name: "MUKTI PUROHIT",
        phone: "8767333570"
      }
    ],
    is_active: true,
    is_open: false,
    whatsapp_link: "https://chat.whatsapp.com/Fihx9B1pCwCEmE6yyJRIs7"
  },
  {
    id: "born-psychos",
    mode: "offline",
    category: "non-technical",
    name: "Born-Psychos",
    form_link: "https://forms.gle/eR48dAaDNgumtqy67",
    description: "Born Psychos is an adrenaline-fueled event that tests your aptitude skills through exciting rounds and challenges. Hone your critical thinking, leadership, and teamwork abilities while solving riddles and participating in elimination-style games. Join with a team of 4 for 199/-. Embrace your inner psychos and register today for a thrilling experience!",
    amount: [19900],
    team_members: [4],
    start_date: /* @__PURE__ */ new Date("21 Feb 2024"),
    end_date: /* @__PURE__ */ new Date("21 Feb 2024"),
    small_image: "https://placeimg.com/360/360/tech",
    icon: "ri:treasure-map-line",
    poster: p_bornpsycos,
    contact: [
      {
        name: "SAYLI THER",
        phone: "845944211"
      },
      {
        name: "SUSHANT GUPTA",
        phone: "8080607617"
      }
    ],
    is_active: true,
    is_open: true,
    whatsapp_link: "https://chat.whatsapp.com/ErzzKroyiw6IoL5pAWzHC5"
  },
  {
    id: "foodoholic",
    mode: "offline",
    form_link: "https://forms.gle/q2NNjZaLzz1gaBv39",
    category: "non-technical",
    name: "Food-O-Holic",
    description: '"Food-o-Holic" is an exciting competition for teams of 4 members with an entry fee of 299. The competition consists of 3 rounds: "Screaming Baloons," "Meri Foodie Kismat," and "Desert Island." In each round, teams compete in food-related challenges and quizzes, from collecting buns with tied hands to finishing a dessert without using their hands. The winning team is decided by points or speed. Register now for a fun and thrilling culinary adventure.',
    amount: [29900],
    team_members: [4],
    start_date: /* @__PURE__ */ new Date("20 Feb 2024"),
    end_date: /* @__PURE__ */ new Date("20 Feb 2024"),
    small_image: "https://placeimg.com/360/360/tech",
    icon: `url::${foodoshit}`,
    poster: p_foodoholics,
    contact: [
      {
        name: "RANZ RATHOD",
        phone: "8010162405"
      },
      {
        name: "SUMIT KAWDE",
        phone: "8007153888"
      }
    ],
    is_active: true,
    is_open: false,
    whatsapp_link: "https://chat.whatsapp.com/KoKTPhgXNZxEof5xHUBLCh"
  },
  {
    id: "crickbash",
    mode: "offline",
    category: "non-technical",
    form_link: "https://forms.gle/ykkWEz7gBszqo5zXA",
    name: "Cricbash",
    description: 'Join the thrilling Cricbash cricket league with a team of 6 (mixed gender). Compete in 5-over matches with fun challenges and special "Bazooka" spot for bonus runs. Hurry and register your team now as slots are limited!',
    amount: [49900],
    team_members: [6],
    start_date: /* @__PURE__ */ new Date("20,21 Feb 2024"),
    end_date: /* @__PURE__ */ new Date("20,21 Feb 2024"),
    small_image: "https://placeimg.com/360/360/tech",
    icon: `url::${cricbash}`,
    poster: p_cricbash,
    contact: [
      {
        name: "Om Lokhande",
        phone: "7720012113"
      },
      {
        name: "Virendra Rathod",
        phone: "8263055699"
      }
    ],
    is_active: true,
    is_open: false,
    whatsapp_link: "https://chat.whatsapp.com/ETCp1yUYn5U8BEDSp5VtBH"
  },
  {
    id: "cad-o-shop",
    mode: "offline",
    category: "workshops",
    name: "Lounge",
    form_link: "https://forms.gle/WJmUVBYbJAm3icfD6",
    description: "Join CAD-O-SHOP, the ultimate destination for all aspiring engineers and designers! This event is an incredible opportunity to learn about the latest software trends and techniques demanded by the industry. With the guidance of expert professionals, you can explore the world of 3D modelling and turn your imagination into reality.",
    amount: [0],
    team_members: [1],
    start_date: /* @__PURE__ */ new Date("10 Mar 2023 11:00"),
    end_date: /* @__PURE__ */ new Date("10 Mar 2023"),
    small_image: "https://placeimg.com/360/360/tech",
    icon: `url::${Lounge}`,
    poster: p_cadoshit,
    contact: [
      {
        name: "ATHARVA MANDE",
        phone: "8485056718"
      },
      {
        name: "Sahil Brahme",
        phone: "9552269716"
      }
    ],
    is_active: true,
    is_open: true,
    whatsapp_link: "https://chat.whatsapp.com/BIEeiqLyfQg41ZKZBT06WG"
  },
  {
    id: "jigyasa",
    mode: "offline",
    category: "workshops",
    name: "Jigyasa",
    form_link: "https://forms.gle/A2HJTjxd58EMYWrb6",
    description: "Are you passionate about serving your country technically? Want to gain insights and knowledge from esteemed personalities of Defense services/civil services? Join Trishakti Cell in collaboration with Adhyaaya for JIGYASA- an exclusive live interview with Air Vice Marshal Suryakant Chintaman Chafekar (AVSM,SC) Retd. Discover, Diagnose, and Demystify the ways to achieve your goals through this insightful event. Don't miss out on this opportunity to hear from a seasoned expert in the field! Register now, it's free of cost and open to all!",
    amount: [0],
    team_members: [1],
    start_date: /* @__PURE__ */ new Date("9 Mar 2023 15:00"),
    end_date: /* @__PURE__ */ new Date("9 Mar 2023"),
    small_image: "https://placeimg.com/360/360/tech",
    icon: `url::${jigyasa}`,
    poster: p_jigyasa,
    contact: [
      {
        name: "Dovesh Aglawe",
        phone: "7385417432"
      },
      {
        name: "Kunal Rahangdale",
        phone: "9657837613"
      },
      {
        name: "Rohini Shambharkar",
        phone: "8862065056"
      }
    ],
    is_active: true,
    is_open: false,
    whatsapp_link: "https://chat.whatsapp.com/GwpSrB9MEcL4sW54WL1Hto"
  },
  {
    id: "stargaze",
    mode: "offline",
    category: "workshops",
    name: "Stargaze",
    form_link: "https://forms.gle/kVe4gLgZ63T3yfPK9",
    description: "Explore the depths of the universe at Adhyaaya'24! Join the Astronomy Club at GCOEN for expert guest lectures, hands-on exploration sessions, and more. Come and STARGAZE with us!",
    amount: [5900],
    team_members: [1],
    start_date: /* @__PURE__ */ new Date("21 Feb 2024"),
    end_date: /* @__PURE__ */ new Date("21 Feb 2024"),
    small_image: "https://placeimg.com/360/360/tech",
    icon: `url::${stargaze}`,
    poster: p_stargaze,
    contact: [
      {
        name: "Vedant Gotmare",
        phone: "9921707207"
      }
    ],
    is_active: true,
    is_open: false,
    whatsapp_link: "https://chat.whatsapp.com/Kh6yyGQAQRhDOtQ4tUDJFG"
  },
  // {
  // 	id: 'robotics-workshop',
  // 	mode: 'offline',
  // 	category: 'workshops',
  // 	name: 'build a bot',
  // 	description: 'blah blah blah',
  // 	amount: [1600_00],
  // 	team_members: [1],
  // 	start_date: new Date('9 Mar 2023'),
  // 	end_date: new Date('9 Mar 2023'),
  // 	small_image: 'https://placeimg.com/360/360/tech',
  // 	icon: 'carbon:code',
  // 	poster: p_coming_soon,
  // 	contact: [
  // 		{
  // 			name: 'suss',
  // 			phone: '1234567890'
  // 		}
  // 	],
  // 	is_active: true
  // },
  {
    id: "stock-market-workshop",
    mode: "offline",
    category: "workshops",
    form_link: "https://forms.gle/fNndnp9LMDV1Ev4W7",
    name: "Stock Talk",
    description: "Unleash the Power of the Stock Market: Join us for an exciting offline workshop where you'll learn the fundamentals of investing, develop your own trading strategies, and gain valuable insights from industry experts. Discover how to navigate the twists and turns of the market and make informed decisions that can lead to financial success. Whether you're a beginner or an experienced trader, this workshop is your opportunity to level up your stock market game and achieve your investment goals.",
    amount: [4900],
    team_members: [1],
    start_date: /* @__PURE__ */ new Date("9 Mar 2023 13:00"),
    end_date: /* @__PURE__ */ new Date("9 Mar 2023"),
    small_image: "https://placeimg.com/360/360/tech",
    icon: `url::${stock}`,
    poster: p_stock,
    contact: [
      {
        name: "SHLOK TAJNE",
        phone: "8237050035"
      },
      {
        name: "MITHILESH ZHALKE",
        phone: "9511652253 "
      }
    ],
    is_active: true,
    is_open: false,
    whatsapp_link: "https://chat.whatsapp.com/HhguujUB4Hk4cMsLyw6nRJ"
  },
  {
    id: "gdsc-lecture",
    mode: "offline",
    category: "workshops",
    name: "GDSC ML workshop",
    form_link: "https://forms.gle/uK7MWkk8LhtZjiMr8",
    description: "Adhyaaya in collaboration with GSDC GCOEN is bringing the future to your doorstep with the cutting-edge realm of machine learning at our workshop, where participants delve into the intricacies of Tensor Flow. Unlock the potential of artificial intelligence as we guide you through hands-on experiences and empower you to harness the power of advanced algorithms!",
    amount: [0],
    team_members: [1],
    start_date: /* @__PURE__ */ new Date("22 Feb 2024"),
    end_date: /* @__PURE__ */ new Date("22 Feb 2024"),
    small_image: "https://placeimg.com/360/360/tech",
    icon: `url::${gdsc}`,
    poster: p_gsdc,
    contact: [
      {
        name: "Hitanshu Gedam",
        phone: "8007818439"
      },
      {
        name: "Saket Tabhane",
        phone: "8669139466"
      }
    ],
    is_active: true,
    is_open: true,
    whatsapp_link: "https://chat.whatsapp.com/BD6gqwlO5FC5qL4I4WEKAy"
  }
  // {
  // 	id: 'ev-workshop',
  // 	mode: 'offline',
  // 	category: 'workshops',
  // 	name: 'EV Workshop',
  // 	description: 'blah blah blah',
  // 	amount: [100_00],
  // 	team_members: [1],
  // 	start_date: new Date('9 Mar 2023'),
  // 	end_date: new Date('9 Mar 2023'),
  // 	small_image: 'https://placeimg.com/360/360/tech',
  // 	icon: 'bi:ev-station-fill',
  // 	poster: p_coming_soon,
  // 	contact: [
  // 		{
  // 			name: 'Devansh Parapalli',
  // 			phone: '1234567890'
  // 		}
  // 	],
  // 	is_active: true
  // },
  // {
  // 	id: 'aeromodelling-workshop',
  // 	mode: 'offline',
  // 	category: 'workshops',
  // 	name: 'Multirotor Workshop',
  // 	description:
  // 		"Learn about the exciting world of unmanned aerial vehicles (UAVs) with the Multirotor Workshop at Government College of Engineering in Nagpur. This two-day workshop covers the basics of multi-rotors and offers hands-on experience in assembling and configuring a UAV. Led by experienced instructors, it's perfect for beginners and experts alike. Register now to gain practical knowledge and take the first step towards becoming a UAV expert.",
  // 	amount: [2400_00],
  // 	team_members: [1],
  // 	start_date: new Date('9 Mar 2023'),
  // 	end_date: new Date('9 Mar 2023'),
  // 	small_image: 'https://placeimg.com/360/360/tech',
  // 	icon: `url::${multirotor}`,
  // 	poster: p_coming_soon,
  // 	contact: [
  // 		{
  // 			name: 'Sahil Brahme',
  // 			phone: '9552269716'
  // 		},
  // 		{
  // 			name: 'Parth Tirmare',
  // 			phone: '9028606866'
  // 		}
  // 	],
  // 	is_active: true,
  // is_open: false,
  // 	whatsapp_link: 'https://chat.whatsapp.com/HA17R0Jp55cAe6rq6agUfz'
  // }
];
export {
  EVENTS as E
};
