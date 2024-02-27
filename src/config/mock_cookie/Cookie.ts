import Cookies from 'js-cookie';

const cookieName = 'cookie';

export const setupCookie = () => {
  const stringBase = 36;
  const leadingToRemove = 2;
  const mockCookie = Math.random()
    .toString(stringBase)
    .substring(leadingToRemove);
  Cookies.set(cookieName, mockCookie);
};

export const getCookie = () => {
  const currentCookie = Cookies.get(cookieName);
  return currentCookie;
};
