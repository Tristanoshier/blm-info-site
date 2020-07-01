import React from 'react'
import { Card, CardTitle, CardText, Container } from 'reactstrap'
import petitionLinks from './PetitionsObj'

export default function Petitions() {
    return (
        <Container className="donate">
            <h1 className="main-header">PETITIONS</h1>
            <Card className="info-card" body>
                <CardTitle className="title-header"><strong>{petitionLinks.breonnaTaylor.title}</strong></CardTitle>
                <CardText>{petitionLinks.breonnaTaylor.desc}</CardText>
                <a className="page-link" href={petitionLinks.breonnaTaylor.link} target="_blank" rel="noopener noreferrer">SIGN THE PETITION </a>
            </Card>
            <Card className="info-card" body>
                <CardTitle className="title-header"><strong>{petitionLinks.elijah.title}</strong></CardTitle>
                <CardText>{petitionLinks.elijah.desc}</CardText>
                <a className="page-link" href={petitionLinks.elijah.link} target="_blank" rel="noopener noreferrer">SIGN THE PETITION</a>
            </Card>
            <Card className="info-card" body>
                <CardTitle className="title-header"><strong>{petitionLinks.kadijah.title}</strong></CardTitle>
                <CardText>{petitionLinks.kadijah.desc}</CardText>
                <a className="page-link" href={petitionLinks.kadijah.link} target="_blank" rel="noopener noreferrer">SIGN THE PETITION</a>
            </Card>
            <Card className="info-card" body>
                <CardTitle className="title-header"><strong>{petitionLinks.cornelius.title}</strong></CardTitle>
                <CardText>{petitionLinks.cornelius.desc}</CardText>
                <a className="page-link" href={petitionLinks.cornelius.link} target="_blank" rel="noopener noreferrer">SIGN THE PETITION</a>
            </Card>
            <Card className="info-card" body>
                <CardTitle className="title-header"><strong>{petitionLinks.jamal.title}</strong></CardTitle>
                <CardText>{petitionLinks.jamal.desc}</CardText>
                <a className="page-link" href={petitionLinks.jamal.link} target="_blank" rel="noopener noreferrer">SIGN THE PETITION</a>
            </Card>
            <Card className="info-card" body>
                <CardTitle className="title-header"><strong>{petitionLinks.tete.title}</strong></CardTitle>
                <CardText>{petitionLinks.tete.desc}</CardText>
                <a className="page-link" href={petitionLinks.tete.link} target="_blank" rel="noopener noreferrer">SIGN THE PETITION</a>
            </Card>
            <Card className="info-card" body>
                <CardTitle className="title-header"><strong>{petitionLinks.darriusStewart.title}</strong></CardTitle>
                <CardText>{petitionLinks.darriusStewart.desc}</CardText>
                <a className="page-link" href={petitionLinks.darriusStewart.link} target="_blank" rel="noopener noreferrer">SIGN THE PETITION</a>
            </Card>
            <Card className="info-card" body>
                <CardTitle className="title-header"><strong>{petitionLinks.dafonteMiller.title}</strong></CardTitle>
                <CardText>{petitionLinks.dafonteMiller.desc}</CardText>
                <a className="page-link" href={petitionLinks.dafonteMiller.link} target="_blank" rel="noopener noreferrer">SIGN THE PETITION</a>
            </Card>
            <Card className="info-card" body>
                <CardTitle className="title-header"><strong>{petitionLinks.justiceForMatthew.title}</strong></CardTitle>
                <CardText>{petitionLinks.justiceForMatthew.desc}</CardText>
                <a className="page-link" href={petitionLinks.justiceForMatthew.link} target="_blank" rel="noopener noreferrer">SIGN THE PETITION </a>
            </Card>
            <Card className="info-card" body>
                <CardTitle className="title-header"><strong>{petitionLinks.justiceEmerald.title}</strong></CardTitle>
                <CardText>{petitionLinks.justiceEmerald.desc}</CardText>
                <a className="page-link" href={petitionLinks.justiceEmerald.link} target="_blank" rel="noopener noreferrer">SIGN THE PETITION </a>
            </Card>
            <Card className="info-card" body>
                <CardTitle className="title-header"><strong>{petitionLinks.fireJared.title}</strong></CardTitle>
                <CardText>{petitionLinks.fireJared.desc}</CardText>
                <a className="page-link" href={petitionLinks.fireJared.link} target="_blank" rel="noopener noreferrer">SIGN THE PETITION </a>
            </Card>
            <Card className="info-card" body>
                <CardTitle className="title-header"><strong>{petitionLinks.justiceForSean.title}</strong></CardTitle>
                <CardText>{petitionLinks.justiceForSean.desc}</CardText>
                <a className="page-link" href={petitionLinks.justiceForSean.link} target="_blank" rel="noopener noreferrer">SIGN THE PETITION</a>
            </Card>
            <Card className="info-card" body>
                <CardTitle className="title-header"><strong>{petitionLinks.AhmuadArbery.title}</strong></CardTitle>
                <CardText>{petitionLinks.AhmuadArbery.desc}</CardText>
                <a className="page-link" href={petitionLinks.AhmuadArbery.link} target="_blank" rel="noopener noreferrer">SIGN THE PETITION</a>
            </Card>
            <Card className="info-card" body>
                <CardTitle className="title-header"><strong>{petitionLinks.defundThePolice.title}</strong></CardTitle>
                <CardText>{petitionLinks.defundThePolice.desc}</CardText>
                <a className="page-link" href={petitionLinks.defundThePolice.link} target="_blank" rel="noopener noreferrer">SIGN THE PETITION</a>
            </Card>
            <Card className="info-card" body>
                <CardTitle className="title-header"><strong>{petitionLinks.runWithMaud.title}</strong></CardTitle>
                <CardText>{petitionLinks.runWithMaud.desc}</CardText>
                <a className="page-link" href={petitionLinks.runWithMaud.link} target="_blank" rel="noopener noreferrer">SIGN THE PETITION</a>
            </Card>
            <Card className="info-card" body>
                <CardTitle className="title-header"><strong>{petitionLinks.colorOfChange.title}</strong></CardTitle>
                <CardText>{petitionLinks.colorOfChange.desc}</CardText>
                <a className="page-link" href={petitionLinks.colorOfChange.link} target="_blank" rel="noopener noreferrer">SIGN THE PETITION</a>
            </Card>
            <Card className="info-card" body>
                <CardTitle className="title-header"><strong>{petitionLinks.weCantBreathe.title}</strong></CardTitle>
                <CardText>{petitionLinks.weCantBreathe.desc}</CardText>
                <a className="page-link" href={petitionLinks.weCantBreathe.link} target="_blank" rel="noopener noreferrer">SIGN THE PETITION</a>
            </Card>
            <Card className="info-card" body>
                <CardTitle className="title-header"><strong>{petitionLinks.naacpldf.title}</strong></CardTitle>
                <CardText>{petitionLinks.naacpldf.desc}</CardText>
                <a className="page-link" href={petitionLinks.naacpldf.link} target="_blank" rel="noopener noreferrer">SIGN THE PETITION</a>
            </Card>
        </Container>
    )
}
