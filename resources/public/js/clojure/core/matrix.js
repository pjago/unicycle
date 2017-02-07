// Compiled by ClojureScript 1.9.456 {}
goog.provide('clojure.core.matrix');
goog.require('cljs.core');
goog.require('clojure.core.matrix.impl.defaults');
goog.require('clojure.core.matrix.impl.persistent_vector');
goog.require('clojure.core.matrix.impl.sequence');
goog.require('clojure.core.matrix.protocols');
goog.require('clojure.core.matrix.implementations');
goog.require('clojure.core.matrix.impl.mathsops');
goog.require('clojure.core.matrix.impl.wrappers');
goog.require('clojure.core.matrix.utils');
clojure.core.matrix.class$ = cljs.core.type;

/**
 * Constructs a new n-dimensional array from the given data.
 * 
 * This function will examine the data in order to construct an array of the appropriate shape.
 * 
 * The data may be in one of the following forms:
 * - A valid existing array (which will be converted to the implementation)
 * - Nested sequences of scalar values, e.g. Clojure vectors (must have regular shape)
 * - A sequence of slices, each of which must be valid array data
 * - A single scalar value, which will be wrapped or coerced as necessary for the implementation
 * 
 * If implementation is not specified, uses the current matrix library as specified
 * in *matrix-implementation*
 * 
 * If the implementation does not support the shape or type of data provided, may either
 * create an array using a different implementation on a best-efforts basis or
 * alternatively throw an error. This behaviour is implementation-specific.
 */
clojure.core.matrix.array = (function clojure$core$matrix$array(var_args){
var args46856 = [];
var len__21896__auto___46861 = arguments.length;
var i__21897__auto___46862 = (0);
while(true){
if((i__21897__auto___46862 < len__21896__auto___46861)){
args46856.push((arguments[i__21897__auto___46862]));

var G__46863 = (i__21897__auto___46862 + (1));
i__21897__auto___46862 = G__46863;
continue;
} else {
}
break;
}

var G__46859 = args46856.length;
switch (G__46859) {
case 1:
return clojure.core.matrix.array.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.array.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args46856.length)].join('')));

}
});

clojure.core.matrix.array.cljs$core$IFn$_invoke$arity$1 = (function (data){
var or__20675__auto__ = clojure.core.matrix.protocols.construct_matrix.call(null,clojure.core.matrix.implementation_check.call(null),data);
if(cljs.core.truth_(or__20675__auto__)){
return or__20675__auto__;
} else {
return clojure.core.matrix.protocols.coerce_param.call(null,cljs.core.PersistentVector.EMPTY,data);
}
});

clojure.core.matrix.array.cljs$core$IFn$_invoke$arity$2 = (function (implementation,data){
var or__20675__auto__ = clojure.core.matrix.protocols.construct_matrix.call(null,clojure.core.matrix.implementation_check.call(null,implementation),data);
if(cljs.core.truth_(or__20675__auto__)){
return or__20675__auto__;
} else {
return clojure.core.matrix.protocols.coerce_param.call(null,cljs.core.PersistentVector.EMPTY,data);
}
});

clojure.core.matrix.array.cljs$lang$maxFixedArity = 2;

/**
 * Constructs a new 2-dimensional matrix from the given numerical data.
 * 
 * The data may be in one of the following forms:
 * - A valid existing numerical array
 * - Nested sequences of scalar values, e.g. Clojure vectors
 * - A sequence of slices, each of which must be valid matrix data
 * 
 * If implementation is not specified, uses the current matrix library as specified
 * in *matrix-implementation*
 * 
 * `matrix` works as a synonym for `array`
 */
clojure.core.matrix.matrix = (function clojure$core$matrix$matrix(var_args){
var args46865 = [];
var len__21896__auto___46868 = arguments.length;
var i__21897__auto___46869 = (0);
while(true){
if((i__21897__auto___46869 < len__21896__auto___46868)){
args46865.push((arguments[i__21897__auto___46869]));

var G__46870 = (i__21897__auto___46869 + (1));
i__21897__auto___46869 = G__46870;
continue;
} else {
}
break;
}

var G__46867 = args46865.length;
switch (G__46867) {
case 1:
return clojure.core.matrix.matrix.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.matrix.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args46865.length)].join('')));

}
});

clojure.core.matrix.matrix.cljs$core$IFn$_invoke$arity$1 = (function (data){
return clojure.core.matrix.array.call(null,data);
});

clojure.core.matrix.matrix.cljs$core$IFn$_invoke$arity$2 = (function (implementation,data){
return clojure.core.matrix.array.call(null,implementation,data);
});

clojure.core.matrix.matrix.cljs$lang$maxFixedArity = 2;

/**
 * Constructs a new 1-dimensional integer index from given data.
 * 
 * The data may be in one of the following forms:
 * - A valid existing index
 * - A 1D array of integer values
 * - A sequence of integer values
 * 
 * If implementation is not specified, uses the current matrix library as specified
 * in *matrix-implementation* to produce the index object.
 * 
 * If the implementation does not support its own native index types, will return a
 * valid index from a default implementation.
 */
clojure.core.matrix.index = (function clojure$core$matrix$index(var_args){
var args46872 = [];
var len__21896__auto___46875 = arguments.length;
var i__21897__auto___46876 = (0);
while(true){
if((i__21897__auto___46876 < len__21896__auto___46875)){
args46872.push((arguments[i__21897__auto___46876]));

var G__46877 = (i__21897__auto___46876 + (1));
i__21897__auto___46876 = G__46877;
continue;
} else {
}
break;
}

var G__46874 = args46872.length;
switch (G__46874) {
case 1:
return clojure.core.matrix.index.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.index.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args46872.length)].join('')));

}
});

clojure.core.matrix.index.cljs$core$IFn$_invoke$arity$1 = (function (data){
var or__20675__auto__ = clojure.core.matrix.protocols.index_coerce.call(null,clojure.core.matrix.implementation_check.call(null),data);
if(cljs.core.truth_(or__20675__auto__)){
return or__20675__auto__;
} else {
return clojure.core.matrix.protocols.index_coerce.call(null,cljs.core.PersistentVector.EMPTY,data);
}
});

clojure.core.matrix.index.cljs$core$IFn$_invoke$arity$2 = (function (implementation,data){
var or__20675__auto__ = clojure.core.matrix.protocols.index_coerce.call(null,clojure.core.matrix.implementation_check.call(null,implementation),data);
if(cljs.core.truth_(or__20675__auto__)){
return or__20675__auto__;
} else {
return clojure.core.matrix.protocols.index_coerce.call(null,cljs.core.PersistentVector.EMPTY,data);
}
});

clojure.core.matrix.index.cljs$lang$maxFixedArity = 2;

/**
 * Constructs a new zero-filled numerical vector with the given length.
 * 
 * Implementations are encouraged to return immutable vectors or sparse vectors
 * for efficency whre available.
 */
clojure.core.matrix.zero_vector = (function clojure$core$matrix$zero_vector(var_args){
var args46880 = [];
var len__21896__auto___46884 = arguments.length;
var i__21897__auto___46885 = (0);
while(true){
if((i__21897__auto___46885 < len__21896__auto___46884)){
args46880.push((arguments[i__21897__auto___46885]));

var G__46886 = (i__21897__auto___46885 + (1));
i__21897__auto___46885 = G__46886;
continue;
} else {
}
break;
}

var G__46882 = args46880.length;
switch (G__46882) {
case 1:
return clojure.core.matrix.zero_vector.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.zero_vector.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args46880.length)].join('')));

}
});

clojure.core.matrix.zero_vector.cljs$core$IFn$_invoke$arity$1 = (function (length){
return clojure.core.matrix.protocols.new_vector.call(null,clojure.core.matrix.implementation_check.call(null),length);
});

clojure.core.matrix.zero_vector.cljs$core$IFn$_invoke$arity$2 = (function (implementation,length){
return clojure.core.matrix.protocols.new_vector.call(null,clojure.core.matrix.implementation_check.call(null,implementation),length);
});

clojure.core.matrix.zero_vector.cljs$lang$maxFixedArity = 2;

/**
 * Constructs a new vector with the given length.
 * New matrix will contain default values as defined by the implementation (usually null or zero).
 * If the implementation supports mutable vectors, then the new vector will be fully mutable.
 */
clojure.core.matrix.new_vector = (function clojure$core$matrix$new_vector(var_args){
var args46888 = [];
var len__21896__auto___46891 = arguments.length;
var i__21897__auto___46892 = (0);
while(true){
if((i__21897__auto___46892 < len__21896__auto___46891)){
args46888.push((arguments[i__21897__auto___46892]));

var G__46893 = (i__21897__auto___46892 + (1));
i__21897__auto___46892 = G__46893;
continue;
} else {
}
break;
}

var G__46890 = args46888.length;
switch (G__46890) {
case 1:
return clojure.core.matrix.new_vector.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.new_vector.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args46888.length)].join('')));

}
});

clojure.core.matrix.new_vector.cljs$core$IFn$_invoke$arity$1 = (function (length){
return clojure.core.matrix.protocols.new_vector.call(null,clojure.core.matrix.implementation_check.call(null),length);
});

clojure.core.matrix.new_vector.cljs$core$IFn$_invoke$arity$2 = (function (implementation,length){
return clojure.core.matrix.protocols.new_vector.call(null,clojure.core.matrix.implementation_check.call(null,implementation),length);
});

clojure.core.matrix.new_vector.cljs$lang$maxFixedArity = 2;

/**
 * Constructs a new zero-filled numerical matrix with the given dimensions.
 * 
 * May produce a lightweight immutable zero matrix if supported by the implementation.
 */
clojure.core.matrix.zero_matrix = (function clojure$core$matrix$zero_matrix(var_args){
var args46895 = [];
var len__21896__auto___46898 = arguments.length;
var i__21897__auto___46899 = (0);
while(true){
if((i__21897__auto___46899 < len__21896__auto___46898)){
args46895.push((arguments[i__21897__auto___46899]));

var G__46900 = (i__21897__auto___46899 + (1));
i__21897__auto___46899 = G__46900;
continue;
} else {
}
break;
}

var G__46897 = args46895.length;
switch (G__46897) {
case 2:
return clojure.core.matrix.zero_matrix.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.matrix.zero_matrix.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args46895.length)].join('')));

}
});

clojure.core.matrix.zero_matrix.cljs$core$IFn$_invoke$arity$2 = (function (rows,columns){
return clojure.core.matrix.protocols.new_matrix.call(null,clojure.core.matrix.implementation_check.call(null),rows,columns);
});

clojure.core.matrix.zero_matrix.cljs$core$IFn$_invoke$arity$3 = (function (implementation,rows,columns){
return clojure.core.matrix.protocols.new_matrix.call(null,clojure.core.matrix.implementation_check.call(null,implementation),rows,columns);
});

clojure.core.matrix.zero_matrix.cljs$lang$maxFixedArity = 3;

/**
 * Constructs a new 2D array (matrix) with the given dimensions.
 * The new matrix will contain default values as defined by the implementation (usually null or zero).
 * If the implementation supports mutable matrices, then the new matrix will be fully mutable.
 */
clojure.core.matrix.new_matrix = (function clojure$core$matrix$new_matrix(var_args){
var args46902 = [];
var len__21896__auto___46905 = arguments.length;
var i__21897__auto___46906 = (0);
while(true){
if((i__21897__auto___46906 < len__21896__auto___46905)){
args46902.push((arguments[i__21897__auto___46906]));

var G__46907 = (i__21897__auto___46906 + (1));
i__21897__auto___46906 = G__46907;
continue;
} else {
}
break;
}

var G__46904 = args46902.length;
switch (G__46904) {
case 2:
return clojure.core.matrix.new_matrix.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.matrix.new_matrix.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args46902.length)].join('')));

}
});

clojure.core.matrix.new_matrix.cljs$core$IFn$_invoke$arity$2 = (function (rows,columns){
return clojure.core.matrix.protocols.new_matrix.call(null,clojure.core.matrix.implementation_check.call(null),rows,columns);
});

clojure.core.matrix.new_matrix.cljs$core$IFn$_invoke$arity$3 = (function (implementation,rows,columns){
return clojure.core.matrix.protocols.new_matrix.call(null,clojure.core.matrix.implementation_check.call(null,implementation),rows,columns);
});

clojure.core.matrix.new_matrix.cljs$lang$maxFixedArity = 3;

/**
 * Creates a new zero-filled numerical array with the given shape.
 */
clojure.core.matrix.zero_array = (function clojure$core$matrix$zero_array(var_args){
var args46909 = [];
var len__21896__auto___46912 = arguments.length;
var i__21897__auto___46913 = (0);
while(true){
if((i__21897__auto___46913 < len__21896__auto___46912)){
args46909.push((arguments[i__21897__auto___46913]));

var G__46914 = (i__21897__auto___46913 + (1));
i__21897__auto___46913 = G__46914;
continue;
} else {
}
break;
}

var G__46911 = args46909.length;
switch (G__46911) {
case 1:
return clojure.core.matrix.zero_array.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.zero_array.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args46909.length)].join('')));

}
});

clojure.core.matrix.zero_array.cljs$core$IFn$_invoke$arity$1 = (function (shape){
var or__20675__auto__ = clojure.core.matrix.protocols.new_matrix_nd.call(null,clojure.core.matrix.implementation_check.call(null),shape);
if(cljs.core.truth_(or__20675__auto__)){
return or__20675__auto__;
} else {
return clojure.core.matrix.protocols.new_matrix_nd.call(null,cljs.core.PersistentVector.EMPTY,shape);
}
});

clojure.core.matrix.zero_array.cljs$core$IFn$_invoke$arity$2 = (function (implementation,shape){
var or__20675__auto__ = clojure.core.matrix.protocols.new_matrix_nd.call(null,clojure.core.matrix.implementation_check.call(null,implementation),shape);
if(cljs.core.truth_(or__20675__auto__)){
return or__20675__auto__;
} else {
return clojure.core.matrix.protocols.new_matrix_nd.call(null,cljs.core.PersistentVector.EMPTY,shape);
}
});

clojure.core.matrix.zero_array.cljs$lang$maxFixedArity = 2;

/**
 * Creates a new array with the given shape.
 * New array will contain default values as defined by the implementation (usually null or zero).
 * If the implementation supports mutable matrices, then the new matrix will be fully mutable.
 */
clojure.core.matrix.new_array = (function clojure$core$matrix$new_array(var_args){
var args46923 = [];
var len__21896__auto___46926 = arguments.length;
var i__21897__auto___46927 = (0);
while(true){
if((i__21897__auto___46927 < len__21896__auto___46926)){
args46923.push((arguments[i__21897__auto___46927]));

var G__46928 = (i__21897__auto___46927 + (1));
i__21897__auto___46927 = G__46928;
continue;
} else {
}
break;
}

var G__46925 = args46923.length;
switch (G__46925) {
case 1:
return clojure.core.matrix.new_array.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.new_array.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args46923.length)].join('')));

}
});

clojure.core.matrix.new_array.cljs$core$IFn$_invoke$arity$1 = (function (shape){
var or__20675__auto__ = clojure.core.matrix.protocols.new_matrix_nd.call(null,clojure.core.matrix.implementation_check.call(null),shape);
if(cljs.core.truth_(or__20675__auto__)){
return or__20675__auto__;
} else {
return clojure.core.matrix.protocols.new_matrix_nd.call(null,cljs.core.PersistentVector.EMPTY,shape);
}
});

clojure.core.matrix.new_array.cljs$core$IFn$_invoke$arity$2 = (function (implementation,shape){
var or__20675__auto__ = clojure.core.matrix.protocols.new_matrix_nd.call(null,clojure.core.matrix.implementation_check.call(null,implementation),shape);
if(cljs.core.truth_(or__20675__auto__)){
return or__20675__auto__;
} else {
var or__20675__auto____$1 = clojure.core.matrix.protocols.new_matrix_nd.call(null,clojure.core.matrix.implementation_check.call(null),shape);
if(cljs.core.truth_(or__20675__auto____$1)){
return or__20675__auto____$1;
} else {
return clojure.core.matrix.protocols.new_matrix_nd.call(null,cljs.core.PersistentVector.EMPTY,shape);
}
}
});

clojure.core.matrix.new_array.cljs$lang$maxFixedArity = 2;

/**
 * Creates a new sparse array with the given shape.
 * New array will contain default values as defined by the implementation (usually zero).
 * If the implementation supports mutable sparse matrices, then the new matrix should be fully mutable.
 */
clojure.core.matrix.new_sparse_array = (function clojure$core$matrix$new_sparse_array(var_args){
var args46930 = [];
var len__21896__auto___46933 = arguments.length;
var i__21897__auto___46934 = (0);
while(true){
if((i__21897__auto___46934 < len__21896__auto___46933)){
args46930.push((arguments[i__21897__auto___46934]));

var G__46935 = (i__21897__auto___46934 + (1));
i__21897__auto___46934 = G__46935;
continue;
} else {
}
break;
}

var G__46932 = args46930.length;
switch (G__46932) {
case 1:
return clojure.core.matrix.new_sparse_array.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.new_sparse_array.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args46930.length)].join('')));

}
});

clojure.core.matrix.new_sparse_array.cljs$core$IFn$_invoke$arity$1 = (function (shape){
return clojure.core.matrix.protocols.new_sparse_array.call(null,clojure.core.matrix.implementation_check.call(null),shape);
});

clojure.core.matrix.new_sparse_array.cljs$core$IFn$_invoke$arity$2 = (function (implementation,shape){
var or__20675__auto__ = clojure.core.matrix.protocols.new_sparse_array.call(null,clojure.core.matrix.implementation_check.call(null,implementation),shape);
if(cljs.core.truth_(or__20675__auto__)){
return or__20675__auto__;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Implementation "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.core.matrix.protocols.implementation_key.call(null,implementation)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not support sparse arrays of shape "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.vec.call(null,shape))].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
});

clojure.core.matrix.new_sparse_array.cljs$lang$maxFixedArity = 2;

/**
 * Returns a new mutable scalar array containing the scalar value zero.
 */
clojure.core.matrix.new_scalar_array = (function clojure$core$matrix$new_scalar_array(var_args){
var args46937 = [];
var len__21896__auto___46940 = arguments.length;
var i__21897__auto___46941 = (0);
while(true){
if((i__21897__auto___46941 < len__21896__auto___46940)){
args46937.push((arguments[i__21897__auto___46941]));

var G__46942 = (i__21897__auto___46941 + (1));
i__21897__auto___46941 = G__46942;
continue;
} else {
}
break;
}

var G__46939 = args46937.length;
switch (G__46939) {
case 0:
return clojure.core.matrix.new_scalar_array.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return clojure.core.matrix.new_scalar_array.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args46937.length)].join('')));

}
});

clojure.core.matrix.new_scalar_array.cljs$core$IFn$_invoke$arity$0 = (function (){
return clojure.core.matrix.new_scalar_array.call(null,clojure.core.matrix.implementations._STAR_matrix_implementation_STAR_);
});

clojure.core.matrix.new_scalar_array.cljs$core$IFn$_invoke$arity$1 = (function (implementation){
var implementation__$1 = clojure.core.matrix.implementation_check.call(null,implementation);
return clojure.core.matrix.protocols.new_scalar_array.call(null,implementation__$1);
});

clojure.core.matrix.new_scalar_array.cljs$lang$maxFixedArity = 1;

/**
 * Creates a new zero-dimensional array containing the specified scalar value.
 */
clojure.core.matrix.scalar_array = (function clojure$core$matrix$scalar_array(var_args){
var args46945 = [];
var len__21896__auto___46952 = arguments.length;
var i__21897__auto___46953 = (0);
while(true){
if((i__21897__auto___46953 < len__21896__auto___46952)){
args46945.push((arguments[i__21897__auto___46953]));

var G__46954 = (i__21897__auto___46953 + (1));
i__21897__auto___46953 = G__46954;
continue;
} else {
}
break;
}

var G__46947 = args46945.length;
switch (G__46947) {
case 1:
return clojure.core.matrix.scalar_array.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.scalar_array.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args46945.length)].join('')));

}
});

clojure.core.matrix.scalar_array.cljs$core$IFn$_invoke$arity$1 = (function (value){
return clojure.core.matrix.protocols.new_scalar_array.call(null,clojure.core.matrix.implementation_check.call(null),value);
});

clojure.core.matrix.scalar_array.cljs$core$IFn$_invoke$arity$2 = (function (implementation,value){
return clojure.core.matrix.protocols.new_scalar_array.call(null,clojure.core.matrix.implementation_check.call(null,implementation),value);
});

clojure.core.matrix.scalar_array.cljs$lang$maxFixedArity = 2;

/**
 * Constructs a row matrix with the given data. The returned matrix is a 2D 1xN row matrix.
 * 
 * The data must be either a valid existing vector or a sequence of scalar values.
 */
clojure.core.matrix.row_matrix = (function clojure$core$matrix$row_matrix(var_args){
var args46959 = [];
var len__21896__auto___46963 = arguments.length;
var i__21897__auto___46964 = (0);
while(true){
if((i__21897__auto___46964 < len__21896__auto___46963)){
args46959.push((arguments[i__21897__auto___46964]));

var G__46965 = (i__21897__auto___46964 + (1));
i__21897__auto___46964 = G__46965;
continue;
} else {
}
break;
}

var G__46961 = args46959.length;
switch (G__46961) {
case 1:
return clojure.core.matrix.row_matrix.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.row_matrix.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args46959.length)].join('')));

}
});

clojure.core.matrix.row_matrix.cljs$core$IFn$_invoke$arity$1 = (function (data){
return clojure.core.matrix.protocols.row_matrix.call(null,clojure.core.matrix.implementation_check.call(null),data);
});

clojure.core.matrix.row_matrix.cljs$core$IFn$_invoke$arity$2 = (function (implementation,data){
return clojure.core.matrix.protocols.row_matrix.call(null,clojure.core.matrix.implementation_check.call(null,implementation),data);
});

clojure.core.matrix.row_matrix.cljs$lang$maxFixedArity = 2;

/**
 * Constructs a column matrix with the given data. The returned matrix is a 2D Nx1 column matrix.
 * 
 * The data must be either a valid existing vector or a sequence of scalar values.
 */
clojure.core.matrix.column_matrix = (function clojure$core$matrix$column_matrix(var_args){
var args46971 = [];
var len__21896__auto___46974 = arguments.length;
var i__21897__auto___46975 = (0);
while(true){
if((i__21897__auto___46975 < len__21896__auto___46974)){
args46971.push((arguments[i__21897__auto___46975]));

var G__46980 = (i__21897__auto___46975 + (1));
i__21897__auto___46975 = G__46980;
continue;
} else {
}
break;
}

var G__46973 = args46971.length;
switch (G__46973) {
case 1:
return clojure.core.matrix.column_matrix.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.column_matrix.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args46971.length)].join('')));

}
});

clojure.core.matrix.column_matrix.cljs$core$IFn$_invoke$arity$1 = (function (data){
return clojure.core.matrix.protocols.column_matrix.call(null,clojure.core.matrix.implementation_check.call(null),data);
});

clojure.core.matrix.column_matrix.cljs$core$IFn$_invoke$arity$2 = (function (implementation,data){
return clojure.core.matrix.protocols.column_matrix.call(null,clojure.core.matrix.implementation_check.call(null,implementation),data);
});

clojure.core.matrix.column_matrix.cljs$lang$maxFixedArity = 2;

/**
 * Constructs a 2D identity matrix with the given number of rows.
 * 
 * Identity matrices constructed with this function may not be fully mutable because they may be
 * implemented with a specialised identity matrix type. Use (mutable (identity-matrix ...)) if you
 * need to guarantee a mutable matrix.
 */
clojure.core.matrix.identity_matrix = (function clojure$core$matrix$identity_matrix(var_args){
var args46982 = [];
var len__21896__auto___46993 = arguments.length;
var i__21897__auto___46994 = (0);
while(true){
if((i__21897__auto___46994 < len__21896__auto___46993)){
args46982.push((arguments[i__21897__auto___46994]));

var G__46995 = (i__21897__auto___46994 + (1));
i__21897__auto___46994 = G__46995;
continue;
} else {
}
break;
}

var G__46988 = args46982.length;
switch (G__46988) {
case 1:
return clojure.core.matrix.identity_matrix.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.identity_matrix.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args46982.length)].join('')));

}
});

clojure.core.matrix.identity_matrix.cljs$core$IFn$_invoke$arity$1 = (function (dims){
return clojure.core.matrix.protocols.identity_matrix.call(null,clojure.core.matrix.implementation_check.call(null),dims);
});

clojure.core.matrix.identity_matrix.cljs$core$IFn$_invoke$arity$2 = (function (implementation,dims){
return clojure.core.matrix.protocols.identity_matrix.call(null,clojure.core.matrix.implementation_check.call(null,implementation),dims);
});

clojure.core.matrix.identity_matrix.cljs$lang$maxFixedArity = 2;

/**
 * Constructs a permutation matrix for a given permutation vector. The permutation vector should
 * contain a distinct set of integers 0...n-1, representing the re-ordering performed by
 * the permutation matrix.
 */
clojure.core.matrix.permutation_matrix = (function clojure$core$matrix$permutation_matrix(var_args){
var args47001 = [];
var len__21896__auto___47004 = arguments.length;
var i__21897__auto___47005 = (0);
while(true){
if((i__21897__auto___47005 < len__21896__auto___47004)){
args47001.push((arguments[i__21897__auto___47005]));

var G__47006 = (i__21897__auto___47005 + (1));
i__21897__auto___47005 = G__47006;
continue;
} else {
}
break;
}

var G__47003 = args47001.length;
switch (G__47003) {
case 1:
return clojure.core.matrix.permutation_matrix.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.permutation_matrix.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args47001.length)].join('')));

}
});

clojure.core.matrix.permutation_matrix.cljs$core$IFn$_invoke$arity$1 = (function (permutation){
return clojure.core.matrix.protocols.permutation_matrix.call(null,clojure.core.matrix.implementation_check.call(null),permutation);
});

clojure.core.matrix.permutation_matrix.cljs$core$IFn$_invoke$arity$2 = (function (implementation,permutation){
return clojure.core.matrix.protocols.permutation_matrix.call(null,clojure.core.matrix.implementation_check.call(null,implementation),permutation);
});

clojure.core.matrix.permutation_matrix.cljs$lang$maxFixedArity = 2;

/**
 * Constructs a block diagonal matrix for a given vector of 2D square matrices and arranges
 *   the matrices along the main diagonal of the 2D matrix
 */
clojure.core.matrix.block_diagonal_matrix = (function clojure$core$matrix$block_diagonal_matrix(var_args){
var args47011 = [];
var len__21896__auto___47019 = arguments.length;
var i__21897__auto___47020 = (0);
while(true){
if((i__21897__auto___47020 < len__21896__auto___47019)){
args47011.push((arguments[i__21897__auto___47020]));

var G__47023 = (i__21897__auto___47020 + (1));
i__21897__auto___47020 = G__47023;
continue;
} else {
}
break;
}

var G__47017 = args47011.length;
switch (G__47017) {
case 1:
return clojure.core.matrix.block_diagonal_matrix.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.block_diagonal_matrix.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args47011.length)].join('')));

}
});

clojure.core.matrix.block_diagonal_matrix.cljs$core$IFn$_invoke$arity$1 = (function (blocks){
return clojure.core.matrix.protocols.block_diagonal_matrix.call(null,clojure.core.matrix.implementation_check.call(null),blocks);
});

clojure.core.matrix.block_diagonal_matrix.cljs$core$IFn$_invoke$arity$2 = (function (implementation,blocks){
return clojure.core.matrix.protocols.block_diagonal_matrix.call(null,clojure.core.matrix.implementation_check.call(null,implementation),blocks);
});

clojure.core.matrix.block_diagonal_matrix.cljs$lang$maxFixedArity = 2;

/**
 * Constructs a fully mutable copy of the given array data.
 * 
 * If the implementation does not support mutable matrices, will return a mutable array
 * from another core.matrix implementation that supports either the same element type or a broader type.
 */
clojure.core.matrix.mutable = (function clojure$core$matrix$mutable(var_args){
var args47029 = [];
var len__21896__auto___47033 = arguments.length;
var i__21897__auto___47034 = (0);
while(true){
if((i__21897__auto___47034 < len__21896__auto___47033)){
args47029.push((arguments[i__21897__auto___47034]));

var G__47035 = (i__21897__auto___47034 + (1));
i__21897__auto___47034 = G__47035;
continue;
} else {
}
break;
}

var G__47032 = args47029.length;
switch (G__47032) {
case 1:
return clojure.core.matrix.mutable.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.mutable.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args47029.length)].join('')));

}
});

clojure.core.matrix.mutable.cljs$core$IFn$_invoke$arity$1 = (function (data){
var or__20675__auto__ = clojure.core.matrix.protocols.mutable_matrix.call(null,data);
if(cljs.core.truth_(or__20675__auto__)){
return or__20675__auto__;
} else {
return clojure.core.matrix.mutable.call(null,clojure.core.matrix.implementation_check.call(null),data);
}
});

