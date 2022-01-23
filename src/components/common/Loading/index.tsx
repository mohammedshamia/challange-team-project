import CircularProgress from "@mui/material/CircularProgress";

const Loading = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "15vh",
        justifyContent: "center",
        display: "flex",
        alignItems: "center",
      }}
    >
      <CircularProgress size={50} />
    </div>
  );
};

export default Loading;
