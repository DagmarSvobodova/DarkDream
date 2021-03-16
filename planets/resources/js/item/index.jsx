import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Header from '../welcomepage/header/Header';
import AllItems from './AllItems';




function App() {

   

    return (
        <>
       <Header/>
       <AllItems></AllItems>
        </>
    );
}

ReactDOM.render(<App />, document.querySelector('#app'));






