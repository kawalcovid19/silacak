import { SectionCard, SectionCardHeader } from "../ui/card";

export function CloseContactDetailCard() {
  return (
    <SectionCard>
      <div className="lg:flex flex-col">
        <SectionCardHeader className="py-2" title="informasi utama" />
        <div className="flex-auto">
          <dl>
            <div className="sm:grid sm:grid-cols-2 sm:gap-4">
              <div>
                <div className="py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                  <div className="text-sm font-medium text-gray-500">NIK</div>
                  <div className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    3403121902930001
                  </div>
                </div>
                <div className="py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                  <div className="text-sm font-medium text-gray-500">Nama Pasien</div>
                  <div className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    Chairul Amar
                  </div>
                </div>
                <div className="py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                  <div className="text-sm font-medium text-gray-500">Tanggal Lahir</div>
                  <div className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    13 Juni 1995 (Usia 26 Thn 1 Bln)
                  </div>
                </div>
                <div className="py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                  <div className="text-sm font-medium text-gray-500">Jenis Kelamin</div>
                  <div className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">Laki-laki</div>
                </div>
              </div>
              <div>
                <div className="py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                  <div className="text-sm font-medium text-gray-500">No. Telp/HP</div>
                  <div className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    085847475454
                  </div>
                </div>
                <div className="py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                  <div className="text-sm font-medium text-gray-500">Alamat</div>
                  <div className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    Jl HR Rasuna Said Kav C17
                  </div>
                </div>
                <div className="py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                  <div className="text-sm font-medium text-gray-500">Alamat Domisili</div>
                  <div className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    Jl HR Rasuna Said Kav C17
                  </div>
                </div>
              </div>
            </div>
            <div className="py-5 ">
              <div className="text-sm font-medium text-gray-500">Status</div>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <p className="text-sm text-gray-900">
                  Kontak Erat bersedia dihubungi dan dijadwalkan Entri dan Exit test
                </p>
                <div className="mt-2 border border-gray-200 rounded-md">
                  <div className="sm:grid sm:grid-cols-8 sm:gap-4 pl-3 pr-4 py-3">
                    <div className="text-sm text-gray-500">Entri Test</div>
                    <div className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      14-08-2021
                    </div>
                  </div>
                  <div className="sm:grid sm:grid-cols-8 sm:gap-4 pl-3 pr-4 py-3">
                    <div className="text-sm text-gray-500">Exit Test</div>
                    <div className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      14-08-2021
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="py-5 ">
              <div className="text-sm font-medium text-gray-500">Status</div>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <p className="text-sm text-gray-900">
                  Kontak Erat tidak bisa dihubungi atau ditindaklanjuti
                </p>
                <div className="py-2">
                  <p className="mb-2 text-sm text-gray-500">Alasan</p>
                  <ul className="border border-gray-200 rounded-md divide-y divide-gray-200">
                    <li className="pl-3 pr-4 py-3 text-sm">Kontak erat dirawat di Rumah Sakit</li>
                    <li className="pl-3 pr-4 py-3 text-sm">
                      Kontak erat tinggal di luar kota (di luar wilayah kerja tracer)
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </dl>
        </div>
      </div>
    </SectionCard>
  );
}
