'use strict';

function createElementFromHTML(htmlString) {
  var div = document.createElement('div');
  div.innerHTML = htmlString.trim();

  // Change this to div.childNodes to support multiple top-level nodes.
  return div.firstChild;
}
const cardsHtmlStr = {
  hongKongCitizen: `<div class = "CardContent">
    <h2> Hong Kongers </h2>
    <img src = "images/hongkongcitizen.jpeg" width="600px" height="400px"></img>
    <p>
    The majority of Hongkongers are of Cantonese Han Chinese descent, most of whom trace their ancestral home to the province of Guangdong. However, the city also holds other Han Chinese subgroups including the Hakka, Hoklo, Teochew (Chiuchow), Shanghainese, Sichuanese and Taiwanese. Meanwhile, non-Han Chinese Hongkongers such as the British, Filipinos, Indonesians, South Asians and Vietnamese also make up six per cent of Hong Kong's population.   
    </p>
    </div>`,
  policeOfficer: `<div class = "CardContent">
    <h2> Hong Kong Police Officer </h2>
    <img src = "images/policeOfficer.jpeg" width="500px" height="400px"></img>
    <p>
    The Hong Kong Police Force (HKPF) is the primary law enforcement, investigative agency, and largest disciplined service under the Security Bureau of Hong Kong. The Royal Hong Kong Police Force (RHKP) reverted to its former name after the transfer of sovereignty of Hong Kong from the United Kingdom to People's Republic of China in 1997.
    </p>
    <p>
    Pursuant to the one country, two systems principle, HKPF is officially independent of the jurisdiction of the Ministry of Public Security of the People's Republic of China, which under usual circumstances may not interfere with Hong Kong SAR's local law enforcement matters. All HKPF officers are employed as civil servants and therefore required to pledge allegiance to the Hong Kong Basic Law.
    </p>
    <p>
    The HKPF consists of approximately 34,000 officers, including the Hong Kong Auxiliary Police Force, civil servants, and its Marine Region (3,000 officers and 143 vessels as of 2009).
    </p>
    </div>`,
  trafficLights: `<div class = "CardContent">
    <h2> Traffic Lights </h2>
    <img src = "images/trafficLights.jpeg" width="700px" height="400px"></img>
    <p>
    Traffic lights normally consist of three signals, transmitting meaning to drivers and riders through colours and symbols such as arrows. The regular traffic light colours are red, amber and green, arranged vertically or horizontally in that order. Although this is internationally standardised, variations exist on national and local scales as to traffic light sequences and laws.
    </p>
    </div>`,
  hongKongSigns: `<div class = "CardContent">
    <h2> Hong Kong Signs</h2>
    <img src = "images/hongKongSigns.jpeg" width="550px" height="400px"></img>
    <p>
    In the post-World War II era, neon signs became an indelible part of Hong Kong’s streets and skyline. Supplied by hundreds of workshops, they announced all manner of businesses—from restaurants, hotels, nightclubs and pharmacies to jewellery, tailor and pawn shops—while proclaiming the city’s growing prosperity.   More recently, however, Hong Kong’s neon signs have been disappearing at a rate of thousands per year, replaced by brighter burning and more energy efficient LED signs. As they recede from view, neon signs, and the processes and stories behind them, become a matter for preservation.
    </p>
    </div>`,
  hongKongSigns2: `<div class = "CardContent">
    <h2> Hong Kong Signs</h2>
    <img src = "images/hongKongSigns2.jpeg" width="550px" height="400px"></img>
    <p>
    In the post-World War II era, neon signs became an indelible part of Hong Kong’s streets and skyline. Supplied by hundreds of workshops, they announced all manner of businesses—from restaurants, hotels, nightclubs and pharmacies to jewellery, tailor and pawn shops—while proclaiming the city’s growing prosperity.   More recently, however, Hong Kong’s neon signs have been disappearing at a rate of thousands per year, replaced by brighter burning and more energy efficient LED signs. As they recede from view, neon signs, and the processes and stories behind them, become a matter for preservation.
    </p>
    </div>`,
  hongKongSigns3: `<div class = "CardContent">
    <h2> Hong Kong Signs</h2>
    <img src = "images/hongKongSigns3.jpeg" width="550px" height="400px"></img>
    <p>
    In the post-World War II era, neon signs became an indelible part of Hong Kong’s streets and skyline. Supplied by hundreds of workshops, they announced all manner of businesses—from restaurants, hotels, nightclubs and pharmacies to jewellery, tailor and pawn shops—while proclaiming the city’s growing prosperity.   More recently, however, Hong Kong’s neon signs have been disappearing at a rate of thousands per year, replaced by brighter burning and more energy efficient LED signs. As they recede from view, neon signs, and the processes and stories behind them, become a matter for preservation.
    </p>
    </div>`,
  bus: `<div class = "CardContent">
    <h2> City Bus </h2>
    <img src = "images/bus.jpeg" width="420px" height="300px"></img>
    <p>
    Citybus Limited (Chinese: 城巴有限公司) is one of the three major bus operators in Hong Kong. It provides both franchised and non-franchised bus service. The franchised route network serves mainly Hong Kong Island, cross-harbour routes (between Hong Kong Island and Kowloon/New Territories), North Lantau (Tung Chung and Hong Kong Disneyland) and Hong Kong International Airport. The non-franchised routes serve mainly City One Sha Tin. It also provides bus rental services and staff bus services for some large companies such as TVB and China Light and Power.
    </p>
    </div>`,
  streetcar: `<div class = "CardContent">
    <h2> Streetcar </h2>
    <img src = "images/streetcar.jpeg" width="500px" height="300px"></img>
    <p>
    Hong Kong's tram system is one of the earliest forms of public transport in the metropolis, having opened in 1904 under British rule. It has used electric trams since its inauguration, and has never used horse or steam power. It owns the world's largest operational double-decker tram fleet, and is a very rare example of a tram system that uses them exclusively. In addition to being used by commuters, the system is popular with tourists, and is one of the most environmentally friendly ways of travelling in the city. 
    </p>
    </div>`,
  officerK: `<div class = "CardContent">
    <h2> Officer K </h2>
    <img src = "images/officerk.jpeg" width="500px" height="300px"></img>
    <p>
    K, serial number KD6-3.7, later known as Joe was a Nexus-9 replicant Blade Runner tasked by the LAPD with "retiring" outdated Nexus-8 replicants, which were rushed into production in 2020 by the Tyrell Corporation upon the death of its founder, Dr. Eldon Tyrell, in 2019. A number of the remaining Nexus-8 models had formed a replicant freedom movement, which K and the LAPD sought to terminate as well.
    </p>
    <p>
    On June 30, 2049, following his retirement of rogue replicant Sapper Morton, K's superior in the LAPD, Lieutenant Joshi, tasked him with terminating the child of a female replicant whose remains were unearthed from beneath Sapper's tree.
    </p>
    </div>`,
  luv: `<div class = "CardContent">
    <h2> Luv </h2>
    <img src = "images/luv.jpeg" width="300px" height="300px"></img>
    <p>
    Luv was a Nexus-9 model replicant and the right-hand of Niander Wallace.
    </p>
    <p>
    Luv admired Wallace and his vision for the future of replicants. She occasionally visited his quarters to learn more about his plans for reproducing replicants and reported all matters concerning buyers and possible threats that may arise and halt progression in reaching their goal.
    </p>
    </div>`,
  replicants: `<div class = "CardContent">
    <h2> Replicants </h2>
    <img src = "images/replicants.jpeg" width="600px" height="300px"></img>
    <p>
    A replicant was a genetically engineered, bio-enhanced person with para-physical capabilities, "composed entirely of organic substance," created for slave labor by Tyrell Corporation and its successor, the Wallace Corporation. The Tyrell motto was "More human than human."    </p>
    <p>
    Replicants were sometimes referred to as "skinjobs" or "skinners," as they were indistinguishable from non-engineered humans, except for their empathetic abilities. These terms were considered slurs.
    </p>
    </div>`,
};
/**Example 1 */
const props0 = {
  id: 'example0',
  image: 'images/image0.jpeg',
  width: '1400',
  height: '860',
  displayLegend: true,
  modalOnClick: true,
  boundingBoxes: [
    {
      coordinates: [
        [0, 0.2],
        [0.05, 0.3],
      ],
      color: '#BDBD00',
      label: 'Pedestrian',
      id: 'box0.1',
      content: createElementFromHTML(cardsHtmlStr.hongKongCitizen),
    },
    {
      coordinates: [
        [0.6, 0.26],
        [0.705, 0.45],
      ],
      color: 'red',
      label: 'Bus',
      id: 'box0.2',
      content: createElementFromHTML(cardsHtmlStr.bus),
    },
    {
      coordinates: [
        [0.4, 0.21],
        [0.42, 0.31],
      ],
      color: 'blue',
      label: 'Officer',
      id: 'box0.3',
      content: createElementFromHTML(cardsHtmlStr.policeOfficer),
    },
    {
      coordinates: [
        [0.2, 0.3],
        [0.25, 0.35],
      ],
      color: '#BDBD00',
      label: 'Pedestrian',
      id: 'box0.4',
      content: createElementFromHTML(cardsHtmlStr.hongKongCitizen),
    },
    {
      coordinates: [
        [0.55, 0.345],
        [0.6, 0.425],
      ],
      color: 'red',
      label: 'Bus',
      id: 'box0.5',
      content: createElementFromHTML(cardsHtmlStr.bus),
    },
    {
      coordinates: [
        [0.44, 0.22],
        [0.52, 0.45],
      ],
      color: '#a16800',
      label: 'Streetcar',
      id: 'box0.6',
      content: createElementFromHTML(cardsHtmlStr.streetcar),
    },
    {
      coordinates: [
        [0.52, 0.56],
        [0.64, 0.63],
      ],
      color: '#009483',
      label: 'Signs',
      id: 'box0.7',
      content: createElementFromHTML(cardsHtmlStr.hongKongSigns),
    },
    {
      coordinates: [
        [0.21, 0.57],
        [0.31, 0.61],
      ],
      color: '#009483',
      label: 'Signs',
      id: 'box0.8',
      content: createElementFromHTML(cardsHtmlStr.hongKongSigns2),
    },
    {
      coordinates: [
        [0.175, 0.365],
        [0.19, 0.415],
      ],
      color: '#9e0081',
      label: 'Traffic Lights',
      id: 'box0.9',
      content: createElementFromHTML(cardsHtmlStr.trafficLights),
    },
    {
      coordinates: [
        [0.355, 0.31],
        [0.38, 0.4],
      ],
      color: '#9e0081',
      label: 'Traffic Lights',
      id: 'box0.10',
      content: createElementFromHTML(cardsHtmlStr.trafficLights),
    },
    {
      coordinates: [
        [0.403, 0.34],
        [0.427, 0.4],
      ],
      color: '#9e0081',
      label: 'Traffic Lights',
      id: 'box0.11',
      content: createElementFromHTML(cardsHtmlStr.trafficLights),
    },
    {
      coordinates: [
        [0.84, 0.63],
        [1, 0.85],
      ],
      color: '#009483',
      label: 'Signs',
      id: 'box0.12',
      content: createElementFromHTML(cardsHtmlStr.hongKongSigns3),
    },
  ],
};

