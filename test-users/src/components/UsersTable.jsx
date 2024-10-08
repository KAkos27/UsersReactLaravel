const UsersTable = ({ users, isLoading, onDeleteUser }) => {
    return (
        <div className="table-container">
            {isLoading ? (
                <div className="loader"></div>
            ) : (
                <table className="users-table">
                    <thead>
                        <tr>
                            <th>Name:</th>
                            <th>Email:</th>
                            <th>Delete:</th>
                        </tr>
                    </thead>
                    {users.map((user) => (
                        <tbody key={user.id}>
                            <tr>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td className="users-table__delete-button">
                                    <button
                                        onClick={() => onDeleteUser(user.id)}
                                    >
                                        X
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    ))}
                </table>
            )}
        </div>
    );
};

export default UsersTable;
