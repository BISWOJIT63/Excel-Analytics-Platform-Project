import sampleExcel from "./pics/import-spreadsheets-islands.png";

export default function HomeGraphics() {
  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "2rem",
      padding: "2rem"
    }}>
      <img 
        src="/im" 
        alt="Excel Sheet" 
        style={{ width: "300px", border: "1px solid #ccc", borderRadius: "8px" }} 
      />
      <span style={{ fontSize: "3rem", color: "#3b82f6" }}>➡️</span>
      <img 
        src="/images/sample-charts.png" 
        alt="Charts Visualization" 
        style={{ width: "300px", border: "1px solid #ccc", borderRadius: "8px" }} 
      />
    </div>
  );
}
