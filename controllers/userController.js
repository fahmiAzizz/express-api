import User from "../models/userModel.js";

export const getUsers = async (req, res) => {
    try {
        const response = await User.findAll()
        res.status(200).json(response)
    } catch (error) {
        console.log(error)
    }
} 

export const getUserById = async (req,res) => {
    try {
        const response = await User.findOne({
            where: {
                id: req.params.id
            }
        })
        res.status(200).json(response)
    } catch (error) {
        console.log(error);
    }
}

export const addUser = async (req, res) => {
    try {
        await User.create(req.body);
        res.status(201).json({msg:"data berhasil ditambahkan"})
    } catch (error) {
        console.log(error);
    }
}

export const updateUser = async (req, res) => {
    try {
        await User.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        res.status(200).json({msg:"data berhasil diupdate"})
    } catch (error) {
        console.log(error);
    }
}

export const deleteUser = async (req, res) => {
    try {
        await User.destroy({
            where: {
                id: req.params.id
            }
        })
        res.status(200).json({msg:"data berhasil dihapus"})
    } catch (error) {
        console.log(error);
    }
}