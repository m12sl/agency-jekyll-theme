/*!CK:3975278337!*//*1453237231,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["vZizm"]); }

__d('legacy:contact-importer-util',['CIUtil'],function a(b,c,d,e){if(c.__markCompiled)c.__markCompiled();b.CIUtil=c('CIUtil');},3);
__d('AudienceAlignment',['Arbiter','AsyncRequest','AudienceSelector','ComposerXStore','ContextualDialog','CSS','cx','DialogExpansion','DOM','Event','Focus','Keys','ModalMask','PrivacyConst','Run','SelectorDeprecated','Style','XPrivacyAudienceAlignmentLoggingController','curry','tidyEvent'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,aa){if(c.__markCompiled)c.__markCompiled();var ba=false,ca,da,ea,fa;function ga(jb,kb){jb.setContext(kb);jb.show();}function ha(jb,kb){var lb=x.get(kb.getContentRoot(),'margin-top');jb.setWidth(this.aaa_dialog_width);jb.show();x.set(jb.getContentRoot(),'margin-top',lb);}var ia='wwwtux',ja='onlyme-wwwtux',ka='exposed',la='public_sticky',ma='friends_sticky',na='only_me_sticky',oa='custom_selection',pa='selector',qa='holdout',ra='dismissal',sa='learn_more',ta='blur',ua='posted';function va(jb,event,kb){var lb=y.getURIBuilder().setEnum('product',jb).setEnum('event',event).setInt('client_time',Date.now());fa&&lb.setFloat('shown_duration',(Date.now()-fa)/1000);kb&&lb.setInt('value',kb);var mb=new i().setURI(lb.getURI());mb.send();}function wa(jb,kb,lb,mb,nb){if(ba)return false;if(!p.contains(document.body,kb.getRoot()))return false;var ob=k.get(lb,'maininput');if(ob&&ob.instance.getValue())return false;if(!mb)return false;var pb=null;if(nb){pb=nb.getSelectedBaseValue();}else pb=parseInt(w.getValue(mb),10);return pb===jb;}function xa(){var jb=p.scry(document.body,'#pagelet_timeline_recent');if(jb.length>=1){var kb=p.scry(jb[0],'li.fbTimelineComposerCapsule');if(kb.length>=1)return kb[0];}return null;}function ya(jb,kb,lb,mb){var nb;if(mb){nb=mb.getMenuElement();}else{var ob=p.find(lb,'div.audienceSelector');nb=p.scry(ob,'div.wrap');}if(nb.length<1)return;var pb=xa(),qb;if(mb){mb.subscribeOnce('open',function(){if(pb)m.addClass(pb,"_2wc-");l.setContext(kb,nb);kb.show();});}else qb=w.listen(ob,'open',function(){var tb=p.scry(nb[0],'div.uiSelectorMenuWrapper');if(tb.length>0){if(pb)m.addClass(pb,"_2wc-");l.setContext(kb,tb[0]);kb.setOffsetX(12);kb.show();}else t.hide();w.unsubscribe(qb);});if(mb){mb.getPopover().subscribeOnce('hide',function(){za(kb,nb,pb,jb);});}else var rb=w.listen(ob,'close',function(){za(kb,nb[0],pb,jb);w.unsubscribe(rb);});if(mb){m.addClass(nb,"_35mn");var sb=mb.getTriggerButtonElement();m.addClass(sb,"_35mn");}else m.addClass(nb[0],"_35mn");setTimeout(function(){t.show();x.set(t.getNode(),'opacity','0.3');x.set(t.getNode(),'background-color','rgb(0,0,0)');if(mb){mb.openSelectorExpanded();}else w.toggle(ob);},20);}function za(jb,kb,lb,mb){t.hide();jb.hide();m.removeClass(kb,"_35mn");if(lb)m.removeClass(lb,"_2wc-");r.set(p.find(mb.getRoot(),'textarea.input'));}function ab(jb,kb,lb){jb.unsubscribe(da);jb.hide();r.set(p.find(kb.getRoot(),'textarea.input'));ea=q.listen(kb.getRoot(),'submit',function(){va(lb,ua);ea&&ea.remove();});aa(ea);}function bb(jb){var kb=db(jb);return kb&&kb.element;}function cb(jb){var kb=db(jb);return kb&&kb.instance&&kb.instance.getInstance().getInstance();}function db(jb){return k.get(jb,'mainprivacywidget');}function eb(jb,kb,lb,mb,nb,ob){var pb=bb(jb),qb=cb(jb),rb=hb(mb),sb=gb(mb);if(rb===null||!sb)return;ab(lb,kb,ob);if(qb){qb.selectOption(rb);}else j.setAudience(kb.getRoot(),mb);ga(nb,pb);va(ob,sb);}function fb(jb){switch(jb){case u.BaseValue.EVERYONE:return ia;case u.BaseValue.SELF:return ja;default:return null;}}function gb(jb){switch(jb){case u.BaseValue.EVERYONE:return la;case u.BaseValue.ALL_FRIENDS:return ma;case u.BaseValue.SELF:return na;default:return null;}}function hb(jb){switch(jb){case u.BaseValue.EVERYONE:return u.PostParam.EVERYONE;case u.BaseValue.ALL_FRIENDS:return u.PostParam.FRIENDS;case u.BaseValue.SELF:return u.PostParam.ONLY_ME;default:return null;}}var ib={abort:function(){ba=true;},startOnComposerFocus:function(jb,kb,lb,mb,nb,ob,pb,qb,rb,sb,tb,ub,vb,wb,xb,yb,zb,ac,bc){var cc=fb(jb);if(!cc)return;var dc=h.subscribeOnce('composerprivacy/aborteducation',this.abort.bind(this)),ec=h.subscribe('composer/focus',function(){var fc=bb(bc),gc=cb(bc);if(wa(jb,lb,bc,fc,gc)){fa=Date.now();if(kb){va(cc,qa);}else{va(cc,ka);setTimeout(function(){mb.show();var hc=ub.parentElement;this.aaa_dialog_width=mb.getWidth()+hc.offsetWidth-490;var ic=new o(mb);ic.setTargetWidth(this.aaa_dialog_width);ic._onAfterShow();r.set(mb.getRoot());},100);}}});q.listen(ub,'click',z(eb,bc,lb,mb,tb,nb,cc));q.listen(wb,'click',z(eb,bc,lb,mb,vb,ob,cc));q.listen(xb,'click',function(){mb.subscribe('hide',function(){var fc=bb(bc),gc=cb(bc);if(gc)gc.subscribeOnce('changed',function(event,hc){va(cc,oa,hc.base_value);});if(pb)ya(lb,pb,fc,gc);});ab(mb,lb,cc);va(cc,pa);});if(yb)q.listen(yb,'click',function(){var fc=bb(bc);ab(mb,lb,cc);va(cc,ra);if(qb)ga(qb,fc);});da=mb.subscribe('hide',function(){var fc=bb(bc);r.set(p.find(lb.getRoot(),'textarea.input'));va(cc,ra);if(rb)ga(rb,fc);});ca=mb.subscribe('blur',function(){va(cc,ta);});q.listen(zb,'click',function(event){ha(sb,mb);va(cc,sa);});q.listen(ac,'click',function(event){sb.hide();});if(yb)q.listen(sb.getRoot(),'keydown',function(event){if(q.getKeyCode(event)===s.ESC){sb.hide();q.kill(event);}});v.onLeave(function(){h.unsubscribe(ec);h.unsubscribe(dc);});}};f.exports=ib;},null);