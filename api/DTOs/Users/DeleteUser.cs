using System.ComponentModel.DataAnnotations;

namespace Api.DTOs.Users;


public record DeleteUser
{
    [Required(ErrorMessage = "User ID is required")]
    public long Id { get; }

    public DeleteUser(long id)
    {
        Id = id;
    }
}
