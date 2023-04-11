import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import PageContainer from "./layout/PageContainer";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <PageContainer>
        <Home />
      </PageContainer>
    </div>
  );
}

export default App;