clojure.core.matrix.mutable.cljs$core$IFn$_invoke$arity$2 = (function (implementation,data){
var imp = clojure.core.matrix.implementation_check.call(null,implementation);
var r = clojure.core.matrix.protocols.construct_matrix.call(null,imp,data);
var or__20675__auto__ = (function (){var and__20663__auto__ = r;
if(cljs.core.truth_(and__20663__auto__)){
return clojure.core.matrix.protocols.ensure_mutable.call(null,r);
} else {
return and__20663__auto__;
}
})();
if(cljs.core.truth_(or__20675__auto__)){
return or__20675__auto__;
} else {
var or__20675__auto____$1 = clojure.core.matrix.impl.defaults.construct_mutable_matrix.call(null,data);
if(cljs.core.truth_(or__20675__auto____$1)){
return or__20675__auto____$1;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Unable to create mutable array for implementation "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.core.matrix.protocols.implementation_key.call(null,imp))].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
}
});

clojure.core.matrix.mutable.cljs$lang$maxFixedArity = 2;

/**
 * Returns an immutable array containing the given array data.
 * 
 * May return the same array if it is already immutable.
 * 
 * If the implementation does not support immutable matrices, will return an immutable array
 * from another core.matrix implementation that supports either the same element type or a broader type.
 */
clojure.core.matrix.immutable = (function clojure$core$matrix$immutable(data){
var or__20675__auto__ = clojure.core.matrix.protocols.immutable_matrix.call(null,data);
if(cljs.core.truth_(or__20675__auto__)){
return or__20675__auto__;
} else {
return clojure.core.matrix.to_nested_vectors.call(null,data);
}
});
/**
 * Checks if an array is mutable, and if not converts to a new mutable array. Guarantees
 * that the result will be mutable, but may not be the same type as the original array.
 */
clojure.core.matrix.ensure_mutable = (function clojure$core$matrix$ensure_mutable(m){
return clojure.core.matrix.protocols.ensure_mutable.call(null,m);
});
/**
 * Constructs a 2D diagonal matrix with the given numerical values on the main diagonal.
 * All off-diagonal elements will be zero, and diagonal-values may be a vector or any
 *   Clojure sequence of values.
 * 
 * Diagonal matrices constructed this way may use specialised storage formats, hence may not be fully mutable.
 * Use (mutable (diagonal-matrix ...)) if you need to guarantee a mutable matrix.
 */
clojure.core.matrix.diagonal_matrix = (function clojure$core$matrix$diagonal_matrix(var_args){
var args47037 = [];
var len__21896__auto___47043 = arguments.length;
var i__21897__auto___47044 = (0);
while(true){
if((i__21897__auto___47044 < len__21896__auto___47043)){
args47037.push((arguments[i__21897__auto___47044]));

var G__47045 = (i__21897__auto___47044 + (1));
i__21897__auto___47044 = G__47045;
continue;
} else {
}
break;
}

var G__47042 = args47037.length;
switch (G__47042) {
case 1:
return clojure.core.matrix.diagonal_matrix.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.diagonal_matrix.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args47037.length)].join('')));

}
});

clojure.core.matrix.diagonal_matrix.cljs$core$IFn$_invoke$arity$1 = (function (diagonal_values){
return clojure.core.matrix.protocols.diagonal_matrix.call(null,clojure.core.matrix.implementation_check.call(null),diagonal_values);
});

clojure.core.matrix.diagonal_matrix.cljs$core$IFn$_invoke$arity$2 = (function (implementation,diagonal_values){
return clojure.core.matrix.protocols.diagonal_matrix.call(null,clojure.core.matrix.implementations.get_canonical_object.call(null,implementation),diagonal_values);
});

clojure.core.matrix.diagonal_matrix.cljs$lang$maxFixedArity = 2;

/**
 * Creates a array with the specified shape, and each element specified by (f i j k...)
 * Where i, j, k... are the index positions of each element in the matrix
 */
clojure.core.matrix.compute_matrix = (function clojure$core$matrix$compute_matrix(var_args){
var args47048 = [];
var len__21896__auto___47052 = arguments.length;
var i__21897__auto___47053 = (0);
while(true){
if((i__21897__auto___47053 < len__21896__auto___47052)){
args47048.push((arguments[i__21897__auto___47053]));

var G__47054 = (i__21897__auto___47053 + (1));
i__21897__auto___47053 = G__47054;
continue;
} else {
}
break;
}

var G__47051 = args47048.length;
switch (G__47051) {
case 2:
return clojure.core.matrix.compute_matrix.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.matrix.compute_matrix.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args47048.length)].join('')));

}
});

clojure.core.matrix.compute_matrix.cljs$core$IFn$_invoke$arity$2 = (function (shape,f){
return clojure.core.matrix.compute_matrix.call(null,clojure.core.matrix.implementation_check.call(null),shape,f);
});

clojure.core.matrix.compute_matrix.cljs$core$IFn$_invoke$arity$3 = (function (implementation,shape,f){
var m = clojure.core.matrix.implementation_check.call(null,implementation);
return clojure.core.matrix.protocols.compute_matrix.call(null,m,shape,f);
});

clojure.core.matrix.compute_matrix.cljs$lang$maxFixedArity = 3;

/**
 * Creates a sparse array with the given data, using a specified implementation
 *   or the current implementation if not specified.
 * 
 *   Throws an exception if creation of a sparse array is not possible
 */
clojure.core.matrix.sparse_array = (function clojure$core$matrix$sparse_array(var_args){
var args47056 = [];
var len__21896__auto___47067 = arguments.length;
var i__21897__auto___47068 = (0);
while(true){
if((i__21897__auto___47068 < len__21896__auto___47067)){
args47056.push((arguments[i__21897__auto___47068]));

var G__47069 = (i__21897__auto___47068 + (1));
i__21897__auto___47068 = G__47069;
continue;
} else {
}
break;
}

var G__47066 = args47056.length;
switch (G__47066) {
case 1:
return clojure.core.matrix.sparse_array.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.sparse_array.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args47056.length)].join('')));

}
});

clojure.core.matrix.sparse_array.cljs$core$IFn$_invoke$arity$1 = (function (data){
return clojure.core.matrix.sparse_array.call(null,clojure.core.matrix.implementation_check.call(null),data);
});

clojure.core.matrix.sparse_array.cljs$core$IFn$_invoke$arity$2 = (function (implementation,data){
var or__20675__auto__ = clojure.core.matrix.protocols.sparse_coerce.call(null,clojure.core.matrix.implementation_check.call(null,implementation),data);
if(cljs.core.truth_(or__20675__auto__)){
return or__20675__auto__;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Sparse implementation not available")].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
});

clojure.core.matrix.sparse_array.cljs$lang$maxFixedArity = 2;

/**
 * Creates a sparse matrix with the given data, using a specified implementation
 *   or the current implementation if not specified. Sparse matrices are required to store
 *   a M*N matrix with E non-zero elements in approx O(M+N+E) space or less.
 * 
 *   Throws an exception if creation of a sparse matrix is not possible.
 * 
 *   `sparse-matrix` wqorks as a synonym for `sparse-array`.
 */
clojure.core.matrix.sparse_matrix = (function clojure$core$matrix$sparse_matrix(var_args){
var args47071 = [];
var len__21896__auto___47074 = arguments.length;
var i__21897__auto___47075 = (0);
while(true){
if((i__21897__auto___47075 < len__21896__auto___47074)){
args47071.push((arguments[i__21897__auto___47075]));

var G__47076 = (i__21897__auto___47075 + (1));
i__21897__auto___47075 = G__47076;
continue;
} else {
}
break;
}

var G__47073 = args47071.length;
switch (G__47073) {
case 1:
return clojure.core.matrix.sparse_matrix.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.sparse_matrix.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args47071.length)].join('')));

}
});

clojure.core.matrix.sparse_matrix.cljs$core$IFn$_invoke$arity$1 = (function (data){
return clojure.core.matrix.sparse_array.call(null,data);
});

clojure.core.matrix.sparse_matrix.cljs$core$IFn$_invoke$arity$2 = (function (implementation,data){
return clojure.core.matrix.sparse_array.call(null,implementation,data);
});

clojure.core.matrix.sparse_matrix.cljs$lang$maxFixedArity = 2;

/**
 * Coerces an array to a sparse format if possible. Sparse arrays are expected to
 * minimise space usage for zero elements.
 * 
 * Returns the array unchanged if such coercion is not possible, or if the array is already sparse.
 */
clojure.core.matrix.sparse = (function clojure$core$matrix$sparse(var_args){
var args47078 = [];
var len__21896__auto___47081 = arguments.length;
var i__21897__auto___47082 = (0);
while(true){
if((i__21897__auto___47082 < len__21896__auto___47081)){
args47078.push((arguments[i__21897__auto___47082]));

var G__47083 = (i__21897__auto___47082 + (1));
i__21897__auto___47082 = G__47083;
continue;
} else {
}
break;
}

var G__47080 = args47078.length;
switch (G__47080) {
case 1:
return clojure.core.matrix.sparse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.sparse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args47078.length)].join('')));

}
});

clojure.core.matrix.sparse.cljs$core$IFn$_invoke$arity$1 = (function (data){
return clojure.core.matrix.protocols.sparse.call(null,data);
});

clojure.core.matrix.sparse.cljs$core$IFn$_invoke$arity$2 = (function (implementation,data){
var implementation__$1 = clojure.core.matrix.implementation_check.call(null,implementation);
var or__20675__auto__ = clojure.core.matrix.protocols.sparse_coerce.call(null,implementation__$1,data);
if(cljs.core.truth_(or__20675__auto__)){
return or__20675__auto__;
} else {
return clojure.core.matrix.protocols.coerce_param.call(null,implementation__$1,data);
}
});

clojure.core.matrix.sparse.cljs$lang$maxFixedArity = 2;

/**
 * Coerces an array to a dense format if possible. Dense arrays are expected to
 * allocate contiguous storage space for all elements. Either row-major or column-major
 * storage may be alloacted, depending on the implementation.
 * 
 * 'dense' should not be used with very large arrays, and may throw an OutOfMemoryError
 *  if the dense array is too large to fit in available memory.
 * 
 * Returns the array unchanged if such coercion is not possible, or if the array is already dense.
 */
clojure.core.matrix.dense = (function clojure$core$matrix$dense(var_args){
var args47085 = [];
var len__21896__auto___47088 = arguments.length;
var i__21897__auto___47089 = (0);
while(true){
if((i__21897__auto___47089 < len__21896__auto___47088)){
args47085.push((arguments[i__21897__auto___47089]));

var G__47090 = (i__21897__auto___47089 + (1));
i__21897__auto___47089 = G__47090;
continue;
} else {
}
break;
}

var G__47087 = args47085.length;
switch (G__47087) {
case 1:
return clojure.core.matrix.dense.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.dense.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args47085.length)].join('')));

}
});

clojure.core.matrix.dense.cljs$core$IFn$_invoke$arity$1 = (function (data){
return clojure.core.matrix.protocols.dense.call(null,data);
});

clojure.core.matrix.dense.cljs$core$IFn$_invoke$arity$2 = (function (implementation,data){
var or__20675__auto__ = clojure.core.matrix.protocols.dense_coerce.call(null,implementation,data);
if(cljs.core.truth_(or__20675__auto__)){
return or__20675__auto__;
} else {
return clojure.core.matrix.protocols.coerce_param.call(null,implementation,data);
}
});

clojure.core.matrix.dense.cljs$lang$maxFixedArity = 2;

/**
 * Coerces an array into a native format array if possible. Native arrays may offer
 * superior performance for some operations, depending on the implementation.
 * Returns nil if no appropriate native format exists.
 */
clojure.core.matrix.native$ = (function clojure$core$matrix$native(var_args){
var args47092 = [];
var len__21896__auto___47097 = arguments.length;
var i__21897__auto___47098 = (0);
while(true){
if((i__21897__auto___47098 < len__21896__auto___47097)){
args47092.push((arguments[i__21897__auto___47098]));

var G__47099 = (i__21897__auto___47098 + (1));
i__21897__auto___47098 = G__47099;
continue;
} else {
}
break;
}

var G__47096 = args47092.length;
switch (G__47096) {
case 1:
return clojure.core.matrix.native$.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.native$.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args47092.length)].join('')));

}
});

clojure.core.matrix.native$.cljs$core$IFn$_invoke$arity$1 = (function (a){
var or__20675__auto__ = clojure.core.matrix.protocols.native$.call(null,a);
if(cljs.core.truth_(or__20675__auto__)){
return or__20675__auto__;
} else {
return clojure.core.matrix.native$.call(null,clojure.core.matrix.implementation_check.call(null),a);
}
});

clojure.core.matrix.native$.cljs$core$IFn$_invoke$arity$2 = (function (impl,a){
var a__$1 = clojure.core.matrix.protocols.coerce_param.call(null,impl,a);
return clojure.core.matrix.protocols.native$.call(null,a__$1);
});

clojure.core.matrix.native$.cljs$lang$maxFixedArity = 2;

/**
 * Returns true if the array is in a native format.
 * 
 * Native formats are implementation defined, and may use non-Java resources (e.g. GPU memory).
 */
clojure.core.matrix.native_QMARK_ = (function clojure$core$matrix$native_QMARK_(a){
return clojure.core.matrix.protocols.native_QMARK_.call(null,a);
});
/**
 * Returns true if the implementation for a given matrix supports a specific dimensionality, i.e.
 * can natively create and manipulate matrices with the given number of dimensions
 */
clojure.core.matrix.supports_dimensionality_QMARK_ = (function clojure$core$matrix$supports_dimensionality_QMARK_(m,dimension_count){
var m__$1 = clojure.core.matrix.implementation_check.call(null,m);
return clojure.core.matrix.protocols.supports_dimensionality_QMARK_.call(null,m__$1,dimension_count);
});
/**
 * Returns true if the implementation supports creation of matrices with a specific shape.
 */
clojure.core.matrix.supports_shape_QMARK_ = (function clojure$core$matrix$supports_shape_QMARK_(m,shape){
var m__$1 = (((m instanceof cljs.core.Keyword))?clojure.core.matrix.implementations.get_canonical_object.call(null,m):m);
return clojure.core.matrix.protocols.supports_dimensionality_QMARK_.call(null,m__$1,cljs.core.count.call(null,shape));
});
/**
 * Assigns a new value to an array. Sets the values of the target element-wise, broadcasting where necessary.
 * Returns the mutated array. The new value may be either a scalar or a array of compatible (maybe smaller) shape.
 */
clojure.core.matrix.assign_BANG_ = (function clojure$core$matrix$assign_BANG_(m,a){
clojure.core.matrix.protocols.assign_BANG_.call(null,m,a);

return m;
});
/**
 * Assigns values to a core.matrix array from a Java array, in element-wise order. Element type of Java array must be compatible.
 * Returns the mutated core.matrix array
 */
clojure.core.matrix.assign_array_BANG_ = (function clojure$core$matrix$assign_array_BANG_(var_args){
var args47108 = [];
var len__21896__auto___47111 = arguments.length;
var i__21897__auto___47112 = (0);
while(true){
if((i__21897__auto___47112 < len__21896__auto___47111)){
args47108.push((arguments[i__21897__auto___47112]));

var G__47113 = (i__21897__auto___47112 + (1));
i__21897__auto___47112 = G__47113;
continue;
} else {
}
break;
}

var G__47110 = args47108.length;
switch (G__47110) {
case 2:
return clojure.core.matrix.assign_array_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.matrix.assign_array_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args47108.length)].join('')));

}
});

clojure.core.matrix.assign_array_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (m,arr){
clojure.core.matrix.protocols.assign_array_BANG_.call(null,m,arr);

return m;
});

clojure.core.matrix.assign_array_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (m,arr,offset){
clojure.core.matrix.protocols.assign_array_BANG_.call(null,m,arr,offset,clojure.core.matrix.protocols.element_count.call(null,m));

return m;
});

clojure.core.matrix.assign_array_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * Assigns array a element-wise, broadcasting to fill the whole shape of m.
 * Returns a new matrix, of the same shape as the original m.
 */
clojure.core.matrix.assign = (function clojure$core$matrix$assign(m,a){
return clojure.core.matrix.protocols.assign.call(null,m,a);
});
/**
 * Constructs a (shallow) clone of the array. This function is intended to
 * allow safe defensive usage of matrices / vectors. If the intent is to create a mutable clone of
 * some array data, it is recommended to use mutable instead.
 * 
 * Guarantees that:
 * 1. Mutating the returned array will not modify any other array (defensive copy)
 * 2. The returned array will be fully mutable, if the implementation supports mutable matrices.
 * 
 * The clone may or may not be of the same implementation: implementations are encouraged to do so but
 * this is not mandatory.
 * 
 * A core.matrix implementation which only provides immutable arrays may safely return the same array.
 */
clojure.core.matrix.clone = (function clojure$core$matrix$clone(m){
return clojure.core.matrix.protocols.clone.call(null,m);
});
/**
 * Converts an array to an idiomatic, immutable nested Clojure vector format. The bottom level of the
 * nested vectors will contain the element values. Higher levels will all implement IPersistentVector.
 * 
 * The depth of nesting will be equal to the dimensionality of the array.
 */
clojure.core.matrix.to_nested_vectors = (function clojure$core$matrix$to_nested_vectors(m){
return clojure.core.matrix.protocols.convert_to_nested_vectors.call(null,m);
});
/**
 * Coerces m to a scalar value. Result is guaranteed not to be an array.
 * Will throw an exception if m is not zero-dimensional.
 */
clojure.core.matrix.scalar = (function clojure$core$matrix$scalar(m){
return clojure.core.matrix.protocols.get_0d.call(null,m);
});
/**
 * Returns true if the parameter is a valid core.matrix N-dimensional array, for any N>=0.
 */
clojure.core.matrix.array_QMARK_ = (function clojure$core$matrix$array_QMARK_(m){
return cljs.core.not.call(null,clojure.core.matrix.protocols.is_scalar_QMARK_.call(null,m));
});
/**
 * Returns true if parameter is a valid core.matrix matrix (i.e. an array with dimensionality == 2)
 */
clojure.core.matrix.matrix_QMARK_ = (function clojure$core$matrix$matrix_QMARK_(m){
return (cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,m)) === (2));
});
/**
 * Returns true if the parameter is a core.matrix vector (1-dimensional array)
 */
clojure.core.matrix.vec_QMARK_ = (function clojure$core$matrix$vec_QMARK_(m){
return clojure.core.matrix.protocols.is_vector_QMARK_.call(null,m);
});
/**
 * Returns true if the parameter is a scalar value (i.e. acceptable as matrix element value).
 * A 0-d array containing a scalar is *not* itself a scalar value.
 */
clojure.core.matrix.scalar_QMARK_ = (function clojure$core$matrix$scalar_QMARK_(v){
return clojure.core.matrix.protocols.is_scalar_QMARK_.call(null,v);
});
/**
 * Returns true if the parameter has zero dimensions. i.e. it is a 0-d array or a scalar value.
 * 
 * Behaviour is the same as `scalar?`, except that true is returned for 0-dimensional arrays.
 */
clojure.core.matrix.zero_dimensional_QMARK_ = (function clojure$core$matrix$zero_dimensional_QMARK_(m){
return ((0) === cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,m)));
});
/**
 * Returns true if the parameter is an identity-matrix, i.e. a symmetric square matrix with element values
 * of 1 on the leading diagonal and 0 elsewhere.
 */
clojure.core.matrix.identity_matrix_QMARK_ = (function clojure$core$matrix$identity_matrix_QMARK_(m){
return clojure.core.matrix.protocols.identity_matrix_QMARK_.call(null,m);
});
/**
 * Returns true if all the elements of the parameter are zero.
 */
clojure.core.matrix.zero_matrix_QMARK_ = (function clojure$core$matrix$zero_matrix_QMARK_(m){
return clojure.core.matrix.protocols.zero_matrix_QMARK_.call(null,m);
});
/**
 * Returns true if the parameter is a symmetric matrix, i.e. Aij = Aji for all i,j.
 */
clojure.core.matrix.symmetric_QMARK_ = (function clojure$core$matrix$symmetric_QMARK_(m){
return clojure.core.matrix.protocols.symmetric_QMARK_.call(null,m);
});
/**
 * Returns true if the parameter is a diagonal matrix.
 */
clojure.core.matrix.diagonal_QMARK_ = (function clojure$core$matrix$diagonal_QMARK_(m){
return clojure.core.matrix.protocols.diagonal_QMARK_.call(null,m);
});
/**
 * Returns true if the parameter is a upper triangular matrix.
 */
clojure.core.matrix.upper_triangular_QMARK_ = (function clojure$core$matrix$upper_triangular_QMARK_(m){
return clojure.core.matrix.protocols.upper_triangular_QMARK_.call(null,m);
});
/**
 * Returns true if the parameter is a lower triangular matrix.
 */
clojure.core.matrix.lower_triangular_QMARK_ = (function clojure$core$matrix$lower_triangular_QMARK_(m){
return clojure.core.matrix.protocols.lower_triangular_QMARK_.call(null,m);
});
/**
 * Returns true if the parameter is an orthogonal matrix.
 */
clojure.core.matrix.orthogonal_QMARK_ = (function clojure$core$matrix$orthogonal_QMARK_(var_args){
var args47126 = [];
var len__21896__auto___47131 = arguments.length;
var i__21897__auto___47132 = (0);
while(true){
if((i__21897__auto___47132 < len__21896__auto___47131)){
args47126.push((arguments[i__21897__auto___47132]));

var G__47133 = (i__21897__auto___47132 + (1));
i__21897__auto___47132 = G__47133;
continue;
} else {
}
break;
}

var G__47130 = args47126.length;
switch (G__47130) {
case 2:
return clojure.core.matrix.orthogonal_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return clojure.core.matrix.orthogonal_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args47126.length)].join('')));

}
});

clojure.core.matrix.orthogonal_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (m,eps){
return clojure.core.matrix.protocols.orthogonal_QMARK_.call(null,m,eps);
});

clojure.core.matrix.orthogonal_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (m){
return clojure.core.matrix.protocols.orthogonal_QMARK_.call(null,m,1.0E-5);
});

clojure.core.matrix.orthogonal_QMARK_.cljs$lang$maxFixedArity = 2;

/**
 * Returns true if an array is sparse, i.e. the implementation supports storage of the entire
 * array in less memory than would normally be implied by the number of elements.
 * 
 * Sparse matrices may have memory requirements that scale with the number of non-zero elements
 * rather than the total number of elements, for example.
 */
clojure.core.matrix.sparse_QMARK_ = (function clojure$core$matrix$sparse_QMARK_(m){
return clojure.core.matrix.protocols.is_sparse_QMARK_.call(null,m);
});
/**
 * Returns the class of elements that can be in the array. For example, a numerical array may return
 * the class java.lang.Double.
 */
clojure.core.matrix.element_type = (function clojure$core$matrix$element_type(m){
return clojure.core.matrix.protocols.element_type.call(null,m);
});
/**
 * Returns the dimensionality of an array. The dimensionality is equal to
 * the number of dimensions in the array's shape.
 */
clojure.core.matrix.dimensionality = (function clojure$core$matrix$dimensionality(m){
return cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,m));
});
/**
 * Returns the size of the specified dimension in a matrix. Will throw an error if the matrix
 * does not have the specified dimension.
 */
clojure.core.matrix.dimension_count = (function clojure$core$matrix$dimension_count(m,dim){
return cljs.core.long$.call(null,clojure.core.matrix.protocols.dimension_count.call(null,m,dim));
});
/**
 * Returns the number of rows in a matrix or vector (array must be 1D or more).
 */
clojure.core.matrix.row_count = (function clojure$core$matrix$row_count(m){
return clojure.core.matrix.dimension_count.call(null,m,(0));
});
/**
 * Returns the number of columns in a matrix (array must be 2D or more)
 */
clojure.core.matrix.column_count = (function clojure$core$matrix$column_count(m){
return clojure.core.matrix.dimension_count.call(null,m,(1));
});
/**
 * Returns the number of slices in an array (array must be 1D or more). The array is sliced
 * in row-major order, i.e. this is the dimension count of the first dimension.
 */
clojure.core.matrix.slice_count = (function clojure$core$matrix$slice_count(m){
return clojure.core.matrix.dimension_count.call(null,m,(0));
});
/**
 * Returns the total count of elements in an array, as an integer value.
 * 
 * Equal to the product of the lengths of each dimension in the array's shape.
 * 
 * Result will usually be a Long, however callers should note that for very large sparse arrays
 * the element count may be a BigInteger, i.e. equal to or larger than 2^63.
 * 
 * Returns 1 for a zero-dimensional array or scalar. 
 */
clojure.core.matrix.ecount = (function clojure$core$matrix$ecount(m){
return clojure.core.matrix.protocols.element_count.call(null,m);
});
/**
 * Returns true if matrix is square (i.e. a 2D array with same number of rows and columns)
 */
clojure.core.matrix.square_QMARK_ = (function clojure$core$matrix$square_QMARK_(m){
return (((2) === clojure.core.matrix.dimensionality.call(null,m))) && ((clojure.core.matrix.dimension_count.call(null,m,(0)) === clojure.core.matrix.dimension_count.call(null,m,(1))));
});
/**
 * Returns true if a matrix is a row-matrix (i.e. is 2D and has exactly one row)
 */
clojure.core.matrix.row_matrix_QMARK_ = (function clojure$core$matrix$row_matrix_QMARK_(m){
return ((cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,m)) === (2))) && (((1) === clojure.core.matrix.dimension_count.call(null,m,(0))));
});
/**
 * Returns true if a matrix is a column-matrix (i.e. is 2D and has has exactly one column)
 */
clojure.core.matrix.column_matrix_QMARK_ = (function clojure$core$matrix$column_matrix_QMARK_(m){
return ((cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,m)) === (2))) && (((1) === clojure.core.matrix.dimension_count.call(null,m,(1))));
});
/**
 * Returns the rank of each element in an array, as an array of indexes with 0 being first, in ascending order.
 * 
 * If passed a higher dimensional array, returns an array of ranks along the last dimension.
 * 
 * An optional comparator may be provided, otherwise the default comparator will be used. Comparator should
 * support java.util.Comparator on the JVM, although some implementations may support alternative comparator types 
 * e.g. Clojure predicates. Please check the documentation for your core.matrix implementation.
 */
clojure.core.matrix.rank = (function clojure$core$matrix$rank(var_args){
var args47145 = [];
var len__21896__auto___47148 = arguments.length;
var i__21897__auto___47149 = (0);
while(true){
if((i__21897__auto___47149 < len__21896__auto___47148)){
args47145.push((arguments[i__21897__auto___47149]));

var G__47150 = (i__21897__auto___47149 + (1));
i__21897__auto___47149 = G__47150;
continue;
} else {
}
break;
}

var G__47147 = args47145.length;
switch (G__47147) {
case 1:
return clojure.core.matrix.rank.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.rank.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args47145.length)].join('')));

}
});

clojure.core.matrix.rank.cljs$core$IFn$_invoke$arity$1 = (function (a){
return clojure.core.matrix.protocols.index_rank.call(null,a);
});

clojure.core.matrix.rank.cljs$core$IFn$_invoke$arity$2 = (function (comparator,a){
return clojure.core.matrix.protocols.index_rank.call(null,a,comparator);
});

clojure.core.matrix.rank.cljs$lang$maxFixedArity = 2;

/**
 * Returns the shape of an array, i.e. the dimension sizes for all dimensions.
 * 
 * The result will be a vector containing only integer index values, with a count
 * equal to the dimensionality of the array.
 * 
 * Returns nil the if object is not an array (i.e. is a scalar value)
 */
clojure.core.matrix.shape = (function clojure$core$matrix$shape(m){
var temp__6751__auto__ = clojure.core.matrix.protocols.get_shape.call(null,m);
if(cljs.core.truth_(temp__6751__auto__)){
var sh = temp__6751__auto__;
return cljs.core.vec.call(null,sh);
} else {
return null;
}
});
/**
 * Returns the number of zeros in an array.
 * 
 * Result will usually be a Long, however callers should note that for very large sparse arrays
 * the zero count may be a BigInteger, i.e. equal to or larger than 2^63.
 */
clojure.core.matrix.zero_count = (function clojure$core$matrix$zero_count(m){
return clojure.core.matrix.protocols.zero_count.call(null,m);
});
/**
 * Returns the density of the matrix, defined as the proportion of non-zero elements
 */
clojure.core.matrix.density = (function clojure$core$matrix$density(m){
var zeros = clojure.core.matrix.protocols.zero_count.call(null,m);
var elems = clojure.core.matrix.protocols.element_count.call(null,m);
return ((elems - zeros) / elems);
});
/**
 * Returns true if the matrix is mutable, i.e. supports setting of values.
 * 
 * It is possible for some matrix implementations to have constraints on mutability (e.g. mutable only in diagonal elements),
 * this method will still return true for such cases.
 */
clojure.core.matrix.mutable_QMARK_ = (function clojure$core$matrix$mutable_QMARK_(m){
return clojure.core.matrix.protocols.is_mutable_QMARK_.call(null,m);
});
/**
 * Returns true if the parameter is a valid array index type. An index is a seq-able 1D list
 * of integer values that can be used to index into arrays.
 */
clojure.core.matrix.index_QMARK_ = (function clojure$core$matrix$index_QMARK_(m){
return clojure.core.matrix.protocols.index_QMARK_.call(null,m);
});
/**
 * Returns true if two arrays have a conforming shape. Two arrays are conforming if there
 * exists a common shape that both can broadcast to. This is a requirement for element-wise
 * operations to work correctly on two different-shaped arrays.
 */
