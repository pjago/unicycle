// Compiled by ClojureScript 1.9.456 {}
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
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__20675__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__20675__auto__){
return or__20675__auto__;
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
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("goog/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__20675__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__20675__auto__)){
return or__20675__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__29146_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__29146_SHARP_));
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
var seq__29227 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__29228 = null;
var count__29229 = (0);
var i__29230 = (0);
while(true){
if((i__29230 < count__29229)){
var n = cljs.core._nth.call(null,chunk__29228,i__29230);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__29288 = seq__29227;
var G__29289 = chunk__29228;
var G__29290 = count__29229;
var G__29291 = (i__29230 + (1));
seq__29227 = G__29288;
chunk__29228 = G__29289;
count__29229 = G__29290;
i__29230 = G__29291;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__29227);
if(temp__6753__auto__){
var seq__29227__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29227__$1)){
var c__21586__auto__ = cljs.core.chunk_first.call(null,seq__29227__$1);
var G__29319 = cljs.core.chunk_rest.call(null,seq__29227__$1);
var G__29320 = c__21586__auto__;
var G__29321 = cljs.core.count.call(null,c__21586__auto__);
var G__29322 = (0);
seq__29227 = G__29319;
chunk__29228 = G__29320;
count__29229 = G__29321;
i__29230 = G__29322;
continue;
} else {
var n = cljs.core.first.call(null,seq__29227__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__29353 = cljs.core.next.call(null,seq__29227__$1);
var G__29354 = null;
var G__29355 = (0);
var G__29356 = (0);
seq__29227 = G__29353;
chunk__29228 = G__29354;
count__29229 = G__29355;
i__29230 = G__29356;
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

var seq__29615_29694 = cljs.core.seq.call(null,deps);
var chunk__29616_29695 = null;
var count__29617_29696 = (0);
var i__29618_29697 = (0);
while(true){
if((i__29618_29697 < count__29617_29696)){
var dep_29708 = cljs.core._nth.call(null,chunk__29616_29695,i__29618_29697);
topo_sort_helper_STAR_.call(null,dep_29708,(depth + (1)),state);

var G__29711 = seq__29615_29694;
var G__29712 = chunk__29616_29695;
var G__29713 = count__29617_29696;
var G__29714 = (i__29618_29697 + (1));
seq__29615_29694 = G__29711;
chunk__29616_29695 = G__29712;
count__29617_29696 = G__29713;
i__29618_29697 = G__29714;
continue;
} else {
var temp__6753__auto___29717 = cljs.core.seq.call(null,seq__29615_29694);
if(temp__6753__auto___29717){
var seq__29615_29720__$1 = temp__6753__auto___29717;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29615_29720__$1)){
var c__21586__auto___29740 = cljs.core.chunk_first.call(null,seq__29615_29720__$1);
var G__29743 = cljs.core.chunk_rest.call(null,seq__29615_29720__$1);
var G__29744 = c__21586__auto___29740;
var G__29745 = cljs.core.count.call(null,c__21586__auto___29740);
var G__29746 = (0);
seq__29615_29694 = G__29743;
chunk__29616_29695 = G__29744;
count__29617_29696 = G__29745;
i__29618_29697 = G__29746;
continue;
} else {
var dep_29751 = cljs.core.first.call(null,seq__29615_29720__$1);
topo_sort_helper_STAR_.call(null,dep_29751,(depth + (1)),state);

var G__29754 = cljs.core.next.call(null,seq__29615_29720__$1);
var G__29756 = null;
var G__29757 = (0);
var G__29758 = (0);
seq__29615_29694 = G__29754;
chunk__29616_29695 = G__29756;
count__29617_29696 = G__29757;
i__29618_29697 = G__29758;
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
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__29632){
var vec__29649 = p__29632;
var seq__29650 = cljs.core.seq.call(null,vec__29649);
var first__29651 = cljs.core.first.call(null,seq__29650);
var seq__29650__$1 = cljs.core.next.call(null,seq__29650);
var x = first__29651;
var xs = seq__29650__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__29649,seq__29650,first__29651,seq__29650__$1,x,xs,get_deps__$1){
return (function (p1__29390_SHARP_){
return clojure.set.difference.call(null,p1__29390_SHARP_,x);
});})(vec__29649,seq__29650,first__29651,seq__29650__$1,x,xs,get_deps__$1))
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
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
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
var seq__29968 = cljs.core.seq.call(null,provides);
var chunk__29969 = null;
var count__29970 = (0);
var i__29971 = (0);
while(true){
if((i__29971 < count__29970)){
var prov = cljs.core._nth.call(null,chunk__29969,i__29971);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__29974_29994 = cljs.core.seq.call(null,requires);
var chunk__29975_29995 = null;
var count__29976_29996 = (0);
var i__29977_29997 = (0);
while(true){
if((i__29977_29997 < count__29976_29996)){
var req_30003 = cljs.core._nth.call(null,chunk__29975_29995,i__29977_29997);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30003,prov);

var G__30016 = seq__29974_29994;
var G__30017 = chunk__29975_29995;
var G__30018 = count__29976_29996;
var G__30019 = (i__29977_29997 + (1));
seq__29974_29994 = G__30016;
chunk__29975_29995 = G__30017;
count__29976_29996 = G__30018;
i__29977_29997 = G__30019;
continue;
} else {
var temp__6753__auto___30028 = cljs.core.seq.call(null,seq__29974_29994);
if(temp__6753__auto___30028){
var seq__29974_30029__$1 = temp__6753__auto___30028;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29974_30029__$1)){
var c__21586__auto___30032 = cljs.core.chunk_first.call(null,seq__29974_30029__$1);
var G__30035 = cljs.core.chunk_rest.call(null,seq__29974_30029__$1);
var G__30036 = c__21586__auto___30032;
var G__30037 = cljs.core.count.call(null,c__21586__auto___30032);
var G__30038 = (0);
seq__29974_29994 = G__30035;
chunk__29975_29995 = G__30036;
count__29976_29996 = G__30037;
i__29977_29997 = G__30038;
continue;
} else {
var req_30040 = cljs.core.first.call(null,seq__29974_30029__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30040,prov);

var G__30041 = cljs.core.next.call(null,seq__29974_30029__$1);
var G__30042 = null;
var G__30043 = (0);
var G__30044 = (0);
seq__29974_29994 = G__30041;
chunk__29975_29995 = G__30042;
count__29976_29996 = G__30043;
i__29977_29997 = G__30044;
continue;
}
} else {
}
}
break;
}

