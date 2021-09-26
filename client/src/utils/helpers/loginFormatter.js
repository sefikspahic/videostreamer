export const loginFormatter = (response) => {
  if (response) {
    const {accessToken, profileObj: { name, email }, tokenId} = response;
    return {
        accessToken,
        tokenId,
        name,
        email
    };
  }
};

export default loginFormatter;