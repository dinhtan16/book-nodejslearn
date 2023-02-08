import jwt from 'jsonwebtoken'
import { notAuth } from './handleErrors'


const verifyToken =(req,res,next) => {
    const token = req.headers.authorization

    if(!token) return notAuth('missing token !',res)

    const accessToken = token.split(' ')[1]
    jwt.verify(accessToken,process.env.JWT_SECRET,(err,user) => {
        if(err) return notAuth('Jwt expired or invalid!',res)


        req.user = user   //decode từ jwt sang obj user , đổi decode thành user cho dễ nhận biết

        //gán một user cho req để controller nhận được !

        next() // chạy qua controller
    })
}

export default verifyToken