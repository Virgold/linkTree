import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import '../App.css'
import Card from './Cards';

function LinkCard() {
    return (
        <>
            <div className='d-flex flex-column gap-4'>
                <Col>
                    <Card
                        linkTitle="Twitter Link"
                        linkAddress="https://training.zuri.team/"
                    />
                </Col>
                <Col>
                    <Card
                        linkTitle="Zuri Team"
                        linkAddress="http://books.zuri.team"
                    />
                </Col>
                <Col>

                    <Card
                        linkTitle="Zuri Books"
                        linkAddress="https://training.zuri.team/"
                    />
                </Col>
                <Col>

                    <Card
                        linkTitle="Python Books"
                        linkAddress="https://books.zuri.team/python-for-beginners?ref_id=<CHUKWUMA ONUOHA!>"
                    />
                </Col>
                <Col>

                    <Card
                        linkTitle="Background check for coders"
                        linkAddress="https://training.zuri.team/"
                    />
                </Col>
                <Col>

                    <Card
                        linkTitle="Design Books"
                        linkAddress="https://training.zuri.team/"
                    />
                </Col>
            </div>
        </>
    )
}

export default LinkCard