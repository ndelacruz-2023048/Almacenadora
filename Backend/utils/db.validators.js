//Validaciones en caso de que existan usuario, descomentar o modificar en caso de ser necesario


//Importar modelo User import User from '../src/user/user.model.js'
/*export const existUsername = async(username, user)=>{
    const alreadyUsername = await User.findOne({username})
    if(alreadyUsername && alreadyUsername._id !=user._id){
        console.error(`Username ${username} is already taken`)
        throw new Error(`Username ${username} is already taken`)
    }
}

export const existEmail = async(email, conpany)=>{
    const alreadyEmail = await Company.findOne({email})
    if(alreadyEmail && alreadyEmail._id != conpany._id){
        console.error(`Email ${email} is already taken`)
        throw new Error(`Email ${email} is already taken`)
    }
}*/