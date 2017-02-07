// Compiled by ClojureScript 1.9.456 {}
goog.provide('clojure.core.matrix.operators');
goog.require('cljs.core');
goog.require('clojure.core.matrix');
/**
 * Array multiply operator. Uses elementwise multiplication.
 */
clojure.core.matrix.operators._STAR_ = clojure.core.matrix.mul;
clojure.core.matrix.operators._STAR__STAR_ = clojure.core.matrix.pow;
/**
 * Array addition operator. Equivalent to clojure.core.matrix/add.
 */
clojure.core.matrix.operators._PLUS_ = (function clojure$core$matrix$operators$_PLUS_(var_args){
var args49548 = [];
var len__21896__auto___49571 = arguments.length;
var i__21897__auto___49572 = (0);
while(true){
if((i__21897__auto___49572 < len__21896__auto___49571)){
args49548.push((arguments[i__21897__auto___49572]));

var G__49576 = (i__21897__auto___49572 + (1));
i__21897__auto___49572 = G__49576;
continue;
} else {
}
break;
}

var G__49557 = args49548.length;
switch (G__49557) {
case 0:
return clojure.core.matrix.operators._PLUS_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return clojure.core.matrix.operators._PLUS_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.operators._PLUS_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__21919__auto__ = (new cljs.core.IndexedSeq(args49548.slice((2)),(0),null));
return clojure.core.matrix.operators._PLUS_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__21919__auto__);

}
});

clojure.core.matrix.operators._PLUS_.cljs$core$IFn$_invoke$arity$0 = (function (){
return clojure.core.matrix.add.call(null);
});

clojure.core.matrix.operators._PLUS_.cljs$core$IFn$_invoke$arity$1 = (function (a){
return a;
});

clojure.core.matrix.operators._PLUS_.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
if((typeof a === 'number') && (typeof b === 'number')){
return (a + b);
} else {
return clojure.core.matrix.add.call(null,a,b);
}
});

clojure.core.matrix.operators._PLUS_.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,more){
return cljs.core.reduce.call(null,clojure.core.matrix.operators._PLUS_,clojure.core.matrix.operators._PLUS_.call(null,a,b),more);
});

clojure.core.matrix.operators._PLUS_.cljs$lang$applyTo = (function (seq49549){
var G__49550 = cljs.core.first.call(null,seq49549);
var seq49549__$1 = cljs.core.next.call(null,seq49549);
var G__49551 = cljs.core.first.call(null,seq49549__$1);
var seq49549__$2 = cljs.core.next.call(null,seq49549__$1);
return clojure.core.matrix.operators._PLUS_.cljs$core$IFn$_invoke$arity$variadic(G__49550,G__49551,seq49549__$2);
});

clojure.core.matrix.operators._PLUS_.cljs$lang$maxFixedArity = (2);

/**
 * Array subtraction operator. Equivalent to clojure.core.matrix/sub.
 */
clojure.core.matrix.operators._ = (function clojure$core$matrix$operators$_(var_args){
var args49599 = [];
var len__21896__auto___49615 = arguments.length;
var i__21897__auto___49616 = (0);
while(true){
if((i__21897__auto___49616 < len__21896__auto___49615)){
args49599.push((arguments[i__21897__auto___49616]));

var G__49617 = (i__21897__auto___49616 + (1));
i__21897__auto___49616 = G__49617;
continue;
} else {
}
break;
}

var G__49612 = args49599.length;
switch (G__49612) {
case 1:
return clojure.core.matrix.operators._.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.operators._.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__21919__auto__ = (new cljs.core.IndexedSeq(args49599.slice((2)),(0),null));
return clojure.core.matrix.operators._.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__21919__auto__);

}
});

clojure.core.matrix.operators._.cljs$core$IFn$_invoke$arity$1 = (function (a){
return clojure.core.matrix.negate.call(null,a);
});

clojure.core.matrix.operators._.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
if((typeof a === 'number') && (typeof b === 'number')){
return (a - b);
} else {
return clojure.core.matrix.sub.call(null,a,b);
}
});

