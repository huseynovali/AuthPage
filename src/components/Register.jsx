import React, { useState } from "react";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    // Kayıt butonuna tıklandığında yapılacak işlemler
    console.log("Ad:", name);
    console.log("E-posta:", email);
    console.log("Şifre:", password);
    // Burada sunucuya veya başka bir işleme kayıt bilgilerini gönderebilirsiniz.
  };

  return (
    <div className="w-[50%] h-[500px] bg-blue-400 rounded-e-3xl p-8 absolute translate-x-full top-0">
      <h2 className="text-2xl font-bold mb-4">Kayıt Ol</h2>
      <form>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-600"
          >
            Ad:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 p-2 border rounded-md w-full"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-600"
          >
            E-posta:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
          onClick={handleRegister}
          className="bg-green-500 text-white p-2 rounded-md hover:bg-green-600 transition-colors duration-300"
        >
          Kayıt Ol
        </button>
      </form>
    </div>
  );
}

export default Register;
