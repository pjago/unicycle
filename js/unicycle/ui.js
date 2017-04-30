// Compiled by ClojureScript 1.9.521 {}
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
unicycle.ui.a_cycle = (function (){var method_table__28353__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__28354__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__28355__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__28356__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__28357__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"unicycle.ui","a-cycle"),cljs.core.comp.call(null,cljs.core.first,new cljs.core.Keyword(null,"wheels","wheels",756478381)),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__28357__auto__,method_table__28353__auto__,prefer_table__28354__auto__,method_cache__28355__auto__,cached_hierarchy__28356__auto__));
})();
}
cljs.core._add_method.call(null,unicycle.ui.a_cycle,new cljs.core.Keyword(null,"uni","uni",-1194876440),(function (p__65280){
var map__65281 = p__65280;
var map__65281__$1 = ((((!((map__65281 == null)))?((((map__65281.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65281.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65281):map__65281);
var vec__65282 = cljs.core.get.call(null,map__65281__$1,new cljs.core.Keyword(null,"wheels","wheels",756478381));
var type = cljs.core.nth.call(null,vec__65282,(0),null);
var size = cljs.core.nth.call(null,vec__65282,(1),null);
var yaw = cljs.core.get.call(null,map__65281__$1,new cljs.core.Keyword(null,"yaw","yaw",-1791898389));
var pos = cljs.core.get.call(null,map__65281__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
return React.createElement("a-entity",cljs.core.clj__GT_js.call(null,common.web.map__GT_frame.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),type,new cljs.core.Keyword(null,"position","position",-2011731912),pos,new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),clojure.core.matrix.operators._STAR_.call(null,common.math.rad__GT_deg,yaw)], null)], null))),om.util.force_children.call(null,unicycle.ui.chassis.call(null,size,clojure.core.matrix.operators._SLASH_.call(null,size,(3)))),om.util.force_children.call(null,unicycle.ui.wheel.call(null,clojure.core.matrix.operators._SLASH_.call(null,size,1.8),(0),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null))));
}));
cljs.core._add_method.call(null,unicycle.ui.a_cycle,new cljs.core.Keyword(null,"dff","dff",-1904902866),(function (p__65286){
var map__65287 = p__65286;
var map__65287__$1 = ((((!((map__65287 == null)))?((((map__65287.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65287.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65287):map__65287);
var vec__65288 = cljs.core.get.call(null,map__65287__$1,new cljs.core.Keyword(null,"wheels","wheels",756478381));
var type = cljs.core.nth.call(null,vec__65288,(0),null);
var vec__65291 = cljs.core.nth.call(null,vec__65288,(1),null);
var base = cljs.core.nth.call(null,vec__65291,(0),null);
var diam = cljs.core.nth.call(null,vec__65291,(1),null);
var yaw = cljs.core.get.call(null,map__65287__$1,new cljs.core.Keyword(null,"yaw","yaw",-1791898389));
var pos = cljs.core.get.call(null,map__65287__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
return React.createElement("a-entity",cljs.core.clj__GT_js.call(null,common.web.map__GT_frame.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),type,new cljs.core.Keyword(null,"position","position",-2011731912),pos,new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),clojure.core.matrix.operators._STAR_.call(null,common.math.rad__GT_deg,yaw)], null)], null))),om.util.force_children.call(null,unicycle.ui.chassis.call(null,base,diam)),om.util.force_children.call(null,unicycle.ui.wheel.call(null,diam,(0),clojure.core.matrix.operators._STAR_.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),0.5,(0)], null)))),om.util.force_children.call(null,unicycle.ui.wheel.call(null,diam,(0),clojure.core.matrix.operators._STAR_.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),-0.5,(0)], null)))));
}));
cljs.core._add_method.call(null,unicycle.ui.a_cycle,new cljs.core.Keyword(null,"car","car",-1555651612),(function (p__65295){
var map__65296 = p__65295;
var map__65296__$1 = ((((!((map__65296 == null)))?((((map__65296.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65296.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65296):map__65296);
var vec__65297 = cljs.core.get.call(null,map__65296__$1,new cljs.core.Keyword(null,"wheels","wheels",756478381));
var type = cljs.core.nth.call(null,vec__65297,(0),null);
var size = cljs.core.nth.call(null,vec__65297,(1),null);
var w_yaw = cljs.core.nth.call(null,vec__65297,(2),null);
var yaw = cljs.core.get.call(null,map__65296__$1,new cljs.core.Keyword(null,"yaw","yaw",-1791898389));
var pos = cljs.core.get.call(null,map__65296__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
return React.createElement("a-entity",cljs.core.clj__GT_js.call(null,common.web.map__GT_frame.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),type,new cljs.core.Keyword(null,"position","position",-2011731912),pos,new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),clojure.core.matrix.operators._STAR_.call(null,common.math.rad__GT_deg,yaw)], null)], null))),om.util.force_children.call(null,unicycle.ui.chassis.call(null,size,clojure.core.matrix.operators._SLASH_.call(null,size,(3)))),om.util.force_children.call(null,unicycle.ui.wheel.call(null,clojure.core.matrix.operators._SLASH_.call(null,size,(3)),w_yaw,clojure.core.matrix.operators._STAR_.call(null,size,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.25,0.5,(0)], null)))),om.util.force_children.call(null,unicycle.ui.wheel.call(null,clojure.core.matrix.operators._SLASH_.call(null,size,(3)),(0),clojure.core.matrix.operators._STAR_.call(null,size,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.25,0.0,(0)], null)))),om.util.force_children.call(null,unicycle.ui.wheel.call(null,clojure.core.matrix.operators._SLASH_.call(null,size,(3)),w_yaw,clojure.core.matrix.operators._STAR_.call(null,size,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.25,-0.5,(0)], null)))));
}));
/**
 * @constructor
 */
