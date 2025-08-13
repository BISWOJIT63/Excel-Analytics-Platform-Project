const styles = {
  footer: {
    backgroundColor: "#111827",
    color: "#f9fafb",
    textAlign: "center",
    padding: "1rem",
    height: "80px",
    bottom: 0,
    width: "100%",
  },
};
export default function Footer() {
  return (
    <div className="footer" style={styles.footer}>
      <p>&copy; 2025 Excelor. All rights reserved.</p>
    </div>
  );
}