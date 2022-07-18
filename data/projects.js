export const MOCK_PROJECTS = [
    {
        "projectId": 1,
        "title": "Chat app",
        "img": "https://previews.dropbox.com/p/thumb/ABnp7HBH77q8OdqUMbVFD1SVE8DQaq9zUcL_wy6SDMXTWC-FcEvpMIyCKs3UB37DV5YzNSOD7w6JZKihBPcBfR6UujErc78HZqPCTwytA76DIwD6Tva6biC0xHX5-Xv1h2GNP8k-SYniIw3iruy5WIjl-CRenvKLrZU753W77Z-kq4ow9bQh3FzV3QdZZ7hRBvur56F3eb1Xd0DUUCWxtxUg4SXFOoW0jlaJBk1VrxK0BQWAvDLWmlS9YE4mm-s_fY2pkRtlNzdz2NQ0BiNdPteWukx4HSka7Rxz1M_7T-ttvqdJP7VDxfCk13K4c7thrm7fK0OSuwS1_1AMm2ofFsPFjK3Q_I7gcDrE3A_r6USLhVaN7f1D2E0ZtORPxrufufQ/p.jpeg",
        "descriptionShort": "Chat App - IT Bootcamp",
        "description": "Made live functional chat app as a final project at IT Bootcamp. Used vanilla JavaScript and Firebase",
        "onlineUrl": "https://milan-expo-chat-app.netlify.app/"
    },
    {
        "projectId": 2,
        "title": "Weather app",
        "img": "https://images.unsplash.com/photo-1548824049-12fcd2c576a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80",
        "descriptionShort": "Weather app - Future Forward",
        "description": "Simple weather app, made as a test project for Future Forward company. Written in React, has great search component, connected to openweather API endpoint.",
        "onlineUrl": "https://milan-expo-chat-app.netlify.app/"
    },
    {
        "projectId": 3,
        "title": "ToDo app",
        "img": "https://previews.dropbox.com/p/thumb/ABkSIN4GQU9VRAEEJxqNz8O0IaFPYLmpqEkZ9sm1yUlO7ZSwaPqAWg7ghmTp2ZSGnbdy7QcEbI0Zt8i7C1L4T31LG58EpO-VmXddkNgeNOfm-puxrXyiF8CuKpT3TV95p-fi5EF1A4H0P4eKimdcaG8jAmpTnnltPcc2ux-IOCeRd8dN2kOhNxYR_k3f1AIwCmij2vFlFdtVL0CBy0IrYXnHIgiembdPuATszQTesi_TGqN-qEj5-6sSvsLWDs627z7LY-kd_wIN0pxItscV02GJcJZAB_uSyeshhSCWNXlwMN5AyuCOrj7xtcWrAlwDw8y30iSPj-Do_IjTh1EFtlGV7cME8A8CW7NKMXEBQ9foDFbro7gM13PdtgSmaWtZLTg/p.jpeg",
        "descriptionShort": "ToDo app - Tangled Hub",
        "description": "Made fully functional ToDo app as a test project for Tangled Hub company. Has add, edit, remove and check tasks as done functionality. App has a working backend, written in React, express js and dockerized.",
        "onlineUrl": "https://milan-expo-chat-app.netlify.app/"
    }
]

export const fetchAllProjects = () => {
    return MOCK_PROJECTS;
}

