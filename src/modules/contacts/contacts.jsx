import React, { Component } from 'react';
import { router } from '../../router';

export class ContactsPage extends Component {

    // Get contacts resolve from the component props
    contacts = this.props.resolves.contacts;

    // Navigate to a single contact
    handler(contact) {
        return router.stateService.go('contact', {contactId: contact.id})
    }

    item(contact, i) {
        return (
            <li onClick={this.handler.bind(this, contact)} key={i}>
                {contact.name} - {contact.age} - {contact.country}
            </li>
        );
    }

    render() {
        return (
            <div>
                <h1>Contacts List</h1>
                <ul>
                    {this.contacts.map((contact, i) => this.item(contact, i))}
                </ul>
            </div>
        );
    }

}

export default ContactsPage;