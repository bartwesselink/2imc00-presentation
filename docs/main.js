"use strict";
(self["webpackChunkgraduation_presentation"] = self["webpackChunkgraduation_presentation"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);



const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _components_section_section_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/section/section.component */ 3608);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! rxjs/operators */ 5722);
/* harmony import */ var _defaude_autohide_cursor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @defaude/autohide-cursor */ 8364);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _components_generic_footer_generic_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/generic-footer/generic-footer.component */ 8487);
/* harmony import */ var _slides_introduction_problem_introduction_problem_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./slides/introduction-problem/introduction-problem.component */ 8883);
/* harmony import */ var _slides_introduction_demonstration_robot_introduction_demonstration_robot_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./slides/introduction-demonstration-robot/introduction-demonstration-robot.component */ 2564);
/* harmony import */ var _slides_opening_opening_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./slides/opening/opening.component */ 1201);
/* harmony import */ var _slides_preliminaries_supervisory_control_theory_preliminaries_supervisory_control_theory_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./slides/preliminaries-supervisory-control-theory/preliminaries-supervisory-control-theory.component */ 4172);
/* harmony import */ var _slides_ending_ending_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./slides/ending/ending.component */ 9275);
/* harmony import */ var _slides_preliminaries_ros_preliminaries_ros_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./slides/preliminaries-ros/preliminaries-ros.component */ 3774);
/* harmony import */ var _slides_preliminaries_ros_messages_preliminaries_ros_messages_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./slides/preliminaries-ros-messages/preliminaries-ros-messages.component */ 5436);
/* harmony import */ var _slides_preliminaries_ros_services_preliminaries_ros_services_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./slides/preliminaries-ros-services/preliminaries-ros-services.component */ 9373);
/* harmony import */ var _slides_preliminaries_ros_actions_preliminaries_ros_actions_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./slides/preliminaries-ros-actions/preliminaries-ros-actions.component */ 5013);
/* harmony import */ var _slides_preliminaries_mde_preliminaries_mde_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./slides/preliminaries-mde/preliminaries-mde.component */ 1518);
/* harmony import */ var _slides_overview_main_idea_overview_main_idea_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./slides/overview-main-idea/overview-main-idea.component */ 1685);
/* harmony import */ var _slides_tools_generation_tools_generation_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./slides/tools-generation/tools-generation.component */ 2781);
/* harmony import */ var _slides_tools_editors_tools_editors_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./slides/tools-editors/tools-editors.component */ 8026);
/* harmony import */ var _slides_concepts_base_concepts_base_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./slides/concepts-base/concepts-base.component */ 1081);
/* harmony import */ var _slides_concepts_components_concepts_components_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./slides/concepts-components/concepts-components.component */ 1513);
/* harmony import */ var _slides_concepts_communication_concepts_communication_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./slides/concepts-communication/concepts-communication.component */ 5395);
/* harmony import */ var _slides_concepts_data_concepts_data_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./slides/concepts-data/concepts-data.component */ 8296);
/* harmony import */ var _slides_concepts_requirements_concepts_requirements_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./slides/concepts-requirements/concepts-requirements.component */ 1398);
/* harmony import */ var _slides_supervisor_idea_supervisor_idea_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./slides/supervisor-idea/supervisor-idea.component */ 1857);
/* harmony import */ var _slides_supervisor_limitations_supervisor_limitations_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./slides/supervisor-limitations/supervisor-limitations.component */ 9026);
/* harmony import */ var _slides_tools_debugging_tools_debugging_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./slides/tools-debugging/tools-debugging.component */ 1556);
/* harmony import */ var _slides_evaluation_scenarios_evaluation_scenarios_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./slides/evaluation-scenarios/evaluation-scenarios.component */ 1488);
/* harmony import */ var _slides_conclusion_contributions_conclusion_contributions_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./slides/conclusion-contributions/conclusion-contributions.component */ 3718);
/* harmony import */ var _slides_conclusion_video_conclusion_video_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./slides/conclusion-video/conclusion-video.component */ 5648);
/* harmony import */ var _slides_overview_idea_overview_idea_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./slides/overview-idea/overview-idea.component */ 6738);
/* harmony import */ var _slides_overview_control_loop_overview_control_loop_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./slides/overview-control-loop/overview-control-loop.component */ 1057);
/* harmony import */ var _slides_evaluation_lines_of_code_evaluation_lines_of_code_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./slides/evaluation-lines-of-code/evaluation-lines-of-code.component */ 2463);


































class AppComponent {
    constructor(router, activatedRoute) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.scale = 0;
        this.x = 1;
        this.y = 1;
        this.section = false;
        this.started = false;
        this.ended = false;
        this.skipParams = false;
        this.updateScale();
    }
    ngOnInit() {
        this.activatedRoute
            .queryParams
            .subscribe(params => {
            if (this.skipParams)
                return;
            this.x = !!params.x ? +params.x : 1;
            this.y = !!params.y ? +params.y : 1;
            this.started = params.started === 'true';
            this.ended = params.ended === 'true';
        });
        this.updateScale();
        (0,_defaude_autohide_cursor__WEBPACK_IMPORTED_MODULE_1__.autohideCursor)(5000);
    }
    ngAfterViewInit() {
        this.sections.changes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_30__.startWith)(undefined)).subscribe(() => this.updateSectionOffsets());
        setTimeout(() => this.updateActiveSlide());
    }
    updateScale() {
        const viewportWidth = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
        const viewportHeight = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
        const [sourceWidth, sourceHeight] = [1920, 1080];
        const factor = Math.min(viewportWidth / sourceWidth, viewportHeight / sourceHeight);
        this.scale = factor;
    }
    handleKeyboardNavigation(key) {
        switch (key) {
            case 'ArrowLeft':
            case 'PageUp':
                this.previous();
                break;
            case 'ArrowRight':
            case 'PageDown':
                this.next();
                break;
        }
    }
    get currentPage() {
        return this.x + this.y - 1;
    }
    updateSectionValues() {
        if (this.y > 1) {
            const current = this.sections.get(this.y - 2);
            const next = this.sections.get(this.y - 1);
            let sumX = 0;
            for (const item of this.sections) {
                if (item === current) {
                    break;
                }
                sumX += item.slides.length;
            }
            let relative = this.x - sumX;
            if (relative > current.slides.length) {
                this.activeSection = next;
                this.section = true;
            }
            else {
                this.activeSection = current;
                this.section = false;
            }
        }
        else {
            this.activeSection = this.sections.get(0);
            this.section = true;
        }
    }
    updateActiveSlide() {
        this.updateSectionValues();
        const section = this.activeSection;
        const currentActive = this.active;
        if (currentActive) {
            clearTimeout(currentActive.reset);
            currentActive.reset = setTimeout(() => {
                currentActive.active = false;
            }, 500);
        }
        if (this.section) {
            clearTimeout(section.reset);
            this.active = section;
            section.active = true;
        }
        else {
            const activeSlide = this.currentRelativeX;
            const slide = section.slides.get(activeSlide - 1).slide;
            clearTimeout(slide.reset);
            this.active = slide;
            slide.active = true;
        }
    }
    updateSectionOffsets() {
        let currentX = 0, currentY = 0;
        for (const item of this.sections) {
            const x = currentX;
            const y = currentY;
            setTimeout(() => {
                item.offsetX = x;
                item.offsetY = y;
            });
            currentX += item.slides.length;
            currentY -= 1;
        }
        setTimeout(() => {
            this.updateSectionValues();
        });
    }
    next() {
        if (!this.started) {
            this.started = true;
            this.updateQueryParameters();
            return;
        }
        if (this.section) {
            this.y += 1;
        }
        else {
            const activeSlide = this.currentRelativeX;
            const slide = this.activeSection.slides.get(activeSlide - 1);
            if (!slide.isCompletedNext()) {
                slide.next();
                return;
            }
            if (this.currentRelativeX < this.activeSection.slides.length || this.activeSection !== this.sections.last) {
                this.x += 1;
            }
            else {
                this.ended = true;
                this.updateQueryParameters();
                return;
            }
        }
        this.updateActiveSlide();
        this.updateQueryParameters();
        // Check if we should reset
        if (!this.section) {
            const activeSlide = this.currentRelativeX;
            const slide = this.activeSection.slides.get(activeSlide - 1);
            slide.start();
        }
    }
    previous() {
        if (this.ended) {
            this.ended = false;
            this.updateQueryParameters();
            return;
        }
        if (!this.section) {
            const activeSlide = this.currentRelativeX;
            const slide = this.activeSection.slides.get(activeSlide - 1);
            if (!slide.isCompletedPrev()) {
                slide.prev();
                return;
            }
        }
        if (this.currentRelativeX === 1) {
            this.y -= 1;
        }
        else {
            if (this.y > 1) {
                this.x -= 1;
            }
            else {
                this.started = false;
                this.updateQueryParameters();
                return;
            }
        }
        this.updateActiveSlide();
        this.updateQueryParameters();
        // Check if we should reset
        if (!this.section) {
            const activeSlide = this.currentRelativeX;
            const slide = this.activeSection.slides.get(activeSlide - 1);
            slide.end();
        }
    }
    get currentRelativeX() {
        if (this.section) {
            return 0;
        }
        let sumX = 0;
        let section = this.activeSection;
        for (const item of this.sections) {
            if (section === item) {
                break;
            }
            sumX += item.slides.length;
        }
        return this.x - sumX;
    }
    updateQueryParameters() {
        this.skipParams = true;
        this.router.navigate([], {
            relativeTo: this.activatedRoute,
            queryParams: {
                x: this.x,
                y: this.y,
                started: this.started ? 'true' : 'false',
                ended: this.ended ? 'true' : 'false',
            },
            queryParamsHandling: 'merge',
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_31__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_32__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_31__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_32__.ActivatedRoute)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_31__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], viewQuery: function AppComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_31__["ɵɵviewQuery"](_components_section_section_component__WEBPACK_IMPORTED_MODULE_0__.SectionComponent, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_31__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_31__["ɵɵloadQuery"]()) && (ctx.sections = _t);
    } }, hostBindings: function AppComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_31__["ɵɵlistener"]("resize", function AppComponent_resize_HostBindingHandler() { return ctx.updateScale(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_31__["ɵɵresolveWindow"])("keyup", function AppComponent_keyup_HostBindingHandler($event) { return ctx.handleKeyboardNavigation($event.key); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_31__["ɵɵresolveWindow"]);
    } }, decls: 67, vars: 26, consts: [[1, "slideshow"], [1, "main-content"], [1, "opening"], [1, "ending"], [1, "camera"], ["label", "Introduction", 3, "number"], ["slide", ""], ["label", "Preliminaries", 3, "number"], ["label", "Overview", 3, "number"], ["label", "Concepts", 3, "number"], ["label", "Tools", 3, "number"], ["label", "Supervisory Layer", 3, "number"], ["label", "Evaluation", 3, "number"], ["label", "Conclusion", 3, "number"], [1, "footer"], [3, "page", "section"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_31__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_31__["ɵɵelement"](3, "app-opening");
        _angular_core__WEBPACK_IMPORTED_MODULE_31__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_31__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_31__["ɵɵelement"](5, "app-ending");
        _angular_core__WEBPACK_IMPORTED_MODULE_31__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_31__["ɵɵelementStart"](6, "div", 4)(7, "app-section", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_31__["ɵɵelement"](8, "app-introduction-problem", null, 6)(10, "app-introduction-demonstration-robot", null, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_31__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_31__["ɵɵelementStart"](12, "app-section", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_31__["ɵɵelement"](13, "app-preliminaries-supervisory-control-theory", null, 6)(15, "app-preliminaries-ros", null, 6)(17, "app-preliminaries-ros-messages", null, 6)(19, "app-preliminaries-ros-services", null, 6)(21, "app-preliminaries-ros-actions", null, 6)(23, "app-preliminaries-mde", null, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_31__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_31__["ɵɵelementStart"](25, "app-section", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_31__["ɵɵelement"](26, "app-overview-idea", null, 6)(28, "app-overview-main-idea", null, 6)(30, "app-overview-control-loop", null, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_31__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_31__["ɵɵelementStart"](32, "app-section", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_31__["ɵɵelement"](33, "app-concepts-base", null, 6)(35, "app-concepts-components", null, 6)(37, "app-concepts-communication", null, 6)(39, "app-concepts-data", null, 6)(41, "app-concepts-requirements", null, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_31__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_31__["ɵɵelementStart"](43, "app-section", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_31__["ɵɵelement"](44, "app-tools-generation", null, 6)(46, "app-tools-editors", null, 6)(48, "app-tools-debugging", null, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_31__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_31__["ɵɵelementStart"](50, "app-section", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_31__["ɵɵelement"](51, "app-supervisor-idea", null, 6)(53, "app-supervisor-limitations", null, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_31__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_31__["ɵɵelementStart"](55, "app-section", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_31__["ɵɵelement"](56, "app-evaluation-scenarios", null, 6)(58, "app-evaluation-lines-of-code", null, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_31__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_31__["ɵɵelementStart"](60, "app-section", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_31__["ɵɵelement"](61, "app-conclusion-contributions", null, 6)(63, "app-conclusion-video", null, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_31__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_31__["ɵɵelementStart"](65, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_31__["ɵɵelement"](66, "app-generic-footer", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_31__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_31__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_31__["ɵɵstyleProp"]("--scale", ctx.scale);
        _angular_core__WEBPACK_IMPORTED_MODULE_31__["ɵɵclassProp"]("started", ctx.started && !ctx.ended);
        _angular_core__WEBPACK_IMPORTED_MODULE_31__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_31__["ɵɵclassProp"]("started", ctx.started);
        _angular_core__WEBPACK_IMPORTED_MODULE_31__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_31__["ɵɵclassProp"]("ended", ctx.ended);
        _angular_core__WEBPACK_IMPORTED_MODULE_31__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_31__["ɵɵstyleProp"]("--x", ctx.x)("--y", ctx.y)("--opacity", ctx.started && !ctx.ended ? 1 : 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_31__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_31__["ɵɵproperty"]("number", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_31__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_31__["ɵɵproperty"]("number", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_31__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_31__["ɵɵproperty"]("number", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_31__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_31__["ɵɵproperty"]("number", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_31__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_31__["ɵɵproperty"]("number", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_31__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_31__["ɵɵproperty"]("number", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_31__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_31__["ɵɵproperty"]("number", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_31__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_31__["ɵɵproperty"]("number", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_31__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_31__["ɵɵclassProp"]("started", ctx.started && !ctx.ended);
        _angular_core__WEBPACK_IMPORTED_MODULE_31__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_31__["ɵɵproperty"]("page", ctx.currentPage)("section", ctx.section);
    } }, dependencies: [_components_section_section_component__WEBPACK_IMPORTED_MODULE_0__.SectionComponent, _components_generic_footer_generic_footer_component__WEBPACK_IMPORTED_MODULE_2__.GenericFooterComponent, _slides_introduction_problem_introduction_problem_component__WEBPACK_IMPORTED_MODULE_3__.IntroductionProblemComponent, _slides_introduction_demonstration_robot_introduction_demonstration_robot_component__WEBPACK_IMPORTED_MODULE_4__.IntroductionDemonstrationRobotComponent, _slides_opening_opening_component__WEBPACK_IMPORTED_MODULE_5__.OpeningComponent, _slides_preliminaries_supervisory_control_theory_preliminaries_supervisory_control_theory_component__WEBPACK_IMPORTED_MODULE_6__.PreliminariesSupervisoryControlTheoryComponent, _slides_ending_ending_component__WEBPACK_IMPORTED_MODULE_7__.EndingComponent, _slides_preliminaries_ros_preliminaries_ros_component__WEBPACK_IMPORTED_MODULE_8__.PreliminariesRosComponent, _slides_preliminaries_ros_messages_preliminaries_ros_messages_component__WEBPACK_IMPORTED_MODULE_9__.PreliminariesRosMessagesComponent, _slides_preliminaries_ros_services_preliminaries_ros_services_component__WEBPACK_IMPORTED_MODULE_10__.PreliminariesRosServicesComponent, _slides_preliminaries_ros_actions_preliminaries_ros_actions_component__WEBPACK_IMPORTED_MODULE_11__.PreliminariesRosActionsComponent, _slides_preliminaries_mde_preliminaries_mde_component__WEBPACK_IMPORTED_MODULE_12__.PreliminariesMdeComponent, _slides_overview_main_idea_overview_main_idea_component__WEBPACK_IMPORTED_MODULE_13__.OverviewMainIdeaComponent, _slides_tools_generation_tools_generation_component__WEBPACK_IMPORTED_MODULE_14__.ToolsGenerationComponent, _slides_tools_editors_tools_editors_component__WEBPACK_IMPORTED_MODULE_15__.ToolsEditorsComponent, _slides_concepts_base_concepts_base_component__WEBPACK_IMPORTED_MODULE_16__.ConceptsBaseComponent, _slides_concepts_components_concepts_components_component__WEBPACK_IMPORTED_MODULE_17__.ConceptsComponentsComponent, _slides_concepts_communication_concepts_communication_component__WEBPACK_IMPORTED_MODULE_18__.ConceptsCommunicationComponent, _slides_concepts_data_concepts_data_component__WEBPACK_IMPORTED_MODULE_19__.ConceptsDataComponent, _slides_concepts_requirements_concepts_requirements_component__WEBPACK_IMPORTED_MODULE_20__.ConceptsRequirementsComponent, _slides_supervisor_idea_supervisor_idea_component__WEBPACK_IMPORTED_MODULE_21__.SupervisorIdeaComponent, _slides_supervisor_limitations_supervisor_limitations_component__WEBPACK_IMPORTED_MODULE_22__.SupervisorLimitationsComponent, _slides_tools_debugging_tools_debugging_component__WEBPACK_IMPORTED_MODULE_23__.ToolsDebuggingComponent, _slides_evaluation_scenarios_evaluation_scenarios_component__WEBPACK_IMPORTED_MODULE_24__.EvaluationScenariosComponent, _slides_conclusion_contributions_conclusion_contributions_component__WEBPACK_IMPORTED_MODULE_25__.ConclusionContributionsComponent, _slides_conclusion_video_conclusion_video_component__WEBPACK_IMPORTED_MODULE_26__.ConclusionVideoComponent, _slides_overview_idea_overview_idea_component__WEBPACK_IMPORTED_MODULE_27__.OverviewIdeaComponent, _slides_overview_control_loop_overview_control_loop_component__WEBPACK_IMPORTED_MODULE_28__.OverviewControlLoopComponent, _slides_evaluation_lines_of_code_evaluation_lines_of_code_component__WEBPACK_IMPORTED_MODULE_29__.EvaluationLinesOfCodeComponent], styles: [".slideshow[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100vw;\n  height: 100vh;\n}\n\n.main-content[_ngcontent-%COMP%] {\n  --scale: 0;\n  --width: 1920px;\n  --height: 1080px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin-left: calc(var(--width) / -2);\n  margin-top: calc(var(--height) / -2);\n  display: block;\n  width: var(--width);\n  height: var(--height);\n  background: var(--primary);\n  overflow: hidden;\n  transform: scale(var(--scale));\n  transition: background 300ms ease-in-out;\n}\n\n.main-content.started[_ngcontent-%COMP%] {\n  background: var(--slide-background);\n}\n\n.camera[_ngcontent-%COMP%] {\n  --x: 1;\n  --y: 1;\n  --opacity: 0;\n  transform: translateX(calc((var(--x) - 1) * var(--width) * -1)) translateY(calc((var(--y) - 1) * var(--height) * -1));\n  transition: opacity 300ms ease-in-out, transform 300ms ease-in-out;\n  opacity: var(--opacity);\n}\n\n.footer[_ngcontent-%COMP%] {\n  opacity: 0;\n  transition: opacity 300ms ease-in-out;\n}\n\n.footer.started[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\n.opening[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  opacity: 1;\n  transform: translateY(0);\n  transition: opacity 300ms ease-in-out;\n}\n\n.opening.started[_ngcontent-%COMP%] {\n  animation: slideOut 300ms ease-in-out 1 forwards;\n}\n\n.ending[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  opacity: 0;\n  transform: translateY(0);\n}\n\n.ending.ended[_ngcontent-%COMP%] {\n  animation: slideIn 300ms ease-in-out 1 forwards;\n}\n\n@keyframes slideOut {\n  0% {\n    transform: translateY(0);\n    opacity: 1;\n  }\n  100% {\n    transform: translateY(-100%);\n    opacity: 0;\n  }\n}\n\n@keyframes slideIn {\n  0% {\n    transform: translateY(100%);\n    opacity: 0;\n  }\n  100% {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFDRjs7QUFFQTtFQUNFLFVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFFQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBRUEsb0NBQUE7RUFDQSxvQ0FBQTtFQUVBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtFQUNBLDhCQUFBO0VBQ0Esd0NBQUE7QUFGRjs7QUFLQTtFQUNFLG1DQUFBO0FBRkY7O0FBS0E7RUFDRSxNQUFBO0VBQ0EsTUFBQTtFQUNBLFlBQUE7RUFFQSxxSEFBQTtFQUNBLGtFQUFBO0VBQ0EsdUJBQUE7QUFIRjs7QUFNQTtFQUNFLFVBQUE7RUFDQSxxQ0FBQTtBQUhGOztBQU1BO0VBQ0UsVUFBQTtBQUhGOztBQU1BO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7RUFDQSx3QkFBQTtFQUNBLHFDQUFBO0FBSEY7O0FBTUE7RUFDRSxnREFBQTtBQUhGOztBQU1BO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7RUFDQSx3QkFBQTtBQUhGOztBQU1BO0VBQ0UsK0NBQUE7QUFIRjs7QUFNQTtFQUNFO0lBQ0Usd0JBQUE7SUFDQSxVQUFBO0VBSEY7RUFNQTtJQUNFLDRCQUFBO0lBQ0EsVUFBQTtFQUpGO0FBQ0Y7O0FBT0E7RUFDRTtJQUNFLDJCQUFBO0lBQ0EsVUFBQTtFQUxGO0VBUUE7SUFDRSx3QkFBQTtJQUNBLFVBQUE7RUFORjtBQUNGIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zbGlkZXNob3cge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuLm1haW4tY29udGVudCB7XG4gIC0tc2NhbGU6IDA7XG4gIC0td2lkdGg6IDE5MjBweDtcbiAgLS1oZWlnaHQ6IDEwODBweDtcblxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG5cbiAgbWFyZ2luLWxlZnQ6IGNhbGModmFyKC0td2lkdGgpIC8gLTIpO1xuICBtYXJnaW4tdG9wOiBjYWxjKHZhcigtLWhlaWdodCkgLyAtMik7XG5cbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiB2YXIoLS13aWR0aCk7XG4gIGhlaWdodDogdmFyKC0taGVpZ2h0KTtcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeSk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRyYW5zZm9ybTogc2NhbGUodmFyKC0tc2NhbGUpKTtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAzMDBtcyBlYXNlLWluLW91dDtcbn1cblxuLm1haW4tY29udGVudC5zdGFydGVkIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tc2xpZGUtYmFja2dyb3VuZCk7XG59XG5cbi5jYW1lcmEge1xuICAtLXg6IDE7XG4gIC0teTogMTtcbiAgLS1vcGFjaXR5OiAwO1xuXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWChjYWxjKGNhbGModmFyKC0teCkgLSAxKSAqIGNhbGModmFyKC0td2lkdGgpICogLTEpKSkgdHJhbnNsYXRlWShjYWxjKGNhbGModmFyKC0teSkgLSAxKSAqIGNhbGModmFyKC0taGVpZ2h0KSAqIC0xKSkpO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zIGVhc2UtaW4tb3V0LCB0cmFuc2Zvcm0gMzAwbXMgZWFzZS1pbi1vdXQ7XG4gIG9wYWNpdHk6IHZhcigtLW9wYWNpdHkpO1xufVxuXG4uZm9vdGVyIHtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcyBlYXNlLWluLW91dDtcbn1cblxuLmZvb3Rlci5zdGFydGVkIHtcbiAgb3BhY2l0eTogMTtcbn1cblxuLm9wZW5pbmcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zIGVhc2UtaW4tb3V0O1xufVxuXG4ub3BlbmluZy5zdGFydGVkIHtcbiAgYW5pbWF0aW9uOiBzbGlkZU91dCAzMDBtcyBlYXNlLWluLW91dCAxIGZvcndhcmRzO1xufVxuXG4uZW5kaW5nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbn1cblxuLmVuZGluZy5lbmRlZCB7XG4gIGFuaW1hdGlvbjogc2xpZGVJbiAzMDBtcyBlYXNlLWluLW91dCAxIGZvcndhcmRzO1xufVxuXG5Aa2V5ZnJhbWVzIHNsaWRlT3V0IHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG5cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgc2xpZGVJbiB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwJSk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuXG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _components_section_overview_section_overview_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/section-overview/section-overview.component */ 2876);
/* harmony import */ var _components_section_overview_item_section_overview_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/section-overview-item/section-overview-item.component */ 1780);
/* harmony import */ var _components_slide_footer_slide_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/slide-footer/slide-footer.component */ 4234);
/* harmony import */ var ng_inline_svg_2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-inline-svg-2 */ 8590);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _components_slide_slide_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/slide/slide.component */ 2459);
/* harmony import */ var _components_section_section_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/section/section.component */ 3608);
/* harmony import */ var _components_title_title_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/title/title.component */ 9527);
/* harmony import */ var _components_list_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/list/list.component */ 7309);
/* harmony import */ var _components_list_item_list_item_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/list-item/list-item.component */ 1616);
/* harmony import */ var _components_two_column_layout_two_column_layout_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/two-column-layout/two-column-layout.component */ 4013);
/* harmony import */ var _components_generic_footer_generic_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/generic-footer/generic-footer.component */ 8487);
/* harmony import */ var _slides_introduction_problem_introduction_problem_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./slides/introduction-problem/introduction-problem.component */ 8883);
/* harmony import */ var _slides_introduction_demonstration_robot_introduction_demonstration_robot_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./slides/introduction-demonstration-robot/introduction-demonstration-robot.component */ 2564);
/* harmony import */ var _slides_opening_opening_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./slides/opening/opening.component */ 1201);
/* harmony import */ var _slides_preliminaries_supervisory_control_theory_preliminaries_supervisory_control_theory_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./slides/preliminaries-supervisory-control-theory/preliminaries-supervisory-control-theory.component */ 4172);
/* harmony import */ var _slides_ending_ending_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./slides/ending/ending.component */ 9275);
/* harmony import */ var _components_citation_citation_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/citation/citation.component */ 5081);
/* harmony import */ var _components_citations_citations_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/citations/citations.component */ 882);
/* harmony import */ var _components_figure_figure_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/figure/figure.component */ 3203);
/* harmony import */ var _slides_preliminaries_ros_preliminaries_ros_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./slides/preliminaries-ros/preliminaries-ros.component */ 3774);
/* harmony import */ var _slides_preliminaries_ros_messages_preliminaries_ros_messages_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./slides/preliminaries-ros-messages/preliminaries-ros-messages.component */ 5436);
/* harmony import */ var _slides_preliminaries_ros_services_preliminaries_ros_services_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./slides/preliminaries-ros-services/preliminaries-ros-services.component */ 9373);
/* harmony import */ var _slides_preliminaries_ros_actions_preliminaries_ros_actions_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./slides/preliminaries-ros-actions/preliminaries-ros-actions.component */ 5013);
/* harmony import */ var _slides_preliminaries_cif_preliminaries_cif_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./slides/preliminaries-cif/preliminaries-cif.component */ 3839);
/* harmony import */ var _slides_preliminaries_mde_preliminaries_mde_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./slides/preliminaries-mde/preliminaries-mde.component */ 1518);
/* harmony import */ var _slides_overview_main_idea_overview_main_idea_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./slides/overview-main-idea/overview-main-idea.component */ 1685);
/* harmony import */ var _slides_tools_generation_tools_generation_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./slides/tools-generation/tools-generation.component */ 2781);
/* harmony import */ var _slides_overview_scope_overview_scope_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./slides/overview-scope/overview-scope.component */ 110);
/* harmony import */ var _slides_tools_editors_tools_editors_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./slides/tools-editors/tools-editors.component */ 8026);
/* harmony import */ var _slides_concepts_base_concepts_base_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./slides/concepts-base/concepts-base.component */ 1081);
/* harmony import */ var _slides_concepts_components_concepts_components_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./slides/concepts-components/concepts-components.component */ 1513);
/* harmony import */ var _slides_concepts_communication_concepts_communication_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./slides/concepts-communication/concepts-communication.component */ 5395);
/* harmony import */ var _slides_concepts_data_concepts_data_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./slides/concepts-data/concepts-data.component */ 8296);
/* harmony import */ var _slides_concepts_requirements_concepts_requirements_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./slides/concepts-requirements/concepts-requirements.component */ 1398);
/* harmony import */ var _slides_supervisor_idea_supervisor_idea_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./slides/supervisor-idea/supervisor-idea.component */ 1857);
/* harmony import */ var _slides_supervisor_limitations_supervisor_limitations_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./slides/supervisor-limitations/supervisor-limitations.component */ 9026);
/* harmony import */ var _slides_tools_debugging_tools_debugging_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./slides/tools-debugging/tools-debugging.component */ 1556);
/* harmony import */ var _slides_evaluation_scenarios_evaluation_scenarios_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./slides/evaluation-scenarios/evaluation-scenarios.component */ 1488);
/* harmony import */ var _slides_conclusion_contributions_conclusion_contributions_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./slides/conclusion-contributions/conclusion-contributions.component */ 3718);
/* harmony import */ var _slides_conclusion_video_conclusion_video_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./slides/conclusion-video/conclusion-video.component */ 5648);
/* harmony import */ var _components_code_code_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./components/code/code.component */ 9079);
/* harmony import */ var _slides_overview_idea_overview_idea_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./slides/overview-idea/overview-idea.component */ 6738);
/* harmony import */ var _components_citation_reference_citation_reference_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./components/citation-reference/citation-reference.component */ 5598);
/* harmony import */ var _slides_overview_control_loop_overview_control_loop_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./slides/overview-control-loop/overview-control-loop.component */ 1057);
/* harmony import */ var _components_running_code_example_running_code_example_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./components/running-code-example/running-code-example.component */ 7702);
/* harmony import */ var _slides_evaluation_lines_of_code_evaluation_lines_of_code_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./slides/evaluation-lines-of-code/evaluation-lines-of-code.component */ 2463);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ng2-charts */ 3808);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! @angular/core */ 2560);





















































class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_48__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_48__["ɵɵdefineInjector"]({ imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_49__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        ng2_charts__WEBPACK_IMPORTED_MODULE_50__.NgChartsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_51__.HttpClientModule,
        ng_inline_svg_2__WEBPACK_IMPORTED_MODULE_5__.InlineSVGModule.forRoot()] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_48__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _components_section_overview_section_overview_component__WEBPACK_IMPORTED_MODULE_2__.SectionOverviewComponent,
        _components_section_overview_item_section_overview_item_component__WEBPACK_IMPORTED_MODULE_3__.SectionOverviewItemComponent,
        _components_slide_footer_slide_footer_component__WEBPACK_IMPORTED_MODULE_4__.SlideFooterComponent,
        _components_slide_slide_component__WEBPACK_IMPORTED_MODULE_6__.SlideComponent,
        _components_section_section_component__WEBPACK_IMPORTED_MODULE_7__.SectionComponent,
        _components_title_title_component__WEBPACK_IMPORTED_MODULE_8__.TitleComponent,
        _components_list_list_component__WEBPACK_IMPORTED_MODULE_9__.ListComponent,
        _components_list_item_list_item_component__WEBPACK_IMPORTED_MODULE_10__.ListItemComponent,
        _components_two_column_layout_two_column_layout_component__WEBPACK_IMPORTED_MODULE_11__.TwoColumnLayoutComponent,
        _components_generic_footer_generic_footer_component__WEBPACK_IMPORTED_MODULE_12__.GenericFooterComponent,
        _slides_introduction_problem_introduction_problem_component__WEBPACK_IMPORTED_MODULE_13__.IntroductionProblemComponent,
        _slides_introduction_demonstration_robot_introduction_demonstration_robot_component__WEBPACK_IMPORTED_MODULE_14__.IntroductionDemonstrationRobotComponent,
        _slides_opening_opening_component__WEBPACK_IMPORTED_MODULE_15__.OpeningComponent,
        _slides_preliminaries_supervisory_control_theory_preliminaries_supervisory_control_theory_component__WEBPACK_IMPORTED_MODULE_16__.PreliminariesSupervisoryControlTheoryComponent,
        _slides_ending_ending_component__WEBPACK_IMPORTED_MODULE_17__.EndingComponent,
        _components_citation_citation_component__WEBPACK_IMPORTED_MODULE_18__.CitationComponent,
        _components_citations_citations_component__WEBPACK_IMPORTED_MODULE_19__.CitationsComponent,
        _components_figure_figure_component__WEBPACK_IMPORTED_MODULE_20__.FigureComponent,
        _slides_preliminaries_ros_preliminaries_ros_component__WEBPACK_IMPORTED_MODULE_21__.PreliminariesRosComponent,
        _slides_preliminaries_ros_messages_preliminaries_ros_messages_component__WEBPACK_IMPORTED_MODULE_22__.PreliminariesRosMessagesComponent,
        _slides_preliminaries_ros_services_preliminaries_ros_services_component__WEBPACK_IMPORTED_MODULE_23__.PreliminariesRosServicesComponent,
        _slides_preliminaries_ros_actions_preliminaries_ros_actions_component__WEBPACK_IMPORTED_MODULE_24__.PreliminariesRosActionsComponent,
        _slides_preliminaries_cif_preliminaries_cif_component__WEBPACK_IMPORTED_MODULE_25__.PreliminariesCifComponent,
        _slides_preliminaries_mde_preliminaries_mde_component__WEBPACK_IMPORTED_MODULE_26__.PreliminariesMdeComponent,
        _slides_overview_main_idea_overview_main_idea_component__WEBPACK_IMPORTED_MODULE_27__.OverviewMainIdeaComponent,
        _slides_tools_generation_tools_generation_component__WEBPACK_IMPORTED_MODULE_28__.ToolsGenerationComponent,
        _slides_overview_scope_overview_scope_component__WEBPACK_IMPORTED_MODULE_29__.OverviewScopeComponent,
        _slides_tools_editors_tools_editors_component__WEBPACK_IMPORTED_MODULE_30__.ToolsEditorsComponent,
        _slides_concepts_base_concepts_base_component__WEBPACK_IMPORTED_MODULE_31__.ConceptsBaseComponent,
        _slides_concepts_components_concepts_components_component__WEBPACK_IMPORTED_MODULE_32__.ConceptsComponentsComponent,
        _slides_concepts_communication_concepts_communication_component__WEBPACK_IMPORTED_MODULE_33__.ConceptsCommunicationComponent,
        _slides_concepts_data_concepts_data_component__WEBPACK_IMPORTED_MODULE_34__.ConceptsDataComponent,
        _slides_concepts_requirements_concepts_requirements_component__WEBPACK_IMPORTED_MODULE_35__.ConceptsRequirementsComponent,
        _slides_supervisor_idea_supervisor_idea_component__WEBPACK_IMPORTED_MODULE_36__.SupervisorIdeaComponent,
        _slides_supervisor_limitations_supervisor_limitations_component__WEBPACK_IMPORTED_MODULE_37__.SupervisorLimitationsComponent,
        _slides_tools_debugging_tools_debugging_component__WEBPACK_IMPORTED_MODULE_38__.ToolsDebuggingComponent,
        _slides_evaluation_scenarios_evaluation_scenarios_component__WEBPACK_IMPORTED_MODULE_39__.EvaluationScenariosComponent,
        _slides_conclusion_contributions_conclusion_contributions_component__WEBPACK_IMPORTED_MODULE_40__.ConclusionContributionsComponent,
        _slides_conclusion_video_conclusion_video_component__WEBPACK_IMPORTED_MODULE_41__.ConclusionVideoComponent,
        _components_code_code_component__WEBPACK_IMPORTED_MODULE_42__.CodeComponent,
        _slides_overview_idea_overview_idea_component__WEBPACK_IMPORTED_MODULE_43__.OverviewIdeaComponent,
        _components_citation_reference_citation_reference_component__WEBPACK_IMPORTED_MODULE_44__.CitationReferenceComponent,
        _slides_overview_control_loop_overview_control_loop_component__WEBPACK_IMPORTED_MODULE_45__.OverviewControlLoopComponent,
        _components_running_code_example_running_code_example_component__WEBPACK_IMPORTED_MODULE_46__.RunningCodeExampleComponent,
        _slides_evaluation_lines_of_code_evaluation_lines_of_code_component__WEBPACK_IMPORTED_MODULE_47__.EvaluationLinesOfCodeComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_49__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        ng2_charts__WEBPACK_IMPORTED_MODULE_50__.NgChartsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_51__.HttpClientModule, ng_inline_svg_2__WEBPACK_IMPORTED_MODULE_5__.InlineSVGModule] }); })();


