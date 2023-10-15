-- Create the database
CREATE DATABASE IF NOT EXISTS test;

-- Create a user and grant privileges
CREATE USER 'user'@'%' IDENTIFIED BY 'root';
GRANT ALL PRIVILEGES ON test.* TO 'user'@'%';


      mysql -u root -p -e "USE test ; CREATE TABLE forfait (
  id int NOT NULL AUTO_INCREMENT,
  cout_appel_international double DEFAULT NULL,
  cout_appel_offnet double DEFAULT NULL,
  cout_appel_onnet double DEFAULT NULL,
  cout_sms_international double DEFAULT NULL,
  cout_sms_national double DEFAULT NULL,
  id_date varchar(255) DEFAULT NULL,
  idclient varchar(255) DEFAULT NULL,
  total_appel_inter int DEFAULT NULL,
  total_appel_offnet int DEFAULT NULL,
  total_appel_on_net int DEFAULT NULL,
  total_data double DEFAULT NULL,
  total_sms_inter int DEFAULT NULL,
  total_sms_local int DEFAULT NULL,
  PRIMARY KEY (id)
);"
