import { useSelector } from "react-redux";

const Fileb = () => {
  const data = useSelector((state) => state.data);

  return (
    <>
      <div style={{ textAlign: "center" }}>{data && <p>{data}</p>}</div>
    </>
  );
};
export default Fileb;
