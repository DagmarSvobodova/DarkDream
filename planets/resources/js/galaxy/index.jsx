import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import GalaxiesBrowser from './GalaxiesBrowser.jsx';


function App() {

    const [galaxy, setGalaxy] = useState(null);

    return (
        <>
            <div className="galaxies">

                <GalaxiesBrowser setGalaxy={ setGalaxy } />

                

            </div>
        </>
    );
}

ReactDOM.render(<App />, document.querySelector('#app'));