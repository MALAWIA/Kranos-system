import { useState, useEffect } from "react";

export default function Admin() {
  const [submissions, setSubmissions] = useState([]);
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (isAuthenticated) {
      const stored = JSON.parse(localStorage.getItem('formSubmissions') || '[]');
      setSubmissions(stored.reverse()); // Show newest first
    }
  }, [isAuthenticated]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === "admin123") { // Change this password!
      setIsAuthenticated(true);
    } else {
      alert("Incorrect password");
    }
  };

  const exportData = () => {
    const dataStr = JSON.stringify(submissions, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    
    const exportFileDefaultName = `form-submissions-${new Date().toISOString().split('T')[0]}.json`;
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  };

  const clearData = () => {
    if (confirm("Are you sure you want to clear all submissions?")) {
      localStorage.removeItem('formSubmissions');
      setSubmissions([]);
    }
  };

  if (!isAuthenticated) {
    return (
      <div style={{ maxWidth: '400px', margin: '50px auto', padding: '20px' }}>
        <h1>Admin Login</h1>
        <form onSubmit={handleLogin}>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
          />
          <button type="submit" style={{ width: '100%', padding: '10px' }}>
            Login
          </button>
        </form>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '1200px', margin: '20px auto', padding: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h1>Form Submissions ({submissions.length})</h1>
        <div>
          <button onClick={exportData} style={{ marginRight: '10px', padding: '10px' }}>
            Export JSON
          </button>
          <button onClick={clearData} style={{ padding: '10px', backgroundColor: '#ff4444', color: 'white' }}>
            Clear All
          </button>
        </div>
      </div>
      
      {submissions.length === 0 ? (
        <p>No submissions yet</p>
      ) : (
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ backgroundColor: '#f5f5f5' }}>
                <th style={{ padding: '10px', border: '1px solid #ddd' }}>Date</th>
                <th style={{ padding: '10px', border: '1px solid #ddd' }}>Name</th>
                <th style={{ padding: '10px', border: '1px solid #ddd' }}>Email</th>
                <th style={{ padding: '10px', border: '1px solid #ddd' }}>Company</th>
                <th style={{ padding: '10px', border: '1px solid #ddd' }}>Industry</th>
                <th style={{ padding: '10px', border: '1px solid #ddd' }}>Problem</th>
              </tr>
            </thead>
            <tbody>
              {submissions.map((sub) => (
                <tr key={sub.id}>
                  <td style={{ padding: '10px', border: '1px solid #ddd' }}>
                    {new Date(sub.timestamp).toLocaleDateString()}
                  </td>
                  <td style={{ padding: '10px', border: '1px solid #ddd' }}>{sub.name}</td>
                  <td style={{ padding: '10px', border: '1px solid #ddd' }}>{sub.email}</td>
                  <td style={{ padding: '10px', border: '1px solid #ddd' }}>{sub.company}</td>
                  <td style={{ padding: '10px', border: '1px solid #ddd' }}>{sub.industry}</td>
                  <td style={{ padding: '10px', border: '1px solid #ddd', maxWidth: '300px' }}>
                    {sub.problem_description}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
