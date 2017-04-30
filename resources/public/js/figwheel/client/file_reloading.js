// Compiled by ClojureScript 1.9.521 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__27322__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__27322__auto__){
return or__27322__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__27322__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, ["svgpan.SvgPan",null,"far.out",null,"cljs.nodejs",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__27322__auto__)){
return or__27322__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__50842_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__50842_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__50860 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__50861 = null;
var count__50862 = (0);
var i__50863 = (0);
while(true){
if((i__50863 < count__50862)){
var n = cljs.core._nth.call(null,chunk__50861,i__50863);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__50871 = seq__50860;
var G__50872 = chunk__50861;
var G__50873 = count__50862;
var G__50874 = (i__50863 + (1));
seq__50860 = G__50871;
chunk__50861 = G__50872;
count__50862 = G__50873;
i__50863 = G__50874;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__50860);
if(temp__6753__auto__){
var seq__50860__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50860__$1)){
var c__28233__auto__ = cljs.core.chunk_first.call(null,seq__50860__$1);
var G__50878 = cljs.core.chunk_rest.call(null,seq__50860__$1);
var G__50879 = c__28233__auto__;
var G__50880 = cljs.core.count.call(null,c__28233__auto__);
var G__50881 = (0);
seq__50860 = G__50878;
chunk__50861 = G__50879;
count__50862 = G__50880;
i__50863 = G__50881;
continue;
} else {
var n = cljs.core.first.call(null,seq__50860__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__50883 = cljs.core.next.call(null,seq__50860__$1);
var G__50884 = null;
var G__50885 = (0);
var G__50886 = (0);
seq__50860 = G__50883;
chunk__50861 = G__50884;
count__50862 = G__50885;
i__50863 = G__50886;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__50962_50984 = cljs.core.seq.call(null,deps);
var chunk__50963_50985 = null;
var count__50964_50986 = (0);
var i__50965_50987 = (0);
while(true){
if((i__50965_50987 < count__50964_50986)){
var dep_50991 = cljs.core._nth.call(null,chunk__50963_50985,i__50965_50987);
topo_sort_helper_STAR_.call(null,dep_50991,(depth + (1)),state);

var G__50992 = seq__50962_50984;
var G__50993 = chunk__50963_50985;
var G__50994 = count__50964_50986;
var G__50995 = (i__50965_50987 + (1));
seq__50962_50984 = G__50992;
chunk__50963_50985 = G__50993;
count__50964_50986 = G__50994;
i__50965_50987 = G__50995;
continue;
} else {
var temp__6753__auto___50997 = cljs.core.seq.call(null,seq__50962_50984);
if(temp__6753__auto___50997){
var seq__50962_50999__$1 = temp__6753__auto___50997;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50962_50999__$1)){
var c__28233__auto___51000 = cljs.core.chunk_first.call(null,seq__50962_50999__$1);
var G__51002 = cljs.core.chunk_rest.call(null,seq__50962_50999__$1);
var G__51003 = c__28233__auto___51000;
var G__51004 = cljs.core.count.call(null,c__28233__auto___51000);
var G__51005 = (0);
seq__50962_50984 = G__51002;
chunk__50963_50985 = G__51003;
count__50964_50986 = G__51004;
i__50965_50987 = G__51005;
continue;
} else {
var dep_51008 = cljs.core.first.call(null,seq__50962_50999__$1);
topo_sort_helper_STAR_.call(null,dep_51008,(depth + (1)),state);

var G__51009 = cljs.core.next.call(null,seq__50962_50999__$1);
var G__51010 = null;
var G__51011 = (0);
var G__51012 = (0);
seq__50962_50984 = G__51009;
chunk__50963_50985 = G__51010;
count__50964_50986 = G__51011;
i__50965_50987 = G__51012;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__50969){
var vec__50973 = p__50969;
var seq__50974 = cljs.core.seq.call(null,vec__50973);
var first__50975 = cljs.core.first.call(null,seq__50974);
var seq__50974__$1 = cljs.core.next.call(null,seq__50974);
var x = first__50975;
var xs = seq__50974__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__50973,seq__50974,first__50975,seq__50974__$1,x,xs,get_deps__$1){
return (function (p1__50891_SHARP_){
return clojure.set.difference.call(null,p1__50891_SHARP_,x);
});})(vec__50973,seq__50974,first__50975,seq__50974__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__51060 = cljs.core.seq.call(null,provides);
var chunk__51061 = null;
var count__51062 = (0);
var i__51063 = (0);
while(true){
if((i__51063 < count__51062)){
var prov = cljs.core._nth.call(null,chunk__51061,i__51063);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__51064_51075 = cljs.core.seq.call(null,requires);
var chunk__51065_51076 = null;
var count__51066_51077 = (0);
var i__51067_51078 = (0);
while(true){
if((i__51067_51078 < count__51066_51077)){
var req_51079 = cljs.core._nth.call(null,chunk__51065_51076,i__51067_51078);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_51079,prov);

var G__51081 = seq__51064_51075;
var G__51082 = chunk__51065_51076;
var G__51083 = count__51066_51077;
var G__51084 = (i__51067_51078 + (1));
seq__51064_51075 = G__51081;
chunk__51065_51076 = G__51082;
count__51066_51077 = G__51083;
i__51067_51078 = G__51084;
continue;
} else {
var temp__6753__auto___51085 = cljs.core.seq.call(null,seq__51064_51075);
if(temp__6753__auto___51085){
var seq__51064_51086__$1 = temp__6753__auto___51085;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51064_51086__$1)){
var c__28233__auto___51088 = cljs.core.chunk_first.call(null,seq__51064_51086__$1);
var G__51089 = cljs.core.chunk_rest.call(null,seq__51064_51086__$1);
var G__51090 = c__28233__auto___51088;
var G__51091 = cljs.core.count.call(null,c__28233__auto___51088);
var G__51092 = (0);
seq__51064_51075 = G__51089;
chunk__51065_51076 = G__51090;
count__51066_51077 = G__51091;
i__51067_51078 = G__51092;
continue;
} else {
var req_51093 = cljs.core.first.call(null,seq__51064_51086__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_51093,prov);

var G__51095 = cljs.core.next.call(null,seq__51064_51086__$1);
var G__51096 = null;
var G__51097 = (0);
var G__51098 = (0);
seq__51064_51075 = G__51095;
chunk__51065_51076 = G__51096;
count__51066_51077 = G__51097;
i__51067_51078 = G__51098;
continue;
}
} else {
}
}
break;
}

var G__51099 = seq__51060;
var G__51100 = chunk__51061;
var G__51101 = count__51062;
var G__51102 = (i__51063 + (1));
seq__51060 = G__51099;
chunk__51061 = G__51100;
count__51062 = G__51101;
i__51063 = G__51102;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__51060);
if(temp__6753__auto__){
var seq__51060__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51060__$1)){
var c__28233__auto__ = cljs.core.chunk_first.call(null,seq__51060__$1);
var G__51105 = cljs.core.chunk_rest.call(null,seq__51060__$1);
var G__51106 = c__28233__auto__;
var G__51107 = cljs.core.count.call(null,c__28233__auto__);
var G__51108 = (0);
seq__51060 = G__51105;
chunk__51061 = G__51106;
count__51062 = G__51107;
i__51063 = G__51108;
continue;
} else {
var prov = cljs.core.first.call(null,seq__51060__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__51069_51109 = cljs.core.seq.call(null,requires);
var chunk__51070_51110 = null;
var count__51071_51111 = (0);
var i__51072_51112 = (0);
while(true){
if((i__51072_51112 < count__51071_51111)){
var req_51114 = cljs.core._nth.call(null,chunk__51070_51110,i__51072_51112);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_51114,prov);

var G__51115 = seq__51069_51109;
var G__51116 = chunk__51070_51110;
var G__51117 = count__51071_51111;
var G__51118 = (i__51072_51112 + (1));
seq__51069_51109 = G__51115;
chunk__51070_51110 = G__51116;
count__51071_51111 = G__51117;
i__51072_51112 = G__51118;
continue;
} else {
var temp__6753__auto___51120__$1 = cljs.core.seq.call(null,seq__51069_51109);
if(temp__6753__auto___51120__$1){
var seq__51069_51121__$1 = temp__6753__auto___51120__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51069_51121__$1)){
var c__28233__auto___51122 = cljs.core.chunk_first.call(null,seq__51069_51121__$1);
var G__51124 = cljs.core.chunk_rest.call(null,seq__51069_51121__$1);
var G__51125 = c__28233__auto___51122;
var G__51126 = cljs.core.count.call(null,c__28233__auto___51122);
var G__51127 = (0);
seq__51069_51109 = G__51124;
chunk__51070_51110 = G__51125;
count__51071_51111 = G__51126;
i__51072_51112 = G__51127;
continue;
} else {
var req_51128 = cljs.core.first.call(null,seq__51069_51121__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_51128,prov);

var G__51130 = cljs.core.next.call(null,seq__51069_51121__$1);
var G__51131 = null;
var G__51132 = (0);
var G__51133 = (0);
seq__51069_51109 = G__51130;
chunk__51070_51110 = G__51131;
count__51071_51111 = G__51132;
i__51072_51112 = G__51133;
continue;
}
} else {
}
}
break;
}

