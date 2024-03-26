import "./App.css";

function Child(props) {
  const text = "this is a child";
  return (
    <>
      <p>{text}</p>
      {props.handler()}
    </>
  );
}
function App() {
  const welcome = "hi";
  const myCss = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: "blue",
  };
  function handleFunc() {
    const text = "inside handle function";
    return <p>{text}</p>;
  }
  return (
    // <div
    //   style={{
    //     display: "flex",
    //     flexDirection: "column",
    //     alignItems: "center",
    //     color: "blue",
    //   }}
    // >
    <div style={myCss}>
      <h1 className="title">{welcome}</h1>
      <Child handler={handleFunc} />
    </div>
  );
}

export default App;
