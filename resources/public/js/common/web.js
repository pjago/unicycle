// Compiled by ClojureScript 1.9.456 {}
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
return clojure.string.join.call(null,"; ",cljs.core.map.call(null,(function (p__49564){
var vec__49565 = p__49564;
var k = cljs.core.nth.call(null,vec__49565,(0),null);
var v = cljs.core.nth.call(null,vec__49565,(1),null);
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
var args__21903__auto__ = [];
var len__21896__auto___49728 = arguments.length;
var i__21897__auto___49733 = (0);
while(true){
if((i__21897__auto___49733 < len__21896__auto___49728)){
args__21903__auto__.push((arguments[i__21897__auto___49733]));

var G__49741 = (i__21897__auto___49733 + (1));
i__21897__auto___49733 = G__49741;
continue;
} else {
}
break;
}

var argseq__21904__auto__ = ((((1) < args__21903__auto__.length))?(new cljs.core.IndexedSeq(args__21903__auto__.slice((1)),(0),null)):null);
return common.web.a_mixin.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21904__auto__);
});

common.web.a_mixin.cljs$core$IFn$_invoke$arity$variadic = (function (opts__48120__auto__,children__48121__auto__){
return React.createElement("a-mixin",cljs.core.clj__GT_js.call(null,common.web.map__GT_frame.call(null,opts__48120__auto__)),cljs.core.map.call(null,om.util.force_children,children__48121__auto__));
});

common.web.a_mixin.cljs$lang$maxFixedArity = (1);

common.web.a_mixin.cljs$lang$applyTo = (function (seq49609){
var G__49610 = cljs.core.first.call(null,seq49609);
var seq49609__$1 = cljs.core.next.call(null,seq49609);
return common.web.a_mixin.cljs$core$IFn$_invoke$arity$variadic(G__49610,seq49609__$1);
});


common.web.a_scene = (function common$web$a_scene(var_args){
var args__21903__auto__ = [];
var len__21896__auto___49746 = arguments.length;
var i__21897__auto___49747 = (0);
while(true){
if((i__21897__auto___49747 < len__21896__auto___49746)){
args__21903__auto__.push((arguments[i__21897__auto___49747]));

var G__49748 = (i__21897__auto___49747 + (1));
i__21897__auto___49747 = G__49748;
continue;
} else {
}
break;
}

var argseq__21904__auto__ = ((((1) < args__21903__auto__.length))?(new cljs.core.IndexedSeq(args__21903__auto__.slice((1)),(0),null)):null);
return common.web.a_scene.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21904__auto__);
});

common.web.a_scene.cljs$core$IFn$_invoke$arity$variadic = (function (opts__48120__auto__,children__48121__auto__){
return React.createElement("a-scene",cljs.core.clj__GT_js.call(null,common.web.map__GT_frame.call(null,opts__48120__auto__)),cljs.core.map.call(null,om.util.force_children,children__48121__auto__));
});

common.web.a_scene.cljs$lang$maxFixedArity = (1);

common.web.a_scene.cljs$lang$applyTo = (function (seq49613){
var G__49614 = cljs.core.first.call(null,seq49613);
var seq49613__$1 = cljs.core.next.call(null,seq49613);
return common.web.a_scene.cljs$core$IFn$_invoke$arity$variadic(G__49614,seq49613__$1);
});


common.web.a_event = (function common$web$a_event(var_args){
var args__21903__auto__ = [];
var len__21896__auto___49757 = arguments.length;
var i__21897__auto___49758 = (0);
while(true){
if((i__21897__auto___49758 < len__21896__auto___49757)){
args__21903__auto__.push((arguments[i__21897__auto___49758]));

var G__49763 = (i__21897__auto___49758 + (1));
i__21897__auto___49758 = G__49763;
continue;
} else {
}
break;
}

var argseq__21904__auto__ = ((((1) < args__21903__auto__.length))?(new cljs.core.IndexedSeq(args__21903__auto__.slice((1)),(0),null)):null);
return common.web.a_event.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21904__auto__);
});

common.web.a_event.cljs$core$IFn$_invoke$arity$variadic = (function (opts__48120__auto__,children__48121__auto__){
return React.createElement("a-event",cljs.core.clj__GT_js.call(null,common.web.map__GT_frame.call(null,opts__48120__auto__)),cljs.core.map.call(null,om.util.force_children,children__48121__auto__));
});

