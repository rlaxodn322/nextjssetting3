import Head from 'next/head';
import MainLayout from '../layouts';
import { Page } from './style';
// import App from '../components/antd/timeline';
import App from '../components/antd/card';
// import FormDisabledDemo from '../components/antd/signup';
import MapComponent from '../components/apis/kakao/map';

const Home = () => {
  return (
    <>
      <Head>
        <title>HOME</title>
        <meta name="description" content="text." />
      </Head>
      {/* <MapComponent></MapComponent>
      <App></App> */}
      {/* <FormDisabledDemo></FormDisabledDemo> */}

      <Page>
        <div style={{ height: '300px' }}>dsadas</div>
      </Page>
      <Page>
        <div style={{ height: '300px' }}>dsadas</div>
      </Page>
      <Page>
        <div style={{ height: '300px' }}>dsadas</div>
      </Page>
     
    </>
  );
};

Home.layout = MainLayout;

export default Home;
