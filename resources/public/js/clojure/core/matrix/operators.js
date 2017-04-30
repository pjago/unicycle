// Compiled by ClojureScript 1.9.521 {}
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
var args58261 = [];
var len__28543__auto___58267 = arguments.length;
var i__28544__auto___58268 = (0);
while(true){
if((i__28544__auto___58268 < len__28543__auto___58267)){
args58261.push((arguments[i__28544__auto___58268]));

var G__58269 = (i__28544__auto___58268 + (1));
i__28544__auto___58268 = G__58269;
continue;
} else {
}
break;
}

var G__58266 = args58261.length;
switch (G__58266) {
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
var argseq__28566__auto__ = (new cljs.core.IndexedSeq(args58261.slice((2)),(0),null));
return clojure.core.matrix.operators._PLUS_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__28566__auto__);

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

clojure.core.matrix.operators._PLUS_.cljs$lang$applyTo = (function (seq58262){
var G__58263 = cljs.core.first.call(null,seq58262);
var seq58262__$1 = cljs.core.next.call(null,seq58262);
var G__58264 = cljs.core.first.call(null,seq58262__$1);
var seq58262__$2 = cljs.core.next.call(null,seq58262__$1);
return clojure.core.matrix.operators._PLUS_.cljs$core$IFn$_invoke$arity$variadic(G__58263,G__58264,seq58262__$2);
});

clojure.core.matrix.operators._PLUS_.cljs$lang$maxFixedArity = (2);

/**
 * Array subtraction operator. Equivalent to clojure.core.matrix/sub.
 */
