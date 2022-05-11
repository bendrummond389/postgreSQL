import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const app = express();
const cors = require("cors");
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
const prisma = new PrismaClient();

// Create a user

app.put("/", async (req: Request, res: Response) => {
  const {id, username} = req.body;
const updatedUser = await prisma.user.update({
  where: {
    id = id
  }
})
});

app.post("/", async (req: Request, res: Response) => {
  const { id, colors, url } = req.body;

  const user = await prisma.user.create({
    data: {
      id: id,
      colors: colors,
      url: url,
    },
  });
  res.json(user);
});

app.get("/byId/:id", async (req: Request, res: Response) => {
  const id = req.params.id;
  const user = await prisma.user.findUnique({
    where: {
      id: id,
    },
  });
  res.json(user);
});

app.delete("/:id", async (req: Request, res: Response) => {
  const id = req.params.id;
  const deletedUser = await prisma.user.delete({
    where: {
      id: id,
    },
  });
  res.json(deletedUser);
});

app.listen(5000);
