import "./styles/App.css";
import './index.css'
import {HashRouter, Route, Routes} from "react-router-dom";
import PvpPage from "./pages/pvp-page.jsx";
import MainPage from "./pages/main-page.jsx";
import VsBotPage from "./pages/vsbot-page.jsx";
import {useEffect} from "react";

export default function App() {
    useEffect(() => {
        const tg = window.Telegram?.WebApp;

        if (tg) {
            const isMobile = tg.platform === 'android' || tg.platform === 'ios';

            if (isMobile) {
                try {
                    tg.requestFullscreen?.();
                } catch (e) {
                    console.warn("requestFullscreen unsupported:", e.message);
                    try {
                        tg.expand?.();
                    } catch (e2) {
                        console.warn("expand also failed:", e2.message);
                    }
                }
            } else {
                console.log("📵 Desktop Telegram — fullscreen отключён");
            }
        } else {
            document.documentElement.style.height = "100%";
            document.body.style.height = "100%";
            document.body.style.margin = "0";
            document.body.style.overflow = "hidden";
        }

        return () => {
            try {
                tg?.exitFullscreen?.();
            } catch (e) {
                console.warn("exitFullscreen unsupported:", e.message);
            }
        };
    }, []);


    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/pvp-page/" element={<PvpPage/>}/>
                <Route path="/bot-page/" element={<VsBotPage/>}/>
            </Routes>
        </HashRouter>
    );
}
