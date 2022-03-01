import React from 'react'
import kuvaCovid from './rsz_kuva.jpg';
export default function Mainbox(){
    return(
<div className="mainBox">
<div className="leftcolumn">
<h1>Koronavirus</h1>
<div className="kuva1">
<img src={kuvaCovid} alt="Kuva"/>
</div>
</div>

<div className="rightcolumn">
<h1>Luetuimat</h1>
<p>1 Moi mita kuulu</p>
</div>
</div>
    );
    }