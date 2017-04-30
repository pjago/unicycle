// Compiled by ClojureScript 1.9.521 {}
goog.provide('cljs.spec.impl.gen');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.impl.gen.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.impl.gen.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.impl.gen.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.impl.gen.LazyVar.cljs$lang$type = true;

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorStr = "cljs.spec.impl.gen/LazyVar";

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__27979__auto__,writer__27980__auto__,opt__27981__auto__){
return cljs.core._write.call(null,writer__27980__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__28550__auto__ = [];
var len__28543__auto___50726 = arguments.length;
var i__28544__auto___50727 = (0);
while(true){
if((i__28544__auto___50727 < len__28543__auto___50726)){
args__28550__auto__.push((arguments[i__28544__auto___50727]));

var G__50728 = (i__28544__auto___50727 + (1));
i__28544__auto___50727 = G__50728;
continue;
} else {
}
break;
}

var argseq__28551__auto__ = ((((0) < args__28550__auto__.length))?(new cljs.core.IndexedSeq(args__28550__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__28551__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq50725){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50725));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__28550__auto__ = [];
var len__28543__auto___50744 = arguments.length;
var i__28544__auto___50745 = (0);
while(true){
if((i__28544__auto___50745 < len__28543__auto___50744)){
args__28550__auto__.push((arguments[i__28544__auto___50745]));

var G__50749 = (i__28544__auto___50745 + (1));
i__28544__auto___50745 = G__50749;
continue;
} else {
}
break;
}

var argseq__28551__auto__ = ((((0) < args__28550__auto__.length))?(new cljs.core.IndexedSeq(args__28550__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__28551__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq50743){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50743));
});

var g_QMARK__50753 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
var g_50754 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__50753){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__50753))
,null));
var mkg_50755 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__50753,g_50754){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__50753,g_50754))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__50753,g_50754,mkg_50755){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__50753).call(null,x);
});})(g_QMARK__50753,g_50754,mkg_50755))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__50753,g_50754,mkg_50755){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_50755).call(null,gfn);
});})(g_QMARK__50753,g_50754,mkg_50755))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__50753,g_50754,mkg_50755){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_50754).call(null,generator);
});})(g_QMARK__50753,g_50754,mkg_50755))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__50689__auto___50843 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__50689__auto___50843){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__28550__auto__ = [];
var len__28543__auto___50844 = arguments.length;
var i__28544__auto___50845 = (0);
while(true){
if((i__28544__auto___50845 < len__28543__auto___50844)){
args__28550__auto__.push((arguments[i__28544__auto___50845]));

var G__50846 = (i__28544__auto___50845 + (1));
i__28544__auto___50845 = G__50846;
continue;
} else {
}
break;
}

var argseq__28551__auto__ = ((((0) < args__28550__auto__.length))?(new cljs.core.IndexedSeq(args__28550__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__28551__auto__);
});})(g__50689__auto___50843))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50689__auto___50843){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__50689__auto___50843),args);
});})(g__50689__auto___50843))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__50689__auto___50843){
return (function (seq50760){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50760));
});})(g__50689__auto___50843))
;


var g__50689__auto___50847 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__50689__auto___50847){
return (function cljs$spec$impl$gen$list(var_args){
var args__28550__auto__ = [];
var len__28543__auto___50848 = arguments.length;
var i__28544__auto___50849 = (0);
while(true){
if((i__28544__auto___50849 < len__28543__auto___50848)){
args__28550__auto__.push((arguments[i__28544__auto___50849]));

var G__50850 = (i__28544__auto___50849 + (1));
i__28544__auto___50849 = G__50850;
continue;
} else {
}
break;
}

var argseq__28551__auto__ = ((((0) < args__28550__auto__.length))?(new cljs.core.IndexedSeq(args__28550__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__28551__auto__);
});})(g__50689__auto___50847))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50689__auto___50847){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__50689__auto___50847),args);
});})(g__50689__auto___50847))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__50689__auto___50847){
return (function (seq50766){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50766));
});})(g__50689__auto___50847))
;


var g__50689__auto___50851 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__50689__auto___50851){
return (function cljs$spec$impl$gen$map(var_args){
var args__28550__auto__ = [];
var len__28543__auto___50852 = arguments.length;
var i__28544__auto___50853 = (0);
while(true){
if((i__28544__auto___50853 < len__28543__auto___50852)){
args__28550__auto__.push((arguments[i__28544__auto___50853]));

var G__50854 = (i__28544__auto___50853 + (1));
i__28544__auto___50853 = G__50854;
continue;
} else {
}
break;
}

var argseq__28551__auto__ = ((((0) < args__28550__auto__.length))?(new cljs.core.IndexedSeq(args__28550__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__28551__auto__);
});})(g__50689__auto___50851))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50689__auto___50851){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__50689__auto___50851),args);
});})(g__50689__auto___50851))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__50689__auto___50851){
return (function (seq50769){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50769));
});})(g__50689__auto___50851))
;


