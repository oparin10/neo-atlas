
using Api.Models;
using Microsoft.EntityFrameworkCore;

namespace Api.Context;

public partial class DashboardContext : BaseDbContext
{
    public DashboardContext(DbContextOptions<BaseDbContext> options) : base(options)
    {
    }

    public DbSet<User> Users { get; set; } = null!;

}