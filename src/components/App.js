import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Products,Headers} from "./containers";


const App=() => (
    <div className="bg-primary" style={{height:"100vh"}}>
        <div className="container">
            <Headers/>
            <Products/>
        </div>
    </div>
);

export default App;