unicycle.ui.App = (function unicycle$ui$App(){
var this__55992__auto__ = this;
React.Component.apply(this__55992__auto__,arguments);

if(!((this__55992__auto__.initLocalState == null))){
this__55992__auto__.state = this__55992__auto__.initLocalState();
} else {
this__55992__auto__.state = {};
}

return this__55992__auto__;
});

unicycle.ui.App.prototype = goog.object.clone(React.Component.prototype);

var x65305_65317 = unicycle.ui.App.prototype;
x65305_65317.componentWillUpdate = ((function (x65305_65317){
return (function (next_props__55764__auto__,next_state__55765__auto__){
var this__55763__auto__ = this;
if(((!((this__55763__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__55763__auto__.om$next$Ident$)))?true:false):false)){
var ident__55767__auto___65318 = om.next.ident.call(null,this__55763__auto__,om.next.props.call(null,this__55763__auto__));
var next_ident__55768__auto___65319 = om.next.ident.call(null,this__55763__auto__,om.next._next_props.call(null,next_props__55764__auto__,this__55763__auto__));
if(cljs.core.not_EQ_.call(null,ident__55767__auto___65318,next_ident__55768__auto___65319)){
var idxr__55769__auto___65320 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__55763__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__55769__auto___65320 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__55769__auto___65320),((function (idxr__55769__auto___65320,ident__55767__auto___65318,next_ident__55768__auto___65319,this__55763__auto__,x65305_65317){
return (function (indexes__55770__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__55770__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__55767__auto___65318], null),cljs.core.disj,this__55763__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__55768__auto___65319], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__55763__auto__);
});})(idxr__55769__auto___65320,ident__55767__auto___65318,next_ident__55768__auto___65319,this__55763__auto__,x65305_65317))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__55763__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__55763__auto__);
});})(x65305_65317))
;

x65305_65317.shouldComponentUpdate = ((function (x65305_65317){
return (function (next_props__55764__auto__,next_state__55765__auto__){
var this__55763__auto__ = this;
var next_children__55766__auto__ = next_props__55764__auto__.children;
var next_props__55764__auto____$1 = goog.object.get(next_props__55764__auto__,"omcljs$value");
var next_props__55764__auto____$2 = (function (){var G__65307 = next_props__55764__auto____$1;
if((next_props__55764__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__65307);
} else {
return G__65307;
}
})();
var or__27322__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__55763__auto__),next_props__55764__auto____$2);
if(or__27322__auto__){
return or__27322__auto__;
} else {
var or__27322__auto____$1 = (function (){var and__27310__auto__ = this__55763__auto__.state;
if(cljs.core.truth_(and__27310__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__55763__auto__.state,"omcljs$state"),goog.object.get(next_state__55765__auto__,"omcljs$state"));
} else {
return and__27310__auto__;
}
})();
if(cljs.core.truth_(or__27322__auto____$1)){
return or__27322__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__55763__auto__.props.children,next_children__55766__auto__);
}
}
});})(x65305_65317))
;

