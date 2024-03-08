import request from '@/axiosRequest/request'

//? send a request to Github for the list of users according to the user's name
export const reqGithubUserList = (username="") => {
   // return request.get(`/search/users?q=${username}`)
   return request.get('/search/users', {
      params: {
         q:username
      }
   })
}

