const header = React.createElement("h1", {id:"header"}, "Hello World from React!");
console.log(header)
const root = ReactDOM.createRoot(document.getElementById("root2"));
console.log(typeof(root))
root.render(header);

{/* <div id="parent">
    <div id="child1">
        <h1>This is a heading</h1>
        <p>This is a paragraph</p>
    </div>
    <div id="child2">
        <h1>This is a heading</h1>
        <p>This is a paragraph</p>
    </div>
</div> */}

const parent = React.createElement('div',{
    id: "parent"
}, [
        React.createElement('div', {id: "child1"}, [
        React.createElement('h1',{},"This is a heading"),
        React.createElement('p',{},'This is a paragraph')
        ]),
        React.createElement('div', {id: "child2"}, [
        React.createElement('h1',{},"This is a heading"),
        React.createElement('p',{},'This is a paragraph')
        ])
    ])
root.render(parent)