clojure.core.matrix.operators._.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,more){
return cljs.core.reduce.call(null,clojure.core.matrix.operators._,clojure.core.matrix.operators._.call(null,a,b),more);
});

clojure.core.matrix.operators._.cljs$lang$applyTo = (function (seq49600){
var G__49601 = cljs.core.first.call(null,seq49600);
var seq49600__$1 = cljs.core.next.call(null,seq49600);
var G__49603 = cljs.core.first.call(null,seq49600__$1);
var seq49600__$2 = cljs.core.next.call(null,seq49600__$1);
return clojure.core.matrix.operators._.cljs$core$IFn$_invoke$arity$variadic(G__49601,G__49603,seq49600__$2);
});

clojure.core.matrix.operators._.cljs$lang$maxFixedArity = (2);

/**
 * Element-wise matrix division. Equivalent to clojure.core.matrix/div.
 */
clojure.core.matrix.operators._SLASH_ = (function clojure$core$matrix$operators$_SLASH_(var_args){
var args49632 = [];
var len__21896__auto___49644 = arguments.length;
var i__21897__auto___49646 = (0);
while(true){
if((i__21897__auto___49646 < len__21896__auto___49644)){
args49632.push((arguments[i__21897__auto___49646]));

var G__49649 = (i__21897__auto___49646 + (1));
i__21897__auto___49646 = G__49649;
continue;
} else {
}
break;
}

var G__49639 = args49632.length;
switch (G__49639) {
case 1:
return clojure.core.matrix.operators._SLASH_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.operators._SLASH_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__21919__auto__ = (new cljs.core.IndexedSeq(args49632.slice((2)),(0),null));
return clojure.core.matrix.operators._SLASH_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__21919__auto__);

}
});

clojure.core.matrix.operators._SLASH_.cljs$core$IFn$_invoke$arity$1 = (function (a){
return clojure.core.matrix.div.call(null,a);
});

clojure.core.matrix.operators._SLASH_.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return clojure.core.matrix.div.call(null,a,b);
});

clojure.core.matrix.operators._SLASH_.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,more){
return cljs.core.reduce.call(null,clojure.core.matrix.div,clojure.core.matrix.div.call(null,a,b),more);
});

clojure.core.matrix.operators._SLASH_.cljs$lang$applyTo = (function (seq49633){
var G__49634 = cljs.core.first.call(null,seq49633);
var seq49633__$1 = cljs.core.next.call(null,seq49633);
var G__49635 = cljs.core.first.call(null,seq49633__$1);
var seq49633__$2 = cljs.core.next.call(null,seq49633__$1);
return clojure.core.matrix.operators._SLASH_.cljs$core$IFn$_invoke$arity$variadic(G__49634,G__49635,seq49633__$2);
});

clojure.core.matrix.operators._SLASH_.cljs$lang$maxFixedArity = (2);

/**
 * Numerical array comparison. Equivalent to reducing with clojure.core.matrix/equals.
 */
clojure.core.matrix.operators._EQ__EQ_ = (function clojure$core$matrix$operators$_EQ__EQ_(var_args){
var args49688 = [];
var len__21896__auto___49706 = arguments.length;
var i__21897__auto___49707 = (0);
while(true){
if((i__21897__auto___49707 < len__21896__auto___49706)){
args49688.push((arguments[i__21897__auto___49707]));

var G__49708 = (i__21897__auto___49707 + (1));
i__21897__auto___49707 = G__49708;
continue;
} else {
}
break;
}

var G__49703 = args49688.length;
switch (G__49703) {
case 0:
return clojure.core.matrix.operators._EQ__EQ_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return clojure.core.matrix.operators._EQ__EQ_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.operators._EQ__EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__21919__auto__ = (new cljs.core.IndexedSeq(args49688.slice((2)),(0),null));
return clojure.core.matrix.operators._EQ__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__21919__auto__);

}
});

