using System.ComponentModel.DataAnnotations;

namespace Futovat.API.DTOs;

public class ContactRequest
{
    [Required]
    [StringLength(100)]
    public string Name { get; set; } = string.Empty;

    [Required]
    [EmailAddress]
    public string Email { get; set; } = string.Empty;

    [StringLength(100)]
    public string Company { get; set; } = string.Empty;

    [Required]
    public string Service { get; set; } = string.Empty;

    [Required]
    [StringLength(1000)]
    public string Message { get; set; } = string.Empty;
}