var React=require("react");
var DatabaseChild1=require("./DatabaseChild1.js");
var Database = React.createClass({

  getInitialState: function() {
     return ({data: []});
   },

  viewMessage: function()
    {

        $.ajax({
         url: 'http://localhost:8081/message',
         dataType: 'json',
         type: 'GET',
         success: function(data)
         {
          this.setState({data:data})
         }.bind(this),
         error: function(xhr, status, err) {
           console.error(err.toString());
         }.bind(this)
      });
    },

componentDidMount:function()
{
  this.viewMessage();
},

    render: function() {

      return(
      <div>
  <DatabaseChild1 data={this.state.data}/>
      </div>
      );
    }

});
module.exports=Database;
