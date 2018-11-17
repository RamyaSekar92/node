



module.exports = {
    helloWorld : (req, res) => {
        res.status(200).json({
            message : "Hello World2222",
            data:[{name:"Esa"},{name:"Dev"}]
        })
    },

    userDetails : (req, res) => {
        res.status(200).json({
            message : "User Listed SuccessFully!"
        })
    }

   ,addUser: (req, res) => {
        res.status(200).json({
            message : "User Added SuccessFully!"
        })
    },
    
    updateUser: (req, res) => {
        res.status(200).json({
            message : "User Updated SuccessFully!"
        })
    },
    deleteUser: (req, res) => {
        res.status(200).json({
            message : "User deleted SuccessFully!"
        })
    }
}