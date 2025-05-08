import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/details" element={<DetailsScreen />} />
      </Routes>
    </Router>
  );
}

function HomeScreen() {
  const navigate = useNavigate();

  return (
    <div>
      <header style={styles.appBar}>
        <button style={styles.iconButton} onClick={() => {}}>
          <span role="img" aria-label="notifications">🔔</span>
        </button>
        <h1 style={styles.title}>AVAILABLE REQUESTS</h1>
        <div style={styles.statusRow}>
          <span role="img" aria-label="battery">🔋</span>
          <span style={{ marginLeft: 5 }}>68%</span>
        </div>
      </header>
      <div style={styles.listContainer}>
        {[...Array(4)].map((_, index) => (
          <div key={index} style={{ marginBottom: 16 }} onClick={() => navigate('/details')}>
            <RequestCard user={`USER ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

function DetailsScreen() {
  const navigate = useNavigate();

  return (
    <div>
      <header style={styles.appBar}>
        <button onClick={() => navigate(-1)} style={styles.iconButton}>⬅️</button>
        <h1>Request Details</h1>
      </header>
      <main style={{ padding: 20 }}>
        <p style={{ fontSize: 18 }}>Details about the selected request.</p>
      </main>
    </div>
  );
}

function RequestCard({ user }) {
  return (
    <div style={styles.card}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <span role="img" aria-label="person">👤</span>
        <span style={{ marginLeft: 8 }}>{user}</span>
      </div>
      <div>RATINGS</div>
      <div>{[...Array(5)].map((_, i) => <span key={i}>☆</span>)}</div>
    </div>
  );
}

const styles = {
  appBar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: '10px 16px',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
  },
  iconButton: {
    background: 'none',
    border: 'none',
    fontSize: 18
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    margin: 0
  },
  statusRow: {
    display: 'flex',
    alignItems: 'center'
  },
  listContainer: {
    padding: 16
  },
  card: {
    padding: 12,
    backgroundColor: '#e0e0e0'
  }
};

export default App;
