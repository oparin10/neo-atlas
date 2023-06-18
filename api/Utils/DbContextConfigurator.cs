using Microsoft.EntityFrameworkCore;


namespace Api.Utils;

interface IDBContextOptionsConfigurator
{
    void Configure(DbContextOptionsBuilder options);
}

public class MySQLContextOptionsConfigurator : IDBContextOptionsConfigurator
{

    private static string GetConnectionString()
    {
        var env = DotEnv.Load("../.env.dev");

        var _conn = env["DB_CONNECTION_STRING"] ?? throw new Exception("DB_CONNECTION_STRING is not set");

        return _conn;
    }

    public void Configure(DbContextOptionsBuilder options)
    {
        if (!options.IsConfigured)
        {
            var conn = GetConnectionString();

            options.UseMySql(conn, ServerVersion.Parse("11.0.2-mariadb"));
        }
    }
}