/***/ }),

/***/ 5598:
/*!*******************************************************************************!*\
  !*** ./src/app/components/citation-reference/citation-reference.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CitationReferenceComponent": () => (/* binding */ CitationReferenceComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class CitationReferenceComponent {
    constructor() { }
    ngOnInit() {
    }
}
CitationReferenceComponent.ɵfac = function CitationReferenceComponent_Factory(t) { return new (t || CitationReferenceComponent)(); };
CitationReferenceComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CitationReferenceComponent, selectors: [["app-citation-reference"]], inputs: { citation: "citation" }, decls: 2, vars: 1, template: function CitationReferenceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "sup");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("[", ctx.citation.number, "]");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaXRhdGlvbi1yZWZlcmVuY2UuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 5081:
/*!***********************************************************!*\
  !*** ./src/app/components/citation/citation.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CitationComponent": () => (/* binding */ CitationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_citation_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/citation.service */ 6062);


class CitationComponent {
    constructor(citationService) {
        this.citationService = citationService;
        this.number = this.citationService.obtainNumber();
    }
    ngOnInit() {
    }
}
CitationComponent.ɵfac = function CitationComponent_Factory(t) { return new (t || CitationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_citation_service__WEBPACK_IMPORTED_MODULE_0__.CitationService)); };
CitationComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CitationComponent, selectors: [["app-citation"]], inputs: { text: "text" }, decls: 2, vars: 2, consts: [[1, "citation"]], template: function CitationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" [", ctx.number, "] ", ctx.text, "\n");
    } }, styles: [".citation[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--citation);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNpdGF0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7RUFDQSxzQkFBQTtBQUNGIiwiZmlsZSI6ImNpdGF0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNpdGF0aW9uIHtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIGNvbG9yOiB2YXIoLS1jaXRhdGlvbik7XG59XG4iXX0= */"] });


/***/ }),

/***/ 882:
/*!*************************************************************!*\
  !*** ./src/app/components/citations/citations.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CitationsComponent": () => (/* binding */ CitationsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

const _c0 = ["*"];
class CitationsComponent {
    constructor() { }
    ngOnInit() {
    }
}
CitationsComponent.ɵfac = function CitationsComponent_Factory(t) { return new (t || CitationsComponent)(); };
CitationsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CitationsComponent, selectors: [["app-citations"]], ngContentSelectors: _c0, decls: 2, vars: 0, consts: [[1, "citation"]], template: function CitationsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["[_nghost-%COMP%] {\n  display: block;\n  position: absolute;\n  bottom: 10rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNpdGF0aW9ucy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUFDRiIsImZpbGUiOiJjaXRhdGlvbnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMTByZW07XG59XG4iXX0= */"] });


/***/ }),

/***/ 9079:
/*!***************************************************!*\
  !*** ./src/app/components/code/code.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CodeComponent": () => (/* binding */ CodeComponent)
/* harmony export */ });
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prismjs */ 6742);
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prismjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ 4497);



class CodeComponent {
    constructor(domSanitizer) {
        this.domSanitizer = domSanitizer;
        this.step = -1;
    }
    set stepSetter(value) {
        this.step = value;
        this.updateCode();
    }
    set codeSetter(value) {
        this.code = value;
        this.updateCode();
    }
    ngOnInit() {
    }
    updateCode() {
        const parsed = prismjs__WEBPACK_IMPORTED_MODULE_0___default().highlight(this.code, rscd, 'javascript');
        // Style gaps
        const styledGaps = parsed.replace(/(\.\.\.)/g, '<span class="gap">$1</span>');
        // Style highlight
        const styledHighlights = styledGaps
            .replace(/_highlight([0-9]+)_ /g, (match, number) => `<span class="highlight ${+number + 1 < this.step ? 'highlight-visible' : ''} ${+number + 1 === this.step ? 'highlight-animate' : ''}">`)
            .replace(/ _\/highlight_/g, '</span>');
        this.converted = this.domSanitizer.bypassSecurityTrustHtml(styledHighlights);
    }
}
CodeComponent.ɵfac = function CodeComponent_Factory(t) { return new (t || CodeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.DomSanitizer)); };
CodeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CodeComponent, selectors: [["app-code"]], inputs: { stepSetter: ["current", "stepSetter"], codeSetter: ["code", "codeSetter"] }, decls: 2, vars: 1, consts: [[1, "window"], [1, "wrapper", 3, "innerHTML"]], template: function CodeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "pre", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", ctx.converted, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
    } }, styles: [".window[_ngcontent-%COMP%] {\n  border-top: 2.8em solid rgba(230, 230, 230, 0.3);\n  box-shadow: 0 0.1em 1em 0 rgba(0, 0, 0, 0.2);\n  position: relative;\n  border-radius: 0.75rem 0.75rem 0.75rem 0.75rem;\n  margin: 1em;\n  flex: 1;\n}\n.window[_ngcontent-%COMP%]::before {\n  display: block;\n  position: absolute;\n  content: \"\";\n  top: -1.64em;\n  left: 1.32em;\n  width: 0.5em;\n  height: 0.5em;\n  border-radius: 50%;\n  background-color: #f15f59;\n  box-shadow: 0 0 0 2px var(--window-red), 1.3em 0 0 2px var(--window-yellow), 2.6em 0 0 2px var(--window-green);\n}\n.wrapper[_ngcontent-%COMP%] {\n  padding: 1rem;\n  margin: 0;\n  font-size: 1rem;\n}\n@keyframes transition {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.window[_ngcontent-%COMP%]  .gap {\n  border: 1px solid var(--light-gray);\n  background: white;\n  font-family: var(--font-family);\n  letter-spacing: 0.2rem;\n  padding-left: 0.4rem;\n  padding-right: 0.2rem;\n  margin: 0.3rem 0;\n  display: inline-block;\n  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;\n  border-radius: 0.3rem;\n}\n.window[_ngcontent-%COMP%]  .highlight {\n  display: inline-block;\n  opacity: 0;\n  position: relative;\n  padding: 0.25rem 0;\n}\n.window[_ngcontent-%COMP%]  .highlight-visible {\n  opacity: 1;\n}\n.window[_ngcontent-%COMP%]  .highlight-animate {\n  animation: transition 1s ease-in-out 0s forwards;\n}\n.window[_ngcontent-%COMP%]  .highlight-animate::before {\n  position: absolute;\n  left: -0.5rem;\n  right: -0.5rem;\n  top: 0;\n  bottom: 0;\n  content: \"\";\n  display: block;\n  border: 1px solid var(--light-gray);\n  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;\n  border-radius: 0.3rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvZGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnREFBQTtFQUNBLDRDQUFBO0VBQ0Esa0JBQUE7RUFDQSw4Q0FBQTtFQUNBLFdBQUE7RUFDQSxPQUFBO0FBQ0Y7QUFDRTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLDhHQUFBO0FBQ047QUFHQTtFQUNFLGFBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtBQUFGO0FBSUU7RUFDSTtJQUFPLFVBQUE7RUFBWDtFQUNJO0lBQUssVUFBQTtFQUVUO0FBQ0Y7QUFBRTtFQUNJLG1DQUFBO0VBQ0EsaUJBQUE7RUFDQSwrQkFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSwyQ0FBQTtFQUNBLHFCQUFBO0FBRU47QUFDRTtFQUNJLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFDTjtBQUVFO0VBQ0ksVUFBQTtBQUFOO0FBR0U7RUFDSSxnREFBQTtBQUROO0FBR007RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLG1DQUFBO0VBQ0EsMkNBQUE7RUFDQSxxQkFBQTtBQURWIiwiZmlsZSI6ImNvZGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2luZG93IHtcbiAgYm9yZGVyLXRvcDogMi44ZW0gc29saWQgcmdiYSgyMzAsIDIzMCwgMjMwLCAwLjMpO1xuICBib3gtc2hhZG93OiAwIDAuMWVtIDFlbSAwIHJnYigwIDAgMCAvIDIwJSk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyLXJhZGl1czogMC43NXJlbSAwLjc1cmVtIDAuNzVyZW0gMC43NXJlbTtcbiAgbWFyZ2luOiAxZW07XG4gIGZsZXg6IDE7XG5cbiAgJjo6YmVmb3JlIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgY29udGVudDogJyc7XG4gICAgICB0b3A6IC0xLjY0ZW07XG4gICAgICBsZWZ0OiAxLjMyZW07XG4gICAgICB3aWR0aDogMC41ZW07XG4gICAgICBoZWlnaHQ6IDAuNWVtO1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YxNWY1OTtcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDJweCB2YXIoLS13aW5kb3ctcmVkKSwgMS4zZW0gMCAwIDJweCB2YXIoLS13aW5kb3cteWVsbG93KSwgMi42ZW0gMCAwIDJweCB2YXIoLS13aW5kb3ctZ3JlZW4pO1xuICB9XG59XG5cbi53cmFwcGVyIHtcbiAgcGFkZGluZzogMXJlbTtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDFyZW07XG59XG5cbi53aW5kb3c6Om5nLWRlZXAge1xuICBAa2V5ZnJhbWVzIHRyYW5zaXRpb24ge1xuICAgICAgZnJvbSB7IG9wYWNpdHk6IDA7IH1cbiAgICAgIHRvIHsgb3BhY2l0eTogMTsgfVxuICB9XG5cbiAgLmdhcCB7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1saWdodC1ncmF5KTtcbiAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtZmFtaWx5KTtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwLjJyZW07XG4gICAgICBwYWRkaW5nLWxlZnQ6IDAuNHJlbTtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDAuMnJlbTtcbiAgICAgIG1hcmdpbjogMC4zcmVtIDA7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTYpIDBweCAxcHggNHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogMC4zcmVtO1xuICB9XG5cbiAgLmhpZ2hsaWdodCB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgcGFkZGluZzogMC4yNXJlbSAwO1xuICB9XG5cbiAgLmhpZ2hsaWdodC12aXNpYmxlIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gIH1cblxuICAuaGlnaGxpZ2h0LWFuaW1hdGUge1xuICAgICAgYW5pbWF0aW9uOiB0cmFuc2l0aW9uIDFzIGVhc2UtaW4tb3V0IDBzIGZvcndhcmRzO1xuXG4gICAgICAmOjpiZWZvcmUge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICBsZWZ0OiAtMC41cmVtO1xuICAgICAgICAgIHJpZ2h0OiAtMC41cmVtO1xuICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbGlnaHQtZ3JheSk7XG4gICAgICAgICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjE2KSAwcHggMXB4IDRweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAwLjNyZW07XG4gICAgICB9XG4gIH1cbn1cbiJdfQ== */"] });
const rscd = {
    'property': {
        pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,
        lookbehind: true,
        greedy: true
    },
    'string': {
        pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,
        lookbehind: true,
        greedy: true
    },
    'comment': {
        pattern: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,
        greedy: true
    },
    'number': /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
    'punctuation': /[{}[\],]/,
    'operator': /:/,
    'keyword': /\b(cancel|use|do|integer|none|robot|feedback|action|from|links|state|if|needs|incoming|double|disables|enum|provide|true|object|outgoing|request|import|string|error|interface|default|library|goto|array|datatype|and|value|on|or|initial|marked|false|requirement|message|transition|with|component|boolean|service|response|variable|behaviour|to)\b/,
    'boolean': /\b(?:false|true)\b/,
    'null': {
        pattern: /\bnull\b/,
        alias: 'keyword'
    }
};


/***/ }),

/***/ 3203:
/*!*******************************************************!*\
  !*** ./src/app/components/figure/figure.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FigureComponent": () => (/* binding */ FigureComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_figure_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/figure.service */ 2433);


const _c0 = ["*"];
class FigureComponent {
    constructor(figureService) {
        this.figureService = figureService;
        this.number = this.figureService.obtainNumber();
        this.offset = 0;
        this.step = undefined;
        this.current = undefined;
    }
    ngOnInit() {
    }
    get visible() {
        return this.step === undefined || this.step <= this.current;
    }
}
FigureComponent.ɵfac = function FigureComponent_Factory(t) { return new (t || FigureComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_figure_service__WEBPACK_IMPORTED_MODULE_0__.FigureService)); };
FigureComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: FigureComponent, selectors: [["app-figure"]], inputs: { caption: "caption", offset: "offset", step: "step", current: "current" }, ngContentSelectors: _c0, decls: 5, vars: 6, consts: [[1, "figure"], [1, "image"], [1, "caption"]], template: function FigureComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("--offset", ctx.offset)("--opacity", ctx.visible ? 1 : 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" Figure ", ctx.number, ": ", ctx.caption, " ");
    } }, styles: [".caption[_ngcontent-%COMP%] {\n  color: var(--citation);\n  margin-top: 1rem;\n  font-size: 1rem;\n}\n\n.figure[_ngcontent-%COMP%] {\n  --ofset: 0;\n  --opacity: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  padding-top: calc(var(--offset) * 1%);\n  opacity: var(--opacity);\n  transition: opacity 300ms ease-in-out;\n}\n\n.svg[_ngcontent-%COMP%] {\n  width: 60%;\n}\n\n[_nghost-%COMP%] {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpZ3VyZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUVBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxxQ0FBQTtFQUNBLHVCQUFBO0VBQ0EscUNBQUE7QUFBRjs7QUFHQTtFQUNFLFVBQUE7QUFBRjs7QUFHQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0FBQUYiLCJmaWxlIjoiZmlndXJlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcHRpb24ge1xuICBjb2xvcjogdmFyKC0tY2l0YXRpb24pO1xuICBtYXJnaW4tdG9wOiAxcmVtO1xuICBmb250LXNpemU6IDFyZW07XG59XG5cbi5maWd1cmUge1xuICAtLW9mc2V0OiAwO1xuICAtLW9wYWNpdHk6IDA7XG5cbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZy10b3A6IGNhbGModmFyKC0tb2Zmc2V0KSAqIDElKTtcbiAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eSk7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXMgZWFzZS1pbi1vdXQ7XG59XG5cbi5zdmcge1xuICB3aWR0aDogNjAlO1xufVxuXG46aG9zdCB7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xufVxuIl19 */"] });


/***/ }),

/***/ 8487:
/*!***********************************************************************!*\
  !*** ./src/app/components/generic-footer/generic-footer.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GenericFooterComponent": () => (/* binding */ GenericFooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class GenericFooterComponent {
    constructor() {
        this.page = 1;
        this.section = false;
    }
    ngOnInit() {
    }
}
GenericFooterComponent.ɵfac = function GenericFooterComponent_Factory(t) { return new (t || GenericFooterComponent)(); };
GenericFooterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GenericFooterComponent, selectors: [["app-generic-footer"]], inputs: { page: "page", section: "section" }, decls: 5, vars: 3, consts: [[1, "text"], [1, "university"], [1, "page"]], template: function GenericFooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Eindhoven University of Technology");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("section", ctx.section);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.page);
    } }, styles: [".text[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  left: 0;\n  padding: 0 6rem;\n  color: var(--white);\n  transition: color 300ms ease-in-out;\n  position: absolute;\n  bottom: 2rem;\n  left: 0;\n  right: 0;\n}\n\n.section[_ngcontent-%COMP%] {\n  color: var(--gray);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdlbmVyaWMtZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsV0FBQTtFQUNBLE9BQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtBQUNGIiwiZmlsZSI6ImdlbmVyaWMtZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRleHQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHdpZHRoOiAxMDAlO1xuICBsZWZ0OiAwO1xuICBwYWRkaW5nOiAwIDZyZW07XG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gIHRyYW5zaXRpb246IGNvbG9yIDMwMG1zIGVhc2UtaW4tb3V0O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMnJlbTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG59XG5cbi5zZWN0aW9uIHtcbiAgY29sb3I6IHZhcigtLWdyYXkpO1xufVxuIl19 */"] });


/***/ }),

/***/ 1616:
/*!*************************************************************!*\
  !*** ./src/app/components/list-item/list-item.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListItemComponent": () => (/* binding */ ListItemComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

const _c0 = ["*"];
class ListItemComponent {
    constructor() { }
    ngOnInit() {
    }
}
ListItemComponent.ɵfac = function ListItemComponent_Factory(t) { return new (t || ListItemComponent)(); };
ListItemComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListItemComponent, selectors: [["app-list-item"]], inputs: { current: "current", step: "step" }, ngContentSelectors: _c0, decls: 2, vars: 2, consts: [[1, "list-item"]], template: function ListItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.current >= ctx.step);
    } }, styles: [".list-item[_ngcontent-%COMP%] {\n  margin: 1rem 0;\n  opacity: 0;\n  transition: opacity 300ms ease-in-out;\n}\n\n.active[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3QtaXRlbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxVQUFBO0VBQ0EscUNBQUE7QUFDRjs7QUFFQTtFQUNFLFVBQUE7QUFDRiIsImZpbGUiOiJsaXN0LWl0ZW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGlzdC1pdGVtIHtcbiAgbWFyZ2luOiAxcmVtIDA7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXMgZWFzZS1pbi1vdXQ7XG59XG5cbi5hY3RpdmUge1xuICBvcGFjaXR5OiAxO1xufVxuIl19 */"] });


/***/ }),

/***/ 7309:
/*!***************************************************!*\
  !*** ./src/app/components/list/list.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListComponent": () => (/* binding */ ListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

const _c0 = ["*"];
class ListComponent {
    constructor() { }
    ngOnInit() {
    }
}
ListComponent.ɵfac = function ListComponent_Factory(t) { return new (t || ListComponent)(); };
ListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListComponent, selectors: [["app-list"]], ngContentSelectors: _c0, decls: 2, vars: 0, consts: [[1, "list"]], template: function ListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".list[_ngcontent-%COMP%] {\n  margin: 0;\n  padding-left: 1.5rem;\n  font-size: 2.9rem;\n}\n\n.list[_ngcontent-%COMP%]  .list {\n  font-size: 2.3rem;\n  padding-left: 4rem;\n  list-style-type: disc;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxTQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FBQ0YiLCJmaWxlIjoibGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5saXN0IHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nLWxlZnQ6IDEuNXJlbTtcbiAgZm9udC1zaXplOiAyLjlyZW07XG59XG5cbi5saXN0OjpuZy1kZWVwIC5saXN0IHtcbiAgZm9udC1zaXplOiAyLjNyZW07XG4gIHBhZGRpbmctbGVmdDogNHJlbTtcbiAgbGlzdC1zdHlsZS10eXBlOiBkaXNjO1xufVxuIl19 */"] });


/***/ }),

/***/ 7702:
/*!***********************************************************************************!*\
  !*** ./src/app/components/running-code-example/running-code-example.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RunningCodeExampleComponent": () => (/* binding */ RunningCodeExampleComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _title_title_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../title/title.component */ 9527);
/* harmony import */ var _code_code_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../code/code.component */ 9079);




function RunningCodeExampleComponent_app_title_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-title", 5);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("small", true);
} }
function RunningCodeExampleComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 6)(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Scenario:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " The robot should be able to follow a black line, and stop as soon as something is in front of it. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class RunningCodeExampleComponent {
    constructor() {
        this.text = true;
    }
    ngOnInit() {
    }
}
RunningCodeExampleComponent.ɵfac = function RunningCodeExampleComponent_Factory(t) { return new (t || RunningCodeExampleComponent)(); };
RunningCodeExampleComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: RunningCodeExampleComponent, selectors: [["app-running-code-example"]], inputs: { code: "code", start: "start", end: "end", current: "current", text: "text" }, decls: 5, vars: 8, consts: [[1, "overlay"], [1, "code"], ["label", "Example", 3, "small", 4, "ngIf"], ["class", "paragraph", 4, "ngIf"], [3, "code", "current"], ["label", "Example", 3, "small"], [1, "paragraph"]], template: function RunningCodeExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, RunningCodeExampleComponent_app_title_2_Template, 1, 1, "app-title", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, RunningCodeExampleComponent_div_3_Template, 4, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "app-code", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", ctx.current >= ctx.start && ctx.current <= ctx.end);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", ctx.current >= ctx.start && ctx.current <= ctx.end);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.text);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.text);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("code", ctx.code)("current", ctx.current);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _title_title_component__WEBPACK_IMPORTED_MODULE_0__.TitleComponent, _code_code_component__WEBPACK_IMPORTED_MODULE_1__.CodeComponent], styles: [".overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: var(--black);\n  z-index: 2;\n  opacity: 0;\n  transition: opacity 300ms ease-in-out;\n}\n\n.overlay.active[_ngcontent-%COMP%] {\n  opacity: 0.4;\n}\n\n.code[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 3;\n  background: var(--white);\n  top: 0;\n  bottom: 0;\n  right: 0;\n  width: 45%;\n  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;\n  display: flex;\n  padding: 2rem;\n  flex-direction: column;\n  transition: transform 300ms ease-in-out;\n  transform: translateX(100%);\n}\n\n.code.active[_ngcontent-%COMP%] {\n  transform: translateX(0%);\n}\n\napp-code[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n}\n\n.paragraph[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n  font-size: 1.4rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bm5pbmctY29kZS1leGFtcGxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0Esd0JBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLHFDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSx3QkFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxxREFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1Q0FBQTtFQUNBLDJCQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtFQUNBLFdBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0VBQ0EsaUJBQUE7QUFDRiIsImZpbGUiOiJydW5uaW5nLWNvZGUtZXhhbXBsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5vdmVybGF5IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJsYWNrKTtcbiAgei1pbmRleDogMjtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcyBlYXNlLWluLW91dDtcbn1cblxuLm92ZXJsYXkuYWN0aXZlIHtcbiAgb3BhY2l0eTogMC40O1xufVxuXG4uY29kZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMztcbiAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG4gIHdpZHRoOiA0NSU7XG4gIGJveC1zaGFkb3c6IHJnYmEoMTAwLCAxMDAsIDExMSwgMC4yKSAwcHggN3B4IDI5cHggMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiAycmVtO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMzAwbXMgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcbn1cblxuLmNvZGUuYWN0aXZlIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcbn1cblxuYXBwLWNvZGUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5wYXJhZ3JhcGgge1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICBmb250LXNpemU6IDEuNHJlbTtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ 1780:
/*!*************************************************************************************!*\
  !*** ./src/app/components/section-overview-item/section-overview-item.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SectionOverviewItemComponent": () => (/* binding */ SectionOverviewItemComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

const _c0 = ["*"];
class SectionOverviewItemComponent {
    constructor() {
        this.active = false;
        this.animate = false;
    }
    ngOnInit() {
        setTimeout(() => {
            this.animate = this.active;
        });
    }
}
SectionOverviewItemComponent.ɵfac = function SectionOverviewItemComponent_Factory(t) { return new (t || SectionOverviewItemComponent)(); };
SectionOverviewItemComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SectionOverviewItemComponent, selectors: [["app-section-overview-item"]], inputs: { active: "active" }, ngContentSelectors: _c0, decls: 4, vars: 2, consts: [[1, "item"], [1, "rectangle"], [1, "text"]], template: function SectionOverviewItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.animate);
    } }, styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\n.item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1.4rem;\n  color: var(--secondary-text);\n  font-size: 1rem;\n  transition: all 300ms ease-in-out;\n  transition-delay: var(--animate-delay);\n}\n\n.rectangle[_ngcontent-%COMP%] {\n  width: 1.8rem;\n  height: 0.75rem;\n  border-radius: 1rem;\n  background: var(--secondary);\n  transition: background 300ms ease-in-out;\n  transition-delay: var(--animate-delay);\n}\n\n.item.active[_ngcontent-%COMP%] {\n  color: var(--primary);\n  font-weight: bold;\n}\n\n.item.active[_ngcontent-%COMP%]   .rectangle[_ngcontent-%COMP%] {\n  background: var(--primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlY3Rpb24tb3ZlcnZpZXctaXRlbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSw0QkFBQTtFQUNBLGVBQUE7RUFDQSxpQ0FBQTtFQUNBLHNDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsNEJBQUE7RUFDQSx3Q0FBQTtFQUNBLHNDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxxQkFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBQ0U7RUFDRSwwQkFBQTtBQUNKIiwiZmlsZSI6InNlY3Rpb24tb3ZlcnZpZXctaXRlbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxLjRyZW07XG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktdGV4dCk7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgdHJhbnNpdGlvbjogYWxsIDMwMG1zIGVhc2UtaW4tb3V0O1xuICB0cmFuc2l0aW9uLWRlbGF5OiB2YXIoLS1hbmltYXRlLWRlbGF5KTtcbn1cblxuLnJlY3RhbmdsZSB7XG4gIHdpZHRoOiAxLjhyZW07XG4gIGhlaWdodDogMC43NXJlbTtcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgYmFja2dyb3VuZDogdmFyKC0tc2Vjb25kYXJ5KTtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAzMDBtcyBlYXNlLWluLW91dDtcbiAgdHJhbnNpdGlvbi1kZWxheTogdmFyKC0tYW5pbWF0ZS1kZWxheSk7XG59XG5cbi5pdGVtLmFjdGl2ZSB7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG5cbiAgLnJlY3RhbmdsZSB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeSk7XG4gIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ 2876:
/*!***************************************************************************!*\
  !*** ./src/app/components/section-overview/section-overview.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SectionOverviewComponent": () => (/* binding */ SectionOverviewComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _section_overview_item_section_overview_item_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../section-overview-item/section-overview-item.component */ 1780);


class SectionOverviewComponent {
    constructor() {
        this.current = 0;
    }
    ngOnInit() {
    }
}
SectionOverviewComponent.ɵfac = function SectionOverviewComponent_Factory(t) { return new (t || SectionOverviewComponent)(); };
SectionOverviewComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SectionOverviewComponent, selectors: [["app-section-overview"]], inputs: { current: "current" }, decls: 17, vars: 8, consts: [[1, "overview"], [3, "active"]], template: function SectionOverviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "app-section-overview-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Introduction");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "app-section-overview-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Preliminaries");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "app-section-overview-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Overview");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "app-section-overview-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Concepts");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "app-section-overview-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Tools");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "app-section-overview-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Supervisory Layer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "app-section-overview-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Evaluation");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "app-section-overview-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Conclusion");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("active", ctx.current === 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("active", ctx.current === 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("active", ctx.current === 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("active", ctx.current === 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("active", ctx.current === 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("active", ctx.current === 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("active", ctx.current === 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("active", ctx.current === 8);
    } }, dependencies: [_section_overview_item_section_overview_item_component__WEBPACK_IMPORTED_MODULE_0__.SectionOverviewItemComponent], styles: [".overview[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlY3Rpb24tb3ZlcnZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0FBQ0YiLCJmaWxlIjoic2VjdGlvbi1vdmVydmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5vdmVydmlldyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMC41cmVtO1xufVxuIl19 */"] });


/***/ }),

/***/ 3608:
/*!*********************************************************!*\
  !*** ./src/app/components/section/section.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SectionComponent": () => (/* binding */ SectionComponent)
/* harmony export */ });
/* harmony import */ var src_app_models_component_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/models/component-type */ 7234);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var ng_inline_svg_2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-inline-svg-2 */ 8590);
/* harmony import */ var _section_overview_section_overview_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../section-overview/section-overview.component */ 2876);





const _c0 = ["slide"];
function SectionComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "app-section-overview", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 7)(5, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](7, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("current", ctx_r0.number);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](7, 3, ctx_r0.number, "2.0-0"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.label);
} }
const _c1 = ["*"];
class SectionComponent {
    constructor() {
        this.active = false;
        this.offsetX = 0;
        this.offsetY = 0;
        this.componentType = src_app_models_component_type__WEBPACK_IMPORTED_MODULE_0__.ComponentType.SECTION;
    }
    ngOnInit() {
    }
    isCompleted() {
        return true;
    }
}
SectionComponent.ɵfac = function SectionComponent_Factory(t) { return new (t || SectionComponent)(); };
SectionComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: SectionComponent, selectors: [["app-section"]], contentQueries: function SectionComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, _c0, 4);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.slides = _t);
    } }, inputs: { number: "number", label: "label" }, ngContentSelectors: _c1, decls: 5, vars: 5, consts: [[1, "wrapper"], [1, "section"], [4, "ngIf"], [1, "slides"], ["inlineSVG", "/assets/section-wave.svg", 1, "svg-holder"], [1, "overview"], [3, "current"], [1, "information"], [1, "number"], [1, "title"]], template: function SectionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, SectionComponent_ng_container_2_Template, 10, 6, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("--offset-x", ctx.offsetX)("--offset-y", ctx.offsetY);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.active);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, ng_inline_svg_2__WEBPACK_IMPORTED_MODULE_1__.InlineSVGDirective, _section_overview_section_overview_component__WEBPACK_IMPORTED_MODULE_2__.SectionOverviewComponent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.DecimalPipe], styles: [".wrapper[_ngcontent-%COMP%] {\n  --offset-x: 0;\n  --offset-y: 0;\n  transform: translateX(calc(var(--offset-x) * var(--width))) translateY(calc(var(--offset-y) * var(--height)));\n}\n\n.slides[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: nowrap;\n}\n\n.section[_ngcontent-%COMP%] {\n  width: var(--width);\n  height: var(--height);\n  display: flex;\n  align-items: center;\n  position: relative;\n  justify-content: space-between;\n}\n\n.overview[_ngcontent-%COMP%] {\n  margin-left: 11rem;\n  margin-top: -20rem;\n}\n\n.svg-holder[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: -1px;\n  transform-origin: top right;\n  transform: scale(0.8);\n}\n\n.information[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  margin-right: 24rem;\n  color: var(--primary);\n  animation-delay: var(--animate-delay);\n  animation: slide 300ms ease-in-out 100ms 1 forwards;\n  opacity: 0;\n}\n\n.number[_ngcontent-%COMP%] {\n  font-size: 8rem;\n  font-weight: bold;\n}\n\n.title[_ngcontent-%COMP%] {\n  font-size: 3.6669rem;\n}\n\n@keyframes slide {\n  0% {\n    transform: translateX(100%);\n    opacity: 0;\n  }\n  50% {\n    opacity: 0;\n  }\n  100% {\n    transform: translateX(0);\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlY3Rpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsYUFBQTtFQUVBLDZHQUFBO0FBQUY7O0FBR0E7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7QUFBRjs7QUFHQTtFQUNFLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLDhCQUFBO0FBQUY7O0FBR0E7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0FBQUY7O0FBR0E7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7RUFDQSxxQkFBQTtBQUFGOztBQUdBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EscUNBQUE7RUFDQSxtREFBQTtFQUNBLFVBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQUFGOztBQUdBO0VBQ0Usb0JBQUE7QUFBRjs7QUFHQTtFQUNFO0lBQ0UsMkJBQUE7SUFDQSxVQUFBO0VBQUY7RUFHQTtJQUNFLFVBQUE7RUFERjtFQUlBO0lBQ0Usd0JBQUE7SUFDQSxVQUFBO0VBRkY7QUFDRiIsImZpbGUiOiJzZWN0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXBwZXIge1xuICAtLW9mZnNldC14OiAwO1xuICAtLW9mZnNldC15OiAwO1xuXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWChjYWxjKHZhcigtLW9mZnNldC14KSAqIHZhcigtLXdpZHRoKSkpIHRyYW5zbGF0ZVkoY2FsYyh2YXIoLS1vZmZzZXQteSkgKiB2YXIoLS1oZWlnaHQpKSk7XG59XG5cbi5zbGlkZXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IG5vd3JhcDtcbn1cblxuLnNlY3Rpb24ge1xuICB3aWR0aDogdmFyKC0td2lkdGgpO1xuICBoZWlnaHQ6IHZhcigtLWhlaWdodCk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4ub3ZlcnZpZXcge1xuICBtYXJnaW4tbGVmdDogMTFyZW07XG4gIG1hcmdpbi10b3A6IC0yMHJlbTtcbn1cblxuLnN2Zy1ob2xkZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IC0xcHg7XG4gIHRyYW5zZm9ybS1vcmlnaW46IHRvcCByaWdodDtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xufVxuXG4uaW5mb3JtYXRpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIG1hcmdpbi1yaWdodDogMjRyZW07XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgYW5pbWF0aW9uLWRlbGF5OiB2YXIoLS1hbmltYXRlLWRlbGF5KTtcbiAgYW5pbWF0aW9uOiBzbGlkZSAzMDBtcyBlYXNlLWluLW91dCAxMDBtcyAxIGZvcndhcmRzO1xuICBvcGFjaXR5OiAwO1xufVxuXG4ubnVtYmVyIHtcbiAgZm9udC1zaXplOiA4cmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnRpdGxlIHtcbiAgZm9udC1zaXplOiAzLjY2NjlyZW07XG59XG5cbkBrZXlmcmFtZXMgc2xpZGUge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cblxuICA1MCUge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cblxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuIl19 */"] });


