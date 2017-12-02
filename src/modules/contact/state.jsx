import ContactPage from './contact';
import contacts from '../../data/contacts'

export default {
    name: 'contact',
    url: '/contacts/:contactId',
    component: ContactPage,
    resolve: [
        {
            token: 'contact',
            deps: ['$transition$'],
            resolveFn: (trans) => {
                // Get contactId param (cast to a number)
                const contactId = Number(trans.params().contactId);
                // Fetch data
                return contacts.find(contact => contact.id === contactId)
            }
        }
    ]
};