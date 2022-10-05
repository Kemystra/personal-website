const React = require("react");
const ReactDOM = require("react-dom/client");

const Tile = props => {
    return <div className="tile"></div>
};

var res = Array.from({ length: 100 }).map((e, index) => <Tile key={index}/>);

const root = ReactDOM.createRoot(document.getElementById("background"));
root.render(res);