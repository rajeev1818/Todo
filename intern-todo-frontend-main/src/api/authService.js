import axios from 'axios'



const login=async(userData)=>{
    const {data}= await axios.post(`/api/login`,userData)
    if(data){
        localStorage.setItem('userLogin',JSON.stringify(data))
    }

    return data
}

const register=async(userData)=>{
    const {data}= await axios.post(`/api/register`,userData)
    if(data){
        localStorage.setItem('userLogin',JSON.stringify(data))
    }

    return data
}

const getTodos=async(user)=>{
    const {token}= user
    const config={
        headers:{
            'Content-Type':'application/json',
            Authorization: `Bearer ${token}`
        }
        
    }

    const {data}= await axios.get(`/api/todos`,config)
    
    return data
}


const createTodo=async(user,todo)=>{
    const {token}= user
    const config={
        headers:{
            'Content-Type':'application/json',
            Authorization: `Bearer ${token}`
        }
        
    }
    const {data} = await axios.post(`/api/todos`,todo,config)
    return data
}

const deleteTodo=async(user,id)=>{
    const {token}=user
    const config={
        headers:{
            'Content-Type':'application/json',
            Authorization: `Bearer ${token}`
        }
        
    }
    await axios.delete(`/api/todos/${id}`,config)

}

const getSingleTodo=async(id)=>{
    const {token}=JSON.parse(localStorage.getItem('userLogin'))
    const config={
        headers:{
            'Content-Type':'application/json',
            Authorization: `Bearer ${token}`
        }
        
    }

    const {data}= await axios.get(`/api/todos/${id}`,config)
    return data

}

const updateTodo=async(id,todo,user)=>{
    const {token}= user
    const config={
        headers:{
            'Content-Type':'application/json',
            Authorization: `Bearer ${token}`
        }
        
    }
    const {data} = await axios.put(`/api/todos/${id}`,todo,config)
    return data
}


const updateName=async(user,name)=>{
    const {token}=user
    const config={
        headers:{
            'Content-Type':'application/json',
            Authorization: `Bearer ${token}`
        }
    }

    const {data}= await axios.put(`/api/user/updatename`,{name:name},config)
    return data
    
}

const updatePassword=async(user,password)=>{
    const {token}=user
    const config={
        headers:{
            'Content-Type':'application/json',
            Authorization: `Bearer ${token}`
        }
    }

    const {data}= await axios.put(`/api/user/updatepassword`,{password:password},config)
    return data
}



const authService={
    login,
    register,
    createTodo,
    getTodos,
    deleteTodo,
    getSingleTodo,
    updateTodo,
    updateName,
    updatePassword
}

export default authService