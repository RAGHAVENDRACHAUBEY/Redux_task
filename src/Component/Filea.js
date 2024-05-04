import { Button } from "react-bootstrap";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addData } from "./action";

const Filea = () => {
  const dispatch = useDispatch();
  const [inputdata, setinputdata] = useState("");

  const handleInput = (e) => {
    // const inputData = e.target.value;
    dispatch(addData(inputdata));
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "20px",
          gap: "20px",
        }}
      >
        <input
          type="text"
          value={inputdata}
          onChange={(e) => setinputdata(e.target.value)}
          style={{ border: "1px solid black", padding: "5px" }}
        />
        <Button onClick={handleInput}>Submit</Button>
      </div>
    </>
  );
};

export default Filea;
