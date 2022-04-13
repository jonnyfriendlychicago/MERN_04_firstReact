const App = React.createElement("h1", {}, "Jonny! don't think... REACTx" );
                
ReactDOM.render(App, document.getElementById("root"));

const myNestedReactComponent = React.createElement("div", {}, React.createElement("p", {}, "This element is nested"))
ReactDOM.render(myNestedReactComponent, document.getElementById("root2"));
                
//  below uses the new arrow function
const App2 = () => { 
return React.createElement("h2", {}, "Jonny! Go now!" );
}

ReactDOM.render(App2(), document.getElementById("root3"));