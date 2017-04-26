//GreeterMessage========
var React = require('react');
var ReactDOM = require("react-dom");
var {Route, Router, IndexRoute, hashHistory}= require("react-router");
var Main= require("Main");
var Weather = require("Weather");
var About = require("About");
var Examples = require("Examples");


//when returning jsx using render, you can only return one root html element. example, cant add two seperate divs

//load foundation
//the style! and css! is a loader that is neeeded to properly load in a css file
require("style!css!foundation-sites/dist/foundation.min.css")
// start foundation
$(document).foundation();

//Include app.css file
require('style!css!applicationStyles');

ReactDOM.render(
      <Router history={hashHistory}> 
          <Route path="/" component={Main}>
            <Route path="about" component={About}/>
            <Route path="examples" component={Examples}/>
            <IndexRoute component={Weather}/>
          </Route>
      </Router>,
        document.getElementById('app')
    );