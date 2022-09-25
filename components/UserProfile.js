import React from 'react'
import Image from 'next/image'

export default function UserProfile({ user }) {
  return (
    <div className="box-center">
      <Image src={user.photoURL || '/hacker.png'} className="card-img-center" alt=""/>
      <p>
        <i>@{user.username}</i>
      </p>
      <h1>{user.displayName || 'Anonymous User'}</h1>
    </div>
  )
}