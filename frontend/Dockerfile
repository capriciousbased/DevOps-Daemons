#get the latest alpine image from node registry
FROM node:alpine AS build-stage

#set the working directory
WORKDIR /app

#copy the package and package lock files
#from local to container work directory /app
COPY package*.json /app/

# install the development dependencies (including the testing
# framework and any other testing-related packages).
# RUN npm install --only=dev


# add the node_modules folder to $PATH
ENV PATH /app/node_modules/.bin:$PATH

#Run command npm install to install packages
RUN npm install

#copy all the folder contents from local to container
COPY . .

# command runs the unit tests as part of the build process
# RUN npm run test

#create a react production build
RUN npm run build

#get the latest alpine image from nginx registry
FROM nginx:alpine

#we copy the output from first stage that is our react build
#into nginx html directory where it will serve our index file
COPY --from=build /app/build/ /usr/share/nginx/html

# needed this to make React Router work properly 
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d

# start the nginx web server

CMD ["nginx", "-g", "daemon off;"]

# Expose port 80 for HTTP Traffic 
EXPOSE 80
