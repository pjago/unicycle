// Compiled by ClojureScript 1.9.521 {}
goog.provide('clojure.core.matrix.macros');
goog.require('cljs.core');
/**
 * Throws an error with the provided message(s)
 */
clojure.core.matrix.macros.error = (function clojure$core$matrix$macros$error(var_args){
var args__28550__auto__ = [];
var len__28543__auto___29951 = arguments.length;
var i__28544__auto___29952 = (0);
while(true){
if((i__28544__auto___29952 < len__28543__auto___29951)){
args__28550__auto__.push((arguments[i__28544__auto___29952]));

var G__29953 = (i__28544__auto___29952 + (1));
i__28544__auto___29952 = G__29953;
continue;
} else {
}
break;
}

var argseq__28551__auto__ = ((((2) < args__28550__auto__.length))?(new cljs.core.IndexedSeq(args__28550__auto__.slice((2)),(0),null)):null);
return clojure.core.matrix.macros.error.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__28551__auto__);
});

clojure.core.matrix.macros.error.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,vals){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__28256__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","ex-info","cljs.core/ex-info",-409744395,null)),(function (){var x__28256__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),vals)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28256__auto__);
})(),(function (){var x__28256__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28256__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28256__auto__);
})())));
});

clojure.core.matrix.macros.error.cljs$lang$maxFixedArity = (2);

clojure.core.matrix.macros.error.cljs$lang$applyTo = (function (seq29944){
var G__29945 = cljs.core.first.call(null,seq29944);
var seq29944__$1 = cljs.core.next.call(null,seq29944);
var G__29946 = cljs.core.first.call(null,seq29944__$1);
var seq29944__$2 = cljs.core.next.call(null,seq29944__$1);
return clojure.core.matrix.macros.error.cljs$core$IFn$_invoke$arity$variadic(G__29945,G__29946,seq29944__$2);
});


clojure.core.matrix.macros.error.cljs$lang$macro = true;
clojure.core.matrix.macros.TODO = (function clojure$core$matrix$macros$TODO(var_args){
var args29956 = [];
var len__28543__auto___29965 = arguments.length;
var i__28544__auto___29966 = (0);
while(true){
if((i__28544__auto___29966 < len__28543__auto___29965)){
args29956.push((arguments[i__28544__auto___29966]));

var G__29967 = (i__28544__auto___29966 + (1));
i__28544__auto___29966 = G__29967;
continue;
} else {
}
break;
}

var G__29964 = args29956.length;
switch (G__29964) {
case 2:
return clojure.core.matrix.macros.TODO.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__28566__auto__ = (new cljs.core.IndexedSeq(args29956.slice((2)),(0),null));
return clojure.core.matrix.macros.TODO.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__28566__auto__);

}
});

clojure.core.matrix.macros.TODO.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("clojure.core.matrix.macros","error","clojure.core.matrix.macros/error",-1013616626,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"TODO: not yet implemented"))));
});

clojure.core.matrix.macros.TODO.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,vals){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("clojure.core.matrix.macros","error","clojure.core.matrix.macros/error",-1013616626,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"TODO: "),vals)));
});

clojure.core.matrix.macros.TODO.cljs$lang$applyTo = (function (seq29957){
var G__29958 = cljs.core.first.call(null,seq29957);
var seq29957__$1 = cljs.core.next.call(null,seq29957);
var G__29959 = cljs.core.first.call(null,seq29957__$1);
var seq29957__$2 = cljs.core.next.call(null,seq29957__$1);
return clojure.core.matrix.macros.TODO.cljs$core$IFn$_invoke$arity$variadic(G__29958,G__29959,seq29957__$2);
});

clojure.core.matrix.macros.TODO.cljs$lang$maxFixedArity = (2);


clojure.core.matrix.macros.TODO.cljs$lang$macro = true;
/**
 * Throws IllegalArgumentException with provided string
 */
clojure.core.matrix.macros.iae = (function clojure$core$matrix$macros$iae(_AMPERSAND_form,_AMPERSAND_env,exception_str){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__28256__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"IllegalArgumentException.","IllegalArgumentException.",-1885081185,null)),(function (){var x__28256__auto__ = exception_str;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28256__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28256__auto__);
})())));
});

clojure.core.matrix.macros.iae.cljs$lang$macro = true;
/**
 * Throws an IllegalArgumentException when the predicate is not satisfied
 */
clojure.core.matrix.macros.iae_when_not = (function clojure$core$matrix$macros$iae_when_not(_AMPERSAND_form,_AMPERSAND_env,pred_QMARK_,exception_str){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null)),(function (){var x__28256__auto__ = pred_QMARK_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28256__auto__);
})(),(function (){var x__28256__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("clojure.core.matrix.macros","iae","clojure.core.matrix.macros/iae",926591908,null)),(function (){var x__28256__auto__ = exception_str;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28256__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28256__auto__);
})())));
});

