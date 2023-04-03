type IAppProvider = {
  socket?: Socket;
  setUserInfo?: React.Dispatch<
    React.SetStateAction<User.ILandLord | undefined>
  >;
  userInfo?: User.ILandLord;
};
