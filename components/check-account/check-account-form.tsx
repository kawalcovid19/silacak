import { SubmitHandler, useForm } from "react-hook-form";

// import { CheckAccountBanner } from "./check-account-banner";
import { FormLabel, InputText } from "~/components/ui/forms";

export interface CheckAccountValues {
  userId: string;
}

export interface LoginFormProps {
  onSubmit: SubmitHandler<CheckAccountValues>;
}

export function CheckAccountForm({ onSubmit }: LoginFormProps) {
  const { handleSubmit, register } = useForm();

  return (
    <>
      <form action="#" className="space-y-4" method="POST" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <FormLabel className="block text-sm font-medium text-gray-700" htmlFor="username">
            Nama ID yang didaftarkan
          </FormLabel>
          <div className="mt-1">
            <InputText
              autoComplete="off"
              id="username"
              placeholder="Masukkan nama ID anda"
              required
              type="text"
              {...register("username")}
            />
          </div>
        </div>
        <div className="space-y-4">
          <div className="flex">
            <p className="text-sm text-black-100 break-word sm:text-left text-center">
              Tekan tombol <span className="font-bold">Cek Status Pendaftaran</span> untuk
              pengecekan
            </p>
          </div>
          <button
            className="flex items-center justify-center w-full
          px-4 py-2 border border-transparent
          text-center text-base rounded-md shadow-sm
          text-white bg-silacak-600 hover:bg-silacak-700
          focus:outline-none focus:ring-2 focus:ring-offset-2
          focus:ring-silacak-500"
            type="submit"
          >
            Cek Status Pendaftaran
          </button>
        </div>
      </form>
      {/* commented for now
      this component to show current account status
      <CheckAccountBanner type="accepted" />
      */}
    </>
  );
}
