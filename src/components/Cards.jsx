import React from 'react';
import Button from 'react-bootstrap/Button';
import '../App.css'

function Card({linkAddress,linkTitle,linkRef}) {
    return (

        <div className='d-grid gap-2'>
            <Button className='linkBtn' id={linkRef} size="lg">
                <a style={{textDecoration:"none", color:"#101828"}} href={linkAddress} target="_blank">
                {linkTitle}
                </a>
            </Button>
        </div>
    )
}

export default Card