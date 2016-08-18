var React=require("react");
var Reply=require("./Reply.js");
var GmailRightBox2= React.createClass({
  getInitialState:function()
  {
  return({showModal:false});
  }
,
  handleShowModal: function(e)
  {
    this.setState({showModal:true});
  },
  handleHideModal:function()
  {
    this.setState({showModal:false});
  },
  saveData: function()
  {
    var subject = this.props.subject;
    //console.log(subject);
    //console.log("nikita");


  var reply_to = this.props.from1;
  var dt={from:reply_to , subject:subject}
  //console.log(dt);
  console.log("hello");
    $.ajax({
     url: 'http://localhost:8081/message',
     dataType: 'json',
     type: 'POST',
     data: {from:reply_to , subject:subject},
     success: function(data)
     {
       console.log("added");
     }.bind(this),
     error:function(err)
     {
       console.log("error");
     }.bind(this)
  });
  },


  render: function() {
var from2=this.props.from1;
var subject2=this.props.subject;
var date2=this.props.date;
var id2=this.props.id;
return (
    <tr>
      <td>{this.props.from1}</td>
      <td>
          <a href="#replyModal" onMouseDown={this.handleShowModal} data-toggle="modal">
            {this.props.subject}
          </a>
          {this.state.showModal ? <Reply handleHideModal={this.handleHideModal} from2={from2} subject2={subject2} id2={id2}/> : null}
      </td>
      <td>{this.props.date}
      </td>
      <td><button className="btn btn-primary" id="save-button" onClick={this.saveData}>Save</button>
      </td>
    </tr>
     );
  }
});
module.exports=GmailRightBox2;