clojure.core.matrix.operators._EQ__EQ_.cljs$core$IFn$_invoke$arity$0 = (function (){
return true;
});

clojure.core.matrix.operators._EQ__EQ_.cljs$core$IFn$_invoke$arity$1 = (function (a){
return true;
});

clojure.core.matrix.operators._EQ__EQ_.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return clojure.core.matrix.equals.call(null,a,b);
});

clojure.core.matrix.operators._EQ__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,more){
return cljs.core.reduce.call(null,(function (r,m){
var and__20663__auto__ = r;
if(cljs.core.truth_(and__20663__auto__)){
return clojure.core.matrix.operators._EQ__EQ_.call(null,a,m);
} else {
return and__20663__auto__;
}
}),clojure.core.matrix.operators._EQ__EQ_.call(null,a,b),more);
});

clojure.core.matrix.operators._EQ__EQ_.cljs$lang$applyTo = (function (seq49689){
var G__49690 = cljs.core.first.call(null,seq49689);
var seq49689__$1 = cljs.core.next.call(null,seq49689);
var G__49691 = cljs.core.first.call(null,seq49689__$1);
var seq49689__$2 = cljs.core.next.call(null,seq49689__$1);
return clojure.core.matrix.operators._EQ__EQ_.cljs$core$IFn$_invoke$arity$variadic(G__49690,G__49691,seq49689__$2);
});

clojure.core.matrix.operators._EQ__EQ_.cljs$lang$maxFixedArity = (2);

/**
 * Inplace matrix addition operator
 */
clojure.core.matrix.operators._PLUS__EQ_ = (function clojure$core$matrix$operators$_PLUS__EQ_(var_args){
var args49722 = [];
var len__21896__auto___49742 = arguments.length;
var i__21897__auto___49743 = (0);
while(true){
if((i__21897__auto___49743 < len__21896__auto___49742)){
args49722.push((arguments[i__21897__auto___49743]));

var G__49744 = (i__21897__auto___49743 + (1));
i__21897__auto___49743 = G__49744;
continue;
} else {
}
break;
}

var G__49727 = args49722.length;
switch (G__49727) {
case 1:
return clojure.core.matrix.operators._PLUS__EQ_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.operators._PLUS__EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__21919__auto__ = (new cljs.core.IndexedSeq(args49722.slice((2)),(0),null));
return clojure.core.matrix.operators._PLUS__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__21919__auto__);

}
});

clojure.core.matrix.operators._PLUS__EQ_.cljs$core$IFn$_invoke$arity$1 = (function (a){
return a;
});

clojure.core.matrix.operators._PLUS__EQ_.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return clojure.core.matrix.add_BANG_.call(null,a,b);
});

clojure.core.matrix.operators._PLUS__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,more){
clojure.core.matrix.add_BANG_.call(null,a,b);

var seq__49729 = cljs.core.seq.call(null,more);
var chunk__49730 = null;
var count__49731 = (0);
var i__49732 = (0);
while(true){
if((i__49732 < count__49731)){
var m = cljs.core._nth.call(null,chunk__49730,i__49732);
clojure.core.matrix.add_BANG_.call(null,a,m);

var G__49749 = seq__49729;
var G__49750 = chunk__49730;
var G__49751 = count__49731;
var G__49752 = (i__49732 + (1));
seq__49729 = G__49749;
chunk__49730 = G__49750;
count__49731 = G__49751;
i__49732 = G__49752;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__49729);
if(temp__6753__auto__){
var seq__49729__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49729__$1)){
var c__21586__auto__ = cljs.core.chunk_first.call(null,seq__49729__$1);
var G__49753 = cljs.core.chunk_rest.call(null,seq__49729__$1);
var G__49754 = c__21586__auto__;
var G__49755 = cljs.core.count.call(null,c__21586__auto__);
var G__49756 = (0);
seq__49729 = G__49753;
chunk__49730 = G__49754;
count__49731 = G__49755;
i__49732 = G__49756;
continue;
} else {
var m = cljs.core.first.call(null,seq__49729__$1);
clojure.core.matrix.add_BANG_.call(null,a,m);

var G__49759 = cljs.core.next.call(null,seq__49729__$1);
var G__49760 = null;
var G__49761 = (0);
var G__49762 = (0);
seq__49729 = G__49759;
chunk__49730 = G__49760;
count__49731 = G__49761;
i__49732 = G__49762;
continue;
}
} else {
return null;
}
}
break;
}
});

