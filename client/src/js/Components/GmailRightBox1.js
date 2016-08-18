var React=require("react");
var GmailRightBox2=require("./GmailRightBox2.js");
var GmailRightBox1 = React.createClass({
  render: function() {
  var rows=[];
    this.props.data.forEach(function(data) {
    var from1 =data[0].value;
    var subject=data[1].value;
    var date=data[2].value;
    var id=data[3].value;

    rows.push(<GmailRightBox2 from1={from1}  subject={subject}  date={date}  id={id}/>);

      });
return (

<div className="panel-body">
 <table className="table table-bordered table-inverse" >
  <tbody>{rows}</tbody>
 </table>
</div>

);
}
});


module.exports=GmailRightBox1;
