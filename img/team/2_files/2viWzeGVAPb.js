/*!CK:1468095448!*//*1453174048,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["\/p9qJ"]); }

__d("PUWErrorCodes",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={BAD_JPEG:9901,WORKER_TERMINATED:9902,UNKNOWN_RESIZE_ERROR:9903,WORKER_ABORT:9904};},null);
__d('FBOverlayBase.react',['React'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i=h.createClass({displayName:'FBOverlayBase',render:function(){return h.Children.only(this.props.children);}});f.exports=i;},null);
__d('FBOverlayElement.react',['React','cloneWithProps','cx','joinClasses'],function a(b,c,d,e,f,g,h,i,j,k){if(c.__markCompiled)c.__markCompiled();var l=h.PropTypes,m={horizontal:{left:"_32rg",right:"_32rh",fit:k("_32rg","_32rh")},vertical:{top:"_32ri",bottom:"_32rj",fit:k("_32ri","_32rj")}},n=h.createClass({displayName:'FBOverlayElement',propTypes:{horizontal:l.oneOf(['left','right','fit']),vertical:l.oneOf(['top','bottom','fit'])},getDefaultProps:function(){return {horizontal:'fit',vertical:'fit'};},render:function(){var o=h.Children.only(this.props.children),p=k(o.props.className,"_32rk",m.horizontal[this.props.horizontal],m.vertical[this.props.vertical]);return h.cloneElement(o,{className:p});}});f.exports=n;},null);
__d('FBOverlayContainer.react',['FBOverlayBase.react','FBOverlayElement.react','React','cx','invariant','joinClasses'],function a(b,c,d,e,f,g,h,i,j,k,l,m){if(c.__markCompiled)c.__markCompiled();var n=j.createClass({displayName:'FBOverlayContainer',propTypes:{children:function(o,p){var q=o[p],r=0;j.Children.forEach(q,function(s){if(s===null||s===undefined)return;switch(s.type){case h:r++;break;case i:break;default:l(0);}});!(r===1)?l(0):undefined;}},render:function(){return (j.createElement('div',babelHelpers._extends({},this.props,{className:m(this.props.className,"_23n-")}),this.props.children));}});f.exports=n;},null);
__d('XUIRadioList.react',['InputLabel.react','React','ReactChildren','XUIRadioInput.react'],function a(b,c,d,e,f,g,h,i,j,k){if(c.__markCompiled)c.__markCompiled();var l=i.PropTypes,m=i.createClass({displayName:'XUIRadioList',propTypes:{name:l.string,onValueChange:l.func,selectedValue:l.any},render:function(){var n=j.map(this.props.children,function(o){return o===null?null:i.cloneElement(o,{name:this.props.name,onSelect:this.props.onValueChange,selectedValue:this.props.selectedValue});},this);return i.createElement('ul',babelHelpers._extends({},this.props,{name:null}),n);}});m.Item=i.createClass({displayName:'Item',propTypes:{name:l.string,onSelect:l.func,selectedValue:l.any,value:l.any,disabled:l.bool},render:function(){return (i.createElement('li',{className:this.props.className},i.createElement(h,{'aria-label':this.props['aria-label'],'data-hover':this.props['data-hover'],display:'inline'},i.createElement(k,{checked:this.props.selectedValue===this.props.value,name:this.props.name,onChange:this._handleChange,value:this.props.value,disabled:!!this.props.disabled}),i.createElement('label',null,this.props.children))));},_handleChange:function(event){this.props.onSelect&&this.props.onSelect(event.target.value);}});f.exports=m;},null);
__d('everyObject',[],function a(b,c,d,e,f,g){'use strict';if(c.__markCompiled)c.__markCompiled();var h=Object.prototype.hasOwnProperty;function i(j,k,l){for(var m in j)if(h.call(j,m))if(!k.call(l,j[m],m,j))return false;return true;}f.exports=i;},null);
__d('LoadObjectOperations',['keyMirrorRecursive'],function a(b,c,d,e,f,g,h){'use strict';if(c.__markCompiled)c.__markCompiled();var i=h({CREATING:'',DELETING:'',LOADING:'',UPDATING:''});f.exports=i;},null);
__d('LoadObject',['immutable','LoadObjectOperations','Map','invariant','nullthrows'],function a(b,c,d,e,f,g,h,i,j,k,l){if(c.__markCompiled)c.__markCompiled();var m,n;'use strict';var o=[undefined,null,false,true,0,''],p='SECRET_'+Math.random(),q=new j(new j(o.map(function(t){return [t,new j([[true,new j()],[false,new j()]])];}))),r=h.Record({operation:undefined,value:undefined,error:undefined,internalHasValue:false});m=babelHelpers.inherits(s,r);n=m&&m.prototype;function s(t,u,v,w,x){!(t===p)?k(0):undefined;n.constructor.call(this,{operation:u,value:v,error:w,internalHasValue:x});}s.$LoadObject1=function(t,u,v,w){var x=s.$LoadObject2(t,u,v,w);return (x||new s(p,t,u,v,w));};s.$LoadObject2=function(t,u,v,w){if(v!==undefined||!q.has(u))return null;var x=l(q.get(u)),y=l(x.get(w));if(!y.has(t)){var z=new s(p,t,u,v,w);y.set(t,z);}return l(y.get(t));};s.prototype.getOperation=function(){return this.get('operation');};s.prototype.getValue=function(){return this.get('value');};s.prototype.getValueEnforcing=function(){!this.hasValue()?k(0):undefined;var t=this.getValue();return t;};s.prototype.getError=function(){return this.get('error');};s.prototype.hasValue=function(){return !!this.get('internalHasValue');};s.prototype.hasOperation=function(){return this.getOperation()!==undefined;};s.prototype.hasError=function(){return this.getError()!==undefined;};s.prototype.isEmpty=function(){return !this.hasValue()&&!this.hasOperation()&&!this.hasError();};s.prototype.setOperation=function(t){var u=s.$LoadObject2(t,this.getValue(),this.getError(),this.hasValue());return u||this.set('operation',t);};s.prototype.setValue=function(t){var u=s.$LoadObject2(this.getOperation(),t,this.getError(),true);return u||this.set('value',t).set('internalHasValue',true);};s.prototype.setError=function(t){var u=s.$LoadObject2(this.getOperation(),this.getValue(),t,this.hasValue());return u||this.set('error',t);};s.prototype.removeOperation=function(){var t=this.remove('operation'),u=s.$LoadObject2(t.getOperation(),t.getValue(),t.getError(),t.hasValue());return u||t;};s.prototype.removeValue=function(){var t=this.remove('value').remove('internalHasValue'),u=s.$LoadObject2(t.getOperation(),t.getValue(),t.getError(),t.hasValue());return u||t;};s.prototype.removeError=function(){var t=this.remove('error'),u=s.$LoadObject2(t.getOperation(),t.getValue(),t.getError(),t.hasValue());return u||t;};s.prototype.isCreating=function(){return this.getOperation()===i.CREATING;};s.prototype.isDeleting=function(){return this.getOperation()===i.DELETING;};s.prototype.isDone=function(){return !this.hasOperation();};s.prototype.isLoading=function(){return this.getOperation()===i.LOADING;};s.prototype.isUpdating=function(){return this.getOperation()===i.UPDATING;};s.prototype.creating=function(){return this.setOperation(i.CREATING);};s.prototype.deleting=function(){return this.setOperation(i.DELETING);};s.prototype.done=function(){return this.removeOperation();};s.prototype.loading=function(){return this.setOperation(i.LOADING);};s.prototype.updating=function(){return this.setOperation(i.UPDATING);};s.prototype.map=function(t){if(!this.hasValue())return this;var u=this.getValueEnforcing(),v=t(u),w=this.setValue(v);return w;};s.creating=function(){return s.$LoadObject1(i.CREATING,undefined,undefined,false);};s.deleting=function(){return s.$LoadObject1(i.DELETING,undefined,undefined,false);};s.empty=function(){return s.$LoadObject1(undefined,undefined,undefined,false);};s.loading=function(){return s.$LoadObject1(i.LOADING,undefined,undefined,false);};s.updating=function(){return s.$LoadObject1(i.UPDATING,undefined,undefined,false);};f.exports=s;},null);
__d('Emscripten',[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();f.exports={isSupported:function(){return (typeof Int32Array!=='undefined'&&typeof Float64Array!=='undefined'&&!!new Int32Array(1).subarray&&!!new Int32Array(1).set);}};},null);
__d('PooledWebWorker',['WebWorker'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i,j;i=babelHelpers.inherits(k,h);j=i&&i.prototype;function k(l,m,n){'use strict';j.constructor.call(this,n);this.$PooledWebWorker1=m;this.$PooledWebWorker2=l;}k.prototype.getIndex=function(){'use strict';return this.$PooledWebWorker1;};k.prototype.getPool=function(){'use strict';return this.$PooledWebWorker2;};f.exports=k;},null);
__d('WebWorkerPool',['PooledWebWorker','emptyFunction'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();j.isSupported=function(){'use strict';return h.isSupported();};function j(k,l){'use strict';this.$WebWorkerPool1=[];for(var m=0;m<l;m++)this.$WebWorkerPool1.push(new h(this,m,k).setErrorHandler(this.$WebWorkerPool2).setMessageHandler(this.$WebWorkerPool3).execute());this.$WebWorkerPool4=0;}j.prototype.setMessageHandler=function(k){'use strict';this.$WebWorkerPool5=k||i;return this;};j.prototype.setAllowCrossPageTransition=function(k){'use strict';this.$WebWorkerPool1.forEach(function(l){return l.setAllowCrossPageTransition(k);});return this;};j.prototype.setErrorHandler=function(k){'use strict';this.$WebWorkerPool6=k||i;return this;};j.prototype.postMessage=function(){'use strict';var k=this.getWorker();for(var l=arguments.length,m=Array(l),n=0;n<l;n++)m[n]=arguments[n];k.postMessage.apply(k,m);return k;};j.prototype.$WebWorkerPool3=function(){'use strict';for(var k=arguments.length,l=Array(k),m=0;m<k;m++)l[m]=arguments[m];l.unshift(this);this.getPool().$WebWorkerPool5.apply(this.getPool(),l);};j.prototype.$WebWorkerPool2=function(){'use strict';for(var k=arguments.length,l=Array(k),m=0;m<k;m++)l[m]=arguments[m];l.unshift(this);return this.getPool().$WebWorkerPool6.apply(this.getPool(),l);};j.prototype.getWorker=function(){'use strict';var k=this.$WebWorkerPool1[this.$WebWorkerPool4];this.$WebWorkerPool4=(this.$WebWorkerPool4+1)%this.$WebWorkerPool1.length;return k;};f.exports=j;},null);
__d('JpegResizer',['Emscripten','JpegResizerConfig','JpegResizeWorkerResource','WebWorker','WebWorkerPool','PUWErrorCodes'],function a(b,c,d,e,f,g,h,i,j,k,l,m){if(c.__markCompiled)c.__markCompiled();var n=null;o.isSupported=function(){'use strict';return l.isSupported()&&h.isSupported()&&!i.isGKBlacklisted;};o.getSingleton=function(p){'use strict';if(!n)n=new o(p||o.DEFAULT_POOL_SIZE).setAllowCrossPageTransition(true);return n;};o.prepareResource=function(p){'use strict';k.prepareResource(j,p);};function o(p){'use strict';p=p||o.DEFAULT_POOL_SIZE;k.prepareResource(j);this.$JpegResizer1=new l(j,p).setErrorHandler(this.$JpegResizer2.bind(this)).setMessageHandler(this.$JpegResizer3.bind(this));this.$JpegResizer4={};this.$JpegResizer5=o.DEFAULT_RESIZE_HEIGHT;this.$JpegResizer6=o.DEFAULT_RESIZE_WIDTH;}o.prototype.setHighQuality=function(p){'use strict';if(p){this.$JpegResizer5=o.DEFAULT_RESIZE_HEIGHT;this.$JpegResizer6=o.DEFAULT_RESIZE_WIDTH;}else{this.$JpegResizer5=o.LOW_QUALITY_RESIZE_HEIGHT;this.$JpegResizer6=o.LOW_QUALITY_RESIZE_WIDTH;}return this;};o.prototype.setAllowCrossPageTransition=function(p){'use strict';this.$JpegResizer1.setAllowCrossPageTransition(p);return this;};o.prototype.resizeBlob=function(p,q,r){'use strict';var s=this.$JpegResizer1.getWorker();if(s.isCurrentState('terminated')){var t=new Error('Worker terminated');t.code=m.WORKER_TERMINATED;q(t);return this;}var u=s.postMessage({blob:p,height:this.$JpegResizer5,width:this.$JpegResizer6}).getIndex();this.$JpegResizer7(u).unshift({done:q,progress:r});return this;};o.prototype.$JpegResizer7=function(p){'use strict';if(!this.$JpegResizer4.hasOwnProperty(p))this.$JpegResizer4[p]=[];return this.$JpegResizer4[p];};o.prototype.$JpegResizer2=function(p,q){'use strict';p.terminate();var r=this.$JpegResizer7(p.getIndex());this.$JpegResizer8(q);r.forEach(function(s){return s.done(q);});r.length=0;};o.prototype.$JpegResizer3=function(p,q){'use strict';if(q.error)this.$JpegResizer8(q.error);if(q.done){this.$JpegResizer7(p.getIndex()).pop().done(q.error,q.blob,q.skipped);}else{var r=this.$JpegResizer7(p.getIndex()),s=r[r.length-1].progress;if(s)s({written:q.written,total:q.total});}};o.prototype.$JpegResizer8=function(p){'use strict';var q=p.message;if(q.indexOf('Not a JPEG file')!==-1){p.code=m.BAD_JPEG;}else if(q.indexOf('abort()')!==-1){p.code=m.WORKER_ABORT;}else p.code=m.UNKNOWN_RESIZE_ERROR;};o.DEFAULT_POOL_SIZE=3;o.DEFAULT_RESIZE_HEIGHT=2048;o.DEFAULT_RESIZE_WIDTH=2048;o.LOW_QUALITY_RESIZE_HEIGHT=960;o.LOW_QUALITY_RESIZE_WIDTH=960;f.exports=o;},null);
__d('TimelineMapScrollableArea',['Animation','ArbiterMixin','CSS','DOM','Event','Run','Scroll','SimpleDrag','Style','Vector','$','shield'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){if(c.__markCompiled)c.__markCompiled();function t(u,v){u&&this.init(r(u),v);}Object.assign(t.prototype,i,{init:function(u,v){v=v||{};this._elem=u;this._wrap=k.find(u,'div.fbScrollableAreaWrap');this._body=k.find(this._wrap,'div.fbScrollableAreaBody');this._track=k.find(u,'div.fbScrollableAreaTrack');this._gripper=k.find(this._track,'div.fbScrollableAreaGripper');this._options=v;this.adjustGripper();this._listeners=[l.listen(this._wrap,'scroll',this._handleScroll.bind(this))];if(v.fade!==false)this._listeners.push(l.listen(u,'mouseenter',s(this.adjustGripper,this)),l.listen(u,'mouseenter',s(this.showScrollbar,this)),l.listen(u,'mousemove',this._handleMousemove.bind(this)),l.listen(u,'mouseout',s(this.hideScrollbar,this)));if(v.fade!==undefined)this._listeners.push(l.listen(this._track,'click',this.clickToScroll.bind(this)));if(v.verticalscroll)this._listeners.push(l.listen(this._wrap,'mousewheel',this.mouseWheel.bind(this)),l.listen(this._wrap,'DOMMouseScroll',this.mouseWheel.bind(this)));this.initDrag();if(!v.persistent)m.onLeave(this.destroy.bind(this));},getRoot:function(){return this._elem;},initDrag:function(){var u=new o(this._gripper);u.subscribe('start',(function(v,event){if(!(event.which&&event.which===1||event.button&&event.button===1))return;this.inform('dragstart');var w=q.getEventPosition(event).x,x=this._gripper.offsetLeft,y=u.subscribe('update',(function(aa,ba){var ca=q.getEventPosition(ba).x-w,da=this._elem.clientWidth,ea=this._body.offsetWidth,fa=this._track.offsetWidth,ga=da/ea*fa,ha=ea-this._wrap.offsetWidth,ia=x+ca,ja=fa-ga;ia=Math.max(Math.min(ia,ja),0);var ka=ia/ja*ha;n.setLeft(this._wrap,ka);}).bind(this)),z=u.subscribe('end',(function(){u.unsubscribe(y);u.unsubscribe(z);this.inform('dragend');}).bind(this));}).bind(this));},adjustGripper:function(){var u=this._elem.clientWidth,v=this._body.offsetWidth,w=this._track.offsetWidth,x=u/v*w;if(x<w){p.set(this._gripper,'width',x+'px');var y=n.getLeft(this._wrap)/v*w;p.set(this._gripper,'left',y+'px');j.show(this._gripper);}else j.hide(this._gripper);this._checkContentBoundaries();return this;},_checkContentBoundaries:function(){var u=n.getLeft(this._wrap),v=this._wrap.scrollWidth-this._wrap.clientWidth;j.conditionClass(this._elem,'contentBefore',u>0);j.conditionClass(this._elem,'contentAfter',u<v);},destroy:function(){this._listeners.forEach(function(u){u.remove();});this._listeners.length=0;},_handleMousemove:function(event){var u=q.getElementPosition(this._track).y,v=q.getElementDimensions(this._track).y;if(Math.abs(u+v/2-q.getEventPosition(event).y)<25){this.showScrollbar(false);}else this.hideScrollbar();},_handleScroll:function(event){this.adjustGripper();if(this._options.fade!==false)this.showScrollbar();},hideScrollbar:function(){if(!this._scrollbarVisible)return this;this._scrollbarVisible=false;if(this._hideTimeout){clearTimeout(this._hideTimeout);this._hideTimeout=null;}this._hideTimeout=setTimeout((function(){if(this._scrollbarAnimation){this._scrollbarAnimation.stop();this._scrollbarAnimation=null;}this._scrollbarAnimation=new h(this._track).from('opacity',1).to('opacity',0).duration(250).ondone(j.addClass.bind(null,this._track,'invisible_elem')).go();}).bind(this),750);return this;},showScrollbar:function(u){if(this._scrollbarVisible)return this;this._scrollbarVisible=true;if(this._hideTimeout){clearTimeout(this._hideTimeout);this._hideTimeout=null;}if(this._scrollbarAnimation){this._scrollbarAnimation.stop();this._scrollbarAnimation=null;}this.adjustGripper();p.set(this._track,'opacity',1);j.removeClass(this._track,'invisible_elem');if(u!==false)this.hideScrollbar();return this;},clickToScroll:function(event){var u=q.getEventPosition(event).x,v=this._elem.clientWidth,w=this._body.offsetWidth,x=this._track.offsetWidth,y=v/w*x,z=q.getElementPosition(this._gripper);if(u>=z.x&&u<=z.x+y)return;var aa=u<z.x?-1:1,ba=this._wrap.offsetWidth*.8*aa;this.scrollBy(ba);},scrollBy:function(u){this.setScroll(n.getLeft(this._wrap)+u);},getMaxBodyOffset:function(){return this._body.offsetWidth-this._wrap.offsetWidth;},setScroll:function(u){var v=u;v=Math.max(Math.min(v,this.getMaxBodyOffset()),0);n.setLeft(this._wrap,v);},scrollIntoView:function(u){var v=this._wrap.clientWidth,w=u.offsetWidth,x=n.getLeft(this._wrap),y=x+v,z=u.offsetLeft,aa=z+w;if(z<x||v<w){this.setScroll(z);}else if(aa>y)this.setScroll(x+(aa-y));},mouseWheel:function(event){if(this.getMaxBodyOffset()<=0)return;var u=0;if(event.wheelDelta){var v=event.wheelDelta;if(event.wheelDeltaX&&event.wheelDeltaY)v=Math.abs(event.wheelDeltaX)>Math.abs(event.wheelDeltaY)?event.wheelDeltaX:event.wheelDeltaY;u=-v*10/40;}else if(event.detail)u=event.detail*10;this.scrollBy(u);event.prevent();}});f.exports=b.TimelineMapScrollableArea||t;},null);
__d('glyph',['ix'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();f.exports=c('ix');},null);
__d('XComposerPhotoUploader',['AsyncUploadRequest','FileInputUploader','JSLogger','PhotosMimeType','PhotosUploadID','curry','emptyFunction','performanceNow'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o){'use strict';if(c.__markCompiled)c.__markCompiled();function p(q){this.$XComposerPhotoUploader1=q.uploadData||{};this.$XComposerPhotoUploader2=q.uploadEndpoint;this.$XComposerPhotoUploader3=q.retryLimit;this.$XComposerPhotoUploader4=q.concurrentLimit;this.$XComposerPhotoUploader5=q.resizer;this.$XComposerPhotoUploader6=q.onUploadEnqueued||n;this.$XComposerPhotoUploader7=q.onUploadsEnqueued||n;this.$XComposerPhotoUploader8=q.onResizeStart||n;this.$XComposerPhotoUploader9=q.onResizeProgress||n;this.$XComposerPhotoUploader10=q.onResizeSuccess||n;this.$XComposerPhotoUploader11=q.onResizeFailure||n;this.$XComposerPhotoUploader12=q.onUploadSent||n;this.$XComposerPhotoUploader13=q.onUploadStart||n;this.$XComposerPhotoUploader14=q.onUploadProgress||n;this.$XComposerPhotoUploader15=q.onUploadSuccess||n;this.$XComposerPhotoUploader16=q.onUploadFailure||n;this.$XComposerPhotoUploader17=j.create('composer');}p.prototype.upload=function(q){var r=Object.assign({},this.$XComposerPhotoUploader1),s=null;if(!this.$XComposerPhotoUploader18(q)){var t=l.getNewID();q.uploadID=t;r.upload_id=t;this.$XComposerPhotoUploader6({uploadID:t,fileName:q.value.split('/').pop().split('\\').pop()});}else{s=Array.from(q.files);s.forEach((function(w){if(!w.uploadID)w.uploadID=l.getNewID();this.$XComposerPhotoUploader6({uploadID:w.uploadID,fileName:w.name});}).bind(this));}this.$XComposerPhotoUploader7();var u=new i(q).setURI(this.$XComposerPhotoUploader2).setData(r).setAllowCrossOrigin(true).setNetworkErrorRetryLimit(this.$XComposerPhotoUploader3).setUploadInParallel(true);if(s&&s.length>0){u.setFiles({farr:s});if(this.$XComposerPhotoUploader5)u.setPreprocessHandler(this.$XComposerPhotoUploader19.bind(this));if(this.$XComposerPhotoUploader4)u.setConcurrentLimit(this.$XComposerPhotoUploader4);}u.subscribe('progress',(function(w,x){return (this.$XComposerPhotoUploader14(this.$XComposerPhotoUploader20(x,q),x));}).bind(this));u.subscribe('failure',(function(w,x){return (this.$XComposerPhotoUploader16(this.$XComposerPhotoUploader20(x,q),x,s));}).bind(this));u.subscribe('start',(function(w,x){return (this.$XComposerPhotoUploader13(this.$XComposerPhotoUploader20(x,q),x));}).bind(this));u.subscribe('success',(function(w,x){return (this.$XComposerPhotoUploader15(this.$XComposerPhotoUploader20(x,q),x));}).bind(this));try{u.send();this.$XComposerPhotoUploader12(q);}catch(v){this.$XComposerPhotoUploader17.error('error_send_unpublished_files',v);throw v;}};p.prototype.getAsyncUploadRequest=function(q,r){var s=new h().setData(Object.assign({},r&&r.data,this.$XComposerPhotoUploader1)).setFiles({farr:q}).setAllowCrossOrigin(true).setURI(this.$XComposerPhotoUploader2);if(this.$XComposerPhotoUploader4)s.setLimit(this.$XComposerPhotoUploader4);if(this.$XComposerPhotoUploader5)s.setPreprocessHandler(this.$XComposerPhotoUploader19.bind(this));s.subscribe('start',(function(t,u){return (this.$XComposerPhotoUploader13(u.getFile().uploadID,{upload:u}));}).bind(this));s.subscribe('progress',(function(t,u){return (this.$XComposerPhotoUploader14(u.getFile().uploadID,{upload:u,event:u.getProgressEvent()}));}).bind(this));s.subscribe('success',(function(t,u){return (this.$XComposerPhotoUploader15(u.getFile().uploadID,{upload:u,response:u.getResponse()}));}).bind(this));s.subscribe('failure',(function(t,u){return (this.$XComposerPhotoUploader16(u.getFile().uploadID,{upload:u,response:u.getResponse()},q));}).bind(this));return s;};p.prototype.$XComposerPhotoUploader20=function(q,r){if(q.upload){return q.upload.getFile().uploadID;}else return r.uploadID;};p.prototype.$XComposerPhotoUploader19=function(q,r){var s=q.getFile();if(!s||!k(s.type).isJpeg())return r(q);var t=o();this.$XComposerPhotoUploader8(s);this.$XComposerPhotoUploader5.resizeBlob(s,(function(u,v,w){v=v||s;if(u){var x=o()-t;this.$XComposerPhotoUploader11(s,v,u,x);return r(q);}v.uploadID=s.uploadID;v.filename=s.name;q.setFile(v);this.$XComposerPhotoUploader10(s,v,w,o()-t);r(q);}).bind(this),m(this.$XComposerPhotoUploader9,s.uploadID));};p.prototype.$XComposerPhotoUploader18=function(q){return !!q.files&&h.isSupported();};f.exports=p;},null);