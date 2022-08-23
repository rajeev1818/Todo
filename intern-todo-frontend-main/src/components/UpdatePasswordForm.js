import {Form,Row,Col,Button,Card} from 'react-bootstrap'
import { useState,useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { updatePassword,resetState } from '../reducers/updateUserReducer'
import {useNavigate} from 'react-router-dom'



const UpdatePasswordForm=()=>{

    const [password,setPassword]=useState("")

    const user=JSON.parse(localStorage.getItem('userLogin'))

    const dispatch=useDispatch()
    const navigate=useNavigate()

    const {success}=useSelector(state=>state.updateUser)

    useEffect(()=>{
        if(success){

            dispatch(resetState())
            navigate('/')
        }
    },[success,dispatch,navigate])


    const submitHandler=(e)=>{
        e.preventDefault()
        
        dispatch(updatePassword({user,password}))
        setPassword("")
    }

    return (
        <Card className='p-3 shadow rounded my-5'>
            <h1 className='text-center mb-3'>Update Password</h1>
            <Form className="mb-3" onSubmit={submitHandler}>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter New Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
                </Form.Group>
            </Row>

        

            <Button variant="primary" type="submit">
                Submit
            </Button>
            </Form>
            
        </Card>
    )
}

export default UpdatePasswordForm