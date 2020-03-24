# node-auth

Authentication boilerplate in Node.js with security and scalability in mind.

## Features

- [ ] login/logout/register + session expiry
- [ ] email verification (`"Confirm your email"`)
- [ ] password reset (`"Forgot password"`)
- [ ] password confirmation (`"Re-enter your password"`)
- [ ] persistent login (`"Remember me"`)
- [ ] account lockout (`"Too many failed login attempts"`)
- [ ] rate limiting (`"Too many requests"`)

## Prerequisites

- `node` and `npm` (e.g. using `nvm`)
- `docker` and `docker-compose`
  - could also use a local `mongodb-org` and `redis-server`
  - otherwise, a remote service e.g. Atlas/mLab and Redis Labs

## Setup

```sh
# (Linux) Must export UID to have the right permissions
export UID

# Boot MongoDB & Redis containers, and launch a local Express server
npm run up
```

## API

Method    | URI               | Middleware
:-------- | :---------------- | :---------
POST      | /register         | guest
POST      | /login            | guest
POST      | /logout           | auth
GET\|HEAD | /home             | auth
POST      | /email/verify     |
POST      | /email/resend     |
POST      | /password/email   |
POST      | /password/reset   |
POST      | /password/confirm | auth
