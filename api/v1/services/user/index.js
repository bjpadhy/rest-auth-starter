import { isUserActive, userSignup, userSignin, requestOTP, resetPassword } from "./controllers/authentication";

export const process = async (payload) => {
  try {
    let { operation, data } = payload;
    switch (operation) {
      case "IS_ACTIVE_CHECK":
        return await isUserActive(data);
      case "SIGNUP":
        return await userSignup(data);
      case "SIGNIN":
        return await userSignin(data);
      case "REQUEST_OTP":
        return await requestOTP(data);
      case "RESET_PASSWORD":
        return await resetPassword(data);
      default:
        throw new Error("Operation unavailable! Check payload format.");
    }
  } catch (e) {
    console.error(e);
  }
};
