(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{14:function(e,t,a){},17:function(e,t,a){},18:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(3),i=a.n(r),o=(a(14),[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz",address:{street:"Kulas Light",suite:"Apt. 556",city:"Gwenborough",zipcode:"92998-3874",geo:{lat:"-37.3159",lng:"81.1496"}},phone:"1-770-736-8031 x56442",website:"hildegard.org",company:{name:"Romaguera-Crona",catchPhrase:"Multi-layered client-server neural-net",bs:"harness real-time e-markets"}},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv",address:{street:"Victor Plains",suite:"Suite 879",city:"Wisokyburgh",zipcode:"90566-7771",geo:{lat:"-43.9509",lng:"-34.4618"}},phone:"010-692-6593 x09125",website:"anastasia.net",company:{name:"Deckow-Crist",catchPhrase:"Proactive didactic contingency",bs:"synergize scalable supply-chains"}},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net",address:{street:"Douglas Extension",suite:"Suite 847",city:"McKenziehaven",zipcode:"59590-4157",geo:{lat:"-68.6102",lng:"-47.0653"}},phone:"1-463-123-4447",website:"ramiro.info",company:{name:"Romaguera-Jacobson",catchPhrase:"Face to face bifurcated interface",bs:"e-enable strategic applications"}},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org",address:{street:"Hoeger Mall",suite:"Apt. 692",city:"South Elvis",zipcode:"53919-4257",geo:{lat:"29.4572",lng:"-164.2990"}},phone:"493-170-9623 x156",website:"kale.biz",company:{name:"Robel-Corkery",catchPhrase:"Multi-tiered zero tolerance productivity",bs:"transition cutting-edge web services"}},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca",address:{street:"Skiles Walks",suite:"Suite 351",city:"Roscoeview",zipcode:"33263",geo:{lat:"-31.8129",lng:"62.5342"}},phone:"(254)954-1289",website:"demarco.info",company:{name:"Keebler LLC",catchPhrase:"User-centric fault-tolerant solution",bs:"revolutionize end-to-end systems"}},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info",address:{street:"Norberto Crossing",suite:"Apt. 950",city:"South Christy",zipcode:"23505-1337",geo:{lat:"-71.4197",lng:"71.7478"}},phone:"1-477-935-8478 x6430",website:"ola.org",company:{name:"Considine-Lockman",catchPhrase:"Synchronised bottom-line interface",bs:"e-enable innovative applications"}},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz",address:{street:"Rex Trail",suite:"Suite 280",city:"Howemouth",zipcode:"58804-1099",geo:{lat:"24.8918",lng:"21.8984"}},phone:"210.067.6132",website:"elvis.io",company:{name:"Johns Group",catchPhrase:"Configurable multimedia task-force",bs:"generate enterprise e-tailers"}},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me",address:{street:"Ellsworth Summit",suite:"Suite 729",city:"Aliyaview",zipcode:"45169",geo:{lat:"-14.3990",lng:"-120.7677"}},phone:"586.493.6943 x140",website:"jacynthe.com",company:{name:"Abernathy Group",catchPhrase:"Implemented secondary concept",bs:"e-enable extensible e-tailers"}},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io",address:{street:"Dayna Park",suite:"Suite 449",city:"Bartholomebury",zipcode:"76495-3109",geo:{lat:"24.6463",lng:"-168.8889"}},phone:"(775)976-6794 x41206",website:"conrad.com",company:{name:"Yost and Sons",catchPhrase:"Switchable contextually-based project",bs:"aggregate real-time technologies"}},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz",address:{street:"Kattie Turnpike",suite:"Suite 198",city:"Lebsackbury",zipcode:"31428-2261",geo:{lat:"-38.2386",lng:"57.2232"}},phone:"024-648-3804",website:"ambrose.net",company:{name:"Hoeger LLC",catchPhrase:"Centralized empowering task-force",bs:"target end-to-end models"}}]),l=[{userId:1,id:1,title:"delectus aut autem",completed:!1},{userId:1,id:2,title:"quis ut nam facilis et officia qui",completed:!1}],c=a(6),m=a(4),u=a(5),d=a(8),h=a(7),p=a(1),g=a.n(p),b=g.a.shape({name:g.a.string,catchPhrase:g.a.string,bs:g.a.string}),y=g.a.shape({lat:g.a.string,lng:g.a.string}),f=g.a.shape({street:g.a.string,suite:g.a.string,city:g.a.string,zipcode:g.a.string,geo:g.a.shape({UserGeo:y})}),E=g.a.shape({id:g.a.number,name:g.a.string,username:g.a.string,email:g.a.string,adress:f,phone:g.a.string,website:g.a.string,company:b}),v=g.a.shape({userId:g.a.number,id:g.a.number,title:g.a.string,completed:g.a.bool}),S=(g.a.shape({TodoShapes:v,user:E}),g.a.shape({buttonName:g.a.string.isRequired,click:g.a.func.isRequired}),g.a.shape({flag:g.a.bool.isRequired,change:g.a.func.isRequired,users:g.a.arrayOf(E).isRequired}),g.a.shape({flag:g.a.bool.isRequired,change:g.a.func.isRequired,emtyInput:g.a.string.isRequired}),function(e){var t=e.todo;return s.a.createElement(s.a.Fragment,null,s.a.createElement("td",null,s.a.createElement("input",{type:"checkbox",checked:t.completed,readOnly:!0})),s.a.createElement("td",null,t.title),s.a.createElement("td",null,t.userId))}),C=function(e){var t=e.todos;return s.a.createElement("table",{className:"table"},s.a.createElement("thead",{className:"thead-dark"},s.a.createElement("tr",null,s.a.createElement("th",null,"Completed"),s.a.createElement("th",null,"Task"),s.a.createElement("th",null,"UserId"))),s.a.createElement("tbody",null,t.map((function(e){return s.a.createElement("tr",{key:e.id,className:"table-active"},s.a.createElement(S,{todo:e}))}))))},k=(a(17),function(e){var t=e.buttonName;return s.a.createElement("button",{type:"submit",className:"btn btn-primary"},t)}),w=function(e){var t=e.flag,a=e.change,n=e.users;return s.a.createElement("div",{className:"form-group"},s.a.createElement("select",{className:"form-control ".concat(t?"is-invalid":""),id:"exampleSelect1",onChange:function(e){return a(e.target.value)}},s.a.createElement("option",{value:""},"Choose a user"),n.map((function(e){return s.a.createElement("option",{value:e.id,key:e.id},e.name)}))),s.a.createElement("div",{className:"invalid-feedback"},"Please, choose a user"))},I=(a(18),function(e){var t=e.flag,a=e.change;return s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{htmlFor:"title"},"Task"),s.a.createElement("input",{id:"title",className:"form-control ".concat(t?"is-invalid":""),placeholder:"Enter task name",onChange:function(e){return a(e.target.value)}}),s.a.createElement("div",{className:"invalid-feedback"},"Please, enter task"))}),z=function(e){var t=e.onChangeInput,a=e.onFormSubmit,n=e.onChangeSelect,r=e.isInputEmpty,i=e.isUserChoosed,o=e.users;return s.a.createElement("form",{onSubmit:a},s.a.createElement(I,{flag:r,change:t}),s.a.createElement(w,{flag:i,change:n,users:o}),s.a.createElement(k,{buttonName:"Add"}))},N=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={todos:Object(c.a)(e.props.todos)},e.onChangeInput=function(t){e.setState({todoTitle:t,isInputEmpty:!1})},e.onChangeSelect=function(t){e.setState({userId:t,isUserChoosed:!1})},e.onFormSubmit=function(t){if(t.preventDefault(),e.state.todoTitle)if(e.state.userId){var a={userId:+e.state.userId,id:e.state.todos.length+1,title:e.state.todoTitle,completed:!1};e.setState({todoTitle:"",userId:0}),e.setState((function(e){return e.todos.push(a)})),t.target.reset()}else e.setState({isUserChoosed:!0});else e.setState({isInputEmpty:!0})},e}return Object(u.a)(a,[{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"main"},s.a.createElement(C,{todos:this.state.todos}),s.a.createElement("div",{className:"sidebar"},s.a.createElement(z,{onFormSubmit:this.onFormSubmit,onChangeInput:this.onChangeInput,onChangeSelect:this.onChangeSelect,users:this.props.users,isInputEmpty:this.state.isInputEmpty,isUserChoosed:this.state.isUserChoosed}))))}}]),a}(s.a.Component),P=function(){return s.a.createElement("div",{className:"App"},s.a.createElement("h1",null,"Add todo form"),s.a.createElement("p",null,s.a.createElement("span",null,"Users: "),o.length),s.a.createElement(N,{users:o,todos:l}))};i.a.render(s.a.createElement(P,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a(19)}},[[9,1,2]]]);
//# sourceMappingURL=main.179e2f54.chunk.js.map