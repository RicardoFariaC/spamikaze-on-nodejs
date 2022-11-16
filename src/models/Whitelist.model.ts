import { Sequelize, DataTypes } from "sequelize";
import sequelize from "../DatabaseConnection";

const Whitelist = sequelize.define(
  "whitelist",
  {
    email: {
      type: DataTypes.CHAR(100),
      unique: true,
      allowNull: false,
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

export default Whitelist;
