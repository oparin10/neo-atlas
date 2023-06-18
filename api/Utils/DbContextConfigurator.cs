using Microsoft.EntityFrameworkCore;


namespace Api.Utils;

public static class DbContextConfigurator
{

    public static void Configure(DbContextOptionsBuilder options)
    {
        if (!options.IsConfigured)
        {
            options.UseMySql("server=localhost;user=root;password=root;database=db", ServerVersion.Parse("11.0.2-mariadb"));
        }
    }
}