// Compiled by ClojureScript 1.9.456 {}
goog.provide('unicycle.ui');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.events');
goog.require('om.next');
goog.require('om.dom');
goog.require('common.math');
goog.require('common.web');
goog.require('unicycle.core');
goog.require('clojure.core.matrix.operators');
unicycle.ui.auto = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(1)], null),new cljs.core.Keyword(null,"yaw","yaw",-1791898389),(0),new cljs.core.Keyword(null,"wheels","wheels",756478381),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"uni","uni",-1194876440),0.2], null),new cljs.core.Keyword(null,"engine","engine",1459054265),clojure.core.matrix.operators._STAR_.call(null,common.math.π,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(10)], null)),new cljs.core.Keyword(null,"k\u03C1","k\u03C1",761199456),(2),new cljs.core.Keyword(null,"k\u03D5","k\u03D5",1122837548),(4),new cljs.core.Keyword(null,"\u03F5","\u03F5",170557309),0.2], null);
unicycle.ui.init_data = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cycles","cycles",-954611167),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [unicycle.ui.auto,cljs.core.assoc.call(null,unicycle.ui.auto,new cljs.core.Keyword(null,"wheels","wheels",756478381),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dff","dff",-1904902866),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.2,0.1], null)], null),new cljs.core.Keyword(null,"engine","engine",1459054265),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(600),(600)], null)),cljs.core.assoc.call(null,unicycle.ui.auto,new cljs.core.Keyword(null,"wheels","wheels",756478381),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"car","car",-1555651612),0.2,(0)], null))], null),new cljs.core.Keyword(null,"cmd","cmd",-302931143),cljs.core.cycle.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"goto","goto",80149757),new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.Keyword(null,"avoid","avoid",-1564529805)], null)),new cljs.core.Keyword(null,"mouse","mouse",478628972),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(1)], null),new cljs.core.Keyword(null,"drop","drop",364481611),0.2], null);
unicycle.ui.chassis = (function unicycle$ui$chassis(size,diameter){
var height = clojure.core.matrix.operators._PLUS_.call(null,clojure.core.matrix.operators._SLASH_.call(null,size,(4)),diameter);
return React.createElement("a-entity",cljs.core.clj__GT_js.call(null,common.web.map__GT_frame.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),clojure.core.matrix.operators._SLASH_.call(null,size,(2))], null),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [-2.5,(90),(90)], null),new cljs.core.Keyword(null,"geometry","geometry",-405034994),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"primitive","primitive",1884541424),new cljs.core.Symbol(null,"box","box",-1123515375,null),new cljs.core.Keyword(null,"width","width",-384071477),size,new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"depth","depth",1768663640),size], null)], null))));
});
unicycle.ui.wheel = (function unicycle$ui$wheel(diameter,yaw,position){
return React.createElement("a-entity",cljs.core.clj__GT_js.call(null,common.web.map__GT_frame.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"position","position",-2011731912),clojure.core.matrix.operators._PLUS_.call(null,position,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),clojure.core.matrix.operators._SLASH_.call(null,diameter,(2))], null)),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.core.matrix.operators._.call(null,clojure.core.matrix.operators._STAR_.call(null,common.math.rad__GT_deg,yaw)),(90),(180)], null),new cljs.core.Keyword(null,"material","material",460118677),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Symbol(null,"black","black",-1360156122,null)], null),new cljs.core.Keyword(null,"geometry","geometry",-405034994),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"primitive","primitive",1884541424),new cljs.core.Symbol(null,"cylinder","cylinder",-121817508,null),new cljs.core.Keyword(null,"radius","radius",-2073122258),clojure.core.matrix.operators._SLASH_.call(null,diameter,(2)),new cljs.core.Keyword(null,"height","height",1025178622),clojure.core.matrix.operators._SLASH_.call(null,diameter,(3))], null)], null))));
});
if(typeof unicycle.ui.a_cycle !== 'undefined'){
} else {
unicycle.ui.a_cycle = (function (){var method_table__21706__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__21707__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__21708__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__21709__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__21710__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"unicycle.ui","a-cycle"),cljs.core.comp.call(null,cljs.core.first,new cljs.core.Keyword(null,"wheels","wheels",756478381)),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__21710__auto__,method_table__21706__auto__,prefer_table__21707__auto__,method_cache__21708__auto__,cached_hierarchy__21709__auto__));
})();
}
cljs.core._add_method.call(null,unicycle.ui.a_cycle,new cljs.core.Keyword(null,"uni","uni",-1194876440),(function (p__51251){
var map__51252 = p__51251;
var map__51252__$1 = ((((!((map__51252 == null)))?((((map__51252.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51252.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51252):map__51252);
var vec__51253 = cljs.core.get.call(null,map__51252__$1,new cljs.core.Keyword(null,"wheels","wheels",756478381));
var type = cljs.core.nth.call(null,vec__51253,(0),null);
var size = cljs.core.nth.call(null,vec__51253,(1),null);
var yaw = cljs.core.get.call(null,map__51252__$1,new cljs.core.Keyword(null,"yaw","yaw",-1791898389));
var pos = cljs.core.get.call(null,map__51252__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
return React.createElement("a-entity",cljs.core.clj__GT_js.call(null,common.web.map__GT_frame.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),type,new cljs.core.Keyword(null,"position","position",-2011731912),pos,new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),clojure.core.matrix.operators._STAR_.call(null,common.math.rad__GT_deg,yaw)], null)], null))),om.util.force_children.call(null,unicycle.ui.chassis.call(null,size,clojure.core.matrix.operators._SLASH_.call(null,size,(3)))),om.util.force_children.call(null,unicycle.ui.wheel.call(null,clojure.core.matrix.operators._SLASH_.call(null,size,1.8),(0),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null))));
}));
cljs.core._add_method.call(null,unicycle.ui.a_cycle,new cljs.core.Keyword(null,"dff","dff",-1904902866),(function (p__51257){
var map__51258 = p__51257;
var map__51258__$1 = ((((!((map__51258 == null)))?((((map__51258.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51258.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51258):map__51258);
var vec__51259 = cljs.core.get.call(null,map__51258__$1,new cljs.core.Keyword(null,"wheels","wheels",756478381));
var type = cljs.core.nth.call(null,vec__51259,(0),null);
var vec__51262 = cljs.core.nth.call(null,vec__51259,(1),null);
var base = cljs.core.nth.call(null,vec__51262,(0),null);
var diam = cljs.core.nth.call(null,vec__51262,(1),null);
var yaw = cljs.core.get.call(null,map__51258__$1,new cljs.core.Keyword(null,"yaw","yaw",-1791898389));
var pos = cljs.core.get.call(null,map__51258__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
return React.createElement("a-entity",cljs.core.clj__GT_js.call(null,common.web.map__GT_frame.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),type,new cljs.core.Keyword(null,"position","position",-2011731912),pos,new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),clojure.core.matrix.operators._STAR_.call(null,common.math.rad__GT_deg,yaw)], null)], null))),om.util.force_children.call(null,unicycle.ui.chassis.call(null,base,diam)),om.util.force_children.call(null,unicycle.ui.wheel.call(null,diam,(0),clojure.core.matrix.operators._STAR_.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),0.5,(0)], null)))),om.util.force_children.call(null,unicycle.ui.wheel.call(null,diam,(0),clojure.core.matrix.operators._STAR_.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),-0.5,(0)], null)))));
}));
cljs.core._add_method.call(null,unicycle.ui.a_cycle,new cljs.core.Keyword(null,"car","car",-1555651612),(function (p__51266){
var map__51267 = p__51266;
var map__51267__$1 = ((((!((map__51267 == null)))?((((map__51267.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51267.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51267):map__51267);
var vec__51268 = cljs.core.get.call(null,map__51267__$1,new cljs.core.Keyword(null,"wheels","wheels",756478381));
var type = cljs.core.nth.call(null,vec__51268,(0),null);
var size = cljs.core.nth.call(null,vec__51268,(1),null);
var w_yaw = cljs.core.nth.call(null,vec__51268,(2),null);
var yaw = cljs.core.get.call(null,map__51267__$1,new cljs.core.Keyword(null,"yaw","yaw",-1791898389));
var pos = cljs.core.get.call(null,map__51267__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
return React.createElement("a-entity",cljs.core.clj__GT_js.call(null,common.web.map__GT_frame.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),type,new cljs.core.Keyword(null,"position","position",-2011731912),pos,new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),clojure.core.matrix.operators._STAR_.call(null,common.math.rad__GT_deg,yaw)], null)], null))),om.util.force_children.call(null,unicycle.ui.chassis.call(null,size,clojure.core.matrix.operators._SLASH_.call(null,size,(3)))),om.util.force_children.call(null,unicycle.ui.wheel.call(null,clojure.core.matrix.operators._SLASH_.call(null,size,(3)),w_yaw,clojure.core.matrix.operators._STAR_.call(null,size,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.25,0.5,(0)], null)))),om.util.force_children.call(null,unicycle.ui.wheel.call(null,clojure.core.matrix.operators._SLASH_.call(null,size,(3)),(0),clojure.core.matrix.operators._STAR_.call(null,size,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.25,0.0,(0)], null)))),om.util.force_children.call(null,unicycle.ui.wheel.call(null,clojure.core.matrix.operators._SLASH_.call(null,size,(3)),w_yaw,clojure.core.matrix.operators._STAR_.call(null,size,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.25,-0.5,(0)], null)))));
}));
/**
 * @constructor
 */
