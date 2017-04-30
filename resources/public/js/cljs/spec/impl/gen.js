// Compiled by ClojureScript 1.9.456 {}
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

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__21332__auto__,writer__21333__auto__,opt__21334__auto__){
return cljs.core._write.call(null,writer__21333__auto__,"cljs.spec.impl.gen/LazyVar");
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
var args__21903__auto__ = [];
var len__21896__auto___24677 = arguments.length;
var i__21897__auto___24678 = (0);
while(true){
if((i__21897__auto___24678 < len__21896__auto___24677)){
args__21903__auto__.push((arguments[i__21897__auto___24678]));

var G__24679 = (i__21897__auto___24678 + (1));
i__21897__auto___24678 = G__24679;
continue;
} else {
}
break;
}

var argseq__21904__auto__ = ((((0) < args__21903__auto__.length))?(new cljs.core.IndexedSeq(args__21903__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__21904__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq24676){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24676));
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
var args__21903__auto__ = [];
var len__21896__auto___24683 = arguments.length;
var i__21897__auto___24684 = (0);
while(true){
if((i__21897__auto___24684 < len__21896__auto___24683)){
args__21903__auto__.push((arguments[i__21897__auto___24684]));

var G__24685 = (i__21897__auto___24684 + (1));
i__21897__auto___24684 = G__24685;
continue;
} else {
}
break;
}

var argseq__21904__auto__ = ((((0) < args__21903__auto__.length))?(new cljs.core.IndexedSeq(args__21903__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__21904__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq24680){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24680));
});

var g_QMARK__24689 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
var g_24690 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__24689){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__24689))
,null));
var mkg_24691 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__24689,g_24690){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__24689,g_24690))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__24689,g_24690,mkg_24691){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__24689).call(null,x);
});})(g_QMARK__24689,g_24690,mkg_24691))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__24689,g_24690,mkg_24691){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_24691).call(null,gfn);
});})(g_QMARK__24689,g_24690,mkg_24691))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__24689,g_24690,mkg_24691){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_24690).call(null,generator);
});})(g_QMARK__24689,g_24690,mkg_24691))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__24640__auto___24728 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__24640__auto___24728){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__21903__auto__ = [];
var len__21896__auto___24729 = arguments.length;
var i__21897__auto___24730 = (0);
while(true){
if((i__21897__auto___24730 < len__21896__auto___24729)){
args__21903__auto__.push((arguments[i__21897__auto___24730]));

var G__24731 = (i__21897__auto___24730 + (1));
i__21897__auto___24730 = G__24731;
continue;
} else {
}
break;
}

var argseq__21904__auto__ = ((((0) < args__21903__auto__.length))?(new cljs.core.IndexedSeq(args__21903__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__21904__auto__);
});})(g__24640__auto___24728))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__24640__auto___24728){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__24640__auto___24728),args);
});})(g__24640__auto___24728))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__24640__auto___24728){
return (function (seq24699){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24699));
});})(g__24640__auto___24728))
;


var g__24640__auto___24732 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__24640__auto___24732){
return (function cljs$spec$impl$gen$list(var_args){
var args__21903__auto__ = [];
var len__21896__auto___24735 = arguments.length;
var i__21897__auto___24736 = (0);
while(true){
if((i__21897__auto___24736 < len__21896__auto___24735)){
args__21903__auto__.push((arguments[i__21897__auto___24736]));

var G__24737 = (i__21897__auto___24736 + (1));
i__21897__auto___24736 = G__24737;
continue;
} else {
}
break;
}

var argseq__21904__auto__ = ((((0) < args__21903__auto__.length))?(new cljs.core.IndexedSeq(args__21903__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__21904__auto__);
});})(g__24640__auto___24732))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__24640__auto___24732){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__24640__auto___24732),args);
});})(g__24640__auto___24732))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__24640__auto___24732){
return (function (seq24702){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24702));
});})(g__24640__auto___24732))
;


var g__24640__auto___24738 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__24640__auto___24738){
return (function cljs$spec$impl$gen$map(var_args){
var args__21903__auto__ = [];
var len__21896__auto___24741 = arguments.length;
var i__21897__auto___24742 = (0);
while(true){
if((i__21897__auto___24742 < len__21896__auto___24741)){
args__21903__auto__.push((arguments[i__21897__auto___24742]));

var G__24743 = (i__21897__auto___24742 + (1));
i__21897__auto___24742 = G__24743;
continue;
} else {
}
break;
}

var argseq__21904__auto__ = ((((0) < args__21903__auto__.length))?(new cljs.core.IndexedSeq(args__21903__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__21904__auto__);
});})(g__24640__auto___24738))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__24640__auto___24738){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__24640__auto___24738),args);
});})(g__24640__auto___24738))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__24640__auto___24738){
return (function (seq24703){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24703));
});})(g__24640__auto___24738))
;


