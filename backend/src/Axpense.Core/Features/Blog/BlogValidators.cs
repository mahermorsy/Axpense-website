using FluentValidation;
using Axpense.Domain.Enums;

namespace Axpense.Core.Features.Blog;

public sealed class BlogPostModelValidator : AbstractValidator<BlogPostModel>
{
    public BlogPostModelValidator()
    {
        RuleFor(x => x.Title).NotEmpty().MaximumLength(200);
        RuleFor(x => x.Slug).NotEmpty().MaximumLength(200)
            .Must(s => BlogMappings.Slugify(s ?? string.Empty).Length > 0).WithMessage("The URL slug must contain letters or numbers.");
        RuleFor(x => x.Category).NotEmpty().MaximumLength(100);
        RuleFor(x => x.Excerpt).MaximumLength(300);
        RuleFor(x => x.Excerpt).NotEmpty().When(x => x.Status == PostStatus.Published).WithMessage("Add an excerpt before publishing.");
        RuleFor(x => x.Status).IsInEnum();
        RuleFor(x => x.Language).IsInEnum();
        RuleFor(x => x.SeoTitle).MaximumLength(70);
        RuleFor(x => x.SeoDescription).MaximumLength(170);
        RuleFor(x => x.Sections).NotNull().Must(s => s.Count <= 50).WithMessage("At most 50 sections.");
        RuleForEach(x => x.Sections).ChildRules(s =>
        {
            s.RuleFor(x => x.Heading).MaximumLength(200);
            s.RuleFor(x => x.Body).MaximumLength(20_000);
        });
    }
}

public sealed class CreatePostValidator : AbstractValidator<CreatePostCommand>
{
    public CreatePostValidator() => RuleFor(x => x.Model).NotNull().SetValidator(new BlogPostModelValidator());
}

public sealed class UpdatePostValidator : AbstractValidator<UpdatePostCommand>
{
    public UpdatePostValidator()
    {
        RuleFor(x => x.Id).NotEmpty();
        RuleFor(x => x.Model).NotNull().SetValidator(new BlogPostModelValidator());
    }
}