/***/ }),

/***/ 4234:
/*!*******************************************************************!*\
  !*** ./src/app/components/slide-footer/slide-footer.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SlideFooterComponent": () => (/* binding */ SlideFooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var ng_inline_svg_2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng-inline-svg-2 */ 8590);


class SlideFooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
SlideFooterComponent.ɵfac = function SlideFooterComponent_Factory(t) { return new (t || SlideFooterComponent)(); };
SlideFooterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SlideFooterComponent, selectors: [["app-slide-footer"]], decls: 2, vars: 0, consts: [[1, "footer"], ["inlineSVG", "/assets/slide-wave.svg", 1, "svg-holder"]], template: function SlideFooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, dependencies: [ng_inline_svg_2__WEBPACK_IMPORTED_MODULE_0__.InlineSVGDirective], styles: [".footer[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -3px;\n  left: 0;\n  width: 100%;\n  display: flex;\n}\n\n.svg-holder[_ngcontent-%COMP%] {\n  transform: scaleX(1.001);\n}\n\nsvg[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNsaWRlLWZvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQUNGOztBQUVBO0VBQ0Usd0JBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7QUFDRiIsImZpbGUiOiJzbGlkZS1mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IC0zcHg7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uc3ZnLWhvbGRlciB7XG4gIHRyYW5zZm9ybTogc2NhbGVYKDEuMDAxKTtcbn1cblxuc3ZnIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbiJdfQ== */"] });


/***/ }),

/***/ 2459:
/*!*****************************************************!*\
  !*** ./src/app/components/slide/slide.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SlideComponent": () => (/* binding */ SlideComponent)
/* harmony export */ });
/* harmony import */ var src_app_models_component_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/models/component-type */ 7234);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _slide_footer_slide_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../slide-footer/slide-footer.component */ 4234);




function SlideComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} }
const _c0 = ["*"];
class SlideComponent {
    constructor() {
        this.active = false;
        this.componentType = src_app_models_component_type__WEBPACK_IMPORTED_MODULE_0__.ComponentType.SLIDE;
    }
    ngOnInit() {
    }
    isCompleted() {
        return true;
    }
}
SlideComponent.ɵfac = function SlideComponent_Factory(t) { return new (t || SlideComponent)(); };
SlideComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: SlideComponent, selectors: [["app-slide"]], ngContentSelectors: _c0, decls: 2, vars: 1, consts: [[4, "ngIf"]], template: function SlideComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, SlideComponent_ng_container_0_Template, 2, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-slide-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.active);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _slide_footer_slide_footer_component__WEBPACK_IMPORTED_MODULE_1__.SlideFooterComponent], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  padding: 4rem 6rem;\n  width: var(--width);\n  height: var(--height);\n  min-width: var(--width);\n  min-height: var(--height);\n  flex: 0;\n  position: relative;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNsaWRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0EsT0FBQTtFQUNBLGtCQUFBO0FBQ0YiLCJmaWxlIjoic2xpZGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICBwYWRkaW5nOiA0cmVtIDZyZW07XG4gIHdpZHRoOiB2YXIoLS13aWR0aCk7XG4gIGhlaWdodDogdmFyKC0taGVpZ2h0KTtcbiAgbWluLXdpZHRoOiB2YXIoLS13aWR0aCk7XG4gIG1pbi1oZWlnaHQ6IHZhcigtLWhlaWdodCk7XG4gIGZsZXg6IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ 9527:
/*!*****************************************************!*\
  !*** ./src/app/components/title/title.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TitleComponent": () => (/* binding */ TitleComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);


function TitleComponent_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("- ", ctx_r0.subTitle, "");
} }
class TitleComponent {
    constructor() {
        this.active = false;
        this.small = false;
    }
    ngOnInit() {
    }
}
TitleComponent.ɵfac = function TitleComponent_Factory(t) { return new (t || TitleComponent)(); };
TitleComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TitleComponent, selectors: [["app-title"]], inputs: { label: "label", subTitle: "subTitle", active: "active", small: "small" }, decls: 3, vars: 6, consts: [[1, "title"], ["class", "sub-title", 4, "ngIf"], [1, "sub-title"]], template: function TitleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TitleComponent_span_2_Template, 2, 1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("animate", ctx.active)("small", ctx.small);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.label, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.subTitle);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf], styles: [".title[_ngcontent-%COMP%] {\n  color: var(--primary);\n  font-size: 3.6669rem;\n  position: relative;\n  margin-left: -3px;\n  width: 100%;\n  margin-bottom: 4rem;\n  font-weight: 500;\n}\n.title[_ngcontent-%COMP%]::after {\n  display: block;\n  content: \"\";\n  width: 1.8rem;\n  height: 0.5rem;\n  border-radius: 1rem;\n  background: var(--primary);\n  transform: scaleX(0);\n  transform-origin: left center;\n  left: 3px;\n  position: absolute;\n  bottom: -0.75rem;\n  animation: scale 300ms ease-in-out var(--animate-delay) 1 forwards;\n}\n.small[_ngcontent-%COMP%] {\n  font-size: 2.8rem;\n}\n@keyframes scale {\n  0% {\n    transform: scaleX(0);\n  }\n  100% {\n    transform: scaleX(1);\n  }\n}\n.sub-title[_ngcontent-%COMP%] {\n  color: var(--primary);\n  opacity: 0.65;\n  display: inline-block;\n  font-size: 2.4rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRpdGxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUNGO0FBQ0U7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQkFBQTtFQUNBLG9CQUFBO0VBQ0EsNkJBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtFQUFBO0FBQ0o7QUFHQTtFQUNFLGlCQUFBO0FBQUY7QUFHQTtFQUNFO0lBQ0Usb0JBQUE7RUFBRjtFQUdBO0lBQ0Usb0JBQUE7RUFERjtBQUNGO0FBSUE7RUFDRSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0FBRkYiLCJmaWxlIjoidGl0bGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGUge1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gIGZvbnQtc2l6ZTogMy42NjY5cmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1sZWZ0OiAtM3B4O1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogNHJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcblxuICAmOjphZnRlciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgY29udGVudDogJyc7XG4gICAgd2lkdGg6IDEuOHJlbTtcbiAgICBoZWlnaHQ6IDAuNXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnkpO1xuICAgIHRyYW5zZm9ybTogc2NhbGVYKDApO1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgY2VudGVyO1xuICAgIGxlZnQ6IDNweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAtMC43NXJlbTtcbiAgICBhbmltYXRpb246IHNjYWxlIDMwMG1zIGVhc2UtaW4tb3V0IHZhcigtLWFuaW1hdGUtZGVsYXkpIDEgZm9yd2FyZHM7XG4gIH1cbn1cblxuLnNtYWxsIHtcbiAgZm9udC1zaXplOiAyLjhyZW07XG59XG5cbkBrZXlmcmFtZXMgc2NhbGUge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoMCk7XG4gIH1cblxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgxKTtcbiAgfVxufVxuXG4uc3ViLXRpdGxlIHtcbiAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICBvcGFjaXR5OiAwLjY1O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMi40cmVtO1xufVxuIl19 */"] });


/***/ }),

/***/ 4013:
/*!*****************************************************************************!*\
  !*** ./src/app/components/two-column-layout/two-column-layout.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TwoColumnLayoutComponent": () => (/* binding */ TwoColumnLayoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

const _c0 = ["*"];
class TwoColumnLayoutComponent {
    constructor() { }
    ngOnInit() {
    }
}
TwoColumnLayoutComponent.ɵfac = function TwoColumnLayoutComponent_Factory(t) { return new (t || TwoColumnLayoutComponent)(); };
TwoColumnLayoutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TwoColumnLayoutComponent, selectors: [["app-two-column-layout"]], ngContentSelectors: _c0, decls: 2, vars: 0, consts: [[1, "grid"]], template: function TwoColumnLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".grid[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 4rem;\n  grid-template-columns: 3fr 2fr;\n  height: 100%;\n  grid-auto-flow: column;\n}\n\n[_nghost-%COMP%] {\n  flex: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInR3by1jb2x1bW4tbGF5b3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLFNBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtBQUNGOztBQUVBO0VBQ0UsT0FBQTtBQUNGIiwiZmlsZSI6InR3by1jb2x1bW4tbGF5b3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBnYXA6IDRyZW07XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogM2ZyIDJmcjtcbiAgaGVpZ2h0OiAxMDAlO1xuICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xufVxuXG46aG9zdCB7XG4gIGZsZXg6IDE7XG59XG4iXX0= */"] });


/***/ }),

/***/ 5726:
/*!******************************************!*\
  !*** ./src/app/models/abstract-slide.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AbstractSlide": () => (/* binding */ AbstractSlide)
/* harmony export */ });
class AbstractSlide {
    constructor() {
        this.step = 0;
    }
    isCompletedNext() {
        return this.step >= this.max;
    }
    isCompletedPrev() {
        return this.step <= 0;
    }
    prev() {
        this.step -= 1;
    }
    next() {
        this.step += 1;
    }
    start() {
        this.step = 0;
    }
    end() {
        this.step = this.max;
    }
}


/***/ }),

/***/ 7234:
/*!******************************************!*\
  !*** ./src/app/models/component-type.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentType": () => (/* binding */ ComponentType)
/* harmony export */ });
var ComponentType;
(function (ComponentType) {
    ComponentType[ComponentType["SECTION"] = 0] = "SECTION";
    ComponentType[ComponentType["SLIDE"] = 1] = "SLIDE";
})(ComponentType || (ComponentType = {}));


/***/ }),

/***/ 6062:
/*!**********************************************!*\
  !*** ./src/app/services/citation.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CitationService": () => (/* binding */ CitationService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class CitationService {
    constructor() {
        this.no = 0;
    }
    obtainNumber() {
        return ++this.no;
    }
}
CitationService.ɵfac = function CitationService_Factory(t) { return new (t || CitationService)(); };
CitationService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CitationService, factory: CitationService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2433:
/*!********************************************!*\
  !*** ./src/app/services/figure.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FigureService": () => (/* binding */ FigureService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class FigureService {
    constructor() {
        this.no = 0;
    }
    obtainNumber() {
        return ++this.no;
    }
}
FigureService.ɵfac = function FigureService_Factory(t) { return new (t || FigureService)(); };
FigureService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FigureService, factory: FigureService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 1081:
/*!*****************************************************************!*\
  !*** ./src/app/slides/concepts-base/concepts-base.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConceptsBaseComponent": () => (/* binding */ ConceptsBaseComponent)
/* harmony export */ });
/* harmony import */ var src_app_components_slide_slide_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/slide/slide.component */ 2459);
/* harmony import */ var src_app_models_abstract_slide__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/abstract-slide */ 5726);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _components_title_title_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/title/title.component */ 9527);
/* harmony import */ var _components_list_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/list/list.component */ 7309);
/* harmony import */ var _components_list_item_list_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/list-item/list-item.component */ 1616);
/* harmony import */ var _components_two_column_layout_two_column_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/two-column-layout/two-column-layout.component */ 4013);
/* harmony import */ var _components_figure_figure_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/figure/figure.component */ 3203);
/* harmony import */ var _components_running_code_example_running_code_example_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/running-code-example/running-code-example.component */ 7702);










class ConceptsBaseComponent extends src_app_models_abstract_slide__WEBPACK_IMPORTED_MODULE_1__.AbstractSlide {
    constructor() {
        super();
        this.max = 8;
        this.code = `robot PresentationRobot {
    _highlight7_ // Here we define the behaviour  _/highlight_
}`;
    }
    ngOnInit() {
    }
}
ConceptsBaseComponent.ɵfac = function ConceptsBaseComponent_Factory(t) { return new (t || ConceptsBaseComponent)(); };
ConceptsBaseComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: ConceptsBaseComponent, selectors: [["app-concepts-base"]], viewQuery: function ConceptsBaseComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](src_app_components_slide_slide_component__WEBPACK_IMPORTED_MODULE_0__.SlideComponent, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.slide = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵInheritDefinitionFeature"]], decls: 31, vars: 17, consts: [["label", "Base"], [3, "code", "start", "end", "current"], [3, "current", "step"], [1, "emphasize"], ["caption", "Partial and simplified of the metamodel of the base concepts.", 3, "offset"], ["src", "/assets/concepts-base.svg", "width", "100%", 1, "image"]], template: function ConceptsBaseComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "app-slide");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "app-title", 0)(2, "app-running-code-example", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "app-two-column-layout")(4, "app-list")(5, "app-list-item", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6, " Robot ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "app-list")(8, "app-list-item", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9, "Modelling ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11, "controller");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "app-list-item", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13, "Specify ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15, "behaviour");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "app-list-item", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](17, "Define ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](19, "communication");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](20, " with middleware");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "app-list-item", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](22, " Library ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "app-list")(24, "app-list-item", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](25, "Stimulate ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](27, "re-use");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](28, " of code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](29, "app-figure", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](30, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("code", ctx.code)("start", 7)("end", 8)("current", ctx.step);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("current", ctx.step)("step", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("current", ctx.step)("step", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("current", ctx.step)("step", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("current", ctx.step)("step", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("current", ctx.step)("step", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("current", ctx.step)("step", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("offset", 20);
    } }, dependencies: [src_app_components_slide_slide_component__WEBPACK_IMPORTED_MODULE_0__.SlideComponent, _components_title_title_component__WEBPACK_IMPORTED_MODULE_2__.TitleComponent, _components_list_list_component__WEBPACK_IMPORTED_MODULE_3__.ListComponent, _components_list_item_list_item_component__WEBPACK_IMPORTED_MODULE_4__.ListItemComponent, _components_two_column_layout_two_column_layout_component__WEBPACK_IMPORTED_MODULE_5__.TwoColumnLayoutComponent, _components_figure_figure_component__WEBPACK_IMPORTED_MODULE_6__.FigureComponent, _components_running_code_example_running_code_example_component__WEBPACK_IMPORTED_MODULE_7__.RunningCodeExampleComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb25jZXB0cy1iYXNlLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 5395:
/*!***********************************************************************************!*\
  !*** ./src/app/slides/concepts-communication/concepts-communication.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConceptsCommunicationComponent": () => (/* binding */ ConceptsCommunicationComponent)
/* harmony export */ });
/* harmony import */ var src_app_components_slide_slide_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/slide/slide.component */ 2459);
/* harmony import */ var src_app_models_abstract_slide__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/abstract-slide */ 5726);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _components_title_title_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/title/title.component */ 9527);
/* harmony import */ var _components_list_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/list/list.component */ 7309);
/* harmony import */ var _components_list_item_list_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/list-item/list-item.component */ 1616);
/* harmony import */ var _components_two_column_layout_two_column_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/two-column-layout/two-column-layout.component */ 4013);
/* harmony import */ var _components_figure_figure_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/figure/figure.component */ 3203);
/* harmony import */ var _components_running_code_example_running_code_example_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/running-code-example/running-code-example.component */ 7702);










class ConceptsCommunicationComponent extends src_app_models_abstract_slide__WEBPACK_IMPORTED_MODULE_1__.AbstractSlide {
    constructor() {
        super();
        this.max = 16;
        this.code = `robot PresentationRobot {
    ...
    component Motor {
        _highlight6_ incoming message forward with identifier: "/velocity",
            type: Twist links geometry
incoming message stop with identifier: "/velocity",
            type: Twist links geometry _/highlight_
    }
    component Distance {
        _highlight7_ outgoing message distance with type: Safety _/highlight_
        behaviour {
            ...
            _highlight8_ on response from distance do safety := value _/highlight_
            initial marked state unsafe {
                _highlight9_ transition if Distance.safety = safe_value goto safe _/highlight_
            }
            state safe {
                _highlight10_ transition if Distance.safety = unsafe_value goto unsafe _/highlight_
            }
        }
    }
    component Line {
        _highlight11_ outgoing message line_left with type: none
outgoing message line_right with type: none
outgoing message no_line_left with type: none
outgoing message no_line_right with type: none _/highlight_
        behaviour {
            initial marked state no_lines {
                _highlight12_ on response from line_left goto line_left
on response from line_right goto line_right _/highlight_
            }
            state line_left {
                _highlight13_ on response from line_right goto both_lines
on response from no_line_left goto no_lines _/highlight_
            }
            state line_right {
                _highlight14_ on response from line_left goto both_lines
on response from no_line_right goto no_lines _/highlight_
            }
            state both_lines {
                _highlight15_ on response from no_line_left goto line_right
on response from no_line_right goto line_left _/highlight_
            }
        }
    }
}`;
    }
    ngOnInit() {
    }
}
ConceptsCommunicationComponent.ɵfac = function ConceptsCommunicationComponent_Factory(t) { return new (t || ConceptsCommunicationComponent)(); };
ConceptsCommunicationComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: ConceptsCommunicationComponent, selectors: [["app-concepts-communication"]], viewQuery: function ConceptsCommunicationComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](src_app_components_slide_slide_component__WEBPACK_IMPORTED_MODULE_0__.SlideComponent, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.slide = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵInheritDefinitionFeature"]], decls: 24, vars: 15, consts: [["label", "Communication"], [3, "text", "code", "start", "end", "current"], [3, "current", "step"], [1, "emphasize"], ["caption", "Partial and simplified of the metamodel of communication."], ["src", "/assets/concepts-communication.svg", "width", "100%", 1, "image"]], template: function ConceptsCommunicationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "app-slide");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "app-title", 0)(2, "app-running-code-example", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "app-two-column-layout")(4, "app-list")(5, "app-list-item", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6, " Types of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8, "communication");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9, " per component ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "app-list")(11, "app-list-item", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12, "Messages");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "app-list-item", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14, "Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "app-list-item", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](16, "Actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "app-list-item", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](18, "Define ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](20, "bindings");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](21, " to middleware");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "app-figure", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](23, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("text", false)("code", ctx.code)("start", 6)("end", 16)("current", ctx.step);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("current", ctx.step)("step", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("current", ctx.step)("step", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("current", ctx.step)("step", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("current", ctx.step)("step", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("current", ctx.step)("step", 5);
    } }, dependencies: [src_app_components_slide_slide_component__WEBPACK_IMPORTED_MODULE_0__.SlideComponent, _components_title_title_component__WEBPACK_IMPORTED_MODULE_2__.TitleComponent, _components_list_list_component__WEBPACK_IMPORTED_MODULE_3__.ListComponent, _components_list_item_list_item_component__WEBPACK_IMPORTED_MODULE_4__.ListItemComponent, _components_two_column_layout_two_column_layout_component__WEBPACK_IMPORTED_MODULE_5__.TwoColumnLayoutComponent, _components_figure_figure_component__WEBPACK_IMPORTED_MODULE_6__.FigureComponent, _components_running_code_example_running_code_example_component__WEBPACK_IMPORTED_MODULE_7__.RunningCodeExampleComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb25jZXB0cy1jb21tdW5pY2F0aW9uLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 1513:
/*!*****************************************************************************!*\
  !*** ./src/app/slides/concepts-components/concepts-components.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConceptsComponentsComponent": () => (/* binding */ ConceptsComponentsComponent)
/* harmony export */ });
/* harmony import */ var src_app_components_slide_slide_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/slide/slide.component */ 2459);
/* harmony import */ var src_app_models_abstract_slide__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/abstract-slide */ 5726);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _components_title_title_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/title/title.component */ 9527);
/* harmony import */ var _components_list_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/list/list.component */ 7309);
/* harmony import */ var _components_list_item_list_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/list-item/list-item.component */ 1616);
/* harmony import */ var _components_two_column_layout_two_column_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/two-column-layout/two-column-layout.component */ 4013);
/* harmony import */ var _components_figure_figure_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/figure/figure.component */ 3203);
/* harmony import */ var _components_running_code_example_running_code_example_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/running-code-example/running-code-example.component */ 7702);










class ConceptsComponentsComponent extends src_app_models_abstract_slide__WEBPACK_IMPORTED_MODULE_1__.AbstractSlide {
    constructor() {
        super();
        this.max = 8;
        this.code = `robot PresentationRobot {
    _highlight5_ component Motor { }  _/highlight_
    _highlight6_ component Distance {
  behaviour {
      variable safety: Safety = unsafe_value

      initial marked state unsafe {}
      state safe {}
  }
}  _/highlight_

    _highlight7_ component Line {
  behaviour {
    initial marked state no_lines {}
    state line_left {}
    state line_right {}
    state both_lines {}
  }
}  _/highlight_
}`;
    }
    ngOnInit() {
    }
}
ConceptsComponentsComponent.ɵfac = function ConceptsComponentsComponent_Factory(t) { return new (t || ConceptsComponentsComponent)(); };
ConceptsComponentsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: ConceptsComponentsComponent, selectors: [["app-concepts-components"]], viewQuery: function ConceptsComponentsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](src_app_components_slide_slide_component__WEBPACK_IMPORTED_MODULE_0__.SlideComponent, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.slide = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵInheritDefinitionFeature"]], decls: 23, vars: 13, consts: [["label", "Components"], [3, "code", "start", "end", "current"], [3, "current", "step"], [1, "emphasize"], ["caption", "Partial and simplified of the metamodel of components.", 3, "offset"], ["src", "/assets/concepts-component.svg", "width", "100%", 1, "image"]], template: function ConceptsComponentsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "app-slide");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "app-title", 0)(2, "app-running-code-example", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "app-two-column-layout")(4, "app-list")(5, "app-list-item", 2)(6, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7, "Virtual");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8, " separation of robot parts ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "app-list")(10, "app-list-item", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11, " Close relation to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13, "ROS-nodes");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "app-list-item", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15, " Define component ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](17, "behaviour");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "app-list")(19, "app-list-item", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](20, " Using automata ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "app-figure", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](22, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("code", ctx.code)("start", 5)("end", 9)("current", ctx.step);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("current", ctx.step)("step", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("current", ctx.step)("step", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("current", ctx.step)("step", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("current", ctx.step)("step", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("offset", 10);
    } }, dependencies: [src_app_components_slide_slide_component__WEBPACK_IMPORTED_MODULE_0__.SlideComponent, _components_title_title_component__WEBPACK_IMPORTED_MODULE_2__.TitleComponent, _components_list_list_component__WEBPACK_IMPORTED_MODULE_3__.ListComponent, _components_list_item_list_item_component__WEBPACK_IMPORTED_MODULE_4__.ListItemComponent, _components_two_column_layout_two_column_layout_component__WEBPACK_IMPORTED_MODULE_5__.TwoColumnLayoutComponent, _components_figure_figure_component__WEBPACK_IMPORTED_MODULE_6__.FigureComponent, _components_running_code_example_running_code_example_component__WEBPACK_IMPORTED_MODULE_7__.RunningCodeExampleComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb25jZXB0cy1jb21wb25lbnRzLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 8296:
/*!*****************************************************************!*\
  !*** ./src/app/slides/concepts-data/concepts-data.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConceptsDataComponent": () => (/* binding */ ConceptsDataComponent)
/* harmony export */ });
/* harmony import */ var src_app_components_slide_slide_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/slide/slide.component */ 2459);
/* harmony import */ var src_app_models_abstract_slide__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/abstract-slide */ 5726);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _components_title_title_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/title/title.component */ 9527);
/* harmony import */ var _components_list_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/list/list.component */ 7309);
/* harmony import */ var _components_list_item_list_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/list-item/list-item.component */ 1616);
/* harmony import */ var _components_two_column_layout_two_column_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/two-column-layout/two-column-layout.component */ 4013);
/* harmony import */ var _components_figure_figure_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/figure/figure.component */ 3203);
/* harmony import */ var _components_running_code_example_running_code_example_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/running-code-example/running-code-example.component */ 7702);










class ConceptsDataComponent extends src_app_models_abstract_slide__WEBPACK_IMPORTED_MODULE_1__.AbstractSlide {
    constructor() {
        super();
        this.max = 12;
        this.code = `robot PresentationRobot {
    ...

    _highlight8_ interface geometry use Twist from geometry_msgs _/highlight_

    _highlight9_ datatype object Vector3 {
    x: double
    y: double
    z: double
}

datatype object Twist {
    angular: Vector3
    linear: Vector3
}  _/highlight_

    _highlight10_ datatype enum Safety from integer to {
    value > 10 -> safe_value
    default -> unsafe_value
}  _/highlight_

    _highlight11_ provide forward with { linear: { x: 0.4 } } if Line.no_lines
provide forward with { angular: { z: 0.2 } } if Line.line_left
provide forward with { angular: { z: -0.2 } } if Line.line_right

provide stop with { linear: { x: 0.0 }, angular: { z: 0.0 } }  _/highlight_

    ...
}`;
    }
    ngOnInit() {
    }
}
ConceptsDataComponent.ɵfac = function ConceptsDataComponent_Factory(t) { return new (t || ConceptsDataComponent)(); };
ConceptsDataComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: ConceptsDataComponent, selectors: [["app-concepts-data"]], viewQuery: function ConceptsDataComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](src_app_components_slide_slide_component__WEBPACK_IMPORTED_MODULE_0__.SlideComponent, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.slide = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵInheritDefinitionFeature"]], decls: 30, vars: 18, consts: [["label", "Data"], [3, "code", "start", "end", "current"], [3, "current", "step"], [1, "emphasize"], ["caption", "Partial and simplified of the metamodel of data."], ["src", "/assets/concepts-data.svg", "width", "100%", 1, "image"]], template: function ConceptsDataComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "app-slide");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "app-title", 0)(2, "app-running-code-example", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "app-two-column-layout")(4, "app-list")(5, "app-list-item", 2)(6, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7, "Basic");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8, " data types");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "app-list-item", 2)(10, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11, "Complex");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12, " data types ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "app-list")(14, "app-list-item", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15, "Objects");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "app-list-item", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](17, "Enums");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "app-list-item", 2)(19, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](20, "Provide");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](21, " statements");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "app-list-item", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](23, "Variables");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "app-list-item", 2)(25, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](26, "Interfaces");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](27, " to link external definitions");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](28, "app-figure", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](29, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("code", ctx.code)("start", 8)("end", 12)("current", ctx.step);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("current", ctx.step)("step", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("current", ctx.step)("step", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("current", ctx.step)("step", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("current", ctx.step)("step", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("current", ctx.step)("step", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("current", ctx.step)("step", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("current", ctx.step)("step", 7);
    } }, dependencies: [src_app_components_slide_slide_component__WEBPACK_IMPORTED_MODULE_0__.SlideComponent, _components_title_title_component__WEBPACK_IMPORTED_MODULE_2__.TitleComponent, _components_list_list_component__WEBPACK_IMPORTED_MODULE_3__.ListComponent, _components_list_item_list_item_component__WEBPACK_IMPORTED_MODULE_4__.ListItemComponent, _components_two_column_layout_two_column_layout_component__WEBPACK_IMPORTED_MODULE_5__.TwoColumnLayoutComponent, _components_figure_figure_component__WEBPACK_IMPORTED_MODULE_6__.FigureComponent, _components_running_code_example_running_code_example_component__WEBPACK_IMPORTED_MODULE_7__.RunningCodeExampleComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb25jZXB0cy1kYXRhLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 1398:
/*!*********************************************************************************!*\
  !*** ./src/app/slides/concepts-requirements/concepts-requirements.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConceptsRequirementsComponent": () => (/* binding */ ConceptsRequirementsComponent)
/* harmony export */ });
/* harmony import */ var src_app_components_slide_slide_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/slide/slide.component */ 2459);
/* harmony import */ var src_app_models_abstract_slide__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/abstract-slide */ 5726);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _components_title_title_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/title/title.component */ 9527);
/* harmony import */ var _components_list_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/list/list.component */ 7309);
/* harmony import */ var _components_list_item_list_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/list-item/list-item.component */ 1616);
/* harmony import */ var _components_two_column_layout_two_column_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/two-column-layout/two-column-layout.component */ 4013);
/* harmony import */ var _components_figure_figure_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/figure/figure.component */ 3203);
/* harmony import */ var _components_running_code_example_running_code_example_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/running-code-example/running-code-example.component */ 7702);










class ConceptsRequirementsComponent extends src_app_models_abstract_slide__WEBPACK_IMPORTED_MODULE_1__.AbstractSlide {
    constructor() {
        super();
        this.max = 11;
        this.code = `robot PresentationRobot {
    ...

    _highlight8_ requirement Line.both_lines disables forward _/highlight_
    _highlight9_ requirement forward needs Distance.safe _/highlight_

    _highlight10_ requirement stop needs Line.both_lines or Distance.unsafe _/highlight_

    ...
}`;
    }
    ngOnInit() {
    }
}
ConceptsRequirementsComponent.ɵfac = function ConceptsRequirementsComponent_Factory(t) { return new (t || ConceptsRequirementsComponent)(); };
ConceptsRequirementsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: ConceptsRequirementsComponent, selectors: [["app-concepts-requirements"]], viewQuery: function ConceptsRequirementsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](src_app_components_slide_slide_component__WEBPACK_IMPORTED_MODULE_0__.SlideComponent, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.slide = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵInheritDefinitionFeature"]], decls: 36, vars: 18, consts: [["label", "Requirements"], [3, "code", "start", "end", "current"], [3, "current", "step"], [1, "emphasize"], ["caption", "Partial and simplified of the metamodel of requirements."], ["src", "/assets/concepts-requirements.svg", "width", "100%", 1, "image"]], template: function ConceptsRequirementsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "app-slide");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "app-title", 0)(2, "app-running-code-example", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "app-two-column-layout")(4, "app-list")(5, "app-list-item", 2)(6, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7, "Restrict");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8, " communication from controller to middleware");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "app-list-item", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10, " Two types of requirements ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "app-list")(12, "app-list-item", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13, "Conditions that ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15, "need");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](16, " to hold for communication to take place");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "app-list-item", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](18, "Conditions that ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](20, "disable");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](21, " communication if they hold");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "app-list-item", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](23, " Examples ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "app-list")(25, "app-list-item", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](26, "Require component to be in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](27, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](28, "state");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](29, "app-list-item", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](30, "Require variable to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](31, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](32, "equal");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](33, " a specific value");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](34, "app-figure", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](35, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("code", ctx.code)("start", 8)("end", 11)("current", ctx.step);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("current", ctx.step)("step", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("current", ctx.step)("step", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("current", ctx.step)("step", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("current", ctx.step)("step", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("current", ctx.step)("step", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("current", ctx.step)("step", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("current", ctx.step)("step", 7);
    } }, dependencies: [src_app_components_slide_slide_component__WEBPACK_IMPORTED_MODULE_0__.SlideComponent, _components_title_title_component__WEBPACK_IMPORTED_MODULE_2__.TitleComponent, _components_list_list_component__WEBPACK_IMPORTED_MODULE_3__.ListComponent, _components_list_item_list_item_component__WEBPACK_IMPORTED_MODULE_4__.ListItemComponent, _components_two_column_layout_two_column_layout_component__WEBPACK_IMPORTED_MODULE_5__.TwoColumnLayoutComponent, _components_figure_figure_component__WEBPACK_IMPORTED_MODULE_6__.FigureComponent, _components_running_code_example_running_code_example_component__WEBPACK_IMPORTED_MODULE_7__.RunningCodeExampleComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb25jZXB0cy1yZXF1aXJlbWVudHMuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 3718:
/*!***************************************************************************************!*\
  !*** ./src/app/slides/conclusion-contributions/conclusion-contributions.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConclusionContributionsComponent": () => (/* binding */ ConclusionContributionsComponent)
/* harmony export */ });
/* harmony import */ var src_app_components_slide_slide_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/slide/slide.component */ 2459);
/* harmony import */ var src_app_models_abstract_slide__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/abstract-slide */ 5726);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _components_title_title_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/title/title.component */ 9527);
/* harmony import */ var _components_list_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/list/list.component */ 7309);
/* harmony import */ var _components_list_item_list_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/list-item/list-item.component */ 1616);
/* harmony import */ var _components_two_column_layout_two_column_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/two-column-layout/two-column-layout.component */ 4013);








class ConclusionContributionsComponent extends src_app_models_abstract_slide__WEBPACK_IMPORTED_MODULE_1__.AbstractSlide {
    constructor() {
        super();
        this.max = 8;
    }
    ngOnInit() {
    }
}
ConclusionContributionsComponent.ɵfac = function ConclusionContributionsComponent_Factory(t) { return new (t || ConclusionContributionsComponent)(); };
ConclusionContributionsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: ConclusionContributionsComponent, selectors: [["app-conclusion-contributions"]], viewQuery: function ConclusionContributionsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](src_app_components_slide_slide_component__WEBPACK_IMPORTED_MODULE_0__.SlideComponent, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.slide = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]], decls: 38, vars: 16, consts: [["label", "Contributions"], [3, "current", "step"], [1, "emphasize"], ["href", "https://github.com/bartwesselink/robosc"]], template: function ConclusionContributionsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "app-slide");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "app-title", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "app-two-column-layout")(3, "app-list")(4, "app-list-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, " Presented ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "RoboSC");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "app-list")(9, "app-list-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "Domain-Specific Language");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "app-list-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, "Stimulate use of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "supervisory controllers");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, " for ROS-based applications");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "app-list-item", 1)(17, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, "Safe");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, " development of robotic software");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "app-list-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21, "Live ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23, "visualization");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24, " tools for easier debugging");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "app-list-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26, "Use as a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](28, "supervisory layer");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "app-list-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](30, "Evaluated using ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](32, "8 scenarios");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](33, "app-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "app-list-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](35, "All code is available on GitHub: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](36, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](37, "https://github.com/bartwesselink/robosc");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("current", ctx.step)("step", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("current", ctx.step)("step", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("current", ctx.step)("step", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("current", ctx.step)("step", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("current", ctx.step)("step", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("current", ctx.step)("step", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("current", ctx.step)("step", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("current", ctx.step)("step", 8);
    } }, dependencies: [src_app_components_slide_slide_component__WEBPACK_IMPORTED_MODULE_0__.SlideComponent, _components_title_title_component__WEBPACK_IMPORTED_MODULE_2__.TitleComponent, _components_list_list_component__WEBPACK_IMPORTED_MODULE_3__.ListComponent, _components_list_item_list_item_component__WEBPACK_IMPORTED_MODULE_4__.ListItemComponent, _components_two_column_layout_two_column_layout_component__WEBPACK_IMPORTED_MODULE_5__.TwoColumnLayoutComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb25jbHVzaW9uLWNvbnRyaWJ1dGlvbnMuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 5648:
/*!***********************************************************************!*\
  !*** ./src/app/slides/conclusion-video/conclusion-video.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConclusionVideoComponent": () => (/* binding */ ConclusionVideoComponent)
/* harmony export */ });
/* harmony import */ var src_app_components_slide_slide_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/slide/slide.component */ 2459);
/* harmony import */ var src_app_models_abstract_slide__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/abstract-slide */ 5726);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _components_title_title_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/title/title.component */ 9527);