const bba0 = new BoundingBoxAnnotate(props0);
bba0.createBoundingBoxAnnotate();

/** Example 2 */
const props1 = {
  id: 'example1',
  image: 'images/image1.jpeg',
  width: '1422',
  height: '680',
  displayLegend: false,
  modalOnClick: false,
  boundingBoxes: [
    {
      coordinates: [
        [0.47, 0.3],
        [0.515, 0.57],
      ],
      color: '#1B8C7F',
      label: 'Officer K',
      id: 'box1.1',
      content: createElementFromHTML(cardsHtmlStr.officerK),
    },
    {
      coordinates: [
        [0.52, 0.29],
        [0.55, 0.56],
      ],
      color: '#A81976',
      label: 'Luv',
      id: 'box1.2',
      content: createElementFromHTML(cardsHtmlStr.luv),
    },
    {
      coordinates: [
        [0.02, 0.25],
        [0.1, 0.88],
      ],
      color: '#6B0000',
      label: 'Replicants',
      id: 'box1.3',
      content: createElementFromHTML(cardsHtmlStr.replicants),
    },
    {
      coordinates: [
        [0.17, 0.3],
        [0.21, 0.75],
      ],
      color: '#6B0000',
      label: 'Replicants',
      id: 'box1.4',
      content: createElementFromHTML(cardsHtmlStr.replicants),
    },
    {
      coordinates: [
        [0.235, 0.35],
        [0.275, 0.7],
      ],
      color: '#6B0000',
      label: 'Replicants',
      id: 'box1.5',
      content: createElementFromHTML(cardsHtmlStr.replicants),
    },
    {
      coordinates: [
        [0.29, 0.36],
        [0.32, 0.66],
      ],
      color: '#6B0000',
      label: 'Replicants',
      id: 'box1.6',
      content: createElementFromHTML(cardsHtmlStr.replicants),
    },
    {
      coordinates: [
        [0.88, 0.25],
        [0.98, 0.94],
      ],
      color: '#6B0000',
      label: 'Replicants',
      id: 'box1.7',
      content: createElementFromHTML(cardsHtmlStr.replicants),
    },
    {
      coordinates: [
        [0.78, 0.33],
        [0.83, 0.75],
      ],
      color: '#6B0000',
      label: 'Replicants',
      id: 'box1.8',
      content: createElementFromHTML(cardsHtmlStr.replicants),
    },
    {
      coordinates: [
        [0.72, 0.35],
        [0.75, 0.69],
      ],
      color: '#6B0000',
      label: 'Replicants',
      id: 'box1.9',
      content: createElementFromHTML(cardsHtmlStr.replicants),
    },
    {
      coordinates: [
        [0.675, 0.35],
        [0.715, 0.64],
      ],
      color: '#6B0000',
      label: 'Replicants',
      id: 'box1.10',
      content: createElementFromHTML(cardsHtmlStr.replicants),
    },
  ],
};