var g__50689__auto___50859 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__50689__auto___50859){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__28550__auto__ = [];
var len__28543__auto___50864 = arguments.length;
var i__28544__auto___50865 = (0);
while(true){
if((i__28544__auto___50865 < len__28543__auto___50864)){
args__28550__auto__.push((arguments[i__28544__auto___50865]));

var G__50866 = (i__28544__auto___50865 + (1));
i__28544__auto___50865 = G__50866;
continue;
} else {
}
break;
}

var argseq__28551__auto__ = ((((0) < args__28550__auto__.length))?(new cljs.core.IndexedSeq(args__28550__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__28551__auto__);
});})(g__50689__auto___50859))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50689__auto___50859){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__50689__auto___50859),args);
});})(g__50689__auto___50859))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__50689__auto___50859){
return (function (seq50770){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50770));
});})(g__50689__auto___50859))
;


var g__50689__auto___50867 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__50689__auto___50867){
return (function cljs$spec$impl$gen$set(var_args){
var args__28550__auto__ = [];
var len__28543__auto___50868 = arguments.length;
var i__28544__auto___50869 = (0);
while(true){
if((i__28544__auto___50869 < len__28543__auto___50868)){
args__28550__auto__.push((arguments[i__28544__auto___50869]));

var G__50870 = (i__28544__auto___50869 + (1));
i__28544__auto___50869 = G__50870;
continue;
} else {
}
break;
}

var argseq__28551__auto__ = ((((0) < args__28550__auto__.length))?(new cljs.core.IndexedSeq(args__28550__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__28551__auto__);
});})(g__50689__auto___50867))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50689__auto___50867){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__50689__auto___50867),args);
});})(g__50689__auto___50867))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__50689__auto___50867){
return (function (seq50771){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50771));
});})(g__50689__auto___50867))
;


var g__50689__auto___50875 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__50689__auto___50875){
return (function cljs$spec$impl$gen$vector(var_args){
var args__28550__auto__ = [];
var len__28543__auto___50876 = arguments.length;
var i__28544__auto___50877 = (0);
while(true){
if((i__28544__auto___50877 < len__28543__auto___50876)){
args__28550__auto__.push((arguments[i__28544__auto___50877]));

var G__50882 = (i__28544__auto___50877 + (1));
i__28544__auto___50877 = G__50882;
continue;
} else {
}
break;
}

var argseq__28551__auto__ = ((((0) < args__28550__auto__.length))?(new cljs.core.IndexedSeq(args__28550__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__28551__auto__);
});})(g__50689__auto___50875))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50689__auto___50875){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__50689__auto___50875),args);
});})(g__50689__auto___50875))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__50689__auto___50875){
return (function (seq50772){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50772));
});})(g__50689__auto___50875))
;


var g__50689__auto___50887 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__50689__auto___50887){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__28550__auto__ = [];
var len__28543__auto___50888 = arguments.length;
var i__28544__auto___50889 = (0);
while(true){
if((i__28544__auto___50889 < len__28543__auto___50888)){
args__28550__auto__.push((arguments[i__28544__auto___50889]));

var G__50890 = (i__28544__auto___50889 + (1));
i__28544__auto___50889 = G__50890;
continue;
} else {
}
break;
}

var argseq__28551__auto__ = ((((0) < args__28550__auto__.length))?(new cljs.core.IndexedSeq(args__28550__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__28551__auto__);
});})(g__50689__auto___50887))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50689__auto___50887){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__50689__auto___50887),args);
});})(g__50689__auto___50887))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__50689__auto___50887){
return (function (seq50775){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50775));
});})(g__50689__auto___50887))
;


var g__50689__auto___50896 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__50689__auto___50896){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__28550__auto__ = [];
var len__28543__auto___50901 = arguments.length;
var i__28544__auto___50902 = (0);
while(true){
if((i__28544__auto___50902 < len__28543__auto___50901)){
args__28550__auto__.push((arguments[i__28544__auto___50902]));

var G__50903 = (i__28544__auto___50902 + (1));
i__28544__auto___50902 = G__50903;
continue;
} else {
}
break;
}

var argseq__28551__auto__ = ((((0) < args__28550__auto__.length))?(new cljs.core.IndexedSeq(args__28550__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__28551__auto__);
});})(g__50689__auto___50896))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50689__auto___50896){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__50689__auto___50896),args);
});})(g__50689__auto___50896))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__50689__auto___50896){
return (function (seq50776){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50776));
});})(g__50689__auto___50896))
;


var g__50689__auto___50911 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__50689__auto___50911){
return (function cljs$spec$impl$gen$elements(var_args){
var args__28550__auto__ = [];
var len__28543__auto___50916 = arguments.length;
var i__28544__auto___50917 = (0);
while(true){
if((i__28544__auto___50917 < len__28543__auto___50916)){
args__28550__auto__.push((arguments[i__28544__auto___50917]));

var G__50918 = (i__28544__auto___50917 + (1));
i__28544__auto___50917 = G__50918;
continue;
} else {
}
break;
}

var argseq__28551__auto__ = ((((0) < args__28550__auto__.length))?(new cljs.core.IndexedSeq(args__28550__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__28551__auto__);
});})(g__50689__auto___50911))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50689__auto___50911){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__50689__auto___50911),args);
});})(g__50689__auto___50911))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__50689__auto___50911){
return (function (seq50779){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50779));
});})(g__50689__auto___50911))
;


