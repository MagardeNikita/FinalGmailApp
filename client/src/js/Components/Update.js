var React = require('react');


var Update= React.createClass({
getInitialState: function()
{
  return({id1:'',from:'',subject:''});
}
,


componentDidMount: function()
{
//  $('#reply-subject').addClass("hidden");
  //$('#send-button').addClass("hidden");
  //$('#reply-to').addClass("hidden");
  $('#reply-message').addClass("hidden");

 var id1= this.props.id1;
//console.log(this.props.id2);



 this.setState({id1:id1});


},


closeModal: function(){
  this.props.handleHideModal();
},
replyBoxEnabled:function()
{

  $('#reply-button').addClass("hidden");
  $('#reply-subject').removeClass("hidden");
  $('#send-button').removeClass("hidden");
  $('#reply-to').removeClass("hidden");
  $('#reply-message').removeClass("hidden");
},

handleFromState: function(e)
{
  this.setState({from:e.target.value});
},
handleSubjectState: function(e)
{
  this.setState({subject:e.target.value});
},

updateData:function()
{
var id1=this.state.id1;
  $.ajax({
   url: 'http://localhost:8081/message',
   dataType: 'json',
   type: 'PUT',
   data: {id:id1,from:this.state.from,subject:this.state.subject},
   success: function(data)
   {
     console.log("updated");
   }.bind(this),
   error:function(err)
   {
     console.log("error");
   }.bind(this)
});
},



render: function()
{
  return(

        <div className="modal fade" id="updateModal">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button className="close" onClick={this.closeModal} data-dismiss="modal">x</button>
                <h4 className="modal-title">Update</h4>
              </div>
              <div className="modal-body">
              <div className="form-group">
                <textarea className="form-control disabled" id="reply-to" onChange={this.handleFromState} placeholder="from" rows="2" required></textarea>
              </div>

                <div className="form-group">
                  <textarea className="form-control disabled" id="reply-subject" onChange={this.handleSubjectState} placeholder="subject" rows="4" required></textarea>
                </div>

                </div>
              <div className="modal-footer">
                <button className="btn btn-default" onClick={this.closeModal} type="button" data-dismiss="modal">
                  Close
                </button>

                <button type="submit" id="send-button" onClick={this.updateData} className="btn btn-primary" data-dismiss="modal">Save</button>
              </div>
            </div>
          </div>
        </div>
  );
}});

module.exports= Update;
