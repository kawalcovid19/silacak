import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import Monitor from "~/pages/dashboard/tracing/[caseId]/[contactId]/monitor";

jest.mock("next/router", () => require("next-router-mock"));

describe("Monitor", () => {
  it("renders page title correctly", () => {
    render(<Monitor />);

    expect(screen.getByRole("heading", { name: /tambah pemantauan/i })).toBeVisible();
  });

  it("renders the `Kembali` button correctly", () => {
    render(<Monitor />);

    expect(screen.getByRole("link", { name: /kembali/i })).toHaveAttribute(
      "href",
      "/dashboard/tracing/undefined/undefined"
    );
  });

  it("renders `Informasi Utama` section corectly", () => {
    render(<Monitor />);
    expect(screen.getByText(/informasi utama/i));
  });

  it("render `Jenis Karantina` section corectly", () => {
    render(<Monitor />);
    expect(screen.getByText(/jenis karantina/i));
    expect(screen.getByRole("button", { name: /tidak karantina/i }));

    userEvent.click(screen.getByRole("button", { name: /tidak karantina/i }));
    expect(screen.getByRole("button", { name: /karantina mandiri di rumah/i }));

    userEvent.click(screen.getByRole("button", { name: /karantina mandiri di rumah/i }));
    expect(screen.getByRole("button", { name: /karantina mandiri di fasilitas khusus/i }));

    userEvent.click(screen.getByRole("button", { name: /karantina mandiri di fasilitas khusus/i }));
    expect(screen.getByText(/nama lokasi karantina/i));
  });

  it("render `Hasil Pemantauan` section corectly", () => {
    render(<Monitor />);
    expect(screen.getByRole("button", { name: /sehat/i }));

    userEvent.click(screen.getByRole("button", { name: /sehat/i }));
    expect(screen.getByRole("button", { name: /bergejala \(suspek\)/i }));

    userEvent.click(screen.getByRole("button", { name: /bergejala \(suspek\)/i }));
    expect(screen.getByRole("button", { name: /terdapat gejala lain/i }));

    userEvent.click(screen.getByRole("button", { name: /terdapat gejala lain/i }));
    expect(screen.getByText(/ageusia \(hilang indra perasa\/pengecap\)/i));
    expect(screen.getByRole("button", { name: /rujuk rs/i }));

    userEvent.click(screen.getByRole("button", { name: /rujuk rs/i }));
    expect(screen.getByRole("button", { name: /meninggal/i }));

    userEvent.click(screen.getByRole("button", { name: /meninggal/i }));
  });

  it("render `Simpan Data` button corectly", () => {
    render(<Monitor />);
    expect(screen.getByRole("button", { name: /simpan data/i }));
  });
});
