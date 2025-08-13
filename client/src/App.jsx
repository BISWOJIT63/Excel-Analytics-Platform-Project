  
import Navbar from "./navbar.jsx";
import './App.css'
import Footer from "./footer.jsx";
import excelImage from "./pics/excel file.png";
import analyticsImage1 from "./pics/m1.jpg";
import analyticsImage2 from "./pics/m2.png";
import analyticsImage3 from "./pics/m3.jpg";

function App() {

  return (
    <>
      <Navbar />
      <div className="content">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-content">
            <h1 className="hero-title">Transform Your Excel Files into Stunning Analytics</h1>
            <p className="hero-subtitle">
              Convert boring spreadsheets into beautiful, interactive visualizations in seconds. 
              Unlock the power of your data with professional-grade analytics.
            </p>
            <div className="hero-buttons">
              <button className="btn-primary">Get Started Free</button>
              <button className="btn-secondary">Watch Demo</button>
            </div>
          </div>
        </section>

        {/* Transformation Showcase */}
        <section className="transformation-section">
          <div className="section-header">
            <div className="magic-icon">✨</div>
            <h2 className="section-title">See the Magic in Action</h2>
            <p className="section-subtitle">Transform your spreadsheets into stunning visual stories in seconds</p>
          </div>
          
          <div className="transformation-container">
            <div className="before-after">
              <div className="before">
                <div className="step-indicator">
                  <div className="step-number">1</div>
                  <div className="step-line"></div>
                </div>
                <div className="content-card">
                  <div className="card-header">
                    <div className="excel-icon">📊</div>
                    <h3>Upload Your Excel File</h3>
                  </div>
                  <div className="image-container">
                    <img src={excelImage} alt="Plain Excel Spreadsheet" className="excel-image" />
                    {/* <div className="image-overlay">
                      <span>Drag & Drop or Click</span>
                    </div> */}
                  </div>
                  {/* <div className="features-list">
                    <div className="feature-item">
                      <span className="check-icon">✓</span>
                      <span>Support for .xlsx, .xls, .csv</span>
                    </div>
                    <div className="feature-item">
                      <span className="check-icon">✓</span>
                      <span>Up to 1M rows processed</span>
                    </div>
                  </div> */}
                </div>
              </div>              
              <div className="after">
                <div className="step-indicator">
                  <div className="step-number">2</div>
                     <div className="step-line"></div>
                </div>
                <div className="content-card1">
                  <div className="card-header">
                    <div className="analytics-icon">📈</div>
                    <h3>Get Beautiful Analytics</h3>
                  </div>
                  <div className="analytics-showcase">
                    <div className="analytics-grid">
                      <div className="analytics-item">
                        <img src={analyticsImage1} alt="Analytics Dashboard" className="analytics-image" />
                        <div className="analytics-label">Interactive Dashboards</div>
                      </div>
                      <div className="analytics-item">
                        <img src={analyticsImage2} alt="Data Visualization" className="analytics-image" />
                        <div className="analytics-label">Smart Charts</div>
                      </div>
                      <div className="analytics-item">
                        <img src={analyticsImage3} alt="Analytics Dashboard" className="analytics-image" />
                        <div className="analytics-label">Real-time Insights</div>
                      </div>
                    </div>
                  </div>
                  {/* <div className="features-list">
                    <div className="feature-item">
                      <span className="check-icon">✓</span>
                      <span>20+ Chart Types</span>
                    </div>
                    <div className="feature-item">
                      <span className="check-icon">✓</span>
                      <span>Export to PDF/PNG</span>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
            
            <div className="transformation-stats">
              <div className="stat-item">
                <div className="stat-number">10x</div>
                <div className="stat-label">Faster Analysis</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">50K+</div>
                <div className="stat-label">Files Processed</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">99%</div>
                <div className="stat-label">Accuracy Rate</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="features-section">
          <h2 className="section-title">Why Choose Excelor?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3>Instant Analytics</h3>
              <p>Upload your Excel file and get beautiful charts and graphs in seconds</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎨</div>
              <h3>Professional Design</h3>
              <p>Stunning visualizations that are ready for presentations and reports</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Lightning Fast</h3>
              <p>Process thousands of rows of data instantly with our optimized engine</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📱</div>
              <h3>Mobile Friendly</h3>
              <p>Access your analytics anywhere, on any device, anytime</p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="cta-section">
          <div className="cta-content">
            <h2>Ready to Transform Your Data?</h2>
            <p>Join thousands of professionals who trust Excelor for their analytics needs</p>
            <button className="btn-cta">Start Your Free Trial</button>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}

export default App
