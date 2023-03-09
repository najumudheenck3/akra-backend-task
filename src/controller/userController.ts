import { NextFunction, Request, Response } from "express";
import { createError } from "../error";
import User from "../model/User";

export const getAllUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const pageNumber = parseInt(req.query.page as string) || 1;
    const pageSize = parseInt(req.query.limit as string) || 50;
    const totalCount = await User.countDocuments();
    const totalPages = Math.ceil(totalCount / pageSize);
    const offset = (pageNumber - 1) * pageSize;
    const users = await User.find().skip(offset).limit(pageSize);
    const hasNextPage = pageNumber < totalPages;
    const hasPreviousPage = pageNumber > 1;

    res.status(200).json({
      users,
      totalCount,
      totalPages,
      hasNextPage,
      hasPreviousPage,
    });
  } catch (error) {
    return next(createError(500, "Internal server error"));
  }
};

export const findOneUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const query = req.query.q;
    const user = await User.find({
      $or: [
        { name: { $regex: query, $options: "i" } },
        { email: { $regex: query, $options: "i" } },
        { phone: { $regex: query, $options: "i" } },
        { address: { $regex: query, $options: "i" } },
        { postalZip: { $regex: query, $options: "i" } },
        { region: { $regex: query, $options: "i" } },
        { country: { $regex: query, $options: "i" } },
        { list: { $regex: query, $options: "i" } },
        { text: { $regex: query, $options: "i" } },
        { numberrange: { $regex: query, $options: "i" } },
        { currency: { $regex: query, $options: "i" } },
      ],
    });
    res.status(200).json(user);
  } catch (error) {
    return next(createError(500, "Internal server error"));
  }
};

export const fuzzySearch = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const query = req.query.q;
    const users = await User.find({
      $or: [
        { name: { $regex: query, $options: "i" } },
        { phone: { $regex: query, $options: "i" } },
      ],
    });
    res.status(200).json(users);
  } catch (error) {
    return next(createError(500, "Internal server error"));
  }
};
