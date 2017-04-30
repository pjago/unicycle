// Compiled by ClojureScript 1.9.456 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');
goog.require('goog.string');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__21903__auto__ = [];
var len__21896__auto___29062 = arguments.length;
var i__21897__auto___29063 = (0);
while(true){
if((i__21897__auto___29063 < len__21896__auto___29062)){
args__21903__auto__.push((arguments[i__21897__auto___29063]));

var G__29064 = (i__21897__auto___29063 + (1));
i__21897__auto___29063 = G__29064;
continue;
} else {
}
break;
}

var argseq__21904__auto__ = ((((2) < args__21903__auto__.length))?(new cljs.core.IndexedSeq(args__21903__auto__.slice((2)),(0),null)):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__21904__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__29049_29067 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__29050_29068 = null;
var count__29051_29069 = (0);
var i__29052_29070 = (0);
while(true){
if((i__29052_29070 < count__29051_29069)){
var k_29074 = cljs.core._nth.call(null,chunk__29050_29068,i__29052_29070);
e.setAttribute(cljs.core.name.call(null,k_29074),cljs.core.get.call(null,attrs,k_29074));

var G__29076 = seq__29049_29067;
var G__29077 = chunk__29050_29068;
var G__29078 = count__29051_29069;
var G__29079 = (i__29052_29070 + (1));
seq__29049_29067 = G__29076;
chunk__29050_29068 = G__29077;
count__29051_29069 = G__29078;
i__29052_29070 = G__29079;
continue;
} else {
var temp__6753__auto___29087 = cljs.core.seq.call(null,seq__29049_29067);
if(temp__6753__auto___29087){
var seq__29049_29090__$1 = temp__6753__auto___29087;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29049_29090__$1)){
var c__21586__auto___29091 = cljs.core.chunk_first.call(null,seq__29049_29090__$1);
var G__29093 = cljs.core.chunk_rest.call(null,seq__29049_29090__$1);
var G__29094 = c__21586__auto___29091;
var G__29095 = cljs.core.count.call(null,c__21586__auto___29091);
var G__29096 = (0);
seq__29049_29067 = G__29093;
chunk__29050_29068 = G__29094;
count__29051_29069 = G__29095;
i__29052_29070 = G__29096;
continue;
} else {
var k_29101 = cljs.core.first.call(null,seq__29049_29090__$1);
e.setAttribute(cljs.core.name.call(null,k_29101),cljs.core.get.call(null,attrs,k_29101));

var G__29104 = cljs.core.next.call(null,seq__29049_29090__$1);
var G__29105 = null;
var G__29106 = (0);
var G__29107 = (0);
seq__29049_29067 = G__29104;
chunk__29050_29068 = G__29105;
count__29051_29069 = G__29106;
i__29052_29070 = G__29107;
continue;
}
} else {
}
}
break;
}

var seq__29053_29109 = cljs.core.seq.call(null,children);
var chunk__29054_29110 = null;
var count__29055_29111 = (0);
var i__29056_29112 = (0);
while(true){
if((i__29056_29112 < count__29055_29111)){
var ch_29117 = cljs.core._nth.call(null,chunk__29054_29110,i__29056_29112);
e.appendChild(ch_29117);

var G__29119 = seq__29053_29109;
var G__29120 = chunk__29054_29110;
var G__29121 = count__29055_29111;
var G__29122 = (i__29056_29112 + (1));
seq__29053_29109 = G__29119;
chunk__29054_29110 = G__29120;
count__29055_29111 = G__29121;
i__29056_29112 = G__29122;
continue;
} else {
var temp__6753__auto___29124 = cljs.core.seq.call(null,seq__29053_29109);
if(temp__6753__auto___29124){
var seq__29053_29127__$1 = temp__6753__auto___29124;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29053_29127__$1)){
var c__21586__auto___29128 = cljs.core.chunk_first.call(null,seq__29053_29127__$1);
var G__29129 = cljs.core.chunk_rest.call(null,seq__29053_29127__$1);
var G__29130 = c__21586__auto___29128;
var G__29131 = cljs.core.count.call(null,c__21586__auto___29128);
var G__29132 = (0);
seq__29053_29109 = G__29129;
chunk__29054_29110 = G__29130;
count__29055_29111 = G__29131;
i__29056_29112 = G__29132;
continue;
} else {
var ch_29133 = cljs.core.first.call(null,seq__29053_29127__$1);
e.appendChild(ch_29133);

var G__29134 = cljs.core.next.call(null,seq__29053_29127__$1);
var G__29135 = null;
var G__29136 = (0);
var G__29137 = (0);
seq__29053_29109 = G__29134;
chunk__29054_29110 = G__29135;
count__29055_29111 = G__29136;
i__29056_29112 = G__29137;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq29046){
var G__29047 = cljs.core.first.call(null,seq29046);
var seq29046__$1 = cljs.core.next.call(null,seq29046);
var G__29048 = cljs.core.first.call(null,seq29046__$1);
var seq29046__$2 = cljs.core.next.call(null,seq29046__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__29047,G__29048,seq29046__$2);
});

