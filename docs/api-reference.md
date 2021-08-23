# Silacak API Docs

**Base URL:** `https://silacak.kemkes.go.id`

## APIs
- [Login](#login)
- [Register](#register)
- [List all organization units](#list-all-organization-units)
- [Search puskesmas by city district code name](#search-puskesmas-by-city-district-code-name)
- [List province](#list-province)
- [List city district by province id](#list-city-district-by-province-id)
- [List unit tracer by city district sub district id](#list-unit-tracer-by-city-district-sub-district-id)
- [List puskesmas user by puskesmas name](#list-puskesmas-user-by-puskesmas-name)
- [Detail User](#detail-user)
- [Detail Confirmed Case](#detail-confirmed-case-close-contact)
- [List Confirmed Cases](#list-confirmed-cases)
- [Add Close Contact](#add-close-contact)
- [List Program](#list-program)
- [Completed Monitoring Close Contact](#completed-monitoring-close-contact)
- [Add Monitoring](#add-monitoring)
- [Check registration status](#check-registration-status)
- [Attendance confirmed case](#attendance-confirmed-case)
- [Cancelled confirmed case](#cancelled-confirmed-case)
- [List close contact relationship](#list-close-contact-relationship)
- [List Close Contact](#list-close-contact)

## Login
```yaml
headers:
  Authorization: Basic base64encode(username:password)
```

### Path

```
GET /api/me
```

### CURL

```bash
curl --location --request GET 'https://training-silacak.kemkes.go.id/api/me' \
--header 'Authorization: Basic bGF0aWhhbjpTaWxhY2FrMjAyMSU='
```

### Sample Response

```json
{
    "lastUpdated": "2021-08-09T12:34:43.640",
    "id": "BJmAkJrz62L",
    "created": "2021-03-06T22:31:00.801",
    "name": "Latihan Puskesmas",
    "birthday": "2004-02-11T00:00:00.000",
    "gender": "gender_male",
    "displayName": "Latihan Puskesmas",
    "jobTitle": "TNI AD",
    "externalAccess": false,
    "surname": "Puskesmas",
    "whatsApp": "+6285654781668",
    "lastCheckedInterpretations": "2021-08-09T11:24:53.773",
    "firstName": "Latihan",
    "phoneNumber": "6285654781668",
    "favorite": false,
    "access": {
        "read": true,
        "update": true,
        "externalize": true,
        "delete": true,
        "write": true,
        "manage": true
    },
    "userCredentials": {
        "lastUpdated": "2021-08-09T18:46:34.033",
        "id": "SWap89MJANB",
        "created": "2021-08-09T12:34:43.140",
        "name": "Latihan Puskesmas",
        "lastLogin": "2021-08-09T18:46:34.033",
        "displayName": "Latihan Puskesmas",
        "externalAuth": false,
        "externalAccess": false,
        "disabled": false,
        "twoFA": false,
        "passwordLastUpdated": "2021-08-09T12:34:43.140",
        "invitation": false,
        "selfRegistered": false,
        "favorite": false,
        "username": "latihan",
        "userInfo": {
            "id": "BJmAkJrz62L"
        },
        "access": {
            "read": true,
            "update": true,
            "externalize": true,
            "delete": true,
            "write": true,
            "manage": true
        },
        "user": {
            "displayName": "admin admin",
            "id": "axVbHvmTnoH",
            "username": "taufiqhs"
        },
        "favorites": [],
        "cogsDimensionConstraints": [],
        "catDimensionConstraints": [],
        "translations": [],
        "userGroupAccesses": [],
        "attributeValues": [],
        "userRoles": [
            {
                "id": "pFucO02cX5a"
            }
        ],
        "userAccesses": []
    },
    "settings": {},
    "favorites": [],
    "teiSearchOrganisationUnits": [
        {
            "id": "IU2HDuYpTnY"
        },
        {
            "id": "xlIBXTubNkG"
        }
    ],
    "translations": [],
    "organisationUnits": [
        {
            "id": "IU2HDuYpTnY"
        },
        {
            "id": "xlIBXTubNkG"
        }
    ],
    "dataViewOrganisationUnits": [
        {
            "id": "IU2HDuYpTnY"
        },
        {
            "id": "xlIBXTubNkG"
        }
    ],
    "userGroupAccesses": [],
    "attributeValues": [],
    "userGroups": [],
    "userAccesses": [],
    "authorities": [],
    "programs": [
        "rc6YLzBRVRT",
        "jhksh2i421K",
        "QqodHvGgDrq",
        "VvUVVDEHRPc",
        "gZrezya1BvN"
    ],
    "dataSets": []
}

```

## Register

### CURL
```bash
curl 'https://xreguser-silacak.kemkes.go.id/api/v1/user' \
  -H 'Connection: keep-alive' \
  -H 'Pragma: no-cache' \
  -H 'Cache-Control: no-cache' \
  -H 'sec-ch-ua: "Chromium";v="92", " Not A;Brand";v="99", "Google Chrome";v="92"' \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InNpbGFjYWstcmVnaXN0ZXIiLCJwYXNzd29yZCI6IlNpbGFjYWsyMDIxJSJ9.UdeRzHTJPmphbnQsDUdGr1r3huVA9STeakCXUZljsE0' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36' \
  -H 'Content-Type: application/json;charset=UTF-8' \
  -H 'Origin: https://reg-silacak.kemkes.go.id' \
  -H 'Sec-Fetch-Site: same-site' \
  -H 'Sec-Fetch-Mode: cors' \
  -H 'Sec-Fetch-Dest: empty' \
  -H 'Referer: https://reg-silacak.kemkes.go.id/' \
  -H 'Accept-Language: en-US,en;q=0.9' \
  --data-raw '{"id":"A7assORLEWP","userCredentials":{"id":"WowByiSOs6o","userInfo":{"id":"A7assORLEWP"},"cogsDimensionConstraints":[],"catDimensionConstraints":[],"username":"filipeinzagih","password":"Abcd123$","userRoles":[{"id":"pFucO02cX5a"}],"disabled":false},"surname":"inzagi","firstName":"inzagi","phoneNumber":"6281212123123","whatsApp":"+6281212123123","organisationUnits":[{"id":"xjIavKjvk64"}],"dataViewOrganisationUnits":[{"id":"xjIavKjvk64"}],"userGroups":[{"id":"JHG9qYNaKJ5"},{"id":"LNidQSYtXk5"},{"id":"otmsAgbOtqB"}],"teiSearchOrganisationUnits":[{"id":"xjIavKjvk64"}],"attributeValues":[]}' \
  --compressed
```

## List All Organization Units

List all tracer organization domicile (province, district, public health center, etc). It's hierarchically structured by organization level from 1 to 5.

### Path
```
GET /api/organisationUnits
```

### Parameter

| Name     | Type    | Description                  |
| -------- | ------- | ---------------------------- |
| paging   | boolean | enable / disabled pagination |
| fields   | string  | select one or more [field](#organization-field)     |
| pagesize | number  | total item for each page     |
| page     | number  | request page                 |

### CURL

```
curl --location --request GET 'https://training-silacak.kemkes.go.id/api/organisationUnits?paging=true&fields=displayName,parent,id,level&pageSize=10&page=10' \
--header 'Authorization: Basic bGF0aWhhbjpTaWxhY2FrMjAyMSU='
```

### Sample Response

```json
{
  "pager": {
    "page": 1,
    "pageCount": 994,
    "total": 9933,
    "pageSize": 2,
    "nextPage": "https://training-silacak.kemkes.go.id/api/organisationUnits?page=2&pageSize=10&paging=true&fields=displayName%2Cparent%2Cid%2Clevel"
  },
  "organisationUnits": [
    {
      "level": 3,
      "id": "MVPPtzjrsTp",
      "displayName": "1101 - KAB. SIMEULUE",
      "parent": {
        "id": "nBOW2TBc1mn"
      }
    },
    {
      "level": 3,
      "id": "TYbR3qLC9aX",
      "displayName": "1102 - KAB. ACEH SINGKIL",
      "parent": {
        "id": "nBOW2TBc1mn"
      }
    }
  ]
}
```

## Search Puskesmas by City,District Code/Name

### Path
```
GET /api/organisationUnits?filter=name:like:<searchName>&filter=children.level:eq:5&fields=children[id,displayName,children::isNotEmpty,path,parent]
```

### Parameter

| Name     | Type   | Description                                                                |
| -------- | ------ | -------------------------------------------------------------------------- |
| searchName   | string | city or district code name, ex: KEC. SETIA BUDI                        |
| pagesize | number | total item for each page                                                   |
| page     | number | request page                                                               |
| fields   | string  | select one or more [field](#organization-field)     |

### CURL

```
curl --location --request GET 'https://training-silacak.kemkes.go.id/api/organisationUnits?filter=name:like:SETIA &fields=children[id,displayName,children::isNotEmpty,path,parent]&filter=children.level:eq:5' \
--header 'Authorization: Basic bGF0aWhhbjpTaWxhY2FrMjAyMSU='
```

### Sample Response

```json
{
  "pager": {
    "page": 1,
    "pageCount": 1,
    "total": 2,
    "pageSize": 10
  },
  "organisationUnits": [
    {
      "children": [
        {
          "id": "KECAM317409",
          "path": "/AWDfATa8TT1/pE2p1IwDLFD/CWKkrIzNOhX/KECAM317409",
          "children": true,
          "displayName": "KEC. JAGAKARSA",
          "parent": {
            "id": "CWKkrIzNOhX"
          }
        }
      ]
    }
  ]
}
```

## List Province

### Path
```
GET /api/organisationUnits?fields=id,displayName,children::isNotEmpty,path&filter=level:eq:2
```

### Parameter

| Name     | Type   | Description                                                                |
| -------- | ------ | -------------------------------------------------------------------------- |
| pagesize | number | total item for each page                                                   |
| page     | number | request page                                                               |
| fields   | string  | select one or more [field](#organization-field)     |

### CURL

```
curl --location --request GET 'https://training-silacak.kemkes.go.id/api/organisationUnits?fields=id,displayName,children::isNotEmpty,path&filter=level:eq:2' \
--header 'Authorization: Basic bGF0aWhhbjpTaWxhY2FrMjAyMSU='
```

### Sample Response

```json
{
    "pager": {
        "page": 1,
        "pageCount": 1,
        "total": 35,
        "pageSize": 50
    },
    "organisationUnits": [
        {
            "id": "nBOW2TBc1mn",
            "path": "/AWDfATa8TT1/nBOW2TBc1mn",
            "children": true,
            "displayName": "11 - ACEH"
        },
        {
            "id": "CmCEy35Qe4I",
            "path": "/AWDfATa8TT1/CmCEy35Qe4I",
            "children": true,
            "displayName": "12 - SUMATERA UTARA"
        }
    ]
}
```

## List City/District By Province Id

### Path
```
GET /api/organisationUnits?filter=parent.id:eq:<provinceId>&fields=id,displayName,children::isNotEmpty,path&filter=level:eq:3
```

### Parameter

| Name     | Type   | Description                                                                |
| -------- | ------ | -------------------------------------------------------------------------- |
| provinceId | string | province (organization) id                                                  |
| pagesize | number | total item for each page                                                   |
| page     | number | request page                                                               |
| fields   | string  | select one or more [field](#organization-field)     |

### CURL

```
curl --location --request GET 'https://training-silacak.kemkes.go.idfilter=parent.id:eq:CmCEy35Qe4I&fields=id,displayName,children::isNotEmpty,path&filter=level:eq:3' \
--header 'Authorization: Basic bGF0aWhhbjpTaWxhY2FrMjAyMSU='
```

### Sample Response

```json
{
    "pager": {
        "page": 1,
        "pageCount": 1,
        "total": 35,
        "pageSize": 50
    },
    "organisationUnits": [
        {
            "id": "TVEEV2vBRA2",
            "path": "/AWDfATa8TT1/CmCEy35Qe4I/TVEEV2vBRA2",
            "children": true,
            "displayName": "1201 - KAB. NIAS"
        },
        {
            "id": "F1I4eCi0oCa",
            "path": "/AWDfATa8TT1/CmCEy35Qe4I/F1I4eCi0oCa",
            "children": true,
            "displayName": "1202 - KAB. MANDAILING NATAL"
        },
    ]
}
```

## List Unit Tracer By City/District/Sub District Id

### Path
```
GET /api/organisationUnits?filter=parent.id:eq:<parentId>&fields=id,level,displayName,children[id,displayName,level],path
```

### Parameter

| Name     | Type   | Description                                                                |
| -------- | ------ | -------------------------------------------------------------------------- |
| parentId | string | City/District/Sub District organization id                                 |
| pagesize | number | total item for each page                                                   |
| page     | number | request page                                                               |
| fields   | string  | select one or more [field](#organization-field)     |

### CURL

```
curl --location --request GET 'https://training-silacak.kemkes.go.id/api/organisationUnits?filter=parent.id:eq:TVEEV2vBRA2&fields=id,level,displayName,children[id,displayName,level],path' \
--header 'Authorization: Basic bGF0aWhhbjpTaWxhY2FrMjAyMSU='
```

### Example HTTP Response

```json
{
    "pager": {
        "page": 1,
        "pageCount": 1,
        "total": 35,
        "pageSize": 50
    },
    "organisationUnits": [
         {
            "level": 4,
            "id": "KECAM120411",
            "path": "/AWDfATa8TT1/CmCEy35Qe4I/TVEEV2vBRA2/KECAM120411",
            "displayName": "KEC. BAWOLATO",
            "children": [
                {
                    "level": 5,
                    "id": "DvCwK4AB9nY",
                    "displayName": "PKM. BAWOLATO"
                }
            ]
        },
        {
            "level": 4,
            "id": "KECAM120421",
            "path": "/AWDfATa8TT1/CmCEy35Qe4I/TVEEV2vBRA2/KECAM120421",
            "displayName": "KEC. BOTOMUZOI",
            "children": [
                {
                    "level": 5,
                    "id": "mcjGRcb84wb",
                    "displayName": "PKM. BOTOMUZOI"
                }
            ]
        },
    ]
}
```


## List Unit Tracing User by Puskesmas Name

### Path
```
GET /api/users?filter=organisationUnits.name:like:<pkmName>&fields=id,name,displayName,userCredentials
```

### Parameter

| Name                        | Type   | Description                                       |
| --------------------------- | ------ | ------------------------------------------------- |
| pkmName | string | filter by puskesmas name                          |
| fields                      | string | select one or more [field](#user-field) to return possible value |
| pagesize                    | number | total item for each page                          |
| page                        | number | request page                                      |

### CURL

```
curl --location --request GET 'https://training-silacak.kemkes.go.id/api/users?organisationUnits.name:like:LATIHAN&fields=id,name,displayName,userCredentials&pageSize=1' \
--header 'Authorization: Basic bGF0aWhhbjpTaWxhY2FrMjAyMSU='
```

### Sample Response

```json
{
  "pager": {
    "page": 1,
    "pageCount": 54,
    "total": 54,
    "pageSize": 1,
    "nextPage": "https://training-silacak.kemkes.go.id/api/users.json?page=2&pageSize=1&ou%22%3Alike%22%3Apadurenan=&fields=id%2Cname%2CdisplayName%2CuserCredentials"
  },
  "users": [
    {
      "name": "Aa Sofyan",
      "id": "nBq07RtAYVw",
      "displayName": "Aa Sofyan",
      "userCredentials": {
        "lastUpdated": "2021-07-30T21:08:24.599",
        "id": "TyupukrqpnZ",
        "created": "2021-07-30T21:08:24.599",
        "name": "Aa Sofyan",
        "displayName": "Aa Sofyan",
        "externalAuth": false,
        "externalAccess": false,
        "disabled": false,
        "twoFA": false,
        "passwordLastUpdated": "2021-07-30T21:08:24.978",
        "invitation": false,
        "selfRegistered": false,
        "favorite": false,
        "username": "sofyanaa544@gmail.com",
        "userInfo": {
          "id": "nBq07RtAYVw"
        },
        "access": {
          "read": true,
          "update": true,
          "externalize": true,
          "delete": true,
          "write": true,
          "manage": true
        },
        "lastUpdatedBy": {
          "displayName": "Latihan Puskesmas",
          "id": "BJmAkJrz62L",
          "username": "latihan"
        },
        "user": {
          "displayName": "Latihan Puskesmas",
          "id": "BJmAkJrz62L",
          "username": "latihan"
        },
        "favorites": [],
        "cogsDimensionConstraints": [],
        "catDimensionConstraints": [],
        "translations": [],
        "userGroupAccesses": [],
        "attributeValues": [],
        "userRoles": [
          {
            "id": "pFucO02cX5a"
          }
        ],
        "userAccesses": []
      }
    }
  ]
}
```

## Detail User

### Path
```
GET /api/users/<userId>?fields=*
```

### Parameter

| Name   | Type   | Description                                       |
| ------ | ------ | ------------------------------------------------- |
| userId | string | user id                                           |
| fields | string | select one or more [field](#user-field) to return possible value |

### CURL

```bash
curl --location --request GET 'https://training-silacak.kemkes.go.id/api/users/BJmAkJrz62L.json?fields=%3Aowner%2Caccess%2CdisplayName%2CuserGroups%2CorganisationUnits%5Bid%2CdisplayName%2Cpath%5D%2CdataViewOrganisationUnits%5Bid%2CdisplayName%2Cpath%5D%2CuserCredentials%5Bid%2Cusername%2ClastLogin%2CexternalAuth%2CuserRoles%5Bid%2CdisplayName%5D%2CcogsDimensionConstraints%5Bid%2CdisplayName%2CdimensionType%5D%2CcatDimensionConstraints%5Bid%2CdisplayName%2CdimensionType%5D%2CopenId%2CldapId%5D%2CteiSearchOrganisationUnits%5Bid%2Cpath%5D%2CwhatsApp%2CfacebookMessenger%2Cskype%2Ctelegram%2Ctwitter' \
--header 'Authorization: Basic bGF0aWhhbjpTaWxhY2FrMjAyMSU='
```

### Sample Response

```json
{
  "lastUpdated": "2021-08-09T12:34:43.640",
  "id": "BJmAkJrz62L",
  "created": "2021-03-06T22:31:00.801",
  "birthday": "2004-02-11T00:00:00.000",
  "gender": "gender_male",
  "displayName": "Latihan Puskesmas",
  "jobTitle": "TNI AD",
  "surname": "Puskesmas",
  "whatsApp": "+6285654781668",
  "lastCheckedInterpretations": "2021-08-09T11:24:53.773",
  "firstName": "Latihan",
  "phoneNumber": "6285654781668",
  "access": {
    "read": true,
    "update": true,
    "externalize": true,
    "delete": true,
    "write": true,
    "manage": true
  },
  "userCredentials": {
    "id": "SWap89MJANB",
    "lastLogin": "2021-08-09T22:42:27.607",
    "externalAuth": false,
    "username": "latihan",
    "userRoles": [
      {
        "id": "pFucO02cX5a",
        "displayName": "Facility tracker"
      }
    ],
    "cogsDimensionConstraints": [],
    "catDimensionConstraints": []
  },
  "teiSearchOrganisationUnits": [
    {
      "id": "IU2HDuYpTnY",
      "path": "/AWDfATa8TT1/oF6ONQfGuDe/mvSKjNDpixY/tbCAVLlmXcJ/IU2HDuYpTnY"
    },
    {
      "id": "xlIBXTubNkG",
      "path": "/AWDfATa8TT1/oF6ONQfGuDe/mvSKjNDpixY/tbCAVLlmXcJ/xlIBXTubNkG"
    }
  ],
  "organisationUnits": [
    {
      "id": "IU2HDuYpTnY",
      "path": "/AWDfATa8TT1/oF6ONQfGuDe/mvSKjNDpixY/tbCAVLlmXcJ/IU2HDuYpTnY",
      "displayName": "99010101 - PUSKEMAS LATIHAN"
    },
    {
      "id": "xlIBXTubNkG",
      "path": "/AWDfATa8TT1/oF6ONQfGuDe/mvSKjNDpixY/tbCAVLlmXcJ/xlIBXTubNkG",
      "displayName": "PKM INDUK"
    }
  ],
  "dataViewOrganisationUnits": [
    {
      "id": "IU2HDuYpTnY",
      "path": "/AWDfATa8TT1/oF6ONQfGuDe/mvSKjNDpixY/tbCAVLlmXcJ/IU2HDuYpTnY",
      "displayName": "99010101 - PUSKEMAS LATIHAN"
    },
    {
      "id": "xlIBXTubNkG",
      "path": "/AWDfATa8TT1/oF6ONQfGuDe/mvSKjNDpixY/tbCAVLlmXcJ/xlIBXTubNkG",
      "displayName": "PKM INDUK"
    }
  ],
  "attributeValues": [],
  "userGroups": []
}
```


## Detail Confirmed Case / Close Contact
### CURL
```bash
curl --location --request GET 'https://training-silacak.kemkes.go.id/api/trackedEntityInstances/Y8pSX7O6Uy8.json?program=gZrezya1BvN&ou=xtpPPC95Tjl&attribute=vyWUq8BAnwg,GdwLfGObIRT,taFkwTiKFyR,xu1Ukzi0PMJ,fk5drl1hTvc,quJD4An7Kmi,mHwPpgxFDge,e25qAod3KTg,YlOp8W4FYRH&fields=*&order=lastUpdated:DESC' \
--header 'Connection: keep-alive' \
--header 'sec-ch-ua: "Chromium";v="92", " Not A;Brand";v="99", "Google Chrome";v="92"' \
--header 'Accept: application/json' \
--header 'DNT: 1' \
--header 'Authorization: Basic bGF0aWhhbjpTaWxhY2FrMjAyMSU=' \
--header 'sec-ch-ua-mobile: ?0' \
--header 'User-Agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.107 Safari/537.36' \
--header 'Origin: http://localhost:3000' \
--header 'Sec-Fetch-Site: cross-site' \
--header 'Sec-Fetch-Mode: cors' \
--header 'Sec-Fetch-Dest: empty' \
--header 'Referer: http://localhost:3000/' \
--header 'Accept-Language: en-US,en;q=0.9,id-ID;q=0.8,id;q=0.7' \
--header 'If-None-Match: W/"0194deb812d0ba269b0947468eb2870b3"' \
--header 'Cookie: BIGipServerpool_silacakprod_dev_http=3291588800.47873.0000; JSESSIONID=E916534BCBAF3F1CC2BD7EEC2CE0A968'
```
## List Confirmed Cases

### Path
```
GET /api/trackedEntityInstances?program=<programId>&fields=*&pageSize=1&ou=<orgId>&programStatus=<status>&programStartDate=<programStartDate>&order=lastUpdated:DESC&programEndDate=<programEndDate>
```

### Parameter

| Name             | Type   | Description                                       |
| ---------------- | ------ | ------------------------------------------------- |
| program          | string | program id                                        |
| fields           | string | select one or more [field](#tracked-entity) to return possible value |
| orgId            | string | organization id                                   |
| programStatus    | string | Enrollment status (ACTIVE, CANCELLED, COMPLETED)   |
| programStartDate? | string | Enrollment start date format yyyy-mm-dd              |
| order            | string | order by fields example : lasUpdated:DESC         |
| programEndDate?   | string | Enrollment end date format yyyy-mm-dd                |


### CURL

```bash
curl --location --request GET 'https://training-silacak.kemkes.go.id/api/trackedEntityInstances.json?program=gZrezya1BvN&fields=*&pageSize=1&ou=IU2HDuYpTnY&programStatus=ACTIVE&programStartDate=2021-01-01&order=lastUpdated:DESC&programEndDate=2021-07-31' \
--header 'Authorization: Basic bGF0aWhhbjpTaWxhY2FrMjAyMSU='
```

### Sample Response

```json
{
  "trackedEntityInstances": [
    {
      "lastUpdated": "2021-04-23T11:29:51.971",
      "created": "2021-02-11T09:56:12.195",
      "trackedEntityInstance": "I9VcnElirev",
      "enrollments": [
                {
                    "storedBy": "latihan",
                    "created": "2021-07-31T00:35:53.896",
                    "orgUnit": "IU2HDuYpTnY",
                    "createdAtClient": "2021-07-31T00:35:53.901",
                    "program": "gZrezya1BvN",
                    "trackedEntityInstance": "Zohhm7Nti0K",
                    "enrollment": "Hgiqz6FBr5s",
                    "lastUpdated": "2021-07-31T00:36:09.853",
                    "trackedEntityType": "bHRcIH36xIk",
                    "lastUpdatedAtClient": "2021-07-31T00:36:09.853",
                    "orgUnitName": "99010101 - PUSKEMAS LATIHAN",
                    "enrollmentDate": "2021-07-31T00:35:53.896",
                    "deleted": false,
                    "incidentDate": "2021-07-31T00:00:00.000",
                    "status": "ACTIVE",
                    "notes": [],
                    "relationships": [],
                    "attributes": [],
                    "events": [
                        {
                            "storedBy": "latihan",
                            "dueDate": "2021-07-31T00:35:53.964",
                            "program": "gZrezya1BvN",
                            "event": "GKFEH3Up5JU",
                            "programStage": "f4fobgMaOCr",
                            "orgUnit": "IU2HDuYpTnY",
                            "trackedEntityInstance": "Zohhm7Nti0K",
                            "enrollment": "Hgiqz6FBr5s",
                            "enrollmentStatus": "ACTIVE",
                            "status": "ACTIVE",
                            "orgUnitName": "99010101 - PUSKEMAS LATIHAN",
                            "eventDate": "2021-07-31T00:00:00.000",
                            "attributeCategoryOptions": "xYerKDKCefk",
                            "lastUpdated": "2021-07-31T00:36:09.867",
                            "created": "2021-07-31T00:35:53.964",
                            "deleted": false,
                            "attributeOptionCombo": "HllvX50cXC0",
                            "dataValues": [
                                {
                                    "lastUpdated": "2021-07-31T00:36:09.863",
                                    "created": "2021-07-31T00:35:53.960",
                                    "dataElement": "YDFddaT2uDO",
                                    "value": "Ya",
                                    "providedElsewhere": false
                                },
                                {
                                    "lastUpdated": "2021-07-31T00:36:09.863",
                                    "created": "2021-07-31T00:35:53.960",
                                    "dataElement": "A9htpJFLuIr",
                                    "value": "Kasus Konfirmasi",
                                    "providedElsewhere": false
                                }
                            ],
                            "notes": [],
                            "relationships": []
                        }
                    ]
                }
      ],
      "attributes": [
                {
                    "lastUpdated": "2021-04-22T00:00:00.000",
                    "storedBy": "latihan",
                    "displayName": "Alamat domisili",
                    "created": "2021-02-11T00:00:00.000",
                    "valueType": "LONG_TEXT",
                    "attribute": "e25qAod3KTg",
                    "value": "Jorong tengah"
                },
                {
                    "lastUpdated": "2021-04-22T00:00:00.000",
                    "storedBy": "latihan",
                    "displayName": "Alamat KTP",
                    "created": "2021-04-22T00:00:00.000",
                    "valueType": "LONG_TEXT",
                    "attribute": "quJD4An7Kmi",
                    "value": "Jorong tengah nagari situjuah batur kecamatan simona kab 50 kota"
                },
                {
                    "lastUpdated": "2021-04-05T00:00:00.000",
                    "storedBy": "latihan",
                    "code": "patinfo_sex",
                    "displayName": "Jenis Kelamin",
                    "created": "2021-02-11T00:00:00.000",
                    "valueType": "TEXT",
                    "attribute": "taFkwTiKFyR",
                    "value": "Laki - Laki"
                },
                {
                    "lastUpdated": "2021-04-05T00:00:00.000",
                    "storedBy": "pkm.latihan",
                    "code": "first_name",
                    "displayName": "Nama",
                    "created": "2021-02-11T00:00:00.000",
                    "valueType": "TEXT",
                    "attribute": "GdwLfGObIRT",
                    "value": "Bobo ko"
                },
                {
                    "lastUpdated": "2021-03-28T00:00:00.000",
                    "storedBy": "latihan",
                    "code": "patinfo_ID",
                    "displayName": "Nomor NIK",
                    "created": "2021-03-28T00:00:00.000",
                    "valueType": "TEXT",
                    "attribute": "mHwPpgxFDge",
                    "value": "7637827651723456"
                },
                {
                    "lastUpdated": "2021-04-22T00:00:00.000",
                    "storedBy": "latihan",
                    "code": "phone_local",
                    "displayName": "Nomor Telephone",
                    "created": "2021-03-28T00:00:00.000",
                    "valueType": "PHONE_NUMBER",
                    "attribute": "YlOp8W4FYRH",
                    "value": "6285273516238"
                },
                {
                    "lastUpdated": "2021-04-05T00:00:00.000",
                    "storedBy": "latihan",
                    "code": "patinfo_ageonsetunit",
                    "displayName": "Tanggal lahir",
                    "created": "2021-04-05T00:00:00.000",
                    "valueType": "DATE",
                    "attribute": "xu1Ukzi0PMJ",
                    "value": "1994-04-11"
                },
                {
                    "lastUpdated": "2021-04-05T00:00:00.000",
                    "storedBy": "pkm.latihan",
                    "code": "patinfo_ageonset",
                    "displayName": "Umur",
                    "created": "2021-02-11T00:00:00.000",
                    "valueType": "INTEGER_ZERO_OR_POSITIVE",
                    "attribute": "fk5drl1hTvc",
                    "value": "26"
                }
            ]
    }
  ]
}
```

### List Close Contact

since it using same tracketd entity instance, we can also get close contact data list, but with different params

### Path
```
GET /api/trackedEntityInstances.json?program=<programId>&fields=created,lastUpdated,trackedEntityInstance,attributes[attribute,value],enrollments[program,followup,status]&ou=IU2HDuYpTnY&attribute=GdwLfGObIRT,taFkwTiKFyR,xu1Ukzi0PMJ,fk5drl1hTvc,YlOp8W4FYRH,mHwPpgxFDge&programStatus=ACTIVE&order=lastUpdated:DESC&page=1&pageSize=20&programStartDate=<programStartDate>
```

### CURL

```bash
curl --location -g --request GET 'https://training-silacak.kemkes.go.id/api/trackedEntityInstances?program=QqodHvGgDrq&fields=created,lastUpdated,trackedEntityInstance,attributes[attribute,value],enrollments[program,followup,status]&ou=IU2HDuYpTnY&attribute=GdwLfGObIRT,taFkwTiKFyR,xu1Ukzi0PMJ,fk5drl1hTvc,YlOp8W4FYRH,mHwPpgxFDge&programStatus=ACTIVE&order=lastUpdated:DESC&page=1&pageSize=20&programStartDate=2021-06-26' \
--header 'Authorization: Basic bGF0aWhhbjpTaWxhY2FrMjAyMSU=' \
--header 'Cookie: BIGipServerpool_silacakprod_training_http=3945834688.47873.0000; SESSION=YjlmNjdhOTEtZmE3Ny00NTcxLWExYzYtMTU1OWQ2ODkwY2Fj'
```

### Sample Response

```json
{
  "trackedEntityInstances": [
    {
      "lastUpdated": "2021-06-26T04:50:32.622",
      "created": "2021-06-26T04:50:32.622",
      "trackedEntityInstance": "xDUzIA5Ndet",
      "attributes": [
        {
          "attribute": "e25qAod3KTg",
          "value": "Jl. H.ripuh no 2"
        },
        {
          "attribute": "quJD4An7Kmi",
          "value": "Jl. H.ripuh no 2"
        },
        {
          "attribute": "taFkwTiKFyR",
          "value": "Laki - Laki"
        },
        {
          "attribute": "GdwLfGObIRT",
          "value": "Rizky Ramadhani Efendy"
        },
        {
          "attribute": "mHwPpgxFDge",
          "value": "3174072302940005"
        },
        {
          "attribute": "YlOp8W4FYRH",
          "value": "6281291268739"
        },
        {
          "attribute": "vyWUq8BAnwg",
          "value": "CONTACT0000025950"
        },
        {
          "attribute": "fk5drl1hTvc",
          "value": "17"
        }
      ],
      "enrollments": [
        {
          "program": "QqodHvGgDrq",
          "status": "ACTIVE"
        }
      ]
    }
  ]
}
```

## Add Close Contact

### Path
```
POST /api/trackedEntityInstances?strategy=CREATE_AND_UPDATE
```

### CURL

```bash
curl --location --request POST 'https://training-silacak.kemkes.go.id/api/trackedEntityInstances' \
--header 'Connection: keep-alive' \
--header 'sec-ch-ua: "Chromium";v="92", " Not A;Brand";v="99", "Google Chrome";v="92"' \
--header 'Accept: application/json' \
--header 'DNT: 1' \
--header 'Authorization: Basic c3lzdGVtLmtvdGEuc3VyYWJheWE6U2lsYWNhazIwMjEl' \
--header 'sec-ch-ua-mobile: ?0' \
--header 'User-Agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.107 Safari/537.36' \
--header 'Content-Type: application/json' \
--header 'Origin: http://localhost:3000' \
--header 'Sec-Fetch-Site: cross-site' \
--header 'Sec-Fetch-Mode: cors' \
--header 'Sec-Fetch-Dest: empty' \
--header 'Referer: http://localhost:3000/' \
--header 'Accept-Language: en-US,en;q=0.9,id-ID;q=0.8,id;q=0.7' \
--header 'Cookie: BIGipServerpool_silacakprod_dev_http=3291588800.47873.0000; JSESSIONID=E916534BCBAF3F1CC2BD7EEC2CE0A968' \
--data-raw '{
    "orgUnit": "QnPAyUioxdY",
    "trackedEntityType": "bHRcIH36xIk",
    "attributes": [
        {
            "attribute": "GdwLfGObIRT",
            "value": "myaww"
        },
        {
            "attribute": "YlOp8W4FYRH",
            "value": "6281111111111111"
        },
        {
            "attribute": "e25qAod3KTg",
            "value": "hotel"
        },
        {
            "attribute": "fk5drl1hTvc",
            "value": 2
        },
        {
            "attribute": "mHwPpgxFDge",
            "value": "3777777777777777"
        },
        {
            "attribute": "quJD4An7Kmi",
            "value": "hotel"
        },
        {
            "attribute": "taFkwTiKFyR",
            "value": "Perempuan"
        },
        {
            "attribute": "xu1Ukzi0PMJ",
            "value": "2018-08-14"
        }
    ],
    "enrollments": [
        {
            "enrollmentdate": "2021-08-12",
            "incidentDate": "2021-08-12",
            "orgUnit": "QnPAyUioxdY",
            "orgUnitName": "PKM. ASEMROWO",
            "program": "QqodHvGgDrq",
            "events": [
                {
                    "orgUnit": "QnPAyUioxdY",
                    "orgUnitName": "PKM. ASEMROWO",
                    "program": "QqodHvGgDrq",
                    "programStage": "ZlWRfD7ecZR",
                    "eventDate": "2021-08-12",
                    "dataValues": [
                        {
                            "dataElement": "uZ3ZlBthRqD",
                            "value": "Ya"
                        },
                        {
                            "dataElement": "CcijMqQR3tM",
                            "value": "2021-08-12"
                        },
                        {
                            "dataElement": "iZ4G8QnSTqB",
                            "value": "Pasangan"
                        },
                        {
                            "dataElement": "WukxT4rucsP",
                            "value": null
                        },
                        {
                            "dataElement": "Y6Iseq8vUlU",
                            "value": "Berada dalam jarak 1 meter dari kasus COVID-19 selama> 15 menit"
                        }
                    ]
                }
            ]
        }
    ]
}'
```

### Sample Body

```json
{
    "orgUnit": "QnPAyUioxdY",
    "trackedEntityType": "bHRcIH36xIk",
    "attributes": [
        {
            "attribute": "GdwLfGObIRT",
            "value": "myaww"
        },
        {
            "attribute": "YlOp8W4FYRH",
            "value": "6281111111111111"
        },
        {
            "attribute": "e25qAod3KTg",
            "value": "hotel"
        },
        {
            "attribute": "fk5drl1hTvc",
            "value": 2
        },
        {
            "attribute": "mHwPpgxFDge",
            "value": "3777777777777777"
        },
        {
            "attribute": "quJD4An7Kmi",
            "value": "hotel"
        },
        {
            "attribute": "taFkwTiKFyR",
            "value": "Perempuan"
        },
        {
            "attribute": "xu1Ukzi0PMJ",
            "value": "2018-08-14"
        }
    ],
    "enrollments": [
        {
            "enrollmentdate": "2021-08-12",
            "incidentDate": "2021-08-12",
            "orgUnit": "QnPAyUioxdY",
            "orgUnitName": "PKM. ASEMROWO",
            "program": "QqodHvGgDrq",
            "events": [
                {
                    "orgUnit": "QnPAyUioxdY",
                    "orgUnitName": "PKM. ASEMROWO",
                    "program": "QqodHvGgDrq",
                    "programStage": "ZlWRfD7ecZR",
                    "eventDate": "2021-08-12",
                    "dataValues": [
                        {
                            "dataElement": "uZ3ZlBthRqD",
                            "value": "Ya"
                        },
                        {
                            "dataElement": "CcijMqQR3tM",
                            "value": "2021-08-12"
                        },
                        {
                            "dataElement": "iZ4G8QnSTqB",
                            "value": "Pasangan"
                        },
                        {
                            "dataElement": "WukxT4rucsP",
                            "value": null
                        },
                        {
                            "dataElement": "Y6Iseq8vUlU",
                            "value": "Berada dalam jarak 1 meter dari kasus COVID-19 selama> 15 menit"
                        }
                    ]
                }
            ]
        }
    ]
}
```

## List Program
### Path
```
GET /api/programs.json?paging=false&fields=id,name,code
```
### CURL

```bash
curl --location --request GET 'https://training-silacak.kemkes.go.id/api/programs?paging=false&fields=id,name,code' \
--header 'Authorization: Basic bGF0aWhhbjpTaWxhY2FrMjAyMSU=' \
--header 'Cookie: BIGipServerpool_silacakprod_training_http=3945834688.47873.0000; SESSION=YmQ5NDY1MTAtN2YxZi00ZDI4LTgyODEtYzVjNzFiYTY3N2Y3'
```

### Sample Response

```json
{
  "programs": [
    {
      "code": "COVID-19 Kasus",
      "name": "COVID-19 Kasus",
      "id": "gZrezya1BvN"
    },
    {
      "code": "COVID-19 Kasus Kontak dan Pemantauan ",
      "name": "COVID-19 Kasus Kontak dan Pemantauan <Isolasi dan Karantina>",
      "id": "QqodHvGgDrq"
    }
  ]
}
```

## Completed Monitoring Close Contact

### CURL

```bash
curl 'https://training-silacak.kemkes.go.id/api/enrollments/jR5bfdPAuAB/completed' \
  -X 'PUT' \
  -H 'Connection: keep-alive' \
  -H 'Content-Length: 0' \
  -H 'sec-ch-ua: "Chromium";v="92", " Not A;Brand";v="99", "Google Chrome";v="92"' \
  -H 'Accept: application/json' \
  -H 'DNT: 1' \
  -H 'Authorization: Basic YWRtaW4tbmlrOkFkbWluLW5pazIwMjEl' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'User-Agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.107 Safari/537.36' \
  -H 'Origin: https://training-silacak.kemkes.go.id' \
  -H 'Sec-Fetch-Site: same-origin' \
  -H 'Sec-Fetch-Mode: cors' \
  -H 'Sec-Fetch-Dest: empty' \
  -H 'Referer: https://training-silacak.kemkes.go.id/2.7/' \
  -H 'Accept-Language: en-US,en;q=0.9,id-ID;q=0.8,id;q=0.7' \
  -H 'Cookie: _ga=GA1.3.247011344.1628230560; BIGipServerpool_silacakprod_training_http=3945834688.47873.0000; _gid=GA1.3.1590257128.1628572521; SESSION=OGZkNTVjNWEtYTgxZS00NTdkLThkMDYtMzFlZTFkZjA4NTAy' \
  --compressed
```

## Add Monitoring

### CURL

```bash
curl 'https://training-silacak.kemkes.go.id/api/events?strategy=CREATE_AND_UPDATE' \
  -H 'Connection: keep-alive' \
  -H 'sec-ch-ua: "Chromium";v="92", " Not A;Brand";v="99", "Google Chrome";v="92"' \
  -H 'Accept: application/json' \
  -H 'DNT: 1' \
  -H 'Authorization: Basic YWRtaW4tbmlrOkFkbWluLW5pazIwMjEl' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'User-Agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.107 Safari/537.36' \
  -H 'Content-Type: application/json;charset=UTF-8' \
  -H 'Origin: https://training-silacak.kemkes.go.id' \
  -H 'Sec-Fetch-Site: same-origin' \
  -H 'Sec-Fetch-Mode: cors' \
  -H 'Sec-Fetch-Dest: empty' \
  -H 'Referer: https://training-silacak.kemkes.go.id/2.7/' \
  -H 'Accept-Language: en-US,en;q=0.9,id-ID;q=0.8,id;q=0.7' \
  -H 'Cookie: _ga=GA1.3.247011344.1628230560; BIGipServerpool_silacakprod_training_http=3945834688.47873.0000; _gid=GA1.3.1590257128.1628572521; SESSION=OGZkNTVjNWEtYTgxZS00NTdkLThkMDYtMzFlZTFkZjA4NTAy' \
  --data-raw '{"program":"QqodHvGgDrq","trackedEntityInstance":"ZnSok4EkSwS","orgUnit":"xtpPPC95Tjl","eventDate":"2021-07-30","programStage":"HMGxPVY6gbi","status":"COMPLETED","storedBy":"admin-nik","event":null,"dataValues":[{"dataElement":"cL5fWOyf8AW","value":"Karantina mandiri dirumah"},{"dataElement":"uMVVgATDD88","value":"Bergejala (jadi suspek)"},{"dataElement":"I7QCcAQA3XG","value":"admin-nik"},{"dataElement":"aAxFXF8Gji5","value":"2021-08-10"},{"dataElement":"bdRVchsLoMA","value":"Tidak"},{"dataElement":"VoF0wVIsXmN","value":"Tidak"},{"dataElement":"IbfyBeB9F9s","value":"Tidak"},{"dataElement":"qoTWgXxRuUh","value":"Tidak"},{"dataElement":"mEyQpbkLcBD","value":"Tidak"},{"dataElement":"a6aHeeKEneO","value":"Tidak"},{"dataElement":"Xuc9yJiWQLv","value":"Tidak"},{"dataElement":"dLHoaciHZil","value":"Tidak"},{"dataElement":"PYYYkziHZRg","value":"Tidak"},{"dataElement":"x1r6FwoxUtf","value":"Tidak"},{"dataElement":"xjakRmQzW3J","value":"Tidak"},{"dataElement":"uCRZ9oyov85","value":"Tidak"},{"dataElement":"CbH5mct7les","value":"Tidak"},{"dataElement":"XfcxPehRoHB"},{"dataElement":"sqMSOTAWOWa","value":1}]}' \
  --compressed
```

## Check Registration Status

### Curl

```bash
curl 'https://training-silacak.kemkes.go.id/api/users?fields=displayName%2Cid%2Caccess%2CuserCredentials%5Busername%2Cdisabled%2ClastLogin%2CtwoFA%5D%2CteiSearchOrganisationUnits%5Bid%2Cpath%5D&filter=userCredentials.username:eq:<username>&fields=id' \
  -H 'authority: silacak.kemkes.go.id' \
  -H 'pragma: no-cache' \
  -H 'cache-control: no-cache' \
  -H 'sec-ch-ua: "Chromium";v="92", " Not A;Brand";v="99", "Google Chrome";v="92"' \
  -H 'accept: application/json, text/plain, */*' \
  -H 'authorization: Basic YWRtaW4tcmVnaXN0ZXI6S2Vta2VzMjAyMSUl' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36' \
  -H 'origin: https://reg-silacak.kemkes.go.id' \
  -H 'sec-fetch-site: same-site' \
  -H 'sec-fetch-mode: cors' \
  -H 'sec-fetch-dest: empty' \
  -H 'referer: https://reg-silacak.kemkes.go.id/' \
  -H 'accept-language: en-US,en;q=0.9' \
  --compressed
```

### Sample Response

```json
{
  "pager": {
    "page": 1,
    "pageCount": 1,
    "total": 1,
    "pageSize": 50
  },
  "users": [
    {
      "id": "BJmAkJrz62L",
      "displayName": "Latihan Puskesmas",
      "access": {
        "read": true,
        "update": true,
        "externalize": true,
        "delete": true,
        "write": true,
        "manage": true
      },
      "userCredentials": {
        "lastLogin": "2021-08-11T16:59:37.104",
        "disabled": false,
        "twoFA": false,
        "username": "latihan"
      },
      "teiSearchOrganisationUnits": [
        {
          "id": "IU2HDuYpTnY",
          "path": "/AWDfATa8TT1/oF6ONQfGuDe/mvSKjNDpixY/tbCAVLlmXcJ/IU2HDuYpTnY"
        },
        {
          "id": "xlIBXTubNkG",
          "path": "/AWDfATa8TT1/oF6ONQfGuDe/mvSKjNDpixY/tbCAVLlmXcJ/xlIBXTubNkG"
        }
      ]
    }
  ]
}
```

## Attendance Confirmed Case

### Path
```
PUT /api/enrollments/<enrollmentId>/completed
```

### Parameter

| Name           | Type    | Description                  |
| -------------- | ------- | ---------------------------- |
| enrollmentId   | string | enrollment id from enrollment in confirmed cases |

### CURL
```bash
curl --location --request PUT 'https://training-silacak.kemkes.go.id/api/enrollments/w2MAaj5NhAF/completed' \
--header 'Authorization: Basic bGF0aWhhbjpTaWxhY2FrMjAyMSU=' \
--header 'Cookie: BIGipServerpool_silacakprod_training_http=3945834688.47873.0000; SESSION=ODBmNDQ4N2ItOTk0ZC00OWE1LTkxYWEtNDFkN2IyOTU1N2Vk'
```

## Cancelled Confirmed Case

### Path
```
PUT /api/enrollments/<enrollmentId>/cancelled
```

### Parameter

| Name           | Type    | Description                  |
| -------------- | ------- | ---------------------------- |
| enrollmentId   | string | enrollment id from enrollment in confirmed cases |

### CURL
```bash
curl --location --request PUT 'https://training-silacak.kemkes.go.id/api/enrollments/w2MAaj5NhAF/cancelled' \
--header 'Authorization: Basic bGF0aWhhbjpTaWxhY2FrMjAyMSU=' \
--header 'Cookie: BIGipServerpool_silacakprod_training_http=3945834688.47873.0000; SESSION=ODBmNDQ4N2ItOTk0ZC00OWE1LTkxYWEtNDFkN2IyOTU1N2Vk'
```

## List Close Contact Relationship

### CURL
```bash
curl 'https://training-silacak.kemkes.go.id/api/relationships.json?tei=WeIYcNglRWn' \
  -H 'Connection: keep-alive' \
  -H 'Pragma: no-cache' \
  -H 'Cache-Control: no-cache' \
  -H 'sec-ch-ua: "Chromium";v="92", " Not A;Brand";v="99", "Google Chrome";v="92"' \
  -H 'Accept: application/json' \
  -H 'Authorization: Basic bGF0aWhhbjpTaWxhY2FrMjAyMSU=' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36' \
  -H 'Sec-Fetch-Site: same-origin' \
  -H 'Sec-Fetch-Mode: cors' \
  -H 'Sec-Fetch-Dest: empty' \
  -H 'Referer: https://training-silacak.kemkes.go.id/2.7/' \
  -H 'Accept-Language: en-US,en;q=0.9' \
  -H 'Cookie: _ga_3G84467XDE=GS1.1.1627607504.1.1.1627608321.0; _ga=GA1.3.1254493070.1627607505; BIGipServerpool_silacakprod_training_http=3945834688.47873.0000; _gid=GA1.3.105791207.1629721859; SESSION=ZGVkZTZmN2UtMTZiZC00ZTZjLWIyNGQtZmE5ZTY4YTBiZWI0; _gat=1' \
  --compressed
```

## Field

### Sample Field Request
```
?fields=id,displayName,parent,children[id,level,displayName]
?fields=* // all fields
```

### Sample Field Response
```
{
  id: "",
  displayName: "",
  parent: {
    id: ""
  },
  children: {
    id: "",
    level: 0,
    displayName: ""
  }
}
```
### Organization Field

| Name        | Description         |
| ----------- | ------------------- |
| id          | id organization     |
| displayName | organization name   |
| level       | organization hierarchy structure from 1-5 <br> 1: country (ex: indonesia) <br/>2:  province (ex: jawa barat, jawa tengah) <br> 3: district (ex: kota bekasi) <br> 4: sub-district (ex: kec. jatiasih) <br> 5: public health center (ex: PKM jatiasih)|
| path      | all parent id hierarchy |
| parent?      | parent [organization](#organization-field) |
| children?      | child [organization](#organization-field) |


### User Field

| Name                       | Description                      |
| -------------------------- | -------------------------------- |
| name                       | user name                        |
| lastUpdate                 | latest update date               |
| id                         | user Id                          |
| created                    | Created date                     |
| birthday                   | Birthday date                    |
| displayName                | User display name                |
| jobTitle                   | User Job Title                   |
| surname                    | User surname                     |
| whatsApp                   | User Whatsapp number             |
| lastCheckedInterpretations | User Last Checked Interpretation |
| firstname                  | User firstname                   |
| phoneNumber                | User phone number                |
| access                     | User access                      |
| userCredentials            | User credentials                 |
| organisationUnits          | User organization units          |


### Tracked Entity

| Name                  | Description         |
| --------------------- | ------------------  |
| latesUpdate           | latest update date  |
| created               | created date        |
| attributes            | profile information |
