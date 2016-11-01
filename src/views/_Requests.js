import m from 'mithril';
import Page from './Page.js';
import Tabs from './Tabs.js';

import {
	code as request1,
	Component as RequestComponent1
} from '../examples/request1.js';

import {
	code as request2,
	Component as RequestComponent2
} from '../examples/request2.js';

function view() {
	return (
		m(Page, { id: 'Requests' },
			m('.Section',
				m('h2', 'Render fetched list'),
				m('p',
					m('a[href=https://github.com/lhorie/mithril.js/blob/rewrite/docs/request.md]',
						m('code.inline', 'm.request')
					),
					' performs an AJAX request against a specified url and returns a ',
					m('a[href=https://github.com/lhorie/mithril.js/blob/rewrite/docs/prop.md]', 'stream'),
					' whose value becomes the data fetched from the server.'
				),
				m('.Demo',
					m('.Demo-left',
						m(Tabs, { tabs: request1, fiddle: 'rd54g0f4' })
					),
					m('.Demo-right',
						m('.Demo-result', m(RequestComponent1))
					)
				)
			),
			m('.Section',
				m('h2', 'Equivalent using fetch api'),
				m('p',
					m('code.inline', 'm.request'),
					' is similar to the native fetch api, but adds automatic redrawing upon completion, ',
					'converts the response to JSON, and resolves to a stream. For comparison, the following ',
					'code is the equivalent of the first example, using the native fetch api instead.'
				),
				m('.Demo',
					m('.Demo-left',
						m(Tabs, { tabs: request2, fiddle: '5b1wn90n' })
					),
					m('.Demo-right',
						m('.Demo-result', m(RequestComponent2))
					)
				)
			)
		)
	);
}

const Requests = {
	view
};

export default Requests;