const _c0 = ["video"];
class ConclusionVideoComponent extends src_app_models_abstract_slide__WEBPACK_IMPORTED_MODULE_1__.AbstractSlide {
    constructor() {
        super();
        this.max = 1;
    }
    ngOnInit() {
    }
    next() {
        super.next();
        this.video.nativeElement.play().then(v => console.log('info', v));
    }
}
ConclusionVideoComponent.ɵfac = function ConclusionVideoComponent_Factory(t) { return new (t || ConclusionVideoComponent)(); };
ConclusionVideoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ConclusionVideoComponent, selectors: [["app-conclusion-video"]], viewQuery: function ConclusionVideoComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](src_app_components_slide_slide_component__WEBPACK_IMPORTED_MODULE_0__.SlideComponent, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.slide = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.video = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], decls: 6, vars: 0, consts: [["label", "Video"], [1, "video-wrapper"], ["width", "1280", "height", "720", "controls", ""], ["video", ""], ["src", "/assets/demonstration-video.mp4", "type", "video/mp4"]], template: function ConclusionVideoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "app-slide");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-title", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 1)(3, "video", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "source", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    } }, dependencies: [src_app_components_slide_slide_component__WEBPACK_IMPORTED_MODULE_0__.SlideComponent, _components_title_title_component__WEBPACK_IMPORTED_MODULE_2__.TitleComponent], styles: [".video-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmNsdXNpb24tdmlkZW8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUNGIiwiZmlsZSI6ImNvbmNsdXNpb24tdmlkZW8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudmlkZW8td3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuIl19 */"] });


/***/ }),

/***/ 9275:
/*!***************************************************!*\
  !*** ./src/app/slides/ending/ending.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EndingComponent": () => (/* binding */ EndingComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var ng_inline_svg_2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng-inline-svg-2 */ 8590);


class EndingComponent {
    constructor() { }
    ngOnInit() {
    }
}
EndingComponent.ɵfac = function EndingComponent_Factory(t) { return new (t || EndingComponent)(); };
EndingComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: EndingComponent, selectors: [["app-ending"]], decls: 6, vars: 0, consts: [[1, "slide"], ["inlineSVG", "/assets/logo.svg", 1, "logo"], [1, "title"], [1, "questions"]], template: function EndingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " End of the presentation. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Questions?");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } }, dependencies: [ng_inline_svg_2__WEBPACK_IMPORTED_MODULE_0__.InlineSVGDirective], styles: [".slide[_ngcontent-%COMP%] {\n  width: var(--width);\n  height: var(--height);\n  padding: 6rem 12rem;\n  color: var(--white);\n}\n\n.title[_ngcontent-%COMP%] {\n  font-size: 4rem;\n  margin-top: 18rem;\n}\n\n.questions[_ngcontent-%COMP%] {\n  opacity: 0.7;\n  font-size: 2.5rem;\n}\n\n.questions[_ngcontent-%COMP%] {\n  margin-top: 4rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVuZGluZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7QUFDRiIsImZpbGUiOiJlbmRpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2xpZGUge1xuICB3aWR0aDogdmFyKC0td2lkdGgpO1xuICBoZWlnaHQ6IHZhcigtLWhlaWdodCk7XG4gIHBhZGRpbmc6IDZyZW0gMTJyZW07XG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG59XG5cbi50aXRsZSB7XG4gIGZvbnQtc2l6ZTogNHJlbTtcbiAgbWFyZ2luLXRvcDogMThyZW07XG59XG5cbi5xdWVzdGlvbnMge1xuICBvcGFjaXR5OiAwLjc7XG4gIGZvbnQtc2l6ZTogMi41cmVtO1xufVxuXG4ucXVlc3Rpb25zIHtcbiAgbWFyZ2luLXRvcDogNHJlbTtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ 2463:
/*!***************************************************************************************!*\
  !*** ./src/app/slides/evaluation-lines-of-code/evaluation-lines-of-code.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EvaluationLinesOfCodeComponent": () => (/* binding */ EvaluationLinesOfCodeComponent)
/* harmony export */ });
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-charts */ 3808);
/* harmony import */ var src_app_components_slide_slide_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/slide/slide.component */ 2459);
/* harmony import */ var src_app_models_abstract_slide__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/abstract-slide */ 5726);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _components_title_title_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/title/title.component */ 9527);
/* harmony import */ var _components_list_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/list/list.component */ 7309);
/* harmony import */ var _components_list_item_list_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/list-item/list-item.component */ 1616);
/* harmony import */ var _components_two_column_layout_two_column_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/two-column-layout/two-column-layout.component */ 4013);
/* harmony import */ var _components_figure_figure_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/figure/figure.component */ 3203);











class EvaluationLinesOfCodeComponent extends src_app_models_abstract_slide__WEBPACK_IMPORTED_MODULE_1__.AbstractSlide {
    constructor() {
        super();
        this.max = 7;
        this.barChartLegend = true;
        this.barChartPlugins = [];
        this.barChartData = {
            labels: ['Line Follower (controller)', 'Line Follower (supervised)', 'Maze Solver', 'Object Finder', 'Obstacle Navigation', 'Person Follower', 'Push Ball into Goal', 'Simple Navigation'],
            datasets: [
                { barPercentage: undefined, barThickness: 15, data: [0, 0, 0, 0, 0, 0, 0, 0], label: 'DSL', backgroundColor: '#e74c3c', borderRadius: 5 },
                { barPercentage: undefined, barThickness: 15, data: [0, 0, 0, 0, 0, 0, 0, 0], label: 'CIF', backgroundColor: '#3498db', borderRadius: 5 },
                { barPercentage: undefined, barThickness: 15, data: [0, 0, 0, 0, 0, 0, 0, 0], label: 'ROS1', backgroundColor: '#f1c40f', borderRadius: 5 },
                { barPercentage: undefined, barThickness: 15, data: [0, 0, 0, 0, 0, 0, 0, 0], label: 'ROS2', backgroundColor: '#2ecc71', borderRadius: 5 },
            ],
        };
        this.barChartOptions = {
            responsive: false,
            indexAxis: 'y',
            font: {
                family: '"Fira Sans", sans-serif',
            },
            hover: { mode: null },
            plugins: {
                tooltip: {
                    enabled: false,
                },
                legend: {
                    labels: {
                        font: {
                            family: '"Fira Sans", sans-serif',
                        }
                    }
                }
            },
            scales: {
                x: {
                    min: 0,
                    max: 1600,
                    grid: {
                        display: false
                    },
                    ticks: {
                        font: {
                            family: '"Fira Sans", sans-serif',
                            size: 14,
                        },
                    },
                },
                y: {
                    grid: {
                        display: false
                    },
                    ticks: {
                        font: {
                            family: '"Fira Sans", sans-serif',
                            size: 14,
                        },
                    },
                }
            }
        };
    }
    ngOnInit() {
    }
    next() {
        super.next();
        this.checkStep();
    }
    prev() {
        super.prev();
        this.checkStep();
    }
    checkStep() {
        const allData = [
            [23, 36, 74, 90, 59, 60, 87, 59],
            [102, 87, 190, 239, 127, 130, 303, 127],
            [1245, 0, 1292, 1371, 1161, 1160, 1414, 1161],
            [1243, 1222, 1287, 1367, 1157, 1156, 1409, 1157],
        ];
        const empty = [0, 0, 0, 0, 0, 0, 0, 0];
        if (this.step === 1) {
            this.barChartData.datasets[0].data = allData[0];
            this.barChartData.datasets[1].data = [...empty];
            this.chart.update();
        }
        else if (this.step === 2) {
            this.barChartData.datasets[1].data = allData[1];
            this.barChartData.datasets[2].data = [...empty];
            this.chart.update();
        }
        else if (this.step === 3) {
            this.barChartData.datasets[2].data = allData[2];
            this.barChartData.datasets[3].data = [...empty];
            this.chart.update();
        }
        else if (this.step === 4) {
            this.barChartData.datasets[3].data = allData[3];
            this.chart.update();
        }
        else if (this.step === 0) {
            this.barChartData.datasets[0].data = [...empty];
            this.chart.update();
        }
    }
}
EvaluationLinesOfCodeComponent.ɵfac = function EvaluationLinesOfCodeComponent_Factory(t) { return new (t || EvaluationLinesOfCodeComponent)(); };
EvaluationLinesOfCodeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: EvaluationLinesOfCodeComponent, selectors: [["app-evaluation-lines-of-code"]], viewQuery: function EvaluationLinesOfCodeComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](src_app_components_slide_slide_component__WEBPACK_IMPORTED_MODULE_0__.SlideComponent, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](ng2_charts__WEBPACK_IMPORTED_MODULE_8__.BaseChartDirective, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.slide = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.chart = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]], decls: 31, vars: 18, consts: [["label", "Generated lines"], [3, "current", "step"], [1, "emphasize"], ["caption", "Generated source lines of code for all of the scenarios."], ["baseChart", "", "width", "650", "height", "700", "type", "bar", 3, "data", "options", "plugins", "legend"]], template: function EvaluationLinesOfCodeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "app-slide");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "app-title", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "app-two-column-layout")(3, "app-list")(4, "app-list-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, " Evaluated ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "ratio");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, " between DSL lines of code and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "app-list")(10, "app-list-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, "Lines of CIF code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "app-list-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13, "Lines of ROS1 code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "app-list-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15, "Lines of ROS2 code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "app-list-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17, "About 2-3 times ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19, "more");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](20, " CIF-code generated");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "app-list-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](22, " About 20 times ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](24, "more");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](25, " ROS-code generated ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "app-list")(27, "app-list-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](28, "Includes CIF-controller code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "app-figure", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](30, "canvas", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("current", ctx.step)("step", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("current", ctx.step)("step", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("current", ctx.step)("step", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("current", ctx.step)("step", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("current", ctx.step)("step", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("current", ctx.step)("step", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("current", ctx.step)("step", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("data", ctx.barChartData)("options", ctx.barChartOptions)("plugins", ctx.barChartPlugins)("legend", ctx.barChartLegend);
    } }, dependencies: [ng2_charts__WEBPACK_IMPORTED_MODULE_8__.BaseChartDirective, src_app_components_slide_slide_component__WEBPACK_IMPORTED_MODULE_0__.SlideComponent, _components_title_title_component__WEBPACK_IMPORTED_MODULE_2__.TitleComponent, _components_list_list_component__WEBPACK_IMPORTED_MODULE_3__.ListComponent, _components_list_item_list_item_component__WEBPACK_IMPORTED_MODULE_4__.ListItemComponent, _components_two_column_layout_two_column_layout_component__WEBPACK_IMPORTED_MODULE_5__.TwoColumnLayoutComponent, _components_figure_figure_component__WEBPACK_IMPORTED_MODULE_6__.FigureComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJldmFsdWF0aW9uLWxpbmVzLW9mLWNvZGUuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 1488:
/*!*******************************************************************************!*\
  !*** ./src/app/slides/evaluation-scenarios/evaluation-scenarios.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EvaluationScenariosComponent": () => (/* binding */ EvaluationScenariosComponent)
/* harmony export */ });
/* harmony import */ var src_app_components_slide_slide_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/slide/slide.component */ 2459);
/* harmony import */ var src_app_models_abstract_slide__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/abstract-slide */ 5726);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _components_title_title_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/title/title.component */ 9527);
/* harmony import */ var _components_list_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/list/list.component */ 7309);
/* harmony import */ var _components_list_item_list_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/list-item/list-item.component */ 1616);
/* harmony import */ var _components_two_column_layout_two_column_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/two-column-layout/two-column-layout.component */ 4013);
/* harmony import */ var _components_figure_figure_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/figure/figure.component */ 3203);









class EvaluationScenariosComponent extends src_app_models_abstract_slide__WEBPACK_IMPORTED_MODULE_1__.AbstractSlide {
    constructor() {
        super();
        this.max = 10;
    }
    ngOnInit() {
    }
}
EvaluationScenariosComponent.ɵfac = function EvaluationScenariosComponent_Factory(t) { return new (t || EvaluationScenariosComponent)(); };
EvaluationScenariosComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: EvaluationScenariosComponent, selectors: [["app-evaluation-scenarios"]], viewQuery: function EvaluationScenariosComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](src_app_components_slide_slide_component__WEBPACK_IMPORTED_MODULE_0__.SlideComponent, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.slide = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]], decls: 31, vars: 22, consts: [["label", "Scenarios"], [3, "current", "step"], [1, "emphasize"], ["caption", "Screenshots of the simulations of all scenarios.", 3, "current", "step"], ["src", "/assets/simulation-scenarios.png", "width", "80%", 1, "image"]], template: function EvaluationScenariosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "app-slide");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "app-title", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "app-two-column-layout")(3, "app-list")(4, "app-list-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, " Different ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "scenarios");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "app-list")(9, "app-list-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, "Line follower");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "app-list-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, "Simple navigation");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "app-list-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14, "Obstacle navigation");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "app-list-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16, "Object finder");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "app-list-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18, "Maze solver");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "app-list-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](20, "Push ball into goal");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "app-list-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](22, "Person follower");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "app-list-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](24, "Line follower (supervisor)");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "app-list-item", 1)(26, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](27, "Measure");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](28, " memory, build time, execution time and generated lines");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "app-figure", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](30, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("current", ctx.step)("step", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("current", ctx.step)("step", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("current", ctx.step)("step", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("current", ctx.step)("step", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("current", ctx.step)("step", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("current", ctx.step)("step", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("current", ctx.step)("step", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("current", ctx.step)("step", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("current", ctx.step)("step", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("current", ctx.step)("step", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("current", ctx.step)("step", 1);
    } }, dependencies: [src_app_components_slide_slide_component__WEBPACK_IMPORTED_MODULE_0__.SlideComponent, _components_title_title_component__WEBPACK_IMPORTED_MODULE_2__.TitleComponent, _components_list_list_component__WEBPACK_IMPORTED_MODULE_3__.ListComponent, _components_list_item_list_item_component__WEBPACK_IMPORTED_MODULE_4__.ListItemComponent, _components_two_column_layout_two_column_layout_component__WEBPACK_IMPORTED_MODULE_5__.TwoColumnLayoutComponent, _components_figure_figure_component__WEBPACK_IMPORTED_MODULE_6__.FigureComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJldmFsdWF0aW9uLXNjZW5hcmlvcy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 2564:
/*!*******************************************************************************************************!*\
  !*** ./src/app/slides/introduction-demonstration-robot/introduction-demonstration-robot.component.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IntroductionDemonstrationRobotComponent": () => (/* binding */ IntroductionDemonstrationRobotComponent)
/* harmony export */ });
/* harmony import */ var src_app_components_slide_slide_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/slide/slide.component */ 2459);
/* harmony import */ var src_app_models_abstract_slide__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/abstract-slide */ 5726);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _components_title_title_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/title/title.component */ 9527);
/* harmony import */ var _components_list_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/list/list.component */ 7309);
/* harmony import */ var _components_list_item_list_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/list-item/list-item.component */ 1616);
/* harmony import */ var _components_two_column_layout_two_column_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/two-column-layout/two-column-layout.component */ 4013);
/* harmony import */ var _components_figure_figure_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/figure/figure.component */ 3203);









class IntroductionDemonstrationRobotComponent extends src_app_models_abstract_slide__WEBPACK_IMPORTED_MODULE_1__.AbstractSlide {
    constructor() {
        super();
        this.max = 9;
    }
    ngOnInit() {
    }
}
IntroductionDemonstrationRobotComponent.ɵfac = function IntroductionDemonstrationRobotComponent_Factory(t) { return new (t || IntroductionDemonstrationRobotComponent)(); };
IntroductionDemonstrationRobotComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: IntroductionDemonstrationRobotComponent, selectors: [["app-introduction-demonstration-robot"]], viewQuery: function IntroductionDemonstrationRobotComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](src_app_components_slide_slide_component__WEBPACK_IMPORTED_MODULE_0__.SlideComponent, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.slide = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]], decls: 101, vars: 24, consts: [["label", "Presentation robot"], [3, "current", "step"], [1, "emphasize"], ["caption", "Visual representation of robot scenario.", 3, "current", "step"], ["xmlns", "http://www.w3.org/2000/svg", "width", "270", "height", "395", "viewBox", "0 0 270 395", 2, "overflow", "visible"], ["fill", "none", "fill-rule", "evenodd", "transform", "translate(0 6.683)"], ["stroke", "#7F7F7F", "stroke-width", "10", "d", "M128,0.316718413 C156.005025,-4.66970567 193.673452,50.201924 220.674442,95.9149207 C247.675431,141.627917 265,150.05259 265,191.316718 C265,248.003741 198.737072,202.581024 170.606279,237.561141 C146.389717,267.673986 163.002686,382.316718 128,382.316718 C52.3369893,382.316718 59.1596399,296.473985 85.0987058,212.913366 C111.037772,129.352747 -101.173661,41.1221473 128,0.316718413 Z", 1, "opacity-transition"], ["transform", "translate(0 64.317)", 1, "opacity-transition"], ["fill", "#939BA5", "d", "M58,3.51330623 C58,5.43898436 56.6570753,7 54.9998241,7 C53.3432179,7 52,5.43898436 52,3.51330623 C52,1.58768889 53.3432179,0.0266124591 54.9998241,0.0266124591 C55.2543347,0.0266124591 56.408429,-0.0369101788 56.6441738,0.0323264572 C57.9448756,0.414070157 58,1.88317553 58,3.51330623"], ["fill", "#A6AFBC", "d", "M60,3.5 C60,5.43302708 58.6570884,7 56.9998534,7 C55.3432048,7 54,5.43302708 54,3.5 C54,1.56703394 55.3432048,0 56.9998534,0 C58.6570884,0 60,1.56703394 60,3.5"], ["fill", "#EA3624", "d", "M59,3.49997117 C59,4.88075109 57.8803367,6 56.5003007,6 C55.1196633,6 54,4.88075109 54,3.49997117 C54,2.11930658 55.1196633,1 56.5003007,1 C57.8803367,1 59,2.11930658 59,3.49997117"], ["fill", "#E85F54", "d", "M56.9864699,1 C55.9864699,1 55.1568266,1.81896752 55,2.89218186 C55.3493235,2.56634326 55.797663,2.37031028 56.2865929,2.37031028 C57.398524,2.37031028 58.300123,3.38252922 58.300123,4.63124607 C58.300123,4.75687937 58.2908979,4.8799298 58.2730627,5 C58.7170972,4.58528428 59,3.96023047 59,3.26093579 C59,2.01228518 58.098401,1 56.9864699,1"], ["fill", "#8E1C17", "d", "M56.8528753,5.49439716 C55.4245706,5.49439716 54.2657456,4.34522981 54.2657456,2.92759973 C54.2657456,2.60039967 54.3286034,2.28782474 54.4406273,2 C54.1624347,2.40932573 54,2.90237584 54,3.43314336 C54,4.85077344 55.158825,6 56.5877521,6 C57.686831,6 58.6247199,5.31972467 59,4.3607431 C58.5351008,5.0446303 57.7471994,5.49439716 56.8528753,5.49439716"], ["fill", "#F4AFAA", "d", "M57.722189,3 C57.7215518,3 57.7209146,3 57.7196401,2.99993099 C57.5832751,2.99827473 57.4864177,2.85866602 57.417598,2.73051309 C57.3048101,2.52044443 57.2054039,2.30064525 57.0703133,2.10679411 C56.9071851,1.87236465 56.703912,1.71412305 56.4381914,1.65263448 C56.2718771,1.61440254 55.9570906,1.58024223 56.0048821,1.31744936 C56.0380175,1.13850454 56.2533978,1.01628653 56.405056,1.00262241 C56.4248098,1.00082813 56.4445636,1 56.4643175,1 C56.8957151,1 57.3685321,1.41019979 57.6342527,1.72985749 C57.8426235,1.97967634 58.0204078,2.29346813 57.9981051,2.62899831 C57.9866351,2.80352645 57.8834056,3 57.722189,3"], ["fill", "#939BA5", "d", "M13,3.51330623 C13,5.43898436 11.656867,7 10,7 C8.34313304,7 7,5.43898436 7,3.51330623 C7,1.58768889 8.34313304,0.0266124591 10,0.0266124591 C10.2543297,0.0266124591 11.4083428,-0.0369101788 11.644083,0.0323264572 C12.9445834,0.414070157 13,1.88317553 13,3.51330623"], ["fill", "#A6AFBC", "d", "M15,3.5 C15,5.43302708 13.6568214,7 11.9999707,7 C10.3431786,7 9,5.43302708 9,3.5 C9,1.56703394 10.3431786,0 11.9999707,0 C13.6568214,0 15,1.56703394 15,3.5"], ["fill", "#C1ADA3", "points", "5.981 12 25 12 23.866 23 4 23 5.981 12"], ["fill", "#E0C9BA", "points", "6 12 5.064 12.284 3 23 3.896 23 6 12"], ["fill", "#C1ADA3", "points", "2.981 32 22 32 20.866 43 1 43 2.981 32"], ["fill", "#A6AFBC", "points", "3 50 7.359 50 13 10 8.499 10 3 50"], ["fill", "#A6AFBC", "points", "9 6 15.844 50 21 50 13.236 6 9 6"], ["fill", "#939BA5", "points", "9.126 6 8 6 14.049 50 16 50 9.126 6"], ["fill", "#939BA5", "points", "8.093 6 2 50 3.522 50 9 8.018 8.093 6"], ["fill", "#A6AFBC", "points", "48 50 52.359 50 58 10 53.499 10 48 50"], ["fill", "#A6AFBC", "points", "54 6 60.844 50 66 50 58.236 6 54 6"], ["fill", "#939BA5", "points", "54.126 6 53 6 59.049 50 61 50 54.126 6"], ["fill", "#939BA5", "points", "53.093 6 47 50 48.523 50 54 8.018 53.093 6"], ["fill", "#E0C9BA", "points", "64.507 23 9.999 23 8 11.823 8.493 11 62.507 11.823 65 22.177 64.507 23"], ["fill", "#FFE5D2", "points", "64 22 9.981 22 8 11 62.019 11 64 22"], ["fill", "#EA3624", "points", "17.355 22 10 22 15.645 11 23 11 17.355 22"], ["fill", "#EA3624", "points", "30.355 22 23 22 28.645 11 36 11 30.355 22"], ["fill", "#EA3624", "points", "43.355 22 36 22 41.645 11 49 11 43.355 22"], ["fill", "#EA3624", "points", "56.355 22 49 22 54.644 11 62 11 56.355 22"], ["fill", "#E0C9BA", "points", "66.507 43 11.999 43 10 31.823 10.493 31 64.508 31.823 67 42.177 66.507 43"], ["fill", "#FFE5D2", "points", "67 42 12.981 42 11 31 65.019 31 67 42"], ["fill", "#EA3624", "points", "20.355 42 13 42 18.645 31 26 31 20.355 42"], ["fill", "#EA3624", "points", "33.355 42 26 42 31.645 31 39 31 33.355 42"], ["fill", "#EA3624", "points", "46.355 42 39 42 44.645 31 52 31 46.355 42"], ["fill", "#EA3624", "points", "59.355 42 52 42 57.645 31 65 31 59.355 42"], ["fill", "#E0C9BA", "points", "3 32 2.064 32.284 0 43 .896 43 3 32"], ["fill", "#EA3624", "d", "M14,3.49997117 C14,4.88069342 12.8806904,6 11.5000301,6 C10.1193096,6 9,4.88069342 9,3.49997117 C9,2.11930658 10.1193096,1 11.5000301,1 C12.8806904,1 14,2.11930658 14,3.49997117"], ["fill", "#E85F54", "d", "M11.9864694,1 C10.9863157,1 10.1568929,1.81896752 10,2.89218186 C10.3489037,2.56640948 10.7973185,2.37031028 11.2865709,2.37031028 C12.3986592,2.37031028 13.3001015,3.38252922 13.3001015,4.63124607 C13.3001015,4.75687937 13.2905686,4.8799298 13.2729789,5 C13.71715,4.58528428 14,3.96023047 14,3.26093579 C14,2.01228518 13.0984963,1 11.9864694,1"], ["fill", "#8E1C17", "d", "M11.8531506,5.49439716 C10.4241168,5.49439716 9.26570319,4.34522981 9.26570319,2.92759973 C9.26570319,2.60039967 9.32806782,2.28782474 9.440598,2 C9.16238454,2.40932573 9,2.90237584 9,3.43314336 C9,4.85077344 10.1584136,6 11.5874474,6 C12.6866084,6 13.6250654,5.31972467 14,4.3607431 C13.5351906,5.0446303 12.7471681,5.49439716 11.8531506,5.49439716"], ["fill", "#F4AFAA", "d", "M12.7224764,3 C12.7216479,3 12.7207556,3 12.7199271,3 C12.5830959,2.99827471 12.4863517,2.85866601 12.4176493,2.73058209 C12.3049723,2.52044442 12.2057426,2.30064524 12.0705684,2.1067941 C11.9070975,1.87236464 11.7041769,1.71412304 11.437971,1.65270349 C11.2720146,1.61440253 10.9569268,1.58024222 11.0049165,1.31744936 C11.0376107,1.13850454 11.2531501,1.01628653 11.4052131,1.00262241 C11.4247149,1.00082813 11.4442804,1 11.4640372,1 C11.8956896,1 12.368385,1.41019978 12.6345908,1.72985749 C12.84261,1.97967633 13.0203567,2.29346812 12.9981144,2.62899829 C12.9865791,2.80352643 12.883398,3.00006899 12.7224764,3"], ["fill", "#7E858C", "points", "13 43 19.882 43 20 43.634 15.151 43.827 13.307 45 13 43"], ["fill", "#7E858C", "points", "10 23 15.886 23 16 23.661 11.648 23.868 10.283 25 10 23"], ["fill", "#7E858C", "points", "56 23 61.886 23 62 23.661 57.648 23.868 56.283 25 56 23"], ["fill", "#7E858C", "points", "58 43 64.881 43 65 43.64 60.153 43.841 58.306 45 58 43"], ["transform", "translate(101.702 114.512)"], [1, "prepare-corner-animation"], ["fill", "#18120E", "d", "M33.6,132.462 C33.6,143.491 39.859,151.848 54.658,152.433 C89.03,153.791 75.716,143.491 75.716,132.462 C75.716,121.432 66.27,113.13 54.658,112.491 C39.849,111.675 33.6,121.432 33.6,132.462"], ["fill", "#4C5355", "d", "M45.012,132.462 C45.012,143.491 54.866,152.433 67.021,152.433 C79.176,152.433 89.03,143.491 89.03,132.462 C89.03,121.432 79.176,112.491 67.021,112.491 C54.866,112.491 45.012,121.432 45.012,132.462"], ["fill", "#18120E", "d", "M55.337,132.326 C55.337,138.862 61.176,144.161 68.38,144.161 C75.583,144.161 81.422,138.862 81.422,132.326 C81.422,125.79 75.583,120.491 68.38,120.491 C61.176,120.491 55.337,125.79 55.337,132.326"], ["fill", "#344046", "d", "M63.489,132.411 C63.489,134.999 65.8,137.096 68.651,137.096 C71.502,137.096 73.814,134.999 73.814,132.411 C73.814,129.824 71.502,127.727 68.651,127.727 C65.8,127.727 63.489,129.824 63.489,132.411"], ["fill", "#6FB744", "d", "M28.673,28.938 C28.673,44.92 44.191,57.876 63.335,57.876 C82.478,57.876 97.997,44.92 97.997,28.938 C97.997,12.956 82.478,-1.42108547e-14 63.335,-1.42108547e-14 C44.191,-1.42108547e-14 28.673,12.956 28.673,28.938"], ["fill", "#4A5F70", "d", "M97.997,28.938 C97.997,44.923 82.476,57.876 63.337,57.876 C61.674,57.876 60.043,57.778 58.446,57.582 C41.613,55.61 28.677,43.537 28.677,28.938 C28.677,14.339 41.613,2.267 58.446,0.294 C60.043,0.098 61.674,-1.42108547e-14 63.337,-1.42108547e-14 C82.476,-1.42108547e-14 97.997,12.953 97.997,28.938"], ["fill", "#8E9EAA", "d", "M88.215,28.938 C88.215,43.537 75.27,55.61 58.446,57.582 C41.613,55.61 28.677,43.537 28.677,28.938 C28.677,14.339 41.613,2.267 58.446,0.294 C75.27,2.267 88.215,14.339 88.215,28.938"], ["fill", "#18120E", "d", "M24.606,69.448 C24.84,70.456 24.975,71.502 24.975,72.58 C24.975,80.244 18.74,86.479 11.076,86.479 L11.076,94.061 C22.921,94.061 32.557,84.425 32.557,72.58 C32.557,71.516 32.476,70.471 32.326,69.448 L24.606,69.448"], ["fill", "#18120E", "d", "M13.291 90.061C13.291 97.39 7.329 103.353-3.73034936e-13 103.353L-3.73034936e-13 98.662C4.742 98.662 8.6 94.803 8.6 90.061 8.6 85.319 4.742 81.461-3.73034936e-13 81.461L-3.73034936e-13 76.77C7.329 76.77 13.291 82.732 13.291 90.061M18.829 70.124C18.829 76.038 23.623 80.831 29.536 80.831 35.449 80.831 40.243 76.038 40.243 70.124 40.243 64.211 35.449 59.418 29.536 59.418 23.623 59.418 18.829 64.211 18.829 70.124"], ["fill", "#EB8D2D", "d", "M32.236,106.264 C32.899,106.264 35.53,105.008 34.095,105.008 C33.432,105.008 30.8,106.264 32.236,106.264"], ["fill", "#4A5F70", "d", "M89.479,111.182 L67.13,111.182 C61.81,111.182 56.702,106.781 55.779,101.401 L50.268,69.276 C49.345,63.896 52.943,59.494 58.263,59.494 L80.612,59.494 C85.932,59.494 91.04,63.896 91.963,69.276 L97.474,101.401 C98.397,106.781 94.799,111.182 89.479,111.182"], ["fill", "#8E9EAA", "d", "M62.635,111.182 L31.473,111.182 C28.577,111.182 27.121,107.252 28.238,102.448 L36.025,68.967 C37.142,64.163 40.427,60.233 43.323,60.233 L74.485,60.233 C77.381,60.233 78.837,64.163 77.72,68.967 L69.933,102.448 C68.815,107.252 65.531,111.182 62.635,111.182"], ["fill", "#18120E", "d", "M59.129,101.933 L39.281,101.933 C37.436,101.933 36.509,99.43 37.221,96.37 L42.181,75.045 C42.892,71.985 44.984,69.482 46.829,69.482 L66.676,69.482 C68.521,69.482 69.449,71.985 68.737,75.045 L63.777,96.37 C63.066,99.43 60.974,101.933 59.129,101.933"], ["fill", "#EB8D2D", "d", "M41.192 97.654L39.363 97.654C39.193 97.654 39.585 95.858 40.234 93.664L44.757 78.372C45.406 76.178 46.076 74.382 46.246 74.382L48.075 74.382C48.245 74.382 47.853 76.178 47.204 78.372L42.681 93.664C42.032 95.858 41.362 97.654 41.192 97.654M46.898 97.654L45.069 97.654C44.899 97.654 45.291 95.858 45.94 93.664L50.463 78.372C51.112 76.178 51.782 74.382 51.952 74.382L53.781 74.382C53.951 74.382 53.559 76.178 52.91 78.372L48.387 93.664C47.738 95.858 47.068 97.654 46.898 97.654M52.604 97.654L50.775 97.654C50.605 97.654 50.997 95.858 51.646 93.664L56.169 78.372C56.818 76.178 57.488 74.382 57.658 74.382L59.487 74.382C59.657 74.382 59.265 76.178 58.616 78.372L54.093 93.664C53.444 95.858 52.774 97.654 52.604 97.654M58.31 97.654L56.481 97.654C56.311 97.654 56.703 95.858 57.352 93.664L61.875 78.372C62.524 76.178 63.194 74.382 63.364 74.382L65.193 74.382C65.363 74.382 64.971 76.178 64.322 78.372L59.799 93.664C59.15 95.858 58.48 97.654 58.31 97.654"], ["fill", "#18120E", "d", "M88.073 60.233L39.223 60.233C37.396 60.233 35.901 58.737 35.901 56.91 35.901 55.082 37.396 53.587 39.223 53.587L88.073 53.587C89.901 53.587 91.396 55.082 91.396 56.91 91.396 58.737 89.901 60.233 88.073 60.233M93.859 116.275L29.586 116.275C27.759 116.275 26.264 114.779 26.264 112.952 26.264 111.124 27.759 109.629 29.586 109.629L93.859 109.629C95.686 109.629 97.181 111.124 97.181 112.952 97.181 114.779 95.686 116.275 93.859 116.275M67.143 41.034L44.089 41.034C36.372 41.034 30.059 34.721 30.059 27.005 30.059 19.288 36.372 12.975 44.089 12.975L67.143 12.975C74.86 12.975 81.173 19.288 81.173 27.005 81.173 34.721 74.86 41.034 67.143 41.034"], ["fill", "#FAFAF6", "points", "38.385 23.938 41.104 23.938 41.104 21.189 38.385 21.189"], ["fill", "#FAFAF6", "points", "43.698 23.938 46.417 23.938 46.417 21.189 43.698 21.189"], ["fill", "#FAFAF6", "points", "41.041 21.251 43.76 21.251 43.76 18.502 41.041 18.502"], ["fill", "#FAFAF6", "points", "41.041 26.624 43.76 26.624 43.76 23.875 41.041 23.875"], ["fill", "#FAFAF6", "points", "45.768 33.825 48.487 33.825 48.487 31.076 45.768 31.076"], ["fill", "#FAFAF6", "points", "48.415 36.502 51.134 36.502 51.134 33.752 48.415 33.752"], ["fill", "#FAFAF6", "points", "53.527 36.502 56.246 36.502 56.246 33.752 53.527 33.752"], ["fill", "#FAFAF6", "points", "58.638 36.502 61.357 36.502 61.357 33.752 58.638 33.752"], ["fill", "#FAFAF6", "points", "61.376 33.733 64.095 33.733 64.095 30.983 61.376 30.983"], ["fill", "#FAFAF6", "points", "64.977 23.938 67.696 23.938 67.696 21.189 64.977 21.189"], ["fill", "#FAFAF6", "points", "70.291 23.938 73.009 23.938 73.009 21.189 70.291 21.189"], ["fill", "#FAFAF6", "points", "67.634 21.251 70.353 21.251 70.353 18.502 67.634 18.502"], ["fill", "#FAFAF6", "points", "67.634 26.624 70.353 26.624 70.353 23.875 67.634 23.875"], ["fill", "#18120E", "d", "M95.19,69.448 C95.424,70.456 95.56,71.502 95.56,72.58 C95.56,80.244 89.324,86.479 81.66,86.479 L81.66,94.061 C93.505,94.061 103.141,84.425 103.141,72.58 C103.141,71.516 103.061,70.471 102.91,69.448 L95.19,69.448"], ["fill", "#18120E", "d", "M83.876 90.061C83.876 97.39 77.913 103.353 70.584 103.353L70.584 98.662C75.327 98.662 79.185 94.803 79.185 90.061 79.185 85.319 75.327 81.461 70.584 81.461L70.584 76.77C77.913 76.77 83.876 82.732 83.876 90.061M89.414 70.124C89.414 76.038 94.207 80.831 100.12 80.831 106.034 80.831 110.827 76.038 110.827 70.124 110.827 64.211 106.034 59.418 100.12 59.418 94.207 59.418 89.414 64.211 89.414 70.124"]], template: function IntroductionDemonstrationRobotComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "app-slide");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "app-title", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "app-two-column-layout")(3, "app-list")(4, "app-list-item", 1)(5, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, "Fictional");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, " robot used throughout presentation ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "app-list-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, "Used to explain concepts");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "app-list-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, " Task ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "app-list")(13, "app-list-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14, "Follow a (black) line");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "app-list-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16, "Stop when something is in front");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "app-list-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18, " Components ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "app-list")(20, "app-list-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21, "Line & distance sensor");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "app-list-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](23, "Two motors");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "app-figure", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "svg", 4)(26, "g", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](27, "path", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "g", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](29, "path", 8)(30, "path", 9)(31, "path", 10)(32, "path", 11)(33, "path", 12)(34, "path", 13)(35, "path", 14)(36, "path", 15)(37, "polyline", 16)(38, "polyline", 17)(39, "polyline", 18)(40, "polyline", 19)(41, "polyline", 20)(42, "polyline", 21)(43, "polyline", 22)(44, "polyline", 23)(45, "polyline", 24)(46, "polyline", 25)(47, "polyline", 26)(48, "polyline", 27)(49, "polyline", 28)(50, "polyline", 29)(51, "polyline", 30)(52, "polyline", 31)(53, "polyline", 32)(54, "polyline", 33)(55, "polyline", 34)(56, "polyline", 35)(57, "polyline", 36)(58, "polyline", 37)(59, "polyline", 38)(60, "polyline", 39)(61, "path", 40)(62, "path", 41)(63, "path", 42)(64, "path", 43)(65, "polyline", 44)(66, "polyline", 45)(67, "polyline", 46)(68, "polyline", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](69, "g", 48)(70, "g", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](71, "path", 50)(72, "path", 51)(73, "path", 52)(74, "path", 53)(75, "path", 54)(76, "path", 55)(77, "path", 56)(78, "path", 57)(79, "path", 58)(80, "path", 59)(81, "path", 60)(82, "path", 61)(83, "path", 62)(84, "path", 63)(85, "path", 64)(86, "polygon", 65)(87, "polygon", 66)(88, "polygon", 67)(89, "polygon", 68)(90, "polygon", 69)(91, "polygon", 70)(92, "polygon", 71)(93, "polygon", 72)(94, "polygon", 73)(95, "polygon", 74)(96, "polygon", 75)(97, "polygon", 76)(98, "polygon", 77)(99, "path", 78)(100, "path", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("current", ctx.step)("step", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("current", ctx.step)("step", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("current", ctx.step)("step", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("current", ctx.step)("step", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("current", ctx.step)("step", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("current", ctx.step)("step", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("current", ctx.step)("step", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("current", ctx.step)("step", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("current", ctx.step)("step", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("opacity-active", ctx.step >= 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("opacity-active", ctx.step >= 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("corner-animation", ctx.step >= 9);
    } }, dependencies: [src_app_components_slide_slide_component__WEBPACK_IMPORTED_MODULE_0__.SlideComponent, _components_title_title_component__WEBPACK_IMPORTED_MODULE_2__.TitleComponent, _components_list_list_component__WEBPACK_IMPORTED_MODULE_3__.ListComponent, _components_list_item_list_item_component__WEBPACK_IMPORTED_MODULE_4__.ListItemComponent, _components_two_column_layout_two_column_layout_component__WEBPACK_IMPORTED_MODULE_5__.TwoColumnLayoutComponent, _components_figure_figure_component__WEBPACK_IMPORTED_MODULE_6__.FigureComponent], styles: [".prepare-corner-animation[_ngcontent-%COMP%] {\n  will-change: transform;\n  transform: translate(0, 0) rotateZ(0deg);\n}\n\n.corner-animation[_ngcontent-%COMP%] {\n  animation: cornerRobot 5s ease-in-out 1 forwards;\n}\n\n@keyframes cornerRobot {\n  0% {\n    transform: translate(0, 0) rotateZ(0deg);\n  }\n  50% {\n    transform: translate(435px, -210px) rotateZ(-135deg);\n  }\n  100% {\n    transform: translate(555px, -280px) rotateZ(-135deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImludHJvZHVjdGlvbi1kZW1vbnN0cmF0aW9uLXJvYm90LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0Usc0JBQUE7RUFDQSx3Q0FBQTtBQUFGOztBQUdBO0VBQ0UsZ0RBQUE7QUFBRjs7QUFJQTtFQUNFO0lBQ0Usd0NBQUE7RUFERjtFQUlBO0lBQ0Usb0RBQUE7RUFGRjtFQUtBO0lBQ0Usb0RBQUE7RUFIRjtBQUNGIiwiZmlsZSI6ImludHJvZHVjdGlvbi1kZW1vbnN0cmF0aW9uLXJvYm90LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4ucHJlcGFyZS1jb3JuZXItYW5pbWF0aW9uIHtcbiAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCkgcm90YXRlWigwZGVnKTtcbn1cblxuLmNvcm5lci1hbmltYXRpb24ge1xuICBhbmltYXRpb246IGNvcm5lclJvYm90IDVzIGVhc2UtaW4tb3V0IDEgZm9yd2FyZHM7XG4gIC8vIGN1YmljLWJlemllcigwLDEuMTIsMSwuMDIpXG59XG5cbkBrZXlmcmFtZXMgY29ybmVyUm9ib3Qge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCkgcm90YXRlWigwZGVnKTtcbiAgfVxuXG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNDM1cHgsIC0yMTBweCkgcm90YXRlWigtMTM1ZGVnKTtcbiAgfVxuXG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDU1NXB4LCAtMjgwcHgpIHJvdGF0ZVooLTEzNWRlZyk7XG4gIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ 8883:
/*!*******************************************************************************!*\
  !*** ./src/app/slides/introduction-problem/introduction-problem.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IntroductionProblemComponent": () => (/* binding */ IntroductionProblemComponent)
/* harmony export */ });
/* harmony import */ var src_app_components_slide_slide_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/slide/slide.component */ 2459);
/* harmony import */ var src_app_models_abstract_slide__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/abstract-slide */ 5726);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _components_title_title_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/title/title.component */ 9527);
/* harmony import */ var _components_list_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/list/list.component */ 7309);
/* harmony import */ var _components_list_item_list_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/list-item/list-item.component */ 1616);
/* harmony import */ var _components_two_column_layout_two_column_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/two-column-layout/two-column-layout.component */ 4013);
/* harmony import */ var _components_figure_figure_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/figure/figure.component */ 3203);









class IntroductionProblemComponent extends src_app_models_abstract_slide__WEBPACK_IMPORTED_MODULE_1__.AbstractSlide {
    constructor() {
        super();
        this.max = 7;
    }
    ngOnInit() {
    }
}
IntroductionProblemComponent.ɵfac = function IntroductionProblemComponent_Factory(t) { return new (t || IntroductionProblemComponent)(); };
IntroductionProblemComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: IntroductionProblemComponent, selectors: [["app-introduction-problem"]], viewQuery: function IntroductionProblemComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](src_app_components_slide_slide_component__WEBPACK_IMPORTED_MODULE_0__.SlideComponent, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.slide = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]], decls: 38, vars: 17, consts: [["label", "Problem"], [3, "current", "step"], [1, "emphasize"], ["caption", "Development cycle.", 3, "offset", "current", "step"], ["width", "610", "height", "359", "xmlns", "http://www.w3.org/2000/svg"], ["transform", "translate(2 2)", "fill-rule", "nonzero", "fill", "none"], ["stroke", "#979797", "stroke-width", "5", "fill", "#FFF", "x", "189.5", "y", ".5", "width", "227", "height", "74", "rx", "29"], ["stroke", "#979797", "stroke-width", "5", "fill", "#FFF", "x", ".5", "y", "280.5", "width", "227", "height", "74", "rx", "29"], ["stroke", "#979797", "stroke-width", "5", "fill", "#FFF", "x", "378.5", "y", "280.5", "width", "227", "height", "74", "rx", "29"], ["fill", "#979797", "font-family", "FiraSans-Regular, Fira Sans", "font-size", "25"], ["x", "79.136", "y", "325"], ["x", "400.435", "y", "325"], ["x", "238.344", "y", "45"], ["fill", "#979797", "d", "m303.428 74.673 2.899 2.755-1.377 1.449-173.471 182.6 7.251 6.888-25.23 9.135 7.83-25.665 7.249 6.887L302.05 76.123z"], ["fill", "#979797", "d", "m353 305 24 12-24 12v-10H229v-4h124z"], ["fill", "#979797", "d", "m304 77 25.158 9.331-7.303 6.83 171.606 183.473 1.366 1.46-2.921 2.733-1.367-1.461L318.933 95.894l-7.303 6.831z"]], template: function IntroductionProblemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "app-slide");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "app-title", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "app-two-column-layout")(3, "app-list")(4, "app-list-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "Development of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "safe software");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, " for robots ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "app-list-item", 1)(10, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, "Manual");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, " implementation and (safety) testing takes time ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "app-list")(14, "app-list-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15, "Failed test requires re-modelling, re-implementation and re-testing ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "app-list-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17, "Can be ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19, "time-consuming");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "app-figure", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "svg", 4)(22, "g", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](23, "rect", 6)(24, "rect", 7)(25, "rect", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "text", 9)(27, "tspan", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](28, "Model");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "text", 9)(30, "tspan", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](31, "Implementation");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "text", 9)(33, "tspan", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](34, "Verification");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](35, "path", 13)(36, "path", 14)(37, "path", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("current", ctx.step)("step", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("current", ctx.step)("step", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("current", ctx.step)("step", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("current", ctx.step)("step", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("offset", 20)("current", ctx.step)("step", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("emphasize-fill", ctx.step === 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("emphasize-fill", ctx.step === 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("emphasize-fill", ctx.step === 5);
    } }, dependencies: [src_app_components_slide_slide_component__WEBPACK_IMPORTED_MODULE_0__.SlideComponent, _components_title_title_component__WEBPACK_IMPORTED_MODULE_2__.TitleComponent, _components_list_list_component__WEBPACK_IMPORTED_MODULE_3__.ListComponent, _components_list_item_list_item_component__WEBPACK_IMPORTED_MODULE_4__.ListItemComponent, _components_two_column_layout_two_column_layout_component__WEBPACK_IMPORTED_MODULE_5__.TwoColumnLayoutComponent, _components_figure_figure_component__WEBPACK_IMPORTED_MODULE_6__.FigureComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnRyb2R1Y3Rpb24tcHJvYmxlbS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 1201:
/*!*****************************************************!*\
  !*** ./src/app/slides/opening/opening.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OpeningComponent": () => (/* binding */ OpeningComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var ng_inline_svg_2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng-inline-svg-2 */ 8590);


class OpeningComponent {
    constructor() { }
    ngOnInit() {
    }
}
OpeningComponent.ɵfac = function OpeningComponent_Factory(t) { return new (t || OpeningComponent)(); };
OpeningComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: OpeningComponent, selectors: [["app-opening"]], decls: 15, vars: 0, consts: [[1, "slide"], ["inlineSVG", "/assets/logo.svg", 1, "logo"], [1, "title"], [1, "thesis"], [1, "exam"]], template: function OpeningComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " RoboSC: a domain-specific language for supervisory");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " controller synthesis of ROS-based applications ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Master thesis");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " Bart Wesselink, b.b.a.wesselink@student.tue.nl");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " Supervisors: Elena Torta & Ivan Kurtev");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "br")(13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " Third committee member: Thomas Neele ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } }, dependencies: [ng_inline_svg_2__WEBPACK_IMPORTED_MODULE_0__.InlineSVGDirective], styles: [".slide[_ngcontent-%COMP%] {\n  width: var(--width);\n  height: var(--height);\n  padding: 6rem 12rem;\n  color: var(--white);\n}\n\n.title[_ngcontent-%COMP%] {\n  font-size: 4rem;\n  margin-top: 10rem;\n}\n\n.thesis[_ngcontent-%COMP%], .exam[_ngcontent-%COMP%] {\n  opacity: 0.7;\n  font-size: 2.5rem;\n}\n\n.thesis[_ngcontent-%COMP%] {\n  margin-top: 4rem;\n}\n\n.exam[_ngcontent-%COMP%] {\n  margin-top: 10rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9wZW5pbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtBQUNGIiwiZmlsZSI6Im9wZW5pbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2xpZGUge1xuICB3aWR0aDogdmFyKC0td2lkdGgpO1xuICBoZWlnaHQ6IHZhcigtLWhlaWdodCk7XG4gIHBhZGRpbmc6IDZyZW0gMTJyZW07XG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG59XG5cbi50aXRsZSB7XG4gIGZvbnQtc2l6ZTogNHJlbTtcbiAgbWFyZ2luLXRvcDogMTByZW07XG59XG5cbi50aGVzaXMsIC5leGFtIHtcbiAgb3BhY2l0eTogMC43O1xuICBmb250LXNpemU6IDIuNXJlbTtcbn1cblxuLnRoZXNpcyB7XG4gIG1hcmdpbi10b3A6IDRyZW07XG59XG5cbi5leGFtIHtcbiAgbWFyZ2luLXRvcDogMTByZW07XG59XG4iXX0= */"] });


/***/ }),

/***/ 1057:
/*!*********************************************************************************!*\
  !*** ./src/app/slides/overview-control-loop/overview-control-loop.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OverviewControlLoopComponent": () => (/* binding */ OverviewControlLoopComponent)
