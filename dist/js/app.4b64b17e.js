(function(e){function t(t){for(var n,a,o=t[0],c=t[1],l=t[2],h=0,d=[];h<o.length;h++)a=o[h],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&d.push(s[a][0]),s[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);u&&u(t);while(d.length)d.shift()();return r.push.apply(r,l||[]),i()}function i(){for(var e,t=0;t<r.length;t++){for(var i=r[t],n=!0,o=1;o<i.length;o++){var c=i[o];0!==s[c]&&(n=!1)}n&&(r.splice(t--,1),e=a(a.s=i[0]))}return e}var n={},s={app:0},r=[];function a(t){if(n[t])return n[t].exports;var i=n[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,a),i.l=!0,i.exports}a.m=e,a.c=n,a.d=function(e,t,i){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(a.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(i,n,function(t){return e[t]}.bind(null,n));return i},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var u=c;r.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},"227e":function(e,t,i){},"56d7":function(e,t,i){"use strict";i.r(t);i("e260"),i("e6cf"),i("cca6"),i("a79d");var n=i("2b0e"),s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"app"}},[i("app-router")],1)},r=[],a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i(e.routedComponent,{tag:"component"})},o=[],c=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("svg",{staticStyle:{border:"2px solid black"},attrs:{width:"100%",height:"400px"},on:{mousemove:function(t){return e.view_mousemove(t)},mouseup:e.view_mouseup,mouseleave:e.view_mouseleave,dblclick:function(t){return e.view_dblclick(t)}}},[e._l(e.edges,(function(t){return i("Edge",{key:t.v1.name+t.v2.name,attrs:{edge:t,stroke_color:t.fill},nativeOn:{mousemove:function(i){return e.object_mousemove(i,t)},dblclick:function(i){return e.object_dblclick(i,t)}}})})),e._l(e.vertices,(function(t){return i("Vertex",{key:t.name,attrs:{vertex:t,fill:t.fill},on:{selected:e.vertex_mousedown},nativeOn:{mousemove:function(i){return e.object_mousemove(i,t)},dblclick:function(i){return e.object_dblclick(i,t)}}})})),i("svg",{staticStyle:{"pointer-events":"none"},attrs:{x:e.graphics.x,y:e.graphics.y},domProps:{innerHTML:e._s(e.graphics.data)}})],2),i("div",[e._l(e.tools_cb,(function(t,n){return i("Tool",{key:n,attrs:{create:t,obj:{vertices:e.vertices,edges:e.edges,graph:e.graph,graphics:e.graphics}},on:{activate_tool:e.activate_tool}})})),i("label",[e._v("Name")]),i("input",{directives:[{name:"model",rawName:"v-model",value:e.graphics.code,expression:"graphics.code"}],staticStyle:{"text-align":"center",width:"20px"},attrs:{type:"text",maxlength:"1"},domProps:{value:e.graphics.code},on:{input:function(t){t.target.composing||e.$set(e.graphics,"code",t.target.value)}}})],2),i("br"),i("button",{on:{click:function(t){e.dijk_hide=!e.dijk_hide}}},[e.dijk_hide?i("span",[e._v("Show Dijkstra")]):i("span",[e._v("Hide Dijkstra")])]),e.dijk_hide?e._e():i("div",[i("div",[i("label",[e._v("Dijkstra Source")]),i("select",{directives:[{name:"model",rawName:"v-model",value:e.dijk_source,expression:"dijk_source"}],on:{change:function(t){var i=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.dijk_source=t.target.multiple?i:i[0]}}},e._l(e.vertices,(function(t){return i("option",{key:t.name},[e._v(e._s(t.name))])})),0),i("button",{on:{click:function(t){e.dijk_hide_costs_matrix=!e.dijk_hide_costs_matrix}}},[e.dijk_hide_costs_matrix?i("span",[e._v("Show Dijkstra Cost Matrix")]):i("span",[e._v("Hide Dijkstra Cost Matrix")])])]),e.dijk_hide_costs_matrix?e._e():i("div",[i("table",{staticStyle:{width:"70%","margin-top":"4px"}},e._l(e.dijk_costs,(function(t,n){return i("tr",{key:n},e._l(t,(function(t,n){return i("th",{key:n},[e._v(e._s(t))])})),0)})),0)]),i("div",e._l(e.dijk_comments,(function(t,n){return i("div",{key:n},[i("div",[e._v(e._s(n+1)+") "+e._s(t))]),i("div",[e._v("dist = "+e._s(e.dijk_dists[n]))]),i("div",[e._v("pred = "+e._s(e.dijk_preds[n]))]),i("br")])})),0)]),i("br"),i("button",{on:{click:function(t){e.euler_hide=!e.euler_hide}}},[e.euler_hide?i("span",[e._v("Show Euler")]):i("span",[e._v("Hide Euler")])]),e.euler_hide?e._e():i("div",[i("div",[e._v("Has Euler Circuit? "+e._s(e.has_euler_circuit))]),i("br"),i("div",[e._v("Euler Path / Circuit: "+e._s(e.eulers_total)+" "),i("button",{on:{click:function(t){return e.all_euler()}}},[e._v("Generate")])]),e.eulers.length>0?i("div",[e._v(e._s(e.eulers))]):e._e()]),i("br"),i("button",{on:{click:function(t){e.ham_hide=!e.ham_hide}}},[e.ham_hide?i("span",[e._v("Show Hamilton")]):i("span",[e._v("Hide Hamilton")])]),e.ham_hide?e._e():i("div",[e._v(" Hamiltonian: From "),i("select",{directives:[{name:"model",rawName:"v-model",value:e.ham_from,expression:"ham_from"}],on:{change:function(t){var i=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.ham_from=t.target.multiple?i:i[0]}}},e._l(e.vertices,(function(t){return i("option",{key:t.name},[e._v(e._s(t.name))])})),0),e._v(" To "),i("select",{directives:[{name:"model",rawName:"v-model",value:e.ham_to,expression:"ham_to"}],on:{change:function(t){var i=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.ham_to=t.target.multiple?i:i[0]}}},e._l(e.vertices,(function(t){return i("option",{key:t.name},[e._v(e._s(t.name))])})),0),i("div",[e._v(e._s(e.ham_path))])]),i("br"),i("button",{on:{click:function(t){e.bfs_hide=!e.bfs_hide}}},[e.bfs_hide?i("span",[e._v("Show BFS")]):i("span",[e._v("Hide BFS")])]),e.bfs_hide?e._e():i("div",[e._v(" BFS: From "),i("select",{directives:[{name:"model",rawName:"v-model",value:e.bfs_from,expression:"bfs_from"}],on:{change:function(t){var i=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.bfs_from=t.target.multiple?i:i[0]}}},e._l(e.vertices,(function(t){return i("option",{key:t.name},[e._v(e._s(t.name))])})),0),e._v(" To "),i("select",{directives:[{name:"model",rawName:"v-model",value:e.bfs_to,expression:"bfs_to"}],on:{change:function(t){var i=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.bfs_to=t.target.multiple?i:i[0]}}},[e._l(e.vertices,(function(t){return i("option",{key:t.name},[e._v(e._s(t.name))])})),i("option",[e._v("all")])],2),i("select",{directives:[{name:"model",rawName:"v-model",value:e.bfs_order,expression:"bfs_order"}],on:{change:function(t){var i=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.bfs_order=t.target.multiple?i:i[0]}}},[i("option",[e._v("Ascending Neighbours")]),i("option",[e._v("Descending Neighbours")])]),i("div",{domProps:{innerHTML:e._s(e.bfs_path)}}),i("div",{directives:[{name:"show",rawName:"v-show",value:e.bfs_path.length>0,expression:"bfs_path.length > 0"}]},[i("table",{staticStyle:{width:"70%","margin-top":"4px"}},[i("tr",[i("th",[e._v("Vertex")]),e._l(e.bfs_predecessor,(function(t,n){return i("th",{key:n},[e._v(e._s(t.vertex))])}))],2),i("tr",[i("th",[e._v("Predecessor")]),e._l(e.bfs_predecessor,(function(t,n){return i("th",{key:n},[e._v(e._s(t.predecessor))])}))],2)])])]),i("br"),i("button",{on:{click:function(t){e.dfs_hide=!e.dfs_hide}}},[e.dfs_hide?i("span",[e._v("Show DFS")]):i("span",[e._v("Hide DFS")])]),e.dfs_hide?e._e():i("div",[e._v(" DFS: From "),i("select",{directives:[{name:"model",rawName:"v-model",value:e.dfs_from,expression:"dfs_from"}],on:{change:function(t){var i=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.dfs_from=t.target.multiple?i:i[0]}}},e._l(e.vertices,(function(t){return i("option",{key:t.name},[e._v(e._s(t.name))])})),0),e._v(" To "),i("select",{directives:[{name:"model",rawName:"v-model",value:e.dfs_to,expression:"dfs_to"}],on:{change:function(t){var i=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.dfs_to=t.target.multiple?i:i[0]}}},e._l(e.vertices,(function(t){return i("option",{key:t.name},[e._v(e._s(t.name))])})),0),i("select",{directives:[{name:"model",rawName:"v-model",value:e.dfs_order,expression:"dfs_order"}],on:{change:function(t){var i=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.dfs_order=t.target.multiple?i:i[0]}}},[i("option",[e._v("Ascending Neighbours")]),i("option",[e._v("Descending Neighbours")])]),i("div",{domProps:{innerHTML:e._s(e.dfs_path)}}),i("div",{directives:[{name:"show",rawName:"v-show",value:e.dfs_path.length>0,expression:"dfs_path.length > 0"}]},[i("table",{staticStyle:{width:"70%","margin-top":"4px"}},[i("tr",[i("th",[e._v("Vertex")]),e._l(e.dfs_predecessor,(function(t,n){return i("th",{key:n},[e._v(e._s(t.vertex))])}))],2),i("tr",[i("th",[e._v("Predecessor")]),e._l(e.dfs_predecessor,(function(t,n){return i("th",{key:n},[e._v(e._s(t.predecessor))])}))],2)])])])])},l=[],u=i("b85c"),h=(i("b0c0"),i("d3b7"),i("6062"),i("3ca3"),i("ddb0"),i("d81d"),i("a15b"),i("99af"),i("a434"),i("4ec9"),i("4e82"),i("caad"),i("a630"),i("d4ec")),d=i("bee2"),v=function(){function e(){Object(h["a"])(this,e)}return Object(d["a"])(e,[{key:"execute",value:function(e,t){t&&e&&(this.set_graph(e,t),this.dijkstra())}},{key:"set_graph",value:function(e,t){this.graph=e;var i,n=Object(u["a"])(e.vertices.values());try{for(n.s();!(i=n.n()).done;){var s=i.value;s.cost=1/0,s.pred=null}}catch(r){n.e(r)}finally{n.f()}this.source=e.get_vertex(t),this.source.cost=0,this.iteration=0,this.vQueue=Array.from(e.vertices.values())}},{key:"update_dist_pred",value:function(e,t){var i,n=[],s=[],r=Object(u["a"])(this.graph.get_sorted_vertices_names());try{for(r.s();!(i=r.n()).done;){var a=i.value,o=this.graph.get_vertex(a).cost,c=this.graph.get_vertex(a).pred;c=null==c?"-1":c.name,a==this.source.name&&(o="0",c=a),o==1/0&&(o="∞"),n.push(String(o)),s.push(c)}}catch(l){r.e(l)}finally{r.f()}e.push(n),t.push(s)}},{key:"dijkstra",value:function(){if(null!=this.source){this.cost_matrix=[];for(var e=["Step","N"],t=this.graph.get_sorted_vertices_names(),i=t.length-1;i>=0;i--)t[i]==this.source.name&&t.splice(i,1);var n,s=Object(u["a"])(t);try{for(s.s();!(n=s.n()).done;){var r=n.value;r!=this.source.name&&e.push("D(".concat(r,"), p(").concat(r,")"))}}catch(k){s.e(k)}finally{s.f()}this.cost_matrix.push(e);var a=[],o=[];this.dists=[],this.preds=[],this.update_dist_pred(this.dists,this.preds),this.comments=["Initialization"];var c=1;while(this.vQueue.length>0){var l=[this.iteration],h=this.get_min(this.vQueue);a.push(h.name),this.comments.push("Iteration ".concat(c,": Min Vertex (").concat(h.name,") with distance ").concat(h.cost)),c++;var d,v=Object(u["a"])(h.edges.values());try{for(v.s();!(d=v.n()).done;){var _=d.value,f=_.v1==h?_.v2:_.v1,p=parseInt(_.weight)+parseInt(h.cost);f.cost>p&&(f.cost=p,f.pred=h)}}catch(k){v.e(k)}finally{v.f()}o.push(h.name),l.push(a.join(""));var m,g=Object(u["a"])(t);try{for(g.s();!(m=g.n()).done;){var b=m.value;if(o.includes(b))l.push(" ");else{var y=this.graph.get_vertex(b),j=y.cost;j==1/0?(j="∞",l.push("".concat(j))):l.push("".concat(j,",").concat(y.pred.name))}}}catch(k){g.e(k)}finally{g.f()}this.vQueue.splice(this.vQueue.indexOf(h),1),this.iteration++,this.cost_matrix.push(l),this.update_dist_pred(this.dists,this.preds)}}}},{key:"get_min",value:function(e){if(!e||0==e.length)return null;var t,i=e[0],n=Object(u["a"])(e);try{for(n.s();!(t=n.n()).done;){var s=t.value;s.cost<i.cost&&(i=s)}}catch(r){n.e(r)}finally{n.f()}return i}},{key:"print_costs",value:function(){}}]),e}(),_=(i("cb29"),i("159b"),function e(t,i,n){Object(h["a"])(this,e),this.name=t,this.x=i,this.y=n,this.fill="white",this.edges=new Map,this.cost=0,this.pred=null}),f=function(){function e(t,i,n){Object(h["a"])(this,e),this.v1=t,this.v2=i,this.fill="black",this.weight=n}return Object(d["a"])(e,[{key:"get_target",value:function(e){return e==this.v1?this.v2:this.v1}}]),e}(),p=function(){function e(){Object(h["a"])(this,e),this.vertices=new Map}return Object(d["a"])(e,[{key:"get_sorted_vertices_names",value:function(){var e=Array.from(this.vertices.keys());return e.sort(),e}},{key:"get_vertex",value:function(e){return this.vertices.get(e)}},{key:"has_vertex",value:function(e){return this.vertices.has(e)}},{key:"add_vertex",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;if(this.has_vertex(e))return null;var n=new _(e,t,i);return this.vertices.set(e,n),n}},{key:"remove_vertex",value:function(e){var t=this.get_vertex(e);t.edges.forEach((function(i,n){var s=i.v1==t?i.v2:i.v1;s.edges.delete(e),t.edges.delete(n)})),this.vertices.delete(e)}},{key:"set_vertex_name",value:function(e,t){t&&!this.has_vertex(t)&&0!=t.length&&" "!=t&&(this.vertices.set(t,e),this.vertices.delete(e.name),e.name=t)}},{key:"has_edge",value:function(e,t){return e.edges.get(t.name)||t.edges.get(e.name)}},{key:"add_edge",value:function(e,t){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,n=new f(e,t,i);return e.edges.set(t.name,n),t.edges.set(e.name,n),n}},{key:"remove_edge",value:function(e){e.v1.edges.delete(e.v2.name),e.v2.edges.delete(e.v1.name)}},{key:"set_edge_weight",value:function(e,t){t&&!isNaN(parseInt(t))&&(e.weight=t)}},{key:"print",value:function(){var e,t="",i=Object(u["a"])(this.vertices.keys());try{for(i.s();!(e=i.n()).done;){var n=e.value;t+=n}}catch(s){i.e(s)}finally{i.f()}return t}}]),e}(),m=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("g",{on:{mousedown:e.mousedown}},[i("circle",{attrs:{r:"20",fill:e.fill,stroke:"black","stroke-width":"2",cx:e.vertex.x,cy:e.vertex.y}}),i("text",{attrs:{"font-size":"14","text-anchor":"middle","dominant-baseline":"central",x:e.vertex.x,y:e.vertex.y}},[e._v(e._s(this.vertex.name))])])},g=[],b={name:"Vertex",props:["vertex","fill"],methods:{mousedown:function(){this.$emit("selected",this.vertex)}}},y=b,j=(i("72e0"),i("2877")),k=Object(j["a"])(y,m,g,!1,null,"714426be",null),x=k.exports,w=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("g",{on:{mousedown:e.mousedown}},[i("path",{attrs:{stroke:e.stroke_color,"stroke-width":"3",d:e.edge_path}}),i("text",{attrs:{"font-size":"19",fill:e.stroke_color,"text-anchor":"middle","dominant-baseline":"central",x:e.weight_text_pos[0],y:e.weight_text_pos[1]}},[e._v(e._s(this.edge.weight))])])},O=[],N={name:"Edge",props:["edge","stroke_color"],data:function(){return{radius:20}},computed:{v1:function(){return this.edge.v1},v2:function(){return this.edge.v2},degree:function(){return Math.atan2(this.v2.y-this.v1.y,this.v2.x-this.v1.x)},x_offset:function(){return this.radius*Math.cos(this.degree)},y_offset:function(){return this.radius*Math.sin(this.degree)},weight_text_pos:function(){var e=this.x_offset+this.v1.x,t=this.y_offset+this.v1.y,i=-this.x_offset+this.v2.x,n=-this.y_offset+this.v2.y,s=Math.cos(this.degree+Math.PI/2),r=Math.sin(this.degree+Math.PI/2);return[(e+i)/2+8*s,(t+n)/2+8*r]},edge_path:function(){var e=this.x_offset+this.v1.x,t=this.y_offset+this.v1.y,i=-this.x_offset+this.v2.x,n=-this.y_offset+this.v2.y;return"M ".concat(e," ").concat(t," L ").concat(i," ").concat(n)}},methods:{mousedown:function(){this.$emit("selected",this.edge)}}},S=N,M=(i("5f4c"),Object(j["a"])(S,w,O,!1,null,"70b4a524",null)),A=M.exports,E=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("button",{attrs:{disabled:!e.enabled},on:{click:e.clicked}},[e._v(e._s(e.name))])},P=[],T={props:["create","obj"],data:function(){return{tool:null}},computed:{enabled:function(){return!this.tool||this.tool.enabled},name:function(){return this.tool?this.tool.name():""}},mounted:function(){this.tool=new this.create(this.obj)},methods:{clicked:function(){this.$emit("activate_tool",this.tool)}}},C=T,H=Object(j["a"])(C,E,P,!1,null,null,null),D=H.exports,$=i("45eb"),F=i("7e84"),V=i("262e"),I=i("2caf"),L=i("5530"),B=function(){function e(t){Object(h["a"])(this,e);var i=Object(L["a"])({},t),n=i.vertices,s=i.edges,r=i.graph,a=i.graphics;this.vertices=n,this.edges=s,this.graph=r,this.graphics=a,this.current_object=null,this.enabled=!0}return Object(d["a"])(e,[{key:"name",value:function(){return"nameless"}},{key:"generate_graphics",value:function(){return null}},{key:"update_graphics",value:function(e){this.graphics.data||(this.graphics.data=this.generate_graphics());var t=e.currentTarget.getBoundingClientRect();this.graphics.x=e.clientX-t.left-12.5,this.graphics.y=e.clientY-t.top-12.5}},{key:"start",value:function(){}},{key:"handle",value:function(e,t){this.update_graphics(e),this.previous_object=this.current_object,this.current_object=t,this.object_filter(t)?this.on_hit():this.on_miss()}},{key:"on_hit",value:function(){}},{key:"on_miss",value:function(){}},{key:"apply",value:function(){}},{key:"end",value:function(){this.graphics.data=null}},{key:"object_filter",value:function(e){return null!=e}},{key:"multistep",value:function(){return!0}}]),e}(),Q=function(e){Object(V["a"])(i,e);var t=Object(I["a"])(i);function i(e){return Object(h["a"])(this,i),t.call(this,e)}return Object(d["a"])(i,[{key:"name",value:function(){return"Add Vertex"}},{key:"apply",value:function(){var e=this.graphics.code;this.vertices.push(this.graph.add_vertex(e,30,30));var t=e.charCodeAt(0)+1;this.graphics.code=String.fromCharCode(t),console.log("added vertex")}},{key:"multistep",value:function(){return!1}}]),i}(B),R=function(e){Object(V["a"])(i,e);var t=Object(I["a"])(i);function i(){return Object(h["a"])(this,i),t.apply(this,arguments)}return Object(d["a"])(i,[{key:"name",value:function(){return"Remover"}},{key:"generate_graphics",value:function(){return"<path d='M 0 0 L 25 25' stroke='red' stroke-width='2'/><path d='M 0 25 L 25 0' stroke='red' stroke-width='2'/>"}},{key:"on_hit",value:function(){this.previous_object instanceof _?this.previous_object.fill="white":this.previous_object instanceof f&&(this.previous_object.fill="black"),this.current_object.fill="pink"}},{key:"on_miss",value:function(){this.previous_object instanceof _?this.previous_object.fill="white":this.previous_object instanceof f&&(this.previous_object.fill="black")}},{key:"apply",value:function(){if(this.current_object instanceof _){for(var e=this.edges.length-1;e>=0;e--){var t,i=Object(u["a"])(this.current_object.edges.values());try{for(i.s();!(t=i.n()).done;){var n=t.value;if(n==this.edges[e]){this.graph.remove_edge(this.edges[e]),this.edges.splice(e,1);break}}}catch(a){i.e(a)}finally{i.f()}}for(var s=this.vertices.length-1;s>=0;s--)if(this.vertices[s]==this.current_object){this.vertices.splice(s,1);break}this.graph.remove_vertex(this.current_object.name)}else if(this.current_object instanceof f)for(var r=this.edges.length-1;r>=0;r--)if(this.current_object==this.edges[r]){this.graph.remove_edge(this.edges[r]),this.edges.splice(r,1);break}console.log("removed")}},{key:"object_filter",value:function(e){return e instanceof _||e instanceof f}}]),i}(B),z=function(e){Object(V["a"])(i,e);var t=Object(I["a"])(i);function i(e){var n;return Object(h["a"])(this,i),n=t.call(this,e),n.selected_source=null,n}return Object(d["a"])(i,[{key:"name",value:function(){return"Add Edge"}},{key:"start",value:function(){this.graphics.x=0,this.graphics.y=0}},{key:"update_graphics",value:function(e){if(this.selected_source&&this.selected_source!=e.obj){var t=20,i=this.selected_source.x,n=this.selected_source.y,s=0,r=0;if(e.obj)s=e.obj.x,r=e.obj.y;else{var a=e.currentTarget.getBoundingClientRect();s=e.clientX-a.left,r=e.clientY-a.top}var o=Math.atan2(r-n,s-i),c=t*Math.cos(o),l=t*Math.sin(o);i=c+i,n=l+n,e.obj&&(s-=c,r-=l),isNaN(i)||isNaN(n)||isNaN(s)||isNaN(r)||(this.graphics.data="<path d='M ".concat(i," ").concat(n," L ").concat(s," ").concat(r,"' stroke='black' stroke-width='3'/>"))}else this.graphics.data&&(this.graphics.data="")}},{key:"on_hit",value:function(){this.current_object.fill="lightgreen"}},{key:"on_miss",value:function(){this.previous_object instanceof _&&(this.previous_object.fill="white")}},{key:"apply",value:function(){if(this.selected_source){if(this.current_object&&this.selected_source!=this.current_object&&!this.graph.has_edge(this.selected_source,this.current_object)){var e=this.graph.add_edge(this.selected_source,this.current_object,0);this.edges.push(e),this.selected_source=null,console.log("added edge")}}else this.current_object&&(this.selected_source=this.current_object)}},{key:"end",value:function(){Object($["a"])(Object(F["a"])(i.prototype),"end",this).call(this),this.selected_source=null}},{key:"object_filter",value:function(e){return e instanceof _}}]),i}(B),Y={name:"Graph",data:function(){return{vertices:[],edges:[],graph:new p,selected:null,active_tool:null,tools_cb:[Q,z,R],graphics:{data:null,x:0,y:0,code:"0"},dijk_hide:!0,dijk_hide_costs_matrix:!0,dijk_source:null,dijk_costs:null,dijk_comments:null,dijk_dists:null,dijk_preds:null,euler_hide:!0,eulers:[],eulers_total:0,has_euler_circuit:"",ham_hide:!0,ham_from:null,ham_to:null,ham_path:"No hamilton path.",bfs_hide:!0,bfs_from:null,bfs_to:"all",bfs_order:"Ascending Neighbours",bfs_path:"",bfs_predecessor:[],dfs_hide:!0,dfs_from:null,dfs_to:null,dfs_order:"Ascending Neighbours",dfs_path:"",dfs_predecessor:[]}},watch:{dijk_source:function(){this.dijkstra()},vertices:function(e){e.length>0&&null==this.dijk_source&&(this.dijk_source=e[0].name),this.invalidate()},edges:function(){this.invalidate()},ham_from:function(){this.hamilton()},ham_to:function(){this.hamilton()},bfs_from:function(){this.bfs()},bfs_to:function(){this.bfs()},bfs_order:function(){this.bfs()},dfs_from:function(){this.dfs()},dfs_to:function(){this.dfs()},dfs_order:function(){this.dfs()}},computed:{vertices_details:function(){return this.graph.vertices_name}},created:function(){},methods:{vertex_mousedown:function(e){this.active_tool||(this.selected=e)},activate_tool:function(e){if(this.active_tool){if(this.active_tool==e)return;this.active_tool.end()}e.multistep()?(this.active_tool=e,this.active_tool.enabled=!1):e.apply()},object_mousemove:function(e,t){e.obj=t},object_dblclick:function(e,t){this.active_tool||(e.obj=t)},view_mousemove:function(e){if(this.active_tool)this.active_tool.start(),this.active_tool.handle(e,e.obj);else if(this.selected){var t=e.currentTarget.getBoundingClientRect();this.selected.x=e.clientX-t.left,this.selected.y=e.clientY-t.top}},view_mouseup:function(){this.active_tool?this.active_tool.apply():this.selected&&(this.selected=null)},view_mouseleave:function(){this.active_tool&&(this.active_tool.end(),this.active_tool.enabled=!0,this.active_tool=null)},view_dblclick:function(e){if(e.obj instanceof f)this.graph.set_edge_weight(e.obj,prompt("Set weight"));else if(e.obj instanceof _){var t=prompt("Set name");e.obj.name==this.dijk_source&&(this.dijk_source=t),this.graph.set_vertex_name(e.obj,t)}this.invalidate()},invalidate:function(){this.dijkstra(),this.auto_all_euler(),this.euler_circuit(),this.bfs()},dijkstra:function(){if(this.dijk_source){var e=new v;e.execute(this.graph,this.dijk_source),e.print_costs(),this.dijk_costs=e.cost_matrix,this.dijk_comments=e.comments,this.dijk_dists=e.dists,this.dijk_preds=e.preds}},auto_all_euler:function(){this.vertices.length<=7&&this.all_euler()},all_euler:function(){this.euler_pathing=[],this.eulers=[],this.eulers_total=0,this.euler_visited=new Set;var e,t=Object(u["a"])(this.vertices);try{for(t.s();!(e=t.n()).done;){var i,n=e.value,s=Object(u["a"])(this.vertices);try{for(s.s();!(i=s.n()).done;){var r=i.value;this.euler_path(n,r,this.edges.length)}}catch(a){s.e(a)}finally{s.f()}}}catch(a){t.e(a)}finally{t.f()}},euler_path:function(e,t,i){if(this.euler_pathing.push(e),0==i&&e==t){var n=this.euler_pathing.map((function(e){return e.name}));this.eulers.push(n.join("-")),this.eulers_total++}else{var s,r=Object(u["a"])(e.edges.values());try{for(r.s();!(s=r.n()).done;){var a=s.value;this.euler_visited.has(a)||(this.euler_visited.add(a),this.euler_path(a.get_target(e),t,i-1),this.euler_visited.delete(a))}}catch(o){r.e(o)}finally{r.f()}}this.euler_pathing.pop()},euler_circuit:function(){this.has_euler_circuit="Yes, probably. All vertices are even degree. Check connected yourself.";var e,t=Object(u["a"])(this.vertices);try{for(t.s();!(e=t.n()).done;){var i=e.value;if(i.edges.size%2==1){this.has_euler_circuit="No. Vertex '".concat(i.name,"' has odd degree.");break}}}catch(n){t.e(n)}finally{t.f()}},hamilton:function(){this.ham_visited=new Set,this.ham_path_arr=[];var e=this.graph.vertices.get(this.ham_from),t=this.graph.vertices.get(this.ham_to);e&&t&&(this.find_hamilton(e,t,this.vertices.length-1)?this.ham_path=this.ham_path_arr.join("-"):this.ham_path="No hamilton path found from ".concat(this.ham_from," to ").concat(this.ham_to))},find_hamilton:function(e,t,i){if(e==t)return 0==i&&this.ham_path_arr.splice(0,0,e.name),0==i;this.ham_visited.add(e);var n,s=Object(u["a"])(e.edges.values());try{for(s.s();!(n=s.n()).done;){var r=n.value,a=r.get_target(e);if(!this.ham_visited.has(a)&&this.find_hamilton(a,t,i-1))return this.ham_path_arr.splice(0,0,e.name),!0}}catch(o){s.e(o)}finally{s.f()}return this.ham_visited.delete(e),!1},bfs:function(){var e=this.graph.vertices.get(this.bfs_from),t=this.graph.vertices.get(this.bfs_to);if(e){var i=[e],n=new Set;n.add(e);var s,r=new Map,a=Object(u["a"])(this.vertices);try{for(a.s();!(s=a.n()).done;){var o=s.value;r[o.name]=null}}catch(M){a.e(M)}finally{a.f()}var c=[],l=!1;while(!l&&i.length>0){var h=[];i.sort((function(e,t){return e.name>t.name?1:-1})),"Descending Neighbours"==this.bfs_order&&i.reverse();var d,v=Object(u["a"])(i);try{for(v.s();!(d=v.n()).done;){var _,f=d.value,p=!1,m=Object(u["a"])(f.edges.values());try{for(m.s();!(_=m.n()).done;){var g=_.value,b=g.get_target(f);n.has(b)||(p=!0,r[b.name]=f,h.splice(0,0,b),n.add(b),b==t&&(l=!0,c.includes(b)||c.push(b)))}}catch(M){m.e(M)}finally{m.f()}p||t||c.push(f)}}catch(M){v.e(M)}finally{v.f()}i=h}this.bfs_path="";for(var y=0,j=c;y<j.length;y++){var k=j[y],x=[];while(k)x.splice(0,0,k.name),k=r[k.name];this.bfs_path+="<div>".concat(x.join("-"),"</div>")}this.bfs_predecessor=[];var w,O=Object(u["a"])(this.graph.get_sorted_vertices_names());try{for(O.s();!(w=O.n()).done;){var N=w.value,S=r[N];S=null==S?N==e.name?N:"-1":S.name,this.bfs_predecessor.push({vertex:N,predecessor:S})}}catch(M){O.e(M)}finally{O.f()}}},dfs:function(){var e=this,t=this.graph.vertices.get(this.dfs_from),i=this.graph.vertices.get(this.dfs_to);if(t&&i){var n=[t],s=new Set,r=!1;this.dfs_predecessor=[];var a,o=new Map,c=Object(u["a"])(this.vertices);try{for(c.s();!(a=c.n()).done;){var l=a.value;o[l.name]=null}}catch(g){c.e(g)}finally{c.f()}var h=function(){var t=n.pop();if(console.log(t.name),s.add(t),t==i)r=!0;else{var a=Array.from(t.edges.values());a.sort((function(e,i){return e.get_target(t).name>i.get_target(t).name?1:-1})),"Ascending Neighbours"==e.dfs_order&&a.reverse();for(var c=0,l=a;c<l.length;c++){var u=l[c],h=u.get_target(t);s.has(h)||(o[h.name]=t,n.push(h))}}};while(!r&&n.length>0)h();if(this.dfs_path="",r){var d=[],v=i;while(v)d.splice(0,0,v.name),v=o[v.name];this.dfs_path+="<div>".concat(d.join("-"),"</div>")}this.dfs_predecessor=[];var _,f=Object(u["a"])(this.graph.get_sorted_vertices_names());try{for(f.s();!(_=f.n()).done;){var p=_.value,m=o[p];m=null==m?p==t.name?p:"-1":m.name,this.dfs_predecessor.push({vertex:p,predecessor:m})}}catch(g){f.e(g)}finally{f.f()}}}},components:{Vertex:x,Edge:A,Tool:D}},X=Y,G=(i("6793"),Object(j["a"])(X,c,l,!1,null,"54c3d7bc",null)),J=G.exports,q=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[e._v(".")])},K=[],U={},W=Object(j["a"])(U,q,K,!1,null,null,null),Z=W.exports,ee={"/":J,"/test":Z},te={data:function(){return{current:window.location.pathname}},computed:{routedComponent:function(){return ee[this.current]}}},ie=te,ne=Object(j["a"])(ie,a,o,!1,null,null,null),se=ne.exports,re={name:"App",components:{AppRouter:se}},ae=re,oe=Object(j["a"])(ae,s,r,!1,null,null,null),ce=oe.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(ce)}}).$mount("#app")},"5f4c":function(e,t,i){"use strict";i("fd47")},6793:function(e,t,i){"use strict";i("227e")},"72e0":function(e,t,i){"use strict";i("a1d7")},a1d7:function(e,t,i){},fd47:function(e,t,i){}});
//# sourceMappingURL=app.4b64b17e.js.map