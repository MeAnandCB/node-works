const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' }
];

export const getUsers = (req, res) => {
    res.json(users);
};

export const createUser = (req, res) => {
    const { name } = req.body;

    if (!name) {
        return res.status(400).json({ error: 'Name is required' });
    }

    const newUser = {
        id: users.length + 1,
        name
    };

    users.push(newUser);
    res.status(201).json(newUser);
};
