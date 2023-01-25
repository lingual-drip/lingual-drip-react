export const logOut = () => {
  localStorage.removeItem('lingual_drip_access_token')
  window.location.href = 'http://localhost:3000/'
}