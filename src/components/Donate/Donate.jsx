import React from 'react'
import { Card, CardTitle, CardText, Container } from 'reactstrap'
import donateLink from './DonateObj'

export default function Donate() {
    return (
        <Container className="donate">
            <h1 className="main-header">DONATE</h1>
            <Card className="info-card" body>
                <CardTitle className="title-header"><strong>{donateLink.blm.title}</strong></CardTitle>
                <CardText>{donateLink.blm.desc}</CardText>
                <a href={donateLink.blm.link} target="_blank" rel="noopener noreferrer">DONATE</a>
            </Card>
            <Card className="info-card" body>
                <CardTitle className="title-header"><strong>{donateLink.snap4freedom.title}</strong></CardTitle>
                <CardText>{donateLink.snap4freedom.desc}</CardText>
                <a href={donateLink.snap4freedom.link} target="_blank" rel="noopener noreferrer">DONATE</a>
            </Card>
            <Card className="info-card" body>
                <CardTitle className="title-header"><strong>{donateLink.blackAidsInstitute.title}</strong></CardTitle>
                <CardText>{donateLink.blackAidsInstitute.desc}</CardText>
                <a href={donateLink.blackAidsInstitute.link} target="_blank" rel="noopener noreferrer">DONATE</a>
            </Card>
            <Card className="info-card" body>
                <CardTitle className="title-header"><strong>{donateLink.houseGG.title}</strong></CardTitle>
                <CardText>{donateLink.houseGG.desc}</CardText>
                <a href={donateLink.houseGG.link} target="_blank" rel="noopener noreferrer">DONATE</a>
            </Card>
            <Card className="info-card" body>
                <CardTitle className="title-header"><strong>{donateLink.transJustice.title}</strong></CardTitle>
                <CardText>{donateLink.transJustice.desc}</CardText>
                <a href={donateLink.transJustice.link} target="_blank" rel="noopener noreferrer">DONATE</a>
            </Card>
            <Card className="info-card" body>
                <CardTitle className="title-header"><strong>{donateLink.okraProject.title}</strong></CardTitle>
                <CardText>{donateLink.okraProject.desc}</CardText>
                <a href={donateLink.okraProject.link} target="_blank" rel="noopener noreferrer">DONATE</a>
            </Card>
            <Card className="info-card" body>
                <CardTitle className="title-header"><strong>{donateLink.equalJustice.title}</strong></CardTitle>
                <CardText>{donateLink.equalJustice.desc}</CardText>
                <a href={donateLink.equalJustice.link} target="_blank" rel="noopener noreferrer">DONATE</a>
            </Card>
            <Card className="info-card" body>
                <CardTitle className="title-header"><strong>{donateLink.indyBailFund.title}</strong></CardTitle>
                <CardText>{donateLink.indyBailFund.desc}</CardText>
                <a href={donateLink.indyBailFund.link} target="_blank" rel="noopener noreferrer">DONATE</a>
            </Card>
            <Card className="info-card" body>
                <CardTitle className="title-header"><strong>{donateLink.nationalBailFund.title}</strong></CardTitle>
                <CardText>{donateLink.nationalBailFund.desc}</CardText>
                <a href={donateLink.nationalBailFund.link} target="_blank" rel="noopener noreferrer">DONATE</a>
            </Card>
            <Card className="info-card" body>
                <CardTitle className="title-header"><strong>{donateLink.blackFuturesLab.title}</strong></CardTitle>
                <CardText>{donateLink.blackFuturesLab.desc}</CardText>
                <a href={donateLink.blackFuturesLab.link} target="_blank" rel="noopener noreferrer">DONATE</a>
            </Card>
            <Card className="info-card" body>
                <CardTitle className="title-header"><strong>{donateLink.innocence.title}</strong></CardTitle>
                <CardText>{donateLink.innocence.desc}</CardText>
                <a href={donateLink.innocence.link} target="_blank" rel="noopener noreferrer">DONATE</a>
            </Card>
            <Card className="info-card" body>
                <CardTitle className="title-header"><strong>{donateLink.duNord.title}</strong></CardTitle>
                <CardText>{donateLink.duNord.desc}</CardText>
                <a href={donateLink.duNord.link} target="_blank" rel="noopener noreferrer">DONATE</a>
            </Card>
            <Card className="info-card" body>
                <CardTitle className="title-header"><strong>{donateLink.georgeFloydMem.title}</strong></CardTitle>
                <CardText>{donateLink.georgeFloydMem.desc}</CardText>
                <a href={donateLink.georgeFloydMem.link} target="_blank" rel="noopener noreferrer">DONATE</a>
            </Card>
            <Card className="info-card" body>
                <CardTitle className="title-header"><strong>{donateLink.unicornRiot.title}</strong></CardTitle>
                <CardText>{donateLink.unicornRiot.desc}</CardText>
                <a href={donateLink.unicornRiot.link} target="_blank" rel="noopener noreferrer">DONATE</a>
            </Card>
            <Card className="info-card" body>
                <CardTitle className="title-header"><strong>{donateLink.committeeJourn.title}</strong></CardTitle>
                <CardText>{donateLink.committeeJourn.desc}</CardText>
                <a href={donateLink.committeeJourn.link} target="_blank" rel="noopener noreferrer">DONATE</a>
            </Card>
            <Card className="info-card" body>
                <CardTitle className="title-header"><strong>{donateLink.southernPov.title}</strong></CardTitle>
                <CardText>{donateLink.southernPov.desc}</CardText>
                <a href={donateLink.southernPov.link} target="_blank" rel="noopener noreferrer">DONATE</a>
            </Card>
            <Card className="info-card" body>
                <CardTitle className="title-header"><strong>{donateLink.naacp.title}</strong></CardTitle>
                <CardText>{donateLink.naacp.desc}</CardText>
                <a href={donateLink.naacp.link} target="_blank" rel="noopener noreferrer">DONATE</a>
            </Card>
            <Card className="info-card" body>
                <CardTitle className="title-header"><strong>{donateLink.npap.title}</strong></CardTitle>
                <CardText>{donateLink.npap.desc}</CardText>
                <a href={donateLink.npap.link} target="_blank" rel="noopener noreferrer">DONATE</a>
            </Card>
            <Card className="info-card" body>
                <CardTitle className="title-header"><strong>{donateLink.smallBusiness.title}</strong></CardTitle>
                <CardText>{donateLink.smallBusiness.desc}</CardText>
                <a href={donateLink.smallBusiness.link} target="_blank" rel="noopener noreferrer">DONATE</a>
            </Card>
            <Card className="info-card" body>
                <CardTitle className="title-header"><strong>{donateLink.loveLand.title}</strong></CardTitle>
                <CardText>{donateLink.loveLand.desc}</CardText>
                <a href={donateLink.loveLand.link} target="_blank" rel="noopener noreferrer">DONATE</a>
            </Card>
            <Card className="info-card" body>
                <CardTitle className="title-header"><strong>{donateLink.againstPoliceBrutality.title}</strong></CardTitle>
                <CardText>{donateLink.againstPoliceBrutality.desc}</CardText>
                <a href={donateLink.againstPoliceBrutality.link} target="_blank" rel="noopener noreferrer">DONATE</a>
            </Card>
            <Card className="info-card" body>
                <CardTitle className="title-header"><strong>{donateLink.fairFight.title}</strong></CardTitle>
                <CardText>{donateLink.fairFight.desc}</CardText>
                <a href={donateLink.fairFight.link} target="_blank" rel="noopener noreferrer">DONATE</a>
            </Card>
            <Card className="info-card" body>
                <CardTitle className="title-header"><strong>{donateLink.brennanCenter.title}</strong></CardTitle>
                <CardText>{donateLink.brennanCenter.desc}</CardText>
                <a href={donateLink.brennanCenter.link} target="_blank" rel="noopener noreferrer">DONATE</a>
            </Card>
        </Container>
    )
}