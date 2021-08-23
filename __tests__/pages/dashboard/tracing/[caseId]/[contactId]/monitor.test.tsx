import { fireEvent, render, screen } from "@testing-library/react";
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
    fireEvent(
      screen.getByRole("button", { name: /tidak karantina/i }),
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );
    expect(screen.getByRole("button", { name: /karantina mandiri di rumah/i }));
    fireEvent(
      screen.getByRole("button", { name: /karantina mandiri di rumah/i }),
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );
    expect(screen.getByRole("button", { name: /karantina mandiri di fasilitas khusus/i }));
    fireEvent(
      screen.getByRole("button", { name: /karantina mandiri di fasilitas khusus/i }),
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );
    expect(screen.getByText(/nama lokasi karantina/i));
  });

  it("render `Hasil Pemantauan` section corectly", () => {
    render(<Monitor />);
    expect(screen.getByRole("button", { name: /sehat/i }));
    fireEvent(
      screen.getByRole("button", { name: /sehat/i }),
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );
    expect(screen.getByRole("button", { name: /bergejala \(suspek\)/i }));
    fireEvent(
      screen.getByRole("button", { name: /bergejala \(suspek\)/i }),
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );
    expect(screen.getByRole("button", { name: /terdapat gejala lain/i }));
    fireEvent(
      screen.getByRole("button", { name: /terdapat gejala lain/i }),
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );
    expect(screen.getByText(/ageusia \(hilang indra perasa\/pengecap\)/i));
    expect(screen.getByRole("button", { name: /rujuk rs/i }));
    fireEvent(
      screen.getByRole("button", { name: /rujuk rs/i }),
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );
    expect(screen.getByRole("button", { name: /meninggal/i }));
    fireEvent(
      screen.getByRole("button", { name: /meninggal/i }),
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );
  });

  it("render `Simpan Data` button corectly", () => {
    render(<Monitor />);
    expect(screen.getByRole("button", { name: /simpan data/i }));
  });
});
