import './index.css'

const Body = () => (
  <div className="body-container">
    <div className="nav-container">
      <h1 className="nav-heading">Left Navbar Menu</h1>
      <ul className="list-container">
        <li className="list-item">Item 1</li>
        <li className="list-item">Item 2</li>
        <li className="list-item">Item 3</li>
        <li className="list-item">Item 4</li>
      </ul>
    </div>
    <div className="content-container">
      <h1 className="nav-heading">Content</h1>
      <p className="content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam.
      </p>
    </div>
    <div className="nav-container">
      <h1 className="nav-heading">Right Navbar</h1>
      <div className="box-container">
        <div className="box">Ad 1</div>
        <div className="box">Ad 2</div>
      </div>
    </div>
  </div>
)

export default Body
