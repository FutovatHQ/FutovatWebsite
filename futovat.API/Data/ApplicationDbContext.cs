using Futovat.API.Entities;
using Microsoft.EntityFrameworkCore;

namespace Futovat.API.Data;

public class ApplicationDbContext : DbContext
{
    public ApplicationDbContext(
        DbContextOptions<ApplicationDbContext> options)
        : base(options)
    {
    }

    public DbSet<Contact> Contacts => Set<Contact>();
    public DbSet<Admin> Admins => Set<Admin>();
}