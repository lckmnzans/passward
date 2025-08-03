import express, { Router, Request, Response } from "express";
const router = express.Router();
import passwordStore from "../dummy/passwordStore";

export async function getSavedPassword(req: Request, res: Response) {

}

export async function addSavedPassword(req: Request, res: Response) {
    const [ key, value ]= req.body;
    if (key && value) {
        passwordStore.addPassword(key, value)
        res.json({
            success: true,
            msg: 'Password saved'
        });
    } else {
        res.status(400).json({
            success: false,
            msg: 'Password failed to save, request not enough'
        })
    }
}