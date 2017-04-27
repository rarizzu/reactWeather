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
            errorMessage : undefined,
            location: undefined,
            temp: undefined
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

    componentDidMount: function () {
        //.query comes with react router and allows your to access URL query strings.
        //this query string came from the example page in our <Link> </Link>
          //the first .location always stays, the last .location is what will change depedning on what you name your query string
        var location = this.props.location.query.location;
       
        if (location && location.length > 0) {
            this.handleSearch(location);
            //after API call is made, clear the query string and bring us back to this homepage
            window.location.hash = '#/';

        }

    },

//gets called anytime this components props get updated. this case, since the nav component is within this weather component URL
//you need to watch for an update in props, which is what the below does
//if a new prop is passed to this component, this function will fire and find the 
//new value in the query string, and then pass it to the API handleSearch function 
    componentWillReceiveProps: function (newProps) {
        var location = newProps.location.query.location;
       
        if (location && location.length > 0) {
            this.handleSearch(location);
            //after API call is made, clear the query string and bring us back to this homepage
            window.location.hash = '#/';
        }

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