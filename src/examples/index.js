import stopwatchDemo from './stopwatch/demo';
import stopwatchText from './stopwatch/text';
import stopwatchCode from './stopwatch/code';

import stopwatch2Demo from './stopwatch2/demo';
import stopwatch2Text from './stopwatch2/text';
import stopwatch2Code from './stopwatch2/code';

import stopwatch3Demo from './stopwatch3/demo';
import stopwatch3Text from './stopwatch3/text';
import stopwatch3Code from './stopwatch3/code';

import rotatorDemo from './rotator/demo';
import rotatorText from './rotator/text';
import rotatorCode from './rotator/code';

import markdownDemo from './markdown/demo';
import markdownText from './markdown/text';
import markdownCode from './markdown/code';

import autogrowDemo from './autogrow/demo';
import autogrowText from './autogrow/text';
import autogrowCode from './autogrow/code';

import passwordDemo from './password/demo';
import passwordText from './password/text';
import passwordCode from './password/code';

import cartDemo from './cart/demo';
import cartText from './cart/text';
import cartCode from './cart/code';

import todoDemo from './todo/demo';
import todoText from './todo/text';
import todoCode from './todo/code';

const tag = {
	closureComponent: { name: 'Closure Component', url: 'https://mithril.js.org/components.html#closure-components' },
	dom: { name: 'DOM', url: 'https://mithril.js.org/lifecycle-methods.html#oncreate' }, // TODO: find better url for this
	keys: { name: 'Keys', url: 'https://mithril.js.org/keys.html' },
	lifecycle: { name: 'Lifecycle Hooks', url: 'https://mithril.js.org/lifecycle-methods.html' },
	link: { name: 'm.route.link', url: 'https://mithril.js.org/route.html#mroutelink' },
	redraw: { name: 'm.redraw', url: 'https://mithril.js.org/redraw.html' },
	request: { name: 'm.request', url: 'https://mithril.js.org/request.html' },
	route: { name: 'm.route', url: 'https://mithril.js.org/route.html' },
	trust: { name: 'm.trust', url: 'https://mithril.js.org/trust.html' },
	stream: { name: 'Stream', url: 'https://mithril.js.org/stream.html' },
	svg: { name: 'SVG', url: 'https://mithril.js.org/hyperscript.html#svg-and-mathml' },
	withAttr: { name: 'm.withAttr', url: 'https://mithril.js.org/withAttr.html' }
};

const examples = [
	{
		title: 'Stopwatch', // must be unique
		demo: stopwatch2Demo,
		tags: [tag.closureComponent, tag.lifecycle, tag.redraw],
		isOpen: false,
		description: [
			{
				text: stopwatchText,
				demo: stopwatchDemo,
				code: stopwatchCode
			},
			{
				text: stopwatch2Text,
				demo: stopwatch2Demo,
				code: stopwatch2Code
			},
			{
				text: stopwatch3Text,
				demo: stopwatch3Demo,
				code: stopwatch3Code,
				noTabs: true
			}
		]
	},
	{
		title: 'List Rotator',
		demo: rotatorDemo,
		tags: [tag.closureComponent, tag.keys],
		isOpen: false,
		description: [
			{
				text: rotatorText,
				demo: rotatorDemo,
				code: rotatorCode
			}
		]
	},
	{
		title: 'Markdown',
		demo: markdownDemo,
		tags: [tag.closureComponent, tag.stream, tag.trust, tag.withAttr],
		isOpen: false,
		description: [
			{
				text: markdownText,
				demo: markdownDemo,
				code: markdownCode
			}
		]
	},
	{
		title: 'Autogrow Textarea',
		demo: autogrowDemo,
		tags: [tag.closureComponent, tag.dom, tag.lifecycle, tag.stream, tag.withAttr],
		isOpen: false,
		description: [
			{
				text: autogrowText,
				demo: autogrowDemo,
				code: autogrowCode
			}
		]
	},
	{
		title: 'Password Input',
		demo: passwordDemo,
		tags: [tag.closureComponent, tag.stream, tag.withAttr],
		isOpen: false,
		description: [
			{
				text: passwordText,
				demo: passwordDemo,
				code: passwordCode
			}
		]
	},
	{
		title: 'Shopping Cart',
		demo: cartDemo,
		tags: [tag.closureComponent, tag.keys, tag.request, tag.stream, tag.withAttr],
		isOpen: false,
		description: [
			{
				text: cartText,
				demo: cartDemo,
				code: cartCode
			}
		]
	},
	{
		title: 'To-do List',
		demo: todoDemo,
		tags: [tag.closureComponent, tag.stream, tag.withAttr],
		isOpen: false,
		description: [
			{
				text: todoText,
				demo: todoDemo,
				code: todoCode
			}
		]
	}
];

export default examples;