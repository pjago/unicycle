// Compiled by ClojureScript 1.9.456 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__31578){
var map__31626 = p__31578;
var map__31626__$1 = ((((!((map__31626 == null)))?((((map__31626.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31626.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31626):map__31626);
var m = map__31626__$1;
var n = cljs.core.get.call(null,map__31626__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__31626__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__31632_31673 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31633_31674 = null;
var count__31634_31675 = (0);
var i__31635_31676 = (0);
while(true){
if((i__31635_31676 < count__31634_31675)){
var f_31677 = cljs.core._nth.call(null,chunk__31633_31674,i__31635_31676);
cljs.core.println.call(null,"  ",f_31677);

var G__31678 = seq__31632_31673;
var G__31679 = chunk__31633_31674;
var G__31680 = count__31634_31675;
var G__31681 = (i__31635_31676 + (1));
seq__31632_31673 = G__31678;
chunk__31633_31674 = G__31679;
count__31634_31675 = G__31680;
i__31635_31676 = G__31681;
continue;
} else {
var temp__6753__auto___31682 = cljs.core.seq.call(null,seq__31632_31673);
if(temp__6753__auto___31682){
var seq__31632_31683__$1 = temp__6753__auto___31682;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31632_31683__$1)){
var c__21586__auto___31684 = cljs.core.chunk_first.call(null,seq__31632_31683__$1);
var G__31687 = cljs.core.chunk_rest.call(null,seq__31632_31683__$1);
var G__31688 = c__21586__auto___31684;
var G__31689 = cljs.core.count.call(null,c__21586__auto___31684);
var G__31690 = (0);
seq__31632_31673 = G__31687;
chunk__31633_31674 = G__31688;
count__31634_31675 = G__31689;
i__31635_31676 = G__31690;
continue;
} else {
var f_31694 = cljs.core.first.call(null,seq__31632_31683__$1);
cljs.core.println.call(null,"  ",f_31694);

var G__31697 = cljs.core.next.call(null,seq__31632_31683__$1);
var G__31698 = null;
var G__31699 = (0);
var G__31700 = (0);
seq__31632_31673 = G__31697;
chunk__31633_31674 = G__31698;
count__31634_31675 = G__31699;
i__31635_31676 = G__31700;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_31701 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__20675__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__20675__auto__)){
return or__20675__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_31701);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_31701)))?cljs.core.second.call(null,arglists_31701):arglists_31701));
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
var seq__31644_31706 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31645_31707 = null;
var count__31646_31708 = (0);
var i__31647_31709 = (0);
while(true){
if((i__31647_31709 < count__31646_31708)){
var vec__31653_31710 = cljs.core._nth.call(null,chunk__31645_31707,i__31647_31709);
var name_31711 = cljs.core.nth.call(null,vec__31653_31710,(0),null);
var map__31656_31712 = cljs.core.nth.call(null,vec__31653_31710,(1),null);
var map__31656_31713__$1 = ((((!((map__31656_31712 == null)))?((((map__31656_31712.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31656_31712.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31656_31712):map__31656_31712);
var doc_31714 = cljs.core.get.call(null,map__31656_31713__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_31715 = cljs.core.get.call(null,map__31656_31713__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_31711);

cljs.core.println.call(null," ",arglists_31715);

if(cljs.core.truth_(doc_31714)){
cljs.core.println.call(null," ",doc_31714);
} else {
}

var G__31728 = seq__31644_31706;
var G__31729 = chunk__31645_31707;
var G__31730 = count__31646_31708;
var G__31731 = (i__31647_31709 + (1));
seq__31644_31706 = G__31728;
chunk__31645_31707 = G__31729;
count__31646_31708 = G__31730;
i__31647_31709 = G__31731;
continue;
} else {
var temp__6753__auto___31735 = cljs.core.seq.call(null,seq__31644_31706);
if(temp__6753__auto___31735){
var seq__31644_31736__$1 = temp__6753__auto___31735;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31644_31736__$1)){
var c__21586__auto___31737 = cljs.core.chunk_first.call(null,seq__31644_31736__$1);
var G__31741 = cljs.core.chunk_rest.call(null,seq__31644_31736__$1);
var G__31742 = c__21586__auto___31737;
var G__31743 = cljs.core.count.call(null,c__21586__auto___31737);
var G__31744 = (0);
seq__31644_31706 = G__31741;
chunk__31645_31707 = G__31742;
count__31646_31708 = G__31743;
i__31647_31709 = G__31744;
continue;
} else {
var vec__31660_31745 = cljs.core.first.call(null,seq__31644_31736__$1);
var name_31746 = cljs.core.nth.call(null,vec__31660_31745,(0),null);
var map__31663_31747 = cljs.core.nth.call(null,vec__31660_31745,(1),null);
var map__31663_31748__$1 = ((((!((map__31663_31747 == null)))?((((map__31663_31747.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31663_31747.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31663_31747):map__31663_31747);
var doc_31749 = cljs.core.get.call(null,map__31663_31748__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_31750 = cljs.core.get.call(null,map__31663_31748__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_31746);

cljs.core.println.call(null," ",arglists_31750);

if(cljs.core.truth_(doc_31749)){
cljs.core.println.call(null," ",doc_31749);
} else {
}

var G__31763 = cljs.core.next.call(null,seq__31644_31736__$1);
var G__31764 = null;
var G__31765 = (0);
var G__31766 = (0);
seq__31644_31706 = G__31763;
chunk__31645_31707 = G__31764;
count__31646_31708 = G__31765;
i__31647_31709 = G__31766;
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

var seq__31665 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__31666 = null;
var count__31667 = (0);
var i__31668 = (0);
while(true){
if((i__31668 < count__31667)){
var role = cljs.core._nth.call(null,chunk__31666,i__31668);
var temp__6753__auto___31774__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6753__auto___31774__$1)){
var spec_31777 = temp__6753__auto___31774__$1;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.describe.call(null,spec_31777));
} else {
}

var G__31781 = seq__31665;
var G__31782 = chunk__31666;
var G__31783 = count__31667;
var G__31784 = (i__31668 + (1));
seq__31665 = G__31781;
chunk__31666 = G__31782;
count__31667 = G__31783;
i__31668 = G__31784;
continue;
} else {
var temp__6753__auto____$1 = cljs.core.seq.call(null,seq__31665);
if(temp__6753__auto____$1){
var seq__31665__$1 = temp__6753__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31665__$1)){
var c__21586__auto__ = cljs.core.chunk_first.call(null,seq__31665__$1);
var G__31785 = cljs.core.chunk_rest.call(null,seq__31665__$1);
var G__31786 = c__21586__auto__;
var G__31787 = cljs.core.count.call(null,c__21586__auto__);
var G__31788 = (0);
seq__31665 = G__31785;
chunk__31666 = G__31786;
count__31667 = G__31787;
i__31668 = G__31788;
continue;
} else {
var role = cljs.core.first.call(null,seq__31665__$1);
var temp__6753__auto___31792__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6753__auto___31792__$2)){
var spec_31795 = temp__6753__auto___31792__$2;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.describe.call(null,spec_31795));
} else {
}

var G__31797 = cljs.core.next.call(null,seq__31665__$1);
var G__31798 = null;
var G__31799 = (0);
var G__31800 = (0);
seq__31665 = G__31797;
chunk__31666 = G__31798;
count__31667 = G__31799;
i__31668 = G__31800;
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

//# sourceMappingURL=repl.js.map