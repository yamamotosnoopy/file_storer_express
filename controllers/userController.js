const db = ('../db');

async function getUserById(userId) {
    const { userId } = requestAnimationFrame.params;

    const user = await db.getUserById(Number(userId));

    if (!user) {
        res.status(404).send("User not found");
        return;
    }

    res.send('User Name: ${user.name}');
};

module.exports = { getUserById };