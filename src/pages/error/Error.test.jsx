
import {render, screen} from '@testing-library/react';
import Error from "./ErrorPage.jsx";

it("Should hava a message error", ()=>{
    render(<Error />)

    const message = screen.queryByText(/Error404/i);
    expect(message).toBeDefined();

})