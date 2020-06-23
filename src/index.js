const express=require('express')
require('./db/mongoose')

const userRouter=require('./routers/user')
const taskRouter=require('./routers/task')
const app=express()
const port=process.env.PORT

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)
app.listen(port,()=>{
    console.log('server is up on port '+port)
})
// const multer=require('multer')
// const upload=multer({
//     dest:'images',
//     limits:{
//         fileSize:1000000
//     },
//     fileFilter(req,file,cb){
//         if(!file.originalname.match(/\.(doc|docx)$/)){
//             return cb(new Error('Please upload a Word Document'))
//         }
//         cb(undefined,true)
//         // cb(new Error('file must be a PDF'))
//         // cb(undefined,true)
//         // cb(undefined,false)
//     }

// })

// app.post('/upload',upload.single('upload'),(req,res)=>{
//     res.send()
// },(error,req,res,next)=>{
//     res.status(400).send({error:error.message})
// })

//to set our own authentication middle ware
// app.use((req,res,next)=>{
//     if(req.method==='GET'){
//         res.send('GET requests are disabled')
//     }else{
//         next()
//     }
// })
// app.use((req,res,next)=>{
//    res.status(503).send('Site is currently down.Check back soon')
   
// })
//how populate works
// const Task=require('./models/task')
// const User=require('./models/user')
// const main=async()=>{
//     // const task=await Task.findById('5eedf88bae70a0969412c149')
//     // await task.populate('owner').execPopulate()
//     // console.log(task.owner)
//     const user=await User.findById('5eedf35cf59fc344e0b5cd83')
//    // await user.populate('tasks').execPopulate()
//    // console.log(user.tasks)
// }
// main()
// //for hashed password
// //const bcrypt=require('bcryptjs')
// // const jwt=require('jsonwebtoken')
// // const myFunction=async()=>{
// //    const token =jwt.sign({_id:'abc123'},'thisismynewcourse',{expiresIn:'7 days'})
// //    console.log(token)
// //    const data =jwt.verify(token,'thisismynewcourse')
// //    console.log(data)
   
// // }
// // myFunction()
// // const pet={
// //     name:'hal'
// // }
// // pet.toJSON=function(){
// //     console.log(this)
// //     return this
// // }
// // console.log(JSON.stringify(pet)) 
