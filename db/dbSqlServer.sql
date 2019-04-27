IF NOT EXISTS(SELECT TABLE_NAME FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_NAME = 'employees')

BEGIN
	
	CREATE TABLE [employees]
	(
	 [id] Numeric(18,0) IDENTITY(1,1) NOT NULL,
	 [name] varchar(100) NOT NULL,
	 [salary] numeric (11) NOT NULL
	)

	ALTER TABLE [employees] ADD CONSTRAINT [keyEmployeesId] PRIMARY KEY ([id])

END
go