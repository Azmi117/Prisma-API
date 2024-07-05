const UserService = require('../services/UserService');

class UserController{
    async getAllUsers(req, res, next){
        try{
            const users = await UserService.getAllUsers();
            res.json(users);
        }catch(err){
            next(err);
        }
    }

    async getUserById(req, res, next){
        try{
            const { id } = req.params;
            if(!id){
                return res.status(400).json({message: 'Id required'});
            }
            const user = await UserService.getUserById(id);
            res.status(200).json(user);
            if(!user){
                return res.status(404).json({message: 'User Not Found'});
            }
        }catch(err){
            next(err);
        }
    }

    async createUser(req, res, next){
        try{
            const { username, email, password } = req.body;
            const user = await UserService.createUser(username, email, password);
            res.status(201).json(user);
        }catch(err){
            next(err);
        }
    }

    async updateUser(req, res, next){
        try{
            const { id } = req.params;
            if(!id){
                return res.status(400).json({message: 'Id required'});
            }
            const { username, email, password } = req.body;
            const user = await UserService.updateUser(id, username, email, password);
            res.status(201).json(user);
        }catch(err){
            next(err);
        }
    }

    async deleteUser(req, res, next){
        try{
            const { id } = req.params;
            if(!id){
                return res.status(400).json({message: 'Id required'});
            }
            const user = await UserService.deleteUser(id);
            res.status(204).send();
            if(!user){
                return res.status(404).json({message: 'User Not Found'});
            }
        }catch(err){
            next(err);
        }
    }
}

module.exports = new UserController;