var React = require('react');


var Reply = React.createClass({
getInitialState: function()
{
  return({replyToUser:'', replySubject:'',replyMessage:''});
}
,


componentDidMount: function()
{


 var subject = this.props.subject2;
//console.log(this.props.id2);
 var reply_subject = 'Reply: '+ subject;

 var reply_to = this.props.from2;


 this.setState({replyToUser: reply_to,replySubject: reply_subject});


},


closeModal: function(){
  this.props.handleHideModal();
},

sendMessage: function()
{
  var accessToken = localStorage.getItem('gToken');
  var email = '';
  var Headers = {'To': this.state.replyToUser,'Subject': this.state.replySubject};
  for(var header in Headers)
  {
    email += header += ": "+Headers[header]+"\r\n";
  }
  email += "\r\n" + this.state.replyMessage;
  var encodedMessage =  window.btoa(email).replace(/\+/g, '-').replace(/\//g, '_');
  console.log(accessToken);
  $.ajax({
   url: 'https://www.googleapis.com/gmail/v1/users/magardenikita%40gmail.com/messages/send?key={AIzaSyCXixq-uUtc4aikapRd4n-8UfzwIN_te6U}',
   dataType: 'json',
   contentType: "application/json",
   type: 'POST',
   data: JSON.stringify({'raw': encodedMessage}),
   beforeSend: function (request)
   {
     request.setRequestHeader("Authorization", "Bearer "+accessToken);
   },
   success: function(data)
   {
     console.log("Success");
   }.bind(this),
   async: false,
   error: function(xhr, status, err) {
     console.error("Error.."+err.toString());
   }.bind(this)
});
},
handleMessageState: function(e)
{
  this.setState({replyMessage:e.target.value});
},





render: function()
{
  return(

        <div className="modal fade" id="replyModal">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button className="close" onClick={this.closeModal} data-dismiss="modal">x</button>
                <h4 className="modal-title">Reply</h4>
              </div>
              <div className="modal-body">
                <div className="form-group">
                  <input type="text" className="form-control" value={this.state.replyToUser} id="reply-to" disabled />
                </div>

                <div className="form-group">
                  <input type="text" className="form-control disabled" value={this.state.replySubject} id="reply-subject" disabled />
                </div>

                <div className="form-group">
                  <textarea className="form-control" id="reply-message" onChange={this.handleMessageState} placeholder="Message" rows="10" required></textarea>
                </div>

              </div>
              <div className="modal-footer">
                <button className="btn btn-default" onClick={this.closeModal} type="button" data-dismiss="modal">
                  Close
                </button>
                <button type="submit" id="send-button" onClick={this.sendMessage} className="btn btn-primary" data-dismiss="modal">Send</button>
              </div>
            </div>
          </div>
        </div>
  );
}});

module.exports= Reply;
