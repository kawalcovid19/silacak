import Head from "next/head";
import { InformationCircleIcon } from "@heroicons/react/outline";
import { LayoutRoot } from "~/components/layout/home";
import { ContentBoard } from "~/components/ui/board/content-board/content-board";
import { FormTitle } from "~/components/ui/form/form-title/form-title";
import { FormSubtitle } from "~/components/ui/form/form-subtitle/form-subtitle";
import { InputSelect } from "~/components/ui/form/input-select";
import { InputText } from "~/components/ui/form/input-text";
import { PrimaryButton as Button } from "~/components/ui/button/primary-button";
import { RegistrationInfoMessage } from "~/components/registration/registration-info-message";
import { FormGroup } from "~/components/ui/form/form-group";
import { InputCheckboxCustom } from "~/components/ui/form/input-checkbox-custom";

export default function Home() {
  return (
    <LayoutRoot>
      <Head>
        <title>Silacak 3.0 - Registration</title>
        <meta
          content="Sistem Informasi Pelacakan (Silacak) COVID-19 - Pendaftaran Tracer"
          name="description"
        />
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <ContentBoard className="p-8 my-4 w-">
        <FormTitle>Pendaftaran Tracer</FormTitle>
        <FormSubtitle>Isi dengan lengkap dan ingat Nama ID dan Kata Sandi Anda</FormSubtitle>
        <div className="mb-6">
          <span>Nama Lengkap</span>
          <InputText />
        </div>
        <div className="mb-6">
          Nomor Whatsapp yang aktif
          <FormGroup>
            <span className="bg-gray-200 px-4 py-2 rounded-l-md border-2 border-gray-00">+62</span>
            <InputText
              className=" focus:ring-indigo-500 rounded-l-none focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
              placeholder="0.00"
              type="text"
            />
          </FormGroup>
        </div>
        <div className="mb-6">
          Provinsi
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
          Kabupaten
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
          Kecamatan
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
          PKM
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
          Instansi Asal
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
          <InputText placeholder="Masukkan Kata Sandi" type="password" />
          <div className="mt-2">
            <span className="text-gray-500 ">* Tidak Boleh ada spasi minimal 5 karakter</span>
          </div>
        </div>
        <div className="mb-7">
          <div className="mb-4">
            Tekan tombol <b>Daftar</b> untuk melanjutkan proses pendaftaran.
          </div>
          <Button block={true} className="w-full">
            Daftar
          </Button>
        </div>
        <RegistrationInfoMessage />
      </ContentBoard>
    </LayoutRoot>
  );
}
