export const loginFormatter = (response) => {
  if (response) {
    const {accessToken, profileObj: { name, email, googleId }, tokenId} = response;
    return {
        accessToken,
        tokenId,
        name,
        email,
        googleId
    };
  }
};

export default loginFormatter;