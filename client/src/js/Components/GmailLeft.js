var React=require("react");
var GmailLeft1=require("./GmailLeft1.js");
var GmailLeft = React.createClass({
  render: function() {
     var allrows = this.props.data.map(function(data){

         if(data.name==="INBOX"||data.name==='SENT'||data.name==='TRASH'||data.name==="IMPORTANT"||data.name==="DRAFT")
         {
            return(<GmailLeft1 submitLabelId1={this.props.submitLabelId} allLabelsData={data} key={data.name}></GmailLeft1>);
         }

     }.bind(this));

     return (
       <table>
       <a href="#myModal" data-toggle="modal"  className="btn btn-primary bstyle">
       Compose
       </a>
         <tbody>{allrows}</tbody>
       </table>
     );
  }
});
module.exports=GmailLeft;
