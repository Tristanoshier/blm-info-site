import React from 'react'
import { Card, CardTitle, CardText, Container } from 'reactstrap'
import donateLink from './DonateObj'

export default function Donate() {
    return (
        <Container className="donate">
            <h1 className="main-header">DONATE</h1>
            <Card className="info-card" body>
                <CardTitle className="title-header"><strong>{donateLink.georgeFloydMem.title}</strong></CardTitle>
                <CardText>{donateLink.georgeFloydMem.desc}</CardText>
                <a href={donateLink.georgeFloydMem.link} target="_blank">DONATE</a>
            </Card>
            <Card className="info-card" body>
                <CardTitle className="title-header"><strong>{donateLink.indyBailFund.title}</strong></CardTitle>
                <CardText>{donateLink.indyBailFund.desc}</CardText>
                <a href={donateLink.indyBailFund.link} target="_blank">DONATE</a>
            </Card>
            <Card className="info-card" body>
                <CardTitle className="title-header"><strong>{donateLink.nationalBailFund.title}</strong></CardTitle>
                <CardText>{donateLink.nationalBailFund.desc}</CardText>
                <a href={donateLink.nationalBailFund.link} target="_blank">DONATE</a>
            </Card>
            <Card className="info-card" body>
                <CardTitle className="title-header"><strong>{donateLink.campaignZero.title}</strong></CardTitle>
                <CardText>{donateLink.campaignZero.desc}</CardText>
                <a href={donateLink.campaignZero.link} target="_blank">DONATE</a>
            </Card>
            <Card className="info-card" body>
                <CardTitle className="title-header"><strong>{donateLink.minnesotaFreeFund.title}</strong></CardTitle>
                <CardText>{donateLink.minnesotaFreeFund.desc}</CardText>
                <a href={donateLink.minnesotaFreeFund.link} target="_blank">DONATE</a>
            </Card>
            <Card className="info-card" body>
                <CardTitle className="title-header"><strong>{donateLink.blackVisionsCollective.title}</strong></CardTitle>
                <CardText>{donateLink.blackVisionsCollective.desc}</CardText>
                <a href={donateLink.blackVisionsCollective.link} target="_blank">DONATE</a>
            </Card>
            <Card className="info-card" body>
                <CardTitle className="title-header"><strong>{donateLink.reclaimBlock.title}</strong></CardTitle>
                <CardText>{donateLink.reclaimBlock.desc}</CardText>
                <a href={donateLink.reclaimBlock.link} target="_blank">DONATE</a>
            </Card>
            <Card className="info-card" body>
                <CardTitle className="title-header"><strong>{donateLink.unicornRiot.title}</strong></CardTitle>
                <CardText>{donateLink.unicornRiot.desc}</CardText>
                <a href={donateLink.unicornRiot.link} target="_blank">DONATE</a>
            </Card>
        </Container>
    )
}