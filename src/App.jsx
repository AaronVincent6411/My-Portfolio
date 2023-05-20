import Overview from "./pages/1-Overview/Overview";

function App() {
  const myStyle = {
    background: 'linear-gradient(to right, #632636, #392A48)',
    height: '100vh',
    width: '100vw'
  };

  const isMobile = window.innerWidth <= 767;

  return (
    <div style={myStyle}>
      {isMobile ? (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
          <h2>Sorry friends i havn't made website responsive 😅 . Please use a laptop or desktop to view this website 😁.</h2>
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
