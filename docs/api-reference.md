## Silacak Api Docs

 Base URL : `https://silacak.kemkes.go.id`

## Login

Authorization: Basic base64encode(username:password)

### Check Login Status

This endpoint will return "pong" if user successfully logged

### CURL
```
curl --location --request GET 'https://training-silacak.kemkes.go.id/api/system/ping' \
--header 'Authorization: Basic bGF0aWhhbjpTaWxhY2FrMjAyMSU=' \
--header 'Cookie: BIGipServerpool_silacakprod_training_http=3945834688.47873.0000; SESSION=YmQ5NDY1MTAtN2YxZi00ZDI4LTgyODEtYzVjNzFiYTY3N2Y3'
```

### Example HTTP Request ( GET )

    api/system/ping

## List of Organization Units

### Field

|Name|Description|
|--|--|
|displayName| organization name
|parent| parent data
|id| id of organization
|level| level organization

### Parameter

|Name| Type  | Description|
|--|--|--|
|Paging|boolean| enable / disabled pagination
|Fields|string| select one or more field
|Pagesize|number| total item for each page
|Page|number| request page

### CURL

```
curl --location --request GET 'https://training-silacak.kemkes.go.id/api/organisationUnits?paging=true&fields=displayName,parent,id,level&pageSize=10&page=10' \
--header 'Authorization: Basic bGF0aWhhbjpTaWxhY2FrMjAyMSU='
```

### Example HTTP Request ( GET )

    /api/organisationUnits?paging=true&fields=displayName,parent,id,level&pageSize=10


### Example HTTP Response

```
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
        },
        {
            "level": 3,
            "id": "TYbR3qLC9aX",
            "displayName": "1102 - KAB. ACEH SINGKIL",
            "parent": {
            "id": "nBOW2TBc1mn"
        }
    ]
},
```

## List Puskesmas by City/District Code/Name

### Field

|Name|Description|
|--|--|
|children| Puskesmas Detail
|displayName| City / Distric name

### Children Field

|Name|Description|
|--|--|
|displayName| Puskesmas Name
|parent| parent detail
|id| id puskesmas
|path| -

### Parameter

|Name| Type  | Description|
|--|--|--|
|filter|string| you can filter one of posible field, example : name:like:JAKARTA%20SELATAN
|Fields|string| select one or more field to return possible value
|Pagesize|number| total item for each page
|Page|number| request page

### CURL

```
curl --location --request GET 'https://training-silacak.kemkes.go.id/api/organisationUnits.json?filter=name:like:JAKARTA%20SELATAN&pageSize=10&page=1' \
--header 'Authorization: Basic bGF0aWhhbjpTaWxhY2FrMjAyMSU='
```

### Example HTTP Request ( GET )

    /api/organisationUnits.json?filter=name:like:JAKARTA%20SELATAN&fields=children%5Bid%2CdisplayName%2Cchildren%3A%3AisNotEmpty%2Cpath%2Cparent%5D&pageSize=10&page=1

### Example HTTP Response

```
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
                    },
                  ]
                }
              ]
            }

```
## User List at Puskesmas ( Filter by Puskesmas Name )

### Field

|Name|Description|
|--|--|
|id| Puskesmas Id
|name| Puskesmas Name
|displayName| Puskesmas Display Name
|userCredentials| User Credential Detail

### Parameter

|Name| Type  | Description|
|--|--|--|
|ou":like":< puskesmas name>|string| filter by puskesmas name
|Fields|string| select one or more field to return possible value
|Pagesize|number| total item for each page
|Page|number| request page

### CURL

```
curl --location --request GET 'https://training-silacak.kemkes.go.id/api/users.json?ou":like":padurenan&fields=id,name,displayName,userCredentials&pageSize=1' \
--header 'Authorization: Basic bGF0aWhhbjpTaWxhY2FrMjAyMSU='
```

### Example HTTP Request ( GET )

    /api/users.json?ou":like":padurenan&fields=id,name,displayName,userCredentials

