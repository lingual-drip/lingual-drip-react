import service from "../../commons/axiosService";

export const authService = async ({email, password, rememberMe = false }: any) => {
  try {
    const { data } = await service.post('/auth/login', { email, password })
    const response = data
    const access_token = data?.access_token
    const api_key = data?.userId
    console.log(data);
    
    access_token && localStorage.setItem('lingual_drip_access_token', access_token)
    api_key && localStorage.setItem('lingual_drip_api_key', api_key)

    if(rememberMe) localStorage.setItem('lingual_drip_login_data', JSON.stringify({ email, password }))
  
    return response
  } catch(e) {
    return 'bad-data'
  }
} 