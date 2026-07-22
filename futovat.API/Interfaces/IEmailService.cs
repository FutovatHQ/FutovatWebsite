namespace Futovat.API.Interfaces;

public interface IEmailService
{
    Task SendContactEmailAsync(
        string name,
        string email,
        string company,
        string service,
        string message);
}