const bba1 = new BoundingBoxAnnotate(props1);
bba1.createBoundingBoxAnnotate();

const toggleLegend = document.getElementById('displayLegendSwitchLabel');
const toggleOnClick = document.getElementById('displayOnClickSwitchLabel');

toggleLegend.onclick = () => {
  const checkbox = document.getElementById('displayLegendSwitch');
  if (checkbox.checked) {
    bba1.toggleLegend(true);
  } else {
    bba1.toggleLegend(false);
  }
};

toggleOnClick.onclick = () => {
  const checkbox = document.getElementById('displayOnClickSwitch');
  if (checkbox.checked) {
    bba1.toggleOnClick(true);
  } else {
    bba1.toggleOnClick(false);
  }
};

/** Example 3*/ 
const props2 = {
  id: 'example2',
  image: 'images/image2.jpeg',
  width: '1200',
  height: '800',
  displayLegend: true,
  modalOnClick: true,
  boundingBoxes: [],
};

const bba2 = new BoundingBoxAnnotate(props2);
bba2.createBoundingBoxAnnotate();

const label2color = {
  Alpha: '#214559',
  Beta: '#262b2f',
  Gamma: '#00626f',
  Delta: '#0f3b57',
  Epsilon: '#00022e',
  Zeta: '#112222',
  Eta: '#2a293e',
  Theta: '#2b6867',
  Iota: '#29304e',
  Kappa: '#020035',
  Lambda: '#34414e',
  Mu: '#040348',
  Nu: '#391285',
  Xi: '#203e4a',
  Omicron: '#184343',
  Pi: '#373e02',
  Rho: '#6f7755',
  Sigma: '#11574a',
  Tau: '#495e35',
  Upsilon: '#35654d',
  Phi: '#c65102',
  Chi: '#4a0100',
  Psi: '#490648',
  Omega: '#754600',
};

