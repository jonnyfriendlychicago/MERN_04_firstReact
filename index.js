const App = React.createElement("h1", {}, "Jonny! don't think... REACTx" );
                
ReactDOM.render(App, document.getElementById("root"));

const myNestedReactComponent = React.createElement("div", {}, React.createElement("p", {}, "This element is nested"))
ReactDOM.render(myNestedReactComponent, document.getElementById("root2"));
                
//  below uses the new arrow function
const App2 = () => { 
return React.createElement("h2", {}, "Jonny! Go now!" );
}

ReactDOM.render(App2(), document.getElementById("root3"));

// ---------------------

const Appx = () => {
// Here we simply created a function that returns a new React element
return React.createElement("h1", {}, "Our First React page has rendered");
}
/* 
*  SIDE NOTE:
*  Because the function above returns 1 thing, we can re-write this function in 1 line:
*  const App = () => React.createElement("h1", {}, "Our First React page has rendered");
*/
// Then we call the function that returns the element that we intend to render.
ReactDOM.render(Appx(), document.getElementById("root"));
// Though, take a mental note on how we are firing the App function just like any other function

// -------------------

// Notice the HTML syntax here. Although this may look like regular HTML, it's actually not. 
ReactDOM.render(<h1>Hello!</h1>, document.getElementById("root"));
// **Here is what the Babel translation looks like**
ReactDOM.render(React.createElement("h1", null, "Hello World"), document.getElementById("root"));

const AppY= () => <h1>Our First React page has rendered</h1>;
// Notice The difference in syntax. Here we've created a React Functional Component, named AppY which looks 
// like regular HTML syntax
ReactDOM.render(<AppY></AppY>, document.getElementById("root"));
// Instead of the traditional way we are familiar with firing a function - App() -
// we wrap our function name in an HTML tag instead - <App /> -


