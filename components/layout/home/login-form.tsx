import { useState, FormEvent } from "react";
import { FormLabel, InputText } from "~/components/ui/forms";

export interface LoginFormValues {
  username: string;
  password: string;
}

export interface LoginFormProps {
  initialProps?: LoginFormValues;
  onSubmit?: (values: LoginFormValues) => void;
}

export function LoginForm({ onSubmit }: LoginFormProps) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (onSubmit) {
      onSubmit({ username, password });
    }
  };

  return (
    <form action="#" className="space-y-4" method="POST" onSubmit={handleSubmit}>
      <div>
        <FormLabel className="block text-sm font-medium text-gray-700" htmlFor="username">
          Nama ID yang terdaftar / User Name
        </FormLabel>
        <div className="mt-1">
          <InputText
            autoComplete="off"
            id="username"
            name="username"
            onChange={e => setUsername(e.target.value)}
            required
            type="text"
            value={username}
          />
        </div>
      </div>

      <div>
        <FormLabel className="block text-sm font-medium text-gray-700" htmlFor="password">
          Kata Sandi / Password
        </FormLabel>
        <div className="mt-1">
          <InputText
            autoComplete="current-password"
            id="password"
            name="password"
            onChange={e => setPassword(e.target.value)}
            required
            type="password"
            value={password}
          />
        </div>
      </div>

      <div>
        <button
          className="flex items-center justify-center w-full px-4 py-2 border border-transparent text-center text-base font-medium rounded-md shadow-sm text-white bg-silacak-600 hover:bg-silacak-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-silacak-500"
          type="submit"
        >
          Masuk
        </button>
      </div>
    </form>
  );
}
