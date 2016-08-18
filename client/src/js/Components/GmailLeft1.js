var React=require("react");

var GmailLeft1= React.createClass({
  handleLabelId: function()
  {
   this.props.submitLabelId1({lableId:this.props.allLabelsData.id})
  },
  render: function() {
    return (
      <tr>
      <td><a onClick={this.handleLabelId} className="btn btn-primary Nikita">{this.props.allLabelsData.name}</a></td>
      </tr>
    );
  }
});
module.exports=GmailLeft1;
