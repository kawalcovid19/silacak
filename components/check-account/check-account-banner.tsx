type Banner = "accepted" | "notFound" | "active";

type Props = {
  type: Banner;
};

export function CheckAccountBanner({ type }: Props) {
  switch (type) {
    case "accepted":
      return (
        <div
          className="border-l-4  p-4"
          style={{ backgroundColor: "#FEF5ED", borderColor: "#F2994A" }}
        >
          <div className="flex">
            <div>
              <p className="text-sm">
                <span className="font-bold">Pendaftaran diterima,</span> akun sedang dalam proses
                validasi. Mohon menunggu maksimal 2x24 jam sejak pendaftaran
              </p>
            </div>
          </div>
        </div>
      );
    case "active":
      return (
        <div className="bg-silacak-50 border-l-4 border-silacak-400 p-4">
          <div className="flex">
            <div>
              <p className="text-sm">
                <span className="font-bold">Akun sudah aktif!</span> Silahkan login{" "}
                <a className="text-green-700 font-bold underline" href="#">
                  disini
                </a>
              </p>
            </div>
          </div>
        </div>
      );
    case "notFound":
      return (
        <div
          className="border-l-4  p-4"
          style={{ backgroundColor: "#FDEBEB", borderColor: "#E83434" }}
        >
          <div className="flex">
            <div>
              <p className="text-sm">
                <span className="font-bold">Tidak ditemukan! </span> Nama ID belum terdaftar, harap
                daftar sekarang{" "}
                <a className="text-red-700 font-bold underline" href="#">
                  disini
                </a>
              </p>
            </div>
          </div>
        </div>
      );
    default:
      return null;
  }
}