var g__50689__auto___50923 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__50689__auto___50923){
return (function cljs$spec$impl$gen$bind(var_args){
var args__28550__auto__ = [];
var len__28543__auto___50931 = arguments.length;
var i__28544__auto___50932 = (0);
while(true){
if((i__28544__auto___50932 < len__28543__auto___50931)){
args__28550__auto__.push((arguments[i__28544__auto___50932]));

var G__50933 = (i__28544__auto___50932 + (1));
i__28544__auto___50932 = G__50933;
continue;
} else {
}
break;
}

var argseq__28551__auto__ = ((((0) < args__28550__auto__.length))?(new cljs.core.IndexedSeq(args__28550__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__28551__auto__);
});})(g__50689__auto___50923))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50689__auto___50923){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__50689__auto___50923),args);
});})(g__50689__auto___50923))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__50689__auto___50923){
return (function (seq50797){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50797));
});})(g__50689__auto___50923))
;


var g__50689__auto___50946 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__50689__auto___50946){
return (function cljs$spec$impl$gen$choose(var_args){
var args__28550__auto__ = [];
var len__28543__auto___50951 = arguments.length;
var i__28544__auto___50952 = (0);
while(true){
if((i__28544__auto___50952 < len__28543__auto___50951)){
args__28550__auto__.push((arguments[i__28544__auto___50952]));

var G__50956 = (i__28544__auto___50952 + (1));
i__28544__auto___50952 = G__50956;
continue;
} else {
}
break;
}

var argseq__28551__auto__ = ((((0) < args__28550__auto__.length))?(new cljs.core.IndexedSeq(args__28550__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__28551__auto__);
});})(g__50689__auto___50946))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50689__auto___50946){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__50689__auto___50946),args);
});})(g__50689__auto___50946))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__50689__auto___50946){
return (function (seq50810){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50810));
});})(g__50689__auto___50946))
;


var g__50689__auto___50961 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__50689__auto___50961){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__28550__auto__ = [];
var len__28543__auto___50966 = arguments.length;
var i__28544__auto___50967 = (0);
while(true){
if((i__28544__auto___50967 < len__28543__auto___50966)){
args__28550__auto__.push((arguments[i__28544__auto___50967]));

var G__50968 = (i__28544__auto___50967 + (1));
i__28544__auto___50967 = G__50968;
continue;
} else {
}
break;
}

var argseq__28551__auto__ = ((((0) < args__28550__auto__.length))?(new cljs.core.IndexedSeq(args__28550__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__28551__auto__);
});})(g__50689__auto___50961))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50689__auto___50961){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__50689__auto___50961),args);
});})(g__50689__auto___50961))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__50689__auto___50961){
return (function (seq50828){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50828));
});})(g__50689__auto___50961))
;


var g__50689__auto___50976 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__50689__auto___50976){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__28550__auto__ = [];
var len__28543__auto___50979 = arguments.length;
var i__28544__auto___50980 = (0);
while(true){
if((i__28544__auto___50980 < len__28543__auto___50979)){
args__28550__auto__.push((arguments[i__28544__auto___50980]));

var G__50981 = (i__28544__auto___50980 + (1));
i__28544__auto___50980 = G__50981;
continue;
} else {
}
break;
}

var argseq__28551__auto__ = ((((0) < args__28550__auto__.length))?(new cljs.core.IndexedSeq(args__28550__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__28551__auto__);
});})(g__50689__auto___50976))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50689__auto___50976){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__50689__auto___50976),args);
});})(g__50689__auto___50976))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__50689__auto___50976){
return (function (seq50833){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50833));
});})(g__50689__auto___50976))
;


var g__50689__auto___50983 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__50689__auto___50983){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__28550__auto__ = [];
var len__28543__auto___50988 = arguments.length;
var i__28544__auto___50989 = (0);
while(true){
if((i__28544__auto___50989 < len__28543__auto___50988)){
args__28550__auto__.push((arguments[i__28544__auto___50989]));

var G__50990 = (i__28544__auto___50989 + (1));
i__28544__auto___50989 = G__50990;
continue;
} else {
}
break;
}

var argseq__28551__auto__ = ((((0) < args__28550__auto__.length))?(new cljs.core.IndexedSeq(args__28550__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__28551__auto__);
});})(g__50689__auto___50983))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50689__auto___50983){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__50689__auto___50983),args);
});})(g__50689__auto___50983))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__50689__auto___50983){
return (function (seq50836){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50836));
});})(g__50689__auto___50983))
;