var G__30058 = seq__29968;
var G__30059 = chunk__29969;
var G__30060 = count__29970;
var G__30061 = (i__29971 + (1));
seq__29968 = G__30058;
chunk__29969 = G__30059;
count__29970 = G__30060;
i__29971 = G__30061;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__29968);
if(temp__6753__auto__){
var seq__29968__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29968__$1)){
var c__21586__auto__ = cljs.core.chunk_first.call(null,seq__29968__$1);
var G__30071 = cljs.core.chunk_rest.call(null,seq__29968__$1);
var G__30072 = c__21586__auto__;
var G__30073 = cljs.core.count.call(null,c__21586__auto__);
var G__30074 = (0);
seq__29968 = G__30071;
chunk__29969 = G__30072;
count__29970 = G__30073;
i__29971 = G__30074;
continue;
} else {
var prov = cljs.core.first.call(null,seq__29968__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__29981_30085 = cljs.core.seq.call(null,requires);
var chunk__29982_30086 = null;
var count__29983_30087 = (0);
var i__29984_30088 = (0);
while(true){
if((i__29984_30088 < count__29983_30087)){
var req_30094 = cljs.core._nth.call(null,chunk__29982_30086,i__29984_30088);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30094,prov);

var G__30107 = seq__29981_30085;
var G__30108 = chunk__29982_30086;
var G__30109 = count__29983_30087;
var G__30110 = (i__29984_30088 + (1));
seq__29981_30085 = G__30107;
chunk__29982_30086 = G__30108;
count__29983_30087 = G__30109;
i__29984_30088 = G__30110;
continue;
} else {
var temp__6753__auto___30121__$1 = cljs.core.seq.call(null,seq__29981_30085);
if(temp__6753__auto___30121__$1){
var seq__29981_30123__$1 = temp__6753__auto___30121__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29981_30123__$1)){
var c__21586__auto___30125 = cljs.core.chunk_first.call(null,seq__29981_30123__$1);
var G__30126 = cljs.core.chunk_rest.call(null,seq__29981_30123__$1);
var G__30127 = c__21586__auto___30125;
var G__30128 = cljs.core.count.call(null,c__21586__auto___30125);
var G__30129 = (0);
seq__29981_30085 = G__30126;
chunk__29982_30086 = G__30127;
count__29983_30087 = G__30128;
i__29984_30088 = G__30129;
continue;
} else {
var req_30136 = cljs.core.first.call(null,seq__29981_30123__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30136,prov);

var G__30142 = cljs.core.next.call(null,seq__29981_30123__$1);
var G__30143 = null;
var G__30144 = (0);
var G__30145 = (0);
seq__29981_30085 = G__30142;
chunk__29982_30086 = G__30143;
count__29983_30087 = G__30144;
i__29984_30088 = G__30145;
continue;
}
} else {
}
}
break;
}