clojure.core.matrix.operators._ = (function clojure$core$matrix$operators$_(var_args){
var args58271 = [];
var len__28543__auto___58277 = arguments.length;
var i__28544__auto___58278 = (0);
while(true){
if((i__28544__auto___58278 < len__28543__auto___58277)){
args58271.push((arguments[i__28544__auto___58278]));

var G__58279 = (i__28544__auto___58278 + (1));
i__28544__auto___58278 = G__58279;
continue;
} else {
}
break;
}

var G__58276 = args58271.length;
switch (G__58276) {
case 1:
return clojure.core.matrix.operators._.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.operators._.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__28566__auto__ = (new cljs.core.IndexedSeq(args58271.slice((2)),(0),null));
return clojure.core.matrix.operators._.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__28566__auto__);

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

clojure.core.matrix.operators._.cljs$lang$applyTo = (function (seq58272){
var G__58273 = cljs.core.first.call(null,seq58272);
var seq58272__$1 = cljs.core.next.call(null,seq58272);
var G__58274 = cljs.core.first.call(null,seq58272__$1);
var seq58272__$2 = cljs.core.next.call(null,seq58272__$1);
return clojure.core.matrix.operators._.cljs$core$IFn$_invoke$arity$variadic(G__58273,G__58274,seq58272__$2);
});

clojure.core.matrix.operators._.cljs$lang$maxFixedArity = (2);

/**
 * Element-wise matrix division. Equivalent to clojure.core.matrix/div.
 */
clojure.core.matrix.operators._SLASH_ = (function clojure$core$matrix$operators$_SLASH_(var_args){
var args58281 = [];
var len__28543__auto___58287 = arguments.length;
var i__28544__auto___58288 = (0);
while(true){
if((i__28544__auto___58288 < len__28543__auto___58287)){
args58281.push((arguments[i__28544__auto___58288]));

var G__58289 = (i__28544__auto___58288 + (1));
i__28544__auto___58288 = G__58289;
continue;
} else {
}
break;
}

var G__58286 = args58281.length;
switch (G__58286) {
case 1:
return clojure.core.matrix.operators._SLASH_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.operators._SLASH_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__28566__auto__ = (new cljs.core.IndexedSeq(args58281.slice((2)),(0),null));
return clojure.core.matrix.operators._SLASH_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__28566__auto__);

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

clojure.core.matrix.operators._SLASH_.cljs$lang$applyTo = (function (seq58282){
var G__58283 = cljs.core.first.call(null,seq58282);
var seq58282__$1 = cljs.core.next.call(null,seq58282);
var G__58284 = cljs.core.first.call(null,seq58282__$1);
var seq58282__$2 = cljs.core.next.call(null,seq58282__$1);
return clojure.core.matrix.operators._SLASH_.cljs$core$IFn$_invoke$arity$variadic(G__58283,G__58284,seq58282__$2);
});

clojure.core.matrix.operators._SLASH_.cljs$lang$maxFixedArity = (2);

/**
 * Numerical array comparison. Equivalent to reducing with clojure.core.matrix/equals.
 */
clojure.core.matrix.operators._EQ__EQ_ = (function clojure$core$matrix$operators$_EQ__EQ_(var_args){
var args58291 = [];
var len__28543__auto___58297 = arguments.length;
var i__28544__auto___58298 = (0);
while(true){
if((i__28544__auto___58298 < len__28543__auto___58297)){
args58291.push((arguments[i__28544__auto___58298]));

var G__58299 = (i__28544__auto___58298 + (1));
i__28544__auto___58298 = G__58299;
continue;
} else {
}
break;
}

var G__58296 = args58291.length;
switch (G__58296) {
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
var argseq__28566__auto__ = (new cljs.core.IndexedSeq(args58291.slice((2)),(0),null));
return clojure.core.matrix.operators._EQ__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__28566__auto__);

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
var and__27310__auto__ = r;
if(cljs.core.truth_(and__27310__auto__)){
return clojure.core.matrix.operators._EQ__EQ_.call(null,a,m);
} else {
return and__27310__auto__;
}
}),clojure.core.matrix.operators._EQ__EQ_.call(null,a,b),more);
});

clojure.core.matrix.operators._EQ__EQ_.cljs$lang$applyTo = (function (seq58292){
var G__58293 = cljs.core.first.call(null,seq58292);
var seq58292__$1 = cljs.core.next.call(null,seq58292);
var G__58294 = cljs.core.first.call(null,seq58292__$1);
var seq58292__$2 = cljs.core.next.call(null,seq58292__$1);
return clojure.core.matrix.operators._EQ__EQ_.cljs$core$IFn$_invoke$arity$variadic(G__58293,G__58294,seq58292__$2);
});

clojure.core.matrix.operators._EQ__EQ_.cljs$lang$maxFixedArity = (2);

/**
 * Inplace matrix addition operator
 */
clojure.core.matrix.operators._PLUS__EQ_ = (function clojure$core$matrix$operators$_PLUS__EQ_(var_args){
var args58301 = [];
var len__28543__auto___58311 = arguments.length;
var i__28544__auto___58312 = (0);
while(true){
if((i__28544__auto___58312 < len__28543__auto___58311)){
args58301.push((arguments[i__28544__auto___58312]));

var G__58313 = (i__28544__auto___58312 + (1));
i__28544__auto___58312 = G__58313;
continue;
} else {
}
break;
}

var G__58306 = args58301.length;
switch (G__58306) {
case 1:
return clojure.core.matrix.operators._PLUS__EQ_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.operators._PLUS__EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__28566__auto__ = (new cljs.core.IndexedSeq(args58301.slice((2)),(0),null));
return clojure.core.matrix.operators._PLUS__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__28566__auto__);

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

var seq__58307 = cljs.core.seq.call(null,more);
var chunk__58308 = null;
var count__58309 = (0);
var i__58310 = (0);
while(true){
if((i__58310 < count__58309)){
var m = cljs.core._nth.call(null,chunk__58308,i__58310);
clojure.core.matrix.add_BANG_.call(null,a,m);

var G__58315 = seq__58307;
var G__58316 = chunk__58308;
var G__58317 = count__58309;
var G__58318 = (i__58310 + (1));
seq__58307 = G__58315;
chunk__58308 = G__58316;
count__58309 = G__58317;
i__58310 = G__58318;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__58307);
if(temp__6753__auto__){
var seq__58307__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__58307__$1)){
var c__28233__auto__ = cljs.core.chunk_first.call(null,seq__58307__$1);
var G__58319 = cljs.core.chunk_rest.call(null,seq__58307__$1);
var G__58320 = c__28233__auto__;
var G__58321 = cljs.core.count.call(null,c__28233__auto__);
var G__58322 = (0);
seq__58307 = G__58319;
chunk__58308 = G__58320;
count__58309 = G__58321;
i__58310 = G__58322;
continue;
} else {
var m = cljs.core.first.call(null,seq__58307__$1);
clojure.core.matrix.add_BANG_.call(null,a,m);

var G__58323 = cljs.core.next.call(null,seq__58307__$1);
var G__58324 = null;
var G__58325 = (0);
var G__58326 = (0);
seq__58307 = G__58323;
chunk__58308 = G__58324;
count__58309 = G__58325;
i__58310 = G__58326;
continue;
}
} else {
return null;
}
}
break;
}
});