unicycle.ui.App = (function unicycle$ui$App(){
var this__48699__auto__ = this;
React.Component.apply(this__48699__auto__,arguments);

if(!((this__48699__auto__.initLocalState == null))){
this__48699__auto__.state = this__48699__auto__.initLocalState();
} else {
this__48699__auto__.state = {};
}

return this__48699__auto__;
});

unicycle.ui.App.prototype = goog.object.clone(React.Component.prototype);

var x51276_51288 = unicycle.ui.App.prototype;
x51276_51288.componentWillUpdate = ((function (x51276_51288){
return (function (next_props__48554__auto__,next_state__48555__auto__){
var this__48553__auto__ = this;
if(((!((this__48553__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__48553__auto__.om$next$Ident$)))?true:false):false)){
var ident__48557__auto___51289 = om.next.ident.call(null,this__48553__auto__,om.next.props.call(null,this__48553__auto__));
var next_ident__48558__auto___51290 = om.next.ident.call(null,this__48553__auto__,om.next._next_props.call(null,next_props__48554__auto__,this__48553__auto__));
if(cljs.core.not_EQ_.call(null,ident__48557__auto___51289,next_ident__48558__auto___51290)){
var idxr__48559__auto___51291 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__48553__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__48559__auto___51291 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__48559__auto___51291),((function (idxr__48559__auto___51291,ident__48557__auto___51289,next_ident__48558__auto___51290,this__48553__auto__,x51276_51288){
return (function (indexes__48560__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__48560__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__48557__auto___51289], null),cljs.core.disj,this__48553__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__48558__auto___51290], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__48553__auto__);
});})(idxr__48559__auto___51291,ident__48557__auto___51289,next_ident__48558__auto___51290,this__48553__auto__,x51276_51288))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__48553__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__48553__auto__);
});})(x51276_51288))
;

