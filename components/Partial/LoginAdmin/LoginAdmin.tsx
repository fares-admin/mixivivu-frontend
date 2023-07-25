import { Button } from '@/components/Button'
import { Input } from '@/components/Input'
import { LogoAdmin } from '@/components/Logo'
import { COOKIE_TOKEN_KEY } from '@/constants/commonValue'
import { getEndpoint, internalUserEndpoints } from '@/constants/endpoints'
import { useApiCall } from '@/hooks'
import { LoginReq, LoginReqErr, LoginRes } from '@/types'
import axios from 'axios'
import { useState } from 'react'
import { useCookies } from 'react-cookie'
import { toast } from 'react-toastify'
import styles from './LoginAdmin.module.css'

export const LoginAdmin = () => {
  const [reqLogin, setReqLogin] = useState<LoginReq>({
    username: '',
    password: '',
  })

  const encodeBase64 = (data: string) => {
    return Buffer.from(data).toString('base64')
  }

  const [, setCookies] = useCookies([COOKIE_TOKEN_KEY])

  const loginFunc = useApiCall<LoginRes, LoginReqErr>({
    callApi: () =>
      axios.post(getEndpoint(internalUserEndpoints, 'authLogin'), {
        ...reqLogin,
        password: encodeBase64(reqLogin.password),
      }),
    handleError(status, message) {
      if (status !== 400) {
        toast.error(message)
      }
    },
    handleSuccess(mess, data) {
      toast.success('Đăng nhập thành công')
      setCookies(COOKIE_TOKEN_KEY, data.token)
    },
  })

  return (
    <div className={styles.container}>
      <div className={styles.modalLogin}>
        <LogoAdmin />
        <Input
          label="Username"
          customClass={styles.inputCustom}
          placeHolder="type your username here ..."
          hintText={loginFunc.error?.result.username}
          destructive={!!loginFunc.error?.result.username}
          onChange={(e) => setReqLogin({ ...reqLogin, username: e.target.value })}
        />
        <Input
          label="Password"
          customClass={styles.inputCustom}
          placeHolder="type your password here ..."
          type="password"
          hintText={loginFunc.error?.result.password}
          destructive={!!loginFunc.error?.result.password}
          onChange={(e) => setReqLogin({ ...reqLogin, password: e.target.value })}
        />
        <Button
          label={loginFunc.loading ? 'Loading...' : 'Login'}
          onClick={() => loginFunc.setLetCall(true)}
        />
      </div>
    </div>
  )
}
