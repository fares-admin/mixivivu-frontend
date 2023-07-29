FROM node:lts as dependencies
WORKDIR /mixivivu-frontend
COPY package.json ./
RUN yarn install --frozen-lockfile

FROM node:lts as builder
WORKDIR /mixivivu-frontend
COPY . .
COPY --from=dependencies /mixivivu-frontend/node_modules ./node_modules
RUN yarn build

FROM node:lts as runner
WORKDIR /mixivivu-frontend
ENV NODE_ENV production
# If you are using a custom next.config.js file, uncomment this line.
COPY --from=builder /mixivivu-frontend/next.config.js ./
COPY --from=builder /mixivivu-frontend/public ./public
COPY --from=builder /mixivivu-frontend/.next ./.next
COPY --from=builder /mixivivu-frontend/node_modules ./node_modules
COPY --from=builder /mixivivu-frontend/package.json ./package.json

EXPOSE 3000
CMD ["yarn", "start"]