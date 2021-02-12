import React from "react";
import "./style.css";
import Personal from "./components/Personal/Personal"
import Additional from "./components/Additional/Additional";
import 'bootstrap/dist/css/bootstrap.min.css';

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