x65305_65317.componentWillUnmount = ((function (x65305_65317){
return (function (){
var this__55763__auto__ = this;
var r__55774__auto__ = om.next.get_reconciler.call(null,this__55763__auto__);
var cfg__55775__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__55774__auto__);
var st__55776__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__55775__auto__);
var indexer__55773__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__55775__auto__);
if(cljs.core.truth_((function (){var and__27310__auto__ = !((st__55776__auto__ == null));
if(and__27310__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__55776__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__55763__auto__], null));
} else {
return and__27310__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__55776__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__55763__auto__);
} else {
}

if((indexer__55773__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__55773__auto__,this__55763__auto__);
}
});})(x65305_65317))
;

x65305_65317.componentDidUpdate = ((function (x65305_65317){
return (function (prev_props__55771__auto__,prev_state__55772__auto__){
var this__55763__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__55763__auto__);
});})(x65305_65317))
;

x65305_65317.isMounted = ((function (x65305_65317){
return (function (){
var this__55763__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__55763__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x65305_65317))
;

x65305_65317.componentWillMount = ((function (x65305_65317){
return (function (){
var this__55763__auto__ = this;
var indexer__55773__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__55763__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__55773__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__55773__auto__,this__55763__auto__);
}
});})(x65305_65317))
;

x65305_65317.render = ((function (x65305_65317){
return (function (){
var this__55761__auto__ = this;
var this$ = this__55761__auto__;
var _STAR_reconciler_STAR_65308 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_65309 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_65310 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_65311 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_65312 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__55761__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__55761__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__55761__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__55761__auto__);

om.next._STAR_parent_STAR_ = this__55761__auto__;

try{var map__65313 = om.next.props.call(null,this$);
var map__65313__$1 = ((((!((map__65313 == null)))?((((map__65313.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65313.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65313):map__65313);
var cycles = cljs.core.get.call(null,map__65313__$1,new cljs.core.Keyword(null,"cycles","cycles",-954611167));
var mouse = cljs.core.get.call(null,map__65313__$1,new cljs.core.Keyword(null,"mouse","mouse",478628972));
var drop = cljs.core.get.call(null,map__65313__$1,new cljs.core.Keyword(null,"drop","drop",364481611));
var zoom = cljs.core.get.call(null,map__65313__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
return om.dom.div.call(null,({"style": ({"width": "100%"})}),om.dom.h1.call(null,({"style": ({"position": "absolute", "zIndex": (-1)})}),"Unicycle"),cljs.core.apply.call(null,common.web.a_scene,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"scene",new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"scene","scene",1523800415),new cljs.core.Keyword(null,"inspector","inspector",1532863880),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"url","url",276297046),"https://aframe.io/releases/0.3.0/aframe-inspector.min.js"], null)], null),React.createElement("a-entity",cljs.core.clj__GT_js.call(null,common.web.map__GT_frame.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),"camera",new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"camera-with-cursor","camera-with-cursor",411998476),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(-5)], null),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(180),(0),(180)], null),new cljs.core.Keyword(null,"camera","camera",-1190348585),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"active","active",1895962068),true,new cljs.core.Keyword(null,"zoom","zoom",-1827487038),(2)], null),new cljs.core.Keyword(null,"wasd-controls","wasd-controls",547193661),"adInverted: true; wsInverted: true"], null)))),React.createElement("a-entity",cljs.core.clj__GT_js.call(null,common.web.map__GT_frame.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),"drop",new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"drop-shadow","drop-shadow",878776332),new cljs.core.Keyword(null,"position","position",-2011731912),mouse,new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(180),(0),(180)], null),new cljs.core.Keyword(null,"geometry","geometry",-405034994),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"primitive","primitive",1884541424),new cljs.core.Symbol(null,"circle","circle",-751223407,null),new cljs.core.Keyword(null,"radius","radius",-2073122258),clojure.core.matrix.operators._SLASH_.call(null,drop,(2))], null)], null)))),cljs.core.map.call(null,unicycle.ui.a_cycle,cycles)));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_65312;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_65311;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_65310;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_65309;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_65308;
}});})(x65305_65317))
;


