using Microsoft.EntityFrameworkCore;
using Api.Models;
using Api.Services;

namespace Api;

public class AppConfiguration
{
    private readonly WebApplicationBuilder _builder;

    public AppConfiguration(WebApplicationBuilder builder)
    {
        _builder = builder;
    }

    public void ConfigureServices()
    {
        _builder.Services.AddControllers();
        _builder.Services.AddScoped<IContactService, ContactService>();
        _builder.Services.AddEndpointsApiExplorer();
        _builder.Services.AddSwaggerGen();
    }


    public void ConfigureDatabase()
    {
        var conn = GetConnectionString();

        _builder.Services.AddDbContext<ContactContext>(opt =>
        {
            opt.UseMySql(ServerVersion.AutoDetect(conn))
                .LogTo(Console.WriteLine, LogLevel.Information)
                .EnableSensitiveDataLogging()
                .EnableDetailedErrors()
            ;
        });
    }

    private bool IsDev()
    {
        return _builder.Environment.IsDevelopment();
    }

    private string GetConnectionString()
    {
        var env = IsDev() ? Utils.DotEnv.Load("../.env.dev") : Utils.DotEnv.Load("../.env");

        var _conn = env["DB_CONNECTION_STRING"] ?? throw new Exception("DB_CONNECTION_STRING is not set");

        return _conn;
    }
}