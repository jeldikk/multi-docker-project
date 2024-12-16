import {render, screen} from "@testing-library/react";
import MainPageComponent from "../main-page.component";

test('should have header for index seen content', () => {
    render(<MainPageComponent />);

    const indexHeader = screen.getByRole('heading', {name: /index i have seen/i});
    expect(indexHeader).toBeInTheDocument();

    const calcHeader = screen.getByRole('heading', {name: /calculated values/i});
    expect(calcHeader).toBeInTheDocument();
});