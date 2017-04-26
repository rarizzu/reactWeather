var React = require("react");


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
        //need to create a new instance of foundation reveal
        //need to pass in what modal you want to call, in this case that is the ID
        var modal = new Foundation.Reveal($('#error-modal'));
        //after component renders, then it will call thi modal.open() and open the id we passed in 
        modal.open();
    },
    render: function () {
        var {title, message} = this.props;
        return (
            //must set data-revel and data-close to empty strings
            <div id="error-modal" className="reveal tiny text-center" data-reveal="">
                <h4>{title}</h4>
                <p>{message}</p>
                <p><button className="button hollow" data-close="">  Okay  </button> </p>
            </div>
        );
    }
});

module.exports = ErrorModal;