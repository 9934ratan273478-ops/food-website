import UserModel from "../model/user.model.js";
import bcrypt from "bcryptjs";

export const registerUser = async (req, res) => {
  try {
    const { fullName, email, password, gender, phone, role } = req.body;

    const ExistingUser = await UserModel.findOne({ email });

    if (ExistingUser) {
      return res.status(400).json({
        message: "User Already Exist ",
      });
    }

    if (password.length < 6) {
      return res.status(400).json({
        message: "Password Must be at least 6 character",
      });
    }

    if (phone.length < 10) {
      return res.status(400).json({
        message: "Mobile No Must be at least 10 character",
      });
    }

    const HashPassword = await bcrypt.hash(password, 10);

    const user = await UserModel.create({
      fullName,
      email,
      password: HashPassword,
      gender,
      phone,
      role,
    });

    return res.status(201).json({
      message: "User Create Successfully",
      user,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
    });
  }
};
