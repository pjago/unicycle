// Compiled by ClojureScript 1.9.521 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args41826 = [];
var len__28543__auto___41850 = arguments.length;
var i__28544__auto___41851 = (0);
while(true){
if((i__28544__auto___41851 < len__28543__auto___41850)){
args41826.push((arguments[i__28544__auto___41851]));

var G__41852 = (i__28544__auto___41851 + (1));
i__28544__auto___41851 = G__41852;
continue;
} else {
}
break;
}

var G__41834 = args41826.length;
switch (G__41834) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args41826.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async41836 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41836 = (function (f,blockable,meta41837){
this.f = f;
this.blockable = blockable;
this.meta41837 = meta41837;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async41836.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41838,meta41837__$1){
var self__ = this;
var _41838__$1 = this;
return (new cljs.core.async.t_cljs$core$async41836(self__.f,self__.blockable,meta41837__$1));
});

cljs.core.async.t_cljs$core$async41836.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41838){
var self__ = this;
var _41838__$1 = this;
return self__.meta41837;
});

cljs.core.async.t_cljs$core$async41836.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async41836.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async41836.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async41836.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async41836.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta41837","meta41837",-1387913041,null)], null);
});

cljs.core.async.t_cljs$core$async41836.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async41836.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41836";

cljs.core.async.t_cljs$core$async41836.cljs$lang$ctorPrWriter = (function (this__27979__auto__,writer__27980__auto__,opt__27981__auto__){
return cljs.core._write.call(null,writer__27980__auto__,"cljs.core.async/t_cljs$core$async41836");
});

cljs.core.async.__GT_t_cljs$core$async41836 = (function cljs$core$async$__GT_t_cljs$core$async41836(f__$1,blockable__$1,meta41837){
return (new cljs.core.async.t_cljs$core$async41836(f__$1,blockable__$1,meta41837));
});

}

return (new cljs.core.async.t_cljs$core$async41836(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args41886 = [];
var len__28543__auto___41899 = arguments.length;
var i__28544__auto___41903 = (0);
while(true){
if((i__28544__auto___41903 < len__28543__auto___41899)){
args41886.push((arguments[i__28544__auto___41903]));

var G__41907 = (i__28544__auto___41903 + (1));
i__28544__auto___41903 = G__41907;
continue;
} else {
}
break;
}

var G__41892 = args41886.length;
switch (G__41892) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args41886.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("buffer must be supplied when transducer is"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args41919 = [];
var len__28543__auto___41922 = arguments.length;
var i__28544__auto___41923 = (0);
while(true){
if((i__28544__auto___41923 < len__28543__auto___41922)){
args41919.push((arguments[i__28544__auto___41923]));

var G__41924 = (i__28544__auto___41923 + (1));
i__28544__auto___41923 = G__41924;
continue;
} else {
}
break;
}

var G__41921 = args41919.length;
switch (G__41921) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args41919.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args41927 = [];
var len__28543__auto___41942 = arguments.length;
var i__28544__auto___41943 = (0);
while(true){
if((i__28544__auto___41943 < len__28543__auto___41942)){
args41927.push((arguments[i__28544__auto___41943]));

var G__41944 = (i__28544__auto___41943 + (1));
i__28544__auto___41943 = G__41944;
continue;
} else {
}
break;
}

var G__41935 = args41927.length;
switch (G__41935) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args41927.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_41949 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_41949);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_41949,ret){
return (function (){
return fn1.call(null,val_41949);
});})(val_41949,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args41953 = [];
var len__28543__auto___41958 = arguments.length;
var i__28544__auto___41959 = (0);
while(true){
if((i__28544__auto___41959 < len__28543__auto___41958)){
args41953.push((arguments[i__28544__auto___41959]));

var G__41960 = (i__28544__auto___41959 + (1));
i__28544__auto___41959 = G__41960;
continue;
} else {
}
break;
}

var G__41957 = args41953.length;
switch (G__41957) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args41953.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__6751__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__6751__auto__)){
var ret = temp__6751__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__6751__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__6751__auto__)){
var retb = temp__6751__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__6751__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__6751__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__28343__auto___41977 = n;
var x_41978 = (0);
while(true){
if((x_41978 < n__28343__auto___41977)){
(a[x_41978] = (0));

var G__41979 = (x_41978 + (1));
x_41978 = G__41979;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__41980 = (i + (1));
i = G__41980;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async41987 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41987 = (function (flag,meta41988){
this.flag = flag;
this.meta41988 = meta41988;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async41987.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_41989,meta41988__$1){
var self__ = this;
var _41989__$1 = this;
return (new cljs.core.async.t_cljs$core$async41987(self__.flag,meta41988__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async41987.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_41989){
var self__ = this;
var _41989__$1 = this;
return self__.meta41988;
});})(flag))
;

cljs.core.async.t_cljs$core$async41987.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async41987.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async41987.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async41987.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async41987.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta41988","meta41988",431968168,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async41987.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async41987.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41987";

cljs.core.async.t_cljs$core$async41987.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__27979__auto__,writer__27980__auto__,opt__27981__auto__){
return cljs.core._write.call(null,writer__27980__auto__,"cljs.core.async/t_cljs$core$async41987");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async41987 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async41987(flag__$1,meta41988){
return (new cljs.core.async.t_cljs$core$async41987(flag__$1,meta41988));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async41987(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async42013 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42013 = (function (flag,cb,meta42014){
this.flag = flag;
this.cb = cb;
this.meta42014 = meta42014;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async42013.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42015,meta42014__$1){
var self__ = this;
var _42015__$1 = this;
return (new cljs.core.async.t_cljs$core$async42013(self__.flag,self__.cb,meta42014__$1));
});

cljs.core.async.t_cljs$core$async42013.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42015){
var self__ = this;
var _42015__$1 = this;
return self__.meta42014;
});

cljs.core.async.t_cljs$core$async42013.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42013.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async42013.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async42013.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async42013.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta42014","meta42014",-653765077,null)], null);
});

cljs.core.async.t_cljs$core$async42013.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42013.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42013";

cljs.core.async.t_cljs$core$async42013.cljs$lang$ctorPrWriter = (function (this__27979__auto__,writer__27980__auto__,opt__27981__auto__){
return cljs.core._write.call(null,writer__27980__auto__,"cljs.core.async/t_cljs$core$async42013");
});

cljs.core.async.__GT_t_cljs$core$async42013 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async42013(flag__$1,cb__$1,meta42014){
return (new cljs.core.async.t_cljs$core$async42013(flag__$1,cb__$1,meta42014));
});

}