/* harmony export */ });
/* harmony import */ var src_app_components_slide_slide_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/slide/slide.component */ 2459);
/* harmony import */ var src_app_models_abstract_slide__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/abstract-slide */ 5726);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _components_title_title_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/title/title.component */ 9527);
/* harmony import */ var _components_list_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/list/list.component */ 7309);
/* harmony import */ var _components_list_item_list_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/list-item/list-item.component */ 1616);
/* harmony import */ var _components_two_column_layout_two_column_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/two-column-layout/two-column-layout.component */ 4013);








class OverviewControlLoopComponent extends src_app_models_abstract_slide__WEBPACK_IMPORTED_MODULE_1__.AbstractSlide {
    constructor() {
        super();
        this.max = 5;
    }
    ngOnInit() {
    }
}
OverviewControlLoopComponent.ɵfac = function OverviewControlLoopComponent_Factory(t) { return new (t || OverviewControlLoopComponent)(); };
OverviewControlLoopComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: OverviewControlLoopComponent, selectors: [["app-overview-control-loop"]], viewQuery: function OverviewControlLoopComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](src_app_components_slide_slide_component__WEBPACK_IMPORTED_MODULE_0__.SlideComponent, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.slide = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]], decls: 26, vars: 10, consts: [["label", "Control loop"], [3, "current", "step"], [1, "emphasize"]], template: function OverviewControlLoopComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "app-slide");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "app-title", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "app-two-column-layout")(3, "app-list")(4, "app-list-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "Executed using a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "timer");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "app-list-item", 1)(9, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "Shuffle");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, " controllable events");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "app-list-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "Ensure data is always ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "up-to-date");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "app-list-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, " Execute ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, "enabled");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20, " controllable events ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "app-list")(22, "app-list-item", 1)(23, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24, "Communicate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](25, " with the middleware");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("current", ctx.step)("step", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("current", ctx.step)("step", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("current", ctx.step)("step", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("current", ctx.step)("step", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("current", ctx.step)("step", 5);
    } }, dependencies: [src_app_components_slide_slide_component__WEBPACK_IMPORTED_MODULE_0__.SlideComponent, _components_title_title_component__WEBPACK_IMPORTED_MODULE_2__.TitleComponent, _components_list_list_component__WEBPACK_IMPORTED_MODULE_3__.ListComponent, _components_list_item_list_item_component__WEBPACK_IMPORTED_MODULE_4__.ListItemComponent, _components_two_column_layout_two_column_layout_component__WEBPACK_IMPORTED_MODULE_5__.TwoColumnLayoutComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvdmVydmlldy1jb250cm9sLWxvb3AuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 6738:
/*!*****************************************************************!*\
  !*** ./src/app/slides/overview-idea/overview-idea.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OverviewIdeaComponent": () => (/* binding */ OverviewIdeaComponent)
/* harmony export */ });
/* harmony import */ var src_app_components_slide_slide_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/slide/slide.component */ 2459);
/* harmony import */ var src_app_models_abstract_slide__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/abstract-slide */ 5726);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _components_title_title_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/title/title.component */ 9527);
/* harmony import */ var _components_list_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/list/list.component */ 7309);
/* harmony import */ var _components_list_item_list_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/list-item/list-item.component */ 1616);
/* harmony import */ var _components_two_column_layout_two_column_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/two-column-layout/two-column-layout.component */ 4013);
/* harmony import */ var _components_citation_citation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/citation/citation.component */ 5081);
/* harmony import */ var _components_citations_citations_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/citations/citations.component */ 882);
/* harmony import */ var _components_citation_reference_citation_reference_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/citation-reference/citation-reference.component */ 5598);











class OverviewIdeaComponent extends src_app_models_abstract_slide__WEBPACK_IMPORTED_MODULE_1__.AbstractSlide {
    constructor() {
        super();
        this.max = 9;
    }
    ngOnInit() {
    }
}
OverviewIdeaComponent.ɵfac = function OverviewIdeaComponent_Factory(t) { return new (t || OverviewIdeaComponent)(); };
OverviewIdeaComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({ type: OverviewIdeaComponent, selectors: [["app-overview-idea"]], viewQuery: function OverviewIdeaComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵviewQuery"](src_app_components_slide_slide_component__WEBPACK_IMPORTED_MODULE_0__.SlideComponent, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx.slide = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵInheritDefinitionFeature"]], decls: 42, vars: 19, consts: [["label", "Idea"], [3, "current", "step"], [1, "emphasize"], [3, "citation"], ["text", "JW Kok, E Torta, MA Reniers, JM van de Mortel-Fronczak, and MJG van de Molen- graft. Synthesis-based engineering of supervisory controllers for autonomous robotic naviga- tion. IFAC-PapersOnLine, 54(2):259\u2013264, 2021. 1, 13, 15, 74    "], ["kok", ""]], template: function OverviewIdeaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "app-slide");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "app-title", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "app-two-column-layout")(3, "app-list")(4, "app-list-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5, " Create a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7, "supervisory controller");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8, " to control the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10, "behaviour");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](11, " of a robot ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "app-list-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](13, " Continue with work done by Kok et al. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](14, "app-citation-reference", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "app-list")(16, "app-list-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](17, "Apply supervisory control theory");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "app-list-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](19, "Synthesize a controller");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](20, "app-list-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](21, "Manually define connection to the middleware ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](22, "app-list-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](23, "Extend this approach by ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](24, "app-list")(25, "app-list-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](26, "Using ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](27, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](28, "model-driven engineering");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](29, " (MDE) to increase the level of abstraction");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](30, "app-list-item", 1)(31, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](32, "Automatically");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](33, " generate platform connections");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](34, "app-list-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](35, "Supporting ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](36, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](37, "multiple");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](38, " platforms");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](39, "app-citations");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](40, "app-citation", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("current", ctx.step)("step", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("current", ctx.step)("step", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("citation", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("current", ctx.step)("step", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("current", ctx.step)("step", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("current", ctx.step)("step", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("current", ctx.step)("step", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("current", ctx.step)("step", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("current", ctx.step)("step", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("current", ctx.step)("step", 9);
    } }, dependencies: [src_app_components_slide_slide_component__WEBPACK_IMPORTED_MODULE_0__.SlideComponent, _components_title_title_component__WEBPACK_IMPORTED_MODULE_2__.TitleComponent, _components_list_list_component__WEBPACK_IMPORTED_MODULE_3__.ListComponent, _components_list_item_list_item_component__WEBPACK_IMPORTED_MODULE_4__.ListItemComponent, _components_two_column_layout_two_column_layout_component__WEBPACK_IMPORTED_MODULE_5__.TwoColumnLayoutComponent, _components_citation_citation_component__WEBPACK_IMPORTED_MODULE_6__.CitationComponent, _components_citations_citations_component__WEBPACK_IMPORTED_MODULE_7__.CitationsComponent, _components_citation_reference_citation_reference_component__WEBPACK_IMPORTED_MODULE_8__.CitationReferenceComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvdmVydmlldy1pZGVhLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 1685:
/*!***************************************************************************!*\
  !*** ./src/app/slides/overview-main-idea/overview-main-idea.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OverviewMainIdeaComponent": () => (/* binding */ OverviewMainIdeaComponent)
/* harmony export */ });
/* harmony import */ var src_app_components_slide_slide_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/slide/slide.component */ 2459);
/* harmony import */ var src_app_models_abstract_slide__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/abstract-slide */ 5726);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _components_title_title_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/title/title.component */ 9527);
/* harmony import */ var _components_list_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/list/list.component */ 7309);
/* harmony import */ var _components_list_item_list_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/list-item/list-item.component */ 1616);
/* harmony import */ var _components_two_column_layout_two_column_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/two-column-layout/two-column-layout.component */ 4013);
/* harmony import */ var _components_figure_figure_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/figure/figure.component */ 3203);









class OverviewMainIdeaComponent extends src_app_models_abstract_slide__WEBPACK_IMPORTED_MODULE_1__.AbstractSlide {
    constructor() {
        super();
        this.max = 9;
    }
    ngOnInit() {
    }
}
OverviewMainIdeaComponent.ɵfac = function OverviewMainIdeaComponent_Factory(t) { return new (t || OverviewMainIdeaComponent)(); };
OverviewMainIdeaComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: OverviewMainIdeaComponent, selectors: [["app-overview-main-idea"]], viewQuery: function OverviewMainIdeaComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](src_app_components_slide_slide_component__WEBPACK_IMPORTED_MODULE_0__.SlideComponent, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.slide = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]], decls: 104, vars: 28, consts: [["label", "Solution"], [3, "current", "step"], [1, "emphasize"], ["caption", "Illustration of supervisory controller in ROS idea."], ["width", "550", "viewBox", "0 0 831 898", "xmlns", "http://www.w3.org/2000/svg"], ["id", "Page-1", "stroke", "none", "stroke-width", "1", "fill", "none", "fill-rule", "evenodd"], ["id", "Main-idea", "transform", "translate(-162 -104)"], ["id", "main-idea-sketch", "transform", "translate(162 104)"], ["id", "uncontrollable", "transform", "translate(242.5 221)", 1, "opacity-transition"], ["id", "Line", "d", "M99.149 76.68 100 103.5 78.034 88.09l8.752-4.731-.074-.128 3.471-1.988.123.215 8.843-4.777Zm-19.56-12.552 1.097 1.673a299.112 299.112 0 0 1 4.602 7.248l.774 1.263 1.04 1.708-3.415 2.081-1.041-1.707a304.207 304.207 0 0 0-4.553-7.247l-.752-1.153-1.096-1.672 3.345-2.194ZM67.64 47.861l1.252 1.56a184.543 184.543 0 0 1 5.33 6.995l.769 1.065 1.165 1.626-3.25 2.33-1.166-1.625a187.027 187.027 0 0 0-5.23-6.96l-.738-.928-1.252-1.56 3.12-2.503ZM53.462 33.285l1.505 1.317a90.68 90.68 0 0 1 2.02 1.823c1.5 1.394 3.007 2.892 4.527 4.495l.76.81 1.362 1.465-2.93 2.724-1.361-1.465a99.208 99.208 0 0 0-5.082-5.1 86.402 86.402 0 0 0-1.28-1.167l-.651-.575-1.505-1.318 2.635-3.01ZM36.57 21.882l1.74.985a106.216 106.216 0 0 1 7.59 4.725l1.032.714 1.637 1.15-2.299 3.273-1.637-1.149a100.738 100.738 0 0 0-7.212-4.61l-1.082-.622-1.74-.986 1.971-3.48ZM17.979 13.67l1.876.695a137.01 137.01 0 0 1 8.083 3.286l1.297.586 1.818.833-1.666 3.637-1.818-.834c-2.5-1.146-5.088-2.23-7.76-3.252l-1.345-.506-1.875-.695 1.39-3.75ZM-1.484 8.092l1.946.462c2.876.682 5.68 1.418 8.412 2.208l1.36.399 1.917.571-1.142 3.834-1.917-.572a172.54 172.54 0 0 0-8.153-2.21l-1.4-.338-1.947-.462.924-3.892Z", "fill", "#EE7773", "fill-rule", "nonzero"], ["id", "Line", "d", "m243.803 73.913 3.619 1.703-.852 1.81a293.942 293.942 0 0 0-2.122 4.615l9.196 3.733L233.5 103.5l-2.094-26.751 9.333 3.787c.53-1.182 1.062-2.346 1.595-3.494l.617-1.32.852-1.81Zm9.482-17.799 3.455 2.016-1.007 1.728a199.414 199.414 0 0 0-4.177 7.542l-.594 1.135-.922 1.774-3.55-1.844.922-1.774a209.35 209.35 0 0 1 4.254-7.793l.612-1.056 1.007-1.728Zm11.604-16.64 3.124 2.499-1.25 1.562a116.01 116.01 0 0 0-5.156 6.995l-.641.947-1.115 1.66-3.321-2.228 1.114-1.661a124.025 124.025 0 0 1 5.325-7.363l.67-.848 1.25-1.562Zm15.354-13.694 2.243 3.312-1.655 1.122a58.17 58.17 0 0 0-6.922 5.465l-.618.582-1.445 1.382-2.765-2.89 1.445-1.383a60.907 60.907 0 0 1 7.26-5.916l.801-.552 1.656-1.122Zm18.436-8.826 1.419 3.74-1.87.709a98.07 98.07 0 0 0-8.04 3.452l-.94.463-1.789.895-1.79-3.577 1.788-.895a99.277 99.277 0 0 1 8.254-3.655l1.098-.423 1.87-.71Zm19.541-5.451.874 3.903-1.952.437a158.832 158.832 0 0 0-8.416 2.119l-1.149.329-1.92.559-1.118-3.841 1.92-.559a158.499 158.499 0 0 1 8.537-2.22l1.273-.29 1.951-.437Zm19.928-3.24.505 3.968-1.984.252c-2.896.369-5.712.778-8.446 1.226l-1.36.227-1.972.337-.672-3.943 1.971-.337a235.33 235.33 0 0 1 8.509-1.287l1.465-.19 1.984-.253Z", "fill", "#EE7773", "fill-rule", "nonzero"], ["id", "/b", "font-family", "FiraSans-Regular, Fira Sans", "font-size", "25", "font-weight", "normal", "fill", "#000"], ["x", "233.075", "y", "23"], ["id", "/a", "font-family", "FiraSans-Regular, Fira Sans", "font-size", "25", "font-weight", "normal", "fill", "#000"], ["x", "73.325", "y", "23"], ["id", "controllable", "transform", "translate(412 504.5)", 1, "opacity-transition"], ["id", "Line", "d", "M2.5-2v112.5h10l-12 24-12-24h10V-2h4Z", "fill", "#EE7773", "fill-rule", "nonzero"], ["id", "/c", "font-family", "FiraSans-Regular, Fira Sans", "font-size", "25", "font-weight", "normal", "fill", "#000"], ["x", "19.65", "y", "67.5"], ["id", "Oval", "stroke", "#DE0A10", "stroke-width", "4", "fill", "#FFF", "cx", "413", "cy", "702", "r", "61"], ["id", "Oval", "stroke", "#DE0A10", "stroke-width", "4", "fill", "#FFF", "cx", "204", "cy", "181", "r", "61"], ["id", "Oval", "stroke", "#DE0A10", "stroke-width", "4", "fill", "#FFF", "cx", "616", "cy", "181", "r", "61"], ["id", "Line", "d", "m90.087 40.585 2.164 2.751 46.199 58.738 12.576-9.89 8.783 42.709-39.437-18.6 12.576-9.891-46.199-58.738-2.164-2.751 5.502-4.328Z", "fill", "#EE7773", "fill-rule", "nonzero"], ["id", "Line", "d", "M417 762v23h16l-19.5 39-19.5-39h16v-23h7Z", "fill", "#EE7773", "fill-rule", "nonzero"], ["id", "Group-2", "transform", "translate(324 824)"], ["id", "Rectangle", "fill", "#EE7773", "x", "0", "y", "0", "width", "180", "height", "74", "rx", "37"], ["id", "Motor", "fill", "#FFF", "fill-rule", "nonzero", "font-family", "FiraSans-Regular, Fira Sans", "font-size", "25", "font-weight", "normal"], ["x", "56.161", "y", "45"], ["id", "Node", "font-family", "FiraSans-Regular, Fira Sans", "font-size", "25", "font-weight", "normal", "fill", "#000"], ["x", "382.375", "y", "710"], ["id", "Distance", "fill", "#FFF", "fill-rule", "nonzero", "font-family", "FiraSans-Regular, Fira Sans", "font-size", "25", "font-weight", "normal"], ["x", "41.136", "y", "45"], ["id", "Line", "d", "m737.175 40.561 5.264 4.614-2.307 2.632-52.625 60.045 12.033 10.546-40.37 16.478 11.04-42.183 12.033 10.546 52.625-60.046 2.307-2.632Z", "fill", "#EE7773", "fill-rule", "nonzero"], ["id", "Rectangle", "fill", "#EE7773", "x", "651", "y", "0", "width", "180", "height", "74", "rx", "37"], ["id", "Line", "fill", "#FFF", "fill-rule", "nonzero", "font-family", "FiraSans-Regular, Fira Sans", "font-size", "25", "font-weight", "normal"], ["x", "716.749", "y", "45"], ["x", "173.375", "y", "189"], ["x", "585.375", "y", "189"], ["id", "sc", "transform", "translate(277 330)", "fill-rule", "nonzero", 1, "opacity-transition"], ["id", "Group"], ["id", "Rectangle", "stroke", "#EE7773", "stroke-width", "5", "fill", "#FFF", "x", "0", "y", "0", "width", "274", "height", "174", "rx", "29"], ["id", "Rectangle", "fill", "#DE0A10", "x", "26.5", "y", "29.5", "width", "227", "height", "74", "rx", "29", 1, "opacity-transition"], ["id", "Controller-Node", "fill", "#0E0E0E", "font-family", "FiraSans-Regular, Fira Sans", "font-size", "25", "font-weight", "normal"], ["x", "49.661", "y", "143"], ["id", "Supervisory-Controll", "fill", "#FFF", "font-family", "FiraSans-Bold, Fira Sans", "font-size", "25", "font-weight", "bold", 1, "opacity-transition"], ["x", "68", "y", "66"], ["x", "78.95", "y", "94"]], template: function OverviewMainIdeaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "app-slide");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "app-title", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "app-two-column-layout")(3, "app-list")(4, "app-list-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "Domain-specific language: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "RoboSC");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "app-list-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, "Run ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, "ROS-node");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, " that acts as a controller");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "app-list-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14, "Use ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16, "supervisory control theory");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "app-list")(18, "app-list-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19, "Generate plants");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "app-list-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21, "Define requirements");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "app-list-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](23, "Synthesize ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](25, "supervisory controller");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "app-list-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](27, "Map ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](29, "incoming");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](30, " data to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](32, "uncontrollable");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](33, " events ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](34, "app-list")(35, "app-list-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](36, "Update state");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](37, "app-list-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](38, "Map ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](39, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](40, "outgoing");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](41, " data to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](42, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](43, "controllable");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](44, " events");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](45, "app-figure", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](46, "svg", 4)(47, "g", 5)(48, "g", 6)(49, "g", 7)(50, "g", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](51, "path", 9)(52, "path", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](53, "text", 11)(54, "tspan", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](55, "/b");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](56, "text", 13)(57, "tspan", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](58, "/a");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](59, "g", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](60, "path", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](61, "text", 17)(62, "tspan", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](63, "/c");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](64, "circle", 19)(65, "circle", 20)(66, "circle", 21)(67, "path", 22)(68, "path", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](69, "g", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](70, "rect", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](71, "text", 26)(72, "tspan", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](73, "Motor");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](74, "text", 28)(75, "tspan", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](76, "Node");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](77, "rect", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](78, "text", 30)(79, "tspan", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](80, "Distance");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](81, "path", 32)(82, "rect", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](83, "text", 34)(84, "tspan", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](85, "Line");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](86, "text", 28)(87, "tspan", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](88, "Node");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](89, "text", 28)(90, "tspan", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](91, "Node");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](92, "g", 38)(93, "g", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](94, "rect", 40)(95, "rect", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](96, "text", 42)(97, "tspan", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](98, "Controller Node");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](99, "text", 44)(100, "tspan", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](101, "Supervisory");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](102, "tspan", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](103, "Controller");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("current", ctx.step)("step", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("current", ctx.step)("step", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("current", ctx.step)("step", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("current", ctx.step)("step", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("current", ctx.step)("step", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("current", ctx.step)("step", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("current", ctx.step)("step", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("current", ctx.step)("step", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("current", ctx.step)("step", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("opacity-active", ctx.step >= 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("opacity-active", ctx.step >= 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("opacity-active", ctx.step >= 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("opacity-active", ctx.step >= 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("opacity-active", ctx.step >= 6);
    } }, dependencies: [src_app_components_slide_slide_component__WEBPACK_IMPORTED_MODULE_0__.SlideComponent, _components_title_title_component__WEBPACK_IMPORTED_MODULE_2__.TitleComponent, _components_list_list_component__WEBPACK_IMPORTED_MODULE_3__.ListComponent, _components_list_item_list_item_component__WEBPACK_IMPORTED_MODULE_4__.ListItemComponent, _components_two_column_layout_two_column_layout_component__WEBPACK_IMPORTED_MODULE_5__.TwoColumnLayoutComponent, _components_figure_figure_component__WEBPACK_IMPORTED_MODULE_6__.FigureComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvdmVydmlldy1tYWluLWlkZWEuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 110:
/*!*******************************************************************!*\
  !*** ./src/app/slides/overview-scope/overview-scope.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OverviewScopeComponent": () => (/* binding */ OverviewScopeComponent)
/* harmony export */ });
/* harmony import */ var src_app_components_slide_slide_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/slide/slide.component */ 2459);
/* harmony import */ var src_app_models_abstract_slide__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/abstract-slide */ 5726);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _components_title_title_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/title/title.component */ 9527);
/* harmony import */ var _components_list_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/list/list.component */ 7309);
/* harmony import */ var _components_list_item_list_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/list-item/list-item.component */ 1616);
/* harmony import */ var _components_two_column_layout_two_column_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/two-column-layout/two-column-layout.component */ 4013);








class OverviewScopeComponent extends src_app_models_abstract_slide__WEBPACK_IMPORTED_MODULE_1__.AbstractSlide {
    constructor() {
        super();
        this.max = 6;
    }
    ngOnInit() {
    }
}
OverviewScopeComponent.ɵfac = function OverviewScopeComponent_Factory(t) { return new (t || OverviewScopeComponent)(); };
OverviewScopeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: OverviewScopeComponent, selectors: [["app-overview-scope"]], viewQuery: function OverviewScopeComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](src_app_components_slide_slide_component__WEBPACK_IMPORTED_MODULE_0__.SlideComponent, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.slide = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]], decls: 18, vars: 12, consts: [["label", "Scope"], [3, "current", "step"]], template: function OverviewScopeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "app-slide");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "app-title", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "app-two-column-layout")(3, "app-list")(4, "app-list-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, " Robot Operating System (ROS) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "app-list")(7, "app-list-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "Both versions");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "app-list-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "Ensure familiarity with concepts");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "app-list-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, " Supervisory Control Theory ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "app-list")(14, "app-list-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "Only generated using CIF");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "app-list-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, "Generic concepts");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("current", ctx.step)("step", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("current", ctx.step)("step", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("current", ctx.step)("step", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("current", ctx.step)("step", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("current", ctx.step)("step", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("current", ctx.step)("step", 6);
    } }, dependencies: [src_app_components_slide_slide_component__WEBPACK_IMPORTED_MODULE_0__.SlideComponent, _components_title_title_component__WEBPACK_IMPORTED_MODULE_2__.TitleComponent, _components_list_list_component__WEBPACK_IMPORTED_MODULE_3__.ListComponent, _components_list_item_list_item_component__WEBPACK_IMPORTED_MODULE_4__.ListItemComponent, _components_two_column_layout_two_column_layout_component__WEBPACK_IMPORTED_MODULE_5__.TwoColumnLayoutComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvdmVydmlldy1zY29wZS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 3839:
/*!*************************************************************************!*\
  !*** ./src/app/slides/preliminaries-cif/preliminaries-cif.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PreliminariesCifComponent": () => (/* binding */ PreliminariesCifComponent)
/* harmony export */ });
/* harmony import */ var src_app_components_slide_slide_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/slide/slide.component */ 2459);
/* harmony import */ var src_app_models_abstract_slide__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/abstract-slide */ 5726);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _components_title_title_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/title/title.component */ 9527);
/* harmony import */ var _components_list_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/list/list.component */ 7309);
/* harmony import */ var _components_list_item_list_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/list-item/list-item.component */ 1616);
/* harmony import */ var _components_two_column_layout_two_column_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/two-column-layout/two-column-layout.component */ 4013);








