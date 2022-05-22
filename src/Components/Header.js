import {useState} from 'react'
const Header=({selected})=> {
const [toggle,setToggle]=useState(false)
    return (<section
        className="elementor-section elementor-inner-section elementor-element elementor-element-c47f09e elementor-section-boxed elementor-section-height-default elementor-section-height-default"
        data-id="c47f09e" data-element_type="section">
           
        <div className="elementor-container elementor-column-gap-default">
            <div className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-b58c3eb"
                data-id="b58c3eb" data-element_type="column">
                <div className="elementor-widget-wrap elementor-element-populated">
                    <div className="elementor-element elementor-element-e762396 elementor-widget elementor-widget-image"
                        data-id="e762396" data-element_type="widget"
                        data-widget_type="image.default">
                        <div className="elementor-widget-container" style={{color: '#fff',fontSize: '1.2rem',fontWeight: 'bolder'}}>
                             <img width="800" height="205"
                                src="assets/images/logo.png"
                                className="attachment-large size-large" alt="" loading="lazy"
                                srcSet="assets/images/logo.png 1024w, assets/images/logo.png 300w, assets/images/logo.png 768w, assets/images/logo.png 1231w"
                                sizes="(max-width: 800px) 100vw, 800px"/>                                 
                        </div>
                    </div>
                </div>
            </div>
            <div className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-5072235"
                data-id="5072235" data-element_type="column">
                <div className="elementor-widget-wrap elementor-element-populated">
                    <div className="elementor-element elementor-element-c2657b9 elementor-nav-menu__align-right elementor-nav-menu--stretch elementor-nav-menu--dropdown-tablet elementor-nav-menu__text-align-aside elementor-nav-menu--toggle elementor-nav-menu--burger elementor-widget elementor-widget-nav-menu"
                        data-id="c2657b9" data-element_type="widget"
                        data-settings="{&quot;full_width&quot;:&quot;stretch&quot;,&quot;layout&quot;:&quot;horizontal&quot;,&quot;submenu_icon&quot;:{&quot;value&quot;:&quot;&lt;i className=\&quot;fas fa-caret-down\&quot;&gt;&lt;\/i&gt;&quot;,&quot;library&quot;:&quot;fa-solid&quot;},&quot;toggle&quot;:&quot;burger&quot;}"
                        data-widget_type="nav-menu.default">
                        <div className="elementor-widget-container">
                            <nav migration_allowed="1" migrated="0" role="navigation"
                                className="elementor-nav-menu--main elementor-nav-menu__container elementor-nav-menu--layout-horizontal e--pointer-none">
                                <ul id="menu-1-c2657b9" className="elementor-nav-menu"
                                    data-smartmenus-id="16407912144577168">
                                    {/* <li
                                        className="menu-item menu-item-type-post_type menu-item-object-post current-menu-item menu-item-3711">
                                        <a href="http://marc.templategum.com/hansip-home/"
                                            aria-current="page"
                                            className="elementor-item elementor-item-active">Home</a>
                                    </li> */}
                                    <li
                                        className="menu-item menu-item-type-post_type menu-item-object-post menu-item-3661">
                                        <a href="/home"
                                            className={`elementor-item ${selected==='' || selected==='home'? 'elementor-item-active'  : ''}`}>About Us</a></li>
                                            <li
                                        className="menu-item menu-item-type-post_type menu-item-object-post menu-item-3661">
                                        <a href="/consultation"
                                            className={`elementor-item ${selected==='consultation' ? 'elementor-item-active'  : ''}`}>Consultation </a></li>

                                    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-3420">
                                        <a href="#"
                                            className="elementor-item elementor-item-anchor has-submenu"
                                            id="sm-16407912144577168-1" aria-haspopup="true"
                                            aria-controls="sm-16407912144577168-2"
                                            aria-expanded="false">Services<span
                                                className="sub-arrow"><i
                                                    className="fas fa-caret-down"></i></span></a>
                                        <ul className="sub-menu elementor-nav-menu--dropdown"
                                            id="sm-16407912144577168-2" role="group"
                                            aria-hidden="false"
                                            aria-labelledby="sm-16407912144577168-1"
                                            aria-expanded="true">
                                            <li
                                                className="menu-item menu-item-type-post_type menu-item-object-post menu-item-3658">
                                                <a href="/services"
                                                    className="elementor-sub-item">Services</a></li>
                                            <li
                                                className="menu-item menu-item-type-post_type menu-item-object-post menu-item-3595">
                                                <a href="/services-details"
                                                    className="elementor-sub-item">Service
                                                    Details</a></li>
                                        </ul>
                                    </li>
                                                               <li
                                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-3423">
                                        <a href="#"
                                            className="elementor-item elementor-item-anchor has-submenu"
                                            id="sm-16407912144577168-5" aria-haspopup="true"
                                            aria-controls="sm-16407912144577168-6"
                                            aria-expanded="false">Blog<span className="sub-arrow"><i
                                                    className="fas fa-caret-down"></i></span></a>
                                        <ul className="sub-menu elementor-nav-menu--dropdown"
                                            id="sm-16407912144577168-6" role="group"
                                            aria-hidden="true"
                                            aria-labelledby="sm-16407912144577168-5"
                                            aria-expanded="false">
                                            <li
                                                className="menu-item menu-item-type-post_type menu-item-object-post menu-item-3659">
                                                <a href=""
                                                    className="elementor-sub-item">Blog</a></li>
                                            <li
                                                className="menu-item menu-item-type-post_type menu-item-object-post menu-item-3596">
                                                <a href="#"
                                                    className="elementor-sub-item">Single Blog</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li
                                        className="menu-item menu-item-type-post_type menu-item-object-post menu-item-3660">
                                        <a href="/contact-us"
                                            className={`elementor-item ${selected==='contact-us' ? 'elementor-item-active'  : ''}`}>Contact us</a></li> 
                                    {/* <li
                                        className="menu-item menu-item-type-post_type menu-item-object-post menu-item-3661">
                                        <a href="#"
                                            className="elementor-item">Solutions</a></li>
                                                  <li
                                        className="menu-item menu-item-type-post_type menu-item-object-post menu-item-3661">
                                        <a href="http://marc.templategum.com/hansip-about-us/"
                                            className="elementor-item">Industries</a></li>
                                            
                                            */}
                                   
                              
                                  
                                    {/* <li
                                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-3422">
                                        <a href="http://marc.templategum.com/hansip-home/#"
                                            className="elementor-item elementor-item-anchor has-submenu"
                                            id="sm-16407912144577168-3" aria-haspopup="true"
                                            aria-controls="sm-16407912144577168-4"
                                            aria-expanded="false">Pages<span
                                                className="sub-arrow"><i
                                                    className="fas fa-caret-down"></i></span></a>
                                        <ul className="sub-menu elementor-nav-menu--dropdown"
                                            id="sm-16407912144577168-4" role="group"
                                            aria-hidden="true"
                                            aria-labelledby="sm-16407912144577168-3"
                                            aria-expanded="false">
                                            <li
                                                className="menu-item menu-item-type-post_type menu-item-object-post menu-item-3703">
                                                <a href="http://marc.templategum.com/hansip-our-team/"
                                                    className="elementor-sub-item">Our Team</a></li>
                                            <li
                                                className="menu-item menu-item-type-post_type menu-item-object-post menu-item-3702">
                                                <a href="http://marc.templategum.com/hansip-pricing/"
                                                    className="elementor-sub-item">Pricing</a></li>
                                            <li
                                                className="menu-item menu-item-type-post_type menu-item-object-post menu-item-3701">
                                                <a href="http://marc.templategum.com/hansip-faq/"
                                                    className="elementor-sub-item">FAQ</a></li>
                                            <li
                                                className="menu-item menu-item-type-post_type menu-item-object-post menu-item-3700">
                                                <a href="http://marc.templategum.com/hansip-404/"
                                                    className="elementor-sub-item">404 Error
                                                    Page</a></li>
                                        </ul>
                                    </li>
                                    <li
                                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-3423">
                                        <a href="http://marc.templategum.com/hansip-home/#"
                                            className="elementor-item elementor-item-anchor has-submenu"
                                            id="sm-16407912144577168-5" aria-haspopup="true"
                                            aria-controls="sm-16407912144577168-6"
                                            aria-expanded="false">Blog<span className="sub-arrow"><i
                                                    className="fas fa-caret-down"></i></span></a>
                                        <ul className="sub-menu elementor-nav-menu--dropdown"
                                            id="sm-16407912144577168-6" role="group"
                                            aria-hidden="true"
                                            aria-labelledby="sm-16407912144577168-5"
                                            aria-expanded="false">
                                            <li
                                                className="menu-item menu-item-type-post_type menu-item-object-post menu-item-3659">
                                                <a href="http://marc.templategum.com/hansip-blog/"
                                                    className="elementor-sub-item">Blog</a></li>
                                            <li
                                                className="menu-item menu-item-type-post_type menu-item-object-post menu-item-3596">
                                                <a href="http://marc.templategum.com/top-10-cybersecurity-tips-for-working-place/"
                                                    className="elementor-sub-item">Single Blog</a>
                                            </li>
                                        </ul>
                                    </li>
                                    */}
                                    {/* <li
                                        className="menu-item menu-item-type-post_type menu-item-object-post menu-item-3660">
                                        <a href="http://marc.templategum.com/hansip-contact/"
                                            className="elementor-item">Contact</a></li> */}
                                </ul>
                            </nav>
                            <div className={`elementor-menu-toggle`} role="button"  
                                aria-label="Menu Toggle" aria-expanded="false" >
                                <i aria-hidden="true" role="presentation"
                                    className="eicon-menu-bar" onClick={()=>{setToggle(!toggle)}}></i> <span
                                    className="elementor-screen-only">Menu</span>
                            </div>
                            <nav className="elementor-nav-menu--dropdown elementor-nav-menu__container"
                                role="navigation" aria-hidden="true"
                                style={{top: 44, width: 1349, left: 0}}>
                                <ul id="menu-2-c2657b9" className="elementor-nav-menu"
                                    data-smartmenus-id="16407912144800398">
                                   
                                    <li
                                        className="menu-item menu-item-type-post_type menu-item-object-post menu-item-3661">
                                        <a href="/home"
                                           className={`elementor-item ${selected==='' || selected==='home'? 'elementor-item-active'  : ''}`}>About Us</a>
                                    </li>
                                    <li
                                        className="menu-item menu-item-type-post_type menu-item-object-post menu-item-3661">
                                        <a href="/consultation"
                                      className={`elementor-item ${selected==='consultation'? 'elementor-item-active'  : ''}`}>Consultation</a>
                                    </li>
                                    <li
                                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-3420">
                                        <a href="http://marc.templategum.com/hansip-home/#"
                                            className="elementor-item elementor-item-anchor has-submenu highlighted"
                                             id="sm-16407912144800398-1"
                                            aria-haspopup="true"
                                            aria-controls="sm-16407912144800398-2"
                                            aria-expanded="false">Services<span
                                                className="sub-arrow"><i
                                                    className="fas fa-caret-down"></i></span></a>
                                        <ul className="sub-menu elementor-nav-menu--dropdown"
                                            id="sm-16407912144800398-2" role="group"
                                            aria-hidden="true"
                                            aria-labelledby="sm-16407912144800398-1"
                                            aria-expanded="false">
                                            <li
                                                className="menu-item menu-item-type-post_type menu-item-object-post menu-item-3658">
                                                <a href="http://marc.templategum.com/hansip-services/"
                                                    className="elementor-sub-item"
                                                    >Services</a></li>
                                            <li
                                                className="menu-item menu-item-type-post_type menu-item-object-post menu-item-3595">
                                                <a href="http://marc.templategum.com/hansip-network-security/"
                                                    className="elementor-sub-item"
                                                    >Service Details</a></li>
                                        </ul>
                                    </li>
                                    <li
                                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-3422">
                                        <a href="http://marc.templategum.com/hansip-home/#"
                                            className="elementor-item elementor-item-anchor has-submenu"
                                             id="sm-16407912144800398-3"
                                            aria-haspopup="true"
                                            aria-controls="sm-16407912144800398-4"
                                            aria-expanded="false">Pages<span
                                                className="sub-arrow"><i
                                                    className="fas fa-caret-down"></i></span></a>
                                        <ul className="sub-menu elementor-nav-menu--dropdown"
                                            id="sm-16407912144800398-4" role="group"
                                            aria-hidden="true"
                                            aria-labelledby="sm-16407912144800398-3"
                                            aria-expanded="false">
                                            <li
                                                className="menu-item menu-item-type-post_type menu-item-object-post menu-item-3703">
                                                <a href="http://marc.templategum.com/hansip-our-team/"
                                                    className="elementor-sub-item" >Our
                                                    Team</a></li>
                                            <li
                                                className="menu-item menu-item-type-post_type menu-item-object-post menu-item-3702">
                                                <a href="http://marc.templategum.com/hansip-pricing/"
                                                    className="elementor-sub-item"
                                                    >Pricing</a></li>
                                            <li
                                                className="menu-item menu-item-type-post_type menu-item-object-post menu-item-3701">
                                                <a href="http://marc.templategum.com/hansip-faq/"
                                                    className="elementor-sub-item"
                                                    >FAQ</a></li>
                                            <li
                                                className="menu-item menu-item-type-post_type menu-item-object-post menu-item-3700">
                                                <a href="http://marc.templategum.com/hansip-404/"
                                                    className="elementor-sub-item" >404
                                                    Error Page</a></li>
                                        </ul>
                                    </li>
                                    <li
                                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-3423">
                                        <a href="http://marc.templategum.com/hansip-home/#"
                                            className="elementor-item elementor-item-anchor has-submenu"
                                             id="sm-16407912144800398-5"
                                            aria-haspopup="true"
                                            aria-controls="sm-16407912144800398-6"
                                            aria-expanded="false">Blog<span className="sub-arrow"><i
                                                    className="fas fa-caret-down"></i></span></a>
                                        <ul className="sub-menu elementor-nav-menu--dropdown"
                                            id="sm-16407912144800398-6" role="group"
                                            aria-hidden="true"
                                            aria-labelledby="sm-16407912144800398-5"
                                            aria-expanded="false">
                                            <li
                                                className="menu-item menu-item-type-post_type menu-item-object-post menu-item-3659">
                                                <a href="http://marc.templategum.com/hansip-blog/"
                                                    className="elementor-sub-item"
                                                    >Blog</a></li>
                                            <li
                                                className="menu-item menu-item-type-post_type menu-item-object-post menu-item-3596">
                                                <a href="http://marc.templategum.com/top-10-cybersecurity-tips-for-working-place/"
                                                    className="elementor-sub-item"
                                                    >Single Blog</a></li>
                                        </ul>
                                    </li>
                                    <li
                                        className="menu-item menu-item-type-post_type menu-item-object-post menu-item-3660">
                                        <a href="/contact-us"
                                            className="elementor-item" >Contact</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            <div className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-fc17631 elementor-hidden-phone"
                data-id="fc17631" data-element_type="column">
                <div className="elementor-widget-wrap elementor-element-populated">
                    <div className="elementor-element elementor-element-3b98e2e elementor-align-right elementor-widget elementor-widget-button"
                        data-id="3b98e2e" data-element_type="widget"
                        data-widget_type="button.default">
                        <div className="elementor-widget-container">
                            <div className="elementor-button-wrapper">
                                <a href="http://marc.templategum.com/hansip-home/#"
                                    className="elementor-button-link elementor-button elementor-size-lg"
                                    role="button">
                                    <span className="elementor-button-content-wrapper">
                                        <span className="elementor-button-text">Let’s Secure</span>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Header