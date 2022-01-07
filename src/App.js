import {BrowserRouter, Route, Routes} from 'react-router-dom';
import MainPage from "./components/MainPage";
import {createGlobalStyle} from "styled-components";

const Global = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;
  }
`

function App() {
    return (
    <BrowserRouter>
        <Routes>
                <Route path="/todo" element={<MainPage/>}/>
        </Routes>
    </BrowserRouter>
    );
}

export default App;