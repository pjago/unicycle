// Compiled by ClojureScript 1.9.456 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args24912 = [];
var len__21896__auto___24921 = arguments.length;
var i__21897__auto___24922 = (0);
while(true){
if((i__21897__auto___24922 < len__21896__auto___24921)){
args24912.push((arguments[i__21897__auto___24922]));

var G__24923 = (i__21897__auto___24922 + (1));
i__21897__auto___24922 = G__24923;
continue;
} else {
}
break;
}

var G__24915 = args24912.length;
switch (G__24915) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args24912.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async24916 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24916 = (function (f,blockable,meta24917){
this.f = f;
this.blockable = blockable;
this.meta24917 = meta24917;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24916.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24918,meta24917__$1){
var self__ = this;
var _24918__$1 = this;
return (new cljs.core.async.t_cljs$core$async24916(self__.f,self__.blockable,meta24917__$1));
});

cljs.core.async.t_cljs$core$async24916.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24918){
var self__ = this;
var _24918__$1 = this;
return self__.meta24917;
});

cljs.core.async.t_cljs$core$async24916.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24916.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async24916.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async24916.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async24916.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta24917","meta24917",630925408,null)], null);
});

cljs.core.async.t_cljs$core$async24916.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24916.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24916";

cljs.core.async.t_cljs$core$async24916.cljs$lang$ctorPrWriter = (function (this__21332__auto__,writer__21333__auto__,opt__21334__auto__){
return cljs.core._write.call(null,writer__21333__auto__,"cljs.core.async/t_cljs$core$async24916");
});

cljs.core.async.__GT_t_cljs$core$async24916 = (function cljs$core$async$__GT_t_cljs$core$async24916(f__$1,blockable__$1,meta24917){
return (new cljs.core.async.t_cljs$core$async24916(f__$1,blockable__$1,meta24917));
});

}

return (new cljs.core.async.t_cljs$core$async24916(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args24932 = [];
var len__21896__auto___24936 = arguments.length;
var i__21897__auto___24937 = (0);
while(true){
if((i__21897__auto___24937 < len__21896__auto___24936)){
args24932.push((arguments[i__21897__auto___24937]));

var G__24938 = (i__21897__auto___24937 + (1));
i__21897__auto___24937 = G__24938;
continue;
} else {
}
break;
}

var G__24934 = args24932.length;
switch (G__24934) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args24932.length)].join('')));

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
var args24941 = [];
var len__21896__auto___24945 = arguments.length;
var i__21897__auto___24946 = (0);
while(true){
if((i__21897__auto___24946 < len__21896__auto___24945)){
args24941.push((arguments[i__21897__auto___24946]));

var G__24947 = (i__21897__auto___24946 + (1));
i__21897__auto___24946 = G__24947;
continue;
} else {
}
break;
}

var G__24943 = args24941.length;
switch (G__24943) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args24941.length)].join('')));

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
var args24957 = [];
var len__21896__auto___24961 = arguments.length;
var i__21897__auto___24962 = (0);
while(true){
if((i__21897__auto___24962 < len__21896__auto___24961)){
args24957.push((arguments[i__21897__auto___24962]));

var G__24963 = (i__21897__auto___24962 + (1));
i__21897__auto___24962 = G__24963;
continue;
} else {
}
break;
}

var G__24959 = args24957.length;
switch (G__24959) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args24957.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_24965 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_24965);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_24965,ret){
return (function (){
return fn1.call(null,val_24965);
});})(val_24965,ret))
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
var args24967 = [];
var len__21896__auto___24972 = arguments.length;
var i__21897__auto___24973 = (0);
while(true){
if((i__21897__auto___24973 < len__21896__auto___24972)){
args24967.push((arguments[i__21897__auto___24973]));

var G__24974 = (i__21897__auto___24973 + (1));
i__21897__auto___24973 = G__24974;
continue;
} else {
}
break;
}

var G__24969 = args24967.length;
switch (G__24969) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args24967.length)].join('')));

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
var n__21696__auto___24980 = n;
var x_24981 = (0);
while(true){
if((x_24981 < n__21696__auto___24980)){
(a[x_24981] = (0));

var G__24982 = (x_24981 + (1));
x_24981 = G__24982;
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

var G__24983 = (i + (1));
i = G__24983;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async24991 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24991 = (function (flag,meta24992){
this.flag = flag;
this.meta24992 = meta24992;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24991.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_24993,meta24992__$1){
var self__ = this;
var _24993__$1 = this;
return (new cljs.core.async.t_cljs$core$async24991(self__.flag,meta24992__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async24991.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_24993){
var self__ = this;
var _24993__$1 = this;
return self__.meta24992;
});})(flag))
;

cljs.core.async.t_cljs$core$async24991.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24991.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async24991.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async24991.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async24991.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta24992","meta24992",-369702300,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async24991.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24991.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24991";

cljs.core.async.t_cljs$core$async24991.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__21332__auto__,writer__21333__auto__,opt__21334__auto__){
return cljs.core._write.call(null,writer__21333__auto__,"cljs.core.async/t_cljs$core$async24991");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async24991 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async24991(flag__$1,meta24992){
return (new cljs.core.async.t_cljs$core$async24991(flag__$1,meta24992));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async24991(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async25017 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25017 = (function (flag,cb,meta25018){
this.flag = flag;
this.cb = cb;
this.meta25018 = meta25018;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25017.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25019,meta25018__$1){
var self__ = this;
var _25019__$1 = this;
return (new cljs.core.async.t_cljs$core$async25017(self__.flag,self__.cb,meta25018__$1));
});

cljs.core.async.t_cljs$core$async25017.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25019){
var self__ = this;
var _25019__$1 = this;
return self__.meta25018;
});

cljs.core.async.t_cljs$core$async25017.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25017.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async25017.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async25017.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async25017.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta25018","meta25018",-1953058659,null)], null);
});

cljs.core.async.t_cljs$core$async25017.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25017.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25017";

cljs.core.async.t_cljs$core$async25017.cljs$lang$ctorPrWriter = (function (this__21332__auto__,writer__21333__auto__,opt__21334__auto__){
return cljs.core._write.call(null,writer__21333__auto__,"cljs.core.async/t_cljs$core$async25017");
});

cljs.core.async.__GT_t_cljs$core$async25017 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async25017(flag__$1,cb__$1,meta25018){
return (new cljs.core.async.t_cljs$core$async25017(flag__$1,cb__$1,meta25018));
});

}

