import { Input } from '@/components'
import { UserReqError } from '@/types'
import React from 'react'
import styles from './UserForm.module.css'

export const UserForm = ({
  changeUser,
  error,
}: {
  changeUser: (e: React.ChangeEvent<HTMLInputElement>) => void
  error?: UserReqError
}) => {
  return (
    <div className={styles.cardContent}>
      <Input
        label="Tên"
        onChange={changeUser}
        id="name"
        hintText={error?.name}
        destructive={!!error?.name}
      />
      <Input
        label="Username"
        onChange={changeUser}
        id="username"
        hintText={error?.username}
        destructive={!!error?.username}
      />
      <Input
        label="Email"
        onChange={changeUser}
        id="email"
        hintText={error?.email}
        destructive={!!error?.email}
      />
      <Input
        label="Số điện thoại"
        onChange={changeUser}
        id="phone"
        hintText={error?.phone}
        destructive={!!error?.phone}
      />
    </div>
  )
}
