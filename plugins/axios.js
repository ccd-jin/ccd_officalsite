export default function ({store, redirect, app: { $axios }})  {
	// 数据访问前缀
	// $axios.defaults.baseURL = 'https://testapp.aifound.cn/infor'//测试
	$axios.defaults.baseURL = 'https://app.aifound.cn/infor' //正式
	
	// request拦截器，我这里设置了一个token，当然你可以不要
	// $axios.onRequest(config => {
		
	// })
	// $axios.onError(error => {
		
	// })
	// // response拦截器，数据返回后，你可以先在这里进行一个简单的判断
  //   	$axios.interceptors.response.use(response => {
		
	// })
}
