import Apollo11 from '../images/Apollo11.jpeg';
import Voyager1 from '../images/Voyager.jpeg';
import MarsPathfinder from '../images/MarsPathfinder.gif';
import EIE from '../images/EIE.jpeg';
import Kepler from '../images/Kepler.jpeg';
import CassiniHuygens from '../images/Cassini-Huygens.jpeg';
import Mariner2 from '../images/Mariner2.jpeg';
import Mariner5 from '../images/Mariner5.jpeg';
import Venera4 from '../images/Venera4.jpeg';
import Mariner10 from '../images/Mariner10.jpeg';
import Venera16 from '../images/Venera16.jpeg';
import MESSMercurio from '../images/MESSENGER.jpeg';
import Genesis from '../images/Genesis.jpeg';
import MarsOdyssey from '../images/MarsOdyssey.jpeg';
import Mars_Polar_Lander from '../images/Mars_Polar_Lander.jpeg';
import NozomiB from '../images/NozomiB.png';
import Fobos1 from '../images/Fobos1.jpeg';
import Fobos2 from '../images/Fobos2.jpeg';
import Galileo from '../images/Galileo.jpeg';
import Cassini from '../images/Cassini.jpeg';

const USA = 'Estados Unidos';
const URSS = 'URSS';

const Missions = [
  {
    name: 'Apollo 11',
    year: '1960',
    country: USA,
    destination: 'Lua',
    image: Apollo11,
  },
  {
    name: 'Voyager 1',
    year: '1977',
    country: USA,
    destination: 'Espaço interestelar',
    image: Voyager1,
  },
  {
    name: 'Mars Pathfinder',
    year: '1996',
    country: USA,
    destination: 'Marte',
    image: MarsPathfinder,
  },
  {
    name: 'Estação Internacional Espacial',
    year: '1998',
    country: 'Estados Unidos e Rússia',
    destination: 'Órbita terrestre',
    image: EIE,
  },
  {
    name: 'Kepler',
    year: '2009',
    country: USA,
    destination: 'Espaço interestelar',
    image: Kepler,
  },
  {
    name: 'Cassini-Huygens',
    year: '2009',
    country: 'Estados Unidos e União Europeia',
    destination: 'Saturno',
    image: CassiniHuygens,
  },
  {
    name: 'Mariner 2',
    year: '1962',
    country: USA,
    destination: 'Vênus',
    image: Mariner2,
  },
  {
    name: 'Venera 4',
    year: '1967',
    country: URSS,
    destination: 'Vênus',
    image: Venera4,
  },
  {
    name: 'Mariner 5',
    year: '1967',
    country: USA,
    destination: 'Vênus',
    image: Mariner5,
  },
  {
    name: 'Mariner 10',
    year: '1975',
    country: USA,
    destination: 'Vênus',
    image: Mariner10,
  },
  {
    name: 'Venera 16',
    year: '1983',
    country: URSS,
    destination: 'Vênus',
    image: Venera16,
  },
  {
    name: 'MESSENGER',
    year: '2004',
    country: USA,
    destination: 'Mercúrio',
    image: MESSMercurio,
  },
  {
    name: 'Genesis',
    year: '2001',
    country: USA,
    destination: 'Terra',
    image: Genesis,
  },
  {
    name: '2001 Mars Odyssey',
    year: '2001',
    country: USA,
    destination: 'Marte',
    image: MarsOdyssey,
  },
  {
    name: 'Mars Surveyor 98 Lander',
    year: '1999',
    country: USA,
    destination: 'Marte',
    image: Mars_Polar_Lander,
  },
  {
    name: 'Nozomi (Planeta B)',
    year: '1998',
    country: 'Japão',
    destination: 'Marte',
    image: NozomiB,
  },
  {
    name: 'Fobos 1',
    year: '1988',
    country: URSS,
    destination: 'Marte',
    image: Fobos1,
  },
  {
    name: 'Fobos 2',
    year: '1988',
    country: URSS,
    destination: 'Marte',
    image: Fobos2,
  },
  {
    name: 'Galileo',
    year: '1989',
    country: USA,
    destination: 'Júpiter',
    image: Galileo,
  },
  {
    name: 'Cassini/Huygens',
    year: '1997',
    country: 'Estados Unidos e Europa',
    destination: 'Saturno',
    image: Cassini,
  },
];

export default Missions;
