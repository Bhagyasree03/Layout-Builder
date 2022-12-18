import './index.css'

const ConfigurationController = () => (
  <div className="bg">
    <div className="configuration-card">
      <h1 className="layout-heading">Layout</h1>
      <div className="checkbox-container">
        <div className="checkbox-input">
          <input type="checkbox" id="content" />
          <label htmlFor="content" className="label-text">
            Content
          </label>
        </div>
        <div className="checkbox-input">
          <input type="checkbox" id="leftNavbar" />
          <label htmlFor="leftNavbar" className="label-text">
            Left Navbar
          </label>
        </div>
        <div className="checkbox-input">
          <input type="checkbox" id="rightNavbar" />
          <label htmlFor="rightNavbar" className="label-text">
            Right Navbar
          </label>
        </div>
      </div>
    </div>
  </div>
)

export default ConfigurationController