x51276_51288.shouldComponentUpdate = ((function (x51276_51288){
return (function (next_props__48554__auto__,next_state__48555__auto__){
var this__48553__auto__ = this;
var next_children__48556__auto__ = next_props__48554__auto__.children;
var next_props__48554__auto____$1 = goog.object.get(next_props__48554__auto__,"omcljs$value");
var next_props__48554__auto____$2 = (function (){var G__51278 = next_props__48554__auto____$1;
if((next_props__48554__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__51278);
} else {
return G__51278;
}
})();
var or__20675__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__48553__auto__),next_props__48554__auto____$2);
if(or__20675__auto__){
return or__20675__auto__;
} else {
var or__20675__auto____$1 = (function (){var and__20663__auto__ = this__48553__auto__.state;
if(cljs.core.truth_(and__20663__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__48553__auto__.state,"omcljs$state"),goog.object.get(next_state__48555__auto__,"omcljs$state"));
} else {
return and__20663__auto__;
}
})();
if(cljs.core.truth_(or__20675__auto____$1)){
return or__20675__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__48553__auto__.props.children,next_children__48556__auto__);
}
}
});})(x51276_51288))
;

x51276_51288.componentWillUnmount = ((function (x51276_51288){
return (function (){
var this__48553__auto__ = this;
var r__48564__auto__ = om.next.get_reconciler.call(null,this__48553__auto__);
var cfg__48565__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__48564__auto__);
var st__48566__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__48565__auto__);
var indexer__48563__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__48565__auto__);
if(cljs.core.truth_((function (){var and__20663__auto__ = !((st__48566__auto__ == null));
if(and__20663__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__48566__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__48553__auto__], null));
} else {
return and__20663__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__48566__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__48553__auto__);
} else {
}

if((indexer__48563__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__48563__auto__,this__48553__auto__);
}
});})(x51276_51288))
;

