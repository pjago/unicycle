// Compiled by ClojureScript 1.9.456 {}
goog.provide('clojure.core.matrix.utils');
goog.require('cljs.core');
clojure.core.matrix.utils.class$ = cljs.core.type;
/**
 * Throws an error with the provided message(s)
 */
clojure.core.matrix.utils.error = (function clojure$core$matrix$utils$error(var_args){
var args__21903__auto__ = [];
var len__21896__auto___31601 = arguments.length;
var i__21897__auto___31605 = (0);
while(true){
if((i__21897__auto___31605 < len__21896__auto___31601)){
args__21903__auto__.push((arguments[i__21897__auto___31605]));

var G__31611 = (i__21897__auto___31605 + (1));
i__21897__auto___31605 = G__31611;
continue;
} else {
}
break;
}

var argseq__21904__auto__ = ((((2) < args__21903__auto__.length))?(new cljs.core.IndexedSeq(args__21903__auto__.slice((2)),(0),null)):null);
return clojure.core.matrix.utils.error.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__21904__auto__);
});

clojure.core.matrix.utils.error.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,vals){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__21609__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),(function (){var x__21609__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),vals)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21609__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21609__auto__);
})())));
});

clojure.core.matrix.utils.error.cljs$lang$maxFixedArity = (2);

clojure.core.matrix.utils.error.cljs$lang$applyTo = (function (seq31575){
var G__31576 = cljs.core.first.call(null,seq31575);
var seq31575__$1 = cljs.core.next.call(null,seq31575);
var G__31577 = cljs.core.first.call(null,seq31575__$1);
var seq31575__$2 = cljs.core.next.call(null,seq31575__$1);
return clojure.core.matrix.utils.error.cljs$core$IFn$_invoke$arity$variadic(G__31576,G__31577,seq31575__$2);
});


clojure.core.matrix.utils.error.cljs$lang$macro = true;
/**
 * loops over a set of values, binding index-sym to the 0-based index of each value
 */
clojure.core.matrix.utils.doseq_indexed = (function clojure$core$matrix$utils$doseq_indexed(var_args){
var args__21903__auto__ = [];
var len__21896__auto___31805 = arguments.length;
var i__21897__auto___31806 = (0);
while(true){
if((i__21897__auto___31806 < len__21896__auto___31805)){
args__21903__auto__.push((arguments[i__21897__auto___31806]));

var G__31810 = (i__21897__auto___31806 + (1));
i__21897__auto___31806 = G__31810;
continue;
} else {
}
break;
}

var argseq__21904__auto__ = ((((3) < args__21903__auto__.length))?(new cljs.core.IndexedSeq(args__21903__auto__.slice((3)),(0),null)):null);
return clojure.core.matrix.utils.doseq_indexed.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__21904__auto__);
});

clojure.core.matrix.utils.doseq_indexed.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__31648,code){
var vec__31649 = p__31648;
var val_sym = cljs.core.nth.call(null,vec__31649,(0),null);
var values = cljs.core.nth.call(null,vec__31649,(1),null);
var index_sym = cljs.core.nth.call(null,vec__31649,(2),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","loop","cljs.core/loop",-1829423021,null)),(function (){var x__21609__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"vals__31636__auto__","vals__31636__auto__",-119212071,null)),(function (){var x__21609__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__21609__auto__ = values;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21609__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21609__auto__);
})(),(function (){var x__21609__auto__ = index_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21609__auto__);
})(),(function (){var x__21609__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","long","cljs.core/long",241154833,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21609__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21609__auto__);
})(),(function (){var x__21609__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"vals__31636__auto__","vals__31636__auto__",-119212071,null)),(function (){var x__21609__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),(function (){var x__21609__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__21609__auto__ = val_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21609__auto__);
})(),(function (){var x__21609__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"vals__31636__auto__","vals__31636__auto__",-119212071,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21609__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21609__auto__);
})(),code,(function (){var x__21609__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__21609__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","next","cljs.core/next",-1291438473,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"vals__31636__auto__","vals__31636__auto__",-119212071,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21609__auto__);
})(),(function (){var x__21609__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","inc","cljs.core/inc",-879172610,null)),(function (){var x__21609__auto__ = index_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21609__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21609__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21609__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21609__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21609__auto__);
})())));
});

clojure.core.matrix.utils.doseq_indexed.cljs$lang$maxFixedArity = (3);

clojure.core.matrix.utils.doseq_indexed.cljs$lang$applyTo = (function (seq31637){
var G__31638 = cljs.core.first.call(null,seq31637);
var seq31637__$1 = cljs.core.next.call(null,seq31637);
var G__31639 = cljs.core.first.call(null,seq31637__$1);
var seq31637__$2 = cljs.core.next.call(null,seq31637__$1);
var G__31640 = cljs.core.first.call(null,seq31637__$2);
var seq31637__$3 = cljs.core.next.call(null,seq31637__$2);
return clojure.core.matrix.utils.doseq_indexed.cljs$core$IFn$_invoke$arity$variadic(G__31638,G__31639,G__31640,seq31637__$3);
});


