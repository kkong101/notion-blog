# 1. 베이스 이미지 설정
FROM node:20-alpine

# 2. 작업 디렉토리 생성 및 설정
WORKDIR /app

# 3. 의존성 파일 복사
COPY package.json yarn.lock ./

# 4. 의존성 설치
RUN yarn install --frozen-lockfile

# 5. 애플리케이션 소스 복사
COPY . .

# 6. Next.js 애플리케이션 빌드
RUN yarn build

# 7. 포트 설정
EXPOSE 3000

# 8. 애플리케이션 실행
CMD ["yarn", "start"]
