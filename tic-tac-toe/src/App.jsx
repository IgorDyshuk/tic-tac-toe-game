import "./styles/App.css";
import {HashRouter, Route, Routes} from "react-router-dom";
import Board from "./pages/game-page.jsx";


export default function App() {
    return (
        <>
            <HashRouter>
                <Routes>
                    <Route path="/" element={<Board/>}/>
                    {/*<Route path="/" element={} />*/}
                </Routes>
            </HashRouter>
        </>
    )
}
