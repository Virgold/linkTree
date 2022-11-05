import React from 'react'
import Footer from '../components/Footer'
import FormData from '../components/Form'

function ContactMe() {
    return (
        <div className='py-5 d-flex flex-column gap-5 align-items-around'>

            <div className='container form p-md-5 p-3'>
                <header className='d-flex flex-column gap-2 mb-5'>
                    <h3>Contact Me</h3>
                    <p>Hi there, contact me to ask me about anything you have in mind.</p>
                </header>
                <FormData />
            </div>

            <div className='container-fluid'>
                <Footer />
            </div>

        </div>
    )
}

export default ContactMe