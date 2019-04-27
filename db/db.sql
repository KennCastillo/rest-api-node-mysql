create database if not exists abrhil;
use abrhil;

create table employees(
	id int(11) not null auto_increment,
    name varchar(45) default null,
    salary int (11) default null,
    primary key(id)
);

describe employees;

 insert into employees values
	(1, 'Kenny Castillo', 20000),
    (2, 'Jose Colli', 40000),
    (3, 'Yisus Pozos', 50000);

select * from employees;