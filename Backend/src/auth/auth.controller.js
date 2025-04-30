import User from '../User/user.model.js'
import { checkPassword } from '../../utils/encrypt.js'
import { generateJwt } from '../../utils/jwt.js'
import { validateTokenJWT } from '../../middlewares/validate.jwt.js'

export const login = async(req, res)=> {
    const { userLogin, password } = req.body
    try {
        const user = await User.findOne(
            {
                $or: [
                    { email: userLogin },
                    { username: userLogin }
                ]
            }
        )
        if(user && await checkPassword(user.password, password)){
            const loggedUser = {
                uid: user._id,
                name: user.name,
                surname: user.surname,
                role: user.role
            }
            const token = await generateJwt(loggedUser)
            return res
                .cookie('access_token', token, {
                    httpOnly: true,
                    secure: process.env.NODE_ENV === 'production' ? true : false,
                    sameSite: 'strict',
                    maxAge: 2000*60*60
                })
                .send(
                    {
                        success: true,
                        message: `Welcome ${user.name} ${user.surname} to sytem`,
                        loggedUser,
                        token
                    }
                )
        }

        return res.status(404).send(
            {
                success: false,
                message: 'Invalid Credentials'
            }
        )
    } catch (e) {
        console.error(e);
        return res.status(500).send(
            {
                success: false,
                message: 'Internal Server error'
            }
        )
    }
}

//Talvez sirva?
export const logout = [validateTokenJWT, (req, res) => {
    return res
        .clearCookie('access_token')
        .json({
            success: true,
            message: `Logged out successfully, goodbye ${req.user.name}`,
        });
}];