import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import HomeHeading from './Pages/HomeHeading';
import HomeDetails from './Pages/HomeDetails';
import Consultation from './Pages/Consultation';
import Services from './Pages/Services';
import ServicesDetails from './Pages/ServiceDetails';
import {BrowserRouter,Routes,Route } from 'react-router-dom';
import Contact from './Pages/Contact';
import Blog from './Pages/Blog';
import BlogDetails from './Pages/BlogDetails';
 
const url = window.location.pathname;
const filename = url.substring(url.lastIndexOf('/')+1);
function App() {
  
  return (
    <BrowserRouter> 
    
    <div data-elementor-type="wp-post" data-elementor-id="3425" className="elementor elementor-3425" data-elementor-settings="[]">
         <div className="elementor-section-wrap">
           
            <section  
                  className={`elementor-element-fba5607 elementor-section elementor-top-section elementor-element  elementor-section-boxed elementor-section-height-default elementor-section-height-default ${filename==='home' || filename==='contact-us' || filename===''?'' : 'services-details'}`}
                  data-id="fba5607" data-element_type="section"
                  data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                  <div className="elementor-container elementor-column-gap-default">
                      <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-2f68b39"
                          data-id="2f68b39" data-element_type="column">
                          <div className="elementor-widget-wrap elementor-element-populated">
                            <Header selected={filename}/>     
                          
                          </div>
                      </div>
                  </div>  
                  <Routes>
                  <Route path="/" element={<HomeDetails />}/>
                  <Route path="home" element={<HomeDetails />} />
                  <Route path="consultation" element={<Consultation/>}/>
                  <Route path="service" element={<Services />}/>
                  <Route path="service-details" element={<ServicesDetails type=""/>}/>
                  <Route path="contact-us" element={<Contact />}/>
                  <Route path="blog" element={<Blog />}/>
                  <Route path="blog-details" element={<BlogDetails />}/>
                 
                  
            </Routes>           
            </section>
             <Footer/>
          </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
