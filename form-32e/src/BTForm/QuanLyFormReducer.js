const stateDefaul={
  mangSinhVien:[],
  selectedUser:null,
}
const QuanLyFormReducer=(state=stateDefaul,{type,payload})=>{

 switch(type){
  case 'ADD':{
    const data =[...state.mangSinhVien]
    const user={...payload,id: Date.now()}
    data.push(user)
    return {...state,mangSinhVien:data}
  }
  case 'DELETE':{
    const  data=state.mangSinhVien.filter(item=>item.id!==payload)
    return {...state,mangSinhVien:data}
  }
  case 'EDIT':{
    const user=state.mangSinhVien.find(item=>item.id===payload)
    return{...state,selectedUser:user}
  }
  case 'UPDATE_USER':{
    const newUserList=state.mangSinhVien.map((item)=>item.id===payload.id?payload:item)
    state.selectedUser=null
    return {...state,mangSinhVien:newUserList}
  }
  default:return {...state}
  }
  
  }
  
export default QuanLyFormReducer