clojure.core.matrix.macros.iae_when_not.cljs$lang$macro = true;
/**
 * loops over a set of values, binding index-sym to the 0-based index of each value
 */
clojure.core.matrix.macros.doseq_indexed = (function clojure$core$matrix$macros$doseq_indexed(var_args){
var args__28550__auto__ = [];
var len__28543__auto___30104 = arguments.length;
var i__28544__auto___30105 = (0);
while(true){
if((i__28544__auto___30105 < len__28543__auto___30104)){
args__28550__auto__.push((arguments[i__28544__auto___30105]));

var G__30106 = (i__28544__auto___30105 + (1));
i__28544__auto___30105 = G__30106;
continue;
} else {
}
break;
}

var argseq__28551__auto__ = ((((3) < args__28550__auto__.length))?(new cljs.core.IndexedSeq(args__28550__auto__.slice((3)),(0),null)):null);
return clojure.core.matrix.macros.doseq_indexed.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__28551__auto__);
});

clojure.core.matrix.macros.doseq_indexed.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__30002,code){
var vec__30003 = p__30002;
var val_sym = cljs.core.nth.call(null,vec__30003,(0),null);
var values = cljs.core.nth.call(null,vec__30003,(1),null);
var index_sym = cljs.core.nth.call(null,vec__30003,(2),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","loop","cljs.core/loop",-1829423021,null)),(function (){var x__28256__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"vals__29996__auto__","vals__29996__auto__",-49368195,null)),(function (){var x__28256__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__28256__auto__ = values;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28256__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28256__auto__);
})(),(function (){var x__28256__auto__ = index_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28256__auto__);
})(),(function (){var x__28256__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","long","cljs.core/long",241154833,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28256__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28256__auto__);
})(),(function (){var x__28256__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"vals__29996__auto__","vals__29996__auto__",-49368195,null)),(function (){var x__28256__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),(function (){var x__28256__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28256__auto__ = val_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28256__auto__);
})(),(function (){var x__28256__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"vals__29996__auto__","vals__29996__auto__",-49368195,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28256__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28256__auto__);
})(),code,(function (){var x__28256__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__28256__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","next","cljs.core/next",-1291438473,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"vals__29996__auto__","vals__29996__auto__",-49368195,null)))));
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

clojure.core.matrix.macros.doseq_indexed.cljs$lang$maxFixedArity = (3);

clojure.core.matrix.macros.doseq_indexed.cljs$lang$applyTo = (function (seq29997){
var G__29998 = cljs.core.first.call(null,seq29997);
var seq29997__$1 = cljs.core.next.call(null,seq29997);
var G__29999 = cljs.core.first.call(null,seq29997__$1);
var seq29997__$2 = cljs.core.next.call(null,seq29997__$1);
var G__30000 = cljs.core.first.call(null,seq29997__$2);
var seq29997__$3 = cljs.core.next.call(null,seq29997__$2);
return clojure.core.matrix.macros.doseq_indexed.cljs$core$IFn$_invoke$arity$variadic(G__29998,G__29999,G__30000,seq29997__$3);
});


clojure.core.matrix.macros.doseq_indexed.cljs$lang$macro = true;
clojure.core.matrix.macros.is_object_array_QMARK_ = (function clojure$core$matrix$macros$is_object_array_QMARK_(_AMPERSAND_form,_AMPERSAND_env,m){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Array","js/Array",-423508366,null)),(function (){var x__28256__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","type","cljs.core/type",-821761154,null)),(function (){var x__28256__auto__ = m;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28256__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28256__auto__);
})())));
});

clojure.core.matrix.macros.is_object_array_QMARK_.cljs$lang$macro = true;
clojure.core.matrix.macros.is_long_array_QMARK_ = (function clojure$core$matrix$macros$is_long_array_QMARK_(_AMPERSAND_form,_AMPERSAND_env,m){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Array","js/Array",-423508366,null)),(function (){var x__28256__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","type","cljs.core/type",-821761154,null)),(function (){var x__28256__auto__ = m;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28256__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28256__auto__);
})())));
});

clojure.core.matrix.macros.is_long_array_QMARK_.cljs$lang$macro = true;
clojure.core.matrix.macros.is_double_array_QMARK_ = (function clojure$core$matrix$macros$is_double_array_QMARK_(_AMPERSAND_form,_AMPERSAND_env,m){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Array","js/Array",-423508366,null)),(function (){var x__28256__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","type","cljs.core/type",-821761154,null)),(function (){var x__28256__auto__ = m;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28256__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28256__auto__);
})())));
});

