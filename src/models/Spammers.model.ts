import { Sequelize, DataTypes } from "sequelize";
import sequelize from "../DatabaseConnection";

const Spammers = sequelize.define(
  "spammers",
  {
    octa: {
      type: DataTypes.SMALLINT,
      allowNull: false,
    },
    octb: {
      type: DataTypes.SMALLINT,
      allowNull: false,
    },
    octc: {
      type: DataTypes.SMALLINT,
      allowNull: false,
    },
    octd: {
      type: DataTypes.SMALLINT,
      allowNull: false,
    },
    spamtime: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    visible: {
      type: DataTypes.TINYINT,
      allowNull: false,
    },
    subject: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    createdAt: false,
    updatedAt: false,
  }
);

// sequelize
//   .sync()
//   .then(() => {
//     console.log("Table created successfully");
//   })
//   .catch((error) => {
//     console.error("Unable to create table:", error);
//   });

export default Spammers;
