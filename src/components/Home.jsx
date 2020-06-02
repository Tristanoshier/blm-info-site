import React from 'react'
import Donate from './Donate/Donate';
import Petitions from './Petitions/Petitions';
import Text from './Text/Text';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div>
            <h1>NO JUSTICE</h1>
            <h1>NO PEACE</h1>
            <h1>BLACK LIVES MATTER</h1>
            <span>
                <Link className="pr-3" to="/donate">DONATE</Link>
                <Link className="pr-3" to="/petitions">PETITIONS</Link>
                <Link className="pr-3" to="/text">TEXT</Link>
            </span>
        </div>
    )
}
