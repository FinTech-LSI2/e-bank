FROM mysql:8.0.33


ENV MYSQL_ROOT_PASSWORD="root"
ENV MYSQL_DATABASE="client-service"
ENV MYSQL_USER="root"
ENV MYSQL_PASSWORD="root"


ADD backup.sql docker-entrypoint-initdb.d/db_backup.sql