var g__24640__auto___24746 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__24640__auto___24746){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__21903__auto__ = [];
var len__21896__auto___24748 = arguments.length;
var i__21897__auto___24749 = (0);
while(true){
if((i__21897__auto___24749 < len__21896__auto___24748)){
args__21903__auto__.push((arguments[i__21897__auto___24749]));

var G__24751 = (i__21897__auto___24749 + (1));
i__21897__auto___24749 = G__24751;
continue;
} else {
}
break;
}

var argseq__21904__auto__ = ((((0) < args__21903__auto__.length))?(new cljs.core.IndexedSeq(args__21903__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__21904__auto__);
});})(g__24640__auto___24746))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__24640__auto___24746){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__24640__auto___24746),args);
});})(g__24640__auto___24746))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__24640__auto___24746){
return (function (seq24704){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24704));
});})(g__24640__auto___24746))
;


var g__24640__auto___24754 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__24640__auto___24754){
return (function cljs$spec$impl$gen$set(var_args){
var args__21903__auto__ = [];
var len__21896__auto___24757 = arguments.length;
var i__21897__auto___24758 = (0);
while(true){
if((i__21897__auto___24758 < len__21896__auto___24757)){
args__21903__auto__.push((arguments[i__21897__auto___24758]));

var G__24759 = (i__21897__auto___24758 + (1));
i__21897__auto___24758 = G__24759;
continue;
} else {
}
break;
}

var argseq__21904__auto__ = ((((0) < args__21903__auto__.length))?(new cljs.core.IndexedSeq(args__21903__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__21904__auto__);
});})(g__24640__auto___24754))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__24640__auto___24754){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__24640__auto___24754),args);
});})(g__24640__auto___24754))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__24640__auto___24754){
return (function (seq24707){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24707));
});})(g__24640__auto___24754))
;


var g__24640__auto___24760 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__24640__auto___24760){
return (function cljs$spec$impl$gen$vector(var_args){
var args__21903__auto__ = [];
var len__21896__auto___24761 = arguments.length;
var i__21897__auto___24762 = (0);
while(true){
if((i__21897__auto___24762 < len__21896__auto___24761)){
args__21903__auto__.push((arguments[i__21897__auto___24762]));

var G__24763 = (i__21897__auto___24762 + (1));
i__21897__auto___24762 = G__24763;
continue;
} else {
}
break;
}

var argseq__21904__auto__ = ((((0) < args__21903__auto__.length))?(new cljs.core.IndexedSeq(args__21903__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__21904__auto__);
});})(g__24640__auto___24760))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__24640__auto___24760){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__24640__auto___24760),args);
});})(g__24640__auto___24760))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__24640__auto___24760){
return (function (seq24709){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24709));
});})(g__24640__auto___24760))
;


var g__24640__auto___24766 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__24640__auto___24766){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__21903__auto__ = [];
var len__21896__auto___24767 = arguments.length;
var i__21897__auto___24768 = (0);
while(true){
if((i__21897__auto___24768 < len__21896__auto___24767)){
args__21903__auto__.push((arguments[i__21897__auto___24768]));

var G__24769 = (i__21897__auto___24768 + (1));
i__21897__auto___24768 = G__24769;
continue;
} else {
}
break;
}

var argseq__21904__auto__ = ((((0) < args__21903__auto__.length))?(new cljs.core.IndexedSeq(args__21903__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__21904__auto__);
});})(g__24640__auto___24766))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__24640__auto___24766){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__24640__auto___24766),args);
});})(g__24640__auto___24766))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__24640__auto___24766){
return (function (seq24711){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24711));
});})(g__24640__auto___24766))
;


var g__24640__auto___24770 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__24640__auto___24770){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__21903__auto__ = [];
var len__21896__auto___24771 = arguments.length;
var i__21897__auto___24772 = (0);
while(true){
if((i__21897__auto___24772 < len__21896__auto___24771)){
args__21903__auto__.push((arguments[i__21897__auto___24772]));

var G__24773 = (i__21897__auto___24772 + (1));
i__21897__auto___24772 = G__24773;
continue;
} else {
}
break;
}

var argseq__21904__auto__ = ((((0) < args__21903__auto__.length))?(new cljs.core.IndexedSeq(args__21903__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__21904__auto__);
});})(g__24640__auto___24770))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__24640__auto___24770){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__24640__auto___24770),args);
});})(g__24640__auto___24770))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__24640__auto___24770){
return (function (seq24712){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24712));
});})(g__24640__auto___24770))
;


var g__24640__auto___24774 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__24640__auto___24774){
return (function cljs$spec$impl$gen$elements(var_args){
var args__21903__auto__ = [];
var len__21896__auto___24775 = arguments.length;
var i__21897__auto___24776 = (0);
while(true){
if((i__21897__auto___24776 < len__21896__auto___24775)){
args__21903__auto__.push((arguments[i__21897__auto___24776]));

var G__24777 = (i__21897__auto___24776 + (1));
i__21897__auto___24776 = G__24777;
continue;
} else {
}
break;
}

var argseq__21904__auto__ = ((((0) < args__21903__auto__.length))?(new cljs.core.IndexedSeq(args__21903__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__21904__auto__);
});})(g__24640__auto___24774))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__24640__auto___24774){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__24640__auto___24774),args);
});})(g__24640__auto___24774))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__24640__auto___24774){
return (function (seq24716){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24716));
});})(g__24640__auto___24774))
;


