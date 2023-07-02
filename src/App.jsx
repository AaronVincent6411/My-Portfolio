import Overview from "./pages/1-Overview/Overview";

function App() {
  // const myStyle = {
  //   background: 'linear-gradient(to right, #632636, #392A48)',
  //   height: '100vh',
  //   width: '100vw'
  // };

  const isMobile = window.innerWidth < 200;

  return (
    <div>
      {isMobile ? (
        <div style={{ display: 'flex', color:'white', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
          <h2>Sorry friends i havn't made website responsive 😅 . Please use a laptop or desktop (width 1920 px or width 1440 px) to view this website 😁.</h2>
        </div>
      ) : (
        <div>
          <Overview />
        </div>
      )}
    </div>
  );
}

export default App;