x51276_51288.componentDidUpdate = ((function (x51276_51288){
return (function (prev_props__48561__auto__,prev_state__48562__auto__){
var this__48553__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__48553__auto__);
});})(x51276_51288))
;

x51276_51288.isMounted = ((function (x51276_51288){
return (function (){
var this__48553__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__48553__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x51276_51288))
;

x51276_51288.componentWillMount = ((function (x51276_51288){
return (function (){
var this__48553__auto__ = this;
var indexer__48563__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__48553__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__48563__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__48563__auto__,this__48553__auto__);
}
});})(x51276_51288))
;

x51276_51288.render = ((function (x51276_51288){
return (function (){
var this__48552__auto__ = this;
var this$ = this__48552__auto__;
var _STAR_reconciler_STAR_51279 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_51280 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_51281 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_51282 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_51283 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__48552__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__48552__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__48552__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__48552__auto__);

om.next._STAR_parent_STAR_ = this__48552__auto__;

try{var map__51284 = om.next.props.call(null,this$);
var map__51284__$1 = ((((!((map__51284 == null)))?((((map__51284.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51284.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51284):map__51284);
var cycles = cljs.core.get.call(null,map__51284__$1,new cljs.core.Keyword(null,"cycles","cycles",-954611167));
var mouse = cljs.core.get.call(null,map__51284__$1,new cljs.core.Keyword(null,"mouse","mouse",478628972));
var drop = cljs.core.get.call(null,map__51284__$1,new cljs.core.Keyword(null,"drop","drop",364481611));
return om.dom.div.call(null,({"style": ({"width": "100%"})}),om.dom.h1.call(null,({"style": ({"position": "absolute", "zIndex": (-1)})}),"Unicycle"),cljs.core.apply.call(null,common.web.a_scene,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"scene",new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"scene","scene",1523800415),new cljs.core.Keyword(null,"inspector","inspector",1532863880),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"url","url",276297046),"https://aframe.io/releases/0.3.0/aframe-inspector.min.js"], null)], null),React.createElement("a-entity",cljs.core.clj__GT_js.call(null,common.web.map__GT_frame.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),"camera",new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"camera-with-cursor","camera-with-cursor",411998476),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(-5)], null),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(180),(0),(180)], null),new cljs.core.Keyword(null,"camera","camera",-1190348585),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active","active",1895962068),true], null),new cljs.core.Keyword(null,"wasd-controls","wasd-controls",547193661),"adInverted: true; wsInverted: true"], null)))),React.createElement("a-entity",cljs.core.clj__GT_js.call(null,common.web.map__GT_frame.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),"drop",new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"drop-shadow","drop-shadow",878776332),new cljs.core.Keyword(null,"position","position",-2011731912),mouse,new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(180),(0),(180)], null),new cljs.core.Keyword(null,"geometry","geometry",-405034994),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"primitive","primitive",1884541424),new cljs.core.Symbol(null,"circle","circle",-751223407,null),new cljs.core.Keyword(null,"radius","radius",-2073122258),clojure.core.matrix.operators._SLASH_.call(null,drop,(2))], null)], null)))),cljs.core.map.call(null,unicycle.ui.a_cycle,cycles)));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_51283;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_51282;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_51281;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_51280;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_51279;
}});})(x51276_51288))
;


unicycle.ui.App.prototype.constructor = unicycle.ui.App;

unicycle.ui.App.prototype.constructor.displayName = "unicycle.ui/App";

unicycle.ui.App.prototype.om$isComponent = true;

