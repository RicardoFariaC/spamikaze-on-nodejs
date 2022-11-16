import express from "express";
import routes from "./routes/index.routes";

const app = express();
const port: number = 3001;

routes(app);

app.listen(port, () => {
  console.log(`server init on port: ${port}`);
});

export default app;