class PreliminariesCifComponent extends src_app_models_abstract_slide__WEBPACK_IMPORTED_MODULE_1__.AbstractSlide {
    constructor() {
        super();
        this.max = 6;
    }
    ngOnInit() {
    }
}
PreliminariesCifComponent.ɵfac = function PreliminariesCifComponent_Factory(t) { return new (t || PreliminariesCifComponent)(); };
PreliminariesCifComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: PreliminariesCifComponent, selectors: [["app-preliminaries-cif"]], viewQuery: function PreliminariesCifComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](src_app_components_slide_slide_component__WEBPACK_IMPORTED_MODULE_0__.SlideComponent, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.slide = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]], decls: 24, vars: 14, consts: [["label", "CIF"], [3, "current", "step"], [1, "emphasize"]], template: function PreliminariesCifComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "app-slide");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "app-title", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "app-two-column-layout")(3, "app-list")(4, "app-list-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, " Compositional Interchange Format ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "app-list")(7, "app-list-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "Developed at ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "TU/e");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "app-list-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, " Specification of automata for ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "app-list")(14, "app-list-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "Discrete event systems");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "app-list-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, "Timed systems");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "app-list-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, "Hybrid systems");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "app-list-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21, " Support for ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23, "supervisory controller synthesis");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("current", ctx.step)("step", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("current", ctx.step)("step", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("current", ctx.step)("step", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("current", ctx.step)("step", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("current", ctx.step)("step", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("current", ctx.step)("step", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("current", ctx.step)("step", 6);
    } }, dependencies: [src_app_components_slide_slide_component__WEBPACK_IMPORTED_MODULE_0__.SlideComponent, _components_title_title_component__WEBPACK_IMPORTED_MODULE_2__.TitleComponent, _components_list_list_component__WEBPACK_IMPORTED_MODULE_3__.ListComponent, _components_list_item_list_item_component__WEBPACK_IMPORTED_MODULE_4__.ListItemComponent, _components_two_column_layout_two_column_layout_component__WEBPACK_IMPORTED_MODULE_5__.TwoColumnLayoutComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcmVsaW1pbmFyaWVzLWNpZi5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 1518:
/*!*************************************************************************!*\
  !*** ./src/app/slides/preliminaries-mde/preliminaries-mde.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PreliminariesMdeComponent": () => (/* binding */ PreliminariesMdeComponent)
/* harmony export */ });
/* harmony import */ var src_app_components_slide_slide_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/slide/slide.component */ 2459);
/* harmony import */ var src_app_models_abstract_slide__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/abstract-slide */ 5726);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _components_title_title_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/title/title.component */ 9527);
/* harmony import */ var _components_list_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/list/list.component */ 7309);
/* harmony import */ var _components_list_item_list_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/list-item/list-item.component */ 1616);
/* harmony import */ var _components_two_column_layout_two_column_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/two-column-layout/two-column-layout.component */ 4013);








class PreliminariesMdeComponent extends src_app_models_abstract_slide__WEBPACK_IMPORTED_MODULE_1__.AbstractSlide {
    constructor() {
        super();
        this.max = 9;
    }
    ngOnInit() {
    }
}
PreliminariesMdeComponent.ɵfac = function PreliminariesMdeComponent_Factory(t) { return new (t || PreliminariesMdeComponent)(); };
PreliminariesMdeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: PreliminariesMdeComponent, selectors: [["app-preliminaries-mde"]], viewQuery: function PreliminariesMdeComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](src_app_components_slide_slide_component__WEBPACK_IMPORTED_MODULE_0__.SlideComponent, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.slide = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]], decls: 38, vars: 18, consts: [["label", "Model-Driven Engineering"], [3, "current", "step"], [1, "emphasize"]], template: function PreliminariesMdeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "app-slide");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "app-title", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "app-two-column-layout")(3, "app-list")(4, "app-list-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, " Software engineering methodology ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "app-list-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "Increase ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "compatibility");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, " between systems");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "app-list-item", 1)(12, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "Simplify");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, " design process");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "app-list-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16, " Incorporate ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, "domain");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, " into software development ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "app-list")(21, "app-list-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22, "Promote ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24, "communications");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](25, " between stakeholders");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "app-list-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](27, " Construct model using domain-specific languages (");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](29, "DSLs");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](30, ") ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "app-list-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](32, " Transformations ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "app-list")(34, "app-list-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](35, "Model to model");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](36, "app-list-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](37, "Model to text");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("current", ctx.step)("step", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("current", ctx.step)("step", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("current", ctx.step)("step", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("current", ctx.step)("step", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("current", ctx.step)("step", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("current", ctx.step)("step", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("current", ctx.step)("step", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("current", ctx.step)("step", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("current", ctx.step)("step", 9);
    } }, dependencies: [src_app_components_slide_slide_component__WEBPACK_IMPORTED_MODULE_0__.SlideComponent, _components_title_title_component__WEBPACK_IMPORTED_MODULE_2__.TitleComponent, _components_list_list_component__WEBPACK_IMPORTED_MODULE_3__.ListComponent, _components_list_item_list_item_component__WEBPACK_IMPORTED_MODULE_4__.ListItemComponent, _components_two_column_layout_two_column_layout_component__WEBPACK_IMPORTED_MODULE_5__.TwoColumnLayoutComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcmVsaW1pbmFyaWVzLW1kZS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 5013:
/*!*****************************************************************************************!*\
  !*** ./src/app/slides/preliminaries-ros-actions/preliminaries-ros-actions.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PreliminariesRosActionsComponent": () => (/* binding */ PreliminariesRosActionsComponent)
/* harmony export */ });
/* harmony import */ var src_app_components_slide_slide_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/slide/slide.component */ 2459);
/* harmony import */ var src_app_models_abstract_slide__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/abstract-slide */ 5726);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _components_title_title_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/title/title.component */ 9527);
/* harmony import */ var _components_list_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/list/list.component */ 7309);
/* harmony import */ var _components_list_item_list_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/list-item/list-item.component */ 1616);
/* harmony import */ var _components_two_column_layout_two_column_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/two-column-layout/two-column-layout.component */ 4013);
/* harmony import */ var _components_figure_figure_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/figure/figure.component */ 3203);









class PreliminariesRosActionsComponent extends src_app_models_abstract_slide__WEBPACK_IMPORTED_MODULE_1__.AbstractSlide {
    constructor() {
        super();
        this.max = 4;
    }
    ngOnInit() {
    }
}
PreliminariesRosActionsComponent.ɵfac = function PreliminariesRosActionsComponent_Factory(t) { return new (t || PreliminariesRosActionsComponent)(); };
PreliminariesRosActionsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: PreliminariesRosActionsComponent, selectors: [["app-preliminaries-ros-actions"]], viewQuery: function PreliminariesRosActionsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](src_app_components_slide_slide_component__WEBPACK_IMPORTED_MODULE_0__.SlideComponent, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.slide = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]], decls: 59, vars: 15, consts: [["label", "Robot Operating System", "subTitle", "Actions"], [3, "current", "step"], [1, "emphasize"], ["caption", "Action communication between client and server in ROS, idea from ROS2 website.", 3, "offset"], ["xmlns", "http://www.w3.org/2000/svg", "width", "550", "height", "541", "viewBox", "0 0 741 541"], ["fill", "none", "fill-rule", "evenodd"], ["width", "214", "height", "340", "x", "296", "y", "87", "stroke", "#DE0A10", "stroke-width", "4", "rx", "37"], ["fill", "#EE7773", "fill-rule", "nonzero", "d", "M194.43797 235.75879L169.683532 271.654023 161.990361 257.68308C144.184009 267.847108 124.65428 279.44736 103.402181 292.483441 67.664071 314.405271 33.5882813 326.409253 1.17860864 328.436086L.197007331 328.494451-3.29744371 328.691458-3.69145838 321.702556-.197007331 321.505549C31.2611892 319.732024 64.5729147 308.089399 99.7420827 286.516559 121.091019 273.421078 140.714383 261.765923 158.613187 251.550699L150.86912 237.49238 194.43797 235.75879zM564.025172-.499365947L581.536995 39.4329027 565.385534 38.6192935C559.924428 91.537747 544.017104 132.452982 517.579 161.269116 485.533821 196.196666 438.908274 222.045844 377.772304 238.871115L375.915258 239.37821 372.537048 240.293468 370.706532 233.537048 374.084742 232.62179C434.939413 216.134445 481.02747 190.754063 512.421 156.536777 537.683995 129.001449 553.033174 89.6096694 558.384615 38.2662823L542.586451 37.469453 564.025172-.499365947z", "transform", "translate(120.5 125.5)", 1, "opacity-transition"], ["fill", "#EE7773", "fill-rule", "nonzero", "d", "M170.379085 148.720793L213.476 155.346951 182.316925 185.848788 177.47801 170.801209C153.808836 179.909034 130.279158 191.635505 106.888405 205.983441 72.0418034 227.358419 37.6871917 261.397581 3.86559499 308.124532L2.84086132 309.544384.796477067 312.385246-4.88524557 308.296477-2.84086132 305.455616C31.8163305 257.296237 67.1586265 222.141776 103.228307 200.016559 127.097306 185.375266 151.132157 173.411037 175.332281 164.126732L170.379085 148.720793zM546.580816-.493425521L559.520749 41.1455963 543.29695 38.4890026C534.240985 68.0804809 516.554471 90.9870017 490.330049 107.073117 455.083935 128.693156 423.848005 145.720711 396.610895 158.157136L395.446039 158.687314 392.258724 160.133353 389.366647 153.758724 392.553961 152.312686C419.775364 139.962728 451.151312 122.89344 486.669951 101.106234 511.163566 86.0818007 527.684649 64.8720507 536.322813 37.3459672L521.033559 34.8419339 546.580816-.493425521z", "transform", "translate(101.5 121)", 1, "opacity-transition"], ["width", "180", "height", "74", "x", "315", "y", "158", "fill", "#EE7773", "rx", "37"], ["fill", "#FFF", "fill-rule", "nonzero", "font-family", "FiraSans-Regular, Fira Sans", "font-size", "25"], ["x", "358.536", "y", "203"], ["fill", "#EE7773", "fill-rule", "nonzero", "d", "M554.359857-4.3509857L556.350986 2.35985665 552.995565 3.35542118C522.929973 12.2759814 499.862101 21.6679007 483.827539 31.4849796 473.193323 37.9957239 459.419132 48.7743335 442.553138 63.8017208L453.432511 75.4232849 411.634992 87.8417148 426.778759 46.9526416 437.768071 58.6897149C454.978149 43.3478826 469.096751 32.2960679 480.172461 25.5150204 496.591334 15.4626496 519.799409 5.97047409 549.830924-3.00595119L551.004435-3.35542118 554.359857-4.3509857zM233.25243 83.0924432L235.407557 89.7524304 232.077563 90.8299936C180.503034 107.519159 134.33952 131.746503 93.5688019 163.515894 60.9517331 188.931791 35.083703 225.331881 15.9815223 272.780762L30.9450647 277.918395-.162360722 308.472905-5.94151348 265.254258 9.35223565 270.504248C28.9062396 221.800589 55.5386015 184.27558 89.2662548 157.994292 130.257366 126.053166 176.604007 101.621086 228.28852 84.7018022L229.922437 84.1700064 233.25243 83.0924432z", "transform", "translate(83.5 107.5)", 1, "opacity-transition"], ["transform", "translate(315 324)"], ["width", "180", "height", "75", "fill", "#EE7773", "rx", "37"], ["x", "34.911", "y", "45.5"], ["transform", "translate(315 239)"], ["x", "36.361", "y", "45.5"], ["cx", "678", "cy", "63", "r", "61", "fill", "#FFF", "stroke", "#DE0A10", "stroke-width", "4"], ["font-family", "FiraSans-Regular, Fira Sans", "transform", "translate(648 38)"], ["fill", "#000", "font-size", "25"], ["x", ".375", "y", "23"], ["fill", "#A5A5A5", "font-size", "18"], ["x", "6.947", "y", "45"], ["font-family", "FiraSans-Regular, Fira Sans", "transform", "translate(33 453)"], ["x", "4.445", "y", "45"], ["cx", "63", "cy", "478", "r", "61", "stroke", "#DE0A10", "stroke-width", "4"], ["fill", "#000", "font-family", "FiraSans-Regular, Fira Sans", "font-size", "25"], ["x", "366.7", "y", "129"]], template: function PreliminariesRosActionsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "app-slide");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "app-title", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "app-two-column-layout")(3, "app-list")(4, "app-list-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "Longer running tasks");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "app-list-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "Client sends a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, "goal");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "app-list-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, "Server accepts and provides ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13, "feedback");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "app-list-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15, "Server sends a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17, "response");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18, " when finished");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "app-figure", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "svg", 4)(21, "g", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](22, "rect", 6)(23, "path", 7)(24, "path", 8)(25, "rect", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "text", 10)(27, "tspan", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](28, "Request");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](29, "path", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "g", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](31, "rect", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "text", 10)(33, "tspan", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](34, "Response");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](35, "g", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](36, "rect", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](37, "text", 10)(38, "tspan", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](39, "Feedback");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](40, "circle", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](41, "g", 19)(42, "text", 20)(43, "tspan", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](44, "Node");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](45, "text", 22)(46, "tspan", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](47, "Client");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](48, "g", 24)(49, "text", 20)(50, "tspan", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](51, "Node");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](52, "text", 22)(53, "tspan", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](54, "Server");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](55, "circle", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](56, "text", 27)(57, "tspan", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](58, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("current", ctx.step)("step", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("current", ctx.step)("step", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("current", ctx.step)("step", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("current", ctx.step)("step", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("offset", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("opacity-active", ctx.step >= 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("opacity-active", ctx.step >= 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("opacity-active", ctx.step >= 2);
    } }, dependencies: [src_app_components_slide_slide_component__WEBPACK_IMPORTED_MODULE_0__.SlideComponent, _components_title_title_component__WEBPACK_IMPORTED_MODULE_2__.TitleComponent, _components_list_list_component__WEBPACK_IMPORTED_MODULE_3__.ListComponent, _components_list_item_list_item_component__WEBPACK_IMPORTED_MODULE_4__.ListItemComponent, _components_two_column_layout_two_column_layout_component__WEBPACK_IMPORTED_MODULE_5__.TwoColumnLayoutComponent, _components_figure_figure_component__WEBPACK_IMPORTED_MODULE_6__.FigureComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcmVsaW1pbmFyaWVzLXJvcy1hY3Rpb25zLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 5436:
/*!*******************************************************************************************!*\
  !*** ./src/app/slides/preliminaries-ros-messages/preliminaries-ros-messages.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PreliminariesRosMessagesComponent": () => (/* binding */ PreliminariesRosMessagesComponent)
/* harmony export */ });
/* harmony import */ var src_app_components_slide_slide_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/slide/slide.component */ 2459);
/* harmony import */ var src_app_models_abstract_slide__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/abstract-slide */ 5726);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _components_title_title_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/title/title.component */ 9527);
/* harmony import */ var _components_list_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/list/list.component */ 7309);
/* harmony import */ var _components_list_item_list_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/list-item/list-item.component */ 1616);
/* harmony import */ var _components_two_column_layout_two_column_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/two-column-layout/two-column-layout.component */ 4013);
/* harmony import */ var _components_figure_figure_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/figure/figure.component */ 3203);









class PreliminariesRosMessagesComponent extends src_app_models_abstract_slide__WEBPACK_IMPORTED_MODULE_1__.AbstractSlide {
    constructor() {
        super();
        this.max = 4;
    }
    ngOnInit() {
    }
}
PreliminariesRosMessagesComponent.ɵfac = function PreliminariesRosMessagesComponent_Factory(t) { return new (t || PreliminariesRosMessagesComponent)(); };
PreliminariesRosMessagesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: PreliminariesRosMessagesComponent, selectors: [["app-preliminaries-ros-messages"]], viewQuery: function PreliminariesRosMessagesComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](src_app_components_slide_slide_component__WEBPACK_IMPORTED_MODULE_0__.SlideComponent, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.slide = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]], decls: 48, vars: 15, consts: [["label", "Robot Operating System", "subTitle", "Messages"], [3, "current", "step"], [1, "emphasize"], ["caption", "Message communication between nodes in ROS, idea from ROS2 website.", 3, "offset"], ["width", "492", "height", "424", "viewBox", "0 0 492 424", "xmlns", "http://www.w3.org/2000/svg"], ["fill", "none", "fill-rule", "evenodd"], ["d", "m247.576 239.669 3.755 5.907-2.953 1.878-96.51 61.345 8.584 13.504-43.374 4.465 22.453-37.378 8.582 13.502 96.51-61.346 2.953-1.877Z", "fill", "#EE7773", "fill-rule", "nonzero", 1, "opacity-transition"], ["d", "m245.458 239.661 2.94 1.899 94.656 61.115 8.68-13.44 22.186 37.536L330.58 322l8.678-13.443-94.655-61.116-2.94-1.898 3.796-5.88Z", "fill", "#EE7773", "fill-rule", "nonzero", 1, "opacity-transition"], ["transform", "translate(0 298)"], ["font-family", "FiraSans-Regular, Fira Sans", "font-size", "25", "fill", "#000"], ["x", "32.375", "y", "71"], ["stroke", "#DE0A10", "stroke-width", "4", "cx", "63", "cy", "63", "r", "61"], ["transform", "translate(366 298)"], ["transform", "translate(156 205)"], ["fill", "#EE7773", "width", "180", "height", "74", "rx", "37"], ["fill", "#FFF", "fill-rule", "nonzero", "font-family", "FiraSans-Regular, Fira Sans", "font-size", "25"], ["x", "59.636", "y", "45"], ["d", "M250 123v44h16l-19.5 39-19.5-39h16v-44h7Z", "fill", "#EE7773", "fill-rule", "nonzero", 1, "opacity-transition"], ["transform", "translate(183)"]], template: function PreliminariesRosMessagesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "app-slide");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "app-title", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "app-two-column-layout")(3, "app-list")(4, "app-list-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "Publisher/subscriber");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "app-list-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "Anonymous");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "app-list-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, "Nodes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, "publish");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, " to a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14, "topic");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "app-list-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16, "Nodes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18, "subscribe");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19, " to a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21, "topic");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "app-figure", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "svg", 4)(24, "g", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](25, "path", 6)(26, "path", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "g", 8)(28, "text", 9)(29, "tspan", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](30, "Node");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](31, "circle", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "g", 12)(33, "text", 9)(34, "tspan", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](35, "Node");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](36, "circle", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](37, "g", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](38, "rect", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](39, "text", 15)(40, "tspan", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](41, "Topic");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](42, "path", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](43, "g", 18)(44, "text", 9)(45, "tspan", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](46, "Node");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](47, "circle", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("current", ctx.step)("step", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("current", ctx.step)("step", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("current", ctx.step)("step", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("current", ctx.step)("step", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("offset", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("opacity-active", ctx.step >= 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("opacity-active", ctx.step >= 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("opacity-active", ctx.step >= 3);
    } }, dependencies: [src_app_components_slide_slide_component__WEBPACK_IMPORTED_MODULE_0__.SlideComponent, _components_title_title_component__WEBPACK_IMPORTED_MODULE_2__.TitleComponent, _components_list_list_component__WEBPACK_IMPORTED_MODULE_3__.ListComponent, _components_list_item_list_item_component__WEBPACK_IMPORTED_MODULE_4__.ListItemComponent, _components_two_column_layout_two_column_layout_component__WEBPACK_IMPORTED_MODULE_5__.TwoColumnLayoutComponent, _components_figure_figure_component__WEBPACK_IMPORTED_MODULE_6__.FigureComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcmVsaW1pbmFyaWVzLXJvcy1tZXNzYWdlcy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 9373:
/*!*******************************************************************************************!*\
  !*** ./src/app/slides/preliminaries-ros-services/preliminaries-ros-services.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PreliminariesRosServicesComponent": () => (/* binding */ PreliminariesRosServicesComponent)
/* harmony export */ });
/* harmony import */ var src_app_components_slide_slide_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/slide/slide.component */ 2459);
/* harmony import */ var src_app_models_abstract_slide__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/abstract-slide */ 5726);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _components_title_title_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/title/title.component */ 9527);
/* harmony import */ var _components_list_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/list/list.component */ 7309);
/* harmony import */ var _components_list_item_list_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/list-item/list-item.component */ 1616);
/* harmony import */ var _components_two_column_layout_two_column_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/two-column-layout/two-column-layout.component */ 4013);
/* harmony import */ var _components_figure_figure_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/figure/figure.component */ 3203);









class PreliminariesRosServicesComponent extends src_app_models_abstract_slide__WEBPACK_IMPORTED_MODULE_1__.AbstractSlide {
  constructor() {
    super();
    this.max = 5;
  }

  ngOnInit() {}

}

PreliminariesRosServicesComponent.ɵfac = function PreliminariesRosServicesComponent_Factory(t) {
  return new (t || PreliminariesRosServicesComponent)();
};

PreliminariesRosServicesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: PreliminariesRosServicesComponent,
  selectors: [["app-preliminaries-ros-services"]],
  viewQuery: function PreliminariesRosServicesComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](src_app_components_slide_slide_component__WEBPACK_IMPORTED_MODULE_0__.SlideComponent, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.slide = _t.first);
    }
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]],
  decls: 60,
  vars: 15,
  consts: [["label", "Robot Operating System", "subTitle", "Services"], [3, "current", "step"], [1, "emphasize"], ["caption", "Service communication between client and server in ROS, idea from ROS2 website.", 3, "offset"], ["width", "540", "height", "541", "viewBox", "0 0 741 541", "xmlns", "http://www.w3.org/2000/svg"], ["id", "Page-1", "stroke", "none", "stroke-width", "1", "fill", "none", "fill-rule", "evenodd"], ["id", "services-example"], ["id", "Rectangle", "stroke", "#DE0A10", "stroke-width", "4", "x", "296", "y", "128", "width", "214", "height", "258", "rx", "37"], ["id", "response", "transform", "translate(120.5 125.5)", "fill", "#EE7773", "fill-rule", "nonzero", 1, "opacity-transition"], ["id", "Line", "d", "M194.324 205.619 183.95 247.97l-12.35-10.484a340.566 340.566 0 0 1-68.198 54.997C67.664 314.405 33.588 326.41 1.18 328.436l-.982.058-3.494.197-.394-6.988 3.494-.197c31.458-1.774 64.77-13.417 99.94-34.99a333.553 333.553 0 0 0 66.51-53.569l-12.035-10.217 40.106-17.111Z"], ["id", "Line", "d", "m564.205-.456 1.841 43.564-14.742-6.608c-17.118 33.94-37.743 64.064-61.874 90.366-31.861 34.727-69.076 61.963-111.625 81.695l-1.345.62-3.182 1.46-2.919-6.363 3.181-1.46c42.262-19.39 79.165-46.278 110.732-80.684 23.621-25.747 43.834-55.244 60.638-88.5l-14.452-6.478L564.205-.456Z"], ["id", "Group-2", "transform", "translate(315 198)"], ["id", "Rectangle", "fill", "#EE7773", "x", "0", "y", "0", "width", "180", "height", "74", "rx", "37"], ["id", "Request", "fill", "#FFF", "fill-rule", "nonzero", "font-family", "FiraSans-Regular, Fira Sans", "font-size", "25", "font-weight", "normal"], ["x", "43.536", "y", "45"], ["id", "request", "transform", "translate(83.5 107.5)", "fill", "#EE7773", "fill-rule", "nonzero", 1, "opacity-transition"], ["id", "Line", "d", "m555.222-3.757.535 6.979-3.49.268c-18.207 1.397-40.93 13.894-67.957 37.64a342.914 342.914 0 0 0-47.973 51.807l13.17 8.716-37.783 21.764 5.259-43.285 13.505 8.935a349.93 349.93 0 0 1 49.202-53.196c27.78-24.408 51.526-37.559 71.44-39.311l.602-.05 3.49-.267Z"], ["id", "Line", "d", "m233.557 123.762 1.681 6.795-3.398.84c-45.798 11.33-89.047 32.845-129.764 64.573-30.433 23.715-56.55 50.872-78.36 81.48l13.36 8.463-37.344 22.51 4.399-43.382 13.664 8.657c22.249-31.29 48.911-59.041 79.978-83.25 41.061-31.995 84.729-53.835 130.984-65.495l1.403-.35 3.397-.841Z"], ["id", "Group-2", "transform", "translate(315 294)"], ["id", "Response", "fill", "#FFF", "fill-rule", "nonzero", "font-family", "FiraSans-Regular, Fira Sans", "font-size", "25", "font-weight", "normal"], ["x", "34.911", "y", "45"], ["id", "Group-3", "transform", "translate(615)"], ["id", "Oval", "stroke", "#DE0A10", "stroke-width", "4", "fill", "#FFF", "cx", "63", "cy", "63", "r", "61"], ["id", "Group", "transform", "translate(33 38)", "font-family", "FiraSans-Regular, Fira Sans", "font-weight", "normal"], ["id", "Node", "font-size", "25", "fill", "#000"], ["x", ".375", "y", "23"], ["id", "Client", "font-size", "18", "fill", "#A5A5A5"], ["x", "6.947", "y", "45"], ["id", "Group-3", "transform", "translate(0 415)"], ["id", "Server", "font-size", "18", "fill", "#A5A5A5"], ["x", "4.445", "y", "45"], ["id", "Oval", "stroke", "#DE0A10", "stroke-width", "4", "cx", "63", "cy", "63", "r", "61"], ["id", "Service", "font-family", "FiraSans-Regular, Fira Sans", "font-size", "25", "font-weight", "normal", "fill", "#000"], ["x", "361.837", "y", "169"]],
  template: function PreliminariesRosServicesComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "app-slide");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "app-title", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "app-two-column-layout")(3, "app-list")(4, "app-list-item", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "Request/response");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "app-list-item", 1)(7, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, "Client");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, " sends a request");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "app-list-item", 1)(11, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, "Server");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13, " responds");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "app-list-item", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15, "ROS1: synchronous");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "app-list-item", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17, "ROS2: asynchronous");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "app-figure", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "svg", 4)(20, "g", 5)(21, "g", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](22, "rect", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "g", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](24, "path", 9)(25, "path", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "g", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](27, "rect", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "text", 13)(29, "tspan", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](30, "Request");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "g", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](32, "path", 16)(33, "path", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](34, "g", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](35, "rect", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](36, "text", 19)(37, "tspan", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](38, "Response");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](39, "g", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](40, "circle", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](41, "g", 23)(42, "text", 24)(43, "tspan", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](44, "Node");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](45, "text", 26)(46, "tspan", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](47, "Client");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](48, "g", 28)(49, "g", 23)(50, "text", 24)(51, "tspan", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](52, "Node");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](53, "text", 29)(54, "tspan", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](55, "Server");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](56, "circle", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](57, "text", 32)(58, "tspan", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](59, "Service");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("current", ctx.step)("step", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("current", ctx.step)("step", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("current", ctx.step)("step", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("current", ctx.step)("step", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("current", ctx.step)("step", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("offset", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("opacity-active", ctx.step >= 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("opacity-active", ctx.step >= 2);
    }
  },
  dependencies: [src_app_components_slide_slide_component__WEBPACK_IMPORTED_MODULE_0__.SlideComponent, _components_title_title_component__WEBPACK_IMPORTED_MODULE_2__.TitleComponent, _components_list_list_component__WEBPACK_IMPORTED_MODULE_3__.ListComponent, _components_list_item_list_item_component__WEBPACK_IMPORTED_MODULE_4__.ListItemComponent, _components_two_column_layout_two_column_layout_component__WEBPACK_IMPORTED_MODULE_5__.TwoColumnLayoutComponent, _components_figure_figure_component__WEBPACK_IMPORTED_MODULE_6__.FigureComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcmVsaW1pbmFyaWVzLXJvcy1zZXJ2aWNlcy5jb21wb25lbnQuc2NzcyJ9 */"]
});

/***/ }),

/***/ 3774:
/*!*************************************************************************!*\
  !*** ./src/app/slides/preliminaries-ros/preliminaries-ros.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PreliminariesRosComponent": () => (/* binding */ PreliminariesRosComponent)
/* harmony export */ });
/* harmony import */ var src_app_components_slide_slide_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/slide/slide.component */ 2459);
/* harmony import */ var src_app_models_abstract_slide__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/abstract-slide */ 5726);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _components_title_title_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/title/title.component */ 9527);
/* harmony import */ var _components_list_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/list/list.component */ 7309);
/* harmony import */ var _components_list_item_list_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/list-item/list-item.component */ 1616);
/* harmony import */ var _components_two_column_layout_two_column_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/two-column-layout/two-column-layout.component */ 4013);
/* harmony import */ var _components_figure_figure_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/figure/figure.component */ 3203);









