import express, { Router, Request, Response } from "express";
const router = express.Router();

router.get('', (req: Request, res: Response) => {
    res.render("home");
})

router.post('', (req: Request, res: Response) => {
    res.json({
        success: true,
        msg: "you succed"
    })
})

export default router;