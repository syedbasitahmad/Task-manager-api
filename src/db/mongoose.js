const mongoose=require('mongoose')

mongoose.connect(process.env.MONGODB_URL,{
useNewUrlParser:true,
useCreateIndex:true,
useFindAndModify: false
})

// const me =new User({
//    name:'  basit',
//    email:'BASITAHMAD44@gmail.com',
//    password:'basitahmad123  '
// })
// me.save().then(()=>{
//  console.log(me)
// }).catch((error)=>{
//     console.log('error',error)
// })

// const task =new Task({
//    description:'  eat lunch',
//    //completed:false
// })
// task.save().then(()=>{
//  console.log(task)
// }).catch((error)=>{
//     console.log('error',error)
// })