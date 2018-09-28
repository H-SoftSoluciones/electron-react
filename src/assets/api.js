import DEV from '../config/dev'
import PROD from '../config/prod'
const { wwwServer, storeServer } = process.env.NODE_ENV === 'development' ? DEV : PROD
const Api = {
  work: 'http://m.hunliji.com/package?ajax=1&page=2&city_id=0&property_id=0', // 获取图片的路径

  login: wwwServer + '/p/wedding/index.php/Admin/APIAuth/phone_login', // 登录

  userInfo: storeServer + '/api/store', // 用户信息

  exampData: storeServer + '/api/store/example', // 示例信息接口

  storeData: storeServer + '/api/store/data', // 下载离线数据

  getMerchant: wwwServer + '/p/wedding/index.php/Admin/APIMerchant/edit', // 获取商家信息

  getVersion: storeServer + '/api/version/upgrade', // 获取版本信息

  hasNewData: wwwServer + '/p/wedding/Admin/APIMerchant/isNew', // 查询内容是否为最新(客户端-门店展示)

  paidStatus: wwwServer + '/p/wedding/index.php/Admin/APIStore/status' //验证是否已经支付
}

export default Api
