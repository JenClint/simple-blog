# 构建阶段
FROM node:18-alpine as builder

# 设置工作目录
WORKDIR /app

# 设置 node 阿里镜像
RUN npm config set registry https://registry.npmmirror.com

# 复制package.json和package-lock.json
COPY package*.json ./

# 安装依赖
RUN npm ci

# 复制所有文件
COPY . .

# 构建应用
RUN npm run build

# 生产阶段
FROM nginx:stable-alpine

# 从构建阶段复制构建成果到nginx目录
COPY --from=builder /app/dist /usr/share/nginx/html

# 复制自定义nginx配置
COPY nginx.conf /etc/nginx/conf.d/default.conf

# 暴露80端口
EXPOSE 80

# 启动nginx
CMD ["nginx", "-g", "daemon off;"]