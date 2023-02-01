const Mock = require('mockjs')

Mock.mock('/userinfo', 'post', (req:any) => {
  const { password, username } = JSON.parse(req.body)
  if (username === 'user' && password === '1234567') {
    return {
      success: true
    }
  } else {
    return {
      success: false
    }
  }
})
