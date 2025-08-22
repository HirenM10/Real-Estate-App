using Microsoft.EntityFrameworkCore;
using Domain.Entities;

namespace Infrastructure.Persistence;

internal class REDbContext(DbContextOptions<REDbContext> options): DbContext(options)
{
    internal DbSet<Property> Properties { get; set; }
    internal DbSet<Space> Spaces { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);
        
        modelBuilder.Entity<Property>(entity =>
        {
            entity.HasKey(p => p.Id);
            entity.Property(p => p.Name).IsRequired().HasMaxLength(200);
            entity.Property(p => p.Type).HasMaxLength(100);
            entity.Property(p => p.Price).HasColumnType("decimal(18,2)");


            entity.HasMany(p => p.Spaces)
                .WithOne(s => s.Property)
                .HasForeignKey(s => s.PropertyId)
                .OnDelete(DeleteBehavior.Cascade);
        });


        modelBuilder.Entity<Space>(entity =>
        {
            entity.HasKey(s => s.Id);
            entity.Property(s => s.Type).HasMaxLength(100);
            entity.Property(s => s.SizeSqFt).HasColumnType("decimal(18,2)");
            entity.Property(s => s.PricePerMonth).HasColumnType("decimal(18,2)");
        });
    }
}
