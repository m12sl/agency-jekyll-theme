/*!CK:1498585788!*//*1452216455,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["JAeBv"]); }

__d('isSoftNewlineEvent',['Keys'],function a(b,c,d,e,f,g,h){'use strict';if(c.__markCompiled)c.__markCompiled();function i(j){return j.which===h.RETURN&&(j.getModifierState('Shift')||j.getModifierState('Alt')||j.getModifierState('Control'));}f.exports=i;},null);
__d('getTextAfterNearestEntity',[],function a(b,c,d,e,f,g){'use strict';if(c.__markCompiled)c.__markCompiled();function h(i,j){var k=j;while(k>0&&i.getEntityAt(k-1)===null)k--;return i.getText().slice(k,j);}f.exports=h;},null);
__d('applyEmoticonToContentState',['EmoticonsList','applyEmoticonToContentBlock','getTextAfterNearestEntity'],function a(b,c,d,e,f,g,h,i,j){'use strict';if(c.__markCompiled)c.__markCompiled();var k=new RegExp(h.regexp.source,'g');function l(m,n){var o=n.getAnchorKey(),p=n.getAnchorOffset(),q=m.getBlockForKey(o),r=j(q,p),s,t;while(t!==null){t=k.exec(r);if(t!==null)s=t;}if(!s)return m;var u=s[1];if(!u&&p!==r.length)return m;var v=s[2],w=p-r.length,x=w+s.index+s[1].length,y=m.getBlockMap().set(o,i(q,v,x));p-=v.length-1;return m.merge({blockMap:y,selectionBefore:n,selectionAfter:n.merge({anchorOffset:p,focusOffset:p})});}f.exports=l;},null);
__d('handleBeforeInputForEmoticon',['DraftModifier','EditorState','applyEmoticonToContentState'],function a(b,c,d,e,f,g,h,i,j){if(c.__markCompiled)c.__markCompiled();var k=new RegExp(/[\s'".,!?]/);function l(m,n){var o=m.getSelection();if(!o.isCollapsed()||!n||!k.test(n))return m;var p=m.getCurrentContent(),q=j(p,o);if(q===p)return m;var r=h.insertText(q,q.getSelectionAfter(),n);return i.push(m,r,'insert-characters');}f.exports=l;},null);
__d('handleSoftNewlineForEmoticon',['DraftModifier','EditorState','applyEmoticonToContentState'],function a(b,c,d,e,f,g,h,i,j){if(c.__markCompiled)c.__markCompiled();function k(l){var m=l.getCurrentContent(),n=l.getSelection(),o=j(m,n);if(o===m)return l;var p=h.splitBlock(o,o.getSelectionAfter());return i.push(l,p,'split-block');}f.exports=k;},null);
__d('ChatInput.react',['Bootloader','ChatConfig','ContentState','CompositeDraftDecorator','DraftDecorator','DraftEditor.react','DraftModifier','EditorState','EmoticonSpan.react','React','ReactDOM','createPlainBlocksFromText','emptyFunction','getDefaultKeyBinding','getEntityMatcher','getVisibleValueForContentState','handleBeforeInputForEmoticon','handleSoftNewlineForEmoticon','insertEmoticonIntoEditorState','isSoftNewlineEvent','setImmediate'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,aa,ba){'use strict';if(c.__markCompiled)c.__markCompiled();var ca=q.PropTypes,da=t.thatReturnsNull,ea=q.createClass({displayName:'ChatInput',propTypes:{blockStyleFn:ca.func,initializeThingsWithInputFn:ca.func,inlineStyleFn:ca.func,inputKeyDown:ca.func,keyBindingFn:ca.func,onBlur:ca.func,onEscape:ca.func,onFocus:ca.func,onTab:ca.func,resizeFn:ca.func},getDefaultProps:function(){return {blockStyleFn:da,inlineStyleFn:da,keyBindingFn:u};},componentDidMount:function(){this._oldHeight=r.findDOMNode(this).getBoundingClientRect().height;this.props.resizeFn(this._oldHeight);this.props.initializeThingsWithInputFn(r.findDOMNode(this.refs.input),this.getValue);this.setState({triggeredWord:this.props.triggeredWord});},componentWillReceiveProps:function(fa){if(this.state.triggeredWord!==fa.triggeredWord)this.setState({triggeredWord:fa.triggeredWord},this._updateDecorator);},componentDidUpdate:function(){ba((function(){var fa=r.findDOMNode(this).getBoundingClientRect().height;if(this._oldHeight!==fa)this.props.resizeFn(fa);this._oldHeight=fa;}).bind(this));},getInitialState:function(){return {editorState:this._createEmptyEditorState()};},_createEmptyEditorState:function(){var fa=s(['']);return o.createWithContent(j.createFromBlockArray(fa),this._getDecorator());},resetState:function(){if(this.state.typeaheadReporter){this.state.typeaheadReporter.sessionEnd();this.state.typeaheadReporter.sessionStart();}this.setState({editorState:o.moveFocusToEnd(this._createEmptyEditorState()),triggeredWord:null});},_updateDecorator:function(){var fa=this._getDecorator();ba((function(){var ga=o.set(this.state.editorState,{decorator:fa});this.setState({editorState:ga});}).bind(this));},_getDecorator:function(){return new k([new l(v(function(fa){return fa.getType()==='EMOTICON';}),p)]);},onChange:function(fa){this.setState({editorState:fa});},onReturn:function(event){if(aa(event)){var fa=y(this.state.editorState);if(fa===this.state.editorState)return false;this.setState({editorState:fa});return true;}this.props.inputKeyDown(event,this.getValue());return true;},getValueFromEditorState:function(fa){var ga=fa.getCurrentContent();return w(ga);},getValue:function(){return this.getValueFromEditorState(this.state.editorState);},focus:function(){this.refs.input.focus();},_handleBeforeInput:function(fa){var ga=x(this.state.editorState,fa);if(ga===this.state.editorState)return false;this.setState({editorState:ga});return true;},_handleFiles:function(fa){var ga=/^image\//,ha=fa.filter(function(ia){return ga.test(ia.type);});if(ha.length){this.props.uploadPhotoFn(ha[0]);return true;}return false;},_handlePastedFiles:function(fa){return this._handleFiles(fa);},_handleDroppedFiles:function(fa,ga){return this._handleFiles(ga);},insertEmoticon:function(fa){var ga=z(fa,this.state.editorState);if(ga!==this.state.editorState)this.setState({editorState:ga});},appendText:function(fa){var ga=this.state.editorState,ha=ga.getSelection(),ia=ga.getCurrentContent();ia=n.insertText(ia,ha,fa);ga=o.push(ga,ia,'insert-characters');this.setState({editorState:ga});},render:function(){return (q.createElement(m,babelHelpers._extends({ref:'input'},this.props,{editorState:this.state.editorState,onChange:this.onChange,handleBeforeInput:this._handleBeforeInput,handlePastedFiles:this._handlePastedFiles,handleDroppedFiles:this._handleDroppedFiles,handleReturn:this.onReturn,spellCheck:true})));}});f.exports=ea;},null);
__d('ChatInputBasic.react',['React','ReactDOM','TextAreaControl','cx','setImmediate','FocusListener','FlipDirectionOnKeypress'],function a(b,c,d,e,f,g,h,i,j,k,l){'use strict';if(c.__markCompiled)c.__markCompiled();c('FocusListener');c('FlipDirectionOnKeypress');var m=h.PropTypes,n=h.createClass({displayName:'ChatInputBasic',_oldHeight:undefined,_textAreaControl:undefined,propTypes:{initializeThingsWithInputFn:m.func.isRequired,inputKeyDown:m.func.isRequired,onBlur:m.func,onFocus:m.func,placeholder:m.string,resizeFn:m.func.isRequired},getInitialState:function(){return {value:''};},componentDidMount:function(){this._oldHeight=i.findDOMNode(this).getBoundingClientRect().height;this.props.resizeFn(this._oldHeight);this.props.initializeThingsWithInputFn(i.findDOMNode(this.refs.input),this.getValue);this._textAreaControl=j.getInstance(this.refs.input);},componentDidUpdate:function(){l((function(){var o=i.findDOMNode(this).getBoundingClientRect().height;if(this._oldHeight!==o)this.props.resizeFn(o);this._oldHeight=o;}).bind(this));},onChange:function(o){this._textAreaControl&&this._textAreaControl.onupdate();this.setState({value:o.target.value||''});},focus:function(){this.refs.input.focus();},getValue:function(){return this.state.value;},resetState:function(){this.setState(this.getInitialState());},appendText:function(o){this.setState({value:this.state.value+o});},render:function(){return (h.createElement('textarea',babelHelpers._extends({ref:'input'},this.props,{value:this.state.value,onChange:this.onChange,onKeyDown:this.props.inputKeyDown,autogrow:'true',className:"_552m uiTextareaNoResize uiTextareaAutogrow",'data-jsid':'input'})));}});f.exports=n;},null);
__d('ChatInputWrapper.react',['ChatConfig','ChatInput.react','ChatInputBasic.react'],function a(b,c,d,e,f,g,h,i,j){'use strict';if(c.__markCompiled)c.__markCompiled();var k=h.get('chat_basic_input')?j:i;f.exports=k;},null);