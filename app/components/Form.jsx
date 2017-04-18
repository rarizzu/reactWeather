var React = require("react");

var Form = React.createClass({
    onFormSubmit: function (e) {
        e.preventDefault();

        var location = this.refs.location.value;

        if (location.length > 0) {
            this.refs.location.value = "";
            this.props.onSearch(location);
        
        }
    },

    render : function () {
        return (
            <div>
                <div class="form-group">
                <h1> Get Some GD Weather</h1>
                    <form onSubmit={this.onFormSubmit}>
                        <input type="text" class="form-control" ref="location"/>
                        <button class="btn btn-primary">Get Weather</button>
                    </form>   
                </div>            
            </div>

        );
    }
});



module.exports= Form;