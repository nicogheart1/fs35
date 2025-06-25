import { Request, Response } from "express";
import Joi from "joi";
import jwt from "jsonwebtoken";
import * as dotenv from "dotenv";
import { db } from "./db";

dotenv.config();

const AuthSchema = Joi.object({
  username: Joi.string().min(4).max(30).required(),
  password: Joi.string().min(4).max(30).required(),
});

const login = async (request: Request, response: Response) => {
  try {
    const { body } = request;
    const { username, password } = body;

    const isBodyValid = AuthSchema.validate(body);
    if (!isBodyValid.error) {
      const user = await db.one(
        `
        SELECT * FROM users WHERE username=$1
        `,
        username
      );

      if (user.password === password) {
        const token = jwt.sign(
          { userId: user.userid || user.userId, username: user.username },
          process.env.SECRET_KEY as string
        );

        await db.none(
          `
            UPDATE users SET token=$2 WHERE userId=$1
            `,
          [user.userid || user.userId, token]
        );

        response
          .status(200)
          .json({ token, userId: user.userid || user.userId });
      } else {
        response.status(401).send("Credenziali errate");
      }
    } else {
      response.status(400).json(isBodyValid.error);
    }
  } catch (error) {
    response.status(500).json({ msg: error });
  }
};

const registrazione = async (request: Request, response: Response) => {
  try {
    const { body } = request;
    const { username, password } = body;

    const isBodyValid = AuthSchema.validate(body);
    if (!isBodyValid.error) {
      // verifica pre-esistenza dell'utente
      await db.none(
        `
            SELECT * FROM users WHERE username=$1
            `,
        username
      );

      const newUser = await db.one(
        `
            INSERT INTO users (username, password) VALUES ($1, $2) RETURNING userId
        `,
        [username, password]
      );

      response.status(201).json({
        userId: newUser.userid || newUser.userId,
        msg: "Utente creato!",
      });
    } else {
      response.status(400).json(isBodyValid.error);
    }
  } catch (error) {
    response.status(500).json({ msg: error });
  }
};

export { login, registrazione };
