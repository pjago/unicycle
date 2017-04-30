// Compiled by ClojureScript 1.9.521 {}
goog.provide('clojure.core.matrix.utils');
goog.require('cljs.core');
clojure.core.matrix.utils.class$ = cljs.core.type;
/**
 * Throws an error with the provided message(s)
 */
clojure.core.matrix.utils.error = (function clojure$core$matrix$utils$error(var_args){
var args__28550__auto__ = [];
var len__28543__auto___30255 = arguments.length;
var i__28544__auto___30256 = (0);
while(true){
if((i__28544__auto___30256 < len__28543__auto___30255)){
args__28550__auto__.push((arguments[i__28544__auto___30256]));

var G__30257 = (i__28544__auto___30256 + (1));
i__28544__auto___30256 = G__30257;
continue;
} else {
}
break;
}

var argseq__28551__auto__ = ((((2) < args__28550__auto__.length))?(new cljs.core.IndexedSeq(args__28550__auto__.slice((2)),(0),null)):null);
return clojure.core.matrix.utils.error.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__28551__auto__);
});

clojure.core.matrix.utils.error.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,vals){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__28256__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),(function (){var x__28256__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),vals)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28256__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28256__auto__);
})())));
});

clojure.core.matrix.utils.error.cljs$lang$maxFixedArity = (2);

clojure.core.matrix.utils.error.cljs$lang$applyTo = (function (seq30251){
var G__30252 = cljs.core.first.call(null,seq30251);
var seq30251__$1 = cljs.core.next.call(null,seq30251);
var G__30253 = cljs.core.first.call(null,seq30251__$1);
var seq30251__$2 = cljs.core.next.call(null,seq30251__$1);
return clojure.core.matrix.utils.error.cljs$core$IFn$_invoke$arity$variadic(G__30252,G__30253,seq30251__$2);
});


clojure.core.matrix.utils.error.cljs$lang$macro = true;
/**
 * loops over a set of values, binding index-sym to the 0-based index of each value
 */
clojure.core.matrix.utils.doseq_indexed = (function clojure$core$matrix$utils$doseq_indexed(var_args){
var args__28550__auto__ = [];
var len__28543__auto___30277 = arguments.length;
var i__28544__auto___30278 = (0);
while(true){
if((i__28544__auto___30278 < len__28543__auto___30277)){
args__28550__auto__.push((arguments[i__28544__auto___30278]));

var G__30279 = (i__28544__auto___30278 + (1));
i__28544__auto___30278 = G__30279;
continue;
} else {
}
break;
}

var argseq__28551__auto__ = ((((3) < args__28550__auto__.length))?(new cljs.core.IndexedSeq(args__28550__auto__.slice((3)),(0),null)):null);
return clojure.core.matrix.utils.doseq_indexed.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__28551__auto__);
});

clojure.core.matrix.utils.doseq_indexed.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__30266,code){
var vec__30267 = p__30266;
var val_sym = cljs.core.nth.call(null,vec__30267,(0),null);
var values = cljs.core.nth.call(null,vec__30267,(1),null);
var index_sym = cljs.core.nth.call(null,vec__30267,(2),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","loop","cljs.core/loop",-1829423021,null)),(function (){var x__28256__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"vals__30261__auto__","vals__30261__auto__",-1104961504,null)),(function (){var x__28256__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__28256__auto__ = values;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28256__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28256__auto__);
})(),(function (){var x__28256__auto__ = index_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28256__auto__);
})(),(function (){var x__28256__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","long","cljs.core/long",241154833,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28256__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28256__auto__);
})(),(function (){var x__28256__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"vals__30261__auto__","vals__30261__auto__",-1104961504,null)),(function (){var x__28256__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),(function (){var x__28256__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28256__auto__ = val_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28256__auto__);
})(),(function (){var x__28256__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"vals__30261__auto__","vals__30261__auto__",-1104961504,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28256__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28256__auto__);
})(),code,(function (){var x__28256__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__28256__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","next","cljs.core/next",-1291438473,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"vals__30261__auto__","vals__30261__auto__",-1104961504,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28256__auto__);
})(),(function (){var x__28256__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","inc","cljs.core/inc",-879172610,null)),(function (){var x__28256__auto__ = index_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28256__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28256__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28256__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28256__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28256__auto__);
})())));
});

