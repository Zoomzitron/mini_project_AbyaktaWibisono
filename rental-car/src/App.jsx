import { Layout } from 'antd';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import AppHeader from './components/common/header';
import AppHome from './pages/home';
import AppAbout from './pages/about';
import AppCar from './pages/car';
import FooterCopyright from './components/common/footerCopyright';

const { Header, Footer, Content } = Layout;

function App() {
  return (
    <>
      <div className="App">
        <Layout>
          <Header>
            <AppHeader />
          </Header>
          <Content>
            <Routes>
              <Route path="/" element={<AppHome />} />
              <Route path="/About" element={<AppAbout />} />
              <Route path="/Car" element={<AppCar />} />
            </Routes>
          </Content>
          <Footer>
            <FooterCopyright />
          </Footer>
        </Layout>
      </div>
    </>
  );
}

export default App;
