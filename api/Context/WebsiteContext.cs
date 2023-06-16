using Api.Models;
using Microsoft.EntityFrameworkCore;


namespace Api.Context;

public partial class WebsiteContext : DbContext
{

    public WebsiteContext(DbContextOptions<WebsiteContext> options) : base(options) { }


    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        => optionsBuilder.UseMySql("server=localhost;user=root;password=root;database=db", ServerVersion.Parse("11.0.2-mariadb"));

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder
            .UseCollation("utf8mb4_general_ci")
            .HasCharSet("utf8mb4");

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);

    public DbSet<ContactItem> Contacts { get; set; } = null!;
}