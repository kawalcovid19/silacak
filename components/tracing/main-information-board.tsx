import { ContentBoardListLabel } from "../ui/board/content-board-list-label";

export function MainInformationBoard() {
  return (
    <div className="p-4">
      <div className="flex pb-4">
        <div className="min-w-max font-bold pr-4">INFORMASI UTAMA</div>
        <hr className="w-full mt-2" />
      </div>
      <div className="grid lg:grid-cols-2 lg:gap-4">
        <div>
          <ContentBoardListLabel label="NIK">3403121902930001</ContentBoardListLabel>
          <ContentBoardListLabel label="Nama Pasien">Hairul Amar</ContentBoardListLabel>
          <ContentBoardListLabel label="Tgl Lahir">
            13 Juni 1995 (Usia 26 Thn 1 Bln)
          </ContentBoardListLabel>
          <ContentBoardListLabel label="Jenis Kelamin">Laki-Laki</ContentBoardListLabel>
        </div>
        <div>
          <ContentBoardListLabel label="Nomor Telp/HP">
            <div className="text-green-600">085847475454</div>
          </ContentBoardListLabel>
          <ContentBoardListLabel label="Alamat">Jl HR Rasuna Said Kav C17</ContentBoardListLabel>
          <ContentBoardListLabel label="Alamat Domisili">
            Jl HR Rasuna Said Kav C17
          </ContentBoardListLabel>
        </div>
      </div>
    </div>
  );
}
