// Compiled by ClojureScript 1.9.456 {}
goog.provide('clojure.core.matrix.macros');
goog.require('cljs.core');
/**
 * Throws an error with the provided message(s)
 */
clojure.core.matrix.macros.error = (function clojure$core$matrix$macros$error(var_args){
var args__21903__auto__ = [];
var len__21896__auto___30327 = arguments.length;
var i__21897__auto___30328 = (0);
while(true){
if((i__21897__auto___30328 < len__21896__auto___30327)){
args__21903__auto__.push((arguments[i__21897__auto___30328]));

var G__30329 = (i__21897__auto___30328 + (1));
i__21897__auto___30328 = G__30329;
continue;
} else {
}
break;
}

var argseq__21904__auto__ = ((((2) < args__21903__auto__.length))?(new cljs.core.IndexedSeq(args__21903__auto__.slice((2)),(0),null)):null);
return clojure.core.matrix.macros.error.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__21904__auto__);
});

clojure.core.matrix.macros.error.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,vals){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__21609__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","ex-info","cljs.core/ex-info",-409744395,null)),(function (){var x__21609__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),vals)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21609__auto__);
})(),(function (){var x__21609__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21609__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21609__auto__);
})())));
});

clojure.core.matrix.macros.error.cljs$lang$maxFixedArity = (2);

clojure.core.matrix.macros.error.cljs$lang$applyTo = (function (seq30320){
var G__30321 = cljs.core.first.call(null,seq30320);
var seq30320__$1 = cljs.core.next.call(null,seq30320);
var G__30322 = cljs.core.first.call(null,seq30320__$1);
var seq30320__$2 = cljs.core.next.call(null,seq30320__$1);
return clojure.core.matrix.macros.error.cljs$core$IFn$_invoke$arity$variadic(G__30321,G__30322,seq30320__$2);
});


clojure.core.matrix.macros.error.cljs$lang$macro = true;
clojure.core.matrix.macros.TODO = (function clojure$core$matrix$macros$TODO(var_args){
var args30340 = [];
var len__21896__auto___30390 = arguments.length;
var i__21897__auto___30392 = (0);
while(true){
if((i__21897__auto___30392 < len__21896__auto___30390)){
args30340.push((arguments[i__21897__auto___30392]));

var G__30394 = (i__21897__auto___30392 + (1));
i__21897__auto___30392 = G__30394;
continue;
} else {
}
break;
}

var G__30380 = args30340.length;
switch (G__30380) {
case 2:
return clojure.core.matrix.macros.TODO.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__21919__auto__ = (new cljs.core.IndexedSeq(args30340.slice((2)),(0),null));
return clojure.core.matrix.macros.TODO.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__21919__auto__);

}
});

clojure.core.matrix.macros.TODO.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("clojure.core.matrix.macros","error","clojure.core.matrix.macros/error",-1013616626,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"TODO: not yet implemented"))));
});

clojure.core.matrix.macros.TODO.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,vals){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("clojure.core.matrix.macros","error","clojure.core.matrix.macros/error",-1013616626,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"TODO: "),vals)));
});

clojure.core.matrix.macros.TODO.cljs$lang$applyTo = (function (seq30341){
var G__30342 = cljs.core.first.call(null,seq30341);
var seq30341__$1 = cljs.core.next.call(null,seq30341);
var G__30343 = cljs.core.first.call(null,seq30341__$1);
var seq30341__$2 = cljs.core.next.call(null,seq30341__$1);
return clojure.core.matrix.macros.TODO.cljs$core$IFn$_invoke$arity$variadic(G__30342,G__30343,seq30341__$2);
});

clojure.core.matrix.macros.TODO.cljs$lang$maxFixedArity = (2);


clojure.core.matrix.macros.TODO.cljs$lang$macro = true;
/**
 * Throws IllegalArgumentException with provided string
 */
clojure.core.matrix.macros.iae = (function clojure$core$matrix$macros$iae(_AMPERSAND_form,_AMPERSAND_env,exception_str){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__21609__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"IllegalArgumentException.","IllegalArgumentException.",-1885081185,null)),(function (){var x__21609__auto__ = exception_str;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21609__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21609__auto__);
})())));
});

clojure.core.matrix.macros.iae.cljs$lang$macro = true;
/**
 * Throws an IllegalArgumentException when the predicate is not satisfied
 */
clojure.core.matrix.macros.iae_when_not = (function clojure$core$matrix$macros$iae_when_not(_AMPERSAND_form,_AMPERSAND_env,pred_QMARK_,exception_str){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null)),(function (){var x__21609__auto__ = pred_QMARK_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21609__auto__);
})(),(function (){var x__21609__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("clojure.core.matrix.macros","iae","clojure.core.matrix.macros/iae",926591908,null)),(function (){var x__21609__auto__ = exception_str;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21609__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21609__auto__);
})())));
});

