
const authHeaders = () => {
  return {
    headers: {
      jwt: localStorage.getItem('cognito_token'),
      user_id: localStorage.getItem('user_id'),
    }
  }
}

export default authHeaders;
