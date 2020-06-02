import React from 'react'
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="donate">
            <div style={{marginTop:100}}>
                <h1 className="title-text">NO JUSTICE</h1>
                <h1 className="title-text second-text">NO PEACE</h1>
                <h1 className="title-text">BLACK LIVES MATTER</h1>
            </div>
            
            <span>
                <Link className="pr-3 home-link" to="/donate">DONATE</Link>
                <Link className="pr-3" to="/petitions">PETITIONS</Link>
                <Link className="pr-3" to="/text">TEXT</Link>
            </span>
        </div>
    )
}
