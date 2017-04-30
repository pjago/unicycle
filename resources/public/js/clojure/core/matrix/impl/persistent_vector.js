// Compiled by ClojureScript 1.9.456 {}
goog.provide('clojure.core.matrix.impl.persistent_vector');
goog.require('cljs.core');
goog.require('clojure.core.matrix.protocols');
goog.require('clojure.core.matrix.implementations');
goog.require('clojure.core.matrix.impl.common');
goog.require('clojure.core.matrix.impl.mathsops');
/**
 * Ensures a vector is fully coerced to nested persistent vectors
 */
clojure.core.matrix.impl.persistent_vector.coerce_nested = (function clojure$core$matrix$impl$persistent_vector$coerce_nested(v){
return cljs.core.mapv.call(null,clojure.core.matrix.impl.persistent_vector.persistent_vector_coerce,v);
});
/**
 * Maps a function over a persistent vector, only modifying the vector if the function
 * returns a different value
 */
clojure.core.matrix.impl.persistent_vector.mapv_identity_check = (function clojure$core$matrix$impl$persistent_vector$mapv_identity_check(f,v){
var n = cljs.core.count.call(null,v);
var i = (0);
var v__$1 = v;
while(true){
if((i < n)){
var x = cljs.core.nth.call(null,v__$1,i);
var y = f.call(null,x);
var G__40558 = (i + (1));
var G__40559 = (((x === y))?v__$1:cljs.core.assoc.call(null,v__$1,i,y));
i = G__40558;
v__$1 = G__40559;
continue;
} else {
return v__$1;
}
break;
}
});
clojure.core.matrix.impl.persistent_vector.check_vector_shape = (function clojure$core$matrix$impl$persistent_vector$check_vector_shape(v,shape){
var and__20663__auto__ = (v instanceof cljs.core.PersistentVector);
if(and__20663__auto__){
var and__20663__auto____$1 = (cljs.core.count.call(null,v) === cljs.core.long$.call(null,cljs.core.first.call(null,shape)));
if(and__20663__auto____$1){
var temp__6751__auto__ = cljs.core.next.call(null,shape);
if(temp__6751__auto__){
var ns = temp__6751__auto__;
return cljs.core.every_QMARK_.call(null,((function (ns,temp__6751__auto__,and__20663__auto____$1,and__20663__auto__){
return (function (p1__40560_SHARP_){
return clojure.core.matrix.impl.persistent_vector.check_vector_shape.call(null,p1__40560_SHARP_,ns);
});})(ns,temp__6751__auto__,and__20663__auto____$1,and__20663__auto__))
,v);
} else {
return cljs.core.every_QMARK_.call(null,((function (temp__6751__auto__,and__20663__auto____$1,and__20663__auto__){
return (function (p1__40561_SHARP_){
return !((p1__40561_SHARP_ instanceof cljs.core.PersistentVector));
});})(temp__6751__auto__,and__20663__auto____$1,and__20663__auto__))
,v);
}
} else {
return and__20663__auto____$1;
}
} else {
return and__20663__auto__;
}
});
/**
 * Test if array is already in nested persistent vector array format.
 */
clojure.core.matrix.impl.persistent_vector.is_nested_persistent_vectors_QMARK_ = (function clojure$core$matrix$impl$persistent_vector$is_nested_persistent_vectors_QMARK_(x){
if(typeof x === 'number'){
return true;
} else {
if(cljs.core.truth_(clojure.core.matrix.protocols.is_scalar_QMARK_.call(null,x))){
return true;
} else {
if(!((x instanceof cljs.core.PersistentVector))){
return false;
} else {
var and__20663__auto__ = cljs.core.every_QMARK_.call(null,clojure.core.matrix.impl.persistent_vector.is_nested_persistent_vectors_QMARK_,x);
if(and__20663__auto__){
return clojure.core.matrix.impl.persistent_vector.check_vector_shape.call(null,x,clojure.core.matrix.protocols.get_shape.call(null,x));
} else {
return and__20663__auto__;
}

}
}
}
});
/**
 * Coerces to nested persistent vectors
 */
clojure.core.matrix.impl.persistent_vector.persistent_vector_coerce = (function clojure$core$matrix$impl$persistent_vector$persistent_vector_coerce(x){
var dims = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,x));
if((dims > (0))){
return clojure.core.matrix.protocols.convert_to_nested_vectors.call(null,x);
} else {
if(((dims === (0))) && (cljs.core.not.call(null,clojure.core.matrix.protocols.is_scalar_QMARK_.call(null,x)))){
return clojure.core.matrix.protocols.get_0d.call(null,x);
} else {
if((x == null)){
return x;
} else {
if((x instanceof cljs.core.IIterable)){
return clojure.core.matrix.impl.persistent_vector.coerce_nested.call(null,x);
} else {
if(cljs.core.sequential_QMARK_.call(null,x)){
return clojure.core.matrix.impl.persistent_vector.coerce_nested.call(null,x);
} else {
return x;

}
}
}
}
}
});
/**
 * Calculates the dimensionality (== nesting depth) of nested persistent vectors
 */
