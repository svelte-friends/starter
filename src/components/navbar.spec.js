

// libs
import { render, fireEvent } from '@testing-library/svelte'
// Component
import Navbar from './navbar.svelte';



describe("Navbar Test Suite", () => {

    it("The Navbar Component should render items passed as props", async (done) => {

        //right items 
        const rightItems = [
            {
                path: "/about",
                text: "About"
            }
        ];

        const { getByText } = await render(Navbar, {
            props: { rightItems }
        });

        const anchor = await getByText("About");
        // This element Should exist 
        expect(anchor).toBeDefined();
        // The href should be exaclty the same we pass through hrefProp
        expect(anchor.getAttribute("href")).toBe(rightItems[0].path)
        // the text should be the same sent in the [text] property
        expect(anchor.innerHTML).toBe(rightItems[0].text);

        done();
    });

    it("The Navbar Component should render items on both sides", async (done) => {

        const leftItems = [{ path: "/", text: "Home" }];
        const rightItems = [{ path: "/about", text: "About" }];

        // passing Both Left and Right Items
        const { getByText } = await render(Navbar, {
            props: { leftItems, rightItems }
        });

        const homeAnchor = await getByText("Home");
        const aboutAnchor = await getByText("About");
        // This element Should exist 
        expect(aboutAnchor).toBeDefined();
        expect(homeAnchor).toBeDefined();
        // The href should be exaclty the same we pass through hrefProp
        expect(homeAnchor.getAttribute("href")).toBe(leftItems[0].path);
        expect(aboutAnchor.getAttribute("href")).toBe(rightItems[0].path);
        // the text should be the same sent in the [text] property
        expect(homeAnchor.innerHTML).toBe(leftItems[0].text);
        expect(aboutAnchor.innerHTML).toBe(rightItems[0].text);

        done();
    });

    // TODO: find a way to test Slots

});