import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
  database: "spamikaze_database",
  username: "root",
  password: "",
  port: 3308,
  host: "localhost",
  dialect: "mysql",
  define: {
    freezeTableName: true,
  },
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection successful");
  })
  .catch((error) => {
    console.error("Unable to connect", error);
  });

export default sequelize;