clojure.core.matrix.conforming_QMARK_ = (function clojure$core$matrix$conforming_QMARK_(var_args){
var args47156 = [];
var len__21896__auto___47161 = arguments.length;
var i__21897__auto___47162 = (0);
while(true){
if((i__21897__auto___47162 < len__21896__auto___47161)){
args47156.push((arguments[i__21897__auto___47162]));

var G__47163 = (i__21897__auto___47162 + (1));
i__21897__auto___47162 = G__47163;
continue;
} else {
}
break;
}

var G__47158 = args47156.length;
switch (G__47158) {
case 1:
return clojure.core.matrix.conforming_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.conforming_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args47156.length)].join('')));

}
});

clojure.core.matrix.conforming_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (a){
return true;
});

clojure.core.matrix.conforming_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
var sa = clojure.core.matrix.protocols.get_shape.call(null,a);
var sb = clojure.core.matrix.protocols.get_shape.call(null,b);
return ((cljs.core.count.call(null,sa) >= cljs.core.count.call(null,sb))) && (cljs.core.every_QMARK_.call(null,cljs.core.identity,cljs.core.map.call(null,cljs.core._EQ_,cljs.core.reverse.call(null,sa),cljs.core.reverse.call(null,sb))));
});

clojure.core.matrix.conforming_QMARK_.cljs$lang$maxFixedArity = 2;

/**
 * Returns true if the arrays have the same shape, false otherwise
 */
clojure.core.matrix.same_shape_QMARK_ = (function clojure$core$matrix$same_shape_QMARK_(var_args){
var args47165 = [];
var len__21896__auto___47171 = arguments.length;
var i__21897__auto___47172 = (0);
while(true){
if((i__21897__auto___47172 < len__21896__auto___47171)){
args47165.push((arguments[i__21897__auto___47172]));

var G__47173 = (i__21897__auto___47172 + (1));
i__21897__auto___47172 = G__47173;
continue;
} else {
}
break;
}

var G__47170 = args47165.length;
switch (G__47170) {
case 0:
return clojure.core.matrix.same_shape_QMARK_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return clojure.core.matrix.same_shape_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.same_shape_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__21919__auto__ = (new cljs.core.IndexedSeq(args47165.slice((2)),(0),null));
return clojure.core.matrix.same_shape_QMARK_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__21919__auto__);

}
});

clojure.core.matrix.same_shape_QMARK_.cljs$core$IFn$_invoke$arity$0 = (function (){
return true;
});

clojure.core.matrix.same_shape_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (m){
return true;
});

clojure.core.matrix.same_shape_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (m,n){
var or__20675__auto__ = (m === n);
if(or__20675__auto__){
return or__20675__auto__;
} else {
return clojure.core.matrix.protocols.same_shape_QMARK_.call(null,m,n);
}
});

clojure.core.matrix.same_shape_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (m,n,more){
var m__$1 = m;
var n__$1 = n;
var more__$1 = cljs.core.seq.call(null,more);
while(true){
if(cljs.core.truth_((function (){var or__20675__auto__ = (m__$1 === n__$1);
if(or__20675__auto__){
return or__20675__auto__;
} else {
return clojure.core.matrix.protocols.same_shape_QMARK_.call(null,m__$1,n__$1);
}
})())){
if(more__$1){
var G__47175 = n__$1;
var G__47176 = cljs.core.first.call(null,more__$1);
var G__47177 = cljs.core.next.call(null,more__$1);
m__$1 = G__47175;
n__$1 = G__47176;
more__$1 = G__47177;
continue;
} else {
return true;
}
} else {
return false;
}
break;
}
});

clojure.core.matrix.same_shape_QMARK_.cljs$lang$applyTo = (function (seq47166){
var G__47167 = cljs.core.first.call(null,seq47166);
var seq47166__$1 = cljs.core.next.call(null,seq47166);
var G__47168 = cljs.core.first.call(null,seq47166__$1);
var seq47166__$2 = cljs.core.next.call(null,seq47166__$1);
return clojure.core.matrix.same_shape_QMARK_.cljs$core$IFn$_invoke$arity$variadic(G__47167,G__47168,seq47166__$2);
});

clojure.core.matrix.same_shape_QMARK_.cljs$lang$maxFixedArity = (2);

/**
 * Returns true if the matrix is a valid numerical matrix (i.e. supports numerical core.matrix operations).
 */
clojure.core.matrix.numerical_QMARK_ = (function clojure$core$matrix$numerical_QMARK_(m){
return clojure.core.matrix.protocols.numerical_QMARK_.call(null,m);
});
/**
 * Returns a Java double[] array containing the values of a numerical array m in row-major order. Will
 *  throw an error if any of the array elements cannot be converted to doubles.
 * 
 *  If want-copy? is true, will guarantee a new double array (defensive copy).
 *  If want-copy? is false, will return the internal array used by m, or nil if not supported
 *  by the implementation.
 *  If want-copy? is not specified, will return either a copy or the internal array
 */
clojure.core.matrix.to_double_array = (function clojure$core$matrix$to_double_array(var_args){
var args47178 = [];
var len__21896__auto___47181 = arguments.length;
var i__21897__auto___47182 = (0);
while(true){
if((i__21897__auto___47182 < len__21896__auto___47181)){
args47178.push((arguments[i__21897__auto___47182]));

var G__47183 = (i__21897__auto___47182 + (1));
i__21897__auto___47182 = G__47183;
continue;
} else {
}
break;
}

var G__47180 = args47178.length;
switch (G__47180) {
case 1:
return clojure.core.matrix.to_double_array.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.to_double_array.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args47178.length)].join('')));

}
});

clojure.core.matrix.to_double_array.cljs$core$IFn$_invoke$arity$1 = (function (m){
return clojure.core.matrix.protocols.to_double_array.call(null,m);
});

clojure.core.matrix.to_double_array.cljs$core$IFn$_invoke$arity$2 = (function (m,want_copy_QMARK_){
var arr = clojure.core.matrix.protocols.as_double_array.call(null,m);
if(cljs.core.truth_(want_copy_QMARK_)){
if(cljs.core.truth_(arr)){
return clojure.core.matrix.utils.copy_double_array.call(null,arr);
} else {
return clojure.core.matrix.protocols.to_double_array.call(null,m);
}
} else {
return arr;
}
});

clojure.core.matrix.to_double_array.cljs$lang$maxFixedArity = 2;

/**
 * Returns a Java Object[] array containing the values of an array m in row-major order.
 * 
 *  If want-copy? is true, will guarantee a new Object array (defensive copy).
 *  If want-copy? is false, will return the internal array used by m, or nil if not supported
 *  by the implementation.
 *  If want-copy? is not specified, will return either a copy or the internal array
 */
clojure.core.matrix.to_object_array = (function clojure$core$matrix$to_object_array(var_args){
var args47187 = [];
var len__21896__auto___47190 = arguments.length;
var i__21897__auto___47191 = (0);
while(true){
if((i__21897__auto___47191 < len__21896__auto___47190)){
args47187.push((arguments[i__21897__auto___47191]));

var G__47192 = (i__21897__auto___47191 + (1));
i__21897__auto___47191 = G__47192;
continue;
} else {
}
break;
}

var G__47189 = args47187.length;
switch (G__47189) {
case 1:
return clojure.core.matrix.to_object_array.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.to_object_array.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args47187.length)].join('')));

}
});

clojure.core.matrix.to_object_array.cljs$core$IFn$_invoke$arity$1 = (function (m){
return clojure.core.matrix.protocols.to_object_array.call(null,m);
});

clojure.core.matrix.to_object_array.cljs$core$IFn$_invoke$arity$2 = (function (m,want_copy_QMARK_){
var arr = clojure.core.matrix.protocols.as_object_array.call(null,m);
if(cljs.core.truth_(want_copy_QMARK_)){
if(cljs.core.truth_(arr)){
return clojure.core.matrix.utils.copy_object_array.call(null,arr);
} else {
return clojure.core.matrix.protocols.to_object_array.call(null,m);
}
} else {
return arr;
}
});

clojure.core.matrix.to_object_array.cljs$lang$maxFixedArity = 2;

/**
 * Packs array data in the most efficient format as defined by the implementation. May return the
 * same array if no additional packing is required.
 */
clojure.core.matrix.pack = (function clojure$core$matrix$pack(a){
return clojure.core.matrix.protocols.pack.call(null,a);
});
/**
 * Coerces param (which may be any array) into a format preferred by a specific matrix implementation.
 * If the matrix implementation is not specified, uses the current matrix implementation.
 * If param is already in a format deemed usable by the implementation, may return it unchanged.
 * 
 * coerce should never alter the shape of the array, but may convert element types where necessary
 * (e.g. turning real values into complex values when converting to a complex array type).
 */
clojure.core.matrix.coerce = (function clojure$core$matrix$coerce(var_args){
var args47194 = [];
var len__21896__auto___47197 = arguments.length;
var i__21897__auto___47198 = (0);
while(true){
if((i__21897__auto___47198 < len__21896__auto___47197)){
args47194.push((arguments[i__21897__auto___47198]));

var G__47199 = (i__21897__auto___47198 + (1));
i__21897__auto___47198 = G__47199;
continue;
} else {
}
break;
}

var G__47196 = args47194.length;
switch (G__47196) {
case 1:
return clojure.core.matrix.coerce.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.coerce.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args47194.length)].join('')));

}
});

clojure.core.matrix.coerce.cljs$core$IFn$_invoke$arity$1 = (function (param){
var m = clojure.core.matrix.implementations.get_canonical_object.call(null);
var or__20675__auto__ = clojure.core.matrix.protocols.coerce_param.call(null,m,param);
if(cljs.core.truth_(or__20675__auto__)){
return or__20675__auto__;
} else {
return clojure.core.matrix.protocols.coerce_param.call(null,m,clojure.core.matrix.protocols.convert_to_nested_vectors.call(null,param));
}
});

clojure.core.matrix.coerce.cljs$core$IFn$_invoke$arity$2 = (function (matrix_or_implementation,param){
var m = (((matrix_or_implementation instanceof cljs.core.Keyword))?clojure.core.matrix.implementations.get_canonical_object.call(null,matrix_or_implementation):matrix_or_implementation);
var or__20675__auto__ = clojure.core.matrix.protocols.coerce_param.call(null,m,param);
if(cljs.core.truth_(or__20675__auto__)){
return or__20675__auto__;
} else {
return clojure.core.matrix.protocols.coerce_param.call(null,m,clojure.core.matrix.protocols.convert_to_nested_vectors.call(null,param));
}
});

clojure.core.matrix.coerce.cljs$lang$maxFixedArity = 2;

/**
 * Gets a scalar value from an array at the specified position. Supports any number of dimensions.
 */
clojure.core.matrix.mget = (function clojure$core$matrix$mget(var_args){
var args47201 = [];
var len__21896__auto___47208 = arguments.length;
var i__21897__auto___47209 = (0);
while(true){
if((i__21897__auto___47209 < len__21896__auto___47208)){
args47201.push((arguments[i__21897__auto___47209]));

var G__47213 = (i__21897__auto___47209 + (1));
i__21897__auto___47209 = G__47213;
continue;
} else {
}
break;
}

var G__47207 = args47201.length;
switch (G__47207) {
case 1:
return clojure.core.matrix.mget.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.mget.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.matrix.mget.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__21919__auto__ = (new cljs.core.IndexedSeq(args47201.slice((3)),(0),null));
return clojure.core.matrix.mget.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__21919__auto__);

}
});

clojure.core.matrix.mget.cljs$core$IFn$_invoke$arity$1 = (function (m){
return clojure.core.matrix.protocols.get_0d.call(null,m);
});

clojure.core.matrix.mget.cljs$core$IFn$_invoke$arity$2 = (function (m,x){
return clojure.core.matrix.protocols.get_1d.call(null,m,x);
});

clojure.core.matrix.mget.cljs$core$IFn$_invoke$arity$3 = (function (m,x,y){
return clojure.core.matrix.protocols.get_2d.call(null,m,x,y);
});

clojure.core.matrix.mget.cljs$core$IFn$_invoke$arity$variadic = (function (m,x,y,more){
return clojure.core.matrix.protocols.get_nd.call(null,m,cljs.core.cons.call(null,x,cljs.core.cons.call(null,y,more)));
});

clojure.core.matrix.mget.cljs$lang$applyTo = (function (seq47202){
var G__47203 = cljs.core.first.call(null,seq47202);
var seq47202__$1 = cljs.core.next.call(null,seq47202);
var G__47204 = cljs.core.first.call(null,seq47202__$1);
var seq47202__$2 = cljs.core.next.call(null,seq47202__$1);
var G__47205 = cljs.core.first.call(null,seq47202__$2);
var seq47202__$3 = cljs.core.next.call(null,seq47202__$2);
return clojure.core.matrix.mget.cljs$core$IFn$_invoke$arity$variadic(G__47203,G__47204,G__47205,seq47202__$3);
});

clojure.core.matrix.mget.cljs$lang$maxFixedArity = (3);

/**
 * Sets a scalar value in an array at the specified position. Supports any number of dimensions.
 * 
 * Returns a new matrix and leaves the original unchanged.
 * 
 * WARNING: performance of this operation may be as high as O(N) where N is the number of elements in
 * the array. Consider using mutable arrays and `mset!` when setting large numbers of individual elements
 * is required.
 */
clojure.core.matrix.mset = (function clojure$core$matrix$mset(var_args){
var args47218 = [];
var len__21896__auto___47226 = arguments.length;
var i__21897__auto___47227 = (0);
while(true){
if((i__21897__auto___47227 < len__21896__auto___47226)){
args47218.push((arguments[i__21897__auto___47227]));

var G__47228 = (i__21897__auto___47227 + (1));
i__21897__auto___47227 = G__47228;
continue;
} else {
}
break;
}

var G__47225 = args47218.length;
switch (G__47225) {
case 2:
return clojure.core.matrix.mset.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.matrix.mset.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return clojure.core.matrix.mset.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__21919__auto__ = (new cljs.core.IndexedSeq(args47218.slice((4)),(0),null));
return clojure.core.matrix.mset.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__21919__auto__);

}
});

clojure.core.matrix.mset.cljs$core$IFn$_invoke$arity$2 = (function (m,v){
return clojure.core.matrix.protocols.set_0d.call(null,m,v);
});

clojure.core.matrix.mset.cljs$core$IFn$_invoke$arity$3 = (function (m,x,v){
return clojure.core.matrix.protocols.set_1d.call(null,m,x,v);
});

clojure.core.matrix.mset.cljs$core$IFn$_invoke$arity$4 = (function (m,x,y,v){
return clojure.core.matrix.protocols.set_2d.call(null,m,x,y,v);
});

clojure.core.matrix.mset.cljs$core$IFn$_invoke$arity$variadic = (function (m,x,y,z,more){
return clojure.core.matrix.protocols.set_nd.call(null,m,cljs.core.cons.call(null,x,cljs.core.cons.call(null,y,cljs.core.cons.call(null,z,cljs.core.butlast.call(null,more)))),cljs.core.last.call(null,more));
});

clojure.core.matrix.mset.cljs$lang$applyTo = (function (seq47219){
var G__47220 = cljs.core.first.call(null,seq47219);
var seq47219__$1 = cljs.core.next.call(null,seq47219);
var G__47221 = cljs.core.first.call(null,seq47219__$1);
var seq47219__$2 = cljs.core.next.call(null,seq47219__$1);
var G__47222 = cljs.core.first.call(null,seq47219__$2);
var seq47219__$3 = cljs.core.next.call(null,seq47219__$2);
var G__47223 = cljs.core.first.call(null,seq47219__$3);
var seq47219__$4 = cljs.core.next.call(null,seq47219__$3);
return clojure.core.matrix.mset.cljs$core$IFn$_invoke$arity$variadic(G__47220,G__47221,G__47222,G__47223,seq47219__$4);
});

clojure.core.matrix.mset.cljs$lang$maxFixedArity = (4);

/**
 * Mutates a scalar value in an array at the specified position. Supports any number of dimensions.
 * 
 * Will throw an exception if the matrix is not mutable at the specified position. Note that it
 * is possible for some arrays to be mutable in places and immutable in others (e.g. sparse arrays)
 * 
 * Returns the modified matrix (it is guaranteed to return the same instance)
 */
clojure.core.matrix.mset_BANG_ = (function clojure$core$matrix$mset_BANG_(var_args){
var args47232 = [];
var len__21896__auto___47243 = arguments.length;
var i__21897__auto___47244 = (0);
while(true){
if((i__21897__auto___47244 < len__21896__auto___47243)){
args47232.push((arguments[i__21897__auto___47244]));

var G__47245 = (i__21897__auto___47244 + (1));
i__21897__auto___47244 = G__47245;
continue;
} else {
}
break;
}

var G__47240 = args47232.length;
switch (G__47240) {
case 2:
return clojure.core.matrix.mset_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.matrix.mset_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return clojure.core.matrix.mset_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return clojure.core.matrix.mset_BANG_.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
var argseq__21919__auto__ = (new cljs.core.IndexedSeq(args47232.slice((5)),(0),null));
return clojure.core.matrix.mset_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__21919__auto__);

}
});

clojure.core.matrix.mset_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (m,v){
clojure.core.matrix.protocols.set_0d_BANG_.call(null,m,v);

return m;
});

clojure.core.matrix.mset_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (m,x,v){
clojure.core.matrix.protocols.set_1d_BANG_.call(null,m,x,v);

return m;
});

clojure.core.matrix.mset_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (m,x,y,v){
clojure.core.matrix.protocols.set_2d_BANG_.call(null,m,x,y,v);

return m;
});

clojure.core.matrix.mset_BANG_.cljs$core$IFn$_invoke$arity$5 = (function (m,x,y,z,v){
clojure.core.matrix.protocols.set_nd_BANG_.call(null,m,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,z], null),v);

return m;
});

clojure.core.matrix.mset_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (m,x,y,z,t,more){
clojure.core.matrix.protocols.set_nd_BANG_.call(null,m,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,z,t], null),cljs.core.butlast.call(null,more)),cljs.core.last.call(null,more));

return m;
});

clojure.core.matrix.mset_BANG_.cljs$lang$applyTo = (function (seq47233){
var G__47234 = cljs.core.first.call(null,seq47233);
var seq47233__$1 = cljs.core.next.call(null,seq47233);
var G__47235 = cljs.core.first.call(null,seq47233__$1);
var seq47233__$2 = cljs.core.next.call(null,seq47233__$1);
var G__47236 = cljs.core.first.call(null,seq47233__$2);
var seq47233__$3 = cljs.core.next.call(null,seq47233__$2);
var G__47237 = cljs.core.first.call(null,seq47233__$3);
var seq47233__$4 = cljs.core.next.call(null,seq47233__$3);
var G__47238 = cljs.core.first.call(null,seq47233__$4);
var seq47233__$5 = cljs.core.next.call(null,seq47233__$4);
return clojure.core.matrix.mset_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__47234,G__47235,G__47236,G__47237,G__47238,seq47233__$5);
});

clojure.core.matrix.mset_BANG_.cljs$lang$maxFixedArity = (5);

/**
 * Gets a row of a matrix, as a 1D vector.
 * 
 * The format of the returned 1D vector is determined by the implementation of the source matrix. 
 * get-row may return a lightweight mutable view if supported by the implementation.
 */
clojure.core.matrix.get_row = (function clojure$core$matrix$get_row(m,x){
return clojure.core.matrix.protocols.get_row.call(null,m,x);
});
/**
 * Gets a column of a matrix, as a 1D vector.
 * 
 * The format of the returned 1D vector is determined by the implementation of the source matrix. 
 * get-column may return a lightweight mutable view if supported by the implementation.
 */
clojure.core.matrix.get_column = (function clojure$core$matrix$get_column(m,y){
return clojure.core.matrix.protocols.get_column.call(null,m,y);
});
/**
 * Slices along all dimensions where there is a numerical argument
 */
clojure.core.matrix.slice_dims = (function clojure$core$matrix$slice_dims(m,args,slice_func){
var shape = clojure.core.matrix.protocols.get_shape.call(null,m);
var N = cljs.core.count.call(null,args);
if(cljs.core.not_EQ_.call(null,N,clojure.core.matrix.dimensionality.call(null,m))){
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Inconsistent count of selection arguments "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" for shape "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(shape)].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
}

var m__$1 = m;
var i = (0);
var args__$1 = cljs.core.seq.call(null,args);
while(true){
if(args__$1){
var ix = cljs.core.first.call(null,args__$1);
if(typeof ix === 'number'){
var G__47260 = slice_func.call(null,m__$1,i,ix);
var G__47261 = i;
var G__47262 = cljs.core.next.call(null,args__$1);
m__$1 = G__47260;
i = G__47261;
args__$1 = G__47262;
continue;
} else {
var G__47263 = m__$1;
var G__47264 = (i + (1));
var G__47265 = cljs.core.next.call(null,args__$1);
m__$1 = G__47263;
i = G__47264;
args__$1 = G__47265;
continue;
}
} else {
return m__$1;
}
break;
}
});
/**
 * Normalises arg to either a number of a sequable list of indexes
 */
clojure.core.matrix.normalise_arg = (function clojure$core$matrix$normalise_arg(arg,dim_count){
if(typeof arg === 'number'){
return arg;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"all","all",892129742),arg)){
return cljs.core.vec.call(null,cljs.core.range.call(null,dim_count));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"last","last",1105735132),arg)){
return (dim_count - (1));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"butlast","butlast",-67491942),arg)){
return cljs.core.vec.call(null,cljs.core.range.call(null,(dim_count - (1))));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"first","first",-644103046),arg)){
return (0);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"rest","rest",-1241696419),arg)){
return cljs.core.vec.call(null,cljs.core.range.call(null,(1),dim_count));
} else {
return arg;

}
}
}
}
}
}
});
/**
 * Normalises arguments by mapping :all to the complete range
 */
clojure.core.matrix.normalise_args = (function clojure$core$matrix$normalise_args(args,m){
return cljs.core.mapv.call(null,clojure.core.matrix.normalise_arg,args,clojure.core.matrix.protocols.get_shape.call(null,m));
});
/**
 * Returns an array containing all elements in a which are at the positions
 * of the Cartesian product of args. An argument can be:
 *  - a number - slices at this dimension (eliminates the dimension),
 *  - a keyword which selects specific slices (:first :last)
 *  - a 1-dimensional array of numbers which selects the slices at these indices
 *  - a keyword which selects a range of slices (:all :butlast :rest)
 * 
 * The number of args must match the dimensionality of a.
 * 
 * Examples:
 * (select [[1 2][3 4]] 0 0) ;=> 1
 * (select [[1 2][3 4]] 0 :all) ;=> [1 2]
 * (select [[1 2][3 4]] [0 1] [0]) ;=> [[1] [3]]
 * (select [[1 2][3 4]] :all 0) ;=> [1 3]
 */
clojure.core.matrix.select = (function clojure$core$matrix$select(var_args){
var args__21903__auto__ = [];
var len__21896__auto___47274 = arguments.length;
var i__21897__auto___47275 = (0);
while(true){
if((i__21897__auto___47275 < len__21896__auto___47274)){
args__21903__auto__.push((arguments[i__21897__auto___47275]));

var G__47276 = (i__21897__auto___47275 + (1));
i__21897__auto___47275 = G__47276;
continue;
} else {
}
break;
}

var argseq__21904__auto__ = ((((1) < args__21903__auto__.length))?(new cljs.core.IndexedSeq(args__21903__auto__.slice((1)),(0),null)):null);
return clojure.core.matrix.select.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21904__auto__);
});

clojure.core.matrix.select.cljs$core$IFn$_invoke$arity$variadic = (function (a,args){
var args__$1 = clojure.core.matrix.normalise_args.call(null,args,a);
var a__$1 = clojure.core.matrix.slice_dims.call(null,a,args__$1,clojure.core.matrix.slice);
var selecting_args = cljs.core.filterv.call(null,cljs.core.complement.call(null,cljs.core.number_QMARK_),args__$1);
return clojure.core.matrix.protocols.select.call(null,a__$1,selecting_args);
});

clojure.core.matrix.select.cljs$lang$maxFixedArity = (1);

clojure.core.matrix.select.cljs$lang$applyTo = (function (seq47269){
var G__47270 = cljs.core.first.call(null,seq47269);
var seq47269__$1 = cljs.core.next.call(null,seq47269);
return clojure.core.matrix.select.cljs$core$IFn$_invoke$arity$variadic(G__47270,seq47269__$1);
});

/**
 * Like `select`, but guarantees a view over the original data.
 */
clojure.core.matrix.select_view = (function clojure$core$matrix$select_view(var_args){
var args__21903__auto__ = [];
var len__21896__auto___47282 = arguments.length;
var i__21897__auto___47283 = (0);
while(true){
if((i__21897__auto___47283 < len__21896__auto___47282)){
args__21903__auto__.push((arguments[i__21897__auto___47283]));

var G__47284 = (i__21897__auto___47283 + (1));
i__21897__auto___47283 = G__47284;
continue;
} else {
}
break;
}

var argseq__21904__auto__ = ((((1) < args__21903__auto__.length))?(new cljs.core.IndexedSeq(args__21903__auto__.slice((1)),(0),null)):null);
return clojure.core.matrix.select_view.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21904__auto__);
});

clojure.core.matrix.select_view.cljs$core$IFn$_invoke$arity$variadic = (function (a,args){
var args__$1 = clojure.core.matrix.normalise_args.call(null,args,a);
var a__$1 = clojure.core.matrix.slice_dims.call(null,a,args__$1,clojure.core.matrix.slice_view);
var selecting_args = cljs.core.filterv.call(null,cljs.core.complement.call(null,cljs.core.number_QMARK_),args__$1);
var or__20675__auto__ = clojure.core.matrix.protocols.select_view.call(null,a__$1,selecting_args);
if(cljs.core.truth_(or__20675__auto__)){
return or__20675__auto__;
} else {
return clojure.core.matrix.impl.wrappers.wrap_selection.call(null,a__$1,selecting_args);
}
});

clojure.core.matrix.select_view.cljs$lang$maxFixedArity = (1);

clojure.core.matrix.select_view.cljs$lang$applyTo = (function (seq47280){
var G__47281 = cljs.core.first.call(null,seq47280);
var seq47280__$1 = cljs.core.next.call(null,seq47280);
return clojure.core.matrix.select_view.cljs$core$IFn$_invoke$arity$variadic(G__47281,seq47280__$1);
});

/**
 * Returns a one-dimensional array of the elements which are at the specified
 * indices. An index is a one-dimensional array which element-count matches the
 * dimensionality of a. Examples:
 * (select-indices [[1 2] [3 4]] [[0 0][1 1]]) ;=> [1 4]
 */
clojure.core.matrix.select_indices = (function clojure$core$matrix$select_indices(a,indices){
return clojure.core.matrix.protocols.get_indices.call(null,a,indices);
});
/**
 * Like set-selection but mutates the array in place. Will throw an error if array is immutable.
 */
clojure.core.matrix.set_selection_BANG_ = (function clojure$core$matrix$set_selection_BANG_(var_args){
var args__21903__auto__ = [];
var len__21896__auto___47293 = arguments.length;
var i__21897__auto___47294 = (0);
while(true){
if((i__21897__auto___47294 < len__21896__auto___47293)){
args__21903__auto__.push((arguments[i__21897__auto___47294]));

var G__47295 = (i__21897__auto___47294 + (1));
i__21897__auto___47294 = G__47295;
continue;
} else {
}
break;
}

var argseq__21904__auto__ = ((((1) < args__21903__auto__.length))?(new cljs.core.IndexedSeq(args__21903__auto__.slice((1)),(0),null)):null);
return clojure.core.matrix.set_selection_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21904__auto__);
});

clojure.core.matrix.set_selection_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (a,args){
var value = cljs.core.last.call(null,args);
var args__$1 = cljs.core.butlast.call(null,args);
clojure.core.matrix.assign_BANG_.call(null,cljs.core.apply.call(null,clojure.core.matrix.select_view,a,args__$1),value);

return a;
});

clojure.core.matrix.set_selection_BANG_.cljs$lang$maxFixedArity = (1);

clojure.core.matrix.set_selection_BANG_.cljs$lang$applyTo = (function (seq47291){
var G__47292 = cljs.core.first.call(null,seq47291);
var seq47291__$1 = cljs.core.next.call(null,seq47291);
return clojure.core.matrix.set_selection_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__47292,seq47291__$1);
});

/**
 * Like select but sets the elements in the selection to the value of the final argument.
 * Leaves a unchanged and returns the modified array
 */
clojure.core.matrix.set_selection = (function clojure$core$matrix$set_selection(var_args){
var args__21903__auto__ = [];
var len__21896__auto___47298 = arguments.length;
var i__21897__auto___47299 = (0);
while(true){
if((i__21897__auto___47299 < len__21896__auto___47298)){
args__21903__auto__.push((arguments[i__21897__auto___47299]));

var G__47300 = (i__21897__auto___47299 + (1));
i__21897__auto___47299 = G__47300;
continue;
} else {
}
break;
}

var argseq__21904__auto__ = ((((1) < args__21903__auto__.length))?(new cljs.core.IndexedSeq(args__21903__auto__.slice((1)),(0),null)):null);
return clojure.core.matrix.set_selection.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21904__auto__);
});

