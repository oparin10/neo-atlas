using Microsoft.EntityFrameworkCore;


namespace Api.Utils;

public interface IDBContextOptionsConfigurator
{
    void Configure(DbContextOptionsBuilder options, IWebHostEnvironment env);
}
