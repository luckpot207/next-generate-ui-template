import { Request, Response } from 'express';
// import bcrypt from 'bcrypt';
// import jwt from 'jsonwebtoken';
// import { v4 as uuidv4 } from 'uuid';
import { User } from '../types/User';
import { getKnex } from '../knex';

const knex = getKnex()
console.log(knex.VERSION)
export const registerHandler = async (req: Request, res: Response) => {
  try {
    
    
    const {email}  = req.query;
    console.log(email)
    const getEmail = email?.toString()
   
    await insertUser({email: getEmail})

    res.status(200).json({ user: "ssss" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const insertUser = async (args: Partial<User>): Promise<User | null> => {
  try {
    let users = await knex<User>('users').select().where(args)
    if (users && users.length > 0) {
      return null
    }
    const [user] = await knex<User>('users').insert(
      {
        ...args,
      },
      '*',
    )
    return user
  } catch (e) {
    console.log('err on insertUser >> ', e)
    return null
  }
}