clojure.core.matrix.set_selection.cljs$core$IFn$_invoke$arity$variadic = (function (a,args){
var a__$1 = clojure.core.matrix.mutable.call(null,a);
var r = cljs.core.apply.call(null,clojure.core.matrix.set_selection_BANG_,a__$1,args);
return clojure.core.matrix.coerce.call(null,a__$1,r);
});

clojure.core.matrix.set_selection.cljs$lang$maxFixedArity = (1);

clojure.core.matrix.set_selection.cljs$lang$applyTo = (function (seq47296){
var G__47297 = cljs.core.first.call(null,seq47296);
var seq47296__$1 = cljs.core.next.call(null,seq47296);
return clojure.core.matrix.set_selection.cljs$core$IFn$_invoke$arity$variadic(G__47297,seq47296__$1);
});

/**
 * like select-indices but sets the elements at the specified indices to values.
 * Leaves the original array (a) unchanged and returns a modified array
 */
clojure.core.matrix.set_indices = (function clojure$core$matrix$set_indices(a,indices,values){
return clojure.core.matrix.protocols.set_indices.call(null,a,indices,values);
});
/**
 * like set-indices but destructively modifies array in place
 */
clojure.core.matrix.set_indices_BANG_ = (function clojure$core$matrix$set_indices_BANG_(a,indices,values){
clojure.core.matrix.protocols.set_indices_BANG_.call(null,a,indices,values);

return a;
});
/**
 * Gets a view of a submatrix, for a set of index ranges.
 * 
 * Index ranges should be [start, length] pairs.
 * Index range pairs can be nil (gets the whole range)
 * 
 * May be a mutable view if supported by the implementation.
 */
clojure.core.matrix.submatrix = (function clojure$core$matrix$submatrix(var_args){
var args47301 = [];
var len__21896__auto___47306 = arguments.length;
var i__21897__auto___47307 = (0);
while(true){
if((i__21897__auto___47307 < len__21896__auto___47306)){
args47301.push((arguments[i__21897__auto___47307]));

var G__47308 = (i__21897__auto___47307 + (1));
i__21897__auto___47307 = G__47308;
continue;
} else {
}
break;
}

var G__47304 = args47301.length;
switch (G__47304) {
case 2:
return clojure.core.matrix.submatrix.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.matrix.submatrix.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 5:
return clojure.core.matrix.submatrix.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args47301.length)].join('')));

}
});

clojure.core.matrix.submatrix.cljs$core$IFn$_invoke$arity$2 = (function (m,index_ranges){
return clojure.core.matrix.protocols.submatrix.call(null,m,index_ranges);
});

clojure.core.matrix.submatrix.cljs$core$IFn$_invoke$arity$3 = (function (m,dimension,index_range){
return clojure.core.matrix.protocols.submatrix.call(null,m,cljs.core.assoc.call(null,cljs.core.vec.call(null,cljs.core.repeat.call(null,clojure.core.matrix.protocols.dimensionality.call(null,m),null)),dimension,index_range));
});

clojure.core.matrix.submatrix.cljs$core$IFn$_invoke$arity$5 = (function (m,row_start,row_length,col_start,col_length){
return clojure.core.matrix.protocols.submatrix.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var x__21609__auto__ = row_start;
return cljs.core._conj.call(null,(function (){var x__21609__auto____$1 = row_length;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21609__auto____$1);
})(),x__21609__auto__);
})(),(function (){var x__21609__auto__ = col_start;
return cljs.core._conj.call(null,(function (){var x__21609__auto____$1 = col_length;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21609__auto____$1);
})(),x__21609__auto__);
})()], null));
});

clojure.core.matrix.submatrix.cljs$lang$maxFixedArity = 5;

/**
 * Gets a view of part of a vector, specifed by a start index and length.
 * 
 * The view maintains a reference to the original,
 * so can be used to modify the original vector if it is mutable.
 */
clojure.core.matrix.subvector = (function clojure$core$matrix$subvector(m,start,length){
return clojure.core.matrix.protocols.subvector.call(null,m,start,length);
});
/**
 * Gets a slice of an array along a specific dimension.
 * 
 * The returned array will have one less dimension, i.e. slicing a matrix will return a vector
 * and slicing a 1D vector will return a scalar.
 * 
 * Slicing on the first dimension (dimension 0) is likely to perform better
 * for many array implementations. This is the default if no
 * dimension is specified.
 */
clojure.core.matrix.slice = (function clojure$core$matrix$slice(var_args){
var args47310 = [];
var len__21896__auto___47314 = arguments.length;
var i__21897__auto___47315 = (0);
while(true){
if((i__21897__auto___47315 < len__21896__auto___47314)){
args47310.push((arguments[i__21897__auto___47315]));

var G__47317 = (i__21897__auto___47315 + (1));
i__21897__auto___47315 = G__47317;
continue;
} else {
}
break;
}

var G__47312 = args47310.length;
switch (G__47312) {
case 2:
return clojure.core.matrix.slice.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.matrix.slice.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args47310.length)].join('')));

}
});

clojure.core.matrix.slice.cljs$core$IFn$_invoke$arity$2 = (function (m,index){
return clojure.core.matrix.protocols.get_slice.call(null,m,(0),index);
});

clojure.core.matrix.slice.cljs$core$IFn$_invoke$arity$3 = (function (m,dimension,index){
return clojure.core.matrix.protocols.get_slice.call(null,m,dimension,index);
});

clojure.core.matrix.slice.cljs$lang$maxFixedArity = 3;

/**
 * Gets a sequence of slices of an array. If dimension is supplied, slices along a given dimension,
 * otherwise slices along the first dimension.
 * 
 * Returns a sequence of scalar values if the array is 1-dimensional.
 */
clojure.core.matrix.slices = (function clojure$core$matrix$slices(var_args){
var args47322 = [];
var len__21896__auto___47329 = arguments.length;
var i__21897__auto___47330 = (0);
while(true){
if((i__21897__auto___47330 < len__21896__auto___47329)){
args47322.push((arguments[i__21897__auto___47330]));

var G__47331 = (i__21897__auto___47330 + (1));
i__21897__auto___47330 = G__47331;
continue;
} else {
}
break;
}

var G__47326 = args47322.length;
switch (G__47326) {
case 1:
return clojure.core.matrix.slices.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.slices.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args47322.length)].join('')));

}
});

clojure.core.matrix.slices.cljs$core$IFn$_invoke$arity$1 = (function (m){
return clojure.core.matrix.protocols.get_major_slice_seq.call(null,m);
});

clojure.core.matrix.slices.cljs$core$IFn$_invoke$arity$2 = (function (m,dimension){
return clojure.core.matrix.protocols.get_slice_seq.call(null,m,dimension);
});

clojure.core.matrix.slices.cljs$lang$maxFixedArity = 2;

/**
 * Gets a sequence of views of the slices of an array. If dimension is supplied, slices along a given dimension,
 * otherwise slices along the first dimension. If the matrix implementation supports mutable views, these views
 * can be used to mutate portions of the original array.
 * 
 * A key difference between 'slices' and 'slice-views' is that 'slice-views' must always return views. In order
 * to ensure this behaviour on mutable 1-dimensioanal arrays, it must return a sequence of 0-dimensioanal arrays.
 */
clojure.core.matrix.slice_views = (function clojure$core$matrix$slice_views(var_args){
var args47334 = [];
var len__21896__auto___47337 = arguments.length;
var i__21897__auto___47338 = (0);
while(true){
if((i__21897__auto___47338 < len__21896__auto___47337)){
args47334.push((arguments[i__21897__auto___47338]));

var G__47339 = (i__21897__auto___47338 + (1));
i__21897__auto___47338 = G__47339;
continue;
} else {
}
break;
}

var G__47336 = args47334.length;
switch (G__47336) {
case 1:
return clojure.core.matrix.slice_views.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.slice_views.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args47334.length)].join('')));

}
});

clojure.core.matrix.slice_views.cljs$core$IFn$_invoke$arity$1 = (function (m){
return clojure.core.matrix.protocols.get_major_slice_view_seq.call(null,m);
});

clojure.core.matrix.slice_views.cljs$core$IFn$_invoke$arity$2 = (function (m,dimension){
if(((0) === cljs.core.long$.call(null,dimension))){
return clojure.core.matrix.slice_views.call(null,m);
} else {
return cljs.core.map.call(null,(function (p1__47333_SHARP_){
return clojure.core.matrix.protocols.get_slice_view.call(null,m,dimension,p1__47333_SHARP_);
}),cljs.core.range.call(null,clojure.core.matrix.protocols.dimension_count.call(null,m,dimension)));
}
});

clojure.core.matrix.slice_views.cljs$lang$maxFixedArity = 2;

/**
 * Gets a view of an array slice. Guaranteed to return a mutable view if the array is mutable.
 */
clojure.core.matrix.slice_view = (function clojure$core$matrix$slice_view(var_args){
var args47341 = [];
var len__21896__auto___47345 = arguments.length;
var i__21897__auto___47346 = (0);
while(true){
if((i__21897__auto___47346 < len__21896__auto___47345)){
args47341.push((arguments[i__21897__auto___47346]));

var G__47348 = (i__21897__auto___47346 + (1));
i__21897__auto___47346 = G__47348;
continue;
} else {
}
break;
}

var G__47343 = args47341.length;
switch (G__47343) {
case 2:
return clojure.core.matrix.slice_view.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.matrix.slice_view.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args47341.length)].join('')));

}
});

clojure.core.matrix.slice_view.cljs$core$IFn$_invoke$arity$2 = (function (m,i){
return clojure.core.matrix.protocols.get_major_slice_view.call(null,m,i);
});

clojure.core.matrix.slice_view.cljs$core$IFn$_invoke$arity$3 = (function (m,dimension,i){
if(((0) === cljs.core.long$.call(null,dimension))){
return clojure.core.matrix.protocols.get_major_slice_view.call(null,m,i);
} else {
return clojure.core.matrix.protocols.get_slice_view.call(null,m,dimension,i);
}
});

clojure.core.matrix.slice_view.cljs$lang$maxFixedArity = 3;

/**
 * Gets the rows of a matrix, as a sequence of 1D vectors.
 * 
 * If the array has more than 2 dimensions, will return the rows from all slices in order.
 */
clojure.core.matrix.rows = (function clojure$core$matrix$rows(m){
return clojure.core.matrix.protocols.get_rows.call(null,m);
});
/**
 * Gets the columns of a matrix, as a sequence of 1D vectors.
 * 
 * If the array has more than 2 dimensions, will return the columns from all slices in order.
 */
clojure.core.matrix.columns = (function clojure$core$matrix$columns(m){
return clojure.core.matrix.protocols.get_columns.call(null,m);
});
/**
 * Returns the main diagonal of a matrix or general array, as a vector.
 * The main diagonal of a general array is defined as those elements where the all the
 * indexes are equal, i.e. the index is of the form [i i ... i]
 * Works on both square and rectangular matrices.
 */
clojure.core.matrix.main_diagonal = (function clojure$core$matrix$main_diagonal(m){
return clojure.core.matrix.protocols.main_diagonal.call(null,m);
});
/**
 * Returns the specified diagonal of a 2D matrix as a vector.
 * If k>0, returns a diagonal above the main diagonal.
 * If k<0, returns a diagonal below the main diagonal.
 * Works on both square and rectangular matrices.
 * Returns empty vector if value of k is out of range (outside matrix)
 */
clojure.core.matrix.diagonal = (function clojure$core$matrix$diagonal(var_args){
var args47359 = [];
var len__21896__auto___47362 = arguments.length;
var i__21897__auto___47363 = (0);
while(true){
if((i__21897__auto___47363 < len__21896__auto___47362)){
args47359.push((arguments[i__21897__auto___47363]));

var G__47366 = (i__21897__auto___47363 + (1));
i__21897__auto___47363 = G__47366;
continue;
} else {
}
break;
}

var G__47361 = args47359.length;
switch (G__47361) {
case 1:
return clojure.core.matrix.diagonal.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.diagonal.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args47359.length)].join('')));

}
});

clojure.core.matrix.diagonal.cljs$core$IFn$_invoke$arity$1 = (function (m){
return clojure.core.matrix.protocols.main_diagonal.call(null,m);
});

clojure.core.matrix.diagonal.cljs$core$IFn$_invoke$arity$2 = (function (m,k){
var k__$1 = cljs.core.long$.call(null,k);
if((k__$1 < (0))){
return clojure.core.matrix.protocols.main_diagonal.call(null,clojure.core.matrix.protocols.submatrix.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(- k__$1),(clojure.core.matrix.dimension_count.call(null,m,(0)) + k__$1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),clojure.core.matrix.dimension_count.call(null,m,(1))], null)], null)));
} else {
if((k__$1 > (0))){
return clojure.core.matrix.protocols.main_diagonal.call(null,clojure.core.matrix.protocols.submatrix.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),clojure.core.matrix.dimension_count.call(null,m,(0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k__$1,(clojure.core.matrix.dimension_count.call(null,m,(1)) - k__$1)], null)], null)));
} else {
return clojure.core.matrix.protocols.main_diagonal.call(null,m);

}
}
});

clojure.core.matrix.diagonal.cljs$lang$maxFixedArity = 2;

/**
 * Joins arrays together, along the major dimension 0. For 1D vectors, this behaves as simple concatenation.
 * Other dimensions must be compatible. To join arrays along a different dimension, use 'join-along' instead.
 */
clojure.core.matrix.join = (function clojure$core$matrix$join(var_args){
var args__21903__auto__ = [];
var len__21896__auto___47371 = arguments.length;
var i__21897__auto___47372 = (0);
while(true){
if((i__21897__auto___47372 < len__21896__auto___47371)){
args__21903__auto__.push((arguments[i__21897__auto___47372]));

var G__47373 = (i__21897__auto___47372 + (1));
i__21897__auto___47372 = G__47373;
continue;
} else {
}
break;
}

var argseq__21904__auto__ = ((((0) < args__21903__auto__.length))?(new cljs.core.IndexedSeq(args__21903__auto__.slice((0)),(0),null)):null);
return clojure.core.matrix.join.cljs$core$IFn$_invoke$arity$variadic(argseq__21904__auto__);
});

clojure.core.matrix.join.cljs$core$IFn$_invoke$arity$variadic = (function (arrays){
return cljs.core.reduce.call(null,clojure.core.matrix.protocols.join,arrays);
});

clojure.core.matrix.join.cljs$lang$maxFixedArity = (0);

clojure.core.matrix.join.cljs$lang$applyTo = (function (seq47370){
return clojure.core.matrix.join.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47370));
});

/**
 * Joins arrays together, concatenating them along the specified dimension.
 * 
 * Other dimensions must be compatible.
 */
clojure.core.matrix.join_along = (function clojure$core$matrix$join_along(var_args){
var args__21903__auto__ = [];
var len__21896__auto___47378 = arguments.length;
var i__21897__auto___47379 = (0);
while(true){
if((i__21897__auto___47379 < len__21896__auto___47378)){
args__21903__auto__.push((arguments[i__21897__auto___47379]));

var G__47380 = (i__21897__auto___47379 + (1));
i__21897__auto___47379 = G__47380;
continue;
} else {
}
break;
}

var argseq__21904__auto__ = ((((1) < args__21903__auto__.length))?(new cljs.core.IndexedSeq(args__21903__auto__.slice((1)),(0),null)):null);
return clojure.core.matrix.join_along.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21904__auto__);
});

clojure.core.matrix.join_along.cljs$core$IFn$_invoke$arity$variadic = (function (dimension,arrays){
var or__20675__auto__ = cljs.core.reduce.call(null,(function (p1__47374_SHARP_,p2__47375_SHARP_){
return clojure.core.matrix.protocols.join_along.call(null,p1__47374_SHARP_,p2__47375_SHARP_,dimension);
}),arrays);
if(cljs.core.truth_(or__20675__auto__)){
return or__20675__auto__;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Failure to joins arrays")].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
});

clojure.core.matrix.join_along.cljs$lang$maxFixedArity = (1);

clojure.core.matrix.join_along.cljs$lang$applyTo = (function (seq47376){
var G__47377 = cljs.core.first.call(null,seq47376);
var seq47376__$1 = cljs.core.next.call(null,seq47376);
return clojure.core.matrix.join_along.cljs$core$IFn$_invoke$arity$variadic(G__47377,seq47376__$1);
});

/**
 * Adds a new value [b] as a new slice to an array [a], returning the extended array.
 * Broadcasts the new value to the correct shape of a slice of a if necessary.
 * 
 * This can be considered as the array equivalent of clojure.core/conj
 */
clojure.core.matrix.conjoin = (function clojure$core$matrix$conjoin(var_args){
var args47382 = [];
var len__21896__auto___47388 = arguments.length;
var i__21897__auto___47389 = (0);
while(true){
if((i__21897__auto___47389 < len__21896__auto___47388)){
args47382.push((arguments[i__21897__auto___47389]));

var G__47390 = (i__21897__auto___47389 + (1));
i__21897__auto___47389 = G__47390;
continue;
} else {
}
break;
}

var G__47387 = args47382.length;
switch (G__47387) {
case 2:
return clojure.core.matrix.conjoin.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__21919__auto__ = (new cljs.core.IndexedSeq(args47382.slice((2)),(0),null));
return clojure.core.matrix.conjoin.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__21919__auto__);

}
});

clojure.core.matrix.conjoin.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
var ss = cljs.core.assoc.call(null,cljs.core.vec.call(null,clojure.core.matrix.protocols.get_shape.call(null,a)),(0),(1));
return clojure.core.matrix.join.call(null,a,clojure.core.matrix.protocols.broadcast.call(null,b,ss));
});

clojure.core.matrix.conjoin.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,more){
var ss = cljs.core.vec.call(null,cljs.core.next.call(null,clojure.core.matrix.protocols.get_shape.call(null,a)));
var slcs = cljs.core.mapv.call(null,((function (ss){
return (function (p1__47381_SHARP_){
return clojure.core.matrix.protocols.broadcast.call(null,p1__47381_SHARP_,ss);
});})(ss))
,cljs.core.cons.call(null,b,more));
return clojure.core.matrix.join.call(null,a,slcs);
});

clojure.core.matrix.conjoin.cljs$lang$applyTo = (function (seq47383){
var G__47384 = cljs.core.first.call(null,seq47383);
var seq47383__$1 = cljs.core.next.call(null,seq47383);
var G__47385 = cljs.core.first.call(null,seq47383__$1);
var seq47383__$2 = cljs.core.next.call(null,seq47383__$1);
return clojure.core.matrix.conjoin.cljs$core$IFn$_invoke$arity$variadic(G__47384,G__47385,seq47383__$2);
});

clojure.core.matrix.conjoin.cljs$lang$maxFixedArity = (2);

/**
 * Adds a new value [b] as a new slice to an array [a] along the given dimension,
 * returning the extended array.
 * Broadcasts the new value to the correct shape of a slice of a if necessary.
 * 
 * This can be considered as the array equivalent of clojure.core/conj using
 * a specified dimension
 */
clojure.core.matrix.conjoin_along = (function clojure$core$matrix$conjoin_along(var_args){
var args47392 = [];
var len__21896__auto___47399 = arguments.length;
var i__21897__auto___47400 = (0);
while(true){
if((i__21897__auto___47400 < len__21896__auto___47399)){
args47392.push((arguments[i__21897__auto___47400]));

var G__47401 = (i__21897__auto___47400 + (1));
i__21897__auto___47400 = G__47401;
continue;
} else {
}
break;
}

var G__47398 = args47392.length;
switch (G__47398) {
case 3:
return clojure.core.matrix.conjoin_along.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__21919__auto__ = (new cljs.core.IndexedSeq(args47392.slice((3)),(0),null));
return clojure.core.matrix.conjoin_along.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__21919__auto__);

}
});

clojure.core.matrix.conjoin_along.cljs$core$IFn$_invoke$arity$3 = (function (dim,a,b){
if((cljs.core.long$.call(null,dim) === (0))){
return clojure.core.matrix.conjoin.call(null,a,b);
} else {
var ss = clojure.core.matrix.protocols.get_shape.call(null,clojure.core.matrix.protocols.get_slice.call(null,a,dim,(0)));
return clojure.core.matrix.join_along.call(null,dim,a,clojure.core.matrix.protocols.broadcast.call(null,b,ss));
}
});

clojure.core.matrix.conjoin_along.cljs$core$IFn$_invoke$arity$variadic = (function (dim,a,b,more){
return cljs.core.reduce.call(null,(function (a__$1,b__$1){
return clojure.core.matrix.conjoin_along.call(null,dim,a__$1,b__$1);
}),clojure.core.matrix.conjoin_along.call(null,dim,a,b),more);
});

clojure.core.matrix.conjoin_along.cljs$lang$applyTo = (function (seq47393){
var G__47394 = cljs.core.first.call(null,seq47393);
var seq47393__$1 = cljs.core.next.call(null,seq47393);
var G__47395 = cljs.core.first.call(null,seq47393__$1);
var seq47393__$2 = cljs.core.next.call(null,seq47393__$1);
var G__47396 = cljs.core.first.call(null,seq47393__$2);
var seq47393__$3 = cljs.core.next.call(null,seq47393__$2);
return clojure.core.matrix.conjoin_along.cljs$core$IFn$_invoke$arity$variadic(G__47394,G__47395,G__47396,seq47393__$3);
});

clojure.core.matrix.conjoin_along.cljs$lang$maxFixedArity = (3);

/**
 * Rotates an array along specified dimensions.
 * 
 * Elements rotated off will re-appear at the other side. The shape of the array will not be modified.
 */
clojure.core.matrix.rotate = (function clojure$core$matrix$rotate(var_args){
var args47403 = [];
var len__21896__auto___47406 = arguments.length;
var i__21897__auto___47407 = (0);
while(true){
if((i__21897__auto___47407 < len__21896__auto___47406)){
args47403.push((arguments[i__21897__auto___47407]));

var G__47408 = (i__21897__auto___47407 + (1));
i__21897__auto___47407 = G__47408;
continue;
} else {
}
break;
}

var G__47405 = args47403.length;
switch (G__47405) {
case 3:
return clojure.core.matrix.rotate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return clojure.core.matrix.rotate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args47403.length)].join('')));

}
});

clojure.core.matrix.rotate.cljs$core$IFn$_invoke$arity$3 = (function (m,dimension,shift_amount){
return clojure.core.matrix.protocols.rotate.call(null,m,dimension,shift_amount);
});

clojure.core.matrix.rotate.cljs$core$IFn$_invoke$arity$2 = (function (m,shifts){
return clojure.core.matrix.protocols.rotate_all.call(null,m,shifts);
});

clojure.core.matrix.rotate.cljs$lang$maxFixedArity = 3;

/**
 * Shifts all elements of an array along specified dimensions, maintaining the shape of the array.
 * 
 * New spaces shifted into the array are filled with zero.
 */
clojure.core.matrix.shift = (function clojure$core$matrix$shift(var_args){
var args47410 = [];
var len__21896__auto___47413 = arguments.length;
var i__21897__auto___47414 = (0);
while(true){
if((i__21897__auto___47414 < len__21896__auto___47413)){
args47410.push((arguments[i__21897__auto___47414]));

var G__47415 = (i__21897__auto___47414 + (1));
i__21897__auto___47414 = G__47415;
continue;
} else {
}
break;
}

var G__47412 = args47410.length;
switch (G__47412) {
case 3:
return clojure.core.matrix.shift.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return clojure.core.matrix.shift.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args47410.length)].join('')));

}
});

clojure.core.matrix.shift.cljs$core$IFn$_invoke$arity$3 = (function (m,dimension,shift_amount){
return clojure.core.matrix.protocols.shift.call(null,m,dimension,shift_amount);
});

clojure.core.matrix.shift.cljs$core$IFn$_invoke$arity$2 = (function (m,shifts){
return clojure.core.matrix.protocols.shift_all.call(null,m,shifts);
});

clojure.core.matrix.shift.cljs$lang$maxFixedArity = 3;

/**
 * Reorders slices of an array along a specified dimension. Re-orders along major dimension
 * if no dimension is specified.
 * 
 * Indicies can be any seqable object containing the indices along the specified dimension to select.
 * An index can be selected multiple times (which created repreated slices), or not at all (which excludes
 * the slice from the result).
 */
clojure.core.matrix.order = (function clojure$core$matrix$order(var_args){
var args47417 = [];
var len__21896__auto___47420 = arguments.length;
var i__21897__auto___47421 = (0);
while(true){
if((i__21897__auto___47421 < len__21896__auto___47420)){
args47417.push((arguments[i__21897__auto___47421]));

var G__47422 = (i__21897__auto___47421 + (1));
i__21897__auto___47421 = G__47422;
continue;
} else {
}
break;
}

var G__47419 = args47417.length;
switch (G__47419) {
case 2:
return clojure.core.matrix.order.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.matrix.order.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args47417.length)].join('')));

}
});

clojure.core.matrix.order.cljs$core$IFn$_invoke$arity$2 = (function (m,indices){
return clojure.core.matrix.protocols.order.call(null,m,indices);
});

clojure.core.matrix.order.cljs$core$IFn$_invoke$arity$3 = (function (m,dimension,indices){
return clojure.core.matrix.protocols.order.call(null,m,dimension,indices);
});

clojure.core.matrix.order.cljs$lang$maxFixedArity = 3;

/**
 * Creates a view of an array as a single flattened vector.
 * 
 * Returns nil if this is not supported by the implementation. You should use `to-vector` instead to
 * obtain a flattened vector without guaranteeing a view.
 */
clojure.core.matrix.as_vector = (function clojure$core$matrix$as_vector(m){
return clojure.core.matrix.protocols.as_vector.call(null,m);
});
/**
 * Creates a new array representing the elements of array m as a single flattened vector.
 * 
 * This operation guarantees a new copy of the data.
 */
clojure.core.matrix.to_vector = (function clojure$core$matrix$to_vector(m){
var or__20675__auto__ = clojure.core.matrix.protocols.to_vector.call(null,m);
if(cljs.core.truth_(or__20675__auto__)){
return or__20675__auto__;
} else {
return clojure.core.matrix.array.call(null,m,clojure.core.matrix.protocols.to_object_array.call(null,m));
}
});
/**
 * Broadcasts a matrix to a specified shape. Returns a new matrix with the shape specified.
 * The broadcasted matrix may be a view over the original matrix: attempting to modify the
 * broadcasted matrix therefore has undefined results.
 * 
 * Will throw an exception if broadcast to the target shape is not possible.
 */
clojure.core.matrix.broadcast = (function clojure$core$matrix$broadcast(m,shape){
var or__20675__auto__ = clojure.core.matrix.protocols.broadcast.call(null,m,shape);
if(cljs.core.truth_(or__20675__auto__)){
return or__20675__auto__;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Broadcast to target shape: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.vec.call(null,shape)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" not possible.")].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
});
/**
 * Broadcasts the second matrix to the shape of the first. See 'broadcast'.
 */
clojure.core.matrix.broadcast_like = (function clojure$core$matrix$broadcast_like(m,a){
return clojure.core.matrix.protocols.broadcast_like.call(null,m,a);
});
/**
 * Broadcasts and coerces the second matrix to the shape and type of the first.
 * Equivalent to (coerce m (broadcast-like m a)).
 */
clojure.core.matrix.broadcast_coerce = (function clojure$core$matrix$broadcast_coerce(m,a){
return clojure.core.matrix.protocols.broadcast_coerce.call(null,m,a);
});
/**
 * Transposes a matrix, returning a new matrix. For 2D matrices, rows and columns are swapped.
 * More generally, the dimension indices are reversed for any shape of array. Note that 1D vectors
 * and scalars will be returned unchanged.
 * 
 * If ordering is provided, will re-order dimensions according to the provided order.
 */
clojure.core.matrix.transpose = (function clojure$core$matrix$transpose(var_args){
var args47424 = [];
var len__21896__auto___47427 = arguments.length;
var i__21897__auto___47428 = (0);
while(true){
if((i__21897__auto___47428 < len__21896__auto___47427)){
args47424.push((arguments[i__21897__auto___47428]));

var G__47429 = (i__21897__auto___47428 + (1));
i__21897__auto___47428 = G__47429;
continue;
} else {
}
break;
}

var G__47426 = args47424.length;
switch (G__47426) {
case 1:
return clojure.core.matrix.transpose.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.transpose.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args47424.length)].join('')));

}
});

clojure.core.matrix.transpose.cljs$core$IFn$_invoke$arity$1 = (function (m){
return clojure.core.matrix.protocols.transpose.call(null,m);
});

clojure.core.matrix.transpose.cljs$core$IFn$_invoke$arity$2 = (function (m,ordering){
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("TODO: not yet implemented")].join(''),cljs.core.PersistentArrayMap.EMPTY);
});

clojure.core.matrix.transpose.cljs$lang$maxFixedArity = 2;

/**
 * Transposes a square 2D matrix in-place.
 * 
 * Will throw an exception if not possible (e.g. if the matrix is not square or not mutable).
 */
clojure.core.matrix.transpose_BANG_ = (function clojure$core$matrix$transpose_BANG_(m){
clojure.core.matrix.protocols.transpose_BANG_.call(null,m);

return m;
});
/**
 * Changes the shape of a matrix to the specified new shape. shape can be any sequence of dimension sizes.
 * 
 * Preserves the row-major order of matrix elements. Truncates the sequence of elements if the shape is smaller
 * than the original shape.
 * 
 * Pads with default values (dependent on implementation - normally zero) if the shape is larger.
 */