common.web.a_event.cljs$lang$maxFixedArity = (1);

common.web.a_event.cljs$lang$applyTo = (function (seq49618){
var G__49619 = cljs.core.first.call(null,seq49618);
var seq49618__$1 = cljs.core.next.call(null,seq49618);
return common.web.a_event.cljs$core$IFn$_invoke$arity$variadic(G__49619,seq49618__$1);
});


common.web.a_register_element = (function common$web$a_register_element(var_args){
var args__21903__auto__ = [];
var len__21896__auto___49774 = arguments.length;
var i__21897__auto___49775 = (0);
while(true){
if((i__21897__auto___49775 < len__21896__auto___49774)){
args__21903__auto__.push((arguments[i__21897__auto___49775]));

var G__49777 = (i__21897__auto___49775 + (1));
i__21897__auto___49775 = G__49777;
continue;
} else {
}
break;
}

var argseq__21904__auto__ = ((((1) < args__21903__auto__.length))?(new cljs.core.IndexedSeq(args__21903__auto__.slice((1)),(0),null)):null);
return common.web.a_register_element.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21904__auto__);
});

common.web.a_register_element.cljs$core$IFn$_invoke$arity$variadic = (function (opts__48120__auto__,children__48121__auto__){
return React.createElement("a-register-element",cljs.core.clj__GT_js.call(null,common.web.map__GT_frame.call(null,opts__48120__auto__)),cljs.core.map.call(null,om.util.force_children,children__48121__auto__));
});

common.web.a_register_element.cljs$lang$maxFixedArity = (1);

common.web.a_register_element.cljs$lang$applyTo = (function (seq49621){
var G__49622 = cljs.core.first.call(null,seq49621);
var seq49621__$1 = cljs.core.next.call(null,seq49621);
return common.web.a_register_element.cljs$core$IFn$_invoke$arity$variadic(G__49622,seq49621__$1);
});


common.web.a_cubemap = (function common$web$a_cubemap(var_args){
var args__21903__auto__ = [];
var len__21896__auto___49781 = arguments.length;
var i__21897__auto___49782 = (0);
while(true){
if((i__21897__auto___49782 < len__21896__auto___49781)){
args__21903__auto__.push((arguments[i__21897__auto___49782]));

var G__49783 = (i__21897__auto___49782 + (1));
i__21897__auto___49782 = G__49783;
continue;
} else {
}
break;
}

var argseq__21904__auto__ = ((((1) < args__21903__auto__.length))?(new cljs.core.IndexedSeq(args__21903__auto__.slice((1)),(0),null)):null);
return common.web.a_cubemap.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21904__auto__);
});

common.web.a_cubemap.cljs$core$IFn$_invoke$arity$variadic = (function (opts__48120__auto__,children__48121__auto__){
return React.createElement("a-cubemap",cljs.core.clj__GT_js.call(null,common.web.map__GT_frame.call(null,opts__48120__auto__)),cljs.core.map.call(null,om.util.force_children,children__48121__auto__));
});

common.web.a_cubemap.cljs$lang$maxFixedArity = (1);

common.web.a_cubemap.cljs$lang$applyTo = (function (seq49627){
var G__49628 = cljs.core.first.call(null,seq49627);
var seq49627__$1 = cljs.core.next.call(null,seq49627);
return common.web.a_cubemap.cljs$core$IFn$_invoke$arity$variadic(G__49628,seq49627__$1);
});


common.web.a_node = (function common$web$a_node(var_args){
var args__21903__auto__ = [];
var len__21896__auto___49796 = arguments.length;
var i__21897__auto___49797 = (0);
while(true){
if((i__21897__auto___49797 < len__21896__auto___49796)){
args__21903__auto__.push((arguments[i__21897__auto___49797]));

var G__49798 = (i__21897__auto___49797 + (1));
i__21897__auto___49797 = G__49798;
continue;
} else {
}
break;
}

var argseq__21904__auto__ = ((((1) < args__21903__auto__.length))?(new cljs.core.IndexedSeq(args__21903__auto__.slice((1)),(0),null)):null);
return common.web.a_node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21904__auto__);
});

