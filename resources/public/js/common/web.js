// Compiled by ClojureScript 1.9.521 {}
goog.provide('common.web');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljsjs.react');
goog.require('om.util');
/**
 * attempts to serialize something into a string
 */
common.web.serialize = (function common$web$serialize(props){
if(cljs.core.fn_QMARK_.call(null,props)){
return "[object Function]";
} else {
if((props instanceof cljs.core.Keyword)){
return cljs.core.subs.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(props)].join(''),(1));
} else {
if((props instanceof cljs.core.Symbol)){
return cljs.core.name.call(null,props);
} else {
if((cljs.core.seq_QMARK_.call(null,props)) || (cljs.core.vector_QMARK_.call(null,props))){
return clojure.string.join.call(null," ",cljs.core.map.call(null,common.web.serialize,props));
} else {
if((cljs.core.map_QMARK_.call(null,props)) || (cljs.core.record_QMARK_.call(null,props))){
return clojure.string.join.call(null,"; ",cljs.core.map.call(null,(function (p__58064){
var vec__58065 = p__58064;
var k = cljs.core.nth.call(null,vec__58065,(0),null);
var v = cljs.core.nth.call(null,vec__58065,(1),null);
return clojure.string.join.call(null,": ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join(''),(1)),common.web.serialize.call(null,v)], null));
}),props));
} else {
return props;

}
}
}
}
}
});
/**
 * serializes a map into a-frame like tag
 */
common.web.map__GT_frame = (function common$web$map__GT_frame(m){
return cljs.core.zipmap.call(null,cljs.core.keys.call(null,m),cljs.core.map.call(null,common.web.serialize,cljs.core.vals.call(null,m)));
});
common.web.tags = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["a-mixin",null,"a-scene",null,"a-event",null,"a-register-element",null,"a-cubemap",null,"a-node",null,"a-entity",null,"a-assets",null,"a-animation",null], null), null);
common.web.a_mixin = (function common$web$a_mixin(var_args){
var args__28550__auto__ = [];
var len__28543__auto___58121 = arguments.length;
var i__28544__auto___58122 = (0);
while(true){
if((i__28544__auto___58122 < len__28543__auto___58121)){
args__28550__auto__.push((arguments[i__28544__auto___58122]));

var G__58123 = (i__28544__auto___58122 + (1));
i__28544__auto___58122 = G__58123;
continue;
} else {
}
break;
}

var argseq__28551__auto__ = ((((1) < args__28550__auto__.length))?(new cljs.core.IndexedSeq(args__28550__auto__.slice((1)),(0),null)):null);
return common.web.a_mixin.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28551__auto__);
});

common.web.a_mixin.cljs$core$IFn$_invoke$arity$variadic = (function (opts__57889__auto__,children__57890__auto__){
return React.createElement("a-mixin",cljs.core.clj__GT_js.call(null,common.web.map__GT_frame.call(null,opts__57889__auto__)),cljs.core.map.call(null,om.util.force_children,children__57890__auto__));
});

common.web.a_mixin.cljs$lang$maxFixedArity = (1);

common.web.a_mixin.cljs$lang$applyTo = (function (seq58090){
var G__58091 = cljs.core.first.call(null,seq58090);
var seq58090__$1 = cljs.core.next.call(null,seq58090);
return common.web.a_mixin.cljs$core$IFn$_invoke$arity$variadic(G__58091,seq58090__$1);
});


common.web.a_scene = (function common$web$a_scene(var_args){
var args__28550__auto__ = [];
var len__28543__auto___58126 = arguments.length;
var i__28544__auto___58127 = (0);
while(true){
if((i__28544__auto___58127 < len__28543__auto___58126)){
args__28550__auto__.push((arguments[i__28544__auto___58127]));

var G__58128 = (i__28544__auto___58127 + (1));
i__28544__auto___58127 = G__58128;
continue;
} else {
}
break;
}

var argseq__28551__auto__ = ((((1) < args__28550__auto__.length))?(new cljs.core.IndexedSeq(args__28550__auto__.slice((1)),(0),null)):null);
return common.web.a_scene.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28551__auto__);
});

common.web.a_scene.cljs$core$IFn$_invoke$arity$variadic = (function (opts__57889__auto__,children__57890__auto__){
return React.createElement("a-scene",cljs.core.clj__GT_js.call(null,common.web.map__GT_frame.call(null,opts__57889__auto__)),cljs.core.map.call(null,om.util.force_children,children__57890__auto__));
});

common.web.a_scene.cljs$lang$maxFixedArity = (1);

