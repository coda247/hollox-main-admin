/// Menu
import MetisMenu from "metismenujs";
import React, { Component } from "react";
/// Scroll
import PerfectScrollbar from "react-perfect-scrollbar";
/// Link
import { Link } from "react-router-dom";

class MM extends Component {
  componentDidMount() {
    this.$el = this.el;
    this.mm = new MetisMenu(this.$el);
  }
  componentWillUnmount() {
  }
    render() {
        return (
            <div className="mm-wrapper">
                <ul className="metismenu" ref={(el) => (this.el = el)}>
                    {this.props.children}
                </ul>
            </div>
        );
    }
}

class SideBar extends Component {
  /// Open menu
  componentDidMount() {
    // sidebar open/close
    var btn = document.querySelector(".nav-control");
    var aaa = document.querySelector("#main-wrapper");
    function toggleFunc() {
      return aaa.classList.toggle("menu-toggle");
    }
    btn.addEventListener("click", toggleFunc);
  }
  state = {
    loveEmoji: false,
  };
  render() {
    /// Path
    let path = window.location.pathname;
    path = path.split("/");
    path = path[path.length - 1];
    
    /// Active menu
    let dashBoard = [
        "",
        "dashboard-dark",
        "my-wallet",
        "coin-details",
        "portfolio",
        "transactions",
        "market-capital",
		"task",
      ],
      app = [
        "app-profile",
        "app-calender",
        "email-compose",
        "email-inbox",
        "email-read",
        "ecom-product-grid",
        "ecom-product-list",
        "ecom-product-list",
        "ecom-product-order",
        "ecom-checkout",
        "ecom-invoice",
        "ecom-customers",
        "post-details",
        "ecom-product-detail",
      ],
      email = ["email-compose", "email-inbox", "email-read"],
      shop = [
        "ecom-product-grid",
        "ecom-product-list",
        "ecom-product-list",
        "ecom-product-order",
        "ecom-checkout",
        "ecom-invoice",
        "ecom-customers",
        "ecom-product-detail",
      ],
      charts = [
        "chart-rechart",
        "chart-flot",
        "chart-chartjs",
        "chart-chartist",
        "chart-sparkline",
        "chart-apexchart",
      ],
      bootstrap = [
        "ui-accordion",
        "ui-badge",
        "ui-alert",
        "ui-button",
        "ui-modal",
        "ui-button-group",
        "ui-list-group",
        "ui-media-object",
        "ui-card",
        "ui-carousel",
        "ui-dropdown",
        "ui-popover",
        "ui-progressbar",
        "ui-tab",
        "ui-typography",
        "ui-pagination",
        "ui-grid",
      ],
      plugins = [
        "uc-select2",
        "uc-nestable",
        "uc-sweetalert",
        "uc-toastr",
        "uc-noui-slider",
        "map-jqvmap",
        //"post",
        
      ],
        redux = [
            "todo",
            "form-redux",
            "form-redux-wizard", 
        ],
      widget = ["widget-basic"],
      forms = [
        "form-element",
        "form-wizard",
        "form-editor-summernote",
        "form-pickers",
        "form-validation-jquery",
      ],
      table = [
        "table-bootstrap-basic", 
        "table-datatable-basic",
        "table-sorting",
        "table-filtering",
      ],
      pages = [
        "page-register",
        "page-login",
        "page-lock-screen",
        "page-error-400",
        "page-error-403",
        "page-error-404",
        "page-error-500",
        "page-error-503",
      ],
      error = [
        "page-error-400",
        "page-error-403",
        "page-error-404",
        "page-error-500",
        "page-error-503",
      ];

    return (
      <div className="deznav">
        <PerfectScrollbar className="deznav-scroll">
          <MM className="metismenu" id="menu">
            <li className={`${dashBoard.includes(path) ? "mm-active" : ""}`}>
              <Link className="has-arrow ai-icon" to="#" >
                <i className="flaticon-381-networking"></i>
                <span className="nav-text">Dashboard</span>
              </Link>
				<ul >
					<li>
						<Link className={`${path === "" ? "mm-active" : ""}`} to="/" onClick={() => this.props.onClick3()}>Dashboard</Link>
					</li>
					{/* <li>
						<Link className={`${path === "" ? "mm-active" : ""}`} to="/dashboard-dark" onClick={() => this.props.onClick3()}>Dashboard Dark</Link>
					</li> */}
					<li>
					   <Link className={`${ path === "hollox-users" ? "mm-active" : "" }`} onClick={() => this.props.onClick()} to="/hollox-users">
						  Users
					   </Link>
					</li>
					{/* <li>
					   <Link className={`${ path === "coin-details" ? "mm-active" : "" }`} onClick={() => this.props.onClick()} to="/coin-details"
					   >
						  Coin Details
					   </Link>
					</li> */}
					{/* <li>
					   <Link className={`${ path === "portfolio" ? "mm-active" : "" }`} onClick={() => this.props.onClick()} to="/portfolio">
						  Portfolio
					   </Link>
					</li> */}
					{/* <li>
					   <Link className={`${ path === "transactions" ? "mm-active" : "" }`} onClick={() => this.props.onClick()} to="/transactions"
					   >
						  Transactions
					   </Link>
					</li> */}
					{/* <li>
					   <Link className={`${ path === "market-capital" ? "mm-active" : "" }`} onClick={() => this.props.onClick()} to="/market-capital"
					   >
						  Market Capital
					   </Link>
					</li> */}
					{/* <li>
						<Link className={`${path === "task" ? "mm-active" : ""}`} onClick={() => this.props.onClick()} to="/task">Task</Link>
					</li>						 */}
				</ul>
            </li>

            <li className={`${dashBoard.includes(path) ? "mm-active" : ""}`}>
              <Link className="has-arrow ai-user" to="#" >
                <i className="flaticon-381-networking"></i>
                <span className="nav-text">NIN</span>
              </Link>
				<ul >
				
					
					<li>
					   <Link className={`${ path === "dashboard/nin/pending" ? "mm-active" : "" }`} onClick={() => this.props.onClick()} to="/dashboard/nin/pending">
						  Pending
					   </Link>
					</li>
          <li>
					   <Link className={`${ path === "dashboard/nin/approved" ? "mm-active" : "" }`} onClick={() => this.props.onClick()} to="/dashboard/nin/approved">
						  Approve
					   </Link>
					</li>
          <li>
					   <Link className={`${ path === "dashboard/nin/rejected" ? "mm-active" : "" }`} onClick={() => this.props.onClick()} to="/dashboard/nin/rejected">
						  Rejected
					   </Link>
					</li>
				
				</ul>
            </li>
            {/* <li className={`${app.includes(path) ? "mm-active" : ""}`}>
              <Link className="has-arrow ai-icon" to="#" >
                <i className="flaticon-381-television"></i>
                <span className="nav-text">Apps</span>
              </Link>
              <ul >
                <li>
					<Link className={`${path === "app-profile" ? "mm-active" : ""}`} onClick={() => this.props.onClick()} to="/app-profile">Profile</Link>
                </li>
				<li>
					<Link className={`${path === "post-details" ? "mm-active" : ""}`} onClick={() => this.props.onClick()} to="/post-details">Post Details</Link>
                </li>
                <li className={`${email.includes(path) ? "mm-active" : ""}`}>
                    <Link className="has-arrow" to="#" >Email</Link>
                  <ul
                    
                    className={`${email.includes(path) ? "mm-show" : ""}`}
                  >
                    <li>
                      <Link
                        className={`${
                          path === "email-compose" ? "mm-active" : ""
                        }`}
                        to="/email-compose"
                        onClick={() => this.props.onClick()}
                      >
                        Compose
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={`${
                          path === "email-inbox" ? "mm-active" : ""
                        }`}
                        to="/email-inbox"
                        onClick={() => this.props.onClick()}
                      >
                        Inbox
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={`${
                          path === "email-read" ? "mm-active" : ""
                        }`}
                        to="/email-read"
                        onClick={() => this.props.onClick()}
                      >
                        Read
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link
                    className={`${path === "app-calender" ? "mm-active" : ""}`}
                    onClick={() => this.props.onClick()}
                    to="/app-calender"
                  >
                    Calendar
                  </Link>
                </li>
                <li className={`${shop.includes(path) ? "mm-active" : ""}`}>
                  <Link className="has-arrow" to="#" >
                    Shop
                  </Link>
                  <ul
                    
                    className={`${shop.includes(path) ? "mm-show" : ""}`}
                  >
                    <li>
                      <Link
                        className={`${
                          path === "ecom-product-grid" ? "mm-active" : ""
                        }`}
                        to="/ecom-product-grid"
                        onClick={() => this.props.onClick()}
                      >
                        Product Grid
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={`${
                          path === "ecom-product-list" ? "mm-active" : ""
                        }`}
                        to="/ecom-product-list"
                        onClick={() => this.props.onClick()}
                      >
                        Product List
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={`${
                          path === "ecom-product-detail" ? "mm-active" : ""
                        }`}
                        to="/ecom-product-detail"
                        onClick={() => this.props.onClick()}
                      >
                        Product Details
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={`${
                          path === "ecom-product-order" ? "mm-active" : ""
                        }`}
                        to="/ecom-product-order"
                        onClick={() => this.props.onClick()}
                      >
                        Order
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={`${
                          path === "ecom-checkout" ? "mm-active" : ""
                        }`}
                        to="/ecom-checkout"
                        onClick={() => this.props.onClick()}
                      >
                        Checkout
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={`${
                          path === "ecom-invoice" ? "mm-active" : ""
                        }`}
                        to="/ecom-invoice"
                        onClick={() => this.props.onClick()}
                      >
                        Invoice
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={`${
                          path === "ecom-customers" ? "mm-active" : ""
                        }`}
                        to="/ecom-customers"
                        onClick={() => this.props.onClick()}
                      >
                        Customers
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li> */}
            {/* <li className={`${charts.includes(path) ? "mm-active" : ""}`}>
              <Link className="has-arrow ai-icon" to="#" >
                <i className="flaticon-381-controls-3"></i>
                <span className="nav-text">Charts</span>
              </Link>
              <ul >
                <li>
                  <Link
                    className={`${path === "chart-rechart" ? "mm-active" : ""}`}
                    onClick={() => this.props.onClick()}
                    to="/chart-rechart"
                  >
                    RechartJs
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${path === "chart-chartjs" ? "mm-active" : ""}`}
                    onClick={() => this.props.onClick()}
                    to="/chart-chartjs"
                  >
                    Chartjs
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${
                      path === "chart-chartist" ? "mm-active" : ""
                    }`}
                    onClick={() => this.props.onClick()}
                    to="/chart-chartist"
                  >
                    Chartist
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${
                      path === "chart-sparkline" ? "mm-active" : ""
                    }`}
                    onClick={() => this.props.onClick()}
                    to="/chart-sparkline"
                  >
                    Sparkline
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${
                      path === "chart-apexchart" ? "mm-active" : ""
                    }`}
                    onClick={() => this.props.onClick()}
                    to="/chart-apexchart"
                  >
                    Apexchart
                  </Link>
                </li>
              </ul>
            </li> */}
            {/* <li className={`${bootstrap.includes(path) ? "mm-active" : ""}`}>
              <Link className="has-arrow ai-icon" to="#" >
                <i className="flaticon-381-internet"></i>
                <span className="nav-text">Bootstrap</span>
              </Link>
              <ul >
                <li>
                  <Link
                    className={`${path === "ui-accordion" ? "mm-active" : ""}`}
                    onClick={() => this.props.onClick()}
                    to="/ui-accordion"
                  >
                    Accordion
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${path === "ui-alert" ? "mm-active" : ""}`}
                    onClick={() => this.props.onClick()}
                    to="/ui-alert"
                  >
                    Alert
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${path === "ui-badge" ? "mm-active" : ""}`}
                    onClick={() => this.props.onClick()}
                    to="/ui-badge"
                  >
                    Badge
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${path === "ui-button" ? "mm-active" : ""}`}
                    onClick={() => this.props.onClick()}
                    to="/ui-button"
                  >
                    Button
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${path === "ui-modal" ? "mm-active" : ""}`}
                    onClick={() => this.props.onClick()}
                    to="/ui-modal"
                  >
                    Modal
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${
                      path === "ui-button-group" ? "mm-active" : ""
                    }`}
                    onClick={() => this.props.onClick()}
                    to="/ui-button-group"
                  >
                    Button Group
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${path === "ui-list-group" ? "mm-active" : ""}`}
                    onClick={() => this.props.onClick()}
                    to="/ui-list-group"
                  >
                    List Group
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${
                      path === "ui-media-object" ? "mm-active" : ""
                    }`}
                    onClick={() => this.props.onClick()}
                    to="/ui-media-object"
                  >
                    Media Object
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${path === "ui-card" ? "mm-active" : ""}`}
                    onClick={() => this.props.onClick()}
                    to="/ui-card"
                  >
                    Cards
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${path === "ui-carousel" ? "mm-active" : ""}`}
                    onClick={() => this.props.onClick()}
                    to="/ui-carousel"
                  >
                    Carousel
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${path === "ui-dropdown" ? "mm-active" : ""}`}
                    onClick={() => this.props.onClick()}
                    to="/ui-dropdown"
                  >
                    Dropdown
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${path === "ui-popover" ? "mm-active" : ""}`}
                    onClick={() => this.props.onClick()}
                    to="/ui-popover"
                  >
                    Popover
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${
                      path === "ui-progressbar" ? "mm-active" : ""
                    }`}
                    onClick={() => this.props.onClick()}
                    to="/ui-progressbar"
                  >
                    Progressbar
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${path === "ui-tab" ? "mm-active" : ""}`}
                    onClick={() => this.props.onClick()}
                    to="/ui-tab"
                  >
                    Tab
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${path === "ui-typography" ? "mm-active" : ""}`}
                    onClick={() => this.props.onClick()}
                    to="/ui-typography"
                  >
                    Typography
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${path === "ui-pagination" ? "mm-active" : ""}`}
                    onClick={() => this.props.onClick()}
                    to="/ui-pagination"
                  >
                    Pagination
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${path === "ui-grid" ? "mm-active" : ""}`}
                    onClick={() => this.props.onClick()}
                    to="/ui-grid"
                  >
                    Grid
                  </Link>
                </li>
              </ul>
            </li> */}
            {/* <li className={`${plugins.includes(path) ? "mm-active" : ""}`}>
              <Link className="has-arrow ai-icon" to="#" >
                <i className="flaticon-381-heart"></i>
                <span className="nav-text">Plugins</span>
              </Link>
              <ul >
                <li>
					<Link className={`${path === "uc-select2" ? "mm-active" : ""}`} onClick={() => this.props.onClick()} to="/uc-select2">Select 2</Link>
                </li>
                <li>
					<Link className={`${path === "uc-nestable" ? "mm-active" : ""}`} onClick={() => this.props.onClick()} to="/uc-nestable">Nestedable</Link>
                </li>
                <li>
                  <Link
                    className={`${
                      path === "uc-noui-slider" ? "mm-active" : ""
                    }`}
                    onClick={() => this.props.onClick()}
                    to="/uc-noui-slider"
                  >
                    Noui Slider
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${path === "uc-sweetalert" ? "mm-active" : ""}`}
                    onClick={() => this.props.onClick()}
                    to="/uc-sweetalert"
                  >
                    Sweet Alert
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${path === "uc-toastr" ? "mm-active" : ""}`}
                    onClick={() => this.props.onClick()}
                    to="/uc-toastr"
                  >
                    Toastr
                  </Link>
                </li>
                <li>
					<Link className={`${path === "map-jqvmap" ? "mm-active" : ""}`} onClick={() => this.props.onClick()} to="/map-jqvmap">Jqv Map</Link>
                </li>
				<li>
					<Link className={`${path === "uc-lightgallery" ? "mm-active" : ""}`} onClick={() => this.props.onClick()} to="/uc-lightgallery">Light Gallery</Link>
                </li>
                <li><Link className={`${path === "posts" ? "mm-active" : ""}`} to="/posts">Posts</Link></li>
              </ul>
            </li> */}
            {/* <li className={`${redux.includes(path) ? "mm-active" : ""}`}>
                <Link className="has-arrow ai-icon" to="#" >
                    <i className="flaticon-381-book"></i><span className="nav-text">Redux</span>
                </Link>
                <ul>
                    <li><Link className={`${path === "todo" ? "mm-active" : ""}`} to="/todo">Todo</Link></li> 
                    <li><Link className={`${path === "form-redux" ? "mm-active" : ""}`} to="/form-redux">Redux Form</Link></li>
                    <li><Link className={`${path === "form-redux-wizard" ? "mm-active" : ""}`} to="/form-redux-wizard">Wizard Form</Link></li>
                </ul>
            </li>     */}
            {/* <li className={`${widget.includes(path) ? "mm-active" : ""}`}>
              <Link to="widget-basic" className="ai-icon" >
                <i className="flaticon-381-settings-2"></i>
                <span className="nav-text">Widget</span>
              </Link>
            </li> */}
            {/* <li className={`${forms.includes(path) ? "mm-active" : ""}`}>
              <Link className="has-arrow ai-icon" to="#" >
                <i className="flaticon-381-notepad"></i>
                <span className="nav-text forms">Forms</span>
              </Link>
              <ul >
                <li>
                    <Link className={`${path === "form-element" ? "mm-active" : ""}`}onClick={() => this.props.onClick()} to="/form-element">Form Elements</Link>
                </li>
                <li>
                    <Link className={`${path === "form-wizard" ? "mm-active" : ""}`} onClick={() => this.props.onClick()} to="/form-wizard">Wizard</Link>
                </li>
                <li>
                    <Link className={`${ path === "form-editor-summernote" ? "mm-active" : ""}`} onClick={() => this.props.onClick()} to="/form-editor-summernote">Summernote</Link>
                </li>
                <li>
                    <Link className={`${path === "form-pickers" ? "mm-active" : ""}`} onClick={() => this.props.onClick()} to="/form-pickers">Pickers</Link>
                </li>
                <li>
                  <Link className={`${ path === "form-validation-jquery" ? "mm-active" : "" }`} onClick={() => this.props.onClick()} to="/form-validation-jquery">Jquery Validate</Link>
                </li>
              </ul>
            </li> */}
            {/* <li className={`${table.includes(path) ? "mm-active" : ""}`}>
              <Link className="has-arrow ai-icon" to="#" >
                <i className="flaticon-381-network"></i>
                <span className="nav-text">Table</span>
              </Link>
              <ul >
                <li>
                    <Link className={`${  path === "table-bootstrap-basic" ? "mm-active" : "" }`}
                        onClick={() => this.props.onClick()} to="/table-bootstrap-basic"
                    >
                        Bootstrap
                    </Link>
                </li>
                <li>
                    <Link className={`${ path === "table-datatable-basic" ? "mm-active" : "" }`} onClick={() => this.props.onClick()} to="/table-datatable-basic">
                        Datatable
                    </Link>
                </li>
                <li>
                    <Link className={`${ path === "table-filtering" ? "mm-active" : "" }`} onClick={() => this.props.onClick()} to="/table-filtering">
                        Table Filtering
                    </Link>
                </li>
                <li>
                    <Link className={`${ path === "table-sorting" ? "mm-active" : "" }`} onClick={() => this.props.onClick()} to="/table-sorting">
                        Table Sorting
                    </Link>
                </li>
              </ul>
            </li> */}
            {/* <li className={`${pages.includes(path) ? "mm-active" : ""}`}>
                <Link className="has-arrow ai-icon" to="#" >
                    <i className="flaticon-381-layer-1"></i>
                    <span className="nav-text">Pages</span>
                </Link>
              <ul >
                <li className={`${error.includes(path) ? "mm-active" : ""}`}>
                    <Link className="has-arrow" to="#" >Error</Link>
                      <ul >
                        <li>
                            <Link className={`${ path === "page-error-400" ? "mm-active" : ""}`}
                                to="/page-error-400" onClick={() => this.props.onClick3()}
                            >
                                Error 400
                            </Link>
                        </li>
                        <li>
                            <Link className={`${ path === "page-error-403" ? "mm-active" : ""}`}
                                to="/page-error-403"   onClick={() => this.props.onClick3()}
                            >
                                Error 403
                            </Link>
                        </li>
                        <li>
                            <Link
                                className={`${ path === "page-error-404" ? "mm-active" : ""}`}
                                to="/page-error-404" onClick={() => this.props.onClick3()}
                              >
                                Error 404
                            </Link>
                        </li>
                        <li>
                          <Link
                            className={`${
                              path === "page-error-500" ? "mm-active" : ""
                            }`}
                            to="/page-error-500"
                            onClick={() => this.props.onClick3()}
                          >
                            Error 500
                          </Link>
                        </li>
                        <li>
                          <Link
                            className={`${
                              path === "page-error-503" ? "mm-active" : ""
                            }`}
                            to="/page-error-503"
                            onClick={() => this.props.onClick3()}
                          >
                            Error 503
                          </Link>
                        </li>
                      </ul>
                </li>
                <li>
                    <Link className={`${ path === "page-lock-screen" ? "mm-active" : "" }`} to="/page-lock-screen" onClick={() => this.props.onClick3()}>
                        Lock Screen
                    </Link>
                </li>
              </ul>
            </li> */}
          </MM>
			<div className="add-menu-sidebar">
                  <p>Generate Monthly Credit Report</p>
                  <Link to="#">
                     <svg
                        width={24}
                        height={12}
                        viewBox="0 0 24 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                     >
                        <path
                           d="M23.725 5.14889C23.7248 5.14861 23.7245 5.14828 23.7242 5.148L18.8256 0.272997C18.4586 -0.0922062 17.865 -0.0908471 17.4997 0.276184C17.1345 0.643169 17.1359 1.23675 17.5028 1.602L20.7918 4.875H0.9375C0.419719 4.875 0 5.29472 0 5.8125C0 6.33028 0.419719 6.75 0.9375 6.75H20.7917L17.5029 10.023C17.1359 10.3882 17.1345 10.9818 17.4998 11.3488C17.865 11.7159 18.4587 11.7172 18.8256 11.352L23.7242 6.477C23.7245 6.47672 23.7248 6.47639 23.7251 6.47611C24.0923 6.10964 24.0911 5.51414 23.725 5.14889Z"
                           fill="white"
                        />
                     </svg>
                  </Link>
               </div>
			<div className="copyright">
				<p>
				  <strong>Hollox - Crypto Exchange</strong> © 2022 All
				  Rights Reserved
				</p>
				<p>
				  Made with{" "}
				  <span
					className={`${
					  this.state.loveEmoji ? "heart heart-blast" : "heart"
					}`}
					onClick={() =>
					  this.setState({ loveEmoji: !this.state.loveEmoji })
					}
				  ></span>{" "}
				  by Chidubem Michael
				</p>
			  </div>
			</PerfectScrollbar>
      </div>
    );
  }
}

export default SideBar;
