var React = require("react");


var Message = (props) => {
return (
            <div>
                <h3> It is {props.temp} Degrees in {props.location} !</h3>          
            </div>
        );
}


module.exports= Message;