var React=require("react");
var Update=require("./Update");
var DatabaseChild2= React.createClass({

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

deleteData:function()
{
var id=this.props.id;
console.log("hello");
console.log(id);
  $.ajax({
   url: 'http://localhost:8081/message',
   dataType: 'json',
   type: 'DELETE',
   data: {id:id},
   success: function(data)
   {
     console.log("deleted");
   }.bind(this),
   error:function(err)
   {
     console.log("error");
   }.bind(this)
});
},


updateData:function()
{
var id=this.props.id;
  $.ajax({
   url: 'http://localhost:8081/message',
   dataType: 'json',
   type: 'PUT',
   data: {id:id},
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



  render: function() {
var from2=this.props.from1;
var subject2=this.props.subject;
var id1=this.props.id;
console.log(id1);

return (
    <tr>
      <td>{this.props.from1}</td>
      <td>{this.props.subject}</td>
      <td><button className="btn btn-primary" id="delete-button" onClick={this.deleteData}>Delete</button></td>
      <td>
          <a href="#updateModal" onMouseDown={this.handleShowModal} data-toggle="modal">
            <td><button className="btn btn-primary" id="update-button">Update</button></td>
          </a>
          {this.state.showModal ? <Update handleHideModal={this.handleHideModal} id1={id1}/> : null}
      </td>

    </tr>
     );
  }
});
module.exports=DatabaseChild2;
