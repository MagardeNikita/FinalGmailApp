var React=require("react");
var GmailLeft=require('./GmailLeft');
var GmailRightBox1=require('./GmailRightBox1');
var Compose=require('./Compose');


var {Router, Route, browserHistory }=require('react-router');
var About=require('./About');
var ContactUs=require('./ContactUs');
//var App=require('./Index');




var globalarray=[];
var GmailBox = React.createClass({


getInitialState: function() {
   return ({data: [],yourData: []});
 },

  gmailLogin: function()
  {
    var acToken, tokenType, expiresIn;
    var OAUTHURL    =   'https://accounts.google.com/o/oauth2/v2/auth?';
    var VALIDURL    =   'https://www.googleapis.com/oauth2/v4/token?access_token=';
    var SCOPE       =   'https://mail.google.com/ https://www.googleapis.com/auth/gmail.send https://www.googleapis.com/auth/gmail.readonly';
    var CLIENTID    =   '792469758973-ah52g5hljdrjd8otooo1f5mrjm6qis1o.apps.googleusercontent.com';
    var REDIRECT    =   'http://localhost:8081';
    var TYPE        =   'token';
    var _url        =   OAUTHURL + 'scope=' + SCOPE + '&client_id=' + CLIENTID + '&redirect_uri=' + REDIRECT + '&response_type=' + TYPE;
    var win         =   window.open(_url, "windowname1", 'width=800, height=600');
    var pollTimer   =   window.setInterval(function()
    {
        try
        {
            if (win.document.URL.indexOf(REDIRECT) != -1)
            {
                window.clearInterval(pollTimer);
                var url =   win.document.URL;
                acToken =   gup(url, 'access_token');
                tokenType = gup(url, 'token_type');
                expiresIn = gup(url, 'expires_in');
                localStorage.setItem('gToken',acToken);
                localStorage.setItem('gTokenType',tokenType);
                localStorage.setItem('gExprireIn',expiresIn);
                console.log("gToken.."+localStorage.getItem('gToken'));
                console.log("gTokenType.."+localStorage.getItem('gTokenType'));
                console.log("gExprireIn.."+localStorage.getItem('gExprireIn'));
                function gup(url, name) {
                    name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
                    var regexS = "[\\#&]"+name+"=([^&#]*)";
                    var regex = new RegExp( regexS );
                    var results = regex.exec( url );
                    if( results == null )
                        return "";
                    else
                        return results[1];
                }
                win.close();
            }
        }
        catch(e)
        {
          console.log(e);
        }
    }, 500);
    this.allLabels();
  },

  allLabels: function()
    {
        var accessToken = localStorage.getItem('gToken');
        $.ajax({
         url: 'https://www.googleapis.com/gmail/v1/users/magardenikita%40gmail.com/labels?key={AIzaSyCXixq-uUtc4aikapRd4n-8UfzwIN_te6U}',
         dataType: 'json',
         type: 'GET',
         beforeSend: function (request)
         {
           request.setRequestHeader("Authorization", "Bearer "+accessToken);
         },
         success: function(data)
         {
           console.log("nikita");
          console.log(JSON.stringify(data));
           this.setState({data:data.labels});
         }.bind(this),
         error: function(xhr, status, err) {
           console.error(err.toString());
         }.bind(this)
      });
    },



      AllMessage(info){
      var that=this;
      //console.log("in allmsg function");
      //console.log("id"+info.lableId);
      var accessToken = localStorage.getItem('gToken');
      $.ajax({
       url: 'https://www.googleapis.com/gmail/v1/users/magardenikita%40gmail.com/messages?labelIds='+info.lableId+'&maxResults=10&key={AIzaSyCXixq-uUtc4aikapRd4n-8UfzwIN_te6U}',
       dataType: 'json',
       type: 'GET',
       beforeSend: function (request)
       {
       request.setRequestHeader("Authorization", "Bearer "+accessToken);
       },
       success: function(data)
       {
           var allmessages = data.messages;

           allmessages.forEach(function(data2) {

            $.ajax({

                beforeSend: function (request){
                request.setRequestHeader("Authorization", "Bearer "+accessToken);
              },

             url: 'https://www.googleapis.com/gmail/v1/users/magardenikita@gmail.com/messages/'+data2.id+'?fields=payload%2Fheaders&key={AIzaSyCHD3ofjLBF5zJlXMEww1obibxXWwLMEuY}',
             dataType: 'json',
             type: 'GET',

             success: function(data1)
             {
               //console.log(data1);
              var array1=Object.keys(data1).map(function(k){return data1[k]});
              var mailDataArr=array1[0].headers;

             var fromArray = mailDataArr.filter(function(item) { return item.name === 'From';});

             var subjectArray = mailDataArr.filter(function(item) { return item.name === 'Subject';});
             var dateArray = mailDataArr.filter(function(item) { return item.name === 'Date';});
              var idArray=[];
              idArray.push({"name":"id","value":data2.id});
              //console.log(JSON.stringify(idArray));
             var aggregatedArray=fromArray.concat(subjectArray).concat(dateArray).concat(idArray);
             //console.log(JSON.stringify(aggregatedArray));
             globalarray.push(aggregatedArray);

               that.setState({yourData:globalarray});
             }.bind(this),
             async:false,
             error: function(xhr, status, err) {

             }.bind(this)
             });


           });
           globalarray = [];

    }.bind(this),
    async:false,
       error: function(xhr, status, err) {
         console.error(err.toString());
       }.bind(this)
       });
    },


      componentDidMount: function()
        {
          this.AllMessage({lableId:'INBOX'});
        },


render: function() {
return(
      <div>

<button id="authorize-button" onClick={this.gmailLogin}
  className="btn btn-primary pull-right">Login</button>
    <div className="container-fluid ">
  	<div className="row">
  		<div className="col-lg-2 col-md-2 col-sm-2 pull-left hello">
      <Compose/>
      <GmailLeft submitLabelId={this.AllMessage} data={this.state.data}/>
  		</div>
  		<div className="col-lg-10 col-md-10 col-sm-10 pull-right">
      <GmailRightBox1 data={this.state.yourData}/>
  		</div>
  	</div>
  </div>
</div>

  );
}
});
module.exports=GmailBox;
