
using Api.Utils;
using Microsoft.EntityFrameworkCore;

namespace Api.Context;

public abstract partial class BaseDbContext : DbContext
{
    private readonly IWebHostEnvironment _env = null!;

    public BaseDbContext(DbContextOptions<BaseDbContext> options, IWebHostEnvironment env) : base(options)
    {
        _env = env;
    }

    // https://github.com/dotnet/efcore/issues/7533#issuecomment-353669263
    protected BaseDbContext(DbContextOptions options) : base(options)
    {
    }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        if (!optionsBuilder.IsConfigured)
        {
            var configurator = new MySQLContextOptionsConfigurator();

            configurator.Configure(optionsBuilder, _env);
        }
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