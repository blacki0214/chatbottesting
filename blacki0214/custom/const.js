module.exports = {
	DEBUG : false,

	//FACEBOOK TOKEN
	FB_APP_SECRET : 'c1e2130ace105e15a9b71c7f93f19d02',
	FB_PAGE_VERIFY_TOKEN : '123456', // đặt 1 mã bất kỳ
	FB_PAGE_ACCESS_TOKEN : 'EAAFe0bK6V8EBAO7BvgmtnbaKTzy0Q7AtCYSq5nEPbiT0kEi1LobRvQVCGlNEzH6ZAUmoHGOwzZBZBYutYsdw9wcLpQsNzRV2z7RRYlpZB4ozgIx9ugEOyfPnV6yH5cvHPbkrYw8ZAmtrx9Sgn8G3iRnyiqOEcZC5iqO2tNsftePLFLXiakC9Cu',

	//HEROKU STUFFS
	APP_NAME : 'blacki',
	HEROKU_API_KEY : '300d91d3-25e3-42b5-bcab-697f8d0c3841',
	KEEP_APP_ALWAYS_ON : false, // đổi thành true nếu đã thêm credit card vào heroku

	//MONGODB SETUP
	DB_CONFIG_URI : 'mongodb://Neo:NeoTheThird1404%5E%5E@cluster0-shard-00-00-3y5vp.gcp.mongodb.net:27017,cluster0-shard-00-01-3y5vp.gcp.mongodb.net:27017,cluster0-shard-00-02-3y5vp.gcp.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true',

	//ANALYTICS
	HAS_POST_LOG : false,
	POST_LOG_ID : '',
	POST_LOG_ENTRY1 : '',
	POST_LOG_ENTRY2 : '',

	//GOOGLE FORMS
	REPORT_LINK : "https://forms.gle/91VESvxABQzFx68A8",

	//OTHERS
	//(không bắt buộc) Cách bật tính năng hiện đã xem (seen): https://goo.gl/xjw9nP
	MAX_PEOPLE_WAITROOM : 100, //Số người tối đa trong phòng chờ
	MAX_WAIT_TIME_MINUTES : 0, //Số phút tối đa 1 người đc phép trong phòng chờ.
	                            //Đặt 0 để cho phép đợi bao lâu cũng đc

	//ADMIN UI
	ADMIN_PASSWORD : "backtracking" //password để login vào trang admin
};
