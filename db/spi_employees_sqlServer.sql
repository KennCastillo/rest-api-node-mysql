if exists(select * from sys.objects
		where object_id = OBJECT_ID(N'[dbo].[employeeAddOrEdit]')
		and type in (N'P', N'PC'))

	drop procedure [dbo].employeeAddOrEdit
go

--exec employeeAddOrEdit @id = '0', @name = 'Ramon Can', @salary = '18000'
create procedure [dbo].[employeeAddOrEdit]
@id numeric(18,0) = 0,
@name varchar(50),
@salary varchar(200)

as

if @id = 0 
	begin
		insert into employees (name, salary) values (@name, @salary)
end
else
	begin
	update employees set name = @name, salary = @salary where id = @id
end

select @id AS id