return (new cljs.core.async.t_cljs$core$async42013(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__42055_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__42055_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__42056_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__42056_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__27322__auto__ = wport;
if(cljs.core.truth_(or__27322__auto__)){
return or__27322__auto__;
} else {
return port;
}
})()], null));
} else {
var G__42097 = (i + (1));
i = G__42097;
continue;
}
} else {
return null;
}
break;
}
})();
var or__27322__auto__ = ret;
if(cljs.core.truth_(or__27322__auto__)){
return or__27322__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__6753__auto__ = (function (){var and__27310__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__27310__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__27310__auto__;
}
})();
if(cljs.core.truth_(temp__6753__auto__)){
var got = temp__6753__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__28550__auto__ = [];
var len__28543__auto___42135 = arguments.length;
var i__28544__auto___42136 = (0);
while(true){
if((i__28544__auto___42136 < len__28543__auto___42135)){
args__28550__auto__.push((arguments[i__28544__auto___42136]));

var G__42139 = (i__28544__auto___42136 + (1));
i__28544__auto___42136 = G__42139;
continue;
} else {
}
break;
}

var argseq__28551__auto__ = ((((1) < args__28550__auto__.length))?(new cljs.core.IndexedSeq(args__28550__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28551__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__42123){
var map__42124 = p__42123;
var map__42124__$1 = ((((!((map__42124 == null)))?((((map__42124.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42124.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42124):map__42124);
var opts = map__42124__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq42113){
var G__42114 = cljs.core.first.call(null,seq42113);
var seq42113__$1 = cljs.core.next.call(null,seq42113);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__42114,seq42113__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args42147 = [];
var len__28543__auto___42247 = arguments.length;
var i__28544__auto___42248 = (0);
while(true){
if((i__28544__auto___42248 < len__28543__auto___42247)){
args42147.push((arguments[i__28544__auto___42248]));

var G__42252 = (i__28544__auto___42248 + (1));
i__28544__auto___42248 = G__42252;
continue;
} else {
}
break;
}

var G__42152 = args42147.length;
switch (G__42152) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args42147.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__41728__auto___42261 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41728__auto___42261){
return (function (){
var f__41729__auto__ = (function (){var switch__41485__auto__ = ((function (c__41728__auto___42261){
return (function (state_42199){
var state_val_42204 = (state_42199[(1)]);
if((state_val_42204 === (7))){
var inst_42194 = (state_42199[(2)]);
var state_42199__$1 = state_42199;
var statearr_42211_42265 = state_42199__$1;
(statearr_42211_42265[(2)] = inst_42194);

(statearr_42211_42265[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42204 === (1))){
var state_42199__$1 = state_42199;
var statearr_42212_42274 = state_42199__$1;
(statearr_42212_42274[(2)] = null);

(statearr_42212_42274[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42204 === (4))){
var inst_42167 = (state_42199[(7)]);
var inst_42167__$1 = (state_42199[(2)]);
var inst_42172 = (inst_42167__$1 == null);
var state_42199__$1 = (function (){var statearr_42217 = state_42199;
(statearr_42217[(7)] = inst_42167__$1);

return statearr_42217;
})();
if(cljs.core.truth_(inst_42172)){
var statearr_42218_42275 = state_42199__$1;
(statearr_42218_42275[(1)] = (5));

} else {
var statearr_42219_42276 = state_42199__$1;
(statearr_42219_42276[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42204 === (13))){
var state_42199__$1 = state_42199;
var statearr_42222_42279 = state_42199__$1;
(statearr_42222_42279[(2)] = null);

(statearr_42222_42279[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42204 === (6))){
var inst_42167 = (state_42199[(7)]);
var state_42199__$1 = state_42199;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42199__$1,(11),to,inst_42167);
} else {
if((state_val_42204 === (3))){
var inst_42196 = (state_42199[(2)]);
var state_42199__$1 = state_42199;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42199__$1,inst_42196);
} else {
if((state_val_42204 === (12))){
var state_42199__$1 = state_42199;
var statearr_42225_42299 = state_42199__$1;
(statearr_42225_42299[(2)] = null);

(statearr_42225_42299[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42204 === (2))){
var state_42199__$1 = state_42199;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42199__$1,(4),from);
} else {
if((state_val_42204 === (11))){
var inst_42187 = (state_42199[(2)]);
var state_42199__$1 = state_42199;
if(cljs.core.truth_(inst_42187)){
var statearr_42226_42315 = state_42199__$1;
(statearr_42226_42315[(1)] = (12));

} else {
var statearr_42227_42321 = state_42199__$1;
(statearr_42227_42321[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42204 === (9))){
var state_42199__$1 = state_42199;
var statearr_42228_42329 = state_42199__$1;
(statearr_42228_42329[(2)] = null);

(statearr_42228_42329[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42204 === (5))){
var state_42199__$1 = state_42199;
if(cljs.core.truth_(close_QMARK_)){
var statearr_42232_42338 = state_42199__$1;
(statearr_42232_42338[(1)] = (8));

} else {
var statearr_42233_42340 = state_42199__$1;
(statearr_42233_42340[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42204 === (14))){
var inst_42192 = (state_42199[(2)]);
var state_42199__$1 = state_42199;
var statearr_42234_42355 = state_42199__$1;
(statearr_42234_42355[(2)] = inst_42192);

(statearr_42234_42355[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42204 === (10))){
var inst_42184 = (state_42199[(2)]);
var state_42199__$1 = state_42199;
var statearr_42238_42368 = state_42199__$1;
(statearr_42238_42368[(2)] = inst_42184);

(statearr_42238_42368[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42204 === (8))){
var inst_42180 = cljs.core.async.close_BANG_.call(null,to);
var state_42199__$1 = state_42199;
var statearr_42239_42377 = state_42199__$1;
(statearr_42239_42377[(2)] = inst_42180);

(statearr_42239_42377[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__41728__auto___42261))
;
return ((function (switch__41485__auto__,c__41728__auto___42261){
return (function() {
var cljs$core$async$state_machine__41486__auto__ = null;
var cljs$core$async$state_machine__41486__auto____0 = (function (){
var statearr_42243 = [null,null,null,null,null,null,null,null];
(statearr_42243[(0)] = cljs$core$async$state_machine__41486__auto__);

(statearr_42243[(1)] = (1));

return statearr_42243;
});
var cljs$core$async$state_machine__41486__auto____1 = (function (state_42199){
while(true){
var ret_value__41487__auto__ = (function (){try{while(true){
var result__41488__auto__ = switch__41485__auto__.call(null,state_42199);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41488__auto__;
}
break;
}
}catch (e42244){if((e42244 instanceof Object)){
var ex__41489__auto__ = e42244;
var statearr_42245_42417 = state_42199;
(statearr_42245_42417[(5)] = ex__41489__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42199);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42244;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41487__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42434 = state_42199;
state_42199 = G__42434;
continue;
} else {
return ret_value__41487__auto__;
}
break;
}
});
cljs$core$async$state_machine__41486__auto__ = function(state_42199){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41486__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41486__auto____1.call(this,state_42199);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__41486__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41486__auto____0;
cljs$core$async$state_machine__41486__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41486__auto____1;
return cljs$core$async$state_machine__41486__auto__;
})()
;})(switch__41485__auto__,c__41728__auto___42261))
})();
var state__41730__auto__ = (function (){var statearr_42246 = f__41729__auto__.call(null);
(statearr_42246[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41728__auto___42261);

return statearr_42246;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41730__auto__);
});})(c__41728__auto___42261))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__42752){
var vec__42753 = p__42752;
var v = cljs.core.nth.call(null,vec__42753,(0),null);
var p = cljs.core.nth.call(null,vec__42753,(1),null);
var job = vec__42753;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__41728__auto___42990 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41728__auto___42990,res,vec__42753,v,p,job,jobs,results){
return (function (){
var f__41729__auto__ = (function (){var switch__41485__auto__ = ((function (c__41728__auto___42990,res,vec__42753,v,p,job,jobs,results){
return (function (state_42761){
var state_val_42762 = (state_42761[(1)]);
if((state_val_42762 === (1))){
var state_42761__$1 = state_42761;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42761__$1,(2),res,v);
} else {
if((state_val_42762 === (2))){
var inst_42758 = (state_42761[(2)]);
var inst_42759 = cljs.core.async.close_BANG_.call(null,res);
var state_42761__$1 = (function (){var statearr_42764 = state_42761;
(statearr_42764[(7)] = inst_42758);

return statearr_42764;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42761__$1,inst_42759);
} else {
return null;
}
}
});})(c__41728__auto___42990,res,vec__42753,v,p,job,jobs,results))
;
return ((function (switch__41485__auto__,c__41728__auto___42990,res,vec__42753,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__41486__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__41486__auto____0 = (function (){
var statearr_42769 = [null,null,null,null,null,null,null,null];
(statearr_42769[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__41486__auto__);

(statearr_42769[(1)] = (1));

return statearr_42769;
});
var cljs$core$async$pipeline_STAR__$_state_machine__41486__auto____1 = (function (state_42761){
while(true){
var ret_value__41487__auto__ = (function (){try{while(true){
var result__41488__auto__ = switch__41485__auto__.call(null,state_42761);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41488__auto__;
}
break;
}
}catch (e42770){if((e42770 instanceof Object)){
var ex__41489__auto__ = e42770;
var statearr_42772_43007 = state_42761;
(statearr_42772_43007[(5)] = ex__41489__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42761);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42770;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41487__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43012 = state_42761;
state_42761 = G__43012;
continue;
} else {
return ret_value__41487__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__41486__auto__ = function(state_42761){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__41486__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__41486__auto____1.call(this,state_42761);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__41486__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__41486__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__41486__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__41486__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__41486__auto__;
})()
;})(switch__41485__auto__,c__41728__auto___42990,res,vec__42753,v,p,job,jobs,results))
})();
var state__41730__auto__ = (function (){var statearr_42776 = f__41729__auto__.call(null);
(statearr_42776[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41728__auto___42990);

return statearr_42776;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41730__auto__);
});})(c__41728__auto___42990,res,vec__42753,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__42777){
var vec__42778 = p__42777;
var v = cljs.core.nth.call(null,vec__42778,(0),null);
var p = cljs.core.nth.call(null,vec__42778,(1),null);
var job = vec__42778;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__28343__auto___43022 = n;
var __43023 = (0);
while(true){
if((__43023 < n__28343__auto___43022)){
var G__42782_43024 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__42782_43024) {
case "compute":
var c__41728__auto___43026 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__43023,c__41728__auto___43026,G__42782_43024,n__28343__auto___43022,jobs,results,process,async){
return (function (){
var f__41729__auto__ = (function (){var switch__41485__auto__ = ((function (__43023,c__41728__auto___43026,G__42782_43024,n__28343__auto___43022,jobs,results,process,async){
return (function (state_42795){
var state_val_42796 = (state_42795[(1)]);
if((state_val_42796 === (1))){
var state_42795__$1 = state_42795;
var statearr_42798_43033 = state_42795__$1;
(statearr_42798_43033[(2)] = null);

(statearr_42798_43033[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42796 === (2))){
var state_42795__$1 = state_42795;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42795__$1,(4),jobs);
} else {
if((state_val_42796 === (3))){
var inst_42793 = (state_42795[(2)]);
var state_42795__$1 = state_42795;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42795__$1,inst_42793);
} else {
if((state_val_42796 === (4))){
var inst_42785 = (state_42795[(2)]);
var inst_42786 = process.call(null,inst_42785);
var state_42795__$1 = state_42795;
if(cljs.core.truth_(inst_42786)){
var statearr_42799_43038 = state_42795__$1;
(statearr_42799_43038[(1)] = (5));

} else {
var statearr_42800_43040 = state_42795__$1;
(statearr_42800_43040[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42796 === (5))){
var state_42795__$1 = state_42795;
var statearr_42801_43042 = state_42795__$1;
(statearr_42801_43042[(2)] = null);

(statearr_42801_43042[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42796 === (6))){
var state_42795__$1 = state_42795;
var statearr_42802_43044 = state_42795__$1;
(statearr_42802_43044[(2)] = null);

(statearr_42802_43044[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42796 === (7))){
var inst_42791 = (state_42795[(2)]);
var state_42795__$1 = state_42795;
var statearr_42803_43045 = state_42795__$1;
(statearr_42803_43045[(2)] = inst_42791);

(statearr_42803_43045[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__43023,c__41728__auto___43026,G__42782_43024,n__28343__auto___43022,jobs,results,process,async))
;
return ((function (__43023,switch__41485__auto__,c__41728__auto___43026,G__42782_43024,n__28343__auto___43022,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__41486__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__41486__auto____0 = (function (){
var statearr_42807 = [null,null,null,null,null,null,null];
(statearr_42807[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__41486__auto__);

(statearr_42807[(1)] = (1));

return statearr_42807;
});
var cljs$core$async$pipeline_STAR__$_state_machine__41486__auto____1 = (function (state_42795){
while(true){
var ret_value__41487__auto__ = (function (){try{while(true){
var result__41488__auto__ = switch__41485__auto__.call(null,state_42795);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41488__auto__;
}
break;
}
}catch (e42808){if((e42808 instanceof Object)){
var ex__41489__auto__ = e42808;
var statearr_42809_43047 = state_42795;
(statearr_42809_43047[(5)] = ex__41489__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42795);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42808;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41487__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43048 = state_42795;
state_42795 = G__43048;
continue;
} else {
return ret_value__41487__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__41486__auto__ = function(state_42795){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__41486__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__41486__auto____1.call(this,state_42795);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__41486__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__41486__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__41486__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__41486__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__41486__auto__;
})()
;})(__43023,switch__41485__auto__,c__41728__auto___43026,G__42782_43024,n__28343__auto___43022,jobs,results,process,async))
})();
var state__41730__auto__ = (function (){var statearr_42810 = f__41729__auto__.call(null);
(statearr_42810[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41728__auto___43026);

return statearr_42810;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41730__auto__);
});})(__43023,c__41728__auto___43026,G__42782_43024,n__28343__auto___43022,jobs,results,process,async))
);


break;
case "async":
var c__41728__auto___43049 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__43023,c__41728__auto___43049,G__42782_43024,n__28343__auto___43022,jobs,results,process,async){
return (function (){
var f__41729__auto__ = (function (){var switch__41485__auto__ = ((function (__43023,c__41728__auto___43049,G__42782_43024,n__28343__auto___43022,jobs,results,process,async){
return (function (state_42823){
var state_val_42824 = (state_42823[(1)]);
if((state_val_42824 === (1))){
var state_42823__$1 = state_42823;
var statearr_42825_43050 = state_42823__$1;
(statearr_42825_43050[(2)] = null);

(statearr_42825_43050[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42824 === (2))){
var state_42823__$1 = state_42823;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42823__$1,(4),jobs);
} else {
if((state_val_42824 === (3))){
var inst_42821 = (state_42823[(2)]);
var state_42823__$1 = state_42823;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42823__$1,inst_42821);
} else {
if((state_val_42824 === (4))){
var inst_42813 = (state_42823[(2)]);
var inst_42814 = async.call(null,inst_42813);
var state_42823__$1 = state_42823;
if(cljs.core.truth_(inst_42814)){
var statearr_42826_43054 = state_42823__$1;
(statearr_42826_43054[(1)] = (5));

} else {
var statearr_42827_43055 = state_42823__$1;
(statearr_42827_43055[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42824 === (5))){
var state_42823__$1 = state_42823;
var statearr_42828_43056 = state_42823__$1;
(statearr_42828_43056[(2)] = null);

(statearr_42828_43056[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42824 === (6))){
var state_42823__$1 = state_42823;
var statearr_42829_43057 = state_42823__$1;
(statearr_42829_43057[(2)] = null);

(statearr_42829_43057[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42824 === (7))){
var inst_42819 = (state_42823[(2)]);
var state_42823__$1 = state_42823;
var statearr_42830_43058 = state_42823__$1;
(statearr_42830_43058[(2)] = inst_42819);

(statearr_42830_43058[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__43023,c__41728__auto___43049,G__42782_43024,n__28343__auto___43022,jobs,results,process,async))
;
return ((function (__43023,switch__41485__auto__,c__41728__auto___43049,G__42782_43024,n__28343__auto___43022,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__41486__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__41486__auto____0 = (function (){
var statearr_42834 = [null,null,null,null,null,null,null];
(statearr_42834[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__41486__auto__);

(statearr_42834[(1)] = (1));

return statearr_42834;
});
var cljs$core$async$pipeline_STAR__$_state_machine__41486__auto____1 = (function (state_42823){
while(true){
var ret_value__41487__auto__ = (function (){try{while(true){
var result__41488__auto__ = switch__41485__auto__.call(null,state_42823);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41488__auto__;
}
break;
}
}catch (e42836){if((e42836 instanceof Object)){
var ex__41489__auto__ = e42836;
var statearr_42837_43059 = state_42823;
(statearr_42837_43059[(5)] = ex__41489__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42823);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42836;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41487__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43060 = state_42823;
state_42823 = G__43060;
continue;
} else {
return ret_value__41487__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__41486__auto__ = function(state_42823){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__41486__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__41486__auto____1.call(this,state_42823);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__41486__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__41486__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__41486__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__41486__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__41486__auto__;
})()
;})(__43023,switch__41485__auto__,c__41728__auto___43049,G__42782_43024,n__28343__auto___43022,jobs,results,process,async))
})();
var state__41730__auto__ = (function (){var statearr_42838 = f__41729__auto__.call(null);
(statearr_42838[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41728__auto___43049);

return statearr_42838;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41730__auto__);
});})(__43023,c__41728__auto___43049,G__42782_43024,n__28343__auto___43022,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)].join('')));

}

var G__43063 = (__43023 + (1));
__43023 = G__43063;
continue;
} else {
}
break;
}

var c__41728__auto___43065 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41728__auto___43065,jobs,results,process,async){
return (function (){
var f__41729__auto__ = (function (){var switch__41485__auto__ = ((function (c__41728__auto___43065,jobs,results,process,async){
return (function (state_42860){
var state_val_42861 = (state_42860[(1)]);
if((state_val_42861 === (1))){
var state_42860__$1 = state_42860;
var statearr_42862_43067 = state_42860__$1;
(statearr_42862_43067[(2)] = null);

(statearr_42862_43067[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42861 === (2))){
var state_42860__$1 = state_42860;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42860__$1,(4),from);
} else {
if((state_val_42861 === (3))){
var inst_42858 = (state_42860[(2)]);
var state_42860__$1 = state_42860;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42860__$1,inst_42858);
} else {
if((state_val_42861 === (4))){
var inst_42841 = (state_42860[(7)]);
var inst_42841__$1 = (state_42860[(2)]);
var inst_42842 = (inst_42841__$1 == null);
var state_42860__$1 = (function (){var statearr_42863 = state_42860;
(statearr_42863[(7)] = inst_42841__$1);

return statearr_42863;
})();
if(cljs.core.truth_(inst_42842)){
var statearr_42864_43068 = state_42860__$1;
(statearr_42864_43068[(1)] = (5));

} else {
var statearr_42865_43069 = state_42860__$1;
(statearr_42865_43069[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42861 === (5))){
var inst_42844 = cljs.core.async.close_BANG_.call(null,jobs);
var state_42860__$1 = state_42860;
var statearr_42866_43070 = state_42860__$1;
(statearr_42866_43070[(2)] = inst_42844);

(statearr_42866_43070[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42861 === (6))){
var inst_42846 = (state_42860[(8)]);
var inst_42841 = (state_42860[(7)]);
var inst_42846__$1 = cljs.core.async.chan.call(null,(1));
var inst_42847 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_42848 = [inst_42841,inst_42846__$1];
var inst_42849 = (new cljs.core.PersistentVector(null,2,(5),inst_42847,inst_42848,null));
var state_42860__$1 = (function (){var statearr_42867 = state_42860;
(statearr_42867[(8)] = inst_42846__$1);

return statearr_42867;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42860__$1,(8),jobs,inst_42849);
} else {
if((state_val_42861 === (7))){
var inst_42856 = (state_42860[(2)]);
var state_42860__$1 = state_42860;
var statearr_42868_43071 = state_42860__$1;
(statearr_42868_43071[(2)] = inst_42856);

(statearr_42868_43071[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42861 === (8))){
var inst_42846 = (state_42860[(8)]);
var inst_42851 = (state_42860[(2)]);
var state_42860__$1 = (function (){var statearr_42869 = state_42860;
(statearr_42869[(9)] = inst_42851);

return statearr_42869;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42860__$1,(9),results,inst_42846);
} else {
if((state_val_42861 === (9))){
var inst_42853 = (state_42860[(2)]);
var state_42860__$1 = (function (){var statearr_42870 = state_42860;
(statearr_42870[(10)] = inst_42853);

return statearr_42870;
})();
var statearr_42871_43072 = state_42860__$1;
(statearr_42871_43072[(2)] = null);

(statearr_42871_43072[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__41728__auto___43065,jobs,results,process,async))
;
return ((function (switch__41485__auto__,c__41728__auto___43065,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__41486__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__41486__auto____0 = (function (){
var statearr_42879 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_42879[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__41486__auto__);

(statearr_42879[(1)] = (1));

return statearr_42879;
});
var cljs$core$async$pipeline_STAR__$_state_machine__41486__auto____1 = (function (state_42860){
while(true){
var ret_value__41487__auto__ = (function (){try{while(true){
var result__41488__auto__ = switch__41485__auto__.call(null,state_42860);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41488__auto__;
}
break;
}
}catch (e42880){if((e42880 instanceof Object)){
var ex__41489__auto__ = e42880;
var statearr_42884_43073 = state_42860;
(statearr_42884_43073[(5)] = ex__41489__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42860);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42880;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41487__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43074 = state_42860;
state_42860 = G__43074;
continue;
} else {
return ret_value__41487__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__41486__auto__ = function(state_42860){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__41486__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__41486__auto____1.call(this,state_42860);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__41486__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__41486__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__41486__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__41486__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__41486__auto__;
})()
;})(switch__41485__auto__,c__41728__auto___43065,jobs,results,process,async))
})();
var state__41730__auto__ = (function (){var statearr_42886 = f__41729__auto__.call(null);
(statearr_42886[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41728__auto___43065);

return statearr_42886;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41730__auto__);
});})(c__41728__auto___43065,jobs,results,process,async))
);


var c__41728__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41728__auto__,jobs,results,process,async){
return (function (){
var f__41729__auto__ = (function (){var switch__41485__auto__ = ((function (c__41728__auto__,jobs,results,process,async){
return (function (state_42929){
var state_val_42930 = (state_42929[(1)]);
if((state_val_42930 === (7))){
var inst_42925 = (state_42929[(2)]);
var state_42929__$1 = state_42929;
var statearr_42931_43075 = state_42929__$1;
(statearr_42931_43075[(2)] = inst_42925);

(statearr_42931_43075[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42930 === (20))){
var state_42929__$1 = state_42929;
var statearr_42932_43076 = state_42929__$1;
(statearr_42932_43076[(2)] = null);

(statearr_42932_43076[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42930 === (1))){
var state_42929__$1 = state_42929;
var statearr_42934_43077 = state_42929__$1;
(statearr_42934_43077[(2)] = null);

(statearr_42934_43077[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42930 === (4))){
var inst_42889 = (state_42929[(7)]);
var inst_42889__$1 = (state_42929[(2)]);
var inst_42890 = (inst_42889__$1 == null);
var state_42929__$1 = (function (){var statearr_42935 = state_42929;
(statearr_42935[(7)] = inst_42889__$1);

return statearr_42935;
})();
if(cljs.core.truth_(inst_42890)){
var statearr_42936_43081 = state_42929__$1;
(statearr_42936_43081[(1)] = (5));

} else {
var statearr_42937_43083 = state_42929__$1;
(statearr_42937_43083[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42930 === (15))){
var inst_42907 = (state_42929[(8)]);
var state_42929__$1 = state_42929;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42929__$1,(18),to,inst_42907);
} else {
if((state_val_42930 === (21))){
var inst_42920 = (state_42929[(2)]);
var state_42929__$1 = state_42929;
var statearr_42942_43088 = state_42929__$1;
(statearr_42942_43088[(2)] = inst_42920);

(statearr_42942_43088[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42930 === (13))){
var inst_42922 = (state_42929[(2)]);
var state_42929__$1 = (function (){var statearr_42943 = state_42929;
(statearr_42943[(9)] = inst_42922);

return statearr_42943;
})();
var statearr_42945_43093 = state_42929__$1;
(statearr_42945_43093[(2)] = null);

(statearr_42945_43093[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42930 === (6))){
var inst_42889 = (state_42929[(7)]);
var state_42929__$1 = state_42929;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42929__$1,(11),inst_42889);
} else {
if((state_val_42930 === (17))){
var inst_42915 = (state_42929[(2)]);
var state_42929__$1 = state_42929;
if(cljs.core.truth_(inst_42915)){
var statearr_42949_43101 = state_42929__$1;
(statearr_42949_43101[(1)] = (19));

} else {
var statearr_42950_43102 = state_42929__$1;
(statearr_42950_43102[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42930 === (3))){
var inst_42927 = (state_42929[(2)]);
var state_42929__$1 = state_42929;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42929__$1,inst_42927);
} else {
if((state_val_42930 === (12))){
var inst_42904 = (state_42929[(10)]);
var state_42929__$1 = state_42929;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42929__$1,(14),inst_42904);
} else {
if((state_val_42930 === (2))){
var state_42929__$1 = state_42929;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42929__$1,(4),results);
} else {
if((state_val_42930 === (19))){
var state_42929__$1 = state_42929;
var statearr_42952_43105 = state_42929__$1;
(statearr_42952_43105[(2)] = null);

(statearr_42952_43105[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42930 === (11))){
var inst_42904 = (state_42929[(2)]);
var state_42929__$1 = (function (){var statearr_42954 = state_42929;
(statearr_42954[(10)] = inst_42904);

return statearr_42954;
})();
var statearr_42955_43110 = state_42929__$1;
(statearr_42955_43110[(2)] = null);

(statearr_42955_43110[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42930 === (9))){
var state_42929__$1 = state_42929;
var statearr_42959_43112 = state_42929__$1;
(statearr_42959_43112[(2)] = null);

(statearr_42959_43112[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42930 === (5))){
var state_42929__$1 = state_42929;
if(cljs.core.truth_(close_QMARK_)){
var statearr_42960_43117 = state_42929__$1;
(statearr_42960_43117[(1)] = (8));

} else {
var statearr_42962_43120 = state_42929__$1;
(statearr_42962_43120[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42930 === (14))){
var inst_42907 = (state_42929[(8)]);
var inst_42909 = (state_42929[(11)]);
var inst_42907__$1 = (state_42929[(2)]);
var inst_42908 = (inst_42907__$1 == null);
var inst_42909__$1 = cljs.core.not.call(null,inst_42908);
var state_42929__$1 = (function (){var statearr_42963 = state_42929;
(statearr_42963[(8)] = inst_42907__$1);

(statearr_42963[(11)] = inst_42909__$1);

return statearr_42963;
})();
if(inst_42909__$1){
var statearr_42965_43129 = state_42929__$1;
(statearr_42965_43129[(1)] = (15));

} else {
var statearr_42966_43130 = state_42929__$1;
(statearr_42966_43130[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42930 === (16))){
var inst_42909 = (state_42929[(11)]);
var state_42929__$1 = state_42929;
var statearr_42968_43134 = state_42929__$1;
(statearr_42968_43134[(2)] = inst_42909);

(statearr_42968_43134[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42930 === (10))){
var inst_42901 = (state_42929[(2)]);
var state_42929__$1 = state_42929;
var statearr_42970_43138 = state_42929__$1;
(statearr_42970_43138[(2)] = inst_42901);

(statearr_42970_43138[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42930 === (18))){
var inst_42912 = (state_42929[(2)]);
var state_42929__$1 = state_42929;
var statearr_42972_43143 = state_42929__$1;
(statearr_42972_43143[(2)] = inst_42912);

(statearr_42972_43143[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42930 === (8))){
var inst_42898 = cljs.core.async.close_BANG_.call(null,to);
var state_42929__$1 = state_42929;
var statearr_42974_43151 = state_42929__$1;
(statearr_42974_43151[(2)] = inst_42898);

(statearr_42974_43151[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__41728__auto__,jobs,results,process,async))
;
return ((function (switch__41485__auto__,c__41728__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__41486__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__41486__auto____0 = (function (){
var statearr_42980 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42980[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__41486__auto__);

(statearr_42980[(1)] = (1));

return statearr_42980;
});
var cljs$core$async$pipeline_STAR__$_state_machine__41486__auto____1 = (function (state_42929){
while(true){
var ret_value__41487__auto__ = (function (){try{while(true){
var result__41488__auto__ = switch__41485__auto__.call(null,state_42929);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41488__auto__;
}
break;
}
}catch (e42982){if((e42982 instanceof Object)){
var ex__41489__auto__ = e42982;
var statearr_42983_43162 = state_42929;
(statearr_42983_43162[(5)] = ex__41489__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42929);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42982;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41487__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43164 = state_42929;
state_42929 = G__43164;
continue;
} else {
return ret_value__41487__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__41486__auto__ = function(state_42929){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__41486__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__41486__auto____1.call(this,state_42929);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__41486__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__41486__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__41486__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__41486__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__41486__auto__;
})()
;})(switch__41485__auto__,c__41728__auto__,jobs,results,process,async))
})();
var state__41730__auto__ = (function (){var statearr_42985 = f__41729__auto__.call(null);
(statearr_42985[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41728__auto__);

return statearr_42985;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41730__auto__);
});})(c__41728__auto__,jobs,results,process,async))
);

return c__41728__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args43169 = [];
var len__28543__auto___43173 = arguments.length;
var i__28544__auto___43174 = (0);
while(true){
if((i__28544__auto___43174 < len__28543__auto___43173)){
args43169.push((arguments[i__28544__auto___43174]));

var G__43175 = (i__28544__auto___43174 + (1));
i__28544__auto___43174 = G__43175;
continue;
} else {
}
break;
}

var G__43172 = args43169.length;
switch (G__43172) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args43169.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args43181 = [];
var len__28543__auto___43193 = arguments.length;
var i__28544__auto___43201 = (0);
while(true){
if((i__28544__auto___43201 < len__28543__auto___43193)){
args43181.push((arguments[i__28544__auto___43201]));

var G__43210 = (i__28544__auto___43201 + (1));
i__28544__auto___43201 = G__43210;
continue;
} else {
}
break;
}

var G__43183 = args43181.length;
switch (G__43183) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args43181.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args43222 = [];
var len__28543__auto___43302 = arguments.length;
var i__28544__auto___43304 = (0);
while(true){
if((i__28544__auto___43304 < len__28543__auto___43302)){
args43222.push((arguments[i__28544__auto___43304]));

var G__43305 = (i__28544__auto___43304 + (1));
i__28544__auto___43304 = G__43305;
continue;
} else {
}
break;
}

var G__43225 = args43222.length;
switch (G__43225) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args43222.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__41728__auto___43321 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41728__auto___43321,tc,fc){
return (function (){
var f__41729__auto__ = (function (){var switch__41485__auto__ = ((function (c__41728__auto___43321,tc,fc){
return (function (state_43259){
var state_val_43260 = (state_43259[(1)]);
if((state_val_43260 === (7))){
var inst_43255 = (state_43259[(2)]);
var state_43259__$1 = state_43259;
var statearr_43263_43331 = state_43259__$1;
(statearr_43263_43331[(2)] = inst_43255);

(statearr_43263_43331[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43260 === (1))){
var state_43259__$1 = state_43259;
var statearr_43268_43332 = state_43259__$1;
(statearr_43268_43332[(2)] = null);

(statearr_43268_43332[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43260 === (4))){
var inst_43236 = (state_43259[(7)]);
var inst_43236__$1 = (state_43259[(2)]);
var inst_43237 = (inst_43236__$1 == null);
var state_43259__$1 = (function (){var statearr_43270 = state_43259;
(statearr_43270[(7)] = inst_43236__$1);

return statearr_43270;
})();
if(cljs.core.truth_(inst_43237)){
var statearr_43271_43333 = state_43259__$1;
(statearr_43271_43333[(1)] = (5));

} else {
var statearr_43272_43337 = state_43259__$1;
(statearr_43272_43337[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43260 === (13))){
var state_43259__$1 = state_43259;
var statearr_43273_43339 = state_43259__$1;
(statearr_43273_43339[(2)] = null);

(statearr_43273_43339[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43260 === (6))){
var inst_43236 = (state_43259[(7)]);
var inst_43242 = p.call(null,inst_43236);
var state_43259__$1 = state_43259;
if(cljs.core.truth_(inst_43242)){
var statearr_43274_43340 = state_43259__$1;
(statearr_43274_43340[(1)] = (9));

} else {
var statearr_43275_43341 = state_43259__$1;
(statearr_43275_43341[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43260 === (3))){
var inst_43257 = (state_43259[(2)]);
var state_43259__$1 = state_43259;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43259__$1,inst_43257);
} else {
if((state_val_43260 === (12))){
var state_43259__$1 = state_43259;
var statearr_43276_43343 = state_43259__$1;
(statearr_43276_43343[(2)] = null);

(statearr_43276_43343[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43260 === (2))){
var state_43259__$1 = state_43259;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43259__$1,(4),ch);
} else {
if((state_val_43260 === (11))){
var inst_43236 = (state_43259[(7)]);
var inst_43246 = (state_43259[(2)]);
var state_43259__$1 = state_43259;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43259__$1,(8),inst_43246,inst_43236);
} else {
if((state_val_43260 === (9))){
var state_43259__$1 = state_43259;
var statearr_43277_43344 = state_43259__$1;
(statearr_43277_43344[(2)] = tc);

(statearr_43277_43344[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43260 === (5))){
var inst_43239 = cljs.core.async.close_BANG_.call(null,tc);
var inst_43240 = cljs.core.async.close_BANG_.call(null,fc);
var state_43259__$1 = (function (){var statearr_43278 = state_43259;
(statearr_43278[(8)] = inst_43239);

return statearr_43278;
})();
var statearr_43279_43345 = state_43259__$1;
(statearr_43279_43345[(2)] = inst_43240);

(statearr_43279_43345[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43260 === (14))){
var inst_43253 = (state_43259[(2)]);
var state_43259__$1 = state_43259;
var statearr_43280_43346 = state_43259__$1;
(statearr_43280_43346[(2)] = inst_43253);

(statearr_43280_43346[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43260 === (10))){
var state_43259__$1 = state_43259;
var statearr_43286_43347 = state_43259__$1;
(statearr_43286_43347[(2)] = fc);

(statearr_43286_43347[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43260 === (8))){
var inst_43248 = (state_43259[(2)]);
var state_43259__$1 = state_43259;
if(cljs.core.truth_(inst_43248)){
var statearr_43288_43348 = state_43259__$1;
(statearr_43288_43348[(1)] = (12));

} else {
var statearr_43289_43349 = state_43259__$1;
(statearr_43289_43349[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__41728__auto___43321,tc,fc))
;
return ((function (switch__41485__auto__,c__41728__auto___43321,tc,fc){
return (function() {
var cljs$core$async$state_machine__41486__auto__ = null;
var cljs$core$async$state_machine__41486__auto____0 = (function (){
var statearr_43294 = [null,null,null,null,null,null,null,null,null];
(statearr_43294[(0)] = cljs$core$async$state_machine__41486__auto__);

(statearr_43294[(1)] = (1));

return statearr_43294;
});
var cljs$core$async$state_machine__41486__auto____1 = (function (state_43259){
while(true){
var ret_value__41487__auto__ = (function (){try{while(true){
var result__41488__auto__ = switch__41485__auto__.call(null,state_43259);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41488__auto__;
}
break;
}
}catch (e43296){if((e43296 instanceof Object)){
var ex__41489__auto__ = e43296;
var statearr_43298_43350 = state_43259;
(statearr_43298_43350[(5)] = ex__41489__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43259);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43296;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41487__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43353 = state_43259;
state_43259 = G__43353;
continue;
} else {
return ret_value__41487__auto__;
}
break;
}
});
cljs$core$async$state_machine__41486__auto__ = function(state_43259){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41486__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41486__auto____1.call(this,state_43259);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__41486__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41486__auto____0;
cljs$core$async$state_machine__41486__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41486__auto____1;
return cljs$core$async$state_machine__41486__auto__;
})()
;})(switch__41485__auto__,c__41728__auto___43321,tc,fc))
})();
var state__41730__auto__ = (function (){var statearr_43299 = f__41729__auto__.call(null);
(statearr_43299[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41728__auto___43321);

return statearr_43299;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41730__auto__);
});})(c__41728__auto___43321,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__41728__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41728__auto__){
return (function (){
var f__41729__auto__ = (function (){var switch__41485__auto__ = ((function (c__41728__auto__){
return (function (state_43422){
var state_val_43423 = (state_43422[(1)]);
if((state_val_43423 === (7))){
var inst_43417 = (state_43422[(2)]);
var state_43422__$1 = state_43422;
var statearr_43425_43451 = state_43422__$1;
(statearr_43425_43451[(2)] = inst_43417);

(statearr_43425_43451[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43423 === (1))){
var inst_43399 = init;
var state_43422__$1 = (function (){var statearr_43426 = state_43422;
(statearr_43426[(7)] = inst_43399);

return statearr_43426;
})();
var statearr_43427_43455 = state_43422__$1;
(statearr_43427_43455[(2)] = null);

(statearr_43427_43455[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43423 === (4))){
var inst_43403 = (state_43422[(8)]);
var inst_43403__$1 = (state_43422[(2)]);
var inst_43404 = (inst_43403__$1 == null);
var state_43422__$1 = (function (){var statearr_43428 = state_43422;
(statearr_43428[(8)] = inst_43403__$1);

return statearr_43428;
})();
if(cljs.core.truth_(inst_43404)){
var statearr_43429_43457 = state_43422__$1;
(statearr_43429_43457[(1)] = (5));

} else {
var statearr_43430_43458 = state_43422__$1;
(statearr_43430_43458[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43423 === (6))){
var inst_43408 = (state_43422[(9)]);
var inst_43403 = (state_43422[(8)]);
var inst_43399 = (state_43422[(7)]);
var inst_43408__$1 = f.call(null,inst_43399,inst_43403);
var inst_43409 = cljs.core.reduced_QMARK_.call(null,inst_43408__$1);
var state_43422__$1 = (function (){var statearr_43431 = state_43422;
(statearr_43431[(9)] = inst_43408__$1);

return statearr_43431;
})();
if(inst_43409){
var statearr_43432_43463 = state_43422__$1;
(statearr_43432_43463[(1)] = (8));

} else {
var statearr_43433_43465 = state_43422__$1;
(statearr_43433_43465[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43423 === (3))){
var inst_43419 = (state_43422[(2)]);
var state_43422__$1 = state_43422;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43422__$1,inst_43419);
} else {
if((state_val_43423 === (2))){
var state_43422__$1 = state_43422;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43422__$1,(4),ch);
} else {
if((state_val_43423 === (9))){
var inst_43408 = (state_43422[(9)]);
var inst_43399 = inst_43408;
var state_43422__$1 = (function (){var statearr_43435 = state_43422;
(statearr_43435[(7)] = inst_43399);

return statearr_43435;
})();
var statearr_43436_43466 = state_43422__$1;
(statearr_43436_43466[(2)] = null);

(statearr_43436_43466[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43423 === (5))){
var inst_43399 = (state_43422[(7)]);
var state_43422__$1 = state_43422;
var statearr_43439_43467 = state_43422__$1;
(statearr_43439_43467[(2)] = inst_43399);

(statearr_43439_43467[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43423 === (10))){
var inst_43415 = (state_43422[(2)]);
var state_43422__$1 = state_43422;
var statearr_43440_43468 = state_43422__$1;
(statearr_43440_43468[(2)] = inst_43415);

(statearr_43440_43468[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43423 === (8))){
var inst_43408 = (state_43422[(9)]);
var inst_43411 = cljs.core.deref.call(null,inst_43408);
var state_43422__$1 = state_43422;
var statearr_43442_43469 = state_43422__$1;
(statearr_43442_43469[(2)] = inst_43411);

(statearr_43442_43469[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__41728__auto__))
;
return ((function (switch__41485__auto__,c__41728__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__41486__auto__ = null;
var cljs$core$async$reduce_$_state_machine__41486__auto____0 = (function (){
var statearr_43447 = [null,null,null,null,null,null,null,null,null,null];
(statearr_43447[(0)] = cljs$core$async$reduce_$_state_machine__41486__auto__);

(statearr_43447[(1)] = (1));

return statearr_43447;
});
var cljs$core$async$reduce_$_state_machine__41486__auto____1 = (function (state_43422){
while(true){
var ret_value__41487__auto__ = (function (){try{while(true){
var result__41488__auto__ = switch__41485__auto__.call(null,state_43422);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41488__auto__;
}
break;
}
}catch (e43448){if((e43448 instanceof Object)){
var ex__41489__auto__ = e43448;
var statearr_43449_43470 = state_43422;
(statearr_43449_43470[(5)] = ex__41489__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43422);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43448;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41487__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43471 = state_43422;
state_43422 = G__43471;
continue;
} else {
return ret_value__41487__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__41486__auto__ = function(state_43422){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__41486__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__41486__auto____1.call(this,state_43422);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__41486__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__41486__auto____0;
cljs$core$async$reduce_$_state_machine__41486__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__41486__auto____1;
return cljs$core$async$reduce_$_state_machine__41486__auto__;
})()
;})(switch__41485__auto__,c__41728__auto__))
})();
var state__41730__auto__ = (function (){var statearr_43450 = f__41729__auto__.call(null);
(statearr_43450[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41728__auto__);

return statearr_43450;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41730__auto__);
});})(c__41728__auto__))
);

return c__41728__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args43472 = [];
var len__28543__auto___43528 = arguments.length;
var i__28544__auto___43529 = (0);
while(true){
if((i__28544__auto___43529 < len__28543__auto___43528)){
args43472.push((arguments[i__28544__auto___43529]));

var G__43531 = (i__28544__auto___43529 + (1));
i__28544__auto___43529 = G__43531;
continue;
} else {
}
break;
}

var G__43474 = args43472.length;
switch (G__43474) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args43472.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__41728__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41728__auto__){
return (function (){
var f__41729__auto__ = (function (){var switch__41485__auto__ = ((function (c__41728__auto__){
return (function (state_43500){
var state_val_43501 = (state_43500[(1)]);
if((state_val_43501 === (7))){
var inst_43482 = (state_43500[(2)]);
var state_43500__$1 = state_43500;
var statearr_43502_43547 = state_43500__$1;
(statearr_43502_43547[(2)] = inst_43482);

(statearr_43502_43547[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43501 === (1))){
var inst_43476 = cljs.core.seq.call(null,coll);
var inst_43477 = inst_43476;
var state_43500__$1 = (function (){var statearr_43503 = state_43500;
(statearr_43503[(7)] = inst_43477);

return statearr_43503;
})();
var statearr_43504_43550 = state_43500__$1;
(statearr_43504_43550[(2)] = null);

(statearr_43504_43550[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43501 === (4))){
var inst_43477 = (state_43500[(7)]);
var inst_43480 = cljs.core.first.call(null,inst_43477);
var state_43500__$1 = state_43500;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43500__$1,(7),ch,inst_43480);
} else {
if((state_val_43501 === (13))){
var inst_43494 = (state_43500[(2)]);
var state_43500__$1 = state_43500;
var statearr_43505_43554 = state_43500__$1;
(statearr_43505_43554[(2)] = inst_43494);

(statearr_43505_43554[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43501 === (6))){
var inst_43485 = (state_43500[(2)]);
var state_43500__$1 = state_43500;
if(cljs.core.truth_(inst_43485)){
var statearr_43506_43555 = state_43500__$1;
(statearr_43506_43555[(1)] = (8));

} else {
var statearr_43507_43556 = state_43500__$1;
(statearr_43507_43556[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43501 === (3))){
var inst_43498 = (state_43500[(2)]);
var state_43500__$1 = state_43500;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43500__$1,inst_43498);
} else {
if((state_val_43501 === (12))){
var state_43500__$1 = state_43500;
var statearr_43508_43557 = state_43500__$1;
(statearr_43508_43557[(2)] = null);

(statearr_43508_43557[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43501 === (2))){
var inst_43477 = (state_43500[(7)]);
var state_43500__$1 = state_43500;
if(cljs.core.truth_(inst_43477)){
var statearr_43509_43561 = state_43500__$1;
(statearr_43509_43561[(1)] = (4));

} else {
var statearr_43510_43562 = state_43500__$1;
(statearr_43510_43562[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43501 === (11))){
var inst_43491 = cljs.core.async.close_BANG_.call(null,ch);
var state_43500__$1 = state_43500;
var statearr_43511_43563 = state_43500__$1;
(statearr_43511_43563[(2)] = inst_43491);

(statearr_43511_43563[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43501 === (9))){
var state_43500__$1 = state_43500;
if(cljs.core.truth_(close_QMARK_)){
var statearr_43512_43564 = state_43500__$1;
(statearr_43512_43564[(1)] = (11));

} else {
var statearr_43513_43568 = state_43500__$1;
(statearr_43513_43568[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43501 === (5))){
var inst_43477 = (state_43500[(7)]);
var state_43500__$1 = state_43500;
var statearr_43514_43572 = state_43500__$1;
(statearr_43514_43572[(2)] = inst_43477);

(statearr_43514_43572[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43501 === (10))){
var inst_43496 = (state_43500[(2)]);
var state_43500__$1 = state_43500;
var statearr_43515_43574 = state_43500__$1;
(statearr_43515_43574[(2)] = inst_43496);

(statearr_43515_43574[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43501 === (8))){
var inst_43477 = (state_43500[(7)]);
var inst_43487 = cljs.core.next.call(null,inst_43477);
var inst_43477__$1 = inst_43487;
var state_43500__$1 = (function (){var statearr_43516 = state_43500;
(statearr_43516[(7)] = inst_43477__$1);

return statearr_43516;
})();
var statearr_43517_43576 = state_43500__$1;
(statearr_43517_43576[(2)] = null);

(statearr_43517_43576[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__41728__auto__))
;
return ((function (switch__41485__auto__,c__41728__auto__){
return (function() {
var cljs$core$async$state_machine__41486__auto__ = null;
var cljs$core$async$state_machine__41486__auto____0 = (function (){
var statearr_43521 = [null,null,null,null,null,null,null,null];
(statearr_43521[(0)] = cljs$core$async$state_machine__41486__auto__);

(statearr_43521[(1)] = (1));

return statearr_43521;
});
var cljs$core$async$state_machine__41486__auto____1 = (function (state_43500){
while(true){
var ret_value__41487__auto__ = (function (){try{while(true){
var result__41488__auto__ = switch__41485__auto__.call(null,state_43500);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41488__auto__;
}
break;
}
}catch (e43523){if((e43523 instanceof Object)){
var ex__41489__auto__ = e43523;
var statearr_43524_43577 = state_43500;
(statearr_43524_43577[(5)] = ex__41489__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43500);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43523;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41487__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43580 = state_43500;
state_43500 = G__43580;
continue;
} else {
return ret_value__41487__auto__;
}
break;
}
});
cljs$core$async$state_machine__41486__auto__ = function(state_43500){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41486__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41486__auto____1.call(this,state_43500);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__41486__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41486__auto____0;
cljs$core$async$state_machine__41486__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41486__auto____1;
return cljs$core$async$state_machine__41486__auto__;
})()
;})(switch__41485__auto__,c__41728__auto__))
})();
var state__41730__auto__ = (function (){var statearr_43526 = f__41729__auto__.call(null);
(statearr_43526[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41728__auto__);

return statearr_43526;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41730__auto__);
});})(c__41728__auto__))
);

return c__41728__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__28040__auto__ = (((_ == null))?null:_);
var m__28041__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__28040__auto__)]);
if(!((m__28041__auto__ == null))){
return m__28041__auto__.call(null,_);
} else {
var m__28041__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__28041__auto____$1 == null))){
return m__28041__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__28040__auto__ = (((m == null))?null:m);
var m__28041__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__28040__auto__)]);
if(!((m__28041__auto__ == null))){
return m__28041__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__28041__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__28041__auto____$1 == null))){
return m__28041__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__28040__auto__ = (((m == null))?null:m);
var m__28041__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__28040__auto__)]);
if(!((m__28041__auto__ == null))){
return m__28041__auto__.call(null,m,ch);
} else {
var m__28041__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__28041__auto____$1 == null))){
return m__28041__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__28040__auto__ = (((m == null))?null:m);
var m__28041__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__28040__auto__)]);
if(!((m__28041__auto__ == null))){
return m__28041__auto__.call(null,m);
} else {
var m__28041__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__28041__auto____$1 == null))){
return m__28041__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async43878 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43878 = (function (ch,cs,meta43879){
this.ch = ch;
this.cs = cs;
this.meta43879 = meta43879;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async43878.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_43880,meta43879__$1){
var self__ = this;
var _43880__$1 = this;
return (new cljs.core.async.t_cljs$core$async43878(self__.ch,self__.cs,meta43879__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async43878.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_43880){
var self__ = this;
var _43880__$1 = this;
return self__.meta43879;
});})(cs))
;

cljs.core.async.t_cljs$core$async43878.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43878.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async43878.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43878.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async43878.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async43878.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async43878.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta43879","meta43879",-1557325036,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async43878.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43878.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43878";

cljs.core.async.t_cljs$core$async43878.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__27979__auto__,writer__27980__auto__,opt__27981__auto__){
return cljs.core._write.call(null,writer__27980__auto__,"cljs.core.async/t_cljs$core$async43878");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async43878 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async43878(ch__$1,cs__$1,meta43879){
return (new cljs.core.async.t_cljs$core$async43878(ch__$1,cs__$1,meta43879));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async43878(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__41728__auto___44164 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41728__auto___44164,cs,m,dchan,dctr,done){
return (function (){
var f__41729__auto__ = (function (){var switch__41485__auto__ = ((function (c__41728__auto___44164,cs,m,dchan,dctr,done){
return (function (state_44035){
var state_val_44036 = (state_44035[(1)]);
if((state_val_44036 === (7))){
var inst_44027 = (state_44035[(2)]);
var state_44035__$1 = state_44035;
var statearr_44037_44169 = state_44035__$1;
(statearr_44037_44169[(2)] = inst_44027);

(statearr_44037_44169[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44036 === (20))){
var inst_43930 = (state_44035[(7)]);
var inst_43942 = cljs.core.first.call(null,inst_43930);
var inst_43943 = cljs.core.nth.call(null,inst_43942,(0),null);
var inst_43944 = cljs.core.nth.call(null,inst_43942,(1),null);
var state_44035__$1 = (function (){var statearr_44038 = state_44035;
(statearr_44038[(8)] = inst_43943);

return statearr_44038;
})();
if(cljs.core.truth_(inst_43944)){
var statearr_44039_44170 = state_44035__$1;
(statearr_44039_44170[(1)] = (22));

} else {
var statearr_44040_44171 = state_44035__$1;
(statearr_44040_44171[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44036 === (27))){
var inst_43979 = (state_44035[(9)]);
var inst_43972 = (state_44035[(10)]);
var inst_43974 = (state_44035[(11)]);
var inst_43899 = (state_44035[(12)]);
var inst_43979__$1 = cljs.core._nth.call(null,inst_43972,inst_43974);
var inst_43980 = cljs.core.async.put_BANG_.call(null,inst_43979__$1,inst_43899,done);
var state_44035__$1 = (function (){var statearr_44041 = state_44035;
(statearr_44041[(9)] = inst_43979__$1);

return statearr_44041;
})();
if(cljs.core.truth_(inst_43980)){
var statearr_44042_44174 = state_44035__$1;
(statearr_44042_44174[(1)] = (30));

} else {
var statearr_44043_44175 = state_44035__$1;
(statearr_44043_44175[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44036 === (1))){
var state_44035__$1 = state_44035;
var statearr_44044_44177 = state_44035__$1;
(statearr_44044_44177[(2)] = null);

(statearr_44044_44177[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44036 === (24))){
var inst_43930 = (state_44035[(7)]);
var inst_43949 = (state_44035[(2)]);
var inst_43950 = cljs.core.next.call(null,inst_43930);
var inst_43908 = inst_43950;
var inst_43909 = null;
var inst_43910 = (0);
var inst_43911 = (0);
var state_44035__$1 = (function (){var statearr_44045 = state_44035;
(statearr_44045[(13)] = inst_43949);

(statearr_44045[(14)] = inst_43910);

(statearr_44045[(15)] = inst_43911);

(statearr_44045[(16)] = inst_43909);

(statearr_44045[(17)] = inst_43908);

return statearr_44045;
})();
var statearr_44046_44178 = state_44035__$1;
(statearr_44046_44178[(2)] = null);

(statearr_44046_44178[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44036 === (39))){
var state_44035__$1 = state_44035;
var statearr_44050_44183 = state_44035__$1;
(statearr_44050_44183[(2)] = null);

(statearr_44050_44183[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44036 === (4))){
var inst_43899 = (state_44035[(12)]);
var inst_43899__$1 = (state_44035[(2)]);
var inst_43900 = (inst_43899__$1 == null);
var state_44035__$1 = (function (){var statearr_44051 = state_44035;
(statearr_44051[(12)] = inst_43899__$1);

return statearr_44051;
})();
if(cljs.core.truth_(inst_43900)){
var statearr_44052_44189 = state_44035__$1;
(statearr_44052_44189[(1)] = (5));

} else {
var statearr_44053_44190 = state_44035__$1;
(statearr_44053_44190[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44036 === (15))){
var inst_43910 = (state_44035[(14)]);
var inst_43911 = (state_44035[(15)]);
var inst_43909 = (state_44035[(16)]);
var inst_43908 = (state_44035[(17)]);
var inst_43926 = (state_44035[(2)]);
var inst_43927 = (inst_43911 + (1));
var tmp44047 = inst_43910;
var tmp44048 = inst_43909;
var tmp44049 = inst_43908;
var inst_43908__$1 = tmp44049;
var inst_43909__$1 = tmp44048;
var inst_43910__$1 = tmp44047;
var inst_43911__$1 = inst_43927;
var state_44035__$1 = (function (){var statearr_44054 = state_44035;
(statearr_44054[(14)] = inst_43910__$1);

(statearr_44054[(15)] = inst_43911__$1);

(statearr_44054[(16)] = inst_43909__$1);

(statearr_44054[(18)] = inst_43926);

(statearr_44054[(17)] = inst_43908__$1);

return statearr_44054;
})();
var statearr_44055_44195 = state_44035__$1;
(statearr_44055_44195[(2)] = null);

(statearr_44055_44195[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44036 === (21))){
var inst_43953 = (state_44035[(2)]);
var state_44035__$1 = state_44035;
var statearr_44059_44196 = state_44035__$1;
(statearr_44059_44196[(2)] = inst_43953);

(statearr_44059_44196[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44036 === (31))){
var inst_43979 = (state_44035[(9)]);
var inst_43983 = done.call(null,null);
var inst_43984 = cljs.core.async.untap_STAR_.call(null,m,inst_43979);
var state_44035__$1 = (function (){var statearr_44061 = state_44035;
(statearr_44061[(19)] = inst_43983);

return statearr_44061;
})();
var statearr_44063_44201 = state_44035__$1;
(statearr_44063_44201[(2)] = inst_43984);

(statearr_44063_44201[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44036 === (32))){
var inst_43972 = (state_44035[(10)]);
var inst_43971 = (state_44035[(20)]);
var inst_43973 = (state_44035[(21)]);
var inst_43974 = (state_44035[(11)]);
var inst_43986 = (state_44035[(2)]);
var inst_43987 = (inst_43974 + (1));
var tmp44056 = inst_43972;
var tmp44057 = inst_43971;
var tmp44058 = inst_43973;
var inst_43971__$1 = tmp44057;
var inst_43972__$1 = tmp44056;
var inst_43973__$1 = tmp44058;
var inst_43974__$1 = inst_43987;
var state_44035__$1 = (function (){var statearr_44064 = state_44035;
(statearr_44064[(10)] = inst_43972__$1);

(statearr_44064[(20)] = inst_43971__$1);

(statearr_44064[(21)] = inst_43973__$1);

(statearr_44064[(11)] = inst_43974__$1);

(statearr_44064[(22)] = inst_43986);

return statearr_44064;
})();
var statearr_44065_44202 = state_44035__$1;
(statearr_44065_44202[(2)] = null);

(statearr_44065_44202[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44036 === (40))){
var inst_43999 = (state_44035[(23)]);
var inst_44003 = done.call(null,null);
var inst_44004 = cljs.core.async.untap_STAR_.call(null,m,inst_43999);
var state_44035__$1 = (function (){var statearr_44067 = state_44035;
(statearr_44067[(24)] = inst_44003);

return statearr_44067;
})();
var statearr_44068_44203 = state_44035__$1;
(statearr_44068_44203[(2)] = inst_44004);

(statearr_44068_44203[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44036 === (33))){
var inst_43990 = (state_44035[(25)]);
var inst_43992 = cljs.core.chunked_seq_QMARK_.call(null,inst_43990);
var state_44035__$1 = state_44035;
if(inst_43992){
var statearr_44069_44204 = state_44035__$1;
(statearr_44069_44204[(1)] = (36));

} else {
var statearr_44070_44205 = state_44035__$1;
(statearr_44070_44205[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44036 === (13))){
var inst_43920 = (state_44035[(26)]);
var inst_43923 = cljs.core.async.close_BANG_.call(null,inst_43920);
var state_44035__$1 = state_44035;
var statearr_44075_44206 = state_44035__$1;
(statearr_44075_44206[(2)] = inst_43923);

(statearr_44075_44206[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44036 === (22))){
var inst_43943 = (state_44035[(8)]);
var inst_43946 = cljs.core.async.close_BANG_.call(null,inst_43943);
var state_44035__$1 = state_44035;
var statearr_44076_44207 = state_44035__$1;
(statearr_44076_44207[(2)] = inst_43946);

(statearr_44076_44207[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44036 === (36))){
var inst_43990 = (state_44035[(25)]);
var inst_43994 = cljs.core.chunk_first.call(null,inst_43990);
var inst_43995 = cljs.core.chunk_rest.call(null,inst_43990);
var inst_43996 = cljs.core.count.call(null,inst_43994);
var inst_43971 = inst_43995;
var inst_43972 = inst_43994;
var inst_43973 = inst_43996;
var inst_43974 = (0);
var state_44035__$1 = (function (){var statearr_44077 = state_44035;
(statearr_44077[(10)] = inst_43972);

(statearr_44077[(20)] = inst_43971);

(statearr_44077[(21)] = inst_43973);

(statearr_44077[(11)] = inst_43974);

return statearr_44077;
})();
var statearr_44078_44208 = state_44035__$1;
(statearr_44078_44208[(2)] = null);

(statearr_44078_44208[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44036 === (41))){
var inst_43990 = (state_44035[(25)]);
var inst_44006 = (state_44035[(2)]);
var inst_44007 = cljs.core.next.call(null,inst_43990);
var inst_43971 = inst_44007;
var inst_43972 = null;
var inst_43973 = (0);
var inst_43974 = (0);
var state_44035__$1 = (function (){var statearr_44079 = state_44035;
(statearr_44079[(10)] = inst_43972);

(statearr_44079[(20)] = inst_43971);

(statearr_44079[(21)] = inst_43973);

(statearr_44079[(11)] = inst_43974);

(statearr_44079[(27)] = inst_44006);

return statearr_44079;
})();
var statearr_44080_44209 = state_44035__$1;
(statearr_44080_44209[(2)] = null);

(statearr_44080_44209[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44036 === (43))){
var state_44035__$1 = state_44035;
var statearr_44081_44210 = state_44035__$1;
(statearr_44081_44210[(2)] = null);

(statearr_44081_44210[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44036 === (29))){
var inst_44015 = (state_44035[(2)]);
var state_44035__$1 = state_44035;
var statearr_44082_44211 = state_44035__$1;
(statearr_44082_44211[(2)] = inst_44015);

(statearr_44082_44211[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44036 === (44))){
var inst_44024 = (state_44035[(2)]);
var state_44035__$1 = (function (){var statearr_44083 = state_44035;
(statearr_44083[(28)] = inst_44024);

return statearr_44083;
})();
var statearr_44084_44212 = state_44035__$1;
(statearr_44084_44212[(2)] = null);

(statearr_44084_44212[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44036 === (6))){
var inst_43963 = (state_44035[(29)]);
var inst_43962 = cljs.core.deref.call(null,cs);
var inst_43963__$1 = cljs.core.keys.call(null,inst_43962);
var inst_43964 = cljs.core.count.call(null,inst_43963__$1);
var inst_43965 = cljs.core.reset_BANG_.call(null,dctr,inst_43964);
var inst_43970 = cljs.core.seq.call(null,inst_43963__$1);
var inst_43971 = inst_43970;
var inst_43972 = null;
var inst_43973 = (0);
var inst_43974 = (0);
var state_44035__$1 = (function (){var statearr_44086 = state_44035;
(statearr_44086[(10)] = inst_43972);

(statearr_44086[(29)] = inst_43963__$1);

(statearr_44086[(20)] = inst_43971);

(statearr_44086[(21)] = inst_43973);

(statearr_44086[(30)] = inst_43965);

(statearr_44086[(11)] = inst_43974);

return statearr_44086;
})();
var statearr_44087_44217 = state_44035__$1;
(statearr_44087_44217[(2)] = null);

(statearr_44087_44217[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44036 === (28))){
var inst_43971 = (state_44035[(20)]);
var inst_43990 = (state_44035[(25)]);
var inst_43990__$1 = cljs.core.seq.call(null,inst_43971);
var state_44035__$1 = (function (){var statearr_44089 = state_44035;
(statearr_44089[(25)] = inst_43990__$1);

return statearr_44089;
})();
if(inst_43990__$1){
var statearr_44090_44222 = state_44035__$1;
(statearr_44090_44222[(1)] = (33));

} else {
var statearr_44091_44223 = state_44035__$1;
(statearr_44091_44223[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44036 === (25))){
var inst_43973 = (state_44035[(21)]);
var inst_43974 = (state_44035[(11)]);
var inst_43976 = (inst_43974 < inst_43973);
var inst_43977 = inst_43976;
var state_44035__$1 = state_44035;
if(cljs.core.truth_(inst_43977)){
var statearr_44093_44224 = state_44035__$1;
(statearr_44093_44224[(1)] = (27));

} else {
var statearr_44094_44225 = state_44035__$1;
(statearr_44094_44225[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44036 === (34))){
var state_44035__$1 = state_44035;
var statearr_44095_44226 = state_44035__$1;
(statearr_44095_44226[(2)] = null);

(statearr_44095_44226[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44036 === (17))){
var state_44035__$1 = state_44035;
var statearr_44097_44227 = state_44035__$1;
(statearr_44097_44227[(2)] = null);

(statearr_44097_44227[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44036 === (3))){
var inst_44029 = (state_44035[(2)]);
var state_44035__$1 = state_44035;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44035__$1,inst_44029);
} else {
if((state_val_44036 === (12))){
var inst_43958 = (state_44035[(2)]);
var state_44035__$1 = state_44035;
var statearr_44099_44229 = state_44035__$1;
(statearr_44099_44229[(2)] = inst_43958);

(statearr_44099_44229[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44036 === (2))){
var state_44035__$1 = state_44035;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44035__$1,(4),ch);
} else {
if((state_val_44036 === (23))){
var state_44035__$1 = state_44035;
var statearr_44100_44230 = state_44035__$1;
(statearr_44100_44230[(2)] = null);

(statearr_44100_44230[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44036 === (35))){
var inst_44013 = (state_44035[(2)]);
var state_44035__$1 = state_44035;
var statearr_44102_44231 = state_44035__$1;
(statearr_44102_44231[(2)] = inst_44013);

(statearr_44102_44231[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44036 === (19))){
var inst_43930 = (state_44035[(7)]);
var inst_43934 = cljs.core.chunk_first.call(null,inst_43930);
var inst_43935 = cljs.core.chunk_rest.call(null,inst_43930);
var inst_43936 = cljs.core.count.call(null,inst_43934);
var inst_43908 = inst_43935;
var inst_43909 = inst_43934;
var inst_43910 = inst_43936;
var inst_43911 = (0);
var state_44035__$1 = (function (){var statearr_44103 = state_44035;
(statearr_44103[(14)] = inst_43910);

(statearr_44103[(15)] = inst_43911);

(statearr_44103[(16)] = inst_43909);

(statearr_44103[(17)] = inst_43908);

return statearr_44103;
})();
var statearr_44104_44234 = state_44035__$1;
(statearr_44104_44234[(2)] = null);

(statearr_44104_44234[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44036 === (11))){
var inst_43930 = (state_44035[(7)]);
var inst_43908 = (state_44035[(17)]);
var inst_43930__$1 = cljs.core.seq.call(null,inst_43908);
var state_44035__$1 = (function (){var statearr_44105 = state_44035;
(statearr_44105[(7)] = inst_43930__$1);

return statearr_44105;
})();
if(inst_43930__$1){
var statearr_44106_44236 = state_44035__$1;
(statearr_44106_44236[(1)] = (16));

} else {
var statearr_44107_44237 = state_44035__$1;
(statearr_44107_44237[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44036 === (9))){
var inst_43960 = (state_44035[(2)]);
var state_44035__$1 = state_44035;
var statearr_44108_44241 = state_44035__$1;
(statearr_44108_44241[(2)] = inst_43960);

(statearr_44108_44241[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44036 === (5))){
var inst_43906 = cljs.core.deref.call(null,cs);
var inst_43907 = cljs.core.seq.call(null,inst_43906);
var inst_43908 = inst_43907;
var inst_43909 = null;
var inst_43910 = (0);
var inst_43911 = (0);
var state_44035__$1 = (function (){var statearr_44110 = state_44035;
(statearr_44110[(14)] = inst_43910);

(statearr_44110[(15)] = inst_43911);

(statearr_44110[(16)] = inst_43909);

(statearr_44110[(17)] = inst_43908);

return statearr_44110;
})();
var statearr_44111_44245 = state_44035__$1;
(statearr_44111_44245[(2)] = null);

(statearr_44111_44245[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44036 === (14))){
var state_44035__$1 = state_44035;
var statearr_44114_44246 = state_44035__$1;
(statearr_44114_44246[(2)] = null);

(statearr_44114_44246[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44036 === (45))){
var inst_44021 = (state_44035[(2)]);
var state_44035__$1 = state_44035;
var statearr_44115_44247 = state_44035__$1;
(statearr_44115_44247[(2)] = inst_44021);

(statearr_44115_44247[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44036 === (26))){
var inst_43963 = (state_44035[(29)]);
var inst_44017 = (state_44035[(2)]);
var inst_44018 = cljs.core.seq.call(null,inst_43963);
var state_44035__$1 = (function (){var statearr_44116 = state_44035;
(statearr_44116[(31)] = inst_44017);

return statearr_44116;
})();
if(inst_44018){
var statearr_44117_44248 = state_44035__$1;
(statearr_44117_44248[(1)] = (42));

} else {
var statearr_44118_44249 = state_44035__$1;
(statearr_44118_44249[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44036 === (16))){
var inst_43930 = (state_44035[(7)]);
var inst_43932 = cljs.core.chunked_seq_QMARK_.call(null,inst_43930);
var state_44035__$1 = state_44035;
if(inst_43932){
var statearr_44119_44251 = state_44035__$1;
(statearr_44119_44251[(1)] = (19));

} else {
var statearr_44120_44252 = state_44035__$1;
(statearr_44120_44252[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44036 === (38))){
var inst_44010 = (state_44035[(2)]);
var state_44035__$1 = state_44035;
var statearr_44121_44253 = state_44035__$1;
(statearr_44121_44253[(2)] = inst_44010);

(statearr_44121_44253[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44036 === (30))){
var state_44035__$1 = state_44035;
var statearr_44122_44254 = state_44035__$1;
(statearr_44122_44254[(2)] = null);

(statearr_44122_44254[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44036 === (10))){
var inst_43911 = (state_44035[(15)]);
var inst_43909 = (state_44035[(16)]);
var inst_43919 = cljs.core._nth.call(null,inst_43909,inst_43911);
var inst_43920 = cljs.core.nth.call(null,inst_43919,(0),null);
var inst_43921 = cljs.core.nth.call(null,inst_43919,(1),null);
var state_44035__$1 = (function (){var statearr_44126 = state_44035;
(statearr_44126[(26)] = inst_43920);

return statearr_44126;
})();
if(cljs.core.truth_(inst_43921)){
var statearr_44127_44258 = state_44035__$1;
(statearr_44127_44258[(1)] = (13));

} else {
var statearr_44128_44259 = state_44035__$1;
(statearr_44128_44259[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44036 === (18))){
var inst_43956 = (state_44035[(2)]);
var state_44035__$1 = state_44035;
var statearr_44129_44261 = state_44035__$1;
(statearr_44129_44261[(2)] = inst_43956);

(statearr_44129_44261[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44036 === (42))){
var state_44035__$1 = state_44035;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44035__$1,(45),dchan);
} else {
if((state_val_44036 === (37))){
var inst_43999 = (state_44035[(23)]);
var inst_43899 = (state_44035[(12)]);
var inst_43990 = (state_44035[(25)]);
var inst_43999__$1 = cljs.core.first.call(null,inst_43990);
var inst_44000 = cljs.core.async.put_BANG_.call(null,inst_43999__$1,inst_43899,done);
var state_44035__$1 = (function (){var statearr_44130 = state_44035;
(statearr_44130[(23)] = inst_43999__$1);

return statearr_44130;
})();
if(cljs.core.truth_(inst_44000)){
var statearr_44131_44264 = state_44035__$1;
(statearr_44131_44264[(1)] = (39));

} else {
var statearr_44132_44265 = state_44035__$1;
(statearr_44132_44265[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44036 === (8))){
var inst_43910 = (state_44035[(14)]);
var inst_43911 = (state_44035[(15)]);
var inst_43913 = (inst_43911 < inst_43910);
var inst_43914 = inst_43913;
var state_44035__$1 = state_44035;
if(cljs.core.truth_(inst_43914)){
var statearr_44134_44273 = state_44035__$1;
(statearr_44134_44273[(1)] = (10));

} else {
var statearr_44135_44274 = state_44035__$1;
(statearr_44135_44274[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__41728__auto___44164,cs,m,dchan,dctr,done))
;
return ((function (switch__41485__auto__,c__41728__auto___44164,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__41486__auto__ = null;
var cljs$core$async$mult_$_state_machine__41486__auto____0 = (function (){
var statearr_44142 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44142[(0)] = cljs$core$async$mult_$_state_machine__41486__auto__);

(statearr_44142[(1)] = (1));

return statearr_44142;
});
var cljs$core$async$mult_$_state_machine__41486__auto____1 = (function (state_44035){
while(true){
var ret_value__41487__auto__ = (function (){try{while(true){
var result__41488__auto__ = switch__41485__auto__.call(null,state_44035);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41488__auto__;
}
break;
}
}catch (e44144){if((e44144 instanceof Object)){
var ex__41489__auto__ = e44144;
var statearr_44145_44286 = state_44035;
(statearr_44145_44286[(5)] = ex__41489__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44035);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44144;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41487__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44290 = state_44035;
state_44035 = G__44290;
continue;
} else {
return ret_value__41487__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__41486__auto__ = function(state_44035){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__41486__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__41486__auto____1.call(this,state_44035);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__41486__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__41486__auto____0;
cljs$core$async$mult_$_state_machine__41486__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__41486__auto____1;
return cljs$core$async$mult_$_state_machine__41486__auto__;
})()
;})(switch__41485__auto__,c__41728__auto___44164,cs,m,dchan,dctr,done))
})();
var state__41730__auto__ = (function (){var statearr_44147 = f__41729__auto__.call(null);
(statearr_44147[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41728__auto___44164);

return statearr_44147;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41730__auto__);
});})(c__41728__auto___44164,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args44291 = [];
var len__28543__auto___44294 = arguments.length;
var i__28544__auto___44295 = (0);
while(true){
if((i__28544__auto___44295 < len__28543__auto___44294)){
args44291.push((arguments[i__28544__auto___44295]));

var G__44296 = (i__28544__auto___44295 + (1));
i__28544__auto___44295 = G__44296;
continue;
} else {
}
break;
}

var G__44293 = args44291.length;
switch (G__44293) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args44291.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__28040__auto__ = (((m == null))?null:m);
var m__28041__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__28040__auto__)]);
if(!((m__28041__auto__ == null))){
return m__28041__auto__.call(null,m,ch);
} else {
var m__28041__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__28041__auto____$1 == null))){
return m__28041__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__28040__auto__ = (((m == null))?null:m);
var m__28041__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__28040__auto__)]);
if(!((m__28041__auto__ == null))){
return m__28041__auto__.call(null,m,ch);
} else {
var m__28041__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__28041__auto____$1 == null))){
return m__28041__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__28040__auto__ = (((m == null))?null:m);
var m__28041__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__28040__auto__)]);
if(!((m__28041__auto__ == null))){
return m__28041__auto__.call(null,m);
} else {
var m__28041__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__28041__auto____$1 == null))){
return m__28041__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__28040__auto__ = (((m == null))?null:m);
var m__28041__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__28040__auto__)]);
if(!((m__28041__auto__ == null))){
return m__28041__auto__.call(null,m,state_map);
} else {
var m__28041__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__28041__auto____$1 == null))){
return m__28041__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__28040__auto__ = (((m == null))?null:m);
var m__28041__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__28040__auto__)]);
if(!((m__28041__auto__ == null))){
return m__28041__auto__.call(null,m,mode);
} else {
var m__28041__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__28041__auto____$1 == null))){
return m__28041__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__28550__auto__ = [];
var len__28543__auto___44345 = arguments.length;
var i__28544__auto___44346 = (0);
while(true){
if((i__28544__auto___44346 < len__28543__auto___44345)){
args__28550__auto__.push((arguments[i__28544__auto___44346]));

var G__44347 = (i__28544__auto___44346 + (1));
i__28544__auto___44346 = G__44347;
continue;
} else {
}
break;
}

var argseq__28551__auto__ = ((((3) < args__28550__auto__.length))?(new cljs.core.IndexedSeq(args__28550__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__28551__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__44339){
var map__44340 = p__44339;
var map__44340__$1 = ((((!((map__44340 == null)))?((((map__44340.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44340.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44340):map__44340);
var opts = map__44340__$1;
var statearr_44342_44348 = state;
(statearr_44342_44348[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__6753__auto__ = cljs.core.async.do_alts.call(null,((function (map__44340,map__44340__$1,opts){
return (function (val){
var statearr_44343_44351 = state;
(statearr_44343_44351[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__44340,map__44340__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__6753__auto__)){
var cb = temp__6753__auto__;
var statearr_44344_44352 = state;
(statearr_44344_44352[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq44331){
var G__44332 = cljs.core.first.call(null,seq44331);
var seq44331__$1 = cljs.core.next.call(null,seq44331);
var G__44333 = cljs.core.first.call(null,seq44331__$1);
var seq44331__$2 = cljs.core.next.call(null,seq44331__$1);
var G__44334 = cljs.core.first.call(null,seq44331__$2);
var seq44331__$3 = cljs.core.next.call(null,seq44331__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__44332,G__44333,G__44334,seq44331__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async44565 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44565 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta44566){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta44566 = meta44566;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async44565.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_44567,meta44566__$1){
var self__ = this;
var _44567__$1 = this;
return (new cljs.core.async.t_cljs$core$async44565(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta44566__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async44565.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_44567){
var self__ = this;
var _44567__$1 = this;
return self__.meta44566;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async44565.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async44565.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async44565.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async44565.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async44565.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async44565.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async44565.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async44565.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("mode must be one of: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async44565.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta44566","meta44566",-389352515,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async44565.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async44565.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44565";

cljs.core.async.t_cljs$core$async44565.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__27979__auto__,writer__27980__auto__,opt__27981__auto__){
return cljs.core._write.call(null,writer__27980__auto__,"cljs.core.async/t_cljs$core$async44565");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async44565 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async44565(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta44566){
return (new cljs.core.async.t_cljs$core$async44565(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta44566));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async44565(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__41728__auto___44809 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41728__auto___44809,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__41729__auto__ = (function (){var switch__41485__auto__ = ((function (c__41728__auto___44809,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_44672){
var state_val_44673 = (state_44672[(1)]);
if((state_val_44673 === (7))){
var inst_44587 = (state_44672[(2)]);
var state_44672__$1 = state_44672;
var statearr_44674_44814 = state_44672__$1;
(statearr_44674_44814[(2)] = inst_44587);

(statearr_44674_44814[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44673 === (20))){
var inst_44599 = (state_44672[(7)]);
var state_44672__$1 = state_44672;
var statearr_44675_44815 = state_44672__$1;
(statearr_44675_44815[(2)] = inst_44599);

(statearr_44675_44815[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44673 === (27))){
var state_44672__$1 = state_44672;
var statearr_44676_44816 = state_44672__$1;
(statearr_44676_44816[(2)] = null);

(statearr_44676_44816[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44673 === (1))){
var inst_44574 = (state_44672[(8)]);
var inst_44574__$1 = calc_state.call(null);
var inst_44576 = (inst_44574__$1 == null);
var inst_44577 = cljs.core.not.call(null,inst_44576);
var state_44672__$1 = (function (){var statearr_44677 = state_44672;
(statearr_44677[(8)] = inst_44574__$1);

return statearr_44677;
})();
if(inst_44577){
var statearr_44678_44830 = state_44672__$1;
(statearr_44678_44830[(1)] = (2));

} else {
var statearr_44679_44831 = state_44672__$1;
(statearr_44679_44831[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44673 === (24))){
var inst_44646 = (state_44672[(9)]);
var inst_44623 = (state_44672[(10)]);
var inst_44632 = (state_44672[(11)]);
var inst_44646__$1 = inst_44623.call(null,inst_44632);
var state_44672__$1 = (function (){var statearr_44680 = state_44672;
(statearr_44680[(9)] = inst_44646__$1);

return statearr_44680;
})();
if(cljs.core.truth_(inst_44646__$1)){
var statearr_44681_44837 = state_44672__$1;
(statearr_44681_44837[(1)] = (29));

} else {
var statearr_44682_44838 = state_44672__$1;
(statearr_44682_44838[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44673 === (4))){
var inst_44590 = (state_44672[(2)]);
var state_44672__$1 = state_44672;
if(cljs.core.truth_(inst_44590)){
var statearr_44683_44840 = state_44672__$1;
(statearr_44683_44840[(1)] = (8));

} else {
var statearr_44684_44841 = state_44672__$1;
(statearr_44684_44841[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44673 === (15))){
var inst_44617 = (state_44672[(2)]);
var state_44672__$1 = state_44672;
if(cljs.core.truth_(inst_44617)){
var statearr_44685_44842 = state_44672__$1;
(statearr_44685_44842[(1)] = (19));

} else {
var statearr_44686_44843 = state_44672__$1;
(statearr_44686_44843[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44673 === (21))){
var inst_44622 = (state_44672[(12)]);
var inst_44622__$1 = (state_44672[(2)]);
var inst_44623 = cljs.core.get.call(null,inst_44622__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_44624 = cljs.core.get.call(null,inst_44622__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_44625 = cljs.core.get.call(null,inst_44622__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_44672__$1 = (function (){var statearr_44687 = state_44672;
(statearr_44687[(10)] = inst_44623);

(statearr_44687[(13)] = inst_44624);

(statearr_44687[(12)] = inst_44622__$1);

return statearr_44687;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_44672__$1,(22),inst_44625);
} else {
if((state_val_44673 === (31))){
var inst_44654 = (state_44672[(2)]);
var state_44672__$1 = state_44672;
if(cljs.core.truth_(inst_44654)){
var statearr_44688_44844 = state_44672__$1;
(statearr_44688_44844[(1)] = (32));

} else {
var statearr_44692_44845 = state_44672__$1;
(statearr_44692_44845[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44673 === (32))){
var inst_44631 = (state_44672[(14)]);
var state_44672__$1 = state_44672;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44672__$1,(35),out,inst_44631);
} else {
if((state_val_44673 === (33))){
var inst_44622 = (state_44672[(12)]);
var inst_44599 = inst_44622;
var state_44672__$1 = (function (){var statearr_44693 = state_44672;
(statearr_44693[(7)] = inst_44599);

return statearr_44693;
})();
var statearr_44694_44850 = state_44672__$1;
(statearr_44694_44850[(2)] = null);

(statearr_44694_44850[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44673 === (13))){
var inst_44599 = (state_44672[(7)]);
var inst_44606 = inst_44599.cljs$lang$protocol_mask$partition0$;
var inst_44607 = (inst_44606 & (64));
var inst_44608 = inst_44599.cljs$core$ISeq$;
var inst_44609 = (cljs.core.PROTOCOL_SENTINEL === inst_44608);
var inst_44610 = (inst_44607) || (inst_44609);
var state_44672__$1 = state_44672;
if(cljs.core.truth_(inst_44610)){
var statearr_44695_44854 = state_44672__$1;
(statearr_44695_44854[(1)] = (16));

} else {
var statearr_44696_44855 = state_44672__$1;
(statearr_44696_44855[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44673 === (22))){
var inst_44631 = (state_44672[(14)]);
var inst_44632 = (state_44672[(11)]);
var inst_44630 = (state_44672[(2)]);
var inst_44631__$1 = cljs.core.nth.call(null,inst_44630,(0),null);
var inst_44632__$1 = cljs.core.nth.call(null,inst_44630,(1),null);
var inst_44633 = (inst_44631__$1 == null);
var inst_44634 = cljs.core._EQ_.call(null,inst_44632__$1,change);
var inst_44635 = (inst_44633) || (inst_44634);
var state_44672__$1 = (function (){var statearr_44698 = state_44672;
(statearr_44698[(14)] = inst_44631__$1);

(statearr_44698[(11)] = inst_44632__$1);

return statearr_44698;
})();
if(cljs.core.truth_(inst_44635)){
var statearr_44700_44861 = state_44672__$1;
(statearr_44700_44861[(1)] = (23));

} else {
var statearr_44701_44867 = state_44672__$1;
(statearr_44701_44867[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44673 === (36))){
var inst_44622 = (state_44672[(12)]);
var inst_44599 = inst_44622;
var state_44672__$1 = (function (){var statearr_44702 = state_44672;
(statearr_44702[(7)] = inst_44599);

return statearr_44702;
})();
var statearr_44704_44871 = state_44672__$1;
(statearr_44704_44871[(2)] = null);

(statearr_44704_44871[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44673 === (29))){
var inst_44646 = (state_44672[(9)]);
var state_44672__$1 = state_44672;
var statearr_44706_44876 = state_44672__$1;
(statearr_44706_44876[(2)] = inst_44646);

(statearr_44706_44876[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44673 === (6))){
var state_44672__$1 = state_44672;
var statearr_44707_44878 = state_44672__$1;
(statearr_44707_44878[(2)] = false);

(statearr_44707_44878[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44673 === (28))){
var inst_44642 = (state_44672[(2)]);
var inst_44643 = calc_state.call(null);
var inst_44599 = inst_44643;
var state_44672__$1 = (function (){var statearr_44708 = state_44672;
(statearr_44708[(7)] = inst_44599);

(statearr_44708[(15)] = inst_44642);

return statearr_44708;
})();
var statearr_44709_44880 = state_44672__$1;
(statearr_44709_44880[(2)] = null);

(statearr_44709_44880[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44673 === (25))){
var inst_44668 = (state_44672[(2)]);
var state_44672__$1 = state_44672;
var statearr_44710_44885 = state_44672__$1;
(statearr_44710_44885[(2)] = inst_44668);

(statearr_44710_44885[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44673 === (34))){
var inst_44666 = (state_44672[(2)]);
var state_44672__$1 = state_44672;
var statearr_44711_44886 = state_44672__$1;
(statearr_44711_44886[(2)] = inst_44666);

(statearr_44711_44886[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44673 === (17))){
var state_44672__$1 = state_44672;
var statearr_44712_44890 = state_44672__$1;
(statearr_44712_44890[(2)] = false);

(statearr_44712_44890[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44673 === (3))){
var state_44672__$1 = state_44672;
var statearr_44713_44891 = state_44672__$1;
(statearr_44713_44891[(2)] = false);

(statearr_44713_44891[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44673 === (12))){
var inst_44670 = (state_44672[(2)]);
var state_44672__$1 = state_44672;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44672__$1,inst_44670);
} else {
if((state_val_44673 === (2))){
var inst_44574 = (state_44672[(8)]);
var inst_44579 = inst_44574.cljs$lang$protocol_mask$partition0$;
var inst_44580 = (inst_44579 & (64));
var inst_44581 = inst_44574.cljs$core$ISeq$;
var inst_44582 = (cljs.core.PROTOCOL_SENTINEL === inst_44581);
var inst_44583 = (inst_44580) || (inst_44582);
var state_44672__$1 = state_44672;
if(cljs.core.truth_(inst_44583)){
var statearr_44714_44896 = state_44672__$1;
(statearr_44714_44896[(1)] = (5));

} else {
var statearr_44715_44897 = state_44672__$1;
(statearr_44715_44897[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44673 === (23))){
var inst_44631 = (state_44672[(14)]);
var inst_44637 = (inst_44631 == null);
var state_44672__$1 = state_44672;
if(cljs.core.truth_(inst_44637)){
var statearr_44716_44898 = state_44672__$1;
(statearr_44716_44898[(1)] = (26));

} else {
var statearr_44717_44899 = state_44672__$1;
(statearr_44717_44899[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44673 === (35))){
var inst_44657 = (state_44672[(2)]);
var state_44672__$1 = state_44672;
if(cljs.core.truth_(inst_44657)){
var statearr_44718_44900 = state_44672__$1;
(statearr_44718_44900[(1)] = (36));

} else {
var statearr_44719_44901 = state_44672__$1;
(statearr_44719_44901[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44673 === (19))){
var inst_44599 = (state_44672[(7)]);
var inst_44619 = cljs.core.apply.call(null,cljs.core.hash_map,inst_44599);
var state_44672__$1 = state_44672;
var statearr_44720_44902 = state_44672__$1;
(statearr_44720_44902[(2)] = inst_44619);

(statearr_44720_44902[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44673 === (11))){
var inst_44599 = (state_44672[(7)]);
var inst_44603 = (inst_44599 == null);
var inst_44604 = cljs.core.not.call(null,inst_44603);
var state_44672__$1 = state_44672;
if(inst_44604){
var statearr_44723_44904 = state_44672__$1;
(statearr_44723_44904[(1)] = (13));

} else {
var statearr_44724_44905 = state_44672__$1;
(statearr_44724_44905[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44673 === (9))){
var inst_44574 = (state_44672[(8)]);
var state_44672__$1 = state_44672;
var statearr_44727_44906 = state_44672__$1;
(statearr_44727_44906[(2)] = inst_44574);

(statearr_44727_44906[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44673 === (5))){
var state_44672__$1 = state_44672;
var statearr_44728_44907 = state_44672__$1;
(statearr_44728_44907[(2)] = true);

(statearr_44728_44907[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44673 === (14))){
var state_44672__$1 = state_44672;
var statearr_44729_44908 = state_44672__$1;
(statearr_44729_44908[(2)] = false);

(statearr_44729_44908[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44673 === (26))){
var inst_44632 = (state_44672[(11)]);
var inst_44639 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_44632);
var state_44672__$1 = state_44672;
var statearr_44730_44909 = state_44672__$1;
(statearr_44730_44909[(2)] = inst_44639);

(statearr_44730_44909[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44673 === (16))){
var state_44672__$1 = state_44672;
var statearr_44731_44910 = state_44672__$1;
(statearr_44731_44910[(2)] = true);

(statearr_44731_44910[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44673 === (38))){
var inst_44662 = (state_44672[(2)]);
var state_44672__$1 = state_44672;
var statearr_44732_44911 = state_44672__$1;
(statearr_44732_44911[(2)] = inst_44662);

(statearr_44732_44911[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44673 === (30))){
var inst_44623 = (state_44672[(10)]);
var inst_44624 = (state_44672[(13)]);
var inst_44632 = (state_44672[(11)]);
var inst_44649 = cljs.core.empty_QMARK_.call(null,inst_44623);
var inst_44650 = inst_44624.call(null,inst_44632);
var inst_44651 = cljs.core.not.call(null,inst_44650);
var inst_44652 = (inst_44649) && (inst_44651);
var state_44672__$1 = state_44672;
var statearr_44734_44916 = state_44672__$1;
(statearr_44734_44916[(2)] = inst_44652);

(statearr_44734_44916[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44673 === (10))){
var inst_44574 = (state_44672[(8)]);
var inst_44595 = (state_44672[(2)]);
var inst_44596 = cljs.core.get.call(null,inst_44595,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_44597 = cljs.core.get.call(null,inst_44595,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_44598 = cljs.core.get.call(null,inst_44595,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_44599 = inst_44574;
var state_44672__$1 = (function (){var statearr_44738 = state_44672;
(statearr_44738[(7)] = inst_44599);

(statearr_44738[(16)] = inst_44598);

(statearr_44738[(17)] = inst_44596);

(statearr_44738[(18)] = inst_44597);

return statearr_44738;
})();
var statearr_44739_44925 = state_44672__$1;
(statearr_44739_44925[(2)] = null);

(statearr_44739_44925[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44673 === (18))){
var inst_44614 = (state_44672[(2)]);
var state_44672__$1 = state_44672;
var statearr_44744_44926 = state_44672__$1;
(statearr_44744_44926[(2)] = inst_44614);

(statearr_44744_44926[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44673 === (37))){
var state_44672__$1 = state_44672;
var statearr_44745_44927 = state_44672__$1;
(statearr_44745_44927[(2)] = null);

(statearr_44745_44927[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44673 === (8))){
var inst_44574 = (state_44672[(8)]);
var inst_44592 = cljs.core.apply.call(null,cljs.core.hash_map,inst_44574);
var state_44672__$1 = state_44672;
var statearr_44749_44928 = state_44672__$1;
(statearr_44749_44928[(2)] = inst_44592);

(statearr_44749_44928[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__41728__auto___44809,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__41485__auto__,c__41728__auto___44809,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__41486__auto__ = null;
var cljs$core$async$mix_$_state_machine__41486__auto____0 = (function (){
var statearr_44756 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44756[(0)] = cljs$core$async$mix_$_state_machine__41486__auto__);

(statearr_44756[(1)] = (1));

return statearr_44756;
});
var cljs$core$async$mix_$_state_machine__41486__auto____1 = (function (state_44672){
while(true){
var ret_value__41487__auto__ = (function (){try{while(true){
var result__41488__auto__ = switch__41485__auto__.call(null,state_44672);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41488__auto__;
}
break;
}
}catch (e44760){if((e44760 instanceof Object)){
var ex__41489__auto__ = e44760;
var statearr_44761_44933 = state_44672;
(statearr_44761_44933[(5)] = ex__41489__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44672);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44760;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41487__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44938 = state_44672;
state_44672 = G__44938;
continue;
} else {
return ret_value__41487__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__41486__auto__ = function(state_44672){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__41486__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__41486__auto____1.call(this,state_44672);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__41486__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__41486__auto____0;
cljs$core$async$mix_$_state_machine__41486__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__41486__auto____1;
return cljs$core$async$mix_$_state_machine__41486__auto__;
})()
;})(switch__41485__auto__,c__41728__auto___44809,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__41730__auto__ = (function (){var statearr_44762 = f__41729__auto__.call(null);
(statearr_44762[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41728__auto___44809);

return statearr_44762;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41730__auto__);
});})(c__41728__auto___44809,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__28040__auto__ = (((p == null))?null:p);
var m__28041__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__28040__auto__)]);
if(!((m__28041__auto__ == null))){
return m__28041__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__28041__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__28041__auto____$1 == null))){
return m__28041__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__28040__auto__ = (((p == null))?null:p);
var m__28041__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__28040__auto__)]);
if(!((m__28041__auto__ == null))){
return m__28041__auto__.call(null,p,v,ch);
} else {
var m__28041__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__28041__auto____$1 == null))){
return m__28041__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args44999 = [];
var len__28543__auto___45040 = arguments.length;
var i__28544__auto___45041 = (0);
while(true){
if((i__28544__auto___45041 < len__28543__auto___45040)){
args44999.push((arguments[i__28544__auto___45041]));

var G__45045 = (i__28544__auto___45041 + (1));
i__28544__auto___45041 = G__45045;
continue;
} else {
}
break;
}

var G__45002 = args44999.length;
switch (G__45002) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args44999.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__28040__auto__ = (((p == null))?null:p);
var m__28041__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__28040__auto__)]);
if(!((m__28041__auto__ == null))){
return m__28041__auto__.call(null,p);
} else {
var m__28041__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__28041__auto____$1 == null))){
return m__28041__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__28040__auto__ = (((p == null))?null:p);
var m__28041__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__28040__auto__)]);
if(!((m__28041__auto__ == null))){
return m__28041__auto__.call(null,p,v);
} else {
var m__28041__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__28041__auto____$1 == null))){
return m__28041__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args45075 = [];
var len__28543__auto___45239 = arguments.length;
var i__28544__auto___45240 = (0);
while(true){
if((i__28544__auto___45240 < len__28543__auto___45239)){
args45075.push((arguments[i__28544__auto___45240]));

var G__45246 = (i__28544__auto___45240 + (1));
i__28544__auto___45240 = G__45246;
continue;
} else {
}
break;
}

var G__45077 = args45075.length;
switch (G__45077) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args45075.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__27322__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__27322__auto__)){
return or__27322__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__27322__auto__,mults){
return (function (p1__45074_SHARP_){
if(cljs.core.truth_(p1__45074_SHARP_.call(null,topic))){
return p1__45074_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__45074_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__27322__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async45078 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45078 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta45079){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta45079 = meta45079;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async45078.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_45080,meta45079__$1){
var self__ = this;
var _45080__$1 = this;
return (new cljs.core.async.t_cljs$core$async45078(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta45079__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async45078.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_45080){
var self__ = this;
var _45080__$1 = this;
return self__.meta45079;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async45078.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45078.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async45078.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45078.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async45078.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__6753__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__6753__auto__)){
var m = temp__6753__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async45078.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async45078.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async45078.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta45079","meta45079",1304397775,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async45078.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async45078.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45078";

cljs.core.async.t_cljs$core$async45078.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__27979__auto__,writer__27980__auto__,opt__27981__auto__){
return cljs.core._write.call(null,writer__27980__auto__,"cljs.core.async/t_cljs$core$async45078");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async45078 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async45078(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta45079){
return (new cljs.core.async.t_cljs$core$async45078(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta45079));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async45078(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__41728__auto___45274 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41728__auto___45274,mults,ensure_mult,p){
return (function (){
var f__41729__auto__ = (function (){var switch__41485__auto__ = ((function (c__41728__auto___45274,mults,ensure_mult,p){
return (function (state_45160){
var state_val_45161 = (state_45160[(1)]);
if((state_val_45161 === (7))){
var inst_45156 = (state_45160[(2)]);
var state_45160__$1 = state_45160;
var statearr_45162_45279 = state_45160__$1;
(statearr_45162_45279[(2)] = inst_45156);

(statearr_45162_45279[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45161 === (20))){
var state_45160__$1 = state_45160;
var statearr_45163_45289 = state_45160__$1;
(statearr_45163_45289[(2)] = null);

(statearr_45163_45289[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45161 === (1))){
var state_45160__$1 = state_45160;
var statearr_45164_45293 = state_45160__$1;
(statearr_45164_45293[(2)] = null);

(statearr_45164_45293[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45161 === (24))){
var inst_45139 = (state_45160[(7)]);
var inst_45148 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_45139);
var state_45160__$1 = state_45160;
var statearr_45165_45297 = state_45160__$1;
(statearr_45165_45297[(2)] = inst_45148);

(statearr_45165_45297[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45161 === (4))){
var inst_45089 = (state_45160[(8)]);
var inst_45089__$1 = (state_45160[(2)]);
var inst_45090 = (inst_45089__$1 == null);
var state_45160__$1 = (function (){var statearr_45166 = state_45160;
(statearr_45166[(8)] = inst_45089__$1);

return statearr_45166;
})();
if(cljs.core.truth_(inst_45090)){
var statearr_45167_45315 = state_45160__$1;
(statearr_45167_45315[(1)] = (5));

} else {
var statearr_45168_45316 = state_45160__$1;
(statearr_45168_45316[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45161 === (15))){
var inst_45133 = (state_45160[(2)]);
var state_45160__$1 = state_45160;
var statearr_45169_45331 = state_45160__$1;
(statearr_45169_45331[(2)] = inst_45133);

(statearr_45169_45331[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45161 === (21))){
var inst_45153 = (state_45160[(2)]);
var state_45160__$1 = (function (){var statearr_45170 = state_45160;
(statearr_45170[(9)] = inst_45153);

return statearr_45170;
})();
var statearr_45171_45333 = state_45160__$1;
(statearr_45171_45333[(2)] = null);

(statearr_45171_45333[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45161 === (13))){
var inst_45113 = (state_45160[(10)]);
var inst_45116 = cljs.core.chunked_seq_QMARK_.call(null,inst_45113);
var state_45160__$1 = state_45160;
if(inst_45116){
var statearr_45172_45338 = state_45160__$1;
(statearr_45172_45338[(1)] = (16));

} else {
var statearr_45173_45339 = state_45160__$1;
(statearr_45173_45339[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45161 === (22))){
var inst_45145 = (state_45160[(2)]);
var state_45160__$1 = state_45160;
if(cljs.core.truth_(inst_45145)){
var statearr_45174_45345 = state_45160__$1;
(statearr_45174_45345[(1)] = (23));

} else {
var statearr_45175_45346 = state_45160__$1;
(statearr_45175_45346[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45161 === (6))){
var inst_45139 = (state_45160[(7)]);
var inst_45141 = (state_45160[(11)]);
var inst_45089 = (state_45160[(8)]);
var inst_45139__$1 = topic_fn.call(null,inst_45089);
var inst_45140 = cljs.core.deref.call(null,mults);
var inst_45141__$1 = cljs.core.get.call(null,inst_45140,inst_45139__$1);
var state_45160__$1 = (function (){var statearr_45176 = state_45160;
(statearr_45176[(7)] = inst_45139__$1);

(statearr_45176[(11)] = inst_45141__$1);

return statearr_45176;
})();
if(cljs.core.truth_(inst_45141__$1)){
var statearr_45177_45347 = state_45160__$1;
(statearr_45177_45347[(1)] = (19));

} else {
var statearr_45178_45348 = state_45160__$1;
(statearr_45178_45348[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45161 === (25))){
var inst_45150 = (state_45160[(2)]);
var state_45160__$1 = state_45160;
var statearr_45179_45349 = state_45160__$1;
(statearr_45179_45349[(2)] = inst_45150);

(statearr_45179_45349[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45161 === (17))){
var inst_45113 = (state_45160[(10)]);
var inst_45124 = cljs.core.first.call(null,inst_45113);
var inst_45125 = cljs.core.async.muxch_STAR_.call(null,inst_45124);
var inst_45126 = cljs.core.async.close_BANG_.call(null,inst_45125);
var inst_45127 = cljs.core.next.call(null,inst_45113);
var inst_45099 = inst_45127;
var inst_45100 = null;
var inst_45101 = (0);
var inst_45102 = (0);
var state_45160__$1 = (function (){var statearr_45196 = state_45160;
(statearr_45196[(12)] = inst_45101);

(statearr_45196[(13)] = inst_45126);

(statearr_45196[(14)] = inst_45100);

(statearr_45196[(15)] = inst_45099);

(statearr_45196[(16)] = inst_45102);

return statearr_45196;
})();
var statearr_45200_45352 = state_45160__$1;
(statearr_45200_45352[(2)] = null);

(statearr_45200_45352[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45161 === (3))){
var inst_45158 = (state_45160[(2)]);
var state_45160__$1 = state_45160;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45160__$1,inst_45158);
} else {
if((state_val_45161 === (12))){
var inst_45135 = (state_45160[(2)]);
var state_45160__$1 = state_45160;
var statearr_45201_45357 = state_45160__$1;
(statearr_45201_45357[(2)] = inst_45135);

(statearr_45201_45357[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45161 === (2))){
var state_45160__$1 = state_45160;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45160__$1,(4),ch);
} else {
if((state_val_45161 === (23))){
var state_45160__$1 = state_45160;
var statearr_45202_45364 = state_45160__$1;
(statearr_45202_45364[(2)] = null);

(statearr_45202_45364[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45161 === (19))){
var inst_45141 = (state_45160[(11)]);
var inst_45089 = (state_45160[(8)]);
var inst_45143 = cljs.core.async.muxch_STAR_.call(null,inst_45141);
var state_45160__$1 = state_45160;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45160__$1,(22),inst_45143,inst_45089);
} else {
if((state_val_45161 === (11))){
var inst_45113 = (state_45160[(10)]);
var inst_45099 = (state_45160[(15)]);
var inst_45113__$1 = cljs.core.seq.call(null,inst_45099);
var state_45160__$1 = (function (){var statearr_45203 = state_45160;
(statearr_45203[(10)] = inst_45113__$1);

return statearr_45203;
})();
if(inst_45113__$1){
var statearr_45204_45369 = state_45160__$1;
(statearr_45204_45369[(1)] = (13));

} else {
var statearr_45205_45371 = state_45160__$1;
(statearr_45205_45371[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45161 === (9))){
var inst_45137 = (state_45160[(2)]);
var state_45160__$1 = state_45160;
var statearr_45206_45372 = state_45160__$1;
(statearr_45206_45372[(2)] = inst_45137);

(statearr_45206_45372[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45161 === (5))){
var inst_45096 = cljs.core.deref.call(null,mults);
var inst_45097 = cljs.core.vals.call(null,inst_45096);
var inst_45098 = cljs.core.seq.call(null,inst_45097);
var inst_45099 = inst_45098;
var inst_45100 = null;
var inst_45101 = (0);
var inst_45102 = (0);
var state_45160__$1 = (function (){var statearr_45207 = state_45160;
(statearr_45207[(12)] = inst_45101);

(statearr_45207[(14)] = inst_45100);

(statearr_45207[(15)] = inst_45099);

(statearr_45207[(16)] = inst_45102);

return statearr_45207;
})();
var statearr_45211_45383 = state_45160__$1;
(statearr_45211_45383[(2)] = null);

(statearr_45211_45383[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45161 === (14))){
var state_45160__$1 = state_45160;
var statearr_45218_45394 = state_45160__$1;
(statearr_45218_45394[(2)] = null);

(statearr_45218_45394[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45161 === (16))){
var inst_45113 = (state_45160[(10)]);
var inst_45119 = cljs.core.chunk_first.call(null,inst_45113);
var inst_45120 = cljs.core.chunk_rest.call(null,inst_45113);
var inst_45121 = cljs.core.count.call(null,inst_45119);
var inst_45099 = inst_45120;
var inst_45100 = inst_45119;
var inst_45101 = inst_45121;
var inst_45102 = (0);
var state_45160__$1 = (function (){var statearr_45219 = state_45160;
(statearr_45219[(12)] = inst_45101);

(statearr_45219[(14)] = inst_45100);

(statearr_45219[(15)] = inst_45099);

(statearr_45219[(16)] = inst_45102);

return statearr_45219;
})();
var statearr_45220_45412 = state_45160__$1;
(statearr_45220_45412[(2)] = null);

(statearr_45220_45412[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45161 === (10))){
var inst_45101 = (state_45160[(12)]);
var inst_45100 = (state_45160[(14)]);
var inst_45099 = (state_45160[(15)]);
var inst_45102 = (state_45160[(16)]);
var inst_45107 = cljs.core._nth.call(null,inst_45100,inst_45102);
var inst_45108 = cljs.core.async.muxch_STAR_.call(null,inst_45107);
var inst_45109 = cljs.core.async.close_BANG_.call(null,inst_45108);
var inst_45110 = (inst_45102 + (1));
var tmp45215 = inst_45101;
var tmp45216 = inst_45100;
var tmp45217 = inst_45099;
var inst_45099__$1 = tmp45217;
var inst_45100__$1 = tmp45216;
var inst_45101__$1 = tmp45215;
var inst_45102__$1 = inst_45110;
var state_45160__$1 = (function (){var statearr_45221 = state_45160;
(statearr_45221[(12)] = inst_45101__$1);

(statearr_45221[(14)] = inst_45100__$1);

(statearr_45221[(15)] = inst_45099__$1);

(statearr_45221[(17)] = inst_45109);

(statearr_45221[(16)] = inst_45102__$1);

return statearr_45221;
})();
var statearr_45222_45436 = state_45160__$1;
(statearr_45222_45436[(2)] = null);

(statearr_45222_45436[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45161 === (18))){
var inst_45130 = (state_45160[(2)]);
var state_45160__$1 = state_45160;
var statearr_45223_45437 = state_45160__$1;
(statearr_45223_45437[(2)] = inst_45130);

(statearr_45223_45437[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45161 === (8))){
var inst_45101 = (state_45160[(12)]);
var inst_45102 = (state_45160[(16)]);
var inst_45104 = (inst_45102 < inst_45101);
var inst_45105 = inst_45104;
var state_45160__$1 = state_45160;
if(cljs.core.truth_(inst_45105)){
var statearr_45224_45441 = state_45160__$1;
(statearr_45224_45441[(1)] = (10));

} else {
var statearr_45225_45442 = state_45160__$1;
(statearr_45225_45442[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__41728__auto___45274,mults,ensure_mult,p))
;
return ((function (switch__41485__auto__,c__41728__auto___45274,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__41486__auto__ = null;
var cljs$core$async$state_machine__41486__auto____0 = (function (){
var statearr_45229 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45229[(0)] = cljs$core$async$state_machine__41486__auto__);

(statearr_45229[(1)] = (1));

return statearr_45229;
});
var cljs$core$async$state_machine__41486__auto____1 = (function (state_45160){
while(true){
var ret_value__41487__auto__ = (function (){try{while(true){
var result__41488__auto__ = switch__41485__auto__.call(null,state_45160);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41488__auto__;
}
break;
}
}catch (e45230){if((e45230 instanceof Object)){
var ex__41489__auto__ = e45230;
var statearr_45231_45443 = state_45160;
(statearr_45231_45443[(5)] = ex__41489__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45160);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45230;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41487__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45447 = state_45160;
state_45160 = G__45447;
continue;
} else {
return ret_value__41487__auto__;
}
break;
}
});
cljs$core$async$state_machine__41486__auto__ = function(state_45160){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41486__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41486__auto____1.call(this,state_45160);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__41486__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41486__auto____0;
cljs$core$async$state_machine__41486__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41486__auto____1;
return cljs$core$async$state_machine__41486__auto__;
})()
;})(switch__41485__auto__,c__41728__auto___45274,mults,ensure_mult,p))
})();
var state__41730__auto__ = (function (){var statearr_45235 = f__41729__auto__.call(null);
(statearr_45235[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41728__auto___45274);

return statearr_45235;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41730__auto__);
});})(c__41728__auto___45274,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args45461 = [];
var len__28543__auto___45484 = arguments.length;
var i__28544__auto___45485 = (0);
while(true){
if((i__28544__auto___45485 < len__28543__auto___45484)){
args45461.push((arguments[i__28544__auto___45485]));

var G__45486 = (i__28544__auto___45485 + (1));
i__28544__auto___45485 = G__45486;
continue;
} else {
}
break;
}

var G__45472 = args45461.length;
switch (G__45472) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args45461.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args45491 = [];
var len__28543__auto___45502 = arguments.length;
var i__28544__auto___45503 = (0);
while(true){
if((i__28544__auto___45503 < len__28543__auto___45502)){
args45491.push((arguments[i__28544__auto___45503]));

var G__45504 = (i__28544__auto___45503 + (1));
i__28544__auto___45503 = G__45504;
continue;
} else {
}
break;
}

var G__45498 = args45491.length;
switch (G__45498) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args45491.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args45506 = [];
var len__28543__auto___45653 = arguments.length;
var i__28544__auto___45655 = (0);
while(true){
if((i__28544__auto___45655 < len__28543__auto___45653)){
args45506.push((arguments[i__28544__auto___45655]));

var G__45660 = (i__28544__auto___45655 + (1));
i__28544__auto___45655 = G__45660;
continue;
} else {
}
break;
}

var G__45520 = args45506.length;
switch (G__45520) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args45506.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__41728__auto___45683 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41728__auto___45683,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__41729__auto__ = (function (){var switch__41485__auto__ = ((function (c__41728__auto___45683,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_45581){
var state_val_45585 = (state_45581[(1)]);
if((state_val_45585 === (7))){
var state_45581__$1 = state_45581;
var statearr_45589_45685 = state_45581__$1;
(statearr_45589_45685[(2)] = null);

(statearr_45589_45685[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45585 === (1))){
var state_45581__$1 = state_45581;
var statearr_45590_45686 = state_45581__$1;
(statearr_45590_45686[(2)] = null);

(statearr_45590_45686[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45585 === (4))){
var inst_45532 = (state_45581[(7)]);
var inst_45534 = (inst_45532 < cnt);
var state_45581__$1 = state_45581;
if(cljs.core.truth_(inst_45534)){
var statearr_45591_45687 = state_45581__$1;
(statearr_45591_45687[(1)] = (6));

} else {
var statearr_45592_45689 = state_45581__$1;
(statearr_45592_45689[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45585 === (15))){
var inst_45577 = (state_45581[(2)]);
var state_45581__$1 = state_45581;
var statearr_45593_45690 = state_45581__$1;
(statearr_45593_45690[(2)] = inst_45577);

(statearr_45593_45690[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45585 === (13))){
var inst_45567 = cljs.core.async.close_BANG_.call(null,out);
var state_45581__$1 = state_45581;
var statearr_45594_45691 = state_45581__$1;
(statearr_45594_45691[(2)] = inst_45567);

(statearr_45594_45691[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45585 === (6))){
var state_45581__$1 = state_45581;
var statearr_45595_45695 = state_45581__$1;
(statearr_45595_45695[(2)] = null);

(statearr_45595_45695[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45585 === (3))){
var inst_45579 = (state_45581[(2)]);
var state_45581__$1 = state_45581;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45581__$1,inst_45579);
} else {
if((state_val_45585 === (12))){
var inst_45564 = (state_45581[(8)]);
var inst_45564__$1 = (state_45581[(2)]);
var inst_45565 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_45564__$1);
var state_45581__$1 = (function (){var statearr_45610 = state_45581;
(statearr_45610[(8)] = inst_45564__$1);

return statearr_45610;
})();
if(cljs.core.truth_(inst_45565)){
var statearr_45611_45699 = state_45581__$1;
(statearr_45611_45699[(1)] = (13));

} else {
var statearr_45612_45700 = state_45581__$1;
(statearr_45612_45700[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45585 === (2))){
var inst_45528 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_45532 = (0);
var state_45581__$1 = (function (){var statearr_45619 = state_45581;
(statearr_45619[(9)] = inst_45528);

(statearr_45619[(7)] = inst_45532);

return statearr_45619;
})();
var statearr_45620_45701 = state_45581__$1;
(statearr_45620_45701[(2)] = null);

(statearr_45620_45701[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45585 === (11))){
var inst_45532 = (state_45581[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_45581,(10),Object,null,(9));
var inst_45551 = chs__$1.call(null,inst_45532);
var inst_45552 = done.call(null,inst_45532);
var inst_45553 = cljs.core.async.take_BANG_.call(null,inst_45551,inst_45552);
var state_45581__$1 = state_45581;
var statearr_45621_45702 = state_45581__$1;
(statearr_45621_45702[(2)] = inst_45553);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45581__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45585 === (9))){
var inst_45532 = (state_45581[(7)]);
var inst_45555 = (state_45581[(2)]);
var inst_45556 = (inst_45532 + (1));
var inst_45532__$1 = inst_45556;
var state_45581__$1 = (function (){var statearr_45622 = state_45581;
(statearr_45622[(7)] = inst_45532__$1);

(statearr_45622[(10)] = inst_45555);

return statearr_45622;
})();
var statearr_45627_45704 = state_45581__$1;
(statearr_45627_45704[(2)] = null);

(statearr_45627_45704[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45585 === (5))){
var inst_45562 = (state_45581[(2)]);
var state_45581__$1 = (function (){var statearr_45628 = state_45581;
(statearr_45628[(11)] = inst_45562);

return statearr_45628;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45581__$1,(12),dchan);
} else {
if((state_val_45585 === (14))){
var inst_45564 = (state_45581[(8)]);
var inst_45572 = cljs.core.apply.call(null,f,inst_45564);
var state_45581__$1 = state_45581;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45581__$1,(16),out,inst_45572);
} else {
if((state_val_45585 === (16))){
var inst_45574 = (state_45581[(2)]);
var state_45581__$1 = (function (){var statearr_45629 = state_45581;
(statearr_45629[(12)] = inst_45574);

return statearr_45629;
})();
var statearr_45630_45709 = state_45581__$1;
(statearr_45630_45709[(2)] = null);

(statearr_45630_45709[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45585 === (10))){
var inst_45539 = (state_45581[(2)]);
var inst_45540 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_45581__$1 = (function (){var statearr_45631 = state_45581;
(statearr_45631[(13)] = inst_45539);

return statearr_45631;
})();
var statearr_45632_45713 = state_45581__$1;
(statearr_45632_45713[(2)] = inst_45540);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45581__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45585 === (8))){
var inst_45560 = (state_45581[(2)]);
var state_45581__$1 = state_45581;
var statearr_45633_45714 = state_45581__$1;
(statearr_45633_45714[(2)] = inst_45560);

(statearr_45633_45714[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__41728__auto___45683,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__41485__auto__,c__41728__auto___45683,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__41486__auto__ = null;
var cljs$core$async$state_machine__41486__auto____0 = (function (){
var statearr_45643 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45643[(0)] = cljs$core$async$state_machine__41486__auto__);

(statearr_45643[(1)] = (1));

return statearr_45643;
});
var cljs$core$async$state_machine__41486__auto____1 = (function (state_45581){
while(true){
var ret_value__41487__auto__ = (function (){try{while(true){
var result__41488__auto__ = switch__41485__auto__.call(null,state_45581);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41488__auto__;
}
break;
}
}catch (e45644){if((e45644 instanceof Object)){
var ex__41489__auto__ = e45644;
var statearr_45646_45715 = state_45581;
(statearr_45646_45715[(5)] = ex__41489__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45581);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45644;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41487__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45716 = state_45581;
state_45581 = G__45716;
continue;
} else {
return ret_value__41487__auto__;
}
break;
}
});
cljs$core$async$state_machine__41486__auto__ = function(state_45581){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41486__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41486__auto____1.call(this,state_45581);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__41486__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41486__auto____0;
cljs$core$async$state_machine__41486__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41486__auto____1;
return cljs$core$async$state_machine__41486__auto__;
})()
;})(switch__41485__auto__,c__41728__auto___45683,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__41730__auto__ = (function (){var statearr_45647 = f__41729__auto__.call(null);
(statearr_45647[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41728__auto___45683);

return statearr_45647;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41730__auto__);
});})(c__41728__auto___45683,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args45718 = [];
var len__28543__auto___45818 = arguments.length;
var i__28544__auto___45819 = (0);
while(true){
if((i__28544__auto___45819 < len__28543__auto___45818)){
args45718.push((arguments[i__28544__auto___45819]));

var G__45820 = (i__28544__auto___45819 + (1));
i__28544__auto___45819 = G__45820;
continue;
} else {
}
break;
}

var G__45720 = args45718.length;
switch (G__45720) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args45718.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__41728__auto___45827 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41728__auto___45827,out){
return (function (){
var f__41729__auto__ = (function (){var switch__41485__auto__ = ((function (c__41728__auto___45827,out){
return (function (state_45764){
var state_val_45765 = (state_45764[(1)]);
if((state_val_45765 === (7))){
var inst_45743 = (state_45764[(7)]);
var inst_45744 = (state_45764[(8)]);
var inst_45743__$1 = (state_45764[(2)]);
var inst_45744__$1 = cljs.core.nth.call(null,inst_45743__$1,(0),null);
var inst_45745 = cljs.core.nth.call(null,inst_45743__$1,(1),null);
var inst_45746 = (inst_45744__$1 == null);
var state_45764__$1 = (function (){var statearr_45766 = state_45764;
(statearr_45766[(7)] = inst_45743__$1);

(statearr_45766[(8)] = inst_45744__$1);

(statearr_45766[(9)] = inst_45745);

return statearr_45766;
})();
if(cljs.core.truth_(inst_45746)){
var statearr_45767_45831 = state_45764__$1;
(statearr_45767_45831[(1)] = (8));

} else {
var statearr_45768_45832 = state_45764__$1;
(statearr_45768_45832[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45765 === (1))){
var inst_45733 = cljs.core.vec.call(null,chs);
var inst_45734 = inst_45733;
var state_45764__$1 = (function (){var statearr_45769 = state_45764;
(statearr_45769[(10)] = inst_45734);

return statearr_45769;
})();
var statearr_45770_45838 = state_45764__$1;
(statearr_45770_45838[(2)] = null);

(statearr_45770_45838[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45765 === (4))){
var inst_45734 = (state_45764[(10)]);
var state_45764__$1 = state_45764;
return cljs.core.async.ioc_alts_BANG_.call(null,state_45764__$1,(7),inst_45734);
} else {
if((state_val_45765 === (6))){
var inst_45760 = (state_45764[(2)]);
var state_45764__$1 = state_45764;
var statearr_45771_45839 = state_45764__$1;
(statearr_45771_45839[(2)] = inst_45760);

(statearr_45771_45839[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45765 === (3))){
var inst_45762 = (state_45764[(2)]);
var state_45764__$1 = state_45764;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45764__$1,inst_45762);
} else {
if((state_val_45765 === (2))){
var inst_45734 = (state_45764[(10)]);
var inst_45736 = cljs.core.count.call(null,inst_45734);
var inst_45737 = (inst_45736 > (0));
var state_45764__$1 = state_45764;
if(cljs.core.truth_(inst_45737)){
var statearr_45773_45843 = state_45764__$1;
(statearr_45773_45843[(1)] = (4));

} else {
var statearr_45774_45851 = state_45764__$1;
(statearr_45774_45851[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45765 === (11))){
var inst_45734 = (state_45764[(10)]);
var inst_45753 = (state_45764[(2)]);
var tmp45772 = inst_45734;
var inst_45734__$1 = tmp45772;
var state_45764__$1 = (function (){var statearr_45787 = state_45764;
(statearr_45787[(10)] = inst_45734__$1);

(statearr_45787[(11)] = inst_45753);

return statearr_45787;
})();
var statearr_45788_45859 = state_45764__$1;
(statearr_45788_45859[(2)] = null);

(statearr_45788_45859[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45765 === (9))){
var inst_45744 = (state_45764[(8)]);
var state_45764__$1 = state_45764;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45764__$1,(11),out,inst_45744);
} else {
if((state_val_45765 === (5))){
var inst_45758 = cljs.core.async.close_BANG_.call(null,out);
var state_45764__$1 = state_45764;
var statearr_45789_45864 = state_45764__$1;
(statearr_45789_45864[(2)] = inst_45758);

(statearr_45789_45864[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45765 === (10))){
var inst_45756 = (state_45764[(2)]);
var state_45764__$1 = state_45764;
var statearr_45790_45878 = state_45764__$1;
(statearr_45790_45878[(2)] = inst_45756);

(statearr_45790_45878[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45765 === (8))){
var inst_45743 = (state_45764[(7)]);
var inst_45734 = (state_45764[(10)]);
var inst_45744 = (state_45764[(8)]);
var inst_45745 = (state_45764[(9)]);
var inst_45748 = (function (){var cs = inst_45734;
var vec__45739 = inst_45743;
var v = inst_45744;
var c = inst_45745;
return ((function (cs,vec__45739,v,c,inst_45743,inst_45734,inst_45744,inst_45745,state_val_45765,c__41728__auto___45827,out){
return (function (p1__45717_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__45717_SHARP_);
});
;})(cs,vec__45739,v,c,inst_45743,inst_45734,inst_45744,inst_45745,state_val_45765,c__41728__auto___45827,out))
})();
var inst_45749 = cljs.core.filterv.call(null,inst_45748,inst_45734);
var inst_45734__$1 = inst_45749;
var state_45764__$1 = (function (){var statearr_45792 = state_45764;
(statearr_45792[(10)] = inst_45734__$1);

return statearr_45792;
})();
var statearr_45794_45907 = state_45764__$1;
(statearr_45794_45907[(2)] = null);

(statearr_45794_45907[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__41728__auto___45827,out))
;
return ((function (switch__41485__auto__,c__41728__auto___45827,out){
return (function() {
var cljs$core$async$state_machine__41486__auto__ = null;
var cljs$core$async$state_machine__41486__auto____0 = (function (){
var statearr_45803 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45803[(0)] = cljs$core$async$state_machine__41486__auto__);

(statearr_45803[(1)] = (1));

return statearr_45803;
});
var cljs$core$async$state_machine__41486__auto____1 = (function (state_45764){
while(true){
var ret_value__41487__auto__ = (function (){try{while(true){
var result__41488__auto__ = switch__41485__auto__.call(null,state_45764);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41488__auto__;
}
break;
}
}catch (e45806){if((e45806 instanceof Object)){
var ex__41489__auto__ = e45806;
var statearr_45807_45908 = state_45764;
(statearr_45807_45908[(5)] = ex__41489__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45764);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45806;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41487__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45909 = state_45764;
state_45764 = G__45909;
continue;
} else {
return ret_value__41487__auto__;
}
break;
}
});
cljs$core$async$state_machine__41486__auto__ = function(state_45764){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41486__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41486__auto____1.call(this,state_45764);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__41486__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41486__auto____0;
cljs$core$async$state_machine__41486__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41486__auto____1;
return cljs$core$async$state_machine__41486__auto__;
})()
;})(switch__41485__auto__,c__41728__auto___45827,out))
})();
var state__41730__auto__ = (function (){var statearr_45809 = f__41729__auto__.call(null);
(statearr_45809[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41728__auto___45827);

return statearr_45809;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41730__auto__);
});})(c__41728__auto___45827,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args45910 = [];
var len__28543__auto___45972 = arguments.length;
var i__28544__auto___45973 = (0);
while(true){
if((i__28544__auto___45973 < len__28543__auto___45972)){
args45910.push((arguments[i__28544__auto___45973]));

var G__45974 = (i__28544__auto___45973 + (1));
i__28544__auto___45973 = G__45974;
continue;
} else {
}
break;
}

var G__45912 = args45910.length;
switch (G__45912) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args45910.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__41728__auto___45988 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41728__auto___45988,out){
return (function (){
var f__41729__auto__ = (function (){var switch__41485__auto__ = ((function (c__41728__auto___45988,out){
return (function (state_45945){
var state_val_45946 = (state_45945[(1)]);
if((state_val_45946 === (7))){
var inst_45927 = (state_45945[(7)]);
var inst_45927__$1 = (state_45945[(2)]);
var inst_45928 = (inst_45927__$1 == null);
var inst_45929 = cljs.core.not.call(null,inst_45928);
var state_45945__$1 = (function (){var statearr_45947 = state_45945;
(statearr_45947[(7)] = inst_45927__$1);

return statearr_45947;
})();
if(inst_45929){
var statearr_45951_45990 = state_45945__$1;
(statearr_45951_45990[(1)] = (8));

} else {
var statearr_45952_45991 = state_45945__$1;
(statearr_45952_45991[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45946 === (1))){
var inst_45917 = (0);
var state_45945__$1 = (function (){var statearr_45953 = state_45945;
(statearr_45953[(8)] = inst_45917);

return statearr_45953;
})();
var statearr_45954_45992 = state_45945__$1;
(statearr_45954_45992[(2)] = null);

(statearr_45954_45992[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45946 === (4))){
var state_45945__$1 = state_45945;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45945__$1,(7),ch);
} else {
if((state_val_45946 === (6))){
var inst_45940 = (state_45945[(2)]);
var state_45945__$1 = state_45945;
var statearr_45955_45997 = state_45945__$1;
(statearr_45955_45997[(2)] = inst_45940);

(statearr_45955_45997[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45946 === (3))){
var inst_45942 = (state_45945[(2)]);
var inst_45943 = cljs.core.async.close_BANG_.call(null,out);
var state_45945__$1 = (function (){var statearr_45956 = state_45945;
(statearr_45956[(9)] = inst_45942);

return statearr_45956;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45945__$1,inst_45943);
} else {
if((state_val_45946 === (2))){
var inst_45917 = (state_45945[(8)]);
var inst_45919 = (inst_45917 < n);
var state_45945__$1 = state_45945;
if(cljs.core.truth_(inst_45919)){
var statearr_45957_46001 = state_45945__$1;
(statearr_45957_46001[(1)] = (4));

} else {
var statearr_45958_46002 = state_45945__$1;
(statearr_45958_46002[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45946 === (11))){
var inst_45917 = (state_45945[(8)]);
var inst_45932 = (state_45945[(2)]);
var inst_45933 = (inst_45917 + (1));
var inst_45917__$1 = inst_45933;
var state_45945__$1 = (function (){var statearr_45959 = state_45945;
(statearr_45959[(10)] = inst_45932);

(statearr_45959[(8)] = inst_45917__$1);

return statearr_45959;
})();
var statearr_45960_46003 = state_45945__$1;
(statearr_45960_46003[(2)] = null);

(statearr_45960_46003[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45946 === (9))){
var state_45945__$1 = state_45945;
var statearr_45961_46004 = state_45945__$1;
(statearr_45961_46004[(2)] = null);

(statearr_45961_46004[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45946 === (5))){
var state_45945__$1 = state_45945;
var statearr_45962_46006 = state_45945__$1;
(statearr_45962_46006[(2)] = null);

(statearr_45962_46006[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45946 === (10))){
var inst_45937 = (state_45945[(2)]);
var state_45945__$1 = state_45945;
var statearr_45963_46007 = state_45945__$1;
(statearr_45963_46007[(2)] = inst_45937);

(statearr_45963_46007[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45946 === (8))){
var inst_45927 = (state_45945[(7)]);
var state_45945__$1 = state_45945;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45945__$1,(11),out,inst_45927);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__41728__auto___45988,out))
;
return ((function (switch__41485__auto__,c__41728__auto___45988,out){
return (function() {
var cljs$core$async$state_machine__41486__auto__ = null;
var cljs$core$async$state_machine__41486__auto____0 = (function (){
var statearr_45967 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_45967[(0)] = cljs$core$async$state_machine__41486__auto__);

(statearr_45967[(1)] = (1));

return statearr_45967;
});
var cljs$core$async$state_machine__41486__auto____1 = (function (state_45945){
while(true){
var ret_value__41487__auto__ = (function (){try{while(true){
var result__41488__auto__ = switch__41485__auto__.call(null,state_45945);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41488__auto__;
}
break;
}
}catch (e45968){if((e45968 instanceof Object)){
var ex__41489__auto__ = e45968;
var statearr_45969_46017 = state_45945;
(statearr_45969_46017[(5)] = ex__41489__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45945);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45968;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41487__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46022 = state_45945;
state_45945 = G__46022;
continue;
} else {
return ret_value__41487__auto__;
}
break;
}
});
cljs$core$async$state_machine__41486__auto__ = function(state_45945){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41486__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41486__auto____1.call(this,state_45945);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__41486__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41486__auto____0;
cljs$core$async$state_machine__41486__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41486__auto____1;
return cljs$core$async$state_machine__41486__auto__;
})()
;})(switch__41485__auto__,c__41728__auto___45988,out))
})();
var state__41730__auto__ = (function (){var statearr_45970 = f__41729__auto__.call(null);
(statearr_45970[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41728__auto___45988);

return statearr_45970;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41730__auto__);
});})(c__41728__auto___45988,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async46043 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46043 = (function (f,ch,meta46044){
this.f = f;
this.ch = ch;
this.meta46044 = meta46044;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async46043.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46045,meta46044__$1){
var self__ = this;
var _46045__$1 = this;
return (new cljs.core.async.t_cljs$core$async46043(self__.f,self__.ch,meta46044__$1));
});

cljs.core.async.t_cljs$core$async46043.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46045){
var self__ = this;
var _46045__$1 = this;
return self__.meta46044;
});

cljs.core.async.t_cljs$core$async46043.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46043.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async46043.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async46043.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46043.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async46046 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46046 = (function (f,ch,meta46044,_,fn1,meta46047){
this.f = f;
this.ch = ch;
this.meta46044 = meta46044;
this._ = _;
this.fn1 = fn1;
this.meta46047 = meta46047;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async46046.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_46048,meta46047__$1){
var self__ = this;
var _46048__$1 = this;
return (new cljs.core.async.t_cljs$core$async46046(self__.f,self__.ch,self__.meta46044,self__._,self__.fn1,meta46047__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async46046.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_46048){
var self__ = this;
var _46048__$1 = this;
return self__.meta46047;
});})(___$1))
;

cljs.core.async.t_cljs$core$async46046.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46046.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async46046.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async46046.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__46032_SHARP_){
return f1.call(null,(((p1__46032_SHARP_ == null))?null:self__.f.call(null,p1__46032_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async46046.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta46044","meta46044",1053295261,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async46043","cljs.core.async/t_cljs$core$async46043",1425220157,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta46047","meta46047",93696195,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async46046.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46046.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46046";

cljs.core.async.t_cljs$core$async46046.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__27979__auto__,writer__27980__auto__,opt__27981__auto__){
return cljs.core._write.call(null,writer__27980__auto__,"cljs.core.async/t_cljs$core$async46046");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async46046 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async46046(f__$1,ch__$1,meta46044__$1,___$2,fn1__$1,meta46047){
return (new cljs.core.async.t_cljs$core$async46046(f__$1,ch__$1,meta46044__$1,___$2,fn1__$1,meta46047));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async46046(self__.f,self__.ch,self__.meta46044,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__27310__auto__ = ret;
if(cljs.core.truth_(and__27310__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__27310__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async46043.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46043.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async46043.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta46044","meta46044",1053295261,null)], null);
});

cljs.core.async.t_cljs$core$async46043.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46043.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46043";

cljs.core.async.t_cljs$core$async46043.cljs$lang$ctorPrWriter = (function (this__27979__auto__,writer__27980__auto__,opt__27981__auto__){
return cljs.core._write.call(null,writer__27980__auto__,"cljs.core.async/t_cljs$core$async46043");
});

cljs.core.async.__GT_t_cljs$core$async46043 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async46043(f__$1,ch__$1,meta46044){
return (new cljs.core.async.t_cljs$core$async46043(f__$1,ch__$1,meta46044));
});

}

return (new cljs.core.async.t_cljs$core$async46043(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async46098 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46098 = (function (f,ch,meta46099){
this.f = f;
this.ch = ch;
this.meta46099 = meta46099;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async46098.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46100,meta46099__$1){
var self__ = this;
var _46100__$1 = this;
return (new cljs.core.async.t_cljs$core$async46098(self__.f,self__.ch,meta46099__$1));
});

cljs.core.async.t_cljs$core$async46098.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46100){
var self__ = this;
var _46100__$1 = this;
return self__.meta46099;
});

cljs.core.async.t_cljs$core$async46098.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46098.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async46098.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46098.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async46098.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46098.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async46098.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta46099","meta46099",-962235964,null)], null);
});

cljs.core.async.t_cljs$core$async46098.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46098.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46098";

cljs.core.async.t_cljs$core$async46098.cljs$lang$ctorPrWriter = (function (this__27979__auto__,writer__27980__auto__,opt__27981__auto__){
return cljs.core._write.call(null,writer__27980__auto__,"cljs.core.async/t_cljs$core$async46098");
});

cljs.core.async.__GT_t_cljs$core$async46098 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async46098(f__$1,ch__$1,meta46099){
return (new cljs.core.async.t_cljs$core$async46098(f__$1,ch__$1,meta46099));
});

}

return (new cljs.core.async.t_cljs$core$async46098(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async46115 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46115 = (function (p,ch,meta46116){
this.p = p;
this.ch = ch;
this.meta46116 = meta46116;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async46115.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46117,meta46116__$1){
var self__ = this;
var _46117__$1 = this;
return (new cljs.core.async.t_cljs$core$async46115(self__.p,self__.ch,meta46116__$1));
});

cljs.core.async.t_cljs$core$async46115.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46117){
var self__ = this;
var _46117__$1 = this;
return self__.meta46116;
});

cljs.core.async.t_cljs$core$async46115.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46115.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async46115.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async46115.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46115.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async46115.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46115.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async46115.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta46116","meta46116",708279236,null)], null);
});

cljs.core.async.t_cljs$core$async46115.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46115.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46115";

cljs.core.async.t_cljs$core$async46115.cljs$lang$ctorPrWriter = (function (this__27979__auto__,writer__27980__auto__,opt__27981__auto__){
return cljs.core._write.call(null,writer__27980__auto__,"cljs.core.async/t_cljs$core$async46115");
});

cljs.core.async.__GT_t_cljs$core$async46115 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async46115(p__$1,ch__$1,meta46116){
return (new cljs.core.async.t_cljs$core$async46115(p__$1,ch__$1,meta46116));
});

}

return (new cljs.core.async.t_cljs$core$async46115(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args46136 = [];
var len__28543__auto___46182 = arguments.length;
var i__28544__auto___46183 = (0);
while(true){
if((i__28544__auto___46183 < len__28543__auto___46182)){
args46136.push((arguments[i__28544__auto___46183]));

var G__46184 = (i__28544__auto___46183 + (1));
i__28544__auto___46183 = G__46184;
continue;
} else {
}
break;
}

var G__46138 = args46136.length;
switch (G__46138) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args46136.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__41728__auto___46191 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41728__auto___46191,out){
return (function (){
var f__41729__auto__ = (function (){var switch__41485__auto__ = ((function (c__41728__auto___46191,out){
return (function (state_46159){
var state_val_46160 = (state_46159[(1)]);
if((state_val_46160 === (7))){
var inst_46155 = (state_46159[(2)]);
var state_46159__$1 = state_46159;
var statearr_46161_46192 = state_46159__$1;
(statearr_46161_46192[(2)] = inst_46155);

(statearr_46161_46192[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46160 === (1))){
var state_46159__$1 = state_46159;
var statearr_46162_46201 = state_46159__$1;
(statearr_46162_46201[(2)] = null);

(statearr_46162_46201[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46160 === (4))){
var inst_46141 = (state_46159[(7)]);
var inst_46141__$1 = (state_46159[(2)]);
var inst_46142 = (inst_46141__$1 == null);
var state_46159__$1 = (function (){var statearr_46163 = state_46159;
(statearr_46163[(7)] = inst_46141__$1);

return statearr_46163;
})();
if(cljs.core.truth_(inst_46142)){
var statearr_46164_46205 = state_46159__$1;
(statearr_46164_46205[(1)] = (5));

} else {
var statearr_46165_46206 = state_46159__$1;
(statearr_46165_46206[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46160 === (6))){
var inst_46141 = (state_46159[(7)]);
var inst_46146 = p.call(null,inst_46141);
var state_46159__$1 = state_46159;
if(cljs.core.truth_(inst_46146)){
var statearr_46166_46207 = state_46159__$1;
(statearr_46166_46207[(1)] = (8));

} else {
var statearr_46167_46208 = state_46159__$1;
(statearr_46167_46208[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46160 === (3))){
var inst_46157 = (state_46159[(2)]);
var state_46159__$1 = state_46159;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46159__$1,inst_46157);
} else {
if((state_val_46160 === (2))){
var state_46159__$1 = state_46159;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46159__$1,(4),ch);
} else {
if((state_val_46160 === (11))){
var inst_46149 = (state_46159[(2)]);
var state_46159__$1 = state_46159;
var statearr_46169_46209 = state_46159__$1;
(statearr_46169_46209[(2)] = inst_46149);

(statearr_46169_46209[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46160 === (9))){
var state_46159__$1 = state_46159;
var statearr_46170_46210 = state_46159__$1;
(statearr_46170_46210[(2)] = null);

(statearr_46170_46210[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46160 === (5))){
var inst_46144 = cljs.core.async.close_BANG_.call(null,out);
var state_46159__$1 = state_46159;
var statearr_46171_46211 = state_46159__$1;
(statearr_46171_46211[(2)] = inst_46144);

(statearr_46171_46211[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46160 === (10))){
var inst_46152 = (state_46159[(2)]);
var state_46159__$1 = (function (){var statearr_46172 = state_46159;
(statearr_46172[(8)] = inst_46152);

return statearr_46172;
})();
var statearr_46173_46212 = state_46159__$1;
(statearr_46173_46212[(2)] = null);

(statearr_46173_46212[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46160 === (8))){
var inst_46141 = (state_46159[(7)]);
var state_46159__$1 = state_46159;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46159__$1,(11),out,inst_46141);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__41728__auto___46191,out))
;
return ((function (switch__41485__auto__,c__41728__auto___46191,out){
return (function() {
var cljs$core$async$state_machine__41486__auto__ = null;
var cljs$core$async$state_machine__41486__auto____0 = (function (){
var statearr_46178 = [null,null,null,null,null,null,null,null,null];
(statearr_46178[(0)] = cljs$core$async$state_machine__41486__auto__);

(statearr_46178[(1)] = (1));

return statearr_46178;
});
var cljs$core$async$state_machine__41486__auto____1 = (function (state_46159){
while(true){
var ret_value__41487__auto__ = (function (){try{while(true){
var result__41488__auto__ = switch__41485__auto__.call(null,state_46159);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41488__auto__;
}
break;
}
}catch (e46179){if((e46179 instanceof Object)){
var ex__41489__auto__ = e46179;
var statearr_46180_46213 = state_46159;
(statearr_46180_46213[(5)] = ex__41489__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46159);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46179;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41487__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46217 = state_46159;
state_46159 = G__46217;
continue;
} else {
return ret_value__41487__auto__;
}
break;
}
});
cljs$core$async$state_machine__41486__auto__ = function(state_46159){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41486__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41486__auto____1.call(this,state_46159);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__41486__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41486__auto____0;
cljs$core$async$state_machine__41486__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41486__auto____1;
return cljs$core$async$state_machine__41486__auto__;
})()
;})(switch__41485__auto__,c__41728__auto___46191,out))
})();
var state__41730__auto__ = (function (){var statearr_46181 = f__41729__auto__.call(null);
(statearr_46181[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41728__auto___46191);

return statearr_46181;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41730__auto__);
});})(c__41728__auto___46191,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args46221 = [];
var len__28543__auto___46227 = arguments.length;
var i__28544__auto___46228 = (0);
while(true){
if((i__28544__auto___46228 < len__28543__auto___46227)){
args46221.push((arguments[i__28544__auto___46228]));

var G__46232 = (i__28544__auto___46228 + (1));
i__28544__auto___46228 = G__46232;
continue;
} else {
}
break;
}

var G__46223 = args46221.length;
switch (G__46223) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args46221.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__41728__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41728__auto__){
return (function (){
var f__41729__auto__ = (function (){var switch__41485__auto__ = ((function (c__41728__auto__){
return (function (state_46410){
var state_val_46411 = (state_46410[(1)]);
if((state_val_46411 === (7))){
var inst_46406 = (state_46410[(2)]);
var state_46410__$1 = state_46410;
var statearr_46412_46474 = state_46410__$1;
(statearr_46412_46474[(2)] = inst_46406);

(statearr_46412_46474[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46411 === (20))){
var inst_46372 = (state_46410[(7)]);
var inst_46386 = (state_46410[(2)]);
var inst_46387 = cljs.core.next.call(null,inst_46372);
var inst_46357 = inst_46387;
var inst_46358 = null;
var inst_46359 = (0);
var inst_46360 = (0);
var state_46410__$1 = (function (){var statearr_46413 = state_46410;
(statearr_46413[(8)] = inst_46359);

(statearr_46413[(9)] = inst_46360);

(statearr_46413[(10)] = inst_46357);

(statearr_46413[(11)] = inst_46358);

(statearr_46413[(12)] = inst_46386);

return statearr_46413;
})();
var statearr_46417_46480 = state_46410__$1;
(statearr_46417_46480[(2)] = null);

(statearr_46417_46480[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46411 === (1))){
var state_46410__$1 = state_46410;
var statearr_46419_46481 = state_46410__$1;
(statearr_46419_46481[(2)] = null);

(statearr_46419_46481[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46411 === (4))){
var inst_46345 = (state_46410[(13)]);
var inst_46345__$1 = (state_46410[(2)]);
var inst_46346 = (inst_46345__$1 == null);
var state_46410__$1 = (function (){var statearr_46420 = state_46410;
(statearr_46420[(13)] = inst_46345__$1);

return statearr_46420;
})();
if(cljs.core.truth_(inst_46346)){
var statearr_46421_46494 = state_46410__$1;
(statearr_46421_46494[(1)] = (5));

} else {
var statearr_46422_46495 = state_46410__$1;
(statearr_46422_46495[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46411 === (15))){
var state_46410__$1 = state_46410;
var statearr_46426_46496 = state_46410__$1;
(statearr_46426_46496[(2)] = null);

(statearr_46426_46496[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46411 === (21))){
var state_46410__$1 = state_46410;
var statearr_46427_46497 = state_46410__$1;
(statearr_46427_46497[(2)] = null);

(statearr_46427_46497[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46411 === (13))){
var inst_46359 = (state_46410[(8)]);
var inst_46360 = (state_46410[(9)]);
var inst_46357 = (state_46410[(10)]);
var inst_46358 = (state_46410[(11)]);
var inst_46368 = (state_46410[(2)]);
var inst_46369 = (inst_46360 + (1));
var tmp46423 = inst_46359;
var tmp46424 = inst_46357;
var tmp46425 = inst_46358;
var inst_46357__$1 = tmp46424;
var inst_46358__$1 = tmp46425;
var inst_46359__$1 = tmp46423;
var inst_46360__$1 = inst_46369;
var state_46410__$1 = (function (){var statearr_46428 = state_46410;
(statearr_46428[(8)] = inst_46359__$1);

(statearr_46428[(9)] = inst_46360__$1);

(statearr_46428[(10)] = inst_46357__$1);

(statearr_46428[(11)] = inst_46358__$1);

(statearr_46428[(14)] = inst_46368);

return statearr_46428;
})();
var statearr_46429_46498 = state_46410__$1;
(statearr_46429_46498[(2)] = null);

(statearr_46429_46498[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46411 === (22))){
var state_46410__$1 = state_46410;
var statearr_46430_46499 = state_46410__$1;
(statearr_46430_46499[(2)] = null);

(statearr_46430_46499[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46411 === (6))){
var inst_46345 = (state_46410[(13)]);
var inst_46354 = f.call(null,inst_46345);
var inst_46355 = cljs.core.seq.call(null,inst_46354);
var inst_46357 = inst_46355;
var inst_46358 = null;
var inst_46359 = (0);
var inst_46360 = (0);
var state_46410__$1 = (function (){var statearr_46431 = state_46410;
(statearr_46431[(8)] = inst_46359);

(statearr_46431[(9)] = inst_46360);

(statearr_46431[(10)] = inst_46357);

(statearr_46431[(11)] = inst_46358);

return statearr_46431;
})();
var statearr_46432_46501 = state_46410__$1;
(statearr_46432_46501[(2)] = null);

(statearr_46432_46501[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46411 === (17))){
var inst_46372 = (state_46410[(7)]);
var inst_46379 = cljs.core.chunk_first.call(null,inst_46372);
var inst_46380 = cljs.core.chunk_rest.call(null,inst_46372);
var inst_46381 = cljs.core.count.call(null,inst_46379);
var inst_46357 = inst_46380;
var inst_46358 = inst_46379;
var inst_46359 = inst_46381;
var inst_46360 = (0);
var state_46410__$1 = (function (){var statearr_46433 = state_46410;
(statearr_46433[(8)] = inst_46359);

(statearr_46433[(9)] = inst_46360);

(statearr_46433[(10)] = inst_46357);

(statearr_46433[(11)] = inst_46358);

return statearr_46433;
})();
var statearr_46434_46502 = state_46410__$1;
(statearr_46434_46502[(2)] = null);

(statearr_46434_46502[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46411 === (3))){
var inst_46408 = (state_46410[(2)]);
var state_46410__$1 = state_46410;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46410__$1,inst_46408);
} else {
if((state_val_46411 === (12))){
var inst_46396 = (state_46410[(2)]);
var state_46410__$1 = state_46410;
var statearr_46435_46503 = state_46410__$1;
(statearr_46435_46503[(2)] = inst_46396);

(statearr_46435_46503[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46411 === (2))){
var state_46410__$1 = state_46410;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46410__$1,(4),in$);
} else {
if((state_val_46411 === (23))){
var inst_46404 = (state_46410[(2)]);
var state_46410__$1 = state_46410;
var statearr_46436_46504 = state_46410__$1;
(statearr_46436_46504[(2)] = inst_46404);

(statearr_46436_46504[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46411 === (19))){
var inst_46390 = (state_46410[(2)]);
var state_46410__$1 = state_46410;
var statearr_46437_46510 = state_46410__$1;
(statearr_46437_46510[(2)] = inst_46390);

(statearr_46437_46510[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46411 === (11))){
var inst_46357 = (state_46410[(10)]);
var inst_46372 = (state_46410[(7)]);
var inst_46372__$1 = cljs.core.seq.call(null,inst_46357);
var state_46410__$1 = (function (){var statearr_46439 = state_46410;
(statearr_46439[(7)] = inst_46372__$1);

return statearr_46439;
})();
if(inst_46372__$1){
var statearr_46440_46513 = state_46410__$1;
(statearr_46440_46513[(1)] = (14));

} else {
var statearr_46441_46514 = state_46410__$1;
(statearr_46441_46514[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46411 === (9))){
var inst_46398 = (state_46410[(2)]);
var inst_46399 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_46410__$1 = (function (){var statearr_46442 = state_46410;
(statearr_46442[(15)] = inst_46398);

return statearr_46442;
})();
if(cljs.core.truth_(inst_46399)){
var statearr_46443_46515 = state_46410__$1;
(statearr_46443_46515[(1)] = (21));

} else {
var statearr_46444_46516 = state_46410__$1;
(statearr_46444_46516[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46411 === (5))){
var inst_46348 = cljs.core.async.close_BANG_.call(null,out);
var state_46410__$1 = state_46410;
var statearr_46445_46517 = state_46410__$1;
(statearr_46445_46517[(2)] = inst_46348);

(statearr_46445_46517[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46411 === (14))){
var inst_46372 = (state_46410[(7)]);
var inst_46374 = cljs.core.chunked_seq_QMARK_.call(null,inst_46372);
var state_46410__$1 = state_46410;
if(inst_46374){
var statearr_46446_46518 = state_46410__$1;
(statearr_46446_46518[(1)] = (17));

} else {
var statearr_46447_46519 = state_46410__$1;
(statearr_46447_46519[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46411 === (16))){
var inst_46394 = (state_46410[(2)]);
var state_46410__$1 = state_46410;
var statearr_46448_46520 = state_46410__$1;
(statearr_46448_46520[(2)] = inst_46394);

(statearr_46448_46520[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46411 === (10))){
var inst_46360 = (state_46410[(9)]);
var inst_46358 = (state_46410[(11)]);
var inst_46366 = cljs.core._nth.call(null,inst_46358,inst_46360);
var state_46410__$1 = state_46410;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46410__$1,(13),out,inst_46366);
} else {
if((state_val_46411 === (18))){
var inst_46372 = (state_46410[(7)]);
var inst_46384 = cljs.core.first.call(null,inst_46372);
var state_46410__$1 = state_46410;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46410__$1,(20),out,inst_46384);
} else {
if((state_val_46411 === (8))){
var inst_46359 = (state_46410[(8)]);
var inst_46360 = (state_46410[(9)]);
var inst_46362 = (inst_46360 < inst_46359);
var inst_46363 = inst_46362;
var state_46410__$1 = state_46410;
if(cljs.core.truth_(inst_46363)){
var statearr_46452_46526 = state_46410__$1;
(statearr_46452_46526[(1)] = (10));

} else {
var statearr_46453_46527 = state_46410__$1;
(statearr_46453_46527[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__41728__auto__))
;
return ((function (switch__41485__auto__,c__41728__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__41486__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__41486__auto____0 = (function (){
var statearr_46457 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46457[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__41486__auto__);

(statearr_46457[(1)] = (1));

return statearr_46457;
});
var cljs$core$async$mapcat_STAR__$_state_machine__41486__auto____1 = (function (state_46410){
while(true){
var ret_value__41487__auto__ = (function (){try{while(true){
var result__41488__auto__ = switch__41485__auto__.call(null,state_46410);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41488__auto__;
}
break;
}
}catch (e46458){if((e46458 instanceof Object)){
var ex__41489__auto__ = e46458;
var statearr_46459_46532 = state_46410;
(statearr_46459_46532[(5)] = ex__41489__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46410);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46458;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41487__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46533 = state_46410;
state_46410 = G__46533;
continue;
} else {
return ret_value__41487__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__41486__auto__ = function(state_46410){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__41486__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__41486__auto____1.call(this,state_46410);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__41486__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__41486__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__41486__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__41486__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__41486__auto__;
})()
;})(switch__41485__auto__,c__41728__auto__))
})();
var state__41730__auto__ = (function (){var statearr_46460 = f__41729__auto__.call(null);
(statearr_46460[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41728__auto__);

return statearr_46460;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41730__auto__);
});})(c__41728__auto__))
);

return c__41728__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args46534 = [];
var len__28543__auto___46541 = arguments.length;
var i__28544__auto___46542 = (0);
while(true){
if((i__28544__auto___46542 < len__28543__auto___46541)){
args46534.push((arguments[i__28544__auto___46542]));

var G__46543 = (i__28544__auto___46542 + (1));
i__28544__auto___46542 = G__46543;
continue;
} else {
}
break;
}

var G__46536 = args46534.length;
switch (G__46536) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args46534.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args46551 = [];
var len__28543__auto___46557 = arguments.length;
var i__28544__auto___46558 = (0);
while(true){
if((i__28544__auto___46558 < len__28543__auto___46557)){
args46551.push((arguments[i__28544__auto___46558]));

var G__46570 = (i__28544__auto___46558 + (1));
i__28544__auto___46558 = G__46570;
continue;
} else {
}
break;
}

var G__46553 = args46551.length;
switch (G__46553) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args46551.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args46572 = [];
var len__28543__auto___46628 = arguments.length;
var i__28544__auto___46629 = (0);
while(true){
if((i__28544__auto___46629 < len__28543__auto___46628)){
args46572.push((arguments[i__28544__auto___46629]));

var G__46633 = (i__28544__auto___46629 + (1));
i__28544__auto___46629 = G__46633;
continue;
} else {
}
break;
}

var G__46574 = args46572.length;
switch (G__46574) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args46572.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__41728__auto___46638 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41728__auto___46638,out){
return (function (){
var f__41729__auto__ = (function (){var switch__41485__auto__ = ((function (c__41728__auto___46638,out){
return (function (state_46598){
var state_val_46599 = (state_46598[(1)]);
if((state_val_46599 === (7))){
var inst_46593 = (state_46598[(2)]);
var state_46598__$1 = state_46598;
var statearr_46600_46642 = state_46598__$1;
(statearr_46600_46642[(2)] = inst_46593);

(statearr_46600_46642[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46599 === (1))){
var inst_46575 = null;
var state_46598__$1 = (function (){var statearr_46601 = state_46598;
(statearr_46601[(7)] = inst_46575);

return statearr_46601;
})();
var statearr_46602_46643 = state_46598__$1;
(statearr_46602_46643[(2)] = null);

(statearr_46602_46643[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46599 === (4))){
var inst_46578 = (state_46598[(8)]);
var inst_46578__$1 = (state_46598[(2)]);
var inst_46579 = (inst_46578__$1 == null);
var inst_46580 = cljs.core.not.call(null,inst_46579);
var state_46598__$1 = (function (){var statearr_46603 = state_46598;
(statearr_46603[(8)] = inst_46578__$1);

return statearr_46603;
})();
if(inst_46580){
var statearr_46604_46644 = state_46598__$1;
(statearr_46604_46644[(1)] = (5));

} else {
var statearr_46605_46645 = state_46598__$1;
(statearr_46605_46645[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46599 === (6))){
var state_46598__$1 = state_46598;
var statearr_46606_46646 = state_46598__$1;
(statearr_46606_46646[(2)] = null);

(statearr_46606_46646[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46599 === (3))){
var inst_46595 = (state_46598[(2)]);
var inst_46596 = cljs.core.async.close_BANG_.call(null,out);
var state_46598__$1 = (function (){var statearr_46607 = state_46598;
(statearr_46607[(9)] = inst_46595);

return statearr_46607;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46598__$1,inst_46596);
} else {
if((state_val_46599 === (2))){
var state_46598__$1 = state_46598;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46598__$1,(4),ch);
} else {
if((state_val_46599 === (11))){
var inst_46578 = (state_46598[(8)]);
var inst_46587 = (state_46598[(2)]);
var inst_46575 = inst_46578;
var state_46598__$1 = (function (){var statearr_46608 = state_46598;
(statearr_46608[(10)] = inst_46587);

(statearr_46608[(7)] = inst_46575);

return statearr_46608;
})();
var statearr_46609_46647 = state_46598__$1;
(statearr_46609_46647[(2)] = null);

(statearr_46609_46647[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46599 === (9))){
var inst_46578 = (state_46598[(8)]);
var state_46598__$1 = state_46598;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46598__$1,(11),out,inst_46578);
} else {
if((state_val_46599 === (5))){
var inst_46578 = (state_46598[(8)]);
var inst_46575 = (state_46598[(7)]);
var inst_46582 = cljs.core._EQ_.call(null,inst_46578,inst_46575);
var state_46598__$1 = state_46598;
if(inst_46582){
var statearr_46611_46650 = state_46598__$1;
(statearr_46611_46650[(1)] = (8));

} else {
var statearr_46612_46651 = state_46598__$1;
(statearr_46612_46651[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46599 === (10))){
var inst_46590 = (state_46598[(2)]);
var state_46598__$1 = state_46598;
var statearr_46613_46652 = state_46598__$1;
(statearr_46613_46652[(2)] = inst_46590);

(statearr_46613_46652[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46599 === (8))){
var inst_46575 = (state_46598[(7)]);
var tmp46610 = inst_46575;
var inst_46575__$1 = tmp46610;
var state_46598__$1 = (function (){var statearr_46614 = state_46598;
(statearr_46614[(7)] = inst_46575__$1);

return statearr_46614;
})();
var statearr_46615_46653 = state_46598__$1;
(statearr_46615_46653[(2)] = null);

(statearr_46615_46653[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__41728__auto___46638,out))
;
return ((function (switch__41485__auto__,c__41728__auto___46638,out){
return (function() {
var cljs$core$async$state_machine__41486__auto__ = null;
var cljs$core$async$state_machine__41486__auto____0 = (function (){
var statearr_46621 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_46621[(0)] = cljs$core$async$state_machine__41486__auto__);

(statearr_46621[(1)] = (1));

return statearr_46621;
});
var cljs$core$async$state_machine__41486__auto____1 = (function (state_46598){
while(true){
var ret_value__41487__auto__ = (function (){try{while(true){
var result__41488__auto__ = switch__41485__auto__.call(null,state_46598);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41488__auto__;
}
break;
}
}catch (e46622){if((e46622 instanceof Object)){
var ex__41489__auto__ = e46622;
var statearr_46626_46656 = state_46598;
(statearr_46626_46656[(5)] = ex__41489__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46598);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46622;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41487__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46657 = state_46598;
state_46598 = G__46657;
continue;
} else {
return ret_value__41487__auto__;
}
break;
}
});
cljs$core$async$state_machine__41486__auto__ = function(state_46598){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41486__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41486__auto____1.call(this,state_46598);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__41486__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41486__auto____0;
cljs$core$async$state_machine__41486__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41486__auto____1;
return cljs$core$async$state_machine__41486__auto__;
})()
;})(switch__41485__auto__,c__41728__auto___46638,out))
})();
var state__41730__auto__ = (function (){var statearr_46627 = f__41729__auto__.call(null);
(statearr_46627[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41728__auto___46638);

return statearr_46627;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41730__auto__);
});})(c__41728__auto___46638,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args46660 = [];
var len__28543__auto___46736 = arguments.length;
var i__28544__auto___46737 = (0);
while(true){
if((i__28544__auto___46737 < len__28543__auto___46736)){
args46660.push((arguments[i__28544__auto___46737]));

var G__46738 = (i__28544__auto___46737 + (1));
i__28544__auto___46737 = G__46738;
continue;
} else {
}
break;
}

var G__46662 = args46660.length;
switch (G__46662) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args46660.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__41728__auto___46746 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41728__auto___46746,out){
return (function (){
var f__41729__auto__ = (function (){var switch__41485__auto__ = ((function (c__41728__auto___46746,out){
return (function (state_46700){
var state_val_46701 = (state_46700[(1)]);
if((state_val_46701 === (7))){
var inst_46696 = (state_46700[(2)]);
var state_46700__$1 = state_46700;
var statearr_46702_46747 = state_46700__$1;
(statearr_46702_46747[(2)] = inst_46696);

(statearr_46702_46747[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46701 === (1))){
var inst_46663 = (new Array(n));
var inst_46664 = inst_46663;
var inst_46665 = (0);
var state_46700__$1 = (function (){var statearr_46703 = state_46700;
(statearr_46703[(7)] = inst_46665);

(statearr_46703[(8)] = inst_46664);

return statearr_46703;
})();
var statearr_46704_46748 = state_46700__$1;
(statearr_46704_46748[(2)] = null);

(statearr_46704_46748[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46701 === (4))){
var inst_46668 = (state_46700[(9)]);
var inst_46668__$1 = (state_46700[(2)]);
var inst_46669 = (inst_46668__$1 == null);
var inst_46670 = cljs.core.not.call(null,inst_46669);
var state_46700__$1 = (function (){var statearr_46705 = state_46700;
(statearr_46705[(9)] = inst_46668__$1);

return statearr_46705;
})();
if(inst_46670){
var statearr_46706_46749 = state_46700__$1;
(statearr_46706_46749[(1)] = (5));

} else {
var statearr_46707_46750 = state_46700__$1;
(statearr_46707_46750[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46701 === (15))){
var inst_46690 = (state_46700[(2)]);
var state_46700__$1 = state_46700;
var statearr_46708_46751 = state_46700__$1;
(statearr_46708_46751[(2)] = inst_46690);

(statearr_46708_46751[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46701 === (13))){
var state_46700__$1 = state_46700;
var statearr_46709_46752 = state_46700__$1;
(statearr_46709_46752[(2)] = null);

(statearr_46709_46752[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46701 === (6))){
var inst_46665 = (state_46700[(7)]);
var inst_46686 = (inst_46665 > (0));
var state_46700__$1 = state_46700;
if(cljs.core.truth_(inst_46686)){
var statearr_46710_46753 = state_46700__$1;
(statearr_46710_46753[(1)] = (12));

} else {
var statearr_46711_46754 = state_46700__$1;
(statearr_46711_46754[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46701 === (3))){
var inst_46698 = (state_46700[(2)]);
var state_46700__$1 = state_46700;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46700__$1,inst_46698);
} else {
if((state_val_46701 === (12))){
var inst_46664 = (state_46700[(8)]);
var inst_46688 = cljs.core.vec.call(null,inst_46664);
var state_46700__$1 = state_46700;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46700__$1,(15),out,inst_46688);
} else {
if((state_val_46701 === (2))){
var state_46700__$1 = state_46700;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46700__$1,(4),ch);
} else {
if((state_val_46701 === (11))){
var inst_46680 = (state_46700[(2)]);
var inst_46681 = (new Array(n));
var inst_46664 = inst_46681;
var inst_46665 = (0);
var state_46700__$1 = (function (){var statearr_46712 = state_46700;
(statearr_46712[(7)] = inst_46665);

(statearr_46712[(10)] = inst_46680);

(statearr_46712[(8)] = inst_46664);

return statearr_46712;
})();
var statearr_46713_46755 = state_46700__$1;
(statearr_46713_46755[(2)] = null);

(statearr_46713_46755[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46701 === (9))){
var inst_46664 = (state_46700[(8)]);
var inst_46678 = cljs.core.vec.call(null,inst_46664);
var state_46700__$1 = state_46700;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46700__$1,(11),out,inst_46678);
} else {
if((state_val_46701 === (5))){
var inst_46673 = (state_46700[(11)]);
var inst_46665 = (state_46700[(7)]);
var inst_46668 = (state_46700[(9)]);
var inst_46664 = (state_46700[(8)]);
var inst_46672 = (inst_46664[inst_46665] = inst_46668);
var inst_46673__$1 = (inst_46665 + (1));
var inst_46674 = (inst_46673__$1 < n);
var state_46700__$1 = (function (){var statearr_46717 = state_46700;
(statearr_46717[(11)] = inst_46673__$1);

(statearr_46717[(12)] = inst_46672);

return statearr_46717;
})();
if(cljs.core.truth_(inst_46674)){
var statearr_46718_46756 = state_46700__$1;
(statearr_46718_46756[(1)] = (8));

} else {
var statearr_46719_46757 = state_46700__$1;
(statearr_46719_46757[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46701 === (14))){
var inst_46693 = (state_46700[(2)]);
var inst_46694 = cljs.core.async.close_BANG_.call(null,out);
var state_46700__$1 = (function (){var statearr_46721 = state_46700;
(statearr_46721[(13)] = inst_46693);

return statearr_46721;
})();
var statearr_46722_46758 = state_46700__$1;
(statearr_46722_46758[(2)] = inst_46694);

(statearr_46722_46758[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46701 === (10))){
var inst_46684 = (state_46700[(2)]);
var state_46700__$1 = state_46700;
var statearr_46723_46763 = state_46700__$1;
(statearr_46723_46763[(2)] = inst_46684);

(statearr_46723_46763[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46701 === (8))){
var inst_46673 = (state_46700[(11)]);
var inst_46664 = (state_46700[(8)]);
var tmp46720 = inst_46664;
var inst_46664__$1 = tmp46720;
var inst_46665 = inst_46673;
var state_46700__$1 = (function (){var statearr_46724 = state_46700;
(statearr_46724[(7)] = inst_46665);

(statearr_46724[(8)] = inst_46664__$1);

return statearr_46724;
})();
var statearr_46725_46768 = state_46700__$1;
(statearr_46725_46768[(2)] = null);

(statearr_46725_46768[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__41728__auto___46746,out))
;
return ((function (switch__41485__auto__,c__41728__auto___46746,out){
return (function() {
var cljs$core$async$state_machine__41486__auto__ = null;
var cljs$core$async$state_machine__41486__auto____0 = (function (){
var statearr_46732 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46732[(0)] = cljs$core$async$state_machine__41486__auto__);

(statearr_46732[(1)] = (1));

return statearr_46732;
});
var cljs$core$async$state_machine__41486__auto____1 = (function (state_46700){
while(true){
var ret_value__41487__auto__ = (function (){try{while(true){
var result__41488__auto__ = switch__41485__auto__.call(null,state_46700);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41488__auto__;
}
break;
}
}catch (e46733){if((e46733 instanceof Object)){
var ex__41489__auto__ = e46733;
var statearr_46734_46769 = state_46700;
(statearr_46734_46769[(5)] = ex__41489__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46700);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46733;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41487__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46773 = state_46700;
state_46700 = G__46773;
continue;
} else {
return ret_value__41487__auto__;
}
break;
}
});
cljs$core$async$state_machine__41486__auto__ = function(state_46700){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41486__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41486__auto____1.call(this,state_46700);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__41486__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41486__auto____0;
cljs$core$async$state_machine__41486__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41486__auto____1;
return cljs$core$async$state_machine__41486__auto__;
})()
;})(switch__41485__auto__,c__41728__auto___46746,out))
})();
var state__41730__auto__ = (function (){var statearr_46735 = f__41729__auto__.call(null);
(statearr_46735[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41728__auto___46746);

return statearr_46735;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41730__auto__);
});})(c__41728__auto___46746,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args46777 = [];
var len__28543__auto___46851 = arguments.length;
var i__28544__auto___46852 = (0);
while(true){
if((i__28544__auto___46852 < len__28543__auto___46851)){
args46777.push((arguments[i__28544__auto___46852]));

var G__46853 = (i__28544__auto___46852 + (1));
i__28544__auto___46852 = G__46853;
continue;
} else {
}
break;
}

var G__46779 = args46777.length;
switch (G__46779) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args46777.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__41728__auto___46855 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41728__auto___46855,out){
return (function (){
var f__41729__auto__ = (function (){var switch__41485__auto__ = ((function (c__41728__auto___46855,out){
return (function (state_46821){
var state_val_46822 = (state_46821[(1)]);
if((state_val_46822 === (7))){
var inst_46817 = (state_46821[(2)]);
var state_46821__$1 = state_46821;
var statearr_46823_46856 = state_46821__$1;
(statearr_46823_46856[(2)] = inst_46817);

(statearr_46823_46856[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46822 === (1))){
var inst_46780 = [];
var inst_46781 = inst_46780;
var inst_46782 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_46821__$1 = (function (){var statearr_46824 = state_46821;
(statearr_46824[(7)] = inst_46782);

(statearr_46824[(8)] = inst_46781);

return statearr_46824;
})();
var statearr_46825_46857 = state_46821__$1;
(statearr_46825_46857[(2)] = null);

(statearr_46825_46857[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46822 === (4))){
var inst_46785 = (state_46821[(9)]);
var inst_46785__$1 = (state_46821[(2)]);
var inst_46786 = (inst_46785__$1 == null);
var inst_46787 = cljs.core.not.call(null,inst_46786);
var state_46821__$1 = (function (){var statearr_46826 = state_46821;
(statearr_46826[(9)] = inst_46785__$1);

return statearr_46826;
})();
if(inst_46787){
var statearr_46827_46858 = state_46821__$1;
(statearr_46827_46858[(1)] = (5));

} else {
var statearr_46828_46859 = state_46821__$1;
(statearr_46828_46859[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46822 === (15))){
var inst_46811 = (state_46821[(2)]);
var state_46821__$1 = state_46821;
var statearr_46829_46861 = state_46821__$1;
(statearr_46829_46861[(2)] = inst_46811);

(statearr_46829_46861[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46822 === (13))){
var state_46821__$1 = state_46821;
var statearr_46830_46863 = state_46821__$1;
(statearr_46830_46863[(2)] = null);

(statearr_46830_46863[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46822 === (6))){
var inst_46781 = (state_46821[(8)]);
var inst_46806 = inst_46781.length;
var inst_46807 = (inst_46806 > (0));
var state_46821__$1 = state_46821;
if(cljs.core.truth_(inst_46807)){
var statearr_46831_46864 = state_46821__$1;
(statearr_46831_46864[(1)] = (12));

} else {
var statearr_46832_46866 = state_46821__$1;
(statearr_46832_46866[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46822 === (3))){
var inst_46819 = (state_46821[(2)]);
var state_46821__$1 = state_46821;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46821__$1,inst_46819);
} else {
if((state_val_46822 === (12))){
var inst_46781 = (state_46821[(8)]);
var inst_46809 = cljs.core.vec.call(null,inst_46781);
var state_46821__$1 = state_46821;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46821__$1,(15),out,inst_46809);
} else {
if((state_val_46822 === (2))){
var state_46821__$1 = state_46821;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46821__$1,(4),ch);
} else {
if((state_val_46822 === (11))){
var inst_46785 = (state_46821[(9)]);
var inst_46789 = (state_46821[(10)]);
var inst_46799 = (state_46821[(2)]);
var inst_46800 = [];
var inst_46801 = inst_46800.push(inst_46785);
var inst_46781 = inst_46800;
var inst_46782 = inst_46789;
var state_46821__$1 = (function (){var statearr_46833 = state_46821;
(statearr_46833[(7)] = inst_46782);

(statearr_46833[(8)] = inst_46781);

(statearr_46833[(11)] = inst_46799);

(statearr_46833[(12)] = inst_46801);

return statearr_46833;
})();
var statearr_46834_46871 = state_46821__$1;
(statearr_46834_46871[(2)] = null);

(statearr_46834_46871[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46822 === (9))){
var inst_46781 = (state_46821[(8)]);
var inst_46797 = cljs.core.vec.call(null,inst_46781);
var state_46821__$1 = state_46821;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46821__$1,(11),out,inst_46797);
} else {
if((state_val_46822 === (5))){
var inst_46782 = (state_46821[(7)]);
var inst_46785 = (state_46821[(9)]);
var inst_46789 = (state_46821[(10)]);
var inst_46789__$1 = f.call(null,inst_46785);
var inst_46790 = cljs.core._EQ_.call(null,inst_46789__$1,inst_46782);
var inst_46791 = cljs.core.keyword_identical_QMARK_.call(null,inst_46782,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_46792 = (inst_46790) || (inst_46791);
var state_46821__$1 = (function (){var statearr_46835 = state_46821;
(statearr_46835[(10)] = inst_46789__$1);

return statearr_46835;
})();
if(cljs.core.truth_(inst_46792)){
var statearr_46836_46873 = state_46821__$1;
(statearr_46836_46873[(1)] = (8));

} else {
var statearr_46837_46874 = state_46821__$1;
(statearr_46837_46874[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46822 === (14))){
var inst_46814 = (state_46821[(2)]);
var inst_46815 = cljs.core.async.close_BANG_.call(null,out);
var state_46821__$1 = (function (){var statearr_46839 = state_46821;
(statearr_46839[(13)] = inst_46814);

return statearr_46839;
})();
var statearr_46840_46878 = state_46821__$1;
(statearr_46840_46878[(2)] = inst_46815);

(statearr_46840_46878[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46822 === (10))){
var inst_46804 = (state_46821[(2)]);
var state_46821__$1 = state_46821;
var statearr_46841_46879 = state_46821__$1;
(statearr_46841_46879[(2)] = inst_46804);

(statearr_46841_46879[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46822 === (8))){
var inst_46781 = (state_46821[(8)]);
var inst_46785 = (state_46821[(9)]);
var inst_46789 = (state_46821[(10)]);
var inst_46794 = inst_46781.push(inst_46785);
var tmp46838 = inst_46781;
var inst_46781__$1 = tmp46838;
var inst_46782 = inst_46789;
var state_46821__$1 = (function (){var statearr_46842 = state_46821;
(statearr_46842[(7)] = inst_46782);

(statearr_46842[(8)] = inst_46781__$1);

(statearr_46842[(14)] = inst_46794);

return statearr_46842;
})();
var statearr_46843_46884 = state_46821__$1;
(statearr_46843_46884[(2)] = null);

(statearr_46843_46884[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__41728__auto___46855,out))
;
return ((function (switch__41485__auto__,c__41728__auto___46855,out){
return (function() {
var cljs$core$async$state_machine__41486__auto__ = null;
var cljs$core$async$state_machine__41486__auto____0 = (function (){
var statearr_46847 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46847[(0)] = cljs$core$async$state_machine__41486__auto__);

(statearr_46847[(1)] = (1));

return statearr_46847;
});
var cljs$core$async$state_machine__41486__auto____1 = (function (state_46821){
while(true){
var ret_value__41487__auto__ = (function (){try{while(true){
var result__41488__auto__ = switch__41485__auto__.call(null,state_46821);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41488__auto__;
}
break;
}
}catch (e46848){if((e46848 instanceof Object)){
var ex__41489__auto__ = e46848;
var statearr_46849_46885 = state_46821;
(statearr_46849_46885[(5)] = ex__41489__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46821);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46848;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41487__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46886 = state_46821;
state_46821 = G__46886;
continue;
} else {
return ret_value__41487__auto__;
}
break;
}
});
cljs$core$async$state_machine__41486__auto__ = function(state_46821){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41486__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41486__auto____1.call(this,state_46821);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__41486__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41486__auto____0;
cljs$core$async$state_machine__41486__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41486__auto____1;
return cljs$core$async$state_machine__41486__auto__;
})()
;})(switch__41485__auto__,c__41728__auto___46855,out))
})();
var state__41730__auto__ = (function (){var statearr_46850 = f__41729__auto__.call(null);
(statearr_46850[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41728__auto___46855);

return statearr_46850;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41730__auto__);
});})(c__41728__auto___46855,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1493584934841