clojure.core.matrix.utils.doseq_indexed.cljs$lang$maxFixedArity = (3);

clojure.core.matrix.utils.doseq_indexed.cljs$lang$applyTo = (function (seq30262){
var G__30263 = cljs.core.first.call(null,seq30262);
var seq30262__$1 = cljs.core.next.call(null,seq30262);
var G__30264 = cljs.core.first.call(null,seq30262__$1);
var seq30262__$2 = cljs.core.next.call(null,seq30262__$1);
var G__30265 = cljs.core.first.call(null,seq30262__$2);
var seq30262__$3 = cljs.core.next.call(null,seq30262__$2);
return clojure.core.matrix.utils.doseq_indexed.cljs$core$IFn$_invoke$arity$variadic(G__30263,G__30264,G__30265,seq30262__$3);
});


clojure.core.matrix.utils.doseq_indexed.cljs$lang$macro = true;
/**
 * returns true if the given object is a valid core.matrix array shape.
 */
clojure.core.matrix.utils.valid_shape_QMARK_ = (function clojure$core$matrix$utils$valid_shape_QMARK_(shape){
try{return ((cljs.core.count.call(null,shape) >= (0))) && (cljs.core.every_QMARK_.call(null,cljs.core.integer_QMARK_,shape));
}catch (e30282){if((e30282 instanceof Error)){
var t = e30282;
return false;
} else {
throw e30282;

}
}});
/**
 * Returns true if two shapes are the same.
 */
clojure.core.matrix.utils.same_shape_object_QMARK_ = (function clojure$core$matrix$utils$same_shape_object_QMARK_(sa,sb){
if((sa === sb)){
return true;
} else {
if(cljs.core.not_EQ_.call(null,cljs.core.count.call(null,sa),cljs.core.count.call(null,sb))){
return false;
} else {
var ca = cljs.core.count.call(null,sa);
var i = (0);
while(true){
if((i >= ca)){
return true;
} else {
if((cljs.core.nth.call(null,sa,i) === cljs.core.nth.call(null,sb,i))){
var G__30283 = (i + (1));
i = G__30283;
continue;
} else {
return false;
}
}
break;
}

}
}
});
/**
 * Returns the logical xor of a set of values, considered as booleans
 */
clojure.core.matrix.utils.xor = (function clojure$core$matrix$utils$xor(var_args){
var args30284 = [];
var len__28543__auto___30290 = arguments.length;
var i__28544__auto___30291 = (0);
while(true){
if((i__28544__auto___30291 < len__28543__auto___30290)){
args30284.push((arguments[i__28544__auto___30291]));

var G__30292 = (i__28544__auto___30291 + (1));
i__28544__auto___30291 = G__30292;
continue;
} else {
}
break;
}

var G__30289 = args30284.length;
switch (G__30289) {
case 0:
return clojure.core.matrix.utils.xor.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return clojure.core.matrix.utils.xor.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.utils.xor.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__28566__auto__ = (new cljs.core.IndexedSeq(args30284.slice((2)),(0),null));
return clojure.core.matrix.utils.xor.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__28566__auto__);

}
});

clojure.core.matrix.utils.xor.cljs$core$IFn$_invoke$arity$0 = (function (){
return false;
});

clojure.core.matrix.utils.xor.cljs$core$IFn$_invoke$arity$1 = (function (x){
return cljs.core.boolean$.call(null,x);
});

clojure.core.matrix.utils.xor.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
if(cljs.core.truth_(x)){
return cljs.core.not.call(null,y);
} else {
return cljs.core.boolean$.call(null,y);
}
});

