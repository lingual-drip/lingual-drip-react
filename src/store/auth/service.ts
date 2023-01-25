import service from "../../commons/axiosService";

export const authService = async (payload: any) => {
  let access_token = localStorage.getItem('lingual_drip_access_token')

  if(!access_token) {
    const { data } = await service.post('/auth/login', payload)
    access_token = data.access_token
    access_token && localStorage.setItem('lingual_drip_access_token', access_token)
  }
  
  return access_token
} 