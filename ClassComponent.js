const root = ReactDOM.createRoot(document.getElementById("root"));

class Cohort55FS extends React.Component {
  render() {
    return (
      <>
        <h1 style={{textAlign: "center", color: "blue"}}>Welcome to React!</h1>
        <p className="text-center" >This is a class component.</p>
      </>
    );
  }
}

root.render(
  <>
    <Cohort55FS />
    <Cohort55FS />
    <Cohort55FS />
  </>
);


