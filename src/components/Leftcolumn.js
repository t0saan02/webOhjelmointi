import React from 'react';
import kuvaCovid from './rsz_kuva.jpg';

export default function Leftcolumn(){
    return(
<div className='leftcolumn'>
<h1>Koronavirus</h1>
<div className="kuva1">
<img src={kuvaCovid} alt="Kuva"/>
</div>
</div>
);
}
