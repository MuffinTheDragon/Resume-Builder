import React from "react";
import "./style.css";
import Personal from "./components/Personal/Personal"
import Additional from "./components/Additional/Additional";

function App() {
    return (
        <div>
            Resume Builder
            <Personal />
            <Additional />
        </div>
    );
}

export default App;
