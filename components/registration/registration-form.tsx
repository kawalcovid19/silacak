import React from "react";
import { InformationCircleIcon, EyeIcon } from "@heroicons/react/outline";

import {
  FormGroup,
  FormLabel,
  InputCheckboxCustom,
  InputText,
  InputSelect,
  InputHelpText,
} from "~/components/ui/forms";
import { PrimaryButton as Button } from "~/components/ui/button";

export function RegistrationForm() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <FormLabel>Nama Lengkap</FormLabel>
        <InputText />
      </div>
      <div className="space-y-2">
        <FormLabel>Nomor Whatsapp yang aktif</FormLabel>
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
      <div className="space-y-2">
        <FormLabel>Provinsi</FormLabel>
        <InputSelect defaultValue="" title="Urut berdasarkan">
          <option disabled hidden value="">
            -Masukkan Provinsi-
          </option>
          <option>A</option>
          <option>B</option>
          <option>C</option>
        </InputSelect>
      </div>
      <div className="space-y-2">
        <FormLabel>Kabupaten</FormLabel>
        <InputSelect defaultValue="" title="Urut berdasarkan">
          <option disabled hidden value="">
            -Masukkan Kabupaten-
          </option>
          <option>A</option>
          <option>B</option>
          <option>C</option>
        </InputSelect>
      </div>
      <div className="space-y-2">
        <FormLabel>Kecamatan</FormLabel>
        <InputSelect defaultValue="" title="Urut berdasarkan">
          <option disabled hidden value="">
            -Masukkan Kecamatan-
          </option>
          <option>A</option>
          <option>B</option>
          <option>C</option>
        </InputSelect>
      </div>
      <div className="space-y-2">
        <FormLabel>PKM</FormLabel>
        <InputSelect defaultValue="" title="Urut berdasarkan">
          <option disabled hidden value="">
            -Masukkan PKM-
          </option>
          <option>A</option>
          <option>B</option>
          <option>C</option>
        </InputSelect>
      </div>
      <div className="space-y-2">
        <FormLabel>Instansi Asal</FormLabel>
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
      <div className="space-y-2">
        <FormLabel>Nama ID / Username</FormLabel>
        <div className="text-red-500 text-sm">
          <div className="flex">
            <div className="mr-1">
              <InformationCircleIcon className="w-5 h-5" />
            </div>
            <span>
              <strong>Nama ID</strong> ini akan digunakan untuk login. Harap diingat!
            </span>
          </div>
        </div>
        <InputText aria-describedby="username-description" placeholder="Masukkan Nama ID" />
        <InputHelpText id="username-description">
          Tidak boleh ada spasi, maksimal 5 karakter.
        </InputHelpText>
      </div>
      <div className="space-y-2">
        <FormLabel>Kata Sandi / Password</FormLabel>
        <div className="text-red-500  text-sm">
          <div className="flex">
            <div className="mr-1">
              <InformationCircleIcon className="w-5 h-5" />
            </div>
            <span>
              <strong>Kata Sandi</strong> ini akan digunakan untuk login. Harap diingat!
            </span>
          </div>
        </div>
        <div className="relative rounded-md shadow-sm">
          <InputText
            aria-describedby="password-description"
            hasTrailingIcon
            placeholder="Masukkan Kata Sandi"
            type="password"
          />
          <div className="absolute inset-y-0 right-0 flex items-center">
            <button
              className="focus:ring-silacak-500 focus:border-silacak-500 h-full py-0 pl-2 pr-3 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md"
              type="button"
            >
              <span className="sr-only">Tunjukkan / Sembunyikan Sandi</span>
              <EyeIcon aria-hidden className="w-5 h-5 text-silacak-500" />
            </button>
          </div>
        </div>
        <InputHelpText id="password-description">
          Tidak boleh ada spasi, maksimal 5 karakter.
        </InputHelpText>
      </div>
      <div className="space-y-4">
        <p>
          Tekan tombol <strong>Daftar</strong> untuk melanjutkan proses pendaftaran.
        </p>
        <Button block className="w-full uppercase">
          Daftar
        </Button>
      </div>
    </div>
  );
}
