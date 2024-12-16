import {render, screen} from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import OtherPage from "../other-page.component";

test('should have link to go back home screen', () => {
    render(<MemoryRouter><OtherPage /></MemoryRouter>);

    const element = screen.getByRole('link', {name: /go back home/i});
    expect(element).toBeInTheDocument();

})