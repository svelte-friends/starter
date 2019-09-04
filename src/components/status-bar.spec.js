

// TODO: fix default imports on jest
import StatusBar from "../components/status-bar.svelte";
import { render, cleanup, fireEvent } from '@testing-library/svelte'


// Required by framework 
beforeEach(cleanup);

describe("[Unit] Status Bar test suite", () => {


    it("Status bar should render acondingly", async (done) => {
        // All props should be inside a [prop] key
        // container is 
        const { getByText, } = await render(StatusBar, { props: { title: "Jack" } });

        const div = await getByText("Jack");
        fireEvent.click(div);
        await sleep(0);
        const newDiv = await getByText('Jack clicked');
        expect(newDiv).toBeDefined();
        done();
    })
});

// A simple wait function 
const sleep = (milliseconds) => new Promise(resolve => setTimeout(resolve, milliseconds));