common.web.a_scene.cljs$lang$applyTo = (function (seq58092){
var G__58093 = cljs.core.first.call(null,seq58092);
var seq58092__$1 = cljs.core.next.call(null,seq58092);
return common.web.a_scene.cljs$core$IFn$_invoke$arity$variadic(G__58093,seq58092__$1);
});


common.web.a_event = (function common$web$a_event(var_args){
var args__28550__auto__ = [];
var len__28543__auto___58129 = arguments.length;
var i__28544__auto___58130 = (0);
while(true){
if((i__28544__auto___58130 < len__28543__auto___58129)){
args__28550__auto__.push((arguments[i__28544__auto___58130]));

var G__58131 = (i__28544__auto___58130 + (1));
i__28544__auto___58130 = G__58131;
continue;
} else {
}
break;
}

var argseq__28551__auto__ = ((((1) < args__28550__auto__.length))?(new cljs.core.IndexedSeq(args__28550__auto__.slice((1)),(0),null)):null);
return common.web.a_event.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28551__auto__);
});

common.web.a_event.cljs$core$IFn$_invoke$arity$variadic = (function (opts__57889__auto__,children__57890__auto__){
return React.createElement("a-event",cljs.core.clj__GT_js.call(null,common.web.map__GT_frame.call(null,opts__57889__auto__)),cljs.core.map.call(null,om.util.force_children,children__57890__auto__));
});

common.web.a_event.cljs$lang$maxFixedArity = (1);

common.web.a_event.cljs$lang$applyTo = (function (seq58094){
var G__58095 = cljs.core.first.call(null,seq58094);
var seq58094__$1 = cljs.core.next.call(null,seq58094);
return common.web.a_event.cljs$core$IFn$_invoke$arity$variadic(G__58095,seq58094__$1);
});


common.web.a_register_element = (function common$web$a_register_element(var_args){
var args__28550__auto__ = [];
var len__28543__auto___58137 = arguments.length;
var i__28544__auto___58138 = (0);
while(true){
if((i__28544__auto___58138 < len__28543__auto___58137)){
args__28550__auto__.push((arguments[i__28544__auto___58138]));

var G__58140 = (i__28544__auto___58138 + (1));
i__28544__auto___58138 = G__58140;
continue;
} else {
}
break;
}

var argseq__28551__auto__ = ((((1) < args__28550__auto__.length))?(new cljs.core.IndexedSeq(args__28550__auto__.slice((1)),(0),null)):null);
return common.web.a_register_element.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28551__auto__);
});

common.web.a_register_element.cljs$core$IFn$_invoke$arity$variadic = (function (opts__57889__auto__,children__57890__auto__){
return React.createElement("a-register-element",cljs.core.clj__GT_js.call(null,common.web.map__GT_frame.call(null,opts__57889__auto__)),cljs.core.map.call(null,om.util.force_children,children__57890__auto__));
});

common.web.a_register_element.cljs$lang$maxFixedArity = (1);

common.web.a_register_element.cljs$lang$applyTo = (function (seq58096){
var G__58097 = cljs.core.first.call(null,seq58096);
var seq58096__$1 = cljs.core.next.call(null,seq58096);
return common.web.a_register_element.cljs$core$IFn$_invoke$arity$variadic(G__58097,seq58096__$1);
});


common.web.a_cubemap = (function common$web$a_cubemap(var_args){
var args__28550__auto__ = [];
var len__28543__auto___58143 = arguments.length;
var i__28544__auto___58144 = (0);
while(true){
if((i__28544__auto___58144 < len__28543__auto___58143)){
args__28550__auto__.push((arguments[i__28544__auto___58144]));

var G__58146 = (i__28544__auto___58144 + (1));
i__28544__auto___58144 = G__58146;
continue;
} else {
}
break;
}

var argseq__28551__auto__ = ((((1) < args__28550__auto__.length))?(new cljs.core.IndexedSeq(args__28550__auto__.slice((1)),(0),null)):null);
return common.web.a_cubemap.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28551__auto__);
});

common.web.a_cubemap.cljs$core$IFn$_invoke$arity$variadic = (function (opts__57889__auto__,children__57890__auto__){
return React.createElement("a-cubemap",cljs.core.clj__GT_js.call(null,common.web.map__GT_frame.call(null,opts__57889__auto__)),cljs.core.map.call(null,om.util.force_children,children__57890__auto__));
});

common.web.a_cubemap.cljs$lang$maxFixedArity = (1);

common.web.a_cubemap.cljs$lang$applyTo = (function (seq58098){
var G__58099 = cljs.core.first.call(null,seq58098);
var seq58098__$1 = cljs.core.next.call(null,seq58098);
return common.web.a_cubemap.cljs$core$IFn$_invoke$arity$variadic(G__58099,seq58098__$1);
});


