import users from './user';
import crypto from './crypto';
import token from './token';

/* eslint-disable prefer-promise-reject-errors */
const authFailed = (email:string )=> Promise.reject({
    status: 401,
    code: 'UNAUTHENTICATED',
    message: `Failed to authenticate user ${email}`,
  })

  type authOptions={
    email:string,
    password:string
  }
  
  const authenticate = async (params: authOptions) => {
    const {email,password} = params;
    const user = await users.findByEmail(email)
    if (!user) {
      return authFailed(email)
    }
    const isMatch = await crypto.compare(password, user.password)
    if (!isMatch) {
      return authFailed(email)
    }
    return token.sign({ id: user.id })
  }
  
  export default {
    authenticate,
  }