clojure.core.matrix.macros.is_double_array_QMARK_.cljs$lang$macro = true;
/**
 * C-like loop with nested loops support
 */
clojure.core.matrix.macros.c_for = (function clojure$core$matrix$macros$c_for(var_args){
var args__28550__auto__ = [];
var len__28543__auto___30273 = arguments.length;
var i__28544__auto___30274 = (0);
while(true){
if((i__28544__auto___30274 < len__28543__auto___30273)){
args__28550__auto__.push((arguments[i__28544__auto___30274]));

var G__30275 = (i__28544__auto___30274 + (1));
i__28544__auto___30274 = G__30275;
continue;
} else {
}
break;
}

var argseq__28551__auto__ = ((((3) < args__28550__auto__.length))?(new cljs.core.IndexedSeq(args__28550__auto__.slice((3)),(0),null)):null);
return clojure.core.matrix.macros.c_for.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__28551__auto__);
});

clojure.core.matrix.macros.c_for.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,loops,body){
var c_for_rec = (function clojure$core$matrix$macros$c_for_rec(loops__$1,body_stmts){
if(cljs.core.seq.call(null,loops__$1)){
var vec__30270 = cljs.core.take.call(null,(4),loops__$1);
var var$ = cljs.core.nth.call(null,vec__30270,(0),null);
var init = cljs.core.nth.call(null,vec__30270,(1),null);
var check = cljs.core.nth.call(null,vec__30270,(2),null);
var next = cljs.core.nth.call(null,vec__30270,(3),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28256__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","loop","cljs.core/loop",-1829423021,null)),(function (){var x__28256__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28256__auto__ = var$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28256__auto__);
})(),(function (){var x__28256__auto__ = init;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28256__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28256__auto__);
})(),(function (){var x__28256__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null)),(function (){var x__28256__auto__ = check;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28256__auto__);
})(),clojure$core$matrix$macros$c_for_rec.call(null,cljs.core.nthrest.call(null,loops__$1,(4)),body_stmts),(function (){var x__28256__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__28256__auto__ = next;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28256__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28256__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28256__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28256__auto__);
})())));
} else {
return body_stmts;
}
});
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),c_for_rec.call(null,loops,body),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
});

clojure.core.matrix.macros.c_for.cljs$lang$maxFixedArity = (3);

clojure.core.matrix.macros.c_for.cljs$lang$applyTo = (function (seq30182){
var G__30183 = cljs.core.first.call(null,seq30182);
var seq30182__$1 = cljs.core.next.call(null,seq30182);
var G__30184 = cljs.core.first.call(null,seq30182__$1);
var seq30182__$2 = cljs.core.next.call(null,seq30182__$1);
var G__30185 = cljs.core.first.call(null,seq30182__$2);
var seq30182__$3 = cljs.core.next.call(null,seq30182__$2);
return clojure.core.matrix.macros.c_for.cljs$core$IFn$_invoke$arity$variadic(G__30183,G__30184,G__30185,seq30182__$3);
});


clojure.core.matrix.macros.c_for.cljs$lang$macro = true;
/**
 * Macro to coerce to scalar value with an efficient dispatch sequence
 */
clojure.core.matrix.macros.scalar_coerce = (function clojure$core$matrix$macros$scalar_coerce(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),(function (){var x__28256__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__30276__auto__","x__30276__auto__",-783122932,null)),(function (){var x__28256__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28256__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28256__auto__);
})(),(function (){var x__28256__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","cond","cljs.core/cond",2005388338,null)),(function (){var x__28256__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__30276__auto__","x__30276__auto__",-783122932,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28256__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__30276__auto__","x__30276__auto__",-783122932,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"else","else",-1508377146)),(function (){var x__28256__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("clojure.core.matrix.protocols","get-0d","clojure.core.matrix.protocols/get-0d",1926949216,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__30276__auto__","x__30276__auto__",-783122932,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28256__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28256__auto__);
})())));
});

clojure.core.matrix.macros.scalar_coerce.cljs$lang$macro = true;
/**
 * Returns true if the parameter is an N-dimensional array of any type
 */
clojure.core.matrix.macros.array_QMARK_ = (function clojure$core$matrix$macros$array_QMARK_(_AMPERSAND_form,_AMPERSAND_env,m){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null)),(function (){var x__28256__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("clojure.core.matrix.protocols","is-scalar?","clojure.core.matrix.protocols/is-scalar?",-355472862,null)),(function (){var x__28256__auto__ = m;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28256__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28256__auto__);
})())));
});

clojure.core.matrix.macros.array_QMARK_.cljs$lang$macro = true;

//# sourceMappingURL=macros.js.map?rel=1493584909150