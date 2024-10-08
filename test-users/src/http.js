export const fetchUsers = async () => {
    const response = await fetch("http://localhost:8000/api/users");
    const data = await response.json();

    if (!response.ok) {
        throw new Error("Failed to fetch users.");
    }

    return data;
};

export const addUser = async (user) => {
    console.log(JSON.stringify(user));
    const response = await fetch("http://localhost:8000/api/users", {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
            "Content-Type": "application/json",
        },
    });

    if (!response.ok) {
        throw new Error(
            `Failed to update user data. Status: ${response.status} - ${
                data.message || response.statusText
            }`
        );
    }

    let data;

    try {
        data = await response.text();
        data = data ? JSON.parse(data) : {};
    } catch (err) {
        throw new Error(`Invalid JSON response: ${err.message}`);
    }

    return data;
};

export const deleteUser = async (userId) => {
    const response = await fetch(`http://localhost:8000/api/user/${userId}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
    });

    if (!response.ok) {
        throw new Error(
            `Failed to delete user. Status: ${response.status} - ${
                data.message || response.statusText
            }`
        );
    }

    let data;

    try {
        data = await response.text();
        data = data ? JSON.parse(data) : {};
    } catch (err) {
        throw new Error(`Invalid JSON response: ${err.message}`);
    }

    return data;
};
