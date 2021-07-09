module.exports = (data = {}) => {
  if (data == null) {
    console.log("::error file=parseUser.js,line=10,col=15::Nil user")
    return {
      id: '',
      url: '',
      login: '',
      avatarUrl: '',
    }
  } else {
    return {
      id: data.databaseId,
      url: data.url,
      login: data.login,
      avatarUrl: data.avatarUrl,
    }
  }
}

