const sgMail=require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)
const sendWelcomeEmail=(email,name)=>{
    sgMail.send({
        to:email,
        from:'basitahmad57@gmail.com',
        subject:'Thanks for joining in!',
        text:`Welcome to the app,${name}.Let me know how you get along with the app.`,
        

    })
}
const sendCancellationEmail=(email,name)=>{
    sgMail.send({
        to:email,
        from:'basitahmad57@gmail.com',
        subject:'Sorry to see you go!',
        text:`GoodBye,${name}.I hope to see you back sometime soon.`
        

    })
}
module.exports={
    sendWelcomeEmail,
    sendCancellationEmail
}
// sgMail.send({
//     to:'basitahmad57@gmail.com',
//     from:'basitahmad57@gmail.com',
//     subject:'first creation through sendgrid!',
//     text:'I hope this one actually get to you.'
// })