const randomBoundingBox = () => {
  let lx = Math.random(),
    ly = Math.random(),
    rx = Math.random(),
    ry = Math.random();

  if (lx > rx) {
    [lx, rx] = [rx, lx];
  }
  if (ly > ry) {
    [ly, ry] = [ry, ly];
  }
  function uuidv4() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
      (
        c ^
        (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
      ).toString(16)
    );
  }

  const id = uuidv4();
  const content =
    'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?'.repeat(
      5
    );
  const label =
    Object.keys(label2color)[
      Math.floor(Math.random() * Object.keys(label2color).length)
    ];
  const color = label2color[label];
  return {
    coordinates: [
      [lx, ly],
      [rx, ry],
    ],
    color: color,
    label: label,
    id: id,
    content: content,
  };
};

const addButton = document.getElementById('addRandomBoundingBox');
addButton.onclick = () => {
  bba2.addBoundingBox(randomBoundingBox());
};

const deleteButton = document.getElementById('deleteRandomBoundingBox');
deleteButton.onclick = () => {
  const boundingBoxIDS = bba2.boundingBoxes.map((bb) => bb.id);
  const randID =
    boundingBoxIDS[Math.floor(Math.random() * boundingBoxIDS.length)];
  bba2.deleteBoundingBox(randID);
};