var g__24640__auto___24778 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__24640__auto___24778){
return (function cljs$spec$impl$gen$bind(var_args){
var args__21903__auto__ = [];
var len__21896__auto___24779 = arguments.length;
var i__21897__auto___24780 = (0);
while(true){
if((i__21897__auto___24780 < len__21896__auto___24779)){
args__21903__auto__.push((arguments[i__21897__auto___24780]));

var G__24781 = (i__21897__auto___24780 + (1));
i__21897__auto___24780 = G__24781;
continue;
} else {
}
break;
}

var argseq__21904__auto__ = ((((0) < args__21903__auto__.length))?(new cljs.core.IndexedSeq(args__21903__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__21904__auto__);
});})(g__24640__auto___24778))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__24640__auto___24778){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__24640__auto___24778),args);
});})(g__24640__auto___24778))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__24640__auto___24778){
return (function (seq24717){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24717));
});})(g__24640__auto___24778))
;


var g__24640__auto___24782 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__24640__auto___24782){
return (function cljs$spec$impl$gen$choose(var_args){
var args__21903__auto__ = [];
var len__21896__auto___24783 = arguments.length;
var i__21897__auto___24784 = (0);
while(true){
if((i__21897__auto___24784 < len__21896__auto___24783)){
args__21903__auto__.push((arguments[i__21897__auto___24784]));

var G__24785 = (i__21897__auto___24784 + (1));
i__21897__auto___24784 = G__24785;
continue;
} else {
}
break;
}

var argseq__21904__auto__ = ((((0) < args__21903__auto__.length))?(new cljs.core.IndexedSeq(args__21903__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__21904__auto__);
});})(g__24640__auto___24782))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__24640__auto___24782){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__24640__auto___24782),args);
});})(g__24640__auto___24782))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__24640__auto___24782){
return (function (seq24718){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24718));
});})(g__24640__auto___24782))
;


var g__24640__auto___24788 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__24640__auto___24788){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__21903__auto__ = [];
var len__21896__auto___24791 = arguments.length;
var i__21897__auto___24793 = (0);
while(true){
if((i__21897__auto___24793 < len__21896__auto___24791)){
args__21903__auto__.push((arguments[i__21897__auto___24793]));

var G__24795 = (i__21897__auto___24793 + (1));
i__21897__auto___24793 = G__24795;
continue;
} else {
}
break;
}

var argseq__21904__auto__ = ((((0) < args__21903__auto__.length))?(new cljs.core.IndexedSeq(args__21903__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__21904__auto__);
});})(g__24640__auto___24788))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__24640__auto___24788){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__24640__auto___24788),args);
});})(g__24640__auto___24788))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__24640__auto___24788){
return (function (seq24720){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24720));
});})(g__24640__auto___24788))
;


var g__24640__auto___24799 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__24640__auto___24799){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__21903__auto__ = [];
var len__21896__auto___24801 = arguments.length;
var i__21897__auto___24802 = (0);
while(true){
if((i__21897__auto___24802 < len__21896__auto___24801)){
args__21903__auto__.push((arguments[i__21897__auto___24802]));

var G__24803 = (i__21897__auto___24802 + (1));
i__21897__auto___24802 = G__24803;
continue;
} else {
}
break;
}

var argseq__21904__auto__ = ((((0) < args__21903__auto__.length))?(new cljs.core.IndexedSeq(args__21903__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__21904__auto__);
});})(g__24640__auto___24799))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__24640__auto___24799){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__24640__auto___24799),args);
});})(g__24640__auto___24799))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__24640__auto___24799){
return (function (seq24721){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24721));
});})(g__24640__auto___24799))
;


var g__24640__auto___24810 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__24640__auto___24810){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__21903__auto__ = [];
var len__21896__auto___24813 = arguments.length;
var i__21897__auto___24814 = (0);
while(true){
if((i__21897__auto___24814 < len__21896__auto___24813)){
args__21903__auto__.push((arguments[i__21897__auto___24814]));

var G__24815 = (i__21897__auto___24814 + (1));
i__21897__auto___24814 = G__24815;
continue;
} else {
}
break;
}

var argseq__21904__auto__ = ((((0) < args__21903__auto__.length))?(new cljs.core.IndexedSeq(args__21903__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__21904__auto__);
});})(g__24640__auto___24810))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__24640__auto___24810){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__24640__auto___24810),args);
});})(g__24640__auto___24810))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__24640__auto___24810){
return (function (seq24722){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24722));
});})(g__24640__auto___24810))
;


