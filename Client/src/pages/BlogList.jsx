import React from 'react'
import { UserAuth } from '../AuthContext';

export default function BlogList() {
    const {logout} = UserAuth();
  return (
    <div>
        BlogList
        <button onClick={logout}>Logout</button><br/>
    </div>
  )
}
