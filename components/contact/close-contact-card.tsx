export function CloseContactCard() {
  return (
    <div className="overflow-hidden rounded-md shadow bg-white">
      <div className="lg:flex flex-col px-4 py-4 sm:px-6">
        <div className="flex flex-1 items-center py-2">
          <h1 className="flex-none text-base uppercase font-bold text-gray-700 pr-4">
            informasi utama
          </h1>
          <hr className="flex-grow border border-gray-300" />
        </div>
        <div className="flex-auto">
          <dl>
            <div className="sm:grid sm:grid-cols-2 sm:gap-4">
              <div>
                <div className="py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt className="text-sm font-medium text-gray-500">NIK</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    3403121902930001
                  </dd>
                </div>
                <div className="py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt className="text-sm font-medium text-gray-500">Nama Pasien</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">Chairul Amar</dd>
                </div>
                <div className="py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt className="text-sm font-medium text-gray-500">Tanggal Lahir</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    13 Juni 1995 (Usia 26 Thn 1 Bln)
                  </dd>
                </div>
                <div className="py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt className="text-sm font-medium text-gray-500">Jenis Kelamin</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">Laki-laki</dd>
                </div>
              </div>
              <div>
                <div className="py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt className="text-sm font-medium text-gray-500">No. Telp/HP</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">085847475454</dd>
                </div>
                <div className="py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt className="text-sm font-medium text-gray-500">Alamat</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    Jl HR Rasuna Said Kav C17
                  </dd>
                </div>
                <div className="py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt className="text-sm font-medium text-gray-500">Alamat Domisili</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    Jl HR Rasuna Said Kav C17
                  </dd>
                </div>
              </div>
            </div>
            <div className="py-5 ">
              <dt className="text-sm font-medium text-gray-500">Status</dt>
              <dd className="mt-1 sm:mt-0 sm:col-span-2">
                <p className="text-sm text-gray-900">
                  Kontak Erat bersedia dihubungi dan dijadwalkan Entri dan Exit test
                </p>
                <div className="mt-2 border border-gray-200 rounded-md">
                  <div className="sm:grid sm:grid-cols-8 sm:gap-4 pl-3 pr-4 py-3">
                    <dt className="text-sm text-gray-500">Entri Test</dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">14-08-2021</dd>
                  </div>
                  <div className="sm:grid sm:grid-cols-8 sm:gap-4 pl-3 pr-4 py-3">
                    <dt className="text-sm text-gray-500">Exit Test</dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">14-08-2021</dd>
                  </div>
                </div>
              </dd>
            </div>
            <div className="py-5 ">
              <dt className="text-sm font-medium text-gray-500">Status</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
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
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