var g__24640__auto___24820 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__24640__auto___24820){
return (function cljs$spec$impl$gen$sample(var_args){
var args__21903__auto__ = [];
var len__21896__auto___24827 = arguments.length;
var i__21897__auto___24828 = (0);
while(true){
if((i__21897__auto___24828 < len__21896__auto___24827)){
args__21903__auto__.push((arguments[i__21897__auto___24828]));

var G__24829 = (i__21897__auto___24828 + (1));
i__21897__auto___24828 = G__24829;
continue;
} else {
}
break;
}

var argseq__21904__auto__ = ((((0) < args__21903__auto__.length))?(new cljs.core.IndexedSeq(args__21903__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__21904__auto__);
});})(g__24640__auto___24820))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__24640__auto___24820){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__24640__auto___24820),args);
});})(g__24640__auto___24820))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__24640__auto___24820){
return (function (seq24723){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24723));
});})(g__24640__auto___24820))
;


var g__24640__auto___24830 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__24640__auto___24830){
return (function cljs$spec$impl$gen$return(var_args){
var args__21903__auto__ = [];
var len__21896__auto___24835 = arguments.length;
var i__21897__auto___24839 = (0);
while(true){
if((i__21897__auto___24839 < len__21896__auto___24835)){
args__21903__auto__.push((arguments[i__21897__auto___24839]));

var G__24840 = (i__21897__auto___24839 + (1));
i__21897__auto___24839 = G__24840;
continue;
} else {
}
break;
}

var argseq__21904__auto__ = ((((0) < args__21903__auto__.length))?(new cljs.core.IndexedSeq(args__21903__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__21904__auto__);
});})(g__24640__auto___24830))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__24640__auto___24830){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__24640__auto___24830),args);
});})(g__24640__auto___24830))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__24640__auto___24830){
return (function (seq24724){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24724));
});})(g__24640__auto___24830))
;


var g__24640__auto___24847 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__24640__auto___24847){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__21903__auto__ = [];
var len__21896__auto___24849 = arguments.length;
var i__21897__auto___24850 = (0);
while(true){
if((i__21897__auto___24850 < len__21896__auto___24849)){
args__21903__auto__.push((arguments[i__21897__auto___24850]));

var G__24851 = (i__21897__auto___24850 + (1));
i__21897__auto___24850 = G__24851;
continue;
} else {
}
break;
}

var argseq__21904__auto__ = ((((0) < args__21903__auto__.length))?(new cljs.core.IndexedSeq(args__21903__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__21904__auto__);
});})(g__24640__auto___24847))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__24640__auto___24847){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__24640__auto___24847),args);
});})(g__24640__auto___24847))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__24640__auto___24847){
return (function (seq24725){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24725));
});})(g__24640__auto___24847))
;


var g__24640__auto___24866 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__24640__auto___24866){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__21903__auto__ = [];
var len__21896__auto___24878 = arguments.length;
var i__21897__auto___24880 = (0);
while(true){
if((i__21897__auto___24880 < len__21896__auto___24878)){
args__21903__auto__.push((arguments[i__21897__auto___24880]));

var G__24882 = (i__21897__auto___24880 + (1));
i__21897__auto___24880 = G__24882;
continue;
} else {
}
break;
}

var argseq__21904__auto__ = ((((0) < args__21903__auto__.length))?(new cljs.core.IndexedSeq(args__21903__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__21904__auto__);
});})(g__24640__auto___24866))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__24640__auto___24866){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__24640__auto___24866),args);
});})(g__24640__auto___24866))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__24640__auto___24866){
return (function (seq24726){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24726));
});})(g__24640__auto___24866))
;


var g__24640__auto___24893 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.impl.gen.frequency = ((function (g__24640__auto___24893){
return (function cljs$spec$impl$gen$frequency(var_args){
var args__21903__auto__ = [];
var len__21896__auto___24894 = arguments.length;
var i__21897__auto___24895 = (0);
while(true){
if((i__21897__auto___24895 < len__21896__auto___24894)){
args__21903__auto__.push((arguments[i__21897__auto___24895]));

var G__24897 = (i__21897__auto___24895 + (1));
i__21897__auto___24895 = G__24897;
continue;
} else {
}
break;
}

var argseq__21904__auto__ = ((((0) < args__21903__auto__.length))?(new cljs.core.IndexedSeq(args__21903__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__21904__auto__);
});})(g__24640__auto___24893))
;

cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__24640__auto___24893){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__24640__auto___24893),args);
});})(g__24640__auto___24893))
;

cljs.spec.impl.gen.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.frequency.cljs$lang$applyTo = ((function (g__24640__auto___24893){
return (function (seq24727){
return cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24727));
});})(g__24640__auto___24893))
;

