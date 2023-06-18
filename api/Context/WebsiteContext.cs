using Api.Models;
using Microsoft.EntityFrameworkCore;


namespace Api.Context;

public partial class WebsiteContext : BaseDbContext
{

    public WebsiteContext(DbContextOptions<WebsiteContext> options) : base(options) { }

    public DbSet<ContactItem> Contacts { get; set; } = null!;
}