clojure.core.matrix.impl.persistent_vector.vector_dimensionality = (function clojure$core$matrix$impl$persistent_vector$vector_dimensionality(m){
if(cljs.core.vector_QMARK_.call(null,m)){
if((cljs.core.count.call(null,m) > (0))){
return ((1) + clojure.core.matrix.impl.persistent_vector.vector_dimensionality.call(null,cljs.core.nth.call(null,m,(0))));
} else {
return (1);
}
} else {
return cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,m));

}
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PImplementation$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PImplementation$implementation_key$arity$1 = (function (m){
var m__$1 = this;
return new cljs.core.Keyword(null,"persistent-vector","persistent-vector",2032618025);
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PImplementation$meta_info$arity$1 = (function (m){
var m__$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Implementation for nested Clojure persistent vectors\n             used as matrices"], null);
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PImplementation$new_vector$arity$2 = (function (m,length){
var m__$1 = this;
return cljs.core.vec.call(null,cljs.core.repeat.call(null,length,0.0));
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PImplementation$new_matrix$arity$3 = (function (m,rows,columns){
var m__$1 = this;
return cljs.core.vec.call(null,cljs.core.repeat.call(null,rows,clojure.core.matrix.protocols.new_vector.call(null,m__$1,columns)));
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PImplementation$new_matrix_nd$arity$2 = (function (m,dims){
var m__$1 = this;
var temp__6751__auto__ = cljs.core.seq.call(null,dims);
if(temp__6751__auto__){
var dims__$1 = temp__6751__auto__;
return cljs.core.vec.call(null,cljs.core.repeat.call(null,cljs.core.first.call(null,dims__$1),clojure.core.matrix.protocols.new_matrix_nd.call(null,m__$1,cljs.core.next.call(null,dims__$1))));
} else {
return 0.0;
}
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PImplementation$construct_matrix$arity$2 = (function (m,data){
var m__$1 = this;
return clojure.core.matrix.impl.persistent_vector.persistent_vector_coerce.call(null,data);
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PImplementation$supports_dimensionality_QMARK_$arity$2 = (function (m,dims){
var m__$1 = this;
return true;
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PBroadcast$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PBroadcast$broadcast$arity$2 = (function (m,target_shape){
var m__$1 = this;
var mshape = clojure.core.matrix.protocols.get_shape.call(null,m__$1);
var dims = cljs.core.long$.call(null,cljs.core.count.call(null,mshape));
var tdims = cljs.core.long$.call(null,cljs.core.count.call(null,target_shape));
if((dims > tdims)){
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Can't broadcast to a lower dimensional shape")].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
if(!(cljs.core.every_QMARK_.call(null,cljs.core.identity,cljs.core.map.call(null,cljs.core._EQ__EQ_,mshape,cljs.core.take_last.call(null,dims,target_shape))))){
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Incompatible shapes, cannot broadcast shape "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.vec.call(null,mshape)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" to "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.vec.call(null,target_shape))].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
return cljs.core.reduce.call(null,((function (mshape,dims,tdims,m__$1){
return (function (m__$2,dup){
return cljs.core.vec.call(null,cljs.core.repeat.call(null,dup,m__$2));
});})(mshape,dims,tdims,m__$1))
,m__$1,cljs.core.reverse.call(null,cljs.core.drop_last.call(null,dims,target_shape)));

}
}
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PBroadcastLike$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PBroadcastLike$broadcast_like$arity$2 = (function (m,a){
var m__$1 = this;
return clojure.core.matrix.protocols.broadcast.call(null,a,clojure.core.matrix.protocols.get_shape.call(null,m__$1));
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PBroadcastCoerce$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PBroadcastCoerce$broadcast_coerce$arity$2 = (function (m,a){
var m__$1 = this;
return clojure.core.matrix.protocols.broadcast.call(null,clojure.core.matrix.impl.persistent_vector.persistent_vector_coerce.call(null,a),clojure.core.matrix.protocols.get_shape.call(null,m__$1));
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PIndexedAccess$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PIndexedAccess$get_1d$arity$2 = (function (m,x){
var m__$1 = this;
var r = cljs.core.nth.call(null,m__$1,(x | (0)));
var x__31472__auto__ = r;
if(typeof x__31472__auto__ === 'number'){
return x__31472__auto__;
} else {
return clojure.core.matrix.protocols.get_0d.call(null,x__31472__auto__);

}
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PIndexedAccess$get_2d$arity$3 = (function (m,x,y){
var m__$1 = this;
var row = cljs.core.nth.call(null,m__$1,(x | (0)));
return clojure.core.matrix.protocols.get_1d.call(null,row,y);
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PIndexedAccess$get_nd$arity$2 = (function (m,indexes){
var m__$1 = this;
var temp__6751__auto__ = cljs.core.seq.call(null,indexes);
if(temp__6751__auto__){
var indexes__$1 = temp__6751__auto__;
var temp__6751__auto____$1 = cljs.core.next.call(null,indexes__$1);
if(temp__6751__auto____$1){
var next_indexes = temp__6751__auto____$1;
var m__$2 = cljs.core.nth.call(null,m__$1,(cljs.core.first.call(null,indexes__$1) | (0)));
return clojure.core.matrix.protocols.get_nd.call(null,m__$2,next_indexes);
} else {
return cljs.core.nth.call(null,m__$1,(cljs.core.first.call(null,indexes__$1) | (0)));
}
} else {
return m__$1;
}
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PIndexedSetting$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PIndexedSetting$set_1d$arity$3 = (function (m,row,v){
var m__$1 = this;
return cljs.core.assoc.call(null,m__$1,row,v);
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PIndexedSetting$set_2d$arity$4 = (function (m,row,column,v){
var m__$1 = this;
return cljs.core.assoc.call(null,m__$1,row,clojure.core.matrix.protocols.set_1d.call(null,m__$1.call(null,row),column,v));
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PIndexedSetting$set_nd$arity$3 = (function (m,indexes,v){
var m__$1 = this;
var temp__6751__auto__ = cljs.core.seq.call(null,indexes);
if(temp__6751__auto__){
var indexes__$1 = temp__6751__auto__;
var fi = cljs.core.first.call(null,indexes__$1);
if(((1) === cljs.core.count.call(null,indexes__$1))){
return cljs.core.assoc.call(null,m__$1,fi,v);
} else {
return cljs.core.assoc.call(null,m__$1,fi,clojure.core.matrix.protocols.set_nd.call(null,m__$1.call(null,fi),cljs.core.next.call(null,indexes__$1),v));
}
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Trying to set on a persistent vector with insufficient indexes?")].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PIndexedSetting$is_mutable_QMARK_$arity$1 = (function (m){
var m__$1 = this;
return false;
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixSlices$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixSlices$get_row$arity$2 = (function (m,i){
var m__$1 = this;
return cljs.core.nth.call(null,m__$1,cljs.core.long$.call(null,i));
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixSlices$get_column$arity$2 = (function (m,i){
var m__$1 = this;
return clojure.core.matrix.protocols.get_slice.call(null,m__$1,(1),i);
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixSlices$get_major_slice$arity$2 = (function (m,i){
var m__$1 = this;
var sl = cljs.core.nth.call(null,m__$1,cljs.core.long$.call(null,i));
return sl;
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixSlices$get_slice$arity$3 = (function (m,dimension,i){
var m__$1 = this;
var dimension__$1 = cljs.core.long$.call(null,dimension);
if((dimension__$1 === (0))){
return clojure.core.matrix.protocols.get_major_slice.call(null,m__$1,i);
} else {
var sd = (dimension__$1 - (1));
return cljs.core.mapv.call(null,((function (sd,dimension__$1,m__$1){
return (function (p1__40562_SHARP_){
return clojure.core.matrix.protocols.get_slice.call(null,p1__40562_SHARP_,sd,i);
});})(sd,dimension__$1,m__$1))
,m__$1);
}
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixRows$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixRows$get_rows$arity$1 = (function (m){
var m__$1 = this;
return m__$1;
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixColumns$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixColumns$get_columns$arity$1 = (function (m){
var m__$1 = this;
return cljs.core.vec.call(null,(function (){var iter__21537__auto__ = ((function (m__$1){
return (function clojure$core$matrix$impl$persistent_vector$iter__40564(s__40565){
return (new cljs.core.LazySeq(null,((function (m__$1){
return (function (){
var s__40565__$1 = s__40565;
while(true){
var temp__6753__auto__ = cljs.core.seq.call(null,s__40565__$1);
if(temp__6753__auto__){
var s__40565__$2 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__40565__$2)){
var c__21535__auto__ = cljs.core.chunk_first.call(null,s__40565__$2);
var size__21536__auto__ = cljs.core.count.call(null,c__21535__auto__);
var b__40567 = cljs.core.chunk_buffer.call(null,size__21536__auto__);
if((function (){var i__40566 = (0);
while(true){
if((i__40566 < size__21536__auto__)){
var j = cljs.core._nth.call(null,c__21535__auto__,i__40566);
cljs.core.chunk_append.call(null,b__40567,cljs.core.mapv.call(null,((function (i__40566,j,c__21535__auto__,size__21536__auto__,b__40567,s__40565__$2,temp__6753__auto__,m__$1){
return (function (p1__40563_SHARP_){
return clojure.core.matrix.protocols.get_1d.call(null,p1__40563_SHARP_,j);
});})(i__40566,j,c__21535__auto__,size__21536__auto__,b__40567,s__40565__$2,temp__6753__auto__,m__$1))
,m__$1));

var G__40568 = (i__40566 + (1));
i__40566 = G__40568;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40567),clojure$core$matrix$impl$persistent_vector$iter__40564.call(null,cljs.core.chunk_rest.call(null,s__40565__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40567),null);
}
} else {
var j = cljs.core.first.call(null,s__40565__$2);
return cljs.core.cons.call(null,cljs.core.mapv.call(null,((function (j,s__40565__$2,temp__6753__auto__,m__$1){
return (function (p1__40563_SHARP_){
return clojure.core.matrix.protocols.get_1d.call(null,p1__40563_SHARP_,j);
});})(j,s__40565__$2,temp__6753__auto__,m__$1))
,m__$1),clojure$core$matrix$impl$persistent_vector$iter__40564.call(null,cljs.core.rest.call(null,s__40565__$2)));
}
} else {
return null;
}
break;
}
});})(m__$1))
,null,null));
});})(m__$1))
;
return iter__21537__auto__.call(null,cljs.core.range.call(null,clojure.core.matrix.protocols.dimension_count.call(null,m__$1,(1))));
})());
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PSliceView$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PSliceView$get_major_slice_view$arity$2 = (function (m,i){
var m__$1 = this;
return cljs.core.nth.call(null,m__$1,i);
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PSliceView2$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PSliceView2$get_slice_view$arity$3 = (function (m,dimension,i){
var m__$1 = this;
return clojure.core.matrix.protocols.get_slice.call(null,m__$1,dimension,i);
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PSliceSeq$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PSliceSeq$get_major_slice_seq$arity$1 = (function (m){
var m__$1 = this;
return m__$1;
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PSliceJoin$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PSliceJoin$join$arity$2 = (function (m,a){
var m__$1 = this;
var dims = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,m__$1));
var adims = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,a));
if((dims === adims)){
return cljs.core.vec.call(null,cljs.core.concat.call(null,clojure.core.matrix.protocols.get_major_slice_seq.call(null,m__$1),clojure.core.matrix.protocols.get_major_slice_seq.call(null,a)));
} else {
if((dims === (adims + (1)))){
return cljs.core.conj.call(null,m__$1,a);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Joining with array of incompatible size")].join(''),cljs.core.PersistentArrayMap.EMPTY);

}
}
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PRotate$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PRotate$rotate$arity$3 = (function (m,dim,places){
var m__$1 = this;
var dim__$1 = cljs.core.long$.call(null,dim);
var places__$1 = cljs.core.long$.call(null,places);
if(((0) === dim__$1)){
var c = cljs.core.long$.call(null,cljs.core.count.call(null,m__$1));
var sh = cljs.core.long$.call(null,(((c > (0)))?cljs.core.mod.call(null,places__$1,c):(0)));
if((sh === (0))){
return m__$1;
} else {
return cljs.core.vec.call(null,cljs.core.concat.call(null,cljs.core.subvec.call(null,m__$1,sh,c),cljs.core.subvec.call(null,m__$1,(0),sh)));
}
} else {
return cljs.core.mapv.call(null,((function (dim__$1,places__$1,m__$1){
return (function (s){
return clojure.core.matrix.protocols.rotate.call(null,s,(dim__$1 - (1)),places__$1);
});})(dim__$1,places__$1,m__$1))
,m__$1);
}
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$POrder$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$POrder$order$arity$2 = (function (m,indices){
var m__$1 = this;
return cljs.core.mapv.call(null,((function (m__$1){
return (function (p1__40569_SHARP_){
return cljs.core.nth.call(null,m__$1,p1__40569_SHARP_);
});})(m__$1))
,clojure.core.matrix.protocols.element_seq.call(null,indices));
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$POrder$order$arity$3 = (function (m,dimension,indices){
var m__$1 = this;
var dimension__$1 = cljs.core.long$.call(null,dimension);
if((dimension__$1 === (0))){
return clojure.core.matrix.protocols.order.call(null,m__$1,indices);
} else {
return cljs.core.mapv.call(null,((function (dimension__$1,m__$1){
return (function (p1__40570_SHARP_){
return clojure.core.matrix.protocols.order.call(null,p1__40570_SHARP_,(dimension__$1 - (1)),indices);
});})(dimension__$1,m__$1))
,m__$1);
}
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PSubVector$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PSubVector$subvector$arity$3 = (function (m,start,length){
var m__$1 = this;
return cljs.core.subvec.call(null,m__$1,start,(cljs.core.long$.call(null,start) + cljs.core.long$.call(null,length)));
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PValidateShape$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PValidateShape$validate_shape$arity$1 = (function (m){
var m__$1 = this;
if(cljs.core.truth_(clojure.core.matrix.protocols.same_shapes_QMARK_.call(null,m__$1))){
return clojure.core.matrix.protocols.get_shape.call(null,m__$1);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Inconsistent shape for persistent vector array.")].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixAdd$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixAdd$matrix_add$arity$2 = (function (m,a){
var m__$1 = this;
var vec__40571 = clojure.core.matrix.protocols.broadcast_compatible.call(null,m__$1,a);
var m__$2 = cljs.core.nth.call(null,vec__40571,(0),null);
var a__$1 = cljs.core.nth.call(null,vec__40571,(1),null);
return clojure.core.matrix.impl.common.mapmatrix.call(null,cljs.core._PLUS_,m__$2,clojure.core.matrix.impl.persistent_vector.persistent_vector_coerce.call(null,a__$1));
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixAdd$matrix_sub$arity$2 = (function (m,a){
var m__$1 = this;
var vec__40574 = clojure.core.matrix.protocols.broadcast_compatible.call(null,m__$1,a);
var m__$2 = cljs.core.nth.call(null,vec__40574,(0),null);
var a__$1 = cljs.core.nth.call(null,vec__40574,(1),null);
return clojure.core.matrix.impl.common.mapmatrix.call(null,cljs.core._,m__$2,clojure.core.matrix.impl.persistent_vector.persistent_vector_coerce.call(null,a__$1));
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PVectorOps$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PVectorOps$vector_dot$arity$2 = (function (a,b){
var a__$1 = this;
var dims = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,b));
if(((dims === (1))) && (((1) === cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,b))))){
var n = cljs.core.long$.call(null,cljs.core.count.call(null,a__$1));
if(cljs.core.not_EQ_.call(null,n,cljs.core.long$.call(null,cljs.core.long$.call(null,clojure.core.matrix.protocols.dimension_count.call(null,b,(0)))))){
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Mismatched vector sizes")].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
if((b instanceof cljs.core.List)){
var b__$1 = b;
var i = (0);
var res = 0.0;
while(true){
if((i >= n)){
return res;
} else {
var G__40577 = (i + (1));
var G__40578 = (res + (cljs.core.nth.call(null,a__$1,(i | (0))) * b__$1.get((i | (0)))));
i = G__40577;
res = G__40578;
continue;
}
break;
}
} else {
if((Array === b.constructor)){
var i = (0);
var res = 0.0;
while(true){
if((i >= n)){
return res;
} else {
var G__40579 = (i + (1));
var G__40580 = (res + (cljs.core.nth.call(null,a__$1,(i | (0))) * cljs.core.nth.call(null,b,i)));
i = G__40579;
res = G__40580;
continue;
}
break;
}
} else {
return cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,cljs.core._STAR_,a__$1,clojure.core.matrix.protocols.element_seq.call(null,b)));

}
}
}
} else {
return clojure.core.matrix.protocols.inner_product.call(null,a__$1,b);

}
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PVectorOps$length$arity$1 = (function (a){
var a__$1 = this;
var n = cljs.core.long$.call(null,cljs.core.count.call(null,a__$1));
var i = (0);
var res = 0.0;
while(true){
if((i < n)){
var x = cljs.core.nth.call(null,a__$1,i);
var G__40581 = (i + (1));
var G__40582 = (res + (x * x));
i = G__40581;
res = G__40582;
continue;
} else {
return Math.sqrt(res);
}
break;
}
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PVectorOps$length_squared$arity$1 = (function (a){
var a__$1 = this;
var n = cljs.core.long$.call(null,cljs.core.count.call(null,a__$1));
var i = (0);
var res = 0.0;
while(true){
if((i < n)){
var x = cljs.core.nth.call(null,a__$1,i);
var G__40583 = (i + (1));
var G__40584 = (res + (x * x));
i = G__40583;
res = G__40584;
continue;
} else {
return res;
}
break;
}
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PVectorOps$normalise$arity$1 = (function (a){
var a__$1 = this;
return clojure.core.matrix.protocols.scale.call(null,a__$1,(1.0 / Math.sqrt(clojure.core.matrix.protocols.length_squared.call(null,a__$1))));
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMutableMatrixConstruction$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMutableMatrixConstruction$mutable_matrix$arity$1 = (function (m){
var m__$1 = this;
return null;
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PImmutableMatrixConstruction$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PImmutableMatrixConstruction$immutable_matrix$arity$1 = (function (m){
var m__$1 = this;
return m__$1;
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PVectorDistance$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PVectorDistance$distance$arity$2 = (function (a,b){
var a__$1 = this;
return clojure.core.matrix.protocols.length.call(null,clojure.core.matrix.protocols.matrix_sub.call(null,b,a__$1));
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PSummable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PSummable$element_sum$arity$1 = (function (a){
var a__$1 = this;
return clojure.core.matrix.protocols.element_reduce.call(null,a__$1,cljs.core._PLUS_);
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PCoercion$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PCoercion$coerce_param$arity$2 = (function (m,param){
var m__$1 = this;
return clojure.core.matrix.impl.persistent_vector.persistent_vector_coerce.call(null,param);
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixEquality$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixEquality$matrix_equals$arity$2 = (function (a,b){
var a__$1 = this;
var bdims = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,b));
if((bdims <= (0))){
return false;
} else {
if(cljs.core.not_EQ_.call(null,cljs.core.count.call(null,a__$1),clojure.core.matrix.protocols.dimension_count.call(null,b,(0)))){
return false;
} else {
if(((1) === bdims)){
var and__20663__auto__ = ((1) === cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,a__$1)));
if(and__20663__auto__){
var n = cljs.core.long$.call(null,cljs.core.count.call(null,a__$1));
var i = (0);
while(true){
if((i < n)){
if((clojure.core.matrix.protocols.get_1d.call(null,a__$1,i) === clojure.core.matrix.protocols.get_1d.call(null,b,i))){
var G__40585 = (i + (1));
i = G__40585;
continue;
} else {
return false;
}
} else {
return true;
}
break;
}
} else {
return and__20663__auto__;
}
} else {
if(cljs.core.vector_QMARK_.call(null,b)){
var n = cljs.core.long$.call(null,cljs.core.count.call(null,a__$1));
var i = (0);
while(true){
if((i < n)){
if(cljs.core.truth_(clojure.core.matrix.protocols.matrix_equals.call(null,a__$1.call(null,i),b.call(null,i)))){
var G__40586 = (i + (1));
i = G__40586;
continue;
} else {
return false;
}
} else {
return true;
}
break;
}
} else {
var sa = cljs.core.seq.call(null,a__$1);
var sb = clojure.core.matrix.protocols.get_major_slice_seq.call(null,b);
while(true){
if(sa){
if(cljs.core.truth_(clojure.core.matrix.protocols.matrix_equals.call(null,cljs.core.first.call(null,sa),cljs.core.first.call(null,sb)))){
var G__40587 = cljs.core.next.call(null,sa);
var G__40588 = cljs.core.next.call(null,sb);
sa = G__40587;
sb = G__40588;
continue;
} else {
return false;
}
} else {
return true;
}
break;
}

}
}
}
}
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixMultiply$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixMultiply$element_multiply$arity$2 = (function (m,a){
var m__$1 = this;
if(typeof a === 'number'){
return clojure.core.matrix.protocols.scale.call(null,m__$1,a);
} else {
var vec__40590 = clojure.core.matrix.protocols.broadcast_compatible.call(null,m__$1,a);
var m__$2 = cljs.core.nth.call(null,vec__40590,(0),null);
var a__$1 = cljs.core.nth.call(null,vec__40590,(1),null);
return clojure.core.matrix.protocols.element_map.call(null,m__$2,cljs.core._STAR_,a__$1);
}
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixMultiply$matrix_multiply$arity$2 = (function (m,a){
var m__$1 = this;
var mdims = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,m__$1));
var adims = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,a));
if((adims === (0))){
return clojure.core.matrix.protocols.scale.call(null,m__$1,a);
} else {
if(((mdims === (1))) && ((adims === (2)))){
return cljs.core.vec.call(null,(function (){var iter__21537__auto__ = ((function (mdims,adims,m__$1){
return (function clojure$core$matrix$impl$persistent_vector$iter__40593(s__40594){
return (new cljs.core.LazySeq(null,((function (mdims,adims,m__$1){
return (function (){
var s__40594__$1 = s__40594;
while(true){
var temp__6753__auto__ = cljs.core.seq.call(null,s__40594__$1);
if(temp__6753__auto__){
var s__40594__$2 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__40594__$2)){
var c__21535__auto__ = cljs.core.chunk_first.call(null,s__40594__$2);
var size__21536__auto__ = cljs.core.count.call(null,c__21535__auto__);
var b__40596 = cljs.core.chunk_buffer.call(null,size__21536__auto__);
if((function (){var i__40595 = (0);
while(true){
if((i__40595 < size__21536__auto__)){
var i = cljs.core._nth.call(null,c__21535__auto__,i__40595);
cljs.core.chunk_append.call(null,b__40596,(function (){var r = clojure.core.matrix.protocols.get_column.call(null,a,i);
return clojure.core.matrix.protocols.vector_dot.call(null,m__$1,r);
})());

var G__40601 = (i__40595 + (1));
i__40595 = G__40601;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40596),clojure$core$matrix$impl$persistent_vector$iter__40593.call(null,cljs.core.chunk_rest.call(null,s__40594__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40596),null);
}
} else {
var i = cljs.core.first.call(null,s__40594__$2);
return cljs.core.cons.call(null,(function (){var r = clojure.core.matrix.protocols.get_column.call(null,a,i);
return clojure.core.matrix.protocols.vector_dot.call(null,m__$1,r);
})(),clojure$core$matrix$impl$persistent_vector$iter__40593.call(null,cljs.core.rest.call(null,s__40594__$2)));
}
} else {
return null;
}
break;
}
});})(mdims,adims,m__$1))
,null,null));
});})(mdims,adims,m__$1))
;
return iter__21537__auto__.call(null,cljs.core.range.call(null,clojure.core.matrix.protocols.dimension_count.call(null,a,(1))));
})());
} else {
if(((mdims === (1))) && ((adims === (1)))){
return clojure.core.matrix.protocols.vector_dot.call(null,m__$1,a);
} else {
if(((mdims === (2))) && ((adims === (1)))){
return cljs.core.mapv.call(null,((function (mdims,adims,m__$1){
return (function (p1__40589_SHARP_){
return clojure.core.matrix.protocols.vector_dot.call(null,p1__40589_SHARP_,a);
});})(mdims,adims,m__$1))
,m__$1);
} else {
if(((mdims === (2))) && ((adims === (2)))){
return cljs.core.mapv.call(null,((function (mdims,adims,m__$1){
return (function (r){
return cljs.core.vec.call(null,(function (){var iter__21537__auto__ = ((function (mdims,adims,m__$1){
return (function clojure$core$matrix$impl$persistent_vector$iter__40597(s__40598){
return (new cljs.core.LazySeq(null,((function (mdims,adims,m__$1){
return (function (){
var s__40598__$1 = s__40598;
while(true){
var temp__6753__auto__ = cljs.core.seq.call(null,s__40598__$1);
if(temp__6753__auto__){
var s__40598__$2 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__40598__$2)){
var c__21535__auto__ = cljs.core.chunk_first.call(null,s__40598__$2);
var size__21536__auto__ = cljs.core.count.call(null,c__21535__auto__);
var b__40600 = cljs.core.chunk_buffer.call(null,size__21536__auto__);
if((function (){var i__40599 = (0);
while(true){
if((i__40599 < size__21536__auto__)){
var j = cljs.core._nth.call(null,c__21535__auto__,i__40599);
cljs.core.chunk_append.call(null,b__40600,clojure.core.matrix.protocols.vector_dot.call(null,r,clojure.core.matrix.protocols.get_column.call(null,a,j)));

var G__40602 = (i__40599 + (1));
i__40599 = G__40602;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40600),clojure$core$matrix$impl$persistent_vector$iter__40597.call(null,cljs.core.chunk_rest.call(null,s__40598__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40600),null);
}
} else {
var j = cljs.core.first.call(null,s__40598__$2);
return cljs.core.cons.call(null,clojure.core.matrix.protocols.vector_dot.call(null,r,clojure.core.matrix.protocols.get_column.call(null,a,j)),clojure$core$matrix$impl$persistent_vector$iter__40597.call(null,cljs.core.rest.call(null,s__40598__$2)));
}
} else {
return null;
}
break;
}
});})(mdims,adims,m__$1))
,null,null));
});})(mdims,adims,m__$1))
;
return iter__21537__auto__.call(null,cljs.core.range.call(null,clojure.core.matrix.protocols.dimension_count.call(null,a,(1))));
})());
});})(mdims,adims,m__$1))
,m__$1);
} else {
return clojure.core.matrix.protocols.inner_product.call(null,m__$1,a);

}
}
}
}
}
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixProducts$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixProducts$inner_product$arity$2 = (function (m,a){
var m__$1 = this;
var adims = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,a));
var mdims = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,m__$1));
if(((0) === adims)){
return clojure.core.matrix.protocols.scale.call(null,m__$1,clojure.core.matrix.protocols.get_0d.call(null,a));
} else {
if(((1) === mdims)){
if(((1) === adims)){
return clojure.core.matrix.protocols.element_sum.call(null,clojure.core.matrix.protocols.element_multiply.call(null,m__$1,a));
} else {
return cljs.core.reduce.call(null,clojure.core.matrix.protocols.matrix_add,cljs.core.map.call(null,((function (adims,mdims,m__$1){
return (function (sl,x){
return clojure.core.matrix.protocols.scale.call(null,sl,x);
});})(adims,mdims,m__$1))
,clojure.core.matrix.protocols.get_major_slice_seq.call(null,a),clojure.core.matrix.protocols.get_major_slice_seq.call(null,m__$1)));
}
} else {
return cljs.core.mapv.call(null,((function (adims,mdims,m__$1){
return (function (p1__40603_SHARP_){
return clojure.core.matrix.protocols.inner_product.call(null,p1__40603_SHARP_,a);
});})(adims,mdims,m__$1))
,clojure.core.matrix.protocols.get_major_slice_seq.call(null,m__$1));

}
}
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixProducts$outer_product$arity$2 = (function (m,a){
var m__$1 = this;
return clojure.core.matrix.protocols.element_map.call(null,m__$1,((function (m__$1){
return (function (v){
return clojure.core.matrix.protocols.pre_scale.call(null,a,v);
});})(m__$1))
);
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PVectorTransform$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PVectorTransform$vector_transform$arity$2 = (function (m,a){
var m__$1 = this;
return clojure.core.matrix.protocols.matrix_multiply.call(null,m__$1,a);
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PVectorTransform$vector_transform_BANG_$arity$2 = (function (m,a){
var m__$1 = this;
return clojure.core.matrix.protocols.assign_BANG_.call(null,a,clojure.core.matrix.protocols.matrix_multiply.call(null,m__$1,a));
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixScaling$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixScaling$scale$arity$2 = (function (m,a){
var m__$1 = this;
return clojure.core.matrix.impl.common.mapmatrix.call(null,((function (m__$1){
return (function (p1__40604_SHARP_){
return (p1__40604_SHARP_ * a);
});})(m__$1))
,m__$1);
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixScaling$pre_scale$arity$2 = (function (m,a){
var m__$1 = this;
return clojure.core.matrix.impl.common.mapmatrix.call(null,((function (m__$1){
return (function (p1__40605_SHARP_){
return (a * p1__40605_SHARP_);
});})(m__$1))
,m__$1);
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PSquare$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PSquare$square$arity$1 = (function (m){
var m__$1 = this;
return clojure.core.matrix.impl.common.mapmatrix.call(null,cljs.core._STAR_,m__$1,m__$1);
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PRowOperations$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PRowOperations$swap_rows$arity$3 = (function (m,i,j){
var m__$1 = this;
var i__$1 = cljs.core.long$.call(null,i);
var j__$1 = cljs.core.long$.call(null,j);
if((i__$1 === j__$1)){
return m__$1;
} else {
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,m__$1,i__$1,m__$1.call(null,j__$1)),j__$1,m__$1.call(null,i__$1));
}
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PRowOperations$multiply_row$arity$3 = (function (m,i,factor){
var m__$1 = this;
return cljs.core.assoc.call(null,m__$1,i,clojure.core.matrix.protocols.scale.call(null,m__$1.call(null,i),factor));
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PRowOperations$add_row$arity$4 = (function (m,i,j,factor){
var m__$1 = this;
return cljs.core.assoc.call(null,m__$1,i,clojure.core.matrix.protocols.matrix_add.call(null,m__$1.call(null,i),clojure.core.matrix.protocols.matrix_multiply.call(null,m__$1.call(null,j),factor)));
});
clojure.core.matrix.impl.persistent_vector.build_maths_function = (function clojure$core$matrix$impl$persistent_vector$build_maths_function(p__40607){
var vec__40611 = p__40607;
var name = cljs.core.nth.call(null,vec__40611,(0),null);
var func = cljs.core.nth.call(null,vec__40611,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__21609__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21609__auto__);
})(),(function (){var x__21609__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m","m",-1021758608,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21609__auto__);
})(),(function (){var x__21609__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("clojure.core.matrix.impl.common","mapmatrix","clojure.core.matrix.impl.common/mapmatrix",1588740294,null)),(function (){var x__21609__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),(function (){var x__21609__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__40606__auto__","x__40606__auto__",-1281638500,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21609__auto__);
})(),(function (){var x__21609__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","double","cljs.core/double",-1119390159,null)),(function (){var x__21609__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__21609__auto__ = func;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21609__auto__);
})(),(function (){var x__21609__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","double","cljs.core/double",-1119390159,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__40606__auto__","x__40606__auto__",-1281638500,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21609__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21609__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21609__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21609__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m","m",-1021758608,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21609__auto__);
})())));
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PDimensionInfo$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PDimensionInfo$dimensionality$arity$1 = (function (m){
var m__$1 = this;
if(((0) === cljs.core.count.call(null,m__$1))){
return (1);
} else {
return (cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,cljs.core.nth.call(null,m__$1,(0)))) + (1));
}
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PDimensionInfo$is_vector_QMARK_$arity$1 = (function (m){
var m__$1 = this;
var pv__39778__auto__ = m__$1;
return (((0) === cljs.core.count.call(null,pv__39778__auto__))) || (((0) === cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,cljs.core.nth.call(null,pv__39778__auto__,(0))))));
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PDimensionInfo$is_scalar_QMARK_$arity$1 = (function (m){
var m__$1 = this;
return false;
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PDimensionInfo$get_shape$arity$1 = (function (m){
var m__$1 = this;
var c = cljs.core.count.call(null,m__$1);
return cljs.core.cons.call(null,c,(((c > (0)))?clojure.core.matrix.protocols.get_shape.call(null,cljs.core.nth.call(null,m__$1,(0))):null));
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PDimensionInfo$dimension_count$arity$2 = (function (m,x){
var m__$1 = this;
var x__$1 = cljs.core.long$.call(null,x);
if((x__$1 === (0))){
return cljs.core.count.call(null,m__$1);
} else {
return clojure.core.matrix.protocols.dimension_count.call(null,cljs.core.nth.call(null,m__$1,(0)),(x__$1 - (1)));
}
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PElementCount$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PElementCount$element_count$arity$1 = (function (m){
var m__$1 = this;
var c = cljs.core.long$.call(null,cljs.core.count.call(null,m__$1));
if((c === (0))){
return (0);
} else {
return (c * clojure.core.matrix.protocols.element_count.call(null,cljs.core.nth.call(null,m__$1,(0))));
}
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PConversion$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PConversion$convert_to_nested_vectors$arity$1 = (function (m){
var m__$1 = this;
if(cljs.core.truth_(clojure.core.matrix.impl.persistent_vector.is_nested_persistent_vectors_QMARK_.call(null,m__$1))){
return m__$1;
} else {
var m__$2 = clojure.core.matrix.impl.persistent_vector.mapv_identity_check.call(null,clojure.core.matrix.protocols.convert_to_nested_vectors,m__$1);
var m_shapes = cljs.core.map.call(null,clojure.core.matrix.protocols.get_shape,m__$2);
if(cljs.core.every_QMARK_.call(null,cljs.core.partial.call(null,cljs.core._EQ_,cljs.core.first.call(null,m_shapes)),cljs.core.rest.call(null,m_shapes))){
return m__$2;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Can't convert to persistent vector array: inconsistent shape.")].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
}
});
clojure.core.matrix.impl.persistent_vector.copy_to_double_array = (function clojure$core$matrix$impl$persistent_vector$copy_to_double_array(m,arr,off,size){
var ct = cljs.core.count.call(null,m);
if(!(cljs.core.vector_QMARK_.call(null,m))){
var vals__31431__auto___40616 = cljs.core.seq.call(null,clojure.core.matrix.protocols.element_seq.call(null,m));
var i_40617 = cljs.core.long$.call(null,(0));
while(true){
if(vals__31431__auto___40616){
var v_40618 = cljs.core.first.call(null,vals__31431__auto___40616);
(arr[(off + i_40617)] = v_40618);

var G__40619 = cljs.core.next.call(null,vals__31431__auto___40616);
var G__40620 = (i_40617 + (1));
vals__31431__auto___40616 = G__40619;
i_40617 = G__40620;
continue;
} else {
}
break;
}
} else {
if(((size === ct)) && (!(cljs.core.vector_QMARK_.call(null,cljs.core.nth.call(null,m,(0),null))))){
var n__21696__auto___40621 = size;
var i_40622 = (0);
while(true){
if((i_40622 < n__21696__auto___40621)){
(arr[(off + i_40622)] = cljs.core.nth.call(null,m,i_40622));

var G__40623 = (i_40622 + (1));
i_40622 = G__40623;
continue;
} else {
}
break;
}
} else {
var skip_40624 = cljs.core.quot.call(null,size,ct);
var n__21696__auto___40625 = ct;
var i_40626 = (0);
while(true){
if((i_40626 < n__21696__auto___40625)){
clojure.core.matrix.impl.persistent_vector.copy_to_double_array.call(null,cljs.core.nth.call(null,m,i_40626),arr,(off + (i_40626 * skip_40624)),skip_40624);

var G__40627 = (i_40626 + (1));
i_40626 = G__40627;
continue;
} else {
}
break;
}

}
}

return arr;
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PDoubleArrayOutput$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PDoubleArrayOutput$to_double_array$arity$1 = (function (m){
var m__$1 = this;
var size = cljs.core.long$.call(null,clojure.core.matrix.protocols.element_count.call(null,m__$1));
var arr = cljs.core.double_array.call(null,size);
var ct = cljs.core.count.call(null,m__$1);
clojure.core.matrix.impl.persistent_vector.copy_to_double_array.call(null,m__$1,arr,(0),size);

return arr;
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PDoubleArrayOutput$as_double_array$arity$1 = (function (m){
var m__$1 = this;
return null;
});
clojure.core.matrix.impl.persistent_vector.copy_to_object_array = (function clojure$core$matrix$impl$persistent_vector$copy_to_object_array(m,arr,off,size){
var ct = cljs.core.count.call(null,m);
if(!(cljs.core.vector_QMARK_.call(null,m))){
var vals__31431__auto___40628 = cljs.core.seq.call(null,clojure.core.matrix.protocols.element_seq.call(null,m));
var i_40629 = cljs.core.long$.call(null,(0));
while(true){
if(vals__31431__auto___40628){
var v_40630 = cljs.core.first.call(null,vals__31431__auto___40628);
(arr[(off + i_40629)] = v_40630);

var G__40631 = cljs.core.next.call(null,vals__31431__auto___40628);
var G__40632 = (i_40629 + (1));
vals__31431__auto___40628 = G__40631;
i_40629 = G__40632;
continue;
} else {
}
break;
}
} else {
if(((size === ct)) && (!(cljs.core.vector_QMARK_.call(null,cljs.core.nth.call(null,m,(0),null))))){
var n__21696__auto___40633 = size;
var i_40634 = (0);
while(true){
if((i_40634 < n__21696__auto___40633)){
(arr[(off + i_40634)] = cljs.core.nth.call(null,m,i_40634));

var G__40635 = (i_40634 + (1));
i_40634 = G__40635;
continue;
} else {
}
break;
}
} else {
var skip_40636 = cljs.core.quot.call(null,size,ct);
var n__21696__auto___40637 = ct;
var i_40638 = (0);
while(true){
if((i_40638 < n__21696__auto___40637)){
clojure.core.matrix.impl.persistent_vector.copy_to_object_array.call(null,cljs.core.nth.call(null,m,i_40638),arr,(off + (i_40638 * skip_40636)),skip_40636);

var G__40639 = (i_40638 + (1));
i_40638 = G__40639;
continue;
} else {
}
break;
}

}
}

return arr;
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PObjectArrayOutput$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PObjectArrayOutput$to_object_array$arity$1 = (function (m){
var m__$1 = this;
var size = cljs.core.long$.call(null,clojure.core.matrix.protocols.element_count.call(null,m__$1));
var arr = cljs.core.object_array.call(null,size);
var ct = cljs.core.count.call(null,m__$1);
clojure.core.matrix.impl.persistent_vector.copy_to_object_array.call(null,m__$1,arr,(0),size);

return arr;
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PObjectArrayOutput$as_object_array$arity$1 = (function (m){
var m__$1 = this;
return null;
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PFunctionalOperations$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PFunctionalOperations$element_seq$arity$1 = (function (m){
var m__$1 = this;
if(((0) === cljs.core.count.call(null,m__$1))){
return null;
} else {
if((cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,cljs.core.nth.call(null,m__$1,(0)))) >= (1))){
return cljs.core.mapcat.call(null,clojure.core.matrix.protocols.element_seq,m__$1);
} else {
return m__$1;

}
}
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PFunctionalOperations$element_map$arity$2 = (function (m,f){
var m__$1 = this;
return clojure.core.matrix.impl.common.mapmatrix.call(null,f,m__$1);
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PFunctionalOperations$element_map$arity$3 = (function (m,f,a){
var m__$1 = this;
var vec__40642 = clojure.core.matrix.protocols.broadcast_same_shape.call(null,m__$1,a);
var m__$2 = cljs.core.nth.call(null,vec__40642,(0),null);
var a__$1 = cljs.core.nth.call(null,vec__40642,(1),null);
return clojure.core.matrix.impl.common.mapmatrix.call(null,f,m__$2,a__$1);
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PFunctionalOperations$element_map$arity$4 = (function (m,f,a,more){
var m__$1 = this;
var arrays = cljs.core.cons.call(null,m__$1,cljs.core.cons.call(null,a,more));
var shapes = cljs.core.map.call(null,clojure.core.matrix.protocols.get_shape,arrays);
var sh = (function (){var or__20675__auto__ = clojure.core.matrix.protocols.common_shape.call(null,shapes);
if(cljs.core.truth_(or__20675__auto__)){
return or__20675__auto__;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Attempt to do element map with incompatible shapes: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.mapv.call(null,clojure.core.matrix.protocols.get_shape,arrays))].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
})();
var arrays__$1 = cljs.core.map.call(null,((function (arrays,shapes,sh,m__$1){
return (function (p1__40640_SHARP_){
return clojure.core.matrix.protocols.broadcast.call(null,p1__40640_SHARP_,sh);
});})(arrays,shapes,sh,m__$1))
,arrays);
return cljs.core.apply.call(null,clojure.core.matrix.impl.common.mapmatrix,f,arrays__$1);
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PFunctionalOperations$element_map_BANG_$arity$2 = (function (m,f){
var m__$1 = this;
var seq__40645_40649 = cljs.core.seq.call(null,m__$1);
var chunk__40646_40650 = null;
var count__40647_40651 = (0);
var i__40648_40652 = (0);
while(true){
if((i__40648_40652 < count__40647_40651)){
var s_40653 = cljs.core._nth.call(null,chunk__40646_40650,i__40648_40652);
clojure.core.matrix.protocols.element_map_BANG_.call(null,s_40653,f);

var G__40654 = seq__40645_40649;
var G__40655 = chunk__40646_40650;
var G__40656 = count__40647_40651;
var G__40657 = (i__40648_40652 + (1));
seq__40645_40649 = G__40654;
chunk__40646_40650 = G__40655;
count__40647_40651 = G__40656;
i__40648_40652 = G__40657;
continue;
} else {
var temp__6753__auto___40658 = cljs.core.seq.call(null,seq__40645_40649);
if(temp__6753__auto___40658){
var seq__40645_40659__$1 = temp__6753__auto___40658;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40645_40659__$1)){
var c__21586__auto___40660 = cljs.core.chunk_first.call(null,seq__40645_40659__$1);
var G__40661 = cljs.core.chunk_rest.call(null,seq__40645_40659__$1);
var G__40662 = c__21586__auto___40660;
var G__40663 = cljs.core.count.call(null,c__21586__auto___40660);
var G__40664 = (0);
seq__40645_40649 = G__40661;
chunk__40646_40650 = G__40662;
count__40647_40651 = G__40663;
i__40648_40652 = G__40664;
continue;
} else {
var s_40665 = cljs.core.first.call(null,seq__40645_40659__$1);
clojure.core.matrix.protocols.element_map_BANG_.call(null,s_40665,f);

var G__40666 = cljs.core.next.call(null,seq__40645_40659__$1);
var G__40667 = null;
var G__40668 = (0);
var G__40669 = (0);
seq__40645_40649 = G__40666;
chunk__40646_40650 = G__40667;
count__40647_40651 = G__40668;
i__40648_40652 = G__40669;
continue;
}
} else {
}
}
break;
}

return m__$1;
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PFunctionalOperations$element_map_BANG_$arity$3 = (function (m,f,a){
var m__$1 = this;
var n__21696__auto___40670 = cljs.core.count.call(null,m__$1);
var i_40671 = (0);
while(true){
if((i_40671 < n__21696__auto___40670)){
clojure.core.matrix.protocols.element_map_BANG_.call(null,m__$1.call(null,i_40671),f,clojure.core.matrix.protocols.get_major_slice.call(null,a,i_40671));

var G__40672 = (i_40671 + (1));
i_40671 = G__40672;
continue;
} else {
}
break;
}

return m__$1;
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PFunctionalOperations$element_map_BANG_$arity$4 = (function (m,f,a,more){
var m__$1 = this;
var n__21696__auto___40673 = cljs.core.count.call(null,m__$1);
var i_40674 = (0);
while(true){
if((i_40674 < n__21696__auto___40673)){
cljs.core.apply.call(null,clojure.core.matrix.protocols.element_map_BANG_,m__$1.call(null,i_40674),f,clojure.core.matrix.protocols.get_major_slice.call(null,a,i_40674),cljs.core.map.call(null,((function (i_40674,n__21696__auto___40673,m__$1){
return (function (p1__40641_SHARP_){
return clojure.core.matrix.protocols.get_major_slice.call(null,p1__40641_SHARP_,i_40674);
});})(i_40674,n__21696__auto___40673,m__$1))
,more));

var G__40675 = (i_40674 + (1));
i_40674 = G__40675;
continue;
} else {
}
break;
}

return m__$1;
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PFunctionalOperations$element_reduce$arity$2 = (function (m,f){
var m__$1 = this;
return cljs.core.reduce.call(null,f,clojure.core.matrix.protocols.element_seq.call(null,m__$1));
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PFunctionalOperations$element_reduce$arity$3 = (function (m,f,init){
var m__$1 = this;
return cljs.core.reduce.call(null,f,init,clojure.core.matrix.protocols.element_seq.call(null,m__$1));
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMapIndexed$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMapIndexed$element_map_indexed$arity$2 = (function (ms,f){
var ms__$1 = this;
var dims = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,ms__$1));
if(((0) === dims)){
return f.call(null,cljs.core.PersistentVector.EMPTY,(function (){var x__31472__auto__ = ms__$1;
if(typeof x__31472__auto__ === 'number'){
return x__31472__auto__;
} else {
return clojure.core.matrix.protocols.get_0d.call(null,x__31472__auto__);

}
})());
} else {
if(((1) === dims)){
return cljs.core.vec.call(null,(function (){var iter__21537__auto__ = ((function (dims,ms__$1){
return (function clojure$core$matrix$impl$persistent_vector$iter__40695(s__40696){
return (new cljs.core.LazySeq(null,((function (dims,ms__$1){
return (function (){
var s__40696__$1 = s__40696;
while(true){
var temp__6753__auto__ = cljs.core.seq.call(null,s__40696__$1);
if(temp__6753__auto__){
var s__40696__$2 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__40696__$2)){
var c__21535__auto__ = cljs.core.chunk_first.call(null,s__40696__$2);
var size__21536__auto__ = cljs.core.count.call(null,c__21535__auto__);
var b__40698 = cljs.core.chunk_buffer.call(null,size__21536__auto__);
if((function (){var i__40697 = (0);
while(true){
if((i__40697 < size__21536__auto__)){
var i = cljs.core._nth.call(null,c__21535__auto__,i__40697);
cljs.core.chunk_append.call(null,b__40698,f.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [i], null),cljs.core.nth.call(null,ms__$1,i)));

var G__40703 = (i__40697 + (1));
i__40697 = G__40703;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40698),clojure$core$matrix$impl$persistent_vector$iter__40695.call(null,cljs.core.chunk_rest.call(null,s__40696__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40698),null);
}
} else {
var i = cljs.core.first.call(null,s__40696__$2);
return cljs.core.cons.call(null,f.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [i], null),cljs.core.nth.call(null,ms__$1,i)),clojure$core$matrix$impl$persistent_vector$iter__40695.call(null,cljs.core.rest.call(null,s__40696__$2)));
}
} else {
return null;
}
break;
}
});})(dims,ms__$1))
,null,null));
});})(dims,ms__$1))
;
return iter__21537__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,ms__$1)));
})());
} else {
return cljs.core.vec.call(null,(function (){var iter__21537__auto__ = ((function (dims,ms__$1){
return (function clojure$core$matrix$impl$persistent_vector$iter__40699(s__40700){
return (new cljs.core.LazySeq(null,((function (dims,ms__$1){
return (function (){
var s__40700__$1 = s__40700;
while(true){
var temp__6753__auto__ = cljs.core.seq.call(null,s__40700__$1);
if(temp__6753__auto__){
var s__40700__$2 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__40700__$2)){
var c__21535__auto__ = cljs.core.chunk_first.call(null,s__40700__$2);
var size__21536__auto__ = cljs.core.count.call(null,c__21535__auto__);
var b__40702 = cljs.core.chunk_buffer.call(null,size__21536__auto__);
if((function (){var i__40701 = (0);
while(true){
if((i__40701 < size__21536__auto__)){
var i = cljs.core._nth.call(null,c__21535__auto__,i__40701);
cljs.core.chunk_append.call(null,b__40702,clojure.core.matrix.protocols.element_map_indexed.call(null,cljs.core.nth.call(null,ms__$1,i),((function (i__40701,i,c__21535__auto__,size__21536__auto__,b__40702,s__40700__$2,temp__6753__auto__,dims,ms__$1){
return (function (p1__40676_SHARP_,p2__40677_SHARP_){
return f.call(null,cljs.core.cons.call(null,i,p1__40676_SHARP_),p2__40677_SHARP_);
});})(i__40701,i,c__21535__auto__,size__21536__auto__,b__40702,s__40700__$2,temp__6753__auto__,dims,ms__$1))
));

var G__40704 = (i__40701 + (1));
i__40701 = G__40704;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40702),clojure$core$matrix$impl$persistent_vector$iter__40699.call(null,cljs.core.chunk_rest.call(null,s__40700__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40702),null);
}
} else {
var i = cljs.core.first.call(null,s__40700__$2);
return cljs.core.cons.call(null,clojure.core.matrix.protocols.element_map_indexed.call(null,cljs.core.nth.call(null,ms__$1,i),((function (i,s__40700__$2,temp__6753__auto__,dims,ms__$1){
return (function (p1__40676_SHARP_,p2__40677_SHARP_){
return f.call(null,cljs.core.cons.call(null,i,p1__40676_SHARP_),p2__40677_SHARP_);
});})(i,s__40700__$2,temp__6753__auto__,dims,ms__$1))
),clojure$core$matrix$impl$persistent_vector$iter__40699.call(null,cljs.core.rest.call(null,s__40700__$2)));
}
} else {
return null;
}
break;
}
});})(dims,ms__$1))
,null,null));
});})(dims,ms__$1))
;
return iter__21537__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,ms__$1)));
})());

}
}
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMapIndexed$element_map_indexed$arity$3 = (function (ms,f,as){
var ms__$1 = this;
var as__$1 = clojure.core.matrix.protocols.broadcast_like.call(null,ms__$1,as);
var dima = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,as__$1));
if(cljs.core.truth_(clojure.core.matrix.protocols.is_vector_QMARK_.call(null,ms__$1))){
if((dima > (1))){
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("mapping with array of higher dimensionality?")].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
}

if((((1) === dima)) && (cljs.core.not_EQ_.call(null,clojure.core.matrix.protocols.dimension_count.call(null,ms__$1,(0)),clojure.core.matrix.protocols.dimension_count.call(null,as__$1,(0))))){
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Incompatible vector sizes")].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
}

if(((0) === dima)){
var v = (function (){var x__31472__auto__ = as__$1;
if(typeof x__31472__auto__ === 'number'){
return x__31472__auto__;
} else {
return clojure.core.matrix.protocols.get_0d.call(null,x__31472__auto__);

}
})();
cljs.core.mapv.call(null,((function (v,as__$1,dima,ms__$1){
return (function (p1__40678_SHARP_,p2__40679_SHARP_){
return f.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__40678_SHARP_], null),p2__40679_SHARP_,v);
});})(v,as__$1,dima,ms__$1))
,cljs.core.range.call(null,cljs.core.count.call(null,ms__$1)));

return ms__$1;
} else {
return cljs.core.mapv.call(null,((function (as__$1,dima,ms__$1){
return (function() { 
var G__40705__delegate = function (p1__40680_SHARP_,rest__40681_SHARP_){
return cljs.core.apply.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__40680_SHARP_], null),rest__40681_SHARP_);
};
var G__40705 = function (p1__40680_SHARP_,var_args){
var rest__40681_SHARP_ = null;
if (arguments.length > 1) {
var G__40706__i = 0, G__40706__a = new Array(arguments.length -  1);
while (G__40706__i < G__40706__a.length) {G__40706__a[G__40706__i] = arguments[G__40706__i + 1]; ++G__40706__i;}
  rest__40681_SHARP_ = new cljs.core.IndexedSeq(G__40706__a,0);
} 
return G__40705__delegate.call(this,p1__40680_SHARP_,rest__40681_SHARP_);};
G__40705.cljs$lang$maxFixedArity = 1;
G__40705.cljs$lang$applyTo = (function (arglist__40707){
var p1__40680_SHARP_ = cljs.core.first(arglist__40707);
var rest__40681_SHARP_ = cljs.core.rest(arglist__40707);
return G__40705__delegate(p1__40680_SHARP_,rest__40681_SHARP_);
});
G__40705.cljs$core$IFn$_invoke$arity$variadic = G__40705__delegate;
return G__40705;
})()
;})(as__$1,dima,ms__$1))
,cljs.core.range.call(null,cljs.core.count.call(null,ms__$1)),ms__$1,clojure.core.matrix.protocols.element_seq.call(null,as__$1));
}
} else {
return cljs.core.mapv.call(null,((function (as__$1,dima,ms__$1){
return (function (i,m,a){
return clojure.core.matrix.protocols.element_map_indexed.call(null,m,((function (as__$1,dima,ms__$1){
return (function() { 
var G__40708__delegate = function (p1__40682_SHARP_,rest__40683_SHARP_){
return cljs.core.apply.call(null,f,cljs.core.cons.call(null,i,p1__40682_SHARP_),rest__40683_SHARP_);
};
var G__40708 = function (p1__40682_SHARP_,var_args){
var rest__40683_SHARP_ = null;
if (arguments.length > 1) {
var G__40709__i = 0, G__40709__a = new Array(arguments.length -  1);
while (G__40709__i < G__40709__a.length) {G__40709__a[G__40709__i] = arguments[G__40709__i + 1]; ++G__40709__i;}
  rest__40683_SHARP_ = new cljs.core.IndexedSeq(G__40709__a,0);
} 
return G__40708__delegate.call(this,p1__40682_SHARP_,rest__40683_SHARP_);};
G__40708.cljs$lang$maxFixedArity = 1;
G__40708.cljs$lang$applyTo = (function (arglist__40710){
var p1__40682_SHARP_ = cljs.core.first(arglist__40710);
var rest__40683_SHARP_ = cljs.core.rest(arglist__40710);
return G__40708__delegate(p1__40682_SHARP_,rest__40683_SHARP_);
});
G__40708.cljs$core$IFn$_invoke$arity$variadic = G__40708__delegate;
return G__40708;
})()
;})(as__$1,dima,ms__$1))
,a);
});})(as__$1,dima,ms__$1))
,cljs.core.range.call(null,cljs.core.count.call(null,ms__$1)),ms__$1,clojure.core.matrix.protocols.get_major_slice_seq.call(null,as__$1));
}
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMapIndexed$element_map_indexed$arity$4 = (function (ms,f,as,more){
var ms__$1 = this;
if(cljs.core.truth_(clojure.core.matrix.protocols.is_vector_QMARK_.call(null,ms__$1))){
return cljs.core.apply.call(null,cljs.core.mapv,((function (ms__$1){
return (function() { 
var G__40711__delegate = function (p1__40684_SHARP_,rest__40685_SHARP_){
return cljs.core.apply.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__40684_SHARP_], null),rest__40685_SHARP_);
};
var G__40711 = function (p1__40684_SHARP_,var_args){
var rest__40685_SHARP_ = null;
if (arguments.length > 1) {
var G__40712__i = 0, G__40712__a = new Array(arguments.length -  1);
while (G__40712__i < G__40712__a.length) {G__40712__a[G__40712__i] = arguments[G__40712__i + 1]; ++G__40712__i;}
  rest__40685_SHARP_ = new cljs.core.IndexedSeq(G__40712__a,0);
} 
return G__40711__delegate.call(this,p1__40684_SHARP_,rest__40685_SHARP_);};
G__40711.cljs$lang$maxFixedArity = 1;
G__40711.cljs$lang$applyTo = (function (arglist__40713){
var p1__40684_SHARP_ = cljs.core.first(arglist__40713);
var rest__40685_SHARP_ = cljs.core.rest(arglist__40713);
return G__40711__delegate(p1__40684_SHARP_,rest__40685_SHARP_);
});
G__40711.cljs$core$IFn$_invoke$arity$variadic = G__40711__delegate;
return G__40711;
})()
;})(ms__$1))
,cljs.core.range.call(null,cljs.core.count.call(null,ms__$1)),ms__$1,as,more);
} else {
return cljs.core.apply.call(null,cljs.core.mapv,((function (ms__$1){
return (function() { 
var G__40714__delegate = function (i,m,a,mr){
return clojure.core.matrix.protocols.element_map_indexed.call(null,m,((function (ms__$1){
return (function() { 
var G__40715__delegate = function (p1__40686_SHARP_,rest__40687_SHARP_){
return cljs.core.apply.call(null,f,cljs.core.cons.call(null,i,p1__40686_SHARP_),rest__40687_SHARP_);
};
var G__40715 = function (p1__40686_SHARP_,var_args){
var rest__40687_SHARP_ = null;
if (arguments.length > 1) {
var G__40716__i = 0, G__40716__a = new Array(arguments.length -  1);
while (G__40716__i < G__40716__a.length) {G__40716__a[G__40716__i] = arguments[G__40716__i + 1]; ++G__40716__i;}
  rest__40687_SHARP_ = new cljs.core.IndexedSeq(G__40716__a,0);
} 
return G__40715__delegate.call(this,p1__40686_SHARP_,rest__40687_SHARP_);};
G__40715.cljs$lang$maxFixedArity = 1;
G__40715.cljs$lang$applyTo = (function (arglist__40717){
var p1__40686_SHARP_ = cljs.core.first(arglist__40717);
var rest__40687_SHARP_ = cljs.core.rest(arglist__40717);
return G__40715__delegate(p1__40686_SHARP_,rest__40687_SHARP_);
});
G__40715.cljs$core$IFn$_invoke$arity$variadic = G__40715__delegate;
return G__40715;
})()
;})(ms__$1))
,a,mr);
};
var G__40714 = function (i,m,a,var_args){
var mr = null;
if (arguments.length > 3) {
var G__40718__i = 0, G__40718__a = new Array(arguments.length -  3);
while (G__40718__i < G__40718__a.length) {G__40718__a[G__40718__i] = arguments[G__40718__i + 3]; ++G__40718__i;}
  mr = new cljs.core.IndexedSeq(G__40718__a,0);
} 
return G__40714__delegate.call(this,i,m,a,mr);};
G__40714.cljs$lang$maxFixedArity = 3;
G__40714.cljs$lang$applyTo = (function (arglist__40719){
var i = cljs.core.first(arglist__40719);
arglist__40719 = cljs.core.next(arglist__40719);
var m = cljs.core.first(arglist__40719);
arglist__40719 = cljs.core.next(arglist__40719);
var a = cljs.core.first(arglist__40719);
var mr = cljs.core.rest(arglist__40719);
return G__40714__delegate(i,m,a,mr);
});
G__40714.cljs$core$IFn$_invoke$arity$variadic = G__40714__delegate;
return G__40714;
})()
;})(ms__$1))
,cljs.core.range.call(null,cljs.core.count.call(null,ms__$1)),ms__$1,as,more);
}
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMapIndexed$element_map_indexed_BANG_$arity$2 = (function (m,f){
var m__$1 = this;
var n__21696__auto___40720 = cljs.core.count.call(null,m__$1);
var i_40721 = (0);
while(true){
if((i_40721 < n__21696__auto___40720)){
clojure.core.matrix.protocols.element_map_indexed_BANG_.call(null,m__$1.call(null,i_40721),((function (i_40721,n__21696__auto___40720,m__$1){
return (function (p1__40688_SHARP_,p2__40689_SHARP_){
return f.call(null,cljs.core.cons.call(null,i_40721,p1__40688_SHARP_),p2__40689_SHARP_);
});})(i_40721,n__21696__auto___40720,m__$1))
);

var G__40722 = (i_40721 + (1));
i_40721 = G__40722;
continue;
} else {
}
break;
}

return m__$1;
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMapIndexed$element_map_indexed_BANG_$arity$3 = (function (m,f,a){
var m__$1 = this;
var n__21696__auto___40723 = cljs.core.count.call(null,m__$1);
var i_40724 = (0);
while(true){
if((i_40724 < n__21696__auto___40723)){
clojure.core.matrix.protocols.element_map_indexed_BANG_.call(null,m__$1.call(null,i_40724),((function (i_40724,n__21696__auto___40723,m__$1){
return (function() { 
var G__40725__delegate = function (p1__40690_SHARP_,rest__40691_SHARP_){
return cljs.core.apply.call(null,f,cljs.core.cons.call(null,i_40724,p1__40690_SHARP_),rest__40691_SHARP_);
};
var G__40725 = function (p1__40690_SHARP_,var_args){
var rest__40691_SHARP_ = null;
if (arguments.length > 1) {
var G__40726__i = 0, G__40726__a = new Array(arguments.length -  1);
while (G__40726__i < G__40726__a.length) {G__40726__a[G__40726__i] = arguments[G__40726__i + 1]; ++G__40726__i;}
  rest__40691_SHARP_ = new cljs.core.IndexedSeq(G__40726__a,0);
} 
return G__40725__delegate.call(this,p1__40690_SHARP_,rest__40691_SHARP_);};
G__40725.cljs$lang$maxFixedArity = 1;
G__40725.cljs$lang$applyTo = (function (arglist__40727){
var p1__40690_SHARP_ = cljs.core.first(arglist__40727);
var rest__40691_SHARP_ = cljs.core.rest(arglist__40727);
return G__40725__delegate(p1__40690_SHARP_,rest__40691_SHARP_);
});
G__40725.cljs$core$IFn$_invoke$arity$variadic = G__40725__delegate;
return G__40725;
})()
;})(i_40724,n__21696__auto___40723,m__$1))
,clojure.core.matrix.protocols.get_major_slice.call(null,a,i_40724));

var G__40728 = (i_40724 + (1));
i_40724 = G__40728;
continue;
} else {
}
break;
}

return m__$1;
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMapIndexed$element_map_indexed_BANG_$arity$4 = (function (m,f,a,more){
var m__$1 = this;
var n__21696__auto___40729 = cljs.core.count.call(null,m__$1);
var i_40730 = (0);
while(true){
if((i_40730 < n__21696__auto___40729)){
cljs.core.apply.call(null,clojure.core.matrix.protocols.element_map_indexed_BANG_,m__$1.call(null,i_40730),((function (i_40730,n__21696__auto___40729,m__$1){
return (function() { 
var G__40731__delegate = function (p1__40692_SHARP_,rest__40693_SHARP_){
return cljs.core.apply.call(null,f,cljs.core.cons.call(null,i_40730,p1__40692_SHARP_),rest__40693_SHARP_);
};
var G__40731 = function (p1__40692_SHARP_,var_args){
var rest__40693_SHARP_ = null;
if (arguments.length > 1) {
var G__40732__i = 0, G__40732__a = new Array(arguments.length -  1);
while (G__40732__i < G__40732__a.length) {G__40732__a[G__40732__i] = arguments[G__40732__i + 1]; ++G__40732__i;}
  rest__40693_SHARP_ = new cljs.core.IndexedSeq(G__40732__a,0);
} 
return G__40731__delegate.call(this,p1__40692_SHARP_,rest__40693_SHARP_);};
G__40731.cljs$lang$maxFixedArity = 1;
G__40731.cljs$lang$applyTo = (function (arglist__40733){
var p1__40692_SHARP_ = cljs.core.first(arglist__40733);
var rest__40693_SHARP_ = cljs.core.rest(arglist__40733);
return G__40731__delegate(p1__40692_SHARP_,rest__40693_SHARP_);
});
G__40731.cljs$core$IFn$_invoke$arity$variadic = G__40731__delegate;
return G__40731;
})()
;})(i_40730,n__21696__auto___40729,m__$1))
,clojure.core.matrix.protocols.get_major_slice.call(null,a,i_40730),cljs.core.map.call(null,((function (i_40730,n__21696__auto___40729,m__$1){
return (function (p1__40694_SHARP_){
return clojure.core.matrix.protocols.get_major_slice.call(null,p1__40694_SHARP_,i_40730);
});})(i_40730,n__21696__auto___40729,m__$1))
,more));

var G__40734 = (i_40730 + (1));
i_40730 = G__40734;
continue;
} else {
}
break;
}

return m__$1;
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PSelect$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PSelect$select$arity$2 = (function (a,args){
var a__$1 = this;
if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,args))){
if(cljs.core._EQ_.call(null,(1),clojure.core.matrix.protocols.dimensionality.call(null,a__$1))){
return cljs.core.apply.call(null,cljs.core.vector,cljs.core.mapv.call(null,((function (a__$1){
return (function (p1__40735_SHARP_){
return cljs.core.nth.call(null,a__$1,p1__40735_SHARP_);
});})(a__$1))
,cljs.core.first.call(null,args)));
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Array dimension does not match length of args")].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
} else {
return cljs.core.apply.call(null,cljs.core.vector,cljs.core.mapv.call(null,((function (a__$1){
return (function (p1__40736_SHARP_){
return clojure.core.matrix.protocols.select.call(null,cljs.core.nth.call(null,a__$1,p1__40736_SHARP_),cljs.core.next.call(null,args));
});})(a__$1))
,cljs.core.first.call(null,args)));
}
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PIndexImplementation$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PIndexImplementation$index_QMARK_$arity$1 = (function (m){
var m__$1 = this;
return true;
});
clojure.core.matrix.implementations.register_implementation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null));

//# sourceMappingURL=persistent_vector.js.map