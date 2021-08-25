import { render, screen } from "@testing-library/react";
import { CheckAccountBanner } from "~/components/check-account/check-account-banner";

jest.mock("next/router", () => require("next-router-mock"));

describe("CheckAccount", () => {
  it("renders accepted", () => {
    render(<CheckAccountBanner type="accepted" />);

    const text1 = screen.getByText(/Pendaftaran diterima/i);
    expect(text1).toBeVisible();

    const text2 = screen.getByText(
      /akun sedang dalam proses validasi. Mohon menunggu maksimal 2x24 jam sejak pendaftaran/i
    );
    expect(text2).toBeVisible();
  });

  it("renders active", () => {
    render(<CheckAccountBanner type="active" />);

    const text1 = screen.getByText(/Akun sudah aktif!/i);
    expect(text1).toBeVisible();

    const text2 = screen.getByText(/Silahkan login/i);
    expect(text2).toBeVisible();

    const selectButton = screen.getByRole("link", { name: /disini/i });
    expect(selectButton).toBeVisible();
  });

  it("renders notFound", () => {
    render(<CheckAccountBanner type="notFound" />);

    const text1 = screen.getByText(/Tidak ditemukan!/i);
    expect(text1).toBeVisible();

    const text2 = screen.getByText(/Nama ID belum terdaftar, harap daftar sekarang/i);
    expect(text2).toBeVisible();

    const selectButton = screen.getByRole("link", { name: /disini/i });
    expect(selectButton).toBeVisible();
  });
});
