# Express JWT authentication using Prisma

You can check the blog post [here](https://dev.to/mihaiandrei97/jwt-authentication-using-prisma-and-express-37nk).

## Setup

```
npm install
npx prisma migrate deploy
```

## Lint

```
npm run lint
```

## Test

```
npm run test
```

## Development

```
npm run dev
```

|방식|주소|설명|
|------|---|---|
|POST| <http://localhost:5000/api/v1/auth/register> |{"email": "ruto833@naver.com", "password": "ruto833"}|
|POST| <http://localhost:5000/api/v1/auth/login> | {"email": "ruto833@naver.com", "password": "ruto833"}|
|GET| <http://localhost:5000/api/v1/users/profile> | Headers: {Authorization : Bearer {{access_token}}} |
|POST| <http://localhost:5000/api/v1/auth/refreshToken> | {"refreshToken" : ""} |
