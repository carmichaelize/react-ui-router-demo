import { UIRouterReact, servicesPlugin, hashLocationPlugin } from '@uirouter/react';

// States
import contact from './modules/contact/state';
import contacts from './modules/contacts/state';

// Create instance + router setup
export const router = new UIRouterReact();
router.plugin(servicesPlugin);
router.plugin(hashLocationPlugin);

// Register each state
const appStates = [
    contact,
    contacts
];
appStates.forEach(state => router.stateRegistry.register(state));

// Set initial and fallback states
router.urlService.rules.initial({ state: 'contacts' });
router.urlService.rules.otherwise({ state: 'contacts' });

router.transitionService.onBefore(true, function(trans) {
    console.log('Nav Start');
    // Do something before transition
});

router.transitionService.onSuccess(true, function(trans) {
    console.log('Nav End');
    // Do something after transition
});

router.transitionService.onError(true, function(err) {
    console.log('Nav Error', err);
    // Do something if transition errors
});

// Start the router
router.start();

// Alias state and param services
export let $state       = router.stateService;
export let $stateParams = router.globals.params;