clojure.core.matrix.reshape = (function clojure$core$matrix$reshape(m,shape){
return clojure.core.matrix.protocols.reshape.call(null,m,shape);
});
/**
 * Fills a matrix with a single scalar value. The scalar value must be compatible with the element-type
 * of the array.
 * 
 * Similar to assign!, but only supports scalar values (and may be more efficient).
 */
clojure.core.matrix.fill_BANG_ = (function clojure$core$matrix$fill_BANG_(m,value){
clojure.core.matrix.protocols.fill_BANG_.call(null,m,value);

return m;
});
/**
 * Fills a matrix with a single scalar value. The scalar value must be compatible with the element-type
 * of the array. Returns a new array.
 * 
 * Functionally similar to `assign!` except only intended for use with a scalar value.
 */
clojure.core.matrix.fill = (function clojure$core$matrix$fill(m,value){
return clojure.core.matrix.assign.call(null,m,clojure.core.matrix.protocols.get_0d.call(null,value));
});
/**
 * Returns true if two arrays are numerically equal.
 * 
 * Will return false for arrays of different shapes.
 * 
 * May either return false or throw an error if the arrays are not numerical.
 * 
 * If epsilon is provided, performs an equality test
 * with the given maximum tolerance (default is 0.0, i.e. exact numerical equivalence)
 */
clojure.core.matrix.equals = (function clojure$core$matrix$equals(var_args){
var args47431 = [];
var len__21896__auto___47434 = arguments.length;
var i__21897__auto___47435 = (0);
while(true){
if((i__21897__auto___47435 < len__21896__auto___47434)){
args47431.push((arguments[i__21897__auto___47435]));

var G__47436 = (i__21897__auto___47435 + (1));
i__21897__auto___47435 = G__47436;
continue;
} else {
}
break;
}

var G__47433 = args47431.length;
switch (G__47433) {
case 1:
return clojure.core.matrix.equals.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.equals.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.matrix.equals.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args47431.length)].join('')));

}
});

clojure.core.matrix.equals.cljs$core$IFn$_invoke$arity$1 = (function (a){
return true;
});

clojure.core.matrix.equals.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return clojure.core.matrix.protocols.matrix_equals.call(null,a,b);
});

clojure.core.matrix.equals.cljs$core$IFn$_invoke$arity$3 = (function (a,b,epsilon){
return clojure.core.matrix.protocols.matrix_equals_epsilon.call(null,a,b,epsilon);
});

clojure.core.matrix.equals.cljs$lang$maxFixedArity = 3;

/**
 * Element-wise of comparisons of two arrays. Returns the signum of the difference
 * between corresponding elements in two arrays.
 * 
 *   Performs broadcasting of arguments if required to match the size of the largest array.
 * 
 *   Examples:
 *   (cmp 1 3) ;=> -1
 *   (cmp 0 0) ;=> 0
 *   (cmp 1 -1) ;=> 1
 *   (cmp [[1 3] [5 5]] [[3 3] [5 3]]) ;=> [[-1 0] [0 1]]
 *   (cmp [[1 4][1 5][1 8]] [[1 2][1 5][2 7]]) ;=> [[0 1][0 0][-1 1]]
 *   
 */
clojure.core.matrix.cmp = (function clojure$core$matrix$cmp(a,b){
return clojure.core.matrix.protocols.element_compare.call(null,a,b);
});
/**
 * Element-wise if. Tranverses each element, x, of an array, m. If x > 0,
 *   returns a (if a is a scalar) or the corresponding element from a (if a is an
 *   array or matrix). If x <= 0, returns b (if b is a scalar) or the corresponding
 *   element from array b (if b is an array or matrix).
 * 
 *   Performs broadcasting of arguments if required to match the size of the largest array.
 * 
 *   Examples:
 *   (eif (lt 1 3) 3 6) ;=> 3
 *   (eif (lt 5 3) 3 6) ;=> 6
 *   (eif (eq A B) 1 2) ;=> [[1 2] [2 1]]
 *   (eif (eq A B) 1 D) ;=> [[1 1] [9 1]]
 *   (eif (eq A B) C 2) ;=> [[2 2] [2 2]]
 *   (eif [[1 0][0 1] [[2 3][4 5]] [[6 7][8 9]]) ;=> [[2 7][8 5]]
 *   (eif (gt [[2 6][3 5]] 4) [[0 0][0 0]] [[1 1][1 1]] ;=> [[0 1][0 1]]
 */
clojure.core.matrix.eif = (function clojure$core$matrix$eif(m,a,b){
return clojure.core.matrix.protocols.element_if.call(null,m,a,b);
});
/**
 * Element-wise less-than comparison operation. Returns a binary array where
 *   elements less-than the argument are represented by 1 and elements greater-
 *   than or equal to the argument are 0.
 * 
 *   Performs broadcasting of arguments if required to match the size of the largest array.
 * 
 *   Examples:
 *   (lt 1 4) ;=> 1
 *   (lt 3 3) ;=> 0
 *   (lt [[1 5] [3 6]] 3) ;=> [[1 0] [0 0]]
 *   (lt [[1 5] [4 6]] [[2 3] [5 6]]) ;=> [[1 0] [1 0]]
 */
clojure.core.matrix.lt = (function clojure$core$matrix$lt(var_args){
var args47438 = [];
var len__21896__auto___47444 = arguments.length;
var i__21897__auto___47445 = (0);
while(true){
if((i__21897__auto___47445 < len__21896__auto___47444)){
args47438.push((arguments[i__21897__auto___47445]));

var G__47446 = (i__21897__auto___47445 + (1));
i__21897__auto___47445 = G__47446;
continue;
} else {
}
break;
}

var G__47443 = args47438.length;
switch (G__47443) {
case 2:
return clojure.core.matrix.lt.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__21919__auto__ = (new cljs.core.IndexedSeq(args47438.slice((2)),(0),null));
return clojure.core.matrix.lt.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__21919__auto__);

}
});

clojure.core.matrix.lt.cljs$core$IFn$_invoke$arity$2 = (function (m,a){
return clojure.core.matrix.protocols.element_lt.call(null,m,a);
});

clojure.core.matrix.lt.cljs$core$IFn$_invoke$arity$variadic = (function (m,a,more){
var arrays = cljs.core.cons.call(null,m,cljs.core.cons.call(null,a,more));
return cljs.core.reduce.call(null,clojure.core.matrix.protocols.element_multiply,cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.apply,clojure.core.matrix.protocols.element_lt),cljs.core.partition.call(null,(2),(1),arrays)));
});

clojure.core.matrix.lt.cljs$lang$applyTo = (function (seq47439){
var G__47440 = cljs.core.first.call(null,seq47439);
var seq47439__$1 = cljs.core.next.call(null,seq47439);
var G__47441 = cljs.core.first.call(null,seq47439__$1);
var seq47439__$2 = cljs.core.next.call(null,seq47439__$1);
return clojure.core.matrix.lt.cljs$core$IFn$_invoke$arity$variadic(G__47440,G__47441,seq47439__$2);
});

clojure.core.matrix.lt.cljs$lang$maxFixedArity = (2);

/**
 * Element-wise less-than-or-equal-to comparison operation. Returns a binary
 *   array where elements less-than or equal to the argument are represented by 1
 *   and elements greater-than to the argument are 0.
 * 
 *   Performs broadcasting of arguments if required to match the size of the largest array.
 * 
 *   Examples:
 *   (le 3 3) ;=> 1
 *   (le 4 3) ;=> 0
 *   (le [[1 5] [3 6]] 3) ;=> [[1 0] [1 0]]
 *   (le [[1 5] [4 6]] [[2 3] [5 6]]) ;=> [[1 0] [1 1]]
 */
clojure.core.matrix.le = (function clojure$core$matrix$le(var_args){
var args47448 = [];
var len__21896__auto___47454 = arguments.length;
var i__21897__auto___47455 = (0);
while(true){
if((i__21897__auto___47455 < len__21896__auto___47454)){
args47448.push((arguments[i__21897__auto___47455]));

var G__47456 = (i__21897__auto___47455 + (1));
i__21897__auto___47455 = G__47456;
continue;
} else {
}
break;
}

var G__47453 = args47448.length;
switch (G__47453) {
case 2:
return clojure.core.matrix.le.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__21919__auto__ = (new cljs.core.IndexedSeq(args47448.slice((2)),(0),null));
return clojure.core.matrix.le.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__21919__auto__);

}
});

clojure.core.matrix.le.cljs$core$IFn$_invoke$arity$2 = (function (m,a){
return clojure.core.matrix.protocols.element_le.call(null,m,a);
});

clojure.core.matrix.le.cljs$core$IFn$_invoke$arity$variadic = (function (m,a,more){
var arrays = cljs.core.cons.call(null,m,cljs.core.cons.call(null,a,more));
return cljs.core.reduce.call(null,clojure.core.matrix.protocols.element_multiply,cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.apply,clojure.core.matrix.protocols.element_le),cljs.core.partition.call(null,(2),(1),arrays)));
});

clojure.core.matrix.le.cljs$lang$applyTo = (function (seq47449){
var G__47450 = cljs.core.first.call(null,seq47449);
var seq47449__$1 = cljs.core.next.call(null,seq47449);
var G__47451 = cljs.core.first.call(null,seq47449__$1);
var seq47449__$2 = cljs.core.next.call(null,seq47449__$1);
return clojure.core.matrix.le.cljs$core$IFn$_invoke$arity$variadic(G__47450,G__47451,seq47449__$2);
});

clojure.core.matrix.le.cljs$lang$maxFixedArity = (2);

/**
 * Element-wise greater-than comparison operation. Returns a binary array where
 *   elements greater-than the argument are represented by 1 and elements less-
 *   than or equal to the argument are 0.
 * 
 *   Performs broadcasting of arguments if required to match the size of the largest array.
 * 
 *   Examples:
 *   (gt 4 3) ;=> 1
 *   (gt 3 3) ;=> 0
 *   (gt [[1 5] [3 6]] 3) ;=> [[0 1] [0 1]]
 *   (gt [[1 5] [4 6]] [[2 3] [5 6]]) ;=> [[0 1] [0 0]]
 */
clojure.core.matrix.gt = (function clojure$core$matrix$gt(var_args){
var args47458 = [];
var len__21896__auto___47464 = arguments.length;
var i__21897__auto___47465 = (0);
while(true){
if((i__21897__auto___47465 < len__21896__auto___47464)){
args47458.push((arguments[i__21897__auto___47465]));

var G__47466 = (i__21897__auto___47465 + (1));
i__21897__auto___47465 = G__47466;
continue;
} else {
}
break;
}

var G__47463 = args47458.length;
switch (G__47463) {
case 2:
return clojure.core.matrix.gt.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__21919__auto__ = (new cljs.core.IndexedSeq(args47458.slice((2)),(0),null));
return clojure.core.matrix.gt.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__21919__auto__);

}
});

clojure.core.matrix.gt.cljs$core$IFn$_invoke$arity$2 = (function (m,a){
return clojure.core.matrix.protocols.element_gt.call(null,m,a);
});

clojure.core.matrix.gt.cljs$core$IFn$_invoke$arity$variadic = (function (m,a,more){
var arrays = cljs.core.cons.call(null,m,cljs.core.cons.call(null,a,more));
return cljs.core.reduce.call(null,clojure.core.matrix.protocols.element_multiply,cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.apply,clojure.core.matrix.protocols.element_gt),cljs.core.partition.call(null,(2),(1),arrays)));
});

clojure.core.matrix.gt.cljs$lang$applyTo = (function (seq47459){
var G__47460 = cljs.core.first.call(null,seq47459);
var seq47459__$1 = cljs.core.next.call(null,seq47459);
var G__47461 = cljs.core.first.call(null,seq47459__$1);
var seq47459__$2 = cljs.core.next.call(null,seq47459__$1);
return clojure.core.matrix.gt.cljs$core$IFn$_invoke$arity$variadic(G__47460,G__47461,seq47459__$2);
});

clojure.core.matrix.gt.cljs$lang$maxFixedArity = (2);

/**
 * Element-wise greater-than-or-equal-to comparison operation. Returns a binary
 *   array where elements greater-than or equal to the argument are represented by 1
 *   and elements less-than to the argument are 0.
 * 
 *   Performs broadcasting of arguments if required to match the size of the largest array.
 * 
 *   Examples:
 *   (ge 2 3) ;=> 0
 *   (ge 3 3) ;=> 1
 *   (ge [[1 5] [3 6]] 3) ;=> [[0 1] [1 1]]
 *   (ge [[1 5] [4 6]] [[2 3] [5 6]]) ;=> [[0 1] [0 1]]
 */
clojure.core.matrix.ge = (function clojure$core$matrix$ge(var_args){
var args47468 = [];
var len__21896__auto___47474 = arguments.length;
var i__21897__auto___47475 = (0);
while(true){
if((i__21897__auto___47475 < len__21896__auto___47474)){
args47468.push((arguments[i__21897__auto___47475]));

var G__47476 = (i__21897__auto___47475 + (1));
i__21897__auto___47475 = G__47476;
continue;
} else {
}
break;
}

var G__47473 = args47468.length;
switch (G__47473) {
case 2:
return clojure.core.matrix.ge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__21919__auto__ = (new cljs.core.IndexedSeq(args47468.slice((2)),(0),null));
return clojure.core.matrix.ge.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__21919__auto__);

}
});

clojure.core.matrix.ge.cljs$core$IFn$_invoke$arity$2 = (function (m,a){
return clojure.core.matrix.protocols.element_ge.call(null,m,a);
});

clojure.core.matrix.ge.cljs$core$IFn$_invoke$arity$variadic = (function (m,a,more){
var arrays = cljs.core.cons.call(null,m,cljs.core.cons.call(null,a,more));
return cljs.core.reduce.call(null,clojure.core.matrix.protocols.element_multiply,cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.apply,clojure.core.matrix.protocols.element_ge),cljs.core.partition.call(null,(2),(1),arrays)));
});

clojure.core.matrix.ge.cljs$lang$applyTo = (function (seq47469){
var G__47470 = cljs.core.first.call(null,seq47469);
var seq47469__$1 = cljs.core.next.call(null,seq47469);
var G__47471 = cljs.core.first.call(null,seq47469__$1);
var seq47469__$2 = cljs.core.next.call(null,seq47469__$1);
return clojure.core.matrix.ge.cljs$core$IFn$_invoke$arity$variadic(G__47470,G__47471,seq47469__$2);
});

clojure.core.matrix.ge.cljs$lang$maxFixedArity = (2);

/**
 * Element-wise not-equal comparison operation. Returns a binary array where
 *   elements not-equal to the argument are represented by 1 and elements equal to
 *   the argument are 0.
 * 
 *   Performs broadcasting of arguments if required to match the size of the largest array.
 * 
 *   Examples:
 *   (ne 1 1) ;=> 0
 *   (ne 5 1) ;=> 1
 *   (ne [[1 5] [3 6]] 3) ;=> [[1 1] [0 1]]
 *   (ne [[1 5] [4 6]] [[2 3] [5 6]]) ;=> [[1 1] [1 0]]
 */
clojure.core.matrix.ne = (function clojure$core$matrix$ne(m,a){
return clojure.core.matrix.protocols.element_ne.call(null,m,a);
});
/**
 * Element-wise equal comparison operation. Returns a binary
 * array where elements equal to the argument are represented by 1 and
 * elements not-equal to the argument are 0.
 * 
 *   Performs broadcasting of arguments if required to match the size of the largest array.
 * 
 *   Examples:
 *   (eq 1 1) ;=> 1
 *   (eq 5 1) ;=> 0
 *   (eq [[1 5] [3 6]] 3) ;=> [[0 0] [1 0]]
 *   (eq [[1 5] [4 6]] [[2 3] [5 6]]) ;=> [[0 0] [0 1]]
 */
clojure.core.matrix.eq = (function clojure$core$matrix$eq(m,a){
return clojure.core.matrix.protocols.element_eq.call(null,m,a);
});
/**
 * Returns true if all corresponding array elements are equal (using the semantics of clojure.core/=).
 * 
 * WARNING: a java.lang.Long does not equal a java.lang.Double.
 * Use 'equals' or 'e==' instead if you want to test for numerical equality.
 */
clojure.core.matrix.e_EQ_ = (function clojure$core$matrix$e_EQ_(var_args){
var args47478 = [];
var len__21896__auto___47484 = arguments.length;
var i__21897__auto___47485 = (0);
while(true){
if((i__21897__auto___47485 < len__21896__auto___47484)){
args47478.push((arguments[i__21897__auto___47485]));

var G__47486 = (i__21897__auto___47485 + (1));
i__21897__auto___47485 = G__47486;
continue;
} else {
}
break;
}

var G__47483 = args47478.length;
switch (G__47483) {
case 1:
return clojure.core.matrix.e_EQ_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.e_EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__21919__auto__ = (new cljs.core.IndexedSeq(args47478.slice((2)),(0),null));
return clojure.core.matrix.e_EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__21919__auto__);

}
});

clojure.core.matrix.e_EQ_.cljs$core$IFn$_invoke$arity$1 = (function (m1){
return true;
});

clojure.core.matrix.e_EQ_.cljs$core$IFn$_invoke$arity$2 = (function (m1,m2){
return clojure.core.matrix.protocols.value_equals.call(null,m1,m2);
});

clojure.core.matrix.e_EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (m1,m2,more){
var and__20663__auto__ = clojure.core.matrix.protocols.value_equals.call(null,m1,m2);
if(cljs.core.truth_(and__20663__auto__)){
return cljs.core.apply.call(null,clojure.core.matrix.e_EQ_,m2,more);
} else {
return and__20663__auto__;
}
});

clojure.core.matrix.e_EQ_.cljs$lang$applyTo = (function (seq47479){
var G__47480 = cljs.core.first.call(null,seq47479);
var seq47479__$1 = cljs.core.next.call(null,seq47479);
var G__47481 = cljs.core.first.call(null,seq47479__$1);
var seq47479__$2 = cljs.core.next.call(null,seq47479__$1);
return clojure.core.matrix.e_EQ_.cljs$core$IFn$_invoke$arity$variadic(G__47480,G__47481,seq47479__$2);
});

clojure.core.matrix.e_EQ_.cljs$lang$maxFixedArity = (2);

/**
 * Returns true if all corresponding array elements are numerically equal.
 * 
 * Throws an error if any elements of the arrays being compared are not numerical values.
 */
clojure.core.matrix.e_EQ__EQ_ = (function clojure$core$matrix$e_EQ__EQ_(var_args){
var args47488 = [];
var len__21896__auto___47494 = arguments.length;
var i__21897__auto___47495 = (0);
while(true){
if((i__21897__auto___47495 < len__21896__auto___47494)){
args47488.push((arguments[i__21897__auto___47495]));

var G__47498 = (i__21897__auto___47495 + (1));
i__21897__auto___47495 = G__47498;
continue;
} else {
}
break;
}

var G__47493 = args47488.length;
switch (G__47493) {
case 1:
return clojure.core.matrix.e_EQ__EQ_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.e_EQ__EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__21919__auto__ = (new cljs.core.IndexedSeq(args47488.slice((2)),(0),null));
return clojure.core.matrix.e_EQ__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__21919__auto__);

}
});

clojure.core.matrix.e_EQ__EQ_.cljs$core$IFn$_invoke$arity$1 = (function (m1){
return true;
});

clojure.core.matrix.e_EQ__EQ_.cljs$core$IFn$_invoke$arity$2 = (function (m1,m2){
return clojure.core.matrix.equals.call(null,m1,m2);
});

clojure.core.matrix.e_EQ__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (m1,m2,more){
return cljs.core.reduce.call(null,clojure.core.matrix.equals,clojure.core.matrix.equals.call(null,m1,m2),more);
});

clojure.core.matrix.e_EQ__EQ_.cljs$lang$applyTo = (function (seq47489){
var G__47490 = cljs.core.first.call(null,seq47489);
var seq47489__$1 = cljs.core.next.call(null,seq47489);
var G__47491 = cljs.core.first.call(null,seq47489__$1);
var seq47489__$2 = cljs.core.next.call(null,seq47489__$1);
return clojure.core.matrix.e_EQ__EQ_.cljs$core$IFn$_invoke$arity$variadic(G__47490,G__47491,seq47489__$2);
});

clojure.core.matrix.e_EQ__EQ_.cljs$lang$maxFixedArity = (2);

/**
 * Returns a label for the specified position along a given array dimension. Returns nil if the dimension is unlabelled.
 */
clojure.core.matrix.label = (function clojure$core$matrix$label(m,dim,i){
return clojure.core.matrix.protocols.label.call(null,m,dim,i);
});
/**
 * Return a vector of labels for a given array dimension. Return nil if the dimension is unlabelled.
 */
clojure.core.matrix.labels = (function clojure$core$matrix$labels(m,dim){
return clojure.core.matrix.protocols.labels.call(null,m,dim);
});
/**
 * Return the index of a label along a given dimension. Returns nil if the label does not exist.
 */
clojure.core.matrix.label_index = (function clojure$core$matrix$label_index(m,dim,label){
var ls = clojure.core.matrix.protocols.labels.call(null,m,dim);
var and__20663__auto__ = ls;
if(cljs.core.truth_(and__20663__auto__)){
return clojure.core.matrix.utils.find_index.call(null,ls,label);
} else {
return and__20663__auto__;
}
});
/**
 * Performs element-wise multiplication with scalars and numerical arrays.
 * 
 * Behaves like clojure.core/* for scalar values.
 */
clojure.core.matrix.mul = (function clojure$core$matrix$mul(var_args){
var args47502 = [];
var len__21896__auto___47508 = arguments.length;
var i__21897__auto___47509 = (0);
while(true){
if((i__21897__auto___47509 < len__21896__auto___47508)){
args47502.push((arguments[i__21897__auto___47509]));

var G__47510 = (i__21897__auto___47509 + (1));
i__21897__auto___47509 = G__47510;
continue;
} else {
}
break;
}

var G__47507 = args47502.length;
switch (G__47507) {
case 0:
return clojure.core.matrix.mul.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return clojure.core.matrix.mul.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.mul.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__21919__auto__ = (new cljs.core.IndexedSeq(args47502.slice((2)),(0),null));
return clojure.core.matrix.mul.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__21919__auto__);

}
});

clojure.core.matrix.mul.cljs$core$IFn$_invoke$arity$0 = (function (){
return 1.0;
});

clojure.core.matrix.mul.cljs$core$IFn$_invoke$arity$1 = (function (a){
return a;
});

clojure.core.matrix.mul.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
if(typeof b === 'number'){
if(typeof a === 'number'){
return (a * b);
} else {
return clojure.core.matrix.protocols.scale.call(null,a,b);
}
} else {
if(typeof a === 'number'){
return clojure.core.matrix.protocols.pre_scale.call(null,b,a);
} else {
return clojure.core.matrix.protocols.element_multiply.call(null,a,b);

}
}
});

clojure.core.matrix.mul.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,more){
return cljs.core.reduce.call(null,clojure.core.matrix.mul,clojure.core.matrix.mul.call(null,a,b),more);
});

clojure.core.matrix.mul.cljs$lang$applyTo = (function (seq47503){
var G__47504 = cljs.core.first.call(null,seq47503);
var seq47503__$1 = cljs.core.next.call(null,seq47503);
var G__47505 = cljs.core.first.call(null,seq47503__$1);
var seq47503__$2 = cljs.core.next.call(null,seq47503__$1);
return clojure.core.matrix.mul.cljs$core$IFn$_invoke$arity$variadic(G__47504,G__47505,seq47503__$2);
});

clojure.core.matrix.mul.cljs$lang$maxFixedArity = (2);

/**
 * DEPRECATED: please use mul instead.
 */
clojure.core.matrix.emul = (function clojure$core$matrix$emul(var_args){
var args47518 = [];
var len__21896__auto___47524 = arguments.length;
var i__21897__auto___47525 = (0);
while(true){
if((i__21897__auto___47525 < len__21896__auto___47524)){
args47518.push((arguments[i__21897__auto___47525]));

var G__47526 = (i__21897__auto___47525 + (1));
i__21897__auto___47525 = G__47526;
continue;
} else {
}
break;
}

var G__47523 = args47518.length;
switch (G__47523) {
case 0:
return clojure.core.matrix.emul.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return clojure.core.matrix.emul.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.emul.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__21919__auto__ = (new cljs.core.IndexedSeq(args47518.slice((2)),(0),null));
return clojure.core.matrix.emul.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__21919__auto__);

}
});

clojure.core.matrix.emul.cljs$core$IFn$_invoke$arity$0 = (function (){
return 1.0;
});

clojure.core.matrix.emul.cljs$core$IFn$_invoke$arity$1 = (function (a){
return a;
});

clojure.core.matrix.emul.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return clojure.core.matrix.protocols.element_multiply.call(null,a,b);
});

clojure.core.matrix.emul.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,more){
return cljs.core.reduce.call(null,clojure.core.matrix.protocols.element_multiply,clojure.core.matrix.protocols.element_multiply.call(null,a,b),more);
});

clojure.core.matrix.emul.cljs$lang$applyTo = (function (seq47519){
var G__47520 = cljs.core.first.call(null,seq47519);
var seq47519__$1 = cljs.core.next.call(null,seq47519);
var G__47521 = cljs.core.first.call(null,seq47519__$1);
var seq47519__$2 = cljs.core.next.call(null,seq47519__$1);
return clojure.core.matrix.emul.cljs$core$IFn$_invoke$arity$variadic(G__47520,G__47521,seq47519__$2);
});

clojure.core.matrix.emul.cljs$lang$maxFixedArity = (2);

/**
 * Performs matrix multiplication on matrices or vectors. Equivalent to
 *   inner-product when applied to vectors.  Will treat a 1D vector roughly as a
 *   1xN matrix (row vector) when it's the first argument, or as an Nx1 matrix
 *   (column vector) when it's the second argument--except that the dimensionality
 *   of the result will be different from what it would be with matrix arguments.
 */
clojure.core.matrix.mmul = (function clojure$core$matrix$mmul(var_args){
var args47534 = [];
var len__21896__auto___47546 = arguments.length;
var i__21897__auto___47548 = (0);
while(true){
if((i__21897__auto___47548 < len__21896__auto___47546)){
args47534.push((arguments[i__21897__auto___47548]));

var G__47550 = (i__21897__auto___47548 + (1));
i__21897__auto___47548 = G__47550;
continue;
} else {
}
break;
}

var G__47540 = args47534.length;
switch (G__47540) {
case 0:
return clojure.core.matrix.mmul.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return clojure.core.matrix.mmul.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.mmul.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__21919__auto__ = (new cljs.core.IndexedSeq(args47534.slice((2)),(0),null));
return clojure.core.matrix.mmul.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__21919__auto__);

}
});

clojure.core.matrix.mmul.cljs$core$IFn$_invoke$arity$0 = (function (){
return 1.0;
});

clojure.core.matrix.mmul.cljs$core$IFn$_invoke$arity$1 = (function (a){
return a;
});

clojure.core.matrix.mmul.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return clojure.core.matrix.protocols.matrix_multiply.call(null,a,b);
});

clojure.core.matrix.mmul.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,more){
return cljs.core.reduce.call(null,clojure.core.matrix.protocols.matrix_multiply,clojure.core.matrix.protocols.matrix_multiply.call(null,a,b),more);
});

clojure.core.matrix.mmul.cljs$lang$applyTo = (function (seq47535){
var G__47536 = cljs.core.first.call(null,seq47535);
var seq47535__$1 = cljs.core.next.call(null,seq47535);
var G__47537 = cljs.core.first.call(null,seq47535__$1);
var seq47535__$2 = cljs.core.next.call(null,seq47535__$1);
return clojure.core.matrix.mmul.cljs$core$IFn$_invoke$arity$variadic(G__47536,G__47537,seq47535__$2);
});

clojure.core.matrix.mmul.cljs$lang$maxFixedArity = (2);

/**
 * An element-wise multiply operator equivalent to `mul`.
 */
clojure.core.matrix.e_STAR_ = (function clojure$core$matrix$e_STAR_(var_args){
var args47554 = [];
var len__21896__auto___47565 = arguments.length;
var i__21897__auto___47567 = (0);
while(true){
if((i__21897__auto___47567 < len__21896__auto___47565)){
args47554.push((arguments[i__21897__auto___47567]));

var G__47569 = (i__21897__auto___47567 + (1));
i__21897__auto___47567 = G__47569;
continue;
} else {
}
break;
}

var G__47562 = args47554.length;
switch (G__47562) {
case 0:
return clojure.core.matrix.e_STAR_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return clojure.core.matrix.e_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.e_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__21919__auto__ = (new cljs.core.IndexedSeq(args47554.slice((2)),(0),null));
return clojure.core.matrix.e_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__21919__auto__);

}
});

clojure.core.matrix.e_STAR_.cljs$core$IFn$_invoke$arity$0 = (function (){
return 1.0;
});

clojure.core.matrix.e_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (a){
return a;
});

clojure.core.matrix.e_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return clojure.core.matrix.protocols.element_multiply.call(null,a,b);
});

