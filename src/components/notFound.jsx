export default function NotFound() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "80vh",
        backgroundColor: "#f8f9fa",
        color: "#343a40",
        textAlign: "center",
        padding: "5px",
      }}
    >
      <h1 style={{ fontSize: "3rem", marginBottom: "10px" }}>404</h1>
      <h2 style={{ fontSize: "2rem", marginBottom: "5px" }}>Page Not Found</h2>
      <p style={{ fontSize: "1rem" }}>
        Sorry, the page you are looking for does not exist.
      </p>
    </div>
  );
}
