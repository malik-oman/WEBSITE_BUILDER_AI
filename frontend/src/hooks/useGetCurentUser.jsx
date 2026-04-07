import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { serverUrl } from '../App'

function useGetCurentUser  ()  {
   useEffect(() =>{
     const getCurrentUser = async () => {
        try {
          const result = await axios.get(`${serverUrl}/api/user/me`,{withCredentials:true});
          console.log(result)
        } catch (error) {
          console.log(error)
        }
     }
     getCurrentUser()
   },[])
   

}

export default useGetCurentUser