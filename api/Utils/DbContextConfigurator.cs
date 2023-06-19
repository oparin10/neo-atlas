using Microsoft.EntityFrameworkCore;
using Api.Constants;


namespace Api.Utils;

public class MySQLContextOptionsConfigurator : IDBContextOptionsConfigurator
{

    private static string GetConnectionString(IWebHostEnvironment env)
    {
        IDictionary<string, string> dotenv;

        if (env.IsDevelopment())
        {

            dotenv = DotEnv.Read("../.env.dev");
        }
        else
        {
            dotenv = DotEnv.Read("../.env");
        }


        var _conn = dotenv[DatabaseConstants.ConnectionString] ?? throw new Exception("DB_CONNECTION_STRING is not set");

        return _conn;
    }

    public void Configure(DbContextOptionsBuilder options, IWebHostEnvironment env)
    {
        if (!options.IsConfigured)
        {
            var conn = GetConnectionString(env);

            options.UseMySql(conn, ServerVersion.Parse("11.0.2-mariadb"));
        }
    }
}