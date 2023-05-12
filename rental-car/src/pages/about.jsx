import { Tabs } from 'antd';
import aboutBanner from '../assets/mobil-mobil.jpeg';

function AppAbout() {
  return (
    <div className="block aboutPage">
      <div className="container">
        <h2>About</h2>
        <div className="bannerImage">
          <img src={aboutBanner} alt="banner" />
        </div>
        <Tabs defaultActiveKey="1">
          <Tabs.TabPane tab="About" key={1}>
            <p>
              MAKE A CAR menyediakan jasa sewa Mobil dengan harga terjangkau. Layanan Kami bertujuan untuk memberi fasilitas kepada pelanggan yang sedang membutuhkan alat transportasi untuk digunakan seperti melakukan kunjungan wisata
              berkeliling, wisata religi, kuliner, dan lain-lain.
            </p>
          </Tabs.TabPane>
        </Tabs>
      </div>
    </div>
  );
}

export default AppAbout;
