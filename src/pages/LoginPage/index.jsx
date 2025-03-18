import { create } from "zustand";

const useLoginStore = create((set) => ({
  email: "",
  password: "",
  setEmail: (email) => set({ email }),
  setPassword: (password) => set({ password }),
}));

export default function LoginPage() {
  const { email, password, setEmail, setPassword } = useLoginStore();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logging in with: ", { email, password });
  };

  return (
    <div className="flex justify-center items-center w-full">
      <div className="w-96 shadow-lg p-6 rounded-xl bg-white">
        <h2 className="text-xl font-bold mb-4 text-center">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-1 p-2 border rounded-md"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-1 p-2 border rounded-md"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full p-2 bg-pink-500 text-white rounded-md"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
