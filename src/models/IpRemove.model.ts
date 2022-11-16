import { Sequelize, DataTypes } from "sequelize";
import sequelize from "../DatabaseConnection";

const IpRemove = sequelize.define(
  "ipremove",
  {
    removetime: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
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

export default IpRemove;