return (new cljs.core.async.t_cljs$core$async25017(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__25036_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25036_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__25037_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25037_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__20675__auto__ = wport;
if(cljs.core.truth_(or__20675__auto__)){
return or__20675__auto__;
} else {
return port;
}
})()], null));
} else {
var G__25056 = (i + (1));
i = G__25056;
continue;
}
} else {
return null;
}
break;
}
})();
var or__20675__auto__ = ret;
if(cljs.core.truth_(or__20675__auto__)){
return or__20675__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__6753__auto__ = (function (){var and__20663__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__20663__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__20663__auto__;
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
var args__21903__auto__ = [];
var len__21896__auto___25075 = arguments.length;
var i__21897__auto___25076 = (0);
while(true){
if((i__21897__auto___25076 < len__21896__auto___25075)){
args__21903__auto__.push((arguments[i__21897__auto___25076]));

var G__25078 = (i__21897__auto___25076 + (1));
i__21897__auto___25076 = G__25078;
continue;
} else {
}
break;
}

var argseq__21904__auto__ = ((((1) < args__21903__auto__.length))?(new cljs.core.IndexedSeq(args__21903__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21904__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__25069){
var map__25070 = p__25069;
var map__25070__$1 = ((((!((map__25070 == null)))?((((map__25070.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25070.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25070):map__25070);
var opts = map__25070__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq25062){
var G__25063 = cljs.core.first.call(null,seq25062);
var seq25062__$1 = cljs.core.next.call(null,seq25062);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__25063,seq25062__$1);
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
var args25092 = [];
var len__21896__auto___25168 = arguments.length;
var i__21897__auto___25169 = (0);
while(true){
if((i__21897__auto___25169 < len__21896__auto___25168)){
args25092.push((arguments[i__21897__auto___25169]));

var G__25170 = (i__21897__auto___25169 + (1));
i__21897__auto___25169 = G__25170;
continue;
} else {
}
break;
}

var G__25095 = args25092.length;
switch (G__25095) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args25092.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__24836__auto___25172 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24836__auto___25172){
return (function (){
var f__24837__auto__ = (function (){var switch__24601__auto__ = ((function (c__24836__auto___25172){
return (function (state_25136){
var state_val_25138 = (state_25136[(1)]);
if((state_val_25138 === (7))){
var inst_25130 = (state_25136[(2)]);
var state_25136__$1 = state_25136;
var statearr_25142_25173 = state_25136__$1;
(statearr_25142_25173[(2)] = inst_25130);

(statearr_25142_25173[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25138 === (1))){
var state_25136__$1 = state_25136;
var statearr_25143_25174 = state_25136__$1;
(statearr_25143_25174[(2)] = null);

(statearr_25143_25174[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25138 === (4))){
var inst_25109 = (state_25136[(7)]);
var inst_25109__$1 = (state_25136[(2)]);
var inst_25112 = (inst_25109__$1 == null);
var state_25136__$1 = (function (){var statearr_25146 = state_25136;
(statearr_25146[(7)] = inst_25109__$1);

return statearr_25146;
})();
if(cljs.core.truth_(inst_25112)){
var statearr_25147_25175 = state_25136__$1;
(statearr_25147_25175[(1)] = (5));

} else {
var statearr_25148_25176 = state_25136__$1;
(statearr_25148_25176[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25138 === (13))){
var state_25136__$1 = state_25136;
var statearr_25149_25177 = state_25136__$1;
(statearr_25149_25177[(2)] = null);

(statearr_25149_25177[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25138 === (6))){
var inst_25109 = (state_25136[(7)]);
var state_25136__$1 = state_25136;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25136__$1,(11),to,inst_25109);
} else {
if((state_val_25138 === (3))){
var inst_25132 = (state_25136[(2)]);
var state_25136__$1 = state_25136;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25136__$1,inst_25132);
} else {
if((state_val_25138 === (12))){
var state_25136__$1 = state_25136;
var statearr_25150_25178 = state_25136__$1;
(statearr_25150_25178[(2)] = null);

(statearr_25150_25178[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25138 === (2))){
var state_25136__$1 = state_25136;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25136__$1,(4),from);
} else {
if((state_val_25138 === (11))){
var inst_25123 = (state_25136[(2)]);
var state_25136__$1 = state_25136;
if(cljs.core.truth_(inst_25123)){
var statearr_25151_25179 = state_25136__$1;
(statearr_25151_25179[(1)] = (12));

} else {
var statearr_25152_25180 = state_25136__$1;
(statearr_25152_25180[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25138 === (9))){
var state_25136__$1 = state_25136;
var statearr_25154_25181 = state_25136__$1;
(statearr_25154_25181[(2)] = null);

(statearr_25154_25181[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25138 === (5))){
var state_25136__$1 = state_25136;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25156_25182 = state_25136__$1;
(statearr_25156_25182[(1)] = (8));

} else {
var statearr_25157_25183 = state_25136__$1;
(statearr_25157_25183[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25138 === (14))){
var inst_25128 = (state_25136[(2)]);
var state_25136__$1 = state_25136;
var statearr_25158_25184 = state_25136__$1;
(statearr_25158_25184[(2)] = inst_25128);

(statearr_25158_25184[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25138 === (10))){
var inst_25120 = (state_25136[(2)]);
var state_25136__$1 = state_25136;
var statearr_25159_25185 = state_25136__$1;
(statearr_25159_25185[(2)] = inst_25120);

(statearr_25159_25185[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25138 === (8))){
var inst_25115 = cljs.core.async.close_BANG_.call(null,to);
var state_25136__$1 = state_25136;
var statearr_25160_25186 = state_25136__$1;
(statearr_25160_25186[(2)] = inst_25115);

(statearr_25160_25186[(1)] = (10));


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
});})(c__24836__auto___25172))
;
return ((function (switch__24601__auto__,c__24836__auto___25172){
return (function() {
var cljs$core$async$state_machine__24602__auto__ = null;
var cljs$core$async$state_machine__24602__auto____0 = (function (){
var statearr_25164 = [null,null,null,null,null,null,null,null];
(statearr_25164[(0)] = cljs$core$async$state_machine__24602__auto__);

(statearr_25164[(1)] = (1));

return statearr_25164;
});
var cljs$core$async$state_machine__24602__auto____1 = (function (state_25136){
while(true){
var ret_value__24603__auto__ = (function (){try{while(true){
var result__24604__auto__ = switch__24601__auto__.call(null,state_25136);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24604__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24604__auto__;
}
break;
}
}catch (e25165){if((e25165 instanceof Object)){
var ex__24605__auto__ = e25165;
var statearr_25166_25187 = state_25136;
(statearr_25166_25187[(5)] = ex__24605__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25136);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25165;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24603__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25188 = state_25136;
state_25136 = G__25188;
continue;
} else {
return ret_value__24603__auto__;
}
break;
}
});
cljs$core$async$state_machine__24602__auto__ = function(state_25136){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24602__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24602__auto____1.call(this,state_25136);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24602__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24602__auto____0;
cljs$core$async$state_machine__24602__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24602__auto____1;
return cljs$core$async$state_machine__24602__auto__;
})()
;})(switch__24601__auto__,c__24836__auto___25172))
})();
var state__24838__auto__ = (function (){var statearr_25167 = f__24837__auto__.call(null);
(statearr_25167[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24836__auto___25172);

return statearr_25167;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24838__auto__);
});})(c__24836__auto___25172))
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
return (function (p__25481){
var vec__25482 = p__25481;
var v = cljs.core.nth.call(null,vec__25482,(0),null);
var p = cljs.core.nth.call(null,vec__25482,(1),null);
var job = vec__25482;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__24836__auto___25868 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24836__auto___25868,res,vec__25482,v,p,job,jobs,results){
return (function (){
var f__24837__auto__ = (function (){var switch__24601__auto__ = ((function (c__24836__auto___25868,res,vec__25482,v,p,job,jobs,results){
return (function (state_25491){
var state_val_25493 = (state_25491[(1)]);
if((state_val_25493 === (1))){
var state_25491__$1 = state_25491;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25491__$1,(2),res,v);
} else {
if((state_val_25493 === (2))){
var inst_25488 = (state_25491[(2)]);
var inst_25489 = cljs.core.async.close_BANG_.call(null,res);
var state_25491__$1 = (function (){var statearr_25495 = state_25491;
(statearr_25495[(7)] = inst_25488);

return statearr_25495;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25491__$1,inst_25489);
} else {
return null;
}
}
});})(c__24836__auto___25868,res,vec__25482,v,p,job,jobs,results))
;
return ((function (switch__24601__auto__,c__24836__auto___25868,res,vec__25482,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24602__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24602__auto____0 = (function (){
var statearr_25502 = [null,null,null,null,null,null,null,null];
(statearr_25502[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24602__auto__);

(statearr_25502[(1)] = (1));

return statearr_25502;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24602__auto____1 = (function (state_25491){
while(true){
var ret_value__24603__auto__ = (function (){try{while(true){
var result__24604__auto__ = switch__24601__auto__.call(null,state_25491);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24604__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24604__auto__;
}
break;
}
}catch (e25505){if((e25505 instanceof Object)){
var ex__24605__auto__ = e25505;
var statearr_25507_25879 = state_25491;
(statearr_25507_25879[(5)] = ex__24605__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25491);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25505;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24603__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25884 = state_25491;
state_25491 = G__25884;
continue;
} else {
return ret_value__24603__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24602__auto__ = function(state_25491){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24602__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24602__auto____1.call(this,state_25491);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24602__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24602__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24602__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24602__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24602__auto__;
})()
;})(switch__24601__auto__,c__24836__auto___25868,res,vec__25482,v,p,job,jobs,results))
})();
var state__24838__auto__ = (function (){var statearr_25508 = f__24837__auto__.call(null);
(statearr_25508[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24836__auto___25868);

return statearr_25508;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24838__auto__);
});})(c__24836__auto___25868,res,vec__25482,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__25513){
var vec__25514 = p__25513;
var v = cljs.core.nth.call(null,vec__25514,(0),null);
var p = cljs.core.nth.call(null,vec__25514,(1),null);
var job = vec__25514;
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
var n__21696__auto___25892 = n;
var __25893 = (0);
while(true){
if((__25893 < n__21696__auto___25892)){
var G__25520_25894 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__25520_25894) {
case "compute":
var c__24836__auto___25896 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__25893,c__24836__auto___25896,G__25520_25894,n__21696__auto___25892,jobs,results,process,async){
return (function (){
var f__24837__auto__ = (function (){var switch__24601__auto__ = ((function (__25893,c__24836__auto___25896,G__25520_25894,n__21696__auto___25892,jobs,results,process,async){
return (function (state_25537){
var state_val_25538 = (state_25537[(1)]);
if((state_val_25538 === (1))){
var state_25537__$1 = state_25537;
var statearr_25542_25899 = state_25537__$1;
(statearr_25542_25899[(2)] = null);

(statearr_25542_25899[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25538 === (2))){
var state_25537__$1 = state_25537;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25537__$1,(4),jobs);
} else {
if((state_val_25538 === (3))){
var inst_25535 = (state_25537[(2)]);
var state_25537__$1 = state_25537;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25537__$1,inst_25535);
} else {
if((state_val_25538 === (4))){
var inst_25527 = (state_25537[(2)]);
var inst_25528 = process.call(null,inst_25527);
var state_25537__$1 = state_25537;
if(cljs.core.truth_(inst_25528)){
var statearr_25546_25908 = state_25537__$1;
(statearr_25546_25908[(1)] = (5));

} else {
var statearr_25547_25911 = state_25537__$1;
(statearr_25547_25911[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25538 === (5))){
var state_25537__$1 = state_25537;
var statearr_25550_25915 = state_25537__$1;
(statearr_25550_25915[(2)] = null);

(statearr_25550_25915[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25538 === (6))){
var state_25537__$1 = state_25537;
var statearr_25553_25916 = state_25537__$1;
(statearr_25553_25916[(2)] = null);

(statearr_25553_25916[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25538 === (7))){
var inst_25533 = (state_25537[(2)]);
var state_25537__$1 = state_25537;
var statearr_25554_25918 = state_25537__$1;
(statearr_25554_25918[(2)] = inst_25533);

(statearr_25554_25918[(1)] = (3));


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
});})(__25893,c__24836__auto___25896,G__25520_25894,n__21696__auto___25892,jobs,results,process,async))
;
return ((function (__25893,switch__24601__auto__,c__24836__auto___25896,G__25520_25894,n__21696__auto___25892,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24602__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24602__auto____0 = (function (){
var statearr_25564 = [null,null,null,null,null,null,null];
(statearr_25564[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24602__auto__);

(statearr_25564[(1)] = (1));

return statearr_25564;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24602__auto____1 = (function (state_25537){
while(true){
var ret_value__24603__auto__ = (function (){try{while(true){
var result__24604__auto__ = switch__24601__auto__.call(null,state_25537);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24604__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24604__auto__;
}
break;
}
}catch (e25569){if((e25569 instanceof Object)){
var ex__24605__auto__ = e25569;
var statearr_25570_25925 = state_25537;
(statearr_25570_25925[(5)] = ex__24605__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25537);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25569;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24603__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25927 = state_25537;
state_25537 = G__25927;
continue;
} else {
return ret_value__24603__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24602__auto__ = function(state_25537){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24602__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24602__auto____1.call(this,state_25537);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24602__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24602__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24602__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24602__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24602__auto__;
})()
;})(__25893,switch__24601__auto__,c__24836__auto___25896,G__25520_25894,n__21696__auto___25892,jobs,results,process,async))
})();
var state__24838__auto__ = (function (){var statearr_25572 = f__24837__auto__.call(null);
(statearr_25572[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24836__auto___25896);

return statearr_25572;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24838__auto__);
});})(__25893,c__24836__auto___25896,G__25520_25894,n__21696__auto___25892,jobs,results,process,async))
);


break;
case "async":
var c__24836__auto___25932 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__25893,c__24836__auto___25932,G__25520_25894,n__21696__auto___25892,jobs,results,process,async){
return (function (){
var f__24837__auto__ = (function (){var switch__24601__auto__ = ((function (__25893,c__24836__auto___25932,G__25520_25894,n__21696__auto___25892,jobs,results,process,async){
return (function (state_25595){
var state_val_25596 = (state_25595[(1)]);
if((state_val_25596 === (1))){
var state_25595__$1 = state_25595;
var statearr_25599_25934 = state_25595__$1;
(statearr_25599_25934[(2)] = null);

(statearr_25599_25934[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25596 === (2))){
var state_25595__$1 = state_25595;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25595__$1,(4),jobs);
} else {
if((state_val_25596 === (3))){
var inst_25591 = (state_25595[(2)]);
var state_25595__$1 = state_25595;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25595__$1,inst_25591);
} else {
if((state_val_25596 === (4))){
var inst_25580 = (state_25595[(2)]);
var inst_25581 = async.call(null,inst_25580);
var state_25595__$1 = state_25595;
if(cljs.core.truth_(inst_25581)){
var statearr_25604_25939 = state_25595__$1;
(statearr_25604_25939[(1)] = (5));

} else {
var statearr_25606_25942 = state_25595__$1;
(statearr_25606_25942[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25596 === (5))){
var state_25595__$1 = state_25595;
var statearr_25609_25943 = state_25595__$1;
(statearr_25609_25943[(2)] = null);

(statearr_25609_25943[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25596 === (6))){
var state_25595__$1 = state_25595;
var statearr_25611_25944 = state_25595__$1;
(statearr_25611_25944[(2)] = null);

(statearr_25611_25944[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25596 === (7))){
var inst_25586 = (state_25595[(2)]);
var state_25595__$1 = state_25595;
var statearr_25612_25945 = state_25595__$1;
(statearr_25612_25945[(2)] = inst_25586);

(statearr_25612_25945[(1)] = (3));


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
});})(__25893,c__24836__auto___25932,G__25520_25894,n__21696__auto___25892,jobs,results,process,async))
;
return ((function (__25893,switch__24601__auto__,c__24836__auto___25932,G__25520_25894,n__21696__auto___25892,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24602__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24602__auto____0 = (function (){
var statearr_25620 = [null,null,null,null,null,null,null];
(statearr_25620[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24602__auto__);

(statearr_25620[(1)] = (1));

return statearr_25620;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24602__auto____1 = (function (state_25595){
while(true){
var ret_value__24603__auto__ = (function (){try{while(true){
var result__24604__auto__ = switch__24601__auto__.call(null,state_25595);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24604__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24604__auto__;
}
break;
}
}catch (e25621){if((e25621 instanceof Object)){
var ex__24605__auto__ = e25621;
var statearr_25624_25946 = state_25595;
(statearr_25624_25946[(5)] = ex__24605__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25595);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25621;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24603__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25947 = state_25595;
state_25595 = G__25947;
continue;
} else {
return ret_value__24603__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24602__auto__ = function(state_25595){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24602__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24602__auto____1.call(this,state_25595);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24602__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24602__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24602__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24602__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24602__auto__;
})()
;})(__25893,switch__24601__auto__,c__24836__auto___25932,G__25520_25894,n__21696__auto___25892,jobs,results,process,async))
})();
var state__24838__auto__ = (function (){var statearr_25628 = f__24837__auto__.call(null);
(statearr_25628[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24836__auto___25932);

return statearr_25628;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24838__auto__);
});})(__25893,c__24836__auto___25932,G__25520_25894,n__21696__auto___25892,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)].join('')));

}

var G__25948 = (__25893 + (1));
__25893 = G__25948;
continue;
} else {
}
break;
}

var c__24836__auto___25949 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24836__auto___25949,jobs,results,process,async){
return (function (){
var f__24837__auto__ = (function (){var switch__24601__auto__ = ((function (c__24836__auto___25949,jobs,results,process,async){
return (function (state_25665){
var state_val_25666 = (state_25665[(1)]);
if((state_val_25666 === (1))){
var state_25665__$1 = state_25665;
var statearr_25675_25950 = state_25665__$1;
(statearr_25675_25950[(2)] = null);

(statearr_25675_25950[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25666 === (2))){
var state_25665__$1 = state_25665;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25665__$1,(4),from);
} else {
if((state_val_25666 === (3))){
var inst_25655 = (state_25665[(2)]);
var state_25665__$1 = state_25665;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25665__$1,inst_25655);
} else {
if((state_val_25666 === (4))){
var inst_25631 = (state_25665[(7)]);
var inst_25631__$1 = (state_25665[(2)]);
var inst_25638 = (inst_25631__$1 == null);
var state_25665__$1 = (function (){var statearr_25680 = state_25665;
(statearr_25680[(7)] = inst_25631__$1);

return statearr_25680;
})();
if(cljs.core.truth_(inst_25638)){
var statearr_25688_25951 = state_25665__$1;
(statearr_25688_25951[(1)] = (5));

} else {
var statearr_25692_25952 = state_25665__$1;
(statearr_25692_25952[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25666 === (5))){
var inst_25641 = cljs.core.async.close_BANG_.call(null,jobs);
var state_25665__$1 = state_25665;
var statearr_25694_25953 = state_25665__$1;
(statearr_25694_25953[(2)] = inst_25641);

(statearr_25694_25953[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25666 === (6))){
var inst_25631 = (state_25665[(7)]);
var inst_25643 = (state_25665[(8)]);
var inst_25643__$1 = cljs.core.async.chan.call(null,(1));
var inst_25644 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25645 = [inst_25631,inst_25643__$1];
var inst_25646 = (new cljs.core.PersistentVector(null,2,(5),inst_25644,inst_25645,null));
var state_25665__$1 = (function (){var statearr_25701 = state_25665;
(statearr_25701[(8)] = inst_25643__$1);

return statearr_25701;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25665__$1,(8),jobs,inst_25646);
} else {
if((state_val_25666 === (7))){
var inst_25653 = (state_25665[(2)]);
var state_25665__$1 = state_25665;
var statearr_25706_25954 = state_25665__$1;
(statearr_25706_25954[(2)] = inst_25653);

(statearr_25706_25954[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25666 === (8))){
var inst_25643 = (state_25665[(8)]);
var inst_25648 = (state_25665[(2)]);
var state_25665__$1 = (function (){var statearr_25713 = state_25665;
(statearr_25713[(9)] = inst_25648);

return statearr_25713;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25665__$1,(9),results,inst_25643);
} else {
if((state_val_25666 === (9))){
var inst_25650 = (state_25665[(2)]);
var state_25665__$1 = (function (){var statearr_25716 = state_25665;
(statearr_25716[(10)] = inst_25650);

return statearr_25716;
})();
var statearr_25717_25955 = state_25665__$1;
(statearr_25717_25955[(2)] = null);

(statearr_25717_25955[(1)] = (2));


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
});})(c__24836__auto___25949,jobs,results,process,async))
;
return ((function (switch__24601__auto__,c__24836__auto___25949,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24602__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24602__auto____0 = (function (){
var statearr_25736 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25736[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24602__auto__);

(statearr_25736[(1)] = (1));

return statearr_25736;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24602__auto____1 = (function (state_25665){
while(true){
var ret_value__24603__auto__ = (function (){try{while(true){
var result__24604__auto__ = switch__24601__auto__.call(null,state_25665);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24604__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24604__auto__;
}
break;
}
}catch (e25742){if((e25742 instanceof Object)){
var ex__24605__auto__ = e25742;
var statearr_25747_25956 = state_25665;
(statearr_25747_25956[(5)] = ex__24605__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25665);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25742;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24603__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25957 = state_25665;
state_25665 = G__25957;
continue;
} else {
return ret_value__24603__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24602__auto__ = function(state_25665){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24602__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24602__auto____1.call(this,state_25665);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24602__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24602__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24602__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24602__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24602__auto__;
})()
;})(switch__24601__auto__,c__24836__auto___25949,jobs,results,process,async))
})();
var state__24838__auto__ = (function (){var statearr_25752 = f__24837__auto__.call(null);
(statearr_25752[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24836__auto___25949);

return statearr_25752;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24838__auto__);
});})(c__24836__auto___25949,jobs,results,process,async))
);


var c__24836__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24836__auto__,jobs,results,process,async){
return (function (){
var f__24837__auto__ = (function (){var switch__24601__auto__ = ((function (c__24836__auto__,jobs,results,process,async){
return (function (state_25804){
var state_val_25805 = (state_25804[(1)]);
if((state_val_25805 === (7))){
var inst_25798 = (state_25804[(2)]);
var state_25804__$1 = state_25804;
var statearr_25809_25960 = state_25804__$1;
(statearr_25809_25960[(2)] = inst_25798);

(statearr_25809_25960[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25805 === (20))){
var state_25804__$1 = state_25804;
var statearr_25811_25963 = state_25804__$1;
(statearr_25811_25963[(2)] = null);

(statearr_25811_25963[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25805 === (1))){
var state_25804__$1 = state_25804;
var statearr_25812_25964 = state_25804__$1;
(statearr_25812_25964[(2)] = null);

(statearr_25812_25964[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25805 === (4))){
var inst_25760 = (state_25804[(7)]);
var inst_25760__$1 = (state_25804[(2)]);
var inst_25761 = (inst_25760__$1 == null);
var state_25804__$1 = (function (){var statearr_25813 = state_25804;
(statearr_25813[(7)] = inst_25760__$1);

return statearr_25813;
})();
if(cljs.core.truth_(inst_25761)){
var statearr_25814_25965 = state_25804__$1;
(statearr_25814_25965[(1)] = (5));

} else {
var statearr_25819_25966 = state_25804__$1;
(statearr_25819_25966[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25805 === (15))){
var inst_25778 = (state_25804[(8)]);
var state_25804__$1 = state_25804;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25804__$1,(18),to,inst_25778);
} else {
if((state_val_25805 === (21))){
var inst_25793 = (state_25804[(2)]);
var state_25804__$1 = state_25804;
var statearr_25821_25968 = state_25804__$1;
(statearr_25821_25968[(2)] = inst_25793);

(statearr_25821_25968[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25805 === (13))){
var inst_25795 = (state_25804[(2)]);
var state_25804__$1 = (function (){var statearr_25822 = state_25804;
(statearr_25822[(9)] = inst_25795);

return statearr_25822;
})();
var statearr_25823_25969 = state_25804__$1;
(statearr_25823_25969[(2)] = null);

(statearr_25823_25969[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25805 === (6))){
var inst_25760 = (state_25804[(7)]);
var state_25804__$1 = state_25804;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25804__$1,(11),inst_25760);
} else {
if((state_val_25805 === (17))){
var inst_25788 = (state_25804[(2)]);
var state_25804__$1 = state_25804;
if(cljs.core.truth_(inst_25788)){
var statearr_25826_25970 = state_25804__$1;
(statearr_25826_25970[(1)] = (19));

} else {
var statearr_25827_25971 = state_25804__$1;
(statearr_25827_25971[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25805 === (3))){
var inst_25800 = (state_25804[(2)]);
var state_25804__$1 = state_25804;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25804__$1,inst_25800);
} else {
if((state_val_25805 === (12))){
var inst_25771 = (state_25804[(10)]);
var state_25804__$1 = state_25804;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25804__$1,(14),inst_25771);
} else {
if((state_val_25805 === (2))){
var state_25804__$1 = state_25804;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25804__$1,(4),results);
} else {
if((state_val_25805 === (19))){
var state_25804__$1 = state_25804;
var statearr_25832_25974 = state_25804__$1;
(statearr_25832_25974[(2)] = null);

(statearr_25832_25974[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25805 === (11))){
var inst_25771 = (state_25804[(2)]);
var state_25804__$1 = (function (){var statearr_25833 = state_25804;
(statearr_25833[(10)] = inst_25771);

return statearr_25833;
})();
var statearr_25834_25978 = state_25804__$1;
(statearr_25834_25978[(2)] = null);

(statearr_25834_25978[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25805 === (9))){
var state_25804__$1 = state_25804;
var statearr_25835_25979 = state_25804__$1;
(statearr_25835_25979[(2)] = null);

(statearr_25835_25979[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25805 === (5))){
var state_25804__$1 = state_25804;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25836_25980 = state_25804__$1;
(statearr_25836_25980[(1)] = (8));

} else {
var statearr_25837_25981 = state_25804__$1;
(statearr_25837_25981[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25805 === (14))){
var inst_25778 = (state_25804[(8)]);
var inst_25782 = (state_25804[(11)]);
var inst_25778__$1 = (state_25804[(2)]);
var inst_25781 = (inst_25778__$1 == null);
var inst_25782__$1 = cljs.core.not.call(null,inst_25781);
var state_25804__$1 = (function (){var statearr_25839 = state_25804;
(statearr_25839[(8)] = inst_25778__$1);

(statearr_25839[(11)] = inst_25782__$1);

return statearr_25839;
})();
if(inst_25782__$1){
var statearr_25840_25984 = state_25804__$1;
(statearr_25840_25984[(1)] = (15));

} else {
var statearr_25841_25985 = state_25804__$1;
(statearr_25841_25985[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25805 === (16))){
var inst_25782 = (state_25804[(11)]);
var state_25804__$1 = state_25804;
var statearr_25842_25988 = state_25804__$1;
(statearr_25842_25988[(2)] = inst_25782);

(statearr_25842_25988[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25805 === (10))){
var inst_25768 = (state_25804[(2)]);
var state_25804__$1 = state_25804;
var statearr_25843_25989 = state_25804__$1;
(statearr_25843_25989[(2)] = inst_25768);

(statearr_25843_25989[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25805 === (18))){
var inst_25785 = (state_25804[(2)]);
var state_25804__$1 = state_25804;
var statearr_25844_25990 = state_25804__$1;
(statearr_25844_25990[(2)] = inst_25785);

(statearr_25844_25990[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25805 === (8))){
var inst_25765 = cljs.core.async.close_BANG_.call(null,to);
var state_25804__$1 = state_25804;
var statearr_25846_25991 = state_25804__$1;
(statearr_25846_25991[(2)] = inst_25765);

(statearr_25846_25991[(1)] = (10));


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
});})(c__24836__auto__,jobs,results,process,async))
;
return ((function (switch__24601__auto__,c__24836__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24602__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24602__auto____0 = (function (){
var statearr_25853 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25853[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24602__auto__);

(statearr_25853[(1)] = (1));

return statearr_25853;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24602__auto____1 = (function (state_25804){
while(true){
var ret_value__24603__auto__ = (function (){try{while(true){
var result__24604__auto__ = switch__24601__auto__.call(null,state_25804);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24604__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24604__auto__;
}
break;
}
}catch (e25854){if((e25854 instanceof Object)){
var ex__24605__auto__ = e25854;
var statearr_25855_25994 = state_25804;
(statearr_25855_25994[(5)] = ex__24605__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25804);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25854;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24603__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25995 = state_25804;
state_25804 = G__25995;
continue;
} else {
return ret_value__24603__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24602__auto__ = function(state_25804){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24602__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24602__auto____1.call(this,state_25804);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24602__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24602__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24602__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24602__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24602__auto__;
})()
;})(switch__24601__auto__,c__24836__auto__,jobs,results,process,async))
})();
var state__24838__auto__ = (function (){var statearr_25857 = f__24837__auto__.call(null);
(statearr_25857[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24836__auto__);

return statearr_25857;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24838__auto__);
});})(c__24836__auto__,jobs,results,process,async))
);

return c__24836__auto__;
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
var args25996 = [];
var len__21896__auto___25999 = arguments.length;
var i__21897__auto___26000 = (0);
while(true){
if((i__21897__auto___26000 < len__21896__auto___25999)){
args25996.push((arguments[i__21897__auto___26000]));

var G__26001 = (i__21897__auto___26000 + (1));
i__21897__auto___26000 = G__26001;
continue;
} else {
}
break;
}

var G__25998 = args25996.length;
switch (G__25998) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args25996.length)].join('')));

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
var args26006 = [];
var len__21896__auto___26013 = arguments.length;
var i__21897__auto___26014 = (0);
while(true){
if((i__21897__auto___26014 < len__21896__auto___26013)){
args26006.push((arguments[i__21897__auto___26014]));

var G__26015 = (i__21897__auto___26014 + (1));
i__21897__auto___26014 = G__26015;
continue;
} else {
}
break;
}

var G__26012 = args26006.length;
switch (G__26012) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args26006.length)].join('')));

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
var args26018 = [];
var len__21896__auto___26078 = arguments.length;
var i__21897__auto___26079 = (0);
while(true){
if((i__21897__auto___26079 < len__21896__auto___26078)){
args26018.push((arguments[i__21897__auto___26079]));

var G__26080 = (i__21897__auto___26079 + (1));
i__21897__auto___26079 = G__26080;
continue;
} else {
}
break;
}

var G__26022 = args26018.length;
switch (G__26022) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args26018.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__24836__auto___26082 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24836__auto___26082,tc,fc){
return (function (){
var f__24837__auto__ = (function (){var switch__24601__auto__ = ((function (c__24836__auto___26082,tc,fc){
return (function (state_26049){
var state_val_26050 = (state_26049[(1)]);
if((state_val_26050 === (7))){
var inst_26045 = (state_26049[(2)]);
var state_26049__$1 = state_26049;
var statearr_26051_26083 = state_26049__$1;
(statearr_26051_26083[(2)] = inst_26045);

(statearr_26051_26083[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26050 === (1))){
var state_26049__$1 = state_26049;
var statearr_26053_26084 = state_26049__$1;
(statearr_26053_26084[(2)] = null);

(statearr_26053_26084[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26050 === (4))){
var inst_26026 = (state_26049[(7)]);
var inst_26026__$1 = (state_26049[(2)]);
var inst_26027 = (inst_26026__$1 == null);
var state_26049__$1 = (function (){var statearr_26055 = state_26049;
(statearr_26055[(7)] = inst_26026__$1);

return statearr_26055;
})();
if(cljs.core.truth_(inst_26027)){
var statearr_26056_26085 = state_26049__$1;
(statearr_26056_26085[(1)] = (5));

} else {
var statearr_26058_26086 = state_26049__$1;
(statearr_26058_26086[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26050 === (13))){
var state_26049__$1 = state_26049;
var statearr_26059_26087 = state_26049__$1;
(statearr_26059_26087[(2)] = null);

(statearr_26059_26087[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26050 === (6))){
var inst_26026 = (state_26049[(7)]);
var inst_26032 = p.call(null,inst_26026);
var state_26049__$1 = state_26049;
if(cljs.core.truth_(inst_26032)){
var statearr_26061_26088 = state_26049__$1;
(statearr_26061_26088[(1)] = (9));

} else {
var statearr_26062_26089 = state_26049__$1;
(statearr_26062_26089[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26050 === (3))){
var inst_26047 = (state_26049[(2)]);
var state_26049__$1 = state_26049;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26049__$1,inst_26047);
} else {
if((state_val_26050 === (12))){
var state_26049__$1 = state_26049;
var statearr_26063_26090 = state_26049__$1;
(statearr_26063_26090[(2)] = null);

(statearr_26063_26090[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26050 === (2))){
var state_26049__$1 = state_26049;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26049__$1,(4),ch);
} else {
if((state_val_26050 === (11))){
var inst_26026 = (state_26049[(7)]);
var inst_26036 = (state_26049[(2)]);
var state_26049__$1 = state_26049;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26049__$1,(8),inst_26036,inst_26026);
} else {
if((state_val_26050 === (9))){
var state_26049__$1 = state_26049;
var statearr_26064_26091 = state_26049__$1;
(statearr_26064_26091[(2)] = tc);

(statearr_26064_26091[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26050 === (5))){
var inst_26029 = cljs.core.async.close_BANG_.call(null,tc);
var inst_26030 = cljs.core.async.close_BANG_.call(null,fc);
var state_26049__$1 = (function (){var statearr_26065 = state_26049;
(statearr_26065[(8)] = inst_26029);

return statearr_26065;
})();
var statearr_26066_26092 = state_26049__$1;
(statearr_26066_26092[(2)] = inst_26030);

(statearr_26066_26092[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26050 === (14))){
var inst_26043 = (state_26049[(2)]);
var state_26049__$1 = state_26049;
var statearr_26067_26093 = state_26049__$1;
(statearr_26067_26093[(2)] = inst_26043);

(statearr_26067_26093[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26050 === (10))){
var state_26049__$1 = state_26049;
var statearr_26068_26094 = state_26049__$1;
(statearr_26068_26094[(2)] = fc);

(statearr_26068_26094[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26050 === (8))){
var inst_26038 = (state_26049[(2)]);
var state_26049__$1 = state_26049;
if(cljs.core.truth_(inst_26038)){
var statearr_26069_26095 = state_26049__$1;
(statearr_26069_26095[(1)] = (12));

} else {
var statearr_26070_26096 = state_26049__$1;
(statearr_26070_26096[(1)] = (13));

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
});})(c__24836__auto___26082,tc,fc))
;
return ((function (switch__24601__auto__,c__24836__auto___26082,tc,fc){
return (function() {
var cljs$core$async$state_machine__24602__auto__ = null;
var cljs$core$async$state_machine__24602__auto____0 = (function (){
var statearr_26074 = [null,null,null,null,null,null,null,null,null];
(statearr_26074[(0)] = cljs$core$async$state_machine__24602__auto__);

(statearr_26074[(1)] = (1));

return statearr_26074;
});
var cljs$core$async$state_machine__24602__auto____1 = (function (state_26049){
while(true){
var ret_value__24603__auto__ = (function (){try{while(true){
var result__24604__auto__ = switch__24601__auto__.call(null,state_26049);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24604__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24604__auto__;
}
break;
}
}catch (e26075){if((e26075 instanceof Object)){
var ex__24605__auto__ = e26075;
var statearr_26076_26105 = state_26049;
(statearr_26076_26105[(5)] = ex__24605__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26049);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26075;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24603__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26110 = state_26049;
state_26049 = G__26110;
continue;
} else {
return ret_value__24603__auto__;
}
break;
}
});
cljs$core$async$state_machine__24602__auto__ = function(state_26049){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24602__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24602__auto____1.call(this,state_26049);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24602__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24602__auto____0;
cljs$core$async$state_machine__24602__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24602__auto____1;
return cljs$core$async$state_machine__24602__auto__;
})()
;})(switch__24601__auto__,c__24836__auto___26082,tc,fc))
})();
var state__24838__auto__ = (function (){var statearr_26077 = f__24837__auto__.call(null);
(statearr_26077[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24836__auto___26082);

return statearr_26077;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24838__auto__);
});})(c__24836__auto___26082,tc,fc))
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
var c__24836__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24836__auto__){
return (function (){
var f__24837__auto__ = (function (){var switch__24601__auto__ = ((function (c__24836__auto__){
return (function (state_26220){
var state_val_26221 = (state_26220[(1)]);
if((state_val_26221 === (7))){
var inst_26216 = (state_26220[(2)]);
var state_26220__$1 = state_26220;
var statearr_26224_26280 = state_26220__$1;
(statearr_26224_26280[(2)] = inst_26216);

(statearr_26224_26280[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26221 === (1))){
var inst_26197 = init;
var state_26220__$1 = (function (){var statearr_26225 = state_26220;
(statearr_26225[(7)] = inst_26197);

return statearr_26225;
})();
var statearr_26226_26281 = state_26220__$1;
(statearr_26226_26281[(2)] = null);

(statearr_26226_26281[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26221 === (4))){
var inst_26200 = (state_26220[(8)]);
var inst_26200__$1 = (state_26220[(2)]);
var inst_26201 = (inst_26200__$1 == null);
var state_26220__$1 = (function (){var statearr_26234 = state_26220;
(statearr_26234[(8)] = inst_26200__$1);

return statearr_26234;
})();
if(cljs.core.truth_(inst_26201)){
var statearr_26235_26282 = state_26220__$1;
(statearr_26235_26282[(1)] = (5));

} else {
var statearr_26236_26287 = state_26220__$1;
(statearr_26236_26287[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26221 === (6))){
var inst_26207 = (state_26220[(9)]);
var inst_26200 = (state_26220[(8)]);
var inst_26197 = (state_26220[(7)]);
var inst_26207__$1 = f.call(null,inst_26197,inst_26200);
var inst_26208 = cljs.core.reduced_QMARK_.call(null,inst_26207__$1);
var state_26220__$1 = (function (){var statearr_26237 = state_26220;
(statearr_26237[(9)] = inst_26207__$1);

return statearr_26237;
})();
if(inst_26208){
var statearr_26238_26291 = state_26220__$1;
(statearr_26238_26291[(1)] = (8));

} else {
var statearr_26242_26292 = state_26220__$1;
(statearr_26242_26292[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26221 === (3))){
var inst_26218 = (state_26220[(2)]);
var state_26220__$1 = state_26220;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26220__$1,inst_26218);
} else {
if((state_val_26221 === (2))){
var state_26220__$1 = state_26220;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26220__$1,(4),ch);
} else {
if((state_val_26221 === (9))){
var inst_26207 = (state_26220[(9)]);
var inst_26197 = inst_26207;
var state_26220__$1 = (function (){var statearr_26250 = state_26220;
(statearr_26250[(7)] = inst_26197);

return statearr_26250;
})();
var statearr_26251_26304 = state_26220__$1;
(statearr_26251_26304[(2)] = null);

(statearr_26251_26304[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26221 === (5))){
var inst_26197 = (state_26220[(7)]);
var state_26220__$1 = state_26220;
var statearr_26255_26308 = state_26220__$1;
(statearr_26255_26308[(2)] = inst_26197);

(statearr_26255_26308[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26221 === (10))){
var inst_26214 = (state_26220[(2)]);
var state_26220__$1 = state_26220;
var statearr_26256_26309 = state_26220__$1;
(statearr_26256_26309[(2)] = inst_26214);

(statearr_26256_26309[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26221 === (8))){
var inst_26207 = (state_26220[(9)]);
var inst_26210 = cljs.core.deref.call(null,inst_26207);
var state_26220__$1 = state_26220;
var statearr_26257_26314 = state_26220__$1;
(statearr_26257_26314[(2)] = inst_26210);

(statearr_26257_26314[(1)] = (10));


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
});})(c__24836__auto__))
;
return ((function (switch__24601__auto__,c__24836__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__24602__auto__ = null;
var cljs$core$async$reduce_$_state_machine__24602__auto____0 = (function (){
var statearr_26263 = [null,null,null,null,null,null,null,null,null,null];
(statearr_26263[(0)] = cljs$core$async$reduce_$_state_machine__24602__auto__);

(statearr_26263[(1)] = (1));

return statearr_26263;
});
var cljs$core$async$reduce_$_state_machine__24602__auto____1 = (function (state_26220){
while(true){
var ret_value__24603__auto__ = (function (){try{while(true){
var result__24604__auto__ = switch__24601__auto__.call(null,state_26220);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24604__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24604__auto__;
}
break;
}
}catch (e26268){if((e26268 instanceof Object)){
var ex__24605__auto__ = e26268;
var statearr_26269_26335 = state_26220;
(statearr_26269_26335[(5)] = ex__24605__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26220);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26268;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24603__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26336 = state_26220;
state_26220 = G__26336;
continue;
} else {
return ret_value__24603__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__24602__auto__ = function(state_26220){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__24602__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__24602__auto____1.call(this,state_26220);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__24602__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__24602__auto____0;
cljs$core$async$reduce_$_state_machine__24602__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__24602__auto____1;
return cljs$core$async$reduce_$_state_machine__24602__auto__;
})()
;})(switch__24601__auto__,c__24836__auto__))
})();
var state__24838__auto__ = (function (){var statearr_26279 = f__24837__auto__.call(null);
(statearr_26279[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24836__auto__);

return statearr_26279;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24838__auto__);
});})(c__24836__auto__))
);

return c__24836__auto__;
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
var args26337 = [];
var len__21896__auto___26429 = arguments.length;
var i__21897__auto___26431 = (0);
while(true){
if((i__21897__auto___26431 < len__21896__auto___26429)){
args26337.push((arguments[i__21897__auto___26431]));

var G__26433 = (i__21897__auto___26431 + (1));
i__21897__auto___26431 = G__26433;
continue;
} else {
}
break;
}

var G__26339 = args26337.length;
switch (G__26339) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args26337.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__24836__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24836__auto__){
return (function (){
var f__24837__auto__ = (function (){var switch__24601__auto__ = ((function (c__24836__auto__){
return (function (state_26371){
var state_val_26372 = (state_26371[(1)]);
if((state_val_26372 === (7))){
var inst_26353 = (state_26371[(2)]);
var state_26371__$1 = state_26371;
var statearr_26373_26447 = state_26371__$1;
(statearr_26373_26447[(2)] = inst_26353);

(statearr_26373_26447[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26372 === (1))){
var inst_26347 = cljs.core.seq.call(null,coll);
var inst_26348 = inst_26347;
var state_26371__$1 = (function (){var statearr_26374 = state_26371;
(statearr_26374[(7)] = inst_26348);

return statearr_26374;
})();
var statearr_26375_26448 = state_26371__$1;
(statearr_26375_26448[(2)] = null);

(statearr_26375_26448[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26372 === (4))){
var inst_26348 = (state_26371[(7)]);
var inst_26351 = cljs.core.first.call(null,inst_26348);
var state_26371__$1 = state_26371;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26371__$1,(7),ch,inst_26351);
} else {
if((state_val_26372 === (13))){
var inst_26365 = (state_26371[(2)]);
var state_26371__$1 = state_26371;
var statearr_26380_26451 = state_26371__$1;
(statearr_26380_26451[(2)] = inst_26365);

(statearr_26380_26451[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26372 === (6))){
var inst_26356 = (state_26371[(2)]);
var state_26371__$1 = state_26371;
if(cljs.core.truth_(inst_26356)){
var statearr_26382_26454 = state_26371__$1;
(statearr_26382_26454[(1)] = (8));

} else {
var statearr_26384_26455 = state_26371__$1;
(statearr_26384_26455[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26372 === (3))){
var inst_26369 = (state_26371[(2)]);
var state_26371__$1 = state_26371;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26371__$1,inst_26369);
} else {
if((state_val_26372 === (12))){
var state_26371__$1 = state_26371;
var statearr_26390_26458 = state_26371__$1;
(statearr_26390_26458[(2)] = null);

(statearr_26390_26458[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26372 === (2))){
var inst_26348 = (state_26371[(7)]);
var state_26371__$1 = state_26371;
if(cljs.core.truth_(inst_26348)){
var statearr_26391_26459 = state_26371__$1;
(statearr_26391_26459[(1)] = (4));

} else {
var statearr_26392_26461 = state_26371__$1;
(statearr_26392_26461[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26372 === (11))){
var inst_26362 = cljs.core.async.close_BANG_.call(null,ch);
var state_26371__$1 = state_26371;
var statearr_26396_26462 = state_26371__$1;
(statearr_26396_26462[(2)] = inst_26362);

(statearr_26396_26462[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26372 === (9))){
var state_26371__$1 = state_26371;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26397_26463 = state_26371__$1;
(statearr_26397_26463[(1)] = (11));

} else {
var statearr_26398_26464 = state_26371__$1;
(statearr_26398_26464[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26372 === (5))){
var inst_26348 = (state_26371[(7)]);
var state_26371__$1 = state_26371;
var statearr_26399_26465 = state_26371__$1;
(statearr_26399_26465[(2)] = inst_26348);

(statearr_26399_26465[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26372 === (10))){
var inst_26367 = (state_26371[(2)]);
var state_26371__$1 = state_26371;
var statearr_26400_26466 = state_26371__$1;
(statearr_26400_26466[(2)] = inst_26367);

(statearr_26400_26466[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26372 === (8))){
var inst_26348 = (state_26371[(7)]);
var inst_26358 = cljs.core.next.call(null,inst_26348);
var inst_26348__$1 = inst_26358;
var state_26371__$1 = (function (){var statearr_26405 = state_26371;
(statearr_26405[(7)] = inst_26348__$1);

return statearr_26405;
})();
var statearr_26406_26467 = state_26371__$1;
(statearr_26406_26467[(2)] = null);

(statearr_26406_26467[(1)] = (2));


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
});})(c__24836__auto__))
;
return ((function (switch__24601__auto__,c__24836__auto__){
return (function() {
var cljs$core$async$state_machine__24602__auto__ = null;
var cljs$core$async$state_machine__24602__auto____0 = (function (){
var statearr_26421 = [null,null,null,null,null,null,null,null];
(statearr_26421[(0)] = cljs$core$async$state_machine__24602__auto__);

(statearr_26421[(1)] = (1));

return statearr_26421;
});
var cljs$core$async$state_machine__24602__auto____1 = (function (state_26371){
while(true){
var ret_value__24603__auto__ = (function (){try{while(true){
var result__24604__auto__ = switch__24601__auto__.call(null,state_26371);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24604__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24604__auto__;
}
break;
}
}catch (e26422){if((e26422 instanceof Object)){
var ex__24605__auto__ = e26422;
var statearr_26423_26468 = state_26371;
(statearr_26423_26468[(5)] = ex__24605__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26371);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26422;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24603__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26470 = state_26371;
state_26371 = G__26470;
continue;
} else {
return ret_value__24603__auto__;
}
break;
}
});
cljs$core$async$state_machine__24602__auto__ = function(state_26371){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24602__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24602__auto____1.call(this,state_26371);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24602__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24602__auto____0;
cljs$core$async$state_machine__24602__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24602__auto____1;
return cljs$core$async$state_machine__24602__auto__;
})()
;})(switch__24601__auto__,c__24836__auto__))
})();
var state__24838__auto__ = (function (){var statearr_26424 = f__24837__auto__.call(null);
(statearr_26424[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24836__auto__);

return statearr_26424;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24838__auto__);
});})(c__24836__auto__))
);

return c__24836__auto__;
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
var x__21393__auto__ = (((_ == null))?null:_);
var m__21394__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__21393__auto__)]);
if(!((m__21394__auto__ == null))){
return m__21394__auto__.call(null,_);
} else {
var m__21394__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__21394__auto____$1 == null))){
return m__21394__auto____$1.call(null,_);
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
var x__21393__auto__ = (((m == null))?null:m);
var m__21394__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__21393__auto__)]);
if(!((m__21394__auto__ == null))){
return m__21394__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__21394__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__21394__auto____$1 == null))){
return m__21394__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__21393__auto__ = (((m == null))?null:m);
var m__21394__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__21393__auto__)]);
if(!((m__21394__auto__ == null))){
return m__21394__auto__.call(null,m,ch);
} else {
var m__21394__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__21394__auto____$1 == null))){
return m__21394__auto____$1.call(null,m,ch);
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
var x__21393__auto__ = (((m == null))?null:m);
var m__21394__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__21393__auto__)]);
if(!((m__21394__auto__ == null))){
return m__21394__auto__.call(null,m);
} else {
var m__21394__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__21394__auto____$1 == null))){
return m__21394__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async26738 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26738 = (function (ch,cs,meta26739){
this.ch = ch;
this.cs = cs;
this.meta26739 = meta26739;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26738.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_26740,meta26739__$1){
var self__ = this;
var _26740__$1 = this;
return (new cljs.core.async.t_cljs$core$async26738(self__.ch,self__.cs,meta26739__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async26738.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_26740){
var self__ = this;
var _26740__$1 = this;
return self__.meta26739;
});})(cs))
;

cljs.core.async.t_cljs$core$async26738.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26738.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async26738.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26738.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async26738.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async26738.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async26738.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta26739","meta26739",-126093836,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async26738.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26738.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26738";

cljs.core.async.t_cljs$core$async26738.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__21332__auto__,writer__21333__auto__,opt__21334__auto__){
return cljs.core._write.call(null,writer__21333__auto__,"cljs.core.async/t_cljs$core$async26738");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async26738 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async26738(ch__$1,cs__$1,meta26739){
return (new cljs.core.async.t_cljs$core$async26738(ch__$1,cs__$1,meta26739));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async26738(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__24836__auto___27036 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24836__auto___27036,cs,m,dchan,dctr,done){
return (function (){
var f__24837__auto__ = (function (){var switch__24601__auto__ = ((function (c__24836__auto___27036,cs,m,dchan,dctr,done){
return (function (state_26909){
var state_val_26910 = (state_26909[(1)]);
if((state_val_26910 === (7))){
var inst_26904 = (state_26909[(2)]);
var state_26909__$1 = state_26909;
var statearr_26911_27041 = state_26909__$1;
(statearr_26911_27041[(2)] = inst_26904);

(statearr_26911_27041[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26910 === (20))){
var inst_26803 = (state_26909[(7)]);
var inst_26819 = cljs.core.first.call(null,inst_26803);
var inst_26820 = cljs.core.nth.call(null,inst_26819,(0),null);
var inst_26821 = cljs.core.nth.call(null,inst_26819,(1),null);
var state_26909__$1 = (function (){var statearr_26912 = state_26909;
(statearr_26912[(8)] = inst_26820);

return statearr_26912;
})();
if(cljs.core.truth_(inst_26821)){
var statearr_26913_27042 = state_26909__$1;
(statearr_26913_27042[(1)] = (22));

} else {
var statearr_26914_27043 = state_26909__$1;
(statearr_26914_27043[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26910 === (27))){
var inst_26849 = (state_26909[(9)]);
var inst_26769 = (state_26909[(10)]);
var inst_26856 = (state_26909[(11)]);
var inst_26851 = (state_26909[(12)]);
var inst_26856__$1 = cljs.core._nth.call(null,inst_26849,inst_26851);
var inst_26857 = cljs.core.async.put_BANG_.call(null,inst_26856__$1,inst_26769,done);
var state_26909__$1 = (function (){var statearr_26917 = state_26909;
(statearr_26917[(11)] = inst_26856__$1);

return statearr_26917;
})();
if(cljs.core.truth_(inst_26857)){
var statearr_26918_27044 = state_26909__$1;
(statearr_26918_27044[(1)] = (30));

} else {
var statearr_26919_27045 = state_26909__$1;
(statearr_26919_27045[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26910 === (1))){
var state_26909__$1 = state_26909;
var statearr_26920_27048 = state_26909__$1;
(statearr_26920_27048[(2)] = null);

(statearr_26920_27048[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26910 === (24))){
var inst_26803 = (state_26909[(7)]);
var inst_26826 = (state_26909[(2)]);
var inst_26827 = cljs.core.next.call(null,inst_26803);
var inst_26781 = inst_26827;
var inst_26782 = null;
var inst_26783 = (0);
var inst_26784 = (0);
var state_26909__$1 = (function (){var statearr_26921 = state_26909;
(statearr_26921[(13)] = inst_26783);

(statearr_26921[(14)] = inst_26784);

(statearr_26921[(15)] = inst_26782);

(statearr_26921[(16)] = inst_26826);

(statearr_26921[(17)] = inst_26781);

return statearr_26921;
})();
var statearr_26925_27051 = state_26909__$1;
(statearr_26925_27051[(2)] = null);

(statearr_26925_27051[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26910 === (39))){
var state_26909__$1 = state_26909;
var statearr_26929_27052 = state_26909__$1;
(statearr_26929_27052[(2)] = null);

(statearr_26929_27052[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26910 === (4))){
var inst_26769 = (state_26909[(10)]);
var inst_26769__$1 = (state_26909[(2)]);
var inst_26770 = (inst_26769__$1 == null);
var state_26909__$1 = (function (){var statearr_26930 = state_26909;
(statearr_26930[(10)] = inst_26769__$1);

return statearr_26930;
})();
if(cljs.core.truth_(inst_26770)){
var statearr_26931_27053 = state_26909__$1;
(statearr_26931_27053[(1)] = (5));

} else {
var statearr_26932_27054 = state_26909__$1;
(statearr_26932_27054[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26910 === (15))){
var inst_26783 = (state_26909[(13)]);
var inst_26784 = (state_26909[(14)]);
var inst_26782 = (state_26909[(15)]);
var inst_26781 = (state_26909[(17)]);
var inst_26799 = (state_26909[(2)]);
var inst_26800 = (inst_26784 + (1));
var tmp26926 = inst_26783;
var tmp26927 = inst_26782;
var tmp26928 = inst_26781;
var inst_26781__$1 = tmp26928;
var inst_26782__$1 = tmp26927;
var inst_26783__$1 = tmp26926;
var inst_26784__$1 = inst_26800;
var state_26909__$1 = (function (){var statearr_26933 = state_26909;
(statearr_26933[(13)] = inst_26783__$1);

(statearr_26933[(14)] = inst_26784__$1);

(statearr_26933[(15)] = inst_26782__$1);

(statearr_26933[(18)] = inst_26799);

(statearr_26933[(17)] = inst_26781__$1);

return statearr_26933;
})();
var statearr_26934_27055 = state_26909__$1;
(statearr_26934_27055[(2)] = null);

(statearr_26934_27055[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26910 === (21))){
var inst_26830 = (state_26909[(2)]);
var state_26909__$1 = state_26909;
var statearr_26944_27056 = state_26909__$1;
(statearr_26944_27056[(2)] = inst_26830);

(statearr_26944_27056[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26910 === (31))){
var inst_26856 = (state_26909[(11)]);
var inst_26860 = done.call(null,null);
var inst_26861 = cljs.core.async.untap_STAR_.call(null,m,inst_26856);
var state_26909__$1 = (function (){var statearr_26952 = state_26909;
(statearr_26952[(19)] = inst_26860);

return statearr_26952;
})();
var statearr_26959_27057 = state_26909__$1;
(statearr_26959_27057[(2)] = inst_26861);

(statearr_26959_27057[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26910 === (32))){
var inst_26849 = (state_26909[(9)]);
var inst_26850 = (state_26909[(20)]);
var inst_26851 = (state_26909[(12)]);
var inst_26848 = (state_26909[(21)]);
var inst_26863 = (state_26909[(2)]);
var inst_26864 = (inst_26851 + (1));
var tmp26935 = inst_26849;
var tmp26936 = inst_26850;
var tmp26937 = inst_26848;
var inst_26848__$1 = tmp26937;
var inst_26849__$1 = tmp26935;
var inst_26850__$1 = tmp26936;
var inst_26851__$1 = inst_26864;
var state_26909__$1 = (function (){var statearr_26960 = state_26909;
(statearr_26960[(9)] = inst_26849__$1);

(statearr_26960[(22)] = inst_26863);

(statearr_26960[(20)] = inst_26850__$1);

(statearr_26960[(12)] = inst_26851__$1);

(statearr_26960[(21)] = inst_26848__$1);

return statearr_26960;
})();
var statearr_26961_27058 = state_26909__$1;
(statearr_26961_27058[(2)] = null);

(statearr_26961_27058[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26910 === (40))){
var inst_26876 = (state_26909[(23)]);
var inst_26880 = done.call(null,null);
var inst_26881 = cljs.core.async.untap_STAR_.call(null,m,inst_26876);
var state_26909__$1 = (function (){var statearr_26962 = state_26909;
(statearr_26962[(24)] = inst_26880);

return statearr_26962;
})();
var statearr_26970_27059 = state_26909__$1;
(statearr_26970_27059[(2)] = inst_26881);

(statearr_26970_27059[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26910 === (33))){
var inst_26867 = (state_26909[(25)]);
var inst_26869 = cljs.core.chunked_seq_QMARK_.call(null,inst_26867);
var state_26909__$1 = state_26909;
if(inst_26869){
var statearr_26974_27060 = state_26909__$1;
(statearr_26974_27060[(1)] = (36));

} else {
var statearr_26975_27061 = state_26909__$1;
(statearr_26975_27061[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26910 === (13))){
var inst_26793 = (state_26909[(26)]);
var inst_26796 = cljs.core.async.close_BANG_.call(null,inst_26793);
var state_26909__$1 = state_26909;
var statearr_26976_27062 = state_26909__$1;
(statearr_26976_27062[(2)] = inst_26796);

(statearr_26976_27062[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26910 === (22))){
var inst_26820 = (state_26909[(8)]);
var inst_26823 = cljs.core.async.close_BANG_.call(null,inst_26820);
var state_26909__$1 = state_26909;
var statearr_26977_27063 = state_26909__$1;
(statearr_26977_27063[(2)] = inst_26823);

(statearr_26977_27063[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26910 === (36))){
var inst_26867 = (state_26909[(25)]);
var inst_26871 = cljs.core.chunk_first.call(null,inst_26867);
var inst_26872 = cljs.core.chunk_rest.call(null,inst_26867);
var inst_26873 = cljs.core.count.call(null,inst_26871);
var inst_26848 = inst_26872;
var inst_26849 = inst_26871;
var inst_26850 = inst_26873;
var inst_26851 = (0);
var state_26909__$1 = (function (){var statearr_26978 = state_26909;
(statearr_26978[(9)] = inst_26849);

(statearr_26978[(20)] = inst_26850);

(statearr_26978[(12)] = inst_26851);

(statearr_26978[(21)] = inst_26848);

return statearr_26978;
})();
var statearr_26979_27064 = state_26909__$1;
(statearr_26979_27064[(2)] = null);

(statearr_26979_27064[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26910 === (41))){
var inst_26867 = (state_26909[(25)]);
var inst_26883 = (state_26909[(2)]);
var inst_26884 = cljs.core.next.call(null,inst_26867);
var inst_26848 = inst_26884;
var inst_26849 = null;
var inst_26850 = (0);
var inst_26851 = (0);
var state_26909__$1 = (function (){var statearr_26984 = state_26909;
(statearr_26984[(27)] = inst_26883);

(statearr_26984[(9)] = inst_26849);

(statearr_26984[(20)] = inst_26850);

(statearr_26984[(12)] = inst_26851);

(statearr_26984[(21)] = inst_26848);

return statearr_26984;
})();
var statearr_26985_27065 = state_26909__$1;
(statearr_26985_27065[(2)] = null);

(statearr_26985_27065[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26910 === (43))){
var state_26909__$1 = state_26909;
var statearr_26986_27066 = state_26909__$1;
(statearr_26986_27066[(2)] = null);

(statearr_26986_27066[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26910 === (29))){
var inst_26892 = (state_26909[(2)]);
var state_26909__$1 = state_26909;
var statearr_26987_27067 = state_26909__$1;
(statearr_26987_27067[(2)] = inst_26892);

(statearr_26987_27067[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26910 === (44))){
var inst_26901 = (state_26909[(2)]);
var state_26909__$1 = (function (){var statearr_26988 = state_26909;
(statearr_26988[(28)] = inst_26901);

return statearr_26988;
})();
var statearr_26989_27068 = state_26909__$1;
(statearr_26989_27068[(2)] = null);

(statearr_26989_27068[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26910 === (6))){
var inst_26840 = (state_26909[(29)]);
var inst_26839 = cljs.core.deref.call(null,cs);
var inst_26840__$1 = cljs.core.keys.call(null,inst_26839);
var inst_26841 = cljs.core.count.call(null,inst_26840__$1);
var inst_26842 = cljs.core.reset_BANG_.call(null,dctr,inst_26841);
var inst_26847 = cljs.core.seq.call(null,inst_26840__$1);
var inst_26848 = inst_26847;
var inst_26849 = null;
var inst_26850 = (0);
var inst_26851 = (0);
var state_26909__$1 = (function (){var statearr_26990 = state_26909;
(statearr_26990[(9)] = inst_26849);

(statearr_26990[(30)] = inst_26842);

(statearr_26990[(20)] = inst_26850);

(statearr_26990[(12)] = inst_26851);

(statearr_26990[(21)] = inst_26848);

(statearr_26990[(29)] = inst_26840__$1);

return statearr_26990;
})();
var statearr_26991_27069 = state_26909__$1;
(statearr_26991_27069[(2)] = null);

(statearr_26991_27069[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26910 === (28))){
var inst_26848 = (state_26909[(21)]);
var inst_26867 = (state_26909[(25)]);
var inst_26867__$1 = cljs.core.seq.call(null,inst_26848);
var state_26909__$1 = (function (){var statearr_26992 = state_26909;
(statearr_26992[(25)] = inst_26867__$1);

return statearr_26992;
})();
if(inst_26867__$1){
var statearr_26993_27070 = state_26909__$1;
(statearr_26993_27070[(1)] = (33));

} else {
var statearr_26994_27071 = state_26909__$1;
(statearr_26994_27071[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26910 === (25))){
var inst_26850 = (state_26909[(20)]);
var inst_26851 = (state_26909[(12)]);
var inst_26853 = (inst_26851 < inst_26850);
var inst_26854 = inst_26853;
var state_26909__$1 = state_26909;
if(cljs.core.truth_(inst_26854)){
var statearr_26995_27072 = state_26909__$1;
(statearr_26995_27072[(1)] = (27));

} else {
var statearr_26997_27073 = state_26909__$1;
(statearr_26997_27073[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26910 === (34))){
var state_26909__$1 = state_26909;
var statearr_26998_27074 = state_26909__$1;
(statearr_26998_27074[(2)] = null);

(statearr_26998_27074[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26910 === (17))){
var state_26909__$1 = state_26909;
var statearr_26999_27075 = state_26909__$1;
(statearr_26999_27075[(2)] = null);

(statearr_26999_27075[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26910 === (3))){
var inst_26906 = (state_26909[(2)]);
var state_26909__$1 = state_26909;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26909__$1,inst_26906);
} else {
if((state_val_26910 === (12))){
var inst_26835 = (state_26909[(2)]);
var state_26909__$1 = state_26909;
var statearr_27000_27076 = state_26909__$1;
(statearr_27000_27076[(2)] = inst_26835);

(statearr_27000_27076[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26910 === (2))){
var state_26909__$1 = state_26909;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26909__$1,(4),ch);
} else {
if((state_val_26910 === (23))){
var state_26909__$1 = state_26909;
var statearr_27001_27079 = state_26909__$1;
(statearr_27001_27079[(2)] = null);

(statearr_27001_27079[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26910 === (35))){
var inst_26890 = (state_26909[(2)]);
var state_26909__$1 = state_26909;
var statearr_27002_27080 = state_26909__$1;
(statearr_27002_27080[(2)] = inst_26890);

(statearr_27002_27080[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26910 === (19))){
var inst_26803 = (state_26909[(7)]);
var inst_26807 = cljs.core.chunk_first.call(null,inst_26803);
var inst_26808 = cljs.core.chunk_rest.call(null,inst_26803);
var inst_26809 = cljs.core.count.call(null,inst_26807);
var inst_26781 = inst_26808;
var inst_26782 = inst_26807;
var inst_26783 = inst_26809;
var inst_26784 = (0);
var state_26909__$1 = (function (){var statearr_27003 = state_26909;
(statearr_27003[(13)] = inst_26783);

(statearr_27003[(14)] = inst_26784);

(statearr_27003[(15)] = inst_26782);

(statearr_27003[(17)] = inst_26781);

return statearr_27003;
})();
var statearr_27004_27087 = state_26909__$1;
(statearr_27004_27087[(2)] = null);

(statearr_27004_27087[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26910 === (11))){
var inst_26781 = (state_26909[(17)]);
var inst_26803 = (state_26909[(7)]);
var inst_26803__$1 = cljs.core.seq.call(null,inst_26781);
var state_26909__$1 = (function (){var statearr_27005 = state_26909;
(statearr_27005[(7)] = inst_26803__$1);

return statearr_27005;
})();
if(inst_26803__$1){
var statearr_27006_27088 = state_26909__$1;
(statearr_27006_27088[(1)] = (16));

} else {
var statearr_27007_27089 = state_26909__$1;
(statearr_27007_27089[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26910 === (9))){
var inst_26837 = (state_26909[(2)]);
var state_26909__$1 = state_26909;
var statearr_27008_27090 = state_26909__$1;
(statearr_27008_27090[(2)] = inst_26837);

(statearr_27008_27090[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26910 === (5))){
var inst_26779 = cljs.core.deref.call(null,cs);
var inst_26780 = cljs.core.seq.call(null,inst_26779);
var inst_26781 = inst_26780;
var inst_26782 = null;
var inst_26783 = (0);
var inst_26784 = (0);
var state_26909__$1 = (function (){var statearr_27009 = state_26909;
(statearr_27009[(13)] = inst_26783);

(statearr_27009[(14)] = inst_26784);

(statearr_27009[(15)] = inst_26782);

(statearr_27009[(17)] = inst_26781);

return statearr_27009;
})();
var statearr_27010_27093 = state_26909__$1;
(statearr_27010_27093[(2)] = null);

(statearr_27010_27093[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26910 === (14))){
var state_26909__$1 = state_26909;
var statearr_27011_27095 = state_26909__$1;
(statearr_27011_27095[(2)] = null);

(statearr_27011_27095[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26910 === (45))){
var inst_26898 = (state_26909[(2)]);
var state_26909__$1 = state_26909;
var statearr_27012_27097 = state_26909__$1;
(statearr_27012_27097[(2)] = inst_26898);

(statearr_27012_27097[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26910 === (26))){
var inst_26840 = (state_26909[(29)]);
var inst_26894 = (state_26909[(2)]);
var inst_26895 = cljs.core.seq.call(null,inst_26840);
var state_26909__$1 = (function (){var statearr_27013 = state_26909;
(statearr_27013[(31)] = inst_26894);

return statearr_27013;
})();
if(inst_26895){
var statearr_27014_27098 = state_26909__$1;
(statearr_27014_27098[(1)] = (42));

} else {
var statearr_27015_27099 = state_26909__$1;
(statearr_27015_27099[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26910 === (16))){
var inst_26803 = (state_26909[(7)]);
var inst_26805 = cljs.core.chunked_seq_QMARK_.call(null,inst_26803);
var state_26909__$1 = state_26909;
if(inst_26805){
var statearr_27016_27100 = state_26909__$1;
(statearr_27016_27100[(1)] = (19));

} else {
var statearr_27017_27101 = state_26909__$1;
(statearr_27017_27101[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26910 === (38))){
var inst_26887 = (state_26909[(2)]);
var state_26909__$1 = state_26909;
var statearr_27018_27102 = state_26909__$1;
(statearr_27018_27102[(2)] = inst_26887);

(statearr_27018_27102[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26910 === (30))){
var state_26909__$1 = state_26909;
var statearr_27019_27103 = state_26909__$1;
(statearr_27019_27103[(2)] = null);

(statearr_27019_27103[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26910 === (10))){
var inst_26784 = (state_26909[(14)]);
var inst_26782 = (state_26909[(15)]);
var inst_26792 = cljs.core._nth.call(null,inst_26782,inst_26784);
var inst_26793 = cljs.core.nth.call(null,inst_26792,(0),null);
var inst_26794 = cljs.core.nth.call(null,inst_26792,(1),null);
var state_26909__$1 = (function (){var statearr_27020 = state_26909;
(statearr_27020[(26)] = inst_26793);

return statearr_27020;
})();
if(cljs.core.truth_(inst_26794)){
var statearr_27021_27104 = state_26909__$1;
(statearr_27021_27104[(1)] = (13));

} else {
var statearr_27022_27105 = state_26909__$1;
(statearr_27022_27105[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26910 === (18))){
var inst_26833 = (state_26909[(2)]);
var state_26909__$1 = state_26909;
var statearr_27023_27106 = state_26909__$1;
(statearr_27023_27106[(2)] = inst_26833);

(statearr_27023_27106[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26910 === (42))){
var state_26909__$1 = state_26909;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26909__$1,(45),dchan);
} else {
if((state_val_26910 === (37))){
var inst_26769 = (state_26909[(10)]);
var inst_26876 = (state_26909[(23)]);
var inst_26867 = (state_26909[(25)]);
var inst_26876__$1 = cljs.core.first.call(null,inst_26867);
var inst_26877 = cljs.core.async.put_BANG_.call(null,inst_26876__$1,inst_26769,done);
var state_26909__$1 = (function (){var statearr_27024 = state_26909;
(statearr_27024[(23)] = inst_26876__$1);

return statearr_27024;
})();
if(cljs.core.truth_(inst_26877)){
var statearr_27025_27107 = state_26909__$1;
(statearr_27025_27107[(1)] = (39));

} else {
var statearr_27026_27108 = state_26909__$1;
(statearr_27026_27108[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26910 === (8))){
var inst_26783 = (state_26909[(13)]);
var inst_26784 = (state_26909[(14)]);
var inst_26786 = (inst_26784 < inst_26783);
var inst_26787 = inst_26786;
var state_26909__$1 = state_26909;
if(cljs.core.truth_(inst_26787)){
var statearr_27027_27109 = state_26909__$1;
(statearr_27027_27109[(1)] = (10));

} else {
var statearr_27028_27110 = state_26909__$1;
(statearr_27028_27110[(1)] = (11));

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
});})(c__24836__auto___27036,cs,m,dchan,dctr,done))
;
return ((function (switch__24601__auto__,c__24836__auto___27036,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__24602__auto__ = null;
var cljs$core$async$mult_$_state_machine__24602__auto____0 = (function (){
var statearr_27032 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27032[(0)] = cljs$core$async$mult_$_state_machine__24602__auto__);

(statearr_27032[(1)] = (1));

return statearr_27032;
});
var cljs$core$async$mult_$_state_machine__24602__auto____1 = (function (state_26909){
while(true){
var ret_value__24603__auto__ = (function (){try{while(true){
var result__24604__auto__ = switch__24601__auto__.call(null,state_26909);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24604__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24604__auto__;
}
break;
}
}catch (e27033){if((e27033 instanceof Object)){
var ex__24605__auto__ = e27033;
var statearr_27034_27116 = state_26909;
(statearr_27034_27116[(5)] = ex__24605__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26909);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27033;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24603__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27118 = state_26909;
state_26909 = G__27118;
continue;
} else {
return ret_value__24603__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__24602__auto__ = function(state_26909){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__24602__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__24602__auto____1.call(this,state_26909);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__24602__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__24602__auto____0;
cljs$core$async$mult_$_state_machine__24602__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__24602__auto____1;
return cljs$core$async$mult_$_state_machine__24602__auto__;
})()
;})(switch__24601__auto__,c__24836__auto___27036,cs,m,dchan,dctr,done))
})();
var state__24838__auto__ = (function (){var statearr_27035 = f__24837__auto__.call(null);
(statearr_27035[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24836__auto___27036);

return statearr_27035;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24838__auto__);
});})(c__24836__auto___27036,cs,m,dchan,dctr,done))
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
var args27121 = [];
var len__21896__auto___27127 = arguments.length;
var i__21897__auto___27128 = (0);
while(true){
if((i__21897__auto___27128 < len__21896__auto___27127)){
args27121.push((arguments[i__21897__auto___27128]));

var G__27129 = (i__21897__auto___27128 + (1));
i__21897__auto___27128 = G__27129;
continue;
} else {
}
break;
}

var G__27126 = args27121.length;
switch (G__27126) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args27121.length)].join('')));

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
var x__21393__auto__ = (((m == null))?null:m);
var m__21394__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__21393__auto__)]);
if(!((m__21394__auto__ == null))){
return m__21394__auto__.call(null,m,ch);
} else {
var m__21394__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__21394__auto____$1 == null))){
return m__21394__auto____$1.call(null,m,ch);
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
var x__21393__auto__ = (((m == null))?null:m);
var m__21394__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__21393__auto__)]);
if(!((m__21394__auto__ == null))){
return m__21394__auto__.call(null,m,ch);
} else {
var m__21394__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__21394__auto____$1 == null))){
return m__21394__auto____$1.call(null,m,ch);
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
var x__21393__auto__ = (((m == null))?null:m);
var m__21394__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__21393__auto__)]);
if(!((m__21394__auto__ == null))){
return m__21394__auto__.call(null,m);
} else {
var m__21394__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__21394__auto____$1 == null))){
return m__21394__auto____$1.call(null,m);
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
var x__21393__auto__ = (((m == null))?null:m);
var m__21394__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__21393__auto__)]);
if(!((m__21394__auto__ == null))){
return m__21394__auto__.call(null,m,state_map);
} else {
var m__21394__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__21394__auto____$1 == null))){
return m__21394__auto____$1.call(null,m,state_map);
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
var x__21393__auto__ = (((m == null))?null:m);
var m__21394__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__21393__auto__)]);
if(!((m__21394__auto__ == null))){
return m__21394__auto__.call(null,m,mode);
} else {
var m__21394__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__21394__auto____$1 == null))){
return m__21394__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__21903__auto__ = [];
var len__21896__auto___27153 = arguments.length;
var i__21897__auto___27154 = (0);
while(true){
if((i__21897__auto___27154 < len__21896__auto___27153)){
args__21903__auto__.push((arguments[i__21897__auto___27154]));

var G__27155 = (i__21897__auto___27154 + (1));
i__21897__auto___27154 = G__27155;
continue;
} else {
}
break;
}

var argseq__21904__auto__ = ((((3) < args__21903__auto__.length))?(new cljs.core.IndexedSeq(args__21903__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__21904__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__27147){
var map__27148 = p__27147;
var map__27148__$1 = ((((!((map__27148 == null)))?((((map__27148.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27148.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27148):map__27148);
var opts = map__27148__$1;
var statearr_27150_27156 = state;
(statearr_27150_27156[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__6753__auto__ = cljs.core.async.do_alts.call(null,((function (map__27148,map__27148__$1,opts){
return (function (val){
var statearr_27151_27157 = state;
(statearr_27151_27157[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__27148,map__27148__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__6753__auto__)){
var cb = temp__6753__auto__;
var statearr_27152_27158 = state;
(statearr_27152_27158[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq27143){
var G__27144 = cljs.core.first.call(null,seq27143);
var seq27143__$1 = cljs.core.next.call(null,seq27143);
var G__27145 = cljs.core.first.call(null,seq27143__$1);
var seq27143__$2 = cljs.core.next.call(null,seq27143__$1);
var G__27146 = cljs.core.first.call(null,seq27143__$2);
var seq27143__$3 = cljs.core.next.call(null,seq27143__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__27144,G__27145,G__27146,seq27143__$3);
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
if(typeof cljs.core.async.t_cljs$core$async27340 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27340 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta27341){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta27341 = meta27341;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27340.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27342,meta27341__$1){
var self__ = this;
var _27342__$1 = this;
return (new cljs.core.async.t_cljs$core$async27340(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta27341__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27340.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27342){
var self__ = this;
var _27342__$1 = this;
return self__.meta27341;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27340.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27340.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27340.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27340.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27340.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27340.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27340.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27340.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async27340.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta27341","meta27341",1147977828,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27340.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27340.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27340";

cljs.core.async.t_cljs$core$async27340.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__21332__auto__,writer__21333__auto__,opt__21334__auto__){
return cljs.core._write.call(null,writer__21333__auto__,"cljs.core.async/t_cljs$core$async27340");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async27340 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async27340(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta27341){
return (new cljs.core.async.t_cljs$core$async27340(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta27341));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async27340(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__24836__auto___27527 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24836__auto___27527,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__24837__auto__ = (function (){var switch__24601__auto__ = ((function (c__24836__auto___27527,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_27445){
var state_val_27446 = (state_27445[(1)]);
if((state_val_27446 === (7))){
var inst_27359 = (state_27445[(2)]);
var state_27445__$1 = state_27445;
var statearr_27447_27528 = state_27445__$1;
(statearr_27447_27528[(2)] = inst_27359);

(statearr_27447_27528[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27446 === (20))){
var inst_27371 = (state_27445[(7)]);
var state_27445__$1 = state_27445;
var statearr_27449_27529 = state_27445__$1;
(statearr_27449_27529[(2)] = inst_27371);

(statearr_27449_27529[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27446 === (27))){
var state_27445__$1 = state_27445;
var statearr_27450_27530 = state_27445__$1;
(statearr_27450_27530[(2)] = null);

(statearr_27450_27530[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27446 === (1))){
var inst_27346 = (state_27445[(8)]);
var inst_27346__$1 = calc_state.call(null);
var inst_27348 = (inst_27346__$1 == null);
var inst_27349 = cljs.core.not.call(null,inst_27348);
var state_27445__$1 = (function (){var statearr_27451 = state_27445;
(statearr_27451[(8)] = inst_27346__$1);

return statearr_27451;
})();
if(inst_27349){
var statearr_27452_27531 = state_27445__$1;
(statearr_27452_27531[(1)] = (2));

} else {
var statearr_27453_27532 = state_27445__$1;
(statearr_27453_27532[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27446 === (24))){
var inst_27395 = (state_27445[(9)]);
var inst_27418 = (state_27445[(10)]);
var inst_27404 = (state_27445[(11)]);
var inst_27418__$1 = inst_27395.call(null,inst_27404);
var state_27445__$1 = (function (){var statearr_27454 = state_27445;
(statearr_27454[(10)] = inst_27418__$1);

return statearr_27454;
})();
if(cljs.core.truth_(inst_27418__$1)){
var statearr_27455_27533 = state_27445__$1;
(statearr_27455_27533[(1)] = (29));

} else {
var statearr_27456_27534 = state_27445__$1;
(statearr_27456_27534[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27446 === (4))){
var inst_27362 = (state_27445[(2)]);
var state_27445__$1 = state_27445;
if(cljs.core.truth_(inst_27362)){
var statearr_27457_27535 = state_27445__$1;
(statearr_27457_27535[(1)] = (8));

} else {
var statearr_27458_27536 = state_27445__$1;
(statearr_27458_27536[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27446 === (15))){
var inst_27389 = (state_27445[(2)]);
var state_27445__$1 = state_27445;
if(cljs.core.truth_(inst_27389)){
var statearr_27459_27537 = state_27445__$1;
(statearr_27459_27537[(1)] = (19));

} else {
var statearr_27460_27538 = state_27445__$1;
(statearr_27460_27538[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27446 === (21))){
var inst_27394 = (state_27445[(12)]);
var inst_27394__$1 = (state_27445[(2)]);
var inst_27395 = cljs.core.get.call(null,inst_27394__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_27396 = cljs.core.get.call(null,inst_27394__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27397 = cljs.core.get.call(null,inst_27394__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_27445__$1 = (function (){var statearr_27461 = state_27445;
(statearr_27461[(12)] = inst_27394__$1);

(statearr_27461[(9)] = inst_27395);

(statearr_27461[(13)] = inst_27396);

return statearr_27461;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_27445__$1,(22),inst_27397);
} else {
if((state_val_27446 === (31))){
var inst_27426 = (state_27445[(2)]);
var state_27445__$1 = state_27445;
if(cljs.core.truth_(inst_27426)){
var statearr_27462_27579 = state_27445__$1;
(statearr_27462_27579[(1)] = (32));

} else {
var statearr_27463_27580 = state_27445__$1;
(statearr_27463_27580[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27446 === (32))){
var inst_27403 = (state_27445[(14)]);
var state_27445__$1 = state_27445;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27445__$1,(35),out,inst_27403);
} else {
if((state_val_27446 === (33))){
var inst_27394 = (state_27445[(12)]);
var inst_27371 = inst_27394;
var state_27445__$1 = (function (){var statearr_27464 = state_27445;
(statearr_27464[(7)] = inst_27371);

return statearr_27464;
})();
var statearr_27465_27581 = state_27445__$1;
(statearr_27465_27581[(2)] = null);

(statearr_27465_27581[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27446 === (13))){
var inst_27371 = (state_27445[(7)]);
var inst_27378 = inst_27371.cljs$lang$protocol_mask$partition0$;
var inst_27379 = (inst_27378 & (64));
var inst_27380 = inst_27371.cljs$core$ISeq$;
var inst_27381 = (cljs.core.PROTOCOL_SENTINEL === inst_27380);
var inst_27382 = (inst_27379) || (inst_27381);
var state_27445__$1 = state_27445;
if(cljs.core.truth_(inst_27382)){
var statearr_27467_27582 = state_27445__$1;
(statearr_27467_27582[(1)] = (16));

} else {
var statearr_27468_27583 = state_27445__$1;
(statearr_27468_27583[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27446 === (22))){
var inst_27403 = (state_27445[(14)]);
var inst_27404 = (state_27445[(11)]);
var inst_27402 = (state_27445[(2)]);
var inst_27403__$1 = cljs.core.nth.call(null,inst_27402,(0),null);
var inst_27404__$1 = cljs.core.nth.call(null,inst_27402,(1),null);
var inst_27405 = (inst_27403__$1 == null);
var inst_27406 = cljs.core._EQ_.call(null,inst_27404__$1,change);
var inst_27407 = (inst_27405) || (inst_27406);
var state_27445__$1 = (function (){var statearr_27469 = state_27445;
(statearr_27469[(14)] = inst_27403__$1);

(statearr_27469[(11)] = inst_27404__$1);

return statearr_27469;
})();
if(cljs.core.truth_(inst_27407)){
var statearr_27470_27587 = state_27445__$1;
(statearr_27470_27587[(1)] = (23));

} else {
var statearr_27471_27602 = state_27445__$1;
(statearr_27471_27602[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27446 === (36))){
var inst_27394 = (state_27445[(12)]);
var inst_27371 = inst_27394;
var state_27445__$1 = (function (){var statearr_27472 = state_27445;
(statearr_27472[(7)] = inst_27371);

return statearr_27472;
})();
var statearr_27473_27612 = state_27445__$1;
(statearr_27473_27612[(2)] = null);

(statearr_27473_27612[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27446 === (29))){
var inst_27418 = (state_27445[(10)]);
var state_27445__$1 = state_27445;
var statearr_27474_27630 = state_27445__$1;
(statearr_27474_27630[(2)] = inst_27418);

(statearr_27474_27630[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27446 === (6))){
var state_27445__$1 = state_27445;
var statearr_27478_27631 = state_27445__$1;
(statearr_27478_27631[(2)] = false);

(statearr_27478_27631[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27446 === (28))){
var inst_27414 = (state_27445[(2)]);
var inst_27415 = calc_state.call(null);
var inst_27371 = inst_27415;
var state_27445__$1 = (function (){var statearr_27479 = state_27445;
(statearr_27479[(15)] = inst_27414);

(statearr_27479[(7)] = inst_27371);

return statearr_27479;
})();
var statearr_27480_27632 = state_27445__$1;
(statearr_27480_27632[(2)] = null);

(statearr_27480_27632[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27446 === (25))){
var inst_27440 = (state_27445[(2)]);
var state_27445__$1 = state_27445;
var statearr_27481_27633 = state_27445__$1;
(statearr_27481_27633[(2)] = inst_27440);

(statearr_27481_27633[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27446 === (34))){
var inst_27438 = (state_27445[(2)]);
var state_27445__$1 = state_27445;
var statearr_27482_27634 = state_27445__$1;
(statearr_27482_27634[(2)] = inst_27438);

(statearr_27482_27634[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27446 === (17))){
var state_27445__$1 = state_27445;
var statearr_27483_27635 = state_27445__$1;
(statearr_27483_27635[(2)] = false);

(statearr_27483_27635[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27446 === (3))){
var state_27445__$1 = state_27445;
var statearr_27484_27636 = state_27445__$1;
(statearr_27484_27636[(2)] = false);

(statearr_27484_27636[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27446 === (12))){
var inst_27442 = (state_27445[(2)]);
var state_27445__$1 = state_27445;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27445__$1,inst_27442);
} else {
if((state_val_27446 === (2))){
var inst_27346 = (state_27445[(8)]);
var inst_27351 = inst_27346.cljs$lang$protocol_mask$partition0$;
var inst_27352 = (inst_27351 & (64));
var inst_27353 = inst_27346.cljs$core$ISeq$;
var inst_27354 = (cljs.core.PROTOCOL_SENTINEL === inst_27353);
var inst_27355 = (inst_27352) || (inst_27354);
var state_27445__$1 = state_27445;
if(cljs.core.truth_(inst_27355)){
var statearr_27489_27642 = state_27445__$1;
(statearr_27489_27642[(1)] = (5));

} else {
var statearr_27490_27644 = state_27445__$1;
(statearr_27490_27644[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27446 === (23))){
var inst_27403 = (state_27445[(14)]);
var inst_27409 = (inst_27403 == null);
var state_27445__$1 = state_27445;
if(cljs.core.truth_(inst_27409)){
var statearr_27491_27645 = state_27445__$1;
(statearr_27491_27645[(1)] = (26));

} else {
var statearr_27492_27649 = state_27445__$1;
(statearr_27492_27649[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27446 === (35))){
var inst_27429 = (state_27445[(2)]);
var state_27445__$1 = state_27445;
if(cljs.core.truth_(inst_27429)){
var statearr_27493_27650 = state_27445__$1;
(statearr_27493_27650[(1)] = (36));

} else {
var statearr_27494_27651 = state_27445__$1;
(statearr_27494_27651[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27446 === (19))){
var inst_27371 = (state_27445[(7)]);
var inst_27391 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27371);
var state_27445__$1 = state_27445;
var statearr_27495_27652 = state_27445__$1;
(statearr_27495_27652[(2)] = inst_27391);

(statearr_27495_27652[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27446 === (11))){
var inst_27371 = (state_27445[(7)]);
var inst_27375 = (inst_27371 == null);
var inst_27376 = cljs.core.not.call(null,inst_27375);
var state_27445__$1 = state_27445;
if(inst_27376){
var statearr_27496_27653 = state_27445__$1;
(statearr_27496_27653[(1)] = (13));

} else {
var statearr_27497_27654 = state_27445__$1;
(statearr_27497_27654[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27446 === (9))){
var inst_27346 = (state_27445[(8)]);
var state_27445__$1 = state_27445;
var statearr_27498_27655 = state_27445__$1;
(statearr_27498_27655[(2)] = inst_27346);

(statearr_27498_27655[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27446 === (5))){
var state_27445__$1 = state_27445;
var statearr_27499_27656 = state_27445__$1;
(statearr_27499_27656[(2)] = true);

(statearr_27499_27656[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27446 === (14))){
var state_27445__$1 = state_27445;
var statearr_27500_27658 = state_27445__$1;
(statearr_27500_27658[(2)] = false);

(statearr_27500_27658[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27446 === (26))){
var inst_27404 = (state_27445[(11)]);
var inst_27411 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_27404);
var state_27445__$1 = state_27445;
var statearr_27501_27662 = state_27445__$1;
(statearr_27501_27662[(2)] = inst_27411);

(statearr_27501_27662[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27446 === (16))){
var state_27445__$1 = state_27445;
var statearr_27502_27663 = state_27445__$1;
(statearr_27502_27663[(2)] = true);

(statearr_27502_27663[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27446 === (38))){
var inst_27434 = (state_27445[(2)]);
var state_27445__$1 = state_27445;
var statearr_27503_27664 = state_27445__$1;
(statearr_27503_27664[(2)] = inst_27434);

(statearr_27503_27664[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27446 === (30))){
var inst_27395 = (state_27445[(9)]);
var inst_27404 = (state_27445[(11)]);
var inst_27396 = (state_27445[(13)]);
var inst_27421 = cljs.core.empty_QMARK_.call(null,inst_27395);
var inst_27422 = inst_27396.call(null,inst_27404);
var inst_27423 = cljs.core.not.call(null,inst_27422);
var inst_27424 = (inst_27421) && (inst_27423);
var state_27445__$1 = state_27445;
var statearr_27504_27665 = state_27445__$1;
(statearr_27504_27665[(2)] = inst_27424);

(statearr_27504_27665[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27446 === (10))){
var inst_27346 = (state_27445[(8)]);
var inst_27367 = (state_27445[(2)]);
var inst_27368 = cljs.core.get.call(null,inst_27367,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_27369 = cljs.core.get.call(null,inst_27367,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27370 = cljs.core.get.call(null,inst_27367,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_27371 = inst_27346;
var state_27445__$1 = (function (){var statearr_27506 = state_27445;
(statearr_27506[(7)] = inst_27371);

(statearr_27506[(16)] = inst_27368);

(statearr_27506[(17)] = inst_27370);

(statearr_27506[(18)] = inst_27369);

return statearr_27506;
})();
var statearr_27507_27666 = state_27445__$1;
(statearr_27507_27666[(2)] = null);

(statearr_27507_27666[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27446 === (18))){
var inst_27386 = (state_27445[(2)]);
var state_27445__$1 = state_27445;
var statearr_27508_27668 = state_27445__$1;
(statearr_27508_27668[(2)] = inst_27386);

(statearr_27508_27668[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27446 === (37))){
var state_27445__$1 = state_27445;
var statearr_27509_27669 = state_27445__$1;
(statearr_27509_27669[(2)] = null);

(statearr_27509_27669[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27446 === (8))){
var inst_27346 = (state_27445[(8)]);
var inst_27364 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27346);
var state_27445__$1 = state_27445;
var statearr_27510_27670 = state_27445__$1;
(statearr_27510_27670[(2)] = inst_27364);

(statearr_27510_27670[(1)] = (10));


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
});})(c__24836__auto___27527,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__24601__auto__,c__24836__auto___27527,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__24602__auto__ = null;
var cljs$core$async$mix_$_state_machine__24602__auto____0 = (function (){
var statearr_27517 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27517[(0)] = cljs$core$async$mix_$_state_machine__24602__auto__);

(statearr_27517[(1)] = (1));

return statearr_27517;
});
var cljs$core$async$mix_$_state_machine__24602__auto____1 = (function (state_27445){
while(true){
var ret_value__24603__auto__ = (function (){try{while(true){
var result__24604__auto__ = switch__24601__auto__.call(null,state_27445);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24604__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24604__auto__;
}
break;
}
}catch (e27518){if((e27518 instanceof Object)){
var ex__24605__auto__ = e27518;
var statearr_27519_27673 = state_27445;
(statearr_27519_27673[(5)] = ex__24605__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27445);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27518;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24603__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27674 = state_27445;
state_27445 = G__27674;
continue;
} else {
return ret_value__24603__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__24602__auto__ = function(state_27445){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__24602__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__24602__auto____1.call(this,state_27445);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__24602__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__24602__auto____0;
cljs$core$async$mix_$_state_machine__24602__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__24602__auto____1;
return cljs$core$async$mix_$_state_machine__24602__auto__;
})()
;})(switch__24601__auto__,c__24836__auto___27527,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__24838__auto__ = (function (){var statearr_27520 = f__24837__auto__.call(null);
(statearr_27520[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24836__auto___27527);

return statearr_27520;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24838__auto__);
});})(c__24836__auto___27527,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__21393__auto__ = (((p == null))?null:p);
var m__21394__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__21393__auto__)]);
if(!((m__21394__auto__ == null))){
return m__21394__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__21394__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__21394__auto____$1 == null))){
return m__21394__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__21393__auto__ = (((p == null))?null:p);
var m__21394__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__21393__auto__)]);
if(!((m__21394__auto__ == null))){
return m__21394__auto__.call(null,p,v,ch);
} else {
var m__21394__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__21394__auto____$1 == null))){
return m__21394__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args27675 = [];
var len__21896__auto___27678 = arguments.length;
var i__21897__auto___27679 = (0);
while(true){
if((i__21897__auto___27679 < len__21896__auto___27678)){
args27675.push((arguments[i__21897__auto___27679]));

var G__27680 = (i__21897__auto___27679 + (1));
i__21897__auto___27679 = G__27680;
continue;
} else {
}
break;
}

var G__27677 = args27675.length;
switch (G__27677) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args27675.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__21393__auto__ = (((p == null))?null:p);
var m__21394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__21393__auto__)]);
if(!((m__21394__auto__ == null))){
return m__21394__auto__.call(null,p);
} else {
var m__21394__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__21394__auto____$1 == null))){
return m__21394__auto____$1.call(null,p);
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
var x__21393__auto__ = (((p == null))?null:p);
var m__21394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__21393__auto__)]);
if(!((m__21394__auto__ == null))){
return m__21394__auto__.call(null,p,v);
} else {
var m__21394__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__21394__auto____$1 == null))){
return m__21394__auto____$1.call(null,p,v);
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
var args27683 = [];
var len__21896__auto___27822 = arguments.length;
var i__21897__auto___27823 = (0);
while(true){
if((i__21897__auto___27823 < len__21896__auto___27822)){
args27683.push((arguments[i__21897__auto___27823]));

var G__27824 = (i__21897__auto___27823 + (1));
i__21897__auto___27823 = G__27824;
continue;
} else {
}
break;
}

var G__27685 = args27683.length;
switch (G__27685) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args27683.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__20675__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__20675__auto__)){
return or__20675__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__20675__auto__,mults){
return (function (p1__27682_SHARP_){
if(cljs.core.truth_(p1__27682_SHARP_.call(null,topic))){
return p1__27682_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__27682_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__20675__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async27686 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27686 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta27687){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta27687 = meta27687;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27686.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_27688,meta27687__$1){
var self__ = this;
var _27688__$1 = this;
return (new cljs.core.async.t_cljs$core$async27686(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta27687__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27686.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_27688){
var self__ = this;
var _27688__$1 = this;
return self__.meta27687;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27686.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27686.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27686.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27686.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27686.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async27686.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27686.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27686.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta27687","meta27687",2127124493,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27686.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27686.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27686";

cljs.core.async.t_cljs$core$async27686.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__21332__auto__,writer__21333__auto__,opt__21334__auto__){
return cljs.core._write.call(null,writer__21333__auto__,"cljs.core.async/t_cljs$core$async27686");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async27686 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async27686(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta27687){
return (new cljs.core.async.t_cljs$core$async27686(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta27687));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async27686(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__24836__auto___27830 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24836__auto___27830,mults,ensure_mult,p){
return (function (){
var f__24837__auto__ = (function (){var switch__24601__auto__ = ((function (c__24836__auto___27830,mults,ensure_mult,p){
return (function (state_27760){
var state_val_27761 = (state_27760[(1)]);
if((state_val_27761 === (7))){
var inst_27756 = (state_27760[(2)]);
var state_27760__$1 = state_27760;
var statearr_27762_27833 = state_27760__$1;
(statearr_27762_27833[(2)] = inst_27756);

(statearr_27762_27833[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27761 === (20))){
var state_27760__$1 = state_27760;
var statearr_27763_27835 = state_27760__$1;
(statearr_27763_27835[(2)] = null);

(statearr_27763_27835[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27761 === (1))){
var state_27760__$1 = state_27760;
var statearr_27764_27836 = state_27760__$1;
(statearr_27764_27836[(2)] = null);

(statearr_27764_27836[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27761 === (24))){
var inst_27739 = (state_27760[(7)]);
var inst_27748 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_27739);
var state_27760__$1 = state_27760;
var statearr_27765_27840 = state_27760__$1;
(statearr_27765_27840[(2)] = inst_27748);

(statearr_27765_27840[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27761 === (4))){
var inst_27691 = (state_27760[(8)]);
var inst_27691__$1 = (state_27760[(2)]);
var inst_27692 = (inst_27691__$1 == null);
var state_27760__$1 = (function (){var statearr_27768 = state_27760;
(statearr_27768[(8)] = inst_27691__$1);

return statearr_27768;
})();
if(cljs.core.truth_(inst_27692)){
var statearr_27770_27844 = state_27760__$1;
(statearr_27770_27844[(1)] = (5));

} else {
var statearr_27773_27845 = state_27760__$1;
(statearr_27773_27845[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27761 === (15))){
var inst_27733 = (state_27760[(2)]);
var state_27760__$1 = state_27760;
var statearr_27777_27846 = state_27760__$1;
(statearr_27777_27846[(2)] = inst_27733);

(statearr_27777_27846[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27761 === (21))){
var inst_27753 = (state_27760[(2)]);
var state_27760__$1 = (function (){var statearr_27781 = state_27760;
(statearr_27781[(9)] = inst_27753);

return statearr_27781;
})();
var statearr_27782_27847 = state_27760__$1;
(statearr_27782_27847[(2)] = null);

(statearr_27782_27847[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27761 === (13))){
var inst_27715 = (state_27760[(10)]);
var inst_27717 = cljs.core.chunked_seq_QMARK_.call(null,inst_27715);
var state_27760__$1 = state_27760;
if(inst_27717){
var statearr_27783_27848 = state_27760__$1;
(statearr_27783_27848[(1)] = (16));

} else {
var statearr_27784_27849 = state_27760__$1;
(statearr_27784_27849[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27761 === (22))){
var inst_27745 = (state_27760[(2)]);
var state_27760__$1 = state_27760;
if(cljs.core.truth_(inst_27745)){
var statearr_27785_27853 = state_27760__$1;
(statearr_27785_27853[(1)] = (23));

} else {
var statearr_27786_27854 = state_27760__$1;
(statearr_27786_27854[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27761 === (6))){
var inst_27739 = (state_27760[(7)]);
var inst_27691 = (state_27760[(8)]);
var inst_27741 = (state_27760[(11)]);
var inst_27739__$1 = topic_fn.call(null,inst_27691);
var inst_27740 = cljs.core.deref.call(null,mults);
var inst_27741__$1 = cljs.core.get.call(null,inst_27740,inst_27739__$1);
var state_27760__$1 = (function (){var statearr_27787 = state_27760;
(statearr_27787[(7)] = inst_27739__$1);

(statearr_27787[(11)] = inst_27741__$1);

return statearr_27787;
})();
if(cljs.core.truth_(inst_27741__$1)){
var statearr_27788_27868 = state_27760__$1;
(statearr_27788_27868[(1)] = (19));

} else {
var statearr_27789_27869 = state_27760__$1;
(statearr_27789_27869[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27761 === (25))){
var inst_27750 = (state_27760[(2)]);
var state_27760__$1 = state_27760;
var statearr_27790_27877 = state_27760__$1;
(statearr_27790_27877[(2)] = inst_27750);

(statearr_27790_27877[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27761 === (17))){
var inst_27715 = (state_27760[(10)]);
var inst_27724 = cljs.core.first.call(null,inst_27715);
var inst_27725 = cljs.core.async.muxch_STAR_.call(null,inst_27724);
var inst_27726 = cljs.core.async.close_BANG_.call(null,inst_27725);
var inst_27727 = cljs.core.next.call(null,inst_27715);
var inst_27701 = inst_27727;
var inst_27702 = null;
var inst_27703 = (0);
var inst_27704 = (0);
var state_27760__$1 = (function (){var statearr_27791 = state_27760;
(statearr_27791[(12)] = inst_27701);

(statearr_27791[(13)] = inst_27702);

(statearr_27791[(14)] = inst_27703);

(statearr_27791[(15)] = inst_27726);

(statearr_27791[(16)] = inst_27704);

return statearr_27791;
})();
var statearr_27792_27881 = state_27760__$1;
(statearr_27792_27881[(2)] = null);

(statearr_27792_27881[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27761 === (3))){
var inst_27758 = (state_27760[(2)]);
var state_27760__$1 = state_27760;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27760__$1,inst_27758);
} else {
if((state_val_27761 === (12))){
var inst_27735 = (state_27760[(2)]);
var state_27760__$1 = state_27760;
var statearr_27793_27882 = state_27760__$1;
(statearr_27793_27882[(2)] = inst_27735);

(statearr_27793_27882[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27761 === (2))){
var state_27760__$1 = state_27760;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27760__$1,(4),ch);
} else {
if((state_val_27761 === (23))){
var state_27760__$1 = state_27760;
var statearr_27794_27883 = state_27760__$1;
(statearr_27794_27883[(2)] = null);

(statearr_27794_27883[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27761 === (19))){
var inst_27691 = (state_27760[(8)]);
var inst_27741 = (state_27760[(11)]);
var inst_27743 = cljs.core.async.muxch_STAR_.call(null,inst_27741);
var state_27760__$1 = state_27760;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27760__$1,(22),inst_27743,inst_27691);
} else {
if((state_val_27761 === (11))){
var inst_27701 = (state_27760[(12)]);
var inst_27715 = (state_27760[(10)]);
var inst_27715__$1 = cljs.core.seq.call(null,inst_27701);
var state_27760__$1 = (function (){var statearr_27795 = state_27760;
(statearr_27795[(10)] = inst_27715__$1);

return statearr_27795;
})();
if(inst_27715__$1){
var statearr_27796_27884 = state_27760__$1;
(statearr_27796_27884[(1)] = (13));

} else {
var statearr_27797_27885 = state_27760__$1;
(statearr_27797_27885[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27761 === (9))){
var inst_27737 = (state_27760[(2)]);
var state_27760__$1 = state_27760;
var statearr_27798_27888 = state_27760__$1;
(statearr_27798_27888[(2)] = inst_27737);

(statearr_27798_27888[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27761 === (5))){
var inst_27698 = cljs.core.deref.call(null,mults);
var inst_27699 = cljs.core.vals.call(null,inst_27698);
var inst_27700 = cljs.core.seq.call(null,inst_27699);
var inst_27701 = inst_27700;
var inst_27702 = null;
var inst_27703 = (0);
var inst_27704 = (0);
var state_27760__$1 = (function (){var statearr_27802 = state_27760;
(statearr_27802[(12)] = inst_27701);

(statearr_27802[(13)] = inst_27702);

(statearr_27802[(14)] = inst_27703);

(statearr_27802[(16)] = inst_27704);

return statearr_27802;
})();
var statearr_27803_27891 = state_27760__$1;
(statearr_27803_27891[(2)] = null);

(statearr_27803_27891[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27761 === (14))){
var state_27760__$1 = state_27760;
var statearr_27807_27892 = state_27760__$1;
(statearr_27807_27892[(2)] = null);

(statearr_27807_27892[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27761 === (16))){
var inst_27715 = (state_27760[(10)]);
var inst_27719 = cljs.core.chunk_first.call(null,inst_27715);
var inst_27720 = cljs.core.chunk_rest.call(null,inst_27715);
var inst_27721 = cljs.core.count.call(null,inst_27719);
var inst_27701 = inst_27720;
var inst_27702 = inst_27719;
var inst_27703 = inst_27721;
var inst_27704 = (0);
var state_27760__$1 = (function (){var statearr_27808 = state_27760;
(statearr_27808[(12)] = inst_27701);

(statearr_27808[(13)] = inst_27702);

(statearr_27808[(14)] = inst_27703);

(statearr_27808[(16)] = inst_27704);

return statearr_27808;
})();
var statearr_27809_27893 = state_27760__$1;
(statearr_27809_27893[(2)] = null);

(statearr_27809_27893[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27761 === (10))){
var inst_27701 = (state_27760[(12)]);
var inst_27702 = (state_27760[(13)]);
var inst_27703 = (state_27760[(14)]);
var inst_27704 = (state_27760[(16)]);
var inst_27709 = cljs.core._nth.call(null,inst_27702,inst_27704);
var inst_27710 = cljs.core.async.muxch_STAR_.call(null,inst_27709);
var inst_27711 = cljs.core.async.close_BANG_.call(null,inst_27710);
var inst_27712 = (inst_27704 + (1));
var tmp27804 = inst_27701;
var tmp27805 = inst_27702;
var tmp27806 = inst_27703;
var inst_27701__$1 = tmp27804;
var inst_27702__$1 = tmp27805;
var inst_27703__$1 = tmp27806;
var inst_27704__$1 = inst_27712;
var state_27760__$1 = (function (){var statearr_27810 = state_27760;
(statearr_27810[(12)] = inst_27701__$1);

(statearr_27810[(13)] = inst_27702__$1);

(statearr_27810[(14)] = inst_27703__$1);

(statearr_27810[(17)] = inst_27711);

(statearr_27810[(16)] = inst_27704__$1);

return statearr_27810;
})();
var statearr_27811_27894 = state_27760__$1;
(statearr_27811_27894[(2)] = null);

(statearr_27811_27894[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27761 === (18))){
var inst_27730 = (state_27760[(2)]);
var state_27760__$1 = state_27760;
var statearr_27812_27895 = state_27760__$1;
(statearr_27812_27895[(2)] = inst_27730);

(statearr_27812_27895[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27761 === (8))){
var inst_27703 = (state_27760[(14)]);
var inst_27704 = (state_27760[(16)]);
var inst_27706 = (inst_27704 < inst_27703);
var inst_27707 = inst_27706;
var state_27760__$1 = state_27760;
if(cljs.core.truth_(inst_27707)){
var statearr_27813_27896 = state_27760__$1;
(statearr_27813_27896[(1)] = (10));

} else {
var statearr_27814_27897 = state_27760__$1;
(statearr_27814_27897[(1)] = (11));

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
});})(c__24836__auto___27830,mults,ensure_mult,p))
;
return ((function (switch__24601__auto__,c__24836__auto___27830,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__24602__auto__ = null;
var cljs$core$async$state_machine__24602__auto____0 = (function (){
var statearr_27818 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27818[(0)] = cljs$core$async$state_machine__24602__auto__);

(statearr_27818[(1)] = (1));

return statearr_27818;
});
var cljs$core$async$state_machine__24602__auto____1 = (function (state_27760){
while(true){
var ret_value__24603__auto__ = (function (){try{while(true){
var result__24604__auto__ = switch__24601__auto__.call(null,state_27760);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24604__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24604__auto__;
}
break;
}
}catch (e27819){if((e27819 instanceof Object)){
var ex__24605__auto__ = e27819;
var statearr_27820_27898 = state_27760;
(statearr_27820_27898[(5)] = ex__24605__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27760);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27819;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24603__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27899 = state_27760;
state_27760 = G__27899;
continue;
} else {
return ret_value__24603__auto__;
}
break;
}
});
cljs$core$async$state_machine__24602__auto__ = function(state_27760){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24602__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24602__auto____1.call(this,state_27760);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24602__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24602__auto____0;
cljs$core$async$state_machine__24602__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24602__auto____1;
return cljs$core$async$state_machine__24602__auto__;
})()
;})(switch__24601__auto__,c__24836__auto___27830,mults,ensure_mult,p))
})();
var state__24838__auto__ = (function (){var statearr_27821 = f__24837__auto__.call(null);
(statearr_27821[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24836__auto___27830);

return statearr_27821;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24838__auto__);
});})(c__24836__auto___27830,mults,ensure_mult,p))
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
var args27900 = [];
var len__21896__auto___27903 = arguments.length;
var i__21897__auto___27904 = (0);
while(true){
if((i__21897__auto___27904 < len__21896__auto___27903)){
args27900.push((arguments[i__21897__auto___27904]));

var G__27905 = (i__21897__auto___27904 + (1));
i__21897__auto___27904 = G__27905;
continue;
} else {
}
break;
}

var G__27902 = args27900.length;
switch (G__27902) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args27900.length)].join('')));

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
var args27907 = [];
var len__21896__auto___27910 = arguments.length;
var i__21897__auto___27911 = (0);
while(true){
if((i__21897__auto___27911 < len__21896__auto___27910)){
args27907.push((arguments[i__21897__auto___27911]));

var G__27912 = (i__21897__auto___27911 + (1));
i__21897__auto___27911 = G__27912;
continue;
} else {
}
break;
}

var G__27909 = args27907.length;
switch (G__27909) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args27907.length)].join('')));

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
var args27914 = [];
var len__21896__auto___27991 = arguments.length;
var i__21897__auto___27992 = (0);
while(true){
if((i__21897__auto___27992 < len__21896__auto___27991)){
args27914.push((arguments[i__21897__auto___27992]));

var G__27993 = (i__21897__auto___27992 + (1));
i__21897__auto___27992 = G__27993;
continue;
} else {
}
break;
}

var G__27916 = args27914.length;
switch (G__27916) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args27914.length)].join('')));

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
var c__24836__auto___27995 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24836__auto___27995,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__24837__auto__ = (function (){var switch__24601__auto__ = ((function (c__24836__auto___27995,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_27955){
var state_val_27956 = (state_27955[(1)]);
if((state_val_27956 === (7))){
var state_27955__$1 = state_27955;
var statearr_27957_27996 = state_27955__$1;
(statearr_27957_27996[(2)] = null);

(statearr_27957_27996[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27956 === (1))){
var state_27955__$1 = state_27955;
var statearr_27958_27997 = state_27955__$1;
(statearr_27958_27997[(2)] = null);

(statearr_27958_27997[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27956 === (4))){
var inst_27919 = (state_27955[(7)]);
var inst_27921 = (inst_27919 < cnt);
var state_27955__$1 = state_27955;
if(cljs.core.truth_(inst_27921)){
var statearr_27959_27998 = state_27955__$1;
(statearr_27959_27998[(1)] = (6));

} else {
var statearr_27960_27999 = state_27955__$1;
(statearr_27960_27999[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27956 === (15))){
var inst_27951 = (state_27955[(2)]);
var state_27955__$1 = state_27955;
var statearr_27961_28000 = state_27955__$1;
(statearr_27961_28000[(2)] = inst_27951);

(statearr_27961_28000[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27956 === (13))){
var inst_27944 = cljs.core.async.close_BANG_.call(null,out);
var state_27955__$1 = state_27955;
var statearr_27962_28001 = state_27955__$1;
(statearr_27962_28001[(2)] = inst_27944);

(statearr_27962_28001[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27956 === (6))){
var state_27955__$1 = state_27955;
var statearr_27963_28002 = state_27955__$1;
(statearr_27963_28002[(2)] = null);

(statearr_27963_28002[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27956 === (3))){
var inst_27953 = (state_27955[(2)]);
var state_27955__$1 = state_27955;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27955__$1,inst_27953);
} else {
if((state_val_27956 === (12))){
var inst_27941 = (state_27955[(8)]);
var inst_27941__$1 = (state_27955[(2)]);
var inst_27942 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_27941__$1);
var state_27955__$1 = (function (){var statearr_27967 = state_27955;
(statearr_27967[(8)] = inst_27941__$1);

return statearr_27967;
})();
if(cljs.core.truth_(inst_27942)){
var statearr_27968_28003 = state_27955__$1;
(statearr_27968_28003[(1)] = (13));

} else {
var statearr_27969_28004 = state_27955__$1;
(statearr_27969_28004[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27956 === (2))){
var inst_27918 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_27919 = (0);
var state_27955__$1 = (function (){var statearr_27970 = state_27955;
(statearr_27970[(7)] = inst_27919);

(statearr_27970[(9)] = inst_27918);

return statearr_27970;
})();
var statearr_27971_28005 = state_27955__$1;
(statearr_27971_28005[(2)] = null);

(statearr_27971_28005[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27956 === (11))){
var inst_27919 = (state_27955[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_27955,(10),Object,null,(9));
var inst_27928 = chs__$1.call(null,inst_27919);
var inst_27929 = done.call(null,inst_27919);
var inst_27930 = cljs.core.async.take_BANG_.call(null,inst_27928,inst_27929);
var state_27955__$1 = state_27955;
var statearr_27973_28006 = state_27955__$1;
(statearr_27973_28006[(2)] = inst_27930);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27955__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27956 === (9))){
var inst_27919 = (state_27955[(7)]);
var inst_27932 = (state_27955[(2)]);
var inst_27933 = (inst_27919 + (1));
var inst_27919__$1 = inst_27933;
var state_27955__$1 = (function (){var statearr_27974 = state_27955;
(statearr_27974[(10)] = inst_27932);

(statearr_27974[(7)] = inst_27919__$1);

return statearr_27974;
})();
var statearr_27975_28007 = state_27955__$1;
(statearr_27975_28007[(2)] = null);

(statearr_27975_28007[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27956 === (5))){
var inst_27939 = (state_27955[(2)]);
var state_27955__$1 = (function (){var statearr_27976 = state_27955;
(statearr_27976[(11)] = inst_27939);

return statearr_27976;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27955__$1,(12),dchan);
} else {
if((state_val_27956 === (14))){
var inst_27941 = (state_27955[(8)]);
var inst_27946 = cljs.core.apply.call(null,f,inst_27941);
var state_27955__$1 = state_27955;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27955__$1,(16),out,inst_27946);
} else {
if((state_val_27956 === (16))){
var inst_27948 = (state_27955[(2)]);
var state_27955__$1 = (function (){var statearr_27977 = state_27955;
(statearr_27977[(12)] = inst_27948);

return statearr_27977;
})();
var statearr_27978_28008 = state_27955__$1;
(statearr_27978_28008[(2)] = null);

(statearr_27978_28008[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27956 === (10))){
var inst_27923 = (state_27955[(2)]);
var inst_27924 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_27955__$1 = (function (){var statearr_27979 = state_27955;
(statearr_27979[(13)] = inst_27923);

return statearr_27979;
})();
var statearr_27980_28009 = state_27955__$1;
(statearr_27980_28009[(2)] = inst_27924);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27955__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27956 === (8))){
var inst_27937 = (state_27955[(2)]);
var state_27955__$1 = state_27955;
var statearr_27981_28010 = state_27955__$1;
(statearr_27981_28010[(2)] = inst_27937);

(statearr_27981_28010[(1)] = (5));


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
});})(c__24836__auto___27995,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__24601__auto__,c__24836__auto___27995,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__24602__auto__ = null;
var cljs$core$async$state_machine__24602__auto____0 = (function (){
var statearr_27985 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27985[(0)] = cljs$core$async$state_machine__24602__auto__);

(statearr_27985[(1)] = (1));

return statearr_27985;
});
var cljs$core$async$state_machine__24602__auto____1 = (function (state_27955){
while(true){
var ret_value__24603__auto__ = (function (){try{while(true){
var result__24604__auto__ = switch__24601__auto__.call(null,state_27955);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24604__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24604__auto__;
}
break;
}
}catch (e27988){if((e27988 instanceof Object)){
var ex__24605__auto__ = e27988;
var statearr_27989_28011 = state_27955;
(statearr_27989_28011[(5)] = ex__24605__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27955);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27988;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24603__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28012 = state_27955;
state_27955 = G__28012;
continue;
} else {
return ret_value__24603__auto__;
}
break;
}
});
cljs$core$async$state_machine__24602__auto__ = function(state_27955){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24602__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24602__auto____1.call(this,state_27955);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24602__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24602__auto____0;
cljs$core$async$state_machine__24602__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24602__auto____1;
return cljs$core$async$state_machine__24602__auto__;
})()
;})(switch__24601__auto__,c__24836__auto___27995,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__24838__auto__ = (function (){var statearr_27990 = f__24837__auto__.call(null);
(statearr_27990[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24836__auto___27995);

return statearr_27990;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24838__auto__);
});})(c__24836__auto___27995,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args28014 = [];
var len__21896__auto___28100 = arguments.length;
var i__21897__auto___28101 = (0);
while(true){
if((i__21897__auto___28101 < len__21896__auto___28100)){
args28014.push((arguments[i__21897__auto___28101]));

var G__28102 = (i__21897__auto___28101 + (1));
i__21897__auto___28101 = G__28102;
continue;
} else {
}
break;
}

var G__28016 = args28014.length;
switch (G__28016) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args28014.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24836__auto___28104 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24836__auto___28104,out){
return (function (){
var f__24837__auto__ = (function (){var switch__24601__auto__ = ((function (c__24836__auto___28104,out){
return (function (state_28048){
var state_val_28049 = (state_28048[(1)]);
if((state_val_28049 === (7))){
var inst_28028 = (state_28048[(7)]);
var inst_28027 = (state_28048[(8)]);
var inst_28027__$1 = (state_28048[(2)]);
var inst_28028__$1 = cljs.core.nth.call(null,inst_28027__$1,(0),null);
var inst_28029 = cljs.core.nth.call(null,inst_28027__$1,(1),null);
var inst_28030 = (inst_28028__$1 == null);
var state_28048__$1 = (function (){var statearr_28050 = state_28048;
(statearr_28050[(7)] = inst_28028__$1);

(statearr_28050[(8)] = inst_28027__$1);

(statearr_28050[(9)] = inst_28029);

return statearr_28050;
})();
if(cljs.core.truth_(inst_28030)){
var statearr_28051_28105 = state_28048__$1;
(statearr_28051_28105[(1)] = (8));

} else {
var statearr_28052_28106 = state_28048__$1;
(statearr_28052_28106[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28049 === (1))){
var inst_28017 = cljs.core.vec.call(null,chs);
var inst_28018 = inst_28017;
var state_28048__$1 = (function (){var statearr_28053 = state_28048;
(statearr_28053[(10)] = inst_28018);

return statearr_28053;
})();
var statearr_28054_28107 = state_28048__$1;
(statearr_28054_28107[(2)] = null);

(statearr_28054_28107[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28049 === (4))){
var inst_28018 = (state_28048[(10)]);
var state_28048__$1 = state_28048;
return cljs.core.async.ioc_alts_BANG_.call(null,state_28048__$1,(7),inst_28018);
} else {
if((state_val_28049 === (6))){
var inst_28044 = (state_28048[(2)]);
var state_28048__$1 = state_28048;
var statearr_28055_28108 = state_28048__$1;
(statearr_28055_28108[(2)] = inst_28044);

(statearr_28055_28108[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28049 === (3))){
var inst_28046 = (state_28048[(2)]);
var state_28048__$1 = state_28048;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28048__$1,inst_28046);
} else {
if((state_val_28049 === (2))){
var inst_28018 = (state_28048[(10)]);
var inst_28020 = cljs.core.count.call(null,inst_28018);
var inst_28021 = (inst_28020 > (0));
var state_28048__$1 = state_28048;
if(cljs.core.truth_(inst_28021)){
var statearr_28060_28110 = state_28048__$1;
(statearr_28060_28110[(1)] = (4));

} else {
var statearr_28061_28111 = state_28048__$1;
(statearr_28061_28111[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28049 === (11))){
var inst_28018 = (state_28048[(10)]);
var inst_28037 = (state_28048[(2)]);
var tmp28057 = inst_28018;
var inst_28018__$1 = tmp28057;
var state_28048__$1 = (function (){var statearr_28064 = state_28048;
(statearr_28064[(10)] = inst_28018__$1);

(statearr_28064[(11)] = inst_28037);

return statearr_28064;
})();
var statearr_28065_28115 = state_28048__$1;
(statearr_28065_28115[(2)] = null);

(statearr_28065_28115[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28049 === (9))){
var inst_28028 = (state_28048[(7)]);
var state_28048__$1 = state_28048;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28048__$1,(11),out,inst_28028);
} else {
if((state_val_28049 === (5))){
var inst_28042 = cljs.core.async.close_BANG_.call(null,out);
var state_28048__$1 = state_28048;
var statearr_28066_28116 = state_28048__$1;
(statearr_28066_28116[(2)] = inst_28042);

(statearr_28066_28116[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28049 === (10))){
var inst_28040 = (state_28048[(2)]);
var state_28048__$1 = state_28048;
var statearr_28067_28117 = state_28048__$1;
(statearr_28067_28117[(2)] = inst_28040);

(statearr_28067_28117[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28049 === (8))){
var inst_28018 = (state_28048[(10)]);
var inst_28028 = (state_28048[(7)]);
var inst_28027 = (state_28048[(8)]);
var inst_28029 = (state_28048[(9)]);
var inst_28032 = (function (){var cs = inst_28018;
var vec__28023 = inst_28027;
var v = inst_28028;
var c = inst_28029;
return ((function (cs,vec__28023,v,c,inst_28018,inst_28028,inst_28027,inst_28029,state_val_28049,c__24836__auto___28104,out){
return (function (p1__28013_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__28013_SHARP_);
});
;})(cs,vec__28023,v,c,inst_28018,inst_28028,inst_28027,inst_28029,state_val_28049,c__24836__auto___28104,out))
})();
var inst_28033 = cljs.core.filterv.call(null,inst_28032,inst_28018);
var inst_28018__$1 = inst_28033;
var state_28048__$1 = (function (){var statearr_28079 = state_28048;
(statearr_28079[(10)] = inst_28018__$1);

return statearr_28079;
})();
var statearr_28081_28118 = state_28048__$1;
(statearr_28081_28118[(2)] = null);

(statearr_28081_28118[(1)] = (2));


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
});})(c__24836__auto___28104,out))
;
return ((function (switch__24601__auto__,c__24836__auto___28104,out){
return (function() {
var cljs$core$async$state_machine__24602__auto__ = null;
var cljs$core$async$state_machine__24602__auto____0 = (function (){
var statearr_28085 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28085[(0)] = cljs$core$async$state_machine__24602__auto__);

(statearr_28085[(1)] = (1));

return statearr_28085;
});
var cljs$core$async$state_machine__24602__auto____1 = (function (state_28048){
while(true){
var ret_value__24603__auto__ = (function (){try{while(true){
var result__24604__auto__ = switch__24601__auto__.call(null,state_28048);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24604__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24604__auto__;
}
break;
}
}catch (e28086){if((e28086 instanceof Object)){
var ex__24605__auto__ = e28086;
var statearr_28089_28119 = state_28048;
(statearr_28089_28119[(5)] = ex__24605__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28048);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28086;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24603__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28120 = state_28048;
state_28048 = G__28120;
continue;
} else {
return ret_value__24603__auto__;
}
break;
}
});
cljs$core$async$state_machine__24602__auto__ = function(state_28048){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24602__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24602__auto____1.call(this,state_28048);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24602__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24602__auto____0;
cljs$core$async$state_machine__24602__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24602__auto____1;
return cljs$core$async$state_machine__24602__auto__;
})()
;})(switch__24601__auto__,c__24836__auto___28104,out))
})();
var state__24838__auto__ = (function (){var statearr_28099 = f__24837__auto__.call(null);
(statearr_28099[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24836__auto___28104);

return statearr_28099;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24838__auto__);
});})(c__24836__auto___28104,out))
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
var args28121 = [];
var len__21896__auto___28181 = arguments.length;
var i__21897__auto___28182 = (0);
while(true){
if((i__21897__auto___28182 < len__21896__auto___28181)){
args28121.push((arguments[i__21897__auto___28182]));

var G__28192 = (i__21897__auto___28182 + (1));
i__21897__auto___28182 = G__28192;
continue;
} else {
}
break;
}

var G__28123 = args28121.length;
switch (G__28123) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args28121.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24836__auto___28194 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24836__auto___28194,out){
return (function (){
var f__24837__auto__ = (function (){var switch__24601__auto__ = ((function (c__24836__auto___28194,out){
return (function (state_28149){
var state_val_28150 = (state_28149[(1)]);
if((state_val_28150 === (7))){
var inst_28131 = (state_28149[(7)]);
var inst_28131__$1 = (state_28149[(2)]);
var inst_28132 = (inst_28131__$1 == null);
var inst_28133 = cljs.core.not.call(null,inst_28132);
var state_28149__$1 = (function (){var statearr_28151 = state_28149;
(statearr_28151[(7)] = inst_28131__$1);

return statearr_28151;
})();
if(inst_28133){
var statearr_28152_28195 = state_28149__$1;
(statearr_28152_28195[(1)] = (8));

} else {
var statearr_28153_28196 = state_28149__$1;
(statearr_28153_28196[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28150 === (1))){
var inst_28125 = (0);
var state_28149__$1 = (function (){var statearr_28154 = state_28149;
(statearr_28154[(8)] = inst_28125);

return statearr_28154;
})();
var statearr_28155_28198 = state_28149__$1;
(statearr_28155_28198[(2)] = null);

(statearr_28155_28198[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28150 === (4))){
var state_28149__$1 = state_28149;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28149__$1,(7),ch);
} else {
if((state_val_28150 === (6))){
var inst_28144 = (state_28149[(2)]);
var state_28149__$1 = state_28149;
var statearr_28156_28199 = state_28149__$1;
(statearr_28156_28199[(2)] = inst_28144);

(statearr_28156_28199[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28150 === (3))){
var inst_28146 = (state_28149[(2)]);
var inst_28147 = cljs.core.async.close_BANG_.call(null,out);
var state_28149__$1 = (function (){var statearr_28157 = state_28149;
(statearr_28157[(9)] = inst_28146);

return statearr_28157;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28149__$1,inst_28147);
} else {
if((state_val_28150 === (2))){
var inst_28125 = (state_28149[(8)]);
var inst_28128 = (inst_28125 < n);
var state_28149__$1 = state_28149;
if(cljs.core.truth_(inst_28128)){
var statearr_28158_28203 = state_28149__$1;
(statearr_28158_28203[(1)] = (4));

} else {
var statearr_28159_28204 = state_28149__$1;
(statearr_28159_28204[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28150 === (11))){
var inst_28125 = (state_28149[(8)]);
var inst_28136 = (state_28149[(2)]);
var inst_28137 = (inst_28125 + (1));
var inst_28125__$1 = inst_28137;
var state_28149__$1 = (function (){var statearr_28160 = state_28149;
(statearr_28160[(10)] = inst_28136);

(statearr_28160[(8)] = inst_28125__$1);

return statearr_28160;
})();
var statearr_28161_28205 = state_28149__$1;
(statearr_28161_28205[(2)] = null);

(statearr_28161_28205[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28150 === (9))){
var state_28149__$1 = state_28149;
var statearr_28162_28206 = state_28149__$1;
(statearr_28162_28206[(2)] = null);

(statearr_28162_28206[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28150 === (5))){
var state_28149__$1 = state_28149;
var statearr_28163_28207 = state_28149__$1;
(statearr_28163_28207[(2)] = null);

(statearr_28163_28207[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28150 === (10))){
var inst_28141 = (state_28149[(2)]);
var state_28149__$1 = state_28149;
var statearr_28164_28208 = state_28149__$1;
(statearr_28164_28208[(2)] = inst_28141);

(statearr_28164_28208[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28150 === (8))){
var inst_28131 = (state_28149[(7)]);
var state_28149__$1 = state_28149;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28149__$1,(11),out,inst_28131);
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
});})(c__24836__auto___28194,out))
;
return ((function (switch__24601__auto__,c__24836__auto___28194,out){
return (function() {
var cljs$core$async$state_machine__24602__auto__ = null;
var cljs$core$async$state_machine__24602__auto____0 = (function (){
var statearr_28168 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28168[(0)] = cljs$core$async$state_machine__24602__auto__);

(statearr_28168[(1)] = (1));

return statearr_28168;
});
var cljs$core$async$state_machine__24602__auto____1 = (function (state_28149){
while(true){
var ret_value__24603__auto__ = (function (){try{while(true){
var result__24604__auto__ = switch__24601__auto__.call(null,state_28149);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24604__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24604__auto__;
}
break;
}
}catch (e28169){if((e28169 instanceof Object)){
var ex__24605__auto__ = e28169;
var statearr_28170_28209 = state_28149;
(statearr_28170_28209[(5)] = ex__24605__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28149);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28169;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24603__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28210 = state_28149;
state_28149 = G__28210;
continue;
} else {
return ret_value__24603__auto__;
}
break;
}
});
cljs$core$async$state_machine__24602__auto__ = function(state_28149){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24602__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24602__auto____1.call(this,state_28149);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24602__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24602__auto____0;
cljs$core$async$state_machine__24602__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24602__auto____1;
return cljs$core$async$state_machine__24602__auto__;
})()
;})(switch__24601__auto__,c__24836__auto___28194,out))
})();
var state__24838__auto__ = (function (){var statearr_28171 = f__24837__auto__.call(null);
(statearr_28171[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24836__auto___28194);

return statearr_28171;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24838__auto__);
});})(c__24836__auto___28194,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async28224 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28224 = (function (f,ch,meta28225){
this.f = f;
this.ch = ch;
this.meta28225 = meta28225;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28224.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28226,meta28225__$1){
var self__ = this;
var _28226__$1 = this;
return (new cljs.core.async.t_cljs$core$async28224(self__.f,self__.ch,meta28225__$1));
});

cljs.core.async.t_cljs$core$async28224.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28226){
var self__ = this;
var _28226__$1 = this;
return self__.meta28225;
});

cljs.core.async.t_cljs$core$async28224.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28224.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28224.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28224.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28224.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async28227 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28227 = (function (f,ch,meta28225,_,fn1,meta28228){
this.f = f;
this.ch = ch;
this.meta28225 = meta28225;
this._ = _;
this.fn1 = fn1;
this.meta28228 = meta28228;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28227.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_28229,meta28228__$1){
var self__ = this;
var _28229__$1 = this;
return (new cljs.core.async.t_cljs$core$async28227(self__.f,self__.ch,self__.meta28225,self__._,self__.fn1,meta28228__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async28227.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_28229){
var self__ = this;
var _28229__$1 = this;
return self__.meta28228;
});})(___$1))
;

cljs.core.async.t_cljs$core$async28227.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28227.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async28227.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async28227.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__28211_SHARP_){
return f1.call(null,(((p1__28211_SHARP_ == null))?null:self__.f.call(null,p1__28211_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async28227.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28225","meta28225",-2116679513,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async28224","cljs.core.async/t_cljs$core$async28224",739756477,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta28228","meta28228",1690384345,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async28227.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28227.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28227";

cljs.core.async.t_cljs$core$async28227.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__21332__auto__,writer__21333__auto__,opt__21334__auto__){
return cljs.core._write.call(null,writer__21333__auto__,"cljs.core.async/t_cljs$core$async28227");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async28227 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async28227(f__$1,ch__$1,meta28225__$1,___$2,fn1__$1,meta28228){
return (new cljs.core.async.t_cljs$core$async28227(f__$1,ch__$1,meta28225__$1,___$2,fn1__$1,meta28228));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async28227(self__.f,self__.ch,self__.meta28225,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__20663__auto__ = ret;
if(cljs.core.truth_(and__20663__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__20663__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async28224.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28224.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async28224.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28225","meta28225",-2116679513,null)], null);
});

cljs.core.async.t_cljs$core$async28224.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28224.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28224";

cljs.core.async.t_cljs$core$async28224.cljs$lang$ctorPrWriter = (function (this__21332__auto__,writer__21333__auto__,opt__21334__auto__){
return cljs.core._write.call(null,writer__21333__auto__,"cljs.core.async/t_cljs$core$async28224");
});

cljs.core.async.__GT_t_cljs$core$async28224 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async28224(f__$1,ch__$1,meta28225){
return (new cljs.core.async.t_cljs$core$async28224(f__$1,ch__$1,meta28225));
});

}

return (new cljs.core.async.t_cljs$core$async28224(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async28281 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28281 = (function (f,ch,meta28282){
this.f = f;
this.ch = ch;
this.meta28282 = meta28282;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28281.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28283,meta28282__$1){
var self__ = this;
var _28283__$1 = this;
return (new cljs.core.async.t_cljs$core$async28281(self__.f,self__.ch,meta28282__$1));
});

cljs.core.async.t_cljs$core$async28281.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28283){
var self__ = this;
var _28283__$1 = this;
return self__.meta28282;
});

cljs.core.async.t_cljs$core$async28281.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28281.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28281.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28281.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async28281.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28281.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async28281.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28282","meta28282",2031764462,null)], null);
});

cljs.core.async.t_cljs$core$async28281.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28281.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28281";

cljs.core.async.t_cljs$core$async28281.cljs$lang$ctorPrWriter = (function (this__21332__auto__,writer__21333__auto__,opt__21334__auto__){
return cljs.core._write.call(null,writer__21333__auto__,"cljs.core.async/t_cljs$core$async28281");
});

cljs.core.async.__GT_t_cljs$core$async28281 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async28281(f__$1,ch__$1,meta28282){
return (new cljs.core.async.t_cljs$core$async28281(f__$1,ch__$1,meta28282));
});

}

return (new cljs.core.async.t_cljs$core$async28281(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async28303 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28303 = (function (p,ch,meta28304){
this.p = p;
this.ch = ch;
this.meta28304 = meta28304;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28303.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28305,meta28304__$1){
var self__ = this;
var _28305__$1 = this;
return (new cljs.core.async.t_cljs$core$async28303(self__.p,self__.ch,meta28304__$1));
});

cljs.core.async.t_cljs$core$async28303.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28305){
var self__ = this;
var _28305__$1 = this;
return self__.meta28304;
});

cljs.core.async.t_cljs$core$async28303.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28303.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28303.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28303.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28303.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async28303.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28303.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async28303.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28304","meta28304",219778532,null)], null);
});

cljs.core.async.t_cljs$core$async28303.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28303.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28303";

cljs.core.async.t_cljs$core$async28303.cljs$lang$ctorPrWriter = (function (this__21332__auto__,writer__21333__auto__,opt__21334__auto__){
return cljs.core._write.call(null,writer__21333__auto__,"cljs.core.async/t_cljs$core$async28303");
});

cljs.core.async.__GT_t_cljs$core$async28303 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async28303(p__$1,ch__$1,meta28304){
return (new cljs.core.async.t_cljs$core$async28303(p__$1,ch__$1,meta28304));
});

}

return (new cljs.core.async.t_cljs$core$async28303(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args28311 = [];
var len__21896__auto___28356 = arguments.length;
var i__21897__auto___28357 = (0);
while(true){
if((i__21897__auto___28357 < len__21896__auto___28356)){
args28311.push((arguments[i__21897__auto___28357]));

var G__28358 = (i__21897__auto___28357 + (1));
i__21897__auto___28357 = G__28358;
continue;
} else {
}
break;
}

var G__28314 = args28311.length;
switch (G__28314) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args28311.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24836__auto___28360 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24836__auto___28360,out){
return (function (){
var f__24837__auto__ = (function (){var switch__24601__auto__ = ((function (c__24836__auto___28360,out){
return (function (state_28335){
var state_val_28336 = (state_28335[(1)]);
if((state_val_28336 === (7))){
var inst_28331 = (state_28335[(2)]);
var state_28335__$1 = state_28335;
var statearr_28337_28370 = state_28335__$1;
(statearr_28337_28370[(2)] = inst_28331);

(statearr_28337_28370[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28336 === (1))){
var state_28335__$1 = state_28335;
var statearr_28338_28372 = state_28335__$1;
(statearr_28338_28372[(2)] = null);

(statearr_28338_28372[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28336 === (4))){
var inst_28317 = (state_28335[(7)]);
var inst_28317__$1 = (state_28335[(2)]);
var inst_28318 = (inst_28317__$1 == null);
var state_28335__$1 = (function (){var statearr_28339 = state_28335;
(statearr_28339[(7)] = inst_28317__$1);

return statearr_28339;
})();
if(cljs.core.truth_(inst_28318)){
var statearr_28340_28373 = state_28335__$1;
(statearr_28340_28373[(1)] = (5));

} else {
var statearr_28341_28374 = state_28335__$1;
(statearr_28341_28374[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28336 === (6))){
var inst_28317 = (state_28335[(7)]);
var inst_28322 = p.call(null,inst_28317);
var state_28335__$1 = state_28335;
if(cljs.core.truth_(inst_28322)){
var statearr_28342_28383 = state_28335__$1;
(statearr_28342_28383[(1)] = (8));

} else {
var statearr_28343_28384 = state_28335__$1;
(statearr_28343_28384[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28336 === (3))){
var inst_28333 = (state_28335[(2)]);
var state_28335__$1 = state_28335;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28335__$1,inst_28333);
} else {
if((state_val_28336 === (2))){
var state_28335__$1 = state_28335;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28335__$1,(4),ch);
} else {
if((state_val_28336 === (11))){
var inst_28325 = (state_28335[(2)]);
var state_28335__$1 = state_28335;
var statearr_28344_28386 = state_28335__$1;
(statearr_28344_28386[(2)] = inst_28325);

(statearr_28344_28386[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28336 === (9))){
var state_28335__$1 = state_28335;
var statearr_28345_28387 = state_28335__$1;
(statearr_28345_28387[(2)] = null);

(statearr_28345_28387[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28336 === (5))){
var inst_28320 = cljs.core.async.close_BANG_.call(null,out);
var state_28335__$1 = state_28335;
var statearr_28346_28388 = state_28335__$1;
(statearr_28346_28388[(2)] = inst_28320);

(statearr_28346_28388[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28336 === (10))){
var inst_28328 = (state_28335[(2)]);
var state_28335__$1 = (function (){var statearr_28347 = state_28335;
(statearr_28347[(8)] = inst_28328);

return statearr_28347;
})();
var statearr_28348_28389 = state_28335__$1;
(statearr_28348_28389[(2)] = null);

(statearr_28348_28389[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28336 === (8))){
var inst_28317 = (state_28335[(7)]);
var state_28335__$1 = state_28335;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28335__$1,(11),out,inst_28317);
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
});})(c__24836__auto___28360,out))
;
return ((function (switch__24601__auto__,c__24836__auto___28360,out){
return (function() {
var cljs$core$async$state_machine__24602__auto__ = null;
var cljs$core$async$state_machine__24602__auto____0 = (function (){
var statearr_28352 = [null,null,null,null,null,null,null,null,null];
(statearr_28352[(0)] = cljs$core$async$state_machine__24602__auto__);

(statearr_28352[(1)] = (1));

return statearr_28352;
});
var cljs$core$async$state_machine__24602__auto____1 = (function (state_28335){
while(true){
var ret_value__24603__auto__ = (function (){try{while(true){
var result__24604__auto__ = switch__24601__auto__.call(null,state_28335);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24604__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24604__auto__;
}
break;
}
}catch (e28353){if((e28353 instanceof Object)){
var ex__24605__auto__ = e28353;
var statearr_28354_28390 = state_28335;
(statearr_28354_28390[(5)] = ex__24605__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28335);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28353;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24603__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28391 = state_28335;
state_28335 = G__28391;
continue;
} else {
return ret_value__24603__auto__;
}
break;
}
});
cljs$core$async$state_machine__24602__auto__ = function(state_28335){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24602__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24602__auto____1.call(this,state_28335);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24602__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24602__auto____0;
cljs$core$async$state_machine__24602__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24602__auto____1;
return cljs$core$async$state_machine__24602__auto__;
})()
;})(switch__24601__auto__,c__24836__auto___28360,out))
})();
var state__24838__auto__ = (function (){var statearr_28355 = f__24837__auto__.call(null);
(statearr_28355[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24836__auto___28360);

return statearr_28355;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24838__auto__);
});})(c__24836__auto___28360,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args28392 = [];
var len__21896__auto___28395 = arguments.length;
var i__21897__auto___28396 = (0);
while(true){
if((i__21897__auto___28396 < len__21896__auto___28395)){
args28392.push((arguments[i__21897__auto___28396]));

var G__28397 = (i__21897__auto___28396 + (1));
i__21897__auto___28396 = G__28397;
continue;
} else {
}
break;
}

var G__28394 = args28392.length;
switch (G__28394) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args28392.length)].join('')));

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
var c__24836__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24836__auto__){
return (function (){
var f__24837__auto__ = (function (){var switch__24601__auto__ = ((function (c__24836__auto__){
return (function (state_28570){
var state_val_28571 = (state_28570[(1)]);
if((state_val_28571 === (7))){
var inst_28566 = (state_28570[(2)]);
var state_28570__$1 = state_28570;
var statearr_28572_28639 = state_28570__$1;
(statearr_28572_28639[(2)] = inst_28566);

(statearr_28572_28639[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28571 === (20))){
var inst_28536 = (state_28570[(7)]);
var inst_28547 = (state_28570[(2)]);
var inst_28548 = cljs.core.next.call(null,inst_28536);
var inst_28522 = inst_28548;
var inst_28523 = null;
var inst_28524 = (0);
var inst_28525 = (0);
var state_28570__$1 = (function (){var statearr_28573 = state_28570;
(statearr_28573[(8)] = inst_28547);

(statearr_28573[(9)] = inst_28522);

(statearr_28573[(10)] = inst_28525);

(statearr_28573[(11)] = inst_28524);

(statearr_28573[(12)] = inst_28523);

return statearr_28573;
})();
var statearr_28574_28640 = state_28570__$1;
(statearr_28574_28640[(2)] = null);

(statearr_28574_28640[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28571 === (1))){
var state_28570__$1 = state_28570;
var statearr_28579_28641 = state_28570__$1;
(statearr_28579_28641[(2)] = null);

(statearr_28579_28641[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28571 === (4))){
var inst_28511 = (state_28570[(13)]);
var inst_28511__$1 = (state_28570[(2)]);
var inst_28512 = (inst_28511__$1 == null);
var state_28570__$1 = (function (){var statearr_28581 = state_28570;
(statearr_28581[(13)] = inst_28511__$1);

return statearr_28581;
})();
if(cljs.core.truth_(inst_28512)){
var statearr_28582_28642 = state_28570__$1;
(statearr_28582_28642[(1)] = (5));

} else {
var statearr_28583_28643 = state_28570__$1;
(statearr_28583_28643[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28571 === (15))){
var state_28570__$1 = state_28570;
var statearr_28587_28644 = state_28570__$1;
(statearr_28587_28644[(2)] = null);

(statearr_28587_28644[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28571 === (21))){
var state_28570__$1 = state_28570;
var statearr_28588_28645 = state_28570__$1;
(statearr_28588_28645[(2)] = null);

(statearr_28588_28645[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28571 === (13))){
var inst_28522 = (state_28570[(9)]);
var inst_28525 = (state_28570[(10)]);
var inst_28524 = (state_28570[(11)]);
var inst_28523 = (state_28570[(12)]);
var inst_28532 = (state_28570[(2)]);
var inst_28533 = (inst_28525 + (1));
var tmp28584 = inst_28522;
var tmp28585 = inst_28524;
var tmp28586 = inst_28523;
var inst_28522__$1 = tmp28584;
var inst_28523__$1 = tmp28586;
var inst_28524__$1 = tmp28585;
var inst_28525__$1 = inst_28533;
var state_28570__$1 = (function (){var statearr_28590 = state_28570;
(statearr_28590[(9)] = inst_28522__$1);

(statearr_28590[(14)] = inst_28532);

(statearr_28590[(10)] = inst_28525__$1);

(statearr_28590[(11)] = inst_28524__$1);

(statearr_28590[(12)] = inst_28523__$1);

return statearr_28590;
})();
var statearr_28591_28646 = state_28570__$1;
(statearr_28591_28646[(2)] = null);

(statearr_28591_28646[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28571 === (22))){
var state_28570__$1 = state_28570;
var statearr_28592_28647 = state_28570__$1;
(statearr_28592_28647[(2)] = null);

(statearr_28592_28647[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28571 === (6))){
var inst_28511 = (state_28570[(13)]);
var inst_28520 = f.call(null,inst_28511);
var inst_28521 = cljs.core.seq.call(null,inst_28520);
var inst_28522 = inst_28521;
var inst_28523 = null;
var inst_28524 = (0);
var inst_28525 = (0);
var state_28570__$1 = (function (){var statearr_28596 = state_28570;
(statearr_28596[(9)] = inst_28522);

(statearr_28596[(10)] = inst_28525);

(statearr_28596[(11)] = inst_28524);

(statearr_28596[(12)] = inst_28523);

return statearr_28596;
})();
var statearr_28597_28648 = state_28570__$1;
(statearr_28597_28648[(2)] = null);

(statearr_28597_28648[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28571 === (17))){
var inst_28536 = (state_28570[(7)]);
var inst_28540 = cljs.core.chunk_first.call(null,inst_28536);
var inst_28541 = cljs.core.chunk_rest.call(null,inst_28536);
var inst_28542 = cljs.core.count.call(null,inst_28540);
var inst_28522 = inst_28541;
var inst_28523 = inst_28540;
var inst_28524 = inst_28542;
var inst_28525 = (0);
var state_28570__$1 = (function (){var statearr_28602 = state_28570;
(statearr_28602[(9)] = inst_28522);

(statearr_28602[(10)] = inst_28525);

(statearr_28602[(11)] = inst_28524);

(statearr_28602[(12)] = inst_28523);

return statearr_28602;
})();
var statearr_28603_28649 = state_28570__$1;
(statearr_28603_28649[(2)] = null);

(statearr_28603_28649[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28571 === (3))){
var inst_28568 = (state_28570[(2)]);
var state_28570__$1 = state_28570;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28570__$1,inst_28568);
} else {
if((state_val_28571 === (12))){
var inst_28556 = (state_28570[(2)]);
var state_28570__$1 = state_28570;
var statearr_28604_28650 = state_28570__$1;
(statearr_28604_28650[(2)] = inst_28556);

(statearr_28604_28650[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28571 === (2))){
var state_28570__$1 = state_28570;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28570__$1,(4),in$);
} else {
if((state_val_28571 === (23))){
var inst_28564 = (state_28570[(2)]);
var state_28570__$1 = state_28570;
var statearr_28605_28651 = state_28570__$1;
(statearr_28605_28651[(2)] = inst_28564);

(statearr_28605_28651[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28571 === (19))){
var inst_28551 = (state_28570[(2)]);
var state_28570__$1 = state_28570;
var statearr_28606_28652 = state_28570__$1;
(statearr_28606_28652[(2)] = inst_28551);

(statearr_28606_28652[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28571 === (11))){
var inst_28522 = (state_28570[(9)]);
var inst_28536 = (state_28570[(7)]);
var inst_28536__$1 = cljs.core.seq.call(null,inst_28522);
var state_28570__$1 = (function (){var statearr_28607 = state_28570;
(statearr_28607[(7)] = inst_28536__$1);

return statearr_28607;
})();
if(inst_28536__$1){
var statearr_28612_28653 = state_28570__$1;
(statearr_28612_28653[(1)] = (14));

} else {
var statearr_28613_28654 = state_28570__$1;
(statearr_28613_28654[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28571 === (9))){
var inst_28558 = (state_28570[(2)]);
var inst_28559 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_28570__$1 = (function (){var statearr_28615 = state_28570;
(statearr_28615[(15)] = inst_28558);

return statearr_28615;
})();
if(cljs.core.truth_(inst_28559)){
var statearr_28616_28656 = state_28570__$1;
(statearr_28616_28656[(1)] = (21));

} else {
var statearr_28617_28659 = state_28570__$1;
(statearr_28617_28659[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28571 === (5))){
var inst_28514 = cljs.core.async.close_BANG_.call(null,out);
var state_28570__$1 = state_28570;
var statearr_28618_28660 = state_28570__$1;
(statearr_28618_28660[(2)] = inst_28514);

(statearr_28618_28660[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28571 === (14))){
var inst_28536 = (state_28570[(7)]);
var inst_28538 = cljs.core.chunked_seq_QMARK_.call(null,inst_28536);
var state_28570__$1 = state_28570;
if(inst_28538){
var statearr_28619_28661 = state_28570__$1;
(statearr_28619_28661[(1)] = (17));

} else {
var statearr_28620_28662 = state_28570__$1;
(statearr_28620_28662[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28571 === (16))){
var inst_28554 = (state_28570[(2)]);
var state_28570__$1 = state_28570;
var statearr_28622_28663 = state_28570__$1;
(statearr_28622_28663[(2)] = inst_28554);

(statearr_28622_28663[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28571 === (10))){
var inst_28525 = (state_28570[(10)]);
var inst_28523 = (state_28570[(12)]);
var inst_28530 = cljs.core._nth.call(null,inst_28523,inst_28525);
var state_28570__$1 = state_28570;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28570__$1,(13),out,inst_28530);
} else {
if((state_val_28571 === (18))){
var inst_28536 = (state_28570[(7)]);
var inst_28545 = cljs.core.first.call(null,inst_28536);
var state_28570__$1 = state_28570;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28570__$1,(20),out,inst_28545);
} else {
if((state_val_28571 === (8))){
var inst_28525 = (state_28570[(10)]);
var inst_28524 = (state_28570[(11)]);
var inst_28527 = (inst_28525 < inst_28524);
var inst_28528 = inst_28527;
var state_28570__$1 = state_28570;
if(cljs.core.truth_(inst_28528)){
var statearr_28626_28667 = state_28570__$1;
(statearr_28626_28667[(1)] = (10));

} else {
var statearr_28627_28670 = state_28570__$1;
(statearr_28627_28670[(1)] = (11));

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
});})(c__24836__auto__))
;
return ((function (switch__24601__auto__,c__24836__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__24602__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__24602__auto____0 = (function (){
var statearr_28635 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28635[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__24602__auto__);

(statearr_28635[(1)] = (1));

return statearr_28635;
});
var cljs$core$async$mapcat_STAR__$_state_machine__24602__auto____1 = (function (state_28570){
while(true){
var ret_value__24603__auto__ = (function (){try{while(true){
var result__24604__auto__ = switch__24601__auto__.call(null,state_28570);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24604__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24604__auto__;
}
break;
}
}catch (e28636){if((e28636 instanceof Object)){
var ex__24605__auto__ = e28636;
var statearr_28637_28671 = state_28570;
(statearr_28637_28671[(5)] = ex__24605__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28570);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28636;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24603__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28674 = state_28570;
state_28570 = G__28674;
continue;
} else {
return ret_value__24603__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__24602__auto__ = function(state_28570){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__24602__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__24602__auto____1.call(this,state_28570);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__24602__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__24602__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__24602__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__24602__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__24602__auto__;
})()
;})(switch__24601__auto__,c__24836__auto__))
})();
var state__24838__auto__ = (function (){var statearr_28638 = f__24837__auto__.call(null);
(statearr_28638[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24836__auto__);

return statearr_28638;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24838__auto__);
});})(c__24836__auto__))
);

return c__24836__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args28676 = [];
var len__21896__auto___28679 = arguments.length;
var i__21897__auto___28680 = (0);
while(true){
if((i__21897__auto___28680 < len__21896__auto___28679)){
args28676.push((arguments[i__21897__auto___28680]));

var G__28681 = (i__21897__auto___28680 + (1));
i__21897__auto___28680 = G__28681;
continue;
} else {
}
break;
}

var G__28678 = args28676.length;
switch (G__28678) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args28676.length)].join('')));

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
var args28683 = [];
var len__21896__auto___28686 = arguments.length;
var i__21897__auto___28687 = (0);
while(true){
if((i__21897__auto___28687 < len__21896__auto___28686)){
args28683.push((arguments[i__21897__auto___28687]));

var G__28688 = (i__21897__auto___28687 + (1));
i__21897__auto___28687 = G__28688;
continue;
} else {
}
break;
}

var G__28685 = args28683.length;
switch (G__28685) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args28683.length)].join('')));

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
var args28690 = [];
var len__21896__auto___28748 = arguments.length;
var i__21897__auto___28749 = (0);
while(true){
if((i__21897__auto___28749 < len__21896__auto___28748)){
args28690.push((arguments[i__21897__auto___28749]));

var G__28750 = (i__21897__auto___28749 + (1));
i__21897__auto___28749 = G__28750;
continue;
} else {
}
break;
}

var G__28692 = args28690.length;
switch (G__28692) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args28690.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24836__auto___28752 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24836__auto___28752,out){
return (function (){
var f__24837__auto__ = (function (){var switch__24601__auto__ = ((function (c__24836__auto___28752,out){
return (function (state_28716){
var state_val_28717 = (state_28716[(1)]);
if((state_val_28717 === (7))){
var inst_28711 = (state_28716[(2)]);
var state_28716__$1 = state_28716;
var statearr_28718_28755 = state_28716__$1;
(statearr_28718_28755[(2)] = inst_28711);

(statearr_28718_28755[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28717 === (1))){
var inst_28693 = null;
var state_28716__$1 = (function (){var statearr_28719 = state_28716;
(statearr_28719[(7)] = inst_28693);

return statearr_28719;
})();
var statearr_28720_28766 = state_28716__$1;
(statearr_28720_28766[(2)] = null);

(statearr_28720_28766[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28717 === (4))){
var inst_28696 = (state_28716[(8)]);
var inst_28696__$1 = (state_28716[(2)]);
var inst_28697 = (inst_28696__$1 == null);
var inst_28698 = cljs.core.not.call(null,inst_28697);
var state_28716__$1 = (function (){var statearr_28721 = state_28716;
(statearr_28721[(8)] = inst_28696__$1);

return statearr_28721;
})();
if(inst_28698){
var statearr_28722_28777 = state_28716__$1;
(statearr_28722_28777[(1)] = (5));

} else {
var statearr_28723_28778 = state_28716__$1;
(statearr_28723_28778[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28717 === (6))){
var state_28716__$1 = state_28716;
var statearr_28724_28779 = state_28716__$1;
(statearr_28724_28779[(2)] = null);

(statearr_28724_28779[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28717 === (3))){
var inst_28713 = (state_28716[(2)]);
var inst_28714 = cljs.core.async.close_BANG_.call(null,out);
var state_28716__$1 = (function (){var statearr_28725 = state_28716;
(statearr_28725[(9)] = inst_28713);

return statearr_28725;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28716__$1,inst_28714);
} else {
if((state_val_28717 === (2))){
var state_28716__$1 = state_28716;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28716__$1,(4),ch);
} else {
if((state_val_28717 === (11))){
var inst_28696 = (state_28716[(8)]);
var inst_28705 = (state_28716[(2)]);
var inst_28693 = inst_28696;
var state_28716__$1 = (function (){var statearr_28726 = state_28716;
(statearr_28726[(10)] = inst_28705);

(statearr_28726[(7)] = inst_28693);

return statearr_28726;
})();
var statearr_28727_28780 = state_28716__$1;
(statearr_28727_28780[(2)] = null);

(statearr_28727_28780[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28717 === (9))){
var inst_28696 = (state_28716[(8)]);
var state_28716__$1 = state_28716;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28716__$1,(11),out,inst_28696);
} else {
if((state_val_28717 === (5))){
var inst_28696 = (state_28716[(8)]);
var inst_28693 = (state_28716[(7)]);
var inst_28700 = cljs.core._EQ_.call(null,inst_28696,inst_28693);
var state_28716__$1 = state_28716;
if(inst_28700){
var statearr_28729_28781 = state_28716__$1;
(statearr_28729_28781[(1)] = (8));

} else {
var statearr_28730_28785 = state_28716__$1;
(statearr_28730_28785[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28717 === (10))){
var inst_28708 = (state_28716[(2)]);
var state_28716__$1 = state_28716;
var statearr_28731_28786 = state_28716__$1;
(statearr_28731_28786[(2)] = inst_28708);

(statearr_28731_28786[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28717 === (8))){
var inst_28693 = (state_28716[(7)]);
var tmp28728 = inst_28693;
var inst_28693__$1 = tmp28728;
var state_28716__$1 = (function (){var statearr_28732 = state_28716;
(statearr_28732[(7)] = inst_28693__$1);

return statearr_28732;
})();
var statearr_28733_28787 = state_28716__$1;
(statearr_28733_28787[(2)] = null);

(statearr_28733_28787[(1)] = (2));


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
});})(c__24836__auto___28752,out))
;
return ((function (switch__24601__auto__,c__24836__auto___28752,out){
return (function() {
var cljs$core$async$state_machine__24602__auto__ = null;
var cljs$core$async$state_machine__24602__auto____0 = (function (){
var statearr_28737 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28737[(0)] = cljs$core$async$state_machine__24602__auto__);

(statearr_28737[(1)] = (1));

return statearr_28737;
});
var cljs$core$async$state_machine__24602__auto____1 = (function (state_28716){
while(true){
var ret_value__24603__auto__ = (function (){try{while(true){
var result__24604__auto__ = switch__24601__auto__.call(null,state_28716);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24604__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24604__auto__;
}
break;
}
}catch (e28738){if((e28738 instanceof Object)){
var ex__24605__auto__ = e28738;
var statearr_28739_28788 = state_28716;
(statearr_28739_28788[(5)] = ex__24605__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28716);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28738;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24603__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28792 = state_28716;
state_28716 = G__28792;
continue;
} else {
return ret_value__24603__auto__;
}
break;
}
});
cljs$core$async$state_machine__24602__auto__ = function(state_28716){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24602__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24602__auto____1.call(this,state_28716);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24602__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24602__auto____0;
cljs$core$async$state_machine__24602__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24602__auto____1;
return cljs$core$async$state_machine__24602__auto__;
})()
;})(switch__24601__auto__,c__24836__auto___28752,out))
})();
var state__24838__auto__ = (function (){var statearr_28744 = f__24837__auto__.call(null);
(statearr_28744[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24836__auto___28752);

return statearr_28744;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24838__auto__);
});})(c__24836__auto___28752,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args28793 = [];
var len__21896__auto___28866 = arguments.length;
var i__21897__auto___28867 = (0);
while(true){
if((i__21897__auto___28867 < len__21896__auto___28866)){
args28793.push((arguments[i__21897__auto___28867]));

var G__28868 = (i__21897__auto___28867 + (1));
i__21897__auto___28867 = G__28868;
continue;
} else {
}
break;
}

var G__28795 = args28793.length;
switch (G__28795) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args28793.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24836__auto___28870 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24836__auto___28870,out){
return (function (){
var f__24837__auto__ = (function (){var switch__24601__auto__ = ((function (c__24836__auto___28870,out){
return (function (state_28836){
var state_val_28837 = (state_28836[(1)]);
if((state_val_28837 === (7))){
var inst_28832 = (state_28836[(2)]);
var state_28836__$1 = state_28836;
var statearr_28838_28871 = state_28836__$1;
(statearr_28838_28871[(2)] = inst_28832);

(statearr_28838_28871[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28837 === (1))){
var inst_28796 = (new Array(n));
var inst_28797 = inst_28796;
var inst_28798 = (0);
var state_28836__$1 = (function (){var statearr_28839 = state_28836;
(statearr_28839[(7)] = inst_28797);

(statearr_28839[(8)] = inst_28798);

return statearr_28839;
})();
var statearr_28840_28872 = state_28836__$1;
(statearr_28840_28872[(2)] = null);

(statearr_28840_28872[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28837 === (4))){
var inst_28801 = (state_28836[(9)]);
var inst_28801__$1 = (state_28836[(2)]);
var inst_28802 = (inst_28801__$1 == null);
var inst_28803 = cljs.core.not.call(null,inst_28802);
var state_28836__$1 = (function (){var statearr_28841 = state_28836;
(statearr_28841[(9)] = inst_28801__$1);

return statearr_28841;
})();
if(inst_28803){
var statearr_28842_28873 = state_28836__$1;
(statearr_28842_28873[(1)] = (5));

} else {
var statearr_28843_28874 = state_28836__$1;
(statearr_28843_28874[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28837 === (15))){
var inst_28826 = (state_28836[(2)]);
var state_28836__$1 = state_28836;
var statearr_28844_28875 = state_28836__$1;
(statearr_28844_28875[(2)] = inst_28826);

(statearr_28844_28875[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28837 === (13))){
var state_28836__$1 = state_28836;
var statearr_28845_28876 = state_28836__$1;
(statearr_28845_28876[(2)] = null);

(statearr_28845_28876[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28837 === (6))){
var inst_28798 = (state_28836[(8)]);
var inst_28822 = (inst_28798 > (0));
var state_28836__$1 = state_28836;
if(cljs.core.truth_(inst_28822)){
var statearr_28846_28878 = state_28836__$1;
(statearr_28846_28878[(1)] = (12));

} else {
var statearr_28847_28879 = state_28836__$1;
(statearr_28847_28879[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28837 === (3))){
var inst_28834 = (state_28836[(2)]);
var state_28836__$1 = state_28836;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28836__$1,inst_28834);
} else {
if((state_val_28837 === (12))){
var inst_28797 = (state_28836[(7)]);
var inst_28824 = cljs.core.vec.call(null,inst_28797);
var state_28836__$1 = state_28836;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28836__$1,(15),out,inst_28824);
} else {
if((state_val_28837 === (2))){
var state_28836__$1 = state_28836;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28836__$1,(4),ch);
} else {
if((state_val_28837 === (11))){
var inst_28816 = (state_28836[(2)]);
var inst_28817 = (new Array(n));
var inst_28797 = inst_28817;
var inst_28798 = (0);
var state_28836__$1 = (function (){var statearr_28848 = state_28836;
(statearr_28848[(10)] = inst_28816);

(statearr_28848[(7)] = inst_28797);

(statearr_28848[(8)] = inst_28798);

return statearr_28848;
})();
var statearr_28849_28886 = state_28836__$1;
(statearr_28849_28886[(2)] = null);

(statearr_28849_28886[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28837 === (9))){
var inst_28797 = (state_28836[(7)]);
var inst_28814 = cljs.core.vec.call(null,inst_28797);
var state_28836__$1 = state_28836;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28836__$1,(11),out,inst_28814);
} else {
if((state_val_28837 === (5))){
var inst_28809 = (state_28836[(11)]);
var inst_28801 = (state_28836[(9)]);
var inst_28797 = (state_28836[(7)]);
var inst_28798 = (state_28836[(8)]);
var inst_28805 = (inst_28797[inst_28798] = inst_28801);
var inst_28809__$1 = (inst_28798 + (1));
var inst_28810 = (inst_28809__$1 < n);
var state_28836__$1 = (function (){var statearr_28850 = state_28836;
(statearr_28850[(11)] = inst_28809__$1);

(statearr_28850[(12)] = inst_28805);

return statearr_28850;
})();
if(cljs.core.truth_(inst_28810)){
var statearr_28851_28890 = state_28836__$1;
(statearr_28851_28890[(1)] = (8));

} else {
var statearr_28852_28891 = state_28836__$1;
(statearr_28852_28891[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28837 === (14))){
var inst_28829 = (state_28836[(2)]);
var inst_28830 = cljs.core.async.close_BANG_.call(null,out);
var state_28836__$1 = (function (){var statearr_28854 = state_28836;
(statearr_28854[(13)] = inst_28829);

return statearr_28854;
})();
var statearr_28855_28892 = state_28836__$1;
(statearr_28855_28892[(2)] = inst_28830);

(statearr_28855_28892[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28837 === (10))){
var inst_28820 = (state_28836[(2)]);
var state_28836__$1 = state_28836;
var statearr_28856_28894 = state_28836__$1;
(statearr_28856_28894[(2)] = inst_28820);

(statearr_28856_28894[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28837 === (8))){
var inst_28809 = (state_28836[(11)]);
var inst_28797 = (state_28836[(7)]);
var tmp28853 = inst_28797;
var inst_28797__$1 = tmp28853;
var inst_28798 = inst_28809;
var state_28836__$1 = (function (){var statearr_28857 = state_28836;
(statearr_28857[(7)] = inst_28797__$1);

(statearr_28857[(8)] = inst_28798);

return statearr_28857;
})();
var statearr_28858_28897 = state_28836__$1;
(statearr_28858_28897[(2)] = null);

(statearr_28858_28897[(1)] = (2));


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
});})(c__24836__auto___28870,out))
;
return ((function (switch__24601__auto__,c__24836__auto___28870,out){
return (function() {
var cljs$core$async$state_machine__24602__auto__ = null;
var cljs$core$async$state_machine__24602__auto____0 = (function (){
var statearr_28862 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28862[(0)] = cljs$core$async$state_machine__24602__auto__);

(statearr_28862[(1)] = (1));

return statearr_28862;
});
var cljs$core$async$state_machine__24602__auto____1 = (function (state_28836){
while(true){
var ret_value__24603__auto__ = (function (){try{while(true){
var result__24604__auto__ = switch__24601__auto__.call(null,state_28836);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24604__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24604__auto__;
}
break;
}
}catch (e28863){if((e28863 instanceof Object)){
var ex__24605__auto__ = e28863;
var statearr_28864_28898 = state_28836;
(statearr_28864_28898[(5)] = ex__24605__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28836);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28863;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24603__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28902 = state_28836;
state_28836 = G__28902;
continue;
} else {
return ret_value__24603__auto__;
}
break;
}
});
cljs$core$async$state_machine__24602__auto__ = function(state_28836){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24602__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24602__auto____1.call(this,state_28836);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24602__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24602__auto____0;
cljs$core$async$state_machine__24602__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24602__auto____1;
return cljs$core$async$state_machine__24602__auto__;
})()
;})(switch__24601__auto__,c__24836__auto___28870,out))
})();
var state__24838__auto__ = (function (){var statearr_28865 = f__24837__auto__.call(null);
(statearr_28865[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24836__auto___28870);

return statearr_28865;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24838__auto__);
});})(c__24836__auto___28870,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args28903 = [];
var len__21896__auto___28980 = arguments.length;
var i__21897__auto___28981 = (0);
while(true){
if((i__21897__auto___28981 < len__21896__auto___28980)){
args28903.push((arguments[i__21897__auto___28981]));

var G__28982 = (i__21897__auto___28981 + (1));
i__21897__auto___28981 = G__28982;
continue;
} else {
}
break;
}

var G__28906 = args28903.length;
switch (G__28906) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args28903.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24836__auto___28984 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24836__auto___28984,out){
return (function (){
var f__24837__auto__ = (function (){var switch__24601__auto__ = ((function (c__24836__auto___28984,out){
return (function (state_28950){
var state_val_28951 = (state_28950[(1)]);
if((state_val_28951 === (7))){
var inst_28946 = (state_28950[(2)]);
var state_28950__$1 = state_28950;
var statearr_28952_28985 = state_28950__$1;
(statearr_28952_28985[(2)] = inst_28946);

(statearr_28952_28985[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28951 === (1))){
var inst_28909 = [];
var inst_28910 = inst_28909;
var inst_28911 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_28950__$1 = (function (){var statearr_28953 = state_28950;
(statearr_28953[(7)] = inst_28911);

(statearr_28953[(8)] = inst_28910);

return statearr_28953;
})();
var statearr_28954_28986 = state_28950__$1;
(statearr_28954_28986[(2)] = null);

(statearr_28954_28986[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28951 === (4))){
var inst_28914 = (state_28950[(9)]);
var inst_28914__$1 = (state_28950[(2)]);
var inst_28915 = (inst_28914__$1 == null);
var inst_28916 = cljs.core.not.call(null,inst_28915);
var state_28950__$1 = (function (){var statearr_28955 = state_28950;
(statearr_28955[(9)] = inst_28914__$1);

return statearr_28955;
})();
if(inst_28916){
var statearr_28956_28990 = state_28950__$1;
(statearr_28956_28990[(1)] = (5));

} else {
var statearr_28957_28991 = state_28950__$1;
(statearr_28957_28991[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28951 === (15))){
var inst_28940 = (state_28950[(2)]);
var state_28950__$1 = state_28950;
var statearr_28958_28992 = state_28950__$1;
(statearr_28958_28992[(2)] = inst_28940);

(statearr_28958_28992[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28951 === (13))){
var state_28950__$1 = state_28950;
var statearr_28959_28994 = state_28950__$1;
(statearr_28959_28994[(2)] = null);

(statearr_28959_28994[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28951 === (6))){
var inst_28910 = (state_28950[(8)]);
var inst_28935 = inst_28910.length;
var inst_28936 = (inst_28935 > (0));
var state_28950__$1 = state_28950;
if(cljs.core.truth_(inst_28936)){
var statearr_28960_28996 = state_28950__$1;
(statearr_28960_28996[(1)] = (12));

} else {
var statearr_28961_28997 = state_28950__$1;
(statearr_28961_28997[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28951 === (3))){
var inst_28948 = (state_28950[(2)]);
var state_28950__$1 = state_28950;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28950__$1,inst_28948);
} else {
if((state_val_28951 === (12))){
var inst_28910 = (state_28950[(8)]);
var inst_28938 = cljs.core.vec.call(null,inst_28910);
var state_28950__$1 = state_28950;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28950__$1,(15),out,inst_28938);
} else {
if((state_val_28951 === (2))){
var state_28950__$1 = state_28950;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28950__$1,(4),ch);
} else {
if((state_val_28951 === (11))){
var inst_28914 = (state_28950[(9)]);
var inst_28918 = (state_28950[(10)]);
var inst_28928 = (state_28950[(2)]);
var inst_28929 = [];
var inst_28930 = inst_28929.push(inst_28914);
var inst_28910 = inst_28929;
var inst_28911 = inst_28918;
var state_28950__$1 = (function (){var statearr_28962 = state_28950;
(statearr_28962[(7)] = inst_28911);

(statearr_28962[(11)] = inst_28928);

(statearr_28962[(8)] = inst_28910);

(statearr_28962[(12)] = inst_28930);

return statearr_28962;
})();
var statearr_28963_28998 = state_28950__$1;
(statearr_28963_28998[(2)] = null);

(statearr_28963_28998[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28951 === (9))){
var inst_28910 = (state_28950[(8)]);
var inst_28926 = cljs.core.vec.call(null,inst_28910);
var state_28950__$1 = state_28950;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28950__$1,(11),out,inst_28926);
} else {
if((state_val_28951 === (5))){
var inst_28911 = (state_28950[(7)]);
var inst_28914 = (state_28950[(9)]);
var inst_28918 = (state_28950[(10)]);
var inst_28918__$1 = f.call(null,inst_28914);
var inst_28919 = cljs.core._EQ_.call(null,inst_28918__$1,inst_28911);
var inst_28920 = cljs.core.keyword_identical_QMARK_.call(null,inst_28911,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_28921 = (inst_28919) || (inst_28920);
var state_28950__$1 = (function (){var statearr_28964 = state_28950;
(statearr_28964[(10)] = inst_28918__$1);

return statearr_28964;
})();
if(cljs.core.truth_(inst_28921)){
var statearr_28965_29001 = state_28950__$1;
(statearr_28965_29001[(1)] = (8));

} else {
var statearr_28966_29002 = state_28950__$1;
(statearr_28966_29002[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28951 === (14))){
var inst_28943 = (state_28950[(2)]);
var inst_28944 = cljs.core.async.close_BANG_.call(null,out);
var state_28950__$1 = (function (){var statearr_28968 = state_28950;
(statearr_28968[(13)] = inst_28943);

return statearr_28968;
})();
var statearr_28969_29003 = state_28950__$1;
(statearr_28969_29003[(2)] = inst_28944);

(statearr_28969_29003[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28951 === (10))){
var inst_28933 = (state_28950[(2)]);
var state_28950__$1 = state_28950;
var statearr_28970_29004 = state_28950__$1;
(statearr_28970_29004[(2)] = inst_28933);

(statearr_28970_29004[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28951 === (8))){
var inst_28914 = (state_28950[(9)]);
var inst_28918 = (state_28950[(10)]);
var inst_28910 = (state_28950[(8)]);
var inst_28923 = inst_28910.push(inst_28914);
var tmp28967 = inst_28910;
var inst_28910__$1 = tmp28967;
var inst_28911 = inst_28918;
var state_28950__$1 = (function (){var statearr_28971 = state_28950;
(statearr_28971[(7)] = inst_28911);

(statearr_28971[(14)] = inst_28923);

(statearr_28971[(8)] = inst_28910__$1);

return statearr_28971;
})();
var statearr_28972_29009 = state_28950__$1;
(statearr_28972_29009[(2)] = null);

(statearr_28972_29009[(1)] = (2));


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
});})(c__24836__auto___28984,out))
;
return ((function (switch__24601__auto__,c__24836__auto___28984,out){
return (function() {
var cljs$core$async$state_machine__24602__auto__ = null;
var cljs$core$async$state_machine__24602__auto____0 = (function (){
var statearr_28976 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28976[(0)] = cljs$core$async$state_machine__24602__auto__);

(statearr_28976[(1)] = (1));

return statearr_28976;
});
var cljs$core$async$state_machine__24602__auto____1 = (function (state_28950){
while(true){
var ret_value__24603__auto__ = (function (){try{while(true){
var result__24604__auto__ = switch__24601__auto__.call(null,state_28950);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24604__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24604__auto__;
}
break;
}
}catch (e28977){if((e28977 instanceof Object)){
var ex__24605__auto__ = e28977;
var statearr_28978_29010 = state_28950;
(statearr_28978_29010[(5)] = ex__24605__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28950);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28977;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24603__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29011 = state_28950;
state_28950 = G__29011;
continue;
} else {
return ret_value__24603__auto__;
}
break;
}
});
cljs$core$async$state_machine__24602__auto__ = function(state_28950){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24602__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24602__auto____1.call(this,state_28950);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24602__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24602__auto____0;
cljs$core$async$state_machine__24602__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24602__auto____1;
return cljs$core$async$state_machine__24602__auto__;
})()
;})(switch__24601__auto__,c__24836__auto___28984,out))
})();
var state__24838__auto__ = (function (){var statearr_28979 = f__24837__auto__.call(null);
(statearr_28979[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24836__auto___28984);

return statearr_28979;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24838__auto__);
});})(c__24836__auto___28984,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map