var G__51134 = cljs.core.next.call(null,seq__51060__$1);
var G__51135 = null;
var G__51136 = (0);
var G__51137 = (0);
seq__51060 = G__51134;
chunk__51061 = G__51135;
count__51062 = G__51136;
i__51063 = G__51137;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__51144_51149 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__51145_51150 = null;
var count__51146_51151 = (0);
var i__51147_51152 = (0);
while(true){
if((i__51147_51152 < count__51146_51151)){
var ns_51154 = cljs.core._nth.call(null,chunk__51145_51150,i__51147_51152);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_51154);

var G__51155 = seq__51144_51149;
var G__51156 = chunk__51145_51150;
var G__51157 = count__51146_51151;
var G__51158 = (i__51147_51152 + (1));
seq__51144_51149 = G__51155;
chunk__51145_51150 = G__51156;
count__51146_51151 = G__51157;
i__51147_51152 = G__51158;
continue;
} else {
var temp__6753__auto___51160 = cljs.core.seq.call(null,seq__51144_51149);
if(temp__6753__auto___51160){
var seq__51144_51161__$1 = temp__6753__auto___51160;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51144_51161__$1)){
var c__28233__auto___51162 = cljs.core.chunk_first.call(null,seq__51144_51161__$1);
var G__51163 = cljs.core.chunk_rest.call(null,seq__51144_51161__$1);
var G__51164 = c__28233__auto___51162;
var G__51165 = cljs.core.count.call(null,c__28233__auto___51162);
var G__51166 = (0);
seq__51144_51149 = G__51163;
chunk__51145_51150 = G__51164;
count__51146_51151 = G__51165;
i__51147_51152 = G__51166;
continue;
} else {
var ns_51168 = cljs.core.first.call(null,seq__51144_51161__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_51168);

var G__51169 = cljs.core.next.call(null,seq__51144_51161__$1);
var G__51170 = null;
var G__51171 = (0);
var G__51172 = (0);
seq__51144_51149 = G__51169;
chunk__51145_51150 = G__51170;
count__51146_51151 = G__51171;
i__51147_51152 = G__51172;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__27322__auto__ = goog.require__;
if(cljs.core.truth_(or__27322__auto__)){
return or__27322__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__51179__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__51179 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__51180__i = 0, G__51180__a = new Array(arguments.length -  0);
while (G__51180__i < G__51180__a.length) {G__51180__a[G__51180__i] = arguments[G__51180__i + 0]; ++G__51180__i;}
  args = new cljs.core.IndexedSeq(G__51180__a,0);
} 
return G__51179__delegate.call(this,args);};
G__51179.cljs$lang$maxFixedArity = 0;
G__51179.cljs$lang$applyTo = (function (arglist__51183){
var args = cljs.core.seq(arglist__51183);
return G__51179__delegate(args);
});
G__51179.cljs$core$IFn$_invoke$arity$variadic = G__51179__delegate;
return G__51179;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred))
);

