using System.ComponentModel.DataAnnotations;

namespace Api.DTOs.Users;

public record CreateUser
{
    [Required(ErrorMessage = "Username is required")]
    public readonly string Username;

    [Required(ErrorMessage = "Password is required")]
    [MinLength(8, ErrorMessage = "Password must be at least 8 characters long")]
    public readonly string Password;


    [Required(ErrorMessage = "Email is required")]
    [EmailAddress(ErrorMessage = "Email is not valid")]
    public readonly string Email;

    public CreateUser(string username, string password, string email)
    {
        Username = username;
        Password = password;
        Email = email;
    }
}