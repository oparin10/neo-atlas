
using Microsoft.EntityFrameworkCore;

namespace Api.Context;

public partial class AppContext : DbContext
{

    public AppContext(DbContextOptions<AppContext> options) : base(options) { }

}