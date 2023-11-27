// import Home from "./pages/Home";
import SideNavBar from "./components/SideNavBar";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Search from "./pages/Search";
import Messages from "./pages/Messages";
import Notifications from "./pages/Notifications";
import Settings from "./pages/Settings";
import Profile from "./pages/Profile";
import Create from "./pages/Create";
import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi/react'
import { WagmiConfig } from 'wagmi'
import { mainnet } from 'wagmi/chains'

const projectId = 'f258c2ecb7bc83d2ea3082228dcab33d'

const chains = [mainnet]
const wagmiConfig = defaultWagmiConfig({ chains, projectId })

createWeb3Modal({ wagmiConfig, projectId, chains })

function App() {
  return (
    <>
     <WagmiConfig config={wagmiConfig}>
    <BrowserRouter>
      <NavBar />
      <div className="flex">
        <div className="basis-1/4">
          <SideNavBar />
        </div>
        <div className="basis-3/4">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/create" element={<Create />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
        
      </div>
      </BrowserRouter>
      </WagmiConfig>
    </>
  );
}
export default App;
