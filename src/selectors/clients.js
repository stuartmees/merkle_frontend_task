
// Get visible expenses
const getVisibleClients = (clients, searchTerm) => {
    return clients.filter((client) => {
        const textMatch = typeof searchTerm !== 'string' || client.name.toLowerCase().includes(searchTerm.toLowerCase());

        return textMatch;
    });
};

export default getVisibleClients;