clojure.core.matrix.macros.iae_when_not.cljs$lang$macro = true;
/**
 * loops over a set of values, binding index-sym to the 0-based index of each value
 */
clojure.core.matrix.macros.doseq_indexed = (function clojure$core$matrix$macros$doseq_indexed(var_args){
var args__21903__auto__ = [];
var len__21896__auto___30575 = arguments.length;
var i__21897__auto___30576 = (0);
while(true){
if((i__21897__auto___30576 < len__21896__auto___30575)){
args__21903__auto__.push((arguments[i__21897__auto___30576]));

var G__30578 = (i__21897__auto___30576 + (1));
i__21897__auto___30576 = G__30578;
continue;
} else {
}
break;
}

var argseq__21904__auto__ = ((((3) < args__21903__auto__.length))?(new cljs.core.IndexedSeq(args__21903__auto__.slice((3)),(0),null)):null);
return clojure.core.matrix.macros.doseq_indexed.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__21904__auto__);
});

clojure.core.matrix.macros.doseq_indexed.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__30457,code){
var vec__30458 = p__30457;
var val_sym = cljs.core.nth.call(null,vec__30458,(0),null);
var values = cljs.core.nth.call(null,vec__30458,(1),null);
var index_sym = cljs.core.nth.call(null,vec__30458,(2),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","loop","cljs.core/loop",-1829423021,null)),(function (){var x__21609__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"vals__30449__auto__","vals__30449__auto__",1717396272,null)),(function (){var x__21609__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__21609__auto__ = values;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21609__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21609__auto__);
})(),(function (){var x__21609__auto__ = index_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21609__auto__);
})(),(function (){var x__21609__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","long","cljs.core/long",241154833,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21609__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21609__auto__);
})(),(function (){var x__21609__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"vals__30449__auto__","vals__30449__auto__",1717396272,null)),(function (){var x__21609__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),(function (){var x__21609__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__21609__auto__ = val_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21609__auto__);
})(),(function (){var x__21609__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"vals__30449__auto__","vals__30449__auto__",1717396272,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21609__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21609__auto__);
})(),code,(function (){var x__21609__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__21609__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","next","cljs.core/next",-1291438473,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"vals__30449__auto__","vals__30449__auto__",1717396272,null)))));
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

clojure.core.matrix.macros.doseq_indexed.cljs$lang$maxFixedArity = (3);

clojure.core.matrix.macros.doseq_indexed.cljs$lang$applyTo = (function (seq30451){
var G__30453 = cljs.core.first.call(null,seq30451);
var seq30451__$1 = cljs.core.next.call(null,seq30451);
var G__30454 = cljs.core.first.call(null,seq30451__$1);
var seq30451__$2 = cljs.core.next.call(null,seq30451__$1);
var G__30455 = cljs.core.first.call(null,seq30451__$2);
var seq30451__$3 = cljs.core.next.call(null,seq30451__$2);
return clojure.core.matrix.macros.doseq_indexed.cljs$core$IFn$_invoke$arity$variadic(G__30453,G__30454,G__30455,seq30451__$3);
});


clojure.core.matrix.macros.doseq_indexed.cljs$lang$macro = true;
clojure.core.matrix.macros.is_object_array_QMARK_ = (function clojure$core$matrix$macros$is_object_array_QMARK_(_AMPERSAND_form,_AMPERSAND_env,m){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Array","js/Array",-423508366,null)),(function (){var x__21609__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","type","cljs.core/type",-821761154,null)),(function (){var x__21609__auto__ = m;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21609__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21609__auto__);
})())));
});

clojure.core.matrix.macros.is_object_array_QMARK_.cljs$lang$macro = true;
clojure.core.matrix.macros.is_long_array_QMARK_ = (function clojure$core$matrix$macros$is_long_array_QMARK_(_AMPERSAND_form,_AMPERSAND_env,m){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Array","js/Array",-423508366,null)),(function (){var x__21609__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","type","cljs.core/type",-821761154,null)),(function (){var x__21609__auto__ = m;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21609__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21609__auto__);
})())));
});

clojure.core.matrix.macros.is_long_array_QMARK_.cljs$lang$macro = true;
clojure.core.matrix.macros.is_double_array_QMARK_ = (function clojure$core$matrix$macros$is_double_array_QMARK_(_AMPERSAND_form,_AMPERSAND_env,m){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Array","js/Array",-423508366,null)),(function (){var x__21609__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","type","cljs.core/type",-821761154,null)),(function (){var x__21609__auto__ = m;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21609__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21609__auto__);
})())));
});

