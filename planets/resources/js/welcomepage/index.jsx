import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import MainPage from './mainPage/MainPage';



function App() {


   

    return (
        <div className="my">
            <MainPage></MainPage>
            
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector('#my'));