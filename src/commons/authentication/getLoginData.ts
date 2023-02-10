export const getLoginData = () => {
  try {
    const stringifyData = localStorage.getItem('lingual_drip_login_data') || undefined
    if(stringifyData) {
      return JSON.parse(stringifyData)
    }

    return undefined
  } catch(e) {
    return undefined
  }
}