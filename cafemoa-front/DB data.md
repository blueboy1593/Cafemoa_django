

# DB.README

sample id 와 password

```json
{
  "role": "HOST",
  "uemail": "kanghyun@naver.com",
  "uid": "kanghyun",
  "uname": "김강현",
  "unickname": "kanghyun",
  "upass": "1234",
  "uphone": "01011112222",
  "upic": "없어"
},
{
  "role": "HOST",
  "uemail": "kanghyun@naver.com",
  "uid": "owner",
  "uname": "김강현",
  "unickname": "kanghyun",
  "upass": "1234",
  "uphone": "01011112222",
  "upic": "없어"
},

eyJ0eXBlIjoiSldUIiwicmVnRGF0ZSI6MTU4MTA1MDE5ODEzNSwiYWxnIjoiSFMyNTYifQ.eyJtZW1iZXIiOnsidWlkIjoia2FuZ2h5dW4iLCJ1bmFtZSI6Iuq5gOqwle2YhCIsInVwaG9uZSI6IjAxMDExMTEyMjIyIiwidWVtYWlsIjoia2FuZ2h5dW5AbmF2ZXIuY29tIiwidW5pY2tuYW1lIjoia2FuZ2h5dW4iLCJyb2xlIjoiSE9TVCIsInVwaWMiOiLsl4bslrQifX0.AK8zBBxOWnnjvai02JaQiMGMP11gh5BSI4RtK6fE1YA


{
  "role": "GUEST",
  "uemail": "dri@naver.com",
  "uid": "sonim",
  "uname": "김강현2",
  "unickname": "ssafy",
  "upass": "1234",
  "uphone": "01011334222",
  "upic": "nop"
},

eyJ0eXBlIjoiSldUIiwicmVnRGF0ZSI6MTU4MDk1ODg3Mzc2NywiYWxnIjoiSFMyNTYifQ.eyJtZW1iZXIiOnsidWlkIjoia2FuZ2h5dW4iLCJ1bmFtZSI6Iuq5gOqwle2YhCIsInVwaG9uZSI6IjAxMDExMTEyMjIyIiwidWVtYWlsIjoia2FuZ2h5dW5AbmF2ZXIuY29tIiwidW5pY2tuYW1lIjoia2FuZ2h5dW4iLCJyb2xlIjoiSE9TVCIsInVwaWMiOiLsl4bslrQifX0.oC_C9Aao5zakY_5ksiZ5UYWmFSQc-2kJFzmPaaHp2hM

0207 로그인 시도
eyJ0eXBlIjoiSldUIiwicmVnRGF0ZSI6MTU4MDc5OTU1Njk2NSwiYWxnIjoiSFMyNTYifQ.eyJtZW1iZXIiOnsidWlkIjoiYWFhIiwidW5hbWUiOiJhYWEiLCJ1cGhvbmUiOiJhYWEiLCJ1ZW1haWwiOiJhYWEiLCJ1bmlja25hbWUiOiJhYWEiLCJyb2xlIjoiSE9TVCIsInVwaWMiOm51bGx9fQ.IvHAH3hBPPhKsmH3duSn2UAZfFpJLpOp8QlaLin-t-Q
```

## cafe 등록 post

```json
{
  "cclose": "1800",
  "cdesc": "description",
  "cloc": "yeoksam",
  "cname": "Hollys",
  "copen": "0900",
  "cphone": "0212451153",
  "cpic": "https://img.tf.co.kr/article/home/2012/12/24/121224_50d7ab07a9b03.jpg"
}
{
  "cclose": "2200",
  "cdesc": "역삼에있어",
  "cloc": "yeoksam",
  "cname": "Twosome Place",
  "copen": "1000",
  "cphone": "0223562153",
  "cpic": "https://www.sommeliertimes.com/news/photo/201905/13255_26597_404.png"
}
{
  "cclose": "2200",
  "cdesc": "강남역",
  "cloc": "강남",
  "cname": "모든요일의카페",
  "copen": "1000",
  "cphone": "025562153",
  "cpic": "https://s3-ap-northeast-1.amazonaws.com/dcreviewsresized/300_300_20190516082436_photo3_7f26b5cf4b00.jpg"
}
```