var g__24653__auto___24987 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__24653__auto___24987){
return (function cljs$spec$impl$gen$any(var_args){
var args__21903__auto__ = [];
var len__21896__auto___24988 = arguments.length;
var i__21897__auto___24989 = (0);
while(true){
if((i__21897__auto___24989 < len__21896__auto___24988)){
args__21903__auto__.push((arguments[i__21897__auto___24989]));

var G__24990 = (i__21897__auto___24989 + (1));
i__21897__auto___24989 = G__24990;
continue;
} else {
}
break;
}

var argseq__21904__auto__ = ((((0) < args__21903__auto__.length))?(new cljs.core.IndexedSeq(args__21903__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__21904__auto__);
});})(g__24653__auto___24987))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__24653__auto___24987){
return (function (args){
return cljs.core.deref.call(null,g__24653__auto___24987);
});})(g__24653__auto___24987))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__24653__auto___24987){
return (function (seq24910){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24910));
});})(g__24653__auto___24987))
;


var g__24653__auto___24994 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__24653__auto___24994){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__21903__auto__ = [];
var len__21896__auto___24995 = arguments.length;
var i__21897__auto___24996 = (0);
while(true){
if((i__21897__auto___24996 < len__21896__auto___24995)){
args__21903__auto__.push((arguments[i__21897__auto___24996]));

var G__24997 = (i__21897__auto___24996 + (1));
i__21897__auto___24996 = G__24997;
continue;
} else {
}
break;
}

var argseq__21904__auto__ = ((((0) < args__21903__auto__.length))?(new cljs.core.IndexedSeq(args__21903__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__21904__auto__);
});})(g__24653__auto___24994))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__24653__auto___24994){
return (function (args){
return cljs.core.deref.call(null,g__24653__auto___24994);
});})(g__24653__auto___24994))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__24653__auto___24994){
return (function (seq24914){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24914));
});})(g__24653__auto___24994))
;


var g__24653__auto___24998 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__24653__auto___24998){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__21903__auto__ = [];
var len__21896__auto___24999 = arguments.length;
var i__21897__auto___25000 = (0);
while(true){
if((i__21897__auto___25000 < len__21896__auto___24999)){
args__21903__auto__.push((arguments[i__21897__auto___25000]));

var G__25001 = (i__21897__auto___25000 + (1));
i__21897__auto___25000 = G__25001;
continue;
} else {
}
break;
}

var argseq__21904__auto__ = ((((0) < args__21903__auto__.length))?(new cljs.core.IndexedSeq(args__21903__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__21904__auto__);
});})(g__24653__auto___24998))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__24653__auto___24998){
return (function (args){
return cljs.core.deref.call(null,g__24653__auto___24998);
});})(g__24653__auto___24998))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__24653__auto___24998){
return (function (seq24919){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24919));
});})(g__24653__auto___24998))
;


var g__24653__auto___25002 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__24653__auto___25002){
return (function cljs$spec$impl$gen$char(var_args){
var args__21903__auto__ = [];
var len__21896__auto___25003 = arguments.length;
var i__21897__auto___25004 = (0);
while(true){
if((i__21897__auto___25004 < len__21896__auto___25003)){
args__21903__auto__.push((arguments[i__21897__auto___25004]));

var G__25005 = (i__21897__auto___25004 + (1));
i__21897__auto___25004 = G__25005;
continue;
} else {
}
break;
}

var argseq__21904__auto__ = ((((0) < args__21903__auto__.length))?(new cljs.core.IndexedSeq(args__21903__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__21904__auto__);
});})(g__24653__auto___25002))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__24653__auto___25002){
return (function (args){
return cljs.core.deref.call(null,g__24653__auto___25002);
});})(g__24653__auto___25002))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__24653__auto___25002){
return (function (seq24920){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24920));
});})(g__24653__auto___25002))
;


var g__24653__auto___25006 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__24653__auto___25006){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__21903__auto__ = [];
var len__21896__auto___25007 = arguments.length;
var i__21897__auto___25008 = (0);
while(true){
if((i__21897__auto___25008 < len__21896__auto___25007)){
args__21903__auto__.push((arguments[i__21897__auto___25008]));

var G__25009 = (i__21897__auto___25008 + (1));
i__21897__auto___25008 = G__25009;
continue;
} else {
}
break;
}

var argseq__21904__auto__ = ((((0) < args__21903__auto__.length))?(new cljs.core.IndexedSeq(args__21903__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__21904__auto__);
});})(g__24653__auto___25006))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__24653__auto___25006){
return (function (args){
return cljs.core.deref.call(null,g__24653__auto___25006);
});})(g__24653__auto___25006))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__24653__auto___25006){
return (function (seq24924){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24924));
});})(g__24653__auto___25006))
;


var g__24653__auto___25013 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__24653__auto___25013){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__21903__auto__ = [];
var len__21896__auto___25014 = arguments.length;
var i__21897__auto___25015 = (0);
while(true){
if((i__21897__auto___25015 < len__21896__auto___25014)){
args__21903__auto__.push((arguments[i__21897__auto___25015]));

var G__25016 = (i__21897__auto___25015 + (1));
i__21897__auto___25015 = G__25016;
continue;
} else {
}
break;
}

var argseq__21904__auto__ = ((((0) < args__21903__auto__.length))?(new cljs.core.IndexedSeq(args__21903__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__21904__auto__);
});})(g__24653__auto___25013))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__24653__auto___25013){
return (function (args){
return cljs.core.deref.call(null,g__24653__auto___25013);
});})(g__24653__auto___25013))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__24653__auto___25013){
return (function (seq24926){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24926));
});})(g__24653__auto___25013))
;