common.web.a_node.cljs$core$IFn$_invoke$arity$variadic = (function (opts__48120__auto__,children__48121__auto__){
return React.createElement("a-node",cljs.core.clj__GT_js.call(null,common.web.map__GT_frame.call(null,opts__48120__auto__)),cljs.core.map.call(null,om.util.force_children,children__48121__auto__));
});

common.web.a_node.cljs$lang$maxFixedArity = (1);

common.web.a_node.cljs$lang$applyTo = (function (seq49637){
var G__49638 = cljs.core.first.call(null,seq49637);
var seq49637__$1 = cljs.core.next.call(null,seq49637);
return common.web.a_node.cljs$core$IFn$_invoke$arity$variadic(G__49638,seq49637__$1);
});


common.web.a_entity = (function common$web$a_entity(var_args){
var args__21903__auto__ = [];
var len__21896__auto___49813 = arguments.length;
var i__21897__auto___49814 = (0);
while(true){
if((i__21897__auto___49814 < len__21896__auto___49813)){
args__21903__auto__.push((arguments[i__21897__auto___49814]));

var G__49815 = (i__21897__auto___49814 + (1));
i__21897__auto___49814 = G__49815;
continue;
} else {
}
break;
}

var argseq__21904__auto__ = ((((1) < args__21903__auto__.length))?(new cljs.core.IndexedSeq(args__21903__auto__.slice((1)),(0),null)):null);
return common.web.a_entity.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21904__auto__);
});

common.web.a_entity.cljs$core$IFn$_invoke$arity$variadic = (function (opts__48120__auto__,children__48121__auto__){
return React.createElement("a-entity",cljs.core.clj__GT_js.call(null,common.web.map__GT_frame.call(null,opts__48120__auto__)),cljs.core.map.call(null,om.util.force_children,children__48121__auto__));
});

common.web.a_entity.cljs$lang$maxFixedArity = (1);

common.web.a_entity.cljs$lang$applyTo = (function (seq49654){
var G__49655 = cljs.core.first.call(null,seq49654);
var seq49654__$1 = cljs.core.next.call(null,seq49654);
return common.web.a_entity.cljs$core$IFn$_invoke$arity$variadic(G__49655,seq49654__$1);
});


common.web.a_assets = (function common$web$a_assets(var_args){
var args__21903__auto__ = [];
var len__21896__auto___49820 = arguments.length;
var i__21897__auto___49821 = (0);
while(true){
if((i__21897__auto___49821 < len__21896__auto___49820)){
args__21903__auto__.push((arguments[i__21897__auto___49821]));

var G__49822 = (i__21897__auto___49821 + (1));
i__21897__auto___49821 = G__49822;
continue;
} else {
}
break;
}

var argseq__21904__auto__ = ((((1) < args__21903__auto__.length))?(new cljs.core.IndexedSeq(args__21903__auto__.slice((1)),(0),null)):null);
return common.web.a_assets.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21904__auto__);
});

common.web.a_assets.cljs$core$IFn$_invoke$arity$variadic = (function (opts__48120__auto__,children__48121__auto__){
return React.createElement("a-assets",cljs.core.clj__GT_js.call(null,common.web.map__GT_frame.call(null,opts__48120__auto__)),cljs.core.map.call(null,om.util.force_children,children__48121__auto__));
});

common.web.a_assets.cljs$lang$maxFixedArity = (1);

common.web.a_assets.cljs$lang$applyTo = (function (seq49675){
var G__49676 = cljs.core.first.call(null,seq49675);
var seq49675__$1 = cljs.core.next.call(null,seq49675);
return common.web.a_assets.cljs$core$IFn$_invoke$arity$variadic(G__49676,seq49675__$1);
});


common.web.a_animation = (function common$web$a_animation(var_args){
var args__21903__auto__ = [];
var len__21896__auto___49831 = arguments.length;
var i__21897__auto___49832 = (0);
while(true){
if((i__21897__auto___49832 < len__21896__auto___49831)){
args__21903__auto__.push((arguments[i__21897__auto___49832]));

var G__49833 = (i__21897__auto___49832 + (1));
i__21897__auto___49832 = G__49833;
continue;
} else {
}
break;
}

var argseq__21904__auto__ = ((((1) < args__21903__auto__.length))?(new cljs.core.IndexedSeq(args__21903__auto__.slice((1)),(0),null)):null);
return common.web.a_animation.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21904__auto__);
});

