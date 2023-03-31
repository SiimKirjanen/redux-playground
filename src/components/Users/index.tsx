import { useSelector, useDispatch } from 'react-redux';
import type { AppDispatch, RootState } from '../../store';
import { fetchUsers } from '../../slices/user/userSlice';
import { User } from '../../interfaces/User';

const NoUsers = () => {
    const dispatch: AppDispatch = useDispatch();

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
    const users: User[] = useSelector((state: RootState) => state.user.users);

    return(
        <div className='box'>
            <div className='title'>Users</div>

            { users.length ? (
                <UserList users={users} />
            ) : (
              <NoUsers />
            ) }

        </div>
    );
}

export default Users;