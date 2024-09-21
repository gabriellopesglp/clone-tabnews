function Home() {
  const styles = {
    body: {
      height: "100vh",
      margin: 0,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#f0f0f0",
      fontFamily: "Arial, sans-serif",
    },
    container: {
      textAlign: "center",
    },
    heading: {
      fontSize: "3rem",
      color: "#333",
    },
  };

  return (
    <div style={styles.body}>
      <div style={styles.container}>
        <h1 style={styles.heading}>Site em construção</h1>
      </div>
    </div>
  );
}

export default Home;
