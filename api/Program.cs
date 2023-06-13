using Microsoft.EntityFrameworkCore;
using Api.Models;




internal class Program
{
    private static void Main(string[] args)
    {


        var builder = WebApplication.CreateBuilder(args);
        var isDev = builder.Environment.IsDevelopment();

        var env = isDev ? Api.Utils.DotEnv.Load("../.env.dev") : Api.Utils.DotEnv.Load("../.env");

        var conn = env["DB_CONNECTION_STRING"] ?? throw new Exception("DB_CONNECTION_STRING is not set");

        builder.Services.AddControllers();
        builder.Services.AddDbContext<ContactContext>(opt =>
        {
            opt.UseMySql(ServerVersion.AutoDetect(conn))
                .LogTo(Console.WriteLine, LogLevel.Information)
                .EnableSensitiveDataLogging()
                .EnableDetailedErrors()
            ;
        });


        builder.Services.AddEndpointsApiExplorer();
        builder.Services.AddSwaggerGen();


        var app = builder.Build();


        if (isDev)
        {
            app.UseSwagger();
            app.UseSwaggerUI();
        }


        app.UseHttpsRedirection();
        app.UseAuthorization();
        app.MapControllers();


        app.Run();
    }
}