clojure.core.matrix.macros.is_double_array_QMARK_.cljs$lang$macro = true;
/**
 * C-like loop with nested loops support
 */
clojure.core.matrix.macros.c_for = (function clojure$core$matrix$macros$c_for(var_args){
var args__21903__auto__ = [];
var len__21896__auto___30814 = arguments.length;
var i__21897__auto___30815 = (0);
while(true){
if((i__21897__auto___30815 < len__21896__auto___30814)){
args__21903__auto__.push((arguments[i__21897__auto___30815]));

var G__30816 = (i__21897__auto___30815 + (1));
i__21897__auto___30815 = G__30816;
continue;
} else {
}
break;
}

var argseq__21904__auto__ = ((((3) < args__21903__auto__.length))?(new cljs.core.IndexedSeq(args__21903__auto__.slice((3)),(0),null)):null);
return clojure.core.matrix.macros.c_for.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__21904__auto__);
});

clojure.core.matrix.macros.c_for.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,loops,body){
var c_for_rec = (function clojure$core$matrix$macros$c_for_rec(loops__$1,body_stmts){
if(cljs.core.seq.call(null,loops__$1)){
var vec__30776 = cljs.core.take.call(null,(4),loops__$1);
var var$ = cljs.core.nth.call(null,vec__30776,(0),null);
var init = cljs.core.nth.call(null,vec__30776,(1),null);
var check = cljs.core.nth.call(null,vec__30776,(2),null);
var next = cljs.core.nth.call(null,vec__30776,(3),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__21609__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","loop","cljs.core/loop",-1829423021,null)),(function (){var x__21609__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__21609__auto__ = var$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21609__auto__);
})(),(function (){var x__21609__auto__ = init;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21609__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21609__auto__);
})(),(function (){var x__21609__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null)),(function (){var x__21609__auto__ = check;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21609__auto__);
})(),clojure$core$matrix$macros$c_for_rec.call(null,cljs.core.nthrest.call(null,loops__$1,(4)),body_stmts),(function (){var x__21609__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__21609__auto__ = next;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21609__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21609__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21609__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21609__auto__);
})())));
} else {
return body_stmts;
}
});
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),c_for_rec.call(null,loops,body),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
});

clojure.core.matrix.macros.c_for.cljs$lang$maxFixedArity = (3);

clojure.core.matrix.macros.c_for.cljs$lang$applyTo = (function (seq30727){
var G__30728 = cljs.core.first.call(null,seq30727);
var seq30727__$1 = cljs.core.next.call(null,seq30727);
var G__30729 = cljs.core.first.call(null,seq30727__$1);
var seq30727__$2 = cljs.core.next.call(null,seq30727__$1);
var G__30730 = cljs.core.first.call(null,seq30727__$2);
var seq30727__$3 = cljs.core.next.call(null,seq30727__$2);
return clojure.core.matrix.macros.c_for.cljs$core$IFn$_invoke$arity$variadic(G__30728,G__30729,G__30730,seq30727__$3);
});


clojure.core.matrix.macros.c_for.cljs$lang$macro = true;
/**
 * Macro to coerce to scalar value with an efficient dispatch sequence
 */
clojure.core.matrix.macros.scalar_coerce = (function clojure$core$matrix$macros$scalar_coerce(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),(function (){var x__21609__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__30970__auto__","x__30970__auto__",1199652283,null)),(function (){var x__21609__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21609__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21609__auto__);
})(),(function (){var x__21609__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","cond","cljs.core/cond",2005388338,null)),(function (){var x__21609__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__30970__auto__","x__30970__auto__",1199652283,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21609__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__30970__auto__","x__30970__auto__",1199652283,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"else","else",-1508377146)),(function (){var x__21609__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("clojure.core.matrix.protocols","get-0d","clojure.core.matrix.protocols/get-0d",1926949216,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__30970__auto__","x__30970__auto__",1199652283,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21609__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21609__auto__);
})())));
});

clojure.core.matrix.macros.scalar_coerce.cljs$lang$macro = true;
/**
 * Returns true if the parameter is an N-dimensional array of any type
 */
clojure.core.matrix.macros.array_QMARK_ = (function clojure$core$matrix$macros$array_QMARK_(_AMPERSAND_form,_AMPERSAND_env,m){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null)),(function (){var x__21609__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("clojure.core.matrix.protocols","is-scalar?","clojure.core.matrix.protocols/is-scalar?",-355472862,null)),(function (){var x__21609__auto__ = m;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21609__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21609__auto__);
})())));
});

clojure.core.matrix.macros.array_QMARK_.cljs$lang$macro = true;

//# sourceMappingURL=macros.js.map