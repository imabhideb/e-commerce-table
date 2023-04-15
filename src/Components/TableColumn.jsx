export const TableColumns = [
    {
        name: "Name",
        selector: row => row.name,
        cell: row => <div style={{ fontSize: 20 }}>{row.name}</div>,
    },
    {
        name: "Image",
        selector: row => row.image
    },
    {
        name: "Action",
        selector: row => row.action
    },
];