clojure.core.matrix.operators._PLUS__EQ_.cljs$lang$applyTo = (function (seq49723){
var G__49724 = cljs.core.first.call(null,seq49723);
var seq49723__$1 = cljs.core.next.call(null,seq49723);
var G__49725 = cljs.core.first.call(null,seq49723__$1);
var seq49723__$2 = cljs.core.next.call(null,seq49723__$1);
return clojure.core.matrix.operators._PLUS__EQ_.cljs$core$IFn$_invoke$arity$variadic(G__49724,G__49725,seq49723__$2);
});

clojure.core.matrix.operators._PLUS__EQ_.cljs$lang$maxFixedArity = (2);

/**
 * Inplace matrix subtraction operator
 */
clojure.core.matrix.operators.__EQ_ = (function clojure$core$matrix$operators$__EQ_(var_args){
var args49764 = [];
var len__21896__auto___49776 = arguments.length;
var i__21897__auto___49778 = (0);
while(true){
if((i__21897__auto___49778 < len__21896__auto___49776)){
args49764.push((arguments[i__21897__auto___49778]));

var G__49779 = (i__21897__auto___49778 + (1));
i__21897__auto___49778 = G__49779;
continue;
} else {
}
break;
}

var G__49769 = args49764.length;
switch (G__49769) {
case 1:
return clojure.core.matrix.operators.__EQ_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.operators.__EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__21919__auto__ = (new cljs.core.IndexedSeq(args49764.slice((2)),(0),null));
return clojure.core.matrix.operators.__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__21919__auto__);

}
});

clojure.core.matrix.operators.__EQ_.cljs$core$IFn$_invoke$arity$1 = (function (a){
return a;
});

clojure.core.matrix.operators.__EQ_.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return clojure.core.matrix.sub_BANG_.call(null,a,b);
});

clojure.core.matrix.operators.__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,more){
clojure.core.matrix.sub_BANG_.call(null,a,b);

var seq__49770 = cljs.core.seq.call(null,more);
var chunk__49771 = null;
var count__49772 = (0);
var i__49773 = (0);
while(true){
if((i__49773 < count__49772)){
var m = cljs.core._nth.call(null,chunk__49771,i__49773);
clojure.core.matrix.sub_BANG_.call(null,a,m);

var G__49784 = seq__49770;
var G__49785 = chunk__49771;
var G__49786 = count__49772;
var G__49787 = (i__49773 + (1));
seq__49770 = G__49784;
chunk__49771 = G__49785;
count__49772 = G__49786;
i__49773 = G__49787;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__49770);
if(temp__6753__auto__){
var seq__49770__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49770__$1)){
var c__21586__auto__ = cljs.core.chunk_first.call(null,seq__49770__$1);
var G__49788 = cljs.core.chunk_rest.call(null,seq__49770__$1);
var G__49789 = c__21586__auto__;
var G__49790 = cljs.core.count.call(null,c__21586__auto__);
var G__49791 = (0);
seq__49770 = G__49788;
chunk__49771 = G__49789;
count__49772 = G__49790;
i__49773 = G__49791;
continue;
} else {
var m = cljs.core.first.call(null,seq__49770__$1);
clojure.core.matrix.sub_BANG_.call(null,a,m);

var G__49792 = cljs.core.next.call(null,seq__49770__$1);
var G__49793 = null;
var G__49794 = (0);
var G__49795 = (0);
seq__49770 = G__49792;
chunk__49771 = G__49793;
count__49772 = G__49794;
i__49773 = G__49795;
continue;
}
} else {
return null;
}
}
break;
}
});

