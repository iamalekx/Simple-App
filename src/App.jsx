import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";
import Button from "./components/Button";
import "./components/styles.css";
import "./components/register.css";
import image1 from "./images/dog-funny-glasses-wooden-background-cute-5k-6000x4000-1810.jpg";
import image2 from "./images/coffee-cup-instant-coffee-blue-background-ceramic-mug-top-5616x3744-3327.jpg";
import image3 from "./images/minion-halloween-7680x4320-18810.jpg";
import Register from "./components/register.jsx";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Register />
            {/* <Card title="Dog" price="USD 150.00" image={image1}>
            </Card>
            <Card title="Coffee" price="USD 10.00" image={image2}>
            </Card>
            <Card title="Minions" price="USD 50.00" image={image3}>
            </Card> */}
            {/* <Button /> */}
        </>
    );
}

export default App;
