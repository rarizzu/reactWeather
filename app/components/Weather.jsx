var React = require("react");
var Message= require("Message");
var Form = require("Form");
var openWeatherMap = require("openWeatherMap");


var Weather = React.createClass({

    getInitialState: function () {
        return {
            isLoading: false
        }
    },

    handleSearch: function (location) {
        var that = this;

        
        this.setState ({
            isLoading : true
        })

        openWeatherMap.getTemp(location).then(function (temp) {
                //success logic
               that.setState({
                    location: location,
                    temp: temp,
                    isLoading : false
               });

        }, function (errorMessage) {
                //failure logic
                that.setState({
                    isLoading: false
                })
                alert(errorMessage);
        });
    },
    render: function () {

        var {isLoading, temp, location} = this.state;

        function renderMessage () {
            if (isLoading) {
                return <h3 className="text-center">Fetching Weather...</h3>
            }
            else if (temp && location) {
                return <Message temp={temp} location={location}/>
            }
        }

        return (
           
            <div>
             <h1 className="text-center">Get Weather</h1>
                <Form onSearch={this.handleSearch} />
                {renderMessage()}
            </div>
        );
    }
});

module.exports= Weather;