clojure.core.matrix.utils.xor.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,more){
var p = clojure.core.matrix.utils.xor.call(null,x,y);
var ss = cljs.core.seq.call(null,more);
while(true){
if(ss){
var G__30297 = (cljs.core.truth_(cljs.core.first.call(null,ss))?cljs.core.not.call(null,p):p);
var G__30298 = cljs.core.next.call(null,ss);
p = G__30297;
ss = G__30298;
continue;
} else {
return p;
}
break;
}
});

clojure.core.matrix.utils.xor.cljs$lang$applyTo = (function (seq30285){
var G__30286 = cljs.core.first.call(null,seq30285);
var seq30285__$1 = cljs.core.next.call(null,seq30285);
var G__30287 = cljs.core.first.call(null,seq30285__$1);
var seq30285__$2 = cljs.core.next.call(null,seq30285__$1);
return clojure.core.matrix.utils.xor.cljs$core$IFn$_invoke$arity$variadic(G__30286,G__30287,seq30285__$2);
});

clojure.core.matrix.utils.xor.cljs$lang$maxFixedArity = (2);

/**
 * Returns a copy of a double array
 */
clojure.core.matrix.utils.copy_double_array = (function clojure$core$matrix$utils$copy_double_array(arr){
return arr.slice((0));
});
/**
 * Returns a copy of a long array
 */
clojure.core.matrix.utils.copy_long_array = (function clojure$core$matrix$utils$copy_long_array(arr){
return arr.slice((0));
});
/**
 * Returns a copy of a long array
 */
clojure.core.matrix.utils.copy_object_array = (function clojure$core$matrix$utils$copy_object_array(arr){
return arr.slice((0));
});
/**
 * Returns a range of longs in a long[] array
 */
clojure.core.matrix.utils.long_range = (function clojure$core$matrix$utils$long_range(end){
var end__$1 = (end | (0));
var arr = cljs.core.long_array.call(null,end__$1);
var n__28343__auto___30305 = end__$1;
var i_30306 = (0);
while(true){
if((i_30306 < n__28343__auto___30305)){
(arr[i_30306] = cljs.core.long$.call(null,i_30306));

var G__30307 = (i_30306 + (1));
i_30306 = G__30307;
continue;
} else {
}
break;
}

return arr;
});
/**
 * Creates a long array with the specified values.
 */
clojure.core.matrix.utils.long_array_of = (function clojure$core$matrix$utils$long_array_of(var_args){
var args30310 = [];
var len__28543__auto___30321 = arguments.length;
var i__28544__auto___30322 = (0);
while(true){
if((i__28544__auto___30322 < len__28543__auto___30321)){
args30310.push((arguments[i__28544__auto___30322]));

var G__30323 = (i__28544__auto___30322 + (1));
i__28544__auto___30322 = G__30323;
continue;
} else {
}
break;
}

var G__30316 = args30310.length;
switch (G__30316) {
case 0:
return clojure.core.matrix.utils.long_array_of.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return clojure.core.matrix.utils.long_array_of.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.utils.long_array_of.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__28566__auto__ = (new cljs.core.IndexedSeq(args30310.slice((2)),(0),null));
return clojure.core.matrix.utils.long_array_of.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__28566__auto__);

}
});

clojure.core.matrix.utils.long_array_of.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.long_array.call(null,(0));
});

clojure.core.matrix.utils.long_array_of.cljs$core$IFn$_invoke$arity$1 = (function (a){
var arr = cljs.core.long_array.call(null,(1));
(arr[(0)] = cljs.core.long$.call(null,a));

return arr;
});

clojure.core.matrix.utils.long_array_of.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
var arr = cljs.core.long_array.call(null,(2));
(arr[(0)] = cljs.core.long$.call(null,a));

(arr[(1)] = cljs.core.long$.call(null,b));

return arr;
});

