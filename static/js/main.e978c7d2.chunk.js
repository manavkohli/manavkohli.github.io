(this["webpackJsonpmanavkohli.github.io"]=this["webpackJsonpmanavkohli.github.io"]||[]).push([[0],{32:function(e,t,a){e.exports=a.p+"static/media/close_icon.369cee7c.png"},34:function(e,t,a){e.exports=a.p+"static/media/headshot_circle.0eae73c9.png"},36:function(e,t,a){e.exports=a(64)},41:function(e,t,a){},42:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var n=a(1),i=a.n(n),r=a(31),l=a.n(r),o=(a(41),a(2)),s=a(3),c=a(5),m=a(4),u=a(6),h=(a(42),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).onClick=function(){a.props.onClick(a.props.label)},a.highlightText=function(){a.setState({color:"#E1B07E"})},a.unhighlightText=function(){a.setState({color:"white"})},a.state={color:"white"},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("span",{style:{color:this.state.color},onClick:this.onClick,onMouseEnter:this.highlightText,onMouseLeave:this.unhighlightText}," ",this.props.label," ")}}]),t}(n.Component)),d=a(32),p=a.n(d),g=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).updateShowMenu=function(){a.setState({showMenu:!a.state.showMenu,rotation:a.state.rotation+45})},a.onMenuItemClick=function(e){a.props.onClick(e),a.setState({showMenu:!1,rotation:45})},a.state={showMenu:!1,rotation:45},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state.rotation;return i.a.createElement("div",null,this.state.showMenu&&i.a.createElement("span",{className:"menu-items"},i.a.createElement(h,{onClick:this.onMenuItemClick,label:"home"}),"/",i.a.createElement(h,{onClick:this.onMenuItemClick,label:"me"}),"/",i.a.createElement(h,{onClick:this.onMenuItemClick,label:"thanx"}),"/",i.a.createElement(h,{onClick:this.onMenuItemClick,label:"intuit"}),"/",i.a.createElement(h,{onClick:this.onMenuItemClick,label:"projects"}),"/",i.a.createElement(h,{onClick:this.onMenuItemClick,label:"writing"}),"/",i.a.createElement("a",{href:"mailto:manav.s.kohli@gmail.com"}," contact")),i.a.createElement("span",{onClick:this.updateShowMenu},i.a.createElement("img",{className:"close-icon",src:p.a,alt:"",style:{transform:"rotate(".concat(e,"deg)")}})))}}]),t}(n.Component),f=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"landing-screen-text-box"},"Hi, I'm Manav.",i.a.createElement("br",null),"Get to know me.")}}]),t}(n.Component),E=a(14),b=a.n(E),v=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).onClick=function(){a.props.onClick(a.props.content)},a.highlightText=function(){a.setState({color:"#E1B07E"})},a.unhighlightText=function(){a.setState({color:"#EEEEEE"})},a.state={color:"white"},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement(b.a,{bottom:!0},i.a.createElement("div",{className:"large-list-item"},i.a.createElement("span",{style:{color:this.state.color,cursor:"pointer"},onClick:this.onClick,onMouseEnter:this.highlightText,onMouseLeave:this.unhighlightText},this.props.content),i.a.createElement("span",{className:"small-text"}," ",this.props.smallText," ")))}}]),t}(n.Component),w=function(e){return i.a.createElement("div",{className:"large-list"},e.items.map((function(t,a){return i.a.createElement(v,{key:a,onClick:e.onClick,content:t.label,smallText:t.year})})))},y=function(e){return i.a.createElement("div",null,i.a.createElement("div",{className:"landing-screen"},i.a.createElement("div",{className:"flex-two-thirds-column"},i.a.createElement(f,null))),i.a.createElement(w,{onClick:e.onClick,items:[{label:"me",year:"Nov 1993-now"},{label:"thanx",year:"Dec 2018-now"},{label:"intuit",year:"Sep 2016-Dec 2018"},{label:"projects",year:"~"},{label:"writing",year:"Jan 2019-now"}]}))},k=function(e){return i.a.createElement("div",null," ","left"===e.imageAlignment&&i.a.createElement("div",{className:"horizontal-card"},i.a.createElement("div",{className:"flex-one-third-column"},i.a.createElement("img",{alt:"",src:e.image,className:"horizontal-card-image"})),i.a.createElement("div",{className:"flex-two-thirds-column left-aligned-text"},e.text)),"right"===e.imageAlignment&&i.a.createElement("div",{className:"horizontal-card"},i.a.createElement("div",{className:"flex-two-thirds-column left-aligned-text"},e.text),i.a.createElement("div",{className:"flex-one-third-column left-aligned"},i.a.createElement("img",{alt:"",src:e.image,className:"horizontal-card-image"}))))},j=function(e){return i.a.createElement(n.Fragment,null,e.items.map((function(e,t){return i.a.createElement("div",{className:"animated-horizontal-card",key:t},i.a.createElement(b.a,{bottom:!0},e))})))},O=a(11),x=a(7),C=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={value:null,width:0,height:0},a.updateWindowDimensions=a.updateWindowDimensions.bind(Object(O.a)(a)),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.updateWindowDimensions(),window.addEventListener("resize",this.updateWindowDimensions)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateWindowDimensions)}},{key:"updateWindowDimensions",value:function(){this.setState({width:window.innerWidth,height:window.innerHeight})}},{key:"render",value:function(){var e=this.state.value,t=.6*this.state.width,a=.4*this.state.height;return i.a.createElement(x.g,{width:t,height:a,className:"scatter-plot"},i.a.createElement(x.e,{style:{stroke:"black"}}),i.a.createElement(x.b,{style:{stroke:"black"}}),i.a.createElement(x.f,null),i.a.createElement(x.h,null),i.a.createElement(x.c,{color:"#4F97A3",data:this.props.data}),i.a.createElement(x.c,{color:"#554fa3",data:this.props.anomalousData}),e?i.a.createElement(x.a,{value:e}):null)}}]),t}(i.a.Component),N=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={value:{name:""},width:0,height:0},a.updateWindowDimensions=a.updateWindowDimensions.bind(Object(O.a)(a)),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.updateWindowDimensions(),window.addEventListener("resize",this.updateWindowDimensions)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateWindowDimensions)}},{key:"updateWindowDimensions",value:function(){this.setState({width:window.innerWidth,height:window.innerHeight})}},{key:"render",value:function(){var e=this,t=this.state.value,a=.5*this.state.width,n=.4*this.state.height,r=.6*this.state.height,l=.02*this.state.width;return i.a.createElement(x.d,{className:"donut-chart-example",innerRadius:l,radius:r,getAngle:function(e){return e.theta},data:[{theta:3,name:"AWS Maintenance",className:"custom-class"},{theta:5,name:"ETL Monitoring",className:"custom-class"},{theta:2,name:"Testing",className:"custom-class"},{theta:1,name:"Airflow Optimization",className:"custom-class"},{theta:3,name:"Feature Engineering",className:"custom-class"}],onValueMouseOver:function(t){return e.setState({value:t})},onSeriesMouseOut:function(t){return e.setState({value:{name:""}})},width:a,height:n,padAngle:.04},""!==t.name&&i.a.createElement(x.a,{value:t,align:{horizontal:x.a.ALIGN.RIGHT_EDGE,vertical:x.a.ALIGN.BOTTOM_EDGE}},i.a.createElement("div",{className:"pie-text"}," ",t.name," ")))}}]),t}(n.Component),I=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).getNonAnomalousNumber=function(){var e=10*Math.random();return e>8.9?e-10*Math.random():e},a.getChurnNonAnomalousNumber=function(){var e=10*Math.random();return e>3.5&&e<4.5&&(e-=2.5),e},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){for(var e=[],t=[],a=0;a<200;a++)e.push({x:this.getNonAnomalousNumber(),y:this.getNonAnomalousNumber()}),t.push({x:this.getChurnNonAnomalousNumber(),y:this.getChurnNonAnomalousNumber()});var n=i.a.createElement("div",null,i.a.createElement("h1",null,"Architecture"),i.a.createElement("p",null,"I architected and implemented Thanx's machine learning platform using Airflow. I created online/offline feature engineering pipelines, built out and maintain all the infrastructure to support our models, and actively develop on it. I also integrated the pipelines with our production data lake to integrate predictions into product features.")),r=i.a.createElement("div",null,i.a.createElement("h1",null,"Churn Prediction"),i.a.createElement("p",null,"When customers visit Thanx merchants they earn rewards. Unfortunately, sometimes those customers either decide to take their business elsewhere or move. I built a model that detects when high-value customers churn or are at risk in order to enable the merchant to automagically win back those errant individuals. The models retrain and evaluate themselves on a monthly basis to guarantee that they continue to capture relevant purchase habits.")),l=i.a.createElement("div",null,i.a.createElement("h1",null,"Anomaly Detection"),i.a.createElement("p",null,"Thanx delivers rewards to customers when they make purchases at merchants they are loyalty members of. However, sometimes we don't see enough transactions enter our system, too many, or simply the wrong ones. I designed, trained, and deployed an ML-based anomaly detection system for flagging these events.")),o=i.a.createElement("div",null,i.a.createElement(k,{text:l,imageAlignment:"right"}),i.a.createElement("div",{className:"scatter-plot-section"},i.a.createElement(C,{data:e,anomalousData:[{x:9,y:9},{x:9.3,y:9.1},{x:9.9,y:9},{x:9,y:9.8}]}))),s=[i.a.createElement("div",null,i.a.createElement(k,{text:r,imageAlignment:"right"}),i.a.createElement("div",{className:"scatter-plot-section"},i.a.createElement(C,{data:t,anomalousData:[{x:4,y:4},{x:4.3,y:4.1},{x:4.4,y:4},{x:3.7,y:4.8}]}))),o,i.a.createElement("div",null,i.a.createElement(k,{text:n,imageAlignment:"right"}),i.a.createElement("div",{className:"scatter-plot-section"},i.a.createElement(N,null)))];return i.a.createElement(j,{items:s})}}]),t}(n.Component),A=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={valueIdx:0},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.interval=setInterval((function(){return e.setState({valueIdx:e.state.valueIdx+1})}),this.props.offset)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){return i.a.createElement("span",{className:"changing-text-field",style:{color:this.props.color}},this.props.textValues[this.state.valueIdx%this.props.textValues.length])}}]),t}(n.Component),M=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=i.a.createElement("div",null,i.a.createElement("h1",null," Language Modeling "),i.a.createElement("p",null,"I designed and built a language model for generating sentences with a particular sentiment. The model was trained on transcripts from care conversations between Intuit's agents and QuickBooks customers after being stripped of PII. Because language around business profits (or losses) can be difficult, the goal of the model was to generate more positive or neutral responses that our agents could use while speaking with customers about sensitive topics.")),t=i.a.createElement("div",null,i.a.createElement("h1",null," Gmail Invoicing ",i.a.createElement("br",null)," Add-On "),i.a.createElement("p",null,"I worked with a small team within Intuit to build a new invoicing product that integrated with Gmail. We partnered with Google for the launch of their Add-On product and helped the team iterate on early feature development. Our team completed alpha and beta testing of the integration and saw the product adoption grow to over 20,000 installs.")),a=[i.a.createElement("div",null,i.a.createElement(k,{text:e,imageAlignment:"right"}),i.a.createElement("div",{className:"big-text"},"The quick brown fox jumps over the",i.a.createElement(A,{textValues:[" sleeping "," hungry "," quiet "," ecstatic "," frank "," lazy "],offset:6e3,color:"#E1B07E"}),i.a.createElement(A,{textValues:[" bear "," ocelot "," dog "," giraffe "],offset:1500,color:"#86A397"}))),i.a.createElement("div",null,i.a.createElement(k,{text:t,imageAlignment:"right"}))];return i.a.createElement(j,{items:a})}}]),t}(n.Component),T=a(34),S=a.n(T),W=function(e){return i.a.createElement("span",{className:"emoji",role:"img","aria-label":e.label?e.label:"","aria-hidden":e.label?"false":"true"},e.symbol)},D=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).navigateToThanx=function(){a.props.onClick("thanx")},a.navigateToIntuit=function(){a.props.onClick("intuit")},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=i.a.createElement("div",{className:"intro-content"},i.a.createElement("p",null,"I grew up in Portland, OR ",i.a.createElement(W,{symbol:"\ud83c\udf32"})," and have lived in San Francisco, CA ",i.a.createElement(W,{symbol:"\u2601\ufe0f"})," for the past couple years. Between the two I spent some time living on a community farm in central Brazil ",i.a.createElement(W,{symbol:"\ud83c\udf3e"}),", lived in Ulaanbaataar, Mongolia ",i.a.createElement(W,{symbol:"\ud83d\udc0e"})," for a summer, and received a B.A. in Computer Science from Claremont McKenna College ",i.a.createElement(W,{symbol:"\ud83c\udf93"}),". Recent adventures took me through Moroccan Medinas ",i.a.createElement(W,{symbol:"\ud83c\udf75"})," and on walks in the Italian alps",i.a.createElement(W,{symbol:"\ud83c\udfd4"}),"."),i.a.createElement("p",null,"When grounded, I enjoy playing tennis ",i.a.createElement(W,{symbol:"\ud83c\udfbe"}),", snowboarding  ",i.a.createElement(W,{symbol:"\ud83c\udfc2"}),", biking ",i.a.createElement(W,{symbol:"\ud83d\udeb4\ud83c\udffd\u200d\u2642\ufe0f"}),", cooking  ",i.a.createElement(W,{symbol:"\ud83c\udf73"}),", and reading ",i.a.createElement(W,{symbol:"\ud83d\udcda"}),". Some of my recent favorite reads include Cherry, by Nico Walker and 2018 Best American Short Stories, curated by Roxanne Gay. My favorite movie is the Royal Tenenbaums."),i.a.createElement("p",null,"I currently build machine learning solutions for",i.a.createElement("span",{onClick:this.navigateToThanx,className:"about-me-link"},i.a.createElement(W,{symbol:" \ud83d\udc49\ud83c\udffd"})," Thanx"),", a marketing technology company. I previously worked as a software engineer on the Payments team at",i.a.createElement("span",{onClick:this.navigateToIntuit,className:"about-me-link"},i.a.createElement(W,{symbol:" \ud83d\udc49\ud83c\udffd"})," Intuit"),".")),t=[i.a.createElement(k,{image:S.a,imageAlignment:"left",text:e})];return i.a.createElement(j,{items:t})}}]),t}(n.Component),P=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=i.a.createElement("div",null,i.a.createElement("h1",null,"Independent Projects"),i.a.createElement("h2",null,i.a.createElement("a",{href:"https://github.com/manavkohli/manavkohli.github.io"},"This Site")),i.a.createElement("p",null,"I designed and built this site using React. It's hosted by Github Pages and served by Node and Webpack. It was bootsrapped with create-react-app."),i.a.createElement("h2",null,i.a.createElement("a",{href:"https://github.com/manavkohli/quantum-mnist"},"MNIST Quantum Classifier")),i.a.createElement("p",null,"I participated in the 2018 Rigetti Quantum Computing Hackathon and worked with a team to demonstrate the viability of training neural classifiers on quantum chips. We built a simple classifier for the MNIST data set that performed reservoir computing using qubit gates.")),t=i.a.createElement("div",null,i.a.createElement("h1",null,"Class Projects"),i.a.createElement("h2",null,i.a.createElement("a",{href:"https://github.com/manavkohli/cs224n-final-project"},"Toxic Language Detection")),i.a.createElement("p",null,"For the final project of Natural Language Processing with Deep Learning (CS224n) taught at Stanford University, my team built an attention-based recurrent model for detecting whether Wikipedia comments were offensive. We also implemented the GloVe algorithm to train word embeddings on our project domain."),i.a.createElement("h2",null,i.a.createElement("a",{href:"https://github.com/manavkohli/cs221-project"},"DQN Agent")),i.a.createElement("p",null,"While enrolled in Principles of Artificial Intelligence at Stanford University (CS221) I worked with two others to build an agent that learned to play the Atari game Riverraid. We implemented the popular Deep Q-Learning algorithm proposed by DeepMind for training a Go agent. We used OpenAI Gym and Keras to train our agent.")),a=i.a.createElement("div",null,i.a.createElement(k,{text:t,imageAlignment:"right"})),n=i.a.createElement("div",null,i.a.createElement(k,{text:e,imageAlignment:"right"}));return i.a.createElement(j,{items:[n,a]})}}]),t}(n.Component),L=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=i.a.createElement("div",null,i.a.createElement("h1",null,"Data Engineering and Machine Learning"),i.a.createElement("h2",null,i.a.createElement("a",{href:"https://medium.thanx.com/advice-for-building-a-machine-learning-stack-at-startup-scale-b91eadaeef00"},"Advice for Deploying Your First Machine Learning Stack")),i.a.createElement("p",null,"Most thought leadership on machine learning best practices is offered by the likes of Uber, Airbnb, Spotify, and other companies that deal with massive data throughputs. However, for smaller organizations that face greater constraints, hiring discrete infrastructure, data science, and machine learning engineering teams is intractible. This article provides insights into bootstrapping an MVP machine learning pipeline and how to choose between different infrastructure."),i.a.createElement("h2",null,i.a.createElement("a",{href:"https://medium.thanx.com/how-to-process-data-with-terraform-and-lambda-d44b34922b86"},"How to Process Data with Terraform and Lambda")),i.a.createElement("p",null,"After learning (and getting excited) about Terraform for offering version control for infrastructure changes, I wrote a short tutorial for implementing a serverless data migration tool deployed using the framework.")),t=i.a.createElement("div",null,i.a.createElement("h1",null,"Public Policy"),i.a.createElement("h2",null,i.a.createElement("a",{href:"http://roseinstitute.org/prison-realignment/"},"Prison Realignment in California")),i.a.createElement("p",null,"Between 1980 and the early 2000s California's prison population growth far outpaced prison capacity increases. This resulted in extremely poor living conditions and the Supreme Court deciding in the 2011 case ",i.a.createElement("em",null,"Brown v. Plata")," that prisons populations fall to less than 137.5% of capacity. That burder was in turn felt at the county level, and the report analyzes the resulting impacts on local policies and economies."),i.a.createElement("h2",null,i.a.createElement("a",{href:"http://roseinstitute.org/inland-empire-outlook-ontario-airport-comes-home/"},"Ontario Airport Comes Home")),i.a.createElement("p",null,"The Ontario International Airport sits just at the Eastern edge of Los Angeles county, providing access to the densely populated Inland Empire. In late 2015 Los Angeles World airports agreed to relinquish ownership to local counties, causing the creation of a transition committee to consider how to best revive the airport. This report considers the history of the airport, its traffic, and the effects of transferring ownership on local economies.")),a=i.a.createElement("div",null,i.a.createElement(k,{text:e,imageAlignment:"right"})),n=i.a.createElement("div",null,i.a.createElement(k,{text:t,imageAlignment:"right"}));return i.a.createElement(j,{items:[a,n]})}}]),t}(n.Component),z=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).updateCurrentPage=function(e){a.setState({currentPage:e})},a.renderPage=function(){switch(a.state.currentPage){case"home":return i.a.createElement(y,{onClick:a.updateCurrentPage});case"thanx":return i.a.createElement("div",{className:"full-screen-page"},i.a.createElement(I,null));case"intuit":return i.a.createElement("div",{className:"full-screen-page"},i.a.createElement(M,null));case"me":return i.a.createElement(D,{onClick:a.updateCurrentPage});case"projects":return i.a.createElement(P,null);case"writing":return i.a.createElement(L,null);default:return i.a.createElement("div",{className:"full-screen-page"},"Page: ",a.state.currentPage)}},a.state={currentPage:"home"},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},"home"!==this.state.currentPage&&i.a.createElement("div",{className:"app-header"},i.a.createElement(g,{onClick:this.updateCurrentPage,currentPage:this.state.currentPage})),this.renderPage())}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[36,1,2]]]);
//# sourceMappingURL=main.e978c7d2.chunk.js.map