import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast';
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import About from './components/About/About';
import MarketPlace from './components/MarketPlace/MarketPlace'
import CreatorSignUp from './components/Artists/NewArtistSignUp';
import Profile from './components/Profile/Profile';
import ArtistsAndCreators from './components/ArtistsAndCreators/ArtistsAndCreators';
import NotFound from './components/NotFound/NotFound';
import ArtistPage from './components/Artists/ArtistPage';
import AllListed721 from './components/MarketPlace/AllListed721';
import CreateACollection from './components/Collection/CreateACollection';

import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultWallets,
  RainbowKitProvider,
  lightTheme
} from '@rainbow-me/rainbowkit';
import {
  chain,
  configureChains,
  createClient,
  WagmiConfig,
} from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

// Set-up accepted chains and providers 
const { chains, provider } = configureChains([chain.polygon, chain.polygonMumbai],
  [
    alchemyProvider({ alchemyId: process.env.ALCHEMY_MUMBAI_URL }),
    publicProvider()
  ]
);
// Set up connector(appName to show in Rainbowkit UI and accepted chains)
const { connectors } = getDefaultWallets({ appName: "FreeChain", chains });
//Set up a wagmi wallet client
const wagmiClient = createClient({ autoConnect: true, connectors, provider });


function App() {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}
        theme={lightTheme({
          accentColor: '#7b3fe4',
          accentColorForeground: 'white',
          borderRadius: 'medium',
          fontStack: 'system',
        })}
      >
        <Router>
          <div className='font-mod flex flex-col relative overflow-x-hidden dark:bg-[#202020] transition-all duration-300 ease-in-out'>
            <Navbar />
            <div><Toaster position="bottom-right" reverseOrder={false} /></div>
            <Routes>
              <Route path='/' element={<Home />}></Route>
              <Route path='/about' element={<About />}></Route>
              <Route path='/profile' element={<Profile />}></Route>
              <Route path='/artists_creators' element={<ArtistsAndCreators />}></Route>
              <Route path='/newArtist' element={<CreatorSignUp />}></Route>
              <Route path='/*' element={<NotFound />}></Route>
              <Route path='artist/:address' element={<ArtistPage />}></Route>
              <Route path='/marketplace' element={<MarketPlace />}></Route>
              <Route path="/collection/create" element={<CreateACollection />}></Route>
              <Route path='/marketplace/all721tokens' element={<AllListed721 />}></Route>
            </Routes>
            <Footer />
          </div>
        </Router>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default App;
