'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">my-trip documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AdminModule.html" data-type="entity-link">AdminModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AdminModule-7e7996d4e8723a80e5e5d51bedbffbc5"' : 'data-target="#xs-components-links-module-AdminModule-7e7996d4e8723a80e5e5d51bedbffbc5"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AdminModule-7e7996d4e8723a80e5e5d51bedbffbc5"' :
                                            'id="xs-components-links-module-AdminModule-7e7996d4e8723a80e5e5d51bedbffbc5"' }>
                                            <li class="link">
                                                <a href="components/AddnewflightComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AddnewflightComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AdminFlightlistComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AdminFlightlistComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AdminhomeComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AdminhomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AirlineComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AirlineComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AirlinelistcomponentComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AirlinelistcomponentComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CityComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CityComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CityViewComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CityViewComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ScheduleComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ScheduleComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-f582c26224faf8709712313ee8cda3a1"' : 'data-target="#xs-components-links-module-AppModule-f582c26224faf8709712313ee8cda3a1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-f582c26224faf8709712313ee8cda3a1"' :
                                            'id="xs-components-links-module-AppModule-f582c26224faf8709712313ee8cda3a1"' }>
                                            <li class="link">
                                                <a href="components/AddnewflightComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AddnewflightComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AdminFlightlistComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AdminFlightlistComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AdminhomeComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AdminhomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AirlineComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AirlineComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AirlinelistcomponentComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AirlinelistcomponentComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CityComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CityComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CityViewComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CityViewComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EditComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">EditComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FilterComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FilterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FlightListComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FlightListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FooterComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PassengerDetailsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PassengerDetailsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProfileComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ProfileComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RegistrationComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RegistrationComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ReviewBookingComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ReviewBookingComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RoundtripFooterComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RoundtripFooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ScheduleComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ScheduleComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SearchFlightsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SearchFlightsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SearchListComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SearchListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ViewProfileComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ViewProfileComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/UserModule.html" data-type="entity-link">UserModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-UserModule-b7d7ef3e77855916af88f623e2ef88d4"' : 'data-target="#xs-components-links-module-UserModule-b7d7ef3e77855916af88f623e2ef88d4"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-UserModule-b7d7ef3e77855916af88f623e2ef88d4"' :
                                            'id="xs-components-links-module-UserModule-b7d7ef3e77855916af88f623e2ef88d4"' }>
                                            <li class="link">
                                                <a href="components/FlightListComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FlightListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PassengerDetailsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PassengerDetailsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RegistrationComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RegistrationComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ReviewBookingComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ReviewBookingComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SearchListComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SearchListComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#components-links"' :
                            'data-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/EditairlineComponent.html" data-type="entity-link">EditairlineComponent</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AppPage.html" data-type="entity-link">AppPage</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AirlinedataService.html" data-type="entity-link">AirlinedataService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CitydataService.html" data-type="entity-link">CitydataService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FlightdataService.html" data-type="entity-link">FlightdataService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/HeadernameService.html" data-type="entity-link">HeadernameService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LogindataService.html" data-type="entity-link">LogindataService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PaypalService.html" data-type="entity-link">PaypalService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProfiledataService.html" data-type="entity-link">ProfiledataService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AdminGuardGuard.html" data-type="entity-link">AdminGuardGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/IAirline.html" data-type="entity-link">IAirline</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IBooking.html" data-type="entity-link">IBooking</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ICity.html" data-type="entity-link">ICity</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IDetails.html" data-type="entity-link">IDetails</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IFlights.html" data-type="entity-link">IFlights</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IProfile.html" data-type="entity-link">IProfile</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});