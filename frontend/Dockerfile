FROM node:16.14.2
WORKDIR /frontend
# COPY front/package.json /frontend/
# COPY front/package-lock.json /frontend/
COPY front /frontend
RUN npm install
EXPOSE 3000
ENV CI=true
# CMD ["/bin/sh"]
CMD npm start 


# commands 
# docker image build -t sample/react:latest .
# docker container run -it -p 3000:3000 --name react sample/react:latest
# -v ${PWD}/front:/frontend/

# kill 
# docker container prune -f
# docker images 
# docker image rmi 