common.web.a_animation.cljs$core$IFn$_invoke$arity$variadic = (function (opts__48120__auto__,children__48121__auto__){
return React.createElement("a-animation",cljs.core.clj__GT_js.call(null,common.web.map__GT_frame.call(null,opts__48120__auto__)),cljs.core.map.call(null,om.util.force_children,children__48121__auto__));
});

common.web.a_animation.cljs$lang$maxFixedArity = (1);

common.web.a_animation.cljs$lang$applyTo = (function (seq49704){
var G__49705 = cljs.core.first.call(null,seq49704);
var seq49704__$1 = cljs.core.next.call(null,seq49704);
return common.web.a_animation.cljs$core$IFn$_invoke$arity$variadic(G__49705,seq49704__$1);
});


/**
 * creates element by string tag
 */
common.web.el = (function common$web$el(var_args){
var args__21903__auto__ = [];
var len__21896__auto___49839 = arguments.length;
var i__21897__auto___49841 = (0);
while(true){
if((i__21897__auto___49841 < len__21896__auto___49839)){
args__21903__auto__.push((arguments[i__21897__auto___49841]));

var G__49842 = (i__21897__auto___49841 + (1));
i__21897__auto___49841 = G__49842;
continue;
} else {
}
break;
}

var argseq__21904__auto__ = ((((2) < args__21903__auto__.length))?(new cljs.core.IndexedSeq(args__21903__auto__.slice((2)),(0),null)):null);
return common.web.el.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__21904__auto__);
});

common.web.el.cljs$core$IFn$_invoke$arity$variadic = (function (tag,opts,children){
return React.createElement(tag,cljs.core.clj__GT_js.call(null,common.web.map__GT_frame.call(null,opts)),cljs.core.map.call(null,om.util.force_children,children));
});

common.web.el.cljs$lang$maxFixedArity = (2);

common.web.el.cljs$lang$applyTo = (function (seq49710){
var G__49711 = cljs.core.first.call(null,seq49710);
var seq49710__$1 = cljs.core.next.call(null,seq49710);
var G__49712 = cljs.core.first.call(null,seq49710__$1);
var seq49710__$2 = cljs.core.next.call(null,seq49710__$1);
return common.web.el.cljs$core$IFn$_invoke$arity$variadic(G__49711,G__49712,seq49710__$2);
});


/**
 * deeply turns a map into an element of tag :type (defaults to a-entity)
 */
common.web.custom = (function common$web$custom(var_args){
var args__21903__auto__ = [];
var len__21896__auto___49850 = arguments.length;
var i__21897__auto___49851 = (0);
while(true){
if((i__21897__auto___49851 < len__21896__auto___49850)){
args__21903__auto__.push((arguments[i__21897__auto___49851]));

var G__49853 = (i__21897__auto___49851 + (1));
i__21897__auto___49851 = G__49853;
continue;
} else {
}
break;
}

var argseq__21904__auto__ = ((((1) < args__21903__auto__.length))?(new cljs.core.IndexedSeq(args__21903__auto__.slice((1)),(0),null)):null);
return common.web.custom.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21904__auto__);
});

common.web.custom.cljs$core$IFn$_invoke$arity$variadic = (function (e,c){
var childs = cljs.core.map.call(null,common.web.custom,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(e));
var props = cljs.core.dissoc.call(null,e,new cljs.core.Keyword(null,"children","children",-940561982));
return common.web.el.call(null,(function (){var or__20675__auto__ = common.web.tags.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(props));
if(cljs.core.truth_(or__20675__auto__)){
return or__20675__auto__;
} else {
return "a-entity";
}
})(),props,childs,c);
});

common.web.custom.cljs$lang$maxFixedArity = (1);

common.web.custom.cljs$lang$applyTo = (function (seq49720){
var G__49721 = cljs.core.first.call(null,seq49720);
var seq49720__$1 = cljs.core.next.call(null,seq49720);
return common.web.custom.cljs$core$IFn$_invoke$arity$variadic(G__49721,seq49720__$1);
});


//# sourceMappingURL=web.js.map