import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import authService from '../api/authService'

export const updateName=createAsyncThunk('updateProfile/name',async(obj,thunkAPI)=>{
    try {
        return await authService.updateName(obj.user,obj.name)
    } catch (error) {
        const message= (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const updatePassword=createAsyncThunk('updateProfile/password',async(obj,thunkAPI)=>{
    try {
        return await authService.updatePassword(obj.user,obj.password)
    } catch (error) {
        const message= (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})




const updateProfileReducer=createSlice({
    name:'updateProfile',
    initialState:{loading:false,error:false,success:false,message:"",user:null},
    reducers:{
        resetState(state,action){
            state.loading=false
            state.error=false
            state.success=false
            state.message=""
        }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(updateName.pending,(state,action)=>{
            state.loading=true
        })
        .addCase(updateName.fulfilled,(state,action)=>{
            state.loading=false
            state.success=true
            state.user=action.payload
        })
        .addCase(updateName.rejected,(state,action)=>{
            state.loading=false
            state.error=true
            state.message=action.payload
        })

        .addCase(updatePassword.pending,(state,action)=>{
            state.loading=true
        })
        .addCase(updatePassword.fulfilled,(state,action)=>{
            state.loading=false
            state.success=true
        })
        
    }
})





export const {resetState}=updateProfileReducer.actions
export default updateProfileReducer.reducer

