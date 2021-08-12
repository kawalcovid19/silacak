import React from "react";
import { InformationCircleIcon, EyeIcon } from "@heroicons/react/outline";

import { InputSelect } from "~/components/ui/forms/input-select";
import { InputText } from "~/components/ui/forms/input-text";
import { PrimaryButton as Button } from "~/components/ui/button/primary-button";
import { FormGroup } from "~/components/ui/forms/form-group";
import { InputCheckboxCustom } from "~/components/ui/forms/input-checkbox-custom";

export function RegistrationForm() {
  return (
    <div>
      <div className="mb-6">
        <div className="mb-3">
          <span>Nama Lengkap</span>
        </div>
        <InputText />
      </div>
      <div className="mb-6">
        <div className="mb-3">
          <span>Nomor Whatsapp yang aktif</span>
        </div>
        <FormGroup>
          <span className="inline-flex items-center px-3 first:rounded-l-md last:rounded-r-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
            +62
          </span>
          <InputText
            className="block w-full sm:text-sm"
            isGroupItem
            placeholder="838xxxxxxx"
            type="text"
          />
        </FormGroup>
      </div>
      <div className="mb-6">
        <div className="mb-3">
          <span>Provinsi</span>
        </div>

        <InputSelect title="Urut berdasarkan">
          <option disabled hidden selected value="">
            -Masukkan Provinsi-
          </option>
          <option>A</option>
          <option>B</option>
          <option>C</option>
        </InputSelect>
      </div>
      <div className="mb-6">
        <div className="mb-3">
          <span>Kabupaten</span>
        </div>

        <InputSelect title="Urut berdasarkan">
          <option disabled hidden selected value="">
            -Masukkan Kabupaten-
          </option>
          <option>A</option>
          <option>B</option>
          <option>C</option>
        </InputSelect>
      </div>
      <div className="mb-6">
        <div className="mb-3">
          <span>Kecamatan</span>
        </div>
        <InputSelect title="Urut berdasarkan">
          <option disabled hidden selected value="">
            -Masukkan Kecamatan-
          </option>
          <option>A</option>
          <option>B</option>
          <option>C</option>
        </InputSelect>
      </div>
      <div className="mb-6">
        <div className="mb-3">
          <span>PKM</span>
        </div>
        <InputSelect title="Urut berdasarkan">
          <option disabled hidden selected value="">
            -Masukkan PKM-
          </option>
          <option>A</option>
          <option>B</option>
          <option>C</option>
        </InputSelect>
      </div>
      <div className="mb-6">
        <div className="mb-3">
          <span> Instansi Asal</span>
        </div>
        <div>
          <InputCheckboxCustom className="mr-4 w-3/12" name="instance">
            TNI
          </InputCheckboxCustom>
          <InputCheckboxCustom className="mr-4 w-3/12" name="instance">
            Polri
          </InputCheckboxCustom>
          <InputCheckboxCustom className="w-3/12" name="instance">
            Puskesmas
          </InputCheckboxCustom>
        </div>
      </div>
      <div className="mb-6">
        <div className="mb-2">
          <span>Nama ID / Username</span>
        </div>
        <div className="text-red-500 italic text-sm mb-2">
          <div className="flex">
            <div className="mr-1">
              <InformationCircleIcon className="w-5 h-5" />
            </div>
            <div>
              <b>Nama ID</b> ini akan digunakan untuk login. Harap di ingat!
            </div>
          </div>
        </div>
        <InputText placeholder="Masukkan Nama ID" />
        <div className="mt-2">
          <span className="text-gray-500 ">* Tidak Boleh ada spasi minimal 5 karakter</span>
        </div>
      </div>
      <div className="mb-6">
        <div className="mb-2">
          <span>Kata Sandi / Password</span>
        </div>
        <div className="text-red-500 italic text-sm mb-2">
          <div className="flex">
            <div className="mr-1">
              <InformationCircleIcon className="w-5 h-5" />
            </div>
            <div>
              <b>Kata Sandi </b> ini akan digunakan untuk login. Harap di ingat!
            </div>
          </div>
        </div>
        <div className="mt-1 relative rounded-md shadow-sm">
          <InputText placeholder="Masukkan Kata Sandi" type="password" />

          <div className="absolute inset-y-0 right-0 pr-4 flex items-center">
            <EyeIcon className="w-5 h-5 text-silacak-500" />
          </div>
        </div>
        <div className="mt-2">
          <span className="text-gray-500 ">* Tidak Boleh ada spasi minimal 5 karakter</span>
        </div>
      </div>
      <div className="mb-7">
        <div className="mb-3">
          Tekan tombol <b>Daftar</b> untuk melanjutkan proses pendaftaran.
        </div>
        <Button block={true} className="w-full uppercase">
          Daftar
        </Button>
      </div>
    </div>
  );
}
