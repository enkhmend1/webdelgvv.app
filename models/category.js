const mongoose =require('mongoose')

const CategorySchema= new mongoose.Schema({
    name :{
        type: String,
        required:[true,"категорийн нэрийг оруулна уу"],
        unique:true,
        trim:true,
        maxlength:[60,"категорийн нэрийг урт дээд тал нь 60 тэмдэгт байх ёстой"]

    },
    description:{
        type:String,
        required:[true,"категорийн тайлбарыг заавал оруулна уу"],
        maxlength:[600,"категорийн тайлбарын урт дээд тал нь 600 тэмдэгт байх ёстой"]

    },
    photo:{
        type:String,
        default:"no-photo.jpg"


    },
    averageRating:{
        type:Number,
        min:[1,"Rating хамгийн багадаа 1 байх ёстой"],
        max:[10,"Rating хамгийн ихдээ 10 байх ёстой"],

    },
    createdAt:{
        type:Date,
        default:Date.now,
    }
})  ;
module.exports=mongoose.model("Category",CategorySchema);


// ene bol shine 