### Example HTTP Response

```
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
            "name": "Aa Sofyan     ",
            "id": "nBq07RtAYVw",
            "displayName": "Aa Sofyan     ",
            "userCredentials": {
                "lastUpdated": "2021-07-30T21:08:24.599",
                "id": "TyupukrqpnZ",
                "created": "2021-07-30T21:08:24.599",
                "name": "Aa Sofyan     ",
                "displayName": "Aa Sofyan     ",
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

### Field

|Name|Description|
|--|--|
|lastUpdate| latest update date
|id| user Id
|created| Created date
|birthday| Birthday date
|displayName| User display name
|jobTitle| User Job Title
|surname| User surname
|whatsApp| User Whatsapp number
|lastCheckedInterpretations| User Last Checked Interpretation
|firstname| User firstname
|phoneNumber| User phone number
|access| User access
|userCredentials| User credentials
|organisationUnits| User organization units
|organisationUnits| User organization units

### Parameter

|Name| Type  | Description|
|--|--|--|
|Fields|string| select one or more field to return possible value

### CURL

```
curl --location --request GET 'https://training-silacak.kemkes.go.id/api/users/BJmAkJrz62L.json?fields=%3Aowner%2Caccess%2CdisplayName%2CuserGroups%2CorganisationUnits%5Bid%2CdisplayName%2Cpath%5D%2CdataViewOrganisationUnits%5Bid%2CdisplayName%2Cpath%5D%2CuserCredentials%5Bid%2Cusername%2ClastLogin%2CexternalAuth%2CuserRoles%5Bid%2CdisplayName%5D%2CcogsDimensionConstraints%5Bid%2CdisplayName%2CdimensionType%5D%2CcatDimensionConstraints%5Bid%2CdisplayName%2CdimensionType%5D%2CopenId%2CldapId%5D%2CteiSearchOrganisationUnits%5Bid%2Cpath%5D%2CwhatsApp%2CfacebookMessenger%2Cskype%2Ctelegram%2Ctwitter' \
--header 'Authorization: Basic bGF0aWhhbjpTaWxhY2FrMjAyMSU='
```

### Example Request ( GET )

    /api/users/BJmAkJrz62L.json?fields=%3Aowner%2Caccess%2CdisplayName%2CuserGroups%2CorganisationUnits%5Bid%2CdisplayName%2Cpath%5D%2CdataViewOrganisationUnits%5Bid%2CdisplayName%2Cpath%5D%2CuserCredentials%5Bid%2Cusername%2ClastLogin%2CexternalAuth%2CuserRoles%5Bid%2CdisplayName%5D%2CcogsDimensionConstraints%5Bid%2CdisplayName%2CdimensionType%5D%2CcatDimensionConstraints%5Bid%2CdisplayName%2CdimensionType%5D%2CopenId%2CldapId%5D%2CteiSearchOrganisationUnits%5Bid%2Cpath%5D%2CwhatsApp%2CfacebookMessenger%2Cskype%2Ctelegram%2Ctwitter

### Example Response

```
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
## List Confirmed Cases

### Field

|Name|Description|
|--|--|
|latesUpdate| latest update date
|created| created date
|trackedEntityInstance| -

### Parameter

|Name| Type  | Description|
|--|--|--|
|Program|string| program id
|Fields|string| select one or more field to return possible value
|ou|string| ou id
|programStatus|string| Program status (ACTIVE, CANCELLED, OPEN, CLOSE)
|programStartDate|string| program start date format yyyy-mm-dd
|order|string| order by fields example : lasUpdated:DESC
|programEndDate|string| program end date format yyyy-mm-dd

### CURL

```
curl --location --request GET 'https://training-silacak.kemkes.go.id/api/trackedEntityInstances.json?program=gZrezya1BvN&fields=trackedEntityInstance,created,lastUpdated&pageSize=1&ou=IU2HDuYpTnY&programStatus=ACTIVE&programStartDate=2021-01-01&order=lastUpdated:DESC&programEndDate=2021-07-31' \
--header 'Authorization: Basic bGF0aWhhbjpTaWxhY2FrMjAyMSU='
```