clojure.core.matrix.e_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,more){
return cljs.core.reduce.call(null,clojure.core.matrix.e_STAR_,clojure.core.matrix.e_STAR_.call(null,a,b),more);
});

clojure.core.matrix.e_STAR_.cljs$lang$applyTo = (function (seq47555){
var G__47556 = cljs.core.first.call(null,seq47555);
var seq47555__$1 = cljs.core.next.call(null,seq47555);
var G__47557 = cljs.core.first.call(null,seq47555__$1);
var seq47555__$2 = cljs.core.next.call(null,seq47555__$1);
return clojure.core.matrix.e_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__47556,G__47557,seq47555__$2);
});

clojure.core.matrix.e_STAR_.cljs$lang$maxFixedArity = (2);

/**
 * Performs element-wise matrix division for numerical arrays.
 * 
 * Computes the reciprocal of each element when passed a single argument (similar to clojure.core//).
 */
clojure.core.matrix.div = (function clojure$core$matrix$div(var_args){
var args47578 = [];
var len__21896__auto___47586 = arguments.length;
var i__21897__auto___47587 = (0);
while(true){
if((i__21897__auto___47587 < len__21896__auto___47586)){
args47578.push((arguments[i__21897__auto___47587]));

var G__47589 = (i__21897__auto___47587 + (1));
i__21897__auto___47587 = G__47589;
continue;
} else {
}
break;
}

var G__47583 = args47578.length;
switch (G__47583) {
case 1:
return clojure.core.matrix.div.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.div.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__21919__auto__ = (new cljs.core.IndexedSeq(args47578.slice((2)),(0),null));
return clojure.core.matrix.div.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__21919__auto__);

}
});

clojure.core.matrix.div.cljs$core$IFn$_invoke$arity$1 = (function (a){
return clojure.core.matrix.protocols.element_divide.call(null,a);
});

clojure.core.matrix.div.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return clojure.core.matrix.protocols.element_divide.call(null,a,b);
});

clojure.core.matrix.div.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,more){
return cljs.core.reduce.call(null,clojure.core.matrix.protocols.element_divide,clojure.core.matrix.protocols.element_divide.call(null,a,b),more);
});

clojure.core.matrix.div.cljs$lang$applyTo = (function (seq47579){
var G__47580 = cljs.core.first.call(null,seq47579);
var seq47579__$1 = cljs.core.next.call(null,seq47579);
var G__47581 = cljs.core.first.call(null,seq47579__$1);
var seq47579__$2 = cljs.core.next.call(null,seq47579__$1);
return clojure.core.matrix.div.cljs$core$IFn$_invoke$arity$variadic(G__47580,G__47581,seq47579__$2);
});

clojure.core.matrix.div.cljs$lang$maxFixedArity = (2);

/**
 * Performs in-place element-wise matrix division for numerical arrays.
 * 
 * Computes the reciprocal of each element when passed a single argument (similar to clojure.core//).
 */
clojure.core.matrix.div_BANG_ = (function clojure$core$matrix$div_BANG_(var_args){
var args47596 = [];
var len__21896__auto___47616 = arguments.length;
var i__21897__auto___47617 = (0);
while(true){
if((i__21897__auto___47617 < len__21896__auto___47616)){
args47596.push((arguments[i__21897__auto___47617]));

var G__47618 = (i__21897__auto___47617 + (1));
i__21897__auto___47617 = G__47618;
continue;
} else {
}
break;
}

var G__47603 = args47596.length;
switch (G__47603) {
case 1:
return clojure.core.matrix.div_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.div_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__21919__auto__ = (new cljs.core.IndexedSeq(args47596.slice((2)),(0),null));
return clojure.core.matrix.div_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__21919__auto__);

}
});

clojure.core.matrix.div_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (a){
clojure.core.matrix.protocols.element_divide_BANG_.call(null,a);

return a;
});

clojure.core.matrix.div_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
clojure.core.matrix.protocols.element_divide_BANG_.call(null,a,b);

return a;
});

clojure.core.matrix.div_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,more){
clojure.core.matrix.protocols.element_divide_BANG_.call(null,a,b);

var seq__47612_47627 = cljs.core.seq.call(null,more);
var chunk__47613_47628 = null;
var count__47614_47629 = (0);
var i__47615_47630 = (0);
while(true){
if((i__47615_47630 < count__47614_47629)){
var c_47633 = cljs.core._nth.call(null,chunk__47613_47628,i__47615_47630);
clojure.core.matrix.protocols.element_divide_BANG_.call(null,a,c_47633);

var G__47635 = seq__47612_47627;
var G__47636 = chunk__47613_47628;
var G__47637 = count__47614_47629;
var G__47638 = (i__47615_47630 + (1));
seq__47612_47627 = G__47635;
chunk__47613_47628 = G__47636;
count__47614_47629 = G__47637;
i__47615_47630 = G__47638;
continue;
} else {
var temp__6753__auto___47639 = cljs.core.seq.call(null,seq__47612_47627);
if(temp__6753__auto___47639){
var seq__47612_47640__$1 = temp__6753__auto___47639;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47612_47640__$1)){
var c__21586__auto___47642 = cljs.core.chunk_first.call(null,seq__47612_47640__$1);
var G__47644 = cljs.core.chunk_rest.call(null,seq__47612_47640__$1);
var G__47645 = c__21586__auto___47642;
var G__47646 = cljs.core.count.call(null,c__21586__auto___47642);
var G__47647 = (0);
seq__47612_47627 = G__47644;
chunk__47613_47628 = G__47645;
count__47614_47629 = G__47646;
i__47615_47630 = G__47647;
continue;
} else {
var c_47652 = cljs.core.first.call(null,seq__47612_47640__$1);
clojure.core.matrix.protocols.element_divide_BANG_.call(null,a,c_47652);

var G__47653 = cljs.core.next.call(null,seq__47612_47640__$1);
var G__47654 = null;
var G__47655 = (0);
var G__47656 = (0);
seq__47612_47627 = G__47653;
chunk__47613_47628 = G__47654;
count__47614_47629 = G__47655;
i__47615_47630 = G__47656;
continue;
}
} else {
}
}
break;
}

return a;
});

clojure.core.matrix.div_BANG_.cljs$lang$applyTo = (function (seq47597){
var G__47598 = cljs.core.first.call(null,seq47597);
var seq47597__$1 = cljs.core.next.call(null,seq47597);
var G__47599 = cljs.core.first.call(null,seq47597__$1);
var seq47597__$2 = cljs.core.next.call(null,seq47597__$1);
return clojure.core.matrix.div_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__47598,G__47599,seq47597__$2);
});

clojure.core.matrix.div_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Performs in-place element-wise multiplication of numerical arrays.
 * 
 * Returns the first argument after mutation.
 */
clojure.core.matrix.mul_BANG_ = (function clojure$core$matrix$mul_BANG_(var_args){
var args47661 = [];
var len__21896__auto___47681 = arguments.length;
var i__21897__auto___47682 = (0);
while(true){
if((i__21897__auto___47682 < len__21896__auto___47681)){
args47661.push((arguments[i__21897__auto___47682]));

var G__47683 = (i__21897__auto___47682 + (1));
i__21897__auto___47682 = G__47683;
continue;
} else {
}
break;
}

var G__47666 = args47661.length;
switch (G__47666) {
case 1:
return clojure.core.matrix.mul_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.mul_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__21919__auto__ = (new cljs.core.IndexedSeq(args47661.slice((2)),(0),null));
return clojure.core.matrix.mul_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__21919__auto__);

}
});

clojure.core.matrix.mul_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (a){
return a;
});

clojure.core.matrix.mul_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
clojure.core.matrix.protocols.element_multiply_BANG_.call(null,a,b);

return a;
});

clojure.core.matrix.mul_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,more){
clojure.core.matrix.protocols.element_multiply_BANG_.call(null,a,b);

var seq__47667_47685 = cljs.core.seq.call(null,more);
var chunk__47668_47686 = null;
var count__47669_47687 = (0);
var i__47670_47688 = (0);
while(true){
if((i__47670_47688 < count__47669_47687)){
var c_47689 = cljs.core._nth.call(null,chunk__47668_47686,i__47670_47688);
clojure.core.matrix.protocols.element_multiply_BANG_.call(null,a,c_47689);

var G__47690 = seq__47667_47685;
var G__47691 = chunk__47668_47686;
var G__47692 = count__47669_47687;
var G__47693 = (i__47670_47688 + (1));
seq__47667_47685 = G__47690;
chunk__47668_47686 = G__47691;
count__47669_47687 = G__47692;
i__47670_47688 = G__47693;
continue;
} else {
var temp__6753__auto___47694 = cljs.core.seq.call(null,seq__47667_47685);
if(temp__6753__auto___47694){
var seq__47667_47695__$1 = temp__6753__auto___47694;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47667_47695__$1)){
var c__21586__auto___47696 = cljs.core.chunk_first.call(null,seq__47667_47695__$1);
var G__47697 = cljs.core.chunk_rest.call(null,seq__47667_47695__$1);
var G__47698 = c__21586__auto___47696;
var G__47699 = cljs.core.count.call(null,c__21586__auto___47696);
var G__47700 = (0);
seq__47667_47685 = G__47697;
chunk__47668_47686 = G__47698;
count__47669_47687 = G__47699;
i__47670_47688 = G__47700;
continue;
} else {
var c_47701 = cljs.core.first.call(null,seq__47667_47695__$1);
clojure.core.matrix.protocols.element_multiply_BANG_.call(null,a,c_47701);

var G__47702 = cljs.core.next.call(null,seq__47667_47695__$1);
var G__47703 = null;
var G__47704 = (0);
var G__47705 = (0);
seq__47667_47685 = G__47702;
chunk__47668_47686 = G__47703;
count__47669_47687 = G__47704;
i__47670_47688 = G__47705;
continue;
}
} else {
}
}
break;
}

return a;
});

clojure.core.matrix.mul_BANG_.cljs$lang$applyTo = (function (seq47662){
var G__47663 = cljs.core.first.call(null,seq47662);
var seq47662__$1 = cljs.core.next.call(null,seq47662);
var G__47664 = cljs.core.first.call(null,seq47662__$1);
var seq47662__$2 = cljs.core.next.call(null,seq47662__$1);
return clojure.core.matrix.mul_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__47663,G__47664,seq47662__$2);
});

clojure.core.matrix.mul_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Performs in-place element-wise multiplication of numerical arrays.
 * 
 * Returns the first argument after mutation.
 */
clojure.core.matrix.emul_BANG_ = (function clojure$core$matrix$emul_BANG_(var_args){
var args47706 = [];
var len__21896__auto___47718 = arguments.length;
var i__21897__auto___47719 = (0);
while(true){
if((i__21897__auto___47719 < len__21896__auto___47718)){
args47706.push((arguments[i__21897__auto___47719]));

var G__47720 = (i__21897__auto___47719 + (1));
i__21897__auto___47719 = G__47720;
continue;
} else {
}
break;
}

var G__47713 = args47706.length;
switch (G__47713) {
case 1:
return clojure.core.matrix.emul_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.emul_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__21919__auto__ = (new cljs.core.IndexedSeq(args47706.slice((2)),(0),null));
return clojure.core.matrix.emul_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__21919__auto__);

}
});

clojure.core.matrix.emul_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (a){
return a;
});

clojure.core.matrix.emul_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
clojure.core.matrix.protocols.element_multiply_BANG_.call(null,a,b);

return a;
});

clojure.core.matrix.emul_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,more){
clojure.core.matrix.protocols.element_multiply_BANG_.call(null,a,b);

var seq__47714_47722 = cljs.core.seq.call(null,more);
var chunk__47715_47723 = null;
var count__47716_47724 = (0);
var i__47717_47725 = (0);
while(true){
if((i__47717_47725 < count__47716_47724)){
var c_47726 = cljs.core._nth.call(null,chunk__47715_47723,i__47717_47725);
clojure.core.matrix.protocols.element_multiply_BANG_.call(null,a,c_47726);

var G__47727 = seq__47714_47722;
var G__47728 = chunk__47715_47723;
var G__47729 = count__47716_47724;
var G__47730 = (i__47717_47725 + (1));
seq__47714_47722 = G__47727;
chunk__47715_47723 = G__47728;
count__47716_47724 = G__47729;
i__47717_47725 = G__47730;
continue;
} else {
var temp__6753__auto___47731 = cljs.core.seq.call(null,seq__47714_47722);
if(temp__6753__auto___47731){
var seq__47714_47732__$1 = temp__6753__auto___47731;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47714_47732__$1)){
var c__21586__auto___47733 = cljs.core.chunk_first.call(null,seq__47714_47732__$1);
var G__47734 = cljs.core.chunk_rest.call(null,seq__47714_47732__$1);
var G__47735 = c__21586__auto___47733;
var G__47736 = cljs.core.count.call(null,c__21586__auto___47733);
var G__47737 = (0);
seq__47714_47722 = G__47734;
chunk__47715_47723 = G__47735;
count__47716_47724 = G__47736;
i__47717_47725 = G__47737;
continue;
} else {
var c_47738 = cljs.core.first.call(null,seq__47714_47732__$1);
clojure.core.matrix.protocols.element_multiply_BANG_.call(null,a,c_47738);

var G__47739 = cljs.core.next.call(null,seq__47714_47732__$1);
var G__47740 = null;
var G__47741 = (0);
var G__47742 = (0);
seq__47714_47722 = G__47739;
chunk__47715_47723 = G__47740;
count__47716_47724 = G__47741;
i__47717_47725 = G__47742;
continue;
}
} else {
}
}
break;
}

return a;
});

clojure.core.matrix.emul_BANG_.cljs$lang$applyTo = (function (seq47707){
var G__47708 = cljs.core.first.call(null,seq47707);
var seq47707__$1 = cljs.core.next.call(null,seq47707);
var G__47709 = cljs.core.first.call(null,seq47707__$1);
var seq47707__$2 = cljs.core.next.call(null,seq47707__$1);
return clojure.core.matrix.emul_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__47708,G__47709,seq47707__$2);
});

clojure.core.matrix.emul_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Transforms a given vector with a transformation, returning a new vector.
 * 
 * The transformation may be a 2D matrix, but other types of transformation may also be supported
 * e.g. affine transformations, unary operators.
 */
clojure.core.matrix.transform = (function clojure$core$matrix$transform(t,v){
return clojure.core.matrix.protocols.vector_transform.call(null,t,v);
});
/**
 * Transforms a given vector in place. This is a mutable equivalent to `transform`.
 * 
 * Returns the transformed vector.
 * 
 * The transformation must map an n-dimensional vector to another n-dimensional vector, i.e.
 * if it is a 2D matrix then it must have shape [n x n].
 */
clojure.core.matrix.transform_BANG_ = (function clojure$core$matrix$transform_BANG_(t,v){
clojure.core.matrix.protocols.vector_transform_BANG_.call(null,t,v);

return v;
});
/**
 * Performs element-wise addition on one or more numerical arrays.
 */
clojure.core.matrix.add = (function clojure$core$matrix$add(var_args){
var args47751 = [];
var len__21896__auto___47767 = arguments.length;
var i__21897__auto___47769 = (0);
while(true){
if((i__21897__auto___47769 < len__21896__auto___47767)){
args47751.push((arguments[i__21897__auto___47769]));

var G__47772 = (i__21897__auto___47769 + (1));
i__21897__auto___47769 = G__47772;
continue;
} else {
}
break;
}

var G__47760 = args47751.length;
switch (G__47760) {
case 0:
return clojure.core.matrix.add.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return clojure.core.matrix.add.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.add.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__21919__auto__ = (new cljs.core.IndexedSeq(args47751.slice((2)),(0),null));
return clojure.core.matrix.add.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__21919__auto__);

}
});

clojure.core.matrix.add.cljs$core$IFn$_invoke$arity$0 = (function (){
return 0.0;
});

clojure.core.matrix.add.cljs$core$IFn$_invoke$arity$1 = (function (a){
return a;
});

clojure.core.matrix.add.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return clojure.core.matrix.protocols.matrix_add.call(null,a,b);
});

clojure.core.matrix.add.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,more){
return cljs.core.reduce.call(null,clojure.core.matrix.protocols.matrix_add,clojure.core.matrix.protocols.matrix_add.call(null,a,b),more);
});

clojure.core.matrix.add.cljs$lang$applyTo = (function (seq47752){
var G__47753 = cljs.core.first.call(null,seq47752);
var seq47752__$1 = cljs.core.next.call(null,seq47752);
var G__47754 = cljs.core.first.call(null,seq47752__$1);
var seq47752__$2 = cljs.core.next.call(null,seq47752__$1);
return clojure.core.matrix.add.cljs$core$IFn$_invoke$arity$variadic(G__47753,G__47754,seq47752__$2);
});

clojure.core.matrix.add.cljs$lang$maxFixedArity = (2);

/**
 * Performs element-wise mutable addition on one or more numerical arrays. This is the mutable
 * equivalent of `add`.
 * 
 * When adding many arrays, use of `add!` with a mutable array as the first argument is
 * usually faster than repreated use of `add` because it can avoid unnecessary copying.
 * 
 * Returns the first array after it has been mutated.
 */
clojure.core.matrix.add_BANG_ = (function clojure$core$matrix$add_BANG_(var_args){
var args47784 = [];
var len__21896__auto___47794 = arguments.length;
var i__21897__auto___47795 = (0);
while(true){
if((i__21897__auto___47795 < len__21896__auto___47794)){
args47784.push((arguments[i__21897__auto___47795]));

var G__47796 = (i__21897__auto___47795 + (1));
i__21897__auto___47795 = G__47796;
continue;
} else {
}
break;
}

var G__47789 = args47784.length;
switch (G__47789) {
case 1:
return clojure.core.matrix.add_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.add_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__21919__auto__ = (new cljs.core.IndexedSeq(args47784.slice((2)),(0),null));
return clojure.core.matrix.add_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__21919__auto__);

}
});

clojure.core.matrix.add_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (a){
return a;
});

clojure.core.matrix.add_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
clojure.core.matrix.protocols.matrix_add_BANG_.call(null,a,b);

return a;
});

clojure.core.matrix.add_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,more){
clojure.core.matrix.protocols.matrix_add_BANG_.call(null,a,b);

var seq__47790_47798 = cljs.core.seq.call(null,more);
var chunk__47791_47799 = null;
var count__47792_47800 = (0);
var i__47793_47801 = (0);
while(true){
if((i__47793_47801 < count__47792_47800)){
var m_47802 = cljs.core._nth.call(null,chunk__47791_47799,i__47793_47801);
clojure.core.matrix.protocols.matrix_add_BANG_.call(null,a,m_47802);

var G__47804 = seq__47790_47798;
var G__47805 = chunk__47791_47799;
var G__47806 = count__47792_47800;
var G__47807 = (i__47793_47801 + (1));
seq__47790_47798 = G__47804;
chunk__47791_47799 = G__47805;
count__47792_47800 = G__47806;
i__47793_47801 = G__47807;
continue;
} else {
var temp__6753__auto___47809 = cljs.core.seq.call(null,seq__47790_47798);
if(temp__6753__auto___47809){
var seq__47790_47811__$1 = temp__6753__auto___47809;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47790_47811__$1)){
var c__21586__auto___47812 = cljs.core.chunk_first.call(null,seq__47790_47811__$1);
var G__47813 = cljs.core.chunk_rest.call(null,seq__47790_47811__$1);
var G__47814 = c__21586__auto___47812;
var G__47815 = cljs.core.count.call(null,c__21586__auto___47812);
var G__47816 = (0);
seq__47790_47798 = G__47813;
chunk__47791_47799 = G__47814;
count__47792_47800 = G__47815;
i__47793_47801 = G__47816;
continue;
} else {
var m_47818 = cljs.core.first.call(null,seq__47790_47811__$1);
clojure.core.matrix.protocols.matrix_add_BANG_.call(null,a,m_47818);

var G__47820 = cljs.core.next.call(null,seq__47790_47811__$1);
var G__47821 = null;
var G__47822 = (0);
var G__47823 = (0);
seq__47790_47798 = G__47820;
chunk__47791_47799 = G__47821;
count__47792_47800 = G__47822;
i__47793_47801 = G__47823;
continue;
}
} else {
}
}
break;
}

return a;
});

clojure.core.matrix.add_BANG_.cljs$lang$applyTo = (function (seq47785){
var G__47786 = cljs.core.first.call(null,seq47785);
var seq47785__$1 = cljs.core.next.call(null,seq47785);
var G__47787 = cljs.core.first.call(null,seq47785__$1);
var seq47785__$2 = cljs.core.next.call(null,seq47785__$1);
return clojure.core.matrix.add_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__47786,G__47787,seq47785__$2);
});

clojure.core.matrix.add_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Adds the element-wise product of two numerical arrays to the first array.
 * Arrays should be the same shape.
 */
clojure.core.matrix.add_product = (function clojure$core$matrix$add_product(m,a,b){
return clojure.core.matrix.protocols.add_product.call(null,m,a,b);
});
/**
 * Adds the product of two numerical arrays to the first array. Returns the mutated array.
 */
clojure.core.matrix.add_product_BANG_ = (function clojure$core$matrix$add_product_BANG_(m,a,b){
clojure.core.matrix.protocols.add_product_BANG_.call(null,m,a,b);

return m;
});
/**
 * Adds a numerical array scaled by a given factor to the first array
 */
clojure.core.matrix.add_scaled = (function clojure$core$matrix$add_scaled(m,a,factor){
return clojure.core.matrix.protocols.add_scaled.call(null,m,a,factor);
});
/**
 * Scales array m1 by factor a, then adds an array m2 scaled by factor b. May optionally add a constant.
 * Broadly equivalent to (add (mul m1 a) (mul m2 b) constant)
 * 
 * Returns a new array.
 */
clojure.core.matrix.scale_add = (function clojure$core$matrix$scale_add(var_args){
var args47828 = [];
var len__21896__auto___47831 = arguments.length;
var i__21897__auto___47832 = (0);
while(true){
if((i__21897__auto___47832 < len__21896__auto___47831)){
args47828.push((arguments[i__21897__auto___47832]));

var G__47833 = (i__21897__auto___47832 + (1));
i__21897__auto___47832 = G__47833;
continue;
} else {
}
break;
}

var G__47830 = args47828.length;
switch (G__47830) {
case 4:
return clojure.core.matrix.scale_add.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return clojure.core.matrix.scale_add.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args47828.length)].join('')));

}
});

clojure.core.matrix.scale_add.cljs$core$IFn$_invoke$arity$4 = (function (m1,a,m2,b){
return clojure.core.matrix.protocols.scale_add.call(null,m1,a,m2,b,0.0);
});

clojure.core.matrix.scale_add.cljs$core$IFn$_invoke$arity$5 = (function (m1,a,m2,b,constant){
return clojure.core.matrix.protocols.scale_add.call(null,m1,a,m2,b,constant);
});

clojure.core.matrix.scale_add.cljs$lang$maxFixedArity = 5;

/**
 * Scales array m1 by factor a, then adds an array m2 scaled by factor b. May optionally add a constant.
 * Broadly equivalent to (add! (mul! m1 a) (mul m2 b) constant)
 * 
 * Returns the mutated array `m1`. The array `m2` will not be changed.
 */
clojure.core.matrix.scale_add_BANG_ = (function clojure$core$matrix$scale_add_BANG_(var_args){
var args47835 = [];
var len__21896__auto___47838 = arguments.length;
var i__21897__auto___47839 = (0);
while(true){
if((i__21897__auto___47839 < len__21896__auto___47838)){
args47835.push((arguments[i__21897__auto___47839]));

var G__47840 = (i__21897__auto___47839 + (1));
i__21897__auto___47839 = G__47840;
continue;
} else {
}
break;
}

var G__47837 = args47835.length;
switch (G__47837) {
case 4:
return clojure.core.matrix.scale_add_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return clojure.core.matrix.scale_add_BANG_.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args47835.length)].join('')));

}
});

clojure.core.matrix.scale_add_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (m1,a,m2,b){
return clojure.core.matrix.scale_add_BANG_.call(null,m1,a,m2,b,0.0);
});

clojure.core.matrix.scale_add_BANG_.cljs$core$IFn$_invoke$arity$5 = (function (m1,a,m2,b,constant){
clojure.core.matrix.protocols.scale_add_BANG_.call(null,m1,a,m2,b,constant);

return m1;
});

clojure.core.matrix.scale_add_BANG_.cljs$lang$maxFixedArity = 5;

/**
 * Performs linear interpolation between two arrays. If factor is 0.0, result will be equal to the first vector.
 * If factor is 1.0, result will be equal to the second vector. Returns a new array.
 */
clojure.core.matrix.lerp = (function clojure$core$matrix$lerp(a,b,factor){
return clojure.core.matrix.protocols.lerp.call(null,a,b,factor);
});
/**
 * Performs linear interpolation between two arrays. If factor is 0.0, result will be equal to the first vector.
 * If factor is 1.0, result will be equal to the second vector. Returns a the mutated first array.
 */
clojure.core.matrix.lerp_BANG_ = (function clojure$core$matrix$lerp_BANG_(a,b,factor){
return clojure.core.matrix.protocols.lerp_BANG_.call(null,a,b,factor);
});
/**
 * Adds a numerical array scaled by a given factor to the first array. Returns the mutated array.
 */
clojure.core.matrix.add_scaled_BANG_ = (function clojure$core$matrix$add_scaled_BANG_(m,a,factor){
clojure.core.matrix.protocols.add_scaled_BANG_.call(null,m,a,factor);

return m;
});
/**
 * Adds the product of two numerical arrays scaled by a given factor to the first array.
 * 
 * This is equivalent to (add m (mul a b factor)) but may be optimised by the underlying implementation.
 */
clojure.core.matrix.add_scaled_product = (function clojure$core$matrix$add_scaled_product(m,a,b,factor){
return clojure.core.matrix.protocols.add_scaled_product.call(null,m,a,b,factor);
});
/**
 * Adds the product of two numerical arrays scaled by a given factor to the first array.
 * Returns the mutated array.
 * This is equivalent to (add! m (mul a b factor)) but may be optimised by the underlying implementation.
 */
clojure.core.matrix.add_scaled_product_BANG_ = (function clojure$core$matrix$add_scaled_product_BANG_(m,a,b,factor){
clojure.core.matrix.protocols.add_scaled_product_BANG_.call(null,m,a,b,factor);

return m;
});
/**
 * Adds the inner product of two numerical arrays to the first array.
 * Returns the mutated array.
 * This is equivalent to (add! m (inner-product a b)) but may be optimised by the underlying implementation.
 */
clojure.core.matrix.add_inner_product_BANG_ = (function clojure$core$matrix$add_inner_product_BANG_(var_args){
var args47867 = [];
var len__21896__auto___47874 = arguments.length;
var i__21897__auto___47875 = (0);
while(true){
if((i__21897__auto___47875 < len__21896__auto___47874)){
args47867.push((arguments[i__21897__auto___47875]));

var G__47876 = (i__21897__auto___47875 + (1));
i__21897__auto___47875 = G__47876;
continue;
} else {
}
break;
}

var G__47869 = args47867.length;
switch (G__47869) {
case 3:
return clojure.core.matrix.add_inner_product_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return clojure.core.matrix.add_inner_product_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args47867.length)].join('')));

}
});

clojure.core.matrix.add_inner_product_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (m,a,b){
clojure.core.matrix.protocols.add_inner_product_BANG_.call(null,m,a,b);

return m;
});

clojure.core.matrix.add_inner_product_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (m,a,b,factor){
clojure.core.matrix.protocols.add_inner_product_BANG_.call(null,m,a,b,factor);

return m;
});

clojure.core.matrix.add_inner_product_BANG_.cljs$lang$maxFixedArity = 4;

/**
 * Adds the inner product of two numerical arrays to the first array.
 * Returns the mutated array.
 * This is equivalent to (add! m (outer-product a b)) but may be optimised by the underlying implementation.
 */
clojure.core.matrix.add_outer_product_BANG_ = (function clojure$core$matrix$add_outer_product_BANG_(var_args){
var args47890 = [];
var len__21896__auto___47902 = arguments.length;
var i__21897__auto___47903 = (0);
while(true){
if((i__21897__auto___47903 < len__21896__auto___47902)){
args47890.push((arguments[i__21897__auto___47903]));

var G__47904 = (i__21897__auto___47903 + (1));
i__21897__auto___47903 = G__47904;
continue;
} else {
}
break;
}

var G__47897 = args47890.length;
switch (G__47897) {
case 3:
return clojure.core.matrix.add_outer_product_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return clojure.core.matrix.add_outer_product_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args47890.length)].join('')));

}
});

clojure.core.matrix.add_outer_product_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (m,a,b){
clojure.core.matrix.protocols.add_outer_product_BANG_.call(null,m,a,b);

return m;
});

clojure.core.matrix.add_outer_product_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (m,a,b,factor){
clojure.core.matrix.protocols.add_outer_product_BANG_.call(null,m,a,b,factor);

return m;
});

clojure.core.matrix.add_outer_product_BANG_.cljs$lang$maxFixedArity = 4;

/**
 * Sets an array equal to the inner product of two numerical arrays.
 * Returns the mutated first array.
 * This is equivalent to (assign! m (inner-product a b)) but may be optimised by the underlying implementation.
 */
