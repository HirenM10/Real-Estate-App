using FluentValidation;
using Application.Dtos;

namespace Application.Validators;

public class CreatePropertyDtoValidator : AbstractValidator<CreatePropertyDto>
{
    public CreatePropertyDtoValidator()
    {
        RuleFor(dto => dto.Name)
            .Length(3, 200);
    }
}