clojure.core.matrix.utils.long_array_of.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,more){
var arr = cljs.core.long_array.call(null,((2) + cljs.core.count.call(null,more)));
(arr[(0)] = cljs.core.long$.call(null,a));

(arr[(1)] = cljs.core.long$.call(null,b));

clojure.core.matrix.utils.doseq_indexed.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.core.matrix.utils.x,more,clojure.core.matrix.utils.i], null),(arr[((2) + clojure.core.matrix.utils.i)] = cljs.core.long$.call(null,clojure.core.matrix.utils.x)));

return arr;
});

clojure.core.matrix.utils.long_array_of.cljs$lang$applyTo = (function (seq30311){
var G__30312 = cljs.core.first.call(null,seq30311);
var seq30311__$1 = cljs.core.next.call(null,seq30311);
var G__30313 = cljs.core.first.call(null,seq30311__$1);
var seq30311__$2 = cljs.core.next.call(null,seq30311__$1);
return clojure.core.matrix.utils.long_array_of.cljs$core$IFn$_invoke$arity$variadic(G__30312,G__30313,seq30311__$2);
});

clojure.core.matrix.utils.long_array_of.cljs$lang$maxFixedArity = (2);

/**
 * Creates a long array with the specified values.
 */
clojure.core.matrix.utils.object_array_of = (function clojure$core$matrix$utils$object_array_of(var_args){
var args30332 = [];
var len__28543__auto___30342 = arguments.length;
var i__28544__auto___30343 = (0);
while(true){
if((i__28544__auto___30343 < len__28543__auto___30342)){
args30332.push((arguments[i__28544__auto___30343]));

var G__30344 = (i__28544__auto___30343 + (1));
i__28544__auto___30343 = G__30344;
continue;
} else {
}
break;
}

var G__30337 = args30332.length;
switch (G__30337) {
case 0:
return clojure.core.matrix.utils.object_array_of.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return clojure.core.matrix.utils.object_array_of.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.utils.object_array_of.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__28566__auto__ = (new cljs.core.IndexedSeq(args30332.slice((2)),(0),null));
return clojure.core.matrix.utils.object_array_of.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__28566__auto__);

}
});

clojure.core.matrix.utils.object_array_of.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.object_array.call(null,(0));
});

clojure.core.matrix.utils.object_array_of.cljs$core$IFn$_invoke$arity$1 = (function (a){
var arr = cljs.core.object_array.call(null,(1));
(arr[(0)] = a);

return arr;
});

clojure.core.matrix.utils.object_array_of.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
var arr = cljs.core.object_array.call(null,(2));
(arr[(0)] = a);

(arr[(1)] = b);

return arr;
});

clojure.core.matrix.utils.object_array_of.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,more){
var arr = cljs.core.object_array.call(null,((2) + cljs.core.count.call(null,more)));
(arr[(0)] = a);

(arr[(1)] = b);

clojure.core.matrix.utils.doseq_indexed.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.core.matrix.utils.x,more,clojure.core.matrix.utils.i], null),(arr[((2) + clojure.core.matrix.utils.i)] = clojure.core.matrix.utils.x));

return arr;
});

clojure.core.matrix.utils.object_array_of.cljs$lang$applyTo = (function (seq30333){
var G__30334 = cljs.core.first.call(null,seq30333);
var seq30333__$1 = cljs.core.next.call(null,seq30333);
var G__30335 = cljs.core.first.call(null,seq30333__$1);
var seq30333__$2 = cljs.core.next.call(null,seq30333__$1);
return clojure.core.matrix.utils.object_array_of.cljs$core$IFn$_invoke$arity$variadic(G__30334,G__30335,seq30333__$2);
});

clojure.core.matrix.utils.object_array_of.cljs$lang$maxFixedArity = (2);

/**
 * Returns the index of a value in a vector, or nil if not present
 */
