const errorHandler =(err,req,res,next)=>{
console.log(err.stack.cyan.underline);

console.log(err);
if(err.name==="CastError"){
    err.message="ene buruu bvtetsde id baina  huuy ";
    err.statusCode= 400;
}


res.status(err.statusCode ||500).json({
    success:false,
    error:err.message,
    code:324,

})
}
module.exports = errorHandler