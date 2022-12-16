import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../../JS/Actions/Actions';
import UsersCard from '../UsersCard/UsersCard';
import './UsersList.css'

const UsersList = () => {
const dispatch = useDispatch();
const listUsers = useSelector(state=> state.userReducer.listUsers);
const load = useSelector(state => state.userReducer.load);

useEffect(() => {
 dispatch(getUsers())
}, [dispatch]);

console.log(listUsers)

  return (
    <div className='list'>
      <h1>Users List</h1>

      <div className='cards'>
      {load ? <h2>Loading...</h2>
      : listUsers.map((el) => <UsersCard user = {el} key= {el._id} /> )}
      </div>

    </div>
  )
}

export default UsersList ;