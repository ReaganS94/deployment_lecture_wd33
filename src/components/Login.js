import { useState } from "react";

export default function Login({ user }) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  // THEORETICAL SCENARIO, SEE JWT FRONTEND LECTURE
  const handleSubmit = async (e) => {
    const res = await fetch("my api", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
      body: { email, password },
    });

    const data = await res.json();
  };

  const id = 1;

  return (
    <>
      <h3>Login</h3>
      <form onSubmit={handleSubmit}>
        <label>email</label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          value={email}
        />

        <label>password</label>
        <input type="password" />

        {/* <button>Click meee</button> */}
        <input type="submit" />
      </form>
    </>
  );
}
