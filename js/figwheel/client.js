// Compiled by ClojureScript 1.9.521 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.10-SNAPSHOT";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args55156 = [];
var len__28543__auto___55167 = arguments.length;
var i__28544__auto___55169 = (0);
while(true){
if((i__28544__auto___55169 < len__28543__auto___55167)){
args55156.push((arguments[i__28544__auto___55169]));

var G__55170 = (i__28544__auto___55169 + (1));
i__28544__auto___55169 = G__55170;
continue;
} else {
}
break;
}

var G__55162 = args55156.length;
switch (G__55162) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args55156.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__28550__auto__ = [];
var len__28543__auto___55186 = arguments.length;
var i__28544__auto___55187 = (0);
while(true){
if((i__28544__auto___55187 < len__28543__auto___55186)){
args__28550__auto__.push((arguments[i__28544__auto___55187]));

var G__55192 = (i__28544__auto___55187 + (1));
i__28544__auto___55187 = G__55192;
continue;
} else {
}
break;
}

var argseq__28551__auto__ = ((((0) < args__28550__auto__.length))?(new cljs.core.IndexedSeq(args__28550__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__28551__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq55182){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq55182));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__28550__auto__ = [];
var len__28543__auto___55201 = arguments.length;
var i__28544__auto___55202 = (0);
while(true){
if((i__28544__auto___55202 < len__28543__auto___55201)){
args__28550__auto__.push((arguments[i__28544__auto___55202]));

var G__55203 = (i__28544__auto___55202 + (1));
i__28544__auto___55202 = G__55203;
continue;
} else {
}
break;
}

var argseq__28551__auto__ = ((((0) < args__28550__auto__.length))?(new cljs.core.IndexedSeq(args__28550__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__28551__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq55196){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq55196));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)")].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel autoloading "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method. 
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 *   
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__55260){
var map__55266 = p__55260;
var map__55266__$1 = ((((!((map__55266 == null)))?((((map__55266.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55266.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55266):map__55266);
var message = cljs.core.get.call(null,map__55266__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__55266__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" : "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__27322__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__27322__auto__)){
return or__27322__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__27310__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__27310__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__27310__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__41728__auto___55606 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41728__auto___55606,ch){
return (function (){
var f__41729__auto__ = (function (){var switch__41485__auto__ = ((function (c__41728__auto___55606,ch){
return (function (state_55533){
var state_val_55534 = (state_55533[(1)]);
if((state_val_55534 === (7))){
var inst_55529 = (state_55533[(2)]);
var state_55533__$1 = state_55533;
var statearr_55541_55612 = state_55533__$1;
(statearr_55541_55612[(2)] = inst_55529);

(statearr_55541_55612[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55534 === (1))){
var state_55533__$1 = state_55533;
var statearr_55543_55618 = state_55533__$1;
(statearr_55543_55618[(2)] = null);

(statearr_55543_55618[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55534 === (4))){
var inst_55479 = (state_55533[(7)]);
var inst_55479__$1 = (state_55533[(2)]);
var state_55533__$1 = (function (){var statearr_55544 = state_55533;
(statearr_55544[(7)] = inst_55479__$1);

return statearr_55544;
})();
if(cljs.core.truth_(inst_55479__$1)){
var statearr_55545_55625 = state_55533__$1;
(statearr_55545_55625[(1)] = (5));

} else {
var statearr_55546_55626 = state_55533__$1;
(statearr_55546_55626[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55534 === (15))){
var inst_55488 = (state_55533[(8)]);
var inst_55504 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_55488);
var inst_55505 = cljs.core.first.call(null,inst_55504);
var inst_55506 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_55505);
var inst_55507 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Not loading code with warnings - "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_55506)].join('');
var inst_55508 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_55507);
var state_55533__$1 = state_55533;
var statearr_55548_55636 = state_55533__$1;
(statearr_55548_55636[(2)] = inst_55508);

(statearr_55548_55636[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55534 === (13))){
var inst_55515 = (state_55533[(2)]);
var state_55533__$1 = state_55533;
var statearr_55550_55642 = state_55533__$1;
(statearr_55550_55642[(2)] = inst_55515);

(statearr_55550_55642[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55534 === (6))){
var state_55533__$1 = state_55533;
var statearr_55553_55651 = state_55533__$1;
(statearr_55553_55651[(2)] = null);

(statearr_55553_55651[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55534 === (17))){
var inst_55513 = (state_55533[(2)]);
var state_55533__$1 = state_55533;
var statearr_55556_55653 = state_55533__$1;
(statearr_55556_55653[(2)] = inst_55513);

(statearr_55556_55653[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55534 === (3))){
var inst_55531 = (state_55533[(2)]);
var state_55533__$1 = state_55533;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55533__$1,inst_55531);
} else {
if((state_val_55534 === (12))){
var inst_55487 = (state_55533[(9)]);
var inst_55502 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_55487,opts);
var state_55533__$1 = state_55533;
if(cljs.core.truth_(inst_55502)){
var statearr_55560_55661 = state_55533__$1;
(statearr_55560_55661[(1)] = (15));

} else {
var statearr_55562_55662 = state_55533__$1;
(statearr_55562_55662[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55534 === (2))){
var state_55533__$1 = state_55533;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55533__$1,(4),ch);
} else {
if((state_val_55534 === (11))){
var inst_55488 = (state_55533[(8)]);
var inst_55494 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_55495 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_55488);
var inst_55496 = cljs.core.async.timeout.call(null,(1000));
var inst_55497 = [inst_55495,inst_55496];
var inst_55498 = (new cljs.core.PersistentVector(null,2,(5),inst_55494,inst_55497,null));
var state_55533__$1 = state_55533;
return cljs.core.async.ioc_alts_BANG_.call(null,state_55533__$1,(14),inst_55498);
} else {
if((state_val_55534 === (9))){
var inst_55488 = (state_55533[(8)]);
var inst_55519 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_55520 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_55488);
var inst_55521 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_55520);
var inst_55522 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Not loading: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_55521)].join('');
var inst_55523 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_55522);
var state_55533__$1 = (function (){var statearr_55563 = state_55533;
(statearr_55563[(10)] = inst_55519);

return statearr_55563;
})();
var statearr_55564_55709 = state_55533__$1;
(statearr_55564_55709[(2)] = inst_55523);

(statearr_55564_55709[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55534 === (5))){
var inst_55479 = (state_55533[(7)]);
var inst_55482 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_55484 = (new cljs.core.PersistentArrayMap(null,2,inst_55482,null));
var inst_55485 = (new cljs.core.PersistentHashSet(null,inst_55484,null));
var inst_55486 = figwheel.client.focus_msgs.call(null,inst_55485,inst_55479);
var inst_55487 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_55486);
var inst_55488 = cljs.core.first.call(null,inst_55486);
var inst_55489 = figwheel.client.autoload_QMARK_.call(null);
var state_55533__$1 = (function (){var statearr_55568 = state_55533;
(statearr_55568[(8)] = inst_55488);

(statearr_55568[(9)] = inst_55487);

return statearr_55568;
})();
if(cljs.core.truth_(inst_55489)){
var statearr_55570_55736 = state_55533__$1;
(statearr_55570_55736[(1)] = (8));

} else {
var statearr_55571_55738 = state_55533__$1;
(statearr_55571_55738[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55534 === (14))){
var inst_55500 = (state_55533[(2)]);
var state_55533__$1 = state_55533;
var statearr_55572_55762 = state_55533__$1;
(statearr_55572_55762[(2)] = inst_55500);

(statearr_55572_55762[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55534 === (16))){
var state_55533__$1 = state_55533;
var statearr_55574_55785 = state_55533__$1;
(statearr_55574_55785[(2)] = null);

(statearr_55574_55785[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55534 === (10))){
var inst_55525 = (state_55533[(2)]);
var state_55533__$1 = (function (){var statearr_55575 = state_55533;
(statearr_55575[(11)] = inst_55525);

return statearr_55575;
})();
var statearr_55577_55798 = state_55533__$1;
(statearr_55577_55798[(2)] = null);

(statearr_55577_55798[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55534 === (8))){
var inst_55487 = (state_55533[(9)]);
var inst_55491 = figwheel.client.reload_file_state_QMARK_.call(null,inst_55487,opts);
var state_55533__$1 = state_55533;
if(cljs.core.truth_(inst_55491)){
var statearr_55580_55812 = state_55533__$1;
(statearr_55580_55812[(1)] = (11));

} else {
var statearr_55581_55813 = state_55533__$1;
(statearr_55581_55813[(1)] = (12));

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
});})(c__41728__auto___55606,ch))
;
return ((function (switch__41485__auto__,c__41728__auto___55606,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__41486__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__41486__auto____0 = (function (){
var statearr_55589 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_55589[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__41486__auto__);

(statearr_55589[(1)] = (1));

return statearr_55589;
});
var figwheel$client$file_reloader_plugin_$_state_machine__41486__auto____1 = (function (state_55533){
while(true){
var ret_value__41487__auto__ = (function (){try{while(true){
var result__41488__auto__ = switch__41485__auto__.call(null,state_55533);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41488__auto__;
}
break;
}
}catch (e55590){if((e55590 instanceof Object)){
var ex__41489__auto__ = e55590;
var statearr_55591_55826 = state_55533;
(statearr_55591_55826[(5)] = ex__41489__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55533);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55590;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41487__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55837 = state_55533;
state_55533 = G__55837;
continue;
} else {
return ret_value__41487__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__41486__auto__ = function(state_55533){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__41486__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__41486__auto____1.call(this,state_55533);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__41486__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__41486__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__41486__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__41486__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__41486__auto__;
})()
;})(switch__41485__auto__,c__41728__auto___55606,ch))
})();
var state__41730__auto__ = (function (){var statearr_55597 = f__41729__auto__.call(null);
(statearr_55597[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41728__auto___55606);

return statearr_55597;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41730__auto__);
});})(c__41728__auto___55606,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__55853_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__55853_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_55871 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_55871){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e55870){if((e55870 instanceof Error)){
var e = e55870;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_55871], null));
} else {
var e = e55870;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_55871))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__55918){
var map__55936 = p__55918;
var map__55936__$1 = ((((!((map__55936 == null)))?((((map__55936.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55936.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55936):map__55936);
var opts = map__55936__$1;
var build_id = cljs.core.get.call(null,map__55936__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__55936,map__55936__$1,opts,build_id){
return (function (p__55943){
var vec__55944 = p__55943;
var seq__55945 = cljs.core.seq.call(null,vec__55944);
var first__55946 = cljs.core.first.call(null,seq__55945);
var seq__55945__$1 = cljs.core.next.call(null,seq__55945);
var map__55947 = first__55946;
var map__55947__$1 = ((((!((map__55947 == null)))?((((map__55947.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55947.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55947):map__55947);
var msg = map__55947__$1;
var msg_name = cljs.core.get.call(null,map__55947__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__55945__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__55944,seq__55945,first__55946,seq__55945__$1,map__55947,map__55947__$1,msg,msg_name,_,map__55936,map__55936__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__55944,seq__55945,first__55946,seq__55945__$1,map__55947,map__55947__$1,msg,msg_name,_,map__55936,map__55936__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__55936,map__55936__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__56019){
var vec__56020 = p__56019;
var seq__56021 = cljs.core.seq.call(null,vec__56020);
var first__56022 = cljs.core.first.call(null,seq__56021);
var seq__56021__$1 = cljs.core.next.call(null,seq__56021);
var map__56023 = first__56022;
var map__56023__$1 = ((((!((map__56023 == null)))?((((map__56023.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56023.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56023):map__56023);
var msg = map__56023__$1;
var msg_name = cljs.core.get.call(null,map__56023__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__56021__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__56048){
var map__56067 = p__56048;
var map__56067__$1 = ((((!((map__56067 == null)))?((((map__56067.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56067.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56067):map__56067);
var on_compile_warning = cljs.core.get.call(null,map__56067__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__56067__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__56067,map__56067__$1,on_compile_warning,on_compile_fail){
return (function (p__56071){
var vec__56072 = p__56071;
var seq__56073 = cljs.core.seq.call(null,vec__56072);
var first__56074 = cljs.core.first.call(null,seq__56073);
var seq__56073__$1 = cljs.core.next.call(null,seq__56073);
var map__56075 = first__56074;
var map__56075__$1 = ((((!((map__56075 == null)))?((((map__56075.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56075.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56075):map__56075);
var msg = map__56075__$1;
var msg_name = cljs.core.get.call(null,map__56075__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__56073__$1;
var pred__56082 = cljs.core._EQ_;
var expr__56083 = msg_name;
if(cljs.core.truth_(pred__56082.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__56083))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__56082.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__56083))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__56067,map__56067__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__41728__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41728__auto__,msg_hist,msg_names,msg){
return (function (){
var f__41729__auto__ = (function (){var switch__41485__auto__ = ((function (c__41728__auto__,msg_hist,msg_names,msg){
return (function (state_56464){
var state_val_56465 = (state_56464[(1)]);
if((state_val_56465 === (7))){
var inst_56372 = (state_56464[(2)]);
var state_56464__$1 = state_56464;
if(cljs.core.truth_(inst_56372)){
var statearr_56471_56632 = state_56464__$1;
(statearr_56471_56632[(1)] = (8));

} else {
var statearr_56472_56635 = state_56464__$1;
(statearr_56472_56635[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56465 === (20))){
var inst_56457 = (state_56464[(2)]);
var state_56464__$1 = state_56464;
var statearr_56475_56636 = state_56464__$1;
(statearr_56475_56636[(2)] = inst_56457);

(statearr_56475_56636[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56465 === (27))){
var inst_56453 = (state_56464[(2)]);
var state_56464__$1 = state_56464;
var statearr_56477_56643 = state_56464__$1;
(statearr_56477_56643[(2)] = inst_56453);

(statearr_56477_56643[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56465 === (1))){
var inst_56364 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_56464__$1 = state_56464;
if(cljs.core.truth_(inst_56364)){
var statearr_56480_56649 = state_56464__$1;
(statearr_56480_56649[(1)] = (2));

} else {
var statearr_56481_56651 = state_56464__$1;
(statearr_56481_56651[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56465 === (24))){
var inst_56455 = (state_56464[(2)]);
var state_56464__$1 = state_56464;
var statearr_56491_56658 = state_56464__$1;
(statearr_56491_56658[(2)] = inst_56455);

(statearr_56491_56658[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56465 === (4))){
var inst_56462 = (state_56464[(2)]);
var state_56464__$1 = state_56464;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56464__$1,inst_56462);
} else {
if((state_val_56465 === (15))){
var inst_56459 = (state_56464[(2)]);
var state_56464__$1 = state_56464;
var statearr_56494_56660 = state_56464__$1;
(statearr_56494_56660[(2)] = inst_56459);

(statearr_56494_56660[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56465 === (21))){
var inst_56405 = (state_56464[(2)]);
var inst_56407 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_56408 = figwheel.client.auto_jump_to_error.call(null,opts,inst_56407);
var state_56464__$1 = (function (){var statearr_56499 = state_56464;
(statearr_56499[(7)] = inst_56405);

return statearr_56499;
})();
var statearr_56500_56663 = state_56464__$1;
(statearr_56500_56663[(2)] = inst_56408);

(statearr_56500_56663[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56465 === (31))){
var inst_56440 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_56464__$1 = state_56464;
if(cljs.core.truth_(inst_56440)){
var statearr_56504_56667 = state_56464__$1;
(statearr_56504_56667[(1)] = (34));

} else {
var statearr_56506_56671 = state_56464__$1;
(statearr_56506_56671[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56465 === (32))){
var inst_56451 = (state_56464[(2)]);
var state_56464__$1 = state_56464;
var statearr_56507_56673 = state_56464__$1;
(statearr_56507_56673[(2)] = inst_56451);

(statearr_56507_56673[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56465 === (33))){
var inst_56436 = (state_56464[(2)]);
var inst_56437 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_56438 = figwheel.client.auto_jump_to_error.call(null,opts,inst_56437);
var state_56464__$1 = (function (){var statearr_56509 = state_56464;
(statearr_56509[(8)] = inst_56436);

return statearr_56509;
})();
var statearr_56511_56684 = state_56464__$1;
(statearr_56511_56684[(2)] = inst_56438);

(statearr_56511_56684[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56465 === (13))){
var inst_56388 = figwheel.client.heads_up.clear.call(null);
var state_56464__$1 = state_56464;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56464__$1,(16),inst_56388);
} else {
if((state_val_56465 === (22))){
var inst_56412 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_56413 = figwheel.client.heads_up.append_warning_message.call(null,inst_56412);
var state_56464__$1 = state_56464;
var statearr_56519_56692 = state_56464__$1;
(statearr_56519_56692[(2)] = inst_56413);

(statearr_56519_56692[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56465 === (36))){
var inst_56449 = (state_56464[(2)]);
var state_56464__$1 = state_56464;
var statearr_56525_56699 = state_56464__$1;
(statearr_56525_56699[(2)] = inst_56449);

(statearr_56525_56699[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56465 === (29))){
var inst_56424 = (state_56464[(2)]);
var inst_56425 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_56426 = figwheel.client.auto_jump_to_error.call(null,opts,inst_56425);
var state_56464__$1 = (function (){var statearr_56530 = state_56464;
(statearr_56530[(9)] = inst_56424);

return statearr_56530;
})();
var statearr_56532_56705 = state_56464__$1;
(statearr_56532_56705[(2)] = inst_56426);

(statearr_56532_56705[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56465 === (6))){
var inst_56367 = (state_56464[(10)]);
var state_56464__$1 = state_56464;
var statearr_56537_56708 = state_56464__$1;
(statearr_56537_56708[(2)] = inst_56367);

(statearr_56537_56708[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56465 === (28))){
var inst_56420 = (state_56464[(2)]);
var inst_56421 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_56422 = figwheel.client.heads_up.display_warning.call(null,inst_56421);
var state_56464__$1 = (function (){var statearr_56542 = state_56464;
(statearr_56542[(11)] = inst_56420);

return statearr_56542;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56464__$1,(29),inst_56422);
} else {
if((state_val_56465 === (25))){
var inst_56418 = figwheel.client.heads_up.clear.call(null);
var state_56464__$1 = state_56464;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56464__$1,(28),inst_56418);
} else {
if((state_val_56465 === (34))){
var inst_56443 = figwheel.client.heads_up.flash_loaded.call(null);
var state_56464__$1 = state_56464;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56464__$1,(37),inst_56443);
} else {
if((state_val_56465 === (17))){
var inst_56394 = (state_56464[(2)]);
var inst_56396 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_56397 = figwheel.client.auto_jump_to_error.call(null,opts,inst_56396);
var state_56464__$1 = (function (){var statearr_56557 = state_56464;
(statearr_56557[(12)] = inst_56394);

return statearr_56557;
})();
var statearr_56559_56717 = state_56464__$1;
(statearr_56559_56717[(2)] = inst_56397);

(statearr_56559_56717[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56465 === (3))){
var inst_56385 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_56464__$1 = state_56464;
if(cljs.core.truth_(inst_56385)){
var statearr_56565_56724 = state_56464__$1;
(statearr_56565_56724[(1)] = (13));

} else {
var statearr_56566_56727 = state_56464__$1;
(statearr_56566_56727[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56465 === (12))){
var inst_56381 = (state_56464[(2)]);
var state_56464__$1 = state_56464;
var statearr_56573_56733 = state_56464__$1;
(statearr_56573_56733[(2)] = inst_56381);

(statearr_56573_56733[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56465 === (2))){
var inst_56367 = (state_56464[(10)]);
var inst_56367__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_56464__$1 = (function (){var statearr_56575 = state_56464;
(statearr_56575[(10)] = inst_56367__$1);

return statearr_56575;
})();
if(cljs.core.truth_(inst_56367__$1)){
var statearr_56576_56750 = state_56464__$1;
(statearr_56576_56750[(1)] = (5));

} else {
var statearr_56577_56756 = state_56464__$1;
(statearr_56577_56756[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56465 === (23))){
var inst_56416 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_56464__$1 = state_56464;
if(cljs.core.truth_(inst_56416)){
var statearr_56578_56758 = state_56464__$1;
(statearr_56578_56758[(1)] = (25));

} else {
var statearr_56579_56760 = state_56464__$1;
(statearr_56579_56760[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56465 === (35))){
var state_56464__$1 = state_56464;
var statearr_56580_56761 = state_56464__$1;
(statearr_56580_56761[(2)] = null);

(statearr_56580_56761[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56465 === (19))){
var inst_56410 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_56464__$1 = state_56464;
if(cljs.core.truth_(inst_56410)){
var statearr_56581_56781 = state_56464__$1;
(statearr_56581_56781[(1)] = (22));

} else {
var statearr_56582_56782 = state_56464__$1;
(statearr_56582_56782[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56465 === (11))){
var inst_56376 = (state_56464[(2)]);
var state_56464__$1 = state_56464;
var statearr_56585_56783 = state_56464__$1;
(statearr_56585_56783[(2)] = inst_56376);

(statearr_56585_56783[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56465 === (9))){
var inst_56379 = figwheel.client.heads_up.clear.call(null);
var state_56464__$1 = state_56464;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56464__$1,(12),inst_56379);
} else {
if((state_val_56465 === (5))){
var inst_56369 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_56464__$1 = state_56464;
var statearr_56588_56789 = state_56464__$1;
(statearr_56588_56789[(2)] = inst_56369);

(statearr_56588_56789[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56465 === (14))){
var inst_56400 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_56464__$1 = state_56464;
if(cljs.core.truth_(inst_56400)){
var statearr_56590_56791 = state_56464__$1;
(statearr_56590_56791[(1)] = (18));

} else {
var statearr_56592_56792 = state_56464__$1;
(statearr_56592_56792[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56465 === (26))){
var inst_56428 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_56464__$1 = state_56464;
if(cljs.core.truth_(inst_56428)){
var statearr_56593_56796 = state_56464__$1;
(statearr_56593_56796[(1)] = (30));

} else {
var statearr_56596_56799 = state_56464__$1;
(statearr_56596_56799[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56465 === (16))){
var inst_56390 = (state_56464[(2)]);
var inst_56391 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_56392 = figwheel.client.heads_up.display_exception.call(null,inst_56391);
var state_56464__$1 = (function (){var statearr_56597 = state_56464;
(statearr_56597[(13)] = inst_56390);

return statearr_56597;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56464__$1,(17),inst_56392);
} else {
if((state_val_56465 === (30))){
var inst_56433 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_56434 = figwheel.client.heads_up.display_warning.call(null,inst_56433);
var state_56464__$1 = state_56464;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56464__$1,(33),inst_56434);
} else {
if((state_val_56465 === (10))){
var inst_56383 = (state_56464[(2)]);
var state_56464__$1 = state_56464;
var statearr_56600_56806 = state_56464__$1;
(statearr_56600_56806[(2)] = inst_56383);

(statearr_56600_56806[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56465 === (18))){
var inst_56402 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_56403 = figwheel.client.heads_up.display_exception.call(null,inst_56402);
var state_56464__$1 = state_56464;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56464__$1,(21),inst_56403);
} else {
if((state_val_56465 === (37))){
var inst_56445 = (state_56464[(2)]);
var state_56464__$1 = state_56464;
var statearr_56601_56809 = state_56464__$1;
(statearr_56601_56809[(2)] = inst_56445);

(statearr_56601_56809[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56465 === (8))){
var inst_56374 = figwheel.client.heads_up.flash_loaded.call(null);
var state_56464__$1 = state_56464;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56464__$1,(11),inst_56374);
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
});})(c__41728__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__41485__auto__,c__41728__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__41486__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__41486__auto____0 = (function (){
var statearr_56611 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_56611[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__41486__auto__);

(statearr_56611[(1)] = (1));

return statearr_56611;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__41486__auto____1 = (function (state_56464){
while(true){
var ret_value__41487__auto__ = (function (){try{while(true){
var result__41488__auto__ = switch__41485__auto__.call(null,state_56464);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41488__auto__;
}
break;
}
}catch (e56617){if((e56617 instanceof Object)){
var ex__41489__auto__ = e56617;
var statearr_56620_56815 = state_56464;
(statearr_56620_56815[(5)] = ex__41489__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56464);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56617;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41487__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56816 = state_56464;
state_56464 = G__56816;
continue;
} else {
return ret_value__41487__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__41486__auto__ = function(state_56464){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__41486__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__41486__auto____1.call(this,state_56464);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__41486__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__41486__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__41486__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__41486__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__41486__auto__;
})()
;})(switch__41485__auto__,c__41728__auto__,msg_hist,msg_names,msg))
})();
var state__41730__auto__ = (function (){var statearr_56621 = f__41729__auto__.call(null);
(statearr_56621[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41728__auto__);

return statearr_56621;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41730__auto__);
});})(c__41728__auto__,msg_hist,msg_names,msg))
);

return c__41728__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__41728__auto___56945 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41728__auto___56945,ch){
return (function (){
var f__41729__auto__ = (function (){var switch__41485__auto__ = ((function (c__41728__auto___56945,ch){
return (function (state_56899){
var state_val_56900 = (state_56899[(1)]);
if((state_val_56900 === (1))){
var state_56899__$1 = state_56899;
var statearr_56903_56951 = state_56899__$1;
(statearr_56903_56951[(2)] = null);

(statearr_56903_56951[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56900 === (2))){
var state_56899__$1 = state_56899;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56899__$1,(4),ch);
} else {
if((state_val_56900 === (3))){
var inst_56895 = (state_56899[(2)]);
var state_56899__$1 = state_56899;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56899__$1,inst_56895);
} else {
if((state_val_56900 === (4))){
var inst_56882 = (state_56899[(7)]);
var inst_56882__$1 = (state_56899[(2)]);
var state_56899__$1 = (function (){var statearr_56907 = state_56899;
(statearr_56907[(7)] = inst_56882__$1);

return statearr_56907;
})();
if(cljs.core.truth_(inst_56882__$1)){
var statearr_56910_56971 = state_56899__$1;
(statearr_56910_56971[(1)] = (5));

} else {
var statearr_56911_56974 = state_56899__$1;
(statearr_56911_56974[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56900 === (5))){
var inst_56882 = (state_56899[(7)]);
var inst_56887 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_56882);
var state_56899__$1 = state_56899;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56899__$1,(8),inst_56887);
} else {
if((state_val_56900 === (6))){
var state_56899__$1 = state_56899;
var statearr_56913_56987 = state_56899__$1;
(statearr_56913_56987[(2)] = null);

(statearr_56913_56987[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56900 === (7))){
var inst_56893 = (state_56899[(2)]);
var state_56899__$1 = state_56899;
var statearr_56914_56993 = state_56899__$1;
(statearr_56914_56993[(2)] = inst_56893);

(statearr_56914_56993[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56900 === (8))){
var inst_56889 = (state_56899[(2)]);
var state_56899__$1 = (function (){var statearr_56915 = state_56899;
(statearr_56915[(8)] = inst_56889);

return statearr_56915;
})();
var statearr_56916_56997 = state_56899__$1;
(statearr_56916_56997[(2)] = null);

(statearr_56916_56997[(1)] = (2));


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
});})(c__41728__auto___56945,ch))
;
return ((function (switch__41485__auto__,c__41728__auto___56945,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__41486__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__41486__auto____0 = (function (){
var statearr_56928 = [null,null,null,null,null,null,null,null,null];
(statearr_56928[(0)] = figwheel$client$heads_up_plugin_$_state_machine__41486__auto__);

(statearr_56928[(1)] = (1));

return statearr_56928;
});
var figwheel$client$heads_up_plugin_$_state_machine__41486__auto____1 = (function (state_56899){
while(true){
var ret_value__41487__auto__ = (function (){try{while(true){
var result__41488__auto__ = switch__41485__auto__.call(null,state_56899);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41488__auto__;
}
break;
}
}catch (e56932){if((e56932 instanceof Object)){
var ex__41489__auto__ = e56932;
var statearr_56933_57018 = state_56899;
(statearr_56933_57018[(5)] = ex__41489__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56899);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56932;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41487__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57029 = state_56899;
state_56899 = G__57029;
continue;
} else {
return ret_value__41487__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__41486__auto__ = function(state_56899){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__41486__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__41486__auto____1.call(this,state_56899);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__41486__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__41486__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__41486__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__41486__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__41486__auto__;
})()
;})(switch__41485__auto__,c__41728__auto___56945,ch))
})();
var state__41730__auto__ = (function (){var statearr_56940 = f__41729__auto__.call(null);
(statearr_56940[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41728__auto___56945);

return statearr_56940;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41730__auto__);
});})(c__41728__auto___56945,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__41728__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41728__auto__){
return (function (){
var f__41729__auto__ = (function (){var switch__41485__auto__ = ((function (c__41728__auto__){
return (function (state_57121){
var state_val_57122 = (state_57121[(1)]);
if((state_val_57122 === (1))){
var inst_57115 = cljs.core.async.timeout.call(null,(3000));
var state_57121__$1 = state_57121;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57121__$1,(2),inst_57115);
} else {
if((state_val_57122 === (2))){
var inst_57117 = (state_57121[(2)]);
var inst_57119 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_57121__$1 = (function (){var statearr_57124 = state_57121;
(statearr_57124[(7)] = inst_57117);

return statearr_57124;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57121__$1,inst_57119);
} else {
return null;
}
}
});})(c__41728__auto__))
;
return ((function (switch__41485__auto__,c__41728__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__41486__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__41486__auto____0 = (function (){
var statearr_57130 = [null,null,null,null,null,null,null,null];
(statearr_57130[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__41486__auto__);

(statearr_57130[(1)] = (1));

return statearr_57130;
});
var figwheel$client$enforce_project_plugin_$_state_machine__41486__auto____1 = (function (state_57121){
while(true){
var ret_value__41487__auto__ = (function (){try{while(true){
var result__41488__auto__ = switch__41485__auto__.call(null,state_57121);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41488__auto__;
}
break;
}
}catch (e57133){if((e57133 instanceof Object)){
var ex__41489__auto__ = e57133;
var statearr_57134_57163 = state_57121;
(statearr_57134_57163[(5)] = ex__41489__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57121);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57133;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41487__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57167 = state_57121;
state_57121 = G__57167;
continue;
} else {
return ret_value__41487__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__41486__auto__ = function(state_57121){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__41486__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__41486__auto____1.call(this,state_57121);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__41486__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__41486__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__41486__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__41486__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__41486__auto__;
})()
;})(switch__41485__auto__,c__41728__auto__))
})();
var state__41730__auto__ = (function (){var statearr_57135 = f__41729__auto__.call(null);
(statearr_57135[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41728__auto__);

return statearr_57135;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41730__auto__);
});})(c__41728__auto__))
);

return c__41728__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__6753__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__6753__auto__)){
var figwheel_version = temp__6753__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__41728__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41728__auto__,figwheel_version,temp__6753__auto__){
return (function (){
var f__41729__auto__ = (function (){var switch__41485__auto__ = ((function (c__41728__auto__,figwheel_version,temp__6753__auto__){
return (function (state_57235){
var state_val_57236 = (state_57235[(1)]);
if((state_val_57236 === (1))){
var inst_57228 = cljs.core.async.timeout.call(null,(2000));
var state_57235__$1 = state_57235;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57235__$1,(2),inst_57228);
} else {
if((state_val_57236 === (2))){
var inst_57230 = (state_57235[(2)]);
var inst_57231 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel Client Version <strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</strong> is not equal to "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel Sidecar Version <strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(".  Shutting down Websocket Connection!"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<h4>To fix try:</h4>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_57232 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_57231);
var state_57235__$1 = (function (){var statearr_57241 = state_57235;
(statearr_57241[(7)] = inst_57230);

return statearr_57241;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57235__$1,inst_57232);
} else {
return null;
}
}
});})(c__41728__auto__,figwheel_version,temp__6753__auto__))
;
return ((function (switch__41485__auto__,c__41728__auto__,figwheel_version,temp__6753__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__41486__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__41486__auto____0 = (function (){
var statearr_57259 = [null,null,null,null,null,null,null,null];
(statearr_57259[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__41486__auto__);

(statearr_57259[(1)] = (1));

return statearr_57259;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__41486__auto____1 = (function (state_57235){
while(true){
var ret_value__41487__auto__ = (function (){try{while(true){
var result__41488__auto__ = switch__41485__auto__.call(null,state_57235);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41488__auto__;
}
break;
}
}catch (e57261){if((e57261 instanceof Object)){
var ex__41489__auto__ = e57261;
var statearr_57262_57340 = state_57235;
(statearr_57262_57340[(5)] = ex__41489__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57235);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57261;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41487__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57355 = state_57235;
state_57235 = G__57355;
continue;
} else {
return ret_value__41487__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__41486__auto__ = function(state_57235){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__41486__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__41486__auto____1.call(this,state_57235);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__41486__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__41486__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__41486__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__41486__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__41486__auto__;
})()
;})(switch__41485__auto__,c__41728__auto__,figwheel_version,temp__6753__auto__))
})();
var state__41730__auto__ = (function (){var statearr_57269 = f__41729__auto__.call(null);
(statearr_57269[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41728__auto__);

return statearr_57269;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41730__auto__);
});})(c__41728__auto__,figwheel_version,temp__6753__auto__))
);

return c__41728__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__57365){
var map__57381 = p__57365;
var map__57381__$1 = ((((!((map__57381 == null)))?((((map__57381.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57381.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57381):map__57381);
var file = cljs.core.get.call(null,map__57381__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__57381__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__57381__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__57387 = "";
var G__57387__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__57387),cljs.core.str.cljs$core$IFn$_invoke$arity$1("file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__57387);
var G__57387__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__57387__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" at line "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__57387__$1);
if(cljs.core.truth_((function (){var and__27310__auto__ = line;
if(cljs.core.truth_(and__27310__auto__)){
return column;
} else {
return and__27310__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__57387__$2),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", column "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__57387__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__57430){
var map__57447 = p__57430;
var map__57447__$1 = ((((!((map__57447 == null)))?((((map__57447.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57447.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57447):map__57447);
var ed = map__57447__$1;
var formatted_exception = cljs.core.get.call(null,map__57447__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__57447__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__57447__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__57449_57471 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__57450_57472 = null;
var count__57451_57473 = (0);
var i__57452_57474 = (0);
while(true){
if((i__57452_57474 < count__57451_57473)){
var msg_57479 = cljs.core._nth.call(null,chunk__57450_57472,i__57452_57474);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_57479);

var G__57481 = seq__57449_57471;
var G__57482 = chunk__57450_57472;
var G__57483 = count__57451_57473;
var G__57484 = (i__57452_57474 + (1));
seq__57449_57471 = G__57481;
chunk__57450_57472 = G__57482;
count__57451_57473 = G__57483;
i__57452_57474 = G__57484;
continue;
} else {
var temp__6753__auto___57485 = cljs.core.seq.call(null,seq__57449_57471);
if(temp__6753__auto___57485){
var seq__57449_57488__$1 = temp__6753__auto___57485;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__57449_57488__$1)){
var c__28233__auto___57490 = cljs.core.chunk_first.call(null,seq__57449_57488__$1);
var G__57491 = cljs.core.chunk_rest.call(null,seq__57449_57488__$1);
var G__57492 = c__28233__auto___57490;
var G__57493 = cljs.core.count.call(null,c__28233__auto___57490);
var G__57494 = (0);
seq__57449_57471 = G__57491;
chunk__57450_57472 = G__57492;
count__57451_57473 = G__57493;
i__57452_57474 = G__57494;
continue;
} else {
var msg_57496 = cljs.core.first.call(null,seq__57449_57488__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_57496);

var G__57498 = cljs.core.next.call(null,seq__57449_57488__$1);
var G__57499 = null;
var G__57500 = (0);
var G__57501 = (0);
seq__57449_57471 = G__57498;
chunk__57450_57472 = G__57499;
count__57451_57473 = G__57500;
i__57452_57474 = G__57501;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Error on "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__57503){
var map__57509 = p__57503;
var map__57509__$1 = ((((!((map__57509 == null)))?((((map__57509.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57509.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57509):map__57509);
var w = map__57509__$1;
var message = cljs.core.get.call(null,map__57509__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Compile Warning - "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/figwheel/client.cljs",33,1,357,357,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/figwheel/client.cljs",30,1,349,349,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("ws://"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/figwheel-ws")].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__27310__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__27310__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__27310__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__57613 = cljs.core.seq.call(null,plugins);
var chunk__57616 = null;
var count__57617 = (0);
var i__57618 = (0);
while(true){
if((i__57618 < count__57617)){
var vec__57619 = cljs.core._nth.call(null,chunk__57616,i__57618);
var k = cljs.core.nth.call(null,vec__57619,(0),null);
var plugin = cljs.core.nth.call(null,vec__57619,(1),null);
if(cljs.core.truth_(plugin)){
var pl_57629 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__57613,chunk__57616,count__57617,i__57618,pl_57629,vec__57619,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_57629.call(null,msg_hist);
});})(seq__57613,chunk__57616,count__57617,i__57618,pl_57629,vec__57619,k,plugin))
);
} else {
}

var G__57630 = seq__57613;
var G__57631 = chunk__57616;
var G__57632 = count__57617;
var G__57633 = (i__57618 + (1));
seq__57613 = G__57630;
chunk__57616 = G__57631;
count__57617 = G__57632;
i__57618 = G__57633;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__57613);
if(temp__6753__auto__){
var seq__57613__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__57613__$1)){
var c__28233__auto__ = cljs.core.chunk_first.call(null,seq__57613__$1);
var G__57636 = cljs.core.chunk_rest.call(null,seq__57613__$1);
var G__57637 = c__28233__auto__;
var G__57638 = cljs.core.count.call(null,c__28233__auto__);
var G__57639 = (0);
seq__57613 = G__57636;
chunk__57616 = G__57637;
count__57617 = G__57638;
i__57618 = G__57639;
continue;
} else {
var vec__57622 = cljs.core.first.call(null,seq__57613__$1);
var k = cljs.core.nth.call(null,vec__57622,(0),null);
var plugin = cljs.core.nth.call(null,vec__57622,(1),null);
if(cljs.core.truth_(plugin)){
var pl_57644 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__57613,chunk__57616,count__57617,i__57618,pl_57644,vec__57622,k,plugin,seq__57613__$1,temp__6753__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_57644.call(null,msg_hist);
});})(seq__57613,chunk__57616,count__57617,i__57618,pl_57644,vec__57622,k,plugin,seq__57613__$1,temp__6753__auto__))
);
} else {
}

var G__57648 = cljs.core.next.call(null,seq__57613__$1);
var G__57649 = null;
var G__57650 = (0);
var G__57651 = (0);
seq__57613 = G__57648;
chunk__57616 = G__57649;
count__57617 = G__57650;
i__57618 = G__57651;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args57658 = [];
var len__28543__auto___57683 = arguments.length;
var i__28544__auto___57685 = (0);
while(true){
if((i__28544__auto___57685 < len__28543__auto___57683)){
args57658.push((arguments[i__28544__auto___57685]));

var G__57688 = (i__28544__auto___57685 + (1));
i__28544__auto___57685 = G__57688;
continue;
} else {
}
break;
}

var G__57663 = args57658.length;
switch (G__57663) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args57658.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__57674_57702 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__57675_57703 = null;
var count__57676_57704 = (0);
var i__57677_57705 = (0);
while(true){
if((i__57677_57705 < count__57676_57704)){
var msg_57709 = cljs.core._nth.call(null,chunk__57675_57703,i__57677_57705);
figwheel.client.socket.handle_incoming_message.call(null,msg_57709);

var G__57711 = seq__57674_57702;
var G__57712 = chunk__57675_57703;
var G__57713 = count__57676_57704;
var G__57714 = (i__57677_57705 + (1));
seq__57674_57702 = G__57711;
chunk__57675_57703 = G__57712;
count__57676_57704 = G__57713;
i__57677_57705 = G__57714;
continue;
} else {
var temp__6753__auto___57719 = cljs.core.seq.call(null,seq__57674_57702);
if(temp__6753__auto___57719){
var seq__57674_57721__$1 = temp__6753__auto___57719;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__57674_57721__$1)){
var c__28233__auto___57723 = cljs.core.chunk_first.call(null,seq__57674_57721__$1);
var G__57726 = cljs.core.chunk_rest.call(null,seq__57674_57721__$1);
var G__57727 = c__28233__auto___57723;
var G__57728 = cljs.core.count.call(null,c__28233__auto___57723);
var G__57729 = (0);
seq__57674_57702 = G__57726;
chunk__57675_57703 = G__57727;
count__57676_57704 = G__57728;
i__57677_57705 = G__57729;
continue;
} else {
var msg_57736 = cljs.core.first.call(null,seq__57674_57721__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_57736);

var G__57739 = cljs.core.next.call(null,seq__57674_57721__$1);
var G__57740 = null;
var G__57741 = (0);
var G__57742 = (0);
seq__57674_57702 = G__57739;
chunk__57675_57703 = G__57740;
count__57676_57704 = G__57741;
i__57677_57705 = G__57742;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__28550__auto__ = [];
var len__28543__auto___57760 = arguments.length;
var i__28544__auto___57761 = (0);
while(true){
if((i__28544__auto___57761 < len__28543__auto___57760)){
args__28550__auto__.push((arguments[i__28544__auto___57761]));

var G__57762 = (i__28544__auto___57761 + (1));
i__28544__auto___57761 = G__57762;
continue;
} else {
}
break;
}

var argseq__28551__auto__ = ((((0) < args__28550__auto__.length))?(new cljs.core.IndexedSeq(args__28550__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__28551__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__57755){
var map__57756 = p__57755;
var map__57756__$1 = ((((!((map__57756 == null)))?((((map__57756.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57756.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57756):map__57756);
var opts = map__57756__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq57750){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq57750));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e57767){if((e57767 instanceof Error)){
var e = e57767;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e57767;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__57773){
var map__57774 = p__57773;
var map__57774__$1 = ((((!((map__57774 == null)))?((((map__57774.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57774.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57774):map__57774);
var msg_name = cljs.core.get.call(null,map__57774__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1493584954590