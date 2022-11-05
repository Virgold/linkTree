import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function ContactButton({btnAddress,btnTitle,btnRef}) {
  return (
    <div className='d-grid gap-2'>
    <Button className='linkBtn' id={btnRef} size="lg">
        <Link style={{textDecoration:"none", color:"#101828"}} to={btnAddress}>
        {btnTitle}
        </Link>
    </Button>
</div>
  )
}

export default ContactButton