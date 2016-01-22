/*!CK:3488810786!*//*1453187130,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["\/wjof"]); }

__d("TimelineAppSectionConstants",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={collectionTabKeyToAppTabKey:{friends_recent:"friends",friends_all:"friends",friends_mutual:"friends",photos_of:"photos",photos_all:"photos",photos_albums:"photos",likes_recent:null,info_all:"about",music_my_music:"music",music_favs:"music",music_playlists:"music",books_read:"books",books_favorite:"books",books_want:"books",recent_places:null,fitness_overview:"fitness",friends_featured:null,places_want:null,info_contact:null,fitness_running:"fitness",fitness_cycling:"fitness",friends_followers:"friends",friends_following:"friends",music_radio:"music",info_history:null,recent_games:"games",products_want:null,photos_archive:"photos",notes_my_notes:"notes",notes_drafts:"notes",notes_about_me:"notes",video_movies_watch:"movies",video_tv_shows_watch:"tv",music_saved:"music",video_movies_want:"movies",video_tv_shows_want:"tv",video_movies_favorite:"movies",video_tv_shows_favorite:"tv",friends_high_school:"friends",friends_college:"friends",friends_work:"friends",friends_suggested:"friends",apps_like:"games",upcoming_events:"events",past_events:"events",likes_people:"likes",likes_sports:null,fitness_report:null,groups_member:"groups",music_heavy_rotation:"music",photos_album:"photos",music_mutual:"music",likes_restaurants:"likes",likes_clothing:null,info_insights:null,apps_used:"games",games_play:"games",games_apps_saved:"games",video_movies_suggestions:null,video_tv_shows_suggestions:null,books_suggestions:null,saved_books:"saved",saved_movies:"saved",saved_tv_shows:"saved",saved_music:"saved",places_saved:"map",saved_links:"saved",sports_teams:"sports",likes_all:"likes",saved_places:"saved",saved_all:"saved",sports_athletes:"sports",sports_activities:null,saved_events:"saved",saved_archived:"saved",places_recent:"map",places_visited:"map",reviews_written:"reviews",likes_section_movies:"likes",likes_section_tv_shows:"likes",likes_section_books:"likes",likes_section_music:"likes",likes_section_sports_teams:"likes",place_visits_by_place_tag:null,places_cities:"map",place_visits_by_city:null,topic_visit_counts:"map",place_visits_by_topic:null,place_visit_stories:null,places_map:"map",likes_section_apps_and_games:"likes",likes_section_sports_athletes:"likes",places_cities_desktop:"map",saved_videos:"saved",saved_pages:"saved",friends_with_upcoming_birthdays:"friends",friends_current_city:"friends",friends_hometown:"friends",at_work_contact:null,place_reviews_written:"reviews",movie_reviews_written:"reviews",tv_show_reviews_written:"reviews",book_reviews_written:"reviews",photos_all_expanded:"photos",videos_by_user:"videos",videos_user_tagged:"videos",external_videos_for_user:"videos",friends_map:"friends",videos_user_all:"videos",saved_posts:"saved",saved_photo_posts:"saved",saved_products:"saved",at_work_hr_info:null,friends_with_unseen_posts:"friends",groups_mutual:"groups",saved_profiles:"saved",followers:"friends",following:"friends",media_set:"photos",photos_stream:"photos",photos_synced:"photos",apps:"games",videos_by:"videos",videos_of:"videos"}};},null);
__d("TimelineDOMID",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={COMPOSER_CONTAINER:"timeline_composer_container",MEMORIES:"pagelet_timeline_memories",RECENT:"pagelet_timeline_recent",RECENT_CAPSULE_CONTAINER:"recent_capsule_container",STICKY_HEADER:"timeline_sticky_header",TAB_CONTENT:"timeline_tab_content",TAB_CONTENT_EXTRA:"timeline_tab_content_extra",UNDER_COMPOSER:"timeline_under_composer",UNSEEN_STORIES_INDICATOR:"recent_unseen_stories_indicator",PREFIX_MONTH_ALL:"pagelet_timeline_month_all_",PREFIX_MONTH_EXPAND:"pagelet_timeline_month_expand_",PREFIX_YEAR:"pagelet_timeline_year_",SUFFIX_MORE_PAGER:"_more_pager"};},null);
__d('BusinessURI.brands',['BizSiteIdentifier.brands','BusinessConf','URI'],function a(b,c,d,e,f,g,h,i,j){if(c.__markCompiled)c.__markCompiled();var k,l;k=babelHelpers.inherits(m,j);l=k&&k.prototype;function m(o,p){'use strict';l.constructor.call(this,o);if(h.isBizSite()){var q=p||h.getBusinessID();if(q)this.addQueryData(i.BIZ_ID_PARAM_NAME,q);if(!this.$BusinessURI1(this.getSubdomain()))this.setSubdomain(i.DOMAIN);}return this;}m.prototype.$BusinessURI1=function(o){'use strict';return o==='developers';};var n=function(o,p){return new m(o,p);};f.exports=n;},null);
__d('EventPermalinkURISetter',['BusinessURI.brands','PageTransitions'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();var j={setURI:function(k){if(window.location.search!=='')window.history.replaceState({event_id:k},document.title,h(window.location.pathname).toString());},initHandler:function(){window.onpopstate=function(k){if(k.state&&k.state.subpath)i.go(k.state.subpath,true);};}};f.exports=j;},null);
__d('SeeFirstProfilePopoverMenu',['PopoverMenu'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i,j;i=babelHelpers.inherits(k,h);j=i&&i.prototype;k.prototype._onMenuDone=function(l){'use strict';};function k(){'use strict';i.apply(this,arguments);}f.exports=k;},null);
__d("DoublyLinkedListMap",[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(){"use strict";this._head=null;this._tail=null;this._nodes={};this._nodeCount=0;}h.prototype.get=function(i){"use strict";return this._nodes[i]?this._nodes[i].data:null;};h.prototype.getIndex=function(i){"use strict";for(var j=this._head,k=0;j;j=j.next,k++)if(j.key===i)return k;return null;};h.prototype._insert=function(i,j,k,l){"use strict";k&&!this._nodes[k]&&(k=null);var m=k&&this._nodes[k]||(l?this._head:this._tail),n={data:j,key:i,next:null,prev:null};if(m){this.remove(i);if(l){n.prev=m.prev;m.prev&&(m.prev.next=n);m.prev=n;n.next=m;}else{n.next=m.next;m.next&&(m.next.prev=n);m.next=n;n.prev=m;}}n.prev===null&&(this._head=n);n.next===null&&(this._tail=n);this._nodes[i]=n;this._nodeCount++;return this;};h.prototype.insertBefore=function(i,j,k){"use strict";return this._insert(i,j,k,true);};h.prototype.insertAfter=function(i,j,k){"use strict";return this._insert(i,j,k,false);};h.prototype.prepend=function(i,j){"use strict";return this.insertBefore(i,j,this._head&&this._head.key);};h.prototype.append=function(i,j){"use strict";return this.insertAfter(i,j,this._tail&&this._tail.key);};h.prototype.remove=function(i){"use strict";var j=this._nodes[i];if(j){var k=j.next,l=j.prev;k&&(k.prev=l);l&&(l.next=k);this._head===j&&(this._head=k);this._tail===j&&(this._tail=l);delete this._nodes[i];this._nodeCount--;}return this;};h.prototype.find=function(i){"use strict";for(var j=this._head;j;j=j.next)if(i(j.data))return j.key;return null;};h.prototype.reduce=function(i,j){"use strict";for(var k=this._head;k;k=k.next)j=i(k.data,j);return j;};h.prototype.exists=function(i){"use strict";return !!this._nodes[i];};h.prototype.isEmpty=function(){"use strict";return !this._head;};h.prototype.reset=function(){"use strict";this._head=null;this._tail=null;this._nodes={};this._nodeCount=0;};h.prototype.map=function(i){"use strict";for(var j=this._head;j;j=j.next)i(j.data);};h.prototype.getCount=function(){"use strict";return this._nodeCount;};h.prototype.getHead=function(){"use strict";return this._head&&this._head.data;};h.prototype.getTail=function(){"use strict";return this._tail&&this._tail.data;};h.prototype.getNext=function(i){"use strict";var j=this._nodes[i];if(j&&j.next)return j.next.data;return null;};h.prototype.getPrev=function(i){"use strict";var j=this._nodes[i];if(j&&j.prev)return j.prev.data;return null;};f.exports=h;},null);
__d('Optimus',['Event','Parent'],function a(b,c,d,e,f,g,h,i){'use strict';if(c.__markCompiled)c.__markCompiled();var j={};function k(m,n){var o=n.getTarget();if(!o)return;var p=j[m];for(var q in p){var r=i.byAttribute(o,q);if(r)do{var s=p[q][r.getAttribute(q)];if(s&&s.handleOptimus(m,r,n)===false)break;}while(r=i.byAttribute(r.parentNode,q));}}function l(m,n,o,p){if(!j[m]){j[m]={};h.listen(document.documentElement,m,k.bind(null,m));}if(!j[m][n])j[m][n]={};if(!j[m][n][o])j[m][n][o]=p;}f.exports={addRelClick:function(m,n){l('click','rel',m,n);},addEventListener:l};},null);
__d('PopoverMenuShowOnHover',['Event'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i=250;function j(k){'use strict';this._popoverMenu=k;this._listeners=[];}j.prototype.enable=function(){'use strict';this._attachMouseListeners(this._popoverMenu.getTriggerElem());this._setMenuSubscription=this._popoverMenu.subscribe('setMenu',this._onSetMenu.bind(this));};j.prototype.disable=function(){'use strict';while(this._listeners.length)this._listeners.pop().remove();if(this._setMenuSubscription){this._setMenuSubscription.unsubscribe();this._setMenuSubscription=null;}};j.prototype._onSetMenu=function(){'use strict';this._attachMouseListeners(this._popoverMenu.getPopover().getLayer().getRoot());};j.prototype._attachMouseListeners=function(k){'use strict';var l=this._popoverMenu.getPopover(),m=null;this._listeners.push(h.listen(k,'mouseleave',l.hideLayer.bind(l)),h.listen(k,'mouseenter',function(){m=Date.now();l.showLayer();}),h.listen(k,'click',function(n){if(Date.now()<m+i)n.stop();}));};f.exports=j;},null);
__d('ProfileActionBarLogger',['FBJSON','MarauderLogger','Optimus'],function a(b,c,d,e,f,g,h,i,j){if(c.__markCompiled)c.__markCompiled();function k(){j.addEventListener('mouseup','data-loggable','ProfileHighQualityLogger',{handleOptimus:function(l,m,n){i.log('profile_high_quality_action',null,h.parse(m.getAttribute('data-store')));return false;}});}g.init=k;},null);
__d('ProfileOverviewSection',['Arbiter','DOMScroll','DoublyLinkedListMap','Run','TidyArbiterMixin','ge'],function a(b,c,d,e,f,g,h,i,j,k,l,m){if(c.__markCompiled)c.__markCompiled();var n=null;function o(){n=null;}function p(q,r,s){'use strict';this.id=q;this.label=s;this.nodeID=r;this._parentSection=null;this.childSections=new j();this._isLoaded=false;setTimeout((function(){return p.inform('sectionInitialized/'+q,{section:this},h.BEHAVIOR_STATE);}).bind(this),0);}p.prototype.appendSection=function(q){'use strict';this.childSections.append(q.id,q);q._parentSection=this;};p.prototype.freeze=function(){'use strict';this.freezeChildren();};p.prototype.freezeChildren=function(){'use strict';var q=this.childSections.getHead();while(q){!q.isActive()&&q.freeze();q=q.getNext();}};p.prototype.getNext=function(){'use strict';return this._parentSection&&this._parentSection.childSections.getNext(this.id);};p.prototype.getPrev=function(){'use strict';return this._parentSection&&this._parentSection.childSections.getPrev(this.id);};p.prototype.isActive=function(){'use strict';var q=this;while(q){if(q.id===n)return true;q=q._parentSection;}return false;};p.prototype.isLoaded=function(){'use strict';return this._isLoaded;};p.prototype.setIsLoaded=function(q){'use strict';this._isLoaded=q;return this;};p.prototype.scrollTo=function(){'use strict';if(!m(this.nodeID))return;i.scrollTo(this.getNode(),true,false,false,0,i.scrollTo.bind(this).bind(null,this.getNode(),0));};p.prototype.thaw=function(){'use strict';this.thawChildren();};p.prototype.thawChildren=function(){'use strict';var q=this.childSections.getHead();while(q){q.thaw();q=q.getNext();}};p.prototype.getNode=function(){'use strict';throw new Error('This function needs to be implemented in children.');};p.callWithSection=function(q,r){'use strict';this.subscribe('sectionInitialized/'+q,function(s,t){r(t.section);});};p.setActiveSectionID=function(q){'use strict';!n&&k.onLeave(o);n=q;};Object.assign(p,l);f.exports=p;},null);
__d('ProfileEscapeHatch',['CSS','ProfileTabUtils','Run','TimelineComponentKeys','TimelineController'],function a(b,c,d,e,f,g,h,i,j,k,l){if(c.__markCompiled)c.__markCompiled();var m=[],n=false;function o(p){'use strict';this.$ProfileEscapeHatch1=p;m.push(this);if(!n){l.register(k.ESCAPE_HATCH,o);j.onLeave(function(){m=[];});n=true;}}o.handleTabChange=function(p){'use strict';m.forEach(function(q){h.conditionShow(q.$ProfileEscapeHatch1,i.isTimelineTab(p));});};f.exports=o;},null);
__d('TimelineURI',['BizSiteIdentifier.brands','BusinessURI.brands','ProfileTabConst','TimelineAppSectionConstants','URI','goURI'],function a(b,c,d,e,f,g,h,i,j,k,l,m){if(c.__markCompiled)c.__markCompiled();var n={parseURI:function(o){o=new l(o);var p=o.getQueryData(),q=o.getPath(),r=q.split('/').slice(1);if(r[0]=='people'||r[0]=='pages')r=r.slice(2);var s=p.sk||r[1]||j.TIMELINE;if(s==j.WALL)s=j.TIMELINE;var t=null,u=null;if(s==j.TIMELINE){u=parseInt(r[2],10)||null;t=parseInt(r[3],10)||null;}return {path:q,id:p.id||r[0],key:s,viewas:p.viewas?p.viewas:0,filter:p.filter?p.filter:null,year:u,month:t,friendship:!!p.and};},goToProfileID:function(o){if(h.isBizSite()){m(i('/profile.php').addQueryData('id',o),true);}else m(new l('/'+o),true);},getTabKeyFromURI:function(o){var p=n.getSectionKeyFromURI(o);return k.collectionTabKeyToAppTabKey[p]||p;},getSectionKeyFromURI:function(o){return o.getQueryData().sk||o.getPath().split('/')[2];},getVanityFromURI:function(o){if(o.getQueryData().id)return o.getQueryData.id;return o.getPath().split('/')[1];},isVideoPermalink:function(o){return (n.getTabKeyFromURI(o)===j.VIDEOS&&o.getPath().split('/').filter(function(p){return !!p;}).length>2);}};f.exports=n;},null);
__d('ProfileNavigation',['Arbiter','CSS','PageTransitions','ProfileDOMID','ProfileOverviewDOMID','ProfileTabConst','ProfileTabUtils','ScriptPath','TimelineComponentKeys','TimelineController','TimelineDOMID','TimelineURI','UIPagelet','URI','$','ge'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w){if(c.__markCompiled)c.__markCompiled();var x=6,y='/profile_book.php',z=null,aa=null;function ba(ma){var na=u.getMostRecentURI(),oa=s.getSectionKeyFromURI(na),pa=s.getTabKeyFromURI(na),qa=s.getSectionKeyFromURI(ma),ra=s.getTabKeyFromURI(ma),sa=ma.getQueryData();if(ia(na,ma)||ja(ra)||ja(pa)||!!sa.and||s.isVideoPermalink(ma))return false;if(sa.hasOwnProperty('theater')){h.subscribeOnce('PhotoSnowlift.CLOSE',ka);return false;}if(n.isTimelineTab(pa)&&!n.isTimelineTab(ra)&&ha(qa)){z=qa;ca(qa,'TimelineMedleyView',r.TAB_CONTENT,l.MEDLEY_ROOT,sa);return true;}if(!n.isTimelineTab(pa)&&n.isTimelineTab(ra)){z=oa;ca(m.TIMELINE,'TimelineWallColumn',l.MEDLEY_ROOT,r.TAB_CONTENT,sa);return true;}return false;}function ca(ma,na,oa,pa,qa){i.hide(v(oa));h.inform('save_facebar_query',true);var ra=w(pa);if(ra){i.show(ra);ga(ma);}else da(na,ma,qa);q.registerCurrentKey(ma);}function da(ma,na,oa){ea();var pa=babelHelpers._extends({},aa,{tab_key:na});if(oa)pa=babelHelpers._extends({},pa,oa);var qa=function(sa){fa();sa();},ra={append:true,displayCallback:qa,finallyHandler:ga.bind(null,na),usePipe:true};t.loadFromEndpoint(ma,k.MAIN_COLUMN_PERSONAL,pa,ra);}function ea(){i.show(v(k.TAB_LOAD_INDICATOR));}function fa(){i.hide(v(k.TAB_LOAD_INDICATOR));}function ga(ma){var na=y;if(!n.isTimelineTab(ma))na+=':'+ma;o.set(na);j.transitionComplete();}function ha(ma){return z===null||ma===z;}function ia(ma,na){var oa=s.getVanityFromURI(ma),pa=ma.getQueryData().id,qa=s.getVanityFromURI(na),ra=na.getQueryData().id;if(oa&&qa)return oa!==qa;if(pa&&ra)return pa!==ra;return true;}function ja(ma){return (n.isActivityLogTab(ma)||ma===m.MEMORIAL_CONTACT||ma===m.POSTS);}function ka(){j.registerHandler(ba,x);}var la={init:function(ma){aa=ma.profileContextData;q.register(p.ASYNC_NAV,this);ka();},reset:function(){aa=null;z=null;j.removeHandler(ba);}};f.exports=la;},null);
__d('TimelineDrag',['ArbiterMixin','Event','Locale','Style','Vector','mixin'],function a(b,c,d,e,f,g,h,i,j,k,l,m){if(c.__markCompiled)c.__markCompiled();var n,o;n=babelHelpers.inherits(p,m(h));o=n&&n.prototype;function p(q,r,s){'use strict';o.constructor.call(this);s=s||{};this._listenOn=s.listenOn;this._offsetInput=r;this._defaultOffset=s.default_offset;this._killClicks=s.killClicks;this._vertical=true;this._RTLXSwitch=false;this.setPicture(q,s);}p.prototype.setPicture=function(q,r){'use strict';if(!q)return false;r=r||{};this._picture=q;this._defaultOffset=r.default_offset;if(r.offsetInput)this._offsetInput=r.offsetInput;if(r.vertical!==undefined)this._vertical=r.vertical;if(r.height)this._containerHeight=r.height;if(r.width)this._containerWidth=r.width;if(this._vertical){this._offsetType='top';this._eventCoord='y';}else{this._RTLXSwitch=j.isRTL();this._offsetType='left';this._eventCoord='x';}if(this._picture.complete){this._initialLoad();}else this._loadListener=i.listen(this._picture,'load',(function(){this._loadListener.remove();this._loadListener=null;this._initialLoad();}).bind(this));};p.prototype.destroy=function(){'use strict';this._stopDrag();this._saveOffset();this._mousedown&&this._mousedown.remove();this._mousedown=null;this._onclick&&this._onclick.remove();this._onclick=null;this._loadListener&&this._loadListener.remove();this._loadListener=null;};p.prototype._initialLoad=function(){'use strict';var q=this._listenOn?this._listenOn:this._picture;this._mousedown&&this._mousedown.remove();this._mousedown=i.listen(q,'mousedown',this._onMouseDown.bind(this));if(this._vertical){this._maxOffset=this._containerHeight-this._picture.offsetHeight;}else this._maxOffset=this._containerWidth-this._picture.offsetWidth;if(this._defaultOffset!==undefined)this._setOffset(this._defaultOffset);this._onclick&&this._onclick.remove();this._onclick=null;if(this._killClicks)this._onclick=i.listen(q,'click',this._onClick.bind(this));this._saveOffset();};p.prototype._onClick=function(event){'use strict';event.kill();};p.prototype._onMouseDown=function(event){'use strict';var q=parseInt(k.get(this._picture,this._offsetType),10)||0;this._pictureStartDragOffset=q-l.getEventPosition(event)[this._eventCoord];this._startDrag();event.kill();};p.prototype._startDrag=function(){'use strict';if(!this._dragStarted){this.inform('startdrag',this);this._dragTokens=[i.listen(document.documentElement,'mouseup',this._onMouseUp.bind(this)),i.listen(document.documentElement,'mousemove',this._onMouseMove.bind(this))];this._dragStarted=true;}};p.prototype._saveOffset=function(){'use strict';var q=parseInt(k.get(this._picture,this._offsetType),10);if(this._RTLXSwitch){this._offsetInput.value=q+this._containerWidth-this._picture.offsetWidth;}else this._offsetInput.value=q;};p.prototype._stopDrag=function(){'use strict';if(this._dragStarted){this.inform('stopdrag',this);this._dragStarted=false;this._dragTokens.forEach(function(q){q.remove();});this._saveOffset();}};p.prototype._onMouseUp=function(event){'use strict';this._stopDrag();event.kill();};p.prototype._setOffset=function(q){'use strict';if(this._RTLXSwitch){q=Math.max(0,Math.min(q,-this._maxOffset));}else q=Math.min(0,Math.max(q,this._maxOffset));k.set(this._picture,this._offsetType,q+'px');};p.prototype._onMouseMove=function(event){'use strict';this._setOffset(this._pictureStartDragOffset+l.getEventPosition(event)[this._eventCoord]);event.kill();};f.exports=p;},null);
__d('TimelineCover',['Arbiter','Button','CSS','DOM','DOMScroll','Event','FileInputUploader','Focus','HTML','PageTransitions','Parent','ReloadPage','Run','Style','TimelineDrag','$','cx','fbt','ge','setImmediate','tidyEvent'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,aa,ba){if(c.__markCompiled)c.__markCompiled();function ca(da,ea,fa){'use strict';this.root=w('fbProfileCover');if(typeof ea==='object'){this._coverHeight=ea.cover_height;this._coverWidth=ea.cover_width;this.previewing=ea.previewing;this._isLegacy=false;}else{this._isLegacy=true;this._coverHeight=ea;this.previewing=fa;}this._parentSection=r.byClass(this.root,'fbTimelineSection');this.cover=k.find(this.root,'.cover');ca.instance=this;this.editing=false;t.onBeforeUnload(this.onBeforeUnload.bind(this));if(!this._parentSection)this._parentSection=r.byClass(this.root,'fbEventHeader');if(this.previewing)aa((function(){this.editMode();this.updateCoverImage(this.previewing);}).bind(this));}ca.prototype.showLoadingIndicator=function(){'use strict';var da=z('fbCoverImageContainer');if(da)j.addClass(da,'opaquedLoading');};ca.prototype.hideLoadingIndicator=function(){'use strict';var da=z('fbCoverImageContainer');if(da)j.removeClass(da,'opaquedLoading');};ca.prototype.onBeforeUnload=function(){'use strict';if(this.isInEditMode())return y._("If you leave this page, your cover photo will not be saved. To save, press the \"save\" button below your cover photo.");};ca.prototype.isCoverImageVerticalFlow=function(da){'use strict';return !da.style.height;};ca.prototype.editMode=function(){'use strict';var da=k.find(this.root,'button.saveButton');i.setEnabled(k.find(this.root,'button.cancelButton'),true);i.setEnabled(da,true);this.hideLoadingIndicator();this._coverImage=k.scry(this.root,'.coverImage')[0];var ea=k.scry(this._coverImage,'.coverWrap')[0];if(ea){var fa=k.find(ea,'.coverPhotoImg');this._originalIsVertical=this.isCoverImageVerticalFlow(fa);this._originalOffset=u.get(fa,this._originalIsVertical?'top':'left');}j.addClass(this._parentSection,'fbEditCover');l.scrollTo(this.root);if(this.previewing){k.remove(this._coverImage);j.show(this._coverImage);}var ga=k.scry(this._coverImage,'.coverPhotoImg')[0];if(ga)this._createDragger();this.editing=true;o.set(da);h.inform('CoverPhotoEdit',{sender:this,state:"open"});};ca.prototype._exitEditMode=function(){'use strict';if(this._timelineDrag){this._timelineDrag.destroy();this._timelineDrag=null;}k.find(this.root,'input.hiddenPhotoID').value=null;i.setEnabled(k.find(this.root,'button.cancelButton'),false);i.setEnabled(k.find(this.root,'button.saveButton'),false);j.removeClass(this._parentSection,'fbEditCover');this.hideLoadingIndicator();this.previewing=false;h.inform('CoverPhotoEdit',{sender:this,state:"closed"});this.editing=false;};ca.prototype._createDragger=function(da){'use strict';var ea;if(this._isLegacy){ea=k.find(this.root,'input.photoOffsetInput');this._originalIsVertical=true;}else{var fa=da===undefined?this._originalIsVertical:da;ea=fa?k.find(this.root,'input.photoOffsetYInput'):k.find(this.root,'input.photoOffsetXInput');}this._timelineDrag=new v(k.find(this.root,'.coverImage .coverPhotoImg'),ea,{height:this._coverHeight,width:this._coverWidth,listenOn:this.cover,vertical:fa,killClicks:true});};ca.prototype.updateCoverImage=function(da,ea){'use strict';if(ea)this.editMode();k.find(this.root,'input.hiddenPhotoID').value=da;i.setEnabled(k.find(this.root,'button.saveButton'),true);if(ea)k.replace(k.find(this.root,'.coverImage'),typeof ea==='string'?p(ea):ea);var fa=k.find(k.find(this.root,'.coverImage'),'.coverPhotoImg'),ga=this.isCoverImageVerticalFlow(fa),ha;if(this._isLegacy){ha=k.find(this.root,'input.photoOffsetInput');}else ha=ga?k.find(this.root,'input.photoOffsetYInput'):k.find(this.root,'input.photoOffsetXInput');if(this._timelineDrag){this._timelineDrag.setPicture(fa,{offsetInput:ha,vertical:ga});}else this._createDragger(ga);this._updateHeader();};ca.prototype.cancelUpdate=function(){'use strict';this._reloadAfterNextUpdate=false;k.remove(k.scry(this.root,'.coverImage')[0]);k.prependContent(this.cover,this._coverImage);if(this._originalOffset!==undefined)u.set(k.find(this._coverImage,'.coverPhotoImg'),this._originalIsVertical?'top':'left',this._originalOffset);this._exitEditMode();this._updateHeader();};ca.staticSaveComplete=function(){'use strict';ca.getInstance().saveComplete();};ca.prototype.saveComplete=function(){'use strict';if(this._reloadAfterNextUpdate)s.now();this._coverImage=k.scry(this.root,'.coverImage')[0];var da=r.byClass(this.root,'fbTimelineTopSectionBase');da&&j.removeClass(da,"_6_5");this._exitEditMode();this._updateHeader();q.rewriteCurrentURI(q.getCurrentURI().getUnqualifiedURI(),q.getCurrentURI().removeQueryData('preview_cover'));};ca.prototype.isInEditMode=function(){'use strict';return this.editing;};ca.prototype._updateHeader=function(){'use strict';var da=k.scry(this.root,'.coverImage')[0];if(!da)return;var ea=j.hasClass(da,'coverNoImage'),fa=j.hasClass(this._parentSection,'noCoverImage');if(ea!==fa)j.conditionClass(this._parentSection,'noCoverImage',ea);};ca.getInstance=function(){'use strict';return ca.instance;};ca.staticUpdateCoverImage=function(da){'use strict';ca.getInstance().updateCoverImage(null,da);};ca.prototype.setupFileUpload=function(da,ea,fa){'use strict';da.subscribe('change',(function(){var ga=new n(da.getInput()).setURI(ea).setAllowCrossOrigin(true);ga.subscribe('failure',function(){ca.showErrorDialog(y._("Cover Upload Failed"),y._("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u043d\u043e\u0432\u043e\u0435 \u0444\u043e\u0442\u043e \u043e\u0431\u043b\u043e\u0436\u043a\u0438. \u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u043f\u043e\u043f\u044b\u0442\u043a\u0443 \u043f\u043e\u0437\u0436\u0435."));});ga.subscribe(['success','failure'],(function(){this.hideLoadingIndicator();da.clear();j.removeClass(da.getControl(),fa);da.getInput().disabled=false;}).bind(this));this.showLoadingIndicator();this._reloadAfterNextUpdate=true;ga.send();j.addClass(da.getControl(),fa);da.getInput().disabled=true;}).bind(this));};ca.setupFileUpload=function(da,ea,fa){'use strict';this.getInstance().setupFileUpload(da,ea,fa);};ca.imageUploadDone=function(da,ea){'use strict';this.getInstance().updateCoverImage(da,ea);};ca.showErrorDialog=function(da,ea){'use strict';new Dialog().setTitle(da).setButtons(Dialog.OK).setBody(ea).show();this.getInstance().hideLoadingIndicator();};ca.initFileUploadMenu=function(da){'use strict';ca.showLoadingAfterFileUpload(da.getForm());};ca.showLoadingAfterFileUpload=function(da){'use strict';ba(da.subscribe('submit',function(){ca.getInstance().showLoadingIndicator();}));};ca.instance=null;f.exports=ca;},null);
__d('TimelineNavLight',['CSS','DataStore','DOM','DOMQuery','Event','Parent','ProfileOverviewDOMID','ProfileOverviewSection','ProfileTimelineUILogger','TimelineAppSectionConstants','TimelineComponentKeys','TimelineController','csx','cx','destroyOnUnload','invariant','queryThenMutateDOM'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x){if(c.__markCompiled)c.__markCompiled();var y="_6-7",z="_6-6",aa="_529n",ba="_5215",ca="_9rw",da="_70k",ea="._6-7",fa="._6-6";function ga(ha){'use strict';!!ga.$TimelineNavLight1?w(0):undefined;this.$TimelineNavLight2=ha;this.$TimelineNavLight3=k.scry(ha,ea)[0];this.$TimelineNavLight4=k.scry(ha,fa);this.$TimelineNavLight5();o.subscribe('Medley/transitionToSection',(function(ja,ka){this.$TimelineNavLight6(ka.slice(n.PREFIX_MEDLEY.length));}).bind(this));s.register(r.COVER_NAV,this);var ia=l.listen(this.$TimelineNavLight2,'click',this.$TimelineNavLight7.bind(this));ga.$TimelineNavLight1=this;v((function(){this.$TimelineNavLight2=null;this.$TimelineNavLight3=null;this.$TimelineNavLight4=null;ia.remove();if(this.$TimelineNavLight8)this.$TimelineNavLight8.remove();ga.$TimelineNavLight1=null;}).bind(this));}ga.prototype.handleTabChange=function(ha){'use strict';this.$TimelineNavLight6(ha);};ga.prototype.setMoreMenuInstance=function(ha){'use strict';this.$TimelineNavLight8=l.listen(ha.getRoot(),'click',this.$TimelineNavLight9.bind(this));};ga.setMoreMenuInstance=function(ha){'use strict';!!!ga.$TimelineNavLight1?w(0):undefined;ga.$TimelineNavLight1.setMoreMenuInstance(ha);};ga.prototype.$TimelineNavLight6=function(ha){'use strict';this.$TimelineNavLight3&&h.removeClass(this.$TimelineNavLight3,y);this.$TimelineNavLight4.some((function(ia){var ja=q.collectionTabKeyToAppTabKey[ha]||ha;if(i.get(ia,'tab-key')===ja){h.addClass(ia,y);this.$TimelineNavLight3=ia;return true;}}).bind(this));};ga.prototype.$TimelineNavLight5=function(){'use strict';var ha=this.$TimelineNavLight4.length-1,ia=this.$TimelineNavLight4[ha],ja,ka,la,ma=0;x((function(){ja=m.byClass(this.$TimelineNavLight2,da).offsetWidth;ka=ia.offsetLeft;la=ia.offsetWidth;for(var na=ha;na>1;na--){var oa=this.$TimelineNavLight4[na];if(oa.offsetLeft+oa.offsetWidth>ja){ma++;}else break;}}).bind(this),(function(){if(ka+la>ja)h.addClass(this.$TimelineNavLight2,ba);for(var na=ha;na>ha-ma;na--)j.remove(this.$TimelineNavLight4[na]);h.removeClass(m.byClass(this.$TimelineNavLight2,aa),aa);}).bind(this));};ga.prototype.$TimelineNavLight10=function(ha,ia){'use strict';var ja=m.byClass(ha,ia);if(ja)return i.get(ja,'tab-key');return null;};ga.prototype.$TimelineNavLight7=function(event){'use strict';var ha=this.$TimelineNavLight10(event.target,z);if(ha)p.logCoverNavItemClick(ha);};ga.prototype.$TimelineNavLight9=function(event){'use strict';var ha=this.$TimelineNavLight10(event.target,ca);if(ha)p.logCoverNavMoreItemClick(ha);};f.exports=ga;},null);
__d('VideoCallHelpler',['FBRTCCallabilityStore','FBRTCCore','TooltipData'],function a(b,c,d,e,f,g,h,i,j){'use strict';if(c.__markCompiled)c.__markCompiled();function k(m,n){var o=n.calleeID,p=n.calleeName;m.forEachItem(function(q){if(q.getValue&&q.getValue()==='video_call'){if(h.isCallable(n.calleeID)){q.enable();}else q.disable();j.set(q.getRoot(),h.callButtonTooltip(o,p),'right');}});}var l={bindProfileVideoCallAction:function(m,n){k(m,n);h.addListener(function(){k(m,n);});m.subscribe('itemclick',function(o,p){if(p.item.getValue()==='video_call'&&!p.item.isDisabled())i.startOutgoingCall(n.calleeID,'timeline_profile',false);});}};f.exports=l;},null);
__d('TimelineSmartInsert',['Run','UserAgent_DEPRECATED','Vector'],function a(b,c,d,e,f,g,h,i,j){if(c.__markCompiled)c.__markCompiled();var k=100;function l(r){if(r==='viewport')return j.getViewportDimensions().y;return r;}var m=false,n=false;function o(){if(n)return;h.onLeave(p);n=true;}function p(){m=false;n=false;}var q={run:function(r,s,t){o();if(!m||i.ie()<=8){s();return;}var u=r.offsetHeight;s();var v=r.offsetHeight,w=j.getScrollPosition().y,x=j.getElementPosition(r).y;if(v!==u&&x<w&&x+u<w+l(t||k))window.scrollBy(0,v-u);},enable:function(){m=true;}};f.exports=q;},null);
__d('legacy:TimelineCover',['TimelineCover'],function a(b,c,d,e){if(c.__markCompiled)c.__markCompiled();b.TimelineCover=c('TimelineCover');},3);
__d('ButtonGroupX',['ArbiterMixin','mixin'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();var j,k;j=babelHelpers.inherits(l,i(h));k=j&&j.prototype;function l(m,n){'use strict';k.constructor.call(this);n=n||{};this._root=m;this._radioButtons=n.radioButtons||[];this._selected=n.selected;this.initButtonListeners();}l.prototype.initButtonListeners=function(){'use strict';var m=this._radioButtons.length;while(m--){var n=this._radioButtons[m];n.subscribe('select',this.selectButton.bind(this,n));}};l.prototype.getSelected=function(){'use strict';return this._selected;};l.prototype.getSelectedValue=function(){'use strict';return this._selected?this._selected.getValue():null;};l.prototype.selectButton=function(m){'use strict';if(this._selected!==m){this.setSelected(m);this.inform('change',{selected:m});}return this;};l.prototype.setSelected=function(m){'use strict';if(this._selected!==m){if(this._selected)this._selected.setSelected(false);m.setSelected(true);this._selected=m;}return this;};l.prototype.setSelectedValue=function(m){'use strict';var n=this._radioButtons.length;while(n--){var o=this._radioButtons[n];if(o.getValue()===m)return this.setSelected(o);}return this;};f.exports=l;},null);