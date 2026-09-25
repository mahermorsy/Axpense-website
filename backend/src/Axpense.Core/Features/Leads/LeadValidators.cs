using FluentValidation;

namespace Axpense.Core.Features.Leads;

public sealed class SubmitLeadValidator : AbstractValidator<SubmitLeadCommand>
{
    public SubmitLeadValidator()
    {
        RuleFor(x => x.Model.Name).NotEmpty().MaximumLength(200);
        RuleFor(x => x.Model.Company).NotEmpty().MaximumLength(200);
        RuleFor(x => x.Model.Email).NotEmpty().EmailAddress().MaximumLength(200);
        RuleFor(x => x.Model.Phone).MaximumLength(40);
        RuleFor(x => x.Model.CompanySize).MaximumLength(60);
        RuleFor(x => x.Model.AssetCount).InclusiveBetween(0, 1_000_000).When(x => x.Model.AssetCount.HasValue);
        RuleFor(x => x.Model.Industry).MaximumLength(100);
        RuleFor(x => x.Model.Message).MaximumLength(2000);
        RuleFor(x => x.Model.SourcePage).MaximumLength(300);
        RuleFor(x => x.Model.Lang).Must(l => l is null or "en" or "ar").WithMessage("Lang must be 'en' or 'ar'.");
    }
}

public sealed class UpdateLeadValidator : AbstractValidator<UpdateLeadCommand>
{
    public UpdateLeadValidator()
    {
        RuleFor(x => x.Id).NotEmpty();
        RuleFor(x => x.Model).Must(m => m.Status.HasValue || m.OwnerId.HasValue || m.ClearOwner)
            .WithMessage("Nothing to update.");
        RuleFor(x => x.Model.Status).IsInEnum().When(x => x.Model.Status.HasValue);
    }
}

public sealed class AddLeadNoteValidator : AbstractValidator<AddLeadNoteCommand>
{
    public AddLeadNoteValidator()
    {
        RuleFor(x => x.LeadId).NotEmpty();
        RuleFor(x => x.Text).NotEmpty().MaximumLength(2000);
    }
}

public sealed class BulkUpdateLeadsValidator : AbstractValidator<BulkUpdateLeadsCommand>
{
    public BulkUpdateLeadsValidator()
    {
        RuleFor(x => x.Ids).NotEmpty().Must(i => i.Count <= 1000).WithMessage("At most 1000 leads at a time.");
        RuleFor(x => x).Must(x => x.Status.HasValue || x.OwnerId.HasValue).WithMessage("Choose a status or an owner.");
    }
}

public sealed class DeleteLeadsValidator : AbstractValidator<DeleteLeadsCommand>
{
    public DeleteLeadsValidator() => RuleFor(x => x.Ids).NotEmpty().Must(i => i.Count <= 1000);
}
