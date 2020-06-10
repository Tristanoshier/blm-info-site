import React from 'react'
import { Container, Card, CardTitle, CardText } from 'reactstrap';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="home">
            <div style={{ marginTop: 40 }}>
                <h1 className="title-text first-text">NO JUSTICE</h1>
                <h1 className="title-text second-text">NO PEACE</h1>
                <h1 className="title-text third-text">BLACK LIVES MATTER</h1>
            </div>
            <Container className="help">
                <Card className="home-card" body>
                    <CardTitle className="home-header">DONATE</CardTitle>
                    <Link to="/donate" className="home-link">DONATE HERE</Link>
                </Card>
                <Card className="home-card" body>
                    <CardTitle className="home-header">SIGN PETITIONS</CardTitle>
                    <Link to="/petitions" className="home-link">SIGN HERE</Link>
                </Card>
                <Card className="home-card" body>
                    <CardTitle className="home-header">TEXT</CardTitle>
                    <Link to="/text" className="home-link">TEXT HERE</Link>
                </Card>
                <Card className="home-card" body>
                    <CardTitle className="home-header">PEACEFULLY PROTEST</CardTitle>
                    <CardText><i>“We must not allow our creative protest to degenerate into physical violence.”</i><br /> Martin Luther King Jr.</CardText>
                </Card>
            </Container>
        </div>
    )
}
