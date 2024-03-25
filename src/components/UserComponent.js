import React, { useState, useEffect } from "react";

const UserComponent = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users/1"
        );
        const userData = await response.json();
        setUser(userData);
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        user && (
          <div>
            <h1>{user.name}</h1>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
          </div>
        )
      )}
    </div>
  );
};

export default UserComponent;