var g__50689__auto___50998 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__50689__auto___50998){
return (function cljs$spec$impl$gen$sample(var_args){
var args__28550__auto__ = [];
var len__28543__auto___51001 = arguments.length;
var i__28544__auto___51006 = (0);
while(true){
if((i__28544__auto___51006 < len__28543__auto___51001)){
args__28550__auto__.push((arguments[i__28544__auto___51006]));

var G__51007 = (i__28544__auto___51006 + (1));
i__28544__auto___51006 = G__51007;
continue;
} else {
}
break;
}

var argseq__28551__auto__ = ((((0) < args__28550__auto__.length))?(new cljs.core.IndexedSeq(args__28550__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__28551__auto__);
});})(g__50689__auto___50998))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50689__auto___50998){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__50689__auto___50998),args);
});})(g__50689__auto___50998))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__50689__auto___50998){
return (function (seq50837){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50837));
});})(g__50689__auto___50998))
;


var g__50689__auto___51013 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__50689__auto___51013){
return (function cljs$spec$impl$gen$return(var_args){
var args__28550__auto__ = [];
var len__28543__auto___51014 = arguments.length;
var i__28544__auto___51015 = (0);
while(true){
if((i__28544__auto___51015 < len__28543__auto___51014)){
args__28550__auto__.push((arguments[i__28544__auto___51015]));

var G__51016 = (i__28544__auto___51015 + (1));
i__28544__auto___51015 = G__51016;
continue;
} else {
}
break;
}

var argseq__28551__auto__ = ((((0) < args__28550__auto__.length))?(new cljs.core.IndexedSeq(args__28550__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__28551__auto__);
});})(g__50689__auto___51013))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50689__auto___51013){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__50689__auto___51013),args);
});})(g__50689__auto___51013))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__50689__auto___51013){
return (function (seq50838){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50838));
});})(g__50689__auto___51013))
;


var g__50689__auto___51021 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__50689__auto___51021){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__28550__auto__ = [];
var len__28543__auto___51026 = arguments.length;
var i__28544__auto___51027 = (0);
while(true){
if((i__28544__auto___51027 < len__28543__auto___51026)){
args__28550__auto__.push((arguments[i__28544__auto___51027]));

var G__51028 = (i__28544__auto___51027 + (1));
i__28544__auto___51027 = G__51028;
continue;
} else {
}
break;
}

var argseq__28551__auto__ = ((((0) < args__28550__auto__.length))?(new cljs.core.IndexedSeq(args__28550__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__28551__auto__);
});})(g__50689__auto___51021))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50689__auto___51021){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__50689__auto___51021),args);
});})(g__50689__auto___51021))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__50689__auto___51021){
return (function (seq50839){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50839));
});})(g__50689__auto___51021))
;


var g__50689__auto___51033 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__50689__auto___51033){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__28550__auto__ = [];
var len__28543__auto___51035 = arguments.length;
var i__28544__auto___51036 = (0);
while(true){
if((i__28544__auto___51036 < len__28543__auto___51035)){
args__28550__auto__.push((arguments[i__28544__auto___51036]));

var G__51037 = (i__28544__auto___51036 + (1));
i__28544__auto___51036 = G__51037;
continue;
} else {
}
break;
}

var argseq__28551__auto__ = ((((0) < args__28550__auto__.length))?(new cljs.core.IndexedSeq(args__28550__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__28551__auto__);
});})(g__50689__auto___51033))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50689__auto___51033){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__50689__auto___51033),args);
});})(g__50689__auto___51033))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__50689__auto___51033){
return (function (seq50840){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50840));
});})(g__50689__auto___51033))
;


var g__50689__auto___51039 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.impl.gen.frequency = ((function (g__50689__auto___51039){
return (function cljs$spec$impl$gen$frequency(var_args){
var args__28550__auto__ = [];
var len__28543__auto___51040 = arguments.length;
var i__28544__auto___51041 = (0);
while(true){
if((i__28544__auto___51041 < len__28543__auto___51040)){
args__28550__auto__.push((arguments[i__28544__auto___51041]));

var G__51042 = (i__28544__auto___51041 + (1));
i__28544__auto___51041 = G__51042;
continue;
} else {
}
break;
}

var argseq__28551__auto__ = ((((0) < args__28550__auto__.length))?(new cljs.core.IndexedSeq(args__28550__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__28551__auto__);
});})(g__50689__auto___51039))
;

cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50689__auto___51039){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__50689__auto___51039),args);
});})(g__50689__auto___51039))
;

cljs.spec.impl.gen.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.frequency.cljs$lang$applyTo = ((function (g__50689__auto___51039){
return (function (seq50841){
return cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50841));
});})(g__50689__auto___51039))
;

var g__50702__auto___51174 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__50702__auto___51174){
return (function cljs$spec$impl$gen$any(var_args){
var args__28550__auto__ = [];
var len__28543__auto___51175 = arguments.length;
var i__28544__auto___51176 = (0);
while(true){
if((i__28544__auto___51176 < len__28543__auto___51175)){
args__28550__auto__.push((arguments[i__28544__auto___51176]));

var G__51177 = (i__28544__auto___51176 + (1));
i__28544__auto___51176 = G__51177;
continue;
} else {
}
break;
}

var argseq__28551__auto__ = ((((0) < args__28550__auto__.length))?(new cljs.core.IndexedSeq(args__28550__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__28551__auto__);
});})(g__50702__auto___51174))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50702__auto___51174){
return (function (args){
return cljs.core.deref.call(null,g__50702__auto___51174);
});})(g__50702__auto___51174))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__50702__auto___51174){
return (function (seq51052){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51052));
});})(g__50702__auto___51174))
;