clojure.core.matrix.operators._PLUS__EQ_.cljs$lang$applyTo = (function (seq58302){
var G__58303 = cljs.core.first.call(null,seq58302);
var seq58302__$1 = cljs.core.next.call(null,seq58302);
var G__58304 = cljs.core.first.call(null,seq58302__$1);
var seq58302__$2 = cljs.core.next.call(null,seq58302__$1);
return clojure.core.matrix.operators._PLUS__EQ_.cljs$core$IFn$_invoke$arity$variadic(G__58303,G__58304,seq58302__$2);
});

clojure.core.matrix.operators._PLUS__EQ_.cljs$lang$maxFixedArity = (2);

/**
 * Inplace matrix subtraction operator
 */
clojure.core.matrix.operators.__EQ_ = (function clojure$core$matrix$operators$__EQ_(var_args){
var args58327 = [];
var len__28543__auto___58337 = arguments.length;
var i__28544__auto___58338 = (0);
while(true){
if((i__28544__auto___58338 < len__28543__auto___58337)){
args58327.push((arguments[i__28544__auto___58338]));

var G__58339 = (i__28544__auto___58338 + (1));
i__28544__auto___58338 = G__58339;
continue;
} else {
}
break;
}

var G__58332 = args58327.length;
switch (G__58332) {
case 1:
return clojure.core.matrix.operators.__EQ_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.operators.__EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__28566__auto__ = (new cljs.core.IndexedSeq(args58327.slice((2)),(0),null));
return clojure.core.matrix.operators.__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__28566__auto__);

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

var seq__58333 = cljs.core.seq.call(null,more);
var chunk__58334 = null;
var count__58335 = (0);
var i__58336 = (0);
while(true){
if((i__58336 < count__58335)){
var m = cljs.core._nth.call(null,chunk__58334,i__58336);
clojure.core.matrix.sub_BANG_.call(null,a,m);

var G__58341 = seq__58333;
var G__58342 = chunk__58334;
var G__58343 = count__58335;
var G__58344 = (i__58336 + (1));
seq__58333 = G__58341;
chunk__58334 = G__58342;
count__58335 = G__58343;
i__58336 = G__58344;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__58333);
if(temp__6753__auto__){
var seq__58333__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__58333__$1)){
var c__28233__auto__ = cljs.core.chunk_first.call(null,seq__58333__$1);
var G__58345 = cljs.core.chunk_rest.call(null,seq__58333__$1);
var G__58346 = c__28233__auto__;
var G__58347 = cljs.core.count.call(null,c__28233__auto__);
var G__58348 = (0);
seq__58333 = G__58345;
chunk__58334 = G__58346;
count__58335 = G__58347;
i__58336 = G__58348;
continue;
} else {
var m = cljs.core.first.call(null,seq__58333__$1);
clojure.core.matrix.sub_BANG_.call(null,a,m);

var G__58349 = cljs.core.next.call(null,seq__58333__$1);
var G__58350 = null;
var G__58351 = (0);
var G__58352 = (0);
seq__58333 = G__58349;
chunk__58334 = G__58350;
count__58335 = G__58351;
i__58336 = G__58352;
continue;
}
} else {
return null;
}
}
break;
}
});

clojure.core.matrix.operators.__EQ_.cljs$lang$applyTo = (function (seq58328){
var G__58329 = cljs.core.first.call(null,seq58328);
var seq58328__$1 = cljs.core.next.call(null,seq58328);
var G__58330 = cljs.core.first.call(null,seq58328__$1);
var seq58328__$2 = cljs.core.next.call(null,seq58328__$1);
return clojure.core.matrix.operators.__EQ_.cljs$core$IFn$_invoke$arity$variadic(G__58329,G__58330,seq58328__$2);
});

clojure.core.matrix.operators.__EQ_.cljs$lang$maxFixedArity = (2);

/**
 * Inplace matrix multiplication operator
 */
