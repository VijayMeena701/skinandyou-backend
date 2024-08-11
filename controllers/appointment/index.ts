import { Request, Response, NextFunction } from "express";

import { Appointment } from "../../models/appointment";

class AppointmentController {
    createNew = async (req: Request, res: Response, next: NextFunction): Promise<void | Response<Record<string, any>>> => {
        try {
            const { name, email, phone, concern } = req.body;
            const createdAt = new Date().toISOString();

            if (!name || !email || !phone || !concern) {
                return res.status(400).json({ error: "All fields are required" })
            }

            const record = await Appointment.create({ name, email, phone, concern, createdAt });

            if (!record.dataValues) {
                return res.status(500).json({ error: "Error creating record" })
            }

            return res.status(204).json({ message: "Created Successfully" })

        } catch (error) {
            console.log(error)
            return res.status(500).json({ error: "Internal Server Error" })
        }
    }
};

export default new AppointmentController();