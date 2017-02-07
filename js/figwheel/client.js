// Compiled by ClojureScript 1.9.456 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__31957 = cljs.core._EQ_;
var expr__31958 = (function (){var or__20675__auto__ = localStorage.getItem("figwheel_autoload");
if(cljs.core.truth_(or__20675__auto__)){
return or__20675__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__31957.call(null,"true",expr__31958))){
return true;
} else {
if(cljs.core.truth_(pred__31957.call(null,"false",expr__31958))){
return false;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__31958)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel autoloading "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.repl_print_fn = (function figwheel$client$repl_print_fn(var_args){
var args__21903__auto__ = [];
var len__21896__auto___31971 = arguments.length;
var i__21897__auto___31972 = (0);
while(true){
if((i__21897__auto___31972 < len__21896__auto___31971)){
args__21903__auto__.push((arguments[i__21897__auto___31972]));

var G__31973 = (i__21897__auto___31972 + (1));
i__21897__auto___31972 = G__31973;
continue;
} else {
}
break;
}

var argseq__21904__auto__ = ((((0) < args__21903__auto__.length))?(new cljs.core.IndexedSeq(args__21903__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__21904__auto__);
});

figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));

return null;
});

figwheel.client.repl_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_print_fn.cljs$lang$applyTo = (function (seq31966){
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31966));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__31983){
var map__31991 = p__31983;
var map__31991__$1 = ((((!((map__31991 == null)))?((((map__31991.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31991.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31991):map__31991);
var message = cljs.core.get.call(null,map__31991__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__31991__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" : "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__20675__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__20675__auto__)){
return or__20675__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__20663__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__20663__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__20663__auto__;
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
var c__24836__auto___32207 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24836__auto___32207,ch){
return (function (){
var f__24837__auto__ = (function (){var switch__24601__auto__ = ((function (c__24836__auto___32207,ch){
return (function (state_32168){
var state_val_32169 = (state_32168[(1)]);
if((state_val_32169 === (7))){
var inst_32164 = (state_32168[(2)]);
var state_32168__$1 = state_32168;
var statearr_32170_32210 = state_32168__$1;
(statearr_32170_32210[(2)] = inst_32164);

(statearr_32170_32210[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32169 === (1))){
var state_32168__$1 = state_32168;
var statearr_32173_32211 = state_32168__$1;
(statearr_32173_32211[(2)] = null);

(statearr_32173_32211[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32169 === (4))){
var inst_32119 = (state_32168[(7)]);
var inst_32119__$1 = (state_32168[(2)]);
var state_32168__$1 = (function (){var statearr_32174 = state_32168;
(statearr_32174[(7)] = inst_32119__$1);

return statearr_32174;
})();
if(cljs.core.truth_(inst_32119__$1)){
var statearr_32175_32214 = state_32168__$1;
(statearr_32175_32214[(1)] = (5));

} else {
var statearr_32176_32215 = state_32168__$1;
(statearr_32176_32215[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32169 === (15))){
var inst_32126 = (state_32168[(8)]);
var inst_32143 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_32126);
var inst_32144 = cljs.core.first.call(null,inst_32143);
var inst_32145 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_32144);
var inst_32146 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Not loading code with warnings - "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_32145)].join('');
var inst_32147 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_32146);
var state_32168__$1 = state_32168;
var statearr_32177_32220 = state_32168__$1;
(statearr_32177_32220[(2)] = inst_32147);

(statearr_32177_32220[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32169 === (13))){
var inst_32152 = (state_32168[(2)]);
var state_32168__$1 = state_32168;
var statearr_32178_32221 = state_32168__$1;
(statearr_32178_32221[(2)] = inst_32152);

(statearr_32178_32221[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32169 === (6))){
var state_32168__$1 = state_32168;
var statearr_32181_32224 = state_32168__$1;
(statearr_32181_32224[(2)] = null);

(statearr_32181_32224[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32169 === (17))){
var inst_32150 = (state_32168[(2)]);
var state_32168__$1 = state_32168;
var statearr_32182_32225 = state_32168__$1;
(statearr_32182_32225[(2)] = inst_32150);

(statearr_32182_32225[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32169 === (3))){
var inst_32166 = (state_32168[(2)]);
var state_32168__$1 = state_32168;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32168__$1,inst_32166);
} else {
if((state_val_32169 === (12))){
var inst_32125 = (state_32168[(9)]);
var inst_32141 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_32125,opts);
var state_32168__$1 = state_32168;
if(cljs.core.truth_(inst_32141)){
var statearr_32183_32228 = state_32168__$1;
(statearr_32183_32228[(1)] = (15));

} else {
var statearr_32184_32229 = state_32168__$1;
(statearr_32184_32229[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32169 === (2))){
var state_32168__$1 = state_32168;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32168__$1,(4),ch);
} else {
if((state_val_32169 === (11))){
var inst_32126 = (state_32168[(8)]);
var inst_32131 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32132 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_32126);
var inst_32133 = cljs.core.async.timeout.call(null,(1000));
var inst_32134 = [inst_32132,inst_32133];
var inst_32135 = (new cljs.core.PersistentVector(null,2,(5),inst_32131,inst_32134,null));
var state_32168__$1 = state_32168;
return cljs.core.async.ioc_alts_BANG_.call(null,state_32168__$1,(14),inst_32135);
} else {
if((state_val_32169 === (9))){
var inst_32126 = (state_32168[(8)]);
var inst_32154 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_32155 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_32126);
var inst_32156 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_32155);
var inst_32157 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Not loading: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_32156)].join('');
var inst_32158 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_32157);
var state_32168__$1 = (function (){var statearr_32187 = state_32168;
(statearr_32187[(10)] = inst_32154);

return statearr_32187;
})();
var statearr_32188_32238 = state_32168__$1;
(statearr_32188_32238[(2)] = inst_32158);

(statearr_32188_32238[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32169 === (5))){
var inst_32119 = (state_32168[(7)]);
var inst_32121 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_32122 = (new cljs.core.PersistentArrayMap(null,2,inst_32121,null));
var inst_32123 = (new cljs.core.PersistentHashSet(null,inst_32122,null));
var inst_32124 = figwheel.client.focus_msgs.call(null,inst_32123,inst_32119);
var inst_32125 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_32124);
var inst_32126 = cljs.core.first.call(null,inst_32124);
var inst_32127 = figwheel.client.autoload_QMARK_.call(null);
var state_32168__$1 = (function (){var statearr_32189 = state_32168;
(statearr_32189[(8)] = inst_32126);

(statearr_32189[(9)] = inst_32125);

return statearr_32189;
})();
if(cljs.core.truth_(inst_32127)){
var statearr_32190_32243 = state_32168__$1;
(statearr_32190_32243[(1)] = (8));

} else {
var statearr_32191_32244 = state_32168__$1;
(statearr_32191_32244[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32169 === (14))){
var inst_32137 = (state_32168[(2)]);
var state_32168__$1 = state_32168;
var statearr_32192_32247 = state_32168__$1;
(statearr_32192_32247[(2)] = inst_32137);

(statearr_32192_32247[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32169 === (16))){
var state_32168__$1 = state_32168;
var statearr_32193_32248 = state_32168__$1;
(statearr_32193_32248[(2)] = null);

(statearr_32193_32248[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32169 === (10))){
var inst_32160 = (state_32168[(2)]);
var state_32168__$1 = (function (){var statearr_32194 = state_32168;
(statearr_32194[(11)] = inst_32160);

return statearr_32194;
})();
var statearr_32197_32249 = state_32168__$1;
(statearr_32197_32249[(2)] = null);

(statearr_32197_32249[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32169 === (8))){
var inst_32125 = (state_32168[(9)]);
var inst_32129 = figwheel.client.reload_file_state_QMARK_.call(null,inst_32125,opts);
var state_32168__$1 = state_32168;
if(cljs.core.truth_(inst_32129)){
var statearr_32198_32252 = state_32168__$1;
(statearr_32198_32252[(1)] = (11));

} else {
var statearr_32199_32253 = state_32168__$1;
(statearr_32199_32253[(1)] = (12));

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
});})(c__24836__auto___32207,ch))
;
return ((function (switch__24601__auto__,c__24836__auto___32207,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__24602__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__24602__auto____0 = (function (){
var statearr_32203 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32203[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__24602__auto__);

(statearr_32203[(1)] = (1));

return statearr_32203;
});
var figwheel$client$file_reloader_plugin_$_state_machine__24602__auto____1 = (function (state_32168){
while(true){
var ret_value__24603__auto__ = (function (){try{while(true){
var result__24604__auto__ = switch__24601__auto__.call(null,state_32168);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24604__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24604__auto__;
}
break;
}
}catch (e32204){if((e32204 instanceof Object)){
var ex__24605__auto__ = e32204;
var statearr_32205_32258 = state_32168;
(statearr_32205_32258[(5)] = ex__24605__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32168);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32204;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24603__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32259 = state_32168;
state_32168 = G__32259;
continue;
} else {
return ret_value__24603__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__24602__auto__ = function(state_32168){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__24602__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__24602__auto____1.call(this,state_32168);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__24602__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__24602__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__24602__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__24602__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__24602__auto__;
})()
;})(switch__24601__auto__,c__24836__auto___32207,ch))
})();
var state__24838__auto__ = (function (){var statearr_32206 = f__24837__auto__.call(null);
(statearr_32206[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24836__auto___32207);

return statearr_32206;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24838__auto__);
});})(c__24836__auto___32207,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__32264_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__32264_SHARP_));
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
var base_path_32277 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_32277){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_32273 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_32274 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),figwheel.client.utils.eval_helper.call(null,code,opts)], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_32274;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_32273;
}}catch (e32272){if((e32272 instanceof Error)){
var e = e32272;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_32277], null));
} else {
var e = e32272;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_32277))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__32282){
var map__32293 = p__32282;
var map__32293__$1 = ((((!((map__32293 == null)))?((((map__32293.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32293.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32293):map__32293);
var opts = map__32293__$1;
var build_id = cljs.core.get.call(null,map__32293__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__32293,map__32293__$1,opts,build_id){
return (function (p__32297){
var vec__32298 = p__32297;
var seq__32299 = cljs.core.seq.call(null,vec__32298);
var first__32300 = cljs.core.first.call(null,seq__32299);
var seq__32299__$1 = cljs.core.next.call(null,seq__32299);
var map__32301 = first__32300;
var map__32301__$1 = ((((!((map__32301 == null)))?((((map__32301.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32301.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32301):map__32301);
var msg = map__32301__$1;
var msg_name = cljs.core.get.call(null,map__32301__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__32299__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__32298,seq__32299,first__32300,seq__32299__$1,map__32301,map__32301__$1,msg,msg_name,_,map__32293,map__32293__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__32298,seq__32299,first__32300,seq__32299__$1,map__32301,map__32301__$1,msg,msg_name,_,map__32293,map__32293__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__32293,map__32293__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__32317){
var vec__32318 = p__32317;
var seq__32319 = cljs.core.seq.call(null,vec__32318);
var first__32320 = cljs.core.first.call(null,seq__32319);
var seq__32319__$1 = cljs.core.next.call(null,seq__32319);
var map__32321 = first__32320;
var map__32321__$1 = ((((!((map__32321 == null)))?((((map__32321.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32321.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32321):map__32321);
var msg = map__32321__$1;
var msg_name = cljs.core.get.call(null,map__32321__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__32319__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__32327){
var map__32341 = p__32327;
var map__32341__$1 = ((((!((map__32341 == null)))?((((map__32341.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32341.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32341):map__32341);
var on_compile_warning = cljs.core.get.call(null,map__32341__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__32341__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__32341,map__32341__$1,on_compile_warning,on_compile_fail){
return (function (p__32343){
var vec__32344 = p__32343;
var seq__32345 = cljs.core.seq.call(null,vec__32344);
var first__32346 = cljs.core.first.call(null,seq__32345);
var seq__32345__$1 = cljs.core.next.call(null,seq__32345);
var map__32347 = first__32346;
var map__32347__$1 = ((((!((map__32347 == null)))?((((map__32347.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32347.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32347):map__32347);
var msg = map__32347__$1;
var msg_name = cljs.core.get.call(null,map__32347__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__32345__$1;
var pred__32351 = cljs.core._EQ_;
var expr__32352 = msg_name;
if(cljs.core.truth_(pred__32351.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__32352))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__32351.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__32352))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__32341,map__32341__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__24836__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24836__auto__,msg_hist,msg_names,msg){
return (function (){
var f__24837__auto__ = (function (){var switch__24601__auto__ = ((function (c__24836__auto__,msg_hist,msg_names,msg){
return (function (state_32584){
var state_val_32585 = (state_32584[(1)]);
if((state_val_32585 === (7))){
var inst_32508 = (state_32584[(2)]);
var state_32584__$1 = state_32584;
if(cljs.core.truth_(inst_32508)){
var statearr_32586_32648 = state_32584__$1;
(statearr_32586_32648[(1)] = (8));

} else {
var statearr_32587_32649 = state_32584__$1;
(statearr_32587_32649[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32585 === (20))){
var inst_32578 = (state_32584[(2)]);
var state_32584__$1 = state_32584;
var statearr_32588_32652 = state_32584__$1;
(statearr_32588_32652[(2)] = inst_32578);

(statearr_32588_32652[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32585 === (27))){
var inst_32574 = (state_32584[(2)]);
var state_32584__$1 = state_32584;
var statearr_32589_32653 = state_32584__$1;
(statearr_32589_32653[(2)] = inst_32574);

(statearr_32589_32653[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32585 === (1))){
var inst_32501 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_32584__$1 = state_32584;
if(cljs.core.truth_(inst_32501)){
var statearr_32590_32656 = state_32584__$1;
(statearr_32590_32656[(1)] = (2));

} else {
var statearr_32593_32657 = state_32584__$1;
(statearr_32593_32657[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32585 === (24))){
var inst_32576 = (state_32584[(2)]);
var state_32584__$1 = state_32584;
var statearr_32594_32658 = state_32584__$1;
(statearr_32594_32658[(2)] = inst_32576);

(statearr_32594_32658[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32585 === (4))){
var inst_32582 = (state_32584[(2)]);
var state_32584__$1 = state_32584;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32584__$1,inst_32582);
} else {
if((state_val_32585 === (15))){
var inst_32580 = (state_32584[(2)]);
var state_32584__$1 = state_32584;
var statearr_32595_32661 = state_32584__$1;
(statearr_32595_32661[(2)] = inst_32580);

(statearr_32595_32661[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32585 === (21))){
var inst_32539 = (state_32584[(2)]);
var state_32584__$1 = state_32584;
var statearr_32596_32664 = state_32584__$1;
(statearr_32596_32664[(2)] = inst_32539);

(statearr_32596_32664[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32585 === (31))){
var inst_32563 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_32584__$1 = state_32584;
if(cljs.core.truth_(inst_32563)){
var statearr_32597_32665 = state_32584__$1;
(statearr_32597_32665[(1)] = (34));

} else {
var statearr_32598_32667 = state_32584__$1;
(statearr_32598_32667[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32585 === (32))){
var inst_32572 = (state_32584[(2)]);
var state_32584__$1 = state_32584;
var statearr_32599_32669 = state_32584__$1;
(statearr_32599_32669[(2)] = inst_32572);

(statearr_32599_32669[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32585 === (33))){
var inst_32561 = (state_32584[(2)]);
var state_32584__$1 = state_32584;
var statearr_32602_32670 = state_32584__$1;
(statearr_32602_32670[(2)] = inst_32561);

(statearr_32602_32670[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32585 === (13))){
var inst_32522 = figwheel.client.heads_up.clear.call(null);
var state_32584__$1 = state_32584;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32584__$1,(16),inst_32522);
} else {
if((state_val_32585 === (22))){
var inst_32543 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32544 = figwheel.client.heads_up.append_message.call(null,inst_32543);
var state_32584__$1 = state_32584;
var statearr_32603_32673 = state_32584__$1;
(statearr_32603_32673[(2)] = inst_32544);

(statearr_32603_32673[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32585 === (36))){
var inst_32570 = (state_32584[(2)]);
var state_32584__$1 = state_32584;
var statearr_32604_32676 = state_32584__$1;
(statearr_32604_32676[(2)] = inst_32570);

(statearr_32604_32676[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32585 === (29))){
var inst_32554 = (state_32584[(2)]);
var state_32584__$1 = state_32584;
var statearr_32605_32678 = state_32584__$1;
(statearr_32605_32678[(2)] = inst_32554);

(statearr_32605_32678[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32585 === (6))){
var inst_32503 = (state_32584[(7)]);
var state_32584__$1 = state_32584;
var statearr_32606_32679 = state_32584__$1;
(statearr_32606_32679[(2)] = inst_32503);

(statearr_32606_32679[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32585 === (28))){
var inst_32550 = (state_32584[(2)]);
var inst_32551 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32552 = figwheel.client.heads_up.display_warning.call(null,inst_32551);
var state_32584__$1 = (function (){var statearr_32607 = state_32584;
(statearr_32607[(8)] = inst_32550);

return statearr_32607;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32584__$1,(29),inst_32552);
} else {
if((state_val_32585 === (25))){
var inst_32548 = figwheel.client.heads_up.clear.call(null);
var state_32584__$1 = state_32584;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32584__$1,(28),inst_32548);
} else {
if((state_val_32585 === (34))){
var inst_32565 = figwheel.client.heads_up.flash_loaded.call(null);
var state_32584__$1 = state_32584;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32584__$1,(37),inst_32565);
} else {
if((state_val_32585 === (17))){
var inst_32530 = (state_32584[(2)]);
var state_32584__$1 = state_32584;
var statearr_32610_32683 = state_32584__$1;
(statearr_32610_32683[(2)] = inst_32530);

(statearr_32610_32683[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32585 === (3))){
var inst_32520 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_32584__$1 = state_32584;
if(cljs.core.truth_(inst_32520)){
var statearr_32611_32686 = state_32584__$1;
(statearr_32611_32686[(1)] = (13));

} else {
var statearr_32612_32688 = state_32584__$1;
(statearr_32612_32688[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32585 === (12))){
var inst_32516 = (state_32584[(2)]);
var state_32584__$1 = state_32584;
var statearr_32613_32689 = state_32584__$1;
(statearr_32613_32689[(2)] = inst_32516);

(statearr_32613_32689[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32585 === (2))){
var inst_32503 = (state_32584[(7)]);
var inst_32503__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_32584__$1 = (function (){var statearr_32614 = state_32584;
(statearr_32614[(7)] = inst_32503__$1);

return statearr_32614;
})();
if(cljs.core.truth_(inst_32503__$1)){
var statearr_32615_32690 = state_32584__$1;
(statearr_32615_32690[(1)] = (5));

} else {
var statearr_32616_32691 = state_32584__$1;
(statearr_32616_32691[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32585 === (23))){
var inst_32546 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_32584__$1 = state_32584;
if(cljs.core.truth_(inst_32546)){
var statearr_32619_32697 = state_32584__$1;
(statearr_32619_32697[(1)] = (25));

} else {
var statearr_32620_32698 = state_32584__$1;
(statearr_32620_32698[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32585 === (35))){
var state_32584__$1 = state_32584;
var statearr_32621_32700 = state_32584__$1;
(statearr_32621_32700[(2)] = null);

(statearr_32621_32700[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32585 === (19))){
var inst_32541 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_32584__$1 = state_32584;
if(cljs.core.truth_(inst_32541)){
var statearr_32622_32701 = state_32584__$1;
(statearr_32622_32701[(1)] = (22));

} else {
var statearr_32623_32702 = state_32584__$1;
(statearr_32623_32702[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32585 === (11))){
var inst_32512 = (state_32584[(2)]);
var state_32584__$1 = state_32584;
var statearr_32624_32705 = state_32584__$1;
(statearr_32624_32705[(2)] = inst_32512);

(statearr_32624_32705[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32585 === (9))){
var inst_32514 = figwheel.client.heads_up.clear.call(null);
var state_32584__$1 = state_32584;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32584__$1,(12),inst_32514);
} else {
if((state_val_32585 === (5))){
var inst_32505 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_32584__$1 = state_32584;
var statearr_32625_32711 = state_32584__$1;
(statearr_32625_32711[(2)] = inst_32505);

(statearr_32625_32711[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32585 === (14))){
var inst_32532 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_32584__$1 = state_32584;
if(cljs.core.truth_(inst_32532)){
var statearr_32626_32715 = state_32584__$1;
(statearr_32626_32715[(1)] = (18));

} else {
var statearr_32627_32716 = state_32584__$1;
(statearr_32627_32716[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32585 === (26))){
var inst_32556 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_32584__$1 = state_32584;
if(cljs.core.truth_(inst_32556)){
var statearr_32630_32717 = state_32584__$1;
(statearr_32630_32717[(1)] = (30));

} else {
var statearr_32631_32718 = state_32584__$1;
(statearr_32631_32718[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32585 === (16))){
var inst_32524 = (state_32584[(2)]);
var inst_32525 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32526 = figwheel.client.format_messages.call(null,inst_32525);
var inst_32527 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32528 = figwheel.client.heads_up.display_error.call(null,inst_32526,inst_32527);
var state_32584__$1 = (function (){var statearr_32632 = state_32584;
(statearr_32632[(9)] = inst_32524);

return statearr_32632;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32584__$1,(17),inst_32528);
} else {
if((state_val_32585 === (30))){
var inst_32558 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32559 = figwheel.client.heads_up.display_warning.call(null,inst_32558);
var state_32584__$1 = state_32584;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32584__$1,(33),inst_32559);
} else {
if((state_val_32585 === (10))){
var inst_32518 = (state_32584[(2)]);
var state_32584__$1 = state_32584;
var statearr_32633_32722 = state_32584__$1;
(statearr_32633_32722[(2)] = inst_32518);

(statearr_32633_32722[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32585 === (18))){
var inst_32534 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32535 = figwheel.client.format_messages.call(null,inst_32534);
var inst_32536 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32537 = figwheel.client.heads_up.display_error.call(null,inst_32535,inst_32536);
var state_32584__$1 = state_32584;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32584__$1,(21),inst_32537);
} else {
if((state_val_32585 === (37))){
var inst_32567 = (state_32584[(2)]);
var state_32584__$1 = state_32584;
var statearr_32634_32723 = state_32584__$1;
(statearr_32634_32723[(2)] = inst_32567);

(statearr_32634_32723[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32585 === (8))){
var inst_32510 = figwheel.client.heads_up.flash_loaded.call(null);
var state_32584__$1 = state_32584;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32584__$1,(11),inst_32510);
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
});})(c__24836__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__24601__auto__,c__24836__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24602__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24602__auto____0 = (function (){
var statearr_32640 = [null,null,null,null,null,null,null,null,null,null];
(statearr_32640[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24602__auto__);

(statearr_32640[(1)] = (1));

return statearr_32640;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24602__auto____1 = (function (state_32584){
while(true){
var ret_value__24603__auto__ = (function (){try{while(true){
var result__24604__auto__ = switch__24601__auto__.call(null,state_32584);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24604__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24604__auto__;
}
break;
}
}catch (e32641){if((e32641 instanceof Object)){
var ex__24605__auto__ = e32641;
var statearr_32642_32727 = state_32584;
(statearr_32642_32727[(5)] = ex__24605__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32584);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32641;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24603__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32728 = state_32584;
state_32584 = G__32728;
continue;
} else {
return ret_value__24603__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24602__auto__ = function(state_32584){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24602__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24602__auto____1.call(this,state_32584);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24602__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24602__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24602__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24602__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24602__auto__;
})()
;})(switch__24601__auto__,c__24836__auto__,msg_hist,msg_names,msg))
})();
var state__24838__auto__ = (function (){var statearr_32645 = f__24837__auto__.call(null);
(statearr_32645[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24836__auto__);

return statearr_32645;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24838__auto__);
});})(c__24836__auto__,msg_hist,msg_names,msg))
);

return c__24836__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__24836__auto___32803 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24836__auto___32803,ch){
return (function (){
var f__24837__auto__ = (function (){var switch__24601__auto__ = ((function (c__24836__auto___32803,ch){
return (function (state_32783){
var state_val_32784 = (state_32783[(1)]);
if((state_val_32784 === (1))){
var state_32783__$1 = state_32783;
var statearr_32785_32806 = state_32783__$1;
(statearr_32785_32806[(2)] = null);

(statearr_32785_32806[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32784 === (2))){
var state_32783__$1 = state_32783;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32783__$1,(4),ch);
} else {
if((state_val_32784 === (3))){
var inst_32780 = (state_32783[(2)]);
var state_32783__$1 = state_32783;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32783__$1,inst_32780);
} else {
if((state_val_32784 === (4))){
var inst_32770 = (state_32783[(7)]);
var inst_32770__$1 = (state_32783[(2)]);
var state_32783__$1 = (function (){var statearr_32786 = state_32783;
(statearr_32786[(7)] = inst_32770__$1);

return statearr_32786;
})();
if(cljs.core.truth_(inst_32770__$1)){
var statearr_32787_32808 = state_32783__$1;
(statearr_32787_32808[(1)] = (5));

} else {
var statearr_32788_32809 = state_32783__$1;
(statearr_32788_32809[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32784 === (5))){
var inst_32770 = (state_32783[(7)]);
var inst_32772 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_32770);
var state_32783__$1 = state_32783;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32783__$1,(8),inst_32772);
} else {
if((state_val_32784 === (6))){
var state_32783__$1 = state_32783;
var statearr_32789_32813 = state_32783__$1;
(statearr_32789_32813[(2)] = null);

(statearr_32789_32813[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32784 === (7))){
var inst_32778 = (state_32783[(2)]);
var state_32783__$1 = state_32783;
var statearr_32790_32814 = state_32783__$1;
(statearr_32790_32814[(2)] = inst_32778);

(statearr_32790_32814[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32784 === (8))){
var inst_32774 = (state_32783[(2)]);
var state_32783__$1 = (function (){var statearr_32791 = state_32783;
(statearr_32791[(8)] = inst_32774);

return statearr_32791;
})();
var statearr_32792_32815 = state_32783__$1;
(statearr_32792_32815[(2)] = null);

(statearr_32792_32815[(1)] = (2));


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
});})(c__24836__auto___32803,ch))
;
return ((function (switch__24601__auto__,c__24836__auto___32803,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__24602__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__24602__auto____0 = (function (){
var statearr_32799 = [null,null,null,null,null,null,null,null,null];
(statearr_32799[(0)] = figwheel$client$heads_up_plugin_$_state_machine__24602__auto__);

(statearr_32799[(1)] = (1));

return statearr_32799;
});
var figwheel$client$heads_up_plugin_$_state_machine__24602__auto____1 = (function (state_32783){
while(true){
var ret_value__24603__auto__ = (function (){try{while(true){
var result__24604__auto__ = switch__24601__auto__.call(null,state_32783);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24604__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24604__auto__;
}
break;
}
}catch (e32800){if((e32800 instanceof Object)){
var ex__24605__auto__ = e32800;
var statearr_32801_32819 = state_32783;
(statearr_32801_32819[(5)] = ex__24605__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32783);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32800;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24603__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32820 = state_32783;
state_32783 = G__32820;
continue;
} else {
return ret_value__24603__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__24602__auto__ = function(state_32783){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__24602__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__24602__auto____1.call(this,state_32783);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__24602__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__24602__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__24602__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__24602__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__24602__auto__;
})()
;})(switch__24601__auto__,c__24836__auto___32803,ch))
})();
var state__24838__auto__ = (function (){var statearr_32802 = f__24837__auto__.call(null);
(statearr_32802[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24836__auto___32803);

return statearr_32802;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24838__auto__);
});})(c__24836__auto___32803,ch))
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
var c__24836__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24836__auto__){
return (function (){
var f__24837__auto__ = (function (){var switch__24601__auto__ = ((function (c__24836__auto__){
return (function (state_32847){
var state_val_32848 = (state_32847[(1)]);
if((state_val_32848 === (1))){
var inst_32842 = cljs.core.async.timeout.call(null,(3000));
var state_32847__$1 = state_32847;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32847__$1,(2),inst_32842);
} else {
if((state_val_32848 === (2))){
var inst_32844 = (state_32847[(2)]);
var inst_32845 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_32847__$1 = (function (){var statearr_32849 = state_32847;
(statearr_32849[(7)] = inst_32844);

return statearr_32849;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32847__$1,inst_32845);
} else {
return null;
}
}
});})(c__24836__auto__))
;
return ((function (switch__24601__auto__,c__24836__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__24602__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__24602__auto____0 = (function (){
var statearr_32853 = [null,null,null,null,null,null,null,null];
(statearr_32853[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__24602__auto__);

(statearr_32853[(1)] = (1));

return statearr_32853;
});
var figwheel$client$enforce_project_plugin_$_state_machine__24602__auto____1 = (function (state_32847){
while(true){
var ret_value__24603__auto__ = (function (){try{while(true){
var result__24604__auto__ = switch__24601__auto__.call(null,state_32847);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24604__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24604__auto__;
}
break;
}
}catch (e32854){if((e32854 instanceof Object)){
var ex__24605__auto__ = e32854;
var statearr_32855_32866 = state_32847;
(statearr_32855_32866[(5)] = ex__24605__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32847);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32854;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24603__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32867 = state_32847;
state_32847 = G__32867;
continue;
} else {
return ret_value__24603__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__24602__auto__ = function(state_32847){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__24602__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__24602__auto____1.call(this,state_32847);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__24602__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__24602__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__24602__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__24602__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__24602__auto__;
})()
;})(switch__24601__auto__,c__24836__auto__))
})();
var state__24838__auto__ = (function (){var statearr_32856 = f__24837__auto__.call(null);
(statearr_32856[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24836__auto__);

return statearr_32856;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24838__auto__);
});})(c__24836__auto__))
);

return c__24836__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__32871){
var map__32878 = p__32871;
var map__32878__$1 = ((((!((map__32878 == null)))?((((map__32878.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32878.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32878):map__32878);
var ed = map__32878__$1;
var formatted_exception = cljs.core.get.call(null,map__32878__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__32878__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__32878__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__32882_32887 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__32883_32888 = null;
var count__32884_32889 = (0);
var i__32885_32890 = (0);
while(true){
if((i__32885_32890 < count__32884_32889)){
var msg_32891 = cljs.core._nth.call(null,chunk__32883_32888,i__32885_32890);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_32891);

var G__32892 = seq__32882_32887;
var G__32893 = chunk__32883_32888;
var G__32894 = count__32884_32889;
var G__32895 = (i__32885_32890 + (1));
seq__32882_32887 = G__32892;
chunk__32883_32888 = G__32893;
count__32884_32889 = G__32894;
i__32885_32890 = G__32895;
continue;
} else {
var temp__6753__auto___32898 = cljs.core.seq.call(null,seq__32882_32887);
if(temp__6753__auto___32898){
var seq__32882_32899__$1 = temp__6753__auto___32898;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32882_32899__$1)){
var c__21586__auto___32900 = cljs.core.chunk_first.call(null,seq__32882_32899__$1);
var G__32902 = cljs.core.chunk_rest.call(null,seq__32882_32899__$1);
var G__32903 = c__21586__auto___32900;
var G__32904 = cljs.core.count.call(null,c__21586__auto___32900);
var G__32905 = (0);
seq__32882_32887 = G__32902;
chunk__32883_32888 = G__32903;
count__32884_32889 = G__32904;
i__32885_32890 = G__32905;
continue;
} else {
var msg_32906 = cljs.core.first.call(null,seq__32882_32899__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_32906);

var G__32907 = cljs.core.next.call(null,seq__32882_32899__$1);
var G__32908 = null;
var G__32909 = (0);
var G__32910 = (0);
seq__32882_32887 = G__32907;
chunk__32883_32888 = G__32908;
count__32884_32889 = G__32909;
i__32885_32890 = G__32910;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Error on file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", line "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", column "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__32911){
var map__32914 = p__32911;
var map__32914__$1 = ((((!((map__32914 == null)))?((((map__32914.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32914.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32914):map__32914);
var w = map__32914__$1;
var message = cljs.core.get.call(null,map__32914__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Compile Warning - "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join(''));

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
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("ws://"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__20663__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__20663__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__20663__auto__;
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
var seq__32935 = cljs.core.seq.call(null,plugins);
var chunk__32936 = null;
var count__32937 = (0);
var i__32938 = (0);
while(true){
if((i__32938 < count__32937)){
var vec__32939 = cljs.core._nth.call(null,chunk__32936,i__32938);
var k = cljs.core.nth.call(null,vec__32939,(0),null);
var plugin = cljs.core.nth.call(null,vec__32939,(1),null);
if(cljs.core.truth_(plugin)){
var pl_32948 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__32935,chunk__32936,count__32937,i__32938,pl_32948,vec__32939,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_32948.call(null,msg_hist);
});})(seq__32935,chunk__32936,count__32937,i__32938,pl_32948,vec__32939,k,plugin))
);
} else {
}

var G__32949 = seq__32935;
var G__32950 = chunk__32936;
var G__32951 = count__32937;
var G__32952 = (i__32938 + (1));
seq__32935 = G__32949;
chunk__32936 = G__32950;
count__32937 = G__32951;
i__32938 = G__32952;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__32935);
if(temp__6753__auto__){
var seq__32935__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32935__$1)){
var c__21586__auto__ = cljs.core.chunk_first.call(null,seq__32935__$1);
var G__32953 = cljs.core.chunk_rest.call(null,seq__32935__$1);
var G__32954 = c__21586__auto__;
var G__32955 = cljs.core.count.call(null,c__21586__auto__);
var G__32956 = (0);
seq__32935 = G__32953;
chunk__32936 = G__32954;
count__32937 = G__32955;
i__32938 = G__32956;
continue;
} else {
var vec__32944 = cljs.core.first.call(null,seq__32935__$1);
var k = cljs.core.nth.call(null,vec__32944,(0),null);
var plugin = cljs.core.nth.call(null,vec__32944,(1),null);
if(cljs.core.truth_(plugin)){
var pl_32960 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__32935,chunk__32936,count__32937,i__32938,pl_32960,vec__32944,k,plugin,seq__32935__$1,temp__6753__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_32960.call(null,msg_hist);
});})(seq__32935,chunk__32936,count__32937,i__32938,pl_32960,vec__32944,k,plugin,seq__32935__$1,temp__6753__auto__))
);
} else {
}

var G__32961 = cljs.core.next.call(null,seq__32935__$1);
var G__32962 = null;
var G__32963 = (0);
var G__32964 = (0);
seq__32935 = G__32961;
chunk__32936 = G__32962;
count__32937 = G__32963;
i__32938 = G__32964;
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
var args32965 = [];
var len__21896__auto___32971 = arguments.length;
var i__21897__auto___32972 = (0);
while(true){
if((i__21897__auto___32972 < len__21896__auto___32971)){
args32965.push((arguments[i__21897__auto___32972]));

var G__32973 = (i__21897__auto___32972 + (1));
i__21897__auto___32972 = G__32973;
continue;
} else {
}
break;
}

var G__32967 = args32965.length;
switch (G__32967) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args32965.length)].join('')));

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
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

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
var args__21903__auto__ = [];
var len__21896__auto___32982 = arguments.length;
var i__21897__auto___32983 = (0);
while(true){
if((i__21897__auto___32983 < len__21896__auto___32982)){
args__21903__auto__.push((arguments[i__21897__auto___32983]));

var G__32984 = (i__21897__auto___32983 + (1));
i__21897__auto___32983 = G__32984;
continue;
} else {
}
break;
}

var argseq__21904__auto__ = ((((0) < args__21903__auto__.length))?(new cljs.core.IndexedSeq(args__21903__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__21904__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__32979){
var map__32980 = p__32979;
var map__32980__$1 = ((((!((map__32980 == null)))?((((map__32980.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32980.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32980):map__32980);
var opts = map__32980__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq32977){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32977));
});


//# sourceMappingURL=client.js.map