/*SqlServer2014*/


 CREATE  DATABASE crudDbDadosImg;
 GO
USE  crudDbDadosImg;
GO

CREATE TABLE tbDadosImg(
	idDadosImg int IDENTITY NOT NULL,
	fileSizeBytes varchar(30) NOT NULL,
	url varchar(500) NOT NULL,
	descricao varchar(500) NOT NULL
	);

	insert into tbDadosImg(fileSizeBytes,url,descricao) values ('1203695','<a href="' + 'https://random.dog/dad83196-5fb3-4a1f-8490-8262a2792d69.png' + '">' + 'acessar'+ '</a>','descrição1');
	insert into tbDadosImg(fileSizeBytes,url,descricao) values ('21045','<a href="' + 'https://random.dog/813c353e-7c6b-45d9-a756-af99878133d7.jpg' + '">' + 'acessar'+ '</a>','descrição2');
	insert into tbDadosImg(fileSizeBytes,url,descricao) values ('44761','<a href="' + 'https://random.dog/a3be892d-c184-4722-99ab-3478e6d2cee4.jpg' + '">' + 'acessar'+ '</a>','descrição3');

select * from tbDadosImg;


