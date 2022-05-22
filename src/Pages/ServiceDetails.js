import {useState,useEffect} from 'react'
 
import AdvanceThreatProtection from './ServiceDetails/AdvanceThreatProtection';
import BreachAssessmentAndRemediation from './ServiceDetails/BreachAssessmentAndRemediation';
import DevSecOpsImplementation from './ServiceDetails/DevSecOpsImplementation';
import PenetrationTesting from './ServiceDetails/PenetrationTesting';
import RansomwareProtection from './ServiceDetails/RansomwareProtection';
import SecureCloudSolution from './ServiceDetails/SecureCloudSolution';

import Default from './ServiceDetails/Default';

function ServicesDetails(type) { 

  const [selection,setSelection]=useState()

  const onSelect=(name)=>{ setSelection(type);  }
  useEffect(function() {    
    const query = new URLSearchParams(window.location.search);
    if(query.get('type')!=null)
    setSelection(query.get('type')) 
   },[])
   
  
  return (
    <div className="elementor elementor-3451">
      <section
        className="center elementor-section elementor-inner-section elementor-element elementor-element-291d6a9 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
        data-id="291d6a9"
        data-element_type="section"
      >
        <div className="elementor-container elementor-column-gap-default">
          <div
            className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-d6b6844"
            data-id="d6b6844"
            data-element_type="column"
          >
            <div className="elementor-widget-wrap elementor-element-populated">
              <div
                className="elementor-element elementor-element-dfa85da elementor-widget elementor-widget-heading"
                data-id="dfa85da"
                data-element_type="widget"
                data-widget_type="heading.default"
              >
                <div className="elementor-widget-container">
                  <h2 className="elementor-heading-title elementor-size-default page-heading">
                    Niche – Cyber Security Solutions
                  </h2>{" "}
                </div>
              </div>
              <div
                className="elementor-element elementor-element-a7e7ccb elementor-widget elementor-widget-heading"
                data-id="a7e7ccb"
                data-element_type="widget"
                data-widget_type="heading.default"
              >
                <div className="elementor-widget-container highlighted">
                  <span className="elementor-heading-title elementor-size-default">
                    Home /{" "}
                    <a
                      href="http://marc.templategum.com/tag/services-details/"
                      rel="tag"
                    >
                      Services Details
                    </a>
                  </span>{" "}
                </div>
              </div>
              <div
                className="elementor-element elementor-element-7e70b02 elementor-widget elementor-widget-text-editor"
                data-id="7e70b02"
                data-element_type="widget"
                data-widget_type="text-editor.default"
              >
                <div className="elementor-widget-container page-heading-title">
                  <p>
                    Cybersecurity is the protection from the theft to protect of
                    our computer systems and networks or being damaged of our
                    hardware and software.
                  </p>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="elementor-section elementor-top-section elementor-element elementor-element-f8e0d28 elementor-reverse-tablet elementor-reverse-mobile elementor-section-boxed elementor-section-height-default elementor-section-height-default"
        data-id="f8e0d28"
        data-element_type="section"
        data-settings='{"background_background":"classic"}'
      >
        <div className="elementor-container elementor-column-gap-default">
          <div
            className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-14f3641"
            data-id="14f3641"
            data-element_type="column"
          >
            <div className="elementor-widget-wrap elementor-element-populated">
              <section
                className="elementor-section elementor-inner-section elementor-element elementor-element-650bc9f elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                data-id="650bc9f"
                data-element_type="section"
                data-settings='{"background_background":"classic"}'
              >
                <div className="elementor-container elementor-column-gap-default">
                  <div
                    className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-1bc2a6b"
                    data-id="1bc2a6b"
                    data-element_type="column"
                  >
                    <div className="elementor-widget-wrap elementor-element-populated">
                      <div
                        className="elementor-element elementor-element-3870a25 elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                        data-id="3870a25"
                        data-element_type="widget"
                        data-widget_type="icon-list.default"
                      >
                        <div className="elementor-widget-container">
                          <ul className="elementor-icon-list-items">
                            <li className="elementor-icon-list-item"  onClick={()=>onSelect('Ransomware-Protection')}>
                             
                              <span className={`elementor-icon-list-text ${selection==="Ransomware-Protection" ? "sel-active" : ''}`} >
                                
                                  Ransomware Protection
                                </span>
                              
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-845653f"
                    data-id="845653f"
                    data-element_type="column"
                  >
                    <div className="elementor-widget-wrap elementor-element-populated">
                      <div
                        className="elementor-element elementor-element-798ae50 elementor-view-stacked elementor-shape-circle elementor-widget elementor-widget-icon"
                        data-id="798ae50"
                        data-element_type="widget"
                        data-widget_type="icon.default"
                      >
                        <div className="elementor-widget-container">
                          <div className="elementor-icon-wrapper">
                            <div className="elementor-icon">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                id="Capa_1"
                                x="0px"
                                y="0px"
                                viewBox="0 0 512 512"
                                style={{ enableBackground: "new 0 0 512 512" }}
                                xmlSpace="preserve"
                              >
                                <g>
                                  <g>
                                    <path d="M506.134,241.843c-0.006-0.006-0.011-0.013-0.018-0.019l-104.504-104c-7.829-7.791-20.492-7.762-28.285,0.068    c-7.792,7.829-7.762,20.492,0.067,28.284L443.558,236H20c-11.046,0-20,8.954-20,20c0,11.046,8.954,20,20,20h423.557    l-70.162,69.824c-7.829,7.792-7.859,20.455-0.067,28.284c7.793,7.831,20.457,7.858,28.285,0.068l104.504-104    c0.006-0.006,0.011-0.013,0.018-0.019C513.968,262.339,513.943,249.635,506.134,241.843z"></path>
                                  </g>
                                </g>
                                <g></g>
                                <g></g>
                                <g></g>
                                <g></g>
                                <g></g>
                                <g></g>
                                <g></g>
                                <g></g>
                                <g></g>
                                <g></g>
                                <g></g>
                                <g></g>
                                <g></g>
                                <g></g>
                                <g></g>
                              </svg>{" "}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section
                className="elementor-section elementor-inner-section elementor-element elementor-element-452757b elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                data-id="452757b"
                data-element_type="section"
                data-settings='{"background_background":"classic"}'
              >
                <div className="elementor-container elementor-column-gap-default">
                  <div
                    className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-1da7de9"
                    data-id="1da7de9"
                    data-element_type="column"
                  >
                    <div className="elementor-widget-wrap elementor-element-populated">
                      <div
                        className="elementor-element elementor-element-c342f93 elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                        data-id="c342f93"
                        data-element_type="widget"
                        data-widget_type="icon-list.default"
                      >
                        <div className="elementor-widget-container">
                          <ul className="elementor-icon-list-items">
                            <li className="elementor-icon-list-item " onClick={()=>onSelect('Breach-Assessment-And-Remediation')}>
                                                         <span className={`elementor-icon-list-text ${selection==="Breach-Assessment-And-Remediation" ? "sel-active" : ''}`} >

                                  Breach Assessment And Remediation
                                </span>
                              
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-8e5f62a"
                    data-id="8e5f62a"
                    data-element_type="column"
                  >
                    <div className="elementor-widget-wrap elementor-element-populated">
                      <div
                        className="elementor-element elementor-element-85de699 elementor-view-stacked elementor-shape-circle elementor-widget elementor-widget-icon"
                        data-id="85de699"
                        data-element_type="widget"
                        data-widget_type="icon.default"
                      >
                        <div className="elementor-widget-container">
                          <div className="elementor-icon-wrapper">
                            <div className="elementor-icon">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                id="Capa_1"
                                x="0px"
                                y="0px"
                                viewBox="0 0 512 512"
                                style={{ enableBackground: "new 0 0 512 512" }}
                                xmlSpace="preserve"
                              >
                                <g>
                                  <g>
                                    <path d="M506.134,241.843c-0.006-0.006-0.011-0.013-0.018-0.019l-104.504-104c-7.829-7.791-20.492-7.762-28.285,0.068    c-7.792,7.829-7.762,20.492,0.067,28.284L443.558,236H20c-11.046,0-20,8.954-20,20c0,11.046,8.954,20,20,20h423.557    l-70.162,69.824c-7.829,7.792-7.859,20.455-0.067,28.284c7.793,7.831,20.457,7.858,28.285,0.068l104.504-104    c0.006-0.006,0.011-0.013,0.018-0.019C513.968,262.339,513.943,249.635,506.134,241.843z"></path>
                                  </g>
                                </g>
                                <g></g>
                                <g></g>
                                <g></g>
                                <g></g>
                                <g></g>
                                <g></g>
                                <g></g>
                                <g></g>
                                <g></g>
                                <g></g>
                                <g></g>
                                <g></g>
                                <g></g>
                                <g></g>
                                <g></g>
                              </svg>{" "}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section
                className="elementor-section elementor-inner-section elementor-element elementor-element-abc89d0 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                data-id="abc89d0"
                data-element_type="section"
                data-settings='{"background_background":"classic"}'
              >
                <div className="elementor-container elementor-column-gap-default">
                  <div
                    className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-2bd6ee5"
                    data-id="2bd6ee5"
                    data-element_type="column"
                  >
                    <div className="elementor-widget-wrap elementor-element-populated">
                      <div
                        className="elementor-element elementor-element-9475282 elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                        data-id="9475282"
                        data-element_type="widget"
                        data-widget_type="icon-list.default"
                      >
                        <div className="elementor-widget-container">
                          <ul className="elementor-icon-list-items">
                            <li className="elementor-icon-list-item" onClick={()=>onSelect('Secure-Cloud-Solution')}>
                            <span className={`elementor-icon-list-text ${selection==="Secure-Cloud-Solution" ? "sel-active" : ''}`} >
                                 
                                  Secure Cloud Solution
                                </span>
                              
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-2e1a7f2"
                    data-id="2e1a7f2"
                    data-element_type="column"
                  >
                    <div className="elementor-widget-wrap elementor-element-populated">
                      <div
                        className="elementor-element elementor-element-4f59f5e elementor-view-stacked elementor-shape-circle elementor-widget elementor-widget-icon"
                        data-id="4f59f5e"
                        data-element_type="widget"
                        data-widget_type="icon.default"
                      >
                        <div className="elementor-widget-container">
                          <div className="elementor-icon-wrapper">
                            <div className="elementor-icon">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                id="Capa_1"
                                x="0px"
                                y="0px"
                                viewBox="0 0 512 512"
                                style={{ enableBackground: "new 0 0 512 512" }}
                                xmlSpace="preserve"
                              >
                                <g>
                                  <g>
                                    <path d="M506.134,241.843c-0.006-0.006-0.011-0.013-0.018-0.019l-104.504-104c-7.829-7.791-20.492-7.762-28.285,0.068    c-7.792,7.829-7.762,20.492,0.067,28.284L443.558,236H20c-11.046,0-20,8.954-20,20c0,11.046,8.954,20,20,20h423.557    l-70.162,69.824c-7.829,7.792-7.859,20.455-0.067,28.284c7.793,7.831,20.457,7.858,28.285,0.068l104.504-104    c0.006-0.006,0.011-0.013,0.018-0.019C513.968,262.339,513.943,249.635,506.134,241.843z"></path>
                                  </g>
                                </g>
                                <g></g>
                                <g></g>
                                <g></g>
                                <g></g>
                                <g></g>
                                <g></g>
                                <g></g>
                                <g></g>
                                <g></g>
                                <g></g>
                                <g></g>
                                <g></g>
                                <g></g>
                                <g></g>
                                <g></g>
                              </svg>{" "}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section
                className="elementor-section elementor-inner-section elementor-element elementor-element-f23936c elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                data-id="f23936c"
                data-element_type="section"
                data-settings='{"background_background":"classic"}'
              >
                <div className="elementor-container elementor-column-gap-default">
                  <div
                    className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-ad33870"
                    data-id="ad33870"
                    data-element_type="column"
                  >
                    <div className="elementor-widget-wrap elementor-element-populated">
                      <div
                        className="elementor-element elementor-element-6981586 elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                        data-id="6981586"
                        data-element_type="widget"
                        data-widget_type="icon-list.default"
                      >
                        <div className="elementor-widget-container">
                          <ul className="elementor-icon-list-items">
                            <li className="elementor-icon-list-item" onClick={()=>onSelect('Advance-Threat-Protection')}>
                             
                            <span className={`elementor-icon-list-text ${selection==="Advance-Threat-Protection" ? "sel-active" : ''}`} >
                                 
                                  Advance Threat Protection
                                </span>
                             
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-1d3b3fb"
                    data-id="1d3b3fb"
                    data-element_type="column"
                  >
                    <div className="elementor-widget-wrap elementor-element-populated">
                      <div
                        className="elementor-element elementor-element-8df2dff elementor-view-stacked elementor-shape-circle elementor-widget elementor-widget-icon"
                        data-id="8df2dff"
                        data-element_type="widget"
                        data-widget_type="icon.default"
                      >
                        <div className="elementor-widget-container">
                          <div className="elementor-icon-wrapper">
                            <div className="elementor-icon">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                id="Capa_1"
                                x="0px"
                                y="0px"
                                viewBox="0 0 512 512"
                                style={{ enableBackground: "new 0 0 512 512" }}
                                xmlSpace="preserve"
                              >
                                <g>
                                  <g>
                                    <path d="M506.134,241.843c-0.006-0.006-0.011-0.013-0.018-0.019l-104.504-104c-7.829-7.791-20.492-7.762-28.285,0.068    c-7.792,7.829-7.762,20.492,0.067,28.284L443.558,236H20c-11.046,0-20,8.954-20,20c0,11.046,8.954,20,20,20h423.557    l-70.162,69.824c-7.829,7.792-7.859,20.455-0.067,28.284c7.793,7.831,20.457,7.858,28.285,0.068l104.504-104    c0.006-0.006,0.011-0.013,0.018-0.019C513.968,262.339,513.943,249.635,506.134,241.843z"></path>
                                  </g>
                                </g>
                                <g></g>
                                <g></g>
                                <g></g>
                                <g></g>
                                <g></g>
                                <g></g>
                                <g></g>
                                <g></g>
                                <g></g>
                                <g></g>
                                <g></g>
                                <g></g>
                                <g></g>
                                <g></g>
                                <g></g>
                              </svg>{" "}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section
                className="elementor-section elementor-inner-section elementor-element elementor-element-509b960 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                data-id="509b960"
                data-element_type="section"
                data-settings='{"background_background":"classic"}'
              >
                <div className="elementor-container elementor-column-gap-default">
                  <div
                    className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-6f35d5c"
                    data-id="6f35d5c"
                    data-element_type="column"
                  >
                    <div className="elementor-widget-wrap elementor-element-populated">
                      <div
                        className="elementor-element elementor-element-1a04804 elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                        data-id="1a04804"
                        data-element_type="widget"
                        data-widget_type="icon-list.default"
                      >
                        <div className="elementor-widget-container">
                          <ul className="elementor-icon-list-items">
                            <li className="elementor-icon-list-item" onClick={()=>onSelect('Penetration-Testing')}>
                            <span className={`elementor-icon-list-text ${selection==="Penetration-Testing" ? "sel-active" : ''}`} >
 
                                  Penetration Testing
                                </span>
                              
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-1c8d50d"
                    data-id="1c8d50d"
                    data-element_type="column"
                  >
                    <div className="elementor-widget-wrap elementor-element-populated">
                      <div
                        className="elementor-element elementor-element-5aff6cb elementor-view-stacked elementor-shape-circle elementor-widget elementor-widget-icon"
                        data-id="5aff6cb"
                        data-element_type="widget"
                        data-widget_type="icon.default"
                      >
                        <div className="elementor-widget-container">
                          <div className="elementor-icon-wrapper">
                            <div className="elementor-icon">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                id="Capa_1"
                                x="0px"
                                y="0px"
                                viewBox="0 0 512 512"
                                style={{ enableBackground: "new 0 0 512 512" }}
                                xmlSpace="preserve"
                              >
                                <g>
                                  <g>
                                    <path d="M506.134,241.843c-0.006-0.006-0.011-0.013-0.018-0.019l-104.504-104c-7.829-7.791-20.492-7.762-28.285,0.068    c-7.792,7.829-7.762,20.492,0.067,28.284L443.558,236H20c-11.046,0-20,8.954-20,20c0,11.046,8.954,20,20,20h423.557    l-70.162,69.824c-7.829,7.792-7.859,20.455-0.067,28.284c7.793,7.831,20.457,7.858,28.285,0.068l104.504-104    c0.006-0.006,0.011-0.013,0.018-0.019C513.968,262.339,513.943,249.635,506.134,241.843z"></path>
                                  </g>
                                </g>
                                <g></g>
                                <g></g>
                                <g></g>
                                <g></g>
                                <g></g>
                                <g></g>
                                <g></g>
                                <g></g>
                                <g></g>
                                <g></g>
                                <g></g>
                                <g></g>
                                <g></g>
                                <g></g>
                                <g></g>
                              </svg>{" "}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section
                className="elementor-section elementor-inner-section elementor-element elementor-element-509b960 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                data-id="509b960"
                data-element_type="section"
                data-settings='{"background_background":"classic"}'
              >
                <div className="elementor-container elementor-column-gap-default">
                  <div
                    className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-6f35d5c"
                    data-id="6f35d5c"
                    data-element_type="column"
                  >
                    <div className="elementor-widget-wrap elementor-element-populated">
                      <div
                        className="elementor-element elementor-element-1a04804 elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                        data-id="1a04804"
                        data-element_type="widget"
                        data-widget_type="icon-list.default"
                      >
                        <div className="elementor-widget-container">
                          <ul className="elementor-icon-list-items">
                            <li className="elementor-icon-list-item" onClick={()=>onSelect('DevSecOps-Implementation')}>                              
                              <span className={`elementor-icon-list-text ${selection==="DevSecOps-Implementation" ? "sel-active" : ''}`} > 
                              Network Security {" "}
                                </span>                              
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-1c8d50d"
                    data-id="1c8d50d"
                    data-element_type="column"
                  >
                    <div className="elementor-widget-wrap elementor-element-populated">
                      <div
                        className="elementor-element elementor-element-5aff6cb elementor-view-stacked elementor-shape-circle elementor-widget elementor-widget-icon"
                        data-id="5aff6cb"
                        data-element_type="widget"
                        data-widget_type="icon.default"
                      >
                        <div className="elementor-widget-container">
                          <div className="elementor-icon-wrapper">
                            <div className="elementor-icon">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                id="Capa_1"
                                x="0px"
                                y="0px"
                                viewBox="0 0 512 512"
                                style={{ enableBackground: "new 0 0 512 512" }}
                                xmlSpace="preserve"
                              >
                                <g>
                                  <g>
                                    <path d="M506.134,241.843c-0.006-0.006-0.011-0.013-0.018-0.019l-104.504-104c-7.829-7.791-20.492-7.762-28.285,0.068    c-7.792,7.829-7.762,20.492,0.067,28.284L443.558,236H20c-11.046,0-20,8.954-20,20c0,11.046,8.954,20,20,20h423.557    l-70.162,69.824c-7.829,7.792-7.859,20.455-0.067,28.284c7.793,7.831,20.457,7.858,28.285,0.068l104.504-104    c0.006-0.006,0.011-0.013,0.018-0.019C513.968,262.339,513.943,249.635,506.134,241.843z"></path>
                                  </g>
                                </g>
                                <g></g>
                                <g></g>
                                <g></g>
                                <g></g>
                                <g></g>
                                <g></g>
                                <g></g>
                                <g></g>
                                <g></g>
                                <g></g>
                                <g></g>
                                <g></g>
                                <g></g>
                                <g></g>
                                <g></g>
                              </svg>{" "}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section
                className="elementor-section elementor-inner-section elementor-element elementor-element-a2ea79e elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                data-id="a2ea79e"
                data-element_type="section"
                data-settings='{"background_background":"classic"}'
              >
                <div className="elementor-container elementor-column-gap-default">
                  <div
                    className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-a15ebd4"
                    data-id="a15ebd4"
                    data-element_type="column"
                  >
                    <div className="elementor-widget-wrap elementor-element-populated">
                      <div
                        className="elementor-element elementor-element-2e080e5 elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                        data-id="2e080e5"
                        data-element_type="widget"
                        data-widget_type="icon-list.default"
                      >
                        <div className="elementor-widget-container">
                          <ul className="elementor-icon-list-items">
                            <li className="elementor-icon-list-item">
                              <a href="#">
                                <span className="elementor-icon-list-icon">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    id="Capa_1"
                                    x="0px"
                                    y="0px"
                                    viewBox="0 0 482.14 482.14"
                                    style={{
                                      enableBackground: "new 0 0 482.14 482.14"
                                    }}
                                    xmlSpace="preserve"
                                  >
                                    <g>
                                      <path d="M142.024,310.194c0-8.007-5.556-12.782-15.359-12.782c-4.003,0-6.714,0.395-8.132,0.773v25.69   c1.679,0.378,3.743,0.504,6.588,0.504C135.57,324.379,142.024,319.1,142.024,310.194z"></path>
                                      <path d="M202.709,297.681c-4.39,0-7.227,0.379-8.905,0.772v56.896c1.679,0.394,4.39,0.394,6.841,0.394   c17.809,0.126,29.424-9.677,29.424-30.449C230.195,307.231,219.611,297.681,202.709,297.681z"></path>
                                      <path d="M315.458,0H121.811c-28.29,0-51.315,23.041-51.315,51.315v189.754h-5.012c-11.418,0-20.678,9.251-20.678,20.679v125.404   c0,11.427,9.259,20.677,20.678,20.677h5.012v22.995c0,28.305,23.025,51.315,51.315,51.315h264.223   c28.272,0,51.3-23.011,51.3-51.315V121.449L315.458,0z M99.053,284.379c6.06-1.024,14.578-1.796,26.579-1.796   c12.128,0,20.772,2.315,26.58,6.965c5.548,4.382,9.292,11.615,9.292,20.127c0,8.51-2.837,15.745-7.999,20.646   c-6.714,6.32-16.643,9.157-28.258,9.157c-2.585,0-4.902-0.128-6.714-0.379v31.096H99.053V284.379z M386.034,450.713H121.811   c-10.954,0-19.874-8.92-19.874-19.889v-22.995h246.31c11.42,0,20.679-9.25,20.679-20.677V261.748   c0-11.428-9.259-20.679-20.679-20.679h-246.31V51.315c0-10.938,8.921-19.858,19.874-19.858l181.89-0.19v67.233   c0,19.638,15.934,35.587,35.587,35.587l65.862-0.189l0.741,296.925C405.891,441.793,396.987,450.713,386.034,450.713z    M174.065,369.801v-85.422c7.225-1.15,16.642-1.796,26.58-1.796c16.516,0,27.226,2.963,35.618,9.282   c9.031,6.714,14.704,17.416,14.704,32.781c0,16.643-6.06,28.133-14.453,35.224c-9.157,7.612-23.096,11.222-40.125,11.222   C186.191,371.092,178.966,370.446,174.065,369.801z M314.892,319.226v15.996h-31.23v34.973h-19.74v-86.966h53.16v16.122h-33.42   v19.875H314.892z"></path>
                                    </g>
                                    <g></g>
                                    <g></g>
                                    <g></g>
                                    <g></g>
                                    <g></g>
                                    <g></g>
                                    <g></g>
                                    <g></g>
                                    <g></g>
                                    <g></g>
                                    <g></g>
                                    <g></g>
                                    <g></g>
                                    <g></g>
                                    <g></g>
                                  </svg>{" "}
                                </span>
                                <span className="elementor-icon-list-text">
                                  Download Brochure
                                </span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section
                className="elementor-section elementor-inner-section elementor-element elementor-element-979e305 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                data-id="979e305"
                data-element_type="section"
                data-settings='{"background_background":"classic"}'
              >
                <div className="elementor-background-overlay"></div>
                <div className="elementor-container elementor-column-gap-default">
                  <div
                    className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-bc29e71"
                    data-id="bc29e71"
                    data-element_type="column"
                  >
                    <div className="elementor-widget-wrap elementor-element-populated">
                      <div
                        className="elementor-element elementor-element-ff8b09a elementor-widget elementor-widget-heading"
                        data-id="ff8b09a"
                        data-element_type="widget"
                        data-widget_type="heading.default"
                      >
                        <div className="elementor-widget-container">
                          <h3 className="elementor-heading-title elementor-size-default">
                            Get a Free Trial 7 Days
                          </h3>{" "}
                        </div>
                      </div>
                      <div
                        className="elementor-element elementor-element-ffeaafb elementor-widget elementor-widget-text-editor"
                        data-id="ffeaafb"
                        data-element_type="widget"
                        data-widget_type="text-editor.default"
                      >
                        <div className="elementor-widget-container">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                          </p>{" "}
                        </div>
                      </div>
                      <div
                        className="elementor-element elementor-element-9b4b73e elementor-align-left elementor-mobile-align-left elementor-widget elementor-widget-button"
                        data-id="9b4b73e"
                        data-element_type="widget"
                        data-widget_type="button.default"
                      >
                        <div className="elementor-widget-container">
                          <div className="elementor-button-wrapper">
                            <a
                              href="#"
                              className="elementor-button-link elementor-button elementor-size-md"
                              role="button"
                            >
                              <span className="elementor-button-content-wrapper">
                                <span className="elementor-button-text">
                                  Get Free Trial
                                </span>
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div> 
          {selection===undefined || selection===''?<Default/> : null}
          {selection==='Advance-Threat-Protection'?<AdvanceThreatProtection/> : null}
          {selection==='Breach-Assessment-And-Remediation'?<BreachAssessmentAndRemediation/> : null}
          {selection==='DevSecOps-Implementation'?<DevSecOpsImplementation/> : null}
          {selection==='Penetration-Testing'?<PenetrationTesting/> : null}
          {selection==='Ransomware-Protection'?<RansomwareProtection/> : null}
          {selection==='Secure-Cloud-Solution'?<SecureCloudSolution/> : null}
          
        </div>
      </section>
    </div>
  );
}

export default ServicesDetails;