common.web.a_node = (function common$web$a_node(var_args){
var args__28550__auto__ = [];
var len__28543__auto___58148 = arguments.length;
var i__28544__auto___58149 = (0);
while(true){
if((i__28544__auto___58149 < len__28543__auto___58148)){
args__28550__auto__.push((arguments[i__28544__auto___58149]));

var G__58150 = (i__28544__auto___58149 + (1));
i__28544__auto___58149 = G__58150;
continue;
} else {
}
break;
}

var argseq__28551__auto__ = ((((1) < args__28550__auto__.length))?(new cljs.core.IndexedSeq(args__28550__auto__.slice((1)),(0),null)):null);
return common.web.a_node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28551__auto__);
});

common.web.a_node.cljs$core$IFn$_invoke$arity$variadic = (function (opts__57889__auto__,children__57890__auto__){
return React.createElement("a-node",cljs.core.clj__GT_js.call(null,common.web.map__GT_frame.call(null,opts__57889__auto__)),cljs.core.map.call(null,om.util.force_children,children__57890__auto__));
});

common.web.a_node.cljs$lang$maxFixedArity = (1);

common.web.a_node.cljs$lang$applyTo = (function (seq58100){
var G__58101 = cljs.core.first.call(null,seq58100);
var seq58100__$1 = cljs.core.next.call(null,seq58100);
return common.web.a_node.cljs$core$IFn$_invoke$arity$variadic(G__58101,seq58100__$1);
});


common.web.a_entity = (function common$web$a_entity(var_args){
var args__28550__auto__ = [];
var len__28543__auto___58151 = arguments.length;
var i__28544__auto___58152 = (0);
while(true){
if((i__28544__auto___58152 < len__28543__auto___58151)){
args__28550__auto__.push((arguments[i__28544__auto___58152]));

var G__58153 = (i__28544__auto___58152 + (1));
i__28544__auto___58152 = G__58153;
continue;
} else {
}
break;
}

var argseq__28551__auto__ = ((((1) < args__28550__auto__.length))?(new cljs.core.IndexedSeq(args__28550__auto__.slice((1)),(0),null)):null);
return common.web.a_entity.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28551__auto__);
});

common.web.a_entity.cljs$core$IFn$_invoke$arity$variadic = (function (opts__57889__auto__,children__57890__auto__){
return React.createElement("a-entity",cljs.core.clj__GT_js.call(null,common.web.map__GT_frame.call(null,opts__57889__auto__)),cljs.core.map.call(null,om.util.force_children,children__57890__auto__));
});

common.web.a_entity.cljs$lang$maxFixedArity = (1);

common.web.a_entity.cljs$lang$applyTo = (function (seq58102){
var G__58103 = cljs.core.first.call(null,seq58102);
var seq58102__$1 = cljs.core.next.call(null,seq58102);
return common.web.a_entity.cljs$core$IFn$_invoke$arity$variadic(G__58103,seq58102__$1);
});


common.web.a_assets = (function common$web$a_assets(var_args){
var args__28550__auto__ = [];
var len__28543__auto___58154 = arguments.length;
var i__28544__auto___58155 = (0);
while(true){
if((i__28544__auto___58155 < len__28543__auto___58154)){
args__28550__auto__.push((arguments[i__28544__auto___58155]));

var G__58157 = (i__28544__auto___58155 + (1));
i__28544__auto___58155 = G__58157;
continue;
} else {
}
break;
}

var argseq__28551__auto__ = ((((1) < args__28550__auto__.length))?(new cljs.core.IndexedSeq(args__28550__auto__.slice((1)),(0),null)):null);
return common.web.a_assets.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28551__auto__);
});

common.web.a_assets.cljs$core$IFn$_invoke$arity$variadic = (function (opts__57889__auto__,children__57890__auto__){
return React.createElement("a-assets",cljs.core.clj__GT_js.call(null,common.web.map__GT_frame.call(null,opts__57889__auto__)),cljs.core.map.call(null,om.util.force_children,children__57890__auto__));
});

common.web.a_assets.cljs$lang$maxFixedArity = (1);

common.web.a_assets.cljs$lang$applyTo = (function (seq58104){
var G__58105 = cljs.core.first.call(null,seq58104);
var seq58104__$1 = cljs.core.next.call(null,seq58104);
return common.web.a_assets.cljs$core$IFn$_invoke$arity$variadic(G__58105,seq58104__$1);
});