### Example Request ( GET )

    /api/trackedEntityInstances.json?program=gZrezya1BvN&fields=trackedEntityInstance,created,lastUpdated&pageSize=1000&ou=IU2HDuYpTnY&programStatus=ACTIVE&programStartDate=2021-01-01&order=lastUpdated:DESC&programEndDate=2021-07-31
### Example Response

```
{
    "trackedEntityInstances": [
        {
            "lastUpdated": "2021-04-23T11:29:51.971",
            "created": "2021-02-11T09:56:12.195",
            "trackedEntityInstance": "I9VcnElirev"
        }
    ]
}
```

###  Request for get Close Contact Data List ( GET )

since it using same tracketd entity instance, we can also get close contact data list, but with different params

### CURL

```
curl --location -g --request GET 'https://training-silacak.kemkes.go.id/api/trackedEntityInstances.json?program=QqodHvGgDrq&fields=created,lastUpdated,trackedEntityInstance,attributes[attribute,value],enrollments[program,followup,status]&ou=IU2HDuYpTnY&attribute=GdwLfGObIRT,taFkwTiKFyR,xu1Ukzi0PMJ,fk5drl1hTvc,YlOp8W4FYRH,mHwPpgxFDge&programStatus=ACTIVE&order=lastUpdated:DESC&page=1&pageSize=20&programStartDate=2021-06-26' \
--header 'Authorization: Basic bGF0aWhhbjpTaWxhY2FrMjAyMSU=' \
--header 'Cookie: BIGipServerpool_silacakprod_training_http=3945834688.47873.0000; SESSION=YjlmNjdhOTEtZmE3Ny00NTcxLWExYzYtMTU1OWQ2ODkwY2Fj'
```

### Request (GET)

    /api/trackedEntityInstances.json?program=QqodHvGgDrq&fields=created,lastUpdated,trackedEntityInstance,attributes[attribute,value],enrollments[program,followup,status]&ou=IU2HDuYpTnY&attribute=GdwLfGObIRT,taFkwTiKFyR,xu1Ukzi0PMJ,fk5drl1hTvc,YlOp8W4FYRH,mHwPpgxFDge&programStatus=ACTIVE&order=lastUpdated:DESC&page=1&pageSize=20&programStartDate=2021-06-26

### Response

