import 'fetch-ie8';
import m from 'mithril';
import T from 's-types';
import GettingStarted from './views/_GettingStarted.js';
import Examples from './views/_Examples.js';

T.disabled = window.location.hostname !== 'localhost';

const routes = {
	'/': Examples,
	'/gettingstarted': GettingStarted,
	'/examples': Examples,
	'/examples/:param': Examples
};

m.route.prefix('');
m.route(document.getElementById('app'), '/', routes);