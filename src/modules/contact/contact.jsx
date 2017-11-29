import React, { Component } from 'react';
import { UISref } from '@uirouter/react';

export class ContactPage extends Component {

    // Get contact resolve from the component props
    contact = this.props.resolves.contact;

    render() {
        return (
            <div>
                <h1>
                    {this.contact.name}
                </h1>
                <p>
                    Age: {this.contact.age}
                </p>
                <p>
                    Country: {this.contact.country}
                </p>
                <p>
                    <UISref to="contacts"><a>Back to Contacts</a></UISref>
                </p>
            </div>
        );
    }

}

export default ContactPage;