## 사이즈가 포함된 NEW 메뉴 등록

```json
{
  "menuSizeRequestDtos": [
    {
      "msname": "S",
      "msprice": 1500
    },
 {
      "msname": "M",
      "msprice": 2000
    },
  {
      "msname": "L",
      "msprice": 2500
    }
  ],
  "mname": "아메리카노",
  "mpic": "https://image.istarbucks.co.kr/upload/store/skuimg/2015/08/[110563]_20150813222100303.jpg"
}


{
  "menuSizeRequestDtos": [
    {
      "msname": "S",
      "msprice": 2500
    },
 {
      "msname": "M",
      "msprice": 3000
    },
 {
      "msname": "L",
      "msprice": 3500
    }
  ],
  "mname": "핫초코",
  "mpic": "https://www.kfckorea.com/nas/product/XcMIvGGXjcuM.jpg"
}

{
  "menuSizeRequestDtos": [
    {
      "msname": "S",
      "msprice": 3000
    },
 {
      "msname": "M",
      "msprice": 3500
    },
 {
      "msname": "L",
      "msprice": 4000
    }
  ],
  "mname": "오렌지주스",
  "mpic": "https://sc01.alicdn.com/kf/HTB1WPBcklDH8KJjy1zeq6xjepXav/Fruit-juice-production-line-juice-filling-machine.jpg_350x350.jpg"
}

{
  "menuSizeRequestDtos": [
    {
      "msname": "S",
      "msprice": 2000
    },
 {
      "msname": "M",
      "msprice": 2500
    },
 {
      "msname": "L",
      "msprice": 3000
    }
  ],
  "mname": "카페라떼",
  "mpic": "https://snaptime.edaily.co.kr/wp-content/uploads/2019/07/tyle-hws-01-1562802184-700x700.png"
}
```

## menu 등록 post OLD OLD

```json
{
  "mname": "아메리카노",
  "mpic": "https://image.istarbucks.co.kr/upload/store/skuimg/2015/08/[110563]_20150813222100303.jpg",
  "mprice": "1500"
}
{
  "mname": "핫초코",
  "mpic": "https://www.kfckorea.com/nas/product/XcMIvGGXjcuM.jpg",
  "mprice": "2500"
}
{
  "mname": "오렌지주스",
  "mpic": "https://sc01.alicdn.com/kf/HTB1WPBcklDH8KJjy1zeq6xjepXav/Fruit-juice-production-line-juice-filling-machine.jpg_350x350.jpg",
  "mprice": "3000"
}
{
  "mname": "카페라떼",
  "mpic": "https://snaptime.edaily.co.kr/wp-content/uploads/2019/07/tyle-hws-01-1562802184-700x700.png",
  "mprice": "2000"
}



```

## cafe 등록 post

```json
{
  "cclose": "1800",
  "cdesc": "description",
  "cloc": "yeoksam",
  "cname": "Hollys",
  "copen": "0900",
  "cphone": "0212451153",
  "cpic": "nop"
}
```

## menu 등록 post

```json
{
  "mname": "아메리카노",
  "mpic": "https://image.istarbucks.co.kr/upload/store/skuimg/2015/08/[110563]_20150813222100303.jpg",
  "mprice": "1500"
}
{
  "mname": "핫초코",
  "mpic": "https://www.kfckorea.com/nas/product/XcMIvGGXjcuM.jpg",
  "mprice": "2500"
}
{
  "mname": "오렌지주스",
  "mpic": "https://sc01.alicdn.com/kf/HTB1WPBcklDH8KJjy1zeq6xjepXav/Fruit-juice-production-line-juice-filling-machine.jpg_350x350.jpg",
  "mprice": "3000"
}
```

