var React = require("react");
var {Link, IndexLink} = require('react-router');


var Nav = React.createClass({

onSearch: function (e) {
    e.preventDefault();
    var location = this.refs.location.value;
    //if you are including a ref or variable in a URL query (API call in this case)
    //you need to encode the URI
    var encodedLocation = encodeURIComponent(location);

    if (location.length > 0 ){
        this.refs.location.value= "";
        //window.location below will pop that encodedLocation query string into the URL
        //this will not automatically make an API call though
        //the below is the new prop that is sent to the URL which is related to the weather.jsx
        window.location.hash ='#/?location=' + encodedLocation;
        
    }

},
render: function () {
return (
    //create top var with foundation
    <div className="top-bar">
        <div className="top-bar-left">
            <ul className="menu">
                <li className="menu-text">React Weather App</li>
                <li>    <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight:"bold"}}>Get Weather</IndexLink>  </li>
                <li>    <Link to="/about" activeClassName="active" activeStyle={{fontWeight:"bold"}}>About</Link>   </li>
                <li>    <Link to="/examples" activeClassName="active" activeStyle={{fontWeight:"bold"}}>Examples</Link>   </li>
            </ul>
        </div>
        <div className="top-bar-right">
            <form onSubmit ={this.onSearch}>
                <ul className="menu">
                    <li>
                        <input type="search" placeholder="Search Weather" ref="location" />
                    </li>

                    <li>
                        <input type="submit" className="button" value="Get Weather" />
                    
                    </li>
                
                
                
                </ul>
            
            </form>
        </div>
    </div>

        );
    }
}) 
module.exports = Nav;

