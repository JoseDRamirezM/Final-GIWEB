import React from 'react';

const FiltroTweets = ({ filtro, setFiltro, listaFiltros }) => {
    const cambiarFiltro = (event) => setFiltro(event.target.value);

    return (
        <div>
            <select
                className="browser-default custom-select"
                value={filtro}
                onChange={cambiarFiltro}
            >
                {listaFiltros.map((filtro, index) => (
                    <option key={index} value={filtro}>
                        {filtro}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default FiltroTweets;
