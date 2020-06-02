import React from 'react'
import { Card, CardTitle, CardText } from 'reactstrap'
import petitionLinks from './PetitionsObj'

export default function Petitions() {
    return (
        <div>
            <h1>Petitions</h1>
            <Card body>
                <CardTitle>{petitionLinks.raiseTheDegree.title}</CardTitle>
                <CardText>{petitionLinks.raiseTheDegree.desc}</CardText>
                <a href={petitionLinks.raiseTheDegree.link} target="_blank">Sign the Petition</a>
            </Card>
            <Card body>
                <CardTitle>{petitionLinks.defundThePolice.title}</CardTitle>
                <CardText>{petitionLinks.defundThePolice.desc}</CardText>
                <a href={petitionLinks.defundThePolice.link} target="_blank">Sign the Petition</a>
            </Card>
            <Card body>
                <CardTitle>{petitionLinks.colorOfChange.title}</CardTitle>
                <CardText>{petitionLinks.colorOfChange.desc}</CardText>
                <a href={petitionLinks.colorOfChange.link} target="_blank">Sign the Petition</a>
            </Card>
            <Card body>
                <CardTitle>{petitionLinks.weCantBreathe.title}</CardTitle>
                <CardText>{petitionLinks.weCantBreathe.desc}</CardText>
                <a href={petitionLinks.weCantBreathe.link} target="_blank">Sign the Petition</a>
            </Card>
            <Card body>
                <CardTitle>{petitionLinks.naacp.title}</CardTitle>
                <CardText>{petitionLinks.naacp.desc}</CardText>
                <a href={petitionLinks.naacp.link} target="_blank">Sign the Petition</a>
            </Card>

        </div>
    )
}
