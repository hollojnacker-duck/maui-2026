const mapLocations = [
  // ==========================
  // HOME
  // ==========================

  {
    name: "Honua Kai Resort",
    type: "home",
    position: [20.94470634248581, -156.69091231555063],
  },

  // ==========================
  // PLANS
  // ==========================

  {
    name: "Trilogy Discover Kāʻanapali",
    type: "planned",
    subtitle: "Snorkeling",
    position: [20.92505357829099, -156.6949376617765],
  },

  {
    name: "Duke's Beach House",
    type: "planned",
    subtitle: "Dinner",
    position: [20.944672538533272, -156.69156029449007],
  },

  {
    name: "Māla Ocean Tavern",
    type: "planned",
    subtitle: "Dinner",
    position: [20.887511887958276, -156.6848498959926],
  },

  {
    name: "South Maui Gardens",
    type: "planned",
    subtitle: "Lunch",
    position: [20.730158925942032, -156.4501298751797],
  },

  {
    name: "Haleakalā Summit",
    type: "planned",
    subtitle: "Sunset",
    position: [20.711743624705868, -156.2528078275782],
  },

  {
    name: "Hoʻokipa Beach Park",
    type: "planned",
    subtitle: "Sea Turtles",
    position: [20.93322235158089, -156.3585466362507],
  },

  {
    name: "Flatbread Company",
    type: "planned",
    subtitle: "Pizza",
    position: [20.916002264904392, -156.38202481759964],
  },

  {
    name: "Waiheʻe Ridge Trail",
    type: "planned",
    subtitle: "Hike",
    position: [20.952882183737618, -156.53240540909013],
  },

  {
    name: "The Snorkel Store",
    type: "planned",
    subtitle: "Snorkel Gear",
    position: [20.92668914654082, -156.6904033540243],
  },

  // ==========================
  // EXPLORE
  // ==========================

  {
    name: "Kahului Airport",
    type: "explore",
    position: [20.898508221614982, -156.43694401054162],
  },

  {
    name: "Costco Kahului",
    type: "explore",
    position: [20.887331480096517, -156.4507832329421],
  },

  {
    name: "Safeway",
    type: "explore",
    position: [20.88654464256887, -156.6842193784057],
  },

  {
    name: "Times Supermarket",
    type: "explore",
    position: [20.948888622527107, -156.68718261912971],
  },

  {
    name: "Kahekili Beach Park (Airport Beach)",
    type: "explore",
    position: [20.937057664925288, -156.69265242837741],
  },

  {
    name: "Black Rock Beach Cove",
    type: "explore",
    position: [20.927976485695556, -156.69598676099088],
  },

  {
    name: "Kāʻanapali Beach",
    type: "explore",
    position: [20.91790923605125, -156.69675327782784],
  },

  {
    name: "Whalers Village",
    type: "explore",
    position: [20.92161091051211, -156.69443158875382],
  },

  {
    name: "Kapalua Coastal Trail",
    type: "explore",
    position: [20.997890149683414, -156.665999116308],
  },

  {
    name: "Nā Kālele Blowhole",
    type: "explore",
    position: [21.02731993987117, -156.5885354464322],
  },

  {
    name: "Napili Bay Beach Trail",
    type: "explore",
    position: [20.994411644652114, -156.66785938450792],
  },

  {
    name: "Honolua Bay",
    type: "explore",
    position: [21.013404682587023, -156.63783232578697],
  },

  {
    name: "Slaughterhouse Beach",
    type: "explore",
    position: [21.01136457770765, -156.6421678544296],
  },

  {
    name: "Fleming Beach",
    type: "explore",
    position: [21.004778253376234, -156.65262557784718],
  },

  {
    name: "Baldwin Beach Park",
    type: "explore",
    position: [20.913276901198326, -156.39252419868825],
  },

  {
    name: "ʻĪao Valley",
    type: "explore",
    position: [20.882202309263846, -156.5459243752351],
  },

  {
    name: "Maui Ocean Center",
    type: "explore",
    position: [20.79275691197376, -156.51212898434085],
  },

  {
    name: "Kapalua Tidepools",
    type: "explore",
    position: [21.00603170379007, -156.66596645582158],
  },

   {
    name: "Maui Tropical Plantation",
    type: "explore",
    position: [20.8529495931073, -156.50622451453643],
  },

  {
    name: "Hoapili Trail",
    type: "explore",
    position: [20.598451202721098, -156.41374710895383],
  },

  {
    name: "Ulua Beach",
    type: "explore",
    position: [20.692756020060617, -156.44335616958097],
  },

  {
    name: "Wailea Beach",
    type: "explore",
    position: [20.682108305760995, -156.4435816043602],
  },

  {
    name: "Turtle Town",
    type: "explore",
    position: [20.65356967775856, -156.44267476087145],
  },

  {
    name: "Pā Ka'oao Trailhead",
    type: "explore",
    position: [20.716520422716762, -156.2502780284937],
  },


  

  // ==========================
  // DINING
  // ==========================

  {
    name: "Honokōwai Food Truck Park",
    type: "food",
    position: [20.948256415667107, -156.68861434643415],
  },

  {
    name: "Honokōwai Okazuya & Deli",
    type: "food",
    position: [20.952826668678952, -156.68639099061116],
  },

  {
    name: "Slappy Cakes Maui",
    type: "food",
    position: [20.94683711632064, -156.68790280410514],
  },

  {
    name: "Aloha Mixed Plate",
    type: "food",
    position: [20.88669778567534, -156.68519537342345],
  },

  {
    name: "Coco Deck",
    type: "food",
    position: [20.887819260650836, -156.684564288765],
  },

  {
    name: "Kalei's Lunchbox",
    type: "food",
    position: [20.89040939786955, -156.49106026157153],
  },

  {
    name: "Sam Sato's",
    type: "food",
    position: [20.89344483126186, -156.49991051020874],
  },

  {
    name: "Sparky's Food Company",
    type: "food",
    position: [20.885550707886203, -156.45986455569485],
  },

  {
    name: "Akamai Coffee & Food Co.",
    type: "food",
    position: [20.87848467445144, -156.458128768279],
  },

  {
    name: "Zippy's Kahului",
    type: "food",
    position: [20.87463182400643, -156.45832021760077],
  },

  {
    name: "Jollibee Kahului",
    type: "food",
    position: [20.888270011566345, -156.45210223516105],
  },

  {
    name: "Chick-fil-A",
    type: "food",
    position: [20.87357477468326, -156.45826163109447],
  },  

  {
    name: "Ululani's Hawaiian Shave Ice",
    type: "food",
    position: [20.914898811292733, -156.48996019470056],
  },  

  {
    name: "Sergio's Cantina",
    type: "food",
    position: [20.948262035371297, -156.68812839061127],
  },

  {
    name: "Papi's Ohana",
    type: "food",
    position: [20.950224652584748, -156.6876849752695],
  },

    {
    name: "The Fish Market Maui",
    type: "food",
    position: [20.952574407865637, -156.68649210595285],
  },

  {
    name: "Pailolo Bar & Grill",
    type: "food",
    position: [20.939649675744075, -156.69202248626036],
  },

  {
    name: "Monkeypod Kitchen",
    type: "food",
    position: [20.922112214567075, -156.69502472453405],
  },

  {
    name: "Hula Grill",
    type: "food",
    position: [20.922031700223958, -156.69529664760566],
  },

  {
    name: "Leilani's on the Beach",
    type: "food",
    position: [20.921476710657267, -156.69555724643496],
  },

  {
    name: "Maui Brewing Co. Kaʻanapali",
    type: "food",
    position: [20.926611035222322, -156.69484796415225],
  },

  {
    name: "Pāʻia Fish Market",
    type: "food",
    position: [20.92210857377765, -156.38095280656623],
  },

  {
    name: "Point Break Pizza",
    type: "food",
    position: [20.791914383508004, -156.51348081760307],
  },

  {
    name: "Starbucks - Kāʻanapali",
    type: "food",
    position: [20.921207234133515, -156.69540232636237],
  },

  {
    name: "808 Old Town",
    type: "food",
    position: [20.88764140620159, -156.50215484053757],
  },

  {
    name: "Ula'Ula Cafe",
    type: "food",
    position: [20.92492056987451, -156.50434216177652],
  },

  {
    name: "Tin Roof",
    type: "food",
    position: [20.885167887412752, -156.45370907527135],
  },
];

export default mapLocations;