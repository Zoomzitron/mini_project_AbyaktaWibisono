import { NavLink } from 'react-router-dom';
import { MobileOutlined, MailOutlined, LinkedinOutlined, GithubOutlined, UserOutlined } from '@ant-design/icons';

function AppHeader() {
  return (
    <div className="container">
      <div className="topBar">
        <div className="contactInfo">
          <ul>
            <li>
              <a href="tel:081389415285">
                <span>
                  <MobileOutlined />
                  0813-8941-5285
                </span>
              </a>
            </li>
            <li>
              <a href="mailto:wibiupn@gmail.com">
                <span>
                  <MailOutlined />
                  wibiupn@gmail.com
                </span>
              </a>
            </li>
          </ul>
        </div>
        <div className="otherInfo">
          <ul className="socialMedia">
            <li>
              <a href="https://www.linkedin.com/in/abyakta-wibisono-91b89b20a/">
                <LinkedinOutlined />
              </a>
            </li>
            <li>
              <a href="https://github.com/Zoomzitron">
                <GithubOutlined />
              </a>
            </li>
          </ul>
          <button>
            <UserOutlined />
            My Account
          </button>
        </div>
      </div>
      <div className="header separator">
        <div className="logo">Make A Car</div>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/car">Car</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default AppHeader;
