import React from 'react'
import { Card, CardTitle, CardText, Container } from 'reactstrap'
import petitionLinks from './PetitionsObj'

export default function Petitions() {
    return (
        <Container className="donate">
            <h1 className="main-header">PETITIONS</h1>
            <Card className="info-card" body>
                <CardTitle className="title-header"><strong>{petitionLinks.raiseTheDegree.title}</strong></CardTitle>
                <CardText >{petitionLinks.raiseTheDegree.desc}</CardText>
                <a href={petitionLinks.raiseTheDegree.link} target="_blank">SIGN THE PETITION</a>
            </Card>
            <Card className="info-card" body>
                <CardTitle className="title-header"><strong>{petitionLinks.defundThePolice.title}</strong></CardTitle>
                <CardText>{petitionLinks.defundThePolice.desc}</CardText>
                <a href={petitionLinks.defundThePolice.link} target="_blank">SIGN THE PETITION</a>
            </Card>
            <Card className="info-card" body>
                <CardTitle className="title-header"><strong>{petitionLinks.colorOfChange.title}</strong></CardTitle>
                <CardText>{petitionLinks.colorOfChange.desc}</CardText>
                <a href={petitionLinks.colorOfChange.link} target="_blank">SIGN THE PETITION</a>
            </Card>
            <Card className="info-card" body>
                <CardTitle className="title-header"><strong>{petitionLinks.weCantBreathe.title}</strong></CardTitle>
                <CardText>{petitionLinks.weCantBreathe.desc}</CardText>
                <a href={petitionLinks.weCantBreathe.link} target="_blank">SIGN THE PETITION</a>
            </Card>
            <Card className="info-card" body>
                <CardTitle className="title-header"><strong>{petitionLinks.naacpldf.title}</strong></CardTitle>
                <CardText>{petitionLinks.naacpldf.desc}</CardText>
                <a href={petitionLinks.naacpldf.link} target="_blank">SIGN THE PETITION | DONATE</a>
            </Card>
        </Container>
    )
}