clojure.core.matrix.utils.find_index = (function clojure$core$matrix$utils$find_index(v,value){
var n = v.count();
var i = (0);
while(true){
if((i < n)){
if(cljs.core._EQ_.call(null,value,v.nth(i))){
return i;
} else {
var G__30349 = (i + (1));
i = G__30349;
continue;
}
} else {
return null;
}
break;
}
});
/**
 * Returns a sequence of all possible index vectors for a given shape, in row-major order
 */
clojure.core.matrix.utils.base_index_seq_for_shape = (function clojure$core$matrix$utils$base_index_seq_for_shape(sh){
var gen = (function clojure$core$matrix$utils$base_index_seq_for_shape_$_gen(prefix,rem){
if(cljs.core.truth_(rem)){
var nrem = cljs.core.next.call(null,rem);
return cljs.core.mapcat.call(null,((function (nrem){
return (function (p1__30350_SHARP_){
return clojure$core$matrix$utils$base_index_seq_for_shape_$_gen.call(null,cljs.core.conj.call(null,prefix,p1__30350_SHARP_),nrem);
});})(nrem))
,cljs.core.range.call(null,cljs.core.first.call(null,rem)));
} else {
var x__28256__auto__ = prefix;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28256__auto__);
}
});
return gen.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.seq.call(null,sh));
});
/**
 * Returns the smallest shape that both shapes a and b can broadcast to, or nil if the the shapes
 * are not compatible.
 */
clojure.core.matrix.utils.broadcast_shape_STAR_ = (function clojure$core$matrix$utils$broadcast_shape_STAR_(var_args){
var args30353 = [];
var len__28543__auto___30356 = arguments.length;
var i__28544__auto___30357 = (0);
while(true){
if((i__28544__auto___30357 < len__28543__auto___30356)){
args30353.push((arguments[i__28544__auto___30357]));

var G__30358 = (i__28544__auto___30357 + (1));
i__28544__auto___30357 = G__30358;
continue;
} else {
}
break;
}

var G__30355 = args30353.length;
switch (G__30355) {
case 2:
return clojure.core.matrix.utils.broadcast_shape_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.matrix.utils.broadcast_shape_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30353.length)].join('')));

}
});

clojure.core.matrix.utils.broadcast_shape_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
if(cljs.core.empty_QMARK_.call(null,a)){
var or__27322__auto__ = b;
if(cljs.core.truth_(or__27322__auto__)){
return or__27322__auto__;
} else {
return cljs.core.List.EMPTY;
}
} else {
if(cljs.core.empty_QMARK_.call(null,b)){
return a;
} else {
if(((1) === cljs.core.first.call(null,a))){
return clojure.core.matrix.utils.broadcast_shape_STAR_.call(null,cljs.core.first.call(null,b),cljs.core.next.call(null,a),cljs.core.next.call(null,b));
} else {
if(((1) === cljs.core.first.call(null,b))){
return clojure.core.matrix.utils.broadcast_shape_STAR_.call(null,cljs.core.first.call(null,a),cljs.core.next.call(null,a),cljs.core.next.call(null,b));
} else {
if((cljs.core.first.call(null,a) === cljs.core.first.call(null,b))){
return clojure.core.matrix.utils.broadcast_shape_STAR_.call(null,cljs.core.first.call(null,a),cljs.core.next.call(null,a),cljs.core.next.call(null,b));
} else {
return null;

}
}
}
}
}
});

clojure.core.matrix.utils.broadcast_shape_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (prefix,a,b){
if(cljs.core.truth_((function (){var or__27322__auto__ = a;
if(cljs.core.truth_(or__27322__auto__)){
return or__27322__auto__;
} else {
return b;
}
})())){
var r = clojure.core.matrix.utils.broadcast_shape_STAR_.call(null,a,b);
if(cljs.core.truth_(r)){
return cljs.core.cons.call(null,prefix,r);
} else {
return null;
}
} else {
return cljs.core.cons.call(null,prefix,null);
}
});

clojure.core.matrix.utils.broadcast_shape_STAR_.cljs$lang$maxFixedArity = 3;