clojure.core.matrix.utils.doseq_indexed.cljs$lang$macro = true;
/**
 * returns true if the given object is a valid core.matrix array shape.
 */
clojure.core.matrix.utils.valid_shape_QMARK_ = (function clojure$core$matrix$utils$valid_shape_QMARK_(shape){
try{return ((cljs.core.count.call(null,shape) >= (0))) && (cljs.core.every_QMARK_.call(null,cljs.core.integer_QMARK_,shape));
}catch (e31876){if((e31876 instanceof Error)){
var t = e31876;
return false;
} else {
throw e31876;

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
var G__31885 = (i + (1));
i = G__31885;
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
var args31888 = [];
var len__21896__auto___31896 = arguments.length;
var i__21897__auto___31897 = (0);
while(true){
if((i__21897__auto___31897 < len__21896__auto___31896)){
args31888.push((arguments[i__21897__auto___31897]));

var G__31898 = (i__21897__auto___31897 + (1));
i__21897__auto___31897 = G__31898;
continue;
} else {
}
break;
}

var G__31893 = args31888.length;
switch (G__31893) {
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
var argseq__21919__auto__ = (new cljs.core.IndexedSeq(args31888.slice((2)),(0),null));
return clojure.core.matrix.utils.xor.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__21919__auto__);

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
var G__31904 = (cljs.core.truth_(cljs.core.first.call(null,ss))?cljs.core.not.call(null,p):p);
var G__31905 = cljs.core.next.call(null,ss);
p = G__31904;
ss = G__31905;
continue;
} else {
return p;
}
break;
}
});

clojure.core.matrix.utils.xor.cljs$lang$applyTo = (function (seq31889){
var G__31890 = cljs.core.first.call(null,seq31889);
var seq31889__$1 = cljs.core.next.call(null,seq31889);
var G__31891 = cljs.core.first.call(null,seq31889__$1);
var seq31889__$2 = cljs.core.next.call(null,seq31889__$1);
return clojure.core.matrix.utils.xor.cljs$core$IFn$_invoke$arity$variadic(G__31890,G__31891,seq31889__$2);
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
var n__21696__auto___31912 = end__$1;
var i_31913 = (0);
while(true){
if((i_31913 < n__21696__auto___31912)){
(arr[i_31913] = cljs.core.long$.call(null,i_31913));

var G__31914 = (i_31913 + (1));
i_31913 = G__31914;
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
var args31917 = [];
var len__21896__auto___31925 = arguments.length;
var i__21897__auto___31928 = (0);
while(true){
if((i__21897__auto___31928 < len__21896__auto___31925)){
args31917.push((arguments[i__21897__auto___31928]));

var G__31929 = (i__21897__auto___31928 + (1));
i__21897__auto___31928 = G__31929;
continue;
} else {
}
break;
}

var G__31922 = args31917.length;
switch (G__31922) {
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
var argseq__21919__auto__ = (new cljs.core.IndexedSeq(args31917.slice((2)),(0),null));
return clojure.core.matrix.utils.long_array_of.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__21919__auto__);

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

clojure.core.matrix.utils.long_array_of.cljs$lang$applyTo = (function (seq31918){
var G__31919 = cljs.core.first.call(null,seq31918);
var seq31918__$1 = cljs.core.next.call(null,seq31918);
var G__31920 = cljs.core.first.call(null,seq31918__$1);
var seq31918__$2 = cljs.core.next.call(null,seq31918__$1);
return clojure.core.matrix.utils.long_array_of.cljs$core$IFn$_invoke$arity$variadic(G__31919,G__31920,seq31918__$2);
});

clojure.core.matrix.utils.long_array_of.cljs$lang$maxFixedArity = (2);

/**
 * Creates a long array with the specified values.
 */
clojure.core.matrix.utils.object_array_of = (function clojure$core$matrix$utils$object_array_of(var_args){
var args31937 = [];
var len__21896__auto___31947 = arguments.length;
var i__21897__auto___31948 = (0);
while(true){
if((i__21897__auto___31948 < len__21896__auto___31947)){
args31937.push((arguments[i__21897__auto___31948]));

var G__31949 = (i__21897__auto___31948 + (1));
i__21897__auto___31948 = G__31949;
continue;
} else {
}
break;
}

var G__31942 = args31937.length;
switch (G__31942) {
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
var argseq__21919__auto__ = (new cljs.core.IndexedSeq(args31937.slice((2)),(0),null));
return clojure.core.matrix.utils.object_array_of.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__21919__auto__);

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

clojure.core.matrix.utils.object_array_of.cljs$lang$applyTo = (function (seq31938){
var G__31939 = cljs.core.first.call(null,seq31938);
var seq31938__$1 = cljs.core.next.call(null,seq31938);
var G__31940 = cljs.core.first.call(null,seq31938__$1);
var seq31938__$2 = cljs.core.next.call(null,seq31938__$1);
return clojure.core.matrix.utils.object_array_of.cljs$core$IFn$_invoke$arity$variadic(G__31939,G__31940,seq31938__$2);
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
var G__31967 = (i + (1));
i = G__31967;
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
return (function (p1__31968_SHARP_){
return clojure$core$matrix$utils$base_index_seq_for_shape_$_gen.call(null,cljs.core.conj.call(null,prefix,p1__31968_SHARP_),nrem);
});})(nrem))
,cljs.core.range.call(null,cljs.core.first.call(null,rem)));
} else {
var x__21609__auto__ = prefix;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21609__auto__);
}
});
return gen.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.seq.call(null,sh));
});
/**
 * Returns the smallest shape that both shapes a and b can broadcast to, or nil if the the shapes
 * are not compatible.
 */
