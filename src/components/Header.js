import React from 'react'
import logo from './sanomaLogo.jpg';

export default function Header() {
  return (
    <div className="headerOuter">
    <div className="headerInner">
    <div className="pic">
    <img src={logo} alt="Logo"/>

    </div>
        <div className="menuElementti"> Etusivu</div>
        <div className="menuElementti">Uutiset</div>
        <div className="menuElementti">Lehdet</div>
        <div className="menuElementti">Asiakaspalvelu</div>
        <div className="menuElementti">Tilaa</div>
        <div className="menuElementti">Kirjaudu</div>
        <div className="menuElementti">Valikko</div>
        </div>
    </div>
  )
}
