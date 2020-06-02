import React from 'react'
import { Card, CardTitle, CardText } from 'reactstrap'
import donateLink from './DonateObj'

export default function Donate() {
    return (
        <div>
            <h1>Donate</h1>
            <Card body>
                <CardTitle>{donateLink.georgeFloydMem.title}</CardTitle>
                <CardText>{donateLink.georgeFloydMem.desc}</CardText>
                <a href={donateLink.georgeFloydMem.link} target="_blank">Donate</a>
            </Card>
            <Card body>
                <CardTitle>{donateLink.indyBailFund.title}</CardTitle>
                <CardText>{donateLink.indyBailFund.desc}</CardText>
                <a href={donateLink.indyBailFund.link} target="_blank">Donate</a>
            </Card>
            <Card body>
                <CardTitle>{donateLink.nationalBailFund.title}</CardTitle>
                <CardText>{donateLink.nationalBailFund.desc}</CardText>
                <a href={donateLink.nationalBailFund.link} target="_blank">Donate</a>
            </Card>
            <Card body>
                <CardTitle>{donateLink.campaignZero.title}</CardTitle>
                <CardText>{donateLink.campaignZero.desc}</CardText>
                <a href={donateLink.campaignZero.link} target="_blank">Donate</a>
            </Card>
            <Card body>
                <CardTitle>{donateLink.minnesotaFreeFund.title}</CardTitle>
                <CardText>{donateLink.minnesotaFreeFund.desc}</CardText>
                <a href={donateLink.minnesotaFreeFund.link} target="_blank">Donate</a>
            </Card>
            <Card body>
                <CardTitle>{donateLink.blackVisionsCollective.title}</CardTitle>
                <CardText>{donateLink.blackVisionsCollective.desc}</CardText>
                <a href={donateLink.blackVisionsCollective.link} target="_blank">Donate</a>
            </Card>
            <Card body>
                <CardTitle>{donateLink.reclaimBlock.title}</CardTitle>
                <CardText>{donateLink.reclaimBlock.desc}</CardText>
                <a href={donateLink.reclaimBlock.link} target="_blank">Donate</a>
            </Card>
            <Card body>
                <CardTitle>{donateLink.unicornRiot.title}</CardTitle>
                <CardText>{donateLink.unicornRiot.desc}</CardText>
                <a href={donateLink.unicornRiot.link} target="_blank">Donate</a>
            </Card>
        </div>
    )
}