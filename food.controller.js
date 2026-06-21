import FoodModel from "../model/food.model.js";
import cloudinary from "../config/cloudinary.js";
import streamifier from "streamifier";

export const createFood = async (req, res) => {
  try {
    const { name, description, actualPrice, discountPrice } = req.body;

    if (!req.file) {
      return res.status(400).json({
        message: "Image is required",
      });
    }

    const uploadImage = () =>
      new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
          {
            folder: "foods",
          },
          (error, result) => {
            if (error) reject(error);
            else resolve(result);
          }
        );

        streamifier.createReadStream(req.file.buffer).pipe(stream);
      });

    const result = await uploadImage();

    const food = await FoodModel.create({
      image: result.secure_url,
      name,
      description,
      actualPrice,
      discountPrice,
    });

    return res.status(201).json({
      success: true,
      message: "Food Created Successfully",
      food,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};