var g__24653__auto___25020 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__24653__auto___25020){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__21903__auto__ = [];
var len__21896__auto___25021 = arguments.length;
var i__21897__auto___25022 = (0);
while(true){
if((i__21897__auto___25022 < len__21896__auto___25021)){
args__21903__auto__.push((arguments[i__21897__auto___25022]));

var G__25023 = (i__21897__auto___25022 + (1));
i__21897__auto___25022 = G__25023;
continue;
} else {
}
break;
}

var argseq__21904__auto__ = ((((0) < args__21903__auto__.length))?(new cljs.core.IndexedSeq(args__21903__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__21904__auto__);
});})(g__24653__auto___25020))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__24653__auto___25020){
return (function (args){
return cljs.core.deref.call(null,g__24653__auto___25020);
});})(g__24653__auto___25020))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__24653__auto___25020){
return (function (seq24927){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24927));
});})(g__24653__auto___25020))
;


var g__24653__auto___25024 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__24653__auto___25024){
return (function cljs$spec$impl$gen$double(var_args){
var args__21903__auto__ = [];
var len__21896__auto___25025 = arguments.length;
var i__21897__auto___25026 = (0);
while(true){
if((i__21897__auto___25026 < len__21896__auto___25025)){
args__21903__auto__.push((arguments[i__21897__auto___25026]));

var G__25027 = (i__21897__auto___25026 + (1));
i__21897__auto___25026 = G__25027;
continue;
} else {
}
break;
}

var argseq__21904__auto__ = ((((0) < args__21903__auto__.length))?(new cljs.core.IndexedSeq(args__21903__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__21904__auto__);
});})(g__24653__auto___25024))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__24653__auto___25024){
return (function (args){
return cljs.core.deref.call(null,g__24653__auto___25024);
});})(g__24653__auto___25024))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__24653__auto___25024){
return (function (seq24928){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24928));
});})(g__24653__auto___25024))
;


var g__24653__auto___25028 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__24653__auto___25028){
return (function cljs$spec$impl$gen$int(var_args){
var args__21903__auto__ = [];
var len__21896__auto___25029 = arguments.length;
var i__21897__auto___25030 = (0);
while(true){
if((i__21897__auto___25030 < len__21896__auto___25029)){
args__21903__auto__.push((arguments[i__21897__auto___25030]));

var G__25031 = (i__21897__auto___25030 + (1));
i__21897__auto___25030 = G__25031;
continue;
} else {
}
break;
}

var argseq__21904__auto__ = ((((0) < args__21903__auto__.length))?(new cljs.core.IndexedSeq(args__21903__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__21904__auto__);
});})(g__24653__auto___25028))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__24653__auto___25028){
return (function (args){
return cljs.core.deref.call(null,g__24653__auto___25028);
});})(g__24653__auto___25028))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__24653__auto___25028){
return (function (seq24931){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24931));
});})(g__24653__auto___25028))
;


var g__24653__auto___25032 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__24653__auto___25032){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__21903__auto__ = [];
var len__21896__auto___25033 = arguments.length;
var i__21897__auto___25034 = (0);
while(true){
if((i__21897__auto___25034 < len__21896__auto___25033)){
args__21903__auto__.push((arguments[i__21897__auto___25034]));

var G__25035 = (i__21897__auto___25034 + (1));
i__21897__auto___25034 = G__25035;
continue;
} else {
}
break;
}

var argseq__21904__auto__ = ((((0) < args__21903__auto__.length))?(new cljs.core.IndexedSeq(args__21903__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__21904__auto__);
});})(g__24653__auto___25032))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__24653__auto___25032){
return (function (args){
return cljs.core.deref.call(null,g__24653__auto___25032);
});})(g__24653__auto___25032))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__24653__auto___25032){
return (function (seq24935){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24935));
});})(g__24653__auto___25032))
;


var g__24653__auto___25038 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__24653__auto___25038){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__21903__auto__ = [];
var len__21896__auto___25039 = arguments.length;
var i__21897__auto___25040 = (0);
while(true){
if((i__21897__auto___25040 < len__21896__auto___25039)){
args__21903__auto__.push((arguments[i__21897__auto___25040]));

var G__25041 = (i__21897__auto___25040 + (1));
i__21897__auto___25040 = G__25041;
continue;
} else {
}
break;
}

var argseq__21904__auto__ = ((((0) < args__21903__auto__.length))?(new cljs.core.IndexedSeq(args__21903__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__21904__auto__);
});})(g__24653__auto___25038))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__24653__auto___25038){
return (function (args){
return cljs.core.deref.call(null,g__24653__auto___25038);
});})(g__24653__auto___25038))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__24653__auto___25038){
return (function (seq24940){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24940));
});})(g__24653__auto___25038))
;


