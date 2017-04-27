var React = require("react");
var ReactDOM = require("react-dom");
var ReactDOMServer = require("react-dom/server");





var ErrorModal = React.createClass({ 

getDefaultProps: function () {
    return {
        title: 'Error'
    };
},

propTypes: {
    title: React.PropTypes.string,
    message: React.PropTypes.string.isRequired
},
    //componentDidMount is called after the render method
    componentDidMount: function () {
        var {title, message} = this.props;
        var modalMarkup= (
            <div id="error-modal" className="reveal tiny text-center" data-reveal="">
                <h4>{title}</h4>
                <p>{message}</p>
                <p><button className="button hollow" data-close="">  Okay  </button> </p>
            </div>
        );
       
            
        var $modal = $(ReactDOMServer.renderToString(modalMarkup));
        $(ReactDOM.findDOMNode(this)).html($modal);

    
        //need to create a new instance of foundation reveal
        //need to pass in what modal you want to call, in this case that is the ID
        var modal = new Foundation.Reveal($('#error-modal'));
        //after component renders, then it will call thi modal.open() and open the id we passed in 
        
        //foundation doesnt work well weith this modal.open() call with React
        //the above steps are necessary to fix that
        modal.open();
    },
    render: function () {
       

        return(
            <div>
            
            
            </div>
        );
    }
});

module.exports = ErrorModal;