var x51286_51292 = unicycle.ui.App;
/** @nocollapse */
x51286_51292.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x51286_51292.om$next$IQuery$query$arity$1 = ((function (x51286_51292){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cycles","cycles",-954611167),new cljs.core.Keyword(null,"mouse","mouse",478628972),new cljs.core.Keyword(null,"drop","drop",364481611)], null);
});})(x51286_51292))
;


var x51287_51293 = unicycle.ui.App.prototype;

x51287_51293.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;


x51287_51293.om$next$IQuery$query$arity$1 = ((function (x51287_51293){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cycles","cycles",-954611167),new cljs.core.Keyword(null,"mouse","mouse",478628972),new cljs.core.Keyword(null,"drop","drop",364481611)], null);
});})(x51287_51293))
;


unicycle.ui.App.cljs$lang$type = true;

unicycle.ui.App.cljs$lang$ctorStr = "unicycle.ui/App";

unicycle.ui.App.cljs$lang$ctorPrWriter = (function (this__48702__auto__,writer__48703__auto__,opt__48704__auto__){
return cljs.core._write.call(null,writer__48703__auto__,"unicycle.ui/App");
});
if(typeof unicycle.ui.app_state !== 'undefined'){
} else {
unicycle.ui.app_state = cljs.core.atom.call(null,om.next.tree__GT_db.call(null,unicycle.ui.App,unicycle.ui.init_data,true));
}
unicycle.ui.read = (function unicycle$ui$read(p__51294,key,params){
var map__51297 = p__51294;
var map__51297__$1 = ((((!((map__51297 == null)))?((((map__51297.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51297.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51297):map__51297);
var env = map__51297__$1;
var state = cljs.core.get.call(null,map__51297__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var query = cljs.core.get.call(null,map__51297__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var st = cljs.core.deref.call(null,state);
var temp__6751__auto__ = cljs.core.get.call(null,st,key);
if(cljs.core.truth_(temp__6751__auto__)){
var value = temp__6751__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),value], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"not-found","not-found",-629079980)], null);
}
});
if(typeof unicycle.ui.mutate !== 'undefined'){
} else {
unicycle.ui.mutate = (function (){var method_table__21706__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__21707__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__21708__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__21709__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__21710__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"unicycle.ui","mutate"),om.next.dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__21710__auto__,method_table__21706__auto__,prefer_table__21707__auto__,method_cache__21708__auto__,cached_hierarchy__21709__auto__));
})();
}
cljs.core._add_method.call(null,unicycle.ui.mutate,new cljs.core.Symbol(null,"move","move",-470352782,null),(function (p__51299,key,params){
var map__51300 = p__51299;
var map__51300__$1 = ((((!((map__51300 == null)))?((((map__51300.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51300.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51300):map__51300);
var env = map__51300__$1;
var state = cljs.core.get.call(null,map__51300__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var query = cljs.core.get.call(null,map__51300__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var ref = cljs.core.get.call(null,map__51300__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__51300,map__51300__$1,env,state,query,ref){
return (function (){
var r = (new THREE.Raycaster());
var z = (new THREE.Plane((new THREE.Vector3((0),(0),(1))),(-1)));
var v = (new THREE.Vector2(clojure.core.matrix.operators._.call(null,clojure.core.matrix.operators._STAR_.call(null,clojure.core.matrix.operators._SLASH_.call(null,new cljs.core.Keyword(null,"clientX","clientX",1931278917).cljs$core$IFn$_invoke$arity$1(params),window.innerWidth),(2)),(1)),clojure.core.matrix.operators._.call(null,(1),clojure.core.matrix.operators._STAR_.call(null,clojure.core.matrix.operators._SLASH_.call(null,new cljs.core.Keyword(null,"clientY","clientY",-1350333697).cljs$core$IFn$_invoke$arity$1(params),window.innerHeight),(2)))));
var cam = (goog.dom.getElement("camera").object3D.children[(0)]);
var foo = r.setFromCamera(v,cam);
var pos = r.ray.intersectPlane(z);
return cljs.core.swap_BANG_.call(null,unicycle.ui.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"mouse","mouse",478628972),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pos.x,pos.y,pos.z], null));
});})(map__51300,map__51300__$1,env,state,query,ref))
], null);
}));
cljs.core._add_method.call(null,unicycle.ui.mutate,new cljs.core.Symbol(null,"wheel","wheel",1046565730,null),(function (p__51302,key,params){
var map__51303 = p__51302;
var map__51303__$1 = ((((!((map__51303 == null)))?((((map__51303.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51303.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51303):map__51303);
var env = map__51303__$1;
var state = cljs.core.get.call(null,map__51303__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var query = cljs.core.get.call(null,map__51303__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var ref = cljs.core.get.call(null,map__51303__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__51303,map__51303__$1,env,state,query,ref){
return (function (){
var Δ = clojure.core.matrix.operators._STAR_.call(null,-2.0E-4,new cljs.core.Keyword(null,"deltaY","deltaY",-879493966).cljs$core$IFn$_invoke$arity$1(params));
var n = cljs.core.count.call(null,new cljs.core.Keyword(null,"cycles","cycles",-954611167).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,unicycle.ui.app_state)));
cljs.core.swap_BANG_.call(null,unicycle.ui.app_state,cljs.core.update,new cljs.core.Keyword(null,"drop","drop",364481611),clojure.core.matrix.operators._PLUS_,Δ);

var n__21696__auto__ = n;
var i = (0);
while(true){
if((i < n__21696__auto__)){
cljs.core.swap_BANG_.call(null,unicycle.ui.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cycles","cycles",-954611167),i,new cljs.core.Keyword(null,"k\u03C1","k\u03C1",761199456)], null),clojure.core.matrix.operators._PLUS_,clojure.core.matrix.operators._STAR_.call(null,Δ,(10)));

cljs.core.swap_BANG_.call(null,unicycle.ui.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cycles","cycles",-954611167),i,new cljs.core.Keyword(null,"k\u03D5","k\u03D5",1122837548)], null),clojure.core.matrix.operators._PLUS_,clojure.core.matrix.operators._STAR_.call(null,Δ,(20)));

cljs.core.swap_BANG_.call(null,unicycle.ui.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cycles","cycles",-954611167),i,new cljs.core.Keyword(null,"\u03F5","\u03F5",170557309)], null),clojure.core.matrix.operators._PLUS_,Δ);

var G__51305 = (i + (1));
i = G__51305;
continue;
} else {
return null;
}
break;
}
});})(map__51303,map__51303__$1,env,state,query,ref))
], null);
}));
cljs.core._add_method.call(null,unicycle.ui.mutate,new cljs.core.Symbol(null,"click","click",-742134376,null),(function (p__51306,key,params){
var map__51307 = p__51306;
var map__51307__$1 = ((((!((map__51307 == null)))?((((map__51307.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51307.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51307):map__51307);
var env = map__51307__$1;
var state = cljs.core.get.call(null,map__51307__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var query = cljs.core.get.call(null,map__51307__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var ref = cljs.core.get.call(null,map__51307__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__51307,map__51307__$1,env,state,query,ref){
return (function (){
return cljs.core.swap_BANG_.call(null,unicycle.ui.app_state,cljs.core.update,new cljs.core.Keyword(null,"cmd","cmd",-302931143),cljs.core.rest);
});})(map__51307,map__51307__$1,env,state,query,ref))
], null);
}));
unicycle.ui.parser = om.next.parser.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1140058661),unicycle.ui.read,new cljs.core.Keyword(null,"mutate","mutate",1422419038),unicycle.ui.mutate], null));
if(typeof unicycle.ui.reconciler !== 'undefined'){
} else {
unicycle.ui.reconciler = om.next.reconciler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"logger","logger",-220675947),null,new cljs.core.Keyword(null,"state","state",-1988618099),unicycle.ui.app_state,new cljs.core.Keyword(null,"parser","parser",-1543495310),unicycle.ui.parser], null));
}
om.next.add_root_BANG_.call(null,unicycle.ui.reconciler,unicycle.ui.App,goog.dom.getElement("app"));
goog.events.listen(goog.dom.getElement("app"),"mousemove",(function (e){
return om.next.transact_BANG_.call(null,unicycle.ui.reconciler,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__21609__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"move","move",-470352782,null)),(function (){var x__21609__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"clientX","clientX",1931278917)),(function (){var x__21609__auto__ = e.clientX;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21609__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"clientY","clientY",-1350333697)),(function (){var x__21609__auto__ = e.clientY;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21609__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21609__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21609__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"mouse","mouse",478628972)))))));
}));
goog.events.listen(goog.dom.getElement("app"),"click",(function (_){
return om.next.transact_BANG_.call(null,unicycle.ui.reconciler,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"click","click",-742134376,null))], null));
}));
goog.events.listen(goog.dom.getElement("app"),"mousewheel",(function (e){
return om.next.transact_BANG_.call(null,unicycle.ui.reconciler,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__21609__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"wheel","wheel",1046565730,null)),(function (){var x__21609__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"deltaY","deltaY",-879493966)),(function (){var x__21609__auto__ = e.event_.deltaY;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21609__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21609__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21609__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"drop","drop",364481611)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"cycles","cycles",-954611167)))))));
}));
if(typeof unicycle.ui.rafid !== 'undefined'){
} else {
unicycle.ui.rafid = cljs.core.atom.call(null,null);
}
unicycle.ui.start_raf = (function unicycle$ui$start_raf(){
unicycle.ui.loop_raf = (function unicycle$ui$start_raf_$_loop_raf(){
cljs.core.reset_BANG_.call(null,unicycle.ui.rafid,window.requestAnimationFrame(unicycle.ui.loop_raf));

var seq__51327 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2)], null));
var chunk__51329 = null;
var count__51330 = (0);
var i__51331 = (0);
while(true){
if((i__51331 < count__51330)){
var i = cljs.core._nth.call(null,chunk__51329,i__51331);
var st_51333 = cljs.core.deref.call(null,unicycle.ui.app_state);
cljs.core.swap_BANG_.call(null,unicycle.ui.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cycles","cycles",-954611167),i], null),unicycle.core.plan_PLUS_sym,cljs.core.cons.call(null,cljs.core.first.call(null,new cljs.core.Keyword(null,"cmd","cmd",-302931143).cljs$core$IFn$_invoke$arity$1(st_51333)),new cljs.core.Keyword(null,"mouse","mouse",478628972).cljs$core$IFn$_invoke$arity$1(st_51333)));

var G__51334 = seq__51327;
var G__51335 = chunk__51329;
var G__51336 = count__51330;
var G__51337 = (i__51331 + (1));
seq__51327 = G__51334;
chunk__51329 = G__51335;
count__51330 = G__51336;
i__51331 = G__51337;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__51327);
if(temp__6753__auto__){
var seq__51327__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51327__$1)){
var c__21586__auto__ = cljs.core.chunk_first.call(null,seq__51327__$1);
var G__51338 = cljs.core.chunk_rest.call(null,seq__51327__$1);
var G__51339 = c__21586__auto__;
var G__51340 = cljs.core.count.call(null,c__21586__auto__);
var G__51341 = (0);
seq__51327 = G__51338;
chunk__51329 = G__51339;
count__51330 = G__51340;
i__51331 = G__51341;
continue;
} else {
var i = cljs.core.first.call(null,seq__51327__$1);
var st_51342 = cljs.core.deref.call(null,unicycle.ui.app_state);
cljs.core.swap_BANG_.call(null,unicycle.ui.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cycles","cycles",-954611167),i], null),unicycle.core.plan_PLUS_sym,cljs.core.cons.call(null,cljs.core.first.call(null,new cljs.core.Keyword(null,"cmd","cmd",-302931143).cljs$core$IFn$_invoke$arity$1(st_51342)),new cljs.core.Keyword(null,"mouse","mouse",478628972).cljs$core$IFn$_invoke$arity$1(st_51342)));

var G__51343 = cljs.core.next.call(null,seq__51327__$1);
var G__51344 = null;
var G__51345 = (0);
var G__51346 = (0);
seq__51327 = G__51343;
chunk__51329 = G__51344;
count__51330 = G__51345;
i__51331 = G__51346;
continue;
}
} else {
return null;
}
}
break;
}
});

return cljs.core.reset_BANG_.call(null,unicycle.ui.rafid,window.requestAnimationFrame(unicycle.ui.loop_raf));
});
window.cancelAnimationFrame(cljs.core.deref.call(null,unicycle.ui.rafid));
unicycle.ui.start_raf.call(null);

//# sourceMappingURL=ui.js.map