clojure.core.matrix.operators.__EQ_.cljs$lang$applyTo = (function (seq49765){
var G__49766 = cljs.core.first.call(null,seq49765);
var seq49765__$1 = cljs.core.next.call(null,seq49765);
var G__49767 = cljs.core.first.call(null,seq49765__$1);
var seq49765__$2 = cljs.core.next.call(null,seq49765__$1);
return clojure.core.matrix.operators.__EQ_.cljs$core$IFn$_invoke$arity$variadic(G__49766,G__49767,seq49765__$2);
});

clojure.core.matrix.operators.__EQ_.cljs$lang$maxFixedArity = (2);

/**
 * Inplace matrix multiplication operator
 */
clojure.core.matrix.operators._STAR__EQ_ = (function clojure$core$matrix$operators$_STAR__EQ_(var_args){
var args49799 = [];
var len__21896__auto___49809 = arguments.length;
var i__21897__auto___49810 = (0);
while(true){
if((i__21897__auto___49810 < len__21896__auto___49809)){
args49799.push((arguments[i__21897__auto___49810]));

var G__49811 = (i__21897__auto___49810 + (1));
i__21897__auto___49810 = G__49811;
continue;
} else {
}
break;
}

var G__49804 = args49799.length;
switch (G__49804) {
case 1:
return clojure.core.matrix.operators._STAR__EQ_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.operators._STAR__EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__21919__auto__ = (new cljs.core.IndexedSeq(args49799.slice((2)),(0),null));
return clojure.core.matrix.operators._STAR__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__21919__auto__);

}
});

clojure.core.matrix.operators._STAR__EQ_.cljs$core$IFn$_invoke$arity$1 = (function (a){
return a;
});

clojure.core.matrix.operators._STAR__EQ_.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return clojure.core.matrix.mul_BANG_.call(null,a,b);
});

clojure.core.matrix.operators._STAR__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,more){
clojure.core.matrix.mul_BANG_.call(null,a,b);

var seq__49805 = cljs.core.seq.call(null,more);
var chunk__49806 = null;
var count__49807 = (0);
var i__49808 = (0);
while(true){
if((i__49808 < count__49807)){
var m = cljs.core._nth.call(null,chunk__49806,i__49808);
clojure.core.matrix.mul_BANG_.call(null,a,m);

var G__49816 = seq__49805;
var G__49817 = chunk__49806;
var G__49818 = count__49807;
var G__49819 = (i__49808 + (1));
seq__49805 = G__49816;
chunk__49806 = G__49817;
count__49807 = G__49818;
i__49808 = G__49819;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__49805);
if(temp__6753__auto__){
var seq__49805__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49805__$1)){
var c__21586__auto__ = cljs.core.chunk_first.call(null,seq__49805__$1);
var G__49823 = cljs.core.chunk_rest.call(null,seq__49805__$1);
var G__49824 = c__21586__auto__;
var G__49825 = cljs.core.count.call(null,c__21586__auto__);
var G__49826 = (0);
seq__49805 = G__49823;
chunk__49806 = G__49824;
count__49807 = G__49825;
i__49808 = G__49826;
continue;
} else {
var m = cljs.core.first.call(null,seq__49805__$1);
clojure.core.matrix.mul_BANG_.call(null,a,m);

var G__49827 = cljs.core.next.call(null,seq__49805__$1);
var G__49828 = null;
var G__49829 = (0);
var G__49830 = (0);
seq__49805 = G__49827;
chunk__49806 = G__49828;
count__49807 = G__49829;
i__49808 = G__49830;
continue;
}
} else {
return null;
}
}
break;
}
});