clojure.core.matrix.operators._STAR__EQ_ = (function clojure$core$matrix$operators$_STAR__EQ_(var_args){
var args58353 = [];
var len__28543__auto___58363 = arguments.length;
var i__28544__auto___58364 = (0);
while(true){
if((i__28544__auto___58364 < len__28543__auto___58363)){
args58353.push((arguments[i__28544__auto___58364]));

var G__58365 = (i__28544__auto___58364 + (1));
i__28544__auto___58364 = G__58365;
continue;
} else {
}
break;
}

var G__58358 = args58353.length;
switch (G__58358) {
case 1:
return clojure.core.matrix.operators._STAR__EQ_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.operators._STAR__EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__28566__auto__ = (new cljs.core.IndexedSeq(args58353.slice((2)),(0),null));
return clojure.core.matrix.operators._STAR__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__28566__auto__);

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

var seq__58359 = cljs.core.seq.call(null,more);
var chunk__58360 = null;
var count__58361 = (0);
var i__58362 = (0);
while(true){
if((i__58362 < count__58361)){
var m = cljs.core._nth.call(null,chunk__58360,i__58362);
clojure.core.matrix.mul_BANG_.call(null,a,m);

var G__58367 = seq__58359;
var G__58368 = chunk__58360;
var G__58369 = count__58361;
var G__58370 = (i__58362 + (1));
seq__58359 = G__58367;
chunk__58360 = G__58368;
count__58361 = G__58369;
i__58362 = G__58370;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__58359);
if(temp__6753__auto__){
var seq__58359__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__58359__$1)){
var c__28233__auto__ = cljs.core.chunk_first.call(null,seq__58359__$1);
var G__58371 = cljs.core.chunk_rest.call(null,seq__58359__$1);
var G__58372 = c__28233__auto__;
var G__58373 = cljs.core.count.call(null,c__28233__auto__);
var G__58374 = (0);
seq__58359 = G__58371;
chunk__58360 = G__58372;
count__58361 = G__58373;
i__58362 = G__58374;
continue;
} else {
var m = cljs.core.first.call(null,seq__58359__$1);
clojure.core.matrix.mul_BANG_.call(null,a,m);

var G__58375 = cljs.core.next.call(null,seq__58359__$1);
var G__58376 = null;
var G__58377 = (0);
var G__58378 = (0);
seq__58359 = G__58375;
chunk__58360 = G__58376;
count__58361 = G__58377;
i__58362 = G__58378;
continue;
}
} else {
return null;
}
}
break;
}
});

clojure.core.matrix.operators._STAR__EQ_.cljs$lang$applyTo = (function (seq58354){
var G__58355 = cljs.core.first.call(null,seq58354);
var seq58354__$1 = cljs.core.next.call(null,seq58354);
var G__58356 = cljs.core.first.call(null,seq58354__$1);
var seq58354__$2 = cljs.core.next.call(null,seq58354__$1);
return clojure.core.matrix.operators._STAR__EQ_.cljs$core$IFn$_invoke$arity$variadic(G__58355,G__58356,seq58354__$2);
});

clojure.core.matrix.operators._STAR__EQ_.cljs$lang$maxFixedArity = (2);

/**
 * Inplace matrix division operator
 */
clojure.core.matrix.operators.div_EQ_ = (function clojure$core$matrix$operators$div_EQ_(var_args){
var args58379 = [];
var len__28543__auto___58389 = arguments.length;
var i__28544__auto___58390 = (0);
while(true){
if((i__28544__auto___58390 < len__28543__auto___58389)){
args58379.push((arguments[i__28544__auto___58390]));

var G__58391 = (i__28544__auto___58390 + (1));
i__28544__auto___58390 = G__58391;
continue;
} else {
}
break;
}

var G__58384 = args58379.length;
switch (G__58384) {
case 1:
return clojure.core.matrix.operators.div_EQ_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.operators.div_EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__28566__auto__ = (new cljs.core.IndexedSeq(args58379.slice((2)),(0),null));
return clojure.core.matrix.operators.div_EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__28566__auto__);

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

var seq__58385 = cljs.core.seq.call(null,more);
var chunk__58386 = null;
var count__58387 = (0);
var i__58388 = (0);
while(true){
if((i__58388 < count__58387)){
var m = cljs.core._nth.call(null,chunk__58386,i__58388);
clojure.core.matrix.div_BANG_.call(null,a,m);

var G__58393 = seq__58385;
var G__58394 = chunk__58386;
var G__58395 = count__58387;
var G__58396 = (i__58388 + (1));
seq__58385 = G__58393;
chunk__58386 = G__58394;
count__58387 = G__58395;
i__58388 = G__58396;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__58385);
if(temp__6753__auto__){
var seq__58385__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__58385__$1)){
var c__28233__auto__ = cljs.core.chunk_first.call(null,seq__58385__$1);
var G__58397 = cljs.core.chunk_rest.call(null,seq__58385__$1);
var G__58398 = c__28233__auto__;
var G__58399 = cljs.core.count.call(null,c__28233__auto__);
var G__58400 = (0);
seq__58385 = G__58397;
chunk__58386 = G__58398;
count__58387 = G__58399;
i__58388 = G__58400;
continue;
} else {
var m = cljs.core.first.call(null,seq__58385__$1);
clojure.core.matrix.div_BANG_.call(null,a,m);

var G__58401 = cljs.core.next.call(null,seq__58385__$1);
var G__58402 = null;
var G__58403 = (0);
var G__58404 = (0);
seq__58385 = G__58401;
chunk__58386 = G__58402;
count__58387 = G__58403;
i__58388 = G__58404;
continue;
}
} else {
return null;
}
}
break;
}
});