var g__24653__auto___25042 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__24653__auto___25042){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__21903__auto__ = [];
var len__21896__auto___25043 = arguments.length;
var i__21897__auto___25044 = (0);
while(true){
if((i__21897__auto___25044 < len__21896__auto___25043)){
args__21903__auto__.push((arguments[i__21897__auto___25044]));

var G__25045 = (i__21897__auto___25044 + (1));
i__21897__auto___25044 = G__25045;
continue;
} else {
}
break;
}

var argseq__21904__auto__ = ((((0) < args__21903__auto__.length))?(new cljs.core.IndexedSeq(args__21903__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__21904__auto__);
});})(g__24653__auto___25042))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__24653__auto___25042){
return (function (args){
return cljs.core.deref.call(null,g__24653__auto___25042);
});})(g__24653__auto___25042))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__24653__auto___25042){
return (function (seq24944){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24944));
});})(g__24653__auto___25042))
;


var g__24653__auto___25046 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__24653__auto___25046){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__21903__auto__ = [];
var len__21896__auto___25047 = arguments.length;
var i__21897__auto___25048 = (0);
while(true){
if((i__21897__auto___25048 < len__21896__auto___25047)){
args__21903__auto__.push((arguments[i__21897__auto___25048]));

var G__25049 = (i__21897__auto___25048 + (1));
i__21897__auto___25048 = G__25049;
continue;
} else {
}
break;
}

var argseq__21904__auto__ = ((((0) < args__21903__auto__.length))?(new cljs.core.IndexedSeq(args__21903__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__21904__auto__);
});})(g__24653__auto___25046))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__24653__auto___25046){
return (function (args){
return cljs.core.deref.call(null,g__24653__auto___25046);
});})(g__24653__auto___25046))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__24653__auto___25046){
return (function (seq24949){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24949));
});})(g__24653__auto___25046))
;


var g__24653__auto___25051 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__24653__auto___25051){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__21903__auto__ = [];
var len__21896__auto___25052 = arguments.length;
var i__21897__auto___25053 = (0);
while(true){
if((i__21897__auto___25053 < len__21896__auto___25052)){
args__21903__auto__.push((arguments[i__21897__auto___25053]));

var G__25054 = (i__21897__auto___25053 + (1));
i__21897__auto___25053 = G__25054;
continue;
} else {
}
break;
}

var argseq__21904__auto__ = ((((0) < args__21903__auto__.length))?(new cljs.core.IndexedSeq(args__21903__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__21904__auto__);
});})(g__24653__auto___25051))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__24653__auto___25051){
return (function (args){
return cljs.core.deref.call(null,g__24653__auto___25051);
});})(g__24653__auto___25051))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__24653__auto___25051){
return (function (seq24952){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24952));
});})(g__24653__auto___25051))
;


var g__24653__auto___25055 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__24653__auto___25055){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__21903__auto__ = [];
var len__21896__auto___25057 = arguments.length;
var i__21897__auto___25058 = (0);
while(true){
if((i__21897__auto___25058 < len__21896__auto___25057)){
args__21903__auto__.push((arguments[i__21897__auto___25058]));

var G__25059 = (i__21897__auto___25058 + (1));
i__21897__auto___25058 = G__25059;
continue;
} else {
}
break;
}

var argseq__21904__auto__ = ((((0) < args__21903__auto__.length))?(new cljs.core.IndexedSeq(args__21903__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__21904__auto__);
});})(g__24653__auto___25055))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__24653__auto___25055){
return (function (args){
return cljs.core.deref.call(null,g__24653__auto___25055);
});})(g__24653__auto___25055))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__24653__auto___25055){
return (function (seq24955){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24955));
});})(g__24653__auto___25055))
;


var g__24653__auto___25061 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__24653__auto___25061){
return (function cljs$spec$impl$gen$string(var_args){
var args__21903__auto__ = [];
var len__21896__auto___25064 = arguments.length;
var i__21897__auto___25065 = (0);
while(true){
if((i__21897__auto___25065 < len__21896__auto___25064)){
args__21903__auto__.push((arguments[i__21897__auto___25065]));

var G__25067 = (i__21897__auto___25065 + (1));
i__21897__auto___25065 = G__25067;
continue;
} else {
}
break;
}

var argseq__21904__auto__ = ((((0) < args__21903__auto__.length))?(new cljs.core.IndexedSeq(args__21903__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__21904__auto__);
});})(g__24653__auto___25061))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__24653__auto___25061){
return (function (args){
return cljs.core.deref.call(null,g__24653__auto___25061);
});})(g__24653__auto___25061))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__24653__auto___25061){
return (function (seq24960){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24960));
});})(g__24653__auto___25061))
;