var g__50702__auto___51178 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__50702__auto___51178){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__28550__auto__ = [];
var len__28543__auto___51181 = arguments.length;
var i__28544__auto___51182 = (0);
while(true){
if((i__28544__auto___51182 < len__28543__auto___51181)){
args__28550__auto__.push((arguments[i__28544__auto___51182]));

var G__51184 = (i__28544__auto___51182 + (1));
i__28544__auto___51182 = G__51184;
continue;
} else {
}
break;
}

var argseq__28551__auto__ = ((((0) < args__28550__auto__.length))?(new cljs.core.IndexedSeq(args__28550__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__28551__auto__);
});})(g__50702__auto___51178))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50702__auto___51178){
return (function (args){
return cljs.core.deref.call(null,g__50702__auto___51178);
});})(g__50702__auto___51178))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__50702__auto___51178){
return (function (seq51059){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51059));
});})(g__50702__auto___51178))
;


var g__50702__auto___51185 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__50702__auto___51185){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__28550__auto__ = [];
var len__28543__auto___51186 = arguments.length;
var i__28544__auto___51187 = (0);
while(true){
if((i__28544__auto___51187 < len__28543__auto___51186)){
args__28550__auto__.push((arguments[i__28544__auto___51187]));

var G__51188 = (i__28544__auto___51187 + (1));
i__28544__auto___51187 = G__51188;
continue;
} else {
}
break;
}

var argseq__28551__auto__ = ((((0) < args__28550__auto__.length))?(new cljs.core.IndexedSeq(args__28550__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__28551__auto__);
});})(g__50702__auto___51185))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50702__auto___51185){
return (function (args){
return cljs.core.deref.call(null,g__50702__auto___51185);
});})(g__50702__auto___51185))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__50702__auto___51185){
return (function (seq51068){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51068));
});})(g__50702__auto___51185))
;


var g__50702__auto___51189 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__50702__auto___51189){
return (function cljs$spec$impl$gen$char(var_args){
var args__28550__auto__ = [];
var len__28543__auto___51190 = arguments.length;
var i__28544__auto___51191 = (0);
while(true){
if((i__28544__auto___51191 < len__28543__auto___51190)){
args__28550__auto__.push((arguments[i__28544__auto___51191]));

var G__51192 = (i__28544__auto___51191 + (1));
i__28544__auto___51191 = G__51192;
continue;
} else {
}
break;
}

var argseq__28551__auto__ = ((((0) < args__28550__auto__.length))?(new cljs.core.IndexedSeq(args__28550__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__28551__auto__);
});})(g__50702__auto___51189))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50702__auto___51189){
return (function (args){
return cljs.core.deref.call(null,g__50702__auto___51189);
});})(g__50702__auto___51189))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__50702__auto___51189){
return (function (seq51073){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51073));
});})(g__50702__auto___51189))
;


var g__50702__auto___51198 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__50702__auto___51198){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__28550__auto__ = [];
var len__28543__auto___51199 = arguments.length;
var i__28544__auto___51200 = (0);
while(true){
if((i__28544__auto___51200 < len__28543__auto___51199)){
args__28550__auto__.push((arguments[i__28544__auto___51200]));

var G__51201 = (i__28544__auto___51200 + (1));
i__28544__auto___51200 = G__51201;
continue;
} else {
}
break;
}

var argseq__28551__auto__ = ((((0) < args__28550__auto__.length))?(new cljs.core.IndexedSeq(args__28550__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__28551__auto__);
});})(g__50702__auto___51198))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50702__auto___51198){
return (function (args){
return cljs.core.deref.call(null,g__50702__auto___51198);
});})(g__50702__auto___51198))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__50702__auto___51198){
return (function (seq51074){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51074));
});})(g__50702__auto___51198))
;


var g__50702__auto___51202 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__50702__auto___51202){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__28550__auto__ = [];
var len__28543__auto___51203 = arguments.length;
var i__28544__auto___51206 = (0);
while(true){
if((i__28544__auto___51206 < len__28543__auto___51203)){
args__28550__auto__.push((arguments[i__28544__auto___51206]));

var G__51208 = (i__28544__auto___51206 + (1));
i__28544__auto___51206 = G__51208;
continue;
} else {
}
break;
}

var argseq__28551__auto__ = ((((0) < args__28550__auto__.length))?(new cljs.core.IndexedSeq(args__28550__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__28551__auto__);
});})(g__50702__auto___51202))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50702__auto___51202){
return (function (args){
return cljs.core.deref.call(null,g__50702__auto___51202);
});})(g__50702__auto___51202))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__50702__auto___51202){
return (function (seq51080){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51080));
});})(g__50702__auto___51202))
;


