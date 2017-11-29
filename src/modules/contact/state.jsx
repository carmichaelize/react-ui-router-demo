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
            resolveFn: (trans) => contacts.find(contact => contact.id === Number(trans.params().contactId))
        }
    ]
};