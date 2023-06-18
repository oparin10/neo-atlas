
using Api.Utils;
using Microsoft.EntityFrameworkCore;

namespace Api.Context;

public abstract partial class BaseDbContext : DbContext
{
    private readonly IDBContextOptionsConfigurator Configurator = new MySQLContextOptionsConfigurator();

    public BaseDbContext(DbContextOptions<BaseDbContext> options, IDBContextOptionsConfigurator configurator) : base(options)
    {
        Configurator = configurator;
    }

    // https://github.com/dotnet/efcore/issues/7533#issuecomment-353669263
    protected BaseDbContext(DbContextOptions options) : base(options)
    {
    }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        Configurator.Configure(optionsBuilder);
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder
            .UseCollation("utf8mb4_general_ci")
            .HasCharSet("utf8mb4");

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);

}