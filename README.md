# evenr

Your the best partner during the greatest events around the world.

## Installation

```
cp .env-example .env
npm install
```

## Usage

```
npm start                   # start server
npm run start:dashboard     # start server using webpack-dashboard
npm run build               # production build (remember to build with NODE_ENV=production)
```

# Heroku

```
heroku git:remote -a angelhack-berlin
```

# Here

```
curl \
--request \
-i \
-X POST \
-H "Content-Type: multipart/form-data" \
-F "zipfile=@sectors.wkt.zip" \
  "https://gfe.cit.api.here.com/2/layers/upload.json?layer_id=4711&app_id=i9701DoYFr1Q9HVTln0u&app_code=TZds_CkyQgkSLQFo-d-ldw"

curl \
  -X GET \
  "https://gfe.cit.api.here.com/2/search/proximity.json?app_id=i9701DoYFr1Q9HVTln0u&app_code=TZds_CkyQgkSLQFo-d-ldw&layer_ids=4711&key_attribute=NAME&proximity=52.51468080308774,13.237832765361048"

curl \
  -X GET \
  "https://gfe.cit.api.here.com/2/search/proximity.json?app_id=i9701DoYFr1Q9HVTln0u&app_code=TZds_CkyQgkSLQFo-d-ldw&layer_ids=4711&key_attribute=NAME&proximity=52.514678275966055,13.237929438491562"
```
