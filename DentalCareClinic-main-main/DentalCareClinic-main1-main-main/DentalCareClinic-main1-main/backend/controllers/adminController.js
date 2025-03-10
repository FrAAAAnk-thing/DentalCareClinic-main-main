import validator from "validator"
import bycrypt from "bcrypt"
import {v2 as cloudinary} from "cloudinary"
import doctorModel from "../models/doctorModel.js"
import jwt from 'jsonwebtoken'

// API for adding doctor
const addDoctor = async (req,res) => {

    try {

        const { name, email, password, speciality, degree, experience, about, fees, address} = req.body
        const imageFile = req.file

        // checking for all data to add doctor
        if(!name || !email || !password || !speciality || !degree || !experience || !about || !fees || !address){
            return res.json({success:false,message:"Missing Details!"})
        }

        //validating email format
        if(!validator.isEmail(email)){
            return res.json({success:false,message:"Please enter a valid email"})
        }

        //password validation
        if(password.length < 8){
            return res.json({success:false,message:"Please enter a strong password!"})
        }

        //hashing doctor's password
        const salt = await bycrypt.genSalt(10)
        const hashedPassword = await bycrypt.hash(password, salt)

        //upload image to cloudinary
        //IMPORTANT: uncommnet the imageUpload, imageURL, and the image in doctorData
        //Thunderclient is a bitch
        //const imageUpload = await cloudinary.uploader.upload(imageFile.path,{resource_type:"image"})
        //const imageURL = imageUpload.secure_url

        const doctorData = {
            name, 
            email,
            //image: imageURL, 
            password: hashedPassword, 
            speciality, 
            degree, 
            experience, 
            about, 
            fees, 
            address:JSON.parse(address),
            date:Date.now()
        }


        const newDoctor = new doctorModel(doctorData)
        await newDoctor.save()

        res.json({success:true,message:"Doctor added!"})

    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
    }

}

// API For admin Login
const loginAdmin = async (req,res)=> {
    try{
        
        const {email,password} = req.body

        if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {

            const token = jwt.sign(email+password,process.env.JWT_SECRET)
            res.json({success:true,token})

        } else{
            res.json({success:false,message:"Invalid credentials"})
        }

    } catch (error){
        console.log(error)
        res.json({success:false,message:error.message})
    }

  
}


export {addDoctor,loginAdmin}