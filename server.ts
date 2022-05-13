import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const app = express();
const cors = require("cors");
app.use(express.json({ limit: "1mb" }));
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
const prisma = new PrismaClient();

// Create a user

app.post("/", async (req: Request, res: Response) => {
  const { id, colors } = req.body;

  const user = await prisma.user.create({
    data: {
      id: id,
      colors: colors,
    },
  });
  res.json(user);
});

// update user

app.put("/", async (req: Request, res: Response) => {
  const { id, colors } = req.body;
  const updatedUser = await prisma.user.update({
    where: {
      id: id,
    },
    data: {
      colors: colors,
    },
  });

  res.json(updatedUser);
});

// retreive user

app.get("/byId/:id", async (req: Request, res: Response) => {
  const id = req.params.id;
  const user = await prisma.user.findUnique({
    where: {
      id: id,
    },
  });
  res.json(user);
});

// delete user

app.delete("/:id", async (req: Request, res: Response) => {
  const id = req.params.id;
  const deletedUser = await prisma.user.delete({
    where: {
      id: id,
    },
  });
  res.json(deletedUser);
});

app.put("/upload", async (req: Request, res: Response) => {
  const { id, image } = req.body;
  const updatedUser = await prisma.user.update({
    where: {
      id: id,
    },
    data: {
      image: image,
    },
  });

  res.json(updatedUser);
});

app.listen(5000);