clojure.core.matrix.set_inner_product_BANG_ = (function clojure$core$matrix$set_inner_product_BANG_(var_args){
var args47915 = [];
var len__21896__auto___47929 = arguments.length;
var i__21897__auto___47930 = (0);
while(true){
if((i__21897__auto___47930 < len__21896__auto___47929)){
args47915.push((arguments[i__21897__auto___47930]));

var G__47932 = (i__21897__auto___47930 + (1));
i__21897__auto___47930 = G__47932;
continue;
} else {
}
break;
}

var G__47922 = args47915.length;
switch (G__47922) {
case 3:
return clojure.core.matrix.set_inner_product_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return clojure.core.matrix.set_inner_product_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args47915.length)].join('')));

}
});

clojure.core.matrix.set_inner_product_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (m,a,b){
clojure.core.matrix.protocols.set_inner_product_BANG_.call(null,m,a,b);

return m;
});

clojure.core.matrix.set_inner_product_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (m,a,b,factor){
clojure.core.matrix.protocols.set_inner_product_BANG_.call(null,m,a,b,factor);

return m;
});

clojure.core.matrix.set_inner_product_BANG_.cljs$lang$maxFixedArity = 4;

/**
 * Performs element-wise subtraction on one or more numerical arrays.
 * 
 * For a single argument, returns the negation.
 * 
 * Returns a new array.
 */
clojure.core.matrix.sub = (function clojure$core$matrix$sub(var_args){
var args47938 = [];
var len__21896__auto___47944 = arguments.length;
var i__21897__auto___47945 = (0);
while(true){
if((i__21897__auto___47945 < len__21896__auto___47944)){
args47938.push((arguments[i__21897__auto___47945]));

var G__47946 = (i__21897__auto___47945 + (1));
i__21897__auto___47945 = G__47946;
continue;
} else {
}
break;
}

var G__47943 = args47938.length;
switch (G__47943) {
case 1:
return clojure.core.matrix.sub.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.sub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__21919__auto__ = (new cljs.core.IndexedSeq(args47938.slice((2)),(0),null));
return clojure.core.matrix.sub.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__21919__auto__);

}
});

clojure.core.matrix.sub.cljs$core$IFn$_invoke$arity$1 = (function (a){
return clojure.core.matrix.protocols.negate.call(null,a);
});

clojure.core.matrix.sub.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return clojure.core.matrix.protocols.matrix_sub.call(null,a,b);
});

clojure.core.matrix.sub.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,more){
return cljs.core.reduce.call(null,clojure.core.matrix.protocols.matrix_sub,clojure.core.matrix.protocols.matrix_sub.call(null,a,b),more);
});

clojure.core.matrix.sub.cljs$lang$applyTo = (function (seq47939){
var G__47940 = cljs.core.first.call(null,seq47939);
var seq47939__$1 = cljs.core.next.call(null,seq47939);
var G__47941 = cljs.core.first.call(null,seq47939__$1);
var seq47939__$2 = cljs.core.next.call(null,seq47939__$1);
return clojure.core.matrix.sub.cljs$core$IFn$_invoke$arity$variadic(G__47940,G__47941,seq47939__$2);
});

clojure.core.matrix.sub.cljs$lang$maxFixedArity = (2);

/**
 * Performs element-wise mutable subtraction on one or more numerical arrays.
 * 
 * NOTE: For a single argument, returns the argument unchanged: use negate! instead if you wish to negate a mutable
 * array in place. This is intentional, so that you can do (apply sub! m list-of-arrays) and get the expected
 * result if the list of arrays is empty.
 * 
 * Returns the first array, after it has been mutated.
 */
clojure.core.matrix.sub_BANG_ = (function clojure$core$matrix$sub_BANG_(var_args){
var args47963 = [];
var len__21896__auto___47977 = arguments.length;
var i__21897__auto___47978 = (0);
while(true){
if((i__21897__auto___47978 < len__21896__auto___47977)){
args47963.push((arguments[i__21897__auto___47978]));

var G__47979 = (i__21897__auto___47978 + (1));
i__21897__auto___47978 = G__47979;
continue;
} else {
}
break;
}

var G__47971 = args47963.length;
switch (G__47971) {
case 1:
return clojure.core.matrix.sub_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.sub_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__21919__auto__ = (new cljs.core.IndexedSeq(args47963.slice((2)),(0),null));
return clojure.core.matrix.sub_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__21919__auto__);

}
});

clojure.core.matrix.sub_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (a){
return a;
});

clojure.core.matrix.sub_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
clojure.core.matrix.protocols.matrix_sub_BANG_.call(null,a,b);

return a;
});

clojure.core.matrix.sub_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,more){
clojure.core.matrix.protocols.matrix_sub_BANG_.call(null,a,b);

var seq__47973_47981 = cljs.core.seq.call(null,more);
var chunk__47974_47982 = null;
var count__47975_47983 = (0);
var i__47976_47984 = (0);
while(true){
if((i__47976_47984 < count__47975_47983)){
var m_47985 = cljs.core._nth.call(null,chunk__47974_47982,i__47976_47984);
clojure.core.matrix.protocols.matrix_sub_BANG_.call(null,a,m_47985);

var G__47986 = seq__47973_47981;
var G__47987 = chunk__47974_47982;
var G__47988 = count__47975_47983;
var G__47989 = (i__47976_47984 + (1));
seq__47973_47981 = G__47986;
chunk__47974_47982 = G__47987;
count__47975_47983 = G__47988;
i__47976_47984 = G__47989;
continue;
} else {
var temp__6753__auto___47990 = cljs.core.seq.call(null,seq__47973_47981);
if(temp__6753__auto___47990){
var seq__47973_47991__$1 = temp__6753__auto___47990;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47973_47991__$1)){
var c__21586__auto___47992 = cljs.core.chunk_first.call(null,seq__47973_47991__$1);
var G__47993 = cljs.core.chunk_rest.call(null,seq__47973_47991__$1);
var G__47994 = c__21586__auto___47992;
var G__47995 = cljs.core.count.call(null,c__21586__auto___47992);
var G__47996 = (0);
seq__47973_47981 = G__47993;
chunk__47974_47982 = G__47994;
count__47975_47983 = G__47995;
i__47976_47984 = G__47996;
continue;
} else {
var m_47997 = cljs.core.first.call(null,seq__47973_47991__$1);
clojure.core.matrix.protocols.matrix_sub_BANG_.call(null,a,m_47997);

var G__47998 = cljs.core.next.call(null,seq__47973_47991__$1);
var G__47999 = null;
var G__48000 = (0);
var G__48001 = (0);
seq__47973_47981 = G__47998;
chunk__47974_47982 = G__47999;
count__47975_47983 = G__48000;
i__47976_47984 = G__48001;
continue;
}
} else {
}
}
break;
}

return a;
});

clojure.core.matrix.sub_BANG_.cljs$lang$applyTo = (function (seq47964){
var G__47965 = cljs.core.first.call(null,seq47964);
var seq47964__$1 = cljs.core.next.call(null,seq47964);
var G__47966 = cljs.core.first.call(null,seq47964__$1);
var seq47964__$2 = cljs.core.next.call(null,seq47964__$1);
return clojure.core.matrix.sub_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__47965,G__47966,seq47964__$2);
});

clojure.core.matrix.sub_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Scales a array by one or more scalar factors. The default implementation supports numerical arrays and
 * numbers as scalar values, however matrix implementations may extend this to support other scalar types.
 * 
 * Returns a new scaled matrix.
 */
clojure.core.matrix.scale = (function clojure$core$matrix$scale(var_args){
var args48002 = [];
var len__21896__auto___48016 = arguments.length;
var i__21897__auto___48017 = (0);
while(true){
if((i__21897__auto___48017 < len__21896__auto___48016)){
args48002.push((arguments[i__21897__auto___48017]));

var G__48018 = (i__21897__auto___48017 + (1));
i__21897__auto___48017 = G__48018;
continue;
} else {
}
break;
}

var G__48011 = args48002.length;
switch (G__48011) {
case 2:
return clojure.core.matrix.scale.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__21919__auto__ = (new cljs.core.IndexedSeq(args48002.slice((2)),(0),null));
return clojure.core.matrix.scale.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__21919__auto__);

}
});

clojure.core.matrix.scale.cljs$core$IFn$_invoke$arity$2 = (function (m,factor){
return clojure.core.matrix.protocols.scale.call(null,m,factor);
});

clojure.core.matrix.scale.cljs$core$IFn$_invoke$arity$variadic = (function (m,factor,more_factors){
return clojure.core.matrix.protocols.scale.call(null,m,clojure.core.matrix.protocols.element_multiply.call(null,factor,cljs.core.reduce.call(null,clojure.core.matrix.protocols.element_multiply,more_factors)));
});

clojure.core.matrix.scale.cljs$lang$applyTo = (function (seq48003){
var G__48004 = cljs.core.first.call(null,seq48003);
var seq48003__$1 = cljs.core.next.call(null,seq48003);
var G__48005 = cljs.core.first.call(null,seq48003__$1);
var seq48003__$2 = cljs.core.next.call(null,seq48003__$1);
return clojure.core.matrix.scale.cljs$core$IFn$_invoke$arity$variadic(G__48004,G__48005,seq48003__$2);
});

clojure.core.matrix.scale.cljs$lang$maxFixedArity = (2);

/**
 * Scales a numerical array by one or more scalar factors (in place). The default implementation supports
 * numerical arrays and numbers as scalar values, however matrix implementations may extend this to
 * support other scalar types.
 * 
 * Returns the matrix after it has been mutated.
 */
clojure.core.matrix.scale_BANG_ = (function clojure$core$matrix$scale_BANG_(var_args){
var args48024 = [];
var len__21896__auto___48033 = arguments.length;
var i__21897__auto___48037 = (0);
while(true){
if((i__21897__auto___48037 < len__21896__auto___48033)){
args48024.push((arguments[i__21897__auto___48037]));

var G__48038 = (i__21897__auto___48037 + (1));
i__21897__auto___48037 = G__48038;
continue;
} else {
}
break;
}

var G__48031 = args48024.length;
switch (G__48031) {
case 2:
return clojure.core.matrix.scale_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__21919__auto__ = (new cljs.core.IndexedSeq(args48024.slice((2)),(0),null));
return clojure.core.matrix.scale_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__21919__auto__);

}
});

clojure.core.matrix.scale_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (m,factor){
clojure.core.matrix.protocols.scale_BANG_.call(null,m,factor);

return m;
});

clojure.core.matrix.scale_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (m,factor,more_factors){
clojure.core.matrix.protocols.scale_BANG_.call(null,m,clojure.core.matrix.protocols.element_multiply.call(null,factor,cljs.core.reduce.call(null,clojure.core.matrix.protocols.element_multiply,more_factors)));

return m;
});

clojure.core.matrix.scale_BANG_.cljs$lang$applyTo = (function (seq48025){
var G__48026 = cljs.core.first.call(null,seq48025);
var seq48025__$1 = cljs.core.next.call(null,seq48025);
var G__48027 = cljs.core.first.call(null,seq48025__$1);
var seq48025__$2 = cljs.core.next.call(null,seq48025__$1);
return clojure.core.matrix.scale_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__48026,G__48027,seq48025__$2);
});

clojure.core.matrix.scale_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Squares every element of a numerical array. Returns a new array.
 */
clojure.core.matrix.square = (function clojure$core$matrix$square(m){
return clojure.core.matrix.protocols.square.call(null,m);
});
/**
 * Normalises a numerical vector (scales to unit length). Returns a new normalised vector.
 * 
 * The result is undefined if the initial length of the vector is zero (it is possible the
 * implementation may return NaNs or zeros). If this is a concern, it is recommended to check
 * the length of the vector first in order to handle this as a special case.
 */
clojure.core.matrix.normalise = (function clojure$core$matrix$normalise(v){
return clojure.core.matrix.protocols.normalise.call(null,v);
});
/**
 * Like 'normalise', but mutates a numerical vector in-place (scales to unit length).
 * Returns the modified vector.
 */
clojure.core.matrix.normalise_BANG_ = (function clojure$core$matrix$normalise_BANG_(v){
clojure.core.matrix.protocols.normalise_BANG_.call(null,v);

return v;
});
/**
 * Efficiently computes the scalar dot product (1Dx1D inner product) of two numerical vectors. Prefer this API
 * function if you are performing a dot product on 1D vectors and want a scalar result.
 * 
 * If either argument is not a vector, will compute a higher dimensional inner product.
 */
clojure.core.matrix.dot = (function clojure$core$matrix$dot(a,b){
var or__20675__auto__ = clojure.core.matrix.protocols.vector_dot.call(null,a,b);
if(cljs.core.truth_(or__20675__auto__)){
return or__20675__auto__;
} else {
var v = clojure.core.matrix.protocols.inner_product.call(null,a,b);
if(typeof v === 'number'){
return v;
} else {
if(((0) === cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,v)))){
return clojure.core.matrix.protocols.get_0d.call(null,v);
} else {
return v;

}
}
}
});
/**
 * Computes the inner product of numerical arrays.
 * 
 * For matrix/matrix and matrix/vector arguments, this is equivalent to matrix multiplication.
 * 
 * The inner product of two arrays with indexed dimensions {..i j} and {j k..} has dimensions {..i k..}. The inner-product of two vectors will be scalar.
 */
clojure.core.matrix.inner_product = (function clojure$core$matrix$inner_product(var_args){
var args48044 = [];
var len__21896__auto___48050 = arguments.length;
var i__21897__auto___48051 = (0);
while(true){
if((i__21897__auto___48051 < len__21896__auto___48050)){
args48044.push((arguments[i__21897__auto___48051]));

var G__48052 = (i__21897__auto___48051 + (1));
i__21897__auto___48051 = G__48052;
continue;
} else {
}
break;
}

var G__48049 = args48044.length;
switch (G__48049) {
case 0:
return clojure.core.matrix.inner_product.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return clojure.core.matrix.inner_product.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.inner_product.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__21919__auto__ = (new cljs.core.IndexedSeq(args48044.slice((2)),(0),null));
return clojure.core.matrix.inner_product.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__21919__auto__);

}
});

clojure.core.matrix.inner_product.cljs$core$IFn$_invoke$arity$0 = (function (){
return 1.0;
});

clojure.core.matrix.inner_product.cljs$core$IFn$_invoke$arity$1 = (function (a){
return a;
});

clojure.core.matrix.inner_product.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return clojure.core.matrix.protocols.inner_product.call(null,a,b);
});

clojure.core.matrix.inner_product.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,more){
return cljs.core.reduce.call(null,clojure.core.matrix.protocols.inner_product,clojure.core.matrix.protocols.inner_product.call(null,a,b),more);
});

clojure.core.matrix.inner_product.cljs$lang$applyTo = (function (seq48045){
var G__48046 = cljs.core.first.call(null,seq48045);
var seq48045__$1 = cljs.core.next.call(null,seq48045);
var G__48047 = cljs.core.first.call(null,seq48045__$1);
var seq48045__$2 = cljs.core.next.call(null,seq48045__$1);
return clojure.core.matrix.inner_product.cljs$core$IFn$_invoke$arity$variadic(G__48046,G__48047,seq48045__$2);
});

clojure.core.matrix.inner_product.cljs$lang$maxFixedArity = (2);

/**
 * Computes the outer product of numerical arrays.
 * 
 * The outer product of two arrays with indexed dimensions {i..j} and {j..k} has dimensions {i..j j..k}, i.e. the dimensioanlity will be the
 * sum of the dimensionalities of the two arguments.
 */
clojure.core.matrix.outer_product = (function clojure$core$matrix$outer_product(var_args){
var args48054 = [];
var len__21896__auto___48060 = arguments.length;
var i__21897__auto___48061 = (0);
while(true){
if((i__21897__auto___48061 < len__21896__auto___48060)){
args48054.push((arguments[i__21897__auto___48061]));

var G__48062 = (i__21897__auto___48061 + (1));
i__21897__auto___48061 = G__48062;
continue;
} else {
}
break;
}

var G__48059 = args48054.length;
switch (G__48059) {
case 0:
return clojure.core.matrix.outer_product.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return clojure.core.matrix.outer_product.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.outer_product.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__21919__auto__ = (new cljs.core.IndexedSeq(args48054.slice((2)),(0),null));
return clojure.core.matrix.outer_product.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__21919__auto__);

}
});

clojure.core.matrix.outer_product.cljs$core$IFn$_invoke$arity$0 = (function (){
return 1.0;
});

clojure.core.matrix.outer_product.cljs$core$IFn$_invoke$arity$1 = (function (a){
return a;
});

clojure.core.matrix.outer_product.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return clojure.core.matrix.protocols.outer_product.call(null,a,b);
});

clojure.core.matrix.outer_product.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,more){
return cljs.core.reduce.call(null,clojure.core.matrix.outer_product,clojure.core.matrix.outer_product.call(null,a,b),more);
});

clojure.core.matrix.outer_product.cljs$lang$applyTo = (function (seq48055){
var G__48056 = cljs.core.first.call(null,seq48055);
var seq48055__$1 = cljs.core.next.call(null,seq48055);
var G__48057 = cljs.core.first.call(null,seq48055__$1);
var seq48055__$2 = cljs.core.next.call(null,seq48055__$1);
return clojure.core.matrix.outer_product.cljs$core$IFn$_invoke$arity$variadic(G__48056,G__48057,seq48055__$2);
});

clojure.core.matrix.outer_product.cljs$lang$maxFixedArity = (2);

/**
 * Computes the 3D cross-product of two numerical vectors.
 * 
 * Behavior on other types is undefined.
 */
clojure.core.matrix.cross = (function clojure$core$matrix$cross(a,b){
return clojure.core.matrix.protocols.cross_product.call(null,a,b);
});
/**
 * Computes the cross-product of two numerical 3D vectors a and b, storing the result in the first vector.
 * 
 * Returns the (mutated) first vector.
 */
clojure.core.matrix.cross_BANG_ = (function clojure$core$matrix$cross_BANG_(var_args){
var args48064 = [];
var len__21896__auto___48067 = arguments.length;
var i__21897__auto___48068 = (0);
while(true){
if((i__21897__auto___48068 < len__21896__auto___48067)){
args48064.push((arguments[i__21897__auto___48068]));

var G__48069 = (i__21897__auto___48068 + (1));
i__21897__auto___48068 = G__48069;
continue;
} else {
}
break;
}

var G__48066 = args48064.length;
switch (G__48066) {
case 2:
return clojure.core.matrix.cross_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.matrix.cross_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args48064.length)].join('')));

}
});

clojure.core.matrix.cross_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
clojure.core.matrix.protocols.cross_product_BANG_.call(null,a,b);

return a;
});

clojure.core.matrix.cross_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (dest,a,b){
clojure.core.matrix.protocols.assign_BANG_.call(null,dest,a);

return clojure.core.matrix.protocols.cross_product_BANG_.call(null,dest,b);
});

clojure.core.matrix.cross_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * Calculates the euclidean distance between two numerical vectors.
 * 
 * This is equivalent to (norm 2 (sub a b)) but may be optimised by the underlying implementation.
 */
clojure.core.matrix.distance = (function clojure$core$matrix$distance(a,b){
return clojure.core.matrix.protocols.distance.call(null,a,b);
});
/**
 * Calculates the determinant of a 2D square numerical matrix.
 * 
 * May throw an exception if the implementation does not support computation of determinants.
 */
clojure.core.matrix.det = (function clojure$core$matrix$det(a){
var or__20675__auto__ = clojure.core.matrix.protocols.determinant.call(null,a);
if(cljs.core.truth_(or__20675__auto__)){
return or__20675__auto__;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("TODO: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Determinant not supported for array of type: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.core.matrix.class$.call(null,a))].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
});
/**
 * Calculates the inverse of a 2D numerical matrix.
 * 
 * Returns nil if the matrix is singular. May throw an exception if the implementation does not support inverses.
 */
clojure.core.matrix.inverse = (function clojure$core$matrix$inverse(m){
return clojure.core.matrix.protocols.inverse.call(null,m);
});
/**
 * Calculates the negation of a numerical array. Generally equivalent to (scale m -1.0)
 */
clojure.core.matrix.negate = (function clojure$core$matrix$negate(m){
return clojure.core.matrix.protocols.negate.call(null,m);
});
/**
 * Calculates the negation of a numerical array in place. Generally equivalent to (scale! m -1.0)
 */
clojure.core.matrix.negate_BANG_ = (function clojure$core$matrix$negate_BANG_(m){
clojure.core.matrix.protocols.scale_BANG_.call(null,m,-1.0);

return m;
});
/**
 * Calculates the trace of a 2D numerical matrix (sum of elements on main diagonal).
 * 
 * The matrix need not be square.
 */
clojure.core.matrix.trace = (function clojure$core$matrix$trace(a){
return clojure.core.matrix.protocols.trace.call(null,a);
});
/**
 * Calculates the euclidean length (magnitude) of a numerical vector
 */
clojure.core.matrix.magnitude = (function clojure$core$matrix$magnitude(m){
return clojure.core.matrix.protocols.length.call(null,m);
});
/**
 * Calculates the squared length (squared magnitude) of a numerical vector
 */
clojure.core.matrix.magnitude_squared = (function clojure$core$matrix$magnitude_squared(m){
return clojure.core.matrix.protocols.length_squared.call(null,m);
});
/**
 * DEPRECATED: please use magnitude instead.
 */
clojure.core.matrix.length = (function clojure$core$matrix$length(m){
return clojure.core.matrix.protocols.length.call(null,m);
});
/**
 * DEPRECATED: please use magnitude-squared instead.
 */
clojure.core.matrix.length_squared = (function clojure$core$matrix$length_squared(m){
return clojure.core.matrix.protocols.length_squared.call(null,m);
});
/**
 * Raises every element of a numerical matrix by the given exponent.
 * 
 * Note that behaviour for large exponents may depend on the underlying implementation:
 * for example double-based matrices may overflow to Double/POSITIVE_INFINITY.
 */
clojure.core.matrix.pow = (function clojure$core$matrix$pow(var_args){
var args48071 = [];
var len__21896__auto___48079 = arguments.length;
var i__21897__auto___48080 = (0);
while(true){
if((i__21897__auto___48080 < len__21896__auto___48079)){
args48071.push((arguments[i__21897__auto___48080]));

var G__48081 = (i__21897__auto___48080 + (1));
i__21897__auto___48080 = G__48081;
continue;
} else {
}
break;
}

var G__48076 = args48071.length;
switch (G__48076) {
case 1:
return clojure.core.matrix.pow.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.pow.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__21919__auto__ = (new cljs.core.IndexedSeq(args48071.slice((2)),(0),null));
return clojure.core.matrix.pow.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__21919__auto__);

}
});

clojure.core.matrix.pow.cljs$core$IFn$_invoke$arity$1 = (function (m){
return m;
});

clojure.core.matrix.pow.cljs$core$IFn$_invoke$arity$2 = (function (m,exponent){
return clojure.core.matrix.protocols.element_pow.call(null,m,exponent);
});

clojure.core.matrix.pow.cljs$core$IFn$_invoke$arity$variadic = (function (m,exponent,more){
return cljs.core.reduce.call(null,(function (m__$1,x){
return clojure.core.matrix.protocols.element_pow.call(null,m__$1,x);
}),clojure.core.matrix.protocols.element_pow.call(null,m,exponent),more);
});

clojure.core.matrix.pow.cljs$lang$applyTo = (function (seq48072){
var G__48073 = cljs.core.first.call(null,seq48072);
var seq48072__$1 = cljs.core.next.call(null,seq48072);
var G__48074 = cljs.core.first.call(null,seq48072__$1);
var seq48072__$2 = cljs.core.next.call(null,seq48072__$1);
return clojure.core.matrix.pow.cljs$core$IFn$_invoke$arity$variadic(G__48073,G__48074,seq48072__$2);
});

clojure.core.matrix.pow.cljs$lang$maxFixedArity = (2);

/**
 * Mutable exponent function, see 'pow'
 */
clojure.core.matrix.pow_BANG_ = (function clojure$core$matrix$pow_BANG_(m,a){
clojure.core.matrix.protocols.assign_BANG_.call(null,m,clojure.core.matrix.pow.call(null,m,a));

return m;
});
/**
 * Computes the abs function on all elements of an array, using double precision values. Returns a new array.
 */
clojure.core.matrix.abs = (function clojure$core$matrix$abs(m){
return clojure.core.matrix.protocols.abs.call(null,m);
});

/**
 * Computes the abs function on all elements of an array, using double precision values. Mutates the array in-place.
 */
clojure.core.matrix.abs_BANG_ = (function clojure$core$matrix$abs_BANG_(m){
clojure.core.matrix.protocols.abs_BANG_.call(null,m);

return m;
});

/**
 * Computes the acos function on all elements of an array, using double precision values. Returns a new array.
 */
clojure.core.matrix.acos = (function clojure$core$matrix$acos(m){
return clojure.core.matrix.protocols.acos.call(null,m);
});

/**
 * Computes the acos function on all elements of an array, using double precision values. Mutates the array in-place.
 */
clojure.core.matrix.acos_BANG_ = (function clojure$core$matrix$acos_BANG_(m){
clojure.core.matrix.protocols.acos_BANG_.call(null,m);

return m;
});

/**
 * Computes the asin function on all elements of an array, using double precision values. Returns a new array.
 */
clojure.core.matrix.asin = (function clojure$core$matrix$asin(m){
return clojure.core.matrix.protocols.asin.call(null,m);
});

/**
 * Computes the asin function on all elements of an array, using double precision values. Mutates the array in-place.
 */
clojure.core.matrix.asin_BANG_ = (function clojure$core$matrix$asin_BANG_(m){
clojure.core.matrix.protocols.asin_BANG_.call(null,m);

return m;
});

/**
 * Computes the atan function on all elements of an array, using double precision values. Returns a new array.
 */
clojure.core.matrix.atan = (function clojure$core$matrix$atan(m){
return clojure.core.matrix.protocols.atan.call(null,m);
});

/**
 * Computes the atan function on all elements of an array, using double precision values. Mutates the array in-place.
 */
clojure.core.matrix.atan_BANG_ = (function clojure$core$matrix$atan_BANG_(m){
clojure.core.matrix.protocols.atan_BANG_.call(null,m);

return m;
});

/**
 * Computes the cbrt function on all elements of an array, using double precision values. Returns a new array.
 */
clojure.core.matrix.cbrt = (function clojure$core$matrix$cbrt(m){
return clojure.core.matrix.protocols.cbrt.call(null,m);
});

/**
 * Computes the cbrt function on all elements of an array, using double precision values. Mutates the array in-place.
 */
clojure.core.matrix.cbrt_BANG_ = (function clojure$core$matrix$cbrt_BANG_(m){
clojure.core.matrix.protocols.cbrt_BANG_.call(null,m);

return m;
});

/**
 * Computes the ceil function on all elements of an array, using double precision values. Returns a new array.
 */
clojure.core.matrix.ceil = (function clojure$core$matrix$ceil(m){
return clojure.core.matrix.protocols.ceil.call(null,m);
});

/**
 * Computes the ceil function on all elements of an array, using double precision values. Mutates the array in-place.
 */
clojure.core.matrix.ceil_BANG_ = (function clojure$core$matrix$ceil_BANG_(m){
clojure.core.matrix.protocols.ceil_BANG_.call(null,m);

return m;
});

/**
 * Computes the cos function on all elements of an array, using double precision values. Returns a new array.
 */
clojure.core.matrix.cos = (function clojure$core$matrix$cos(m){
return clojure.core.matrix.protocols.cos.call(null,m);
});

/**
 * Computes the cos function on all elements of an array, using double precision values. Mutates the array in-place.
 */
clojure.core.matrix.cos_BANG_ = (function clojure$core$matrix$cos_BANG_(m){
clojure.core.matrix.protocols.cos_BANG_.call(null,m);

return m;
});

/**
 * Computes the cosh function on all elements of an array, using double precision values. Returns a new array.
 */
clojure.core.matrix.cosh = (function clojure$core$matrix$cosh(m){
return clojure.core.matrix.protocols.cosh.call(null,m);
});

/**
 * Computes the cosh function on all elements of an array, using double precision values. Mutates the array in-place.
 */
clojure.core.matrix.cosh_BANG_ = (function clojure$core$matrix$cosh_BANG_(m){
clojure.core.matrix.protocols.cosh_BANG_.call(null,m);

return m;
});

/**
 * Computes the exp function on all elements of an array, using double precision values. Returns a new array.
 */
clojure.core.matrix.exp = (function clojure$core$matrix$exp(m){
return clojure.core.matrix.protocols.exp.call(null,m);
});

/**
 * Computes the exp function on all elements of an array, using double precision values. Mutates the array in-place.
 */
clojure.core.matrix.exp_BANG_ = (function clojure$core$matrix$exp_BANG_(m){
clojure.core.matrix.protocols.exp_BANG_.call(null,m);

return m;
});

/**
 * Computes the floor function on all elements of an array, using double precision values. Returns a new array.
 */
clojure.core.matrix.floor = (function clojure$core$matrix$floor(m){
return clojure.core.matrix.protocols.floor.call(null,m);
});

/**
 * Computes the floor function on all elements of an array, using double precision values. Mutates the array in-place.
 */
clojure.core.matrix.floor_BANG_ = (function clojure$core$matrix$floor_BANG_(m){
clojure.core.matrix.protocols.floor_BANG_.call(null,m);

return m;
});

/**
 * Computes the log function on all elements of an array, using double precision values. Returns a new array.
 */
clojure.core.matrix.log = (function clojure$core$matrix$log(m){
return clojure.core.matrix.protocols.log.call(null,m);
});

/**
 * Computes the log function on all elements of an array, using double precision values. Mutates the array in-place.
 */
clojure.core.matrix.log_BANG_ = (function clojure$core$matrix$log_BANG_(m){
clojure.core.matrix.protocols.log_BANG_.call(null,m);

return m;
});

/**
 * Computes the log10 function on all elements of an array, using double precision values. Returns a new array.
 */
clojure.core.matrix.log10 = (function clojure$core$matrix$log10(m){
return clojure.core.matrix.protocols.log10.call(null,m);
});

/**
 * Computes the log10 function on all elements of an array, using double precision values. Mutates the array in-place.
 */
clojure.core.matrix.log10_BANG_ = (function clojure$core$matrix$log10_BANG_(m){
clojure.core.matrix.protocols.log10_BANG_.call(null,m);

return m;
});

/**
 * Computes the round function on all elements of an array, using double precision values. Returns a new array.
 */
clojure.core.matrix.round = (function clojure$core$matrix$round(m){
return clojure.core.matrix.protocols.round.call(null,m);
});

/**
 * Computes the round function on all elements of an array, using double precision values. Mutates the array in-place.
 */
clojure.core.matrix.round_BANG_ = (function clojure$core$matrix$round_BANG_(m){
clojure.core.matrix.protocols.round_BANG_.call(null,m);

return m;
});

/**
 * Computes the signum function on all elements of an array, using double precision values. Returns a new array.
 */
clojure.core.matrix.signum = (function clojure$core$matrix$signum(m){
return clojure.core.matrix.protocols.signum.call(null,m);
});

/**
 * Computes the signum function on all elements of an array, using double precision values. Mutates the array in-place.
 */
clojure.core.matrix.signum_BANG_ = (function clojure$core$matrix$signum_BANG_(m){
clojure.core.matrix.protocols.signum_BANG_.call(null,m);

return m;
});

/**
 * Computes the sin function on all elements of an array, using double precision values. Returns a new array.
 */
clojure.core.matrix.sin = (function clojure$core$matrix$sin(m){
return clojure.core.matrix.protocols.sin.call(null,m);
});

/**
 * Computes the sin function on all elements of an array, using double precision values. Mutates the array in-place.
 */
clojure.core.matrix.sin_BANG_ = (function clojure$core$matrix$sin_BANG_(m){
clojure.core.matrix.protocols.sin_BANG_.call(null,m);

return m;
});

/**
 * Computes the sinh function on all elements of an array, using double precision values. Returns a new array.
 */
clojure.core.matrix.sinh = (function clojure$core$matrix$sinh(m){
return clojure.core.matrix.protocols.sinh.call(null,m);
});

/**
 * Computes the sinh function on all elements of an array, using double precision values. Mutates the array in-place.
 */
clojure.core.matrix.sinh_BANG_ = (function clojure$core$matrix$sinh_BANG_(m){
clojure.core.matrix.protocols.sinh_BANG_.call(null,m);

return m;
});

/**
 * Computes the sqrt function on all elements of an array, using double precision values. Returns a new array.
 */
clojure.core.matrix.sqrt = (function clojure$core$matrix$sqrt(m){
return clojure.core.matrix.protocols.sqrt.call(null,m);
});

/**
 * Computes the sqrt function on all elements of an array, using double precision values. Mutates the array in-place.
 */
clojure.core.matrix.sqrt_BANG_ = (function clojure$core$matrix$sqrt_BANG_(m){
clojure.core.matrix.protocols.sqrt_BANG_.call(null,m);

return m;
});

/**
 * Computes the tan function on all elements of an array, using double precision values. Returns a new array.
 */
clojure.core.matrix.tan = (function clojure$core$matrix$tan(m){
return clojure.core.matrix.protocols.tan.call(null,m);
});

/**
 * Computes the tan function on all elements of an array, using double precision values. Mutates the array in-place.
 */
clojure.core.matrix.tan_BANG_ = (function clojure$core$matrix$tan_BANG_(m){
clojure.core.matrix.protocols.tan_BANG_.call(null,m);

return m;
});

/**
 * Computes the tanh function on all elements of an array, using double precision values. Returns a new array.
 */
clojure.core.matrix.tanh = (function clojure$core$matrix$tanh(m){
return clojure.core.matrix.protocols.tanh.call(null,m);
});

/**
 * Computes the tanh function on all elements of an array, using double precision values. Mutates the array in-place.
 */
clojure.core.matrix.tanh_BANG_ = (function clojure$core$matrix$tanh_BANG_(m){
clojure.core.matrix.protocols.tanh_BANG_.call(null,m);

return m;
});

/**
 * Computes the to-degrees function on all elements of an array, using double precision values. Returns a new array.
 */
clojure.core.matrix.to_degrees = (function clojure$core$matrix$to_degrees(m){
return clojure.core.matrix.protocols.to_degrees.call(null,m);
});

/**
 * Computes the to-degrees function on all elements of an array, using double precision values. Mutates the array in-place.
 */
clojure.core.matrix.to_degrees_BANG_ = (function clojure$core$matrix$to_degrees_BANG_(m){
clojure.core.matrix.protocols.to_degrees_BANG_.call(null,m);

return m;
});

/**
 * Computes the to-radians function on all elements of an array, using double precision values. Returns a new array.
 */
clojure.core.matrix.to_radians = (function clojure$core$matrix$to_radians(m){
return clojure.core.matrix.protocols.to_radians.call(null,m);
});

/**
 * Computes the to-radians function on all elements of an array, using double precision values. Mutates the array in-place.
 */
clojure.core.matrix.to_radians_BANG_ = (function clojure$core$matrix$to_radians_BANG_(m){
clojure.core.matrix.protocols.to_radians_BANG_.call(null,m);

return m;
});
/**
 * Computes the sigmoid (logistic) function for every element of an array.
 */
clojure.core.matrix.logistic = (function clojure$core$matrix$logistic(a){
return clojure.core.matrix.protocols.logistic.call(null,a);
});
/**
 * Computes the sigmoid (logistic) function for every element of an array. Mutates the array.
 */
clojure.core.matrix.logistic_BANG_ = (function clojure$core$matrix$logistic_BANG_(a){
clojure.core.matrix.protocols.logistic_BANG_.call(null,a);

return a;
});
/**
 * Computes the softplus function for every element of an array.
 */
clojure.core.matrix.softplus = (function clojure$core$matrix$softplus(a){
return clojure.core.matrix.protocols.softplus.call(null,a);
});
/**
 * Computes the softplus function for every element of an array. Mutates the array.
 */
clojure.core.matrix.softplus_BANG_ = (function clojure$core$matrix$softplus_BANG_(a){
clojure.core.matrix.protocols.softplus_BANG_.call(null,a);

return a;
});
/**
 * Computes the ReLU (rectified linear) function for every element of an array.
 */
clojure.core.matrix.relu = (function clojure$core$matrix$relu(a){
return clojure.core.matrix.protocols.relu.call(null,a);
});
/**
 * Computes the ReLU (rectified linear) function for every element of an array. Mutates the array.
 */
clojure.core.matrix.relu_BANG_ = (function clojure$core$matrix$relu_BANG_(a){
clojure.core.matrix.protocols.relu_BANG_.call(null,a);

return a;
});
/**
 * Computes the softmax function for a numerical vector.
 */
clojure.core.matrix.softmax = (function clojure$core$matrix$softmax(a){
return clojure.core.matrix.protocols.softmax.call(null,a);
});
/**
 * Computes the softmax function for every element of a numerical vector. Mutates the vector.
 */
clojure.core.matrix.softmax_BANG_ = (function clojure$core$matrix$softmax_BANG_(a){
clojure.core.matrix.protocols.softmax_BANG_.call(null,a);

return a;
});
/**
 * Swap row i with row j in a matrix, returning a new matrix
 */
clojure.core.matrix.swap_rows = (function clojure$core$matrix$swap_rows(m,i,j){
return clojure.core.matrix.protocols.swap_rows.call(null,m,i,j);
});
/**
 * Multiply row i in a matrix by a constant factor
 */
clojure.core.matrix.multiply_row = (function clojure$core$matrix$multiply_row(m,i,factor){
return clojure.core.matrix.protocols.multiply_row.call(null,m,i,factor);
});
/**
 * Add a row j (optionally multiplied by a scalar factor) to a row i
 * and replace row i with the result
 */
clojure.core.matrix.add_row = (function clojure$core$matrix$add_row(var_args){
var args48211 = [];
var len__21896__auto___48224 = arguments.length;
var i__21897__auto___48225 = (0);
while(true){
if((i__21897__auto___48225 < len__21896__auto___48224)){
args48211.push((arguments[i__21897__auto___48225]));

var G__48228 = (i__21897__auto___48225 + (1));
i__21897__auto___48225 = G__48228;
continue;
} else {
}
break;
}

var G__48219 = args48211.length;
switch (G__48219) {
case 3:
return clojure.core.matrix.add_row.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return clojure.core.matrix.add_row.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args48211.length)].join('')));

}
});

