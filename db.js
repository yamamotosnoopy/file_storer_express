const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' }
];

async function getUserById(id) {
    return users.find(user => user.id === id);
}

module.exports = { getUserById };
