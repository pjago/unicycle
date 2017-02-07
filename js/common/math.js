// Compiled by ClojureScript 1.9.456 {}
goog.provide('common.math');
goog.require('cljs.core');
goog.require('cljs.spec');
goog.require('clojure.core.matrix');
goog.require('clojure.core.matrix.operators');
common.math.π = Math.PI;
common.math.τ = clojure.core.matrix.operators._STAR_.call(null,common.math.π,(2));
common.math.π_COLON_2 = clojure.core.matrix.operators._SLASH_.call(null,common.math.π,(2));
common.math.π_COLON_4 = clojure.core.matrix.operators._SLASH_.call(null,common.math.π,(4));
common.math.π_COLON_6 = clojure.core.matrix.operators._SLASH_.call(null,common.math.π,(6));
common.math._SLASH_ = (function common$math$_SLASH_(var_args){
var args49888 = [];
var len__21896__auto___49894 = arguments.length;
var i__21897__auto___49895 = (0);
while(true){
if((i__21897__auto___49895 < len__21896__auto___49894)){
args49888.push((arguments[i__21897__auto___49895]));

var G__49896 = (i__21897__auto___49895 + (1));
i__21897__auto___49895 = G__49896;
continue;
} else {
}
break;
}

var G__49893 = args49888.length;
switch (G__49893) {
case 1:
return common.math._SLASH_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return common.math._SLASH_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__21919__auto__ = (new cljs.core.IndexedSeq(args49888.slice((2)),(0),null));
return common.math._SLASH_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__21919__auto__);

}
});

common.math._SLASH_.cljs$core$IFn$_invoke$arity$1 = (function (x){
return x;
});

common.math._SLASH_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return clojure.core.matrix.operators._SLASH_.call(null,clojure.core.matrix.operators._STAR_.call(null,x,y),clojure.core.matrix.operators._PLUS_.call(null,x,y));
});

common.math._SLASH_.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,more){
return cljs.core.reduce.call(null,common.math._SLASH_,common.math._SLASH_.call(null,x,y),more);
});

common.math._SLASH_.cljs$lang$applyTo = (function (seq49889){
var G__49890 = cljs.core.first.call(null,seq49889);
var seq49889__$1 = cljs.core.next.call(null,seq49889);
var G__49891 = cljs.core.first.call(null,seq49889__$1);
var seq49889__$2 = cljs.core.next.call(null,seq49889__$1);
return common.math._SLASH_.cljs$core$IFn$_invoke$arity$variadic(G__49890,G__49891,seq49889__$2);
});

common.math._SLASH_.cljs$lang$maxFixedArity = (2);

common.math.dt = clojure.core.matrix.operators._SLASH_.call(null,(60));
common.math.rad_COLON_s__GT_rpm = clojure.core.matrix.operators._SLASH_.call(null,(60),common.math.τ);
common.math.m_COLON_s__GT_km_COLON_h = 3.6;
common.math.rad__GT_deg = clojure.core.matrix.operators._SLASH_.call(null,(180),common.math.π);
common.math.constrain = (function common$math$constrain(var_args){
var args49898 = [];
var len__21896__auto___49901 = arguments.length;
var i__21897__auto___49902 = (0);
while(true){
if((i__21897__auto___49902 < len__21896__auto___49901)){
args49898.push((arguments[i__21897__auto___49902]));

var G__49903 = (i__21897__auto___49902 + (1));
i__21897__auto___49902 = G__49903;
continue;
} else {
}
break;
}

var G__49900 = args49898.length;
switch (G__49900) {
case 2:
return common.math.constrain.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return common.math.constrain.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args49898.length)].join('')));

}
});

common.math.constrain.cljs$core$IFn$_invoke$arity$2 = (function (v,abs){
var x__21020__auto__ = (function (){var x__21013__auto__ = v;
var y__21014__auto__ = clojure.core.matrix.operators._.call(null,abs);
return ((x__21013__auto__ > y__21014__auto__) ? x__21013__auto__ : y__21014__auto__);
})();
var y__21021__auto__ = abs;
return ((x__21020__auto__ < y__21021__auto__) ? x__21020__auto__ : y__21021__auto__);
});

common.math.constrain.cljs$core$IFn$_invoke$arity$3 = (function (v,inf,sup){
var x__21020__auto__ = (function (){var x__21013__auto__ = v;
var y__21014__auto__ = inf;
return ((x__21013__auto__ > y__21014__auto__) ? x__21013__auto__ : y__21014__auto__);
})();
var y__21021__auto__ = sup;
return ((x__21020__auto__ < y__21021__auto__) ? x__21020__auto__ : y__21021__auto__);
});

common.math.constrain.cljs$lang$maxFixedArity = 3;