class PreliminariesRosComponent extends src_app_models_abstract_slide__WEBPACK_IMPORTED_MODULE_1__.AbstractSlide {
    constructor() {
        super();
        this.max = 5;
    }
    ngOnInit() {
    }
}
PreliminariesRosComponent.ɵfac = function PreliminariesRosComponent_Factory(t) { return new (t || PreliminariesRosComponent)(); };
PreliminariesRosComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: PreliminariesRosComponent, selectors: [["app-preliminaries-ros"]], viewQuery: function PreliminariesRosComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](src_app_components_slide_slide_component__WEBPACK_IMPORTED_MODULE_0__.SlideComponent, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.slide = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]], decls: 61, vars: 13, consts: [["label", "Robot Operating System"], [3, "current", "step"], [1, "emphasize"], ["caption", "Sketch of ROS graph connected to parts of the robot.", 3, "offset", "current", "step"], ["width", "530", "viewBox", "0 0 831 629", "xmlns", "http://www.w3.org/2000/svg"], ["fill", "none", "fill-rule", "evenodd"], ["d", "m90.087 40.585 2.164 2.751 46.199 58.738 12.576-9.89 8.783 42.709-39.437-18.6 12.576-9.891-46.199-58.738-2.164-2.751 5.502-4.328Z", "fill", "#EE7773", "fill-rule", "nonzero"], ["stroke", "#EE7773", "stroke-width", "7", "stroke-linecap", "square", "d", "m254.5 219.5 102 33"], ["stroke", "#EE7773", "stroke-width", "7", "stroke-linecap", "square", "d", "m566.5 219.5-83 33"], ["stroke", "#EE7773", "stroke-width", "7", "stroke-linecap", "square", "d", "M420.5 371.5v-44"], ["d", "M424 494v23h16l-19.5 39-19.5-39h16v-23h7Z", "fill", "#EE7773", "fill-rule", "nonzero"], ["fill", "#EE7773", "width", "180", "height", "74", "rx", "37"], ["fill", "#FFF", "fill-rule", "nonzero", "font-family", "FiraSans-Regular, Fira Sans", "font-size", "25"], ["x", "41.998", "y", "45"], ["fill", "#EE7773", "x", "324", "y", "555", "width", "180", "height", "74", "rx", "37"], ["x", "356.736", "y", "600"], ["d", "m737.175 40.561 5.264 4.614-2.307 2.632-52.625 60.045 12.033 10.546-40.37 16.478 11.04-42.183 12.033 10.546 52.625-60.046 2.307-2.632Z", "fill", "#EE7773", "fill-rule", "nonzero"], ["transform", "translate(651)"], ["x", "41.224", "y", "45"], ["transform", "translate(141 118)"], ["font-family", "FiraSans-Regular, Fira Sans", "font-size", "25", "fill", "#000"], ["x", "32.375", "y", "71"], ["stroke", "#DE0A10", "stroke-width", "4", "cx", "63", "cy", "63", "r", "61"], ["transform", "translate(553 118)"], ["transform", "translate(357 201)"], ["transform", "translate(357 371)"]], template: function PreliminariesRosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "app-slide");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "app-title", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "app-two-column-layout")(3, "app-list")(4, "app-list-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "Robotic middleware");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "app-list-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "ROS1 and ROS2");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "app-list-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, " Separation in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, "nodes");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "app-list")(13, "app-list-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14, "A process that performs computation");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "app-list-item", 1)(16, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17, "Communication");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18, " between different nodes of the robot");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "app-figure", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "svg", 4)(21, "g", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](22, "path", 6)(23, "path", 7)(24, "path", 8)(25, "path", 9)(26, "path", 10)(27, "rect", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "text", 12)(29, "tspan", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](30, "Sensor 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](31, "rect", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "text", 12)(33, "tspan", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](34, "Actuator 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](35, "path", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](36, "g", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](37, "rect", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](38, "text", 12)(39, "tspan", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](40, "Sensor 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](41, "g", 19)(42, "text", 20)(43, "tspan", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](44, "Node");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](45, "circle", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](46, "g", 23)(47, "text", 20)(48, "tspan", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](49, "Node");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](50, "circle", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](51, "g", 24)(52, "text", 20)(53, "tspan", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](54, "Node");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](55, "circle", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](56, "g", 25)(57, "text", 20)(58, "tspan", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](59, "Node");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](60, "circle", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("current", ctx.step)("step", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("current", ctx.step)("step", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("current", ctx.step)("step", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("current", ctx.step)("step", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("current", ctx.step)("step", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("offset", 20)("current", ctx.step)("step", 3);
    } }, dependencies: [src_app_components_slide_slide_component__WEBPACK_IMPORTED_MODULE_0__.SlideComponent, _components_title_title_component__WEBPACK_IMPORTED_MODULE_2__.TitleComponent, _components_list_list_component__WEBPACK_IMPORTED_MODULE_3__.ListComponent, _components_list_item_list_item_component__WEBPACK_IMPORTED_MODULE_4__.ListItemComponent, _components_two_column_layout_two_column_layout_component__WEBPACK_IMPORTED_MODULE_5__.TwoColumnLayoutComponent, _components_figure_figure_component__WEBPACK_IMPORTED_MODULE_6__.FigureComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcmVsaW1pbmFyaWVzLXJvcy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 4172:
/*!***********************************************************************************************************************!*\
  !*** ./src/app/slides/preliminaries-supervisory-control-theory/preliminaries-supervisory-control-theory.component.ts ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PreliminariesSupervisoryControlTheoryComponent": () => (/* binding */ PreliminariesSupervisoryControlTheoryComponent)
/* harmony export */ });
/* harmony import */ var src_app_components_slide_slide_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/slide/slide.component */ 2459);
/* harmony import */ var src_app_models_abstract_slide__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/abstract-slide */ 5726);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _components_title_title_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/title/title.component */ 9527);
/* harmony import */ var _components_list_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/list/list.component */ 7309);
/* harmony import */ var _components_list_item_list_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/list-item/list-item.component */ 1616);
/* harmony import */ var _components_two_column_layout_two_column_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/two-column-layout/two-column-layout.component */ 4013);
/* harmony import */ var _components_citation_citation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/citation/citation.component */ 5081);
/* harmony import */ var _components_citations_citations_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/citations/citations.component */ 882);
/* harmony import */ var _components_figure_figure_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/figure/figure.component */ 3203);
/* harmony import */ var _components_citation_reference_citation_reference_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/citation-reference/citation-reference.component */ 5598);












class PreliminariesSupervisoryControlTheoryComponent extends src_app_models_abstract_slide__WEBPACK_IMPORTED_MODULE_1__.AbstractSlide {
    constructor() {
        super();
        this.max = 6;
    }
    ngOnInit() {
    }
}
PreliminariesSupervisoryControlTheoryComponent.ɵfac = function PreliminariesSupervisoryControlTheoryComponent_Factory(t) { return new (t || PreliminariesSupervisoryControlTheoryComponent)(); };
PreliminariesSupervisoryControlTheoryComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({ type: PreliminariesSupervisoryControlTheoryComponent, selectors: [["app-preliminaries-supervisory-control-theory"]], viewQuery: function PreliminariesSupervisoryControlTheoryComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](src_app_components_slide_slide_component__WEBPACK_IMPORTED_MODULE_0__.SlideComponent, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.slide = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵInheritDefinitionFeature"]], decls: 106, vars: 34, consts: [["label", "Supervisory Control Theory"], [3, "current", "step"], [3, "citation"], [1, "emphasize"], ["caption", "Example of two plants and requirements in Supervisory Control Theory.", 3, "offset", "current", "step"], ["width", "500", "viewBox", "0 0 560 688", "xmlns", "http://www.w3.org/2000/svg"], ["fill", "none", "fill-rule", "evenodd"], ["transform", "translate(15)"], ["stroke", "#979797", "stroke-width", "4", "cx", "60.5", "cy", "157.5", "r", "58.5"], ["stroke", "#979797", "stroke-width", "4", "cx", "440.5", "cy", "157.5", "r", "58.5"], ["stroke", "#979797", "stroke-width", "4", "cx", "60.5", "cy", "157.5", "r", "45.5"], ["d", "m374.214 140.88 7.957 16.543 1.156 2.403-2.654-.26-18.27-1.79.293-2.986 15.615 1.53-6.8-14.14 2.703-1.3Zm-245.91 9.591 1.699 2.472a322.246 322.246 0 0 0-6.493 4.583l-1.623 1.183-1.774-2.418c2.73-2.003 5.46-3.943 8.19-5.82Zm235.53-5.87c1.198.763 2.396 1.539 3.607 2.335l1.215.804 3.534 2.47-1.718 2.46-3.506-2.451c-1.054-.7-2.109-1.392-3.163-2.074l-1.582-1.015 1.613-2.53Zm-218.599-4.961 1.529 2.582a282.714 282.714 0 0 0-6.777 4.142l-1.694 1.076-1.618-2.526a287.558 287.558 0 0 1 8.56-5.274Zm201.308-5.22a267.205 267.205 0 0 1 7.006 3.922l1.751 1.024-1.523 2.584a267.587 267.587 0 0 0-6.927-3.946l-1.732-.944 1.425-2.64Zm-183.628-4.366 1.326 2.692a248.977 248.977 0 0 0-7.061 3.618l-1.766.95-1.43-2.637a253.529 253.529 0 0 1 8.931-4.623Zm165.533-4.483a236.592 236.592 0 0 1 7.304 3.35l1.826.885-1.319 2.694a236.377 236.377 0 0 0-7.212-3.382l-1.803-.8 1.204-2.747ZM181.36 121.93l1.087 2.796c-2.447.951-4.894 1.953-7.34 3.006l-1.836.8-1.21-2.745c3.1-1.367 6.2-2.652 9.3-3.857Zm128.282-3.605c2.528.84 5.056 1.735 7.584 2.683l1.896.72-1.08 2.8a211.336 211.336 0 0 0-7.477-2.725l-1.87-.63.947-2.848Zm-109.203-2.785.812 2.888c-2.53.711-5.059 1.478-7.589 2.299l-1.897.626-.954-2.844a203.825 203.825 0 0 1 9.628-2.97Zm89.798-2.605c2.715.606 5.43 1.275 8.146 2.005l1.63.446-.805 2.89a192.713 192.713 0 0 0-7.7-1.973l-1.925-.44.654-2.928Zm-70.123-1.842.505 2.958c-2.702.461-5.405.985-8.108 1.572l-1.622.359-.662-2.926c3.296-.746 6.591-1.4 9.887-1.963Zm50.238-1.486c2.774.31 5.548.683 8.322 1.122l1.665.272-.496 2.958a180.589 180.589 0 0 0-8.186-1.18l-1.638-.19.333-2.982Zm-30.23-.805.175 2.995c-2.744.16-5.488.385-8.233.674l-1.646.181-.342-2.98c3.349-.385 6.698-.674 10.047-.87Zm10.375-.302c2.724 0 5.445.062 8.166.187l1.632.082-.165 2.996a175.327 175.327 0 0 0-7.705-.254l-1.928-.011h-.282l-.005-3h.287Z", "fill", "#979797", "fill-rule", "nonzero", 1, "opacity-transition"], ["d", "M250.5 217.5c-39.017 0-78.007-12.824-116.978-38.461l-1.18-.78-8.325-5.82 5.472 11.381-2.703 1.3-7.957-16.543-1.156-2.403 2.654.26 18.27 1.79-.293 2.986-12.571-1.232 8.298 5.802c38.865 25.824 77.68 38.72 116.469 38.72 42.399 0 84.833-15.41 127.325-46.27l1.288-.94 1.774 2.42c-43.41 31.845-86.881 47.79-130.387 47.79Z", "fill", "#979797", "fill-rule", "nonzero", 1, "opacity-transition"], ["font-family", "FiraSans-Regular, Fira Sans", "font-size", "25", "fill", "#000", 1, "opacity-transition"], ["x", "244.2", "y", "90"], ["x", "243.575", "y", "254"], ["font-family", "FiraSans-Regular, Fira Sans", "font-size", "25", "fill", "#000"], ["x", "55.087", "y", "165"], ["x", "435.262", "y", "162"], ["font-family", "FiraSans-Bold, Fira Sans", "font-size", "25", "font-weight", "bold", "fill", "#000"], ["x", ".75", "y", "29"], ["transform", "translate(15 297)"], ["stroke", "#979797", "stroke-width", "4", "cx", "60.5", "cy", "144.5", "r", "58.5"], ["stroke", "#979797", "stroke-width", "4", "cx", "440.5", "cy", "144.5", "r", "58.5"], ["stroke", "#979797", "stroke-width", "4", "cx", "60.5", "cy", "144.5", "r", "45.5"], ["d", "m374.214 127.88 7.957 16.543 1.156 2.403-2.654-.26-18.27-1.79.293-2.986 15.615 1.53-6.8-14.14 2.703-1.3Zm-245.91 9.591 1.699 2.472a322.246 322.246 0 0 0-6.493 4.583l-1.623 1.183-1.774-2.418c2.73-2.003 5.46-3.943 8.19-5.82Zm235.53-5.87c1.198.763 2.396 1.539 3.607 2.335l1.215.804 3.534 2.47-1.718 2.46-3.506-2.451c-1.054-.7-2.109-1.392-3.163-2.074l-1.582-1.015 1.613-2.53Zm-218.599-4.961 1.529 2.582a282.714 282.714 0 0 0-6.777 4.142l-1.694 1.076-1.618-2.526a287.558 287.558 0 0 1 8.56-5.274Zm201.308-5.22a267.205 267.205 0 0 1 7.006 3.922l1.751 1.024-1.523 2.584a267.587 267.587 0 0 0-6.927-3.946l-1.732-.944 1.425-2.64Zm-183.628-4.366 1.326 2.692a248.977 248.977 0 0 0-7.061 3.618l-1.766.95-1.43-2.637a253.529 253.529 0 0 1 8.931-4.623Zm165.533-4.483a236.592 236.592 0 0 1 7.304 3.35l1.826.885-1.319 2.694a236.377 236.377 0 0 0-7.212-3.382l-1.803-.8 1.204-2.747ZM181.36 108.93l1.087 2.796c-2.447.951-4.894 1.953-7.34 3.006l-1.836.8-1.21-2.745c3.1-1.367 6.2-2.652 9.3-3.857Zm128.282-3.605c2.528.84 5.056 1.735 7.584 2.683l1.896.72-1.08 2.8a211.336 211.336 0 0 0-7.477-2.725l-1.87-.63.947-2.848Zm-109.203-2.785.812 2.888c-2.53.711-5.059 1.478-7.589 2.299l-1.897.626-.954-2.844a203.825 203.825 0 0 1 9.628-2.97Zm89.798-2.605c2.715.606 5.43 1.275 8.146 2.005l1.63.446-.805 2.89a192.713 192.713 0 0 0-7.7-1.973l-1.925-.44.654-2.928Zm-70.123-1.842.505 2.958c-2.702.461-5.405.985-8.108 1.572l-1.622.359-.662-2.926c3.296-.746 6.591-1.4 9.887-1.963Zm50.238-1.486c2.774.31 5.548.683 8.322 1.122l1.665.272-.496 2.958a180.589 180.589 0 0 0-8.186-1.18l-1.638-.19.333-2.982Zm-30.23-.805.175 2.995c-2.744.16-5.488.385-8.233.674l-1.646.181-.342-2.98a180.05 180.05 0 0 1 10.047-.87Zm10.375-.302c2.724 0 5.445.062 8.166.187l1.632.082-.165 2.996a175.329 175.329 0 0 0-7.705-.254l-1.928-.011h-.282l-.005-3h.287Z", "fill", "#979797", "fill-rule", "nonzero", 1, "opacity-transition"], ["d", "M250.5 204.5c-39.017 0-78.007-12.824-116.978-38.461l-1.18-.78-8.325-5.82 5.472 11.381-2.703 1.3-7.957-16.543-1.156-2.403 2.654.26 18.27 1.79-.293 2.986-12.571-1.232 8.298 5.802c38.865 25.824 77.68 38.72 116.469 38.72 42.399 0 84.833-15.41 127.325-46.27l1.288-.94 1.774 2.42c-43.41 31.845-86.881 47.79-130.387 47.79Z", "fill", "#979797", "fill-rule", "nonzero", 1, "opacity-transition"], ["x", "245.025", "y", "77"], ["x", "243.525", "y", "241"], ["x", "54.263", "y", "153"], ["x", "433.85", "y", "152"], ["x", ".412", "y", "29"], [1, "opacity-transition"], ["transform", "translate(0 608)", "fill", "#000", "font-family", "FiraSans-Bold, Fira Sans", "font-size", "25", "font-weight", "bold"], ["x", "0", "y", "29"], ["x", "147.425", "y", "29", "font-family", "FiraSans-Regular, Fira Sans", "font-weight", "normal"], ["x", "168.9", "y", "29"], ["x", "238", "y", "29", "font-family", "FiraSans-Regular, Fira Sans", "font-weight", "normal"], ["x", "331.825", "y", "29"], ["x", "481.725", "y", "29", "font-family", "FiraSans-Regular, Fira Sans", "font-weight", "normal"], ["transform", "translate(1 652)", "fill", "#000", "font-family", "FiraSans-Bold, Fira Sans", "font-size", "25", "font-weight", "bold"], ["x", "169", "y", "29"], ["x", "238.1", "y", "29", "font-family", "FiraSans-Regular, Fira Sans", "font-weight", "normal"], ["x", "331.05", "y", "29"], ["x", "480.95", "y", "29", "font-family", "FiraSans-Regular, Fira Sans", "font-weight", "normal"], ["text", "Peter J. Ramadge and W. Murray Wonham. Supervisory control of a class of discrete event processes. SIAM journal on control and optimization, 25(1):206\u2013230, 1987. 1, 2, 6"], ["ramadge", ""]], template: function PreliminariesSupervisoryControlTheoryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "app-slide");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "app-title", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "app-two-column-layout")(3, "app-list")(4, "app-list-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5, "By Ramadge and Woham ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](6, "app-citation-reference", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "app-list-item", 1)(8, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](9, "Restrict");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10, " behaviour of discrete event system based on specifications ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "app-list-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](12, "Model ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](14, "plants");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](15, " with automata");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "app-list-item", 1)(17, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](18, "Controllable");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](19, " and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](20, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](21, "uncontrollable");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](22, " events");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](23, "app-list-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](24, "Specify ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](25, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](26, "requirements");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](27, "app-list-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](28, "Synthesize supervisory controller");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](29, "app-figure", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](30, "svg", 5)(31, "g", 6)(32, "g", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](33, "circle", 8)(34, "circle", 8)(35, "circle", 9)(36, "circle", 10)(37, "path", 11)(38, "path", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](39, "text", 13)(40, "tspan", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](41, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](42, "text", 13)(43, "tspan", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](44, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](45, "text", 16)(46, "tspan", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](47, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](48, "text", 16)(49, "tspan", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](50, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](51, "text", 19)(52, "tspan", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](53, "Plant A");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](54, "g", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](55, "circle", 22)(56, "circle", 22)(57, "circle", 23)(58, "circle", 24)(59, "path", 25)(60, "path", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](61, "text", 13)(62, "tspan", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](63, "c");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](64, "text", 13)(65, "tspan", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](66, "d");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](67, "text", 16)(68, "tspan", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](69, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](70, "text", 16)(71, "tspan", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](72, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](73, "text", 19)(74, "tspan", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](75, "Plant B");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](76, "g", 32)(77, "text", 33)(78, "tspan", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](79, "requirement ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](80, "tspan", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](81, "b ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](82, "tspan", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](83, "needs");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](84, "tspan", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](85, " Plant B ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](86, "tspan", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](87, "to be in state");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](88, "tspan", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](89, " 4");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](90, "text", 40)(91, "tspan", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](92, "requirement ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](93, "tspan", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](94, "d ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](95, "tspan", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](96, "needs");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](97, "tspan", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](98, " Plant A ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](99, "tspan", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](100, "to be in state");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](101, "tspan", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](102, " 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](103, "app-citations");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](104, "app-citation", 45, 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](105);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("current", ctx.step)("step", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("citation", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("current", ctx.step)("step", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("current", ctx.step)("step", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("current", ctx.step)("step", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("current", ctx.step)("step", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("current", ctx.step)("step", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("offset", 0)("current", ctx.step)("step", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("opacity-active", ctx.step >= 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("opacity-active", ctx.step >= 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("opacity-active", ctx.step >= 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("opacity-active", ctx.step >= 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("opacity-active", ctx.step >= 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("opacity-active", ctx.step >= 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("opacity-active", ctx.step >= 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("opacity-active", ctx.step >= 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("opacity-active", ctx.step >= 5);
    } }, dependencies: [src_app_components_slide_slide_component__WEBPACK_IMPORTED_MODULE_0__.SlideComponent, _components_title_title_component__WEBPACK_IMPORTED_MODULE_2__.TitleComponent, _components_list_list_component__WEBPACK_IMPORTED_MODULE_3__.ListComponent, _components_list_item_list_item_component__WEBPACK_IMPORTED_MODULE_4__.ListItemComponent, _components_two_column_layout_two_column_layout_component__WEBPACK_IMPORTED_MODULE_5__.TwoColumnLayoutComponent, _components_citation_citation_component__WEBPACK_IMPORTED_MODULE_6__.CitationComponent, _components_citations_citations_component__WEBPACK_IMPORTED_MODULE_7__.CitationsComponent, _components_figure_figure_component__WEBPACK_IMPORTED_MODULE_8__.FigureComponent, _components_citation_reference_citation_reference_component__WEBPACK_IMPORTED_MODULE_9__.CitationReferenceComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcmVsaW1pbmFyaWVzLXN1cGVydmlzb3J5LWNvbnRyb2wtdGhlb3J5LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 1857:
/*!*********************************************************************!*\
  !*** ./src/app/slides/supervisor-idea/supervisor-idea.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SupervisorIdeaComponent": () => (/* binding */ SupervisorIdeaComponent)
/* harmony export */ });
/* harmony import */ var src_app_components_slide_slide_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/slide/slide.component */ 2459);
/* harmony import */ var src_app_models_abstract_slide__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/abstract-slide */ 5726);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _components_title_title_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/title/title.component */ 9527);
/* harmony import */ var _components_list_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/list/list.component */ 7309);
/* harmony import */ var _components_list_item_list_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/list-item/list-item.component */ 1616);
/* harmony import */ var _components_two_column_layout_two_column_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/two-column-layout/two-column-layout.component */ 4013);
/* harmony import */ var _components_figure_figure_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/figure/figure.component */ 3203);









