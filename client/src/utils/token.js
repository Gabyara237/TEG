import jwtDecode from "jwt-decode";

export const hasExpiredToken = (token) => {
  const { exp } = jwtDecode(token);
  const currentData = new Date().getTime();

  if (exp <= currentData) {
    return true;
  }
  return false;
};

export const monitorTokenExpiration = (
  token,
  warningTime,
  expiryWarningCallback
) => {
  const { exp } = jwtDecode(token);
  const currentTime = new Date().getTime();
  const timeUntilExpiry = exp - currentTime;

  if (timeUntilExpiry <= warningTime) {
    expiryWarningCallback();
  } else {
    setTimeout(expiryWarningCallback, timeUntilExpiry - warningTime);
  }
};