var g__50702__auto___51211 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__50702__auto___51211){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__28550__auto__ = [];
var len__28543__auto___51212 = arguments.length;
var i__28544__auto___51213 = (0);
while(true){
if((i__28544__auto___51213 < len__28543__auto___51212)){
args__28550__auto__.push((arguments[i__28544__auto___51213]));

var G__51214 = (i__28544__auto___51213 + (1));
i__28544__auto___51213 = G__51214;
continue;
} else {
}
break;
}

var argseq__28551__auto__ = ((((0) < args__28550__auto__.length))?(new cljs.core.IndexedSeq(args__28550__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__28551__auto__);
});})(g__50702__auto___51211))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50702__auto___51211){
return (function (args){
return cljs.core.deref.call(null,g__50702__auto___51211);
});})(g__50702__auto___51211))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__50702__auto___51211){
return (function (seq51087){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51087));
});})(g__50702__auto___51211))
;


var g__50702__auto___51239 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__50702__auto___51239){
return (function cljs$spec$impl$gen$double(var_args){
var args__28550__auto__ = [];
var len__28543__auto___51246 = arguments.length;
var i__28544__auto___51247 = (0);
while(true){
if((i__28544__auto___51247 < len__28543__auto___51246)){
args__28550__auto__.push((arguments[i__28544__auto___51247]));

var G__51248 = (i__28544__auto___51247 + (1));
i__28544__auto___51247 = G__51248;
continue;
} else {
}
break;
}

var argseq__28551__auto__ = ((((0) < args__28550__auto__.length))?(new cljs.core.IndexedSeq(args__28550__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__28551__auto__);
});})(g__50702__auto___51239))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50702__auto___51239){
return (function (args){
return cljs.core.deref.call(null,g__50702__auto___51239);
});})(g__50702__auto___51239))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__50702__auto___51239){
return (function (seq51094){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51094));
});})(g__50702__auto___51239))
;


var g__50702__auto___51253 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__50702__auto___51253){
return (function cljs$spec$impl$gen$int(var_args){
var args__28550__auto__ = [];
var len__28543__auto___51259 = arguments.length;
var i__28544__auto___51261 = (0);
while(true){
if((i__28544__auto___51261 < len__28543__auto___51259)){
args__28550__auto__.push((arguments[i__28544__auto___51261]));

var G__51262 = (i__28544__auto___51261 + (1));
i__28544__auto___51261 = G__51262;
continue;
} else {
}
break;
}

var argseq__28551__auto__ = ((((0) < args__28550__auto__.length))?(new cljs.core.IndexedSeq(args__28550__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__28551__auto__);
});})(g__50702__auto___51253))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50702__auto___51253){
return (function (args){
return cljs.core.deref.call(null,g__50702__auto___51253);
});})(g__50702__auto___51253))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__50702__auto___51253){
return (function (seq51103){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51103));
});})(g__50702__auto___51253))
;


var g__50702__auto___51267 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__50702__auto___51267){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__28550__auto__ = [];
var len__28543__auto___51268 = arguments.length;
var i__28544__auto___51269 = (0);
while(true){
if((i__28544__auto___51269 < len__28543__auto___51268)){
args__28550__auto__.push((arguments[i__28544__auto___51269]));

var G__51270 = (i__28544__auto___51269 + (1));
i__28544__auto___51269 = G__51270;
continue;
} else {
}
break;
}

var argseq__28551__auto__ = ((((0) < args__28550__auto__.length))?(new cljs.core.IndexedSeq(args__28550__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__28551__auto__);
});})(g__50702__auto___51267))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50702__auto___51267){
return (function (args){
return cljs.core.deref.call(null,g__50702__auto___51267);
});})(g__50702__auto___51267))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__50702__auto___51267){
return (function (seq51104){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51104));
});})(g__50702__auto___51267))
;


var g__50702__auto___51273 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__50702__auto___51273){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__28550__auto__ = [];
var len__28543__auto___51274 = arguments.length;
var i__28544__auto___51275 = (0);
while(true){
if((i__28544__auto___51275 < len__28543__auto___51274)){
args__28550__auto__.push((arguments[i__28544__auto___51275]));

var G__51277 = (i__28544__auto___51275 + (1));
i__28544__auto___51275 = G__51277;
continue;
} else {
}
break;
}

var argseq__28551__auto__ = ((((0) < args__28550__auto__.length))?(new cljs.core.IndexedSeq(args__28550__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__28551__auto__);
});})(g__50702__auto___51273))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50702__auto___51273){
return (function (args){
return cljs.core.deref.call(null,g__50702__auto___51273);
});})(g__50702__auto___51273))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__50702__auto___51273){
return (function (seq51113){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51113));
});})(g__50702__auto___51273))
;


var g__50702__auto___51280 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__50702__auto___51280){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__28550__auto__ = [];
var len__28543__auto___51281 = arguments.length;
var i__28544__auto___51282 = (0);
while(true){
if((i__28544__auto___51282 < len__28543__auto___51281)){
args__28550__auto__.push((arguments[i__28544__auto___51282]));

var G__51283 = (i__28544__auto___51282 + (1));
i__28544__auto___51282 = G__51283;
continue;
} else {
}
break;
}

var argseq__28551__auto__ = ((((0) < args__28550__auto__.length))?(new cljs.core.IndexedSeq(args__28550__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__28551__auto__);
});})(g__50702__auto___51280))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50702__auto___51280){
return (function (args){
return cljs.core.deref.call(null,g__50702__auto___51280);
});})(g__50702__auto___51280))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__50702__auto___51280){
return (function (seq51119){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51119));
});})(g__50702__auto___51280))
;


