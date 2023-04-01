import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../store';
import { fetchUsers } from '../../slices/user/userSlice';
import { User } from '../../interfaces/User';
import Box from '../Box';

const NoUsers = () => {
    const dispatch = useAppDispatch();

    return(
        <>
            <div>Please load people</div>
            <button onClick={() => dispatch(fetchUsers())}>Load</button>
        </>
    )
}

interface userListProps {
    users: User[]
};

const UserList = ({users}: userListProps) => {
    return(
        <ul>
            {users.map((user: User) => <li key={user.id}>{user.name}</li>)}
        </ul>
    )
};

const Users = () => {
    const { users, loading } = useSelector((state: RootState) => state.user);

    if(loading) {
        return(
            <Box title='Users'>
                Loadig...
            </Box>
        )
    }

    return(
        <Box title='Users'>
            { users.length ? (
                <UserList users={users} />
            ) : (
              <NoUsers />
            ) }
        </Box>
    );
}

export default Users;