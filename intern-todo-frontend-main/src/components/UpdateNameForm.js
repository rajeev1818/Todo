import {Form,Row,Col,Button,Card} from 'react-bootstrap'
import { useState,useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { updateName,resetState } from '../reducers/updateUserReducer'
import {useNavigate} from 'react-router-dom'


import { setUser } from '../reducers/userReducer'


const UpdateNameForm=()=>{

    const [name,setName]=useState("")

    const user=JSON.parse(localStorage.getItem('userLogin'))

    const dispatch=useDispatch()
    const navigate=useNavigate()

    const {success,user:updatedUser}=useSelector(state=>state.updateUser)

    useEffect(()=>{
        if(success){
            localStorage.setItem('userLogin',JSON.stringify({_id:updatedUser._id,name:updatedUser,email:updatedUser.email,token:user.token}))
            dispatch(setUser({_id:updatedUser._id,name:updatedUser.name,email:updatedUser.email,token:user.token}))
            dispatch(resetState())
            navigate('/')
        }
    },[success,dispatch,navigate,user.token,updatedUser])


    const submitHandler=(e)=>{
        e.preventDefault()
        
        dispatch(updateName({user,name}))
        setName("")
    }

    return (
        <Card className='p-3 shadow rounded my-5'>
            <h1 className='text-center mb-3'>Update Name</h1>
            <Form className="mb-3" onSubmit={submitHandler}>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter New Name" value={name} onChange={(e)=>setName(e.target.value)} />
                </Form.Group>
            </Row>

        

            <Button variant="primary" type="submit">
                Submit
            </Button>
            </Form>
            
        </Card>
    )
}

export default UpdateNameForm