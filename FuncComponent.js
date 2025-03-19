const root = ReactDOM.createRoot(document.getElementById("root"));

function Cohort55FS() {

  return(
    <>
    <h1 style={{textAlign: "center", color: "green", font: "30px"}}>React Function Component</h1>
    <p className="text-center">This is a functional component.</p>
  </>


  );
}



root.render(
  <>
    <Cohort55FS />
    <Cohort55FS />
    
  </>
);
