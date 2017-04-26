var React = require("react");

var About =  (props) => {
        return (
            <div>
                <h1 className="text-center page-title">About Component</h1>
                <p> Welcome to the about page. This is a brief description about the services the services we provide. </p>
                <p>Here are some of the tools that I used</p>
                <ul>
                    <li>
                        <a href="https://facebook.github.io/react">React</a> This was the
                        Javascript framework that was used. 
                    </li>
                    <li>
                        <a href="http://openweathermap.org">Open Weather Map</a> I used open weather map to search by city name
                    
                    </li>
                
                </ul>
            
            
            </div>
        ) 
};

module.exports= About;