clojure.core.matrix.add_row.cljs$core$IFn$_invoke$arity$3 = (function (m,i,j){
return clojure.core.matrix.protocols.add_row.call(null,m,i,j,1.0);
});

clojure.core.matrix.add_row.cljs$core$IFn$_invoke$arity$4 = (function (m,i,j,factor){
return clojure.core.matrix.protocols.add_row.call(null,m,i,j,factor);
});

clojure.core.matrix.add_row.cljs$lang$maxFixedArity = 4;

/**
 * Sets a row in a matrix using a specified vector.
 */
clojure.core.matrix.set_row = (function clojure$core$matrix$set_row(m,i,row){
return clojure.core.matrix.protocols.set_row.call(null,m,i,row);
});
/**
 * Sets a row in a matrix in-place using a specified vector.
 */
clojure.core.matrix.set_row_BANG_ = (function clojure$core$matrix$set_row_BANG_(m,i,row){
clojure.core.matrix.protocols.set_row_BANG_.call(null,m,i,row);

return m;
});
/**
 * Sets a column in a matrix using a specified vector.
 */
clojure.core.matrix.set_column = (function clojure$core$matrix$set_column(m,i,column){
return clojure.core.matrix.protocols.set_column.call(null,m,i,column);
});
/**
 * Sets a column in a matrix using a specified vector.
 */
clojure.core.matrix.set_column_BANG_ = (function clojure$core$matrix$set_column_BANG_(m,i,column){
clojure.core.matrix.protocols.set_column_BANG_.call(null,m,i,column);

return m;
});
/**
 * Counts the number of non-zero values in a numerical array.
 * May perform a full array scan, but will often be quicker for specialised
 * sparse arrays - sometimes as fast as O(1)
 */
clojure.core.matrix.non_zero_count = (function clojure$core$matrix$non_zero_count(m){
return (clojure.core.matrix.ecount.call(null,m) - clojure.core.matrix.zero_count.call(null,m));
});
/**
 * Gets the non-zero indices of an array.
 * - For a 1D vector, returns an ordered index list.
 * - For a higher dimensional array, returns the non-zero-indices for each slice in row-major order.
 */
clojure.core.matrix.non_zero_indices = (function clojure$core$matrix$non_zero_indices(m){
return clojure.core.matrix.protocols.non_zero_indices.call(null,m);
});
/**
 * Returns all elements of an array as a sequence object in row-major order
 */
clojure.core.matrix.eseq = (function clojure$core$matrix$eseq(m){
return cljs.core.seq.call(null,clojure.core.matrix.protocols.element_seq.call(null,m));
});
/**
 * Element-wise reduce on all elements of an array.
 */
clojure.core.matrix.ereduce = (function clojure$core$matrix$ereduce(var_args){
var args48258 = [];
var len__21896__auto___48267 = arguments.length;
var i__21897__auto___48269 = (0);
while(true){
if((i__21897__auto___48269 < len__21896__auto___48267)){
args48258.push((arguments[i__21897__auto___48269]));

var G__48272 = (i__21897__auto___48269 + (1));
i__21897__auto___48269 = G__48272;
continue;
} else {
}
break;
}

var G__48261 = args48258.length;
switch (G__48261) {
case 2:
return clojure.core.matrix.ereduce.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.matrix.ereduce.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args48258.length)].join('')));

}
});

clojure.core.matrix.ereduce.cljs$core$IFn$_invoke$arity$2 = (function (f,m){
return clojure.core.matrix.protocols.element_reduce.call(null,m,f);
});

clojure.core.matrix.ereduce.cljs$core$IFn$_invoke$arity$3 = (function (f,init,m){
return clojure.core.matrix.protocols.element_reduce.call(null,m,f,init);
});

clojure.core.matrix.ereduce.cljs$lang$maxFixedArity = 3;

/**
 * Element-wise map over all elements of one or more arrays.
 * 
 * f must return a result compatible with the element-type of the array m
 * 
 * Returns a new array of the same element-type and shape as the array m.
 */
clojure.core.matrix.emap = (function clojure$core$matrix$emap(var_args){
var args48280 = [];
var len__21896__auto___48295 = arguments.length;
var i__21897__auto___48296 = (0);
while(true){
if((i__21897__auto___48296 < len__21896__auto___48295)){
args48280.push((arguments[i__21897__auto___48296]));

var G__48300 = (i__21897__auto___48296 + (1));
i__21897__auto___48296 = G__48300;
continue;
} else {
}
break;
}

var G__48291 = args48280.length;
switch (G__48291) {
case 2:
return clojure.core.matrix.emap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.matrix.emap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__21919__auto__ = (new cljs.core.IndexedSeq(args48280.slice((3)),(0),null));
return clojure.core.matrix.emap.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__21919__auto__);

}
});

clojure.core.matrix.emap.cljs$core$IFn$_invoke$arity$2 = (function (f,m){
return clojure.core.matrix.protocols.element_map.call(null,m,f);
});

clojure.core.matrix.emap.cljs$core$IFn$_invoke$arity$3 = (function (f,m,a){
return clojure.core.matrix.protocols.element_map.call(null,m,f,a);
});

clojure.core.matrix.emap.cljs$core$IFn$_invoke$arity$variadic = (function (f,m,a,more){
return clojure.core.matrix.protocols.element_map.call(null,m,f,a,more);
});

clojure.core.matrix.emap.cljs$lang$applyTo = (function (seq48281){
var G__48282 = cljs.core.first.call(null,seq48281);
var seq48281__$1 = cljs.core.next.call(null,seq48281);
var G__48283 = cljs.core.first.call(null,seq48281__$1);
var seq48281__$2 = cljs.core.next.call(null,seq48281__$1);
var G__48284 = cljs.core.first.call(null,seq48281__$2);
var seq48281__$3 = cljs.core.next.call(null,seq48281__$2);
return clojure.core.matrix.emap.cljs$core$IFn$_invoke$arity$variadic(G__48282,G__48283,G__48284,seq48281__$3);
});

clojure.core.matrix.emap.cljs$lang$maxFixedArity = (3);

/**
 * Element-wise map-indexed over all elements of one or more arrays.
 * 
 * f must accept as first argument the index vector of the current element,
 * and return a result compatible with the element-type of the array m
 * 
 * Returns a new array of the same element-type and shape as the array m.
 */
clojure.core.matrix.emap_indexed = (function clojure$core$matrix$emap_indexed(var_args){
var args48327 = [];
var len__21896__auto___48349 = arguments.length;
var i__21897__auto___48350 = (0);
while(true){
if((i__21897__auto___48350 < len__21896__auto___48349)){
args48327.push((arguments[i__21897__auto___48350]));

var G__48353 = (i__21897__auto___48350 + (1));
i__21897__auto___48350 = G__48353;
continue;
} else {
}
break;
}

var G__48341 = args48327.length;
switch (G__48341) {
case 2:
return clojure.core.matrix.emap_indexed.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.matrix.emap_indexed.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__21919__auto__ = (new cljs.core.IndexedSeq(args48327.slice((3)),(0),null));
return clojure.core.matrix.emap_indexed.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__21919__auto__);

}
});

clojure.core.matrix.emap_indexed.cljs$core$IFn$_invoke$arity$2 = (function (f,m){
return clojure.core.matrix.protocols.element_map_indexed.call(null,m,f);
});

clojure.core.matrix.emap_indexed.cljs$core$IFn$_invoke$arity$3 = (function (f,m,a){
return clojure.core.matrix.protocols.element_map_indexed.call(null,m,f,a);
});

clojure.core.matrix.emap_indexed.cljs$core$IFn$_invoke$arity$variadic = (function (f,m,a,more){
return clojure.core.matrix.protocols.element_map_indexed.call(null,m,f,a,more);
});

clojure.core.matrix.emap_indexed.cljs$lang$applyTo = (function (seq48328){
var G__48329 = cljs.core.first.call(null,seq48328);
var seq48328__$1 = cljs.core.next.call(null,seq48328);
var G__48330 = cljs.core.first.call(null,seq48328__$1);
var seq48328__$2 = cljs.core.next.call(null,seq48328__$1);
var G__48331 = cljs.core.first.call(null,seq48328__$2);
var seq48328__$3 = cljs.core.next.call(null,seq48328__$2);
return clojure.core.matrix.emap_indexed.cljs$core$IFn$_invoke$arity$variadic(G__48329,G__48330,G__48331,seq48328__$3);
});

clojure.core.matrix.emap_indexed.cljs$lang$maxFixedArity = (3);

/**
 * Maps a function over all slices of one or more array
 */
clojure.core.matrix.slice_map = (function clojure$core$matrix$slice_map(var_args){
var args48379 = [];
var len__21896__auto___48395 = arguments.length;
var i__21897__auto___48397 = (0);
while(true){
if((i__21897__auto___48397 < len__21896__auto___48395)){
args48379.push((arguments[i__21897__auto___48397]));

var G__48398 = (i__21897__auto___48397 + (1));
i__21897__auto___48397 = G__48398;
continue;
} else {
}
break;
}

var G__48389 = args48379.length;
switch (G__48389) {
case 2:
return clojure.core.matrix.slice_map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.matrix.slice_map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__21919__auto__ = (new cljs.core.IndexedSeq(args48379.slice((3)),(0),null));
return clojure.core.matrix.slice_map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__21919__auto__);

}
});

clojure.core.matrix.slice_map.cljs$core$IFn$_invoke$arity$2 = (function (f,m){
return clojure.core.matrix.protocols.slice_map.call(null,m,f);
});

clojure.core.matrix.slice_map.cljs$core$IFn$_invoke$arity$3 = (function (f,m1,m2){
return clojure.core.matrix.protocols.slice_map.call(null,m1,f,m2);
});

clojure.core.matrix.slice_map.cljs$core$IFn$_invoke$arity$variadic = (function (f,m1,m2,more){
return clojure.core.matrix.protocols.slice_map.call(null,m1,f,m2,more);
});

clojure.core.matrix.slice_map.cljs$lang$applyTo = (function (seq48380){
var G__48381 = cljs.core.first.call(null,seq48380);
var seq48380__$1 = cljs.core.next.call(null,seq48380);
var G__48382 = cljs.core.first.call(null,seq48380__$1);
var seq48380__$2 = cljs.core.next.call(null,seq48380__$1);
var G__48383 = cljs.core.first.call(null,seq48380__$2);
var seq48380__$3 = cljs.core.next.call(null,seq48380__$2);
return clojure.core.matrix.slice_map.cljs$core$IFn$_invoke$arity$variadic(G__48381,G__48382,G__48383,seq48380__$3);
});

clojure.core.matrix.slice_map.cljs$lang$maxFixedArity = (3);

/**
 * Calculates the sum of all the elements in a numerical array.
 */
clojure.core.matrix.esum = (function clojure$core$matrix$esum(m){
return clojure.core.matrix.protocols.element_sum.call(null,m);
});
/**
 * Gets the minimum element value from a numerical array
 */
clojure.core.matrix.emin = (function clojure$core$matrix$emin(m){
return clojure.core.matrix.protocols.element_min.call(null,m);
});
/**
 * Gets the maximum element value from a numerical array
 */
clojure.core.matrix.emax = (function clojure$core$matrix$emax(m){
return clojure.core.matrix.protocols.element_max.call(null,m);
});
/**
 * Gets the minimum element value from a numerical array
 */
clojure.core.matrix.minimum = (function clojure$core$matrix$minimum(m){
return clojure.core.matrix.protocols.element_min.call(null,m);
});
/**
 * Gets the maximum element value from a numerical array
 */
clojure.core.matrix.maximum = (function clojure$core$matrix$maximum(m){
return clojure.core.matrix.protocols.element_max.call(null,m);
});
/**
 * Clamps each element in a numerical array between lower and upper bounds
 *   specified by a and b, respectively.
 * 
 *   Examples:
 *   (clamp [[1 5 1] [4 10 2] [5 6 3]] 2 8) ;=> [[2 5 2] [4 8 2] [5 6 3]]
 *   
 */
clojure.core.matrix.clamp = (function clojure$core$matrix$clamp(m,a,b){
return clojure.core.matrix.protocols.element_clamp.call(null,m,a,b);
});
/**
 * Element-wise map of a function f over all elements of one or more arrays.
 * 
 * f must return a result compatible with the element-type of the array m
 * 
 * Performs in-place modification of the first array argument.
 */
clojure.core.matrix.emap_BANG_ = (function clojure$core$matrix$emap_BANG_(var_args){
var args48427 = [];
var len__21896__auto___48440 = arguments.length;
var i__21897__auto___48441 = (0);
while(true){
if((i__21897__auto___48441 < len__21896__auto___48440)){
args48427.push((arguments[i__21897__auto___48441]));

var G__48446 = (i__21897__auto___48441 + (1));
i__21897__auto___48441 = G__48446;
continue;
} else {
}
break;
}

var G__48437 = args48427.length;
switch (G__48437) {
case 2:
return clojure.core.matrix.emap_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.matrix.emap_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__21919__auto__ = (new cljs.core.IndexedSeq(args48427.slice((3)),(0),null));
return clojure.core.matrix.emap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__21919__auto__);

}
});

clojure.core.matrix.emap_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (f,m){
clojure.core.matrix.protocols.element_map_BANG_.call(null,m,f);

return m;
});

clojure.core.matrix.emap_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (f,m,a){
clojure.core.matrix.protocols.element_map_BANG_.call(null,m,f,a);

return m;
});

clojure.core.matrix.emap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,m,a,more){
clojure.core.matrix.protocols.element_map_BANG_.call(null,m,f,a,more);

return m;
});

clojure.core.matrix.emap_BANG_.cljs$lang$applyTo = (function (seq48428){
var G__48429 = cljs.core.first.call(null,seq48428);
var seq48428__$1 = cljs.core.next.call(null,seq48428);
var G__48430 = cljs.core.first.call(null,seq48428__$1);
var seq48428__$2 = cljs.core.next.call(null,seq48428__$1);
var G__48431 = cljs.core.first.call(null,seq48428__$2);
var seq48428__$3 = cljs.core.next.call(null,seq48428__$2);
return clojure.core.matrix.emap_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__48429,G__48430,G__48431,seq48428__$3);
});

clojure.core.matrix.emap_BANG_.cljs$lang$maxFixedArity = (3);

/**
 * Element-wise map-indexed over all elements of one or more arrays.
 * 
 * f must accept as first argument the index vector of the current element,
 * and return a result compatible with the element-type of the array m
 * 
 * Performs in-place modification of the first array argument.
 */
clojure.core.matrix.emap_indexed_BANG_ = (function clojure$core$matrix$emap_indexed_BANG_(var_args){
var args48457 = [];
var len__21896__auto___48464 = arguments.length;
var i__21897__auto___48465 = (0);
while(true){
if((i__21897__auto___48465 < len__21896__auto___48464)){
args48457.push((arguments[i__21897__auto___48465]));

var G__48466 = (i__21897__auto___48465 + (1));
i__21897__auto___48465 = G__48466;
continue;
} else {
}
break;
}

var G__48463 = args48457.length;
switch (G__48463) {
case 2:
return clojure.core.matrix.emap_indexed_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.matrix.emap_indexed_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__21919__auto__ = (new cljs.core.IndexedSeq(args48457.slice((3)),(0),null));
return clojure.core.matrix.emap_indexed_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__21919__auto__);

}
});

clojure.core.matrix.emap_indexed_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (f,m){
return clojure.core.matrix.protocols.element_map_indexed_BANG_.call(null,m,f);
});

clojure.core.matrix.emap_indexed_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (f,m,a){
return clojure.core.matrix.protocols.element_map_indexed_BANG_.call(null,m,f,a);
});

clojure.core.matrix.emap_indexed_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,m,a,more){
return clojure.core.matrix.protocols.element_map_indexed_BANG_.call(null,m,f,a,more);
});

clojure.core.matrix.emap_indexed_BANG_.cljs$lang$applyTo = (function (seq48458){
var G__48459 = cljs.core.first.call(null,seq48458);
var seq48458__$1 = cljs.core.next.call(null,seq48458);
var G__48460 = cljs.core.first.call(null,seq48458__$1);
var seq48458__$2 = cljs.core.next.call(null,seq48458__$1);
var G__48461 = cljs.core.first.call(null,seq48458__$2);
var seq48458__$3 = cljs.core.next.call(null,seq48458__$2);
return clojure.core.matrix.emap_indexed_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__48459,G__48460,G__48461,seq48458__$3);
});

clojure.core.matrix.emap_indexed_BANG_.cljs$lang$maxFixedArity = (3);

/**
 * Returns a sequence of all possible index vectors for a given shape, in row-major order
 */
clojure.core.matrix.index_seq_for_shape = (function clojure$core$matrix$index_seq_for_shape(sh){
return clojure.core.matrix.utils.base_index_seq_for_shape.call(null,sh);
});
/**
 * Returns a sequence of all possible index vectors into a matrix, in row-major order
 */
clojure.core.matrix.index_seq = (function clojure$core$matrix$index_seq(m){
return clojure.core.matrix.index_seq_for_shape.call(null,clojure.core.matrix.protocols.get_shape.call(null,m));
});
/**
 * Gets the currently active matrix implementation as a keyword, e.g. :vectorz
 */
clojure.core.matrix.current_implementation = (function clojure$core$matrix$current_implementation(){
return clojure.core.matrix.implementations._STAR_matrix_implementation_STAR_;
});
/**
 * Gets a canonical matrix object for a given implementation (keyword or array), or the current implementation
 * if not otherwise specified. Scalars are regarded as conforming to the current implementation
 * Throws an exception if none is available.
 */
clojure.core.matrix.implementation_check = (function clojure$core$matrix$implementation_check(var_args){
var args48490 = [];
var len__21896__auto___48501 = arguments.length;
var i__21897__auto___48502 = (0);
while(true){
if((i__21897__auto___48502 < len__21896__auto___48501)){
args48490.push((arguments[i__21897__auto___48502]));

var G__48504 = (i__21897__auto___48502 + (1));
i__21897__auto___48502 = G__48504;
continue;
} else {
}
break;
}

var G__48496 = args48490.length;
switch (G__48496) {
case 0:
return clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args48490.length)].join('')));

}
});

clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$0 = (function (){
var or__20675__auto__ = clojure.core.matrix.implementations.get_canonical_object.call(null,clojure.core.matrix.implementations._STAR_matrix_implementation_STAR_);
if(cljs.core.truth_(or__20675__auto__)){
return or__20675__auto__;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("No current clojure.core.matrix implementation available (no canonical)")].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
});

clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$1 = (function (impl){
var temp__6751__auto__ = clojure.core.matrix.implementations.get_canonical_object.call(null,impl);
if(cljs.core.truth_(temp__6751__auto__)){
var im = temp__6751__auto__;
return im;
} else {
if(cljs.core.truth_(clojure.core.matrix.scalar_QMARK_.call(null,impl))){
return clojure.core.matrix.implementations.get_canonical_object.call(null,clojure.core.matrix.implementations._STAR_matrix_implementation_STAR_);
} else {
var or__20675__auto__ = clojure.core.matrix.implementations.load_implementation.call(null,impl);
if(cljs.core.truth_(or__20675__auto__)){
return or__20675__auto__;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("No clojure.core.matrix implementation available - "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(impl)].join(''))].join(''),cljs.core.PersistentArrayMap.EMPTY);
}

}
}
});

clojure.core.matrix.implementation_check.cljs$lang$maxFixedArity = 1;

/**
 * Gets a canonical object for the currently active matrix implementation. This object
 * can be used to pass as an implementation parameter, or to query implementation internals via core.matrix protocols.
 */
clojure.core.matrix.current_implementation_object = (function clojure$core$matrix$current_implementation_object(){
return clojure.core.matrix.implementations.get_canonical_object.call(null,clojure.core.matrix.current_implementation.call(null));
});
/**
 * Sets the currently active core.matrix implementation.
 * 
 * Parameter may be
 *  - A known keyword for the implementation e.g. :vectorz
 *  - An existing instance from the implementation
 * 
 * This is used primarily for functions that construct new matrices, i.e. it determines the
 * implementation used for expressions like: (matrix [[1 2] [3 4]])
 */
clojure.core.matrix.set_current_implementation = (function clojure$core$matrix$set_current_implementation(m){
return clojure.core.matrix.implementations.set_current_implementation.call(null,m);
});

//# sourceMappingURL=matrix.js.map