import { del, get, post, put } from "../utils/request";

/**
 * 首页数据
 * @returns
 */
export const homePageDataAPI = () => get("/api/v1/land_lords/home");

/**
 * 新增房源信息
 * @param data
 * @returns
 */
export const addHouseInfoAPI = (data: House.IHouse) =>
  post("/api/v1/land_lords/publish_house", data);

/**
 * 获取房源数据列表
 * @returns
 */
export const loadHousesListAPI = () => get("/api/v1/land_lords/houses");

/**
 * 根据id获取房源数据
 * @param id
 * @returns
 */
export const loadHouseByIdAPI = (id: string) =>
  get("/api/v1/land_lords/house/" + id);

/**
 * 根据id修改数据
 * @param id
 * @param data
 * @returns
 */
export const updateHouseByIdAPI = (id: string, data: House.IHouse) =>
  put("/api/v1/land_lords/house/" + id, data);

/**
 * 获取设备信息
 * @returns
 */
export const loadDevicesAPI = () => get("/api/v1/system/room_devices");

/**
 * 房源id
 * @param houseId
 * @returns
 */
export const loadRoomsInfoAPI = (houseId: string) =>
  get("/api/v1/land_lords/house/" + houseId);

/**
 * 新增房源详情
 * @param houseId
 * @param data
 * @returns
 */
export const addRoomInfoAPI = (houseId: string, data: House.IRoomInfo) =>
  post("/api/v1/land_lords/publish_house_room/" + houseId, data);

/**
 * 修改房间信息
 * @param roomId
 * @param data
 * @returns
 */
export const updateRoomInfoByIdAPI = (roomId: string, data: House.IRoomInfo) =>
  put("/api/v1/land_lords/house_room/" + roomId, data);

/**
 * 获取房源详细信息
 * @param roomId
 * @returns
 */
export const loadHouseRoomByIdAPI = (roomId: string) =>
  get("/api/v1/land_lords/house_room/" + roomId);

/**
 * 生成合同
 * @param data
 * @returns
 */
export const generateContractAPI = (data: House.IContract) =>
  post("/api/v1/land_lords/init_contract", data);

/**
 * 根据id获取合同详情
 * @param id
 * @returns
 */
export const loadContractById = (id: string) =>
  get("/api/v1/land_lords/contract/" + id);

/**
 * 终止合同
 * @param id
 * @returns
 */
export const cancelContractAPI = (id: string) =>
  del("/api/v1/land_lords/contract/" + id);

/**
 * 获取聊天列表的用户
 * @returns
 */
export const loadMsgUsersAPI = () => get("/api/v1/land_lords/messages");

/**
 * 获取和指定用户的聊天信息
 * @param userId
 * @returns
 */
export const loadCurrentUserMessagesAPI = (userId: string) =>
  get("/api/v1/land_lords/messages/" + userId);

/**
 * 获取报修数据
 * @returns
 */
export const loadRepairsInfoAPI = () => get("/api/v1/land_lords/repairs");
