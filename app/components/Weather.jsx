var React = require("react");
var Message= require("Message");
var Form = require("Form");
var openWeatherMap = require("openWeatherMap");
var ErrorModal = require("ErrorModal");


var Weather = React.createClass({

    getInitialState: function () {
        return {
            isLoading: false
        }
    },

    handleSearch: function (location) {
        var that = this;

        
        this.setState ({
            isLoading : true,
            errorMessage : undefined
        })

        openWeatherMap.getTemp(location).then(function (temp) {
                //success logic
               that.setState({
                    location: location,
                    temp: temp,
                    isLoading : false
               });

        }, function (e) {
                //failure logic
                that.setState({
                    isLoading: false,
                    errorMessage : e.message //use e because what gets passed into this is actually a javascript error object
                });
        });
    },
    render: function () {

        var {isLoading, temp, location, errorMessage} = this.state;

        function renderMessage () {
            if (isLoading) {
                return <h3 className="text-center">Fetching Weather...</h3>
            }
            else if (temp && location) {
                return <Message temp={temp} location={location}/>
            }
        }

        //make a function to conditionally render the errorModal 
        function renderError () {
            if (typeof errorMessage === 'string') {
                return (
                    //render the error modal component if errorMessage is a string
                    <ErrorModal message = {errorMessage} />
                )
            }
        }

        return (
           
            <div>
             <h1 className="text-center page-title">Get Weather</h1>
                <Form onSearch={this.handleSearch} />
                {renderMessage()}
                {renderError()}
            </div>
        );
    }
});

module.exports= Weather;