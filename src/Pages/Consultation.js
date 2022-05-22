import {useState,useEffect} from 'react'
import Default from './Consultation/Default'
import GotHacked from './Consultation/GotHacked'
import CloudMigration  from './Consultation/CloudMigration'
import DevSecOps from './Consultation/DevSecOps'
import  './style-consultation.css'
import SecuringSDLC from './Consultation/SecuringSDLC'
import SecuringWeb from './Consultation/SecuringWeb'

const Consultation=({type})=> {
  const [selection,setSelection]=useState(type)
   const onSelect=(name)=>{
    setSelection(name);
  }
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
                    Niche Cyber Security – Pioneer Cyber Security Consultancy
                  </h2>{" "}
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
                    Everything you need to know about thriving in cyberspace for
                    your business
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
                            <li className="elementor-icon-list-item" onClick={()=>onSelect('Got-Hacked')}>
                                 <span className={`elementor-icon-list-text ${selection==="Got-Hacked" ? "sel-active" : ''}`} >
                                  Got Hacked?
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
                            <li className="elementor-icon-list-item" onClick={()=>onSelect('Cloud-Migration')}>
                           
                              <span className={`elementor-icon-list-text ${selection==="Cloud-Migration" ? "sel-active" : ''}`} >
                                  Cloud Migration
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
                            <li className="elementor-icon-list-item" onClick={()=>onSelect('DevSecOps')}>
                              
                              <span className={`elementor-icon-list-text ${selection==="DevSecOps" ? "sel-active" : ''}`} >
                                  DevSecOps
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
                            <li className="elementor-icon-list-item"  onClick={()=>onSelect('Securing-Web')}>
                             
                              <span className={`elementor-icon-list-text ${selection==="Securing-Web" ? "sel-active" : ''}`} >
                                 Securing Web
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
                            <li className="elementor-icon-list-item"  onClick={()=>onSelect('Securing-SDLC')}>
                             
                              <span className={`elementor-icon-list-text ${selection==="Securing-SDLC" ? "sel-active" : ''}`} >
                                  Securing SDLC
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
         {selection==='Got-Hacked'?<GotHacked/> : null}
         {selection==='Cloud-Migration'?<CloudMigration/> : null}
         {selection==='DevSecOps'?<DevSecOps/> : null}
         {selection==='Securing-SDLC'?<SecuringSDLC/>: null}
         {selection==='Securing-Web'?<SecuringWeb/> : null}

        </div>
      </section>
      <section
        className="elementor-3670 elementor-section elementor-top-section elementor-element elementor-element-bb220bf elementor-section-boxed elementor-section-height-default elementor-section-height-default"
        data-id="bb220bf"
        data-element_type="section"
        data-settings='{"background_background":"classic"}'
        style={{background:'#00142C'}}
      >
        <div className="elementor-container elementor-column-gap-default">
          <div
            className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-3299ea5"
            data-id="3299ea5"
            data-element_type="column"
          >
            <div className="elementor-widget-wrap elementor-element-populated">
              <section
                className="elementor-section elementor-inner-section elementor-element elementor-element-555d89b elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                data-id="555d89b"
                data-element_type="section"
              >
                <div className="elementor-container elementor-column-gap-default">
                  <div
                    className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-24f9928"
                    data-id="24f9928"
                    data-element_type="column"
                  >
                    <div className="elementor-widget-wrap elementor-element-populated">
                      <div
                        className="elementor-element elementor-element-108f46c elementor-widget elementor-widget-heading"
                        data-id="108f46c"
                        data-element_type="widget"
                        data-widget_type="heading.default"
                      >
                        <div className="elementor-widget-container">
                          <span className="elementor-heading-title elementor-size-default">
                            Security Packages
                          </span>{" "}
                        </div>
                      </div>
                      <div
                        className="elementor-element elementor-element-d244dfc elementor-widget elementor-widget-heading"
                        data-id="d244dfc"
                        data-element_type="widget"
                        data-widget_type="heading.default"
                      >
                        <div className="elementor-widget-container">
                          <h2 className="elementor-heading-title elementor-size-default">
                            Flexible Pricing Plans
                          </h2>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section
                className="elementor-section elementor-inner-section elementor-element elementor-element-6cf98a8 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                data-id="6cf98a8"
                data-element_type="section"
              >
                <div className="elementor-container elementor-column-gap-default">
                  <div
                    className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-88e6c65"
                    data-id="88e6c65"
                    data-element_type="column"
                  >
                    <div className="elementor-widget-wrap elementor-element-populated">
                      <div
                        className="elementor-element elementor-element-0b4e539 elementor-widget elementor-widget-price-table"
                        data-id="0b4e539"
                        data-element_type="widget"
                        data-widget_type="price-table.default"
                      >
                        <div className="elementor-widget-container">
                          <div className="elementor-price-table">
                            <div className="elementor-price-table__header">
                              <h3 className="elementor-price-table__heading">
                                Basic Plan{" "}
                              </h3>
                            </div>

                            <div className="elementor-price-table__price">
                              <span className="elementor-price-table__integer-part">
                                Free{" "}
                              </span>
                              <span className="elementor-price-table__period elementor-typo-excluded">
                                Per month
                              </span>{" "}
                            </div>

                            <ul className="elementor-price-table__features-list">
                              <li className="elementor-repeater-item-641da50">
                                <div className="elementor-price-table__feature-inner">
                                  <span>30 Days Product Testing </span>
                                </div>
                              </li>
                              <li className="elementor-repeater-item-e8136d5">
                                <div className="elementor-price-table__feature-inner">
                                  <span>Upgrade Anytime Protection </span>
                                </div>
                              </li>
                              <li className="elementor-repeater-item-9169390">
                                <div className="elementor-price-table__feature-inner">
                                  <span>Unlimited Malware Removal </span>
                                </div>
                              </li>
                              <li className="elementor-repeater-item-acec154">
                                <div className="elementor-price-table__feature-inner">
                                  <span>24/7 Live Assistance </span>
                                </div>
                              </li>
                              <li className="elementor-repeater-item-45cba0f">
                                <div className="elementor-price-table__feature-inner">
                                  <span>Scan Every 13 Hrs </span>
                                </div>
                              </li>
                              <li className="elementor-repeater-item-e12f481">
                                <div className="elementor-price-table__feature-inner">
                                  <span>Configure Software </span>
                                </div>
                              </li>
                            </ul>

                            <div className="elementor-price-table__footer">
                              <a
                                className="elementor-price-table__button elementor-button elementor-size-md"
                                href="#"
                              >
                                Download Now{" "}
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-896f851"
                    data-id="896f851"
                    data-element_type="column"
                  >
                    <div className="elementor-widget-wrap elementor-element-populated">
                      <div
                        className="elementor-element elementor-element-300b054 elementor-widget elementor-widget-price-table"
                        data-id="300b054"
                        data-element_type="widget"
                        data-widget_type="price-table.default"
                      >
                        <div className="elementor-widget-container">
                          <div className="elementor-price-table">
                            <div className="elementor-price-table__header">
                              <h3 className="elementor-price-table__heading">
                                Premium Plan{" "}
                              </h3>
                            </div>

                            <div className="elementor-price-table__price">
                              <span className="elementor-price-table__currency">
                                $
                              </span>{" "}
                              <span className="elementor-price-table__integer-part">
                                29{" "}
                              </span>
                              <span className="elementor-price-table__period elementor-typo-excluded">
                                Per month
                              </span>{" "}
                            </div>

                            <ul className="elementor-price-table__features-list">
                              <li className="elementor-repeater-item-641da50">
                                <div className="elementor-price-table__feature-inner">
                                  <span>40 Days Product Testing </span>
                                </div>
                              </li>
                              <li className="elementor-repeater-item-e8136d5">
                                <div className="elementor-price-table__feature-inner">
                                  <span>Upgrade Anytime Protection </span>
                                </div>
                              </li>
                              <li className="elementor-repeater-item-9169390">
                                <div className="elementor-price-table__feature-inner">
                                  <span>Unlimited Malware Removal </span>
                                </div>
                              </li>
                              <li className="elementor-repeater-item-acec154">
                                <div className="elementor-price-table__feature-inner">
                                  <span>24/7 Live Assistance </span>
                                </div>
                              </li>
                              <li className="elementor-repeater-item-45cba0f">
                                <div className="elementor-price-table__feature-inner">
                                  <span>Scan Every 13 Hrs </span>
                                </div>
                              </li>
                              <li className="elementor-repeater-item-e12f481">
                                <div className="elementor-price-table__feature-inner">
                                  <span>Configure Software </span>
                                </div>
                              </li>
                            </ul>

                            <div className="elementor-price-table__footer">
                              <a
                                className="elementor-price-table__button elementor-button elementor-size-md"
                                href="#"
                              >
                                Purchase Now{" "}
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-36829d6"
                    data-id="36829d6"
                    data-element_type="column"
                  >
                    <div className="elementor-widget-wrap elementor-element-populated">
                      <div
                        className="elementor-element elementor-element-18883c4 elementor-widget elementor-widget-price-table"
                        data-id="18883c4"
                        data-element_type="widget"
                        data-widget_type="price-table.default"
                      >
                        <div className="elementor-widget-container">
                          <div className="elementor-price-table">
                            <div className="elementor-price-table__header">
                              <h3 className="elementor-price-table__heading">
                                Delux Plan{" "}
                              </h3>
                            </div>

                            <div className="elementor-price-table__price">
                              <span className="elementor-price-table__currency">
                                $
                              </span>{" "}
                              <span className="elementor-price-table__integer-part">
                                59{" "}
                              </span>
                              <span className="elementor-price-table__period elementor-typo-excluded">
                                Per month
                              </span>{" "}
                            </div>

                            <ul className="elementor-price-table__features-list">
                              <li className="elementor-repeater-item-641da50">
                                <div className="elementor-price-table__feature-inner">
                                  <span>50 Days Product Testing </span>
                                </div>
                              </li>
                              <li className="elementor-repeater-item-e8136d5">
                                <div className="elementor-price-table__feature-inner">
                                  <span>Upgrade Anytime Protection </span>
                                </div>
                              </li>
                              <li className="elementor-repeater-item-9169390">
                                <div className="elementor-price-table__feature-inner">
                                  <span>Unlimited Malware Removal </span>
                                </div>
                              </li>
                              <li className="elementor-repeater-item-acec154">
                                <div className="elementor-price-table__feature-inner">
                                  <span>24/7 Live Assistance </span>
                                </div>
                              </li>
                              <li className="elementor-repeater-item-45cba0f">
                                <div className="elementor-price-table__feature-inner">
                                  <span>Scan Every 13 Hrs </span>
                                </div>
                              </li>
                              <li className="elementor-repeater-item-e12f481">
                                <div className="elementor-price-table__feature-inner">
                                  <span>Configure Software </span>
                                </div>
                              </li>
                            </ul>

                            <div className="elementor-price-table__footer">
                              <a
                                className="elementor-price-table__button elementor-button elementor-size-md"
                                href="#"
                              >
                                Purchase Now{" "}
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
      <section
        className="elementor-section elementor-top-section elementor-element elementor-element-2324e5d elementor-section-boxed elementor-section-height-default elementor-section-height-default"
        data-id="2324e5d"
        data-element_type="section"
        data-settings='{"background_background":"classic"}'
      >
        <div className="elementor-background-overlay"></div>
        <div className="elementor-container elementor-column-gap-default">
          <div
            className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-a2cf3cc"
            data-id="a2cf3cc"
            data-element_type="column"
          >
            <div className="elementor-widget-wrap elementor-element-populated">
              <section
                id="contact"
                className="elementor-section elementor-inner-section elementor-element elementor-element-0efeb7d elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                data-id="0efeb7d"
                data-element_type="section"
              >
                <div className="elementor-container elementor-column-gap-default">
                  <div
                    className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-f17a648"
                    data-id="f17a648"
                    data-element_type="column"
                  >
                    <div className="elementor-widget-wrap elementor-element-populated">
                      <div
                        className="elementor-element elementor-element-4061d97 elementor-widget elementor-widget-heading"
                        data-id="4061d97"
                        data-element_type="widget"
                        data-widget_type="heading.default"
                      >
                        <div className="elementor-widget-container">
                          <span className="elementor-heading-title elementor-size-default">
                            Get In Touch
                          </span>
                        </div>
                      </div>
                      <div
                        className="elementor-element elementor-element-670525a elementor-widget elementor-widget-heading"
                        data-id="670525a"
                        data-element_type="widget"
                        data-widget_type="heading.default"
                      >
                        <div className="elementor-widget-container">
                          <h2 className="elementor-heading-title elementor-size-default">
                            Contact Us Today To Speak With An Expert About Your
                            Specific Needs
                          </h2>
                        </div>
                      </div>
                      <div
                        className="elementor-element elementor-element-fedd461 elementor-button-align-center elementor-mobile-button-align-stretch elementor-widget elementor-widget-form"
                        data-id="fedd461"
                        data-element_type="widget"
                        data-settings='{"step_next_label":"Next","step_previous_label":"Previous","button_width":"100","step_type":"number_text","step_icon_shape":"circle"}'
                        data-widget_type="form.default"
                      >
                        <div className="elementor-widget-container">
                          <form
                            className="elementor-form"
                            method="post"
                            name="New Form"
                          >
                            <input type="hidden" name="post_id" value="3425" />
                            <input
                              type="hidden"
                              name="form_id"
                              value="fedd461"
                            />
                            <input
                              type="hidden"
                              name="referer_title"
                              value="Hansip – Home"
                            />

                            <input
                              type="hidden"
                              name="queried_id"
                              value="3425"
                            />

                            <div className="elementor-form-fields-wrapper elementor-labels-above">
                              <div className="elementor-field-type-text elementor-field-group elementor-column elementor-field-group-name elementor-col-50">
                                <label
                                  htmlFor="form-field-name"
                                  className="elementor-field-label"
                                >
                                  Name{" "}
                                </label>
                                <input
                                  size="1"
                                  type="text"
                                  name="form_fields[name]"
                                  id="form-field-name"
                                  className="elementor-field elementor-size-sm  elementor-field-textual"
                                />
                              </div>
                              <div className="elementor-field-type-email elementor-field-group elementor-column elementor-field-group-email elementor-col-50 elementor-field-required">
                                <label
                                  htmlFor="form-field-email"
                                  className="elementor-field-label"
                                >
                                  Email{" "}
                                </label>
                                <input
                                  size="1"
                                  type="email"
                                  name="form_fields[email]"
                                  id="form-field-email"
                                  className="elementor-field elementor-size-sm  elementor-field-textual"
                                  required="required"
                                  aria-required="true"
                                />
                              </div>
                              <div className="elementor-field-type-tel elementor-field-group elementor-column elementor-field-group-field_68dc295 elementor-col-50 elementor-field-required">
                                <label
                                  htmlFor="form-field-field_68dc295"
                                  className="elementor-field-label"
                                >
                                  Phone{" "}
                                </label>
                                <input
                                  size="1"
                                  type="tel"
                                  name="form_fields[field_68dc295]"
                                  id="form-field-field_68dc295"
                                  className="elementor-field elementor-size-sm  elementor-field-textual"
                                  required="required"
                                  aria-required="true"
                                  pattern="[0-9()#&amp;+*-=.]+"
                                  title="Only numbers and phone characters (#, -, *, etc) are accepted."
                                />
                              </div>
                              <div className="elementor-field-type-text elementor-field-group elementor-column elementor-field-group-field_7f45f18 elementor-col-50 elementor-field-required">
                                <label
                                  htmlFor="form-field-field_7f45f18"
                                  className="elementor-field-label"
                                >
                                  Company{" "}
                                </label>
                                <input
                                  size="1"
                                  type="text"
                                  name="form_fields[field_7f45f18]"
                                  id="form-field-field_7f45f18"
                                  className="elementor-field elementor-size-sm  elementor-field-textual"
                                  required="required"
                                  aria-required="true"
                                />
                              </div>
                              <div className="elementor-field-group elementor-column elementor-field-type-submit elementor-col-100 e-form__buttons">
                                <button
                                  type="submit"
                                  className="elementor-button elementor-size-md"
                                >
                                  <span>
                                    <span className=" elementor-button-icon"></span>
                                    <span className="elementor-button-text">
                                      Consultation
                                    </span>
                                  </span>
                                </button>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Consultation;
