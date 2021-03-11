import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import GalaxiesBrowser from './GalaxiesBrowser.jsx';


function App() {

    const [category, setCategory] = useState(null);

    return (
        <>
            <div className="galaxies">

                <GalaxiesBrowser setCategory={ setCategory } />

                

            </div>
        </>
    );
}

ReactDOM.render(<App />, document.querySelector('app'));