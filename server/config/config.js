const config = {
    production: {
        SECRET: process.env.SECRET,
        DATABASE: process.env.MONGODB_URI
    },
    default: {
        SECRET: 'supersecretpassword',
        DATABASE: 'mongodb+srv://fakher:test123@cluster0.uzzjk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
    }
}

exports.get = function get(env) {
    return config[env] || config.default
}