if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__21706__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__21707__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__21708__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__21709__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__21710__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__21706__auto__,prefer_table__21707__auto__,method_cache__21708__auto__,cached_hierarchy__21709__auto__,hierarchy__21710__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__21706__auto__,prefer_table__21707__auto__,method_cache__21708__auto__,cached_hierarchy__21709__auto__,hierarchy__21710__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__21710__auto__,method_table__21706__auto__,prefer_table__21707__auto__,method_cache__21708__auto__,cached_hierarchy__21709__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1("#"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cont_id)].join('')))){
var el_29147 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-o-transition: all 0.2s ease-in-out;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("transition: all 0.2s ease-in-out;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("font-size: 13px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("border-top: 1px solid #f5f5f5;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("line-height: 18px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("color: #333;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("font-family: monospace;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("padding: 0px 10px 0px 70px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("position: fixed;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("bottom: 0px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("left: 0px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("height: 0px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("opacity: 0.0;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("box-sizing: border-box;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("z-index: 10000;")].join('')], null));
el_29147.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_29147.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_29147.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_29147);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__29154,st_map){
var map__29162 = p__29154;
var map__29162__$1 = ((((!((map__29162 == null)))?((((map__29162.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29162.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29162):map__29162);
var container_el = cljs.core.get.call(null,map__29162__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__29162,map__29162__$1,container_el){
return (function (p__29167){
var vec__29168 = p__29167;
var k = cljs.core.nth.call(null,vec__29168,(0),null);
var v = cljs.core.nth.call(null,vec__29168,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__29162,map__29162__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__29198,dom_str){
var map__29207 = p__29198;
var map__29207__$1 = ((((!((map__29207 == null)))?((((map__29207.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29207.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29207):map__29207);
var c = map__29207__$1;
var content_area_el = cljs.core.get.call(null,map__29207__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__29267){
var map__29278 = p__29267;
var map__29278__$1 = ((((!((map__29278 == null)))?((((map__29278.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29278.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29278):map__29278);
var content_area_el = cljs.core.get.call(null,map__29278__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<a style=\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1("float: right;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("font-size: 18px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("text-decoration: none;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("text-align: right;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("width: 30px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("height: 30px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("color: rgba(84,84,84, 0.5);"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("x"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__24836__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24836__auto__){
return (function (){
var f__24837__auto__ = (function (){var switch__24601__auto__ = ((function (c__24836__auto__){
return (function (state_29402){
var state_val_29403 = (state_29402[(1)]);
if((state_val_29403 === (1))){
var inst_29381 = (state_29402[(7)]);
var inst_29381__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_29383 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_29384 = ["10px","10px","100%","68px","1.0"];
var inst_29385 = cljs.core.PersistentHashMap.fromArrays(inst_29383,inst_29384);
var inst_29386 = cljs.core.merge.call(null,inst_29385,style);
var inst_29387 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_29381__$1,inst_29386);
var inst_29389 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_29381__$1,msg);
var inst_29392 = cljs.core.async.timeout.call(null,(300));
var state_29402__$1 = (function (){var statearr_29416 = state_29402;
(statearr_29416[(8)] = inst_29387);

(statearr_29416[(7)] = inst_29381__$1);

(statearr_29416[(9)] = inst_29389);

return statearr_29416;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29402__$1,(2),inst_29392);
} else {
if((state_val_29403 === (2))){
var inst_29381 = (state_29402[(7)]);
var inst_29394 = (state_29402[(2)]);
var inst_29396 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_29397 = ["auto"];
var inst_29398 = cljs.core.PersistentHashMap.fromArrays(inst_29396,inst_29397);
var inst_29399 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_29381,inst_29398);
var state_29402__$1 = (function (){var statearr_29421 = state_29402;
(statearr_29421[(10)] = inst_29394);

return statearr_29421;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29402__$1,inst_29399);
} else {
return null;
}
}
});})(c__24836__auto__))
;
return ((function (switch__24601__auto__,c__24836__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__24602__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__24602__auto____0 = (function (){
var statearr_29442 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29442[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__24602__auto__);

(statearr_29442[(1)] = (1));

return statearr_29442;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__24602__auto____1 = (function (state_29402){
while(true){
var ret_value__24603__auto__ = (function (){try{while(true){
var result__24604__auto__ = switch__24601__auto__.call(null,state_29402);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24604__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24604__auto__;
}
break;
}
}catch (e29447){if((e29447 instanceof Object)){
var ex__24605__auto__ = e29447;
var statearr_29449_29525 = state_29402;
(statearr_29449_29525[(5)] = ex__24605__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29402);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29447;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24603__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29526 = state_29402;
state_29402 = G__29526;
continue;
} else {
return ret_value__24603__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__24602__auto__ = function(state_29402){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__24602__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__24602__auto____1.call(this,state_29402);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__24602__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__24602__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__24602__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__24602__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__24602__auto__;
})()
;})(switch__24601__auto__,c__24836__auto__))
})();
var state__24838__auto__ = (function (){var statearr_29456 = f__24837__auto__.call(null);
(statearr_29456[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24836__auto__);

return statearr_29456;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24838__auto__);
});})(c__24836__auto__))
);

return c__24836__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div style=\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1("font-size: 26px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("line-height: 26px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("margin-bottom: 2px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("padding-top: 1px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_name),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\" data-file-line=\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_number),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var msg__$1 = goog.string.htmlEscape(msg);
var temp__6751__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg__$1);
if(cljs.core.truth_(temp__6751__auto__)){
var vec__29547 = temp__6751__auto__;
var f = cljs.core.nth.call(null,vec__29547,(0),null);
var ln = cljs.core.nth.call(null,vec__29547,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg__$1);
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__29580 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__29580,(0),null);
var file_line = cljs.core.nth.call(null,vec__29580,(1),null);
var file_column = cljs.core.nth.call(null,vec__29580,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__29580,file_name,file_line,file_column){
return (function (p1__29552_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.string.htmlEscape(p1__29552_SHARP_)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</div>")].join('');
});})(vec__29580,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.close_link.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__20675__auto__ = file_line;
if(cljs.core.truth_(or__20675__auto__)){
return or__20675__auto__;
} else {
var and__20663__auto__ = cause;
if(cljs.core.truth_(and__20663__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__20663__auto__;
}
}
})(),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cause)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Error on file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.string.htmlEscape(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", line "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", column "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.close_link.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__29709 = figwheel.client.heads_up.ensure_container.call(null);
var map__29709__$1 = ((((!((map__29709 == null)))?((((map__29709.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29709.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29709):map__29709);
var content_area_el = cljs.core.get.call(null,map__29709__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__24836__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24836__auto__){
return (function (){
var f__24837__auto__ = (function (){var switch__24601__auto__ = ((function (c__24836__auto__){
return (function (state_29907){
var state_val_29908 = (state_29907[(1)]);
if((state_val_29908 === (1))){
var inst_29882 = (state_29907[(7)]);
var inst_29882__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_29884 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_29885 = ["0.0"];
var inst_29886 = cljs.core.PersistentHashMap.fromArrays(inst_29884,inst_29885);
var inst_29887 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_29882__$1,inst_29886);
var inst_29889 = cljs.core.async.timeout.call(null,(300));
var state_29907__$1 = (function (){var statearr_29919 = state_29907;
(statearr_29919[(8)] = inst_29887);

(statearr_29919[(7)] = inst_29882__$1);

return statearr_29919;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29907__$1,(2),inst_29889);
} else {
if((state_val_29908 === (2))){
var inst_29882 = (state_29907[(7)]);
var inst_29891 = (state_29907[(2)]);
var inst_29894 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_29897 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_29898 = cljs.core.PersistentHashMap.fromArrays(inst_29894,inst_29897);
var inst_29899 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_29882,inst_29898);
var inst_29900 = cljs.core.async.timeout.call(null,(200));
var state_29907__$1 = (function (){var statearr_29920 = state_29907;
(statearr_29920[(9)] = inst_29891);

(statearr_29920[(10)] = inst_29899);

return statearr_29920;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29907__$1,(3),inst_29900);
} else {
if((state_val_29908 === (3))){
var inst_29882 = (state_29907[(7)]);
var inst_29902 = (state_29907[(2)]);
var inst_29903 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_29882,"");
var state_29907__$1 = (function (){var statearr_29921 = state_29907;
(statearr_29921[(11)] = inst_29902);

return statearr_29921;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29907__$1,inst_29903);
} else {
return null;
}
}
}
});})(c__24836__auto__))
;
return ((function (switch__24601__auto__,c__24836__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__24602__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__24602__auto____0 = (function (){
var statearr_29927 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29927[(0)] = figwheel$client$heads_up$clear_$_state_machine__24602__auto__);

(statearr_29927[(1)] = (1));

return statearr_29927;
});
var figwheel$client$heads_up$clear_$_state_machine__24602__auto____1 = (function (state_29907){
while(true){
var ret_value__24603__auto__ = (function (){try{while(true){
var result__24604__auto__ = switch__24601__auto__.call(null,state_29907);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24604__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24604__auto__;
}
break;
}
}catch (e29928){if((e29928 instanceof Object)){
var ex__24605__auto__ = e29928;
var statearr_29929_30002 = state_29907;
(statearr_29929_30002[(5)] = ex__24605__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29907);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29928;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24603__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30022 = state_29907;
state_29907 = G__30022;
continue;
} else {
return ret_value__24603__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__24602__auto__ = function(state_29907){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__24602__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__24602__auto____1.call(this,state_29907);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__24602__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__24602__auto____0;
figwheel$client$heads_up$clear_$_state_machine__24602__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__24602__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__24602__auto__;
})()
;})(switch__24601__auto__,c__24836__auto__))
})();
var state__24838__auto__ = (function (){var statearr_29932 = f__24837__auto__.call(null);
(statearr_29932[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24836__auto__);

return statearr_29932;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24838__auto__);
});})(c__24836__auto__))
);

return c__24836__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__24836__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24836__auto__){
return (function (){
var f__24837__auto__ = (function (){var switch__24601__auto__ = ((function (c__24836__auto__){
return (function (state_30115){
var state_val_30116 = (state_30115[(1)]);
if((state_val_30116 === (1))){
var inst_30097 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_30115__$1 = state_30115;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30115__$1,(2),inst_30097);
} else {
if((state_val_30116 === (2))){
var inst_30099 = (state_30115[(2)]);
var inst_30103 = cljs.core.async.timeout.call(null,(400));
var state_30115__$1 = (function (){var statearr_30122 = state_30115;
(statearr_30122[(7)] = inst_30099);

return statearr_30122;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30115__$1,(3),inst_30103);
} else {
if((state_val_30116 === (3))){
var inst_30105 = (state_30115[(2)]);
var inst_30106 = figwheel.client.heads_up.clear.call(null);
var state_30115__$1 = (function (){var statearr_30124 = state_30115;
(statearr_30124[(8)] = inst_30105);

return statearr_30124;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30115__$1,(4),inst_30106);
} else {
if((state_val_30116 === (4))){
var inst_30112 = (state_30115[(2)]);
var state_30115__$1 = state_30115;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30115__$1,inst_30112);
} else {
return null;
}
}
}
}
});})(c__24836__auto__))
;
return ((function (switch__24601__auto__,c__24836__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__24602__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__24602__auto____0 = (function (){
var statearr_30141 = [null,null,null,null,null,null,null,null,null];
(statearr_30141[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__24602__auto__);

(statearr_30141[(1)] = (1));

return statearr_30141;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__24602__auto____1 = (function (state_30115){
while(true){
var ret_value__24603__auto__ = (function (){try{while(true){
var result__24604__auto__ = switch__24601__auto__.call(null,state_30115);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24604__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24604__auto__;
}
break;
}
}catch (e30146){if((e30146 instanceof Object)){
var ex__24605__auto__ = e30146;
var statearr_30147_30216 = state_30115;
(statearr_30147_30216[(5)] = ex__24605__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30115);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30146;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24603__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30226 = state_30115;
state_30115 = G__30226;
continue;
} else {
return ret_value__24603__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__24602__auto__ = function(state_30115){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__24602__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__24602__auto____1.call(this,state_30115);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__24602__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__24602__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__24602__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__24602__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__24602__auto__;
})()
;})(switch__24601__auto__,c__24836__auto__))
})();
var state__24838__auto__ = (function (){var statearr_30155 = f__24837__auto__.call(null);
(statearr_30155[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24836__auto__);

return statearr_30155;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24838__auto__);
});})(c__24836__auto__))
);

return c__24836__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";

//# sourceMappingURL=heads_up.js.map