var G__30151 = cljs.core.next.call(null,seq__29968__$1);
var G__30152 = null;
var G__30153 = (0);
var G__30154 = (0);
seq__29968 = G__30151;
chunk__29969 = G__30152;
count__29970 = G__30153;
i__29971 = G__30154;
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
var seq__30175_30189 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__30176_30190 = null;
var count__30177_30191 = (0);
var i__30178_30192 = (0);
while(true){
if((i__30178_30192 < count__30177_30191)){
var ns_30198 = cljs.core._nth.call(null,chunk__30176_30190,i__30178_30192);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_30198);

var G__30201 = seq__30175_30189;
var G__30202 = chunk__30176_30190;
var G__30203 = count__30177_30191;
var G__30204 = (i__30178_30192 + (1));
seq__30175_30189 = G__30201;
chunk__30176_30190 = G__30202;
count__30177_30191 = G__30203;
i__30178_30192 = G__30204;
continue;
} else {
var temp__6753__auto___30208 = cljs.core.seq.call(null,seq__30175_30189);
if(temp__6753__auto___30208){
var seq__30175_30211__$1 = temp__6753__auto___30208;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30175_30211__$1)){
var c__21586__auto___30214 = cljs.core.chunk_first.call(null,seq__30175_30211__$1);
var G__30217 = cljs.core.chunk_rest.call(null,seq__30175_30211__$1);
var G__30218 = c__21586__auto___30214;
var G__30219 = cljs.core.count.call(null,c__21586__auto___30214);
var G__30220 = (0);
seq__30175_30189 = G__30217;
chunk__30176_30190 = G__30218;
count__30177_30191 = G__30219;
i__30178_30192 = G__30220;
continue;
} else {
var ns_30225 = cljs.core.first.call(null,seq__30175_30211__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_30225);

var G__30228 = cljs.core.next.call(null,seq__30175_30211__$1);
var G__30229 = null;
var G__30230 = (0);
var G__30231 = (0);
seq__30175_30189 = G__30228;
chunk__30176_30190 = G__30229;
count__30177_30191 = G__30230;
i__30178_30192 = G__30231;
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
goog.require_figwheel_backup_ = (function (){var or__20675__auto__ = goog.require__;
if(cljs.core.truth_(or__20675__auto__)){
return or__20675__auto__;
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
var G__30249__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__30249 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30257__i = 0, G__30257__a = new Array(arguments.length -  0);
while (G__30257__i < G__30257__a.length) {G__30257__a[G__30257__i] = arguments[G__30257__i + 0]; ++G__30257__i;}
  args = new cljs.core.IndexedSeq(G__30257__a,0);
} 
return G__30249__delegate.call(this,args);};
G__30249.cljs$lang$maxFixedArity = 0;
G__30249.cljs$lang$applyTo = (function (arglist__30259){
var args = cljs.core.seq(arglist__30259);
return G__30249__delegate(args);
});
G__30249.cljs$core$IFn$_invoke$arity$variadic = G__30249__delegate;
return G__30249;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__30278 = cljs.core._EQ_;
var expr__30279 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__30278.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__30279))){
var path_parts = ((function (pred__30278,expr__30279){
return (function (p1__30275_SHARP_){
return clojure.string.split.call(null,p1__30275_SHARP_,/[\/\\]/);
});})(pred__30278,expr__30279))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__30278,expr__30279){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e30285){if((e30285 instanceof Error)){
var e = e30285;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e30285;

}
}})());
});
;})(path_parts,sep,root,pred__30278,expr__30279))
} else {
if(cljs.core.truth_(pred__30278.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__30279))){
return ((function (pred__30278,expr__30279){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__30278,expr__30279){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__30278,expr__30279))
);

return deferred.addErrback(((function (deferred,pred__30278,expr__30279){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__30278,expr__30279))
);
});
;})(pred__30278,expr__30279))
} else {
return ((function (pred__30278,expr__30279){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__30278,expr__30279))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__30305,callback){
var map__30311 = p__30305;
var map__30311__$1 = ((((!((map__30311 == null)))?((((map__30311.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30311.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30311):map__30311);
var file_msg = map__30311__$1;
var request_url = cljs.core.get.call(null,map__30311__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("FigWheel: Attempting to load "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__30311,map__30311__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("FigWheel: Successfully loaded "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__30311,map__30311__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__24836__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24836__auto__){
return (function (){
var f__24837__auto__ = (function (){var switch__24601__auto__ = ((function (c__24836__auto__){
return (function (state_30368){
var state_val_30369 = (state_30368[(1)]);
if((state_val_30369 === (7))){
var inst_30364 = (state_30368[(2)]);
var state_30368__$1 = state_30368;
var statearr_30371_30426 = state_30368__$1;
(statearr_30371_30426[(2)] = inst_30364);

(statearr_30371_30426[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30369 === (1))){
var state_30368__$1 = state_30368;
var statearr_30373_30428 = state_30368__$1;
(statearr_30373_30428[(2)] = null);

(statearr_30373_30428[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30369 === (4))){
var inst_30348 = (state_30368[(7)]);
var inst_30348__$1 = (state_30368[(2)]);
var state_30368__$1 = (function (){var statearr_30375 = state_30368;
(statearr_30375[(7)] = inst_30348__$1);

return statearr_30375;
})();
if(cljs.core.truth_(inst_30348__$1)){
var statearr_30377_30433 = state_30368__$1;
(statearr_30377_30433[(1)] = (5));

} else {
var statearr_30379_30441 = state_30368__$1;
(statearr_30379_30441[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30369 === (6))){
var state_30368__$1 = state_30368;
var statearr_30382_30442 = state_30368__$1;
(statearr_30382_30442[(2)] = null);

(statearr_30382_30442[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30369 === (3))){
var inst_30366 = (state_30368[(2)]);
var state_30368__$1 = state_30368;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30368__$1,inst_30366);
} else {
if((state_val_30369 === (2))){
var state_30368__$1 = state_30368;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30368__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_30369 === (11))){
var inst_30360 = (state_30368[(2)]);
var state_30368__$1 = (function (){var statearr_30385 = state_30368;
(statearr_30385[(8)] = inst_30360);

return statearr_30385;
})();
var statearr_30386_30448 = state_30368__$1;
(statearr_30386_30448[(2)] = null);

(statearr_30386_30448[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30369 === (9))){
var inst_30354 = (state_30368[(9)]);
var inst_30352 = (state_30368[(10)]);
var inst_30356 = inst_30354.call(null,inst_30352);
var state_30368__$1 = state_30368;
var statearr_30389_30456 = state_30368__$1;
(statearr_30389_30456[(2)] = inst_30356);

(statearr_30389_30456[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30369 === (5))){
var inst_30348 = (state_30368[(7)]);
var inst_30350 = figwheel.client.file_reloading.blocking_load.call(null,inst_30348);
var state_30368__$1 = state_30368;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30368__$1,(8),inst_30350);
} else {
if((state_val_30369 === (10))){
var inst_30352 = (state_30368[(10)]);
var inst_30358 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_30352);
var state_30368__$1 = state_30368;
var statearr_30393_30467 = state_30368__$1;
(statearr_30393_30467[(2)] = inst_30358);

(statearr_30393_30467[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30369 === (8))){
var inst_30348 = (state_30368[(7)]);
var inst_30354 = (state_30368[(9)]);
var inst_30352 = (state_30368[(2)]);
var inst_30353 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_30354__$1 = cljs.core.get.call(null,inst_30353,inst_30348);
var state_30368__$1 = (function (){var statearr_30395 = state_30368;
(statearr_30395[(9)] = inst_30354__$1);

(statearr_30395[(10)] = inst_30352);

return statearr_30395;
})();
if(cljs.core.truth_(inst_30354__$1)){
var statearr_30396_30477 = state_30368__$1;
(statearr_30396_30477[(1)] = (9));

} else {
var statearr_30397_30479 = state_30368__$1;
(statearr_30397_30479[(1)] = (10));

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
});})(c__24836__auto__))
;
return ((function (switch__24601__auto__,c__24836__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__24602__auto__ = null;
var figwheel$client$file_reloading$state_machine__24602__auto____0 = (function (){
var statearr_30413 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30413[(0)] = figwheel$client$file_reloading$state_machine__24602__auto__);

(statearr_30413[(1)] = (1));

return statearr_30413;
});
var figwheel$client$file_reloading$state_machine__24602__auto____1 = (function (state_30368){
while(true){
var ret_value__24603__auto__ = (function (){try{while(true){
var result__24604__auto__ = switch__24601__auto__.call(null,state_30368);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24604__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24604__auto__;
}
break;
}
}catch (e30415){if((e30415 instanceof Object)){
var ex__24605__auto__ = e30415;
var statearr_30416_30485 = state_30368;
(statearr_30416_30485[(5)] = ex__24605__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30368);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30415;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24603__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30488 = state_30368;
state_30368 = G__30488;
continue;
} else {
return ret_value__24603__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__24602__auto__ = function(state_30368){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__24602__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__24602__auto____1.call(this,state_30368);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__24602__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__24602__auto____0;
figwheel$client$file_reloading$state_machine__24602__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__24602__auto____1;
return figwheel$client$file_reloading$state_machine__24602__auto__;
})()
;})(switch__24601__auto__,c__24836__auto__))
})();
var state__24838__auto__ = (function (){var statearr_30418 = f__24837__auto__.call(null);
(statearr_30418[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24836__auto__);

return statearr_30418;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24838__auto__);
});})(c__24836__auto__))
);

return c__24836__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__30502,callback){
var map__30507 = p__30502;
var map__30507__$1 = ((((!((map__30507 == null)))?((((map__30507.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30507.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30507):map__30507);
var file_msg = map__30507__$1;
var namespace = cljs.core.get.call(null,map__30507__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__30507,map__30507__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__30507,map__30507__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__30514){
var map__30518 = p__30514;
var map__30518__$1 = ((((!((map__30518 == null)))?((((map__30518.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30518.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30518):map__30518);
var file_msg = map__30518__$1;
var namespace = cljs.core.get.call(null,map__30518__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__20663__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__20663__auto__){
var or__20675__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__20675__auto__)){
return or__20675__auto__;
} else {
var or__20675__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__20675__auto____$1)){
return or__20675__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__20663__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__30532,callback){
var map__30537 = p__30532;
var map__30537__$1 = ((((!((map__30537 == null)))?((((map__30537.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30537.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30537):map__30537);
var file_msg = map__30537__$1;
var request_url = cljs.core.get.call(null,map__30537__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__30537__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__24836__auto___30702 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24836__auto___30702,out){
return (function (){
var f__24837__auto__ = (function (){var switch__24601__auto__ = ((function (c__24836__auto___30702,out){
return (function (state_30677){
var state_val_30678 = (state_30677[(1)]);
if((state_val_30678 === (1))){
var inst_30650 = cljs.core.seq.call(null,files);
var inst_30651 = cljs.core.first.call(null,inst_30650);
var inst_30652 = cljs.core.next.call(null,inst_30650);
var inst_30654 = files;
var state_30677__$1 = (function (){var statearr_30680 = state_30677;
(statearr_30680[(7)] = inst_30651);

(statearr_30680[(8)] = inst_30652);

(statearr_30680[(9)] = inst_30654);

return statearr_30680;
})();
var statearr_30681_30705 = state_30677__$1;
(statearr_30681_30705[(2)] = null);

(statearr_30681_30705[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30678 === (2))){
var inst_30654 = (state_30677[(9)]);
var inst_30660 = (state_30677[(10)]);
var inst_30659 = cljs.core.seq.call(null,inst_30654);
var inst_30660__$1 = cljs.core.first.call(null,inst_30659);
var inst_30661 = cljs.core.next.call(null,inst_30659);
var inst_30662 = (inst_30660__$1 == null);
var inst_30663 = cljs.core.not.call(null,inst_30662);
var state_30677__$1 = (function (){var statearr_30683 = state_30677;
(statearr_30683[(11)] = inst_30661);

(statearr_30683[(10)] = inst_30660__$1);

return statearr_30683;
})();
if(inst_30663){
var statearr_30684_30708 = state_30677__$1;
(statearr_30684_30708[(1)] = (4));

} else {
var statearr_30685_30710 = state_30677__$1;
(statearr_30685_30710[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30678 === (3))){
var inst_30675 = (state_30677[(2)]);
var state_30677__$1 = state_30677;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30677__$1,inst_30675);
} else {
if((state_val_30678 === (4))){
var inst_30660 = (state_30677[(10)]);
var inst_30665 = figwheel.client.file_reloading.reload_js_file.call(null,inst_30660);
var state_30677__$1 = state_30677;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30677__$1,(7),inst_30665);
} else {
if((state_val_30678 === (5))){
var inst_30671 = cljs.core.async.close_BANG_.call(null,out);
var state_30677__$1 = state_30677;
var statearr_30687_30712 = state_30677__$1;
(statearr_30687_30712[(2)] = inst_30671);

(statearr_30687_30712[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30678 === (6))){
var inst_30673 = (state_30677[(2)]);
var state_30677__$1 = state_30677;
var statearr_30688_30714 = state_30677__$1;
(statearr_30688_30714[(2)] = inst_30673);

(statearr_30688_30714[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30678 === (7))){
var inst_30661 = (state_30677[(11)]);
var inst_30667 = (state_30677[(2)]);
var inst_30668 = cljs.core.async.put_BANG_.call(null,out,inst_30667);
var inst_30654 = inst_30661;
var state_30677__$1 = (function (){var statearr_30689 = state_30677;
(statearr_30689[(12)] = inst_30668);

(statearr_30689[(9)] = inst_30654);

return statearr_30689;
})();
var statearr_30690_30716 = state_30677__$1;
(statearr_30690_30716[(2)] = null);

(statearr_30690_30716[(1)] = (2));


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
});})(c__24836__auto___30702,out))
;
return ((function (switch__24601__auto__,c__24836__auto___30702,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24602__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24602__auto____0 = (function (){
var statearr_30696 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30696[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24602__auto__);

(statearr_30696[(1)] = (1));

return statearr_30696;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24602__auto____1 = (function (state_30677){
while(true){
var ret_value__24603__auto__ = (function (){try{while(true){
var result__24604__auto__ = switch__24601__auto__.call(null,state_30677);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24604__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24604__auto__;
}
break;
}
}catch (e30697){if((e30697 instanceof Object)){
var ex__24605__auto__ = e30697;
var statearr_30698_30719 = state_30677;
(statearr_30698_30719[(5)] = ex__24605__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30677);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30697;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24603__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30721 = state_30677;
state_30677 = G__30721;
continue;
} else {
return ret_value__24603__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24602__auto__ = function(state_30677){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24602__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24602__auto____1.call(this,state_30677);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24602__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24602__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24602__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24602__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24602__auto__;
})()
;})(switch__24601__auto__,c__24836__auto___30702,out))
})();
var state__24838__auto__ = (function (){var statearr_30700 = f__24837__auto__.call(null);
(statearr_30700[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24836__auto___30702);

return statearr_30700;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24838__auto__);
});})(c__24836__auto___30702,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__30723,opts){
var map__30732 = p__30723;
var map__30732__$1 = ((((!((map__30732 == null)))?((((map__30732.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30732.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30732):map__30732);
var eval_body = cljs.core.get.call(null,map__30732__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__30732__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__20663__auto__ = eval_body;
if(cljs.core.truth_(and__20663__auto__)){
return typeof eval_body === 'string';
} else {
return and__20663__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Evaling file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e30738){var e = e30738;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Unable to evaluate "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__6751__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__30743_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__30743_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__30766){
var vec__30767 = p__30766;
var k = cljs.core.nth.call(null,vec__30767,(0),null);
var v = cljs.core.nth.call(null,vec__30767,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__30770){
var vec__30771 = p__30770;
var k = cljs.core.nth.call(null,vec__30771,(0),null);
var v = cljs.core.nth.call(null,vec__30771,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__30785,p__30786){
var map__31074 = p__30785;
var map__31074__$1 = ((((!((map__31074 == null)))?((((map__31074.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31074.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31074):map__31074);
var opts = map__31074__$1;
var before_jsload = cljs.core.get.call(null,map__31074__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__31074__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__31074__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__31075 = p__30786;
var map__31075__$1 = ((((!((map__31075 == null)))?((((map__31075.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31075.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31075):map__31075);
var msg = map__31075__$1;
var files = cljs.core.get.call(null,map__31075__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__31075__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__31075__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__24836__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24836__auto__,map__31074,map__31074__$1,opts,before_jsload,on_jsload,reload_dependents,map__31075,map__31075__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__24837__auto__ = (function (){var switch__24601__auto__ = ((function (c__24836__auto__,map__31074,map__31074__$1,opts,before_jsload,on_jsload,reload_dependents,map__31075,map__31075__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_31234){
var state_val_31235 = (state_31234[(1)]);
if((state_val_31235 === (7))){
var inst_31091 = (state_31234[(7)]);
var inst_31092 = (state_31234[(8)]);
var inst_31093 = (state_31234[(9)]);
var inst_31090 = (state_31234[(10)]);
var inst_31098 = cljs.core._nth.call(null,inst_31091,inst_31093);
var inst_31099 = figwheel.client.file_reloading.eval_body.call(null,inst_31098,opts);
var inst_31100 = (inst_31093 + (1));
var tmp31236 = inst_31091;
var tmp31237 = inst_31092;
var tmp31238 = inst_31090;
var inst_31090__$1 = tmp31238;
var inst_31091__$1 = tmp31236;
var inst_31092__$1 = tmp31237;
var inst_31093__$1 = inst_31100;
var state_31234__$1 = (function (){var statearr_31242 = state_31234;
(statearr_31242[(7)] = inst_31091__$1);

(statearr_31242[(8)] = inst_31092__$1);

(statearr_31242[(9)] = inst_31093__$1);

(statearr_31242[(11)] = inst_31099);

(statearr_31242[(10)] = inst_31090__$1);

return statearr_31242;
})();
var statearr_31243_31363 = state_31234__$1;
(statearr_31243_31363[(2)] = null);

(statearr_31243_31363[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31235 === (20))){
var inst_31133 = (state_31234[(12)]);
var inst_31141 = figwheel.client.file_reloading.sort_files.call(null,inst_31133);
var state_31234__$1 = state_31234;
var statearr_31246_31365 = state_31234__$1;
(statearr_31246_31365[(2)] = inst_31141);

(statearr_31246_31365[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31235 === (27))){
var state_31234__$1 = state_31234;
var statearr_31247_31367 = state_31234__$1;
(statearr_31247_31367[(2)] = null);

(statearr_31247_31367[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31235 === (1))){
var inst_31082 = (state_31234[(13)]);
var inst_31079 = before_jsload.call(null,files);
var inst_31080 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_31081 = (function (){return ((function (inst_31082,inst_31079,inst_31080,state_val_31235,c__24836__auto__,map__31074,map__31074__$1,opts,before_jsload,on_jsload,reload_dependents,map__31075,map__31075__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30781_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__30781_SHARP_);
});
;})(inst_31082,inst_31079,inst_31080,state_val_31235,c__24836__auto__,map__31074,map__31074__$1,opts,before_jsload,on_jsload,reload_dependents,map__31075,map__31075__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31082__$1 = cljs.core.filter.call(null,inst_31081,files);
var inst_31083 = cljs.core.not_empty.call(null,inst_31082__$1);
var state_31234__$1 = (function (){var statearr_31249 = state_31234;
(statearr_31249[(14)] = inst_31079);

(statearr_31249[(13)] = inst_31082__$1);

(statearr_31249[(15)] = inst_31080);

return statearr_31249;
})();
if(cljs.core.truth_(inst_31083)){
var statearr_31250_31372 = state_31234__$1;
(statearr_31250_31372[(1)] = (2));

} else {
var statearr_31252_31374 = state_31234__$1;
(statearr_31252_31374[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31235 === (24))){
var state_31234__$1 = state_31234;
var statearr_31253_31375 = state_31234__$1;
(statearr_31253_31375[(2)] = null);

(statearr_31253_31375[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31235 === (39))){
var inst_31184 = (state_31234[(16)]);
var state_31234__$1 = state_31234;
var statearr_31254_31377 = state_31234__$1;
(statearr_31254_31377[(2)] = inst_31184);

(statearr_31254_31377[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31235 === (46))){
var inst_31226 = (state_31234[(2)]);
var state_31234__$1 = state_31234;
var statearr_31256_31379 = state_31234__$1;
(statearr_31256_31379[(2)] = inst_31226);

(statearr_31256_31379[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31235 === (4))){
var inst_31127 = (state_31234[(2)]);
var inst_31128 = cljs.core.List.EMPTY;
var inst_31129 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_31128);
var inst_31130 = (function (){return ((function (inst_31127,inst_31128,inst_31129,state_val_31235,c__24836__auto__,map__31074,map__31074__$1,opts,before_jsload,on_jsload,reload_dependents,map__31075,map__31075__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30782_SHARP_){
var and__20663__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__30782_SHARP_);
if(cljs.core.truth_(and__20663__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__30782_SHARP_));
} else {
return and__20663__auto__;
}
});
;})(inst_31127,inst_31128,inst_31129,state_val_31235,c__24836__auto__,map__31074,map__31074__$1,opts,before_jsload,on_jsload,reload_dependents,map__31075,map__31075__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31131 = cljs.core.filter.call(null,inst_31130,files);
var inst_31132 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_31133 = cljs.core.concat.call(null,inst_31131,inst_31132);
var state_31234__$1 = (function (){var statearr_31258 = state_31234;
(statearr_31258[(12)] = inst_31133);

(statearr_31258[(17)] = inst_31129);

(statearr_31258[(18)] = inst_31127);

return statearr_31258;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_31259_31388 = state_31234__$1;
(statearr_31259_31388[(1)] = (16));

} else {
var statearr_31260_31390 = state_31234__$1;
(statearr_31260_31390[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31235 === (15))){
var inst_31117 = (state_31234[(2)]);
var state_31234__$1 = state_31234;
var statearr_31262_31392 = state_31234__$1;
(statearr_31262_31392[(2)] = inst_31117);

(statearr_31262_31392[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31235 === (21))){
var inst_31143 = (state_31234[(19)]);
var inst_31143__$1 = (state_31234[(2)]);
var inst_31144 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_31143__$1);
var state_31234__$1 = (function (){var statearr_31263 = state_31234;
(statearr_31263[(19)] = inst_31143__$1);

return statearr_31263;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31234__$1,(22),inst_31144);
} else {
if((state_val_31235 === (31))){
var inst_31229 = (state_31234[(2)]);
var state_31234__$1 = state_31234;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31234__$1,inst_31229);
} else {
if((state_val_31235 === (32))){
var inst_31184 = (state_31234[(16)]);
var inst_31189 = inst_31184.cljs$lang$protocol_mask$partition0$;
var inst_31190 = (inst_31189 & (64));
var inst_31191 = inst_31184.cljs$core$ISeq$;
var inst_31192 = (cljs.core.PROTOCOL_SENTINEL === inst_31191);
var inst_31193 = (inst_31190) || (inst_31192);
var state_31234__$1 = state_31234;
if(cljs.core.truth_(inst_31193)){
var statearr_31265_31401 = state_31234__$1;
(statearr_31265_31401[(1)] = (35));

} else {
var statearr_31266_31402 = state_31234__$1;
(statearr_31266_31402[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31235 === (40))){
var inst_31206 = (state_31234[(20)]);
var inst_31205 = (state_31234[(2)]);
var inst_31206__$1 = cljs.core.get.call(null,inst_31205,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_31207 = cljs.core.get.call(null,inst_31205,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_31208 = cljs.core.not_empty.call(null,inst_31206__$1);
var state_31234__$1 = (function (){var statearr_31268 = state_31234;
(statearr_31268[(21)] = inst_31207);

(statearr_31268[(20)] = inst_31206__$1);

return statearr_31268;
})();
if(cljs.core.truth_(inst_31208)){
var statearr_31269_31407 = state_31234__$1;
(statearr_31269_31407[(1)] = (41));

} else {
var statearr_31270_31408 = state_31234__$1;
(statearr_31270_31408[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31235 === (33))){
var state_31234__$1 = state_31234;
var statearr_31271_31410 = state_31234__$1;
(statearr_31271_31410[(2)] = false);

(statearr_31271_31410[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31235 === (13))){
var inst_31103 = (state_31234[(22)]);
var inst_31107 = cljs.core.chunk_first.call(null,inst_31103);
var inst_31108 = cljs.core.chunk_rest.call(null,inst_31103);
var inst_31109 = cljs.core.count.call(null,inst_31107);
var inst_31090 = inst_31108;
var inst_31091 = inst_31107;
var inst_31092 = inst_31109;
var inst_31093 = (0);
var state_31234__$1 = (function (){var statearr_31274 = state_31234;
(statearr_31274[(7)] = inst_31091);

(statearr_31274[(8)] = inst_31092);

(statearr_31274[(9)] = inst_31093);

(statearr_31274[(10)] = inst_31090);

return statearr_31274;
})();
var statearr_31275_31418 = state_31234__$1;
(statearr_31275_31418[(2)] = null);

(statearr_31275_31418[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31235 === (22))){
var inst_31143 = (state_31234[(19)]);
var inst_31147 = (state_31234[(23)]);
var inst_31146 = (state_31234[(24)]);
var inst_31152 = (state_31234[(25)]);
var inst_31146__$1 = (state_31234[(2)]);
var inst_31147__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_31146__$1);
var inst_31149 = (function (){var all_files = inst_31143;
var res_SINGLEQUOTE_ = inst_31146__$1;
var res = inst_31147__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_31143,inst_31147,inst_31146,inst_31152,inst_31146__$1,inst_31147__$1,state_val_31235,c__24836__auto__,map__31074,map__31074__$1,opts,before_jsload,on_jsload,reload_dependents,map__31075,map__31075__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30784_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__30784_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_31143,inst_31147,inst_31146,inst_31152,inst_31146__$1,inst_31147__$1,state_val_31235,c__24836__auto__,map__31074,map__31074__$1,opts,before_jsload,on_jsload,reload_dependents,map__31075,map__31075__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31150 = cljs.core.filter.call(null,inst_31149,inst_31146__$1);
var inst_31151 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_31152__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_31151);
var inst_31153 = cljs.core.not_empty.call(null,inst_31152__$1);
var state_31234__$1 = (function (){var statearr_31277 = state_31234;
(statearr_31277[(23)] = inst_31147__$1);

(statearr_31277[(24)] = inst_31146__$1);

(statearr_31277[(25)] = inst_31152__$1);

(statearr_31277[(26)] = inst_31150);

return statearr_31277;
})();
if(cljs.core.truth_(inst_31153)){
var statearr_31278_31441 = state_31234__$1;
(statearr_31278_31441[(1)] = (23));

} else {
var statearr_31279_31442 = state_31234__$1;
(statearr_31279_31442[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31235 === (36))){
var state_31234__$1 = state_31234;
var statearr_31281_31444 = state_31234__$1;
(statearr_31281_31444[(2)] = false);

(statearr_31281_31444[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31235 === (41))){
var inst_31206 = (state_31234[(20)]);
var inst_31210 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_31211 = cljs.core.map.call(null,inst_31210,inst_31206);
var inst_31212 = cljs.core.pr_str.call(null,inst_31211);
var inst_31213 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("figwheel-no-load meta-data: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_31212)].join('');
var inst_31214 = figwheel.client.utils.log.call(null,inst_31213);
var state_31234__$1 = state_31234;
var statearr_31282_31454 = state_31234__$1;
(statearr_31282_31454[(2)] = inst_31214);

(statearr_31282_31454[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31235 === (43))){
var inst_31207 = (state_31234[(21)]);
var inst_31217 = (state_31234[(2)]);
var inst_31218 = cljs.core.not_empty.call(null,inst_31207);
var state_31234__$1 = (function (){var statearr_31283 = state_31234;
(statearr_31283[(27)] = inst_31217);

return statearr_31283;
})();
if(cljs.core.truth_(inst_31218)){
var statearr_31284_31460 = state_31234__$1;
(statearr_31284_31460[(1)] = (44));

} else {
var statearr_31285_31461 = state_31234__$1;
(statearr_31285_31461[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31235 === (29))){
var inst_31143 = (state_31234[(19)]);
var inst_31147 = (state_31234[(23)]);
var inst_31184 = (state_31234[(16)]);
var inst_31146 = (state_31234[(24)]);
var inst_31152 = (state_31234[(25)]);
var inst_31150 = (state_31234[(26)]);
var inst_31180 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_31183 = (function (){var all_files = inst_31143;
var res_SINGLEQUOTE_ = inst_31146;
var res = inst_31147;
var files_not_loaded = inst_31150;
var dependencies_that_loaded = inst_31152;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31143,inst_31147,inst_31184,inst_31146,inst_31152,inst_31150,inst_31180,state_val_31235,c__24836__auto__,map__31074,map__31074__$1,opts,before_jsload,on_jsload,reload_dependents,map__31075,map__31075__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__31182){
var map__31287 = p__31182;
var map__31287__$1 = ((((!((map__31287 == null)))?((((map__31287.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31287.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31287):map__31287);
var namespace = cljs.core.get.call(null,map__31287__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31143,inst_31147,inst_31184,inst_31146,inst_31152,inst_31150,inst_31180,state_val_31235,c__24836__auto__,map__31074,map__31074__$1,opts,before_jsload,on_jsload,reload_dependents,map__31075,map__31075__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31184__$1 = cljs.core.group_by.call(null,inst_31183,inst_31150);
var inst_31186 = (inst_31184__$1 == null);
var inst_31187 = cljs.core.not.call(null,inst_31186);
var state_31234__$1 = (function (){var statearr_31289 = state_31234;
(statearr_31289[(16)] = inst_31184__$1);

(statearr_31289[(28)] = inst_31180);

return statearr_31289;
})();
if(inst_31187){
var statearr_31290_31489 = state_31234__$1;
(statearr_31290_31489[(1)] = (32));

} else {
var statearr_31292_31490 = state_31234__$1;
(statearr_31292_31490[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31235 === (44))){
var inst_31207 = (state_31234[(21)]);
var inst_31220 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_31207);
var inst_31221 = cljs.core.pr_str.call(null,inst_31220);
var inst_31222 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("not required: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_31221)].join('');
var inst_31223 = figwheel.client.utils.log.call(null,inst_31222);
var state_31234__$1 = state_31234;
var statearr_31293_31491 = state_31234__$1;
(statearr_31293_31491[(2)] = inst_31223);

(statearr_31293_31491[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31235 === (6))){
var inst_31124 = (state_31234[(2)]);
var state_31234__$1 = state_31234;
var statearr_31294_31495 = state_31234__$1;
(statearr_31294_31495[(2)] = inst_31124);

(statearr_31294_31495[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31235 === (28))){
var inst_31150 = (state_31234[(26)]);
var inst_31177 = (state_31234[(2)]);
var inst_31178 = cljs.core.not_empty.call(null,inst_31150);
var state_31234__$1 = (function (){var statearr_31295 = state_31234;
(statearr_31295[(29)] = inst_31177);

return statearr_31295;
})();
if(cljs.core.truth_(inst_31178)){
var statearr_31297_31497 = state_31234__$1;
(statearr_31297_31497[(1)] = (29));

} else {
var statearr_31298_31499 = state_31234__$1;
(statearr_31298_31499[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31235 === (25))){
var inst_31147 = (state_31234[(23)]);
var inst_31164 = (state_31234[(2)]);
var inst_31165 = cljs.core.not_empty.call(null,inst_31147);
var state_31234__$1 = (function (){var statearr_31299 = state_31234;
(statearr_31299[(30)] = inst_31164);

return statearr_31299;
})();
if(cljs.core.truth_(inst_31165)){
var statearr_31300_31501 = state_31234__$1;
(statearr_31300_31501[(1)] = (26));

} else {
var statearr_31301_31502 = state_31234__$1;
(statearr_31301_31502[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31235 === (34))){
var inst_31200 = (state_31234[(2)]);
var state_31234__$1 = state_31234;
if(cljs.core.truth_(inst_31200)){
var statearr_31302_31503 = state_31234__$1;
(statearr_31302_31503[(1)] = (38));

} else {
var statearr_31304_31504 = state_31234__$1;
(statearr_31304_31504[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31235 === (17))){
var state_31234__$1 = state_31234;
var statearr_31305_31506 = state_31234__$1;
(statearr_31305_31506[(2)] = recompile_dependents);

(statearr_31305_31506[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31235 === (3))){
var state_31234__$1 = state_31234;
var statearr_31306_31509 = state_31234__$1;
(statearr_31306_31509[(2)] = null);

(statearr_31306_31509[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31235 === (12))){
var inst_31120 = (state_31234[(2)]);
var state_31234__$1 = state_31234;
var statearr_31308_31512 = state_31234__$1;
(statearr_31308_31512[(2)] = inst_31120);

(statearr_31308_31512[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31235 === (2))){
var inst_31082 = (state_31234[(13)]);
var inst_31089 = cljs.core.seq.call(null,inst_31082);
var inst_31090 = inst_31089;
var inst_31091 = null;
var inst_31092 = (0);
var inst_31093 = (0);
var state_31234__$1 = (function (){var statearr_31309 = state_31234;
(statearr_31309[(7)] = inst_31091);

(statearr_31309[(8)] = inst_31092);

(statearr_31309[(9)] = inst_31093);

(statearr_31309[(10)] = inst_31090);

return statearr_31309;
})();
var statearr_31310_31523 = state_31234__$1;
(statearr_31310_31523[(2)] = null);

(statearr_31310_31523[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31235 === (23))){
var inst_31143 = (state_31234[(19)]);
var inst_31147 = (state_31234[(23)]);
var inst_31146 = (state_31234[(24)]);
var inst_31152 = (state_31234[(25)]);
var inst_31150 = (state_31234[(26)]);
var inst_31155 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_31157 = (function (){var all_files = inst_31143;
var res_SINGLEQUOTE_ = inst_31146;
var res = inst_31147;
var files_not_loaded = inst_31150;
var dependencies_that_loaded = inst_31152;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31143,inst_31147,inst_31146,inst_31152,inst_31150,inst_31155,state_val_31235,c__24836__auto__,map__31074,map__31074__$1,opts,before_jsload,on_jsload,reload_dependents,map__31075,map__31075__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__31156){
var map__31312 = p__31156;
var map__31312__$1 = ((((!((map__31312 == null)))?((((map__31312.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31312.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31312):map__31312);
var request_url = cljs.core.get.call(null,map__31312__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31143,inst_31147,inst_31146,inst_31152,inst_31150,inst_31155,state_val_31235,c__24836__auto__,map__31074,map__31074__$1,opts,before_jsload,on_jsload,reload_dependents,map__31075,map__31075__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31158 = cljs.core.reverse.call(null,inst_31152);
var inst_31159 = cljs.core.map.call(null,inst_31157,inst_31158);
var inst_31160 = cljs.core.pr_str.call(null,inst_31159);
var inst_31161 = figwheel.client.utils.log.call(null,inst_31160);
var state_31234__$1 = (function (){var statearr_31315 = state_31234;
(statearr_31315[(31)] = inst_31155);

return statearr_31315;
})();
var statearr_31316_31546 = state_31234__$1;
(statearr_31316_31546[(2)] = inst_31161);

(statearr_31316_31546[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31235 === (35))){
var state_31234__$1 = state_31234;
var statearr_31317_31548 = state_31234__$1;
(statearr_31317_31548[(2)] = true);

(statearr_31317_31548[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31235 === (19))){
var inst_31133 = (state_31234[(12)]);
var inst_31139 = figwheel.client.file_reloading.expand_files.call(null,inst_31133);
var state_31234__$1 = state_31234;
var statearr_31318_31551 = state_31234__$1;
(statearr_31318_31551[(2)] = inst_31139);

(statearr_31318_31551[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31235 === (11))){
var state_31234__$1 = state_31234;
var statearr_31320_31554 = state_31234__$1;
(statearr_31320_31554[(2)] = null);

(statearr_31320_31554[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31235 === (9))){
var inst_31122 = (state_31234[(2)]);
var state_31234__$1 = state_31234;
var statearr_31321_31557 = state_31234__$1;
(statearr_31321_31557[(2)] = inst_31122);

(statearr_31321_31557[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31235 === (5))){
var inst_31092 = (state_31234[(8)]);
var inst_31093 = (state_31234[(9)]);
var inst_31095 = (inst_31093 < inst_31092);
var inst_31096 = inst_31095;
var state_31234__$1 = state_31234;
if(cljs.core.truth_(inst_31096)){
var statearr_31322_31560 = state_31234__$1;
(statearr_31322_31560[(1)] = (7));

} else {
var statearr_31323_31561 = state_31234__$1;
(statearr_31323_31561[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31235 === (14))){
var inst_31103 = (state_31234[(22)]);
var inst_31112 = cljs.core.first.call(null,inst_31103);
var inst_31113 = figwheel.client.file_reloading.eval_body.call(null,inst_31112,opts);
var inst_31114 = cljs.core.next.call(null,inst_31103);
var inst_31090 = inst_31114;
var inst_31091 = null;
var inst_31092 = (0);
var inst_31093 = (0);
var state_31234__$1 = (function (){var statearr_31324 = state_31234;
(statearr_31324[(7)] = inst_31091);

(statearr_31324[(8)] = inst_31092);

(statearr_31324[(9)] = inst_31093);

(statearr_31324[(10)] = inst_31090);

(statearr_31324[(32)] = inst_31113);

return statearr_31324;
})();
var statearr_31325_31566 = state_31234__$1;
(statearr_31325_31566[(2)] = null);

(statearr_31325_31566[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31235 === (45))){
var state_31234__$1 = state_31234;
var statearr_31327_31567 = state_31234__$1;
(statearr_31327_31567[(2)] = null);

(statearr_31327_31567[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31235 === (26))){
var inst_31143 = (state_31234[(19)]);
var inst_31147 = (state_31234[(23)]);
var inst_31146 = (state_31234[(24)]);
var inst_31152 = (state_31234[(25)]);
var inst_31150 = (state_31234[(26)]);
var inst_31167 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_31169 = (function (){var all_files = inst_31143;
var res_SINGLEQUOTE_ = inst_31146;
var res = inst_31147;
var files_not_loaded = inst_31150;
var dependencies_that_loaded = inst_31152;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31143,inst_31147,inst_31146,inst_31152,inst_31150,inst_31167,state_val_31235,c__24836__auto__,map__31074,map__31074__$1,opts,before_jsload,on_jsload,reload_dependents,map__31075,map__31075__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__31168){
var map__31328 = p__31168;
var map__31328__$1 = ((((!((map__31328 == null)))?((((map__31328.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31328.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31328):map__31328);
var namespace = cljs.core.get.call(null,map__31328__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__31328__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31143,inst_31147,inst_31146,inst_31152,inst_31150,inst_31167,state_val_31235,c__24836__auto__,map__31074,map__31074__$1,opts,before_jsload,on_jsload,reload_dependents,map__31075,map__31075__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31170 = cljs.core.map.call(null,inst_31169,inst_31147);
var inst_31171 = cljs.core.pr_str.call(null,inst_31170);
var inst_31172 = figwheel.client.utils.log.call(null,inst_31171);
var inst_31173 = (function (){var all_files = inst_31143;
var res_SINGLEQUOTE_ = inst_31146;
var res = inst_31147;
var files_not_loaded = inst_31150;
var dependencies_that_loaded = inst_31152;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31143,inst_31147,inst_31146,inst_31152,inst_31150,inst_31167,inst_31169,inst_31170,inst_31171,inst_31172,state_val_31235,c__24836__auto__,map__31074,map__31074__$1,opts,before_jsload,on_jsload,reload_dependents,map__31075,map__31075__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31143,inst_31147,inst_31146,inst_31152,inst_31150,inst_31167,inst_31169,inst_31170,inst_31171,inst_31172,state_val_31235,c__24836__auto__,map__31074,map__31074__$1,opts,before_jsload,on_jsload,reload_dependents,map__31075,map__31075__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31174 = setTimeout(inst_31173,(10));
var state_31234__$1 = (function (){var statearr_31331 = state_31234;
(statearr_31331[(33)] = inst_31172);

(statearr_31331[(34)] = inst_31167);

return statearr_31331;
})();
var statearr_31332_31599 = state_31234__$1;
(statearr_31332_31599[(2)] = inst_31174);

(statearr_31332_31599[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31235 === (16))){
var state_31234__$1 = state_31234;
var statearr_31333_31604 = state_31234__$1;
(statearr_31333_31604[(2)] = reload_dependents);

(statearr_31333_31604[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31235 === (38))){
var inst_31184 = (state_31234[(16)]);
var inst_31202 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31184);
var state_31234__$1 = state_31234;
var statearr_31334_31612 = state_31234__$1;
(statearr_31334_31612[(2)] = inst_31202);

(statearr_31334_31612[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31235 === (30))){
var state_31234__$1 = state_31234;
var statearr_31335_31613 = state_31234__$1;
(statearr_31335_31613[(2)] = null);

(statearr_31335_31613[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31235 === (10))){
var inst_31103 = (state_31234[(22)]);
var inst_31105 = cljs.core.chunked_seq_QMARK_.call(null,inst_31103);
var state_31234__$1 = state_31234;
if(inst_31105){
var statearr_31337_31614 = state_31234__$1;
(statearr_31337_31614[(1)] = (13));

} else {
var statearr_31338_31617 = state_31234__$1;
(statearr_31338_31617[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31235 === (18))){
var inst_31137 = (state_31234[(2)]);
var state_31234__$1 = state_31234;
if(cljs.core.truth_(inst_31137)){
var statearr_31339_31622 = state_31234__$1;
(statearr_31339_31622[(1)] = (19));

} else {
var statearr_31340_31623 = state_31234__$1;
(statearr_31340_31623[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31235 === (42))){
var state_31234__$1 = state_31234;
var statearr_31341_31624 = state_31234__$1;
(statearr_31341_31624[(2)] = null);

(statearr_31341_31624[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31235 === (37))){
var inst_31197 = (state_31234[(2)]);
var state_31234__$1 = state_31234;
var statearr_31342_31625 = state_31234__$1;
(statearr_31342_31625[(2)] = inst_31197);

(statearr_31342_31625[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31235 === (8))){
var inst_31103 = (state_31234[(22)]);
var inst_31090 = (state_31234[(10)]);
var inst_31103__$1 = cljs.core.seq.call(null,inst_31090);
var state_31234__$1 = (function (){var statearr_31343 = state_31234;
(statearr_31343[(22)] = inst_31103__$1);

return statearr_31343;
})();
if(inst_31103__$1){
var statearr_31344_31628 = state_31234__$1;
(statearr_31344_31628[(1)] = (10));

} else {
var statearr_31345_31629 = state_31234__$1;
(statearr_31345_31629[(1)] = (11));

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
});})(c__24836__auto__,map__31074,map__31074__$1,opts,before_jsload,on_jsload,reload_dependents,map__31075,map__31075__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__24601__auto__,c__24836__auto__,map__31074,map__31074__$1,opts,before_jsload,on_jsload,reload_dependents,map__31075,map__31075__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24602__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24602__auto____0 = (function (){
var statearr_31350 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31350[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__24602__auto__);

(statearr_31350[(1)] = (1));

return statearr_31350;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24602__auto____1 = (function (state_31234){
while(true){
var ret_value__24603__auto__ = (function (){try{while(true){
var result__24604__auto__ = switch__24601__auto__.call(null,state_31234);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24604__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24604__auto__;
}
break;
}
}catch (e31352){if((e31352 instanceof Object)){
var ex__24605__auto__ = e31352;
var statearr_31353_31641 = state_31234;
(statearr_31353_31641[(5)] = ex__24605__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31234);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31352;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24603__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31652 = state_31234;
state_31234 = G__31652;
continue;
} else {
return ret_value__24603__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__24602__auto__ = function(state_31234){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24602__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24602__auto____1.call(this,state_31234);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__24602__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__24602__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__24602__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__24602__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24602__auto__;
})()
;})(switch__24601__auto__,c__24836__auto__,map__31074,map__31074__$1,opts,before_jsload,on_jsload,reload_dependents,map__31075,map__31075__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__24838__auto__ = (function (){var statearr_31354 = f__24837__auto__.call(null);
(statearr_31354[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24836__auto__);

return statearr_31354;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24838__auto__);
});})(c__24836__auto__,map__31074,map__31074__$1,opts,before_jsload,on_jsload,reload_dependents,map__31075,map__31075__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__24836__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),cljs.core.str.cljs$core$IFn$_invoke$arity$1("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__31693,link){
var map__31702 = p__31693;
var map__31702__$1 = ((((!((map__31702 == null)))?((((map__31702.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31702.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31702):map__31702);
var file = cljs.core.get.call(null,map__31702__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__6753__auto__ = link.href;
if(cljs.core.truth_(temp__6753__auto__)){
var link_href = temp__6753__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__6753__auto__,map__31702,map__31702__$1,file){
return (function (p1__31685_SHARP_,p2__31686_SHARP_){
if(cljs.core._EQ_.call(null,p1__31685_SHARP_,p2__31686_SHARP_)){
return p1__31685_SHARP_;
} else {
return false;
}
});})(link_href,temp__6753__auto__,map__31702,map__31702__$1,file))
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
var temp__6753__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__31790){
var map__31791 = p__31790;
var map__31791__$1 = ((((!((map__31791 == null)))?((((map__31791.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31791.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31791):map__31791);
var match_length = cljs.core.get.call(null,map__31791__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__31791__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__31773_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__31773_SHARP_);
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
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args31809 = [];
var len__21896__auto___31817 = arguments.length;
var i__21897__auto___31818 = (0);
while(true){
if((i__21897__auto___31818 < len__21896__auto___31817)){
args31809.push((arguments[i__21897__auto___31818]));

var G__31819 = (i__21897__auto___31818 + (1));
i__21897__auto___31818 = G__31819;
continue;
} else {
}
break;
}

var G__31814 = args31809.length;
switch (G__31814) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args31809.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__31823_SHARP_,p2__31824_SHARP_){
return cljs.core.assoc.call(null,p1__31823_SHARP_,cljs.core.get.call(null,p2__31824_SHARP_,key),p2__31824_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__31827){
var map__31832 = p__31827;
var map__31832__$1 = ((((!((map__31832 == null)))?((((map__31832.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31832.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31832):map__31832);
var f_data = map__31832__$1;
var file = cljs.core.get.call(null,map__31832__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__6753__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__6753__auto__)){
var link = temp__6753__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__31836,files_msg){
var map__31845 = p__31836;
var map__31845__$1 = ((((!((map__31845 == null)))?((((map__31845.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31845.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31845):map__31845);
var opts = map__31845__$1;
var on_cssload = cljs.core.get.call(null,map__31845__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__31847_31855 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__31848_31856 = null;
var count__31849_31857 = (0);
var i__31850_31858 = (0);
while(true){
if((i__31850_31858 < count__31849_31857)){
var f_31859 = cljs.core._nth.call(null,chunk__31848_31856,i__31850_31858);
figwheel.client.file_reloading.reload_css_file.call(null,f_31859);

var G__31860 = seq__31847_31855;
var G__31861 = chunk__31848_31856;
var G__31862 = count__31849_31857;
var G__31863 = (i__31850_31858 + (1));
seq__31847_31855 = G__31860;
chunk__31848_31856 = G__31861;
count__31849_31857 = G__31862;
i__31850_31858 = G__31863;
continue;
} else {
var temp__6753__auto___31864 = cljs.core.seq.call(null,seq__31847_31855);
if(temp__6753__auto___31864){
var seq__31847_31865__$1 = temp__6753__auto___31864;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31847_31865__$1)){
var c__21586__auto___31866 = cljs.core.chunk_first.call(null,seq__31847_31865__$1);
var G__31867 = cljs.core.chunk_rest.call(null,seq__31847_31865__$1);
var G__31868 = c__21586__auto___31866;
var G__31869 = cljs.core.count.call(null,c__21586__auto___31866);
var G__31870 = (0);
seq__31847_31855 = G__31867;
chunk__31848_31856 = G__31868;
count__31849_31857 = G__31869;
i__31850_31858 = G__31870;
continue;
} else {
var f_31875 = cljs.core.first.call(null,seq__31847_31865__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_31875);

var G__31877 = cljs.core.next.call(null,seq__31847_31865__$1);
var G__31878 = null;
var G__31879 = (0);
var G__31880 = (0);
seq__31847_31855 = G__31877;
chunk__31848_31856 = G__31878;
count__31849_31857 = G__31879;
i__31850_31858 = G__31880;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__31845,map__31845__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__31845,map__31845__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map