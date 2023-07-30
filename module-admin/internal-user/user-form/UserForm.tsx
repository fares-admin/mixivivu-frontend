import { UserReq, UserReqError } from '@/types'

import { Input } from '@/components'
import React from 'react'
import styles from './UserForm.module.css'

export const UserForm = ({
  user,
  changeUser,
  error,
}: {
  user: UserReq
  changeUser: (e: React.ChangeEvent<HTMLInputElement>) => void
  error?: UserReqError
}) => {
  return (
    <div className={styles.cardContent}>
      <Input
        value={user.name}
        label="Tên"
        onChange={changeUser}
        id="name"
        hintText={error?.name}
        destructive={!!error?.name}
      />
      <Input
        value={user.username}
        label="Username"
        onChange={changeUser}
        id="username"
        hintText={error?.username}
        destructive={!!error?.username}
      />
      <Input
        value={user.email}
        label="Email"
        onChange={changeUser}
        id="email"
        hintText={error?.email}
        destructive={!!error?.email}
      />
      <Input
        value={user.phone}
        label="Số điện thoại"
        onChange={changeUser}
        id="phone"
        hintText={error?.phone}
        destructive={!!error?.phone}
      />
    </div>
  )
}
