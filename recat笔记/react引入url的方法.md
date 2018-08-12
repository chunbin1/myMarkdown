#### 在utils/RecordsAPI.js
```
import axios from "axios";

const api = process.env.REACT_APP_RECORDS_API_URL

export const getAll=()=>axios.get(`${api}/api/v1/records`)
```

#### 在根目录中创建.env.development.local
```
REACT_APP_RECORDS_API_URL=https://5b62697507412d00142acf6e.mockapi.io
```
#### 在axios中使用
```
import * as RecordsAPI from '../utils/RecordsAPI'
RecordsAPI.getAll().then(...).catch(...)
```
#### 

