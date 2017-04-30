// Compiled by ClojureScript 1.9.521 {}
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
var G__41513 = (i + (1));
var G__41514 = (((x === y))?v__$1:cljs.core.assoc.call(null,v__$1,i,y));
i = G__41513;
v__$1 = G__41514;
continue;
} else {
return v__$1;
}
break;
}
});
clojure.core.matrix.impl.persistent_vector.check_vector_shape = (function clojure$core$matrix$impl$persistent_vector$check_vector_shape(v,shape){
var and__27310__auto__ = (v instanceof cljs.core.PersistentVector);
if(and__27310__auto__){
var and__27310__auto____$1 = (cljs.core.count.call(null,v) === cljs.core.long$.call(null,cljs.core.first.call(null,shape)));
if(and__27310__auto____$1){
var temp__6751__auto__ = cljs.core.next.call(null,shape);
if(temp__6751__auto__){
var ns = temp__6751__auto__;
return cljs.core.every_QMARK_.call(null,((function (ns,temp__6751__auto__,and__27310__auto____$1,and__27310__auto__){
return (function (p1__41517_SHARP_){
return clojure.core.matrix.impl.persistent_vector.check_vector_shape.call(null,p1__41517_SHARP_,ns);
});})(ns,temp__6751__auto__,and__27310__auto____$1,and__27310__auto__))
,v);
} else {
return cljs.core.every_QMARK_.call(null,((function (temp__6751__auto__,and__27310__auto____$1,and__27310__auto__){
return (function (p1__41518_SHARP_){
return !((p1__41518_SHARP_ instanceof cljs.core.PersistentVector));
});})(temp__6751__auto__,and__27310__auto____$1,and__27310__auto__))
,v);
}
} else {
return and__27310__auto____$1;
}
} else {
return and__27310__auto__;
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
var and__27310__auto__ = cljs.core.every_QMARK_.call(null,clojure.core.matrix.impl.persistent_vector.is_nested_persistent_vectors_QMARK_,x);
if(and__27310__auto__){
return clojure.core.matrix.impl.persistent_vector.check_vector_shape.call(null,x,clojure.core.matrix.protocols.get_shape.call(null,x));
} else {
return and__27310__auto__;
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
var x__30225__auto__ = r;
if(typeof x__30225__auto__ === 'number'){
return x__30225__auto__;
} else {
return clojure.core.matrix.protocols.get_0d.call(null,x__30225__auto__);

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
return (function (p1__41635_SHARP_){
return clojure.core.matrix.protocols.get_slice.call(null,p1__41635_SHARP_,sd,i);
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
return cljs.core.vec.call(null,(function (){var iter__28184__auto__ = ((function (m__$1){
return (function clojure$core$matrix$impl$persistent_vector$iter__41663(s__41664){
return (new cljs.core.LazySeq(null,((function (m__$1){
return (function (){
var s__41664__$1 = s__41664;
while(true){
var temp__6753__auto__ = cljs.core.seq.call(null,s__41664__$1);
if(temp__6753__auto__){
var s__41664__$2 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__41664__$2)){
var c__28182__auto__ = cljs.core.chunk_first.call(null,s__41664__$2);
var size__28183__auto__ = cljs.core.count.call(null,c__28182__auto__);
var b__41666 = cljs.core.chunk_buffer.call(null,size__28183__auto__);
if((function (){var i__41665 = (0);
while(true){
if((i__41665 < size__28183__auto__)){
var j = cljs.core._nth.call(null,c__28182__auto__,i__41665);
cljs.core.chunk_append.call(null,b__41666,cljs.core.mapv.call(null,((function (i__41665,j,c__28182__auto__,size__28183__auto__,b__41666,s__41664__$2,temp__6753__auto__,m__$1){
return (function (p1__41662_SHARP_){
return clojure.core.matrix.protocols.get_1d.call(null,p1__41662_SHARP_,j);
});})(i__41665,j,c__28182__auto__,size__28183__auto__,b__41666,s__41664__$2,temp__6753__auto__,m__$1))
,m__$1));

var G__41678 = (i__41665 + (1));
i__41665 = G__41678;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41666),clojure$core$matrix$impl$persistent_vector$iter__41663.call(null,cljs.core.chunk_rest.call(null,s__41664__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41666),null);
}
} else {
var j = cljs.core.first.call(null,s__41664__$2);
return cljs.core.cons.call(null,cljs.core.mapv.call(null,((function (j,s__41664__$2,temp__6753__auto__,m__$1){
return (function (p1__41662_SHARP_){
return clojure.core.matrix.protocols.get_1d.call(null,p1__41662_SHARP_,j);
});})(j,s__41664__$2,temp__6753__auto__,m__$1))
,m__$1),clojure$core$matrix$impl$persistent_vector$iter__41663.call(null,cljs.core.rest.call(null,s__41664__$2)));
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
return iter__28184__auto__.call(null,cljs.core.range.call(null,clojure.core.matrix.protocols.dimension_count.call(null,m__$1,(1))));
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
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PTransposeDims$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PTransposeDims$transpose_dims$arity$2 = (function (m,ordering){
var m__$1 = this;
var temp__6751__auto__ = cljs.core.seq.call(null,ordering);
if(temp__6751__auto__){
var ordering__$1 = temp__6751__auto__;
var dim = cljs.core.long$.call(null,cljs.core.first.call(null,ordering__$1));
var next_ordering = cljs.core.map.call(null,((function (dim,ordering__$1,temp__6751__auto__,m__$1){
return (function (i){
if((i < dim)){
return i;
} else {
return (i - (1));
}
});})(dim,ordering__$1,temp__6751__auto__,m__$1))
,cljs.core.next.call(null,ordering__$1));
var slice_range = cljs.core.range.call(null,clojure.core.matrix.protocols.dimension_count.call(null,m__$1,dim));
return cljs.core.mapv.call(null,((function (dim,next_ordering,slice_range,ordering__$1,temp__6751__auto__,m__$1){
return (function (si){
return clojure.core.matrix.protocols.transpose_dims.call(null,clojure.core.matrix.protocols.get_slice.call(null,m__$1,dim,si),next_ordering);
});})(dim,next_ordering,slice_range,ordering__$1,temp__6751__auto__,m__$1))
,slice_range);
} else {
return m__$1;
}
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$POrder$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$POrder$order$arity$2 = (function (m,indices){
var m__$1 = this;
return cljs.core.mapv.call(null,((function (m__$1){
return (function (p1__41693_SHARP_){
return cljs.core.nth.call(null,m__$1,p1__41693_SHARP_);
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
return (function (p1__41694_SHARP_){
return clojure.core.matrix.protocols.order.call(null,p1__41694_SHARP_,(dimension__$1 - (1)),indices);
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
var vec__41699 = clojure.core.matrix.protocols.broadcast_compatible.call(null,m__$1,a);
var m__$2 = cljs.core.nth.call(null,vec__41699,(0),null);
var a__$1 = cljs.core.nth.call(null,vec__41699,(1),null);
return clojure.core.matrix.impl.common.mapmatrix.call(null,cljs.core._PLUS_,m__$2,clojure.core.matrix.impl.persistent_vector.persistent_vector_coerce.call(null,a__$1));
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixAdd$matrix_sub$arity$2 = (function (m,a){
var m__$1 = this;
var vec__41703 = clojure.core.matrix.protocols.broadcast_compatible.call(null,m__$1,a);
var m__$2 = cljs.core.nth.call(null,vec__41703,(0),null);
var a__$1 = cljs.core.nth.call(null,vec__41703,(1),null);
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
var G__41741 = (i + (1));
var G__41742 = (res + (cljs.core.nth.call(null,a__$1,(i | (0))) * b__$1.get((i | (0)))));
i = G__41741;
res = G__41742;
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
var G__41768 = (i + (1));
var G__41769 = (res + (cljs.core.nth.call(null,a__$1,(i | (0))) * cljs.core.nth.call(null,b,i)));
i = G__41768;
res = G__41769;
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
if(typeof cljs.core.first.call(null,a__$1) === 'number'){
var n = cljs.core.long$.call(null,cljs.core.count.call(null,a__$1));
var i = (0);
var res = 0.0;
while(true){
if((i < n)){
var x = cljs.core.nth.call(null,a__$1,i);
var G__41800 = (i + (1));
var G__41801 = (res + (x * x));
i = G__41800;
res = G__41801;
continue;
} else {
return Math.sqrt(res);
}
break;
}
} else {
return Math.sqrt(clojure.core.matrix.protocols.length_squared.call(null,a__$1));
}
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PVectorOps$length_squared$arity$1 = (function (a){
var a__$1 = this;
if(typeof cljs.core.first.call(null,a__$1) === 'number'){
var n = cljs.core.long$.call(null,cljs.core.count.call(null,a__$1));
var i = (0);
var res = 0.0;
while(true){
if((i < n)){
var x = cljs.core.nth.call(null,a__$1,i);
var G__41811 = (i + (1));
var G__41812 = (res + (x * x));
i = G__41811;
res = G__41812;
continue;
} else {
return res;
}
break;
}
} else {
return clojure.core.matrix.protocols.element_reduce.call(null,a__$1,((function (a__$1){
return (function (r,x){
return (r + (x * x));
});})(a__$1))
,0.0);
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
var acount = cljs.core.long$.call(null,cljs.core.count.call(null,a__$1));
if((bdims <= (0))){
return false;
} else {
if(cljs.core.not_EQ_.call(null,acount,clojure.core.matrix.protocols.dimension_count.call(null,b,(0)))){
return false;
} else {
if(((1) === bdims)){
var and__27310__auto__ = ((1) === cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,a__$1)));
if(and__27310__auto__){
var i = (0);
while(true){
if((i < acount)){
if((clojure.core.matrix.protocols.get_1d.call(null,a__$1,i) === clojure.core.matrix.protocols.get_1d.call(null,b,i))){
var G__41873 = (i + (1));
i = G__41873;
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
return and__27310__auto__;
}
} else {
if(cljs.core.vector_QMARK_.call(null,b)){
var n = acount;
var i = (0);
while(true){
if((i < n)){
if(cljs.core.truth_(clojure.core.matrix.protocols.matrix_equals.call(null,a__$1.call(null,i),b.call(null,i)))){
var G__41874 = (i + (1));
i = G__41874;
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
var G__41877 = cljs.core.next.call(null,sa);
var G__41878 = cljs.core.next.call(null,sb);
sa = G__41877;
sb = G__41878;
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
var vec__41883 = clojure.core.matrix.protocols.broadcast_compatible.call(null,m__$1,a);
var m__$2 = cljs.core.nth.call(null,vec__41883,(0),null);
var a__$1 = cljs.core.nth.call(null,vec__41883,(1),null);
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
return cljs.core.vec.call(null,(function (){var iter__28184__auto__ = ((function (mdims,adims,m__$1){
return (function clojure$core$matrix$impl$persistent_vector$iter__41888(s__41889){
return (new cljs.core.LazySeq(null,((function (mdims,adims,m__$1){
return (function (){
var s__41889__$1 = s__41889;
while(true){
var temp__6753__auto__ = cljs.core.seq.call(null,s__41889__$1);
if(temp__6753__auto__){
var s__41889__$2 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__41889__$2)){
var c__28182__auto__ = cljs.core.chunk_first.call(null,s__41889__$2);
var size__28183__auto__ = cljs.core.count.call(null,c__28182__auto__);
var b__41891 = cljs.core.chunk_buffer.call(null,size__28183__auto__);
if((function (){var i__41890 = (0);
while(true){
if((i__41890 < size__28183__auto__)){
var i = cljs.core._nth.call(null,c__28182__auto__,i__41890);
cljs.core.chunk_append.call(null,b__41891,(function (){var r = clojure.core.matrix.protocols.get_column.call(null,a,i);
return clojure.core.matrix.protocols.vector_dot.call(null,m__$1,r);
})());

var G__41926 = (i__41890 + (1));
i__41890 = G__41926;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41891),clojure$core$matrix$impl$persistent_vector$iter__41888.call(null,cljs.core.chunk_rest.call(null,s__41889__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41891),null);
}
} else {
var i = cljs.core.first.call(null,s__41889__$2);
return cljs.core.cons.call(null,(function (){var r = clojure.core.matrix.protocols.get_column.call(null,a,i);
return clojure.core.matrix.protocols.vector_dot.call(null,m__$1,r);
})(),clojure$core$matrix$impl$persistent_vector$iter__41888.call(null,cljs.core.rest.call(null,s__41889__$2)));
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
return iter__28184__auto__.call(null,cljs.core.range.call(null,clojure.core.matrix.protocols.dimension_count.call(null,a,(1))));
})());
} else {
if(((mdims === (1))) && ((adims === (1)))){
return clojure.core.matrix.protocols.vector_dot.call(null,m__$1,a);
} else {
if(((mdims === (2))) && ((adims === (1)))){
return cljs.core.mapv.call(null,((function (mdims,adims,m__$1){
return (function (p1__41880_SHARP_){
return clojure.core.matrix.protocols.vector_dot.call(null,p1__41880_SHARP_,a);
});})(mdims,adims,m__$1))
,m__$1);
} else {
if(((mdims === (2))) && ((adims === (2)))){
return cljs.core.mapv.call(null,((function (mdims,adims,m__$1){
return (function (r){
return cljs.core.vec.call(null,(function (){var iter__28184__auto__ = ((function (mdims,adims,m__$1){
return (function clojure$core$matrix$impl$persistent_vector$iter__41911(s__41912){
return (new cljs.core.LazySeq(null,((function (mdims,adims,m__$1){
return (function (){
var s__41912__$1 = s__41912;
while(true){
var temp__6753__auto__ = cljs.core.seq.call(null,s__41912__$1);
if(temp__6753__auto__){
var s__41912__$2 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__41912__$2)){
var c__28182__auto__ = cljs.core.chunk_first.call(null,s__41912__$2);
var size__28183__auto__ = cljs.core.count.call(null,c__28182__auto__);
var b__41914 = cljs.core.chunk_buffer.call(null,size__28183__auto__);
if((function (){var i__41913 = (0);
while(true){
if((i__41913 < size__28183__auto__)){
var j = cljs.core._nth.call(null,c__28182__auto__,i__41913);
cljs.core.chunk_append.call(null,b__41914,clojure.core.matrix.protocols.vector_dot.call(null,r,clojure.core.matrix.protocols.get_column.call(null,a,j)));

var G__41947 = (i__41913 + (1));
i__41913 = G__41947;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41914),clojure$core$matrix$impl$persistent_vector$iter__41911.call(null,cljs.core.chunk_rest.call(null,s__41912__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41914),null);
}
} else {
var j = cljs.core.first.call(null,s__41912__$2);
return cljs.core.cons.call(null,clojure.core.matrix.protocols.vector_dot.call(null,r,clojure.core.matrix.protocols.get_column.call(null,a,j)),clojure$core$matrix$impl$persistent_vector$iter__41911.call(null,cljs.core.rest.call(null,s__41912__$2)));
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
return iter__28184__auto__.call(null,cljs.core.range.call(null,clojure.core.matrix.protocols.dimension_count.call(null,a,(1))));
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
if(!((cljs.core.long$.call(null,cljs.core.last.call(null,clojure.core.matrix.protocols.get_shape.call(null,m__$1))) === cljs.core.long$.call(null,cljs.core.first.call(null,clojure.core.matrix.protocols.get_shape.call(null,a)))))){
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Incompatible shapes for inner product: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.core.matrix.protocols.get_shape.call(null,m__$1)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" and "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.core.matrix.protocols.get_shape.call(null,a))].join(''),cljs.core.PersistentArrayMap.EMPTY);
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
return (function (p1__41951_SHARP_){
return clojure.core.matrix.protocols.inner_product.call(null,p1__41951_SHARP_,a);
});})(adims,mdims,m__$1))
,clojure.core.matrix.protocols.get_major_slice_seq.call(null,m__$1));

}
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
return (function (p1__41972_SHARP_){
return (p1__41972_SHARP_ * a);
});})(m__$1))
,m__$1);
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixScaling$pre_scale$arity$2 = (function (m,a){
var m__$1 = this;
return clojure.core.matrix.impl.common.mapmatrix.call(null,((function (m__$1){
return (function (p1__41973_SHARP_){
return (a * p1__41973_SHARP_);
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
clojure.core.matrix.impl.persistent_vector.build_maths_function = (function clojure$core$matrix$impl$persistent_vector$build_maths_function(p__41994){
var vec__42073 = p__41994;
var name = cljs.core.nth.call(null,vec__42073,(0),null);
var func = cljs.core.nth.call(null,vec__42073,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28256__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28256__auto__);
})(),(function (){var x__28256__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m","m",-1021758608,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28256__auto__);
})(),(function (){var x__28256__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("clojure.core.matrix.impl.common","mapmatrix","clojure.core.matrix.impl.common/mapmatrix",1588740294,null)),(function (){var x__28256__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),(function (){var x__28256__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__41993__auto__","x__41993__auto__",1714570455,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28256__auto__);
})(),(function (){var x__28256__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","double","cljs.core/double",-1119390159,null)),(function (){var x__28256__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28256__auto__ = func;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28256__auto__);
})(),(function (){var x__28256__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","double","cljs.core/double",-1119390159,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__41993__auto__","x__41993__auto__",1714570455,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28256__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28256__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28256__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28256__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m","m",-1021758608,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28256__auto__);
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
var pv__39457__auto__ = m__$1;
return (((0) === cljs.core.count.call(null,pv__39457__auto__))) || (((0) === cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,cljs.core.nth.call(null,pv__39457__auto__,(0))))));
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
/**
 * Copy an arbitrary array to a region of a double array.
 * Assumes size represents the element count of the array, must be greater than zero.
 */
clojure.core.matrix.impl.persistent_vector.copy_to_double_array_BANG_ = (function clojure$core$matrix$impl$persistent_vector$copy_to_double_array_BANG_(m,arr,off,size){
if(typeof m === 'number'){
return (arr[off] = m);
} else {
if(cljs.core.vector_QMARK_.call(null,m)){
var ct = cljs.core.count.call(null,m);
var skip = cljs.core.quot.call(null,size,ct);
var n__28343__auto__ = ct;
var i = (0);
while(true){
if((i < n__28343__auto__)){
clojure.core.matrix.impl.persistent_vector.copy_to_double_array_BANG_.call(null,cljs.core.nth.call(null,m,i),arr,(off + (i * skip)),skip);

var G__42262 = (i + (1));
i = G__42262;
continue;
} else {
return null;
}
break;
}
} else {
var vals__30181__auto__ = cljs.core.seq.call(null,clojure.core.matrix.protocols.element_seq.call(null,m));
var i = cljs.core.long$.call(null,(0));
while(true){
if(vals__30181__auto__){
var v = cljs.core.first.call(null,vals__30181__auto__);
(arr[(off + i)] = v);

var G__42266 = cljs.core.next.call(null,vals__30181__auto__);
var G__42267 = (i + (1));
vals__30181__auto__ = G__42266;
i = G__42267;
continue;
} else {
return null;
}
break;
}

}
}
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PDoubleArrayOutput$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PDoubleArrayOutput$to_double_array$arity$1 = (function (m){
var m__$1 = this;
var size = cljs.core.long$.call(null,clojure.core.matrix.protocols.element_count.call(null,m__$1));
var arr = cljs.core.double_array.call(null,size);
var ct = cljs.core.count.call(null,m__$1);
if((size > (0))){
clojure.core.matrix.impl.persistent_vector.copy_to_double_array_BANG_.call(null,m__$1,arr,(0),size);
} else {
}

return arr;
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PDoubleArrayOutput$as_double_array$arity$1 = (function (m){
var m__$1 = this;
return null;
});
clojure.core.matrix.impl.persistent_vector.copy_to_object_array = (function clojure$core$matrix$impl$persistent_vector$copy_to_object_array(m,arr,off,size){
var ct = cljs.core.count.call(null,m);
if(!(cljs.core.vector_QMARK_.call(null,m))){
var vals__30181__auto___42336 = cljs.core.seq.call(null,clojure.core.matrix.protocols.element_seq.call(null,m));
var i_42337 = cljs.core.long$.call(null,(0));
while(true){
if(vals__30181__auto___42336){
var v_42339 = cljs.core.first.call(null,vals__30181__auto___42336);
(arr[(off + i_42337)] = v_42339);

var G__42347 = cljs.core.next.call(null,vals__30181__auto___42336);
var G__42348 = (i_42337 + (1));
vals__30181__auto___42336 = G__42347;
i_42337 = G__42348;
continue;
} else {
}
break;
}
} else {
if(((size === ct)) && (!(cljs.core.vector_QMARK_.call(null,cljs.core.nth.call(null,m,(0),null))))){
var n__28343__auto___42360 = size;
var i_42367 = (0);
while(true){
if((i_42367 < n__28343__auto___42360)){
(arr[(off + i_42367)] = cljs.core.nth.call(null,m,i_42367));

var G__42375 = (i_42367 + (1));
i_42367 = G__42375;
continue;
} else {
}
break;
}
} else {
var skip_42376 = cljs.core.quot.call(null,size,ct);
var n__28343__auto___42378 = ct;
var i_42385 = (0);
while(true){
if((i_42385 < n__28343__auto___42378)){
clojure.core.matrix.impl.persistent_vector.copy_to_object_array.call(null,cljs.core.nth.call(null,m,i_42385),arr,(off + (i_42385 * skip_42376)),skip_42376);

var G__42396 = (i_42385 + (1));
i_42385 = G__42396;
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
var vec__42445 = clojure.core.matrix.protocols.broadcast_same_shape.call(null,m__$1,a);
var m__$2 = cljs.core.nth.call(null,vec__42445,(0),null);
var a__$1 = cljs.core.nth.call(null,vec__42445,(1),null);
return clojure.core.matrix.impl.common.mapmatrix.call(null,f,m__$2,a__$1);
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PFunctionalOperations$element_map$arity$4 = (function (m,f,a,more){
var m__$1 = this;
var arrays = cljs.core.cons.call(null,m__$1,cljs.core.cons.call(null,a,more));
var shapes = cljs.core.map.call(null,clojure.core.matrix.protocols.get_shape,arrays);
var sh = (function (){var or__27322__auto__ = clojure.core.matrix.protocols.common_shape.call(null,shapes);
if(cljs.core.truth_(or__27322__auto__)){
return or__27322__auto__;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Attempt to do element map with incompatible shapes: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.mapv.call(null,clojure.core.matrix.protocols.get_shape,arrays))].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
})();
var arrays__$1 = cljs.core.map.call(null,((function (arrays,shapes,sh,m__$1){
return (function (p1__42439_SHARP_){
return clojure.core.matrix.protocols.broadcast.call(null,p1__42439_SHARP_,sh);
});})(arrays,shapes,sh,m__$1))
,arrays);
return cljs.core.apply.call(null,clojure.core.matrix.impl.common.mapmatrix,f,arrays__$1);
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PFunctionalOperations$element_map_BANG_$arity$2 = (function (m,f){
var m__$1 = this;
var seq__42456_42518 = cljs.core.seq.call(null,m__$1);
var chunk__42457_42520 = null;
var count__42458_42521 = (0);
var i__42459_42522 = (0);
while(true){
if((i__42459_42522 < count__42458_42521)){
var s_42531 = cljs.core._nth.call(null,chunk__42457_42520,i__42459_42522);
clojure.core.matrix.protocols.element_map_BANG_.call(null,s_42531,f);

var G__42532 = seq__42456_42518;
var G__42533 = chunk__42457_42520;
var G__42534 = count__42458_42521;
var G__42535 = (i__42459_42522 + (1));
seq__42456_42518 = G__42532;
chunk__42457_42520 = G__42533;
count__42458_42521 = G__42534;
i__42459_42522 = G__42535;
continue;
} else {
var temp__6753__auto___42544 = cljs.core.seq.call(null,seq__42456_42518);
if(temp__6753__auto___42544){
var seq__42456_42546__$1 = temp__6753__auto___42544;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42456_42546__$1)){
var c__28233__auto___42549 = cljs.core.chunk_first.call(null,seq__42456_42546__$1);
var G__42554 = cljs.core.chunk_rest.call(null,seq__42456_42546__$1);
var G__42555 = c__28233__auto___42549;
var G__42556 = cljs.core.count.call(null,c__28233__auto___42549);
var G__42557 = (0);
seq__42456_42518 = G__42554;
chunk__42457_42520 = G__42555;
count__42458_42521 = G__42556;
i__42459_42522 = G__42557;
continue;
} else {
var s_42564 = cljs.core.first.call(null,seq__42456_42546__$1);
clojure.core.matrix.protocols.element_map_BANG_.call(null,s_42564,f);

var G__42569 = cljs.core.next.call(null,seq__42456_42546__$1);
var G__42570 = null;
var G__42571 = (0);
var G__42572 = (0);
seq__42456_42518 = G__42569;
chunk__42457_42520 = G__42570;
count__42458_42521 = G__42571;
i__42459_42522 = G__42572;
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
var n__28343__auto___42596 = cljs.core.count.call(null,m__$1);
var i_42606 = (0);
while(true){
if((i_42606 < n__28343__auto___42596)){
clojure.core.matrix.protocols.element_map_BANG_.call(null,m__$1.call(null,i_42606),f,clojure.core.matrix.protocols.get_major_slice.call(null,a,i_42606));

var G__42614 = (i_42606 + (1));
i_42606 = G__42614;
continue;
} else {
}
break;
}

return m__$1;
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PFunctionalOperations$element_map_BANG_$arity$4 = (function (m,f,a,more){
var m__$1 = this;
var n__28343__auto___42619 = cljs.core.count.call(null,m__$1);
var i_42623 = (0);
while(true){
if((i_42623 < n__28343__auto___42619)){
cljs.core.apply.call(null,clojure.core.matrix.protocols.element_map_BANG_,m__$1.call(null,i_42623),f,clojure.core.matrix.protocols.get_major_slice.call(null,a,i_42623),cljs.core.map.call(null,((function (i_42623,n__28343__auto___42619,m__$1){
return (function (p1__42440_SHARP_){
return clojure.core.matrix.protocols.get_major_slice.call(null,p1__42440_SHARP_,i_42623);
});})(i_42623,n__28343__auto___42619,m__$1))
,more));

var G__42627 = (i_42623 + (1));
i_42623 = G__42627;
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
return f.call(null,cljs.core.PersistentVector.EMPTY,(function (){var x__30225__auto__ = ms__$1;
if(typeof x__30225__auto__ === 'number'){
return x__30225__auto__;
} else {
return clojure.core.matrix.protocols.get_0d.call(null,x__30225__auto__);

}
})());
} else {
if(((1) === dims)){
return cljs.core.vec.call(null,(function (){var iter__28184__auto__ = ((function (dims,ms__$1){
return (function clojure$core$matrix$impl$persistent_vector$iter__42678(s__42679){
return (new cljs.core.LazySeq(null,((function (dims,ms__$1){
return (function (){
var s__42679__$1 = s__42679;
while(true){
var temp__6753__auto__ = cljs.core.seq.call(null,s__42679__$1);
if(temp__6753__auto__){
var s__42679__$2 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__42679__$2)){
var c__28182__auto__ = cljs.core.chunk_first.call(null,s__42679__$2);
var size__28183__auto__ = cljs.core.count.call(null,c__28182__auto__);
var b__42681 = cljs.core.chunk_buffer.call(null,size__28183__auto__);
if((function (){var i__42680 = (0);
while(true){
if((i__42680 < size__28183__auto__)){
var i = cljs.core._nth.call(null,c__28182__auto__,i__42680);
cljs.core.chunk_append.call(null,b__42681,f.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [i], null),cljs.core.nth.call(null,ms__$1,i)));

var G__42797 = (i__42680 + (1));
i__42680 = G__42797;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__42681),clojure$core$matrix$impl$persistent_vector$iter__42678.call(null,cljs.core.chunk_rest.call(null,s__42679__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__42681),null);
}
} else {
var i = cljs.core.first.call(null,s__42679__$2);
return cljs.core.cons.call(null,f.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [i], null),cljs.core.nth.call(null,ms__$1,i)),clojure$core$matrix$impl$persistent_vector$iter__42678.call(null,cljs.core.rest.call(null,s__42679__$2)));
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
return iter__28184__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,ms__$1)));
})());
} else {
return cljs.core.vec.call(null,(function (){var iter__28184__auto__ = ((function (dims,ms__$1){
return (function clojure$core$matrix$impl$persistent_vector$iter__42713(s__42714){
return (new cljs.core.LazySeq(null,((function (dims,ms__$1){
return (function (){
var s__42714__$1 = s__42714;
while(true){
var temp__6753__auto__ = cljs.core.seq.call(null,s__42714__$1);
if(temp__6753__auto__){
var s__42714__$2 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__42714__$2)){
var c__28182__auto__ = cljs.core.chunk_first.call(null,s__42714__$2);
var size__28183__auto__ = cljs.core.count.call(null,c__28182__auto__);
var b__42716 = cljs.core.chunk_buffer.call(null,size__28183__auto__);
if((function (){var i__42715 = (0);
while(true){
if((i__42715 < size__28183__auto__)){
var i = cljs.core._nth.call(null,c__28182__auto__,i__42715);
cljs.core.chunk_append.call(null,b__42716,clojure.core.matrix.protocols.element_map_indexed.call(null,cljs.core.nth.call(null,ms__$1,i),((function (i__42715,i,c__28182__auto__,size__28183__auto__,b__42716,s__42714__$2,temp__6753__auto__,dims,ms__$1){
return (function (p1__42641_SHARP_,p2__42642_SHARP_){
return f.call(null,cljs.core.cons.call(null,i,p1__42641_SHARP_),p2__42642_SHARP_);
});})(i__42715,i,c__28182__auto__,size__28183__auto__,b__42716,s__42714__$2,temp__6753__auto__,dims,ms__$1))
));

var G__42835 = (i__42715 + (1));
i__42715 = G__42835;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__42716),clojure$core$matrix$impl$persistent_vector$iter__42713.call(null,cljs.core.chunk_rest.call(null,s__42714__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__42716),null);
}
} else {
var i = cljs.core.first.call(null,s__42714__$2);
return cljs.core.cons.call(null,clojure.core.matrix.protocols.element_map_indexed.call(null,cljs.core.nth.call(null,ms__$1,i),((function (i,s__42714__$2,temp__6753__auto__,dims,ms__$1){
return (function (p1__42641_SHARP_,p2__42642_SHARP_){
return f.call(null,cljs.core.cons.call(null,i,p1__42641_SHARP_),p2__42642_SHARP_);
});})(i,s__42714__$2,temp__6753__auto__,dims,ms__$1))
),clojure$core$matrix$impl$persistent_vector$iter__42713.call(null,cljs.core.rest.call(null,s__42714__$2)));
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
return iter__28184__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,ms__$1)));
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
var v = (function (){var x__30225__auto__ = as__$1;
if(typeof x__30225__auto__ === 'number'){
return x__30225__auto__;
} else {
return clojure.core.matrix.protocols.get_0d.call(null,x__30225__auto__);

}
})();
cljs.core.mapv.call(null,((function (v,as__$1,dima,ms__$1){
return (function (p1__42644_SHARP_,p2__42645_SHARP_){
return f.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__42644_SHARP_], null),p2__42645_SHARP_,v);
});})(v,as__$1,dima,ms__$1))
,cljs.core.range.call(null,cljs.core.count.call(null,ms__$1)));

return ms__$1;
} else {
return cljs.core.mapv.call(null,((function (as__$1,dima,ms__$1){
return (function() { 
var G__42885__delegate = function (p1__42646_SHARP_,rest__42647_SHARP_){
return cljs.core.apply.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__42646_SHARP_], null),rest__42647_SHARP_);
};
var G__42885 = function (p1__42646_SHARP_,var_args){
var rest__42647_SHARP_ = null;
if (arguments.length > 1) {
var G__42892__i = 0, G__42892__a = new Array(arguments.length -  1);
while (G__42892__i < G__42892__a.length) {G__42892__a[G__42892__i] = arguments[G__42892__i + 1]; ++G__42892__i;}
  rest__42647_SHARP_ = new cljs.core.IndexedSeq(G__42892__a,0);
} 
return G__42885__delegate.call(this,p1__42646_SHARP_,rest__42647_SHARP_);};
G__42885.cljs$lang$maxFixedArity = 1;
G__42885.cljs$lang$applyTo = (function (arglist__42897){
var p1__42646_SHARP_ = cljs.core.first(arglist__42897);
var rest__42647_SHARP_ = cljs.core.rest(arglist__42897);
return G__42885__delegate(p1__42646_SHARP_,rest__42647_SHARP_);
});
G__42885.cljs$core$IFn$_invoke$arity$variadic = G__42885__delegate;
return G__42885;
})()
;})(as__$1,dima,ms__$1))
,cljs.core.range.call(null,cljs.core.count.call(null,ms__$1)),ms__$1,clojure.core.matrix.protocols.element_seq.call(null,as__$1));
}
} else {
return cljs.core.mapv.call(null,((function (as__$1,dima,ms__$1){
return (function (i,m,a){
return clojure.core.matrix.protocols.element_map_indexed.call(null,m,((function (as__$1,dima,ms__$1){
return (function() { 
var G__42933__delegate = function (p1__42649_SHARP_,rest__42650_SHARP_){
return cljs.core.apply.call(null,f,cljs.core.cons.call(null,i,p1__42649_SHARP_),rest__42650_SHARP_);
};
var G__42933 = function (p1__42649_SHARP_,var_args){
var rest__42650_SHARP_ = null;
if (arguments.length > 1) {
var G__42940__i = 0, G__42940__a = new Array(arguments.length -  1);
while (G__42940__i < G__42940__a.length) {G__42940__a[G__42940__i] = arguments[G__42940__i + 1]; ++G__42940__i;}
  rest__42650_SHARP_ = new cljs.core.IndexedSeq(G__42940__a,0);
} 
return G__42933__delegate.call(this,p1__42649_SHARP_,rest__42650_SHARP_);};
G__42933.cljs$lang$maxFixedArity = 1;
G__42933.cljs$lang$applyTo = (function (arglist__42944){
var p1__42649_SHARP_ = cljs.core.first(arglist__42944);
var rest__42650_SHARP_ = cljs.core.rest(arglist__42944);
return G__42933__delegate(p1__42649_SHARP_,rest__42650_SHARP_);
});
G__42933.cljs$core$IFn$_invoke$arity$variadic = G__42933__delegate;
return G__42933;
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
var G__42953__delegate = function (p1__42651_SHARP_,rest__42652_SHARP_){
return cljs.core.apply.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__42651_SHARP_], null),rest__42652_SHARP_);
};
var G__42953 = function (p1__42651_SHARP_,var_args){
var rest__42652_SHARP_ = null;
if (arguments.length > 1) {
var G__42961__i = 0, G__42961__a = new Array(arguments.length -  1);
while (G__42961__i < G__42961__a.length) {G__42961__a[G__42961__i] = arguments[G__42961__i + 1]; ++G__42961__i;}
  rest__42652_SHARP_ = new cljs.core.IndexedSeq(G__42961__a,0);
} 
return G__42953__delegate.call(this,p1__42651_SHARP_,rest__42652_SHARP_);};
G__42953.cljs$lang$maxFixedArity = 1;
G__42953.cljs$lang$applyTo = (function (arglist__42964){
var p1__42651_SHARP_ = cljs.core.first(arglist__42964);
var rest__42652_SHARP_ = cljs.core.rest(arglist__42964);
return G__42953__delegate(p1__42651_SHARP_,rest__42652_SHARP_);
});
G__42953.cljs$core$IFn$_invoke$arity$variadic = G__42953__delegate;
return G__42953;
})()
;})(ms__$1))
,cljs.core.range.call(null,cljs.core.count.call(null,ms__$1)),ms__$1,as,more);
} else {
return cljs.core.apply.call(null,cljs.core.mapv,((function (ms__$1){
return (function() { 
var G__42973__delegate = function (i,m,a,mr){
return clojure.core.matrix.protocols.element_map_indexed.call(null,m,((function (ms__$1){
return (function() { 
var G__42977__delegate = function (p1__42654_SHARP_,rest__42655_SHARP_){
return cljs.core.apply.call(null,f,cljs.core.cons.call(null,i,p1__42654_SHARP_),rest__42655_SHARP_);
};
var G__42977 = function (p1__42654_SHARP_,var_args){
var rest__42655_SHARP_ = null;
if (arguments.length > 1) {
var G__42981__i = 0, G__42981__a = new Array(arguments.length -  1);
while (G__42981__i < G__42981__a.length) {G__42981__a[G__42981__i] = arguments[G__42981__i + 1]; ++G__42981__i;}
  rest__42655_SHARP_ = new cljs.core.IndexedSeq(G__42981__a,0);
} 
return G__42977__delegate.call(this,p1__42654_SHARP_,rest__42655_SHARP_);};
G__42977.cljs$lang$maxFixedArity = 1;
G__42977.cljs$lang$applyTo = (function (arglist__42984){
var p1__42654_SHARP_ = cljs.core.first(arglist__42984);
var rest__42655_SHARP_ = cljs.core.rest(arglist__42984);
return G__42977__delegate(p1__42654_SHARP_,rest__42655_SHARP_);
});
G__42977.cljs$core$IFn$_invoke$arity$variadic = G__42977__delegate;
return G__42977;
})()
;})(ms__$1))
,a,mr);
};
var G__42973 = function (i,m,a,var_args){
var mr = null;
if (arguments.length > 3) {
var G__42986__i = 0, G__42986__a = new Array(arguments.length -  3);
while (G__42986__i < G__42986__a.length) {G__42986__a[G__42986__i] = arguments[G__42986__i + 3]; ++G__42986__i;}
  mr = new cljs.core.IndexedSeq(G__42986__a,0);
} 
return G__42973__delegate.call(this,i,m,a,mr);};
G__42973.cljs$lang$maxFixedArity = 3;
G__42973.cljs$lang$applyTo = (function (arglist__42987){
var i = cljs.core.first(arglist__42987);
arglist__42987 = cljs.core.next(arglist__42987);
var m = cljs.core.first(arglist__42987);
arglist__42987 = cljs.core.next(arglist__42987);
var a = cljs.core.first(arglist__42987);
var mr = cljs.core.rest(arglist__42987);
return G__42973__delegate(i,m,a,mr);
});
G__42973.cljs$core$IFn$_invoke$arity$variadic = G__42973__delegate;
return G__42973;
})()
;})(ms__$1))
,cljs.core.range.call(null,cljs.core.count.call(null,ms__$1)),ms__$1,as,more);
}
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMapIndexed$element_map_indexed_BANG_$arity$2 = (function (m,f){
var m__$1 = this;
var n__28343__auto___42988 = cljs.core.count.call(null,m__$1);
var i_42989 = (0);
while(true){
if((i_42989 < n__28343__auto___42988)){
clojure.core.matrix.protocols.element_map_indexed_BANG_.call(null,m__$1.call(null,i_42989),((function (i_42989,n__28343__auto___42988,m__$1){
return (function (p1__42657_SHARP_,p2__42658_SHARP_){
return f.call(null,cljs.core.cons.call(null,i_42989,p1__42657_SHARP_),p2__42658_SHARP_);
});})(i_42989,n__28343__auto___42988,m__$1))
);

var G__42991 = (i_42989 + (1));
i_42989 = G__42991;
continue;
} else {
}
break;
}

return m__$1;
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMapIndexed$element_map_indexed_BANG_$arity$3 = (function (m,f,a){
var m__$1 = this;
var n__28343__auto___42992 = cljs.core.count.call(null,m__$1);
var i_42993 = (0);
while(true){
if((i_42993 < n__28343__auto___42992)){
clojure.core.matrix.protocols.element_map_indexed_BANG_.call(null,m__$1.call(null,i_42993),((function (i_42993,n__28343__auto___42992,m__$1){
return (function() { 
var G__42997__delegate = function (p1__42659_SHARP_,rest__42660_SHARP_){
return cljs.core.apply.call(null,f,cljs.core.cons.call(null,i_42993,p1__42659_SHARP_),rest__42660_SHARP_);
};
var G__42997 = function (p1__42659_SHARP_,var_args){
var rest__42660_SHARP_ = null;
if (arguments.length > 1) {
var G__43000__i = 0, G__43000__a = new Array(arguments.length -  1);
while (G__43000__i < G__43000__a.length) {G__43000__a[G__43000__i] = arguments[G__43000__i + 1]; ++G__43000__i;}
  rest__42660_SHARP_ = new cljs.core.IndexedSeq(G__43000__a,0);
} 
return G__42997__delegate.call(this,p1__42659_SHARP_,rest__42660_SHARP_);};
G__42997.cljs$lang$maxFixedArity = 1;
G__42997.cljs$lang$applyTo = (function (arglist__43001){
var p1__42659_SHARP_ = cljs.core.first(arglist__43001);
var rest__42660_SHARP_ = cljs.core.rest(arglist__43001);
return G__42997__delegate(p1__42659_SHARP_,rest__42660_SHARP_);
});
G__42997.cljs$core$IFn$_invoke$arity$variadic = G__42997__delegate;
return G__42997;
})()
;})(i_42993,n__28343__auto___42992,m__$1))
,clojure.core.matrix.protocols.get_major_slice.call(null,a,i_42993));

var G__43003 = (i_42993 + (1));
i_42993 = G__43003;
continue;
} else {
}
break;
}

return m__$1;
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMapIndexed$element_map_indexed_BANG_$arity$4 = (function (m,f,a,more){
var m__$1 = this;
var n__28343__auto___43006 = cljs.core.count.call(null,m__$1);
var i_43009 = (0);
while(true){
if((i_43009 < n__28343__auto___43006)){
cljs.core.apply.call(null,clojure.core.matrix.protocols.element_map_indexed_BANG_,m__$1.call(null,i_43009),((function (i_43009,n__28343__auto___43006,m__$1){
return (function() { 
var G__43013__delegate = function (p1__42661_SHARP_,rest__42662_SHARP_){
return cljs.core.apply.call(null,f,cljs.core.cons.call(null,i_43009,p1__42661_SHARP_),rest__42662_SHARP_);
};
var G__43013 = function (p1__42661_SHARP_,var_args){
var rest__42662_SHARP_ = null;
if (arguments.length > 1) {
var G__43017__i = 0, G__43017__a = new Array(arguments.length -  1);
while (G__43017__i < G__43017__a.length) {G__43017__a[G__43017__i] = arguments[G__43017__i + 1]; ++G__43017__i;}
  rest__42662_SHARP_ = new cljs.core.IndexedSeq(G__43017__a,0);
} 
return G__43013__delegate.call(this,p1__42661_SHARP_,rest__42662_SHARP_);};
G__43013.cljs$lang$maxFixedArity = 1;
G__43013.cljs$lang$applyTo = (function (arglist__43018){
var p1__42661_SHARP_ = cljs.core.first(arglist__43018);
var rest__42662_SHARP_ = cljs.core.rest(arglist__43018);
return G__43013__delegate(p1__42661_SHARP_,rest__42662_SHARP_);
});
G__43013.cljs$core$IFn$_invoke$arity$variadic = G__43013__delegate;
return G__43013;
})()
;})(i_43009,n__28343__auto___43006,m__$1))
,clojure.core.matrix.protocols.get_major_slice.call(null,a,i_43009),cljs.core.map.call(null,((function (i_43009,n__28343__auto___43006,m__$1){
return (function (p1__42663_SHARP_){
return clojure.core.matrix.protocols.get_major_slice.call(null,p1__42663_SHARP_,i_43009);
});})(i_43009,n__28343__auto___43006,m__$1))
,more));

var G__43019 = (i_43009 + (1));
i_43009 = G__43019;
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
return (function (p1__43020_SHARP_){
return cljs.core.nth.call(null,a__$1,p1__43020_SHARP_);
});})(a__$1))
,cljs.core.first.call(null,args)));
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Array dimension does not match length of args")].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
} else {
return cljs.core.apply.call(null,cljs.core.vector,cljs.core.mapv.call(null,((function (a__$1){
return (function (p1__43021_SHARP_){
return clojure.core.matrix.protocols.select.call(null,cljs.core.nth.call(null,a__$1,p1__43021_SHARP_),cljs.core.next.call(null,args));
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

//# sourceMappingURL=persistent_vector.js.map?rel=1493584927648