class SupervisorIdeaComponent extends src_app_models_abstract_slide__WEBPACK_IMPORTED_MODULE_1__.AbstractSlide {
    constructor() {
        super();
        this.max = 6;
    }
    ngOnInit() {
    }
}
SupervisorIdeaComponent.ɵfac = function SupervisorIdeaComponent_Factory(t) { return new (t || SupervisorIdeaComponent)(); };
SupervisorIdeaComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: SupervisorIdeaComponent, selectors: [["app-supervisor-idea"]], viewQuery: function SupervisorIdeaComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](src_app_components_slide_slide_component__WEBPACK_IMPORTED_MODULE_0__.SlideComponent, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.slide = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]], decls: 114, vars: 24, consts: [["label", "Idea"], [3, "current", "step"], [1, "emphasize"], ["caption", "Overview of supervisor idea."], ["xmlns", "http://www.w3.org/2000/svg", "width", "580", "viewBox", "0 0 901 718"], ["fill", "none", "fill-rule", "evenodd"], ["transform", "translate(86.5 221)", 1, "opacity-transition"], ["fill", "#EE7773", "fill-rule", "nonzero", "d", "M255.148921,76.6806849 L256,103.5 L234.0339,88.0892742 L242.786,83.359 L242.71217,83.2306961 L246.183352,81.2430109 L246.306,81.458 L255.148921,76.6806849 Z M235.589523,64.1281012 L236.686327,65.8005307 C238.209009,68.1223467 239.742921,70.5384983 241.288108,73.0490113 L242.061641,74.3121313 L243.10235,76.0200322 L239.686548,78.1014496 L238.64584,76.3935487 C237.116295,73.8834216 235.598741,71.4678238 234.093224,69.1467811 L233.341468,67.9941394 L232.244664,66.32171 L235.589523,64.1281012 Z M223.639929,47.8614718 L224.891214,49.4216919 C226.651931,51.6171197 228.428331,53.9483814 230.220567,56.4155258 L230.989637,57.4811929 L232.155026,59.1065759 L228.90426,61.4373527 L227.738871,59.8119697 C225.977954,57.3559936 224.234673,55.035969 222.509181,52.8519449 L221.770774,51.9242613 L220.519489,50.3640412 L223.639929,47.8614718 Z M209.460779,33.2847878 L210.965624,34.6021493 C211.650042,35.2012979 212.323322,35.8087171 212.985576,36.4245141 C214.485414,37.819363 215.993293,39.3167445 217.512692,40.9198757 L218.273369,41.7302687 L219.635183,43.1950085 L216.705703,45.9186365 L215.343889,44.4538968 C213.631189,42.6117507 211.938697,40.9133699 210.261644,39.3537103 C209.839779,38.9614395 209.413122,38.5726278 208.981672,38.1872749 L208.330901,37.6118394 L206.826056,36.2944779 L209.460779,33.2847878 Z M192.571031,21.8815454 L194.311238,22.867284 C196.949096,24.3614961 199.47913,25.9363078 201.901189,27.5917645 L202.932603,28.3061835 L204.569568,29.4552458 L202.271443,32.7291766 L200.634478,31.5801142 C198.336475,29.9670386 195.932401,28.4300305 193.422106,26.9691353 L192.339761,26.3476975 L190.599554,25.3619589 L192.571031,21.8815454 Z M173.979204,13.6706901 L175.854546,14.3657407 C178.635807,15.3965489 181.330418,16.4920978 183.938334,17.6524551 L185.235067,18.2380348 L187.05322,19.0712935 L185.386703,22.7075993 L183.56855,21.8743405 C181.068165,20.7284152 178.481408,19.644379 175.808234,18.6222995 L174.464444,18.1164231 L172.589103,17.4213725 L173.979204,13.6706901 Z M154.515707,8.09232998 L156.461689,8.5540186 C159.337825,9.23638857 162.142061,9.97229026 164.874394,10.7617706 L166.234568,11.1609759 L168.151225,11.7323153 L167.008546,15.5656279 L165.09189,14.9942885 C162.44642,14.2056959 159.728846,13.4689464 156.939162,12.7840868 L155.538311,12.4459814 L153.59233,11.9842928 L154.515707,8.09232998 Z"], ["fill", "#EE7773", "fill-rule", "nonzero", "d", "M172.951509 390.700974L190.5 411 163.731684 412.859377 167.586 403.594 166.926674 403.307999 168.522381 399.640068 169.123 399.901 172.951509 390.700974zM150.377935 391.339712L152.185442 392.195817C154.54819 393.314905 156.949927 394.432449 159.390651 395.548446L161.228504 396.385153 163.050089 397.210882 161.398631 400.854052 159.577046 400.028323C157.100696 398.905787 154.66328 397.781551 152.264796 396.655609L150.473232 395.810833 148.665724 394.954728 150.377935 391.339712zM132.553006 382.394028L134.325624 383.320217C136.63645 384.527619 138.99205 385.733277 141.392419 386.937183L143.20109 387.839784 144.992406 388.729271 143.213433 392.311903 141.422117 391.422416C138.979863 390.209703 136.582321 388.995011 134.229487 387.778333L132.473245 386.865453 130.700627 385.939263 132.553006 382.394028zM115.179182 372.676342L116.904198 373.68843C119.144825 375.003035 121.437786 376.315647 123.783077 377.626257L125.551858 378.608838 127.302632 379.575683 125.368944 383.077232 123.618169 382.110388C121.222653 380.787493 118.879413 379.462241 116.588446 378.13462L114.880021 377.138461 113.155006 376.126373 115.179182 372.676342zM98.4044614 361.986335L100.061536 363.106202C102.292496 364.613907 104.591298 366.119123 106.957936 367.621829L108.386059 368.523152 110.080274 369.585995 107.954588 372.974425 106.260373 371.911582C103.834945 370.390022 101.477336 368.86532 99.1875407 367.337452L97.8218012 366.420352 96.1647264 365.300484 98.4044614 361.986335zM82.5885873 350.126016L84.1439268 351.383361C86.2842255 353.113592 88.5125426 354.840782 90.8288782 356.564886L91.9943808 357.42668 93.6062363 358.610708 91.2381805 361.834419 89.6263251 360.650391C87.2385835 358.896417 84.9390065 357.13819 82.7275941 355.375663L81.6292349 354.494041 80.0738953 353.236695 82.5885873 350.126016zM68.0950893 336.651435L69.4868788 338.087723C71.4261274 340.088973 73.4813073 342.086594 75.6524541 344.080493L76.5900457 344.934793 78.0736248 346.276058 75.3910938 349.243216 73.9075147 347.901951C71.6469217 345.858207 69.5030458 343.808495 67.4759225 341.75272L66.6143036 340.871302 65.2225141 339.435014 68.0950893 336.651435zM55.938086 321.258913L57.0533526 322.919088C58.5947009 325.213524 60.2858541 327.503851 62.1269909 329.789949L62.9252328 330.769447 64.1975809 332.312538 61.1113987 334.857234 59.8390505 333.314143C57.8524456 330.904808 56.0234643 328.486825 54.3522941 326.060067L53.7330031 325.149621 52.6177364 323.489446 55.938086 321.258913zM47.6237468 303.658154L48.2698808 305.550906C49.1762431 308.205958 50.2787776 310.855543 51.5779816 313.499849L52.074403 314.491216 52.9832984 316.272763 49.4202047 318.090554 48.5113093 316.309007C47.0691964 313.482288 45.8375221 310.64377 44.8168025 307.793645L44.4843765 306.843174 43.8382425 304.950422 47.6237468 303.658154zM41.1712819 284.534908L45.1712819 284.535366 45.1710531 286.535366C45.1706802 289.795773 45.3753478 292.786756 45.7831332 295.507344L45.8893101 296.181857 46.2150261 298.155156 42.2684281 298.806588 41.942712 296.833289C41.4666977 293.949432 41.2116062 290.802964 41.1755147 287.392913L41.1710532 286.534908 41.1712819 284.534908zM43.4557774 264.337678L47.3979741 265.015236 47.0591951 266.986334C46.5346366 270.038342 46.1194952 272.950434 45.8136169 275.722318L45.704034 276.755202 45.5015126 278.744922 41.5220729 278.339879 41.7245943 276.35016C42.0116663 273.529751 42.4103446 270.571838 42.9204753 267.476127L43.1169984 266.308776 43.4557774 264.337678zM47.9925076 244.689053L51.8597855 245.710895 51.3488643 247.644534C50.5783993 250.560446 49.880016 253.384956 49.2536938 256.117976L48.9896819 257.283669 48.5529322 259.235399 44.6494724 258.3619 45.086222 256.41017C45.7018911 253.658892 46.3901745 250.817169 47.1510517 247.884915L47.4815864 246.622692 47.9925076 244.689053zM53.8053468 225.430599L57.6106145 226.663456 56.9941858 228.56609C56.1149289 231.279954 55.284695 233.931867 54.5034811 236.521801L54.0406352 238.068323 53.4713838 239.985601 49.6368289 238.847098 50.2060803 236.929821C50.9756254 234.33794 51.7943558 231.684539 52.6622685 228.969589L53.188918 227.333232 53.8053468 225.430599zM60.4484714 206.483424L64.2039411 207.860539 63.5153833 209.738274C62.5378926 212.403944 61.5994394 215.020366 60.7000235 217.587525L60.1650584 219.121909 59.5095192 221.011424 55.7304885 219.700346 56.3860277 217.81083C57.2762965 215.244734 58.2056667 212.629633 59.1741384 209.965513L59.7599136 208.361158 60.4484714 206.483424zM67.683078 187.781502L71.398 189.264524 70.656489 191.121985C69.6487131 193.646432 68.6707989 196.13324 67.7227469 198.582405L67.017307 200.41222 66.3004372 202.279329 62.5662183 200.845589 63.2830881 198.97848C64.2213234 196.534817 65.1894458 194.053657 66.1874557 191.534993L66.941567 189.638964 67.683078 187.781502zM75.3711518 169.262919L79.0523873 170.827689 78.2700022 172.668307C77.2097733 175.162572 76.1749907 177.624783 75.1656547 180.054937L74.413424 181.871542 73.6502477 183.720207 69.9529179 182.193854 70.7160941 180.34519C71.716985 177.920701 72.7433332 175.464252 73.795139 172.975839L74.5887667 171.103536 75.3711518 169.262919zM83.4059901 150.922469L87.0587711 152.552558 86.2437265 154.378949C85.1410298 156.849923 84.060514 159.292968 83.0021794 161.708081L82.2125874 163.514178 81.4130377 165.347405 77.7465842 163.748305 78.5461339 161.915079C79.5970185 159.505585 80.6700884 157.068227 81.765344 154.603003L82.5909455 152.748859 83.4059901 150.922469zM91.7355173 132.703212L95.3638404 134.387039 94.5219271 136.2012C93.4554858 138.499177 92.4063104 140.775418 91.3744012 143.029922L90.3482474 145.27718 89.5191531 147.097236 85.8790418 145.439047 86.7081361 143.618992C87.7314802 141.372512 88.7720914 139.10434 89.8299698 136.814472L90.893604 134.517374 91.7355173 132.703212zM100.301746 114.608265L103.90879 116.337206 103.044319 118.140728C101.951495 120.420659 100.874131 122.681131 99.8122278 124.922142L98.7554786 127.156666 97.9018201 128.965331 94.2844912 127.258014 95.1381497 125.449349C96.1923171 123.215863 97.261945 120.962948 98.3470337 118.690606L99.4372759 116.411787 100.301746 114.608265zM109.080073 96.5984588L112.668365 98.3659879 111.7846 100.160134C110.667321 102.428342 109.564082 104.678882 108.474884 106.911751L107.390365 109.138731 106.515887 110.937421 102.918506 109.188465 103.792984 107.389774C104.875096 105.164008 105.971247 102.920597 107.081438 100.659542L108.196308 98.3926049 109.080073 96.5984588zM118.026808 78.6938441L121.598444 80.4947929 120.69797 82.2806109C119.561509 84.534437 118.43786 86.7721408 117.327024 88.9937221L116.220458 91.2099291 115.328054 92.9997933 111.748325 91.2149839 112.64073 89.4251197C113.745049 87.2102256 114.86218 84.9792289 115.992122 82.7321293L117.126334 80.479662 118.026808 78.6938441zM127.127115 60.8691933L130.683816 62.6994595 129.768683 64.4778103C128.613354 66.7229264 127.469847 68.953168 126.338162 71.1685347L125.210417 73.3789431 124.302391 75.160933 120.738411 73.34488 121.646438 71.5628902C122.772063 69.3538653 123.909509 67.1299818 125.058775 64.8912394L126.211982 62.647544 127.127115 60.8691933zM136.369774 43.1034807L139.912977 44.9597445 138.984845 46.7313458C137.946088 48.7141062 136.915949 50.686024 135.894428 52.6470991L134.36861 55.5805796 133.446777 57.3554666 129.897003 55.5118007 130.818836 53.7369136C131.833201 51.7838663 132.856183 49.8199867 133.887782 47.8452746L135.441642 44.8750821 136.369774 43.1034807zM145.728162 25.4127082L149.259101 27.2921962 148.319357 29.0576653C147.26738 31.0339819 146.223443 33.0001849 145.187545 34.9562741L143.639727 37.8828224 142.705629 39.6512854 139.168703 37.78309 140.102801 36.014627C141.131992 34.0661292 142.169222 32.1075264 143.214489 30.1388183L144.788418 27.1781773 145.728162 25.4127082zM155.190332 7.78993773L158.710062 9.69033188 157.759865 11.4501971C156.695445 13.4216161 155.638565 15.3835491 154.589225 17.3359961L153.020871 20.2575519 152.075774 22.0201616 148.550555 20.1299687 149.495651 18.367359C150.538672 16.4221203 151.589232 14.4674028 152.647331 12.5032065L154.240135 9.54980292 155.190332 7.78993773zM399.802591 73.9126168L403.421875 75.6157843 402.570291 77.4254265C401.861026 78.9326367 401.153501 80.4710779 400.447722 82.040745L409.64448 85.7743149 389.5 103.5 387.40614 76.7490047 396.738624 80.5359553C397.269267 79.3542922 397.80101 78.1897852 398.333854 77.0424324L398.951007 75.722259 399.802591 73.9126168zM409.285373 56.1144936L412.740372 58.130177 411.73253 59.8576767C410.33403 62.2547883 408.941715 64.7688775 407.555678 67.399905L406.962047 68.5346475 406.040005 70.3094262 402.490448 68.4653431 403.412489 66.6905644C404.82259 63.9763526 406.240416 61.378862 407.666061 58.8980534L408.277531 57.8419933 409.285373 56.1144936zM420.888519 39.474728L424.012617 41.972729 422.763617 43.5347783C421.036573 45.6946872 419.317533 48.0263469 417.60681 50.5297452L416.965679 51.4765697 415.851279 53.1373264 412.529766 50.9085265 413.644166 49.2477698C415.406627 46.6212275 417.181361 44.1668282 418.968682 41.8845594L419.639518 41.0367773 420.888519 39.474728zM436.243421 25.7804632L438.486473 29.0923687 436.83052 30.2138947C434.298722 31.928604 431.991973 33.7503491 429.909358 35.6788195L429.291296 36.260562 427.846231 37.6432349 425.080885 34.753103 426.525951 33.3704301C428.713942 31.2769087 431.13399 29.3047628 433.785178 27.4536819L434.587468 26.9019892 436.243421 25.7804632zM454.678673 16.9535162L456.097571 20.6933996 454.22763 21.4028487C451.392004 22.4786749 448.711898 23.6295167 446.187255 24.8550659L445.247801 25.3181482 443.45933 26.2133421 441.668943 22.6364004 443.457414 21.7412065C446.05311 20.4419674 448.80444 19.2236185 451.711348 18.0858513L452.808731 17.6629654 454.678673 16.9535162zM474.220299 11.5027142L475.093813 15.4061707 473.142085 15.8429278C470.22655 16.4953651 467.421099 17.2016389 464.725774 17.9616382L463.577378 18.2906412 461.657066 18.8495703 460.539207 15.0089463 462.459519 14.4500171C465.195379 13.6537135 468.040696 12.9135056 470.995516 12.2292824L472.268571 11.9394712 474.220299 11.5027142zM494.147821 8.26298072L494.652795 12.2309779 492.668797 12.4834648C489.772596 12.8520401 486.957366 13.2605338 484.223138 13.7089067L482.862775 13.9364162 480.891236 14.2726238 480.218821 10.3295466 482.190359 9.99333902C484.946012 9.52341608 487.782145 9.09437175 490.69879 8.70616697L492.163823 8.51546769 494.147821 8.26298072z"], ["fill", "#EE7773", "fill-rule", "nonzero", "d", "M473.71997,301.300949 L480.558865,308.547634 C481.453395,307.671315 482.340741,306.796994 483.220902,305.92467 L484.586168,304.567417 L486.002368,303.155193 L488.826816,305.987594 L487.410616,307.399818 C486.058891,308.747747 484.690143,310.100336 483.304371,311.457585 L490.191222,318.756545 L464.5,326.5 L473.71997,301.300949 Z M499.830903,288.788321 L502.752775,291.520109 L501.386881,292.981045 C499.586519,294.90668 497.749629,296.842294 495.87621,298.787892 L494.464297,300.248962 L493.071928,301.684689 L490.200476,298.899952 L491.592844,297.464225 C493.471055,295.527527 495.31276,293.600992 497.117956,291.684626 L498.465009,290.249257 L499.830903,288.788321 Z M513.073332,273.905015 L516.107969,276.510965 L514.804994,278.028284 C513.089053,280.026502 511.33157,282.036041 509.532545,284.056905 L508.175488,285.574677 L506.839214,287.062754 L503.86306,284.390207 L505.199334,282.90213 C507.003469,280.893042 508.766114,278.895532 510.48727,276.909606 L511.770357,275.422334 L513.073332,273.905015 Z M525.577991,258.417589 L528.744123,260.862093 L527.521871,262.44516 C525.913368,264.528499 524.256912,266.624859 522.552504,268.73425 L521.265207,270.318736 L519.999965,271.867659 L516.902119,269.337175 L518.167361,267.788252 C519.877392,265.694813 521.539585,263.614767 523.153941,261.548124 L524.355738,260.000655 L525.577991,258.417589 Z M537.087934,242.276762 L540.407317,244.508734 L539.291331,246.168426 C537.763038,248.441297 536.173738,250.730652 534.523434,253.036506 L533.525931,254.421999 L532.352834,256.041828 L529.113178,253.695634 L530.286275,252.075806 C531.938516,249.794368 533.530015,247.530012 535.060779,245.282755 L535.971948,243.936453 L537.087934,242.276762 Z M547.344526,225.270416 L550.841968,227.211525 L549.871413,228.960246 C548.541925,231.355684 547.139363,233.770727 545.663744,236.205404 L544.769606,237.668566 L543.720528,239.371339 L540.314982,237.273184 L541.364059,235.570411 C542.842688,233.170427 544.248821,230.790957 545.582476,228.432029 L546.373972,227.019137 L547.344526,225.270416 Z M555.794536,207.379609 L559.489511,208.911653 L558.723489,210.75914 C557.642627,213.365957 556.467418,215.997866 555.19791,218.654904 L554.555298,219.985517 L553.67805,221.782858 L550.083367,220.028361 L550.960616,218.23102 C552.231346,215.6275 553.40908,213.050512 554.493866,210.500092 L555.028514,209.227097 L555.794536,207.379609 Z M561.691352,188.607289 L565.577703,189.554007 L565.104344,191.497183 C564.419542,194.308345 563.613403,197.151528 562.686045,200.026742 L562.281185,201.260937 L561.648413,203.158198 L557.85389,201.892654 L558.486662,199.995393 C559.418401,197.201729 560.231882,194.442093 560.927222,191.716494 L561.217993,190.550464 L561.691352,188.607289 Z M564.021272,169.17629 L568.019165,169.306125 L567.954247,171.305072 C567.857731,174.276988 567.608536,177.289344 567.206851,180.341985 L567.049072,181.488613 L566.764789,183.468306 L562.805403,182.89974 L563.089687,180.920047 C563.50453,178.031156 563.777498,175.183144 563.90877,172.375863 L563.956355,171.175236 L564.021272,169.17629 Z M566.485177,149.025889 L566.759016,151.007053 C567.163883,153.93617 567.469735,156.828631 567.676499,159.684408 L567.771623,161.10924 L567.89359,163.105518 L563.901035,163.349451 L563.779068,161.353174 C563.610708,158.597553 563.346102,155.804286 562.985177,152.973343 L562.796688,151.554732 L562.522848,149.573568 L566.485177,149.025889 Z M562.131076,129.233314 L562.655548,131.163321 C563.429446,134.011193 564.119369,136.827894 564.72527,139.613431 L565.021218,141.003603 L565.428949,142.961601 L561.512953,143.777061 L561.105223,141.819064 C560.541464,139.111791 559.895307,136.372349 559.166705,133.600747 L558.795533,132.212265 L558.271061,130.282258 L562.131076,129.233314 Z M555.644763,110.125946 L556.359333,111.993936 C557.381052,114.66486 558.335571,117.31073 559.222867,119.931562 L559.747178,121.501056 L560.373169,123.400565 L556.574151,124.652548 L555.948159,122.753039 C555.104271,120.192344 554.194001,117.605842 553.217325,114.993548 L552.623352,113.423077 L551.908781,111.555086 L555.644763,110.125946 Z M547.527889,91.6639891 L548.387725,93.4697252 C549.564616,95.9413069 550.688574,98.3930738 551.75959,100.825037 L552.552926,102.645297 L553.344938,104.481793 L549.671946,106.065817 L548.879934,104.229321 C547.85127,101.844082 546.770089,99.4385119 545.636382,97.0126229 L544.776253,95.1893965 L543.916417,93.3836605 L547.527889,91.6639891 Z M538.169025,73.838826 L539.141437,75.5865143 C540.46818,77.97103 541.749193,80.3383701 542.984473,82.6885436 L543.902357,84.4479551 L544.821948,86.224005 L541.269848,88.0631861 L540.350258,86.2871362 C539.152678,83.974192 537.909602,81.6436961 536.621025,79.2956573 L535.646061,77.5313391 L534.673649,75.7836509 L538.169025,73.838826 Z M527.84495,56.5976154 L528.90629,58.2927721 C530.350729,60.5998065 531.755144,62.8917701 533.119535,65.1686692 L534.135324,66.873519 L535.154687,68.5942455 L531.713234,70.6329709 L530.693871,68.9122444 C529.362961,66.6656135 527.992163,64.4036359 526.581473,62.126318 L525.515977,60.4154533 L524.454636,58.7202966 L527.84495,56.5976154 Z M516.7377,39.8549654 L517.870764,41.5030443 C519.408954,43.7403902 520.91174,45.9643783 522.379122,48.1750132 L523.473021,49.8304857 L524.572099,51.5014217 L521.230226,53.6995779 L520.131148,52.0286418 C518.693561,49.8430681 517.220649,47.6439316 515.71241,45.431237 L514.574607,43.7691739 L513.441542,42.121095 L516.7377,39.8549654 Z M505.003992,23.5731909 L506.195888,25.1792373 C507.7106,27.22027 509.19746,29.2507784 510.65647,31.2707653 L512.106195,33.2872451 L513.270064,34.9137163 L510.017122,37.2414546 L508.853253,35.6149834 C507.42297,33.6162071 505.964876,31.6067703 504.478971,29.5866755 L502.983795,27.5630283 L501.791899,25.9569818 L505.003992,23.5731909 Z M492.743771,7.69005896 L493.984744,9.25849307 C495.560127,11.2495794 497.11035,13.2311471 498.635412,15.203198 L500.152087,17.1720767 L501.369584,18.7588035 L498.19613,21.1937969 L496.978633,19.6070702 C495.47946,17.6532429 493.95515,15.689792 492.405702,13.7167193 L490.847876,11.7404395 L489.606902,10.1720053 L492.743771,7.69005896 Z"], ["fill", "#000", "font-family", "FiraSans-Regular, Fira Sans", "font-size", "25"], ["x", "389.075", "y", "23"], ["x", "583.075", "y", "133"], ["x", "413.075", "y", "126"], ["x", "229.325", "y", "23"], ["x", ".325", "y", "300"], ["transform", "translate(412 404.5)", 1, "opacity-transition"], ["fill", "#EE7773", "fill-rule", "nonzero", "d", "M2.5,-2 L2.5,110.5 L12.5,110.5 L0.5,134.5 L-11.5,110.5 L-1.5,110.5 L-1.5,-2 L2.5,-2 Z"], ["x", "19.5", "y", "67.5"], ["transform", "translate(255 404.5)", 1, "opacity-transition"], ["fill", "#EE7773", "fill-rule", "nonzero", "d", "M97.5,0 L109.5,24 L99.5,24 L99.5,136.5 L95.5,136.5 L95.5,24 L85.5,24 L97.5,0 Z"], ["x", ".5", "y", "67.5"], ["transform", "translate(553 598)", 1, "opacity-transition"], ["fill", "#EE7773", "fill-rule", "nonzero", "d", "M172,21 L196,33 L172,45 L172,35 L-2,35 L-2,31 L172,31 L172,21 Z"], ["x", "75.5", "y", "23"], ["cx", "204", "cy", "181", "r", "61", "fill", "#FFF", "stroke", "#DE0A10", "stroke-width", "4"], ["cx", "616", "cy", "181", "r", "61", "fill", "#FFF", "stroke", "#DE0A10", "stroke-width", "4"], ["fill", "#EE7773", "fill-rule", "nonzero", "d", "M90.0873009 40.5852185L92.2510412 43.3362597 138.45 102.074 151.026086 92.1834218 159.809106 134.893006 120.371627 116.293671 132.948 106.402 86.7489588 47.6637403 84.5852185 44.9126991 90.0873009 40.5852185zM810.5 477L830 516 814 516 814 569 807 569 807 516 791 516 810.5 477z"], ["width", "180", "height", "74", "x", "721", "y", "404", "fill", "#EE7773", "rx", "37"], ["fill", "#FFF", "fill-rule", "nonzero", "font-family", "FiraSans-Regular, Fira Sans", "font-size", "25"], ["x", "777.161", "y", "449"], ["cx", "811", "cy", "628", "r", "61", "fill", "#FFF", "stroke", "#DE0A10", "stroke-width", "4"], ["x", "780.375", "y", "636"], ["width", "180", "height", "74", "fill", "#EE7773", "rx", "37"], ["x", "41.136", "y", "45"], ["fill", "#EE7773", "fill-rule", "nonzero", "d", "M737.174674,40.5609553 L742.439045,45.1746737 L740.132186,47.8068592 L687.507,107.852 L699.540485,118.398461 L659.170449,134.876027 L670.210418,92.693458 L682.243,103.239 L734.867814,43.1931408 L737.174674,40.5609553 Z"], ["width", "180", "height", "74", "x", "651", "fill", "#EE7773", "rx", "37"], ["x", "716.749", "y", "45"], ["x", "173.375", "y", "189"], ["x", "585.375", "y", "189"], ["fill-rule", "nonzero", "transform", "translate(277 330)", 1, "opacity-transition"], ["width", "274", "height", "72", "fill", "#FFF", "stroke", "#EE7773", "stroke-width", "5", "rx", "29"], ["fill", "#0E0E0E", "font-family", "FiraSans-Regular, Fira Sans", "font-size", "25"], ["x", "49.661", "y", "43"], ["fill-rule", "nonzero", "transform", "translate(277 541)", 1, "opacity-transition"], ["width", "274", "height", "174", "fill", "#FFF", "stroke", "#EE7773", "stroke-width", "5", "rx", "29"], ["width", "227", "height", "74", "x", "26.5", "y", "29.5", "fill", "#DE0A10", "rx", "29"], ["x", "45.411", "y", "143"], ["fill", "#FFF", "font-family", "FiraSans-Bold, Fira Sans", "font-size", "25", "font-weight", "bold"], ["x", "75.5", "y", "80"]], template: function SupervisorIdeaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "app-slide");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "app-title", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "app-two-column-layout")(3, "app-list")(4, "app-list-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, " Attach a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "supervisor layer");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, " to an ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, "existing");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, " controller ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "app-list")(13, "app-list-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14, "Use ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16, "remapping");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "app-list-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18, "Update state based on ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](20, "communication");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21, " coming from middleware");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "app-list-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](23, " Check whether controller behaviour is ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](25, "allowed");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "app-list")(27, "app-list-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](28, "If so: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](30, "pass on");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](31, " data");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "app-list-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](33, "If not: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](34, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](35, "block");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](36, " message");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](37, "app-figure", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](38, "svg", 4)(39, "g", 5)(40, "g", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](41, "path", 7)(42, "path", 8)(43, "path", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](44, "text", 10)(45, "tspan", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](46, "/b");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](47, "text", 10)(48, "tspan", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](49, "/b");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](50, "text", 10)(51, "tspan", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](52, "/b");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](53, "text", 10)(54, "tspan", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](55, "/a");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](56, "text", 10)(57, "tspan", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](58, "/a");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](59, "g", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](60, "path", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](61, "text", 10)(62, "tspan", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](63, "/c_remapped");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](64, "g", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](65, "path", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](66, "text", 10)(67, "tspan", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](68, "/block");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](69, "g", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](70, "path", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](71, "text", 10)(72, "tspan", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](73, "/c");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](74, "circle", 25)(75, "circle", 26)(76, "path", 27)(77, "rect", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](78, "text", 29)(79, "tspan", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](80, "Motor");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](81, "circle", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](82, "text", 10)(83, "tspan", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](84, "Node");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](85, "rect", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](86, "text", 29)(87, "tspan", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](88, "Distance");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](89, "path", 35)(90, "rect", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](91, "text", 29)(92, "tspan", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](93, "Line");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](94, "text", 10)(95, "tspan", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](96, "Node");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](97, "text", 10)(98, "tspan", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](99, "Node");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](100, "g", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](101, "rect", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](102, "text", 42)(103, "tspan", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](104, "Controller Node");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](105, "g", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](106, "rect", 45)(107, "rect", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](108, "text", 42)(109, "tspan", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](110, "Supervisor Node");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](111, "text", 48)(112, "tspan", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](113, "Supervisor");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("current", ctx.step)("step", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("current", ctx.step)("step", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("current", ctx.step)("step", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("current", ctx.step)("step", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("current", ctx.step)("step", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("current", ctx.step)("step", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("opacity-active", ctx.step >= 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("opacity-active", ctx.step >= 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("opacity-active", ctx.step >= 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("opacity-active", ctx.step >= 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("opacity-active", ctx.step >= 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("opacity-active", ctx.step >= 1);
    } }, dependencies: [src_app_components_slide_slide_component__WEBPACK_IMPORTED_MODULE_0__.SlideComponent, _components_title_title_component__WEBPACK_IMPORTED_MODULE_2__.TitleComponent, _components_list_list_component__WEBPACK_IMPORTED_MODULE_3__.ListComponent, _components_list_item_list_item_component__WEBPACK_IMPORTED_MODULE_4__.ListItemComponent, _components_two_column_layout_two_column_layout_component__WEBPACK_IMPORTED_MODULE_5__.TwoColumnLayoutComponent, _components_figure_figure_component__WEBPACK_IMPORTED_MODULE_6__.FigureComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdXBlcnZpc29yLWlkZWEuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 9026:
/*!***********************************************************************************!*\
  !*** ./src/app/slides/supervisor-limitations/supervisor-limitations.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SupervisorLimitationsComponent": () => (/* binding */ SupervisorLimitationsComponent)
/* harmony export */ });
/* harmony import */ var src_app_components_slide_slide_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/slide/slide.component */ 2459);
/* harmony import */ var src_app_models_abstract_slide__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/abstract-slide */ 5726);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _components_title_title_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/title/title.component */ 9527);
/* harmony import */ var _components_list_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/list/list.component */ 7309);
/* harmony import */ var _components_list_item_list_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/list-item/list-item.component */ 1616);
/* harmony import */ var _components_two_column_layout_two_column_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/two-column-layout/two-column-layout.component */ 4013);








class SupervisorLimitationsComponent extends src_app_models_abstract_slide__WEBPACK_IMPORTED_MODULE_1__.AbstractSlide {
    constructor() {
        super();
        this.max = 4;
    }
    ngOnInit() {
    }
}
SupervisorLimitationsComponent.ɵfac = function SupervisorLimitationsComponent_Factory(t) { return new (t || SupervisorLimitationsComponent)(); };
SupervisorLimitationsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: SupervisorLimitationsComponent, selectors: [["app-supervisor-limitations"]], viewQuery: function SupervisorLimitationsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](src_app_components_slide_slide_component__WEBPACK_IMPORTED_MODULE_0__.SlideComponent, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.slide = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]], decls: 24, vars: 8, consts: [["label", "Limitations"], [3, "current", "step"], [1, "emphasize"]], template: function SupervisorLimitationsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "app-slide");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "app-title", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "app-two-column-layout")(3, "app-list")(4, "app-list-item", 1)(5, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "Unique");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, " message topic names required");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "app-list-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "Actions can ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "not");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, " be remapped");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "app-list-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "Movement can not be ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16, "stopped");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, " directly if ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, "blocked");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "app-list-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21, "Generator only for ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23, "ROS2");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("current", ctx.step)("step", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("current", ctx.step)("step", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("current", ctx.step)("step", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("current", ctx.step)("step", 4);
    } }, dependencies: [src_app_components_slide_slide_component__WEBPACK_IMPORTED_MODULE_0__.SlideComponent, _components_title_title_component__WEBPACK_IMPORTED_MODULE_2__.TitleComponent, _components_list_list_component__WEBPACK_IMPORTED_MODULE_3__.ListComponent, _components_list_item_list_item_component__WEBPACK_IMPORTED_MODULE_4__.ListItemComponent, _components_two_column_layout_two_column_layout_component__WEBPACK_IMPORTED_MODULE_5__.TwoColumnLayoutComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdXBlcnZpc29yLWxpbWl0YXRpb25zLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 1556:
/*!*********************************************************************!*\
  !*** ./src/app/slides/tools-debugging/tools-debugging.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToolsDebuggingComponent": () => (/* binding */ ToolsDebuggingComponent)
/* harmony export */ });
/* harmony import */ var src_app_components_slide_slide_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/slide/slide.component */ 2459);
/* harmony import */ var src_app_models_abstract_slide__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/abstract-slide */ 5726);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _components_title_title_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/title/title.component */ 9527);
/* harmony import */ var _components_list_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/list/list.component */ 7309);
/* harmony import */ var _components_list_item_list_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/list-item/list-item.component */ 1616);
/* harmony import */ var _components_two_column_layout_two_column_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/two-column-layout/two-column-layout.component */ 4013);
/* harmony import */ var _components_figure_figure_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/figure/figure.component */ 3203);









class ToolsDebuggingComponent extends src_app_models_abstract_slide__WEBPACK_IMPORTED_MODULE_1__.AbstractSlide {
    constructor() {
        super();
        this.max = 4;
    }
    ngOnInit() {
    }
}
ToolsDebuggingComponent.ɵfac = function ToolsDebuggingComponent_Factory(t) { return new (t || ToolsDebuggingComponent)(); };
ToolsDebuggingComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: ToolsDebuggingComponent, selectors: [["app-tools-debugging"]], viewQuery: function ToolsDebuggingComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](src_app_components_slide_slide_component__WEBPACK_IMPORTED_MODULE_0__.SlideComponent, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.slide = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]], decls: 26, vars: 10, consts: [["label", "Debugging"], [3, "current", "step"], [1, "emphasize"], ["caption", "Visual debugging of controller execution.", 3, "current", "step"], ["src", "/assets/debugging.png", "width", "90%", 1, "image"]], template: function ToolsDebuggingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "app-slide");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "app-title", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "app-two-column-layout")(3, "app-list")(4, "app-list-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "View ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "states");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, " and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, "variables");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, " of components");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "app-list-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13, "Publish state to ROS-topic");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "app-list-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15, "Developed a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17, "tool");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18, " that listens to this topic");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "app-list-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](20, "Allow ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](22, "easier");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](23, " understanding of behaviour");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "app-figure", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](25, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("current", ctx.step)("step", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("current", ctx.step)("step", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("current", ctx.step)("step", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("current", ctx.step)("step", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("current", ctx.step)("step", 3);
    } }, dependencies: [src_app_components_slide_slide_component__WEBPACK_IMPORTED_MODULE_0__.SlideComponent, _components_title_title_component__WEBPACK_IMPORTED_MODULE_2__.TitleComponent, _components_list_list_component__WEBPACK_IMPORTED_MODULE_3__.ListComponent, _components_list_item_list_item_component__WEBPACK_IMPORTED_MODULE_4__.ListItemComponent, _components_two_column_layout_two_column_layout_component__WEBPACK_IMPORTED_MODULE_5__.TwoColumnLayoutComponent, _components_figure_figure_component__WEBPACK_IMPORTED_MODULE_6__.FigureComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0b29scy1kZWJ1Z2dpbmcuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 8026:
/*!*****************************************************************!*\
  !*** ./src/app/slides/tools-editors/tools-editors.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToolsEditorsComponent": () => (/* binding */ ToolsEditorsComponent)
/* harmony export */ });
/* harmony import */ var src_app_components_slide_slide_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/slide/slide.component */ 2459);
/* harmony import */ var src_app_models_abstract_slide__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/abstract-slide */ 5726);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _components_title_title_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/title/title.component */ 9527);
/* harmony import */ var _components_list_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/list/list.component */ 7309);
/* harmony import */ var _components_list_item_list_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/list-item/list-item.component */ 1616);
/* harmony import */ var _components_two_column_layout_two_column_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/two-column-layout/two-column-layout.component */ 4013);
/* harmony import */ var _components_figure_figure_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/figure/figure.component */ 3203);









class ToolsEditorsComponent extends src_app_models_abstract_slide__WEBPACK_IMPORTED_MODULE_1__.AbstractSlide {
    constructor() {
        super();
        this.max = 5;
    }
    ngOnInit() {
    }
}
ToolsEditorsComponent.ɵfac = function ToolsEditorsComponent_Factory(t) { return new (t || ToolsEditorsComponent)(); };
ToolsEditorsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: ToolsEditorsComponent, selectors: [["app-tools-editors"]], viewQuery: function ToolsEditorsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](src_app_components_slide_slide_component__WEBPACK_IMPORTED_MODULE_0__.SlideComponent, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.slide = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]], decls: 23, vars: 12, consts: [["label", "Editors"], [3, "current", "step"], [1, "emphasize"], ["caption", "Overview of RoboSC supported editors.", 3, "current", "step"], ["src", "/assets/editors.png", 1, "image"]], template: function ToolsEditorsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "app-slide");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "app-title", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "app-two-column-layout")(3, "app-list")(4, "app-list-item", 1)(5, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, "Xtext");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, " as language workbench");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "app-list-item", 1)(9, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, "Java/Xtend");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, " for generators, validation, typing");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "app-list-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13, " Supported ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15, "editors");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "app-list")(17, "app-list-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18, "Eclipse");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "app-list-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](20, "Visual Studio Code (LSP)");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "app-figure", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](22, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("current", ctx.step)("step", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("current", ctx.step)("step", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("current", ctx.step)("step", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("current", ctx.step)("step", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("current", ctx.step)("step", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("current", ctx.step)("step", 3);
    } }, dependencies: [src_app_components_slide_slide_component__WEBPACK_IMPORTED_MODULE_0__.SlideComponent, _components_title_title_component__WEBPACK_IMPORTED_MODULE_2__.TitleComponent, _components_list_list_component__WEBPACK_IMPORTED_MODULE_3__.ListComponent, _components_list_item_list_item_component__WEBPACK_IMPORTED_MODULE_4__.ListItemComponent, _components_two_column_layout_two_column_layout_component__WEBPACK_IMPORTED_MODULE_5__.TwoColumnLayoutComponent, _components_figure_figure_component__WEBPACK_IMPORTED_MODULE_6__.FigureComponent], styles: ["app-slide[_ngcontent-%COMP%]  .image {\n  width: 100%;\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvb2xzLWVkaXRvcnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxXQUFBO0VBQ0EsY0FBQTtBQUFKIiwiZmlsZSI6InRvb2xzLWVkaXRvcnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhcHAtc2xpZGU6Om5nLWRlZXAge1xuICAuaW1hZ2Uge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ 2781:
/*!***********************************************************************!*\
  !*** ./src/app/slides/tools-generation/tools-generation.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToolsGenerationComponent": () => (/* binding */ ToolsGenerationComponent)
/* harmony export */ });
/* harmony import */ var src_app_components_slide_slide_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/slide/slide.component */ 2459);
/* harmony import */ var src_app_models_abstract_slide__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/abstract-slide */ 5726);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _components_title_title_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/title/title.component */ 9527);
/* harmony import */ var _components_list_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/list/list.component */ 7309);
/* harmony import */ var _components_list_item_list_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/list-item/list-item.component */ 1616);
/* harmony import */ var _components_two_column_layout_two_column_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/two-column-layout/two-column-layout.component */ 4013);
/* harmony import */ var _components_figure_figure_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/figure/figure.component */ 3203);









class ToolsGenerationComponent extends src_app_models_abstract_slide__WEBPACK_IMPORTED_MODULE_1__.AbstractSlide {
    constructor() {
        super();
        this.max = 8;
    }
    ngOnInit() {
    }
}
ToolsGenerationComponent.ɵfac = function ToolsGenerationComponent_Factory(t) { return new (t || ToolsGenerationComponent)(); };
ToolsGenerationComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: ToolsGenerationComponent, selectors: [["app-tools-generation"]], viewQuery: function ToolsGenerationComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](src_app_components_slide_slide_component__WEBPACK_IMPORTED_MODULE_0__.SlideComponent, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.slide = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]], decls: 71, vars: 24, consts: [["label", "Generation"], [3, "current", "step"], [1, "emphasize"], ["caption", "Artifact generator pipeline."], ["xmlns", "http://www.w3.org/2000/svg", "width", "559", "height", "610", "viewBox", "0 0 559 610"], ["fill", "none", "transform", "translate(3.5 .5)"], ["width", "222", "height", "69", "x", "2.5", "y", "2.5", "fill", "#EE7773", "stroke", "#EE7773", "stroke-width", "5", "rx", "29"], ["fill", "#FFF", "font-family", "FiraSans-Regular, Fira Sans", "font-size", "25"], ["x", "52.636", "y", "46.5"], ["transform", "translate(227 31.658)", 1, "opacity-transition"], ["width", "227", "height", "74", "x", "97", "y", "115.342", "stroke", "#EE7773", "stroke-width", "5", "rx", "29"], ["fill", "#000", "font-family", "FiraSans-Regular, Fira Sans", "font-size", "25"], ["x", "193.136", "y", "160.842"], ["fill", "#EE7773", "d", "M121.272026,17.6275257 C152.363405,33.9134859 178.008131,57.8164166 198.183542,89.2993471 L208.787163,83.3885597 L210.243468,115.778823 L183.457474,97.5097095 L193.808005,91.7387844 C174.119156,61.102744 149.174641,37.8875955 118.951991,22.0566834 C81.5150286,2.44684598 42.5159712,-2.4120499 1.83924549,7.46374299 L0.606103794,7.76751958 L-1.81931126,8.37362337 L-3.03151885,3.52279326 L-0.606103794,2.91668947 C41.7073322,-7.65730858 82.3730791,-2.74811309 121.272026,17.6275257 Z"], ["transform", "translate(325 220.5)", 1, "opacity-transition"], ["width", "227", "height", "74", "y", "58.5", "stroke", "#EE7773", "stroke-width", "5", "rx", "29"], ["x", "55.136", "y", "106"], ["fill", "#EE7773", "d", "M115.456531,-2.04272554 L115.499629,0.456902957 L116.008,29.961 L128.006539,29.7542722 L114.008619,58.9999257 L99.0108484,30.2541979 L111.009,30.047 L110.500371,0.543097043 L110.457274,-1.95653146 L115.456531,-2.04272554 Z"], ["transform", "translate(324 352.5)", 1, "opacity-transition"], ["width", "227", "height", "74", "y", "61.5", "stroke", "#EE7773", "stroke-width", "5", "rx", "29"], ["x", "84.636", "y", "108"], ["fill", "#EE7773", "d", "M115.5,-2 L115.5,33 L127.5,33 L113,62 L98.5,33 L110.5,33 L110.5,-2 L115.5,-2 Z"], ["transform", "translate(0 73.5)", 1, "opacity-transition"], ["transform", "translate(0 458.5)"], ["width", "227", "height", "74", "fill", "#EE7773", "stroke", "#EE7773", "stroke-width", "5", "rx", "29"], ["x", "56.136", "y", "46.5"], ["fill", "#EE7773", "d", "M115.5-2L115.5 430 127.5 430 113 459 98.5 430 110.5 430 110.5-2 115.5-2zM436.657917 411.851482L441.648518 412.157917 441.4953 414.653218C439.881069 440.942522 429.32447 463.687915 409.888054 482.783341 392.001044 500.356544 340.656447 505.982277 255.215262 500.218844L254.263128 512.209933 226.501568 495.460431 256.558105 483.300885 255.61186 495.234187C339.482589 500.884694 389.952707 495.35963 406.383946 479.216659 424.750045 461.172772 434.752785 439.84975 436.452742 415.144886L436.5047 414.346782 436.657917 411.851482z"]], template: function ToolsGenerationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "app-slide");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "app-title", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "app-two-column-layout")(3, "app-list")(4, "app-list-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, " Synthesize ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "supervisory controller");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "app-list")(9, "app-list-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, "Convert code to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, "CIF");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "app-list-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14, "Apply synthesis");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "app-list-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16, "Generate ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18, "engine");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19, " code from controller");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "app-list-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21, " Embed engine in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](23, "ROS-node");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](24, " (for both versions) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "app-list")(26, "app-list-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](27, "Listen for ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](29, "incoming");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](30, " data");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "app-list-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](32, "Execute ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](33, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](34, "control loop");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](35, "app-list-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](36, "Handle data ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](37, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](38, "storage");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](39, "app-figure", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](40, "svg", 4)(41, "g", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](42, "rect", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](43, "text", 7)(44, "tspan", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](45, "DSL-model");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](46, "g", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](47, "rect", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](48, "text", 11)(49, "tspan", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](50, "CIF");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](51, "path", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](52, "g", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](53, "rect", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](54, "text", 11)(55, "tspan", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](56, "Controller");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](57, "path", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](58, "g", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](59, "rect", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](60, "text", 11)(61, "tspan", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](62, "Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](63, "path", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](64, "g", 22)(65, "g", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](66, "rect", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](67, "text", 7)(68, "tspan", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](69, "ROS-node");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](70, "path", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("current", ctx.step)("step", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("current", ctx.step)("step", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("current", ctx.step)("step", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("current", ctx.step)("step", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("current", ctx.step)("step", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("current", ctx.step)("step", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("current", ctx.step)("step", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("current", ctx.step)("step", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("opacity-active", ctx.step >= 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("opacity-active", ctx.step >= 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("opacity-active", ctx.step >= 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("opacity-active", ctx.step >= 5);
    } }, dependencies: [src_app_components_slide_slide_component__WEBPACK_IMPORTED_MODULE_0__.SlideComponent, _components_title_title_component__WEBPACK_IMPORTED_MODULE_2__.TitleComponent, _components_list_list_component__WEBPACK_IMPORTED_MODULE_3__.ListComponent, _components_list_item_list_item_component__WEBPACK_IMPORTED_MODULE_4__.ListItemComponent, _components_two_column_layout_two_column_layout_component__WEBPACK_IMPORTED_MODULE_5__.TwoColumnLayoutComponent, _components_figure_figure_component__WEBPACK_IMPORTED_MODULE_6__.FigureComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0b29scy1nZW5lcmF0aW9uLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map