|방식|주소|설명|
|------|---|---|
|POST| <http://localhost:5000/api/v1/auth/register> |{"email": "ruto833@naver.com", "password": "ruto833"}|
|POST| <http://localhost:5000/api/v1/auth/login> | {"email": "ruto833@naver.com", "password": "ruto833"}|
|GET| <http://localhost:5000/api/v1/users/profile> | Headers: {Authorization : Bearer {{access_token}}} |
|POST| <http://localhost:5000/api/v1/auth/refreshToken> | {"refreshToken" : ""} |
