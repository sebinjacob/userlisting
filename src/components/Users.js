import {useEffect,useRef} from 'react'
import { useSelector ,useDispatch } from 'react-redux'

function Users() {
  const userList = useSelector(({user})=>user)
  const dispatch = useDispatch()
  const divRef = useRef(null);

  
  useEffect((()=>{
    
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data =>{
         console.log(data)
         dispatch({type:'user/addUserList',userList:data})
        });

  }),[])
  

  const addUser = () => {
    let usrTmp = [...userList]
    let lastData= usrTmp.pop()
    if(lastData.name!=="" && lastData.email!=="")
    dispatch({type:'user/addUserList',userList:[{name:'',email:''}]})
    else
    alert("Fill last empty controls")
    divRef.current.scrollTop = divRef.current.scrollHeight 
  }

  const handleChange = (e,index,isName=false) => {
    let value = e.target.value
    let usrTmp = [...userList]
    let controls =usrTmp[index]
    if(isName)
    controls.name=value
    else
    controls.email=value
    dispatch({type:'user/updateUserList',userList:usrTmp})
  }
  return (
    <div className="wrapper">
        <div style={{display:'flex', flex:2,justifyContent:'center',alignItems:'center'}}>
          <div style={{
              backgroundColor:'#03a9f4',
              borderWidth:1,
              borderRadius:25,
              height:'43px',
              width:'282px',
              display:'flex',
              justifyContent:'center',
              alignItems:'center'
            }}
            onClick={addUser}>
           <label style={{color:'#fff'}}> Add New User</label>
          </div>
        </div> 

        <div style={{display:'flex',flex:11,alignItems:'center',flexDirection:'column',justifyContent:'flex-end'}}>
         
          
          <div style={{
                    display:'flex',
                    flex:1,
                    
                    flexDirection:'column' ,
                    width:'80%',
                    borderStyle:'solid',
                    borderWidth:1,
                    borderColor:'green',
                    justifyContent:'center',
                    marginBottom:'3px',
                    
          }}>
            <div style={{
              padding:'25px',
              maxHeight:'600px',
              overflow:'scroll',}}
              ref={divRef}>
            {userList.map((user,index)=>{
              return (
                <div style={{display:'flex', height:'30px',backgroundColor:'#fff',justifyContent:'space-around',marginTop:'10px'}}>
                    <div className='inp-wrapper'>
                      <input type="text" value={user.name} onChange={(e)=>handleChange(e,index,true)}/>
                    </div>
                    <div className='inp-wrapper'> 
                      <input type="text" value={user.email} onChange={(e)=>handleChange(e,index)}/>   
                    </div>
                </div>
              )
            })}
            </div>
          </div>
        </div> 
    </div>
  );
}

export default Users;
