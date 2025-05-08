import "./styles/App.css";
import './index.css'
import {HashRouter, Route, Routes} from "react-router-dom";
import PvpPage from "./pages/pvp-page.jsx";
import MainPage from "./pages/main-page.jsx";


export default function App() {
    return (
        <>
            <HashRouter>
                <Routes>
                    <Route path="/" element={<MainPage/>}/>
                    <Route path="/pvp-page/" element={<PvpPage/>}/>
                </Routes>
            </HashRouter>
        </>
    )
}
