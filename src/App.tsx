import { useState } from "react";
import reactLogo from "./assets/react.svg";
import ListGroup from "./components/ListGroup";
import Button from "./components/Button";
import Alert from "./components/Alert";

function App() {
  const items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  const handleSelectItem = (selectItem: string) => console.log(selectItem);

  const [style, setStyle] = useState("primary");
  const handleStyle = () =>
    setStyle(style === "primary" ? "success" : "primary");

  return (
    <>
      <Alert>
        <strong>Holy guacamole!</strong> You should check in on some of those
        fields below.
      </Alert>
      <Button style={style} handleStyle={handleStyle}></Button>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
    </>
  );
}

export default App;
