// import React, { useState } from 'react'

// const Formevents = () => {
//     const [username,setUsername]=useState("")
//     const getUsername=(e)=>{
//         setUsername(e.target.value)
//     }
//   return (
//     <div>
//         <h1>{username}</h1>
//         <input type="text" name="" id="" placeholder='enter name' onChange={getUsername} />
//         <button>submit</button>
//     </div>
//   )
// }

// export default Formevents


// import React, { useState } from 'react'

// const Formevents = () => {
//     const [username,setUsername]=useState("")
//     const [newuser,setNewUser]=useState("")
//     const getUsername=(e)=>{
//         setUsername(e.target.value)
//     }
//     const newusers=()=>{
//         setNewUser(username)
//     }

//   return (
//     <div>
//         <h1>{newuser}</h1>
//         <input type="text" name="" id="" placeholder='enter name' onChange={getUsername} />
//         <button onClick={newusers}>submit</button>
//     </div>
//   )
// }

// export default Formevents



import React, { useState } from 'react'

const Formevents = () => {
    const [username,setUsername]=useState("")
    const [newuser,setNewUser]=useState("")
    const getUsername=(e)=>{
        setUsername(e.target.value)
    }
    const newusers=(e)=>{
        e.preventDefault()
        setNewUser(username)
    }

  return (
    <div>
     <form action="" onClick={newusers}>
     <h1>{newuser}</h1>
        <input type="text" name="" id="" placeholder='enter name' onChange={getUsername} />
        <button type='submit'>submit</button>
     </form>
    </div>
  )
}

export default Formevents