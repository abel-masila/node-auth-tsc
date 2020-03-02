import { Request } from "express";
export const login = (req: Request, userId: string) => {
  req.session!.userId = userId;
};

export const isLoggedIn = (req: Request) => !!req.session!.userId;