common.web.a_animation = (function common$web$a_animation(var_args){
var args__28550__auto__ = [];
var len__28543__auto___58160 = arguments.length;
var i__28544__auto___58161 = (0);
while(true){
if((i__28544__auto___58161 < len__28543__auto___58160)){
args__28550__auto__.push((arguments[i__28544__auto___58161]));

var G__58164 = (i__28544__auto___58161 + (1));
i__28544__auto___58161 = G__58164;
continue;
} else {
}
break;
}

var argseq__28551__auto__ = ((((1) < args__28550__auto__.length))?(new cljs.core.IndexedSeq(args__28550__auto__.slice((1)),(0),null)):null);
return common.web.a_animation.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28551__auto__);
});

common.web.a_animation.cljs$core$IFn$_invoke$arity$variadic = (function (opts__57889__auto__,children__57890__auto__){
return React.createElement("a-animation",cljs.core.clj__GT_js.call(null,common.web.map__GT_frame.call(null,opts__57889__auto__)),cljs.core.map.call(null,om.util.force_children,children__57890__auto__));
});

common.web.a_animation.cljs$lang$maxFixedArity = (1);

common.web.a_animation.cljs$lang$applyTo = (function (seq58106){
var G__58107 = cljs.core.first.call(null,seq58106);
var seq58106__$1 = cljs.core.next.call(null,seq58106);
return common.web.a_animation.cljs$core$IFn$_invoke$arity$variadic(G__58107,seq58106__$1);
});


/**
 * creates element by string tag
 */
common.web.el = (function common$web$el(var_args){
var args__28550__auto__ = [];
var len__28543__auto___58167 = arguments.length;
var i__28544__auto___58168 = (0);
while(true){
if((i__28544__auto___58168 < len__28543__auto___58167)){
args__28550__auto__.push((arguments[i__28544__auto___58168]));

var G__58169 = (i__28544__auto___58168 + (1));
i__28544__auto___58168 = G__58169;
continue;
} else {
}
break;
}

var argseq__28551__auto__ = ((((2) < args__28550__auto__.length))?(new cljs.core.IndexedSeq(args__28550__auto__.slice((2)),(0),null)):null);
return common.web.el.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__28551__auto__);
});

common.web.el.cljs$core$IFn$_invoke$arity$variadic = (function (tag,opts,children){
return React.createElement(tag,cljs.core.clj__GT_js.call(null,common.web.map__GT_frame.call(null,opts)),cljs.core.map.call(null,om.util.force_children,children));
});

common.web.el.cljs$lang$maxFixedArity = (2);

common.web.el.cljs$lang$applyTo = (function (seq58113){
var G__58114 = cljs.core.first.call(null,seq58113);
var seq58113__$1 = cljs.core.next.call(null,seq58113);
var G__58115 = cljs.core.first.call(null,seq58113__$1);
var seq58113__$2 = cljs.core.next.call(null,seq58113__$1);
return common.web.el.cljs$core$IFn$_invoke$arity$variadic(G__58114,G__58115,seq58113__$2);
});


/**
 * deeply turns a map into an element of tag :type (defaults to a-entity)
 */
common.web.custom = (function common$web$custom(var_args){
var args__28550__auto__ = [];
var len__28543__auto___58170 = arguments.length;
var i__28544__auto___58171 = (0);
while(true){
if((i__28544__auto___58171 < len__28543__auto___58170)){
args__28550__auto__.push((arguments[i__28544__auto___58171]));

var G__58172 = (i__28544__auto___58171 + (1));
i__28544__auto___58171 = G__58172;
continue;
} else {
}
break;
}

var argseq__28551__auto__ = ((((1) < args__28550__auto__.length))?(new cljs.core.IndexedSeq(args__28550__auto__.slice((1)),(0),null)):null);
return common.web.custom.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28551__auto__);
});

common.web.custom.cljs$core$IFn$_invoke$arity$variadic = (function (e,c){
var childs = cljs.core.map.call(null,common.web.custom,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(e));
var props = cljs.core.dissoc.call(null,e,new cljs.core.Keyword(null,"children","children",-940561982));
return common.web.el.call(null,(function (){var or__27322__auto__ = common.web.tags.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(props));
if(cljs.core.truth_(or__27322__auto__)){
return or__27322__auto__;
} else {
return "a-entity";
}
})(),props,childs,c);
});

common.web.custom.cljs$lang$maxFixedArity = (1);

common.web.custom.cljs$lang$applyTo = (function (seq58117){
var G__58118 = cljs.core.first.call(null,seq58117);
var seq58117__$1 = cljs.core.next.call(null,seq58117);
return common.web.custom.cljs$core$IFn$_invoke$arity$variadic(G__58118,seq58117__$1);
});


//# sourceMappingURL=web.js.map?rel=1493584955354