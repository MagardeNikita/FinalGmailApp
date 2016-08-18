var React=require("react");
var DatabaseChild2=require("./DatabaseChild2.js");
var DatabaseChild1 = React.createClass({
  render: function() {
var rows=[];
    this.props.data.forEach(function(data) {
    var from1 =data.from;
    var subject=data.subject;
    var id=data._id;

      rows.push(<DatabaseChild2 from1={from1}  subject={subject} id={id}/>);

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


module.exports=DatabaseChild1;