unicycle.ui.App.prototype.constructor = unicycle.ui.App;

unicycle.ui.App.prototype.constructor.displayName = "unicycle.ui/App";

unicycle.ui.App.prototype.om$isComponent = true;

var x65315_65321 = unicycle.ui.App;
/** @nocollapse */
x65315_65321.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x65315_65321.om$next$IQuery$query$arity$1 = ((function (x65315_65321){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cycles","cycles",-954611167),new cljs.core.Keyword(null,"mouse","mouse",478628972),new cljs.core.Keyword(null,"drop","drop",364481611)], null);
});})(x65315_65321))
;


var x65316_65322 = unicycle.ui.App.prototype;

x65316_65322.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;


x65316_65322.om$next$IQuery$query$arity$1 = ((function (x65316_65322){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cycles","cycles",-954611167),new cljs.core.Keyword(null,"mouse","mouse",478628972),new cljs.core.Keyword(null,"drop","drop",364481611)], null);
});})(x65316_65322))
;


unicycle.ui.App.cljs$lang$type = true;

unicycle.ui.App.cljs$lang$ctorStr = "unicycle.ui/App";

unicycle.ui.App.cljs$lang$ctorPrWriter = (function (this__55995__auto__,writer__55996__auto__,opt__55997__auto__){
return cljs.core._write.call(null,writer__55996__auto__,"unicycle.ui/App");
});
if(typeof unicycle.ui.app_state !== 'undefined'){
} else {
unicycle.ui.app_state = cljs.core.atom.call(null,om.next.tree__GT_db.call(null,unicycle.ui.App,unicycle.ui.init_data,true));
}
unicycle.ui.read = (function unicycle$ui$read(p__65323,key,params){
var map__65326 = p__65323;
var map__65326__$1 = ((((!((map__65326 == null)))?((((map__65326.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65326.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65326):map__65326);
var env = map__65326__$1;
var state = cljs.core.get.call(null,map__65326__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var query = cljs.core.get.call(null,map__65326__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
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
unicycle.ui.mutate = (function (){var method_table__28353__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__28354__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__28355__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__28356__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__28357__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"unicycle.ui","mutate"),om.next.dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__28357__auto__,method_table__28353__auto__,prefer_table__28354__auto__,method_cache__28355__auto__,cached_hierarchy__28356__auto__));
})();
}
cljs.core._add_method.call(null,unicycle.ui.mutate,new cljs.core.Symbol(null,"move","move",-470352782,null),(function (p__65328,key,params){
var map__65329 = p__65328;
var map__65329__$1 = ((((!((map__65329 == null)))?((((map__65329.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65329.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65329):map__65329);
var env = map__65329__$1;
var state = cljs.core.get.call(null,map__65329__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var query = cljs.core.get.call(null,map__65329__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var ref = cljs.core.get.call(null,map__65329__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__65329,map__65329__$1,env,state,query,ref){
return (function (){
var r = (new THREE.Raycaster());
var z = (new THREE.Plane((new THREE.Vector3((0),(0),(1))),(-1)));
var v = (new THREE.Vector2(clojure.core.matrix.operators._.call(null,clojure.core.matrix.operators._STAR_.call(null,clojure.core.matrix.operators._SLASH_.call(null,new cljs.core.Keyword(null,"clientX","clientX",1931278917).cljs$core$IFn$_invoke$arity$1(params),window.innerWidth),(2)),(1)),clojure.core.matrix.operators._.call(null,(1),clojure.core.matrix.operators._STAR_.call(null,clojure.core.matrix.operators._SLASH_.call(null,new cljs.core.Keyword(null,"clientY","clientY",-1350333697).cljs$core$IFn$_invoke$arity$1(params),window.innerHeight),(2)))));
var cam = (goog.dom.getElement("camera").object3D.children[(0)]);
var foo = r.setFromCamera(v,cam);
var pos = r.ray.intersectPlane(z);
return cljs.core.swap_BANG_.call(null,unicycle.ui.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"mouse","mouse",478628972),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pos.x,pos.y,pos.z], null));
});})(map__65329,map__65329__$1,env,state,query,ref))
], null);
}));
cljs.core._add_method.call(null,unicycle.ui.mutate,new cljs.core.Symbol(null,"wheel","wheel",1046565730,null),(function (p__65331,key,params){
var map__65332 = p__65331;
var map__65332__$1 = ((((!((map__65332 == null)))?((((map__65332.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65332.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65332):map__65332);
var env = map__65332__$1;
var state = cljs.core.get.call(null,map__65332__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var query = cljs.core.get.call(null,map__65332__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var ref = cljs.core.get.call(null,map__65332__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__65332,map__65332__$1,env,state,query,ref){
return (function (){
var Δ = clojure.core.matrix.operators._STAR_.call(null,-2.0E-4,new cljs.core.Keyword(null,"deltaY","deltaY",-879493966).cljs$core$IFn$_invoke$arity$1(params));
var n = cljs.core.count.call(null,new cljs.core.Keyword(null,"cycles","cycles",-954611167).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,unicycle.ui.app_state)));
cljs.core.swap_BANG_.call(null,unicycle.ui.app_state,cljs.core.update,new cljs.core.Keyword(null,"drop","drop",364481611),clojure.core.matrix.operators._PLUS_,Δ);

cljs.core.swap_BANG_.call(null,unicycle.ui.app_state,cljs.core.update,new cljs.core.Keyword(null,"zoom","zoom",-1827487038),clojure.core.matrix.operators._PLUS_,clojure.core.matrix.operators._STAR_.call(null,(100),Δ));

var n__28343__auto__ = n;
var i = (0);
while(true){
if((i < n__28343__auto__)){
cljs.core.swap_BANG_.call(null,unicycle.ui.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cycles","cycles",-954611167),i,new cljs.core.Keyword(null,"k\u03C1","k\u03C1",761199456)], null),clojure.core.matrix.operators._PLUS_,clojure.core.matrix.operators._STAR_.call(null,Δ,(10)));

cljs.core.swap_BANG_.call(null,unicycle.ui.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cycles","cycles",-954611167),i,new cljs.core.Keyword(null,"k\u03D5","k\u03D5",1122837548)], null),clojure.core.matrix.operators._PLUS_,clojure.core.matrix.operators._STAR_.call(null,Δ,(20)));

cljs.core.swap_BANG_.call(null,unicycle.ui.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cycles","cycles",-954611167),i,new cljs.core.Keyword(null,"\u03F5","\u03F5",170557309)], null),clojure.core.matrix.operators._PLUS_,Δ);

var G__65334 = (i + (1));
i = G__65334;
continue;
} else {
return null;
}
break;
}
});})(map__65332,map__65332__$1,env,state,query,ref))
], null);
}));
cljs.core._add_method.call(null,unicycle.ui.mutate,new cljs.core.Symbol(null,"click","click",-742134376,null),(function (p__65335,key,params){
var map__65336 = p__65335;
var map__65336__$1 = ((((!((map__65336 == null)))?((((map__65336.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65336.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65336):map__65336);
var env = map__65336__$1;
var state = cljs.core.get.call(null,map__65336__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var query = cljs.core.get.call(null,map__65336__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var ref = cljs.core.get.call(null,map__65336__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__65336,map__65336__$1,env,state,query,ref){
return (function (){
return cljs.core.swap_BANG_.call(null,unicycle.ui.app_state,cljs.core.update,new cljs.core.Keyword(null,"cmd","cmd",-302931143),cljs.core.rest);
});})(map__65336,map__65336__$1,env,state,query,ref))
], null);
}));
unicycle.ui.parser = om.next.parser.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1140058661),unicycle.ui.read,new cljs.core.Keyword(null,"mutate","mutate",1422419038),unicycle.ui.mutate], null));
if(typeof unicycle.ui.reconciler !== 'undefined'){
} else {
unicycle.ui.reconciler = om.next.reconciler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"logger","logger",-220675947),null,new cljs.core.Keyword(null,"state","state",-1988618099),unicycle.ui.app_state,new cljs.core.Keyword(null,"parser","parser",-1543495310),unicycle.ui.parser], null));
}
om.next.add_root_BANG_.call(null,unicycle.ui.reconciler,unicycle.ui.App,goog.dom.getElement("app"));
goog.events.listen(goog.dom.getElement("app"),"mousemove",(function (e){
return om.next.transact_BANG_.call(null,unicycle.ui.reconciler,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28256__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"move","move",-470352782,null)),(function (){var x__28256__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"clientX","clientX",1931278917)),(function (){var x__28256__auto__ = e.clientX;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28256__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"clientY","clientY",-1350333697)),(function (){var x__28256__auto__ = e.clientY;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28256__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28256__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28256__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"mouse","mouse",478628972)))))));
}));
goog.events.listen(goog.dom.getElement("app"),"click",(function (_){
return om.next.transact_BANG_.call(null,unicycle.ui.reconciler,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"click","click",-742134376,null))], null));
}));
goog.events.listen(goog.dom.getElement("app"),"mousewheel",(function (e){
return om.next.transact_BANG_.call(null,unicycle.ui.reconciler,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28256__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"wheel","wheel",1046565730,null)),(function (){var x__28256__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"deltaY","deltaY",-879493966)),(function (){var x__28256__auto__ = e.event_.deltaY;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28256__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28256__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28256__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"drop","drop",364481611)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"cycles","cycles",-954611167)))))));
}));
if(typeof unicycle.ui.rafid !== 'undefined'){
} else {
unicycle.ui.rafid = cljs.core.atom.call(null,null);
}
unicycle.ui.start_raf = (function unicycle$ui$start_raf(){
unicycle.ui.loop_raf = (function unicycle$ui$start_raf_$_loop_raf(){
cljs.core.reset_BANG_.call(null,unicycle.ui.rafid,window.requestAnimationFrame(unicycle.ui.loop_raf));

var seq__65356 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2)], null));
var chunk__65358 = null;
var count__65359 = (0);
var i__65360 = (0);
while(true){
if((i__65360 < count__65359)){
var i = cljs.core._nth.call(null,chunk__65358,i__65360);
var st_65362 = cljs.core.deref.call(null,unicycle.ui.app_state);
cljs.core.swap_BANG_.call(null,unicycle.ui.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cycles","cycles",-954611167),i], null),unicycle.core.plan_PLUS_sym,cljs.core.cons.call(null,cljs.core.first.call(null,new cljs.core.Keyword(null,"cmd","cmd",-302931143).cljs$core$IFn$_invoke$arity$1(st_65362)),new cljs.core.Keyword(null,"mouse","mouse",478628972).cljs$core$IFn$_invoke$arity$1(st_65362)));

var G__65363 = seq__65356;
var G__65364 = chunk__65358;
var G__65365 = count__65359;
var G__65366 = (i__65360 + (1));
seq__65356 = G__65363;
chunk__65358 = G__65364;
count__65359 = G__65365;
i__65360 = G__65366;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__65356);
if(temp__6753__auto__){
var seq__65356__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__65356__$1)){
var c__28233__auto__ = cljs.core.chunk_first.call(null,seq__65356__$1);
var G__65367 = cljs.core.chunk_rest.call(null,seq__65356__$1);
var G__65368 = c__28233__auto__;
var G__65369 = cljs.core.count.call(null,c__28233__auto__);
var G__65370 = (0);
seq__65356 = G__65367;
chunk__65358 = G__65368;
count__65359 = G__65369;
i__65360 = G__65370;
continue;
} else {
var i = cljs.core.first.call(null,seq__65356__$1);
var st_65371 = cljs.core.deref.call(null,unicycle.ui.app_state);
cljs.core.swap_BANG_.call(null,unicycle.ui.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cycles","cycles",-954611167),i], null),unicycle.core.plan_PLUS_sym,cljs.core.cons.call(null,cljs.core.first.call(null,new cljs.core.Keyword(null,"cmd","cmd",-302931143).cljs$core$IFn$_invoke$arity$1(st_65371)),new cljs.core.Keyword(null,"mouse","mouse",478628972).cljs$core$IFn$_invoke$arity$1(st_65371)));

var G__65372 = cljs.core.next.call(null,seq__65356__$1);
var G__65373 = null;
var G__65374 = (0);
var G__65375 = (0);
seq__65356 = G__65372;
chunk__65358 = G__65373;
count__65359 = G__65374;
i__65360 = G__65375;
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

//# sourceMappingURL=ui.js.map?rel=1493587830088