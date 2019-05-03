import React, {Component} from 'react';

class About extends Component {
    render() {
        return (
            <div className="container">
                <h1 className="fancy-logo">ABOUT & CONTACT</h1>
                <div className="todo-list">
                    <p><strong>Impressum</strong></p>

                    <p>Max Meister</p>
                    <p>Schönhauser Allee 80, 10439 Berlin</p>
                    <p>Telefon: +49 30 123456, Fax: +49 30 123456</p>
                    <p>Email: kontakt@max-meister.de</p>
                    <p>Internet: www.max-meister.de</p>
                    <p>Wenn vorhanden: Umsatzsteueridentifikationsnummer gemäß § 27a Umsatzsteuergesetz: DE
                        63527364839</p>
                    <form id="contact_form">
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="firstName">First Name</label>
                                <input type="text" id="firstName" className="form-control" placeholder="First name"/>
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="lastName">Last Name</label>
                                <input type="text" id="lastName" className="form-control" placeholder="Last name"/>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="inputEmail4">Email</label>
                                <input type="email" className="form-control" id="inputEmail4" placeholder="Email"/>
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="inputAddress">Address</label>
                                <input type="text" className="form-control" id="inputAddress"
                                       placeholder="1234 Main St"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="title">Title</label>
                            <input type="text" name="title" className="form-control" placeholder="Title of Message"
                                   id="title" size="50" required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">My Message</label>
                            <textarea name="message" className="form-control" id="message" rows="6" cols="48"
                                      form="contact_form" placeholder="Your Message Here" required/>

                        </div>

                        <input type="submit" value="Submit" className="btn btn-primary"/>
                    </form>
                </div>

            </div>
        );
    }
}

export default About;