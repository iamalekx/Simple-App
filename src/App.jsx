import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";
import Button from "./components/Button";
import "./components/styles.css"

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Card />
            <Button />
        </>
    );
}

export default App;
