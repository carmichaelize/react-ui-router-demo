import ContactsPage from './contacts';
import contacts from '../../data/contacts'

export default {
  	name: 'contacts',
  	url: '/contacts',
  	component: ContactsPage,
    resolve: [
        {   
            token: 'contacts',
            resolveFn: (trans) => contacts
        }
    ]
};