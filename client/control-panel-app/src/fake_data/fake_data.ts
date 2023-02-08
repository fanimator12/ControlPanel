const controlpanels = [
    {
        id: 1,
        name: '1675096119',
        A: 12,
        B: 23,
        C: 52,
        D: -93,
        E: 100
    },
    {
        id: 2,
        name: '1675093333',
        A: 45,
        B: 78,
        C: 34,
        D: 8,
        E: 90
    },
    {
        id: 3,
        name: '1675095676',
        A: -85,
        B: 67,
        C: 56,
        D: 88,
        E: 49
    },
]

export function getData() {
    return controlpanels;
}

export function getControlPanel(id:number){
    return controlpanels.find((controlpanel) => controlpanel.id === id);
}