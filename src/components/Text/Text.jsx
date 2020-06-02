import React from 'react'
import { Card, CardTitle, Container } from 'reactstrap'

export default function Text() {
    return (
        <Container className="donate">
            <h1 className="main-header">Text</h1> 
            <Card className="info-card" body>
                <CardTitle>TEXT <strong>JUSTICE</strong> TO 668366</CardTitle>
            </Card>
            <Card className="info-card" body>
                <CardTitle>TEXT <strong>FLOYD</strong> TO 55156</CardTitle>
            </Card>
            <Card className="info-card" body>
                <CardTitle>TEXT <strong>RESIST</strong> TO 50409</CardTitle>
            </Card>
            <Card className="info-card" body>
                <CardTitle>TEXT <strong>ENOUGH</strong> TO 55156</CardTitle>
            </Card>
            <Card className="info-card" body>
                <CardTitle>TEXT <strong>TONYMCDADE</strong> TO 484848</CardTitle>
            </Card>
        </Container>
    )
}