/**
 * Returns the smallest compatible shape that a set of shapes can all broadcast to.
 * Returns nil if this is not possible (i.e. the shapes are incompatible).
 * Returns an empty list if both shape sequences are empty (i.e. represent scalars)
 */
clojure.core.matrix.utils.broadcast_shape = (function clojure$core$matrix$utils$broadcast_shape(var_args){
var args30360 = [];
var len__28543__auto___30363 = arguments.length;
var i__28544__auto___30364 = (0);
while(true){
if((i__28544__auto___30364 < len__28543__auto___30363)){
args30360.push((arguments[i__28544__auto___30364]));

var G__30365 = (i__28544__auto___30364 + (1));
i__28544__auto___30364 = G__30365;
continue;
} else {
}
break;
}

var G__30362 = args30360.length;
switch (G__30362) {
case 1:
return clojure.core.matrix.utils.broadcast_shape.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.utils.broadcast_shape.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30360.length)].join('')));

}
});

clojure.core.matrix.utils.broadcast_shape.cljs$core$IFn$_invoke$arity$1 = (function (a){
return a;
});

clojure.core.matrix.utils.broadcast_shape.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
var a__$1 = cljs.core.seq.call(null,cljs.core.reverse.call(null,a));
var b__$1 = cljs.core.seq.call(null,cljs.core.reverse.call(null,b));
var r = clojure.core.matrix.utils.broadcast_shape_STAR_.call(null,a__$1,b__$1);
if(cljs.core.truth_(r)){
return cljs.core.reverse.call(null,r);
} else {
return null;
}
});

clojure.core.matrix.utils.broadcast_shape.cljs$lang$maxFixedArity = 2;

/**
 * Returns truthy if the first shape a can be broadcast to the shape b
 */
clojure.core.matrix.utils.can_broadcast = (function clojure$core$matrix$utils$can_broadcast(from_shape,to_shape){
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("TODO: not yet implemented")].join(''),cljs.core.PersistentArrayMap.EMPTY);
});
/**
 * Returns true if an argument is a protocol'
 */
clojure.core.matrix.utils.protocol_QMARK_ = (function clojure$core$matrix$utils$protocol_QMARK_(p){
var and__27310__auto__ = cljs.core.map_QMARK_.call(null,p);
if(and__27310__auto__){
var and__27310__auto____$1 = new cljs.core.Keyword(null,"on-interface","on-interface",1993482222).cljs$core$IFn$_invoke$arity$1(p);
if(cljs.core.truth_(and__27310__auto____$1)){
return new cljs.core.Keyword(null,"on-interface","on-interface",1993482222).cljs$core$IFn$_invoke$arity$1(p).isInterface();
} else {
return and__27310__auto____$1;
}
} else {
return and__27310__auto__;
}
});
/**
 * Transform MapEntry to just map with some additional fields
 */
clojure.core.matrix.utils.enhance_protocol_kv = (function clojure$core$matrix$utils$enhance_protocol_kv(p__30367){
var vec__30371 = p__30367;
var name = cljs.core.nth.call(null,vec__30371,(0),null);
var p = cljs.core.nth.call(null,vec__30371,(1),null);
var m = cljs.core.meta.call(null,new cljs.core.Keyword(null,"var","var",-769682797).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p)));
return cljs.core.assoc.call(null,cljs.core.deref.call(null,p),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"name","name",1843675177),name);
});
clojure.core.matrix.utils.update_indexed = (function clojure$core$matrix$utils$update_indexed(xs,idxs,f){
return cljs.core.reduce.call(null,(function (p1__30377_SHARP_,p2__30378_SHARP_){
return cljs.core.assoc.call(null,p1__30377_SHARP_,p2__30378_SHARP_,f.call(null,p2__30378_SHARP_,cljs.core.get.call(null,p1__30377_SHARP_,p2__30378_SHARP_)));
}),xs,idxs);
});

//# sourceMappingURL=utils.js.map?rel=1493584909502