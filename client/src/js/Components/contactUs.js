var React=require("react");

var ContactUs = React.createClass({
    render: function() {
      return(
      <div>
      <div className="container-fluid">
	<div className="row">
		<div className="col-md-12">
			<div className="jumbotron">
				<h2>
					Hello, world!
				</h2>
        <h4>Contact Us For Any Problem</h4>
				<p>
					This is a template for a simple marketing or informational website. It includes a large callout called the hero unit and three supporting pieces of content. Use it as a starting point to create something more unique.
				</p>
				<p>
					<a className="btn btn-primary btn-large" href="#">Learn more</a>
				</p>
			</div>
		</div>
	</div>
</div>
      </div>
      );
    }

});
module.exports=ContactUs;