clojure.core.matrix.utils.broadcast_shape_STAR_ = (function clojure$core$matrix$utils$broadcast_shape_STAR_(var_args){
var args31976 = [];
var len__21896__auto___31986 = arguments.length;
var i__21897__auto___31987 = (0);
while(true){
if((i__21897__auto___31987 < len__21896__auto___31986)){
args31976.push((arguments[i__21897__auto___31987]));

var G__31990 = (i__21897__auto___31987 + (1));
i__21897__auto___31987 = G__31990;
continue;
} else {
}
break;
}

var G__31980 = args31976.length;
switch (G__31980) {
case 2:
return clojure.core.matrix.utils.broadcast_shape_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.matrix.utils.broadcast_shape_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args31976.length)].join('')));

}
});

clojure.core.matrix.utils.broadcast_shape_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
if(cljs.core.empty_QMARK_.call(null,a)){
var or__20675__auto__ = b;
if(cljs.core.truth_(or__20675__auto__)){
return or__20675__auto__;
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
if(cljs.core.truth_((function (){var or__20675__auto__ = a;
if(cljs.core.truth_(or__20675__auto__)){
return or__20675__auto__;
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
var args32000 = [];
var len__21896__auto___32005 = arguments.length;
var i__21897__auto___32006 = (0);
while(true){
if((i__21897__auto___32006 < len__21896__auto___32005)){
args32000.push((arguments[i__21897__auto___32006]));

var G__32009 = (i__21897__auto___32006 + (1));
i__21897__auto___32006 = G__32009;
continue;
} else {
}
break;
}

var G__32004 = args32000.length;
switch (G__32004) {
case 1:
return clojure.core.matrix.utils.broadcast_shape.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.utils.broadcast_shape.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args32000.length)].join('')));

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
var and__20663__auto__ = cljs.core.map_QMARK_.call(null,p);
if(and__20663__auto__){
var and__20663__auto____$1 = new cljs.core.Keyword(null,"on-interface","on-interface",1993482222).cljs$core$IFn$_invoke$arity$1(p);
if(cljs.core.truth_(and__20663__auto____$1)){
return new cljs.core.Keyword(null,"on-interface","on-interface",1993482222).cljs$core$IFn$_invoke$arity$1(p).isInterface();
} else {
return and__20663__auto____$1;
}
} else {
return and__20663__auto__;
}
});
/**
 * Transform MapEntry to just map with some additional fields
 */
clojure.core.matrix.utils.enhance_protocol_kv = (function clojure$core$matrix$utils$enhance_protocol_kv(p__32021){
var vec__32035 = p__32021;
var name = cljs.core.nth.call(null,vec__32035,(0),null);
var p = cljs.core.nth.call(null,vec__32035,(1),null);
var m = cljs.core.meta.call(null,new cljs.core.Keyword(null,"var","var",-769682797).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p)));
return cljs.core.assoc.call(null,cljs.core.deref.call(null,p),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"name","name",1843675177),name);
});
clojure.core.matrix.utils.update_indexed = (function clojure$core$matrix$utils$update_indexed(xs,idxs,f){
return cljs.core.reduce.call(null,(function (p1__32079_SHARP_,p2__32080_SHARP_){
return cljs.core.assoc.call(null,p1__32079_SHARP_,p2__32080_SHARP_,f.call(null,p2__32080_SHARP_,cljs.core.get.call(null,p1__32079_SHARP_,p2__32080_SHARP_)));
}),xs,idxs);
});

//# sourceMappingURL=utils.js.map