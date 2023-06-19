using Api;

internal class Program
{
    private static void Main(string[] args)
    {

        var builder = WebApplication.CreateBuilder(args);
        var isDev = builder.Environment.IsDevelopment();


        var config = new AppConfiguration(builder);

        config.ConfigureDatabase();
        config.ConfigureServices();


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
