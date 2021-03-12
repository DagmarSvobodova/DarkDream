import React, { useState, useEffect } from 'react';

export default function GalaxiesBrowser(props) {

    const [{loading, loaded, data, galaxy}, setDataState] = useState({
        loading: false,
        loaded: false,
        data: null,
        galaxy: null
    })

    const url = '/api/galaxies'; // change this if necessary

    const loadData = async (galaxy = null) => {
        if (url) {
            setDataState({
                loading: true,
                loaded: false,
                data: null,
                parent: parent
            });

            const response = await fetch(url);
            const data = await response.json();

            setDataState({
                loading: false,
                loaded: true,
                data: data
            });

            props.setGalaxy(data);
        }
    }

    useEffect(() => {
        loadData();
    }, [])

    const chooseGalaxy = (galaxy) => {
        loadData(galaxy.name)
    }

    console.log(data);

    let content = '';

    if (loading) {
        content = (
            <div className="loading">
                <div className="loader"><div></div><div></div><div></div><div></div></div>
                Loading
            </div>
        )
    } else if (loaded) {
        content = (
            <div className="categories-browser__categories">
                {
                    data.map(galaxy => (
                        <div key={ galaxy.id } className="categories-browser__category" onClick={ () => chooseGalaxy(galaxy.name) }>
                            <h3>{ galaxy.name }</h3>
                            <img src={galaxy.image} alt={galaxy.name}/>
                            <p>{galaxy.info}</p>
                            <p>{galaxy.universe.name}</p>
                            <img src={galaxy.universe.image} alt={galaxy.name}/>
                        </div>
                    ))
                }
            </div>
        )
    }

    return (
        <section className="categories-browser">

            <h2>Galaxy</h2>

            { content }

        </section>
    );
}