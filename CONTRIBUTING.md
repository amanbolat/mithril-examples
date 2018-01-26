# Contributing

1. Submit your idea in an issue (including example code).
2. View the format of the existing examples in `src/examples/**` and `src/examples/index.js`.
3. Fork this repo.
4. Add a folder for your idea in `src/examples/`.
5. Create `text.js`, `code.js`, and `demo.js` within that folder.
  - `text.js` should export a string (or anything that mithril can render, like an array of strings or mithril vnodes). This will be the description of your example. If your module is simple enough to not need a description, export an empty string from `text.js`.
  - `code.js` should export an array of objects with the form: `{ id: String, code: String }`. These will be the tabs displaying the code for your example. The `id`s can be: `"es6"` for the string of es6 code, `"es5"` for the es5 equivalent, and optionally `"css"` if your example requires some custom css. `code` should be a string produced by `src/util/codeString.js`. If your example includes css, add your css to `public/main.css` and use `codeString.css()` instead of `codeString()`.
  - `demo.js` should export a mithril component.
6. Create a jsfiddle for your demo. It should be as close to `demo.js` as possible. Fork an existing jsfiddle from the site so that you don't have to worry about which version of mithril to import.
7. Add an object to `src/examples/index.js` following the structure of the existing examples. If your demo includes multiple code samples and demos, you may need to repeat steps 4 and 5. Follow the `stopwatch` example to see how this works. The overall structure of the object you should add is below.
8. Create a pull request.

The structure of the object you will add to `src/examples/index.js` is:

```js
{
  title: String,
  demo: MithrilComponent
  // tags must come from the existing tags defined in `src/examples/index.js`
  tags: [{ name: String, url: String }],
  isOpen: Boolean, // set this to false (determines if the demo is expanded/collapsed)
  description: [{
    text: Any, // a string, array, anything that can be rendered by mithril
    demo: MithrilComponent,
    code: [{ // tabs
      id: String,
      code: String
    }],
    noTabs: Boolean?,
    fiddle: String? // a jsfiddle id
  }]
}
```

In use, it looks something like this:

```js
{
  title: 'To-do List',
  demo: todoDemo, // './examples/todo/demo.js'
  tags: [tag.closureComponent, tag.stream, tag.withAttr],
  isOpen: false,
  description: [
    {
      text: todoText, // './examples/todo/text.js'
      demo: todoDemo, // './examples/todo/demo.js',
      code: todoCode  // './examples/todo/code.js'
    }
  ]
}
```

- Run `npm start` to start the local server.
- Run `npm run watch` to bundle the code and continue watching for incremental builds.
- Run `npm run lint` and make sure there are no linting errors or warnings in your changes prior to making a pull request.

When adding text descriptions for code examples in `src/examples/**/text.js`, you can use `src/util/markup.js` to help format the text. This provides a minimal markdown-like syntax for formatting links `[title](url)`, code `` `var x = 5` ``, and unordered lists `* list item`.



# Todo

- Add jsx syntax to refactored examples
- Finish refactoring examples in `src/examples/old/...`
- Allow filtering examples by tags
- Fix markup.js bug that requires todo/text.js to have `` `dom` `` on its own line
- Find better url for `tags.dom`
- Fix AudioContext close bug in morse player

# Ideas

- Applications: chat app
- Applications: calculator
- Request: loading indicator & error state
- Request: file upload progress (simulate)
- Request: m.jsonp
- Components: custom checkbox
- Components: collapser
- Components: tree view
- Components: notification (trigger with function)
- Components: slider
- Components: debounced typing indicator
- Components: undo/redo in editor or game
- Components: multiple stream examples that use full stream api
