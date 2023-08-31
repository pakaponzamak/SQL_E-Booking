import { useState} from "react";
import StartFireBase from "../../firebase/firebase_conf";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/router";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const router = useRouter();
  //StartFireBase();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await fetch(
        `/api/admin_login/login_api?username=${username}&password=${password}`,
        {
          method: "GET",
        }
      );
      if (response.ok) {
        const data = await response.json();
        router.push(`../admin_health/hc_admin_insert`);
      } else {
        console.error("Error:", response.status, response.statusText);
        //setMessage("Error occurred while fetching data.");
      }
    } catch (error) {
      console.error("Error:", error);
      //setMessage("Error occurred while fetching data.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
  <form className="bg-slate-100 shadow-md rounded px-24 pt-14 pb-10 mb-4" onSubmit={handleLogin}>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
        username
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-6 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text"
        id="username"
        placeholder="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
        Password
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-6 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="password"
        id="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
    </div>
    {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
    <div className="flex items-center justify-between">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="submit"
      >
        Log in
      </button>
    </div>
  </form>
</div>

  );
};

export default LoginPage;
