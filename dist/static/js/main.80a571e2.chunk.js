(this["webpackJsonpbubbas-dinner"]=this["webpackJsonpbubbas-dinner"]||[]).push([[0],{18:function(e,t,a){},31:function(e,t,a){},44:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var n=a(1),i=a(0),c=a.n(i),s=a(22),r=a.n(s),o=(a(53),a(4)),l=a(5),d=a(7),u=a(6),m=(a(54),a(24)),j=a(10),h=(a(55),function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={menuOpen:!1},n}return Object(l.a)(a,[{key:"handleMenuClick",value:function(){this.setState({menuOpen:!this.state.menuOpen})}},{key:"handleLinkClick",value:function(){this.setState({menuOpen:!1})}},{key:"render",value:function(){var e=this,t={container:{position:"fixed",top:0,height:"80px",zIndex:"99",display:"flex",alignItems:"center",width:"100%",color:"white",fontFamily:"Lobster"},logo:{margin:"0 auto"},body:{display:"flex",flexDirection:"column",alignItems:"center",width:"100vw",height:"100vh",filter:this.state.menuOpen?"blur(2px)":null,transition:"filter 0.5s ease"}},a=[Object(n.jsxs)(j.b,{to:"/",className:"nav-link",children:[" ","Home"]}),Object(n.jsxs)(j.b,{to:"/about",className:"nav-link",children:[" ","About"]}),Object(n.jsxs)(j.b,{to:"/menu",className:"nav-link",children:[" ","Menu"]}),Object(n.jsxs)(j.b,{to:"/gallary",className:"nav-link",children:[" ","Gallery"]})].map((function(t,a){return Object(n.jsx)(p,{delay:"".concat(.1*a,"s"),onClick:function(){e.handleLinkClick()},children:t},a)}));return Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{style:t.container,className:"header",children:[Object(n.jsx)("div",{style:t.logo,className:"logo-name",children:Object(n.jsx)(j.b,{to:"/",className:"nav-link",children:Object(n.jsx)("p",{children:"Bubba's Diner"})})}),Object(n.jsx)(O,{open:this.state.menuOpen,onClick:function(){return e.handleMenuClick()},color:"#ff0606"})]}),Object(n.jsx)(b,{open:this.state.menuOpen,children:a})]})}}]),a}(c.a.Component)),p=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={hover:!1},n}return Object(l.a)(a,[{key:"handleHover",value:function(){this.setState({hover:!this.state.hover})}},{key:"render",value:function(){var e=this,t={container:{opacity:0,animation:"1s appear forwards",animationDelay:this.props.delay},menuItem:{fontFamily:"'Open Sans', sans-serif",fontSize:"1.2rem",fontWeight:"bolder",padding:"1rem 0",margin:"0 5%",cursor:"pointer",color:this.state.hover?"white":"#fafafa",transition:"color 0.2s ease-in-out",animation:"0.5s slideIn forwards",animationDelay:this.props.delay},line:{width:"90%",height:"1px",background:"white",margin:"0 auto",animation:"0.5s shrink forwards",animationDelay:this.props.delay}};return Object(n.jsxs)("div",{style:t.container,children:[Object(n.jsx)("div",{style:t.menuItem,onMouseEnter:function(){e.handleHover()},onMouseLeave:function(){e.handleHover()},onClick:this.props.onClick,children:this.props.children}),Object(n.jsx)("div",{style:t.line})]})}}]),a}(c.a.Component),b=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={open:!!n.props.open&&n.props.open},n}return Object(l.a)(a,[{key:"componentWillReceiveProps",value:function(e){e.open!==this.state.open&&this.setState({open:e.open})}},{key:"render",value:function(){var e={container:{position:"absolute",top:35,left:0,height:this.state.open?"100%":0,width:"100vw",display:"flex",flexDirection:"column",background:"black",opacity:.95,color:"#fafafa",transition:"height 0.3s ease",zIndex:2},menuList:{paddingTop:"3rem"}};return Object(n.jsx)("div",{style:e.container,children:this.state.open?Object(n.jsx)("div",{style:e.menuList,children:this.props.children}):null})}}]),a}(c.a.Component),O=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={open:!!n.props.open&&n.props.open,color:n.props.color?n.props.color:"black"},n}return Object(l.a)(a,[{key:"componentWillReceiveProps",value:function(e){e.open!==this.state.open&&this.setState({open:e.open})}},{key:"handleClick",value:function(){this.setState({open:!this.state.open})}},{key:"render",value:function(){var e=this,t={container:{height:"32px",width:"32px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",cursor:"pointer",padding:"4px"},line:{height:"2px",width:"20px",background:this.state.color,transition:"all 0.2s ease"},lineTop:{transform:this.state.open?"rotate(45deg)":"none",transformOrigin:"top left",marginBottom:"5px"},lineMiddle:{opacity:this.state.open?0:1,transform:this.state.open?"translateX(-16px)":"none"},lineBottom:{transform:this.state.open?"translateX(-1px) rotate(-45deg)":"none",transformOrigin:"top left",marginTop:"5px"}};return Object(n.jsxs)("div",{style:t.container,onClick:this.props.onClick?this.props.onClick:function(){e.handleClick()},children:[Object(n.jsx)("div",{style:Object(m.a)(Object(m.a)({},t.line),t.lineTop)}),Object(n.jsx)("div",{style:Object(m.a)(Object(m.a)({},t.line),t.lineMiddle)}),Object(n.jsx)("div",{style:Object(m.a)(Object(m.a)({},t.line),t.lineBottom)})]})}}]),a}(c.a.Component),f=a(12),x=(a(64),function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsx)("div",{className:"background",children:Object(n.jsxs)("div",{className:"welcome-text",children:[Object(n.jsx)("h1",{class:"glow",children:"Bubba's Diner"}),Object(n.jsx)("h4",{children:"Food . Friends . Memories"})]})})}}]),a}(i.Component)),v=(a(44),a(30)),g=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).image=e.props.image,e}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsx)("div",{className:"menu-type-wrapper shadow-lg",children:Object(n.jsx)(j.b,{to:this.props.link,children:Object(n.jsxs)(v.a,{interval:this.props.interval,controls:!1,indicators:!1,children:[Object(n.jsx)(v.a.Item,{children:Object(n.jsx)("img",{className:"d-block w-100",src:this.image,alt:"First slide"})}),Object(n.jsx)(v.a.Item,{children:Object(n.jsx)("img",{className:"d-block w-100",src:this.image,alt:"Second slide"})}),Object(n.jsx)(v.a.Item,{children:Object(n.jsx)("img",{className:"d-block w-100",src:this.image,alt:"Third slide"})})]})})})}}]),a}(i.Component),y=a.p+"static/media/appetizer-daalroti-3.4862af2e.jpg",w=a.p+"static/media/chana-puri-daalroti-2.e569f0d7.jpg",k=a.p+"static/media/img-03.abfe68d5.jpg",N=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{className:"home-menu-wrapper",children:[Object(n.jsx)(g,{image:y,interval:"1000",link:"/menu/breakfast"}),Object(n.jsx)(g,{image:w,interval:"2000",link:"/menu/sandwiches"}),Object(n.jsx)(g,{image:k,interval:"3000",link:"/menu/poutine"})]})}}]),a}(i.Component),C=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"componentDidMount",value:function(){window.scrollTo(0,0)}},{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(x,{}),Object(n.jsx)(N,{})]})}}]),a}(i.Component),S=(a(65),function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"componentDidMount",value:function(){window.scrollTo(0,0)}},{key:"render",value:function(){return Object(n.jsxs)("div",{className:"about-page-wrapper",children:[Object(n.jsx)("div",{className:"page-name mt-5",children:Object(n.jsx)("p",{children:"About"})}),Object(n.jsxs)("div",{className:"about-wrapper",children:[Object(n.jsx)("h1",{children:"Bubba's Diner"}),Object(n.jsx)("p",{children:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt nobis, numquam eligendi, libero enim consequuntur accusamus sapiente assumenda nostrum officia voluptatem ad, ullam repudiandae iure maiores possimus mollitia ipsum debitis. Reprehenderit eveniet in molestias modi veniam id placeat cumque nisi impedit? Numquam culpa, suscipit atque fugit quia voluptas aliquam officia, laudantium quae nihil vitae assumenda voluptatem, aperiam dignissimos? Totam, quos! Sit itaque eius beatae quos pariatur, harum dolorum voluptates non ratione vitae, deserunt, doloremque eos? Sint laudantium repudiandae illo rem aliquid dicta perspiciatis, perferendis facilis? At dolorem ut distinctio esse? Nostrum esse, modi tempore culpa voluptas optio voluptatibus magni saepe necessitatibus, minus iure corrupti, earum provident ipsam fuga asperiores. Ipsa sapiente ut temporibus odio hic delectus exercitationem consequatur facere incidunt?"})]})]})}}]),a}(i.Component)),B=(a(18),function(){var e=Object(f.f)().url;return Object(n.jsxs)("div",{className:" mx-auto menu-header shadow",children:[Object(n.jsx)(j.b,{exact:!0,to:e+"",activeClassName:"selected-menu",className:"nav-link",children:"Full Menu"}),Object(n.jsx)(j.b,{exact:!0,to:e+"/breakfast",activeClassName:"selected-menu",className:"nav-link",children:"Breakfast"}),Object(n.jsx)(j.b,{exact:!0,to:e+"/omelettes",activeClassName:"selected-menu",className:"nav-link",children:"Omelettes"}),Object(n.jsx)(j.b,{exact:!0,to:e+"/sandwiches",activeClassName:"selected-menu",className:"nav-link",children:"Sandwiches/Wraps"}),Object(n.jsx)(j.b,{exact:!0,to:e+"/riceBowls",activeClassName:"selected-menu",className:"nav-link",children:"Rice Bowls & Wraps"}),Object(n.jsx)(j.b,{exact:!0,to:e+"/poutine",className:"nav-link",activeClassName:"selected-menu",children:"Poutine & Chicken Wings"}),Object(n.jsx)(j.b,{exact:!0,to:e+"/salads",className:"nav-link",activeClassName:"selected-menu",children:"Salads & Drinks"}),Object(n.jsx)(j.b,{exact:!0,to:e+"/addons",className:"nav-link",activeClassName:"selected-menu",children:"ADD-ONS"})]})}),A=(a(66),function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.item;return Object(n.jsxs)("div",{className:"food-card",children:[Object(n.jsxs)("div",{className:"food-card-header",children:[Object(n.jsx)("h1",{className:"item-name",children:e.name}),Object(n.jsx)("h1",{className:"item-price",children:e.price})]}),Object(n.jsx)("div",{className:"description",children:e.desc})]})}}]),a}(i.Component)),T=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).FoodItems=[{name:"Full Breakfast",price:"7",desc:"Two eggs done any way you like, home fries and toast"},{name:"The Bubba",price:"14",desc:"Three strips of bacon, two sausages, and a slice of ham. Two pancakes, two eggs, home fries and toast. Add substitute peameal for 1 protein 2"},{name:"Carnivore",price:"9",desc:"Your choice of bacon, ham or sausage. Two eggs, home fries and toast"},{name:"Smoothies",price:"5.5",desc:"On the run? Try one of our fresh smoothies. Your choice of Mango/Pineapple or Strawberry/Banana. Add protein 1"},{name:"Cakes or Toast",price:"8",desc:"Your choice of a three-stack of fluffy pancakes or our delicious French toast. Served with a side of homefries"}],e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.FoodItems.map((function(e){return Object(n.jsx)(A,{item:e},e.name)}));return Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{className:"menu-name",children:[Object(n.jsx)("p",{children:"Breakfast"}),Object(n.jsx)("h6",{style:{fontSize:14,textAlign:"center"},children:"Breakfast served daily from 8 AM until 11 AM"})]}),Object(n.jsx)("div",{className:"menu-wrapper",children:e})]})}}]),a}(i.Component),F=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).FoodItems=[{name:"BLT Wrap",price:"2",desc:"Thick sliced bacon, crispy lettuce and sliced tomato"},{name:"Western Sandwich/Wrap",price:"8",desc:"Two eggs, diced ham, saut\xe9ed onion & cheddar chees"},{name:"The ABC",price:"10",desc:"Sure to be a fan favourite.. sliced apple, thick cut bacon and cheddar cheese grilled to a golden perfection. This is  how Bubba does a grilled cheese!"},{name:"Chicken Souvlaki",price:"12",desc:"Bubba will have you saying OPA! With this one. Marinated chicken, feta cheese, diced tomatoes & onion and our creamy tzatziki sauce"},{name:"Shawarmna",price:"12",desc:"Shredded chicken seasoned with inhouse spices. Served with fresh veggies and pickles. But don't forget our famous garlic saucel"},{name:"Basic Burger",price:"10",desc:"We start with one of our fresh chuck patties. and add lettuce, tomato, onion and pickle. Nothing fancy, but oh so good"},{name:"Veggie Wrap",price:"10",desc:"Grilled vegetables and your choice of sauce take this vaggie treat to the next level"},{name:"Bubba Burger",price:"14",desc:"Put on your comfy pants for this guy... two chuck patties, thick cut bacon, sauteed mushrooms &amp; cheddar cheese"}],e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.FoodItems.map((function(e){return Object(n.jsx)(A,{item:e},e.id)}));return Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{className:"menu-name",children:Object(n.jsx)("p",{children:"Sandwiches Burgers & Wraps"})}),Object(n.jsx)("h6",{style:{fontSize:14,textAlign:"center"},children:Object(n.jsx)("strong",{children:"Served all day long! Come with your choice of home fries or French fries or side garden salad."})}),Object(n.jsx)("h6",{style:{fontSize:14,textAlign:"center"},children:"Substitute Caesar or Greek salad for 1"}),Object(n.jsx)("div",{className:"menu-wrapper",children:e})]})}}]),a}(i.Component),I=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).FoodItems=[{name:"Tomato",price:"1"},{name:"Onion",price:"1"},{name:"Green pepper",price:"1"},{name:"Mushroom",price:"1"},{name:"Kalamata olive",price:"1"},{name:"Baby spinach",price:"1"},{name:"Extra cheese",price:"2"},{name:"Feta cheese",price:"2"},{name:"Diced ham",price:"2"},{name:"Diced bacon",price:"2"},{name:"Diced sausage",price:"2"}],e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.FoodItems.map((function(e){return Object(n.jsx)(A,{item:e},e.id)}));return Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{className:"menu-name",children:Object(n.jsx)("p",{children:"Omelettes"})}),Object(n.jsx)("h6",{style:{fontSize:14,textAlign:"center"},children:"We start with three large Canadian Eggs, add a pile of shredded cheddar cheese served with home fries and toast at 8.5"}),Object(n.jsx)("h6",{style:{fontSize:14,textAlign:"center"},children:Object(n.jsx)("strong",{children:"Add-ons"})}),Object(n.jsx)("div",{className:"menu-wrapper",children:e})]})}}]),a}(i.Component),q=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).riceBowls=[{name:"Butter Chicken ",price:"14",desc:"Marinated boneless grilled Chicken simmered in tomato gravy, finished with dried fenugreek, cream and honey"},{name:"Chilli Chicken",price:"14",desc:"Battered Boneless chicken with Spicy blend of Chillis, onion, garlic and ginger"},{name:"Malai Paneer",price:"12",desc:"Soft pieces of cottage cheese in creamy tomato sauce with Indian Spices"},{name:"Chilli Paneer ",price:"12",desc:"Battered cottage cheese tossed with chili, ginger and spring onion"}],e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.riceBowls.map((function(e){return Object(n.jsx)(A,{item:e},e.id)}));return Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{className:"menu-name",children:Object(n.jsx)("p",{children:"Rice Bowls"})}),Object(n.jsx)("div",{className:"menu-wrapper",children:e})]})}}]),a}(i.Component),M=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).Poutine=[{name:"Classic ",price:"8",desc:"A Canadian favourite golden fries smothered in cheese Curds and gravy"},{name:"Shawarma",price:"11",desc:"Our golden fries topped with cheese, seasoned shredded chicken and our inhouse Shawarma sauce that will make you go mmm"},{name:"Butter Chicken",price:"12",desc:"Crispy fries topped with cheese and butter chicken that will make you come back again and again"},{name:"Greek",price:"9",desc:"Our golden fries topped with creamy tzatziki,sauce diced tomatoes, cucumber & onion and finished off with feta cheese"}],e.chikenWings=[{name:"8 Wings",price:"11"},{name:"16 Wings",price:"21"},{name:"24 Wings",price:"30"},{name:"8 Butter Chicken Wings",price:"15",desc:"Chicken wings sauteed in creamy butter chicken gravy (Additional 8 for 10)"}],e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.Poutine.map((function(e){return Object(n.jsx)(A,{item:e},e.id)})),t=this.chikenWings.map((function(e){return Object(n.jsx)(A,{item:e},e.id)}));return Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{className:"menu-name",children:[Object(n.jsx)("p",{children:"Poutine"}),Object(n.jsx)("h6",{style:{fontSize:14,textAlign:"center"},children:"(Add Chicken for $2)"})]}),Object(n.jsx)("div",{className:"menu-wrapper",children:e}),Object(n.jsxs)("div",{className:"menu-name",children:[Object(n.jsx)("p",{children:"Bubba's Famous Jumbo Wings"}),Object(n.jsx)("h6",{style:{fontSize:14,textAlign:"center"},children:"Your choice of mild, medium, hot, honey garlic, or BBQ"}),Object(n.jsx)("h6",{style:{fontSize:14,textAlign:"center"},children:"Add a side of fries 3"})]}),Object(n.jsx)("div",{className:"menu-wrapper",children:t})]})}}]),a}(i.Component),D=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).salads=[{name:"Garden Variety",price:"7",desc:"Mixed greens, baby spinach with tomato, red onion and cucumber"},{name:"All Hail Caesar",price:"8",desc:"Crisp romaine lettuce mixed with bacon, croutons and our creamy Caesar dressing"},{name:"Greek-Style",price:"8",desc:"Garden fresh tomatoes, red onion, mixed peppers, baby spinach and cucumber topped with kalamata olives, feta cheese and our house herb dressing"}],e.drinks=[{name:"Bottle Juice",price:"2.5",desc:"Apple, Orange, Lemonade & Fruit Punch"},{name:"Pop can",price:"1.5",desc:"Description"},{name:"Smoothies",price:"5.5",desc:"Mango & Pineapple or Strawberry & Banana"},{name:"Coffee / Tea",price:"1.8",desc:"Description"}],e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.salads.map((function(e){return Object(n.jsx)(A,{item:e},e.id)})),t=this.drinks.map((function(e){return Object(n.jsx)(A,{item:e},e.id)}));return Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{className:"menu-name",children:[Object(n.jsx)("p",{children:"Salads"}),Object(n.jsx)("h6",{style:{fontSize:14,textAlign:"center"},children:"Dinner sized salads served with your choice of dressings"}),Object(n.jsx)("h6",{style:{fontSize:14,textAlign:"center"},children:"Add chicken to any salad 3"})]}),Object(n.jsx)("div",{className:"menu-wrapper",children:e}),Object(n.jsx)("div",{className:"menu-name",children:Object(n.jsx)("p",{children:"Drinks"})}),Object(n.jsx)("div",{className:"menu-wrapper",children:t})]})}}]),a}(i.Component),W=a(74),H=a(71),z=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).FoodItems=[{name:"Bacon, Ham or Sausage",price:"3"},{name:"Toast, muffin or croissant",price:"2.5"},{name:"Egg",price:"1.5"},{name:"Peameal",price:"4"},{name:"Home fries",price:"3"},{name:"French fries",price:"3"}],e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.FoodItems.map((function(e){return Object(n.jsx)(A,{item:e},e.name)}));return Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{className:"menu-name",children:Object(n.jsx)("p",{children:"Addons"})}),Object(n.jsx)("div",{className:"menu-wrapper",children:e})]})}}]),a}(i.Component),P=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(T,{}),Object(n.jsx)(F,{}),Object(n.jsx)(I,{}),Object(n.jsx)(q,{}),Object(n.jsx)(M,{}),Object(n.jsx)(D,{}),Object(n.jsx)(z,{})]})}}]),a}(i.Component),L=function(){var e=Object(f.f)().path;return Object(i.useEffect)((function(){window.scrollTo(0,0)}),[]),Object(n.jsxs)("div",{className:"menu-page-wrapper",children:[Object(n.jsx)("div",{className:"page-name",children:Object(n.jsx)("p",{children:"Menu"})}),Object(n.jsx)(B,{}),Object(n.jsx)(G,{path:e})]})},G=Object(f.g)((function(e){var t=e.location,a=e.path;return Object(n.jsx)(W.a,{children:Object(n.jsx)(H.a,{classNames:"slide",timeout:1e3,children:Object(n.jsxs)(f.c,{location:t,children:[Object(n.jsx)(f.a,{exact:!0,path:a,component:P}),Object(n.jsx)(f.a,{exact:!0,path:a+"/salads",component:D}),Object(n.jsx)(f.a,{exact:!0,path:a+"/breakfast",component:T}),Object(n.jsx)(f.a,{exact:!0,path:a+"/sandwiches",component:F}),Object(n.jsx)(f.a,{exact:!0,path:a+"/omelettes",component:I}),Object(n.jsx)(f.a,{exact:!0,path:a+"/riceBowls",component:q}),Object(n.jsx)(f.a,{exact:!0,path:a+"/poutine",component:M}),Object(n.jsx)(f.a,{exact:!0,path:a+"/addons",component:z})]})},t.key)})})),E=(a(31),function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsx)("div",{class:"cards_item",children:Object(n.jsxs)("div",{class:"card",children:[Object(n.jsx)("div",{class:"card_image",children:Object(n.jsx)("img",{src:this.props.item.image,alt:""})}),Object(n.jsx)("div",{class:"card_content",children:Object(n.jsx)("h2",{class:"card_title",children:this.props.item.name})})]})})}}]),a}(i.Component)),R=a.p+"static/media/img-02.33ac69a1.jpg",V=a(72),J=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).FoodImages=[{name:"Hello world",image:R},{name:"Hello world",image:R},{name:"Hello world",image:R},{name:"Hello world",image:R},{name:"Hello world",image:R},{name:"Hello world",image:R},{name:"Hello world",image:R},{name:"Hello world",image:R},{name:"Hello world",image:R}],e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.FoodImages.map((function(e){return Object(n.jsx)(E,{item:e},e.name)}));return Object(n.jsx)(V.a,{children:Object(n.jsx)("div",{className:"cards",children:e})})}}]),a}(i.Component),Y=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).FoodImages=[{name:"Speciality 1",image:R},{name:"Speciality 2",image:R},{name:"Speciality 3",image:R},{name:"Speciality 4",image:R},{name:"Speciality 5",image:R},{name:"Speciality 6",image:R},{name:"Speciality 7",image:R},{name:"Speciality 8",image:R},{name:"Speciality 9",image:R},{name:"Speciality 10",image:R},{name:"Speciality 11",image:R}],e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.FoodImages.map((function(e){return Object(n.jsx)(E,{item:e},e.name)}));return Object(n.jsx)(V.a,{children:Object(n.jsx)("div",{className:"cards",children:e})})}}]),a}(i.Component),_=function(){var e=Object(f.f)().url;return Object(n.jsxs)("div",{className:"d-flex justify-content-center shadow-lg my-5 bg-white mx-auto menu-header",children:[Object(n.jsx)(j.b,{exact:!0,to:e+"",activeClassName:"selected-menu",className:"nav-link w-100",children:"Our Specialities"}),Object(n.jsx)(j.b,{exact:!0,to:e+"/ourrestaurant",activeClassName:"selected-menu",className:"nav-link w-100",children:"Our Restaurant"})]})},X=function(){var e=Object(f.f)().path;return Object(i.useEffect)((function(){window.scrollTo(0,0)}),[]),Object(n.jsxs)("div",{className:"gallary-page-wrapper",children:[Object(n.jsx)("div",{className:"page-name",children:Object(n.jsx)("p",{children:"Gallery"})}),Object(n.jsx)(_,{}),Object(n.jsx)($,{path:e})]})},$=Object(f.g)((function(e){var t=e.location,a=e.path;return Object(n.jsx)(W.a,{children:Object(n.jsx)(H.a,{classNames:"slide",timeout:1e3,children:Object(n.jsxs)(f.c,{location:t,children:[Object(n.jsx)(f.a,{exact:!0,path:a,component:Y}),Object(n.jsx)(f.a,{exact:!0,path:a+"/ourrestaurant",component:J})]})},t.key)})})),K=(a(67),function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"componentDidMount",value:function(){window.scrollTo(0,0)}},{key:"render",value:function(){return Object(n.jsxs)("div",{className:"contact-page-wrapper",children:[Object(n.jsx)("div",{className:"page-name",children:Object(n.jsx)("p",{children:"Contact"})}),Object(n.jsxs)("form",{action:"",className:" mx-auto shadow-lg p-3 mb-5 bg-white rounded mt-3 akshay",children:[Object(n.jsxs)("div",{className:"line mt-3",children:[Object(n.jsx)("div",{className:"col",children:Object(n.jsx)("input",{type:"text",class:"form-control",placeholder:"First name",required:!0})}),Object(n.jsx)("div",{className:"col",children:Object(n.jsx)("input",{type:"text",class:"form-control",placeholder:"Phone",required:!0})})]}),Object(n.jsxs)("div",{className:"line mt-3",children:[Object(n.jsx)("div",{className:"col",children:Object(n.jsx)("input",{type:"email",class:"form-control",placeholder:"Email ID",required:!0})}),Object(n.jsx)("div",{className:"col",children:Object(n.jsx)("input",{type:"text",class:"form-control",placeholder:"Subject",required:!0})})]}),Object(n.jsx)("div",{className:"line mt-3",children:Object(n.jsx)("div",{className:"col",children:Object(n.jsx)("textarea",{class:"form-control",id:"exampleFormControlTextarea1",placeholder:"Message",rows:"3",required:!0})})}),Object(n.jsx)("div",{className:"line mt-3",children:Object(n.jsx)("div",{className:"col",children:Object(n.jsx)("button",{type:"submit",class:"btn btn-danger",children:"Submit"})})})]})]})}}]),a}(i.Component)),Q=(a(68),function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{className:"footer  mt-5",children:[Object(n.jsx)("div",{className:"map shadow my-4",children:Object(n.jsx)("iframe",{title:"maps",src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2918.0412251843486!2d-81.14597058457325!3d42.99846647914915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882e92bd08a4cac1%3A0xc5dbb31f19328768!2s480%20Sovereign%20Rd%2C%20London%2C%20ON%20N6M%201A4%2C%20Canada!5e0!3m2!1sen!2sin!4v1610039939316!5m2!1sen!2sin"})}),Object(n.jsxs)("div",{className:"services",children:[Object(n.jsx)("h1",{children:"Phone"}),Object(n.jsx)("p",{children:"519 455 9900"}),Object(n.jsx)("h1",{children:"E-mail"}),Object(n.jsx)("p",{children:"dineatbd@gmail.com"})]}),Object(n.jsxs)("div",{className:"social",children:[Object(n.jsx)("h1",{children:"Follow us"}),Object(n.jsxs)("div",{className:"links",children:[Object(n.jsx)("a",{href:"https://www.facebook.com",target:"blank",children:Object(n.jsx)("i",{className:"fa fa-facebook-square"})}),Object(n.jsx)("a",{href:"https://www.instagram.com/bubbas.diner/",target:"blank",children:Object(n.jsx)("i",{className:"fa fa-instagram"})})]})]})]})}}]),a}(i.Component)),U=a(73),Z=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return Object(n.jsx)("div",{children:Object(n.jsxs)(U.a,{show:this.props.show,onHide:function(){return e.props.onHide()},size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,className:"shadow-lg p-3 mb-5 rounded ",children:[Object(n.jsx)(U.a.Header,{closeButton:!0,children:Object(n.jsx)(U.a.Title,{id:"example-custom-modal-styling-title",children:"Alert Header"})}),Object(n.jsxs)(U.a.Body,{className:"bg-white",children:[Object(n.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit ipsam, laborum sunt debitis omnis dolorem explicabo aliquid eum soluta expedita perferendis ducimus facilis esse, culpa voluptatum qui, dolore veritatis reiciendis."}),Object(n.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit ipsam, laborum sunt debitis omnis dolorem explicabo aliquid eum soluta expedita perferendis ducimus facilis esse, culpa voluptatum qui, dolore veritatis reiciendis."}),Object(n.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit ipsam, laborum sunt debitis omnis dolorem explicabo aliquid eum soluta expedita perferendis ducimus facilis esse, culpa voluptatum qui, dolore veritatis reiciendis."})]})]})})}}]),a}(i.Component),ee=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).state={show:!0},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return Object(n.jsxs)(j.a,{children:[Object(n.jsx)(Z,{show:this.state.show,onHide:function(){return e.setState({show:!1})}}),Object(n.jsx)(h,{}),Object(n.jsx)(f.c,{children:Object(n.jsxs)("main",{children:[Object(n.jsx)(f.a,{exact:!0,path:"/",component:C}),Object(n.jsx)(f.a,{path:"/about",component:S}),Object(n.jsx)(f.a,{path:"/menu",component:L}),Object(n.jsx)(f.a,{path:"/Gallary",component:X}),Object(n.jsx)(f.a,{path:"/contact",component:K})]})}),Object(n.jsx)(Q,{})]})}}]),a}(i.Component);var te=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).state={loading:!0},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;new Promise((function(e){return setTimeout((function(){return e()}),1e3)})).then((function(){return e.setState({loading:!1})}))}},{key:"render",value:function(){return this.state.loading?null:Object(n.jsx)(ee,{})}}]),a}(c.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(te,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[70,1,2]]]);
//# sourceMappingURL=main.80a571e2.chunk.js.map