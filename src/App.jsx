import Overview from "./pages/1-Overview/Overview";

function App() {
  // const myStyle = {
  //   background: 'linear-gradient(to right, #632636, #392A48)',
  //   height: '100vh',
  //   width: '100vw'
  // };

  const isMobile = window.innerWidth < 200;

  return (
    <Overview />
  );
}

export default App;
