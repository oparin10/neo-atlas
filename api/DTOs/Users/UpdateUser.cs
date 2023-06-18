using System.ComponentModel.DataAnnotations;

namespace Api.DTOs.Users;

public record UpdateUser
{
    [Required(ErrorMessage = "User ID is required")]
    public readonly long Id;

    [Required(ErrorMessage = "Username is required")]
    public readonly string Username;

    [Required(ErrorMessage = "Password is required")]
    [MinLength(8, ErrorMessage = "Password must be at least 8 characters long")]
    public readonly string Password;


    [Required(ErrorMessage = "Email is required")]
    [EmailAddress(ErrorMessage = "Email is not valid")]
    public readonly string Email;


    public UpdateUser(long id, string username, string password, string email)
    {
        Id = id;
        Username = username;
        Password = password;
        Email = email;
    }
}
