import Ember from 'ember';
import ResetScrollMixin from '../mixins/reset-scroll';
import Analytics from 'ember-osf/mixins/analytics';

/**
 * @module ember-preprints
 * @submodule routes
 */

/**
 * Loads all preprint providers to search page
 * @class Discover Route Handler
 */
export default Ember.Route.extend(Analytics, ResetScrollMixin, {
    queryParams: {
        queryString: {
            replace: true
        }
    },
    model() {
        return this
            .get('store')
            .findAll('preprint-provider', { reload: true });
    },
    actions: {
        willTransition() {
            let controller = this.controllerFor('discover');
            controller._clearFilters();
            controller._clearQueryString();
        }
    }
});
