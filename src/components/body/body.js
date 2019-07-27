import React from 'react'
import Artitem from './artitem'
import Items from '../../../fetchdata'

function body() {
    const artitemComponents = Items.map(item => <Artitem artitem={item}/>)
    return (
        <div>
            {artitemComponents}
        </div>
    )
}

export default body