var g__50702__auto___51285 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__50702__auto___51285){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__28550__auto__ = [];
var len__28543__auto___51287 = arguments.length;
var i__28544__auto___51288 = (0);
while(true){
if((i__28544__auto___51288 < len__28543__auto___51287)){
args__28550__auto__.push((arguments[i__28544__auto___51288]));

var G__51289 = (i__28544__auto___51288 + (1));
i__28544__auto___51288 = G__51289;
continue;
} else {
}
break;
}

var argseq__28551__auto__ = ((((0) < args__28550__auto__.length))?(new cljs.core.IndexedSeq(args__28550__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__28551__auto__);
});})(g__50702__auto___51285))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50702__auto___51285){
return (function (args){
return cljs.core.deref.call(null,g__50702__auto___51285);
});})(g__50702__auto___51285))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__50702__auto___51285){
return (function (seq51123){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51123));
});})(g__50702__auto___51285))
;


var g__50702__auto___51290 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__50702__auto___51290){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__28550__auto__ = [];
var len__28543__auto___51292 = arguments.length;
var i__28544__auto___51293 = (0);
while(true){
if((i__28544__auto___51293 < len__28543__auto___51292)){
args__28550__auto__.push((arguments[i__28544__auto___51293]));

var G__51294 = (i__28544__auto___51293 + (1));
i__28544__auto___51293 = G__51294;
continue;
} else {
}
break;
}

var argseq__28551__auto__ = ((((0) < args__28550__auto__.length))?(new cljs.core.IndexedSeq(args__28550__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__28551__auto__);
});})(g__50702__auto___51290))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50702__auto___51290){
return (function (args){
return cljs.core.deref.call(null,g__50702__auto___51290);
});})(g__50702__auto___51290))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__50702__auto___51290){
return (function (seq51129){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51129));
});})(g__50702__auto___51290))
;


var g__50702__auto___51295 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__50702__auto___51295){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__28550__auto__ = [];
var len__28543__auto___51298 = arguments.length;
var i__28544__auto___51299 = (0);
while(true){
if((i__28544__auto___51299 < len__28543__auto___51298)){
args__28550__auto__.push((arguments[i__28544__auto___51299]));

var G__51300 = (i__28544__auto___51299 + (1));
i__28544__auto___51299 = G__51300;
continue;
} else {
}
break;
}

var argseq__28551__auto__ = ((((0) < args__28550__auto__.length))?(new cljs.core.IndexedSeq(args__28550__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__28551__auto__);
});})(g__50702__auto___51295))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50702__auto___51295){
return (function (args){
return cljs.core.deref.call(null,g__50702__auto___51295);
});})(g__50702__auto___51295))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__50702__auto___51295){
return (function (seq51138){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51138));
});})(g__50702__auto___51295))
;


var g__50702__auto___51301 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__50702__auto___51301){
return (function cljs$spec$impl$gen$string(var_args){
var args__28550__auto__ = [];
var len__28543__auto___51303 = arguments.length;
var i__28544__auto___51304 = (0);
while(true){
if((i__28544__auto___51304 < len__28543__auto___51303)){
args__28550__auto__.push((arguments[i__28544__auto___51304]));

var G__51305 = (i__28544__auto___51304 + (1));
i__28544__auto___51304 = G__51305;
continue;
} else {
}
break;
}

var argseq__28551__auto__ = ((((0) < args__28550__auto__.length))?(new cljs.core.IndexedSeq(args__28550__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__28551__auto__);
});})(g__50702__auto___51301))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50702__auto___51301){
return (function (args){
return cljs.core.deref.call(null,g__50702__auto___51301);
});})(g__50702__auto___51301))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__50702__auto___51301){
return (function (seq51143){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51143));
});})(g__50702__auto___51301))
;


var g__50702__auto___51307 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__50702__auto___51307){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__28550__auto__ = [];
var len__28543__auto___51308 = arguments.length;
var i__28544__auto___51309 = (0);
while(true){
if((i__28544__auto___51309 < len__28543__auto___51308)){
args__28550__auto__.push((arguments[i__28544__auto___51309]));

var G__51310 = (i__28544__auto___51309 + (1));
i__28544__auto___51309 = G__51310;
continue;
} else {
}
break;
}

var argseq__28551__auto__ = ((((0) < args__28550__auto__.length))?(new cljs.core.IndexedSeq(args__28550__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__28551__auto__);
});})(g__50702__auto___51307))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50702__auto___51307){
return (function (args){
return cljs.core.deref.call(null,g__50702__auto___51307);
});})(g__50702__auto___51307))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__50702__auto___51307){
return (function (seq51148){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51148));
});})(g__50702__auto___51307))
;


