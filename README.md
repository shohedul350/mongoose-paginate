# mongoose-paginate
mongoose paginate using mongoose-paginate npm

create .env file then set the database url like ATLAS_URI= 

npm install cd client npm install cd ..
Backend only
npm run server
there are 2 api
one is product uploading and another is product show
post method:  http://localhost:5000/api/product/uploadproduct
body{
	"title":"",
	"description":"",
	"price":""
}
get method: http://localhost:5000/api/product/getallProduct?perPage=3&page=2
you will set custom params and get custom data like perPage=10 and page=1
