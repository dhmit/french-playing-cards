import React, {Suspense} from "react";
import ReactDOM from "react-dom";
import "./i18n";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import "./scss/index.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Base from "./components/global/Base";
import NavBar from "./components/global/Nav";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import History from "./components/pages/History";

import Manufacture from "./components/pages/Manufacture";
import Material from "./components/pages/Material";
import Fronts from "./components/pages/Fronts";
import Backs from "./components/pages/Backs";
import Envelopes from "./components/pages/Envelopes";
import Iconography from "./components/pages/Iconography";
import Tarot from "./components/pages/Tarot";
import TarotDeck from "./components/pages/TarotDeck";
import TarotHistory from "./components/pages/TarotHistory";

import Explore from "./components/pages/Explore";
import Games from "./components/pages/Games";
import SolitaireSelect from "./components/pages/Solitaire";
import SolitaireGame from "./components/solitaire/SolitaireGame";
import Cartomancy from "./components/Cartomancy";
import Bibliography from "./components/pages/Bibliography";

ReactDOM.render(
    <div>
        <Suspense fallback={null}>
            <Base>
                <BrowserRouter>
                    <NavBar />
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route exact path="/about" element={<About />} />
                        <Route exact path="/history" element={<History />} />
                        <Route exact path="/manufacture" element={<Manufacture />} />
                        <Route exact path="/solitaire/select" element={<SolitaireSelect />} />
                        <Route exact path="/solitaire/play/paris" element={<SolitaireGame deck="paris"/>} />
                        <Route exact path="/solitaire/play/dugourc" element={<SolitaireGame deck="dugourc"/>} />
                        <Route exact path="/solitaire/play/david" element={<SolitaireGame deck="david"/>} />
                        <Route exact path="/cartomancy" element={<Cartomancy />} />
                        <Route exact path="/material-aspects" element={<Material />} />
                        <Route exact path="/material-aspects/fronts" element={<Fronts />} />
                        <Route exact path="/material-aspects/backs" element={<Backs />} />
                        <Route exact path="/material-aspects/envelopes" element={<Envelopes />} />
                        <Route exact path="/iconography" element={<Iconography />} />
                        <Route exact path="/explore" element={<Explore />} />
                        <Route exact path="/tarot" element={<Tarot />} />
                        <Route exact path="/tarot/tarot-deck" element={<TarotDeck />} />
                        <Route exact path="/tarot/tarot-history" element={<TarotHistory />} />
                        <Route exact path="/games" element={<Games />} />
                        <Route exact path="/bibliography" element={<Bibliography />} />
                    </Routes>
                </BrowserRouter>
            </Base>
        </Suspense>
    </div>,
    document.getElementById("app_root")
);