```
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
## Save Confirmed Case Data

### CURL

```
curl --location --request POST 'https://training-silacak.kemkes.go.id/api/trackedEntityInstances?strategy=CREATE_AND_UPDATE' \
--header 'Authorization: Basic bGF0aWhhbjpTaWxhY2FrMjAyMSU=' \
--header 'Content-Type: application/json' \
--header 'Cookie: BIGipServerpool_silacakprod_training_http=3945834688.47873.0000; SESSION=YjlmNjdhOTEtZmE3Ny00NTcxLWExYzYtMTU1OWQ2ODkwY2Fj' \
--data-raw '{
  "orgUnit": "ISI_DENGAN_Org Unit Id_DIAMBIL DARI LIST PUSKESMAS TERPILIH",
  "trackedEntityType": "bHRcIH36xIk",
  "attributes": [
    { "attribute": "mHwPpgxFDge", "value": "ISI_DENGAN_NIK" },
    { "attribute": "GdwLfGObIRT", "value": "ISI_DENGAN_Nama" },
    { "attribute": "taFkwTiKFyR", "value": "ISI_DENGAN_Jenis Kelamin" },
    { "attribute": "xu1Ukzi0PMJ", "value": "ISI_DENGAN_Tanggal Lahir" },
    { "attribute": "fk5drl1hTvc", "value": "ISI_DENGAN_Usia" },
    { "attribute": "quJD4An7Kmi", "value": "ISI_DENGAN_Alamat KTP" },
    { "attribute": "e25qAod3KTg", "value": "ISI_DENGAN_Alamat Domisili" },
    { "attribute": "YlOp8W4FYRH", "value": "ISI_DENGAN_No Telp"  }
  ],
  "enrollments": [
    {
      "enrollmentdate": "YYYY-MM-DD",
      "incidentDate": "YYYY-MM-DD",
      "orgUnit": "",
      "orgUnitName": "",
      "program": "gZrezya1BvN",
      "events": [
        {
          "orgUnit": "",
          "program": "gZrezya1BvN",
          "programStage": "f4fobgMaOCr",
          "eventDate": "YYYY-MM-DD",
          "dataValues": [
            {
              "dataElement": "A9htpJFLuIr",
              "value": "Kasus Konfirmasi"
            }
          ]
        }
      ]
    }
  ]
}'
```

### Request ( Post )

    /dev/trackedEntityInstances?strategy=CREATE_AND_UPDATE

### Example Request Body

```
{
  orgUnit": ISI_DENGAN_Org Unit Id_DIAMBIL DARI LIST PUSKESMAS TERPILIH,
  trackedEntityType": 'bHRcIH36xIk',
  attributes": [
    { attribute": 'mHwPpgxFDge', value": ISI_DENGAN_NIK },
    { attribute": 'GdwLfGObIRT', value": ISI_DENGAN_Nama },
    { attribute": 'taFkwTiKFyR', value": ISI_DENGAN_Jenis Kelamin,
    { attribute": 'xu1Ukzi0PMJ', value": ISI_DENGAN_Tanggal Lahir },
    { attribute": 'fk5drl1hTvc', value": ISI_DENGAN_Usia },
    { attribute": 'quJD4An7Kmi', value": ISI_DENGAN_Alamat KTP },
    { attribute": 'e25qAod3KTg', value": ISI_DENGAN_Alamat Domisili },
    { attribute": 'YlOp8W4FYRH', value": ISI_DENGAN_No Telp },
  ],
  enrollments": [
{
      enrollmentdate": ISI_DENGAN_Tanggal Pencatatan/ENTRI (YYYY-MM-DD),
      incidentDate": ISI_DENGAN_Tanggal Pelaporan/Hasil (YYYY-MM-DD),
      orgUnit": ISI_DENGAN_Org Unit Id_DIAMBIL DARI LIST PUSKESMAS TERPILIH,
      orgUnitName": ISI_DENGAN_Org Unit Display Name_DIAMBIL DARI LIST PUSKESMAS TERPILIH,
      program": gZrezya1BvN,
      events": [
        {
          orgUnit": ISI_DENGAN_Org Unit Id_DIAMBIL DARI LIST PUSKESMAS TERPILIH,
          program": gZrezya1BvN,
          programStage": f4fobgMaOCr,
          eventDate": ISI_DENGAN_Tanggal Pelaporan/Hasil (YYYY-MM-DD),
          dataValues": [
            {
              dataElement": 'A9htpJFLuIr',
              value": 'Kasus Konfirmasi',
            },
          ],
        },
      ],
    },
  ],
};
```

## Lookup Program ID based on code,name,id

### CURL

```
curl --location --request GET 'https://training-silacak.kemkes.go.id/api/programs.json?paging=false&query=Covid-19 Kasus&fields=id,name,code' \
--header 'Authorization: Basic bGF0aWhhbjpTaWxhY2FrMjAyMSU=' \
--header 'Cookie: BIGipServerpool_silacakprod_training_http=3945834688.47873.0000; SESSION=YmQ5NDY1MTAtN2YxZi00ZDI4LTgyODEtYzVjNzFiYTY3N2Y3'
```

### Request ( GET )

    /api/programs.json?paging=false&query=Covid-19 Kasus&fields=id,name,code

### Example Response

```
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

## Set Completed KE CURL

```
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

## Add Monitoring CURL

```
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

## Check Account Status

### Curl

```
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

### Example Response

```
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


