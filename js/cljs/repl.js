// Compiled by ClojureScript 1.9.521 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__54517){
var map__54569 = p__54517;
var map__54569__$1 = ((((!((map__54569 == null)))?((((map__54569.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54569.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54569):map__54569);
var m = map__54569__$1;
var n = cljs.core.get.call(null,map__54569__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__54569__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__6753__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__6753__auto__)){
var ns = temp__6753__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/")].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__54573_54638 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__54574_54639 = null;
var count__54575_54640 = (0);
var i__54576_54641 = (0);
while(true){
if((i__54576_54641 < count__54575_54640)){
var f_54644 = cljs.core._nth.call(null,chunk__54574_54639,i__54576_54641);
cljs.core.println.call(null,"  ",f_54644);

var G__54645 = seq__54573_54638;
var G__54646 = chunk__54574_54639;
var G__54647 = count__54575_54640;
var G__54648 = (i__54576_54641 + (1));
seq__54573_54638 = G__54645;
chunk__54574_54639 = G__54646;
count__54575_54640 = G__54647;
i__54576_54641 = G__54648;
continue;
} else {
var temp__6753__auto___54649 = cljs.core.seq.call(null,seq__54573_54638);
if(temp__6753__auto___54649){
var seq__54573_54650__$1 = temp__6753__auto___54649;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54573_54650__$1)){
var c__28233__auto___54651 = cljs.core.chunk_first.call(null,seq__54573_54650__$1);
var G__54652 = cljs.core.chunk_rest.call(null,seq__54573_54650__$1);
var G__54653 = c__28233__auto___54651;
var G__54654 = cljs.core.count.call(null,c__28233__auto___54651);
var G__54655 = (0);
seq__54573_54638 = G__54652;
chunk__54574_54639 = G__54653;
count__54575_54640 = G__54654;
i__54576_54641 = G__54655;
continue;
} else {
var f_54657 = cljs.core.first.call(null,seq__54573_54650__$1);
cljs.core.println.call(null,"  ",f_54657);

var G__54659 = cljs.core.next.call(null,seq__54573_54650__$1);
var G__54660 = null;
var G__54661 = (0);
var G__54662 = (0);
seq__54573_54638 = G__54659;
chunk__54574_54639 = G__54660;
count__54575_54640 = G__54661;
i__54576_54641 = G__54662;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_54664 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__27322__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__27322__auto__)){
return or__27322__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_54664);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_54664)))?cljs.core.second.call(null,arglists_54664):arglists_54664));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n  Please see http://clojure.org/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n  Please see http://clojure.org/special_forms#"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__54586_54685 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__54587_54686 = null;
var count__54588_54687 = (0);
var i__54589_54688 = (0);
while(true){
if((i__54589_54688 < count__54588_54687)){
var vec__54590_54690 = cljs.core._nth.call(null,chunk__54587_54686,i__54589_54688);
var name_54691 = cljs.core.nth.call(null,vec__54590_54690,(0),null);
var map__54593_54692 = cljs.core.nth.call(null,vec__54590_54690,(1),null);
var map__54593_54693__$1 = ((((!((map__54593_54692 == null)))?((((map__54593_54692.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54593_54692.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54593_54692):map__54593_54692);
var doc_54694 = cljs.core.get.call(null,map__54593_54693__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_54695 = cljs.core.get.call(null,map__54593_54693__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_54691);

cljs.core.println.call(null," ",arglists_54695);

if(cljs.core.truth_(doc_54694)){
cljs.core.println.call(null," ",doc_54694);
} else {
}

var G__54705 = seq__54586_54685;
var G__54706 = chunk__54587_54686;
var G__54707 = count__54588_54687;
var G__54708 = (i__54589_54688 + (1));
seq__54586_54685 = G__54705;
chunk__54587_54686 = G__54706;
count__54588_54687 = G__54707;
i__54589_54688 = G__54708;
continue;
} else {
var temp__6753__auto___54715 = cljs.core.seq.call(null,seq__54586_54685);
if(temp__6753__auto___54715){
var seq__54586_54717__$1 = temp__6753__auto___54715;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54586_54717__$1)){
var c__28233__auto___54718 = cljs.core.chunk_first.call(null,seq__54586_54717__$1);
var G__54720 = cljs.core.chunk_rest.call(null,seq__54586_54717__$1);
var G__54721 = c__28233__auto___54718;
var G__54722 = cljs.core.count.call(null,c__28233__auto___54718);
var G__54723 = (0);
seq__54586_54685 = G__54720;
chunk__54587_54686 = G__54721;
count__54588_54687 = G__54722;
i__54589_54688 = G__54723;
continue;
} else {
var vec__54605_54724 = cljs.core.first.call(null,seq__54586_54717__$1);
var name_54725 = cljs.core.nth.call(null,vec__54605_54724,(0),null);
var map__54608_54726 = cljs.core.nth.call(null,vec__54605_54724,(1),null);
var map__54608_54727__$1 = ((((!((map__54608_54726 == null)))?((((map__54608_54726.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54608_54726.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54608_54726):map__54608_54726);
var doc_54728 = cljs.core.get.call(null,map__54608_54727__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_54729 = cljs.core.get.call(null,map__54608_54727__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_54725);

cljs.core.println.call(null," ",arglists_54729);

if(cljs.core.truth_(doc_54728)){
cljs.core.println.call(null," ",doc_54728);
} else {
}

var G__54777 = cljs.core.next.call(null,seq__54586_54717__$1);
var G__54778 = null;
var G__54779 = (0);
var G__54780 = (0);
seq__54586_54685 = G__54777;
chunk__54587_54686 = G__54778;
count__54588_54687 = G__54779;
i__54589_54688 = G__54780;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__6753__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__6753__auto__)){
var fnspec = temp__6753__auto__;
cljs.core.print.call(null,"Spec");

var seq__54613 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__54614 = null;
var count__54615 = (0);
var i__54616 = (0);
while(true){
if((i__54616 < count__54615)){
var role = cljs.core._nth.call(null,chunk__54614,i__54616);
var temp__6753__auto___54795__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6753__auto___54795__$1)){
var spec_54796 = temp__6753__auto___54795__$1;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.describe.call(null,spec_54796));
} else {
}

var G__54799 = seq__54613;
var G__54800 = chunk__54614;
var G__54801 = count__54615;
var G__54802 = (i__54616 + (1));
seq__54613 = G__54799;
chunk__54614 = G__54800;
count__54615 = G__54801;
i__54616 = G__54802;
continue;
} else {
var temp__6753__auto____$1 = cljs.core.seq.call(null,seq__54613);
if(temp__6753__auto____$1){
var seq__54613__$1 = temp__6753__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54613__$1)){
var c__28233__auto__ = cljs.core.chunk_first.call(null,seq__54613__$1);
var G__54803 = cljs.core.chunk_rest.call(null,seq__54613__$1);
var G__54804 = c__28233__auto__;
var G__54805 = cljs.core.count.call(null,c__28233__auto__);
var G__54806 = (0);
seq__54613 = G__54803;
chunk__54614 = G__54804;
count__54615 = G__54805;
i__54616 = G__54806;
continue;
} else {
var role = cljs.core.first.call(null,seq__54613__$1);
var temp__6753__auto___54809__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6753__auto___54809__$2)){
var spec_54810 = temp__6753__auto___54809__$2;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.describe.call(null,spec_54810));
} else {
}

var G__54812 = cljs.core.next.call(null,seq__54613__$1);
var G__54813 = null;
var G__54814 = (0);
var G__54815 = (0);
seq__54613 = G__54812;
chunk__54614 = G__54813;
count__54615 = G__54814;
i__54616 = G__54815;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1493584950794