var g__24653__auto___25068 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__24653__auto___25068){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__21903__auto__ = [];
var len__21896__auto___25072 = arguments.length;
var i__21897__auto___25073 = (0);
while(true){
if((i__21897__auto___25073 < len__21896__auto___25072)){
args__21903__auto__.push((arguments[i__21897__auto___25073]));

var G__25074 = (i__21897__auto___25073 + (1));
i__21897__auto___25073 = G__25074;
continue;
} else {
}
break;
}

var argseq__21904__auto__ = ((((0) < args__21903__auto__.length))?(new cljs.core.IndexedSeq(args__21903__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__21904__auto__);
});})(g__24653__auto___25068))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__24653__auto___25068){
return (function (args){
return cljs.core.deref.call(null,g__24653__auto___25068);
});})(g__24653__auto___25068))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__24653__auto___25068){
return (function (seq24966){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24966));
});})(g__24653__auto___25068))
;


var g__24653__auto___25077 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__24653__auto___25077){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__21903__auto__ = [];
var len__21896__auto___25079 = arguments.length;
var i__21897__auto___25080 = (0);
while(true){
if((i__21897__auto___25080 < len__21896__auto___25079)){
args__21903__auto__.push((arguments[i__21897__auto___25080]));

var G__25081 = (i__21897__auto___25080 + (1));
i__21897__auto___25080 = G__25081;
continue;
} else {
}
break;
}

var argseq__21904__auto__ = ((((0) < args__21903__auto__.length))?(new cljs.core.IndexedSeq(args__21903__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__21904__auto__);
});})(g__24653__auto___25077))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__24653__auto___25077){
return (function (args){
return cljs.core.deref.call(null,g__24653__auto___25077);
});})(g__24653__auto___25077))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__24653__auto___25077){
return (function (seq24970){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24970));
});})(g__24653__auto___25077))
;


var g__24653__auto___25082 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__24653__auto___25082){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__21903__auto__ = [];
var len__21896__auto___25083 = arguments.length;
var i__21897__auto___25084 = (0);
while(true){
if((i__21897__auto___25084 < len__21896__auto___25083)){
args__21903__auto__.push((arguments[i__21897__auto___25084]));

var G__25085 = (i__21897__auto___25084 + (1));
i__21897__auto___25084 = G__25085;
continue;
} else {
}
break;
}

var argseq__21904__auto__ = ((((0) < args__21903__auto__.length))?(new cljs.core.IndexedSeq(args__21903__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__21904__auto__);
});})(g__24653__auto___25082))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__24653__auto___25082){
return (function (args){
return cljs.core.deref.call(null,g__24653__auto___25082);
});})(g__24653__auto___25082))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__24653__auto___25082){
return (function (seq24971){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24971));
});})(g__24653__auto___25082))
;


var g__24653__auto___25088 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__24653__auto___25088){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__21903__auto__ = [];
var len__21896__auto___25089 = arguments.length;
var i__21897__auto___25090 = (0);
while(true){
if((i__21897__auto___25090 < len__21896__auto___25089)){
args__21903__auto__.push((arguments[i__21897__auto___25090]));

var G__25091 = (i__21897__auto___25090 + (1));
i__21897__auto___25090 = G__25091;
continue;
} else {
}
break;
}

var argseq__21904__auto__ = ((((0) < args__21903__auto__.length))?(new cljs.core.IndexedSeq(args__21903__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__21904__auto__);
});})(g__24653__auto___25088))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__24653__auto___25088){
return (function (args){
return cljs.core.deref.call(null,g__24653__auto___25088);
});})(g__24653__auto___25088))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__24653__auto___25088){
return (function (seq24978){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24978));
});})(g__24653__auto___25088))
;


var g__24653__auto___25094 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__24653__auto___25094){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__21903__auto__ = [];
var len__21896__auto___25096 = arguments.length;
var i__21897__auto___25097 = (0);
while(true){
if((i__21897__auto___25097 < len__21896__auto___25096)){
args__21903__auto__.push((arguments[i__21897__auto___25097]));

var G__25098 = (i__21897__auto___25097 + (1));
i__21897__auto___25097 = G__25098;
continue;
} else {
}
break;
}

var argseq__21904__auto__ = ((((0) < args__21903__auto__.length))?(new cljs.core.IndexedSeq(args__21903__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__21904__auto__);
});})(g__24653__auto___25094))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__24653__auto___25094){
return (function (args){
return cljs.core.deref.call(null,g__24653__auto___25094);
});})(g__24653__auto___25094))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__24653__auto___25094){
return (function (seq24979){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24979));
});})(g__24653__auto___25094))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__21903__auto__ = [];
var len__21896__auto___25101 = arguments.length;
var i__21897__auto___25102 = (0);
while(true){
if((i__21897__auto___25102 < len__21896__auto___25101)){
args__21903__auto__.push((arguments[i__21897__auto___25102]));

var G__25105 = (i__21897__auto___25102 + (1));
i__21897__auto___25102 = G__25105;
continue;
} else {
}
break;
}

var argseq__21904__auto__ = ((((0) < args__21903__auto__.length))?(new cljs.core.IndexedSeq(args__21903__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__21904__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__25099_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__25099_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq25100){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25100));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__25108_SHARP_){
return (new Date(p1__25108_SHARP_));
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

//# sourceMappingURL=gen.js.map