clojure.core.matrix.operators._STAR__EQ_.cljs$lang$applyTo = (function (seq49800){
var G__49801 = cljs.core.first.call(null,seq49800);
var seq49800__$1 = cljs.core.next.call(null,seq49800);
var G__49802 = cljs.core.first.call(null,seq49800__$1);
var seq49800__$2 = cljs.core.next.call(null,seq49800__$1);
return clojure.core.matrix.operators._STAR__EQ_.cljs$core$IFn$_invoke$arity$variadic(G__49801,G__49802,seq49800__$2);
});

clojure.core.matrix.operators._STAR__EQ_.cljs$lang$maxFixedArity = (2);

/**
 * Inplace matrix division operator
 */
clojure.core.matrix.operators.div_EQ_ = (function clojure$core$matrix$operators$div_EQ_(var_args){
var args49834 = [];
var len__21896__auto___49847 = arguments.length;
var i__21897__auto___49848 = (0);
while(true){
if((i__21897__auto___49848 < len__21896__auto___49847)){
args49834.push((arguments[i__21897__auto___49848]));

var G__49849 = (i__21897__auto___49848 + (1));
i__21897__auto___49848 = G__49849;
continue;
} else {
}
break;
}

var G__49840 = args49834.length;
switch (G__49840) {
case 1:
return clojure.core.matrix.operators.div_EQ_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.operators.div_EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__21919__auto__ = (new cljs.core.IndexedSeq(args49834.slice((2)),(0),null));
return clojure.core.matrix.operators.div_EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__21919__auto__);

}
});

clojure.core.matrix.operators.div_EQ_.cljs$core$IFn$_invoke$arity$1 = (function (a){
return a;
});

clojure.core.matrix.operators.div_EQ_.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return clojure.core.matrix.div_BANG_.call(null,a,b);
});

clojure.core.matrix.operators.div_EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,more){
clojure.core.matrix.div_BANG_.call(null,a,b);

var seq__49843 = cljs.core.seq.call(null,more);
var chunk__49844 = null;
var count__49845 = (0);
var i__49846 = (0);
while(true){
if((i__49846 < count__49845)){
var m = cljs.core._nth.call(null,chunk__49844,i__49846);
clojure.core.matrix.div_BANG_.call(null,a,m);

var G__49854 = seq__49843;
var G__49855 = chunk__49844;
var G__49856 = count__49845;
var G__49857 = (i__49846 + (1));
seq__49843 = G__49854;
chunk__49844 = G__49855;
count__49845 = G__49856;
i__49846 = G__49857;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__49843);
if(temp__6753__auto__){
var seq__49843__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49843__$1)){
var c__21586__auto__ = cljs.core.chunk_first.call(null,seq__49843__$1);
var G__49858 = cljs.core.chunk_rest.call(null,seq__49843__$1);
var G__49859 = c__21586__auto__;
var G__49860 = cljs.core.count.call(null,c__21586__auto__);
var G__49861 = (0);
seq__49843 = G__49858;
chunk__49844 = G__49859;
count__49845 = G__49860;
i__49846 = G__49861;
continue;
} else {
var m = cljs.core.first.call(null,seq__49843__$1);
clojure.core.matrix.div_BANG_.call(null,a,m);

var G__49862 = cljs.core.next.call(null,seq__49843__$1);
var G__49863 = null;
var G__49864 = (0);
var G__49865 = (0);
seq__49843 = G__49862;
chunk__49844 = G__49863;
count__49845 = G__49864;
i__49846 = G__49865;
continue;
}
} else {
return null;
}
}
break;
}
});

clojure.core.matrix.operators.div_EQ_.cljs$lang$applyTo = (function (seq49835){
var G__49836 = cljs.core.first.call(null,seq49835);
var seq49835__$1 = cljs.core.next.call(null,seq49835);
var G__49837 = cljs.core.first.call(null,seq49835__$1);
var seq49835__$2 = cljs.core.next.call(null,seq49835__$1);
return clojure.core.matrix.operators.div_EQ_.cljs$core$IFn$_invoke$arity$variadic(G__49836,G__49837,seq49835__$2);
});

clojure.core.matrix.operators.div_EQ_.cljs$lang$maxFixedArity = (2);