var g__50702__auto___51316 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__50702__auto___51316){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__28550__auto__ = [];
var len__28543__auto___51317 = arguments.length;
var i__28544__auto___51318 = (0);
while(true){
if((i__28544__auto___51318 < len__28543__auto___51317)){
args__28550__auto__.push((arguments[i__28544__auto___51318]));

var G__51319 = (i__28544__auto___51318 + (1));
i__28544__auto___51318 = G__51319;
continue;
} else {
}
break;
}

var argseq__28551__auto__ = ((((0) < args__28550__auto__.length))?(new cljs.core.IndexedSeq(args__28550__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__28551__auto__);
});})(g__50702__auto___51316))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50702__auto___51316){
return (function (args){
return cljs.core.deref.call(null,g__50702__auto___51316);
});})(g__50702__auto___51316))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__50702__auto___51316){
return (function (seq51153){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51153));
});})(g__50702__auto___51316))
;


var g__50702__auto___51320 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__50702__auto___51320){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__28550__auto__ = [];
var len__28543__auto___51321 = arguments.length;
var i__28544__auto___51322 = (0);
while(true){
if((i__28544__auto___51322 < len__28543__auto___51321)){
args__28550__auto__.push((arguments[i__28544__auto___51322]));

var G__51323 = (i__28544__auto___51322 + (1));
i__28544__auto___51322 = G__51323;
continue;
} else {
}
break;
}

var argseq__28551__auto__ = ((((0) < args__28550__auto__.length))?(new cljs.core.IndexedSeq(args__28550__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__28551__auto__);
});})(g__50702__auto___51320))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50702__auto___51320){
return (function (args){
return cljs.core.deref.call(null,g__50702__auto___51320);
});})(g__50702__auto___51320))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__50702__auto___51320){
return (function (seq51159){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51159));
});})(g__50702__auto___51320))
;


var g__50702__auto___51329 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__50702__auto___51329){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__28550__auto__ = [];
var len__28543__auto___51332 = arguments.length;
var i__28544__auto___51333 = (0);
while(true){
if((i__28544__auto___51333 < len__28543__auto___51332)){
args__28550__auto__.push((arguments[i__28544__auto___51333]));

var G__51334 = (i__28544__auto___51333 + (1));
i__28544__auto___51333 = G__51334;
continue;
} else {
}
break;
}

var argseq__28551__auto__ = ((((0) < args__28550__auto__.length))?(new cljs.core.IndexedSeq(args__28550__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__28551__auto__);
});})(g__50702__auto___51329))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50702__auto___51329){
return (function (args){
return cljs.core.deref.call(null,g__50702__auto___51329);
});})(g__50702__auto___51329))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__50702__auto___51329){
return (function (seq51167){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51167));
});})(g__50702__auto___51329))
;


var g__50702__auto___51335 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__50702__auto___51335){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__28550__auto__ = [];
var len__28543__auto___51336 = arguments.length;
var i__28544__auto___51337 = (0);
while(true){
if((i__28544__auto___51337 < len__28543__auto___51336)){
args__28550__auto__.push((arguments[i__28544__auto___51337]));

var G__51341 = (i__28544__auto___51337 + (1));
i__28544__auto___51337 = G__51341;
continue;
} else {
}
break;
}

var argseq__28551__auto__ = ((((0) < args__28550__auto__.length))?(new cljs.core.IndexedSeq(args__28550__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__28551__auto__);
});})(g__50702__auto___51335))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50702__auto___51335){
return (function (args){
return cljs.core.deref.call(null,g__50702__auto___51335);
});})(g__50702__auto___51335))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__50702__auto___51335){
return (function (seq51173){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51173));
});})(g__50702__auto___51335))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__28550__auto__ = [];
var len__28543__auto___51348 = arguments.length;
var i__28544__auto___51349 = (0);
while(true){
if((i__28544__auto___51349 < len__28543__auto___51348)){
args__28550__auto__.push((arguments[i__28544__auto___51349]));

var G__51350 = (i__28544__auto___51349 + (1));
i__28544__auto___51349 = G__51350;
continue;
} else {
}
break;
}

var argseq__28551__auto__ = ((((0) < args__28550__auto__.length))?(new cljs.core.IndexedSeq(args__28550__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__28551__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__51345_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__51345_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq51346){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51346));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__51351_SHARP_){
return (new Date(p1__51351_SHARP_));
});})(simple))
,cljs.spec.impl.gen.large_integer.call(null)),cljs.spec.impl.gen.symbol.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.double$.call(null),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.impl.gen.string_alphanumeric.call(null),cljs.spec.impl.gen.double$.call(null),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.return$.call(null,(0)),cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null))),cljs.spec.impl.gen.return$.call(null,true),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.impl.gen.uuid.call(null),cljs.spec.impl.gen.return$.call(null,false),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.symbol.call(null)], null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.double$.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.symbol_ns.call(null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.string_alphanumeric.call(null)], null)),cljs.spec.impl.gen.symbol_ns.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.impl.gen.gen_for_pred = (function cljs$spec$impl$gen$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.impl.gen.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.gen_builtins),pred);
}
});

//# sourceMappingURL=gen.js.map?rel=1493584942582