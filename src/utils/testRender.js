
export async function render(Cls) {

    return new Promise((resolve, reject) => {
        const target = document.createElement('div');
        new Cls({ target });
        setTimeout(() => {
            const element = target.firstElementChild;
            resolve(element);
        }, 15);
    });

}

export async function renderComponent(Cls) {

    return new Promise((resolve, reject) => {
        const target = document.createElement('div');
        const Component = new Cls({ target });
        setTimeout(() => {
            resolve(Component);
        }, 15);
    });

}
