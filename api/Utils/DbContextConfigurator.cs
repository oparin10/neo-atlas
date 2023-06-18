using Microsoft.EntityFrameworkCore;
using Api.Constants;


namespace Api.Utils;

public class MySQLContextOptionsConfigurator : IDBContextOptionsConfigurator
{

    private static string GetConnectionString()
    {
        var env = DotEnv.Load("../.env.dev");

        var _conn = env[DatabaseConstants.ConnectionString] ?? throw new Exception("DB_CONNECTION_STRING is not set");

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