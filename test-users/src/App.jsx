import { useEffect, useState } from "react";
import { addUser, deleteUser, fetchUsers } from "./http.js";
import UsersTable from "./components/UsersTable.jsx";
import NewUser from "./components/NewUser.jsx";
import Modal from "./components/Modal.jsx";

function App() {
    const [users, setUsers] = useState([]);
    const [isFetching, setIsFetching] = useState(false);
    const [error, setError] = useState();

    useEffect(() => {
        const fetchUsersData = async () => {
            setIsFetching(true);
            try {
                const users = await fetchUsers();
                setUsers(users);
            } catch (error) {
                setError({ message: error.message || "Failed to fetch users" });
            } finally {
                setIsFetching(false);
            }
        };
        fetchUsersData();
    }, []);

    const handleSubmitUser = async (event, user) => {
        event.preventDefault();
        if (!(user.name.trim() && user.email.trim())) {
            setError({ message: "Please fill out every field." });
            return;
        }
        try {
            await addUser(user);
        } catch (error) {
            setUsers(users);
            setError({ message: error.message || "Failed to add user." });
        } finally {
            const users = await fetchUsers();
            setUsers(users);
        }
    };

    const handleDeleteUser = async (userId) => {
        try {
            await deleteUser(userId);
        } catch (error) {
            setUsers(users);
            setError({ message: error.message || "Failed to add user." });
        } finally {
            const users = await fetchUsers();
            setUsers(users);
        }
    };

    return (
        <div className="app">
            <Modal error={error}>
                <h3>{error && error.message}</h3>
            </Modal>
            <NewUser onSubmit={handleSubmitUser} />
            {!error && (
                <UsersTable
                    users={users}
                    isLoading={isFetching}
                    onDeleteUser={handleDeleteUser}
                />
            )}
        </div>
    );
}

export default App;
