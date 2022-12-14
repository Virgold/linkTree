import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import '../App.css'
import Card from './Cards';
import ContactButton from './ContactButton';
import Workplace from './Workplace';

function LinkCard() {
    return (
        <>
            <div className='d-flex flex-column gap-4 mt-3'>
                <Col>
                    <Card
                        linkTitle="Twitter Link"
                        linkAddress="https://twitter.com/KngVirgo"
                        linkRef="twitter"
                    />
                </Col>
                <Col>
                    <Card
                        linkTitle="Zuri Team"
                        linkAddress="https://training.zuri.team/"
                        linkRef="btn__zuri"
                    />
                </Col>
                <Col>

                    <Card
                        linkTitle="Zuri Books"
                        linkAddress="http://books.zuri.team"
                        linkRef="books"
                    />
                </Col>
                <Col>

                    <Card
                        linkTitle="Python Books"
                        linkAddress="https://books.zuri.team/python-for-beginners?ref_id=<CHUKWUMA ONUOHA>"
                        linkRef="book__python"
                    />
                </Col>
                <Col>

                    <Card
                        linkTitle="Background check for coders"
                        linkAddress="https://background.zuri.team/"
                        linkRef="pitch"
                    />
                </Col>
                <Col>

                    <Card
                        linkTitle="Design Books"
                        linkAddress="https://books.zuri.team/design-rules"
                        linkRef="book__design"
                    />
                </Col>
                <Col>
                    <ContactButton
                        btnTitle="Contact me"
                        btnAddress="/contact"
                        btnRef="contact"
                    />
                </Col>
                <Workplace />
            </div>
        </>
    )
}


export default LinkCard