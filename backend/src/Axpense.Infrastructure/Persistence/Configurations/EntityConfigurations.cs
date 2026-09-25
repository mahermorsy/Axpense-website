using Axpense.Domain.Common;
using Axpense.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Axpense.Infrastructure.Persistence.Configurations;

internal static class AuditColumns
{
    public static void Configure<T>(EntityTypeBuilder<T> b) where T : BaseEntity
    {
        b.HasKey(e => e.Id);
        b.Property(e => e.Id).ValueGeneratedNever();
        b.Property(e => e.CreatedBy).HasMaxLength(120);
        b.Property(e => e.UpdatedBy).HasMaxLength(120);
        b.HasIndex(e => e.IsDeleted);
    }
}

public sealed class LeadConfiguration : IEntityTypeConfiguration<Lead>
{
    public void Configure(EntityTypeBuilder<Lead> b)
    {
        b.ToTable("Leads");
        AuditColumns.Configure(b);
        b.Property(l => l.Name).HasMaxLength(200).IsRequired();
        b.Property(l => l.Company).HasMaxLength(200).IsRequired();
        b.Property(l => l.Email).HasMaxLength(200).IsRequired();
        b.Property(l => l.Phone).HasMaxLength(40);
        b.Property(l => l.CompanySize).HasMaxLength(60);
        b.Property(l => l.Industry).HasMaxLength(100).IsRequired();
        b.Property(l => l.Country).HasMaxLength(80).IsRequired();
        b.Property(l => l.Message).HasMaxLength(2000);
        b.Property(l => l.SourcePage).HasMaxLength(300).IsRequired();
        b.Property(l => l.Channel).HasConversion<string>().HasMaxLength(20);
        b.Property(l => l.Language).HasConversion<string>().HasMaxLength(5);
        b.Property(l => l.Status).HasConversion<string>().HasMaxLength(20);
        b.HasIndex(l => l.CreatedAt);
        b.HasIndex(l => l.Status);
        b.HasIndex(l => l.Country);
        b.HasIndex(l => l.OwnerId);
        b.HasIndex(l => l.Email);
        b.HasMany(l => l.Notes).WithOne(n => n.Lead).HasForeignKey(n => n.LeadId).OnDelete(DeleteBehavior.Cascade);
    }
}

public sealed class LeadNoteConfiguration : IEntityTypeConfiguration<LeadNote>
{
    public void Configure(EntityTypeBuilder<LeadNote> b)
    {
        b.ToTable("LeadNotes");
        AuditColumns.Configure(b);
        b.Property(n => n.Text).HasMaxLength(2000).IsRequired();
        b.Property(n => n.AuthorName).HasMaxLength(120).IsRequired();
        b.HasIndex(n => n.LeadId);
    }
}

public sealed class BlogPostConfiguration : IEntityTypeConfiguration<BlogPost>
{
    public void Configure(EntityTypeBuilder<BlogPost> b)
    {
        b.ToTable("BlogPosts");
        AuditColumns.Configure(b);
        b.Property(p => p.Slug).HasMaxLength(200).IsRequired();
        b.Property(p => p.Title).HasMaxLength(200).IsRequired();
        b.Property(p => p.Excerpt).HasMaxLength(300).IsRequired();
        b.Property(p => p.Category).HasMaxLength(100).IsRequired();
        b.Property(p => p.SeoTitle).HasMaxLength(70);
        b.Property(p => p.SeoDescription).HasMaxLength(170);
        b.Property(p => p.Status).HasConversion<string>().HasMaxLength(20);
        b.Property(p => p.Language).HasConversion<string>().HasMaxLength(5);
        b.HasIndex(p => new { p.Slug, p.Language }).IsUnique().HasFilter("[IsDeleted] = 0");
        b.HasIndex(p => new { p.Status, p.Language, p.PublishedAt });
        // Article body lives in one nvarchar(max) JSON column.
        b.OwnsMany(p => p.Sections, s => s.ToJson());
    }
}

public sealed class FaqConfiguration : IEntityTypeConfiguration<Faq>
{
    public void Configure(EntityTypeBuilder<Faq> b)
    {
        b.ToTable("Faqs");
        AuditColumns.Configure(b);
        b.Property(f => f.Page).HasMaxLength(50).IsRequired();
        b.Property(f => f.Language).HasConversion<string>().HasMaxLength(5);
        b.Property(f => f.Question).HasMaxLength(300).IsRequired();
        b.Property(f => f.Answer).HasMaxLength(2000).IsRequired();
        b.HasIndex(f => new { f.Page, f.Language, f.SortOrder });
    }
}
