const checkAuth = async (req, res, next) => {
    const user = await req.user;
    if(!user) {
        return res.status(400).json({error: 'unauthorized.'})
    }
    next();
}

export {checkAuth}