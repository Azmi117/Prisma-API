const prisma = require('../prisma/prisma');

class UserService{
    async getAllUsers(){
        return prisma.user.findMany();
    }

    async getUserById(id){
        return prisma.user.findUnique({where: {id: Number(id) } });
    }

    async createUser(username, email, password, role){
        return prisma.user.create({
            data:{username, email, password, role}
        });
    }

    async updateUser(id, username, email, password, role){
        return prisma.user.update({
            where:{id: Number(id)},
            data: {username, email, password, role}
        });
    }

    async deleteUser(id){
        return prisma.user.delete({where: {id: Number(id) } });
    }
}

module.exports = new UserService;