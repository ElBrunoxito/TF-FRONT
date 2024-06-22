export interface UserRegister{
    id:number
    name:String
    lastName:String
    dni:String
    email:String
    username:String
    password:String
    address:String
    phone:String
    cityId:number
}

export interface UserLogin{
    username:String
    password:String
}

export interface User{
    id:number
    name:String
    lastName:String
    dni:String
    email:String
    username:String
    registerDate:Date
    address:String
    phone:String
    balance:number
}
