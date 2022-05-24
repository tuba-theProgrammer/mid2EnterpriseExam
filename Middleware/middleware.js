const middleware = async (req,res,next)=>{
    const { name,email,city,state,country,address,postcode,phone} = req.body
    if(!name||!email||!city||!state||!country||!address||!postcode||!phone)
    {
        res.redirect('/route/errorPage')
    }
    res.redirect('/route/')
}