/**
 * Computes the element-wise min of arrays
 */
clojure.core.matrix.operators.min = (function clojure$core$matrix$operators$min(var_args){
var args49866 = [];
var len__21896__auto___49872 = arguments.length;
var i__21897__auto___49873 = (0);
while(true){
if((i__21897__auto___49873 < len__21896__auto___49872)){
args49866.push((arguments[i__21897__auto___49873]));

var G__49874 = (i__21897__auto___49873 + (1));
i__21897__auto___49873 = G__49874;
continue;
} else {
}
break;
}

var G__49871 = args49866.length;
switch (G__49871) {
case 1:
return clojure.core.matrix.operators.min.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.operators.min.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__21919__auto__ = (new cljs.core.IndexedSeq(args49866.slice((2)),(0),null));
return clojure.core.matrix.operators.min.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__21919__auto__);

}
});

clojure.core.matrix.operators.min.cljs$core$IFn$_invoke$arity$1 = (function (a){
return a;
});

clojure.core.matrix.operators.min.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return clojure.core.matrix.eif.call(null,clojure.core.matrix.sub.call(null,a,b),b,a);
});

clojure.core.matrix.operators.min.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,more){
return cljs.core.reduce.call(null,clojure.core.matrix.operators.min,clojure.core.matrix.operators.min.call(null,a,b),more);
});

clojure.core.matrix.operators.min.cljs$lang$applyTo = (function (seq49867){
var G__49868 = cljs.core.first.call(null,seq49867);
var seq49867__$1 = cljs.core.next.call(null,seq49867);
var G__49869 = cljs.core.first.call(null,seq49867__$1);
var seq49867__$2 = cljs.core.next.call(null,seq49867__$1);
return clojure.core.matrix.operators.min.cljs$core$IFn$_invoke$arity$variadic(G__49868,G__49869,seq49867__$2);
});

clojure.core.matrix.operators.min.cljs$lang$maxFixedArity = (2);

/**
 * Computes the element-wise max of arrays
 */
clojure.core.matrix.operators.max = (function clojure$core$matrix$operators$max(var_args){
var args49876 = [];
var len__21896__auto___49882 = arguments.length;
var i__21897__auto___49883 = (0);
while(true){
if((i__21897__auto___49883 < len__21896__auto___49882)){
args49876.push((arguments[i__21897__auto___49883]));

var G__49884 = (i__21897__auto___49883 + (1));
i__21897__auto___49883 = G__49884;
continue;
} else {
}
break;
}

var G__49881 = args49876.length;
switch (G__49881) {
case 1:
return clojure.core.matrix.operators.max.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.operators.max.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__21919__auto__ = (new cljs.core.IndexedSeq(args49876.slice((2)),(0),null));
return clojure.core.matrix.operators.max.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__21919__auto__);

}
});

clojure.core.matrix.operators.max.cljs$core$IFn$_invoke$arity$1 = (function (a){
return a;
});

clojure.core.matrix.operators.max.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return clojure.core.matrix.eif.call(null,clojure.core.matrix.sub.call(null,a,b),a,b);
});

clojure.core.matrix.operators.max.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,more){
return cljs.core.reduce.call(null,clojure.core.matrix.operators.min,clojure.core.matrix.operators.min.call(null,a,b),more);
});

clojure.core.matrix.operators.max.cljs$lang$applyTo = (function (seq49877){
var G__49878 = cljs.core.first.call(null,seq49877);
var seq49877__$1 = cljs.core.next.call(null,seq49877);
var G__49879 = cljs.core.first.call(null,seq49877__$1);
var seq49877__$2 = cljs.core.next.call(null,seq49877__$1);
return clojure.core.matrix.operators.max.cljs$core$IFn$_invoke$arity$variadic(G__49878,G__49879,seq49877__$2);
});

clojure.core.matrix.operators.max.cljs$lang$maxFixedArity = (2);


//# sourceMappingURL=operators.js.map