clojure.core.matrix.operators.div_EQ_.cljs$lang$applyTo = (function (seq58380){
var G__58381 = cljs.core.first.call(null,seq58380);
var seq58380__$1 = cljs.core.next.call(null,seq58380);
var G__58382 = cljs.core.first.call(null,seq58380__$1);
var seq58380__$2 = cljs.core.next.call(null,seq58380__$1);
return clojure.core.matrix.operators.div_EQ_.cljs$core$IFn$_invoke$arity$variadic(G__58381,G__58382,seq58380__$2);
});

clojure.core.matrix.operators.div_EQ_.cljs$lang$maxFixedArity = (2);

/**
 * Computes the element-wise min of arrays
 */
clojure.core.matrix.operators.min = (function clojure$core$matrix$operators$min(var_args){
var args58405 = [];
var len__28543__auto___58411 = arguments.length;
var i__28544__auto___58412 = (0);
while(true){
if((i__28544__auto___58412 < len__28543__auto___58411)){
args58405.push((arguments[i__28544__auto___58412]));

var G__58413 = (i__28544__auto___58412 + (1));
i__28544__auto___58412 = G__58413;
continue;
} else {
}
break;
}

var G__58410 = args58405.length;
switch (G__58410) {
case 1:
return clojure.core.matrix.operators.min.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.operators.min.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__28566__auto__ = (new cljs.core.IndexedSeq(args58405.slice((2)),(0),null));
return clojure.core.matrix.operators.min.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__28566__auto__);

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

clojure.core.matrix.operators.min.cljs$lang$applyTo = (function (seq58406){
var G__58407 = cljs.core.first.call(null,seq58406);
var seq58406__$1 = cljs.core.next.call(null,seq58406);
var G__58408 = cljs.core.first.call(null,seq58406__$1);
var seq58406__$2 = cljs.core.next.call(null,seq58406__$1);
return clojure.core.matrix.operators.min.cljs$core$IFn$_invoke$arity$variadic(G__58407,G__58408,seq58406__$2);
});

clojure.core.matrix.operators.min.cljs$lang$maxFixedArity = (2);

/**
 * Computes the element-wise max of arrays
 */
clojure.core.matrix.operators.max = (function clojure$core$matrix$operators$max(var_args){
var args58415 = [];
var len__28543__auto___58421 = arguments.length;
var i__28544__auto___58422 = (0);
while(true){
if((i__28544__auto___58422 < len__28543__auto___58421)){
args58415.push((arguments[i__28544__auto___58422]));

var G__58423 = (i__28544__auto___58422 + (1));
i__28544__auto___58422 = G__58423;
continue;
} else {
}
break;
}

var G__58420 = args58415.length;
switch (G__58420) {
case 1:
return clojure.core.matrix.operators.max.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.operators.max.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__28566__auto__ = (new cljs.core.IndexedSeq(args58415.slice((2)),(0),null));
return clojure.core.matrix.operators.max.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__28566__auto__);

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

clojure.core.matrix.operators.max.cljs$lang$applyTo = (function (seq58416){
var G__58417 = cljs.core.first.call(null,seq58416);
var seq58416__$1 = cljs.core.next.call(null,seq58416);
var G__58418 = cljs.core.first.call(null,seq58416__$1);
var seq58416__$2 = cljs.core.next.call(null,seq58416__$1);
return clojure.core.matrix.operators.max.cljs$core$IFn$_invoke$arity$variadic(G__58417,G__58418,seq58416__$2);
});

clojure.core.matrix.operators.max.cljs$lang$maxFixedArity = (2);


//# sourceMappingURL=operators.js.map?rel=1493584957413