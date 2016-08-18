var React=require("react");
var {render}=require("react-dom");
var {Link}=require('react-router');
//var GrandChildComponent=require("./GrandChildComponent.js");
//var GrandChildComponent1=require("./GrandChildComponent1.js");
//var {Router, Route, browserHistory }=require('react-router');
//var About=require('./About');
//var ContactUs=require('./ContactUs');
//var App=require('./Index');

var ChildComponent2=React.createClass({
  render:function(){

    return(
    <div>

    <div className="container-fluid">
    	<div className="row">
    		<div className="col-md-12">
    			<nav className="navbar navbar-default navbar-inverse" role="navigation">
    				<div className="navbar-header">

    					<button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
    						 <span className="sr-only">Toggle navigation</span><span className="icon-bar"></span><span className="icon-bar"></span><span className="icon-bar"></span>
    					</button> <a className="navbar-brand" href="#">Gmail</a>
    				</div>

    				<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
    					<ul className="nav navbar-nav">
              <li className="active">
                <a href="#"> <Link to="/Database" activeClassName="active">viewdataBase</Link></a>
              </li>
    						<li className="active">
    							<a href="#"> <Link to="/About" activeClassName="active">About us</Link></a>
    						</li>
    						<li>
    							<a href="#"><li> <Link to="/ContactUs" activeClassName="active">Contact us</Link></li>
               </a>
            </li>

              <li>
    							<a href="#"><Link to="/GmailBox" activeClassName="active">Email</Link></a>
    						</li>


    					</ul>
    					<form className="navbar-form navbar-left" role="search">
    						<div className="form-group">
    							<input type="text" className="form-control" />
    						</div>
    						<button type="submit" className="btn btn-default">
    							Submit
    						</button>
    					</form>
    					<ul className="nav navbar-nav navbar-right">
    						<li>
    							<a href="#">Signout</a>
    						</li>
    						<li className="dropdown">
    							 <a href="#" className="dropdown-toggle" data-toggle="dropdown">Profile<strong className="caret"></strong></a>
    							<ul className="dropdown-menu">
    								<li>
    									<a href="#">Setttings</a>
    								</li>
    								<li>
    									<a href="#">My account</a>
    								</li>

    							</ul>
    						</li>
    					</ul>
    				</div>

    			</nav>
    		</div>
    	</div>
    </div>




	</div>
  );
  }

  });

//render(<MainComponent/>,document.getElementById('app'));
module.exports=ChildComponent2;
