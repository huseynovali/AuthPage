import React, { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Giriş butonuna tıklandığında yapılacak işlemler
    console.log("Kullanıcı Adı:", username);
    console.log("Şifre:", password);
    // Burada sunucuya veya başka bir işleme giriş bilgilerini gönderebilirsiniz.
  };

  return (
    <div className="w-[50%] h-[500px] bg-slate-400 rounded-s-3xl p-8">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form>
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-600"
          >
            Kullanıcı Adı:
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="mt-1 p-2 border rounded-md w-full"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-600"
          >
            Şifre:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 p-2 border rounded-md w-full"
          />
        </div>
        <button
          type="button"
          onClick={handleLogin}
          className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition-colors duration-300"
        >
          Giriş Yap
        </button>
      </form>
    </div>
  );
}

export default Login;
