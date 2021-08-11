import { render } from "@testing-library/react";
import { InputText } from "../input-text";

describe("InputText", () => {
  it("renders correctly", () => {
    const { container } = render(<InputText />);

    expect(container.firstChild).toMatchInlineSnapshot(`
      <input
        class="shadow-sm rounded-md focus:ring-silacak-500 focus:border-silacak-500 block w-full text-sm border-gray-300"
        type="text"
      />
    `);
  });
});
