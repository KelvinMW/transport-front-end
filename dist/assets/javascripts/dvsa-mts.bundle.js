/*!
 * 
 *   Name: dvsa-front-end/dvsa-mts
 *   Version: 1.5.7
 *   Contributors: Martin D Marriott <martind@kainos.com>, James Nelson <j.nelson@kainos.com>, Tameem Safi <https://github.com/tameemsafi>
 *   Timestamp: March 16th 2021, 3:26:57 pm
 *   Source: https://github.com/dvsa/front-end
 * 
 */
webpackJsonp([0],{219:function(e,t,s){"use strict";function i(e){if(Array.isArray(e)){for(var t=0,s=Array(e.length);t<e.length;t++)s[t]=e[t];return s}return Array.from(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.initCheckAll=t.CHECK_ALL_CONFIG=void 0;var a=s(329),n=t.CHECK_ALL_CONFIG={classes:{groupContainer:"js-check-all-group",checkAll:"js-check-all"}};t.initCheckAll=function(){var e=document.querySelectorAll("."+n.classes.groupContainer);if(e){[].concat(i(e)).forEach(function(e){return new a.CheckAll(e)})}}},220:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.FILTER_CONFIG={selectors:{component:".js-filter-wrapper",messageList:".js-message-list",checkboxes:".js-message-filter",filteredView:".js-message-panel",filterNotice:"message-panel__notice"},data:{noFilterNotice:"Select a message type to view",noMessagesNotice:"No messages",messages:"[data-type]"}}},309:function(e,t,s){"use strict";s(47),s(52),s(53),s(56),s(57),s(58),s(59),s(60),s(61),s(62),s(63),s(64),s(67),s(68),s(70),s(71),s(72),s(73),s(74),s(75),s(76),s(77),s(78),s(79),s(80),s(81),s(82),s(83),s(84),s(86),s(87),s(88),s(89),s(90),s(91),s(92),s(93),s(94),s(95),s(96),s(97),s(98),s(99),s(100),s(101),s(102),s(103),s(104),s(105),s(106),s(107),s(108),s(109),s(112),s(113),s(114),s(115),s(116),s(117),s(118),s(119),s(120),s(38),s(121),s(122),s(123),s(124),s(125),s(126),s(127),s(128),s(129),s(130),s(131),s(132),s(133),s(134),s(135),s(136),s(137),s(138),s(139),s(140),s(141),s(142),s(143),s(144),s(145),s(146),s(147),s(148),s(149),s(150),s(151),s(152),s(153),s(154),s(155);var i=s(4),a=s(310);(0,i.domReady)(function(){(0,i.initGDS)(),(0,a.initModules)()})},310:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.initModules=void 0;var i=s(311),a=s(313),n=s(315),r=s(317),o=s(319),l=s(321),c=s(323),u=s(325),d=s(327),m=s(219),f=s(330),g=s(333),h=s(334);t.initModules=function(){(0,i.initCritieraValidation)(),(0,a.initSelectToggle)(),(0,n.initDoubleClickPrevention)(),(0,r.initMarkRepairs)(),(0,o.initShowHideToggle)(),(0,l.initFormDisableDetailsHiddenFields)(),(0,c.initOdometerReading)(),(0,u.initFormDisableOnSubmit)(),(0,d.initMotTestSearch)(),(0,m.initCheckAll)(),(0,f.initMessageFilter)(),(0,g.initMtsLogin)(),(0,h.initTextareaAutoresize)()}},311:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.initCritieraValidation=void 0;var i=s(312);t.initCritieraValidation=function(){new i.CriteriaValidation}},312:function(e,t,s){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),t.CriteriaValidation=void 0;var a=s(4);t.CriteriaValidation=function e(){var t=this;i(this,e),this.init=function(){t.grabCriteriaFromDOM(),t.addEvents()},this.grabCriteriaFromDOM=function(){t.elements.criteriaElements&&t.elements.criteriaElements.forEach(function(e){var s=e.getAttribute(t.attributes.name),i=e.getAttribute(t.attributes.param);s&&t.criteria.push({name:s,param:i,element:e})})},this.addEvents=function(){(0,a.delegateEvent)(document,"keyup",t.selectors.passwordElement,t.checkCriteriaHandler),(0,a.delegateEvent)(document,"paste",t.selectors.passwordElement,t.checkCriteriaHandler),(0,a.delegateEvent)(document,"keypress",t.selectors.passwordElement,t.checkCriteriaHandler)},this.checkCriteriaHandler=function(){if(t.elements.passwordElement){var e=t.elements.passwordElement.value;t.criteria.forEach(function(s){var i=s.name,n=s.param,r=s.element;if(i&&r){t[i](e,n)?((0,a.toggleClass)(r,t.classnames.pass,!0),(0,a.toggleClass)(r,t.classnames.fail,!1)):((0,a.toggleClass)(r,t.classnames.pass,!1),(0,a.toggleClass)(r,t.classnames.fail,!0))}})}},this.hasMixedCase=function(e){return!!/^(?=.*[a-z])(?=.*[A-Z]).+$/.test(e)},this.minLength=function(e,t){return!!new RegExp("^.{"+t+",}$").test(e)},this.notMatch=function(e,t){return e===t},this.hasNumeric=function(e){return!!/[0-9]/.test(e)},this.hasUpperCase=function(e){return!!/[A-Z]/.test(e)},this.hasLowerCase=function(e){return!!/[a-z]/.test(e)},this.classnames={neurtal:"criteria__criterion",fail:"criteria__criterion--has-failed",pass:"criteria__criterion--has-passed"},this.attributes={name:"data-criteria",param:"data-criteria-param"},this.selectors={criteriaElement:"["+this.attributes.name+"]",passwordElement:"#password"},this.criteria=[],this.elements={criteriaElements:Array.from(document.querySelectorAll(this.selectors.criteriaElement)),passwordElement:document.querySelector(this.selectors.passwordElement)},this.init()}},313:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.initSelectToggle=void 0;var i=s(314);t.initSelectToggle=function(){new i.SelectToggle}},314:function(e,t,s){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),t.SelectToggle=void 0;var a=s(4);t.SelectToggle=function e(){var t=this;i(this,e),this.init=function(){t.setupInitialStateFromDOM(),(0,a.delegateEvent)(document,"change",t.selectors.selectElements,t.selectChangeHandler)},this.setupInitialStateFromDOM=function(){t.elements.selectElements&&t.elements.selectElements.forEach(function(e){t.updateSelectFieldStateFromDOM(e)})},this.selectChangeHandler=function(e){var s=e.target;s&&t.updateSelectFieldStateFromDOM(s)},this.updateSelectFieldStateFromDOM=function(e){if(e){var s=t.getElementDetails(e);s&&(-1!==s.targetValues.indexOf(e.value)?(s.targetElement.display="block",(0,a.toggleClass)(s.targetElement,t.classnames.jsHidden,!1)):(s.targetElement.display="none",(0,a.toggleClass)(s.targetElement,t.classnames.jsHidden,!0)),t.updateAriaAttributes(e),t.clearAllInputData(e))}},this.getElementDetails=function(e){if(!e)return!1;var s=e.getAttribute(t.attributes.target),i=document.querySelector("#"+s),a=e.getAttribute(t.attributes.targetValue);return!(!s||!i)&&{targetId:s,targetElement:i,targetValues:a.split(",")}},this.updateAriaAttributes=function(e){if(e){var s=t.getElementDetails(e);s&&(e.setAttribute(t.attributes.aria.controls,s.targetId),-1!==s.targetValues.indexOf(e.value)?e.setAttribute(t.attributes.aria.expanded,!0):e.setAttribute(t.attributes.aria.expanded,!1))}},this.clearAllInputData=function(e){var s=Array.from(e.querySelectorAll(t.selectors.inputs));s&&s.forEach(function(e){e.getAttribute(t.attributes.retainValue)||(e.value="")})},this.classnames={jsHidden:"js-hidden"},this.attributes={target:"data-target",targetValue:"data-target-value",retainValue:"retain-value",aria:{controls:"aria-controls",hidden:"aria-hidden",expanded:"aria-expanded"}},this.selectors={selectElements:"select["+this.attributes.target+"]",inputs:'textarea:not([value=""]), input[type="text"], input[type="email"], input[type="password"], input[type="tel"]'},this.elements={selectElements:Array.from(document.querySelectorAll(this.selectors.selectElements))},this.init()}},315:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.initDoubleClickPrevention=void 0;var i=s(316);t.initDoubleClickPrevention=function(){new i.DoubleClickPrevention}},316:function(e,t,s){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),t.DoubleClickPrevention=void 0;var a=s(46),n=function(e){return e&&e.__esModule?e:{default:e}}(a),r=s(4);t.DoubleClickPrevention=function e(){var t=this;i(this,e),this.init=function(){t.addEvents()},this.addEvents=function(){(0,r.delegateEvent)(document,"submit",t.selectors.preventDoubleClickForm,t.submitFormHandler)},this.submitFormHandler=function(e){var s=(0,n.default)(JSON.stringify(e));if(-1===t.state.validatedForms.indexOf(s)){var i=e.target.getAttribute(t.attributes.submitButtonId),a=document.querySelector("#"+i);a&&a.setAttribute(t.attributes.disabled,t.attributes.disabled)}else e.preventDefault()},this.classnames={preventDoubleClickForm:"prevent-double-click-form"},this.attributes={submitButtonId:"submit-button-id",disabled:"disabled"},this.selectors={preventDoubleClickForm:"."+this.classnames.preventDoubleClickForm},this.state={validatedForms:[]}}},317:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.initMarkRepairs=void 0;var i=s(318);t.initMarkRepairs=function(){new i.MarkRepairs}},318:function(e,t,s){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),t.MarkRepairs=void 0;var a=s(208),n=function(e){return e&&e.__esModule?e:{default:e}}(a),r=s(4);t.MarkRepairs=function e(){var t=this;i(this,e),this.init=function(){t.addEvents()},this.addEvents=function(){(0,r.delegateEvent)(document,"click",t.selectors.buttonMarkRepaired,t.markRepairedButtonClickHandler)},this.markRepairedButtonClickHandler=function(e){e.preventDefault();var s=e.target;if(s){s.disabled=!0;var i=(0,r.closestParentOfEl)(s,t.selectors.rfrForm),a=(0,r.closestParentOfEl)(s,t.selectors.rfrItem),o=a.querySelector(t.selectors.itemStatus);if(!i||!a||!o)return console.warn("Could not find RFR form, RFR item and status DOM elements");var l=i.getAttribute(t.attributes.action)||s.getAttribute(t.attributes.url),c=(0,r.serializeForm)(i)||s.getAttribute(t.attributes.form);if(!l||!c)return console.warn("Could not find route URL or form data");(0,r.toggleClass)(a,t.classnames.hasStatus,!0),(0,r.toggleClass)(a,t.classnames.hasSuccess,!1),o.textContent=t.messages.loading;var u='That didn\'t work, <a class="js-buttonMarkRepaired" href="" data-url="'+l+'" data-form="'+c+'">try again</a>',d={headers:{"X-Requested-With":"XMLHttpRequest"}};n.default.post(l,c,d).then(function(e){var i=e.data;i&&i.success?((0,r.toggleClass)(a,t.classnames.hasStatus,!1),(0,r.toggleClass)(a,t.classnames.hasSuccess,i.action===t.responseActions.repair),t.updateCount(i.defectType,i.action,i.failureType),t.updateBrakeTest(i.brakeTestOutcome,i.brakesTested,i.brakeTestResults,i.disableSubmitButton),s.disabled=!1):o.innerHTML=u}).catch(function(e){o.innerHTML=u,s.disabled=!1})}},this.updateCount=function(e,s,i){switch(e){case"advisory":t.updateCountForAllElements(t.elements.numberOfAdvisories,s,i);break;case"minor":t.updateCountForAllElements(t.elements.numberOfMinors,s,i);break;case"failure":t.updateCountForAllElements(t.elements.numberOfFailures,s,i);break;default:return console.warn("Invalid type")}},this.updateCountForAllElements=function(e,s,i){e&&Array.isArray(e)&&e.forEach(function(e){"emissionsTest"===i&&e.classList.contains(t.selectors.emissionsTestFailures)?t.updateCountForElement(e,s):"defect"===i&&e.classList.contains(t.selectors.defectFailures)?t.updateCountForElement(e,s):null!==i&&void 0!==i||t.updateCountForElement(e,s)})},this.updateCountForElement=function(e,s){if(e){var i=parseInt(e.textContent)||0;s===t.responseActions.repair?i--:i++,e.textContent=i}},this.updateBrakeTest=function(e,s,i,a){if(!t.elements.actionPanel)return console.warn("Could not find brake tests action panel");t.elements.brakeTest.testStatus&&(t.elements.brakeTest.testStatus.textContent=e),t.elements.brakeTest.actions&&(!0===s&&!0===i?(0,r.toggleClass)(t.elements.brakeTest.actions,t.classnames.uHidden,!1):(0,r.toggleClass)(t.elements.brakeTest.actions,t.classnames.uHidden,!0)),t.elements.brakeTest.addBrakeTest&&(!1===s||!0===i?(0,r.toggleClass)(t.elements.brakeTest.addBrakeTest,t.classnames.uHidden,!0):(0,r.toggleClass)(t.elements.brakeTest.addBrakeTest,t.classnames.uHidden,!1)),t.elements.brakeTest.summary&&!1===s&&t.elements.brakeTest.summary.remove(),t.elements.brakeTest.reviewTestButton&&(t.elements.brakeTest.reviewTestButton.disabled=!0===a)},this.classnames={uHidden:"u-hidden",hasStatus:"has-status",hasSuccess:"has-success"},this.attributes={disabled:"disabled",action:"action",url:"data-url",form:"data-form"},this.selectors={brakeTest:{actionPanel:".js-brakeTestActionPanel",testStatus:".js-brakeTestStatus",addBrakeTest:".js-addBrakeTest",actions:".js-brakeTestActions",reviewTestButton:".js-reviewTestButton",summary:".js-brakeTestSummary"},numberOfFailures:".js-numberOfFailures",numberOfAdvisories:".js-numberOfAdvisories",numberOfMinors:".js-numberOfMinors",buttonMarkRepaired:".js-buttonMarkRepaired",rfrForm:".js-rfrForm",rfrItem:".js-rfrItem",itemStatus:".js-itemStatus",emissionsTestFailures:"js-emissionsTestFailures",defectFailures:"js-defectFailures"},this.elements={brakeTest:{testStatus:document.querySelector(this.selectors.brakeTest.testStatus),addBrakeTest:document.querySelector(this.selectors.brakeTest.addBrakeTest),actions:document.querySelector(this.selectors.brakeTest.actions),reviewTestButton:document.querySelector(this.selectors.brakeTest.reviewTestButton),summary:document.querySelector(this.selectors.brakeTest.summary)},actionPanel:document.querySelector(this.selectors.brakeTest.actionPanel),numberOfFailures:Array.from(document.querySelectorAll(this.selectors.numberOfFailures)),numberOfAdvisories:Array.from(document.querySelectorAll(this.selectors.numberOfAdvisories)),numberOfMinors:Array.from(document.querySelectorAll(this.selectors.numberOfMinors))},this.responseActions={repair:"repair"},this.messages={loading:"Loading"},this.init()}},319:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.initShowHideToggle=void 0;var i=s(320);t.initShowHideToggle=function(){new i.ShowHideToggle}},320:function(e,t,s){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),t.ShowHideToggle=void 0;var a=s(4);t.ShowHideToggle=function e(){var t=this;i(this,e),this.init=function(){t.setupInitialStateFromDOM(),t.addEvents()},this.setupInitialStateFromDOM=function(){t.elements.showHideToggles&&t.elements.showHideToggles.forEach(function(e){var s=t.getElementDetails(e);if(s){var i=s.targetState!==t.targetStates.open;i?(s.toggleType!==t.toggleTypes.responsive&&s.targetElement?(0,a.toggleClass)(s.targetElement,t.classnames.jsHidden,i):(0,a.toggleClass)(s.targetElement,t.classnames.hideSmall,i),s.toggleType===t.toggleTypes.class&&s.targetElements&&s.targetElements.forEach(function(e){(0,a.toggleClass)(e,t.classnames.jsHidden,i)})):((0,a.toggleClass)(s.targetElement,t.classnames.jsHidden,!1),e.textContent=s.openedText)}})},this.addEvents=function(){(0,a.delegateEvent)(document,"click",t.selectors.showHideToggle,t.showHideToggleClickHandler)},this.showHideToggleClickHandler=function(e){e.target,e.preventDefault(),t.updateElementState(e.target)},this.updateElementState=function(e){if(e){var s=t.getElementDetails(e);if(s){var i=s.targetState===t.targetStates.closed;if(s.toggleType===t.toggleTypes.responsive&&s.targetElement?(0,a.toggleClass)(s.targetElement,t.classnames.hideSmall,!i):(0,a.toggleClass)(s.targetElement,t.classnames.jsHidden,!i),s.toggleType===t.toggleTypes.class&&s.targetElements&&s.targetElements.forEach(function(e){(0,a.toggleClass)(e,t.classnames.jsHidden,!i)}),e.setAttribute(t.attributes.targetState,i?t.targetStates.open:t.targetStates.closed),t.updateAllShowHideToggles(),s.targetId){var n=document.querySelector("#"+s.targetId+"Parent");n&&n.scrollIntoView(!0)}}}},this.updateAllShowHideToggles=function(){t.elements.showHideToggles&&t.elements.showHideToggles.forEach(function(e){var s=t.getElementDetails(e);if(s){var i=s.targetState===t.targetStates.closed;e.textContent=i?s.closedText:s.openedText,s.diableToggleSwitchClass||((0,a.toggleClass)(e,t.classnames.toggleSwitch,!i),(0,a.toggleClass)(e,t.classnames.toggleSwitchOpen,i))}})},this.getElementDetails=function(e){if(e){var s=e.getAttribute(t.attributes.openedText),i=e.getAttribute(t.attributes.closedText),a=e.getAttribute(t.attributes.target),n=e.getAttribute(t.attributes.toggleType),r=!!a&&document.querySelector("#"+a),o=e.getAttribute(t.attributes.targetState),l=e.getAttribute(t.attributes.toggleClass),c=e.getAttribute(t.attributes.initialState),u=!(n!==t.toggleTypes.class||!l)&&Array.from(document.querySelectorAll("."+l)),d=e.getAttribute(t.attributes.disableToggleSwitchClass);if(r||u)return{openedText:s,closedText:i,targetId:a,toggleType:n,targetElement:r,targetState:o,toggleClass:l,initialState:c,targetElements:u,disableToggleSwitchClass:d}}},this.classnames={jsHidden:"js-hidden",hideSmall:"hide-small",toggleSwitch:"toggle-switch",toggleSwitchOpen:"toggle-switch--open"},this.attributes={targetState:"data-target-state",openedText:"data-opened-text",target:"data-target",toggleType:"data-toggle-type",closedText:"data-closed-text",toggleClass:"data-toggle-class",disableToggleSwitchClass:"data-disable-toggle-switch-class",initialState:"data-initial-state"},this.targetStates={closed:"closed",open:"open"},this.selectors={showHideToggle:'[data-action="showHideToggle"]'},this.elements={showHideToggles:Array.from(document.querySelectorAll(this.selectors.showHideToggle))},this.toggleTypes={responsive:"responsive",class:"class"},this.init()}},321:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.initFormDisableDetailsHiddenFields=void 0;var i=s(322);t.initFormDisableDetailsHiddenFields=function(){new i.FormSubmitDisableDetailsHiddenFields}},322:function(e,t,s){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),t.FormSubmitDisableDetailsHiddenFields=void 0;var a=s(4);t.FormSubmitDisableDetailsHiddenFields=function e(){var t=this;i(this,e),this.init=function(){(0,a.delegateEvent)(document,"submit",t.selectors.form,t.onFormSubmit)},this.onFormSubmit=function(e){if(!e.target||!e.target.getAttribute(t.attributes.ignoreFormDisableDetails)){var s=Array.from(document.querySelectorAll(t.selectors.details));s&&Array.isArray(s)&&s.forEach(function(e){if(e){var s=Array.from(e.querySelectorAll("input"));s&&Array.isArray(s)&&s.forEach(function(e){e&&(0,a.isElementHidden)(e)&&e.setAttribute(t.attributes.disabled,t.attributes.disabled)})}})}},this.selectors={form:"form",details:"details"},this.attributes={disabled:"disabled",ignoreFormDisableDetails:"data-ignore-form-disable-details"},this.init()}},323:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.initOdometerReading=void 0;var i=s(324);t.initOdometerReading=function(){new i.OdometerReading}},324:function(e,t,s){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),t.OdometerReading=void 0;var a=s(4);t.OdometerReading=function e(){var t=this;i(this,e),this.init=function(){(0,a.delegateEvent)(document,"click",t.selectors.unknown,t.onUnknownOrNoOdometerClick),(0,a.delegateEvent)(document,"click",t.selectors.noOdometer,t.onUnknownOrNoOdometerClick),(0,a.delegateEvent)(document,"click",t.selectors.odometer,t.onOdometerClick)},this.onUnknownOrNoOdometerClick=function(e){t.elements.odometer.value=""},this.onOdometerClick=function(e){t.elements.odoInputRadio.click()},this.selectors={unknown:".js-unknown",noOdometer:".js-noOdometer",odometer:".js-odometer",odoInputRadio:".js-odoInputRadio"},this.elements={odometer:document.querySelector(this.selectors.odometer),odoInputRadio:document.querySelector(this.selectors.odoInputRadio)},this.elements.odometer&&this.elements.odoInputRadio&&this.init()}},325:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.initFormDisableOnSubmit=void 0;var i=s(326);t.initFormDisableOnSubmit=function(){new i.FormDisableOnSubmit}},326:function(e,t,s){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),t.FormDisableOnSubmit=void 0;var a=s(4);t.FormDisableOnSubmit=function e(){var t=this;i(this,e),this.init=function(){(0,a.delegateEvent)(document,"submit",t.selectors.form,t.onFormSubmit),t.setupAllFormsInState()},this.setupAllFormsInState=function(){t.elements.forms&&t.elements.forms.forEach(function(e){t.state.forms.push({element:e,submitted:!1}),e.setAttribute(t.attributes.formStateIndex,t.state.forms.length-1)})},this.onFormSubmit=function(e){if(e&&e.target&&!e.target.getAttribute(t.attributes.ignoreFormDisableSubmitButton)){var s=e.target,i=s.getAttribute(t.attributes.formStateIndex),a=t.state.forms[i]||!1,n=s.querySelector(t.selectors.submitButton);if(n&&a&&!a.submitted){var r=n.getAttribute(t.attributes.value),o=n.getAttribute(t.attributes.name),l=document.createElement("input");l.type="hidden",l.name=o,l.value=r,n.parentNode.appendChild(l),n.name="",n.setAttribute(t.attributes.disabled,t.attributes.disabled),t.state.forms[i].submitted=!0}}},this.selectors={form:"form",submitButton:'input[type="submit"]'},this.attributes={disabled:"disabled",value:"value",name:"name",formStateIndex:"data-form-state-index",ignoreDisableFormSubmit:"data-ignore-form-disable-submit-button"},this.elements={forms:Array.from(document.querySelectorAll(this.selectors.form))},this.state={forms:[]},this.init()}},327:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.initMotTestSearch=void 0;var i=s(328);t.initMotTestSearch=function(){new i.MOTTestSearch}},328:function(e,t,s){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),t.MOTTestSearch=void 0;var a=s(4);t.MOTTestSearch=function e(){var t=this;i(this,e),this.init=function(){(0,a.addEventListenerToEl)(t.elements.type,"change",t.updateFormBasedOnTypeValue),t.updateFormBasedOnTypeValue()},this.updateFormBasedOnTypeValue=function(){t.elements.vtsSearch.setAttribute(t.attributes.placeholder,t.messages.placeholders[t.elements.type.value]),t.elements.searchValueLabelText.innerText=t.messages.inputLabels[t.elements.type.value],t.elements.form.setAttribute(t.attributes.action,t.state.baseUrl+"/"+t.elements.type.value),-1!==[t.state.typeOptions.vtsDate,t.state.typeOptions.tester].indexOf(t.elements.type.value)?t.elements.dateRangeFields.style.display="block":t.elements.dateRangeFields.style.display="none"},this.elements={form:document.querySelector("#vts-search-form"),type:document.querySelector("#type"),dateRangeFields:document.querySelector("#dateRangeFields"),dates:{month1:document.querySelector("#month1"),year1:document.querySelector("#year1"),month2:document.querySelector("#month2"),year2:document.querySelector("#year2")},searchFieldRow:document.querySelector("#search-field-row"),searchValueLabel:document.querySelector("#search-value-label"),searchValueLabelText:document.querySelector("#search-value-label-text"),vtsSearch:document.querySelector("#vts-search")},this.attributes={baseUrl:"data-base-url",action:"action",placeholder:"placeholder"},this.state={baseUrl:"",typeOptions:{vts:"vts",vtsDate:"vtsDate",tester:"tester",vrm:"vrm",vin:"vin",testNumber:"testNumber"}},this.messages={placeholders:{vts:"eg. V12345",vtsDate:"eg. V12345",tester:"enter username",vrm:"eg. VK02 MOT",vin:"eg. WV1ZZZ8ZH6H091596",testNumber:"eg. 999999999014"},inputLabels:{vts:"Site name",vtsDate:"Site name",tester:"Tester name",vrm:"Vehicle registration",vin:"Vehicle VIN",testNumber:"MOT test number"}},this.elements.form&&(this.state.baseUrl=this.elements.form.getAttribute(this.attributes.baseUrl),this.init())}},329:function(e,t,s){"use strict";function i(e){if(Array.isArray(e)){for(var t=0,s=Array(e.length);t<e.length;t++)s[t]=e[t];return s}return Array.from(e)}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),t.CheckAll=void 0;var n=s(16),r=s(219);t.CheckAll=function e(t){var s=this;if(a(this,e),this.init=function(){s.state.elements.count=s.countNumOfCheckboxItems(),s.state.elements.checkboxes.forEach(function(e){return(0,n.addEventListenerToEl)(e,"change",s.toggleChecks)})},this.toggleChecks=function(e){var t=r.CHECK_ALL_CONFIG.classes.checkAll,i=e.target.classList.contains(t),a=s.countCheckedItems();if(i||a==s.state.elements.count)return s.selectAllToggleState();s.state.allChecked=!1,s.state.elements.allTarget.checked=!1},this.selectAllToggleState=function(){s.state.allChecked=!s.state.allChecked,s.state.elements.allTarget.checked=s.state.allChecked,s.state.elements.checkboxes.map(function(e){return e.checked=s.state.allChecked})},this.countNumOfCheckboxItems=function(){return s.state.elements.checkboxes.filter(s.excludeCheckAll).length},this.countCheckedItems=function(){return s.state.elements.checkboxes.filter(s.excludeCheckAll).filter(function(e){return e.checked}).length},this.excludeCheckAll=function(e){if(!e.classList.contains(r.CHECK_ALL_CONFIG.classes.checkAll))return e},t){var o=t.querySelectorAll("input"),l=[].concat(i(o)),c=t.querySelector("."+r.CHECK_ALL_CONFIG.classes.checkAll);this.state={allChecked:!1,elements:{allTarget:c,checkboxes:l,count:0}},this.init()}}},330:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.initMessageFilter=void 0;var i=s(331);s(220),t.initMessageFilter=function(){var e=document.querySelectorAll(".js-filter-wrapper"),t=void 0;if(!(e.length<1))for(t=0;t<e.length;++t)new i.MessagesFilter(e[t])}},331:function(e,t,s){"use strict";function i(e){if(Array.isArray(e)){for(var t=0,s=Array(e.length);t<e.length;t++)s[t]=e[t];return s}return Array.from(e)}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),t.MessagesFilter=void 0;var n=s(220),r=s(205),o=s(332),l=(t.MessagesFilter=function e(t){if(a(this,e),l.call(this),t){var s=t,r=document.querySelector(".js-message-list"),o=[].concat(i(s.querySelectorAll(n.FILTER_CONFIG.selectors.checkboxes))),c=[].concat(i(r.querySelectorAll(n.FILTER_CONFIG.data.messages))),u=s.querySelector(n.FILTER_CONFIG.selectors.filteredView),d=document.querySelector(n.FILTER_CONFIG.selectors.messageList),m=document.createElement("p");m.classList.add(""+n.FILTER_CONFIG.selectors.filterNotice),m.style.display="none",d.parentNode.insertBefore(m,d),this.elements={component:s,checkboxes:o,messageList:r,messageItems:c,filteredView:u,filterNoticeTarget:d};var f=this.elements.checkboxes.map(function(e){return e.attributes["data-type"].value});this.state={allFilters:f,currFilters:f},this.init()}},function(){var e=this;this.init=function(){Array.from(e.elements.checkboxes).forEach(function(t){(0,r.addEventListenerToEl)(t,"change",e.handleCheck)}),"sn"==(0,o.getQueryVariable)("filter")&&e.filterSpecialNotices(),e.handleCheck()},this.filterSpecialNotices=function(){var t=[];e.elements.checkboxes.forEach(function(e){e.checked=!1,"Special notice"==e.attributes["data-type"].value&&(e.checked=!0),t.push("Special notice")}),e.state.currFilters=t,e.filterMessages(e.state.currFilters)},this.handleCheck=function(t){var s=[],i=[],a=!0;e.elements.checkboxes.forEach(function(e){if(e.checked){var t=e.attributes["data-type"].value;s.push(t);var a=e.attributes["data-filter"].value;i.push(a)}}),s.length===e.elements.checkboxes.length&&(a=!1),e.state.currFilters=s,e.filterMessages(e.state.currFilters),a?e.updateMessageLinks(i.join("+")):e.updateMessageLinks()},this.filterMessages=function(t){var s=Array.from(e.elements.messageItems),i=0;s.forEach(function(e){var s=e.attributes["data-type"].value;t.includes(s)?e.classList.remove("hidden"):(e.classList.add("hidden"),i++)});var a=document.querySelector(".message-panel__notice");a.style.display="none",0===e.state.currFilters.length?(a.innerHTML=n.FILTER_CONFIG.data.noFilterNotice,a.style.display="block"):0!==s.length&&s.length!==i||(a.innerHTML=n.FILTER_CONFIG.data.noMessagesNotice,a.style.display="block")},this.updateMessageLinks=function(t){e.elements.messageItems.forEach(function(e){Array.from(e.querySelectorAll("a")).forEach(function(e){var s=e.href;s=s.split("?")[0],t&&(s=s+"?filter="+t),e.href=s})})}})},332:function(e,t,s){"use strict";function i(e){for(var t=window.location.search.substring(1),s=t.split("&"),i=0;i<s.length;i++){var a=s[i].split("=");if(a[0]==e)return a[1]}return!1}Object.defineProperty(t,"__esModule",{value:!0}),t.getQueryVariable=i},333:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.initMtsLogin=function(){var e=document.querySelector(".js-password-behaviour"),t=function(){""===e.value?e.style.color="#FFF":e.style.color="#000"};e&&(e.onkeypress=function(e){if("Enter"===e.key)return document.getElementById("Login").submit(),!1},e.oncontextmenu=function(e){void 0!==e.preventDefault&&e.preventDefault(),void 0!==e.stopPropagation&&e.stopPropagation()},e.onkeydown=function(e){if(("c"===e.key||"x"===e.key)&&(e.metaKey||e.ctrlKey))return!1},e.onpaste=function(s){var i=void 0,a=void 0;s.stopPropagation(),s.preventDefault(),i=s.clipboardData||window.clipboardData,void 0!==i&&(a=i.getData("Text"),e.value=a.replace(/\n/g,"").replace(/\v/g,"").replace(/\f/g,"").replace(/\r/g,"")),t()},e.ondragstart=function(e){return e.preventDefault()},e.oncopy=function(e){return!1},e.oncut=function(e){return!1},e.onfocus=function(e){t()},e.oninput=function(e){t()})}},334:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.initTextareaAutoresize=void 0;var i=s(335);t.initTextareaAutoresize=function(){new i.TextareaAutoresize}},335:function(e,t,s){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var s=0;s<t.length;s++){var i=t[s];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,s,i){return s&&e(t.prototype,s),i&&e(t,i),t}}();t.TextareaAutoresize=function(){function e(){i(this,e),this.init()}return a(e,[{key:"init",value:function(){document.querySelectorAll("textarea.autoresize").forEach(function(t){t.style.boxSizing="border-box";var s=t.offsetHeight-t.clientHeight;e.resize(t,s),t.addEventListener("input",function(){e.resize(t,s)})})}}],[{key:"resize",value:function(e,t){e.style.height="auto",e.style.height=e.scrollHeight+t+"px"}}]),e}()}},[309]);