common.math.upper_bound = (function common$math$upper_bound(v,B){
var max = clojure.core.matrix.maximum.call(null,clojure.core.matrix.abs.call(null,v));
if((max <= B)){
return v;
} else {
return clojure.core.matrix.operators._STAR_.call(null,v,B,clojure.core.matrix.operators._SLASH_.call(null,max));
}
});
common.math.lower_bound = (function common$math$lower_bound(v,b){
var min = clojure.core.matrix.minimum.call(null,clojure.core.matrix.abs.call(null,v));
if((min >= b)){
return v;
} else {
return clojure.core.matrix.operators._STAR_.call(null,v,b,clojure.core.matrix.operators._SLASH_.call(null,min));
}
});
common.math.map = (function common$math$map(v,p,P,n,N){
return clojure.core.matrix.operators._PLUS_.call(null,n,clojure.core.matrix.operators._STAR_.call(null,clojure.core.matrix.operators._.call(null,v,p),clojure.core.matrix.operators._.call(null,n,N),clojure.core.matrix.operators._SLASH_.call(null,clojure.core.matrix.operators._.call(null,p,P))));
});
cljs.spec.def_impl.call(null,new cljs.core.Keyword("common.math","pos","common.math/pos",2011542109),cljs.core.list(new cljs.core.Symbol("cljs.spec","cat","cljs.spec/cat",850003863,null),new cljs.core.Keyword(null,"X","X",1705996313),cljs.core.list(new cljs.core.Symbol("cljs.spec","+","cljs.spec/+",-342318319,null),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null)),new cljs.core.Keyword(null,"A","A",-1688942394),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null)),cljs.spec.cat_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"A","A",-1688942394)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.rep_PLUS_impl.call(null,new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),cljs.core.number_QMARK_),cljs.core.number_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec","+","cljs.spec/+",-342318319,null),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null)),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null)], null)));
cljs.spec.def_impl.call(null,new cljs.core.Keyword("common.math","yaw","common.math/yaw",444808232),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),cljs.core.number_QMARK_);
cljs.spec.def_impl.call(null,new cljs.core.Keyword("common.math","body","common.math/body",-260895982),cljs.core.list(new cljs.core.Symbol("cljs.spec","keys","cljs.spec/keys",-927379584,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("common.math","pos","common.math/pos",2011542109),new cljs.core.Keyword("common.math","yaw","common.math/yaw",444808232)], null)),cljs.spec.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("common.math","pos","common.math/pos",2011542109),new cljs.core.Keyword("common.math","yaw","common.math/yaw",444808232)], null),null,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__49905){
return cljs.core.map_QMARK_.call(null,G__49905);
}),(function (G__49905){
return cljs.core.contains_QMARK_.call(null,G__49905,new cljs.core.Keyword(null,"pos","pos",-864607220));
}),(function (G__49905){
return cljs.core.contains_QMARK_.call(null,G__49905,new cljs.core.Keyword(null,"yaw","yaw",-1791898389));
})], null),(function (G__49905){
return (cljs.core.map_QMARK_.call(null,G__49905)) && (cljs.core.contains_QMARK_.call(null,G__49905,new cljs.core.Keyword(null,"pos","pos",-864607220))) && (cljs.core.contains_QMARK_.call(null,G__49905,new cljs.core.Keyword(null,"yaw","yaw",-1791898389)));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("common.math","pos","common.math/pos",2011542109),new cljs.core.Keyword("common.math","yaw","common.math/yaw",444808232)], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.Keyword(null,"yaw","yaw",-1791898389)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"pos","pos",-864607220))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"yaw","yaw",-1791898389)))], null),null])));
common.math.translate = (function common$math$translate(to){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.core.matrix.operators._.call(null,cljs.core.first.call(null,to)),clojure.core.matrix.operators._.call(null,cljs.core.second.call(null,to)),(1)], null)], null);
});
cljs.spec.def_impl.call(null,new cljs.core.Symbol("common.math","translate","common.math/translate",1006426497,null),cljs.core.list(new cljs.core.Symbol("cljs.spec","fspec","cljs.spec/fspec",982220571,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec","cat","cljs.spec/cat",850003863,null),new cljs.core.Keyword(null,"origin","origin",1037372088),cljs.core.list(new cljs.core.Symbol("cljs.spec","spec","cljs.spec/spec",775251713,null),new cljs.core.Keyword("common.math","pos","common.math/pos",2011542109))),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol("clojure.core.matrix","matrix?","clojure.core.matrix/matrix?",32572907,null)),cljs.spec.fspec_impl.call(null,cljs.spec.spec_impl.call(null,cljs.core.list(new cljs.core.Symbol("cljs.spec","cat","cljs.spec/cat",850003863,null),new cljs.core.Keyword(null,"origin","origin",1037372088),cljs.core.list(new cljs.core.Symbol("cljs.spec","spec","cljs.spec/spec",775251713,null),new cljs.core.Keyword("common.math","pos","common.math/pos",2011542109))),cljs.spec.cat_impl.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"origin","origin",1037372088)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.spec_impl.call(null,new cljs.core.Keyword("common.math","pos","common.math/pos",2011542109),new cljs.core.Keyword("common.math","pos","common.math/pos",2011542109),null,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec","spec","cljs.spec/spec",775251713,null),new cljs.core.Keyword("common.math","pos","common.math/pos",2011542109))], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec","cat","cljs.spec/cat",850003863,null),new cljs.core.Keyword(null,"origin","origin",1037372088),cljs.core.list(new cljs.core.Symbol("cljs.spec","spec","cljs.spec/spec",775251713,null),new cljs.core.Keyword("common.math","pos","common.math/pos",2011542109))),cljs.spec.spec_impl.call(null,new cljs.core.Symbol("clojure.core.matrix","matrix?","clojure.core.matrix/matrix?",32572907,null),clojure.core.matrix.matrix_QMARK_,null,null),new cljs.core.Symbol("clojure.core.matrix","matrix?","clojure.core.matrix/matrix?",32572907,null),null,null,null));
common.math.rotate = (function common$math$rotate(to){
var c = clojure.core.matrix.cos.call(null,to);
var s = clojure.core.matrix.sin.call(null,to);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,clojure.core.matrix.operators._.call(null,s),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,c,(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(1)], null)], null);
});
cljs.spec.def_impl.call(null,new cljs.core.Symbol("common.math","rotate","common.math/rotate",-552468139,null),cljs.core.list(new cljs.core.Symbol("cljs.spec","fspec","cljs.spec/fspec",982220571,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec","cat","cljs.spec/cat",850003863,null),new cljs.core.Keyword(null,"axis","axis",-1215390822),new cljs.core.Keyword("common.math","yaw","common.math/yaw",444808232)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol("clojure.core.matrix","matrix?","clojure.core.matrix/matrix?",32572907,null)),cljs.spec.fspec_impl.call(null,cljs.spec.spec_impl.call(null,cljs.core.list(new cljs.core.Symbol("cljs.spec","cat","cljs.spec/cat",850003863,null),new cljs.core.Keyword(null,"axis","axis",-1215390822),new cljs.core.Keyword("common.math","yaw","common.math/yaw",444808232)),cljs.spec.cat_impl.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"axis","axis",-1215390822)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("common.math","yaw","common.math/yaw",444808232)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("common.math","yaw","common.math/yaw",444808232)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec","cat","cljs.spec/cat",850003863,null),new cljs.core.Keyword(null,"axis","axis",-1215390822),new cljs.core.Keyword("common.math","yaw","common.math/yaw",444808232)),cljs.spec.spec_impl.call(null,new cljs.core.Symbol("clojure.core.matrix","matrix?","clojure.core.matrix/matrix?",32572907,null),clojure.core.matrix.matrix_QMARK_,null,null),new cljs.core.Symbol("clojure.core.matrix","matrix?","clojure.core.matrix/matrix?",32572907,null),null,null,null));
common.math.scale = (function common$math$scale(to){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [to,(0),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),to,(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(1)], null)], null);
});
cljs.spec.def_impl.call(null,new cljs.core.Symbol("common.math","scale","common.math/scale",-627250683,null),cljs.core.list(new cljs.core.Symbol("cljs.spec","fspec","cljs.spec/fspec",982220571,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec","cat","cljs.spec/cat",850003863,null),new cljs.core.Keyword(null,"scaling","scaling",2072718421),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol("clojure.core.matrix","matrix?","clojure.core.matrix/matrix?",32572907,null)),cljs.spec.fspec_impl.call(null,cljs.spec.spec_impl.call(null,cljs.core.list(new cljs.core.Symbol("cljs.spec","cat","cljs.spec/cat",850003863,null),new cljs.core.Keyword(null,"scaling","scaling",2072718421),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null)),cljs.spec.cat_impl.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scaling","scaling",2072718421)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.number_QMARK_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec","cat","cljs.spec/cat",850003863,null),new cljs.core.Keyword(null,"scaling","scaling",2072718421),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null)),cljs.spec.spec_impl.call(null,new cljs.core.Symbol("clojure.core.matrix","matrix?","clojure.core.matrix/matrix?",32572907,null),clojure.core.matrix.matrix_QMARK_,null,null),new cljs.core.Symbol("clojure.core.matrix","matrix?","clojure.core.matrix/matrix?",32572907,null),null,null,null));
common.math.glob__GT_body = (function common$math$glob__GT_body(p__49906){
var map__49909 = p__49906;
var map__49909__$1 = ((((!((map__49909 == null)))?((((map__49909.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49909.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49909):map__49909);
var pos = cljs.core.get.call(null,map__49909__$1,new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(1)], null));
var yaw = cljs.core.get.call(null,map__49909__$1,new cljs.core.Keyword(null,"yaw","yaw",-1791898389),(0));
return clojure.core.matrix.mmul.call(null,common.math.translate.call(null,pos),common.math.rotate.call(null,yaw));
});
common.math.quad__GT_phas = (function common$math$quad__GT_phas(p__49911){
var vec__49915 = p__49911;
var x = cljs.core.nth.call(null,vec__49915,(0),null);
var y = cljs.core.nth.call(null,vec__49915,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.core.matrix.magnitude.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)),Math.atan2(y,x)], null);
});
common.math.detour = (function common$math$detour(pos,body){
return common.math.quad__GT_phas.call(null,clojure.core.matrix.mmul.call(null,pos,common.math.glob__GT_body.call(null,body)));
});

//# sourceMappingURL=math.js.map