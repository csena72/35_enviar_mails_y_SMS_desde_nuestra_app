const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'smtp.gmail.com',
    port:465,
    secure: true,
    auth: {
        user: process.env.ACCOUNT_GMAIL,
        pass: process.env.PASS_GMAIL
    }
});

exports.enviarMail = (asunto,mensaje,adjunto,to,cb) => {
    const mailOptions = {
        from: 'Servidor Node.js',
        to: to,
        subject: asunto,
        html: mensaje,
        attachments: [
            {   // filename and content type is derived from path
                path: adjunto,
                filename: 'foto.jpg',
            }
        ]
    }

    transporter.sendMail(mailOptions, (err, info) => {
        /*
        if(err) {
            console.log(err)
            //return err
        }
        else console.log(info)
        */
        cb(err,info)
    })
}
