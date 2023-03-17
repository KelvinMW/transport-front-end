/*!
 * 
 *   Name: dvsa-front-end/dvsa-mts
 *   Version: 1.7.10
 *   Timestamp: March 14th 2023, 2:33:19 pm
 *   Source: https://github.com/dvsa/front-end
 *
 */!function(){"use strict";var e,t={937:function(e,t,s){s(142),s(1786),s(5368),s(6964),s(2152),s(4821),s(9103),s(1303),s(3318),s(162),s(3834),s(8416),s(8184),s(147),s(9192),s(1572),s(2139),s(685),s(5535),s(3049),s(6633),s(8989),s(8270),s(4510),s(3984),s(5769),s(55),s(6014),s(851),s(5767),s(9375),s(3533),s(4672),s(4157),s(5095),s(9892),s(4882),s(1520),s(7476),s(9622),s(5115),s(9176),s(8838),s(6059),s(8306),s(191),s(9539),s(823),s(7732),s(6620),s(2850),s(6774),s(1466),s(9357),s(1876),s(6142),s(522),s(8295),s(2e3),s(2310),s(4899),s(8977),s(6997),s(3403),s(2516),s(6479),s(9371),s(5972),s(1889),s(1736),s(6503),s(6786),s(932),s(7526),s(1591),s(9073),s(347),s(579),s(4669),s(7710),s(3514),s(5789),s(9978),s(8472),s(6946),s(5068),s(413),s(2773),s(6409),s(3276),s(8351),s(1784),s(2770),s(2564),s(4633),s(1181),s(5666),s(1798);var n=s(2218),a=s(4811);(0,n.domReady)((function(){(0,n.initGDS)(),(0,a.initModules)()}))},9187:function(e,t,s){Object.defineProperty(t,"__esModule",{value:!0}),t.CheckAll=void 0;var n=s(9615),a=s(8068);t.CheckAll=function e(t){var s=this;if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.init=function(){s.state.elements.count=s.countNumOfCheckboxItems(),s.state.elements.checkboxes.forEach((function(e){return(0,n.addEventListenerToEl)(e,"change",s.toggleChecks)}))},this.toggleChecks=function(e){var t=a.CHECK_ALL_CONFIG.classes.checkAll,n=e.target.classList.contains(t),i=s.countCheckedItems();if(n||i==s.state.elements.count)return s.selectAllToggleState();s.state.allChecked=!1,s.state.elements.allTarget.checked=!1},this.selectAllToggleState=function(){s.state.allChecked=!s.state.allChecked,s.state.elements.allTarget.checked=s.state.allChecked,s.state.elements.checkboxes.map((function(e){return e.checked=s.state.allChecked}))},this.countNumOfCheckboxItems=function(){return s.state.elements.checkboxes.filter(s.excludeCheckAll).length},this.countCheckedItems=function(){return s.state.elements.checkboxes.filter(s.excludeCheckAll).filter((function(e){return e.checked})).length},this.excludeCheckAll=function(e){if(!e.classList.contains(a.CHECK_ALL_CONFIG.classes.checkAll))return e},t){var i=t.querySelectorAll("input"),r=[].concat(function(e){if(Array.isArray(e)){for(var t=0,s=Array(e.length);t<e.length;t++)s[t]=e[t];return s}return Array.from(e)}(i)),o=t.querySelector("."+a.CHECK_ALL_CONFIG.classes.checkAll);this.state={allChecked:!1,elements:{allTarget:o,checkboxes:r,count:0}},this.init()}}},8068:function(e,t,s){Object.defineProperty(t,"__esModule",{value:!0}),t.initCheckAll=t.CHECK_ALL_CONFIG=void 0;var n=s(9187);var a=t.CHECK_ALL_CONFIG={classes:{groupContainer:"js-check-all-group",checkAll:"js-check-all"}};t.initCheckAll=function(){var e=document.querySelectorAll("."+a.classes.groupContainer);e&&[].concat(function(e){if(Array.isArray(e)){for(var t=0,s=Array(e.length);t<e.length;t++)s[t]=e[t];return s}return Array.from(e)}(e)).forEach((function(e){return new n.CheckAll(e)}))}},2299:function(e,t,s){Object.defineProperty(t,"__esModule",{value:!0}),t.CriteriaValidation=void 0;var n=s(2218);t.CriteriaValidation=function e(){var t=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.init=function(){t.grabCriteriaFromDOM(),t.addEvents()},this.grabCriteriaFromDOM=function(){t.elements.criteriaElements&&t.elements.criteriaElements.forEach((function(e){var s=e.getAttribute(t.attributes.name),n=e.getAttribute(t.attributes.param);s&&t.criteria.push({name:s,param:n,element:e})}))},this.addEvents=function(){(0,n.delegateEvent)(document,"keyup",t.selectors.passwordElement,t.checkCriteriaHandler),(0,n.delegateEvent)(document,"paste",t.selectors.passwordElement,t.checkCriteriaHandler),(0,n.delegateEvent)(document,"keypress",t.selectors.passwordElement,t.checkCriteriaHandler)},this.checkCriteriaHandler=function(){if(t.elements.passwordElement){var e=t.elements.passwordElement.value;t.criteria.forEach((function(s){var a=s.name,i=s.param,r=s.element;a&&r&&(t[a](e,i)?((0,n.toggleClass)(r,t.classnames.pass,!0),(0,n.toggleClass)(r,t.classnames.fail,!1)):((0,n.toggleClass)(r,t.classnames.pass,!1),(0,n.toggleClass)(r,t.classnames.fail,!0)))}))}},this.hasMixedCase=function(e){return!!/^(?=.*[a-z])(?=.*[A-Z]).+$/.test(e)},this.minLength=function(e,t){return!!new RegExp("^.{"+t+",}$").test(e)},this.notMatch=function(e,t){return e===t},this.hasNumeric=function(e){return!!/[0-9]/.test(e)},this.hasUpperCase=function(e){return!!/[A-Z]/.test(e)},this.hasLowerCase=function(e){return!!/[a-z]/.test(e)},this.classnames={neurtal:"criteria__criterion",fail:"criteria__criterion--has-failed",pass:"criteria__criterion--has-passed"},this.attributes={name:"data-criteria",param:"data-criteria-param"},this.selectors={criteriaElement:"["+this.attributes.name+"]",passwordElement:"#password"},this.criteria=[],this.elements={criteriaElements:Array.from(document.querySelectorAll(this.selectors.criteriaElement)),passwordElement:document.querySelector(this.selectors.passwordElement)},this.init()}},7498:function(e,t,s){Object.defineProperty(t,"__esModule",{value:!0}),t.initCritieraValidation=void 0;var n=s(2299);t.initCritieraValidation=function(){new n.CriteriaValidation}},4477:function(e,t,s){Object.defineProperty(t,"__esModule",{value:!0}),t.DoubleClickPrevention=void 0;var n,a=s(2568),i=(n=a)&&n.__esModule?n:{default:n},r=s(2218);t.DoubleClickPrevention=function e(){var t=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.init=function(){t.addEvents()},this.addEvents=function(){(0,r.delegateEvent)(document,"submit",t.selectors.preventDoubleClickForm,t.submitFormHandler)},this.submitFormHandler=function(e){var s=(0,i.default)(JSON.stringify(e));if(-1===t.state.validatedForms.indexOf(s)){var n=e.target.getAttribute(t.attributes.submitButtonId),a=document.querySelector("#"+n);a&&a.setAttribute(t.attributes.disabled,t.attributes.disabled)}else e.preventDefault()},this.classnames={preventDoubleClickForm:"prevent-double-click-form"},this.attributes={submitButtonId:"submit-button-id",disabled:"disabled"},this.selectors={preventDoubleClickForm:"."+this.classnames.preventDoubleClickForm},this.state={validatedForms:[]}}},6625:function(e,t,s){Object.defineProperty(t,"__esModule",{value:!0}),t.initDoubleClickPrevention=void 0;var n=s(4477);t.initDoubleClickPrevention=function(){new n.DoubleClickPrevention}},5753:function(e,t){Object.defineProperty(t,"__esModule",{value:!0});t.FILTER_CONFIG={selectors:{component:".js-filter-wrapper",messageList:".js-message-list",checkboxes:".js-message-filter",filteredView:".js-message-panel",filterNotice:"message-panel__notice"},data:{noFilterNotice:"Select a message type to view",noMessagesNotice:"No messages",messages:"[data-type]"}}},1419:function(e,t,s){Object.defineProperty(t,"__esModule",{value:!0}),t.MessagesFilter=void 0;var n=s(5753),a=s(9498),i=s(450);function r(e){if(Array.isArray(e)){for(var t=0,s=Array(e.length);t<e.length;t++)s[t]=e[t];return s}return Array.from(e)}t.MessagesFilter=function e(t){if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),o.call(this),t){var s=t,a=document.querySelector(".js-message-list"),i=[].concat(r(s.querySelectorAll(n.FILTER_CONFIG.selectors.checkboxes))),l=[].concat(r(a.querySelectorAll(n.FILTER_CONFIG.data.messages))),c=s.querySelector(n.FILTER_CONFIG.selectors.filteredView),u=document.querySelector(n.FILTER_CONFIG.selectors.messageList),d=document.createElement("p");d.classList.add(""+n.FILTER_CONFIG.selectors.filterNotice),d.style.display="none",u.parentNode.insertBefore(d,u),this.elements={component:s,checkboxes:i,messageList:a,messageItems:l,filteredView:c,filterNoticeTarget:u};var m=this.elements.checkboxes.map((function(e){return e.attributes["data-type"].value}));this.state={allFilters:m,currFilters:m},this.init()}};var o=function(){var e=this;this.init=function(){Array.from(e.elements.checkboxes).forEach((function(t){(0,a.addEventListenerToEl)(t,"change",e.handleCheck)})),"sn"==(0,i.getQueryVariable)("filter")&&e.filterSpecialNotices(),e.handleCheck()},this.filterSpecialNotices=function(){var t=[],s="Special notice";e.elements.checkboxes.forEach((function(e){e.checked=!1,e.attributes["data-type"].value==s&&(e.checked=!0),t.push(s)})),e.state.currFilters=t,e.filterMessages(e.state.currFilters)},this.handleCheck=function(t){var s=[],n=[],a=!0;e.elements.checkboxes.forEach((function(e){if(e.checked){var t=e.attributes["data-type"].value;s.push(t);var a=e.attributes["data-filter"].value;n.push(a)}})),s.length===e.elements.checkboxes.length&&(a=!1),e.state.currFilters=s,e.filterMessages(e.state.currFilters),a?e.updateMessageLinks(n.join("+")):e.updateMessageLinks()},this.filterMessages=function(t){var s=Array.from(e.elements.messageItems),a=0;s.forEach((function(e){var s=e.attributes["data-type"].value;t.includes(s)?e.classList.remove("hidden"):(e.classList.add("hidden"),a++)}));var i=document.querySelector(".message-panel__notice");i.style.display="none",0===e.state.currFilters.length?(i.innerHTML=n.FILTER_CONFIG.data.noFilterNotice,i.style.display="block"):0!==s.length&&s.length!==a||(i.innerHTML=n.FILTER_CONFIG.data.noMessagesNotice,i.style.display="block")},this.updateMessageLinks=function(t){e.elements.messageItems.forEach((function(e){Array.from(e.querySelectorAll("a")).forEach((function(e){var s=e.href;s=s.split("?")[0],t&&(s=s+"?filter="+t),e.href=s}))}))}}},7494:function(e,t,s){Object.defineProperty(t,"__esModule",{value:!0}),t.initMessageFilter=void 0;var n=s(1419);s(5753),t.initMessageFilter=function(){var e=document.querySelectorAll(".js-filter-wrapper"),t=void 0;if(!(e.length<1))for(t=0;t<e.length;++t)new n.MessagesFilter(e[t])}},3959:function(e,t,s){Object.defineProperty(t,"__esModule",{value:!0}),t.FormDisableOnSubmit=void 0;var n=s(2218);t.FormDisableOnSubmit=function e(){var t=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.init=function(){(0,n.delegateEvent)(document,"submit",t.selectors.form,t.onFormSubmit),t.setupAllFormsInState()},this.setupAllFormsInState=function(){t.elements.forms&&t.elements.forms.forEach((function(e){t.state.forms.push({element:e,submitted:!1}),e.setAttribute(t.attributes.formStateIndex,t.state.forms.length-1)}))},this.onFormSubmit=function(e){if(e&&e.target&&!e.target.getAttribute(t.attributes.ignoreFormDisableSubmitButton)){var s=e.target,n=s.getAttribute(t.attributes.formStateIndex),a=t.state.forms[n]||!1,i=s.querySelector(t.selectors.submitButton);if(i&&a&&!a.submitted){var r=i.getAttribute(t.attributes.value),o=i.getAttribute(t.attributes.name),l=document.createElement("input");l.type="hidden",l.name=o,l.value=r,i.parentNode.appendChild(l),i.name="",i.setAttribute(t.attributes.disabled,t.attributes.disabled),t.state.forms[n].submitted=!0}}},this.selectors={form:"form",submitButton:'input[type="submit"]'},this.attributes={disabled:"disabled",value:"value",name:"name",formStateIndex:"data-form-state-index",ignoreDisableFormSubmit:"data-ignore-form-disable-submit-button"},this.elements={forms:Array.from(document.querySelectorAll(this.selectors.form))},this.state={forms:[]},this.init()}},4905:function(e,t,s){Object.defineProperty(t,"__esModule",{value:!0}),t.initFormDisableOnSubmit=void 0;var n=s(3959);t.initFormDisableOnSubmit=function(){new n.FormDisableOnSubmit}},1327:function(e,t,s){Object.defineProperty(t,"__esModule",{value:!0}),t.FormSubmitDisableDetailsHiddenFields=void 0;var n=s(2218);t.FormSubmitDisableDetailsHiddenFields=function e(){var t=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.init=function(){(0,n.delegateEvent)(document,"submit",t.selectors.form,t.onFormSubmit)},this.onFormSubmit=function(e){if(!e.target||!e.target.getAttribute(t.attributes.ignoreFormDisableDetails)){var s=Array.from(document.querySelectorAll(t.selectors.details));s&&Array.isArray(s)&&s.forEach((function(e){if(e){var s=Array.from(e.querySelectorAll("input"));s&&Array.isArray(s)&&s.forEach((function(e){e&&(0,n.isElementHidden)(e)&&e.setAttribute(t.attributes.disabled,t.attributes.disabled)}))}}))}},this.selectors={form:"form",details:"details"},this.attributes={disabled:"disabled",ignoreFormDisableDetails:"data-ignore-form-disable-details"},this.init()}},9083:function(e,t,s){Object.defineProperty(t,"__esModule",{value:!0}),t.initFormDisableDetailsHiddenFields=void 0;var n=s(1327);t.initFormDisableDetailsHiddenFields=function(){new n.FormSubmitDisableDetailsHiddenFields}},4811:function(e,t,s){Object.defineProperty(t,"__esModule",{value:!0}),t.initModules=void 0;var n=s(7498),a=s(2671),i=s(6625),r=s(1594),o=s(3583),l=s(9083),c=s(759),u=s(4905),d=s(3637),m=s(8068),f=s(7494),h=s(8571),g=s(4619);t.initModules=function(){(0,n.initCritieraValidation)(),(0,a.initSelectToggle)(),(0,i.initDoubleClickPrevention)(),(0,r.initMarkRepairs)(),(0,o.initShowHideToggle)(),(0,l.initFormDisableDetailsHiddenFields)(),(0,c.initOdometerReading)(),(0,u.initFormDisableOnSubmit)(),(0,d.initMotTestSearch)(),(0,m.initCheckAll)(),(0,f.initMessageFilter)(),(0,h.initMtsLogin)(),(0,g.initTextareaAutoresize)()}},1594:function(e,t,s){Object.defineProperty(t,"__esModule",{value:!0}),t.initMarkRepairs=void 0;var n=s(8884);t.initMarkRepairs=function(){new n.MarkRepairs}},8884:function(e,t,s){Object.defineProperty(t,"__esModule",{value:!0}),t.MarkRepairs=void 0;var n,a=s(9669),i=(n=a)&&n.__esModule?n:{default:n},r=s(2218);t.MarkRepairs=function e(){var t=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.init=function(){t.addEvents()},this.addEvents=function(){(0,r.delegateEvent)(document,"click",t.selectors.buttonMarkRepaired,t.markRepairedButtonClickHandler)},this.markRepairedButtonClickHandler=function(e){e.preventDefault();var s=e.target;if(s){s.disabled=!0;var n=(0,r.closestParentOfEl)(s,t.selectors.rfrForm),a=(0,r.closestParentOfEl)(s,t.selectors.rfrItem),o=a.querySelector(t.selectors.itemStatus);if(!n||!a||!o)return console.warn("Could not find RFR form, RFR item and status DOM elements");var l=n.getAttribute(t.attributes.action)||s.getAttribute(t.attributes.url),c=(0,r.serializeForm)(n)||s.getAttribute(t.attributes.form);if(!l||!c)return console.warn("Could not find route URL or form data");(0,r.toggleClass)(a,t.classnames.hasStatus,!0),(0,r.toggleClass)(a,t.classnames.hasSuccess,!1),o.textContent=t.messages.loading;var u='That didn\'t work, <a class="js-buttonMarkRepaired" href="" data-url="'+l+'" data-form="'+c+'">try again</a>';i.default.post(l,c,{headers:{"X-Requested-With":"XMLHttpRequest"}}).then((function(e){var n=e.data;n&&n.success?((0,r.toggleClass)(a,t.classnames.hasStatus,!1),(0,r.toggleClass)(a,t.classnames.hasSuccess,n.action===t.responseActions.repair),t.updateCount(n.defectType,n.action,n.failureType),t.updateBrakeTest(n.brakeTestOutcome,n.brakesTested,n.brakeTestResults,n.disableSubmitButton),s.disabled=!1):o.innerHTML=u})).catch((function(e){o.innerHTML=u,s.disabled=!1}))}},this.updateCount=function(e,s,n){switch(e){case"advisory":t.updateCountForAllElements(t.elements.numberOfAdvisories,s,n);break;case"minor":t.updateCountForAllElements(t.elements.numberOfMinors,s,n);break;case"failure":t.updateCountForAllElements(t.elements.numberOfFailures,s,n);break;default:return console.warn("Invalid type")}},this.updateCountForAllElements=function(e,s,n){e&&Array.isArray(e)&&e.forEach((function(e){("emissionsTest"===n&&e.classList.contains(t.selectors.emissionsTestFailures)||"defect"===n&&e.classList.contains(t.selectors.defectFailures)||null==n)&&t.updateCountForElement(e,s)}))},this.updateCountForElement=function(e,s){if(e){var n=parseInt(e.textContent)||0;s===t.responseActions.repair?n--:n++,e.textContent=n}},this.updateBrakeTest=function(e,s,n,a){if(!t.elements.actionPanel)return console.warn("Could not find brake tests action panel");t.elements.brakeTest.testStatus&&(t.elements.brakeTest.testStatus.textContent=e),t.elements.brakeTest.actions&&(!0===s&&!0===n?(0,r.toggleClass)(t.elements.brakeTest.actions,t.classnames.uHidden,!1):(0,r.toggleClass)(t.elements.brakeTest.actions,t.classnames.uHidden,!0)),t.elements.brakeTest.addBrakeTest&&(!1===s||!0===n?(0,r.toggleClass)(t.elements.brakeTest.addBrakeTest,t.classnames.uHidden,!0):(0,r.toggleClass)(t.elements.brakeTest.addBrakeTest,t.classnames.uHidden,!1)),t.elements.brakeTest.summary&&!1===s&&t.elements.brakeTest.summary.remove(),t.elements.brakeTest.reviewTestButton&&(t.elements.brakeTest.reviewTestButton.disabled=!0===a)},this.classnames={uHidden:"u-hidden",hasStatus:"has-status",hasSuccess:"has-success"},this.attributes={disabled:"disabled",action:"action",url:"data-url",form:"data-form"},this.selectors={brakeTest:{actionPanel:".js-brakeTestActionPanel",testStatus:".js-brakeTestStatus",addBrakeTest:".js-addBrakeTest",actions:".js-brakeTestActions",reviewTestButton:".js-reviewTestButton",summary:".js-brakeTestSummary"},numberOfFailures:".js-numberOfFailures",numberOfAdvisories:".js-numberOfAdvisories",numberOfMinors:".js-numberOfMinors",buttonMarkRepaired:".js-buttonMarkRepaired",rfrForm:".js-rfrForm",rfrItem:".js-rfrItem",itemStatus:".js-itemStatus",emissionsTestFailures:"js-emissionsTestFailures",defectFailures:"js-defectFailures"},this.elements={brakeTest:{testStatus:document.querySelector(this.selectors.brakeTest.testStatus),addBrakeTest:document.querySelector(this.selectors.brakeTest.addBrakeTest),actions:document.querySelector(this.selectors.brakeTest.actions),reviewTestButton:document.querySelector(this.selectors.brakeTest.reviewTestButton),summary:document.querySelector(this.selectors.brakeTest.summary)},actionPanel:document.querySelector(this.selectors.brakeTest.actionPanel),numberOfFailures:Array.from(document.querySelectorAll(this.selectors.numberOfFailures)),numberOfAdvisories:Array.from(document.querySelectorAll(this.selectors.numberOfAdvisories)),numberOfMinors:Array.from(document.querySelectorAll(this.selectors.numberOfMinors))},this.responseActions={repair:"repair"},this.messages={loading:"Loading"},this.init()}},3637:function(e,t,s){Object.defineProperty(t,"__esModule",{value:!0}),t.initMotTestSearch=void 0;var n=s(8584);t.initMotTestSearch=function(){new n.MOTTestSearch}},8584:function(e,t,s){Object.defineProperty(t,"__esModule",{value:!0}),t.MOTTestSearch=void 0;var n=s(2218);t.MOTTestSearch=function e(){var t=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.init=function(){(0,n.addEventListenerToEl)(t.elements.type,"change",t.updateFormBasedOnTypeValue),t.updateFormBasedOnTypeValue()},this.updateFormBasedOnTypeValue=function(){t.elements.vtsSearch.setAttribute(t.attributes.placeholder,t.messages.placeholders[t.elements.type.value]),t.elements.searchValueLabelText.innerText=t.messages.inputLabels[t.elements.type.value],t.elements.form.setAttribute(t.attributes.action,t.state.baseUrl+"/"+t.elements.type.value),-1!==[t.state.typeOptions.vtsDate,t.state.typeOptions.tester].indexOf(t.elements.type.value)?t.elements.dateRangeFields.style.display="block":t.elements.dateRangeFields.style.display="none"},this.elements={form:document.querySelector("#vts-search-form"),type:document.querySelector("#type"),dateRangeFields:document.querySelector("#dateRangeFields"),dates:{month1:document.querySelector("#month1"),year1:document.querySelector("#year1"),month2:document.querySelector("#month2"),year2:document.querySelector("#year2")},searchFieldRow:document.querySelector("#search-field-row"),searchValueLabel:document.querySelector("#search-value-label"),searchValueLabelText:document.querySelector("#search-value-label-text"),vtsSearch:document.querySelector("#vts-search")},this.attributes={baseUrl:"data-base-url",action:"action",placeholder:"placeholder"},this.state={baseUrl:"",typeOptions:{vts:"vts",vtsDate:"vtsDate",tester:"tester",vrm:"vrm",vin:"vin",testNumber:"testNumber"}},this.messages={placeholders:{vts:"eg. V12345",vtsDate:"eg. V12345",tester:"enter username",vrm:"eg. VK02 MOT",vin:"eg. WV1ZZZ8ZH6H091596",testNumber:"eg. 999999999014"},inputLabels:{vts:"Site name",vtsDate:"Site name",tester:"Tester name",vrm:"Vehicle registration",vin:"Vehicle VIN",testNumber:"MOT test number"}},this.elements.form&&(this.state.baseUrl=this.elements.form.getAttribute(this.attributes.baseUrl),this.init())}},8571:function(e,t){Object.defineProperty(t,"__esModule",{value:!0});t.initMtsLogin=function(){var e=document.querySelector(".js-password-behaviour"),t=function(){""===e.value?e.style.color="#FFF":e.style.color="#000"};e&&(e.onkeypress=function(e){if("Enter"===e.key)return document.getElementById("Login").submit(),!1},e.oncontextmenu=function(e){void 0!==e.preventDefault&&e.preventDefault(),void 0!==e.stopPropagation&&e.stopPropagation()},e.onkeydown=function(e){if(("c"===e.key||"x"===e.key)&&(e.metaKey||e.ctrlKey))return!1},e.onpaste=function(s){var n=void 0,a=void 0;s.stopPropagation(),s.preventDefault(),void 0!==(n=s.clipboardData||window.clipboardData)&&(a=n.getData("Text"),e.value=a.replace(/\n/g,"").replace(/\v/g,"").replace(/\f/g,"").replace(/\r/g,"")),t()},e.ondragstart=function(e){return e.preventDefault()},e.oncopy=function(e){return!1},e.oncut=function(e){return!1},e.onfocus=function(e){t()},e.oninput=function(e){t()})}},759:function(e,t,s){Object.defineProperty(t,"__esModule",{value:!0}),t.initOdometerReading=void 0;var n=s(7456);t.initOdometerReading=function(){new n.OdometerReading}},7456:function(e,t,s){Object.defineProperty(t,"__esModule",{value:!0}),t.OdometerReading=void 0;var n=s(2218);t.OdometerReading=function e(){var t=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.init=function(){(0,n.delegateEvent)(document,"click",t.selectors.unknown,t.onUnknownOrNoOdometerClick),(0,n.delegateEvent)(document,"click",t.selectors.noOdometer,t.onUnknownOrNoOdometerClick),(0,n.delegateEvent)(document,"click",t.selectors.odometer,t.onOdometerClick)},this.onUnknownOrNoOdometerClick=function(e){t.elements.odometer.value=""},this.onOdometerClick=function(e){t.elements.odoInputRadio.click()},this.selectors={unknown:".js-unknown",noOdometer:".js-noOdometer",odometer:".js-odometer",odoInputRadio:".js-odoInputRadio"},this.elements={odometer:document.querySelector(this.selectors.odometer),odoInputRadio:document.querySelector(this.selectors.odoInputRadio)},this.elements.odometer&&this.elements.odoInputRadio&&this.init()}},2671:function(e,t,s){Object.defineProperty(t,"__esModule",{value:!0}),t.initSelectToggle=void 0;var n=s(7665);t.initSelectToggle=function(){new n.SelectToggle}},7665:function(e,t,s){Object.defineProperty(t,"__esModule",{value:!0}),t.SelectToggle=void 0;var n=s(2218);t.SelectToggle=function e(){var t=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.init=function(){t.setupInitialStateFromDOM(),(0,n.delegateEvent)(document,"change",t.selectors.selectElements,t.selectChangeHandler)},this.setupInitialStateFromDOM=function(){t.elements.selectElements&&t.elements.selectElements.forEach((function(e){t.updateSelectFieldStateFromDOM(e)}))},this.selectChangeHandler=function(e){var s=e.target;s&&t.updateSelectFieldStateFromDOM(s)},this.updateSelectFieldStateFromDOM=function(e){if(e){var s=t.getElementDetails(e);s&&(-1!==s.targetValues.indexOf(e.value)?(s.targetElement.display="block",(0,n.toggleClass)(s.targetElement,t.classnames.jsHidden,!1)):(s.targetElement.display="none",(0,n.toggleClass)(s.targetElement,t.classnames.jsHidden,!0)),t.updateAriaAttributes(e),t.clearAllInputData(e))}},this.getElementDetails=function(e){if(!e)return!1;var s=e.getAttribute(t.attributes.target),n=document.querySelector("#"+s),a=e.getAttribute(t.attributes.targetValue);return!(!s||!n)&&{targetId:s,targetElement:n,targetValues:a.split(",")}},this.updateAriaAttributes=function(e){if(e){var s=t.getElementDetails(e);s&&(e.setAttribute(t.attributes.aria.controls,s.targetId),-1!==s.targetValues.indexOf(e.value)?e.setAttribute(t.attributes.aria.expanded,!0):e.setAttribute(t.attributes.aria.expanded,!1))}},this.clearAllInputData=function(e){var s=Array.from(e.querySelectorAll(t.selectors.inputs));s&&s.forEach((function(e){e.getAttribute(t.attributes.retainValue)||(e.value="")}))},this.classnames={jsHidden:"js-hidden"},this.attributes={target:"data-target",targetValue:"data-target-value",retainValue:"retain-value",aria:{controls:"aria-controls",hidden:"aria-hidden",expanded:"aria-expanded"}},this.selectors={selectElements:"select["+this.attributes.target+"]",inputs:'textarea:not([value=""]), input[type="text"], input[type="email"], input[type="password"], input[type="tel"]'},this.elements={selectElements:Array.from(document.querySelectorAll(this.selectors.selectElements))},this.init()}},3583:function(e,t,s){Object.defineProperty(t,"__esModule",{value:!0}),t.initShowHideToggle=void 0;var n=s(1308);t.initShowHideToggle=function(){new n.ShowHideToggle}},1308:function(e,t,s){Object.defineProperty(t,"__esModule",{value:!0}),t.ShowHideToggle=void 0;var n=s(2218);t.ShowHideToggle=function e(){var t=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.init=function(){t.setupInitialStateFromDOM(),t.addEvents()},this.setupInitialStateFromDOM=function(){t.elements.showHideToggles&&t.elements.showHideToggles.forEach((function(e){var s=t.getElementDetails(e);if(s){var a=s.targetState!==t.targetStates.open;a?(s.toggleType!==t.toggleTypes.responsive&&s.targetElement?(0,n.toggleClass)(s.targetElement,t.classnames.jsHidden,a):(0,n.toggleClass)(s.targetElement,t.classnames.hideSmall,a),s.toggleType===t.toggleTypes.class&&s.targetElements&&s.targetElements.forEach((function(e){(0,n.toggleClass)(e,t.classnames.jsHidden,a)}))):((0,n.toggleClass)(s.targetElement,t.classnames.jsHidden,!1),e.textContent=s.openedText)}}))},this.addEvents=function(){(0,n.delegateEvent)(document,"click",t.selectors.showHideToggle,t.showHideToggleClickHandler)},this.showHideToggleClickHandler=function(e){e.target,e.preventDefault(),t.updateElementState(e.target)},this.updateElementState=function(e){if(e){var s=t.getElementDetails(e);if(s){var a=s.targetState===t.targetStates.closed;if(s.toggleType===t.toggleTypes.responsive&&s.targetElement?(0,n.toggleClass)(s.targetElement,t.classnames.hideSmall,!a):(0,n.toggleClass)(s.targetElement,t.classnames.jsHidden,!a),s.toggleType===t.toggleTypes.class&&s.targetElements&&s.targetElements.forEach((function(e){(0,n.toggleClass)(e,t.classnames.jsHidden,!a)})),e.setAttribute(t.attributes.targetState,a?t.targetStates.open:t.targetStates.closed),t.updateAllShowHideToggles(),s.targetId){var i=document.querySelector("#"+s.targetId+"Parent");i&&i.scrollIntoView(!0)}}}},this.updateAllShowHideToggles=function(){t.elements.showHideToggles&&t.elements.showHideToggles.forEach((function(e){var s=t.getElementDetails(e);if(s){var a=s.targetState===t.targetStates.closed;e.textContent=a?s.closedText:s.openedText,s.diableToggleSwitchClass||((0,n.toggleClass)(e,t.classnames.toggleSwitch,!a),(0,n.toggleClass)(e,t.classnames.toggleSwitchOpen,a))}}))},this.getElementDetails=function(e){if(e){var s=e.getAttribute(t.attributes.openedText),n=e.getAttribute(t.attributes.closedText),a=e.getAttribute(t.attributes.target),i=e.getAttribute(t.attributes.toggleType),r=!!a&&document.querySelector("#"+a),o=e.getAttribute(t.attributes.targetState),l=e.getAttribute(t.attributes.toggleClass),c=e.getAttribute(t.attributes.initialState),u=!(i!==t.toggleTypes.class||!l)&&Array.from(document.querySelectorAll("."+l)),d=e.getAttribute(t.attributes.disableToggleSwitchClass);if(r||u)return{openedText:s,closedText:n,targetId:a,toggleType:i,targetElement:r,targetState:o,toggleClass:l,initialState:c,targetElements:u,disableToggleSwitchClass:d}}},this.classnames={jsHidden:"js-hidden",hideSmall:"hide-small",toggleSwitch:"toggle-switch",toggleSwitchOpen:"toggle-switch--open"},this.attributes={targetState:"data-target-state",openedText:"data-opened-text",target:"data-target",toggleType:"data-toggle-type",closedText:"data-closed-text",toggleClass:"data-toggle-class",disableToggleSwitchClass:"data-disable-toggle-switch-class",initialState:"data-initial-state"},this.targetStates={closed:"closed",open:"open"},this.selectors={showHideToggle:'[data-action="showHideToggle"]'},this.elements={showHideToggles:Array.from(document.querySelectorAll(this.selectors.showHideToggle))},this.toggleTypes={responsive:"responsive",class:"class"},this.init()}},4619:function(e,t,s){Object.defineProperty(t,"__esModule",{value:!0}),t.initTextareaAutoresize=void 0;var n=s(1879);t.initTextareaAutoresize=function(){new n.TextareaAutoresize}},1879:function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var s=0;s<t.length;s++){var n=t[s];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,s,n){return s&&e(t.prototype,s),n&&e(t,n),t}}();t.TextareaAutoresize=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.init()}return s(e,[{key:"init",value:function(){document.querySelectorAll("textarea.autoresize").forEach((function(t){t.style.boxSizing="border-box";var s=t.offsetHeight-t.clientHeight;e.resize(t,s),t.addEventListener("input",(function(){e.resize(t,s)}))}))}}],[{key:"resize",value:function(e,t){e.style.height="auto",e.style.height=e.scrollHeight+t+"px"}}]),e}()},450:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.getQueryVariable=function(e){for(var t=window.location.search.substring(1).split("&"),s=0;s<t.length;s++){var n=t[s].split("=");if(n[0]==e)return n[1]}return!1}}},s={};function n(e){var a=s[e];if(void 0!==a)return a.exports;var i=s[e]={exports:{}};return t[e](i,i.exports,n),i.exports}n.m=t,e=[],n.O=function(t,s,a,i){if(!s){var r=1/0;for(u=0;u<e.length;u++){s=e[u][0],a=e[u][1],i=e[u][2];for(var o=!0,l=0;l<s.length;l++)(!1&i||r>=i)&&Object.keys(n.O).every((function(e){return n.O[e](s[l])}))?s.splice(l--,1):(o=!1,i<r&&(r=i));if(o){e.splice(u--,1);var c=a();void 0!==c&&(t=c)}}return t}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[s,a,i]},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={760:0};n.O.j=function(t){return 0===e[t]};var t=function(t,s){var a,i,r=s[0],o=s[1],l=s[2],c=0;if(r.some((function(t){return 0!==e[t]}))){for(a in o)n.o(o,a)&&(n.m[a]=o[a]);if(l)var u=l(n)}for(t&&t(s);c<r.length;c++)i=r[c],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(u)},s=self.webpackChunkdvsa_front_end=self.webpackChunkdvsa_front_end||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))}();var a=n.O(void 0,[736],(function(){return n(937)}));a=n.O(a)}();