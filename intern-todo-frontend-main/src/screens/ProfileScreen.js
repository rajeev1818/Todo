import { Container,Row, Spinner } from 'react-bootstrap'

import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import UpdateNameForm from '../components/UpdateNameForm'
import UpdatePasswordForm from '../components/UpdatePasswordForm'



const ProfileScreen=()=>{

    
    const {loading}=useSelector(state=>state.updateUser)

    useEffect(()=>{
        
    },[loading])
    

    return(
        <Container>

            <h1 className='text-center mb-3'>Update Profile</h1>
            {
                loading ?(<Container className='d-flex justify-content-center'>
                <Row >
                    <Spinner animation="border" /> 
                </Row>
                </Container>) :(
                    <>
                    <UpdateNameForm />
                    <UpdatePasswordForm />
                    </>
                    )
            }
                
            
            
        </Container>
    )
}

export default ProfileScreen