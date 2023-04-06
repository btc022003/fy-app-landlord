declare namespace House {
  type IHouse = {
    id?: string;

    /**
     * 省市区县
     */
    region: string;
    /**
     * 街道
     */
    street: string;
    /**
     * 社区
     */
    community: string;
    /**
     * 小区名字
     */
    dwelling: string;
    /**
     * 详细地址
     */
    address: string;
    /**
     * 是否整租
     */
    isWhole: boolean;
    /**
     * 图片信息，多个用,分割
     */
    images: string;

    /**
     * 房东信息
     */
    landLord?: User.ILandLord;

    /**
     * 用户信息
     */
    user?: User.IUser;

    rooms?: IRoom[];
  };

  type IDevice = {
    id?: string;
    name?: string;
  };

  type IRoomInfo = {
    /**
     * 房租
     */
    price: number;
    /**
     * 房间信息
     */
    content: string;
    /**
     * 房间照片
     */
    images: string;
    /**
     * 屋内设施，多个使用,分割
     */
    devices: string;
  };

  type IRoom = {
    id: string;
    price: number;
    images: string;
    content: string;
    isFull: boolean;
    createdAt: Date;
    updatedAt: Date;
    houseId: string;
    house: IHouse;
    roomAndDevices: IRoomAndDevice[];
    roomContracts: IRoomContract[];
  };

  type IRoomAndDevice = {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    roomId: string;
    roomDeviceId: string;
    device: IDevice;
  };
  type IDevice = {
    id: string;
    name: string;
    image: string;
    desc: string;
    remarks: string;
    isDel: boolean;
    createdAt: Date;
    updatedAt: Date;
  };

  type IRoomContract = {
    id: string;
    startTime: Date;
    endTime: Date;
    payCategory: number;
    price: number;
    remarks: string;
    isChecked: boolean;
    logDate: Date;
    createdAt: Date;
    updatedAt: Date;
    roomId: string;
    room: IRoom;
    userId: string;
    user: User.IUser;
    landLordId: string;
  };

  type IContract = {
    userMobile: string;
    roomId: string;
    price: number;
    payCategory: 1;
    remarks: string;
    startTime: string;
    endTime: string;
  };

  type INeedPayedContract = {
    id: string;
    price: number;
    isPayed: boolean;
    payCategory: number;
    payDate?: any;
    lastPayDate: Date;
    remarks: string;
    createdAt: Date;
    updatedAt: Date;
    roomContractId: string;
    roomContract: IRoomContract;
  };

  type IHome = {
    emptyRoomCount: number;
    fullRoomCount: number;
    needCheckedContract: IRoomContract[];
    needPayedContract: INeedPayedContract[];
  };

  type IMessage = {
    id: string;
    isFromUser: boolean;
    isRead: boolean;
    content: string;
    createdAt: Date;
    updatedAt: Date;
    userId: string;
    landLordId: string;
    user: User.IUser;
  };

  type IDateRoom = {
    id: string;
    dateTime: string;
    remarks: string;
    createdAt: string;
    updatedAt: string;
    userId: string;
    roomId: string;
    user: User.IUser;
    room: IRoom;
  };

  type IRepair = {
    id: string;
    askImage: string;
    remarks: string;
    isReplyed: boolean;
    replyContent?: any;
    replyImage: string;
    createdAt: string;
    updatedAt: string;
    userId: string;
    roomId?: any;
    roomContractId: string;
    roomContract: IRoomContract;
  };

  type IComplain = {
    id: string;
    askImage: string;
    remarks: string;
    isReplyed: boolean;
    replyContent?: string;
    replyImage: string;
    createdAt: string;
    updatedAt: string;
    userId: string;
    roomContractId: string;
    user: User.IUser;
    contract: IRoomContract;
  };
}
