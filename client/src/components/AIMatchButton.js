import React, { useState } from "react";
import axios from "axios";

const AIMatchButton = () => {
  const [matchedUsers, setMatchedUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleMatchClick = async () => {
    setLoading(true);

    try {
      const response = await axios.post("http://localhost:5000/api/ai/match-by-project", {
        projectArea: "Web Development"  // You can make this dynamic later!
      });

      setMatchedUsers(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching matched users:", error);
      setLoading(false);
    }
  };

  return (
    <div>
      <button onClick={handleMatchClick} style={styles.button}>
        Find Matching Users
      </button>

      {loading && <p>Loading matches...</p>}

      {matchedUsers.length > 0 && (
        <div style={styles.matchList}>
          <h3>Matched Users:</h3>
          <ul>
            {matchedUsers.map((user) => (
              <li key={user._id}>
                {user.username} - {user.email}
              </li>
            ))}
          </ul>
        </div>
      )}

      {matchedUsers.length === 0 && !loading && <p>No matches yet. Try clicking!</p>}
    </div>
  );
};

const styles = {
  button: {
    padding: "10px 20px",
    margin: "10px 0",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "16px"
  },
  matchList: {
    marginTop: "20px",
    textAlign: "left"
  }
};

export default AIMatchButton;
