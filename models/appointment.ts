import { Sequelize, Model, DataType, DataTypes } from "sequelize";
import { sequelize } from "../config/database";

class Appointment extends Model {
    public appointment_id!: number;
    public name!: string;
    public email!: string;
    public phone!: string;
    public concern!: string;
    public createdAt!: Date;
};


Appointment.init(
    {
        appointment_id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false
        },
        concern: {
            type: DataTypes.TEXT('medium'),
            allowNull: true
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false
        }
    },
    {
        sequelize,
        modelName: 'Appointment',
        timestamps: false
    }
);

export { Appointment };