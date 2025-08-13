const styles = {
  navbar: {
    height: "90px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem",
    backgroundColor: "#1E3A8A",
    color: "#fff",
  }
  };
  let logoStyles =  {
    
    fontSize: "1.5rem",
    fontWeight: "bold",
  };
  let linksStyles = {
    login:{
      backgroundColor: "#19ce0cff",
      color: "#1E293B",
      marginRight: "1rem",
      textDecoration: "none",
      padding: "0.5rem 1rem",
      borderRadius: "4px",
      transition: "background-color 0.3s",
    },
    register: {
      backgroundColor: "#3b82f6",
      color: "#FFFFFF",
      textDecoration: "none",
      padding: "0.5rem 1rem",
      borderRadius: "4px",
      transition: "background-color 0.3s",
    }
  };



export default function Navbar() {
  return (
    <div className="navbar" style={styles.navbar}>
      <span className="logo" style={logoStyles}>Excelor</span>
      <div className="links">
        <a href="#" className="login" style={linksStyles.login}>Login</a>
        <a href="#" className="register" style={linksStyles.register}>Register</a>
      </div>
    </div>
  );
}