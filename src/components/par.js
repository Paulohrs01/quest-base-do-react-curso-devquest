import React from 'react'
import './par.css'

// Par = Paragraph

//  não quis usar a prop color, pra eu consiguir alterar a cor por aqui mesmo,
//  se precisasse ter outros parágrafos com cores diferentes eu adicionaria a prop color para alterar cada um em App com color="blue".
function Par({text}) { 

    const parStyle = {
        color: 'red',
        textTransform: 'uppercase'
    }

    return (
        <>
        <div className='ParCss'>
        <p style={parStyle}>{text}</p>
        </div>
        </>
    )
}


export default Par;