return deferred.addErrback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred))
);
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__51193 = cljs.core._EQ_;
var expr__51194 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__51193.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__51194))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__51193,expr__51194){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__51193,expr__51194))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__51193,expr__51194){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e51196){if((e51196 instanceof Error)){
var e = e51196;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e51196;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__51193,expr__51194))
} else {
if(cljs.core.truth_(pred__51193.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__51194))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__51193.call(null,new cljs.core.Keyword(null,"react-native","react-native",-1543085138),expr__51194))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__51193.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__51194))){
return ((function (pred__51193,expr__51194){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e51197){if((e51197 instanceof Error)){
var e = e51197;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e51197;

}
}})());
});
;})(pred__51193,expr__51194))
} else {
return ((function (pred__51193,expr__51194){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__51193,expr__51194))
}
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__51204,callback){
var map__51209 = p__51204;
var map__51209__$1 = ((((!((map__51209 == null)))?((((map__51209.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51209.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51209):map__51209);
var file_msg = map__51209__$1;
var request_url = cljs.core.get.call(null,map__51209__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("FigWheel: Attempting to load "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__51209,map__51209__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("FigWheel: Successfully loaded "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__51209,map__51209__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__41728__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41728__auto__){
return (function (){
var f__41729__auto__ = (function (){var switch__41485__auto__ = ((function (c__41728__auto__){
return (function (state_51237){
var state_val_51238 = (state_51237[(1)]);
if((state_val_51238 === (7))){
var inst_51233 = (state_51237[(2)]);
var state_51237__$1 = state_51237;
var statearr_51240_51271 = state_51237__$1;
(statearr_51240_51271[(2)] = inst_51233);

(statearr_51240_51271[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51238 === (1))){
var state_51237__$1 = state_51237;
var statearr_51241_51272 = state_51237__$1;
(statearr_51241_51272[(2)] = null);

(statearr_51241_51272[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51238 === (4))){
var inst_51217 = (state_51237[(7)]);
var inst_51217__$1 = (state_51237[(2)]);
var state_51237__$1 = (function (){var statearr_51242 = state_51237;
(statearr_51242[(7)] = inst_51217__$1);

return statearr_51242;
})();
if(cljs.core.truth_(inst_51217__$1)){
var statearr_51243_51276 = state_51237__$1;
(statearr_51243_51276[(1)] = (5));

} else {
var statearr_51244_51278 = state_51237__$1;
(statearr_51244_51278[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51238 === (6))){
var state_51237__$1 = state_51237;
var statearr_51245_51279 = state_51237__$1;
(statearr_51245_51279[(2)] = null);

(statearr_51245_51279[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51238 === (3))){
var inst_51235 = (state_51237[(2)]);
var state_51237__$1 = state_51237;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51237__$1,inst_51235);
} else {
if((state_val_51238 === (2))){
var state_51237__$1 = state_51237;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51237__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_51238 === (11))){
var inst_51229 = (state_51237[(2)]);
var state_51237__$1 = (function (){var statearr_51249 = state_51237;
(statearr_51249[(8)] = inst_51229);

return statearr_51249;
})();
var statearr_51250_51284 = state_51237__$1;
(statearr_51250_51284[(2)] = null);

(statearr_51250_51284[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51238 === (9))){
var inst_51223 = (state_51237[(9)]);
var inst_51221 = (state_51237[(10)]);
var inst_51225 = inst_51223.call(null,inst_51221);
var state_51237__$1 = state_51237;
var statearr_51251_51286 = state_51237__$1;
(statearr_51251_51286[(2)] = inst_51225);

(statearr_51251_51286[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51238 === (5))){
var inst_51217 = (state_51237[(7)]);
var inst_51219 = figwheel.client.file_reloading.blocking_load.call(null,inst_51217);
var state_51237__$1 = state_51237;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51237__$1,(8),inst_51219);
} else {
if((state_val_51238 === (10))){
var inst_51221 = (state_51237[(10)]);
var inst_51227 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_51221);
var state_51237__$1 = state_51237;
var statearr_51252_51291 = state_51237__$1;
(statearr_51252_51291[(2)] = inst_51227);

(statearr_51252_51291[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51238 === (8))){
var inst_51223 = (state_51237[(9)]);
var inst_51217 = (state_51237[(7)]);
var inst_51221 = (state_51237[(2)]);
var inst_51222 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_51223__$1 = cljs.core.get.call(null,inst_51222,inst_51217);
var state_51237__$1 = (function (){var statearr_51254 = state_51237;
(statearr_51254[(9)] = inst_51223__$1);

(statearr_51254[(10)] = inst_51221);

return statearr_51254;
})();
if(cljs.core.truth_(inst_51223__$1)){
var statearr_51255_51296 = state_51237__$1;
(statearr_51255_51296[(1)] = (9));

} else {
var statearr_51256_51297 = state_51237__$1;
(statearr_51256_51297[(1)] = (10));

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
});})(c__41728__auto__))
;
return ((function (switch__41485__auto__,c__41728__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__41486__auto__ = null;
var figwheel$client$file_reloading$state_machine__41486__auto____0 = (function (){
var statearr_51263 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_51263[(0)] = figwheel$client$file_reloading$state_machine__41486__auto__);

(statearr_51263[(1)] = (1));

return statearr_51263;
});
var figwheel$client$file_reloading$state_machine__41486__auto____1 = (function (state_51237){
while(true){
var ret_value__41487__auto__ = (function (){try{while(true){
var result__41488__auto__ = switch__41485__auto__.call(null,state_51237);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41488__auto__;
}
break;
}
}catch (e51264){if((e51264 instanceof Object)){
var ex__41489__auto__ = e51264;
var statearr_51265_51302 = state_51237;
(statearr_51265_51302[(5)] = ex__41489__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51237);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51264;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41487__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51306 = state_51237;
state_51237 = G__51306;
continue;
} else {
return ret_value__41487__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__41486__auto__ = function(state_51237){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__41486__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__41486__auto____1.call(this,state_51237);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__41486__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__41486__auto____0;
figwheel$client$file_reloading$state_machine__41486__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__41486__auto____1;
return figwheel$client$file_reloading$state_machine__41486__auto__;
})()
;})(switch__41485__auto__,c__41728__auto__))
})();
var state__41730__auto__ = (function (){var statearr_51266 = f__41729__auto__.call(null);
(statearr_51266[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41728__auto__);

return statearr_51266;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41730__auto__);
});})(c__41728__auto__))
);

return c__41728__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__51311,callback){
var map__51314 = p__51311;
var map__51314__$1 = ((((!((map__51314 == null)))?((((map__51314.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51314.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51314):map__51314);
var file_msg = map__51314__$1;
var namespace = cljs.core.get.call(null,map__51314__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__51314,map__51314__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__51314,map__51314__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__51326){
var map__51330 = p__51326;
var map__51330__$1 = ((((!((map__51330 == null)))?((((map__51330.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51330.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51330):map__51330);
var file_msg = map__51330__$1;
var namespace = cljs.core.get.call(null,map__51330__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__51338){
var map__51343 = p__51338;
var map__51343__$1 = ((((!((map__51343 == null)))?((((map__51343.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51343.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51343):map__51343);
var file_msg = map__51343__$1;
var namespace = cljs.core.get.call(null,map__51343__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__27310__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__27310__auto__){
var or__27322__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__27322__auto__)){
return or__27322__auto__;
} else {
var or__27322__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__27322__auto____$1)){
return or__27322__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__27310__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__51352,callback){
var map__51355 = p__51352;
var map__51355__$1 = ((((!((map__51355 == null)))?((((map__51355.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51355.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51355):map__51355);
var file_msg = map__51355__$1;
var request_url = cljs.core.get.call(null,map__51355__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__51355__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Not trying to load file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__41728__auto___51473 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41728__auto___51473,out){
return (function (){
var f__41729__auto__ = (function (){var switch__41485__auto__ = ((function (c__41728__auto___51473,out){
return (function (state_51451){
var state_val_51452 = (state_51451[(1)]);
if((state_val_51452 === (1))){
var inst_51425 = cljs.core.seq.call(null,files);
var inst_51426 = cljs.core.first.call(null,inst_51425);
var inst_51427 = cljs.core.next.call(null,inst_51425);
var inst_51428 = files;
var state_51451__$1 = (function (){var statearr_51453 = state_51451;
(statearr_51453[(7)] = inst_51428);

(statearr_51453[(8)] = inst_51426);

(statearr_51453[(9)] = inst_51427);

return statearr_51453;
})();
var statearr_51454_51478 = state_51451__$1;
(statearr_51454_51478[(2)] = null);

(statearr_51454_51478[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51452 === (2))){
var inst_51434 = (state_51451[(10)]);
var inst_51428 = (state_51451[(7)]);
var inst_51433 = cljs.core.seq.call(null,inst_51428);
var inst_51434__$1 = cljs.core.first.call(null,inst_51433);
var inst_51435 = cljs.core.next.call(null,inst_51433);
var inst_51436 = (inst_51434__$1 == null);
var inst_51437 = cljs.core.not.call(null,inst_51436);
var state_51451__$1 = (function (){var statearr_51459 = state_51451;
(statearr_51459[(10)] = inst_51434__$1);

(statearr_51459[(11)] = inst_51435);

return statearr_51459;
})();
if(inst_51437){
var statearr_51460_51479 = state_51451__$1;
(statearr_51460_51479[(1)] = (4));

} else {
var statearr_51461_51480 = state_51451__$1;
(statearr_51461_51480[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51452 === (3))){
var inst_51449 = (state_51451[(2)]);
var state_51451__$1 = state_51451;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51451__$1,inst_51449);
} else {
if((state_val_51452 === (4))){
var inst_51434 = (state_51451[(10)]);
var inst_51439 = figwheel.client.file_reloading.reload_js_file.call(null,inst_51434);
var state_51451__$1 = state_51451;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51451__$1,(7),inst_51439);
} else {
if((state_val_51452 === (5))){
var inst_51445 = cljs.core.async.close_BANG_.call(null,out);
var state_51451__$1 = state_51451;
var statearr_51462_51481 = state_51451__$1;
(statearr_51462_51481[(2)] = inst_51445);

(statearr_51462_51481[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51452 === (6))){
var inst_51447 = (state_51451[(2)]);
var state_51451__$1 = state_51451;
var statearr_51463_51482 = state_51451__$1;
(statearr_51463_51482[(2)] = inst_51447);

(statearr_51463_51482[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51452 === (7))){
var inst_51435 = (state_51451[(11)]);
var inst_51441 = (state_51451[(2)]);
var inst_51442 = cljs.core.async.put_BANG_.call(null,out,inst_51441);
var inst_51428 = inst_51435;
var state_51451__$1 = (function (){var statearr_51464 = state_51451;
(statearr_51464[(7)] = inst_51428);

(statearr_51464[(12)] = inst_51442);

return statearr_51464;
})();
var statearr_51465_51483 = state_51451__$1;
(statearr_51465_51483[(2)] = null);

(statearr_51465_51483[(1)] = (2));


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
});})(c__41728__auto___51473,out))
;
return ((function (switch__41485__auto__,c__41728__auto___51473,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__41486__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__41486__auto____0 = (function (){
var statearr_51469 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51469[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__41486__auto__);

(statearr_51469[(1)] = (1));

return statearr_51469;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__41486__auto____1 = (function (state_51451){
while(true){
var ret_value__41487__auto__ = (function (){try{while(true){
var result__41488__auto__ = switch__41485__auto__.call(null,state_51451);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41488__auto__;
}
break;
}
}catch (e51470){if((e51470 instanceof Object)){
var ex__41489__auto__ = e51470;
var statearr_51471_51488 = state_51451;
(statearr_51471_51488[(5)] = ex__41489__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51451);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51470;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41487__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51490 = state_51451;
state_51451 = G__51490;
continue;
} else {
return ret_value__41487__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__41486__auto__ = function(state_51451){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__41486__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__41486__auto____1.call(this,state_51451);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__41486__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__41486__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__41486__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__41486__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__41486__auto__;
})()
;})(switch__41485__auto__,c__41728__auto___51473,out))
})();
var state__41730__auto__ = (function (){var statearr_51472 = f__41729__auto__.call(null);
(statearr_51472[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41728__auto___51473);

return statearr_51472;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41730__auto__);
});})(c__41728__auto___51473,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__51496,opts){
var map__51502 = p__51496;
var map__51502__$1 = ((((!((map__51502 == null)))?((((map__51502.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51502.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51502):map__51502);
var eval_body = cljs.core.get.call(null,map__51502__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__51502__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__27310__auto__ = eval_body;
if(cljs.core.truth_(and__27310__auto__)){
return typeof eval_body === 'string';
} else {
return and__27310__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Evaling file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e51508){var e = e51508;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Unable to evaluate "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__6751__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__51525_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__51525_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__6751__auto__)){
var file_msg = temp__6751__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__51559){
var vec__51560 = p__51559;
var k = cljs.core.nth.call(null,vec__51560,(0),null);
var v = cljs.core.nth.call(null,vec__51560,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__51565){
var vec__51566 = p__51565;
var k = cljs.core.nth.call(null,vec__51566,(0),null);
var v = cljs.core.nth.call(null,vec__51566,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__51591,p__51592){
var map__51996 = p__51591;
var map__51996__$1 = ((((!((map__51996 == null)))?((((map__51996.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51996.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51996):map__51996);
var opts = map__51996__$1;
var before_jsload = cljs.core.get.call(null,map__51996__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__51996__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__51996__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__51997 = p__51592;
var map__51997__$1 = ((((!((map__51997 == null)))?((((map__51997.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51997.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51997):map__51997);
var msg = map__51997__$1;
var files = cljs.core.get.call(null,map__51997__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__51997__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__51997__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__41728__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41728__auto__,map__51996,map__51996__$1,opts,before_jsload,on_jsload,reload_dependents,map__51997,map__51997__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__41729__auto__ = (function (){var switch__41485__auto__ = ((function (c__41728__auto__,map__51996,map__51996__$1,opts,before_jsload,on_jsload,reload_dependents,map__51997,map__51997__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_52175){
var state_val_52176 = (state_52175[(1)]);
if((state_val_52176 === (7))){
var inst_52020 = (state_52175[(7)]);
var inst_52017 = (state_52175[(8)]);
var inst_52019 = (state_52175[(9)]);
var inst_52018 = (state_52175[(10)]);
var inst_52025 = cljs.core._nth.call(null,inst_52018,inst_52020);
var inst_52027 = figwheel.client.file_reloading.eval_body.call(null,inst_52025,opts);
var inst_52029 = (inst_52020 + (1));
var tmp52177 = inst_52017;
var tmp52178 = inst_52019;
var tmp52179 = inst_52018;
var inst_52017__$1 = tmp52177;
var inst_52018__$1 = tmp52179;
var inst_52019__$1 = tmp52178;
var inst_52020__$1 = inst_52029;
var state_52175__$1 = (function (){var statearr_52184 = state_52175;
(statearr_52184[(7)] = inst_52020__$1);

(statearr_52184[(8)] = inst_52017__$1);

(statearr_52184[(11)] = inst_52027);

(statearr_52184[(9)] = inst_52019__$1);

(statearr_52184[(10)] = inst_52018__$1);

return statearr_52184;
})();
var statearr_52191_52356 = state_52175__$1;
(statearr_52191_52356[(2)] = null);

(statearr_52191_52356[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52176 === (20))){
var inst_52070 = (state_52175[(12)]);
var inst_52078 = figwheel.client.file_reloading.sort_files.call(null,inst_52070);
var state_52175__$1 = state_52175;
var statearr_52194_52358 = state_52175__$1;
(statearr_52194_52358[(2)] = inst_52078);

(statearr_52194_52358[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52176 === (27))){
var state_52175__$1 = state_52175;
var statearr_52196_52359 = state_52175__$1;
(statearr_52196_52359[(2)] = null);

(statearr_52196_52359[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52176 === (1))){
var inst_52008 = (state_52175[(13)]);
var inst_52005 = before_jsload.call(null,files);
var inst_52006 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_52007 = (function (){return ((function (inst_52008,inst_52005,inst_52006,state_val_52176,c__41728__auto__,map__51996,map__51996__$1,opts,before_jsload,on_jsload,reload_dependents,map__51997,map__51997__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__51582_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__51582_SHARP_);
});
;})(inst_52008,inst_52005,inst_52006,state_val_52176,c__41728__auto__,map__51996,map__51996__$1,opts,before_jsload,on_jsload,reload_dependents,map__51997,map__51997__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_52008__$1 = cljs.core.filter.call(null,inst_52007,files);
var inst_52010 = cljs.core.not_empty.call(null,inst_52008__$1);
var state_52175__$1 = (function (){var statearr_52198 = state_52175;
(statearr_52198[(13)] = inst_52008__$1);

(statearr_52198[(14)] = inst_52005);

(statearr_52198[(15)] = inst_52006);

return statearr_52198;
})();
if(cljs.core.truth_(inst_52010)){
var statearr_52199_52362 = state_52175__$1;
(statearr_52199_52362[(1)] = (2));

} else {
var statearr_52200_52363 = state_52175__$1;
(statearr_52200_52363[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52176 === (24))){
var state_52175__$1 = state_52175;
var statearr_52201_52364 = state_52175__$1;
(statearr_52201_52364[(2)] = null);

(statearr_52201_52364[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52176 === (39))){
var inst_52121 = (state_52175[(16)]);
var state_52175__$1 = state_52175;
var statearr_52204_52365 = state_52175__$1;
(statearr_52204_52365[(2)] = inst_52121);

(statearr_52204_52365[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52176 === (46))){
var inst_52169 = (state_52175[(2)]);
var state_52175__$1 = state_52175;
var statearr_52207_52366 = state_52175__$1;
(statearr_52207_52366[(2)] = inst_52169);

(statearr_52207_52366[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52176 === (4))){
var inst_52064 = (state_52175[(2)]);
var inst_52065 = cljs.core.List.EMPTY;
var inst_52066 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_52065);
var inst_52067 = (function (){return ((function (inst_52064,inst_52065,inst_52066,state_val_52176,c__41728__auto__,map__51996,map__51996__$1,opts,before_jsload,on_jsload,reload_dependents,map__51997,map__51997__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__51583_SHARP_){
var and__27310__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__51583_SHARP_);
if(cljs.core.truth_(and__27310__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__51583_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__51583_SHARP_)));
} else {
return and__27310__auto__;
}
});
;})(inst_52064,inst_52065,inst_52066,state_val_52176,c__41728__auto__,map__51996,map__51996__$1,opts,before_jsload,on_jsload,reload_dependents,map__51997,map__51997__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_52068 = cljs.core.filter.call(null,inst_52067,files);
var inst_52069 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_52070 = cljs.core.concat.call(null,inst_52068,inst_52069);
var state_52175__$1 = (function (){var statearr_52215 = state_52175;
(statearr_52215[(12)] = inst_52070);

(statearr_52215[(17)] = inst_52066);

(statearr_52215[(18)] = inst_52064);

return statearr_52215;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_52218_52371 = state_52175__$1;
(statearr_52218_52371[(1)] = (16));

} else {
var statearr_52219_52373 = state_52175__$1;
(statearr_52219_52373[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52176 === (15))){
var inst_52054 = (state_52175[(2)]);
var state_52175__$1 = state_52175;
var statearr_52223_52376 = state_52175__$1;
(statearr_52223_52376[(2)] = inst_52054);

(statearr_52223_52376[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52176 === (21))){
var inst_52080 = (state_52175[(19)]);
var inst_52080__$1 = (state_52175[(2)]);
var inst_52081 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_52080__$1);
var state_52175__$1 = (function (){var statearr_52224 = state_52175;
(statearr_52224[(19)] = inst_52080__$1);

return statearr_52224;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52175__$1,(22),inst_52081);
} else {
if((state_val_52176 === (31))){
var inst_52172 = (state_52175[(2)]);
var state_52175__$1 = state_52175;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52175__$1,inst_52172);
} else {
if((state_val_52176 === (32))){
var inst_52121 = (state_52175[(16)]);
var inst_52128 = inst_52121.cljs$lang$protocol_mask$partition0$;
var inst_52129 = (inst_52128 & (64));
var inst_52130 = inst_52121.cljs$core$ISeq$;
var inst_52131 = (cljs.core.PROTOCOL_SENTINEL === inst_52130);
var inst_52132 = (inst_52129) || (inst_52131);
var state_52175__$1 = state_52175;
if(cljs.core.truth_(inst_52132)){
var statearr_52228_52377 = state_52175__$1;
(statearr_52228_52377[(1)] = (35));

} else {
var statearr_52229_52378 = state_52175__$1;
(statearr_52229_52378[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52176 === (40))){
var inst_52145 = (state_52175[(20)]);
var inst_52144 = (state_52175[(2)]);
var inst_52145__$1 = cljs.core.get.call(null,inst_52144,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_52146 = cljs.core.get.call(null,inst_52144,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_52149 = cljs.core.not_empty.call(null,inst_52145__$1);
var state_52175__$1 = (function (){var statearr_52230 = state_52175;
(statearr_52230[(20)] = inst_52145__$1);

(statearr_52230[(21)] = inst_52146);

return statearr_52230;
})();
if(cljs.core.truth_(inst_52149)){
var statearr_52231_52380 = state_52175__$1;
(statearr_52231_52380[(1)] = (41));

} else {
var statearr_52234_52382 = state_52175__$1;
(statearr_52234_52382[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52176 === (33))){
var state_52175__$1 = state_52175;
var statearr_52240_52384 = state_52175__$1;
(statearr_52240_52384[(2)] = false);

(statearr_52240_52384[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52176 === (13))){
var inst_52032 = (state_52175[(22)]);
var inst_52038 = cljs.core.chunk_first.call(null,inst_52032);
var inst_52039 = cljs.core.chunk_rest.call(null,inst_52032);
var inst_52040 = cljs.core.count.call(null,inst_52038);
var inst_52017 = inst_52039;
var inst_52018 = inst_52038;
var inst_52019 = inst_52040;
var inst_52020 = (0);
var state_52175__$1 = (function (){var statearr_52242 = state_52175;
(statearr_52242[(7)] = inst_52020);

(statearr_52242[(8)] = inst_52017);

(statearr_52242[(9)] = inst_52019);

(statearr_52242[(10)] = inst_52018);

return statearr_52242;
})();
var statearr_52244_52390 = state_52175__$1;
(statearr_52244_52390[(2)] = null);

(statearr_52244_52390[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52176 === (22))){
var inst_52084 = (state_52175[(23)]);
var inst_52088 = (state_52175[(24)]);
var inst_52083 = (state_52175[(25)]);
var inst_52080 = (state_52175[(19)]);
var inst_52083__$1 = (state_52175[(2)]);
var inst_52084__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_52083__$1);
var inst_52085 = (function (){var all_files = inst_52080;
var res_SINGLEQUOTE_ = inst_52083__$1;
var res = inst_52084__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_52084,inst_52088,inst_52083,inst_52080,inst_52083__$1,inst_52084__$1,state_val_52176,c__41728__auto__,map__51996,map__51996__$1,opts,before_jsload,on_jsload,reload_dependents,map__51997,map__51997__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__51584_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__51584_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_52084,inst_52088,inst_52083,inst_52080,inst_52083__$1,inst_52084__$1,state_val_52176,c__41728__auto__,map__51996,map__51996__$1,opts,before_jsload,on_jsload,reload_dependents,map__51997,map__51997__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_52086 = cljs.core.filter.call(null,inst_52085,inst_52083__$1);
var inst_52087 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_52088__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_52087);
var inst_52089 = cljs.core.not_empty.call(null,inst_52088__$1);
var state_52175__$1 = (function (){var statearr_52249 = state_52175;
(statearr_52249[(23)] = inst_52084__$1);

(statearr_52249[(26)] = inst_52086);

(statearr_52249[(24)] = inst_52088__$1);

(statearr_52249[(25)] = inst_52083__$1);

return statearr_52249;
})();
if(cljs.core.truth_(inst_52089)){
var statearr_52251_52391 = state_52175__$1;
(statearr_52251_52391[(1)] = (23));

} else {
var statearr_52252_52392 = state_52175__$1;
(statearr_52252_52392[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52176 === (36))){
var state_52175__$1 = state_52175;
var statearr_52255_52393 = state_52175__$1;
(statearr_52255_52393[(2)] = false);

(statearr_52255_52393[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52176 === (41))){
var inst_52145 = (state_52175[(20)]);
var inst_52151 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_52152 = cljs.core.map.call(null,inst_52151,inst_52145);
var inst_52153 = cljs.core.pr_str.call(null,inst_52152);
var inst_52154 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("figwheel-no-load meta-data: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_52153)].join('');
var inst_52155 = figwheel.client.utils.log.call(null,inst_52154);
var state_52175__$1 = state_52175;
var statearr_52259_52394 = state_52175__$1;
(statearr_52259_52394[(2)] = inst_52155);

(statearr_52259_52394[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52176 === (43))){
var inst_52146 = (state_52175[(21)]);
var inst_52158 = (state_52175[(2)]);
var inst_52160 = cljs.core.not_empty.call(null,inst_52146);
var state_52175__$1 = (function (){var statearr_52262 = state_52175;
(statearr_52262[(27)] = inst_52158);

return statearr_52262;
})();
if(cljs.core.truth_(inst_52160)){
var statearr_52263_52395 = state_52175__$1;
(statearr_52263_52395[(1)] = (44));

} else {
var statearr_52264_52396 = state_52175__$1;
(statearr_52264_52396[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52176 === (29))){
var inst_52084 = (state_52175[(23)]);
var inst_52086 = (state_52175[(26)]);
var inst_52121 = (state_52175[(16)]);
var inst_52088 = (state_52175[(24)]);
var inst_52083 = (state_52175[(25)]);
var inst_52080 = (state_52175[(19)]);
var inst_52117 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_52120 = (function (){var all_files = inst_52080;
var res_SINGLEQUOTE_ = inst_52083;
var res = inst_52084;
var files_not_loaded = inst_52086;
var dependencies_that_loaded = inst_52088;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_52084,inst_52086,inst_52121,inst_52088,inst_52083,inst_52080,inst_52117,state_val_52176,c__41728__auto__,map__51996,map__51996__$1,opts,before_jsload,on_jsload,reload_dependents,map__51997,map__51997__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__52119){
var map__52265 = p__52119;
var map__52265__$1 = ((((!((map__52265 == null)))?((((map__52265.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52265.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52265):map__52265);
var namespace = cljs.core.get.call(null,map__52265__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_52084,inst_52086,inst_52121,inst_52088,inst_52083,inst_52080,inst_52117,state_val_52176,c__41728__auto__,map__51996,map__51996__$1,opts,before_jsload,on_jsload,reload_dependents,map__51997,map__51997__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_52121__$1 = cljs.core.group_by.call(null,inst_52120,inst_52086);
var inst_52123 = (inst_52121__$1 == null);
var inst_52124 = cljs.core.not.call(null,inst_52123);
var state_52175__$1 = (function (){var statearr_52267 = state_52175;
(statearr_52267[(16)] = inst_52121__$1);

(statearr_52267[(28)] = inst_52117);

return statearr_52267;
})();
if(inst_52124){
var statearr_52268_52397 = state_52175__$1;
(statearr_52268_52397[(1)] = (32));

} else {
var statearr_52269_52398 = state_52175__$1;
(statearr_52269_52398[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52176 === (44))){
var inst_52146 = (state_52175[(21)]);
var inst_52163 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_52146);
var inst_52164 = cljs.core.pr_str.call(null,inst_52163);
var inst_52165 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("not required: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_52164)].join('');
var inst_52166 = figwheel.client.utils.log.call(null,inst_52165);
var state_52175__$1 = state_52175;
var statearr_52270_52408 = state_52175__$1;
(statearr_52270_52408[(2)] = inst_52166);

(statearr_52270_52408[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52176 === (6))){
var inst_52061 = (state_52175[(2)]);
var state_52175__$1 = state_52175;
var statearr_52271_52416 = state_52175__$1;
(statearr_52271_52416[(2)] = inst_52061);

(statearr_52271_52416[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52176 === (28))){
var inst_52086 = (state_52175[(26)]);
var inst_52114 = (state_52175[(2)]);
var inst_52115 = cljs.core.not_empty.call(null,inst_52086);
var state_52175__$1 = (function (){var statearr_52272 = state_52175;
(statearr_52272[(29)] = inst_52114);

return statearr_52272;
})();
if(cljs.core.truth_(inst_52115)){
var statearr_52273_52430 = state_52175__$1;
(statearr_52273_52430[(1)] = (29));

} else {
var statearr_52274_52434 = state_52175__$1;
(statearr_52274_52434[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52176 === (25))){
var inst_52084 = (state_52175[(23)]);
var inst_52100 = (state_52175[(2)]);
var inst_52101 = cljs.core.not_empty.call(null,inst_52084);
var state_52175__$1 = (function (){var statearr_52275 = state_52175;
(statearr_52275[(30)] = inst_52100);

return statearr_52275;
})();
if(cljs.core.truth_(inst_52101)){
var statearr_52276_52453 = state_52175__$1;
(statearr_52276_52453[(1)] = (26));

} else {
var statearr_52277_52454 = state_52175__$1;
(statearr_52277_52454[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52176 === (34))){
var inst_52139 = (state_52175[(2)]);
var state_52175__$1 = state_52175;
if(cljs.core.truth_(inst_52139)){
var statearr_52278_52466 = state_52175__$1;
(statearr_52278_52466[(1)] = (38));

} else {
var statearr_52279_52467 = state_52175__$1;
(statearr_52279_52467[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52176 === (17))){
var state_52175__$1 = state_52175;
var statearr_52280_52470 = state_52175__$1;
(statearr_52280_52470[(2)] = recompile_dependents);

(statearr_52280_52470[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52176 === (3))){
var state_52175__$1 = state_52175;
var statearr_52281_52478 = state_52175__$1;
(statearr_52281_52478[(2)] = null);

(statearr_52281_52478[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52176 === (12))){
var inst_52057 = (state_52175[(2)]);
var state_52175__$1 = state_52175;
var statearr_52283_52492 = state_52175__$1;
(statearr_52283_52492[(2)] = inst_52057);

(statearr_52283_52492[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52176 === (2))){
var inst_52008 = (state_52175[(13)]);
var inst_52016 = cljs.core.seq.call(null,inst_52008);
var inst_52017 = inst_52016;
var inst_52018 = null;
var inst_52019 = (0);
var inst_52020 = (0);
var state_52175__$1 = (function (){var statearr_52284 = state_52175;
(statearr_52284[(7)] = inst_52020);

(statearr_52284[(8)] = inst_52017);

(statearr_52284[(9)] = inst_52019);

(statearr_52284[(10)] = inst_52018);

return statearr_52284;
})();
var statearr_52285_52508 = state_52175__$1;
(statearr_52285_52508[(2)] = null);

(statearr_52285_52508[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52176 === (23))){
var inst_52084 = (state_52175[(23)]);
var inst_52086 = (state_52175[(26)]);
var inst_52088 = (state_52175[(24)]);
var inst_52083 = (state_52175[(25)]);
var inst_52080 = (state_52175[(19)]);
var inst_52091 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_52093 = (function (){var all_files = inst_52080;
var res_SINGLEQUOTE_ = inst_52083;
var res = inst_52084;
var files_not_loaded = inst_52086;
var dependencies_that_loaded = inst_52088;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_52084,inst_52086,inst_52088,inst_52083,inst_52080,inst_52091,state_val_52176,c__41728__auto__,map__51996,map__51996__$1,opts,before_jsload,on_jsload,reload_dependents,map__51997,map__51997__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__52092){
var map__52286 = p__52092;
var map__52286__$1 = ((((!((map__52286 == null)))?((((map__52286.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52286.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52286):map__52286);
var request_url = cljs.core.get.call(null,map__52286__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_52084,inst_52086,inst_52088,inst_52083,inst_52080,inst_52091,state_val_52176,c__41728__auto__,map__51996,map__51996__$1,opts,before_jsload,on_jsload,reload_dependents,map__51997,map__51997__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_52094 = cljs.core.reverse.call(null,inst_52088);
var inst_52095 = cljs.core.map.call(null,inst_52093,inst_52094);
var inst_52096 = cljs.core.pr_str.call(null,inst_52095);
var inst_52097 = figwheel.client.utils.log.call(null,inst_52096);
var state_52175__$1 = (function (){var statearr_52288 = state_52175;
(statearr_52288[(31)] = inst_52091);

return statearr_52288;
})();
var statearr_52289_52530 = state_52175__$1;
(statearr_52289_52530[(2)] = inst_52097);

(statearr_52289_52530[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52176 === (35))){
var state_52175__$1 = state_52175;
var statearr_52290_52532 = state_52175__$1;
(statearr_52290_52532[(2)] = true);

(statearr_52290_52532[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52176 === (19))){
var inst_52070 = (state_52175[(12)]);
var inst_52076 = figwheel.client.file_reloading.expand_files.call(null,inst_52070);
var state_52175__$1 = state_52175;
var statearr_52291_52533 = state_52175__$1;
(statearr_52291_52533[(2)] = inst_52076);

(statearr_52291_52533[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52176 === (11))){
var state_52175__$1 = state_52175;
var statearr_52292_52538 = state_52175__$1;
(statearr_52292_52538[(2)] = null);

(statearr_52292_52538[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52176 === (9))){
var inst_52059 = (state_52175[(2)]);
var state_52175__$1 = state_52175;
var statearr_52293_52539 = state_52175__$1;
(statearr_52293_52539[(2)] = inst_52059);

(statearr_52293_52539[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52176 === (5))){
var inst_52020 = (state_52175[(7)]);
var inst_52019 = (state_52175[(9)]);
var inst_52022 = (inst_52020 < inst_52019);
var inst_52023 = inst_52022;
var state_52175__$1 = state_52175;
if(cljs.core.truth_(inst_52023)){
var statearr_52294_52544 = state_52175__$1;
(statearr_52294_52544[(1)] = (7));

} else {
var statearr_52295_52546 = state_52175__$1;
(statearr_52295_52546[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52176 === (14))){
var inst_52032 = (state_52175[(22)]);
var inst_52044 = cljs.core.first.call(null,inst_52032);
var inst_52050 = figwheel.client.file_reloading.eval_body.call(null,inst_52044,opts);
var inst_52051 = cljs.core.next.call(null,inst_52032);
var inst_52017 = inst_52051;
var inst_52018 = null;
var inst_52019 = (0);
var inst_52020 = (0);
var state_52175__$1 = (function (){var statearr_52296 = state_52175;
(statearr_52296[(7)] = inst_52020);

(statearr_52296[(8)] = inst_52017);

(statearr_52296[(32)] = inst_52050);

(statearr_52296[(9)] = inst_52019);

(statearr_52296[(10)] = inst_52018);

return statearr_52296;
})();
var statearr_52297_52562 = state_52175__$1;
(statearr_52297_52562[(2)] = null);

(statearr_52297_52562[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52176 === (45))){
var state_52175__$1 = state_52175;
var statearr_52298_52563 = state_52175__$1;
(statearr_52298_52563[(2)] = null);

(statearr_52298_52563[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52176 === (26))){
var inst_52084 = (state_52175[(23)]);
var inst_52086 = (state_52175[(26)]);
var inst_52088 = (state_52175[(24)]);
var inst_52083 = (state_52175[(25)]);
var inst_52080 = (state_52175[(19)]);
var inst_52104 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_52106 = (function (){var all_files = inst_52080;
var res_SINGLEQUOTE_ = inst_52083;
var res = inst_52084;
var files_not_loaded = inst_52086;
var dependencies_that_loaded = inst_52088;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_52084,inst_52086,inst_52088,inst_52083,inst_52080,inst_52104,state_val_52176,c__41728__auto__,map__51996,map__51996__$1,opts,before_jsload,on_jsload,reload_dependents,map__51997,map__51997__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__52105){
var map__52299 = p__52105;
var map__52299__$1 = ((((!((map__52299 == null)))?((((map__52299.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52299.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52299):map__52299);
var namespace = cljs.core.get.call(null,map__52299__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__52299__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_52084,inst_52086,inst_52088,inst_52083,inst_52080,inst_52104,state_val_52176,c__41728__auto__,map__51996,map__51996__$1,opts,before_jsload,on_jsload,reload_dependents,map__51997,map__51997__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_52107 = cljs.core.map.call(null,inst_52106,inst_52084);
var inst_52108 = cljs.core.pr_str.call(null,inst_52107);
var inst_52109 = figwheel.client.utils.log.call(null,inst_52108);
var inst_52110 = (function (){var all_files = inst_52080;
var res_SINGLEQUOTE_ = inst_52083;
var res = inst_52084;
var files_not_loaded = inst_52086;
var dependencies_that_loaded = inst_52088;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_52084,inst_52086,inst_52088,inst_52083,inst_52080,inst_52104,inst_52106,inst_52107,inst_52108,inst_52109,state_val_52176,c__41728__auto__,map__51996,map__51996__$1,opts,before_jsload,on_jsload,reload_dependents,map__51997,map__51997__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_52084,inst_52086,inst_52088,inst_52083,inst_52080,inst_52104,inst_52106,inst_52107,inst_52108,inst_52109,state_val_52176,c__41728__auto__,map__51996,map__51996__$1,opts,before_jsload,on_jsload,reload_dependents,map__51997,map__51997__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_52111 = setTimeout(inst_52110,(10));
var state_52175__$1 = (function (){var statearr_52301 = state_52175;
(statearr_52301[(33)] = inst_52109);

(statearr_52301[(34)] = inst_52104);

return statearr_52301;
})();
var statearr_52302_52611 = state_52175__$1;
(statearr_52302_52611[(2)] = inst_52111);

(statearr_52302_52611[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52176 === (16))){
var state_52175__$1 = state_52175;
var statearr_52303_52619 = state_52175__$1;
(statearr_52303_52619[(2)] = reload_dependents);

(statearr_52303_52619[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52176 === (38))){
var inst_52121 = (state_52175[(16)]);
var inst_52141 = cljs.core.apply.call(null,cljs.core.hash_map,inst_52121);
var state_52175__$1 = state_52175;
var statearr_52304_52623 = state_52175__$1;
(statearr_52304_52623[(2)] = inst_52141);

(statearr_52304_52623[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52176 === (30))){
var state_52175__$1 = state_52175;
var statearr_52305_52628 = state_52175__$1;
(statearr_52305_52628[(2)] = null);

(statearr_52305_52628[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52176 === (10))){
var inst_52032 = (state_52175[(22)]);
var inst_52036 = cljs.core.chunked_seq_QMARK_.call(null,inst_52032);
var state_52175__$1 = state_52175;
if(inst_52036){
var statearr_52306_52629 = state_52175__$1;
(statearr_52306_52629[(1)] = (13));

} else {
var statearr_52307_52632 = state_52175__$1;
(statearr_52307_52632[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52176 === (18))){
var inst_52074 = (state_52175[(2)]);
var state_52175__$1 = state_52175;
if(cljs.core.truth_(inst_52074)){
var statearr_52308_52637 = state_52175__$1;
(statearr_52308_52637[(1)] = (19));

} else {
var statearr_52309_52638 = state_52175__$1;
(statearr_52309_52638[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52176 === (42))){
var state_52175__$1 = state_52175;
var statearr_52310_52639 = state_52175__$1;
(statearr_52310_52639[(2)] = null);

(statearr_52310_52639[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52176 === (37))){
var inst_52136 = (state_52175[(2)]);
var state_52175__$1 = state_52175;
var statearr_52311_52641 = state_52175__$1;
(statearr_52311_52641[(2)] = inst_52136);

(statearr_52311_52641[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52176 === (8))){
var inst_52017 = (state_52175[(8)]);
var inst_52032 = (state_52175[(22)]);
var inst_52032__$1 = cljs.core.seq.call(null,inst_52017);
var state_52175__$1 = (function (){var statearr_52312 = state_52175;
(statearr_52312[(22)] = inst_52032__$1);

return statearr_52312;
})();
if(inst_52032__$1){
var statearr_52313_52642 = state_52175__$1;
(statearr_52313_52642[(1)] = (10));

} else {
var statearr_52314_52643 = state_52175__$1;
(statearr_52314_52643[(1)] = (11));

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
}
});})(c__41728__auto__,map__51996,map__51996__$1,opts,before_jsload,on_jsload,reload_dependents,map__51997,map__51997__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__41485__auto__,c__41728__auto__,map__51996,map__51996__$1,opts,before_jsload,on_jsload,reload_dependents,map__51997,map__51997__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__41486__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__41486__auto____0 = (function (){
var statearr_52320 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52320[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__41486__auto__);

(statearr_52320[(1)] = (1));

return statearr_52320;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__41486__auto____1 = (function (state_52175){
while(true){
var ret_value__41487__auto__ = (function (){try{while(true){
var result__41488__auto__ = switch__41485__auto__.call(null,state_52175);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41488__auto__;
}
break;
}
}catch (e52329){if((e52329 instanceof Object)){
var ex__41489__auto__ = e52329;
var statearr_52333_52645 = state_52175;
(statearr_52333_52645[(5)] = ex__41489__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52175);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52329;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41487__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52648 = state_52175;
state_52175 = G__52648;
continue;
} else {
return ret_value__41487__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__41486__auto__ = function(state_52175){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__41486__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__41486__auto____1.call(this,state_52175);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__41486__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__41486__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__41486__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__41486__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__41486__auto__;
})()
;})(switch__41485__auto__,c__41728__auto__,map__51996,map__51996__$1,opts,before_jsload,on_jsload,reload_dependents,map__51997,map__51997__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__41730__auto__ = (function (){var statearr_52342 = f__41729__auto__.call(null);
(statearr_52342[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41728__auto__);

return statearr_52342;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41730__auto__);
});})(c__41728__auto__,map__51996,map__51996__$1,opts,before_jsload,on_jsload,reload_dependents,map__51997,map__51997__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__41728__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),cljs.core.str.cljs$core$IFn$_invoke$arity$1("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__52656,link){
var map__52659 = p__52656;
var map__52659__$1 = ((((!((map__52659 == null)))?((((map__52659.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52659.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52659):map__52659);
var file = cljs.core.get.call(null,map__52659__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__6753__auto__ = link.href;
if(cljs.core.truth_(temp__6753__auto__)){
var link_href = temp__6753__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__6753__auto__,map__52659,map__52659__$1,file){
return (function (p1__52654_SHARP_,p2__52655_SHARP_){
if(cljs.core._EQ_.call(null,p1__52654_SHARP_,p2__52655_SHARP_)){
return p1__52654_SHARP_;
} else {
return false;
}
});})(link_href,temp__6753__auto__,map__52659,map__52659__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__6753__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__52671){
var map__52672 = p__52671;
var map__52672__$1 = ((((!((map__52672 == null)))?((((map__52672.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52672.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52672):map__52672);
var match_length = cljs.core.get.call(null,map__52672__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__52672__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__52667_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__52667_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__6753__auto__)){
var res = temp__6753__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__52684_SHARP_,p2__52685_SHARP_){
return cljs.core.assoc.call(null,p1__52684_SHARP_,cljs.core.get.call(null,p2__52685_SHARP_,key),p2__52685_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__6751__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__6751__auto__)){
var link = temp__6751__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__6751__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__6751__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_52698 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_52698);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_52698);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__52703,p__52704){
var map__52715 = p__52703;
var map__52715__$1 = ((((!((map__52715 == null)))?((((map__52715.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52715.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52715):map__52715);
var on_cssload = cljs.core.get.call(null,map__52715__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__52716 = p__52704;
var map__52716__$1 = ((((!((map__52716 == null)))?((((map__52716.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52716.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52716):map__52716);
var files_msg = map__52716__$1;
var files = cljs.core.get.call(null,map__52716__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__6753__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__6753__auto__)){
var f_datas = temp__6753__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1493584944606